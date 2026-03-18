---
description: Bootstrap a new locale from scratch (filenames, sync, translate)
argument-hint: [locale-code]
allowed-tools: Bash(npx:*), Bash(ob:*), Bash(mkdir:*), Read, Write, Edit
---

Bootstrap a full translation of a new locale (`$1`) for the obsidian-help repo.

## Context

Scripts are in `scripts/`. The `en/` directory is the source of truth. Each locale (e.g. `fr/`, `de/`) mirrors `en/` with translated content. The `obsidian-translations` repo is assumed to be a sibling directory (i.e. `../obsidian-translations/`).

The pipeline for a **new locale** is:

### Step 1 — Create the locale directory and filenames.txt

```bash
mkdir -p $1
```

`filenames.txt` maps every EN file (by permalink) to its locale filename and folder. Format:

```
[file.{permalink}]
original=EN filename
translation=Locale filename

[folder.EN Folder Name]
original=EN Folder Name
translation=Locale Folder Name
```

If `filenames.txt` doesn't exist yet, run the translate-filenames script to generate it interactively:

```bash
npx tsx scripts/translate-filenames.ts $1
```

This uses the LLM to propose locale filenames and lets you review them.

### Step 2 — Sync stubs from EN

Creates a stub `.md` file for every EN page that doesn't yet exist in the locale. Stubs contain EN frontmatter + EN content (as placeholder), marked `localized: null`.

```bash
npx tsx scripts/sync-locale.ts $1 --dry-run   # preview
npx tsx scripts/sync-locale.ts $1             # apply
```

The sync script:
- Places files at locale paths (using filenames.txt for folder/file names)
- Adds EN basename as `aliases` when the locale filename differs (so wikilinks still resolve)
- Deletes orphan locale files whose permalink no longer exists in EN

### Step 3 — Translate all stubs

Sends each `localized: null` file to the LLM for full translation. Translates content + description frontmatter field.

```bash
npx tsx scripts/translate-locale.ts $1 --dry-run   # preview count
npx tsx scripts/translate-locale.ts $1             # translate all
```

The translate script uses:
- A glossary from `../obsidian-translations/terms.txt`
- A link reference built from filenames.txt (so wikilink targets use locale filenames)
- `ANTHROPIC_API_KEY` env var (or `scripts/llm-config.json`)

To translate in batches (e.g. 20 at a time):
```bash
npx tsx scripts/translate-locale.ts $1 --limit 20
```

### Step 4 — Validate

Check for broken wikilinks:
```bash
npx tsx scripts/check-links.ts $1
```

Check for unofficial feature/plugin names (cross-references obsidian-translations):
```bash
npx tsx scripts/lint-locale.ts $1
npx tsx scripts/lint-locale.ts $1 --fix   # auto-correct
```

### Step 5 — Publish

```bash
cd $1 && ob publish --all --yes
```

## Key files

- `$1/filenames.txt` — permalink → locale filename/folder mapping
- `$1/headings.txt` — EN heading → locale heading mapping (auto-maintained)
- `scripts/sync-locale.ts` — syncs EN structure to locale
- `scripts/translate-locale.ts` — LLM translation
- `scripts/check-links.ts` — broken wikilink checker
- `scripts/lint-locale.ts` — terminology checker

## Notes

- The LLM never translates: Obsidian, Sync, Publish, Canvas, Markdown, CSS, API
- Callout types (`[!warning]`) render their title — EN source files include explicit titles (e.g. `[!warning] Warning`) so the translator picks them up
- `description` frontmatter is translated alongside content
- After translation, always run `check-links` before publishing

Now execute the steps above for locale `$1`. Start by checking if `$1/filenames.txt` exists and whether there are already any files in `$1/`.
