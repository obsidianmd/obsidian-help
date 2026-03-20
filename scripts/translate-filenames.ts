#!/usr/bin/env tsx
/**
 * translate-filenames.ts
 * Translates EN file and folder names to the target locale, keyed by permalink.
 * Output: <locale>/filenames.txt
 *
 * Usage:
 *   npx tsx scripts/translate-filenames.ts <locale> [--dry-run]
 *
 * filenames.txt format:
 *   [file.{permalink}]
 *   original=EN filename
 *   translation=Locale filename
 *
 *   [folder.{EN Folder Name}]
 *   original=EN Folder Name
 *   translation=Locale Folder Name
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");
const SCRIPTS_DIR = import.meta.dirname;

// Load .env
const envPath = path.resolve(ROOT, ".env");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim();
  }
}

const args = process.argv.slice(2);
const locale = args[0];
const dryRun = args.includes("--dry-run");

if (!locale) {
  console.error("Usage: npx tsx scripts/translate-filenames.ts <locale> [--dry-run]");
  process.exit(1);
}

const enDir = path.join(ROOT, "en");
const localeDir = path.join(ROOT, locale);
const filenamesTxtPath = path.join(localeDir, "filenames.txt");

// ─── Config ──────────────────────────────────────────────────────────────────

interface LLMConfig {
  apiEndpoint: string;
  apiKey: string;
  model: string;
  delayMs?: number;
}

function loadConfig(): LLMConfig {
  const configPath = path.join(SCRIPTS_DIR, "llm-config.json");
  const file = fs.existsSync(configPath) ? JSON.parse(fs.readFileSync(configPath, "utf8")) : {};
  const config: LLMConfig = {
    apiEndpoint: process.env.LLM_API_ENDPOINT ?? file.apiEndpoint ?? "https://api.anthropic.com/v1/messages",
    apiKey: process.env.ANTHROPIC_API_KEY ?? file.apiKey ?? "",
    model: process.env.LLM_MODEL ?? file.model ?? "claude-opus-4-6",
    delayMs: file.delayMs,
  };
  if (!config.apiKey) {
    console.error("No API key. Set ANTHROPIC_API_KEY or add apiKey to llm-config.json.");
    process.exit(1);
  }
  return config;
}

// ─── filenames.txt ────────────────────────────────────────────────────────────

export interface FilenamesMap {
  files: Record<string, string>;    // permalink → locale filename (no .md)
  folders: Record<string, string>;  // EN folder name → locale folder name
  fileOriginals: Record<string, string>; // permalink → EN basename (for serialization)
}

// Format:
//   [file.{permalink}]
//   original=EN filename
//   translation=locale filename
//
//   [folder.{EN folder name}]
//   original=EN folder name
//   translation=locale folder name

export function loadFilenamesTxt(p = filenamesTxtPath): FilenamesMap {
  const result: FilenamesMap = { files: {}, folders: {}, fileOriginals: {} };
  if (!fs.existsSync(p)) return result;
  let sectionType: "file" | "folder" | null = null;
  let sectionKey = "";
  let original = "";
  for (const line of fs.readFileSync(p, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith(";")) continue;
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      const name = trimmed.slice(1, -1);
      if (name.startsWith("file.")) {
        sectionType = "file";
        sectionKey = name.slice(5);
      } else if (name.startsWith("folder.")) {
        sectionType = "folder";
        sectionKey = name.slice(7);
      } else {
        sectionType = null;
      }
      original = "";
      continue;
    }
    const eq = trimmed.indexOf("=");
    if (eq === -1 || !sectionType) continue;
    const k = trimmed.slice(0, eq);
    const v = trimmed.slice(eq + 1);
    if (k === "original") {
      original = v;
    } else if (k === "translation") {
      if (sectionType === "file") {
        result.files[sectionKey] = v;
        if (original) result.fileOriginals[sectionKey] = original;
      } else if (sectionType === "folder") {
        result.folders[sectionKey] = v;
      }
    }
  }
  return result;
}

function saveFilenamesTxt(map: FilenamesMap) {
  const parts: string[] = [];
  for (const permalink of Object.keys(map.files).sort((a, b) => a.localeCompare(b))) {
    const original = map.fileOriginals[permalink] ?? permalink;
    const translation = map.files[permalink];
    parts.push(`[file.${permalink}]\noriginal=${original}\ntranslation=${translation}`);
  }
  for (const enFolder of Object.keys(map.folders).sort((a, b) => a.localeCompare(b))) {
    const translation = map.folders[enFolder];
    parts.push(`[folder.${enFolder}]\noriginal=${enFolder}\ntranslation=${translation}`);
  }
  fs.writeFileSync(filenamesTxtPath, parts.join("\n\n") + "\n", "utf8");
}

// ─── Collect EN names ─────────────────────────────────────────────────────────

// Folders that are proper nouns / technical — don't translate
const SKIP_FOLDERS = new Set(["Attachments", "Bases", "Obsidian Publish", "Obsidian Sync"]);

interface EnFile {
  permalink: string;
  basename: string; // without .md
}

function collectEn(): { files: EnFile[]; folders: string[] } {
  const files: EnFile[] = [];
  const folders = new Set<string>();

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith(".")) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!SKIP_FOLDERS.has(entry.name)) folders.add(entry.name);
        walk(full);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        const raw = fs.readFileSync(full, "utf8");
        const parsed = matter(raw);
        const permalink = parsed.data?.permalink as string | undefined;
        if (!permalink) continue;
        files.push({ permalink, basename: entry.name.replace(/\.md$/, "") });
      }
    }
  }

  walk(enDir);
  return { files, folders: [...folders].sort() };
}

// ─── LLM ─────────────────────────────────────────────────────────────────────

const LANGUAGE_NAMES: Record<string, string> = {
  fr: "French", de: "German", es: "Spanish", it: "Italian", ja: "Japanese",
  ko: "Korean", "pt-br": "Brazilian Portuguese", ru: "Russian", zh: "Chinese",
  ar: "Arabic", da: "Danish", vi: "Vietnamese", km: "Khmer", id: "Indonesian",
};

// Locale dir names that differ from their obsidian-translations file names
const LOCALE_TO_TRANSLATIONS_FILE: Record<string, string> = {
  "pt-br": "pt-BR",
  "km": "kh",
};

const PRESERVE_EN = new Set([
  "Obsidian", "Sync", "Publish", "Canvas", "Markdown", "CSS", "API",
  "Zettelkasten", "URI", "CLI", "Bases",
]);

/**
 * Load official UI string translations from obsidian-translations + obsidian-clipper.
 * Returns a Map of lowercased English original → locale translation.
 */
function loadFullGlossary(localeCode: string): Map<string, string> {
  const glossary = new Map<string, string>();
  const fileBase = LOCALE_TO_TRANSLATIONS_FILE[localeCode] ?? localeCode;
  const translationsFile = path.resolve(
    ROOT, "../obsidian-translations/translations", `${fileBase}.txt`
  );

  // Load all original→translation pairs from translations/<lang>.txt
  if (fs.existsSync(translationsFile)) {
    let original = "";
    for (const line of fs.readFileSync(translationsFile, "utf8").split("\n")) {
      const trimmed = line.trim();
      if (trimmed.startsWith("[") && trimmed.endsWith("]")) { original = ""; continue; }
      if (trimmed.startsWith("original=")) { original = trimmed.slice("original=".length); }
      else if (trimmed.startsWith("translation=")) {
        const translation = trimmed.slice("translation=".length);
        if (translation && original) glossary.set(original.toLowerCase(), translation);
      }
    }
  }

  // Also load from obsidian-clipper _locales/<lang>/messages.json
  const CLIPPER_LOCALE_MAP: Record<string, string> = { zh: "zh_CN", "pt-br": "pt_BR" };
  const clipperCode = CLIPPER_LOCALE_MAP[localeCode] ?? localeCode;
  const clipperFile = path.resolve(ROOT, `../obsidian-clipper/src/_locales/${clipperCode}/messages.json`);
  const clipperEnFile = path.resolve(ROOT, `../obsidian-clipper/src/_locales/en/messages.json`);
  if (fs.existsSync(clipperFile) && fs.existsSync(clipperEnFile)) {
    const clipperLocale = JSON.parse(fs.readFileSync(clipperFile, "utf8")) as Record<string, { message: string }>;
    const clipperEn = JSON.parse(fs.readFileSync(clipperEnFile, "utf8")) as Record<string, { message: string }>;
    for (const [key, enEntry] of Object.entries(clipperEn)) {
      const enText = enEntry.message?.toLowerCase();
      const localeEntry = clipperLocale[key];
      if (enText && localeEntry?.message && !glossary.has(enText)) {
        glossary.set(enText, localeEntry.message);
      }
    }
  }

  return glossary;
}

/**
 * Filter the full glossary to terms relevant to the given EN filenames/folders,
 * formatted as "English = Translation" lines for the LLM prompt.
 */
function buildRelevantGlossary(glossary: Map<string, string>, inputs: string[]): string {
  const haystack = inputs.join(" ").toLowerCase();
  const entries: string[] = [];
  for (const [en, translation] of glossary) {
    if (haystack.includes(en) && translation !== en && !PRESERVE_EN.has(en)) {
      entries.push(`${en} = ${translation}`);
    }
  }
  return entries.join("\n");
}

async function callLLM(config: LLMConfig, system: string, user: string): Promise<string> {
  const res = await fetch(config.apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": config.apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: config.model,
      max_tokens: 4096,
      system,
      messages: [{ role: "user", content: user }],
    }),
  });
  if (!res.ok) throw new Error(`LLM error ${res.status}: ${await res.text()}`);
  const data = await res.json() as { content: Array<{ text: string }> };
  return data.content[0].text;
}

function extractJSON(text: string): Record<string, string> {
  let s = text.trim();
  if (s.startsWith("```")) {
    const m = s.match(/```(?:json)?\s*\n([\s\S]*?)\n```/);
    if (m) s = m[1];
  }
  return JSON.parse(s);
}

async function translateFolders(
  config: LLMConfig,
  folders: string[],
  langName: string,
  glossary: Map<string, string>,
): Promise<Record<string, string>> {
  const relevant = buildRelevantGlossary(glossary, folders);
  const system = `You are translating Obsidian Help documentation folder names to ${langName}.
RULES:
1. Never translate brand names or technical terms: "Obsidian Sync", "Obsidian Publish", "Obsidian Web Clipper", Obsidian, Sync, Publish, Markdown, CSS, API, Canvas, Plugins, Teams, Bases, Attachments
2. Keep translations concise — these are folder names
3. Return ONLY a valid JSON object: { "EN folder": "Locale folder" }${relevant ? `

OFFICIAL APP TRANSLATIONS (use these exactly — do not translate differently):
${relevant}` : ""}`;

  const result = await callLLM(config, system,
    `Translate these folder names to ${langName}:\n${JSON.stringify(folders, null, 2)}`);
  return extractJSON(result);
}

async function translateFiles(
  config: LLMConfig,
  files: EnFile[],
  langName: string,
  glossary: Map<string, string>,
): Promise<Record<string, string>> {
  const input = Object.fromEntries(files.map(f => [f.permalink, f.basename]));
  const relevant = buildRelevantGlossary(glossary, files.map(f => f.basename));

  const system = `You are translating Obsidian Help documentation file names to ${langName}.
You will receive an object where keys are URL permalinks and values are the English file names.
Return an object with the SAME keys (permalinks) and translated ${langName} file names as values.

RULES:
1. Never translate: Obsidian, Sync, Publish, Markdown, CSS, API, Canvas, Zettelkasten, URI, CLI
2. Keep translations concise — these are file names, not sentences
3. Do NOT include .md extension
4. Return ONLY a valid JSON object: { "permalink": "Locale filename" }${relevant ? `

OFFICIAL APP TRANSLATIONS (use these exactly — do not translate differently):
${relevant}` : ""}`;

  const result = await callLLM(config, system,
    `Translate these Obsidian Help file names to ${langName}. Keys are permalinks (keep them as keys), values are English names to translate:\n${JSON.stringify(input, null, 2)}`);
  return extractJSON(result);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const config = loadConfig();
  const langName = LANGUAGE_NAMES[locale] ?? locale;
  const glossary = loadFullGlossary(locale);
  console.log(`Loaded glossary (${glossary.size} terms)`);
  const { files, folders } = collectEn();
  const existing = loadFilenamesTxt();

  // Ensure all EN basenames are recorded as originals
  for (const f of files) {
    if (!existing.fileOriginals[f.permalink]) {
      existing.fileOriginals[f.permalink] = f.basename;
    }
  }

  // Consider an entry untranslated if it's missing OR if translation still equals the EN original
  const missingFolders = folders.filter(f => !existing.folders[f] || existing.folders[f] === f);
  const missingFiles = files.filter(f => !existing.files[f.permalink] || existing.files[f.permalink] === f.basename);

  console.log(`${folders.length} folders (${missingFolders.length} untranslated)`);
  console.log(`${files.length} files (${missingFiles.length} untranslated)\n`);

  if (dryRun) {
    console.log("Missing folders:", missingFolders);
    console.log("\nMissing files (permalink: EN name):");
    for (const f of missingFiles) console.log(`  ${f.permalink}: ${f.basename}`);
    console.log("\n[DRY RUN] No changes written.");
    return;
  }

  // Translate folders
  if (missingFolders.length > 0) {
    console.log(`Translating ${missingFolders.length} folder names...`);
    const translated = await translateFolders(config, missingFolders, langName, glossary);
    for (const [en, fr] of Object.entries(translated)) {
      existing.folders[en] = fr;
      console.log(`  ${en} → ${fr}`);
    }
    saveFilenamesTxt(existing);
    await new Promise(r => setTimeout(r, config.delayMs ?? 1000));
  }

  // Translate files in batches of 50
  if (missingFiles.length > 0) {
    const BATCH = 50;
    for (let i = 0; i < missingFiles.length; i += BATCH) {
      const batch = missingFiles.slice(i, i + BATCH);
      console.log(`\nTranslating files ${i + 1}–${i + batch.length} of ${missingFiles.length}...`);
      const translated = await translateFiles(config, batch, langName, glossary);
      for (const [permalink, frName] of Object.entries(translated)) {
        existing.files[permalink] = frName;
        const enName = batch.find(f => f.permalink === permalink)?.basename ?? permalink;
        existing.fileOriginals[permalink] = enName;
        console.log(`  [${permalink}] ${enName} → ${frName}`);
      }
      saveFilenamesTxt(existing);
      if (i + BATCH < missingFiles.length) await new Promise(r => setTimeout(r, config.delayMs ?? 1000));
    }
  }

  console.log(`\nSaved to ${path.relative(ROOT, filenamesTxtPath)}`);
}

main().catch(err => { console.error(err); process.exit(1); });
