#!/usr/bin/env tsx
/**
 * localize-urls.ts
 * Rewrites https://obsidian.md/ links to https://obsidian.md/<locale>/
 * in all markdown files in a locale directory.
 *
 * Usage:
 *   npx tsx scripts/localize-urls.ts <locale> [--dry-run]
 *
 * Exclusions (kept as-is):
 *   - URLs already containing /<locale>/
 *   - URLs under /images/
 *   - URLs ending with a file extension (.jpg, .png, .svg, etc.)
 */

import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");

const args = process.argv.slice(2);
const locale = args[0];
const dryRun = args.includes("--dry-run");

if (!locale) {
  console.error("Usage: npx tsx scripts/localize-urls.ts <locale> [--dry-run]");
  process.exit(1);
}

const localeDir = path.join(ROOT, locale);
if (!fs.existsSync(localeDir)) {
  console.error(`Locale directory not found: ${localeDir}`);
  process.exit(1);
}

const BASE = "https://obsidian.md/";
const LOCALIZED = `https://obsidian.md/${locale}/`;
const urlPattern = new RegExp(`https://obsidian\\.md/(?!${locale}/)([^\\s)"'<>]*)`, "g");
const fileExtPattern = /\.(?:jpg|jpeg|png|gif|svg|webp|pdf|ico|mp4|zip|dmg|exe|apk)([?#]|$)/;

function processFile(fp: string): boolean {
  const text = fs.readFileSync(fp, "utf8");
  const updated = text.replace(urlPattern, (match, path) => {
    if (path.startsWith("images/") || fileExtPattern.test(path)) return match;
    return LOCALIZED + path;
  });
  if (updated === text) return false;
  if (!dryRun) fs.writeFileSync(fp, updated, "utf8");
  return true;
}

function walk(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith(".md")) results.push(full);
  }
  return results;
}

console.log(`Localizing URLs for ${locale}/${dryRun ? " [DRY RUN]" : ""}\n`);
console.log(`  ${BASE}* → ${LOCALIZED}*`);
console.log(`  (excluding /images/ and file extensions)\n`);

let changed = 0;
for (const fp of walk(localeDir)) {
  if (processFile(fp)) {
    console.log(`  ${dryRun ? "WOULD UPDATE" : "UPDATED"}  ${path.relative(localeDir, fp)}`);
    changed++;
  }
}

console.log(`\n${changed} file(s) ${dryRun ? "would be" : ""} updated.`);
if (dryRun) console.log("\n[DRY RUN] No files were written.");
