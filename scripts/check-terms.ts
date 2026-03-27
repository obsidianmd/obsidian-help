#!/usr/bin/env tsx
/**
 * check-terms.ts
 * Checks translated locale files for unofficial feature/plugin names by
 * cross-referencing against the obsidian-translations repo.
 *
 * Usage:
 *   npx tsx scripts/check-terms.ts <locale> [--fix]
 *
 * Flags issues where:
 *   1. The English original appears in prose when an official translation exists
 *   2. A known-wrong variant appears instead of the official locale translation
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");
const SCRIPTS_DIR = import.meta.dirname;

const args = process.argv.slice(2);
const locale = args[0];
const fix = args.includes("--fix");

if (!locale) {
  console.error("Usage: npx tsx scripts/check-terms.ts <locale> [--fix]");
  process.exit(1);
}

const localeDir = path.join(ROOT, locale);
const filenamesTxtPath = path.join(localeDir, "filenames.txt");

// ─── Load obsidian-translations ───────────────────────────────────────────────

interface Term {
  key: string;
  original: string;
  translation: string;
}

// Only load plugin names and key feature names — not every UI string.
// This avoids false positives from short words that are valid in both languages.
const KEY_SECTIONS = [
  /^plugins\.[^.]+\.name$/,       // plugin names
  /^plugins\.[^.]+\.history-name$/, // plugin history names
];

// Terms whose English form should be preserved (product names, technical terms)
const PRESERVE_EN = new Set([
  "Obsidian", "Sync", "Publish", "Canvas", "Markdown", "CSS", "API",
  "Zettelkasten", "URI", "CLI", "Bases",
]);

function loadTranslations(langCode: string): Term[] {
  const termsPath = path.resolve(ROOT, "../obsidian-translations/translations", `${langCode}.txt`);

  if (!fs.existsSync(termsPath)) {
    console.error(`Translations file not found: ${termsPath}`);
    process.exit(1);
  }

  const terms: Term[] = [];
  const lines = fs.readFileSync(termsPath, "utf8").split("\n");
  let key = "", original = "", translation = "";

  for (const line of lines) {
    const t = line.trim();
    if (t.startsWith("[") && t.endsWith("]")) {
      key = t.slice(1, -1);
      original = "";
      translation = "";
    } else {
      const eq = t.indexOf("=");
      if (eq === -1) continue;
      const k = t.slice(0, eq);
      const v = t.slice(eq + 1).trim();
      if (k === "original") original = v;
      else if (k === "translation") {
        translation = v;
        if (original && translation
          && KEY_SECTIONS.some(r => r.test(key))
          && !PRESERVE_EN.has(original)
          && original.length >= 4           // skip very short words
          && original !== translation        // skip no-op translations
        ) {
          terms.push({ key, original, translation });
        }
      }
    }
  }

  return terms;
}

// ─── Load filenames.txt ───────────────────────────────────────────────────────

interface FilenamesMap {
  files: Record<string, string>;
  folders: Record<string, string>;
  fileOriginals: Record<string, string>;
}

function loadFilenamesTxt(): FilenamesMap {
  const result: FilenamesMap = { files: {}, folders: {}, fileOriginals: {} };
  if (!fs.existsSync(filenamesTxtPath)) return result;
  let sectionType: "file" | "folder" | null = null;
  let sectionKey = "", original = "";
  for (const line of fs.readFileSync(filenamesTxtPath, "utf8").split("\n")) {
    const t = line.trim();
    if (t.startsWith("[") && t.endsWith("]")) {
      const name = t.slice(1, -1);
      if (name.startsWith("file.")) { sectionType = "file"; sectionKey = name.slice(5); }
      else if (name.startsWith("folder.")) { sectionType = "folder"; sectionKey = name.slice(7); }
      else { sectionType = null; }
      original = "";
    }
    const eq = t.indexOf("=");
    if (eq === -1 || !sectionType) continue;
    const k = t.slice(0, eq), v = t.slice(eq + 1);
    if (k === "original") original = v;
    else if (k === "translation") {
      if (sectionType === "file") { result.files[sectionKey] = v; if (original) result.fileOriginals[sectionKey] = original; }
      else if (sectionType === "folder") result.folders[sectionKey] = v;
    }
  }
  return result;
}

// ─── Build check rules ────────────────────────────────────────────────────────

interface Rule {
  wrong: string;       // text to look for (case-insensitive)
  official: string;    // what it should be
  reason: string;
  scanPattern: RegExp; // pre-compiled with gi, includes dash in word boundary
  fixPattern: RegExp;  // pre-compiled with gi, for replacement
}

type RuleDraft = Omit<Rule, "scanPattern" | "fixPattern">;

function buildRules(terms: Term[], filenames: FilenamesMap): Rule[] {
  const rules: RuleDraft[] = [];
  const officialLower = new Map<string, string>(); // official translation (lower) → official

  // From obsidian-translations: flag EN originals that have an official translation
  for (const { original, translation } of terms) {
    if (!original || !translation) continue;
    officialLower.set(translation.toLowerCase(), translation);
    // Flag EN original if official translation exists
    rules.push({
      wrong: original,
      official: translation,
      reason: "EN original used, official translation exists",
    });
  }

  // From filenames.txt: flag EN page names that have a locale translation
  for (const [permalink, localeBasename] of Object.entries(filenames.files)) {
    const enBasename = filenames.fileOriginals[permalink];
    if (!enBasename || enBasename === localeBasename) continue;
    rules.push({
      wrong: enBasename,
      official: localeBasename,
      reason: "EN page name used instead of locale name",
    });
  }

  // Deduplicate: keep longest match wins per wrong string
  const seen = new Map<string, RuleDraft>();
  for (const rule of rules) {
    const key = rule.wrong.toLowerCase();
    const existing = seen.get(key);
    if (!existing || rule.wrong.length > existing.wrong.length) {
      seen.set(key, rule);
    }
  }

  return [...seen.values()]
    .sort((a, b) => b.wrong.length - a.wrong.length)
    .map(rule => ({
      ...rule,
      scanPattern: new RegExp(`(?<![\\w\\-\\u00C0-\\u017E])${escapeRegex(rule.wrong)}(?![\\w\\-\\u00C0-\\u017E])`, "gi"),
      fixPattern: new RegExp(`(?<![\\w\\u00C0-\\u017E])${escapeRegex(rule.wrong)}(?![\\w\\u00C0-\\u017E])`, "gi"),
    }));
}

// ─── Strip code spans from a line ────────────────────────────────────────────

function maskCodeAndUrls(line: string): string {
  return line
    .replace(/%%[^%]*%%/g, m => " ".repeat(m.length))         // Obsidian comments
    .replace(/`[^`]*`/g, m => " ".repeat(m.length))           // inline code
    .replace(/https?:\/\/\S+/g, m => " ".repeat(m.length))    // URLs
    .replace(/\[([^\]]+)\]\([^)]+\)/g, m => " ".repeat(m.length)) // markdown links [text](url)
    .replace(/\[![\w-]+\]/g, m => " ".repeat(m.length))       // callout types [!tip]
    .replace(/\*\*[^*]+\*\*/g, m => " ".repeat(m.length))     // bold UI strings
    .replace(/«[^»]+»/g, m => " ".repeat(m.length))           // guillemet-quoted UI labels
    .replace(/\^[\w-]+/g, m => " ".repeat(m.length))          // block IDs ^block-id
    .replace(/<[^>]+>[^<]*<\/[^>]+>/g, m => " ".repeat(m.length)) // HTML elements with content
    .replace(/<[^>]+>/g, m => " ".repeat(m.length))               // remaining HTML tags
    .replace(/\[\[([^\]|]+)(\|[^\]]+)?\]\]/g, (m, target, display) =>
      "[[" + " ".repeat(target.length) + (display ?? "") + "]]" // mask wikilink targets
    );
}

// ─── Scan files ───────────────────────────────────────────────────────────────

interface Issue {
  file: string;
  line: number;
  wrong: string;
  official: string;
  reason: string;
  context: string;
  fixPattern: RegExp;
}

function scanFile(relPath: string, parsedData: Record<string, unknown>, content: string, rules: Rule[]): Issue[] {
  if (!parsedData?.localized) return [];

  const issues: Issue[] = [];
  const lines = content.split("\n");
  let inCode = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track fenced code blocks
    if (line.trimStart().startsWith("```")) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;

    const masked = maskCodeAndUrls(line);

    for (const rule of rules) {
      rule.scanPattern.lastIndex = 0;
      let match: RegExpExecArray | null;
      while ((match = rule.scanPattern.exec(masked)) !== null) {
        // Skip if the match is preceded by a capitalized word (likely a proper noun: "Google Analytics")
        const before = masked.slice(0, match.index);
        if (/[A-Z]\w+\s+$/.test(before)) continue;
        issues.push({
          file: relPath,
          line: i + 1,
          wrong: match[0],
          official: rule.official,
          reason: rule.reason,
          context: line.trim().slice(0, 120),
          fixPattern: rule.fixPattern,
        });
      }
    }
  }

  return issues;
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function collectLocalized(dir: string): { absPath: string; relPath: string }[] {
  const results: { absPath: string; relPath: string }[] = [];
  function walk(current: string) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith(".md")) results.push({ absPath: full, relPath: path.relative(dir, full) });
    }
  }
  walk(dir);
  return results;
}

// ─── Fix ──────────────────────────────────────────────────────────────────────

function applyFixes(absPath: string, issues: Issue[], parsedData: Record<string, unknown>, content: string): boolean {
  let changed = false;

  // Group by wrong→official, apply longest first
  const fixes = [...new Map(issues.map(i => [i.wrong.toLowerCase(), i])).values()]
    .sort((a, b) => b.wrong.length - a.wrong.length);

  let inCode = false;
  const lines = content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trimStart().startsWith("```")) { inCode = !inCode; continue; }
    if (inCode) continue;
    for (const { fixPattern, official } of fixes) {
      const replaced = lines[i].replace(fixPattern, official);
      if (replaced !== lines[i]) { lines[i] = replaced; changed = true; }
    }
  }

  if (changed) {
    const newContent = matter.stringify(lines.join("\n"), parsedData, { lineWidth: -1 } as any);
    fs.writeFileSync(absPath, newContent, "utf8");
  }
  return changed;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const terms = loadTranslations(locale);
const filenames = loadFilenamesTxt();
const rules = buildRules(terms, filenames);

console.log(`Loaded ${terms.length} terms from obsidian-translations`);
console.log(`Loaded ${Object.keys(filenames.files).length} file name mappings`);
console.log(`Built ${rules.length} lint rules\n`);

const files = collectLocalized(localeDir);
const allIssues: Issue[] = [];

for (const { absPath, relPath } of files) {
  const parsed = matter(fs.readFileSync(absPath, "utf8"));
  const issues = scanFile(relPath, parsed.data as Record<string, unknown>, parsed.content, rules);
  allIssues.push(...issues);
  if (fix && issues.length > 0) {
    const fixed = applyFixes(absPath, issues, parsed.data as Record<string, unknown>, parsed.content);
    if (fixed) console.log(`  FIXED  ${relPath} (${issues.length} issue(s))`);
  }
}

if (!fix) {
  // Group by file
  const byFile = new Map<string, Issue[]>();
  for (const issue of allIssues) {
    const arr = byFile.get(issue.file) ?? [];
    arr.push(issue);
    byFile.set(issue.file, arr);
  }

  for (const [file, issues] of [...byFile.entries()].sort()) {
    console.log(`\n${file}`);
    for (const { line, wrong, official, context } of issues) {
      console.log(`  L${line}: "${wrong}" → "${official}"`);
      console.log(`       ${context}`);
    }
  }

  console.log(`\n${allIssues.length} issue(s) across ${byFile.size} file(s).`);
  if (allIssues.length > 0) console.log(`\nRun with --fix to auto-correct.`);
} else {
  console.log(`\nFixed ${allIssues.length} issue(s).`);
}
