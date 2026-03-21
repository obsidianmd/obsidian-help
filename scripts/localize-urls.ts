#!/usr/bin/env tsx
/**
 * localize-urls.ts
 * Rewrites https://obsidian.md/ links to https://obsidian.md/<locale>/
 * in all markdown files in a locale directory.
 *
 * Usage:
 *   npx tsx scripts/localize-urls.ts <locale> [--dry-run]
 *   npx tsx scripts/localize-urls.ts --all [--dry-run]
 *
 * Exclusions (kept as-is):
 *   - URLs already containing /<locale>/
 *   - URLs under /images/
 *   - URLs ending with a file extension (.jpg, .png, .svg, etc.)
 */

import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");

// Non-English locales that have their own URL namespace on obsidian.md
const ACTIVE_LOCALES = ["ar", "ja", "pt-br", "es", "ko", "zh", "fr", "ru", "it"];

// Maps directory name → URL locale code when they differ
const URL_LOCALE: Record<string, string> = {
  "pt-br": "pt-BR",
};

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const allMode = args.includes("--all");
const localeArg = args.find(a => a !== "--dry-run" && a !== "--all");

if (!allMode && !localeArg) {
  console.error("Usage: npx tsx scripts/localize-urls.ts <locale> [--dry-run]");
  console.error("       npx tsx scripts/localize-urls.ts --all [--dry-run]");
  process.exit(1);
}

const fileExtPattern = /\.(?:jpg|jpeg|png|gif|svg|webp|pdf|ico|mp4|zip|dmg|exe|apk)([?#]|$)/;

function processFile(fp: string, locale: string, urlPattern: RegExp, localized: string): boolean {
  const text = fs.readFileSync(fp, "utf8");
  const updated = text.replace(urlPattern, (match, p) => {
    if (p.startsWith("images/") || fileExtPattern.test(p)) return match;
    return localized + p;
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

function runLocale(locale: string): number {
  const localeDir = path.join(ROOT, locale);
  if (!fs.existsSync(localeDir)) {
    console.error(`Locale directory not found: ${localeDir}`);
    return 0;
  }

  const urlLocale = URL_LOCALE[locale] ?? locale;
  const localized = `https://obsidian.md/${urlLocale}/`;
  // Exclude both the canonical URL locale (e.g. pt-BR) and the directory name (e.g. pt-br)
  // so re-running the script never double-prefixes already-localized URLs.
  const alreadyLocalized = urlLocale === locale
    ? urlLocale
    : `(?:${urlLocale}|${locale})`;
  const urlPattern = new RegExp(`https://obsidian\\.md/(?!${alreadyLocalized}/)([^\\s)"'<>]*)`, "g");

  console.log(`── ${locale}${dryRun ? " [DRY RUN]" : ""}`);
  console.log(`   https://obsidian.md/* → ${localized}*\n`);

  let changed = 0;
  for (const fp of walk(localeDir)) {
    if (processFile(fp, locale, urlPattern, localized)) {
      console.log(`   ${dryRun ? "WOULD UPDATE" : "UPDATED"}  ${path.relative(localeDir, fp)}`);
      changed++;
    }
  }
  console.log(`   ${changed} file(s) ${dryRun ? "would be" : ""} updated.\n`);
  return changed;
}

if (allMode) {
  console.log(`Localizing URLs for all active locales${dryRun ? " [DRY RUN]" : ""}\n`);
  let total = 0;
  for (const locale of ACTIVE_LOCALES) {
    total += runLocale(locale);
  }
  console.log(`--- Summary ---`);
  console.log(`  Total files updated: ${total}`);
  if (dryRun) console.log("\n[DRY RUN] No files were written.");
} else {
  const locale = localeArg!;
  const localeDir = path.join(ROOT, locale);
  if (!fs.existsSync(localeDir)) {
    console.error(`Locale directory not found: ${localeDir}`);
    process.exit(1);
  }
  const urlLocale = URL_LOCALE[locale] ?? locale;
  const localized = `https://obsidian.md/${urlLocale}/`;
  const alreadyLocalized2 = urlLocale === locale
    ? urlLocale
    : `(?:${urlLocale}|${locale})`;
  const urlPattern = new RegExp(`https://obsidian\\.md/(?!${alreadyLocalized2}/)([^\\s)"'<>]*)`, "g");

  console.log(`Localizing URLs for ${locale}/${dryRun ? " [DRY RUN]" : ""}\n`);
  console.log(`  https://obsidian.md/* → ${localized}*`);
  console.log(`  (excluding /images/ and file extensions)\n`);

  let changed = 0;
  for (const fp of walk(localeDir)) {
    if (processFile(fp, locale, urlPattern, localized)) {
      console.log(`  ${dryRun ? "WOULD UPDATE" : "UPDATED"}  ${path.relative(localeDir, fp)}`);
      changed++;
    }
  }

  console.log(`\n${changed} file(s) ${dryRun ? "would be" : ""} updated.`);
  if (dryRun) console.log("\n[DRY RUN] No files were written.");
}
