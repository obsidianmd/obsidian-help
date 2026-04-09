#!/usr/bin/env tsx
/**
 * push-en-site-options.ts
 * Usage: npx tsx scripts/push-en-site-options.ts [--dry-run]
 *
 * Pushes site options from en/site-options.json to the EN Publish site
 * via `ob publish-site-options`.
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

function buildArgs(opts: Partial<SiteOptions>): string[] {
  const args: string[] = [];
  const flag = (name: string, val: unknown) => {
    if (val === undefined) return;
    if (typeof val === "boolean") args.push(`--${name}`, String(val));
    else if (Array.isArray(val)) args.push(`--${name}`, val.join(","));
    else args.push(`--${name}`, String(val));
  };
  flag("site-name",          opts.siteName);
  flag("index-file",         opts.indexFile);
  flag("logo",               opts.logo);
  flag("show-navigation",    opts.showNavigation);
  flag("show-graph",         opts.showGraph);
  flag("show-outline",       opts.showOutline);
  flag("show-search",        opts.showSearch);
  flag("show-backlinks",     opts.showBacklinks);
  flag("show-hover-preview", opts.showHoverPreview);
  flag("show-theme-toggle",  opts.showThemeToggle);
  // "system" is not a valid CLI value; only "light" / "dark" are accepted
  if (opts.defaultTheme === "light" || opts.defaultTheme === "dark") {
    flag("default-theme", opts.defaultTheme);
  }
  flag("readable-line-length", opts.readableLineLength);
  flag("strict-line-breaks", opts.strictLineBreaks);
  flag("hide-title",         opts.hideTitle);
  flag("sliding-window",     opts.slidingWindow);
  flag("nav-order",          opts.navigationOrdering);
  flag("nav-hidden",         opts.navigationHiddenItems);
  return args;
}

if (!fs.existsSync(JSON_PATH)) {
  console.error(`Error: ${JSON_PATH} not found`);
  process.exit(1);
}

const opts: SiteOptions = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
const args = buildArgs(opts);
const cmd = `ob publish-site-options --path ${JSON.stringify(EN_DIR)} ${args.map(a => JSON.stringify(a)).join(" ")}`;

if (dryRun) {
  console.log("[DRY RUN] Would execute:\n");
  console.log(cmd);
} else {
  console.log("Pushing site options to EN...");
  execSync(cmd, { stdio: "inherit" });
  console.log("Done.");
}
