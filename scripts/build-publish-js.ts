#!/usr/bin/env tsx
/**
 * build-publish-js.ts
 * Usage: npx tsx scripts/build-publish-js.ts [locale ...]
 *
 * Generates <locale>/publish.js for each locale by concatenating:
 *   1. en/publish.js              (shared language switcher — source of truth)
 *   2. <locale>/publish.strings.js  (optional locale-specific UI strings)
 *
 * If no locales are given, processes all locale directories that have a
 * publish.strings.js or an existing publish.js (excluding en/).
 */

import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const src = path.join(ROOT, "en", "publish.js");

if (!fs.existsSync(src)) {
  console.error("en/publish.js not found");
  process.exit(1);
}

const base = fs.readFileSync(src, "utf8");
const dryRun = process.argv.includes("--dry-run");
const args = process.argv.slice(2).filter(a => !a.startsWith("--"));

const locales = args.length > 0 ? args : fs
  .readdirSync(ROOT, { withFileTypes: true })
  .filter(e => e.isDirectory() && e.name !== "en" && !e.name.startsWith(".") && e.name !== "scripts" && e.name !== "Sandbox" && e.name !== "Release notes")
  .map(e => e.name)
  .filter(name => {
    const dir = path.join(ROOT, name);
    return fs.existsSync(path.join(dir, "publish.js")) || fs.existsSync(path.join(dir, "publish.strings.js"));
  });

if (dryRun) console.log("[DRY RUN] No files will be written.\n");

let built = 0, skipped = 0;

for (const locale of locales) {
  const localeDir = path.join(ROOT, locale);
  if (!fs.existsSync(localeDir)) {
    console.warn(`  SKIP    ${locale}/ (directory not found)`);
    skipped++;
    continue;
  }

  const stringsPath = path.join(localeDir, "publish.strings.js");
  const destPath = path.join(localeDir, "publish.js");

  const content = fs.existsSync(stringsPath)
    ? base.trimEnd() + "\n\n" + fs.readFileSync(stringsPath, "utf8")
    : base;

  const existing = fs.existsSync(destPath) ? fs.readFileSync(destPath, "utf8") : null;
  if (existing === content) {
    console.log(`  UP-TO-DATE  ${locale}/publish.js`);
    skipped++;
    continue;
  }

  console.log(`  WRITE   ${locale}/publish.js${fs.existsSync(stringsPath) ? " (+ strings)" : ""}`);
  if (!dryRun) fs.writeFileSync(destPath, content, "utf8");
  built++;
}

console.log(`\nDone. Built: ${built}, skipped: ${skipped}.`);
