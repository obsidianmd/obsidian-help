#!/usr/bin/env tsx
/**
 * strip-icon-parens.ts
 * Usage: npx tsx scripts/strip-icon-parens.ts [--dry-run] [locale ...]
 *
 * Removes parentheses wrapping inline lucide icon embeds, e.g.:
 *   **More options** ( ![[lucide-ellipsis-vertical.svg#icon]] )
 *   →  **More options** ![[lucide-ellipsis-vertical.svg#icon]]
 *
 * Handles all spacing variants:
 *   ( ![[...]] )   ( ![[...]])   (![[...]])
 *
 * By default runs on all locale directories. Pass locale codes to limit scope.
 */

import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const localeArgs = args.filter(a => a !== "--dry-run");

// Regex: ( ![[*.svg#icon]] ) in all spacing variants — matches any icon embed
// Captures the embed itself; strips surrounding ( and )
const ICON_PARENS = /\(\s*(!\[\[[^\]]+\.svg#icon\]\])\s*\)/g;

function processFile(filePath: string): boolean {
  const original = fs.readFileSync(filePath, "utf8");
  const updated = original.replace(ICON_PARENS, "$1");
  if (updated === original) return false;
  if (!dryRun) fs.writeFileSync(filePath, updated, "utf8");
  return true;
}

function walk(dir: string, changed: string[]) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, changed);
    else if (entry.isFile() && entry.name.endsWith(".md")) {
      if (processFile(full)) changed.push(path.relative(ROOT, full));
    }
  }
}

const locales = localeArgs.length > 0
  ? localeArgs
  : fs.readdirSync(ROOT).filter(name => {
      const full = path.join(ROOT, name);
      return fs.statSync(full).isDirectory() && !name.startsWith(".") && name !== "scripts" && name !== "node_modules";
    });

let total = 0;
for (const locale of locales) {
  const dir = path.join(ROOT, locale);
  if (!fs.existsSync(dir)) { console.warn(`Directory not found: ${dir}`); continue; }
  const changed: string[] = [];
  walk(dir, changed);
  if (changed.length > 0) {
    console.log(`\n${locale} (${changed.length} file${changed.length > 1 ? "s" : ""})`);
    for (const f of changed) console.log(`  ${f}`);
    total += changed.length;
  }
}

console.log(`\n${dryRun ? "[DRY RUN] " : ""}${total} file${total !== 1 ? "s" : ""} updated.`);
