#!/usr/bin/env tsx
/**
 * fix-locale-links.ts
 * Repairs broken wikilink *targets* in a locale directory.
 *
 * Usage:
 *   npx tsx scripts/fix-locale-links.ts <locale|--all> [--apply]
 *
 * Companion to check-links.ts, which only reports. Where translate-locale.ts
 * --fix-links repairs the "#heading" half of a link, this repairs the target
 * half: links like [[Airtable]] whose page is actually named "Import from
 * Airtable" in the locale's own language.
 *
 * Resolution strategies, in descending confidence:
 *   1. exact     target matches an EN basename in filenames.txt -> translation
 *   2. unique    the EN page with the same permalink links to exactly one page
 *                that this file does not yet link to, and this file has exactly
 *                one distinct broken target -> the mapping is unambiguous
 *   3. permalink target matches the tail slug of an EN permalink -> translation
 *
 * Note: strategy 2 deliberately uses a set difference rather than aligning
 * links by index. Index alignment looks tempting when both files have the same
 * link count, but locale pages are sorted in their own alphabet -- en/Plugins/
 * Core plugins.md and its km counterpart both have 35 links in completely
 * different orders -- so it silently maps links to the wrong pages.
 *
 * Display text is always preserved: [[Airtable]] becomes
 * [[Import from Airtable (translated)|Airtable]], so rendered output is
 * unchanged. Targets that no strategy resolves are listed for manual review
 * and left untouched.
 *
 * Default is a dry run; pass --apply to write.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");

const args = process.argv.slice(2);
const apply = args.includes("--apply");
const allFlag = args.includes("--all");
const positional = args.filter(a => !a.startsWith("--"));

if (!allFlag && positional.length === 0) {
  console.error("Usage: npx tsx scripts/fix-locale-links.ts <locale|--all> [--apply]");
  process.exit(1);
}

const ATTACHMENT_EXTS = new Set([
  ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".avif",
  ".mp4", ".mov", ".webm", ".mp3", ".wav", ".ogg", ".pdf",
]);

const PLACEHOLDER_TARGETS = new Set(["example", "exemple", "beispiel", "örnek"]);

// Matches [[target]], [[target|display]], [[target#heading]], and ![[...]] embeds.
// Capture groups: 1=bang 2=target 3=#heading 4=|display
const WIKILINK_RE = /(!?)\[\[([^\]|#]+)(#[^\]|]*)?(\|[^\]]*)?\]\]/g;

function slugNormalize(s: string): string {
  return s.toLowerCase().replace(/[-_]/g, " ").replace(/\s+/g, " ").trim();
}

function isAttachment(target: string): boolean {
  return ATTACHMENT_EXTS.has(path.extname(target).toLowerCase());
}

interface FileInfo {
  absPath: string;
  relPath: string;
  basename: string;
  aliases: string[];
  isStub: boolean;
  permalink: string | null;
  raw: string;
  content: string;
}

function collectFiles(dir: string): FileInfo[] {
  const results: FileInfo[] = [];
  function walk(current: string) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith(".md")) {
        const raw = fs.readFileSync(full, "utf8");
        const parsed = matter(raw);
        results.push({
          absPath: full,
          relPath: path.relative(dir, full),
          basename: entry.name.slice(0, -3),
          aliases: (parsed.data?.aliases as string[] | undefined) ?? [],
          isStub: parsed.data?.localized === false,
          permalink: (parsed.data?.permalink as string | undefined) ?? null,
          raw,
          content: parsed.content,
        });
      }
    }
  }
  walk(dir);
  return results;
}

/** Ordered wikilink targets in a body, skipping fenced code, inline code and block refs. */
function extractTargets(content: string): string[] {
  const out: string[] = [];
  let inCode = false;
  for (const line of content.split("\n")) {
    if (line.trimStart().startsWith("```")) { inCode = !inCode; continue; }
    if (inCode) continue;
    const masked = line.replace(/`[^`]*`/g, m => " ".repeat(m.length));
    WIKILINK_RE.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = WIKILINK_RE.exec(masked)) !== null) {
      const t = m[2].trim();
      if (!t || t.startsWith("^")) continue;
      out.push(t.replace(/\\/g, ""));
    }
  }
  return out;
}

/** permalink -> { original, translation } from a locale's filenames.txt */
function parseFilenames(localeDir: string): Map<string, { original: string; translation: string }> {
  const map = new Map<string, { original: string; translation: string }>();
  const p = path.join(localeDir, "filenames.txt");
  if (!fs.existsSync(p)) return map;
  let permalink: string | null = null;
  let original: string | null = null;
  for (const line of fs.readFileSync(p, "utf8").split("\n")) {
    const sec = line.match(/^\[file\.(.*)\]\s*$/);
    if (sec) { permalink = sec[1]; original = null; continue; }
    const om = line.match(/^original=(.*)$/);
    if (om) { original = om[1].trim(); continue; }
    const tm = line.match(/^translation=(.*)$/);
    if (tm && permalink !== null && original !== null) {
      map.set(permalink, { original, translation: tm[1].trim() });
    }
  }
  return map;
}

// ─── EN side (shared across locales) ──────────────────────────────────────────

const enDir = path.join(ROOT, "en");
const enFiles = collectFiles(enDir);
const enByPermalink = new Map<string, FileInfo>();
const enBasenameToPermalink = new Map<string, string>();
for (const f of enFiles) {
  if (!f.permalink) continue;
  enByPermalink.set(f.permalink, f);
  enBasenameToPermalink.set(slugNormalize(f.basename), f.permalink);
}

interface Fix {
  file: string;
  line: number;
  from: string;
  to: string;
  strategy: string;
}

function processLocale(locale: string): { fixes: Fix[]; unresolved: Fix[] } {
  const localeDir = path.join(ROOT, locale);
  const files = collectFiles(localeDir);
  const filenames = parseFilenames(localeDir);

  // permalink -> basename of a file that ACTUALLY EXISTS on disk. filenames.txt
  // also lists pages the locale has not got yet (e.g. km lists a translated
  // name for Highlighter but has no such page), and rewriting a link to one of
  // those would leave it just as broken, so those are not fix candidates.
  const permalinkToBasename = new Map<string, string>();
  for (const f of files) {
    if (f.permalink) permalinkToBasename.set(f.permalink, f.basename);
  }
  // Names promised by filenames.txt but not present — used to explain, not fix.
  const promisedButMissing = new Map<string, string>();
  for (const [permalink, { translation }] of filenames) {
    if (!permalinkToBasename.has(permalink)) promisedButMissing.set(permalink, translation);
  }

  // EN basename -> translated basename
  const enNameToTranslated = new Map<string, string>();
  for (const [permalink, { original }] of filenames) {
    const t = permalinkToBasename.get(permalink);
    if (t) enNameToTranslated.set(slugNormalize(original), t);
  }

  // Valid-target sets, identical rules to check-links.ts. Values are the
  // canonical file basename so a valid link can be reduced to the page it hits.
  const validByBasename = new Map<string, string>();
  const validBySlug = new Map<string, string>();
  const validByRelPath = new Map<string, string>();
  for (const f of files) {
    validByBasename.set(f.basename.toLowerCase(), f.basename);
    validBySlug.set(slugNormalize(f.basename), f.basename);
    validByRelPath.set(f.relPath.slice(0, -3).toLowerCase(), f.basename);
    validByRelPath.set(f.relPath.slice(0, -3).replace(/\\/g, "/").toLowerCase(), f.basename);
    for (const a of f.aliases) {
      validByBasename.set(a.toLowerCase(), f.basename);
      validBySlug.set(slugNormalize(a), f.basename);
    }
  }

  /** The canonical locale basename a link target hits, or null if broken. */
  function canonicalTarget(raw: string): string | null {
    const target = raw.replace(/\\/g, "").trim();
    if (!target) return null;
    if (target.includes("/")) return validByRelPath.get(target.toLowerCase()) ?? null;
    return validByBasename.get(target.toLowerCase())
      ?? validBySlug.get(slugNormalize(target))
      ?? null;
  }

  function isValidTarget(raw: string): boolean {
    const target = raw.replace(/\\/g, "").trim();
    if (!target) return true;
    if (isAttachment(target)) return true;
    if (PLACEHOLDER_TARGETS.has(target.toLowerCase())) return true;
    return canonicalTarget(target) !== null;
  }

  /** Try to map a broken target to a real locale basename. */
  function resolve(target: string, uniqueMissing: string | null): { to: string; strategy: string } | null {
    const slug = slugNormalize(target);

    // 1. exact — target is still the EN filename
    const exact = enNameToTranslated.get(slug);
    if (exact) return { to: exact, strategy: "exact" };

    // 2. unique — exactly one EN-linked page is absent from this file
    if (uniqueMissing) return { to: uniqueMissing, strategy: "unique" };

    // 3. permalink — [[Airtable]] -> a permalink ending in /airtable
    for (const [permalink] of enByPermalink) {
      const tail = permalink.split("/").pop() ?? "";
      if (tail && slugNormalize(tail) === slug) {
        const to = permalinkToBasename.get(permalink);
        if (to) return { to, strategy: "permalink" };
      }
    }

    return null;
  }

  const fixes: Fix[] = [];
  const unresolved: Fix[] = [];

  for (const f of files) {
    if (f.isStub) continue;

    // Set difference against the EN counterpart: which page does EN link to
    // that this file does not reach? Order-independent, unlike index alignment.
    let uniqueMissing: string | null = null;
    if (f.permalink) {
      const enFile = enByPermalink.get(f.permalink);
      if (enFile) {
        const locTargets = extractTargets(f.content);

        // Pages EN links to, expressed as locale basenames.
        const expected = new Set<string>();
        for (const t of extractTargets(enFile.content)) {
          const p = enBasenameToPermalink.get(slugNormalize(t));
          const to = p ? permalinkToBasename.get(p) : undefined;
          if (to) expected.add(to);
        }
        // Pages this file already reaches.
        const present = new Set<string>();
        const brokenDistinct = new Set<string>();
        for (const t of locTargets) {
          const canon = canonicalTarget(t);
          if (canon) present.add(canon);
          else if (!isAttachment(t) && !PLACEHOLDER_TARGETS.has(t.toLowerCase())) {
            brokenDistinct.add(slugNormalize(t));
          }
        }
        const missing = [...expected].filter(e => !present.has(e));
        // Only unambiguous when exactly one page is missing and exactly one
        // distinct target is broken.
        if (missing.length === 1 && brokenDistinct.size === 1) uniqueMissing = missing[0];
      }
    }

    let inCode = false;
    let changed = false;
    const lines = f.raw.split("\n");
    // Offset so that link indices computed over the body line up with raw lines.
    const bodyStart = f.raw.length - f.content.length;
    const bodyOffsetLines = f.raw.slice(0, bodyStart).split("\n").length - 1;

    for (let i = 0; i < lines.length; i++) {
      if (i < bodyOffsetLines) continue;
      const line = lines[i];
      if (line.trimStart().startsWith("```")) { inCode = !inCode; continue; }
      if (inCode) continue;

      const masked = line.replace(/`[^`]*`/g, m => " ".repeat(m.length));
      const newLine = line.replace(WIKILINK_RE, (match, bang, rawTarget, heading, display, offset) => {
        // Ignore matches that fall inside inline code.
        if (masked.slice(offset, offset + match.length) !== match) return match;
        const target = String(rawTarget).trim().replace(/\\/g, "");
        if (!target || target.startsWith("^")) return match;
        if (isValidTarget(target)) return match;

        const hit = resolve(target, uniqueMissing);
        const record: Fix = {
          file: f.relPath,
          line: i + 1,
          from: target,
          to: hit?.to ?? "",
          strategy: hit?.strategy ?? "none",
        };
        if (!hit) {
          // Distinguish "no idea" from "the page itself is missing".
          const slug = slugNormalize(target);
          for (const [permalink, name] of promisedButMissing) {
            if (slugNormalize(name) === slug || slugNormalize(filenames.get(permalink)!.original) === slug) {
              record.strategy = "page-missing";
              break;
            }
          }
          unresolved.push(record);
          return match;
        }

        fixes.push(record);
        changed = true;
        // Preserve rendered text by keeping the old target as display text.
        // Not for embeds: there "|" is the size parameter (![[image|500]]),
        // not an alias, so an alias there would be meaningless or harmful.
        const shownDisplay = bang
          ? (display ?? "")
          : (display ? String(display) : `|${target}`);
        return `${bang}[[${hit.to}${heading ?? ""}${shownDisplay}]]`;
      });

      if (newLine !== line) lines[i] = newLine;
    }

    if (changed && apply) fs.writeFileSync(f.absPath, lines.join("\n"), "utf8");
  }

  return { fixes, unresolved };
}

// ─── Run ──────────────────────────────────────────────────────────────────────

const locales = allFlag
  ? fs.readdirSync(ROOT, { withFileTypes: true })
      .filter(e => e.isDirectory() && /^[a-z]{2,3}(-[A-Za-z]{2,4})?$/.test(e.name) && e.name !== "en")
      .map(e => e.name)
      .sort()
  : positional;

let totalFixed = 0;
let totalUnresolved = 0;
let totalPageMissing = 0;
const byStrategy = new Map<string, number>();

for (const locale of locales) {
  if (!fs.existsSync(path.join(ROOT, locale))) {
    console.error(`  ${locale}: no such directory, skipping`);
    continue;
  }
  const { fixes, unresolved } = processLocale(locale);
  totalFixed += fixes.length;
  totalUnresolved += unresolved.length;
  totalPageMissing += unresolved.filter(u => u.strategy === "page-missing").length;
  for (const f of fixes) byStrategy.set(f.strategy, (byStrategy.get(f.strategy) ?? 0) + 1);

  if (fixes.length || unresolved.length) {
    console.log(`\n=== ${locale} ===`);
    for (const f of fixes) {
      console.log(`  ${apply ? "FIX " : "WOULD FIX"}  [[${f.from}]] -> [[${f.to}]]  (${f.strategy})`);
      console.log(`            ${f.file}:${f.line}`);
    }
    for (const u of unresolved) {
      const tag = u.strategy === "page-missing" ? "PAGE MISSING" : "UNRESOLVED  ";
      console.log(`  ${tag}  [[${u.from}]]`);
      console.log(`            ${u.file}:${u.line}`);
    }
  }
}

console.log(`\n--- Summary ---`);
console.log(`  ${apply ? "Fixed" : "Would fix"}:  ${totalFixed}`);
for (const [s, n] of [...byStrategy.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`      via ${s}: ${n}`);
}
console.log(`  Unresolved:  ${totalUnresolved}  (of which page-missing: ${totalPageMissing})`);
if (!apply) console.log(`\n(dry run — pass --apply to write)`);
