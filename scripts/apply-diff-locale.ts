#!/usr/bin/env tsx
/**
 * apply-diff-locale.ts
 * Usage: npx tsx scripts/apply-diff-locale.ts <locale> [--from <git-ref>] [--dry-run]
 *
 * Propagates content-level EN changes to a locale.
 *
 * Pure removals (callouts, headings, paragraphs) are applied structurally
 * without calling the LLM. Additions and mixed changes use the LLM.
 *
 * --from <ref>   compare against this git ref (default: HEAD = uncommitted changes)
 * --dry-run      preview which files would be changed without writing
 *
 * Complement to sync-locale (which handles file additions/deletions).
 * Run after sync-locale in the pipeline.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { execSync } from "child_process";

const ROOT = path.resolve(import.meta.dirname, "..");
const SCRIPTS_DIR = import.meta.dirname;

// ─── Args ─────────────────────────────────────────────────────────────────────

const cliArgs = process.argv.slice(2);
const locale = cliArgs[0];
const dryRun = cliArgs.includes("--dry-run");
const fromArgIdx = cliArgs.indexOf("--from");
const fromRef = fromArgIdx !== -1 ? cliArgs[fromArgIdx + 1] : null; // null = uncommitted changes

if (!locale) {
  console.error("Usage: npx tsx scripts/apply-diff-locale.ts <locale> [--from <git-ref>] [--dry-run]");
  process.exit(1);
}

const enDir = path.join(ROOT, "en");
const localeDir = path.join(ROOT, locale);

if (!fs.existsSync(localeDir)) {
  console.error(`Locale directory not found: ${localeDir}`);
  process.exit(1);
}

// ─── LLM ─────────────────────────────────────────────────────────────────────

interface LLMConfig {
  apiEndpoint: string;
  apiKey: string;
  model: string;
  delayMs?: number;
}

function tryLoadConfig(): LLMConfig | null {
  const envPath = path.resolve(ROOT, ".env");
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
      const m = line.match(/^([^#=]+)=(.*)$/);
      if (m) process.env[m[1].trim()] = m[2].trim();
    }
  }
  const configPath = path.join(SCRIPTS_DIR, "llm-config.json");
  const file: Partial<LLMConfig> = fs.existsSync(configPath)
    ? JSON.parse(fs.readFileSync(configPath, "utf8"))
    : {};
  const apiKey = process.env.ANTHROPIC_API_KEY ?? file.apiKey ?? "";
  if (!apiKey) return null;
  return {
    apiEndpoint: process.env.LLM_API_ENDPOINT ?? file.apiEndpoint ?? "https://api.anthropic.com/v1/messages",
    apiKey,
    model: process.env.LLM_MODEL ?? file.model ?? "claude-opus-4-6",
    delayMs: file.delayMs,
  };
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
      max_tokens: 16384,
      system,
      messages: [{ role: "user", content: user }],
    }),
  });
  if (!res.ok) throw new Error(`LLM error ${res.status}: ${await res.text()}`);
  const json = await res.json() as { content: Array<{ text: string }> };
  return json.content[0].text;
}

const LANGUAGE_NAMES: Record<string, string> = {
  fr: "French", de: "German", es: "Spanish", it: "Italian", ja: "Japanese",
  ko: "Korean", "pt-br": "Brazilian Portuguese", ru: "Russian", zh: "Chinese",
  ar: "Arabic", da: "Danish", vi: "Vietnamese", km: "Khmer", id: "Indonesian",
};

// ─── Glossary ─────────────────────────────────────────────────────────────────

const CLIPPER_LOCALE_MAP: Record<string, string> = { zh: "zh_CN", "pt-br": "pt_BR" };

/**
 * Load a glossary string for the given locale from obsidian-translations
 * (terms.txt + translations/<lang>.txt) and obsidian-clipper (_locales).
 * Returns empty string if repos are absent — glossary is optional here.
 */
function loadGlossary(langCode: string): string {
  const terms = new Map<string, string>(); // lowercase EN → locale

  // --- obsidian-translations/terms.txt ---
  const termsPath = path.resolve(ROOT, "../obsidian-translations/terms.txt");
  if (fs.existsSync(termsPath)) {
    const descriptions: Record<string, string> = {};
    const primary: Record<string, string> = {};
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
    for (const [k, v] of Object.entries(primary)) {
      const desc = descriptions[k] ? ` (${descriptions[k]})` : "";
      terms.set(`${k}${desc}`, v);
    }
  }

  // --- obsidian-translations/translations/<lang>.txt ---
  const translationsFile = path.resolve(ROOT, `../obsidian-translations/translations/${langCode}.txt`);
  if (fs.existsSync(translationsFile)) {
    let original = "";
    for (const line of fs.readFileSync(translationsFile, "utf8").split("\n")) {
      const trimmed = line.trim();
      if (trimmed.startsWith("[") && trimmed.endsWith("]")) { original = ""; continue; }
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const k = trimmed.slice(0, eq), v = trimmed.slice(eq + 1);
      if (k === "original") { original = v; }
      else if (k === "translation" && v && original && !terms.has(original.toLowerCase())) {
        terms.set(original.toLowerCase(), v);
      }
    }
  }

  // --- obsidian-clipper/src/_locales/<lang>/messages.json ---
  const clipperCode = CLIPPER_LOCALE_MAP[langCode] ?? langCode;
  const clipperEn = path.resolve(ROOT, "../obsidian-clipper/src/_locales/en/messages.json");
  const clipperLang = path.resolve(ROOT, `../obsidian-clipper/src/_locales/${clipperCode}/messages.json`);
  if (fs.existsSync(clipperEn) && fs.existsSync(clipperLang)) {
    const en = JSON.parse(fs.readFileSync(clipperEn, "utf8")) as Record<string, { message: string }>;
    const loc = JSON.parse(fs.readFileSync(clipperLang, "utf8")) as Record<string, { message: string }>;
    for (const [key, { message: enMsg }] of Object.entries(en)) {
      const locMsg = loc[key]?.message;
      if (locMsg && locMsg !== enMsg && !terms.has(enMsg.toLowerCase())) {
        terms.set(enMsg.toLowerCase(), locMsg);
      }
    }
  }

  return [...terms.entries()].map(([k, v]) => `${k} = ${v}`).join("\n");
}

// ─── Git helpers ──────────────────────────────────────────────────────────────

function getGitDiff(): string {
  const cmd = fromRef ? `git diff "${fromRef}" -- en/` : "git diff HEAD -- en/";
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" });
}

function getOldEnContent(enRelPath: string): string | null {
  const ref = fromRef ?? "HEAD";
  try {
    return execSync(`git show "${ref}:en/${enRelPath}"`, { cwd: ROOT, encoding: "utf8" });
  } catch {
    return null; // file didn't exist at that ref (new file — handled by sync-locale)
  }
}

// ─── Git diff parsing ─────────────────────────────────────────────────────────

interface HunkLine { type: "context" | "removed" | "added"; content: string; }

interface FileDiff {
  enRelPath: string;     // path relative to en/
  hunks: HunkLine[][];
  isPureRemoval: boolean;
}

function parseGitDiff(diff: string): FileDiff[] {
  const result: FileDiff[] = [];
  const lines = diff.split("\n");
  let i = 0;

  while (i < lines.length) {
    if (!lines[i].startsWith("diff --git ")) { i++; continue; }

    // Scan file header for the "--- a/en/..." line
    // Note: git appends a trailing tab when the filename contains spaces
    let enRelPath: string | null = null;
    while (i < lines.length && !lines[i].startsWith("@@ ")) {
      const m = lines[i].match(/^--- a\/en\/(.+\.md)\s*$/);
      if (m) enRelPath = m[1];
      i++;
    }

    if (!enRelPath) continue;

    const hunks: HunkLine[][] = [];

    // Parse all hunks for this file
    while (i < lines.length && !lines[i].startsWith("diff --git ")) {
      if (!lines[i].startsWith("@@ ")) { i++; continue; }
      i++; // skip hunk header

      const hunk: HunkLine[] = [];
      while (i < lines.length && !lines[i].startsWith("@@ ") && !lines[i].startsWith("diff --git ")) {
        const line = lines[i];
        if (line.startsWith("-")) {
          hunk.push({ type: "removed", content: line.slice(1) });
        } else if (line.startsWith("+")) {
          hunk.push({ type: "added", content: line.slice(1) });
        } else if (line.startsWith(" ")) {
          hunk.push({ type: "context", content: line.slice(1) });
        }
        // else: skip ("\ No newline at end of file", etc.)
        i++;
      }

      if (hunk.some(l => l.type !== "context")) hunks.push(hunk);
    }

    if (hunks.length === 0) continue;
    const isPureRemoval = hunks.every(h => h.every(l => l.type !== "added"));
    result.push({ enRelPath, hunks, isPureRemoval });
  }

  return result;
}

// ─── Structural removal ───────────────────────────────────────────────────────

/**
 * Extract contiguous removed segments from a hunk.
 * Each segment includes the removed lines and the context lines that follow.
 */
function extractRemovedSegments(hunk: HunkLine[]): { removed: string[]; contextAfter: string[] }[] {
  const segments: { removed: string[]; contextAfter: string[] }[] = [];
  let i = 0;

  while (i < hunk.length) {
    if (hunk[i].type !== "removed") { i++; continue; }

    const removed: string[] = [];
    while (i < hunk.length && hunk[i].type === "removed") {
      removed.push(hunk[i].content);
      i++;
    }

    const contextAfter: string[] = [];
    let j = i;
    while (j < hunk.length && hunk[j].type === "context") {
      contextAfter.push(hunk[j].content);
      j++;
    }

    segments.push({ removed, contextAfter });
  }

  return segments;
}

/** If lines contain a callout opener, return the callout type (e.g. "warning"). */
function detectCalloutType(lines: string[]): string | null {
  for (const line of lines) {
    const m = line.match(/^>\s*\[!([^\]\s-]+)/);
    if (m) return m[1].toLowerCase();
  }
  return null;
}

/**
 * Remove a callout of the given type from locale content.
 * Uses contextAfterEN (first structural anchor after the removal) to
 * disambiguate when multiple callouts of the same type exist.
 * Returns updated content, or null if the callout wasn't found.
 */
function removeCallout(content: string, calloutType: string, contextAfterEN: string[]): string | null {
  const lines = content.split("\n");

  const candidates: number[] = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^>\s*\[!([^\]\s-]+)/);
    if (m && m[1].toLowerCase() === calloutType) candidates.push(i);
  }

  if (candidates.length === 0) return null;

  let startIdx = candidates[0];

  if (candidates.length > 1) {
    // Disambiguate: find the callout followed by the same structural anchor as in EN.
    // The first non-blank context line after the EN removal tells us what comes next.
    const afterAnchor = contextAfterEN.find(l => l.trim() !== "");
    if (afterAnchor) {
      const headingMatch = afterAnchor.match(/^(#{1,6})\s/);
      if (headingMatch) {
        const headingRe = new RegExp(`^${headingMatch[1]}\\s`);
        const disambiguated = candidates.find(ci => {
          let end = ci + 1;
          while (end < lines.length && lines[end].startsWith(">")) end++;
          while (end < lines.length && lines[end].trim() === "") end++;
          return end < lines.length && headingRe.test(lines[end]);
        });
        if (disambiguated !== undefined) startIdx = disambiguated;
      }
    }
  }

  // Find end of callout block: all consecutive lines starting with ">"
  let endIdx = startIdx + 1;
  while (endIdx < lines.length && lines[endIdx].startsWith(">")) endIdx++;

  const before = lines.slice(0, startIdx);
  let after = lines.slice(endIdx);

  // Remove the blank separator line that follows the callout block
  if (after.length > 0 && after[0].trim() === "") after = after.slice(1);

  return [...before, ...after].join("\n");
}

/**
 * Remove a heading and its following content from locale content.
 * Matches by heading level; uses contextAfterEN to pick the right heading
 * when multiple headings of the same level exist.
 * Returns updated content, or null if not found.
 */
function removeHeadingSection(content: string, headingLines: string[], contextAfterEN: string[]): string | null {
  // Determine heading level from first heading line
  const levelMatch = headingLines[0].match(/^(#{1,6})\s/);
  if (!levelMatch) return null;
  const level = levelMatch[1];
  const headingRe = new RegExp(`^${level}\\s`);

  const lines = content.split("\n");
  const candidates: number[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (headingRe.test(lines[i])) candidates.push(i);
  }

  if (candidates.length === 0) return null;

  let startIdx = candidates[0];

  if (candidates.length > 1) {
    // Disambiguate by the structural anchor that follows the removed section in EN
    const afterAnchor = contextAfterEN.find(l => l.trim() !== "");
    if (afterAnchor) {
      const nextHeadingMatch = afterAnchor.match(/^(#{1,6})\s/);
      if (nextHeadingMatch) {
        const nextRe = new RegExp(`^${nextHeadingMatch[1]}\\s`);
        const disambiguated = candidates.find(ci => {
          // Find next heading at same or higher level after this candidate
          let end = ci + 1;
          while (end < lines.length && !headingRe.test(lines[end])) end++;
          return end < lines.length && nextRe.test(lines[end]);
        });
        if (disambiguated !== undefined) startIdx = disambiguated;
      }
    }
  }

  // Find the end of this heading's section: the next heading at same or higher level,
  // or end of file. "Higher level" means fewer #s (e.g. ## ends a ### section).
  const sectionEndRe = new RegExp(`^#{1,${level.length}}\\s`);
  let endIdx = startIdx + 1;
  while (endIdx < lines.length && !sectionEndRe.test(lines[endIdx])) endIdx++;

  const before = lines.slice(0, startIdx);
  const after = lines.slice(endIdx);

  // Trim a trailing blank line from before if present
  while (before.length > 0 && before[before.length - 1].trim() === "") before.pop();
  // Add a single blank line if before is non-empty and after is non-empty
  const separator = before.length > 0 && after.length > 0 && after[0].trim() !== "" ? [""] : [];

  return [...before, ...separator, ...after].join("\n");
}

/**
 * Try to apply all pure-removal hunks structurally (no LLM).
 * Returns updated content, or null if any removal can't be handled.
 */
function tryStructuralRemovals(localeContent: string, hunks: HunkLine[][]): string | null {
  let current = localeContent;

  for (const hunk of hunks) {
    const segments = extractRemovedSegments(hunk);

    for (const { removed, contextAfter } of segments) {
      // Skip blank-only removals (bare blank lines)
      const nonBlank = removed.filter(l => l.trim() !== "");
      if (nonBlank.length === 0) continue;

      // Callout block?
      const calloutType = detectCalloutType(removed);
      if (calloutType) {
        const updated = removeCallout(current, calloutType, contextAfter);
        if (updated === null) return null;
        current = updated;
        continue;
      }

      // Heading (+ section)?
      if (nonBlank[0].match(/^#{1,6}\s/)) {
        const updated = removeHeadingSection(current, nonBlank, contextAfter);
        if (updated === null) return null;
        current = updated;
        continue;
      }

      // Can't handle structurally — fall back to LLM
      return null;
    }
  }

  return current;
}

// ─── Locale file index ────────────────────────────────────────────────────────

/** permalink → { absPath, parsed } for every translated .md file in the locale */
interface LocaleEntry { absPath: string; parsed: matter.GrayMatterFile<string>; }

function buildLocaleIndex(): Map<string, LocaleEntry> {
  const index = new Map<string, LocaleEntry>();
  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        const raw = fs.readFileSync(full, "utf8");
        const parsed = matter(raw);
        const permalink = parsed.data?.permalink;
        if (permalink) index.set(permalink as string, { absPath: full, parsed });
      }
    }
  }
  walk(localeDir);
  return index;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const diffOutput = getGitDiff();
  if (!diffOutput.trim()) {
    console.log("No EN changes detected.");
    return;
  }

  const fileDiffs = parseGitDiff(diffOutput);
  if (fileDiffs.length === 0) {
    console.log("No relevant EN .md changes found.");
    return;
  }

  console.log(`Applying EN diff to ${locale}/ (dry-run: ${dryRun})\n`);

  const llmConfig = tryLoadConfig();
  const localeIndex = buildLocaleIndex();
  let applied = 0;
  let skipped = 0;

  for (const fileDiff of fileDiffs) {
    const enAbsPath = path.join(enDir, fileDiff.enRelPath);

    let enParsed: matter.GrayMatterFile<string>;
    try {
      enParsed = matter(fs.readFileSync(enAbsPath, "utf8"));
    } catch {
      // Deleted files are handled by sync-locale
      console.log(`  SKIP  en/${fileDiff.enRelPath} (deleted — run sync-locale)`);
      skipped++;
      continue;
    }

    const permalink = enParsed.data?.permalink as string | undefined;
    if (!permalink) {
      console.log(`  SKIP  en/${fileDiff.enRelPath} (no permalink)`);
      skipped++;
      continue;
    }

    const localeEntry = localeIndex.get(permalink);
    if (!localeEntry) {
      console.log(`  SKIP  en/${fileDiff.enRelPath} (no locale file for permalink: ${permalink})`);
      skipped++;
      continue;
    }

    const { absPath: localeAbsPath, parsed: localeParsed } = localeEntry;
    const localeRelPath = path.relative(localeDir, localeAbsPath);

    // Skip stubs — translate-locale handles them
    if (localeParsed.data?.localized === false) {
      console.log(`  SKIP  ${localeRelPath} (untranslated stub — run translate-locale)`);
      skipped++;
      continue;
    }

    // ── Pure removal: try structural path ────────────────────────────────────

    if (fileDiff.isPureRemoval) {
      const updated = tryStructuralRemovals(localeParsed.content, fileDiff.hunks);

      if (updated !== null) {
        if (updated === localeParsed.content) {
          console.log(`  UNCHANGED  ${localeRelPath} (nothing to remove)`);
          skipped++;
        } else {
          console.log(`  REMOVE  ${localeRelPath}`);
          if (!dryRun) {
            fs.writeFileSync(localeAbsPath, matter.stringify(updated, localeParsed.data, { lineWidth: -1 }), "utf8");
          }
          applied++;
        }
        continue;
      }

      // Structural match failed — fall through to LLM
      console.log(`  REMOVE  ${localeRelPath} (structural match failed — using LLM)`);
    } else {
      console.log(`  UPDATE  ${localeRelPath} (LLM)`);
    }

    // ── LLM path ─────────────────────────────────────────────────────────────

    if (!llmConfig) {
      console.log(`    SKIP (no API key — set ANTHROPIC_API_KEY or scripts/llm-config.json)`);
      skipped++;
      continue;
    }

    if (dryRun) {
      applied++;
      continue;
    }

    try {
      const oldRaw = getOldEnContent(fileDiff.enRelPath);
      if (!oldRaw) {
        console.log(`    SKIP (file not in ref — new file, run sync-locale + translate-locale)`);
        skipped++;
        continue;
      }

      const oldEnContent = matter(oldRaw).content;
      const langName = LANGUAGE_NAMES[locale] ?? locale;
      const glossary = loadGlossary(locale);

      const systemPrompt = [
        `You are applying a content change from an updated English source to an existing ${langName} translation of Obsidian Help documentation.`,
        `Apply the equivalent of the English change to the ${langName} content. Only change what corresponds to the English diff. Preserve all other translated content exactly.`,
        `- For removals: identify and remove the equivalent ${langName} passage`,
        `- For additions: translate the new English content and insert it at the correct position`,
        `- For modifications: update the corresponding ${langName} passage`,
        `- If the change is already reflected in the ${langName} content, return the content unchanged`,
        `Your response must be ONLY the raw markdown content — no frontmatter, no code fences, no commentary, no explanation. Do not describe what you did. Output the content and nothing else.`,
        glossary ? `\nGLOSSARY (use these translations for Obsidian UI terms):\n${glossary}` : "",
      ].filter(Boolean).join("\n");

      const userMessage = [
        "ENGLISH BEFORE:",
        oldEnContent.trim(),
        "",
        "ENGLISH AFTER:",
        enParsed.content.trim(),
        "",
        `CURRENT ${langName.toUpperCase()} CONTENT:`,
        localeParsed.content.trim(),
        "",
        `Apply the equivalent changes to the ${langName} content.`,
      ].join("\n");

      const updatedContent = await callLLM(llmConfig, systemPrompt, userMessage);
      fs.writeFileSync(
        localeAbsPath,
        matter.stringify(updatedContent.trim() + "\n", localeParsed.data, { lineWidth: -1 }),
        "utf8",
      );
      console.log(`    ✓ updated`);
      applied++;

      if (applied + skipped < fileDiffs.length) {
        await new Promise(r => setTimeout(r, llmConfig.delayMs ?? 1000));
      }
    } catch (err) {
      console.error(`    ERROR: ${err}`);
      skipped++;
    }
  }

  console.log(`\n--- Summary ---`);
  console.log(`  Applied:  ${applied}`);
  console.log(`  Skipped:  ${skipped}`);
  if (dryRun) console.log("\n[DRY RUN] No files were written.");
}

main().catch(err => { console.error(err); process.exit(1); });
