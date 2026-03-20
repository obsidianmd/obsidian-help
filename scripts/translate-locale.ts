#!/usr/bin/env tsx
/**
 * translate-locale.ts
 * Usage:
 *   npx tsx scripts/translate-locale.ts <locale>                         # translate all localized:null files
 *   npx tsx scripts/translate-locale.ts <locale> --verify                # also mark stale translations for re-translation
 *   npx tsx scripts/translate-locale.ts <locale> --fix-links             # rewrite heading links in all translated files
 *   npx tsx scripts/translate-locale.ts <locale> --dry-run               # preview only
 *   npx tsx scripts/translate-locale.ts <locale> --file <rel-path>       # translate a single file
 *
 * Requires scripts/llm-config.json:
 * {
 *   "apiEndpoint": "https://api.anthropic.com/v1/messages",
 *   "apiKey": "sk-ant-...",
 *   "model": "claude-opus-4-6",
 *   "termsPath": "../../obsidian-translations/terms.txt",
 *   "delayMs": 1000
 * }
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Load .env from repo root
const envPath = path.resolve(import.meta.dirname, "../.env");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim();
  }
}

const ROOT = path.resolve(import.meta.dirname, "..");
const SCRIPTS_DIR = import.meta.dirname;

// ─── Args ────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const locale = args[0];
const dryRun = args.includes("--dry-run");
const fixLinksOnly = args.includes("--fix-links");
const translateDescriptions = args.includes("--translate-descriptions");
const fileArgIdx = args.indexOf("--file");
const singleFile = fileArgIdx !== -1 ? args[fileArgIdx + 1] : null;
const limitArgIdx = args.indexOf("--limit");
const limit = limitArgIdx !== -1 ? parseInt(args[limitArgIdx + 1], 10) : Infinity;

if (!locale) {
  console.error("Usage: npx tsx scripts/translate-locale.ts <locale> [--fix-links] [--dry-run] [--file <path>]");
  process.exit(1);
}

const enDir = path.join(ROOT, "en");
const localeDir = path.join(ROOT, locale);
const headingsTxtPath = path.join(localeDir, "headings.txt");
const filenamesTxtPath = path.join(localeDir, "filenames.txt");

// ─── Config ──────────────────────────────────────────────────────────────────

interface LLMConfig {
  apiEndpoint: string;
  apiKey: string;
  model: string;
  termsPath?: string;
  delayMs?: number;
}

function loadConfig(): LLMConfig {
  const configPath = path.join(SCRIPTS_DIR, "llm-config.json");
  const file: Partial<LLMConfig> = fs.existsSync(configPath)
    ? JSON.parse(fs.readFileSync(configPath, "utf8"))
    : {};

  const config: LLMConfig = {
    apiEndpoint: process.env.LLM_API_ENDPOINT ?? file.apiEndpoint ?? "https://api.anthropic.com/v1/messages",
    apiKey: process.env.ANTHROPIC_API_KEY ?? file.apiKey ?? "",
    model: process.env.LLM_MODEL ?? file.model ?? "claude-opus-4-6",
    termsPath: file.termsPath,
    delayMs: file.delayMs,
  };

  if (!config.apiKey) {
    console.error("No API key found. Set ANTHROPIC_API_KEY env var or add apiKey to scripts/llm-config.json.");
    process.exit(1);
  }

  return config;
}

// ─── headings.txt ─────────────────────────────────────────────────────────────
// Format: INI-style, section = permalink, key=value = EN heading=translated heading
// Only stores headings that differ from EN.

type HeadingsMap = Record<string, Record<string, string>>;

function parseHeadingsTxt(content: string): HeadingsMap {
  const result: HeadingsMap = {};
  let current = "";
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith(";")) continue;
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      current = trimmed.slice(1, -1);
      result[current] = {};
    } else if (current) {
      const eq = trimmed.indexOf("=");
      if (eq !== -1) {
        const k = trimmed.slice(0, eq);
        const v = trimmed.slice(eq + 1);
        result[current][k] = v;
      }
    }
  }
  return result;
}

function serializeHeadingsTxt(data: HeadingsMap): string {
  return Object.entries(data)
    .filter(([, entries]) => Object.keys(entries).length > 0)
    .map(([section, entries]) =>
      `[${section}]\n` + Object.entries(entries).map(([k, v]) => `${k}=${v}`).join("\n")
    )
    .join("\n\n") + "\n";
}

function loadHeadingsTxt(): HeadingsMap {
  if (!fs.existsSync(headingsTxtPath)) return {};
  return parseHeadingsTxt(fs.readFileSync(headingsTxtPath, "utf8"));
}

function saveHeadingsTxt(data: HeadingsMap) {
  fs.writeFileSync(headingsTxtPath, serializeHeadingsTxt(data), "utf8");
}

// ─── Glossary ────────────────────────────────────────────────────────────────

interface Glossary {
  /** Always-included terms from terms.txt, formatted as "key (desc) = translation" lines. */
  fixed: string;
  /** Supplementary UI terms from translations/{langCode}.txt; filtered per file to keep prompts lean. */
  supplementary: Map<string, string>;
}

function loadGlossary(termsPath: string, langCode: string): Glossary {
  // --- Primary: terms.txt ([description] + [langCode] sections) ---
  const descriptions: Record<string, string> = {};
  const primary: Record<string, string> = {};

  if (!fs.existsSync(termsPath)) {
    console.error(`terms.txt not found at ${termsPath}`);
    console.error("The obsidian-translations repo must be a sibling directory: ../obsidian-translations/");
    process.exit(1);
  } else {
    let section = "";
    for (const line of fs.readFileSync(termsPath, "utf8").split("\n")) {
      const trimmed = line.trim();
      if (trimmed.startsWith("[") && trimmed.endsWith("]")) { section = trimmed.slice(1, -1); continue; }
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const k = trimmed.slice(0, eq), v = trimmed.slice(eq + 1);
      if (section === "description") descriptions[k] = v;
      else if (section === langCode && v) primary[k] = v;
    }
  }

  const fixed = Object.entries(primary).map(([k, v]) => {
    const desc = descriptions[k] ? ` (${descriptions[k]})` : "";
    return `${k}${desc} = ${v}`;
  }).join("\n");

  // --- Supplementary: translations/{langCode}.txt (original= / translation= pairs) ---
  // Keyed by lowercased English original; filtered per-file before inclusion in prompts.
  const supplementary = new Map<string, string>();
  const translationsFile = path.join(path.dirname(termsPath), "translations", `${langCode}.txt`);
  if (fs.existsSync(translationsFile)) {
    let original = "";
    for (const line of fs.readFileSync(translationsFile, "utf8").split("\n")) {
      const trimmed = line.trim();
      if (trimmed.startsWith("[") && trimmed.endsWith("]")) { original = ""; continue; }
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const k = trimmed.slice(0, eq), v = trimmed.slice(eq + 1);
      if (k === "original") { original = v.toLowerCase(); }
      else if (k === "translation" && v && original && !primary[original]) {
        supplementary.set(original, v);
      }
    }
  }

  // --- Supplementary: obsidian-clipper _locales/{langCode}/messages.json ---
  // Maps lowercased English message text to the locale translation.
  const CLIPPER_LOCALE_MAP: Record<string, string> = { zh: "zh_CN", "pt-br": "pt_BR" };
  const clipperLangCode = CLIPPER_LOCALE_MAP[langCode] ?? langCode;
  const clipperFile = path.resolve(path.dirname(termsPath), `../obsidian-clipper/src/_locales/${clipperLangCode}/messages.json`);
  const clipperEnFile = path.resolve(path.dirname(termsPath), `../obsidian-clipper/src/_locales/en/messages.json`);
  if (fs.existsSync(clipperFile) && fs.existsSync(clipperEnFile)) {
    const clipperLocale = JSON.parse(fs.readFileSync(clipperFile, "utf8")) as Record<string, { message: string }>;
    const clipperEn = JSON.parse(fs.readFileSync(clipperEnFile, "utf8")) as Record<string, { message: string }>;
    for (const [key, enEntry] of Object.entries(clipperEn)) {
      const enText = enEntry.message?.toLowerCase();
      const localeEntry = clipperLocale[key];
      if (enText && localeEntry?.message && !primary[enText] && !supplementary.has(enText)) {
        supplementary.set(enText, localeEntry.message);
      }
    }
  }

  return { fixed, supplementary };
}

/** Build a glossary string for a specific file, filtering supplementary terms to those present in the content. */
function buildGlossaryString(glossary: Glossary, content: string): string {
  const lower = content.toLowerCase();
  const sup = [...glossary.supplementary.entries()]
    .filter(([key]) => lower.includes(key))
    .map(([k, v]) => `${k} = ${v}`)
    .join("\n");
  return [glossary.fixed, sup].filter(Boolean).join("\n");
}

// ─── Headings ─────────────────────────────────────────────────────────────────

function extractHeadings(markdown: string): string[] {
  const headings: string[] = [];
  let inCode = false;
  for (const line of markdown.split("\n")) {
    if (line.startsWith("```")) { inCode = !inCode; continue; }
    if (inCode) continue;
    const m = line.match(/^#{1,6}\s+(.+)$/);
    if (m) headings.push(m[1].trim());
  }
  return headings;
}

// ─── Link rewriting ───────────────────────────────────────────────────────────

// Build map: filename basename (lowercase) → permalink, from all locale .md files
function buildBasenameToPermalink(dir: string): Map<string, string> {
  const map = new Map<string, string>();
  function walk(current: string) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile() && entry.name.endsWith(".md")) {
        const raw = fs.readFileSync(full, "utf8");
        const parsed = matter(raw);
        const permalink = parsed.data?.permalink as string | undefined;
        if (!permalink) continue;
        const basename = entry.name.replace(/\.md$/, "").toLowerCase();
        map.set(basename, permalink);
        // Also register aliases
        const aliases = parsed.data?.aliases as string[] | undefined;
        for (const alias of aliases ?? []) {
          const aliasBase = path.basename(alias).toLowerCase();
          if (!map.has(aliasBase)) map.set(aliasBase, permalink);
        }
      }
    }
  }
  walk(dir);
  return map;
}

function fixHeadingLinks(content: string, headingsMap: HeadingsMap, basenameToPermalink: Map<string, string>): string {
  // Match [[Target#Heading]] or [[Target#Heading|Display]] or ![[Target#Heading]]
  return content.replace(/(!?\[\[)([^\]#|]+)#([^\]|]+)(\|[^\]]+)?(\]\])/g, (match, open, target, heading, display, close) => {
    const basename = target.trim().split("/").pop()!.toLowerCase();
    const permalink = basenameToPermalink.get(basename);
    if (!permalink) return match;
    const translations = headingsMap[permalink];
    if (!translations) return match;
    const translated = translations[heading.trim()];
    if (!translated) return match;
    return `${open}${target.trim()}#${translated}${display ?? ""}${close}`;
  });
}

// ─── filenames.txt ────────────────────────────────────────────────────────────

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

// Build map: EN basename (lowercase) → locale basename
// so [[Create your first note]] → [[Créer des notes]]
function buildEnToLocaleBasename(
  enFiles: Map<string, { relPath: string; content: string }>,
  filenamesMap: FilenamesMap
): Map<string, string> {
  const map = new Map<string, string>();
  for (const [permalink, info] of enFiles) {
    const enBasename = path.basename(info.relPath, ".md");
    const localeBasename = filenamesMap.files[permalink];
    if (localeBasename && localeBasename !== enBasename) {
      map.set(enBasename.toLowerCase(), localeBasename);
    }
  }
  return map;
}

// Build a link reference string for the system prompt:
// [[EN name]] → [[locale name]]  (only for names that differ)
function buildLinkReference(
  enFiles: Map<string, { relPath: string; content: string }>,
  filenamesMap: FilenamesMap
): string {
  const lines: string[] = [];
  for (const [permalink, info] of enFiles) {
    const enBasename = path.basename(info.relPath, ".md");
    const localeBasename = filenamesMap.files[permalink];
    if (localeBasename && localeBasename !== enBasename) {
      lines.push(`[[${enBasename}]] → [[${localeBasename}]]`);
    }
  }
  return lines.sort().join("\n");
}

// Rewrite [[EN filename]] → [[FR filename]] in translated content
function fixFilenameLinks(content: string, enToLocale: Map<string, string>): string {
  if (enToLocale.size === 0) return content;
  // Match [[target]], [[target|display]], ![[target]], also with #anchors
  return content.replace(/(!?\[\[)([^\]#|]+)(#[^\]|]+)?(\|[^\]]+)?(\]\])/g, (match, open, target, anchor, display, close) => {
    const trimmedTarget = target.trim();
    // Preserve path prefix if any (e.g. folder/file)
    const lastSlash = trimmedTarget.lastIndexOf("/");
    const prefix = lastSlash >= 0 ? trimmedTarget.slice(0, lastSlash + 1) : "";
    const basename = lastSlash >= 0 ? trimmedTarget.slice(lastSlash + 1) : trimmedTarget;
    const localeBasename = enToLocale.get(basename.toLowerCase());
    if (!localeBasename) return match;
    return `${open}${prefix}${localeBasename}${anchor ?? ""}${display ?? ""}${close}`;
  });
}

// ─── LLM ─────────────────────────────────────────────────────────────────────

const LANGUAGE_NAMES: Record<string, string> = {
  fr: "French", de: "German", es: "Spanish", it: "Italian", ja: "Japanese",
  ko: "Korean", "pt-br": "Brazilian Portuguese", ru: "Russian", zh: "Chinese",
  ar: "Arabic", da: "Danish", vi: "Vietnamese", km: "Khmer", id: "Indonesian",
};

async function callLLM(config: LLMConfig, systemPrompt: string, userMessage: string): Promise<string> {
  const response = await fetch(config.apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": config.apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: config.model,
      max_tokens: 16384,
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`LLM API error ${response.status}: ${err}`);
  }

  const result = await response.json() as { content: Array<{ text: string }> };
  return result.content[0].text;
}

function buildSystemPrompt(langCode: string, glossary: string, linkRef: string): string {
  const langName = LANGUAGE_NAMES[langCode] ?? langCode;
  return `You are a professional translator for Obsidian Help documentation. Translate the given Markdown page to ${langName}.

CRITICAL RULES:
1. Never translate these terms: Obsidian, Obsidian Sync, Obsidian Publish, Obsidian Web Clipper, Markdown, CSS, API, Canvas
2. Wikilink targets: use the LINK REFERENCE below to translate [[EN name]] → [[locale name]]; if a target is not listed, preserve it exactly as-is
3. For [[target|display]] links: translate the target using the reference, and translate the display text naturally
4. For [[file#Heading]] anchor links: translate the heading part to match your heading translations in this file
5. Translate all heading text (##, ###, etc.) naturally
6. Preserve all HTML tags, callout syntax (> [!note]), code blocks, URLs, email addresses exactly
7. Preserve embed syntax: ![[file]] and ![[file#heading]] — translate the target using the reference, translate the heading if it appears in this file
8. Do NOT include frontmatter (--- blocks) in your output
9. Do NOT wrap your response in markdown code fences
10. If the input begins with "DESCRIPTION: <text>", translate that short text and return it as the very first line: "DESCRIPTION: <translated>", then a blank line, then the page content
11. Return ONLY the (optionally prefixed) translated markdown content, nothing else

${linkRef ? `LINK REFERENCE (translate wikilink targets using these exact ${langName} names):\n${linkRef}` : ""}
${glossary ? `\nGLOSSARY (use these translations consistently):\n${glossary}` : ""}`;
}

// ─── Collect files ────────────────────────────────────────────────────────────

interface FileInfo {
  absPath: string;
  relPath: string;
  enRelPath: string;
  permalink: string;
  frontmatter: Record<string, unknown>;
  content: string;
}

function collectLocaleFiles(enFiles: Map<string, { relPath: string; content: string }>): FileInfo[] {
  const results: FileInfo[] = [];
  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile() && entry.name.endsWith(".md")) {
        const raw = fs.readFileSync(full, "utf8");
        const parsed = matter(raw);
        const permalink = parsed.data?.permalink as string | undefined;
        if (!permalink) continue;
        const enInfo = enFiles.get(permalink);
        if (!enInfo) continue;
        results.push({
          absPath: full,
          relPath: path.relative(localeDir, full),
          enRelPath: enInfo.relPath,
          permalink,
          frontmatter: parsed.data as Record<string, unknown>,
          content: parsed.content,
        });
      }
    }
  }
  walk(localeDir);
  return results;
}

function collectEnFiles(): Map<string, { relPath: string; content: string }> {
  const map = new Map<string, { relPath: string; content: string }>();
  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile() && entry.name.endsWith(".md")) {
        const raw = fs.readFileSync(full, "utf8");
        const parsed = matter(raw);
        const permalink = parsed.data?.permalink as string | undefined;
        if (!permalink) continue;
        map.set(permalink, {
          relPath: path.relative(enDir, full),
          content: parsed.content,
        });
      }
    }
  }
  walk(enDir);
  return map;
}

// ─── Translate a file ─────────────────────────────────────────────────────────

async function translateFile(
  file: FileInfo,
  enContent: string,
  config: LLMConfig,
  systemPrompt: string,
  headingsMap: HeadingsMap,
  basenameToPermalink: Map<string, string>,
  enToLocale: Map<string, string>,
  enDescription?: string
): Promise<void> {
  console.log(`  Translating  ${file.relPath}`);
  if (dryRun) return;

  const userMessage = enDescription
    ? `DESCRIPTION: ${enDescription}\n\n${enContent.trim()}`
    : enContent.trim();

  const raw = await callLLM(config, systemPrompt, userMessage);
  await saveTranslated(file, raw, enContent, enDescription, headingsMap, basenameToPermalink, enToLocale);
}

async function saveTranslated(
  file: FileInfo,
  raw: string,
  enContent: string,
  enDescription: string | undefined,
  headingsMap: HeadingsMap,
  basenameToPermalink: Map<string, string>,
  enToLocale: Map<string, string>
): Promise<void> {
  // Extract translated description if present
  let translated = raw;
  let frDescription: string | undefined;
  if (enDescription && raw.startsWith("DESCRIPTION: ")) {
    const nl = raw.indexOf("\n");
    frDescription = raw.slice("DESCRIPTION: ".length, nl === -1 ? undefined : nl).trim();
    translated = nl === -1 ? "" : raw.slice(nl + 1).trimStart();
  }

  // Extract heading mapping (only store headings that changed)
  const enHeadings = extractHeadings(enContent);
  const frHeadings = extractHeadings(translated);
  const newEntries: Record<string, string> = {};
  for (let i = 0; i < enHeadings.length && i < frHeadings.length; i++) {
    if (enHeadings[i] !== frHeadings[i]) {
      newEntries[enHeadings[i]] = frHeadings[i];
    }
  }
  if (Object.keys(newEntries).length > 0) {
    headingsMap[file.permalink] = { ...(headingsMap[file.permalink] ?? {}), ...newEntries };
    saveHeadingsTxt(headingsMap);
  }

  // Fix heading links, then rewrite EN→locale filename links
  const headingFixed = fixHeadingLinks(translated, headingsMap, basenameToPermalink);
  const fixed = fixFilenameLinks(headingFixed, enToLocale);

  // Write file back with updated frontmatter; clear localized stub marker and needs-retranslation
  const newFm = { ...file.frontmatter };
  delete newFm["localized"];
  delete newFm["needs-retranslation"];
  if (frDescription) newFm.description = frDescription;
  const newContent = matter.stringify(fixed, newFm);
  fs.writeFileSync(file.absPath, newContent, "utf8");

  console.log(`    ✓ saved (${Object.keys(newEntries).length} heading(s) mapped)`);
}

// ─── Fix links pass ───────────────────────────────────────────────────────────

function runFixLinks(headingsMap: HeadingsMap, basenameToPermalink: Map<string, string>, enToLocale: Map<string, string>): void {
  let fixed = 0;
  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile() && entry.name.endsWith(".md")) {
        const raw = fs.readFileSync(full, "utf8");
        const parsed = matter(raw);
        const headingFixed = fixHeadingLinks(parsed.content, headingsMap, basenameToPermalink);
        const updated = fixFilenameLinks(headingFixed, enToLocale);
        if (updated !== parsed.content) {
          const newContent = matter.stringify(updated, parsed.data);
          if (!dryRun) fs.writeFileSync(full, newContent, "utf8");
          const rel = path.relative(localeDir, full);
          console.log(`  FIX-LINKS  ${rel}`);
          fixed++;
        }
      }
    }
  }
  walk(localeDir);
  console.log(`\nFixed heading links in ${fixed} file(s).`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const config = loadConfig();
  const termsPath = config.termsPath
    ? path.resolve(SCRIPTS_DIR, config.termsPath)
    : path.resolve(ROOT, "../obsidian-translations/terms.txt");

  const glossary = loadGlossary(termsPath, locale);
  const CLIPPER_DISPLAY_MAP: Record<string, string> = { zh: "zh_CN", "pt-br": "pt_BR" };
  const clipperDisplayCode = CLIPPER_DISPLAY_MAP[locale] ?? locale;
  const clipperFile = path.resolve(path.dirname(termsPath), `../obsidian-clipper/src/_locales/${clipperDisplayCode}/messages.json`);
  const clipperNote = fs.existsSync(clipperFile) ? ` + clipper` : "";
  console.log(`Loaded glossary (${glossary.fixed.split("\n").filter(Boolean).length} primary + ${glossary.supplementary.size} supplementary terms${clipperNote})`);

  const enFiles = collectEnFiles();
  const headingsMap = loadHeadingsTxt();
  const basenameToPermalink = buildBasenameToPermalink(localeDir);
  const filenamesMap = loadFilenamesTxt(filenamesTxtPath);
  const enToLocale = buildEnToLocaleBasename(enFiles, filenamesMap);
  const linkRef = buildLinkReference(enFiles, filenamesMap);
  if (enToLocale.size > 0) console.log(`Loaded filenames.txt (${enToLocale.size} filename mappings)`);

  // ── Fix-links only mode ──
  if (fixLinksOnly) {
    console.log(`Fixing heading links in ${locale}/...\n`);
    runFixLinks(headingsMap, basenameToPermalink, enToLocale);
    return;
  }

  // ── Translate descriptions mode ──
  // Batch-translates the `description` frontmatter field for all already-localized files.
  if (translateDescriptions) {
    const localeFiles = collectLocaleFiles(enFiles);
    const toUpdate = localeFiles.filter(f => f.frontmatter.localized !== false);
    console.log(`Translating descriptions for ${toUpdate.length} localized file(s)...\n`);

    // Build batches of up to 50 descriptions per LLM call
    const BATCH = 50;
    let updated = 0;
    for (let start = 0; start < toUpdate.length; start += BATCH) {
      const batch = toUpdate.slice(start, start + BATCH);

      // Build numbered list of EN descriptions
      const entries = batch.map((f, i) => {
        const enFm = matter(fs.readFileSync(path.join(enDir, f.enRelPath), "utf8")).data;
        return { file: f, enDesc: (enFm?.description as string | undefined) ?? "" };
      }).filter(e => e.enDesc);

      if (entries.length === 0) continue;

      const numbered = entries.map((e, i) => `${i + 1}. ${e.enDesc}`).join("\n");
      const userMsg = `Translate each of the following Obsidian Help page descriptions to ${LANGUAGE_NAMES[locale] ?? locale}. Return them numbered in the same order, one per line, as "N. <translated description>". Do not add any other text.\n\n${numbered}`;

      if (dryRun) {
        for (const e of entries) console.log(`  [dry-run] ${e.file.relPath}`);
        continue;
      }

      const raw = await callLLM(config, "You are a professional translator.", userMsg);
      const translated = raw.split("\n").filter(l => /^\d+\./.test(l.trim()));

      for (let i = 0; i < entries.length && i < translated.length; i++) {
        const frDesc = translated[i].replace(/^\d+\.\s*/, "").trim();
        if (!frDesc) continue;
        const f = entries[i].file;
        const raw2 = fs.readFileSync(f.absPath, "utf8");
        const parsed = matter(raw2);
        const newFm = { ...parsed.data, description: frDesc };
        const descContent = matter.stringify(parsed.content, newFm);
        fs.writeFileSync(f.absPath, descContent, "utf8");
        console.log(`  DESC  ${f.relPath}`);
        updated++;
      }

      if (start + BATCH < toUpdate.length) {
        await new Promise(r => setTimeout(r, config.delayMs ?? 1000));
      }
    }
    console.log(`\nUpdated descriptions: ${updated}`);
    return;
  }

  // ── Collect locale files ──
  const localeFiles = collectLocaleFiles(enFiles);

  // ── Filter to files needing translation ──
  // Includes stubs (localized: null) and manually flagged (needs-retranslation: true)
  let toTranslate = localeFiles.filter(f => f.frontmatter.localized === false || f.frontmatter.localized === null || f.frontmatter["needs-retranslation"]);
  if (isFinite(limit)) toTranslate = toTranslate.slice(0, limit);
  if (singleFile) {
    toTranslate = toTranslate.filter(f => f.relPath === singleFile);
    if (toTranslate.length === 0) {
      console.error(`File not found or already translated: ${singleFile}`);
      process.exit(1);
    }
  }

  console.log(`${toTranslate.length} file(s) to translate in ${locale}/${dryRun ? " [DRY RUN]" : ""}\n`);

  // ── Translate ──
  let done = 0;
  for (const file of toTranslate) {
    const enContent = enFiles.get(file.permalink)?.content ?? "";
    if (!enContent.trim()) {
      console.log(`  SKIP  ${file.relPath} (empty EN content)`);
      continue;
    }

    try {
      const enFm = matter(fs.readFileSync(path.join(enDir, file.enRelPath), "utf8")).data;
      const enDesc = enFm?.description as string | undefined;
      // Build per-file prompts with supplementary glossary filtered to terms in this file's content
      const fileGlossary = buildGlossaryString(glossary, enContent + " " + (enDesc ?? ""));
      const systemPrompt = buildSystemPrompt(locale, fileGlossary, linkRef);
      await translateFile(file, enContent, config, systemPrompt, headingsMap, basenameToPermalink, enToLocale, enDesc);
      done++;
    } catch (err) {
      console.error(`  ERROR  ${file.relPath}: ${err}`);
    }

    if (!dryRun && done < toTranslate.length) {
      await new Promise(r => setTimeout(r, config.delayMs ?? 1000));
    }
  }

  // ── Fix links across all translated files ──
  if (!dryRun && (Object.keys(headingsMap).length > 0 || enToLocale.size > 0)) {
    console.log(`\nRunning link fix pass...`);
    runFixLinks(headingsMap, basenameToPermalink, enToLocale);
  }

  console.log(`\nDone. Translated: ${done}/${toTranslate.length}`);
}

main().catch(err => { console.error(err); process.exit(1); });
