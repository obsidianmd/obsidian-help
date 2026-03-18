#!/usr/bin/env tsx
/**
 * migrate-fr.ts
 * Usage:
 *   npx tsx scripts/migrate-fr.ts           — dry run, prints proposed mapping
 *   npx tsx scripts/migrate-fr.ts --apply   — applies changes
 *
 * Adds frontmatter to existing French files by matching them to English files
 * using filename/heading similarity scoring with French→English translation.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");
const EN_DIR = path.join(ROOT, "en");
const FR_DIR = path.join(ROOT, "fr");

const apply = process.argv.includes("--apply");

// Fields to copy from EN (minus aliases)
const EN_FIELDS = ["permalink", "cssclasses", "description", "publish", "mobile"];

interface EnFile {
  absPath: string;
  relPath: string;
  filename: string;
  frontmatter: Record<string, unknown>;
  content: string;
  permalink: string;
  h1: string;
}

interface FrFile {
  absPath: string;
  relPath: string;
  filename: string;
  frontmatter: Record<string, unknown>;
  content: string;
  permalink?: string;
  h1: string;
}

// ─── French → English keyword translation ───────────────────────────────────
// Maps normalized French tokens to sets of English equivalents.
// Used to bridge the language gap during similarity scoring.

const FR_TO_EN: Record<string, string[]> = {
  // Navigation / structure
  demarrer: ["getting", "started", "start"],
  ici: ["here", "home", "start"],
  avance: ["advanced"],
  parametres: ["settings", "preferences", "configuration"],
  raccourcis: ["shortcuts", "hotkeys"],
  clavier: ["keyboard"],
  // Notes & files
  notes: ["notes", "note"],
  note: ["note", "notes"],
  prise: ["taking", "basic"],
  basique: ["basic"],
  creer: ["create", "creating"],
  creer: ["create"],
  gerer: ["manage", "managing"],
  importer: ["import", "importing"],
  fichiers: ["files", "file"],
  fichier: ["file", "files"],
  incrementes: ["incremental", "numbered"],
  suppression: ["delete", "deletion", "trash"],
  formats: ["formats", "format", "accepted"],
  acceptes: ["accepted", "formats"],
  // Editing & formatting
  formater: ["format", "formatting", "syntax"],
  vos: [],
  edition: ["editing", "edit"],
  apercu: ["preview"],
  modes: ["modes", "mode", "editing"],
  // Links
  liens: ["links", "linking", "link"],
  lien: ["link", "links"],
  internes: ["internal"],
  interne: ["internal"],
  retroliens: ["backlinks", "backlink"],
  retrolien: ["backlink", "backlinks"],
  // UI elements
  volets: ["panes", "pane", "tabs"],
  volet: ["pane", "panes"],
  lies: ["linked"],
  lie: ["linked"],
  listes: ["lists", "folding"],
  depliantes: ["folding", "collapse", "lists"],
  plusieurs: ["multiple"],
  coffres: ["vaults", "vault"],
  coffre: ["vault", "vaults"],
  mots: ["tags", "word"],
  cles: ["tags", "keywords"],
  palette: ["palette", "command"],
  commandes: ["commands", "command"],
  selecteur: ["switcher", "quick"],
  rapide: ["quick", "switcher"],
  plan: ["outline"],
  quotidiennes: ["daily"],
  // Plugins
  plugin: ["plugin", "plugins"],
  plugins: ["plugins", "plugin"],
  module: ["plugin", "core", "module"],
  modules: ["plugins", "core"],
  principaux: ["core"],
  importation: ["importer"],
  // Media / features
  afficheur: ["viewer", "web"],
  enregistreur: ["recorder", "audio"],
  audio: ["audio", "recorder"],
  explorateur: ["explorer", "file"],
  // Advanced
  stocke: ["store", "storage", "storing"],
  donnees: ["data"],
  nettoyage: ["sanitize", "clean", "html"],
  html: ["html"],
  versions: ["versions", "version"],
  beta: ["beta", "insider"],
  contribuer: ["contributing", "contribute"],
  contribution: ["contributing"],
  licence: ["license", "licence", "catalyst"],
  catalyst: ["catalyst", "license"],
  // Web clipper
  clipper: ["clipper", "web"],
  internet: ["web", "pages"],
  enregistrer: ["save", "saving", "clip"],
  pages: ["pages", "web"],
  introduction: ["introduction", "intro", "overview"],
  templates: ["templates", "template"],
  interpréteur: ["interpreter", "filter"],
  interpreteur: ["interpreter", "filter"],
  outil: ["tool"],
  surligner: ["highlight", "highlights"],
  contenu: ["content"],
  // Common noise (low signal)
  de: [],
  des: [],
  du: [],
  le: [],
  la: [],
  les: [],
  un: [],
  une: [],
  et: [],
  en: [],
  sur: [],
  avec: [],
  dans: [],
  par: [],
  pour: [],
  comment: [],
  obsidian: ["obsidian"],
  custom: ["custom"],
  css: ["css"],
  markdown: ["markdown"],
  format: ["format", "formatting"],
  converter: ["converter", "format"],
  search: ["search"],
  recherche: ["search"],
  slides: ["slides"],
  word: ["word"],
  count: ["count"],
  random: ["random"],
  zettelkasten: ["zettelkasten"],
  prefixer: ["prefixer"],
  publish: ["publish"],
  starred: ["starred", "bookmarks"],
  open: ["open"],
  default: ["default"],
  app: ["app"],
};

function translateFrTokens(tokens: string[]): string[] {
  const translated: string[] = [];
  for (const t of tokens) {
    const mapped = FR_TO_EN[t];
    if (mapped && mapped.length > 0) {
      translated.push(...mapped);
    } else if (!FR_TO_EN[t]) {
      // Unknown token — keep as-is (might be a proper noun or shared word)
      translated.push(t);
    }
    // If mapped === [] (noise word), drop it
  }
  return translated;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function normalize(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents
    .toLowerCase()
    .replace(/[-_']/g, " ")
    .replace(/[^a-z0-9 ]/g, "")
    .trim();
}

function tokenize(s: string): string[] {
  return normalize(s).split(/\s+/).filter(Boolean);
}

function tokenSet(tokens: string[]): Set<string> {
  return new Set(tokens);
}

function jaccardScore(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let intersect = 0;
  for (const t of a) if (b.has(t)) intersect++;
  const union = new Set([...a, ...b]).size;
  return intersect / union;
}

function extractH1(content: string): string {
  const m = content.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : "";
}

// ─── Collect files ────────────────────────────────────────────────────────────

function collectEn(): EnFile[] {
  const results: EnFile[] = [];

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile() && entry.name.endsWith(".md")) {
        const raw = fs.readFileSync(full, "utf8");
        const parsed = matter(raw);
        const permalink = parsed.data?.permalink as string | undefined;
        if (!permalink) continue;
        results.push({
          absPath: full,
          relPath: path.relative(EN_DIR, full),
          filename: entry.name.replace(/\.md$/, ""),
          frontmatter: parsed.data as Record<string, unknown>,
          content: parsed.content,
          permalink,
          h1: extractH1(parsed.content),
        });
      }
    }
  }

  walk(EN_DIR);
  return results;
}

function collectFr(): FrFile[] {
  const results: FrFile[] = [];

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile() && entry.name.endsWith(".md")) {
        const raw = fs.readFileSync(full, "utf8");
        const parsed = matter(raw);
        results.push({
          absPath: full,
          relPath: path.relative(FR_DIR, full),
          filename: entry.name.replace(/\.md$/, ""),
          frontmatter: parsed.data as Record<string, unknown>,
          content: parsed.content,
          permalink: parsed.data?.permalink as string | undefined,
          h1: extractH1(parsed.content),
        });
      }
    }
  }

  walk(FR_DIR);
  return results;
}

// ─── Explicit per-file mappings ───────────────────────────────────────────────
// For French files whose names are too different from English to auto-match.
// Keys are FR relative paths (from fr/ root). Values are EN permalinks.
// These are applied before the scoring algorithm.

const EXPLICIT_MAPPINGS: Record<string, string> = {
  // Advanced Use
  "Advanced Use/Comment Obsidian stocke vos données.md": "data-storage",
  "Advanced Use/Contribuer sur Obsidian.md": "translations",
  "Advanced Use/Versions Beta.md": "early-access",
  // How to
  "Démarrer ici.md": "/",
  "How to/Fichiers incrémentés.md": "plugins/unique-note",
  "How to/Formater vos notes.md": "syntax",
  "How to/Listes dépliantes.md": "folding",
  "How to/Modes édition et aperçu.md": "edit-and-read",
  "How to/Paramètres.md": "settings",
  "How to/Prise de note basique.md": "link-notes",
  "How to/Raccourcis clavier.md": "hotkeys",
  "How to/Travailler avec plusieurs coffres.md": "manage-vaults",
  "How to/Travailler avec plusieurs notes.md": "tabs",
  "How to/Travailler avec plusieurs volets.md": "workspace",
  // Plugins
  "Plugins/Custom CSS.md": "snippets",
  "Plugins/Module d'importation.md": "plugins/importer",
  "Plugins/Modules principaux/Module des rétroliens.md": "plugins/backlinks",
  "Plugins/Modules principaux/Volet des Mots-clés.md": "plugins/tags",
  "Plugins/Open in default app.md": "plugins/file-explorer",
  "Plugins/Starred notes.md": "plugins/bookmarks",
  "Plugins/Zettelkasten prefixer.md": "plugins/unique-note",
  // Plugins (overrides for incorrect auto-matches)
  "Plugins/Publish.md": "publish",
  "Plugins/Templates.md": "plugins/templates",
  // Web Clipper
  "Plugins/Web Clipper/Créer des templates.md": "web-clipper/templates",
  "Plugins/Web Clipper/L'outil Interpréteur.md": "web-clipper/interpreter",
  "Plugins/Web Clipper/Surligner du contenu.md": "web-clipper/highlight",
};

// ─── Matching ─────────────────────────────────────────────────────────────────

const SCORE_THRESHOLD = 0.2;

interface Match {
  frFile: FrFile;
  enFile: EnFile | null;
  score: number;
  confident: boolean;
}

function findBestMatch(frFile: FrFile, enFiles: EnFile[]): { enFile: EnFile; score: number } | null {
  // Check explicit mapping table first
  const explicitPermalink = EXPLICIT_MAPPINGS[frFile.relPath];
  if (explicitPermalink) {
    const direct = enFiles.find((e) => e.permalink === explicitPermalink);
    if (direct) return { enFile: direct, score: 1.0 };
  }

  // If FR file already has a permalink, find EN file with that permalink directly
  if (frFile.permalink) {
    const direct = enFiles.find((e) => e.permalink === frFile.permalink);
    if (direct) return { enFile: direct, score: 1.0 };
  }

  // Translate FR filename tokens to EN equivalents
  const frNameRaw = tokenize(frFile.filename);
  const frNameTranslated = translateFrTokens(frNameRaw);
  const frNameSet = tokenSet(frNameTranslated);

  // Translate FR h1 tokens
  const frH1Raw = tokenize(frFile.h1);
  const frH1Translated = translateFrTokens(frH1Raw);
  const frH1Set = tokenSet(frH1Translated);

  let best: EnFile | null = null;
  let bestScore = -1;

  for (const enFile of enFiles) {
    const enNameSet = tokenSet(tokenize(enFile.filename));
    const enH1Set = tokenSet(tokenize(enFile.h1));

    const nameScore = jaccardScore(frNameSet, enNameSet);
    const h1Score = frH1Set.size > 0 && enH1Set.size > 0
      ? jaccardScore(frH1Set, enH1Set)
      : 0;

    // Weight: filename 60%, h1 40%
    const combined = nameScore * 0.6 + h1Score * 0.4;

    if (combined > bestScore) {
      bestScore = combined;
      best = enFile;
    }
  }

  if (!best || bestScore < SCORE_THRESHOLD) return null;
  return { enFile: best, score: bestScore };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const enFiles = collectEn();
const frFiles = collectFr();

console.log(`Found ${enFiles.length} EN files with permalink, ${frFiles.length} FR files.\n`);

const matches: Match[] = [];

for (const frFile of frFiles) {
  const result = findBestMatch(frFile, enFiles);
  matches.push({
    frFile,
    enFile: result?.enFile ?? null,
    score: result?.score ?? 0,
    confident: (result?.score ?? 0) >= 0.35,
  });
}

// Sort: matched first (by score desc), then unmatched
matches.sort((a, b) => {
  if (a.enFile && !b.enFile) return -1;
  if (!a.enFile && b.enFile) return 1;
  return b.score - a.score;
});

// Print proposed mapping table
console.log("Proposed mapping:");
console.log("─".repeat(110));

const matched = matches.filter((m) => m.enFile !== null);
const unmatched = matches.filter((m) => m.enFile === null);

for (const m of matched) {
  const confidence = m.confident ? "confident" : "uncertain";
  const scoreStr = `${(m.score * 100).toFixed(0)}%`;
  const enPermalink = m.enFile!.permalink;
  console.log(
    `  fr/${m.frFile.relPath.padEnd(58)}  →  ${enPermalink.padEnd(42)}  [${confidence} ${scoreStr}]`
  );
}

if (unmatched.length > 0) {
  console.log("\nUnmatched FR files (need manual review):");
  for (const m of unmatched) {
    console.log(`  fr/${m.frFile.relPath}`);
  }
}

console.log("\n" + "─".repeat(110));
console.log(`Matched: ${matched.length}, Unmatched: ${unmatched.length}`);

if (!apply) {
  console.log("\n[DRY RUN] Run with --apply to apply changes.");
  process.exit(0);
}

// ─── Apply ────────────────────────────────────────────────────────────────────

console.log("\nApplying changes...\n");

let applied = 0;
let skipped = 0;

for (const m of matched) {
  const { frFile, enFile } = m;

  // Build new frontmatter
  const newFm: Record<string, unknown> = { ...frFile.frontmatter };

  // Copy EN fields
  for (const field of EN_FIELDS) {
    if (field in enFile!.frontmatter) {
      newFm[field] = enFile!.frontmatter[field];
    }
  }

  // Add old FR relative path to aliases for backward-compat redirects
  const oldAlias = frFile.relPath.replace(/\.md$/, "");
  const existingAliases = (frFile.frontmatter.aliases as string[] | undefined) ?? [];
  const newAliases = Array.from(new Set([...existingAliases, oldAlias]));
  newFm.aliases = newAliases;

  // Write file back
  const newContent = matter.stringify(frFile.content, newFm);
  fs.writeFileSync(frFile.absPath, newContent, "utf8");
  console.log(`  APPLIED  fr/${frFile.relPath}  →  ${enFile!.permalink}`);
  applied++;
}

for (const m of unmatched) {
  console.log(`  SKIPPED  fr/${m.frFile.relPath}  (no match found)`);
  skipped++;
}

console.log(`\nDone. Applied: ${applied}, Skipped: ${skipped}`);
