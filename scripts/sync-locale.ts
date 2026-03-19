#!/usr/bin/env tsx
/**
 * sync-locale.ts
 * Usage: npx tsx scripts/sync-locale.ts <locale> [--dry-run]
 *
 * Syncs a locale directory with en/ — same set of files, same frontmatter
 * fields (except `aliases`), matched by `permalink`.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");

// ─── filenames.txt ────────────────────────────────────────────────────────────

interface FilenamesMap {
  files: Record<string, string>;   // permalink → locale filename (no .md)
  folders: Record<string, string>; // EN folder name → locale folder name
}

function loadFilenamesTxt(p: string): FilenamesMap {
  const result: FilenamesMap = { files: {}, folders: {} };
  if (!fs.existsSync(p)) return result;
  let sectionType: "file" | "folder" | null = null;
  let sectionKey = "";
  for (const line of fs.readFileSync(p, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith(";")) continue;
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      const name = trimmed.slice(1, -1);
      if (name.startsWith("file.")) { sectionType = "file"; sectionKey = name.slice(5); }
      else if (name.startsWith("folder.")) { sectionType = "folder"; sectionKey = name.slice(7); }
      else { sectionType = null; }
      continue;
    }
    const eq = trimmed.indexOf("=");
    if (eq === -1 || !sectionType) continue;
    const k = trimmed.slice(0, eq);
    const v = trimmed.slice(eq + 1);
    if (k === "translation") {
      if (sectionType === "file") result.files[sectionKey] = v;
      else if (sectionType === "folder") result.folders[sectionKey] = v;
    }
  }
  return result;
}

// Given an EN-relative path and permalink, return the locale-relative path
// using translated folder and file names from filenames.txt.
function resolveLocalePath(enRelPath: string, permalink: string, map: FilenamesMap): string {
  const parts = enRelPath.split(path.sep);
  const filename = parts.pop()!;
  const enBasename = filename.slice(0, -3); // remove .md
  const localeFolders = parts.map(seg => map.folders[seg] ?? seg);
  const localeBasename = map.files[permalink] ?? enBasename;
  return [...localeFolders, `${localeBasename}.md`].join(path.sep);
}

const args = process.argv.slice(2);
const locale = args[0];
const dryRun = args.includes("--dry-run");

if (!locale) {
  console.error("Usage: npx tsx scripts/sync-locale.ts <locale> [--dry-run]");
  process.exit(1);
}

const enDir = path.join(ROOT, "en");
const localeDir = path.join(ROOT, locale);

if (!fs.existsSync(enDir)) {
  console.error(`en/ directory not found at ${enDir}`);
  process.exit(1);
}

if (!fs.existsSync(localeDir)) {
  console.error(`Locale directory not found at ${localeDir}`);
  process.exit(1);
}

// Fields to always copy from EN (never locale-specific)
const EN_FIELDS = ["permalink", "cssclasses", "publish", "mobile"];
// Fields copied from EN into new stubs (but owned by locale once translated)
const STUB_FIELDS = [...EN_FIELDS, "description"];

interface FileInfo {
  absPath: string;
  relPath: string;
  frontmatter: Record<string, unknown>;
  content: string;
  raw: string;
}

function collectFiles(dir: string): Map<string, FileInfo> {
  const map = new Map<string, FileInfo>();

  function walk(current: string) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        const raw = fs.readFileSync(full, "utf8");
        const parsed = matter(raw);
        const permalink = parsed.data?.permalink as string | undefined;
        if (!permalink) continue; // skip files without permalink
        const relPath = path.relative(dir, full);
        map.set(permalink, {
          absPath: full,
          relPath,
          frontmatter: parsed.data as Record<string, unknown>,
          content: parsed.content,
          raw,
        });
      }
    }
  }

  walk(dir);
  return map;
}

function buildFrontmatter(
  enFm: Record<string, unknown>,
  localeFm: Record<string, unknown>,
  enBasename: string
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...localeFm };

  // Apply EN fields
  for (const field of EN_FIELDS) {
    if (field in enFm) {
      result[field] = enFm[field];
    } else {
      delete result[field];
    }
  }

  // Preserve locale aliases, stripping any that came from EN.
  // Keep: locale-specific aliases + the EN basename (used for wikilink resolution).
  // Remove: EN frontmatter aliases that leaked in from migration.
  const enAliasSet = new Set((enFm.aliases as string[] | undefined) ?? []);
  const localeAliases = (localeFm.aliases as string[] | undefined) ?? [];
  const filteredAliases = localeAliases.filter(a => !enAliasSet.has(a) || a === enBasename);
  if (filteredAliases.length > 0) {
    result.aliases = filteredAliases;
  } else {
    delete result.aliases;
  }

  if ("localized" in localeFm) {
    result.localized = localeFm.localized;
  }

  return result;
}

function frontmatterChanged(
  a: Record<string, unknown>,
  b: Record<string, unknown>
): boolean {
  return JSON.stringify(a) !== JSON.stringify(b);
}

function writeFile(filePath: string, fm: Record<string, unknown>, content: string) {
  const newContent = matter.stringify(content, fm)
    .replace(/^localized: null$/m, "localized:")
    .replace(/^localized: '(\d{4}-\d{2}-\d{2})'$/m, "localized: $1");
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, newContent, "utf8");
}

console.log(`Syncing ${locale}/ with en/ (dry-run: ${dryRun})\n`);

const filenamesTxtPath = path.join(localeDir, "filenames.txt");
const filenamesMap = loadFilenamesTxt(filenamesTxtPath);
if (Object.keys(filenamesMap.files).length > 0) {
  console.log(`Loaded filenames.txt (${Object.keys(filenamesMap.files).length} files, ${Object.keys(filenamesMap.folders).length} folders)\n`);
}

const enFiles = collectFiles(enDir);
const localeFiles = collectFiles(localeDir);

let synced = 0;
let created = 0;
let unchanged = 0;
let moved = 0;

for (const [permalink, enInfo] of enFiles) {
  const localeInfo = localeFiles.get(permalink);

  if (localeInfo) {
    // Check if the file should be moved to its correct locale path
    const expectedRelPath = resolveLocalePath(enInfo.relPath, permalink, filenamesMap);
    if (localeInfo.relPath !== expectedRelPath) {
      const expectedAbsPath = path.join(localeDir, expectedRelPath);
      console.log(`  MOVE    ${localeInfo.relPath} → ${expectedRelPath}`);
      if (!dryRun) {
        fs.mkdirSync(path.dirname(expectedAbsPath), { recursive: true });
        fs.renameSync(localeInfo.absPath, expectedAbsPath);
        localeInfo.absPath = expectedAbsPath;
        localeInfo.relPath = expectedRelPath;
      }
      moved++;
    }

    // Sync frontmatter
    const enBasename = path.basename(enInfo.relPath, ".md");
    const newFm = buildFrontmatter(enInfo.frontmatter, localeInfo.frontmatter, enBasename);
    // If localized is absent or false and content matches EN, mark as unlocalized (null = empty date)
    const isUnlocalized = !localeInfo.frontmatter.localized;
    if (isUnlocalized && localeInfo.content.trim() === enInfo.content.trim()) {
      newFm.localized = null;
    }
    // If the locale file has a different filename than EN, add the EN basename as an alias
    // so that [[EN filename]] wikilinks resolve correctly in locale content.
    const localeBasename = path.basename(localeInfo.relPath, ".md");
    if (enBasename !== localeBasename) {
      const aliases = (newFm.aliases as string[] | undefined) ?? [];
      if (!aliases.includes(enBasename)) {
        newFm.aliases = [...aliases, enBasename];
      }
    }
    if (frontmatterChanged(localeInfo.frontmatter, newFm)) {
      console.log(`  SYNC  ${localeInfo.relPath} (permalink: ${permalink})`);
      if (!dryRun) {
        writeFile(localeInfo.absPath, newFm, localeInfo.content);
      }
      synced++;
    } else {
      unchanged++;
    }
  } else {
    // Create stub using locale filenames/folders if available, else fall back to EN path
    const stubRelPath = resolveLocalePath(enInfo.relPath, permalink, filenamesMap);
    const stubAbsPath = path.join(localeDir, stubRelPath);

    // Build stub frontmatter: copy EN fields, mark as unlocalized
    const stubFm: Record<string, unknown> = { localized: null };
    for (const field of STUB_FIELDS) {
      if (field in enInfo.frontmatter) {
        stubFm[field] = enInfo.frontmatter[field];
      }
    }
    // Add EN basename as alias if the locale filename differs
    const enBasename = path.basename(enInfo.relPath, ".md");
    const localeBasename = path.basename(stubRelPath, ".md");
    if (enBasename !== localeBasename) {
      stubFm.aliases = [enBasename];
    }

    console.log(`  CREATE  ${stubRelPath} (permalink: ${permalink})`);
    if (!dryRun) {
      writeFile(stubAbsPath, stubFm, enInfo.content);
    }
    created++;
  }
}

// Delete any locale .md file whose permalink is missing or not in EN
let deleted = 0;

function collectAllMd(dir: string): string[] {
  const results: string[] = [];
  function walk(current: string) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile() && entry.name.endsWith(".md")) results.push(full);
    }
  }
  walk(dir);
  return results;
}

// Build set of canonical locale paths (after any moves above)
const canonicalPaths = new Set<string>();
for (const [permalink, enInfo] of enFiles) {
  canonicalPaths.add(path.join(localeDir, resolveLocalePath(enInfo.relPath, permalink, filenamesMap)));
}

for (const absPath of collectAllMd(localeDir)) {
  const raw = fs.readFileSync(absPath, "utf8");
  const parsed = matter(raw);
  const permalink = parsed.data?.permalink as string | undefined;
  const relPath = path.relative(localeDir, absPath);
  let reason: string | null = null;
  if (!permalink) {
    reason = "no permalink";
  } else if (!enFiles.has(permalink)) {
    reason = `permalink not in en: ${permalink}`;
  } else if (!canonicalPaths.has(absPath)) {
    reason = `duplicate: not at canonical locale path`;
  }
  if (reason) {
    console.log(`  DELETE  ${relPath} (${reason})`);
    if (!dryRun) fs.rmSync(absPath);
    deleted++;
  }
}

// ─── Root asset sync (publish.js, publish.css, favicons, etc.) ───────────────
// Copy any non-markdown file at the en/ root to the locale root, overwriting if changed.

for (const entry of fs.readdirSync(enDir, { withFileTypes: true })) {
  if (!entry.isFile() || entry.name.endsWith(".md") || entry.name.startsWith(".")) continue;
  const src = path.join(enDir, entry.name);
  const dest = path.join(localeDir, entry.name);
  const srcContent = fs.readFileSync(src);
  const destContent = fs.existsSync(dest) ? fs.readFileSync(dest) : null;
  if (!destContent || !srcContent.equals(destContent)) {
    console.log(`  ASSET   ${entry.name}${destContent ? " (updated)" : ""}`);
    if (!dryRun) fs.copyFileSync(src, dest);
  }
}

// ─── Attachments sync ────────────────────────────────────────────────────────
// Copy any attachment from en/Attachments/ that doesn't already exist in the
// locale's Attachments/. Translators can replace files at the same path.

const enAttachDir = path.join(enDir, "Attachments");
const localeAttachDir = path.join(localeDir, "Attachments");
let attachCopied = 0;

if (fs.existsSync(enAttachDir)) {
  function syncAttachments(srcDir: string, destDir: string) {
    for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
      const srcPath = path.join(srcDir, entry.name);
      const destPath = path.join(destDir, entry.name);
      if (entry.isDirectory()) {
        syncAttachments(srcPath, destPath);
      } else if (entry.isFile() && !fs.existsSync(destPath)) {
        const rel = path.relative(localeDir, destPath);
        console.log(`  ATTACH  ${rel}`);
        if (!dryRun) {
          fs.mkdirSync(destDir, { recursive: true });
          fs.copyFileSync(srcPath, destPath);
        }
        attachCopied++;
      }
    }
  }
  syncAttachments(enAttachDir, localeAttachDir);
}

// ─── Unknown folder detection ─────────────────────────────────────────────────
// Warn about folders in the locale root that have no counterpart in en/ and
// aren't locale-specific files (filenames.txt, headings.txt, etc.)

const LOCALE_ONLY_FILES = new Set(["filenames.txt", "headings.txt"]);
const enRootDirs = new Set(
  fs.readdirSync(enDir, { withFileTypes: true })
    .filter(e => e.isDirectory() && !e.name.startsWith("."))
    .map(e => e.name)
);
// Also allow translated folder names (values from filenamesMap)
const translatedFolderNames = new Set(Object.values(filenamesMap.folders));

for (const entry of fs.readdirSync(localeDir, { withFileTypes: true })) {
  if (entry.name.startsWith(".")) continue;
  if (entry.isFile() && LOCALE_ONLY_FILES.has(entry.name)) continue;
  if (!entry.isDirectory()) continue;
  if (enRootDirs.has(entry.name)) continue;
  if (translatedFolderNames.has(entry.name)) continue;
  console.log(`  UNKNOWN DIR  ${entry.name}  (not in en/ and not a known locale folder — consider deleting)`);
}

console.log(`\n--- Summary ---`);
console.log(`  Moved (to locale path):       ${moved}`);
console.log(`  Synced (frontmatter updated): ${synced}`);
console.log(`  Created (new stubs):          ${created}`);
console.log(`  Unchanged:                    ${unchanged}`);
console.log(`  Attachments copied:           ${attachCopied}`);
console.log(`  Deleted (orphans):            ${deleted}`);
if (dryRun) {
  console.log("\n[DRY RUN] No files were written.");
}
