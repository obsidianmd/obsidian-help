#!/usr/bin/env tsx
/**
 * pull-en-site-options.ts
 * Usage: npx tsx scripts/pull-en-site-options.ts [--dry-run]
 *
 * Pulls site options from the EN Publish site via `ob publish-site-options`
 * and saves them to en/site-options.json.
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const ROOT = path.resolve(import.meta.dirname, "..");
const EN_DIR = path.join(ROOT, "en");
const JSON_PATH = path.join(EN_DIR, "site-options.json");

const dryRun = process.argv.includes("--dry-run");

interface SiteOptions {
  siteName?: string;
  indexFile?: string;
  logo?: string;
  showNavigation?: boolean;
  showGraph?: boolean;
  showOutline?: boolean;
  showSearch?: boolean;
  showBacklinks?: boolean;
  showHoverPreview?: boolean;
  showThemeToggle?: boolean;
  defaultTheme?: string;
  readableLineLength?: boolean;
  strictLineBreaks?: boolean;
  hideTitle?: boolean;
  slidingWindow?: boolean;
  navigationOrdering?: string[];
  navigationHiddenItems?: string[];
}

function parseSiteOptions(raw: string): SiteOptions {
  const opts: SiteOptions = {};
  for (const line of raw.split("\n")) {
    const m = line.match(/^\s{2}(\w+): (.+)$/);
    if (!m) continue;
    const [, key, val] = m;
    if (val === "true" || val === "false") {
      (opts as Record<string, unknown>)[key] = val === "true";
    } else if (val.startsWith("[")) {
      (opts as Record<string, unknown>)[key] = JSON.parse(val);
    } else {
      (opts as Record<string, unknown>)[key] = val.replace(/^"|"$/g, "");
    }
  }
  return opts;
}

console.log("Pulling site options from EN...");
const raw = execSync(`ob publish-site-options --path ${JSON.stringify(EN_DIR)}`, { encoding: "utf8" });
const opts = parseSiteOptions(raw);

if (Object.keys(opts).length === 0) {
  console.error("Error: no site options returned from EN. Is the site linked?");
  process.exit(1);
}

const json = JSON.stringify(opts, null, 2) + "\n";

if (dryRun) {
  console.log("[DRY RUN] Would write to en/site-options.json:\n");
  console.log(json);
} else {
  fs.writeFileSync(JSON_PATH, json);
  console.log(`Saved to ${JSON_PATH}`);
}
