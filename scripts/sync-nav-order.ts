#!/usr/bin/env tsx
/**
 * sync-nav-order.ts
 * Usage: npx tsx scripts/sync-nav-order.ts <locale> [--dry-run]
 *
 * Reads the EN nav order from `ob publish-site-options`, translates each path
 * to its locale equivalent using filenames.txt, then applies it via
 * `ob publish-site-options --nav-order`.
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");

const locale = process.argv[2];
const dryRun = process.argv.includes("--dry-run");

if (!locale) {
  console.error("Usage: npx tsx scripts/sync-nav-order.ts <locale> [--dry-run]");
  process.exit(1);
}

// ── Load filenames.txt ────────────────────────────────────────────────────────

interface FilenamesMap {
  files: Record<string, string>;   // permalink → locale filename (no .md)
  folders: Record<string, string>; // EN folder name → locale folder name
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

// ── Build EN path → permalink map ─────────────────────────────────────────────

function buildEnPathMap(enDir: string): Record<string, string> {
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

// ── Translate a single nav order path ────────────────────────────────────────

function translatePath(enPath: string, filenamesMap: FilenamesMap, permalinkMap: Record<string, string>): string {
  const normalised = enPath.split("/").join(path.sep);

  if (enPath.endsWith(".md")) {
    const permalink = permalinkMap[normalised];
    if (!permalink) return enPath; // unknown file — keep as-is

    const parts = enPath.split("/");
    const folders = parts.slice(0, -1).map(seg => filenamesMap.folders[seg] ?? seg);
    const filename = filenamesMap.files[permalink] ?? parts[parts.length - 1].slice(0, -3);
    return [...folders, `${filename}.md`].join("/");
  }

  // Folder or non-.md asset
  return filenamesMap.folders[enPath] ?? enPath;
}

// ── Main ──────────────────────────────────────────────────────────────────────

const enDir = path.join(ROOT, "en");
const localeDir = path.join(ROOT, locale);

if (!fs.existsSync(localeDir)) {
  console.error(`Locale directory not found: ${localeDir}`);
  process.exit(1);
}

// Get EN nav order
const enOptions = execSync(`ob publish-site-options --path ${enDir}`, { encoding: "utf8" });
const navMatch = enOptions.match(/navigationOrdering: (\[[\s\S]*?\])(?=\n\s*\w|$)/);
if (!navMatch) {
  console.error("Could not parse navigationOrdering from ob publish-site-options output");
  process.exit(1);
}
const enNavOrder: string[] = JSON.parse(navMatch[1]);

const filenamesMap = loadFilenamesTxt(path.join(localeDir, "filenames.txt"));
const permalinkMap = buildEnPathMap(enDir);

const localizedOrder = enNavOrder.map(p => translatePath(p, filenamesMap, permalinkMap));

if (dryRun) {
  console.log("Localized nav order for", locale);
  localizedOrder.forEach((loc, i) => {
    const en = enNavOrder[i];
    if (loc !== en) console.log(`  ${en}\n    → ${loc}`);
    else console.log(`  ${en}`);
  });
} else {
  execSync(
    `ob publish-site-options --path ${localeDir} --nav-order ${JSON.stringify(localizedOrder.join(","))}`,
    { stdio: "inherit" }
  );
  console.log(`Nav order applied to ${locale} (${localizedOrder.length} entries)`);
}
