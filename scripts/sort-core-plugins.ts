#!/usr/bin/env tsx
/**
 * sort-core-plugins.ts
 * Usage: npx tsx scripts/sort-core-plugins.ts [locale ...]
 *
 * Sorts the plugin list on each locale's Core plugins page alphabetically
 * by display name, keeping each sub-bullet attached to its parent.
 *
 * The Core plugins page is identified as the list-cards file with the most
 * wikilink list items. If specific locales are given, only those are processed.
 */

import fs from "fs";
import path from "path";
import { globSync } from "fs";

const ROOT = path.resolve(import.meta.dirname, "..");

const cliArgs = process.argv.slice(2);

// ── Find the Core plugins file for a locale ───────────────────────────────────

function findCorePluginsFile(localeDir: string): string | null {
  let best: string | null = null;
  let bestCount = 0;
  for (const file of globSync("**/*.md", { cwd: localeDir })) {
    const full = path.join(localeDir, file);
    const content = fs.readFileSync(full, "utf8");
    if (!content.includes("list-cards")) continue;
    const count = (content.match(/^- \[\[/gm) ?? []).length;
    if (count > bestCount) {
      bestCount = count;
      best = full;
    }
  }
  return best;
}

// ── Sort the plugin list in a file ───────────────────────────────────────────

function sortPluginList(filepath: string): boolean {
  const content = fs.readFileSync(filepath, "utf8");
  const lines = content.split("\n");
  const result: string[] = [];
  let changed = false;
  let i = 0;

  while (i < lines.length) {
    if (!lines[i].startsWith("- [[")) {
      result.push(lines[i++]);
      continue;
    }

    // Collect a contiguous block of list items (parent + indented sub-bullets)
    const block: [string, string[]][] = [];
    while (i < lines.length && lines[i].startsWith("- [[")) {
      const parent = lines[i++];
      const subs: string[] = [];
      while (i < lines.length && lines[i].startsWith("\t")) {
        subs.push(lines[i++]);
      }
      block.push([parent, subs]);
    }

    // Sort by display name: the part after | or the full link text
    const sorted = [...block].sort(([a], [b]) => {
      const name = (line: string) => {
        const m = line.match(/^- \[\[(?:[^\]|]+\|)?([^\]]+)\]\]/);
        return m ? m[1].toLowerCase() : line.toLowerCase();
      };
      return name(a).localeCompare(name(b));
    });

    if (JSON.stringify(sorted) !== JSON.stringify(block)) changed = true;

    for (const [parent, subs] of sorted) {
      result.push(parent);
      result.push(...subs);
    }
  }

  if (changed) fs.writeFileSync(filepath, result.join("\n"));
  return changed;
}

// ── Main ──────────────────────────────────────────────────────────────────────

const locales = cliArgs.length > 0
  ? cliArgs
  : fs.readdirSync(ROOT).filter(name => {
      const full = path.join(ROOT, name);
      return fs.statSync(full).isDirectory() && !name.startsWith(".") && name !== "scripts";
    });

let sorted = 0, skipped = 0;

for (const locale of locales) {
  const localeDir = path.join(ROOT, locale);
  if (!fs.existsSync(localeDir)) {
    console.log(`${locale}: directory not found`);
    continue;
  }
  const file = findCorePluginsFile(localeDir);
  if (!file) {
    console.log(`${locale}: no Core plugins page found`);
    continue;
  }
  const changed = sortPluginList(file);
  const rel = path.relative(ROOT, file);
  if (changed) {
    console.log(`${locale}: sorted — ${rel}`);
    sorted++;
  } else {
    console.log(`${locale}: already sorted — ${rel}`);
    skipped++;
  }
}

console.log(`\n${sorted} sorted, ${skipped} already in order`);
