#!/usr/bin/env tsx
/**
 * build-publish-css.ts
 * Usage: npx tsx scripts/build-publish-css.ts [locale ...] [--dry-run]
 *
 * Propagates en/publish.css to each locale directory:
 *   - Appends scripts/rtl.css for RTL locales (ar, fa, he, ur)
 *   - Preserves any locale-specific block below the "/* LOCALE-CUSTOM *\/" sentinel
 *
 * If no locales are given, processes all non-en locale directories.
 */

import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SCRIPTS_DIR = import.meta.dirname;

const RTL_LOCALES = new Set(["ar", "fa", "he", "ur"]);
const LOCALE_CUSTOM_SENTINEL = "/* LOCALE-CUSTOM */";

type LocaleDef = { code: string; dir?: string; label: string; base: string };
const localeDefs: LocaleDef[] = JSON.parse(fs.readFileSync(path.join(SCRIPTS_DIR, "locales.json"), "utf8"));

const cliArgs = process.argv.slice(2);
const dryRun = cliArgs.includes("--dry-run");
const rest = cliArgs.filter(a => a !== "--dry-run");
const locales = rest.length > 0 ? rest : localeDefs
  .filter(l => (l.dir ?? l.code) !== "en")
  .map(l => l.dir ?? l.code);

if (dryRun) console.log("[DRY RUN] No files will be written.\n");

const enCss = fs.readFileSync(path.join(ROOT, "en", "publish.css"), "utf8");
const rtlCss = fs.readFileSync(path.join(SCRIPTS_DIR, "rtl.css"), "utf8");

let updated = 0, skipped = 0;

for (const locale of locales) {
  const dest = path.join(ROOT, locale, "publish.css");

  if (!fs.existsSync(path.join(ROOT, locale))) {
    console.warn(`  SKIP    ${locale}/ (directory not found)`);
    skipped++;
    continue;
  }

  let assembled = enCss;

  if (RTL_LOCALES.has(locale)) {
    assembled = assembled.trimEnd() + "\n\n" + rtlCss;
  }

  // Preserve any locale-specific section below the sentinel
  const existing = fs.existsSync(dest) ? fs.readFileSync(dest, "utf8") : null;
  if (existing) {
    const sentinelIdx = existing.indexOf(LOCALE_CUSTOM_SENTINEL);
    if (sentinelIdx !== -1) {
      assembled = assembled.trimEnd() + "\n\n" + existing.slice(sentinelIdx);
    }
  }

  if (existing === assembled) {
    console.log(`  UP-TO-DATE  ${locale}/publish.css`);
    skipped++;
    continue;
  }

  console.log(`  WRITE   ${locale}/publish.css`);
  if (!dryRun) fs.writeFileSync(dest, assembled, "utf8");
  updated++;
}

console.log(`\nDone. Updated: ${updated}, skipped: ${skipped}.`);
