#!/usr/bin/env tsx
/**
 * translate-chunked.ts
 * Usage: npx tsx scripts/translate-chunked.ts <locale> <en-relative-path> [--chunk-size N]
 *
 * Translates a single EN file into a locale by splitting it into smaller chunks
 * at top-level (##) section boundaries. Useful for large files that cause token
 * repetition issues with translate-locale.ts.
 *
 * The locale target file is found automatically by matching the EN permalink.
 *
 * Examples:
 *   npx tsx scripts/translate-chunked.ts km "Bases/Bases syntax.md"
 *   npx tsx scripts/translate-chunked.ts ja "Editing and formatting/Basic formatting syntax.md" --chunk-size 100
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");
const SCRIPTS_DIR = import.meta.dirname;

// ─── Args ────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const locale = args[0];
const enRelPath = args[1];
const chunkSizeIdx = args.indexOf("--chunk-size");
const chunkSize = chunkSizeIdx !== -1 ? parseInt(args[chunkSizeIdx + 1]) : 120;

if (!locale || !enRelPath) {
  console.error("Usage: npx tsx scripts/translate-chunked.ts <locale> <en-relative-path> [--chunk-size N]");
  console.error('Example: npx tsx scripts/translate-chunked.ts km "Bases/Bases syntax.md"');
  process.exit(1);
}

// ─── Config ──────────────────────────────────────────────────────────────────

// Load .env
const envPath = path.resolve(ROOT, ".env");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim();
  }
}

const configPath = path.join(SCRIPTS_DIR, "llm-config.json");
const configFile: Record<string, string> = fs.existsSync(configPath)
  ? JSON.parse(fs.readFileSync(configPath, "utf8"))
  : {};
const apiKey = process.env.ANTHROPIC_API_KEY ?? configFile.apiKey ?? "";
const model = process.env.LLM_MODEL ?? configFile.model ?? "claude-opus-4-6";
const apiEndpoint = process.env.LLM_API_ENDPOINT ?? configFile.apiEndpoint ?? "https://api.anthropic.com/v1/messages";

if (!apiKey) {
  console.error("No API key found. Set ANTHROPIC_API_KEY or add apiKey to scripts/llm-config.json");
  process.exit(1);
}

// ─── Language data ────────────────────────────────────────────────────────────

const LANGUAGE_NAMES: Record<string, string> = {
  fr: "French", de: "German", es: "Spanish", it: "Italian", ja: "Japanese",
  ko: "Korean", "pt-br": "Brazilian Portuguese", ru: "Russian", zh: "Chinese",
  ar: "Arabic", da: "Danish", vi: "Vietnamese", km: "Khmer", id: "Indonesian",
  fa: "Persian",
};

const LANGUAGE_NOTES: Record<string, string> = {
  de: "Use informal 'du' (not formal 'Sie') throughout.",
  ko: "Use 해요체 (endings: -아요/어요/해요/이에요/예요). Do NOT use 합니다체.",
};

// ─── LLM ─────────────────────────────────────────────────────────────────────

async function callLLM(system: string, user: string): Promise<string> {
  const res = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      max_tokens: 8192,
      system,
      messages: [{ role: "user", content: user }],
    }),
  });
  if (!res.ok) throw new Error(`API error ${res.status}: ${await res.text()}`);
  const json = await res.json() as { content: Array<{ text: string }> };
  return json.content[0].text;
}

function buildSystemPrompt(langCode: string): string {
  const langName = LANGUAGE_NAMES[langCode] ?? langCode;
  const langNote = LANGUAGE_NOTES[langCode] ? `\nLANGUAGE NOTE: ${LANGUAGE_NOTES[langCode]}` : "";
  return `You are a professional translator for Obsidian Help documentation. Translate the given Markdown content to ${langName}.

CRITICAL RULES:
1. Never translate these terms: Obsidian, Obsidian Sync, Obsidian Publish, Obsidian Web Clipper, Markdown, CSS, API, Canvas
2. Preserve all wikilinks [[...]], code blocks, inline code, URLs, and HTML tags exactly
3. Translate all heading text (##, ###, etc.) and prose naturally
4. Preserve all Markdown formatting (##, -, |, >, etc.) exactly
5. Do NOT include frontmatter (--- blocks) in your output
6. Do NOT wrap your response in markdown code fences
7. Return ONLY the translated markdown content, nothing else
${langNote}`;
}

// ─── Chunking ─────────────────────────────────────────────────────────────────

/**
 * Split content into chunks at ## heading boundaries, keeping each chunk
 * under maxLines. Falls back to splitting mid-section if a section is huge.
 */
function splitIntoChunks(content: string, maxLines: number): string[] {
  const lines = content.split("\n");
  const chunks: string[] = [];
  let start = 0;

  while (start < lines.length) {
    let end = Math.min(start + maxLines, lines.length);

    // If we haven't reached the end, backtrack to the last ## heading before end
    if (end < lines.length) {
      let boundary = -1;
      for (let i = end - 1; i > start; i--) {
        if (lines[i].startsWith("## ")) {
          boundary = i;
          break;
        }
      }
      if (boundary > start) end = boundary;
    }

    chunks.push(lines.slice(start, end).join("\n"));
    start = end;
  }

  return chunks.filter(c => c.trim().length > 0);
}

// ─── Find locale file ─────────────────────────────────────────────────────────

function findLocaleFile(enFile: string, localeDir: string): string | null {
  const enParsed = matter(fs.readFileSync(enFile, "utf8"));
  const permalink = enParsed.data?.permalink as string | undefined;

  function walk(dir: string): string | null {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const result = walk(full);
        if (result) return result;
      } else if (entry.name.endsWith(".md")) {
        const parsed = matter(fs.readFileSync(full, "utf8"));
        if (permalink && parsed.data?.permalink === permalink) return full;
      }
    }
    return null;
  }

  return walk(localeDir);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const enFile = path.join(ROOT, "en", enRelPath);
  if (!fs.existsSync(enFile)) {
    console.error(`EN file not found: ${enFile}`);
    process.exit(1);
  }

  const localeDir = path.join(ROOT, locale);
  if (!fs.existsSync(localeDir)) {
    console.error(`Locale directory not found: ${localeDir}`);
    process.exit(1);
  }

  const localeFile = findLocaleFile(enFile, localeDir);
  if (!localeFile) {
    console.error(`Could not find locale file for: ${enRelPath} in ${locale}/`);
    process.exit(1);
  }

  const langName = LANGUAGE_NAMES[locale] ?? locale;
  const enContent = matter(fs.readFileSync(enFile, "utf8")).content;
  const chunks = splitIntoChunks(enContent, chunkSize);

  console.log(`Translating ${path.relative(ROOT, localeFile)}`);
  console.log(`  Language: ${langName} | Model: ${model} | Chunks: ${chunks.length} (max ${chunkSize} lines each)`);

  const system = buildSystemPrompt(locale);
  let translated = "";

  for (let i = 0; i < chunks.length; i++) {
    const lineCount = chunks[i].split("\n").length;
    process.stdout.write(`  Chunk ${i + 1}/${chunks.length} (${lineCount} lines)... `);
    const result = await callLLM(system, chunks[i]);
    translated += (i > 0 ? "\n" : "") + result;
    console.log("✓");
    if (i < chunks.length - 1) await new Promise(r => setTimeout(r, 1000));
  }

  // Rebuild file: keep locale frontmatter, clear flags, write translated body
  const localeParsed = matter(fs.readFileSync(localeFile, "utf8"));
  delete localeParsed.data["needs-retranslation"];
  delete localeParsed.data["localized"];
  const fm = Object.entries(localeParsed.data)
    .map(([k, v]) => `${k}: ${typeof v === "string" ? v : JSON.stringify(v)}`)
    .join("\n");

  fs.writeFileSync(localeFile, `---\n${fm}\n---\n${translated}\n`, "utf8");
  console.log(`✓ Saved → ${path.relative(ROOT, localeFile)}`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
