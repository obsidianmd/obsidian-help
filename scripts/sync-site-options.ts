#!/usr/bin/env tsx
/**
 * sync-site-options.ts
 * Usage: npx tsx scripts/sync-site-options.ts [locale ...] [--dry-run]
 *
 * Syncs Obsidian Publish site options from EN to each locale:
 *   - Copies all display/feature flags, logo, defaultTheme from EN
 *   - Translates navigationOrdering and navigationHiddenItems paths
 *   - Preserves each locale's existing siteName and indexFile
 *
 * If no locales are given, processes all non-en active locales.
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");
const SCRIPTS_DIR = import.meta.dirname;

type LocaleDef = { code: string; dir?: string; label: string; base: string };
const localeDefs: LocaleDef[] = JSON.parse(fs.readFileSync(path.join(SCRIPTS_DIR, "locales.json"), "utf8"));

const cliArgs = process.argv.slice(2);
const dryRun = cliArgs.includes("--dry-run");
const rest = cliArgs.filter(a => a !== "--dry-run");
const locales = rest.length > 0 ? rest : localeDefs
  .filter(l => (l.dir ?? l.code) !== "en")
  .map(l => l.dir ?? l.code);

// ── Parse ob publish-site-options output ──────────────────────────────────────

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

function getSiteOptions(localePath: string): SiteOptions {
  const raw = execSync(`ob publish-site-options --path ${JSON.stringify(localePath)}`, { encoding: "utf8" });
  const opts = parseSiteOptions(raw);
  // Fall back to site-options.json if the CLI returned empty options (e.g. EN)
  const jsonPath = path.join(localePath, "site-options.json");
  if (!opts.navigationOrdering && fs.existsSync(jsonPath)) {
    const json = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    return { ...json, ...opts };
  }
  return opts;
}

// ── Path translation (shared with sync-nav-order.ts logic) ───────────────────

interface FilenamesMap {
  files: Record<string, string>;
  folders: Record<string, string>;
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

function buildPermalinkMap(enDir: string): Record<string, string> {
  const map: Record<string, string> = {};
  function scan(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { scan(full); continue; }
      if (!entry.name.endsWith(".md")) continue;
      const rel = path.relative(enDir, full);
      const { data } = matter(fs.readFileSync(full, "utf8"));
      if (data.permalink) map[rel] = data.permalink;
    }
  }
  scan(enDir);
  return map;
}

function translatePath(enPath: string, fm: FilenamesMap, pm: Record<string, string>): string {
  if (enPath.endsWith(".md")) {
    const permalink = pm[enPath.split("/").join(path.sep)];
    if (!permalink) return enPath;
    const parts = enPath.split("/");
    const folders = parts.slice(0, -1).map(seg => fm.folders[seg] ?? seg);
    const filename = fm.files[permalink] ?? parts[parts.length - 1].slice(0, -3);
    return [...folders, `${filename}.md`].join("/");
  }
  return fm.folders[enPath] ?? enPath;
}

function translatePaths(paths: string[], fm: FilenamesMap, pm: Record<string, string>): string[] {
  return paths.map(p => translatePath(p, fm, pm));
}

// ── Build ob publish-site-options command args ────────────────────────────────

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

// ── Main ──────────────────────────────────────────────────────────────────────

const enDir = path.join(ROOT, "en");
const enOptions = getSiteOptions(enDir);
const permalinkMap = buildPermalinkMap(enDir);

// Fallback: logo is stable and can be hardcoded if EN returns empty
if (!enOptions.logo) {
  enOptions.logo = "Attachments/obsidian-lockup-help.svg";
}

if (dryRun) console.log("[DRY RUN] No changes will be applied.\n");

let ok = 0, failed = 0;

for (const locale of locales) {
  const localeDir = path.join(ROOT, locale);
  if (!fs.existsSync(localeDir)) {
    console.log(`── ${locale} SKIP (directory not found)\n`);
    continue;
  }

  console.log(`── ${locale}`);

  try {
    const fm = loadFilenamesTxt(path.join(localeDir, "filenames.txt"));

    // Derive indexFile: translate the EN home file's permalink ("/") to locale filename
    const homeFilename = fm.files["/"] ?? enOptions.indexFile ?? "Home";
    const homeFilePath = path.join(localeDir, `${homeFilename}.md`);
    const indexFile = homeFilename;

    // Derive siteName: read H1 from the locale home file
    let siteName: string | undefined;
    if (fs.existsSync(homeFilePath)) {
      const homeContent = fs.readFileSync(homeFilePath, "utf8");
      const h1Match = homeContent.match(/^# (.+)$/m);
      if (h1Match) siteName = h1Match[1].trim();
    }
    if (!siteName) {
      console.warn(`   Warning: could not derive siteName for ${locale} (no H1 in ${homeFilename}.md)`);
    }

    const merged: SiteOptions = {
      // Copy all EN display options
      logo:               enOptions.logo,
      showNavigation:     enOptions.showNavigation,
      showGraph:          enOptions.showGraph,
      showOutline:        enOptions.showOutline,
      showSearch:         enOptions.showSearch,
      showBacklinks:      enOptions.showBacklinks,
      showHoverPreview:   enOptions.showHoverPreview,
      showThemeToggle:    enOptions.showThemeToggle,
      defaultTheme:       enOptions.defaultTheme,
      readableLineLength: enOptions.readableLineLength,
      strictLineBreaks:   enOptions.strictLineBreaks,
      hideTitle:          enOptions.hideTitle,
      slidingWindow:      enOptions.slidingWindow,

      // Translate nav paths
      navigationOrdering:    enOptions.navigationOrdering
        ? translatePaths(enOptions.navigationOrdering, fm, permalinkMap)
        : undefined,
      navigationHiddenItems: enOptions.navigationHiddenItems
        ? translatePaths(enOptions.navigationHiddenItems, fm, permalinkMap)
        : undefined,

      // Derived locale-specific values
      siteName,
      indexFile,
    };

    const args = buildArgs(merged);
    const cmd = `ob publish-site-options --path ${JSON.stringify(localeDir)} ${args.map(a => JSON.stringify(a)).join(" ")}`;

    if (dryRun) {
      console.log(`   ${cmd}\n`);
    } else {
      execSync(cmd, { stdio: "inherit" });
      console.log(`   ✓ done\n`);
      ok++;
    }
  } catch (err: unknown) {
    const e = err as { message?: string };
    console.error(`   ✗ failed: ${e.message}\n`);
    failed++;
  }
}

if (!dryRun) {
  console.log(`--- Summary ---`);
  console.log(`  OK:     ${ok}`);
  if (failed > 0) {
    console.log(`  Failed: ${failed}`);
    process.exit(1);
  }
}
