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
const EN_FIELDS = ["permalink", "cssclasses", "description", "publish", "mobile"];

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
  localeFm: Record<string, unknown>
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

  // Preserve locale-specific fields (never overwrite from EN)
  if ("aliases" in localeFm) {
    result.aliases = localeFm.aliases;
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
  const newContent = matter.stringify(content, fm);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, newContent, "utf8");
}

console.log(`Syncing ${locale}/ with en/ (dry-run: ${dryRun})\n`);

const enFiles = collectFiles(enDir);
const localeFiles = collectFiles(localeDir);

let synced = 0;
let created = 0;
let unchanged = 0;

for (const [permalink, enInfo] of enFiles) {
  const localeInfo = localeFiles.get(permalink);

  if (localeInfo) {
    // Sync frontmatter
    const newFm = buildFrontmatter(enInfo.frontmatter, localeInfo.frontmatter);
    // If localized is absent or false and content matches EN, mark as unlocalized (null = empty date)
    const isUnlocalized = !localeInfo.frontmatter.localized;
    if (isUnlocalized && localeInfo.content.trim() === enInfo.content.trim()) {
      newFm.localized = null;
    }
    // If the locale file has a different filename than EN, add the EN basename as an alias
    // so that [[EN filename]] wikilinks resolve correctly in locale content.
    const enBasename = path.basename(enInfo.relPath, ".md");
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
    // Create stub at same relative path as EN but under locale/
    const stubRelPath = enInfo.relPath;
    const stubAbsPath = path.join(localeDir, stubRelPath);

    // Build stub frontmatter: copy EN fields, no aliases, mark as unlocalized
    const stubFm: Record<string, unknown> = { localized: null };
    for (const field of EN_FIELDS) {
      if (field in enInfo.frontmatter) {
        stubFm[field] = enInfo.frontmatter[field];
      }
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

for (const absPath of collectAllMd(localeDir)) {
  const raw = fs.readFileSync(absPath, "utf8");
  const parsed = matter(raw);
  const permalink = parsed.data?.permalink as string | undefined;
  const relPath = path.relative(localeDir, absPath);
  if (!permalink || !enFiles.has(permalink)) {
    const reason = !permalink ? "no permalink" : `permalink not in en: ${permalink}`;
    console.log(`  DELETE  ${relPath} (${reason})`);
    if (!dryRun) fs.rmSync(absPath);
    deleted++;
  }
}

// ─── Root asset sync (publish.js, publish.css, favicons, etc.) ───────────────
// Copy any non-markdown file at the en/ root that's missing from the locale root.

for (const entry of fs.readdirSync(enDir, { withFileTypes: true })) {
  if (!entry.isFile() || entry.name.endsWith(".md") || entry.name.startsWith(".")) continue;
  const src = path.join(enDir, entry.name);
  const dest = path.join(localeDir, entry.name);
  if (!fs.existsSync(dest)) {
    console.log(`  ASSET   ${entry.name}`);
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

console.log(`\n--- Summary ---`);
console.log(`  Synced (frontmatter updated): ${synced}`);
console.log(`  Created (new stubs):          ${created}`);
console.log(`  Unchanged:                    ${unchanged}`);
console.log(`  Attachments copied:           ${attachCopied}`);
console.log(`  Deleted (orphans):            ${deleted}`);
if (dryRun) {
  console.log("\n[DRY RUN] No files were written.");
}
