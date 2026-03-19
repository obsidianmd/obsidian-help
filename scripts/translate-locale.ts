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
import { execSync } from "child_process";
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
const verify = args.includes("--verify");
const fixLinksOnly = args.includes("--fix-links");
const translateDescriptions = args.includes("--translate-descriptions");
const fileArgIdx = args.indexOf("--file");
const singleFile = fileArgIdx !== -1 ? args[fileArgIdx + 1] : null;
const limitArgIdx = args.indexOf("--limit");
const limit = limitArgIdx !== -1 ? parseInt(args[limitArgIdx + 1], 10) : Infinity;

if (!locale) {
  console.error("Usage: npx tsx scripts/translate-locale.ts <locale> [--verify] [--fix-links] [--dry-run] [--file <path>]");
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

function loadGlossary(termsPath: string, langCode: string): string {
  if (!fs.existsSync(termsPath)) {
    console.warn(`  [warn] terms.txt not found at ${termsPath}, skipping glossary`);
    return "";
  }
  const content = fs.readFileSync(termsPath, "utf8");
  const lines = content.split("\n");

  // Parse [description] and [langCode] sections
  const descriptions: Record<string, string> = {};
  const translations: Record<string, string> = {};
  let section = "";

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      section = trimmed.slice(1, -1);
      continue;
    }
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const k = trimmed.slice(0, eq);
    const v = trimmed.slice(eq + 1);
    if (section === "description") descriptions[k] = v;
    else if (section === langCode && v) translations[k] = v;
  }

  if (Object.keys(translations).length === 0) return "";

  const lines2 = Object.entries(translations).map(([k, v]) => {
    const desc = descriptions[k] ? ` (${descriptions[k]})` : "";
    return `${k}${desc} = ${v}`;
  });
  return lines2.join("\n");
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

// ─── Verify staleness ────────────────────────────────────────────────────────

function checkStale(enRelPath: string, localizedDate: string): boolean {
  try {
    const result = execSync(
      `git log --after="${localizedDate}" --format="%H" -- "en/${enRelPath}"`,
      { cwd: ROOT, encoding: "utf8" }
    ).trim();
    return result.length > 0;
  } catch {
    return false;
  }
}

// Get the git diff of an EN file since a given date (for patch mode)
function getEnDiffSince(enRelPath: string, since: string): string {
  try {
    // Find the last commit before or on the localized date
    const base = execSync(
      `git log --format="%H" -1 --before="${since}T23:59:59" -- "en/${enRelPath}"`,
      { cwd: ROOT, encoding: "utf8" }
    ).trim();
    if (!base) return "";
    return execSync(
      `git diff ${base} HEAD -- "en/${enRelPath}"`,
      { cwd: ROOT, encoding: "utf8" }
    ).trim();
  } catch {
    return "";
  }
}

function buildPatchPrompt(langCode: string, glossary: string, linkRef: string): string {
  const langName = LANGUAGE_NAMES[langCode] ?? langCode;
  return `You are a professional translator for Obsidian Help documentation. A ${langName} translation exists for this page, but the English source has been updated. Apply the changes shown in the diff to the existing translation.

RULES:
1. Only change what the diff requires — do NOT re-translate unaffected text
2. For added lines (+): translate into ${langName} and insert at the correct location
3. For removed lines (-): remove the corresponding ${langName} text
4. Context lines (no prefix) show where changes belong — do not change them
5. Never translate: Obsidian, Obsidian Sync, Obsidian Publish, Obsidian Web Clipper, Markdown, CSS, API, Canvas
6. Wikilink targets: use the LINK REFERENCE to translate [[EN name]] → locale name; preserve unlisted targets exactly
7. Preserve all HTML, callout syntax, code blocks, URLs exactly
8. Do NOT include frontmatter in your output
9. Do NOT wrap your response in markdown code fences
10. Return ONLY the complete updated ${langName} markdown content

${linkRef ? `LINK REFERENCE:\n${linkRef}` : ""}
${glossary ? `\nGLOSSARY (use consistently):\n${glossary}` : ""}`;
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
  enDescription?: string,
  patchPrompt?: string
): Promise<void> {
  const isPatch = !!patchPrompt && !!file.frontmatter["needs-retranslation"];

  if (isPatch) {
    const rawDate = file.frontmatter.localized;
    const localizedDate = rawDate instanceof Date ? rawDate.toISOString().slice(0, 10) : String(rawDate);
    const diff = getEnDiffSince(file.enRelPath, localizedDate);
    if (!diff) {
      // No diff found (e.g. pre-git history) — fall back to full re-translation
      console.log(`  Translating  ${file.relPath} (no diff available, full retranslation)`);
    } else {
      // Count changed lines to decide: patch vs full re-translation
      const changedLines = diff.split("\n").filter(l => l.startsWith("+") || l.startsWith("-")).length;
      const totalLines = enContent.split("\n").length;
      if (changedLines <= totalLines * 0.4) {
        console.log(`  Patching     ${file.relPath} (${changedLines} line(s) changed)`);
        if (dryRun) return;
        const userMessage = `CURRENT ${(LANGUAGE_NAMES[locale] ?? locale).toUpperCase()} TRANSLATION:\n${file.content.trim()}\n\nENGLISH DIFF:\n${diff}`;
        const raw = await callLLM(config, patchPrompt, userMessage);
        await saveTranslated(file, raw, enContent, enDescription, headingsMap, basenameToPermalink, enToLocale);
        return;
      }
      console.log(`  Translating  ${file.relPath} (large diff ${changedLines}L, full retranslation)`);
    }
  } else {
    console.log(`  Translating  ${file.relPath}`);
  }

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

  // Write file back with updated frontmatter; clear needs-retranslation
  const today = new Date().toISOString().slice(0, 10);
  const newFm = { ...file.frontmatter, localized: today };
  delete newFm["needs-retranslation"];
  if (frDescription) newFm.description = frDescription;
  const newContent = matter.stringify(fixed, newFm)
    .replace(/^localized: '(\d{4}-\d{2}-\d{2})'$/m, "localized: $1");
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
  if (glossary) console.log(`Loaded glossary (${glossary.split("\n").length} terms)`);

  const enFiles = collectEnFiles();
  const headingsMap = loadHeadingsTxt();
  const basenameToPermalink = buildBasenameToPermalink(localeDir);
  const filenamesMap = loadFilenamesTxt(filenamesTxtPath);
  const enToLocale = buildEnToLocaleBasename(enFiles, filenamesMap);
  const linkRef = buildLinkReference(enFiles, filenamesMap);
  if (enToLocale.size > 0) console.log(`Loaded filenames.txt (${enToLocale.size} filename mappings)`);
  const systemPrompt = buildSystemPrompt(locale, glossary, linkRef);
  const patchPrompt = buildPatchPrompt(locale, glossary, linkRef);

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
    const toUpdate = localeFiles.filter(f => f.frontmatter.localized);
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
        fs.writeFileSync(f.absPath, matter.stringify(parsed.content, newFm), "utf8");
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
  let localeFiles = collectLocaleFiles(enFiles);

  // ── Verify mode: mark stale translations ──
  if (verify) {
    console.log(`Checking for stale translations in ${locale}/...\n`);
    let staleCount = 0;
    for (const file of localeFiles) {
      const raw = file.frontmatter.localized;
      if (!raw) continue; // already unlocalized
      if (file.frontmatter["needs-retranslation"]) continue; // already flagged
      // gray-matter may parse YYYY-MM-DD as a Date object
      const localizedDate = raw instanceof Date ? raw.toISOString().slice(0, 10) : String(raw);
      if (checkStale(file.enRelPath, localizedDate)) {
        console.log(`  STALE  ${file.relPath} (EN changed after ${localizedDate})`);
        if (!dryRun) {
          // Preserve the date for diff-based patching; just flag it
          const newFm = { ...file.frontmatter, "needs-retranslation": true };
          const newContent = matter.stringify(file.content, newFm);
          fs.writeFileSync(file.absPath, newContent, "utf8");
        }
        staleCount++;
      }
    }
    console.log(`\n${staleCount} file(s) marked stale.\n`);
    // Reload after marking stale
    localeFiles = collectLocaleFiles(enFiles);
  }

  // ── Filter to files needing translation ──
  // Includes never-translated (localized: null) and stale (needs-retranslation: true)
  let toTranslate = localeFiles.filter(f => !f.frontmatter.localized || f.frontmatter["needs-retranslation"]);
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
      await translateFile(file, enContent, config, systemPrompt, headingsMap, basenameToPermalink, enToLocale, enDesc, patchPrompt);
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
