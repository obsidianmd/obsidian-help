#!/usr/bin/env tsx
/**
 * setup-sites.ts
 * Links all help-* Obsidian Publish sites to their local locale directories.
 *
 * Usage:
 *   npx tsx scripts/setup-sites.ts [--dry-run]
 *
 * Mirrors the "Link publish sites" step in the GitHub Actions workflows:
 *   - Lists all sites via `ob publish-list-sites`
 *   - Matches "help" → en, "help-<locale>" → <locale>
 *   - Runs `ob publish-setup --site <id> --path <localePath>` for each match
 */

import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SCRIPTS_DIR = import.meta.dirname;

// Build a map from lowercase locale code → actual directory name from locales.json
const localesJson: Array<{ code: string; dir?: string }> = JSON.parse(
  fs.readFileSync(path.join(SCRIPTS_DIR, "locales.json"), "utf8")
);
const localeDir = new Map<string, string>();
for (const entry of localesJson) {
  const dir = entry.dir ?? entry.code;
  localeDir.set(dir.toLowerCase(), dir);
}

const dryRun = process.argv.includes("--dry-run");

// ── Parse ob publish-list-sites ───────────────────────────────────────────────

const raw = execSync("ob publish-list-sites", { encoding: "utf8" });

// Each site line looks like:   <32-hex-id>  "slug"
const SITE_RE = /^\s+([0-9a-f]{32})\s+"(help(?:-[^"]+)?)"$/;

interface Site { id: string; slug: string; locale: string; }

const sites: Site[] = [];
for (const line of raw.split("\n")) {
  const m = line.match(SITE_RE);
  if (!m) continue;
  const [, id, slug] = m;
  const locale = slug === "help" ? "en" : slug.slice("help-".length);
  sites.push({ id, slug, locale });
}

if (sites.length === 0) {
  console.log("No help-* sites found.");
  process.exit(0);
}

console.log(`Found ${sites.length} help site(s)${dryRun ? " [DRY RUN]" : ""}:\n`);

let linked = 0, skipped = 0;

for (const { id, slug, locale } of sites) {
  // Resolve actual directory name from locales.json (handles mixed-case like zh-TW)
  const actualLocale = localeDir.get(locale.toLowerCase()) ?? locale;
  const localePath = path.join(ROOT, actualLocale);
  if (!fs.existsSync(localePath)) {
    console.log(`  SKIP  "${slug}" — no ${actualLocale}/ directory`);
    skipped++;
    continue;
  }

  const cmd = `ob publish-setup --site ${id} --path ${JSON.stringify(localePath)}`;
  console.log(`  LINK  "${slug}" (${id}) → ${actualLocale}/`);

  if (!dryRun) {
    execSync(cmd, { stdio: "inherit" });
  }
  linked++;
}

console.log(`\nLinked: ${linked}  Skipped: ${skipped}`);
if (dryRun) console.log("[DRY RUN] No changes written.");
