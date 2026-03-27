#!/usr/bin/env tsx
/**
 * One-time migration: remaps da/ files with Danish permalinks to EN permalinks.
 * Uses filenames.txt for auto-matching, with explicit overrides for edge cases.
 * Adds the old Danish permalink as an alias for backward-compat.
 *
 * Usage:
 *   npx tsx scripts/remap-da-permalinks.ts [--apply]
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");
const DA_DIR = path.join(ROOT, "da");
const EN_DIR = path.join(ROOT, "en");
const FILENAMES_TXT = path.join(DA_DIR, "filenames.txt");
const APPLY = process.argv.includes("--apply");

// ─── Explicit overrides ───────────────────────────────────────────────────
// Keys = current DA basename (no .md), values = target EN permalink (or null to skip)
const OVERRIDES: Record<string, string | null> = {
  // Unmatched
  "Basesyntaks":                          "bases/syntax",
  "Kort view":                            "bases/views/cards",
  "Landkort view":                        "bases/views/map",
  "Liste view":                           "bases/views/list",
  "Tabel view":                           "bases/views/table",
  "Tidsplan for baser":                   null, // empty stub, no EN equivalent
  "Views":                                "bases/views",
  "Stil guide":                           "style-guide",
  "Sidepanel":                            "sidebar",
  "Konfigurationsmappen":                 "configuration-folder",
  "Brug af mobil appen":                  "mobile",
  "Sandkasseboksen":                      "sandbox",
  "Officielt websted":                    "official-site",
  "Tofaktorgodkendelse":                  "2fa",
  "Egenskabsvisning":                     "plugins/properties",
  "Hurtigskifter":                        "plugins/quick-switcher",
  "Kommandopaletten":                     "plugins/command-palette",
  "Lærred":                               "plugins/canvas",
  "Ordtæller":                            "plugins/word-count",
  "Stifinder":                            "plugins/file-explorer",
  "Tagsvisning":                          "plugins/tags",
  "Unik note opretter":                   "plugins/unique-note",
  "Webvisning":                           "plugins/web-viewer",
  "Avanceret formaterings syntaks":       "advanced-syntax",
  "Grundlæggende formaterings syntaks":   "syntax",
  "Obsidians Markdown format":            "obsidian-flavored-markdown",
  "Sammenfoldning":                       "folding",
  "Tastaturgenveje":                      "editing-shortcuts",
  // Previously unmatched (added after dry-run)
  "Financielle bidrag":                   "financial-contributions",
  "For udviklere":                        "developers",
  "Pop-op vinduer":                       "pop-out-windows",
  "Håndter bokse":                        "manage-vaults",
  "Symbolske links og knudepunkter":      "symlinks",
  "Download og installer Obsidian":       "install",
  "Tidlig adgang til nye versioner":      "early-access",
  "Multiple markører":                    "multiple-cursors",
  "Views og redigeringstilstand":         "edit-and-read",
  // Incorrect auto-matches — override with correct EN permalink
  "Håndter noter":                        "manage-notes",
  "Forhåndsvisning af note":              "plugins/page-preview",
  "Note værktøj":                         "plugins/note-composer",
  "Slash kommandoer":                     "plugins/slash-commands",
  "Skabeloner":                           "plugins/templates",
  "Plugin sikkerhed":                     "plugin-security",
};

// ─── Load filenames.txt (translation → permalink reverse index) ───────────
const translationToPermalink = new Map<string, string>();
{
  let currentPermalink = "";
  for (const line of fs.readFileSync(FILENAMES_TXT, "utf8").split("\n")) {
    const t = line.trim();
    if (t.startsWith("[file.")) {
      currentPermalink = t.slice(6, -1);
    } else if (t.startsWith("translation=")) {
      const translation = t.slice("translation=".length).toLowerCase();
      translationToPermalink.set(translation, currentPermalink);
    }
  }
}
console.log(`Loaded ${translationToPermalink.size} entries from filenames.txt`);

// ─── Collect EN permalinks ─────────────────────────────────────────────────
const enPermalinks = new Set<string>();
function walkEn(dir: string) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) { walkEn(full); continue; }
    if (!e.name.endsWith(".md")) continue;
    const parsed = matter(fs.readFileSync(full, "utf8"));
    if (parsed.data?.permalink) enPermalinks.add(parsed.data.permalink as string);
  }
}
walkEn(EN_DIR);

// ─── Normalize ────────────────────────────────────────────────────────────
function normalize(s: string): string {
  return s.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}

// ─── Collect DA files with non-EN permalinks ──────────────────────────────
interface DAFile {
  full: string;
  basename: string;
  parsed: matter.GrayMatterFile<string>;
}

function walkDa(dir: string, results: DAFile[] = []): DAFile[] {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) { walkDa(full, results); continue; }
    if (!e.name.endsWith(".md")) continue;
    const parsed = matter(fs.readFileSync(full, "utf8"));
    const permalink = parsed.data?.permalink as string | undefined;
    if (!permalink || enPermalinks.has(permalink)) continue;
    results.push({ full, basename: e.name.replace(/\.md$/, ""), parsed });
  }
  return results;
}
const toRemap = walkDa(DA_DIR);
console.log(`Found ${toRemap.length} files with non-EN permalinks\n`);

// ─── Match and apply ───────────────────────────────────────────────────────
let matched = 0, skipped = 0, unmatched = 0;

for (const { full, basename, parsed } of toRemap) {
  const oldPermalink = parsed.data.permalink as string;

  // 1. Explicit override
  let newPermalink: string | null | undefined = OVERRIDES[basename];
  let matchType = "override";

  // 2. Exact match via filenames.txt translation
  if (newPermalink === undefined) {
    newPermalink = translationToPermalink.get(basename.toLowerCase()) ?? undefined;
    matchType = "exact";
  }

  // 3. Fuzzy: normalized name
  if (newPermalink === undefined) {
    const normBase = normalize(basename);
    for (const [trans, perm] of translationToPermalink) {
      if (normalize(trans) === normBase) { newPermalink = perm; matchType = "fuzzy-norm"; break; }
    }
  }

  const rel = path.relative(DA_DIR, full);

  if (newPermalink === null) {
    console.log(`  SKIP  ${rel}  (no EN equivalent)`);
    skipped++;
    continue;
  }

  if (!newPermalink || !enPermalinks.has(newPermalink)) {
    console.log(`  UNMATCHED  "${basename}"  (permalink: ${oldPermalink})`);
    unmatched++;
    continue;
  }

  console.log(`  [${matchType}]  ${rel}  "${oldPermalink}" → "${newPermalink}"`);

  if (APPLY) {
    const newFm: Record<string, unknown> = { ...parsed.data as Record<string, unknown>, permalink: newPermalink };
    const existing = Array.isArray(newFm.aliases)
      ? (newFm.aliases as string[])
      : (newFm.aliases ? [String(newFm.aliases)] : []);
    if (!existing.includes(oldPermalink)) {
      newFm.aliases = [oldPermalink, ...existing];
    }
    fs.writeFileSync(full, matter.stringify(parsed.content, newFm, { lineWidth: -1 }), "utf8");
  }
  matched++;
}

console.log(`\nMatched: ${matched}  Skipped: ${skipped}  Unmatched: ${unmatched}`);
if (!APPLY) console.log("[DRY RUN] Run with --apply to write changes.");
