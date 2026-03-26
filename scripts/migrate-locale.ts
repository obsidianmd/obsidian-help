#!/usr/bin/env tsx
/**
 * migrate-locale.ts
 * Generic backward-compat redirect alias migration for any locale.
 *
 * Usage:
 *   npx tsx scripts/migrate-locale.ts <locale> [--apply] [--commit <sha>]
 *
 * What it does:
 *   1. Finds the git commit just before <locale>/filenames.txt was first added
 *      (override with --commit <sha>)
 *   2. Lists all old .md file paths from that commit
 *   3. Fuzzy-matches each old path to an EN permalink by filename similarity
 *   4. Prints proposed mappings grouped by confidence
 *   5. With --apply: writes aliases to the current locale files
 *
 * Overrides:
 *   Create <locale>/migration-map.json before running:
 *   {
 *     "Old/Path without extension": "en-permalink",
 *     ...
 *   }
 *   These take precedence over fuzzy matching. Paths not in this file
 *   fall back to fuzzy matching. Set a permalink to null to skip a path.
 *
 * Tips:
 *   - Run without --apply first and review uncertain/unmatched entries
 *   - For non-Latin scripts, provide a migration-map.json with all overrides
 *   - Confident matches (score ≥ 0.35) are applied automatically
 *   - Uncertain matches (score < 0.35) are listed but skipped unless overridden
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");

// ─── Args ─────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const locale = args[0];
const apply = args.includes("--apply");
const commitArgIdx = args.indexOf("--commit");
const commitOverride = commitArgIdx !== -1 ? args[commitArgIdx + 1] : null;

if (!locale) {
  console.error("Usage: npx tsx scripts/migrate-locale.ts <locale> [--apply] [--commit <sha>]");
  process.exit(1);
}

const localeDir = path.join(ROOT, locale);
if (!fs.existsSync(localeDir)) {
  console.error(`Locale directory not found: ${localeDir}`);
  process.exit(1);
}

// ─── Overrides ────────────────────────────────────────────────────────────────

const overridesPath = path.join(localeDir, "migration-map.json");
const overrides: Record<string, string | null> = fs.existsSync(overridesPath)
  ? JSON.parse(fs.readFileSync(overridesPath, "utf8"))
  : {};

if (Object.keys(overrides).length > 0) {
  console.log(`Loaded ${Object.keys(overrides).length} overrides from migration-map.json`);
}

// ─── Fuzzy matching helpers ───────────────────────────────────────────────────

function normalize(s: string): string {
  return s
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .toLowerCase()
    .replace(/[-_']/g, " ")
    .replace(/[^a-z0-9 ]/g, "")
    .trim();
}

function tokenize(s: string): string[] {
  return normalize(s).split(/\s+/).filter(t => t.length > 1);
}

// Noise tokens that add no signal
const NOISE = new Set(["the", "a", "an", "and", "or", "of", "to", "in",
  "for", "on", "with", "your", "how", "use", "using"]);

function tokenSet(tokens: string[]): Set<string> {
  return new Set(tokens.filter(t => !NOISE.has(t)));
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter++;
  return inter / (a.size + b.size - inter);
}

// ─── Find old commit ──────────────────────────────────────────────────────────

function findOldCommit(): string {
  if (commitOverride) return commitOverride;

  // Find the first commit that added <locale>/filenames.txt
  const out = execSync(
    `git log --diff-filter=A --format="%H" -- "${locale}/filenames.txt"`,
    { cwd: ROOT }
  ).toString().trim();

  if (!out) {
    console.error(`Could not find the commit that added ${locale}/filenames.txt.`);
    console.error("Use --commit <sha> to specify the pre-migration commit manually.");
    process.exit(1);
  }

  // Parent of that commit is the old state
  const firstAdded = out.split("\n").pop()!.trim();
  try {
    return execSync(`git rev-parse ${firstAdded}~1`, { cwd: ROOT }).toString().trim();
  } catch {
    console.error(`Could not resolve parent of ${firstAdded}. Use --commit <sha>.`);
    process.exit(1);
  }
}

// ─── Collect old paths from git ───────────────────────────────────────────────

function getOldPaths(commit: string): string[] {
  const out = execSync(
    `git -c core.quotepath=false ls-tree -r --name-only ${commit} -- "${locale}/"`,
    { cwd: ROOT }
  ).toString().trim();

  if (!out) return [];

  return out.split("\n")
    .filter(p => p.endsWith(".md"))
    .map(p => p.replace(/^[^/]+\//, "").replace(/\.md$/, "")); // strip locale/ prefix and .md
}

// ─── Collect EN files ─────────────────────────────────────────────────────────

interface EnFile {
  permalink: string;
  basename: string;
  h1: string;
}

function collectEn(): EnFile[] {
  const results: EnFile[] = [];
  const enDir = path.join(ROOT, "en");

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { walk(full); continue; }
      if (!entry.name.endsWith(".md")) continue;
      const raw = fs.readFileSync(full, "utf8");
      const parsed = matter(raw);
      const permalink = parsed.data?.permalink as string | undefined;
      if (!permalink) continue;
      const h1 = parsed.content.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? "";
      results.push({ permalink, basename: entry.name.replace(/\.md$/, ""), h1 });
    }
  }

  walk(enDir);
  return results;
}

// ─── Collect new locale files by permalink ────────────────────────────────────

interface LocaleFile {
  absPath: string;
  permalink: string;
  frontmatter: Record<string, unknown>;
  content: string;
}

function collectLocale(): Map<string, LocaleFile> {
  const byPermalink = new Map<string, LocaleFile>();

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { walk(full); continue; }
      if (!entry.name.endsWith(".md")) continue;
      const raw = fs.readFileSync(full, "utf8");
      const parsed = matter(raw);
      const permalink = parsed.data?.permalink as string | undefined;
      if (!permalink) continue;
      byPermalink.set(permalink, {
        absPath: full,
        permalink,
        frontmatter: parsed.data as Record<string, unknown>,
        content: parsed.content,
      });
    }
  }

  walk(localeDir);
  return byPermalink;
}

// ─── Matching ─────────────────────────────────────────────────────────────────

const CONFIDENT_THRESHOLD = 0.35;

interface Match {
  oldPath: string;
  permalink: string | null;
  score: number;
  source: "override" | "exact" | "fuzzy";
}

function findMatch(oldPath: string, enFiles: EnFile[]): Match {
  // 1. Explicit override
  if (oldPath in overrides) {
    return { oldPath, permalink: overrides[oldPath], score: 1.0, source: "override" };
  }

  const oldBasename = path.basename(oldPath);

  // 2. Exact EN basename match (e.g. "Backlinks" → plugins/backlinks)
  const exactMatch = enFiles.find(e =>
    normalize(e.basename) === normalize(oldBasename)
  );
  if (exactMatch) {
    return { oldPath, permalink: exactMatch.permalink, score: 1.0, source: "exact" };
  }

  // 3. Fuzzy match on basename tokens + h1 tokens
  const oldTokens = tokenSet(tokenize(oldBasename));
  // Also include folder tokens as weak signal
  const oldFolderTokens = tokenSet(tokenize(oldPath.replace(/\/[^/]+$/, "")));

  let best: EnFile | null = null;
  let bestScore = 0;

  for (const en of enFiles) {
    const enNameTokens = tokenSet(tokenize(en.basename));
    const enH1Tokens = tokenSet(tokenize(en.h1));

    const nameScore = jaccard(oldTokens, enNameTokens);
    const h1Score = enH1Tokens.size > 0 ? jaccard(oldTokens, enH1Tokens) : 0;
    const folderBoost = oldFolderTokens.size > 0
      ? jaccard(oldFolderTokens, enNameTokens) * 0.1
      : 0;

    const score = nameScore * 0.65 + h1Score * 0.25 + folderBoost;

    if (score > bestScore) {
      bestScore = score;
      best = en;
    }
  }

  return {
    oldPath,
    permalink: best?.permalink ?? null,
    score: bestScore,
    source: "fuzzy",
  };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const oldCommit = findOldCommit();
const oldPaths = getOldPaths(oldCommit);
const enFiles = collectEn();
const localeFiles = collectLocale();

console.log(`Old commit: ${oldCommit}`);
console.log(`Old paths:  ${oldPaths.length}`);
console.log(`EN files:   ${enFiles.length}`);
console.log(`Locale files: ${localeFiles.size}\n`);

if (oldPaths.length === 0) {
  console.log("No old paths found. Nothing to migrate.");
  process.exit(0);
}

const matches = oldPaths.map(p => findMatch(p, enFiles));

// Group: override/exact, confident fuzzy, uncertain, no match
const exact     = matches.filter(m => m.source !== "fuzzy");
const confident = matches.filter(m => m.source === "fuzzy" && m.score >= CONFIDENT_THRESHOLD);
const uncertain = matches.filter(m => m.source === "fuzzy" && m.score > 0 && m.score < CONFIDENT_THRESHOLD);
const unmatched = matches.filter(m => m.permalink === null || m.score === 0);

// Group by target permalink for display
function printGroup(label: string, group: Match[]) {
  if (group.length === 0) return;
  console.log(`\n── ${label} (${group.length}) ──`);
  const byTarget = new Map<string | null, Match[]>();
  for (const m of group) {
    const key = m.permalink;
    byTarget.set(key, [...(byTarget.get(key) ?? []), m]);
  }
  for (const [permalink, ms] of [...byTarget.entries()].sort()) {
    const localeFile = permalink ? localeFiles.get(permalink) : null;
    const localeRel = localeFile ? path.relative(localeDir, localeFile.absPath) : "(not found)";
    console.log(`  → "${permalink}"  [${localeRel}]`);
    for (const m of ms) {
      const scoreStr = m.source === "fuzzy" ? `  ${(m.score * 100).toFixed(0)}%` : `  ${m.source}`;
      console.log(`      "${m.oldPath}"${scoreStr}`);
    }
  }
}

printGroup("Overrides + exact matches", exact);
printGroup("Confident fuzzy matches", confident);
printGroup("Uncertain (review before --apply)", uncertain);
if (unmatched.length > 0) {
  console.log(`\n── Unmatched (${unmatched.length}) — add to migration-map.json ──`);
  for (const m of unmatched) console.log(`  "${m.oldPath}"`);
}

const toApply = [...exact, ...confident].filter(m => m.permalink !== null);
console.log(`\nWill alias: ${toApply.length} paths`);
if (uncertain.length > 0)
  console.log(`Skipping ${uncertain.length} uncertain — add to ${locale}/migration-map.json to include`);

if (!apply) {
  console.log("\n[DRY RUN] Run with --apply to write aliases.");
  process.exit(0);
}

// ─── Apply ────────────────────────────────────────────────────────────────────

// Group aliases by target permalink
const aliasByPermalink = new Map<string, string[]>();
for (const m of toApply) {
  const list = aliasByPermalink.get(m.permalink!) ?? [];
  list.push(m.oldPath);
  aliasByPermalink.set(m.permalink!, list);
}

let applied = 0;
let skipped = 0;

for (const [permalink, newAliases] of aliasByPermalink) {
  const localeFile = localeFiles.get(permalink);
  if (!localeFile) {
    console.log(`  SKIP  "${permalink}" — not found in locale`);
    skipped++;
    continue;
  }

  const existing = (localeFile.frontmatter.aliases as string[] | undefined) ?? [];
  const toAdd = newAliases.filter(a => !existing.includes(a));
  if (toAdd.length === 0) { skipped++; continue; }

  const rel = path.relative(localeDir, localeFile.absPath);
  const newFm = { ...localeFile.frontmatter, aliases: [...existing, ...toAdd] };
  fs.writeFileSync(localeFile.absPath, matter.stringify(localeFile.content, newFm, { lineWidth: -1 }), "utf8");
  console.log(`  APPLIED  ${locale}/${rel}`);
  for (const a of toAdd) console.log(`             + "${a}"`);
  applied++;
}

console.log(`\nDone. Applied: ${applied}, Skipped: ${skipped}`);
