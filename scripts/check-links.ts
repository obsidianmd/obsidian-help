#!/usr/bin/env tsx
/**
 * check-links.ts
 * Validates that all wikilink targets in a locale directory resolve to a real file.
 *
 * Usage:
 *   npx tsx scripts/check-links.ts <locale>
 *
 * Reports [[target]] links whose target doesn't match any file basename or alias
 * in the locale directory. These are typically stale EN names left over after
 * files were renamed to their locale equivalents.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");

const args = process.argv.slice(2);
const locale = args[0];

if (!locale) {
  console.error("Usage: npx tsx scripts/check-links.ts <locale>");
  process.exit(1);
}

const localeDir = path.join(ROOT, locale);
if (!fs.existsSync(localeDir)) {
  console.error(`Locale directory not found: ${localeDir}`);
  process.exit(1);
}

// Extensions that are attachments, not pages
const ATTACHMENT_EXTS = new Set([
  ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp",
  ".mp4", ".mov", ".webm", ".mp3", ".ogg", ".wav",
  ".pdf", ".zip",
]);

function isAttachment(target: string): boolean {
  const ext = path.extname(target).toLowerCase();
  return ATTACHMENT_EXTS.has(ext);
}

// ─── Collect all files ────────────────────────────────────────────────────────

interface FileInfo {
  absPath: string;
  relPath: string;
  basename: string;     // filename without .md
  aliases: string[];
  isStub: boolean;      // true if localized: false (untranslated stub)
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
        const relPath = path.relative(dir, full);
        const basename = entry.name.slice(0, -3);
        const aliases = (parsed.data?.aliases as string[] | undefined) ?? [];
        const isStub = parsed.data?.localized === false;
        results.push({ absPath: full, relPath, basename, aliases, isStub, content: parsed.content });
      }
    }
  }
  walk(dir);
  return results;
}

const files = collectFiles(localeDir);

// ─── Build valid target sets ──────────────────────────────────────────────────

// basename (case-insensitive) → canonical basename
// Known placeholder targets used in syntax documentation (not real pages)
const PLACEHOLDER_TARGETS = new Set(["example", "exemple"]);

const validByBasename = new Map<string, string>();
// locale-relative path without extension (case-insensitive) → true
const validByRelPath = new Map<string, string>();

for (const f of files) {
  validByBasename.set(f.basename.toLowerCase(), f.basename);
  validByRelPath.set(f.relPath.slice(0, -3).toLowerCase(), f.relPath);
  // path with forward slashes (links use /)
  const fwdPath = f.relPath.slice(0, -3).replace(/\\/g, "/");
  validByRelPath.set(fwdPath.toLowerCase(), f.relPath);
  for (const a of f.aliases) {
    validByBasename.set(a.toLowerCase(), a);
  }
}

function isValidTarget(raw: string): boolean {
  // Strip backslash escapes (e.g. in table cells)
  const target = raw.replace(/\\/g, "").trim();
  if (!target) return true;
  if (isAttachment(target)) return true;

  const lower = target.toLowerCase();
  if (PLACEHOLDER_TARGETS.has(lower)) return true;

  // Path-based link (contains /): check relative path
  if (target.includes("/")) {
    return validByRelPath.has(lower);
  }

  return validByBasename.has(lower);
}

// ─── Scan for broken wikilinks ────────────────────────────────────────────────

interface BrokenLink {
  file: string;
  line: number;
  target: string;
  context: string;
}

// Match [[target]], [[target|display]], [[target#heading]], [[target#heading|display]]
const WIKILINK_RE = /\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g;

const broken: BrokenLink[] = [];

for (const f of files) {
  if (f.isStub) continue; // skip untranslated stubs (localized: false)

  const lines = f.content.split("\n");
  let inCode = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trimStart().startsWith("```")) { inCode = !inCode; continue; }
    if (inCode) continue;

    // Mask inline code before scanning
    const masked = line.replace(/`[^`]*`/g, m => " ".repeat(m.length));

    WIKILINK_RE.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = WIKILINK_RE.exec(masked)) !== null) {
      const target = match[1].trim();
      // Skip block references and empty targets
      if (!target || target.startsWith("^")) continue;

      if (!isValidTarget(target)) {
        broken.push({
          file: f.relPath,
          line: i + 1,
          target: target.replace(/\\/g, ""),
          context: line.trim().slice(0, 120),
        });
      }
    }
  }
}

// ─── Report ───────────────────────────────────────────────────────────────────

if (broken.length === 0) {
  console.log("No broken wikilinks found.");
  process.exit(0);
}

const byFile = new Map<string, BrokenLink[]>();
for (const b of broken) {
  const arr = byFile.get(b.file) ?? [];
  arr.push(b);
  byFile.set(b.file, arr);
}

for (const [file, links] of [...byFile.entries()].sort()) {
  console.log(`\n${file}`);
  for (const { line, target, context } of links) {
    console.log(`  L${line}: [[${target}]]`);
    console.log(`       ${context}`);
  }
}

console.log(`\n${broken.length} broken link(s) across ${byFile.size} file(s).`);
process.exit(1);
