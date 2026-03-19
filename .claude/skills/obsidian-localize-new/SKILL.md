---
name: obsidian-localize-new
description: Bootstrap a brand-new locale for the obsidian-help repo from scratch — generating translated filenames, syncing stubs from EN, and running LLM translation. Use this skill whenever the user wants to add a new language to obsidian-help, start a new locale translation, or asks to localize/translate the help docs into a new language.
---

Bootstrap a full translation of a new locale for the obsidian-help repo.

The working directory is the obsidian-help repo root. If the user hasn't specified a locale code (e.g. `de`, `ja`, `ko`), ask for it before proceeding.

## Context

Scripts are in `scripts/`. The `en/` directory is the source of truth. Each locale (e.g. `fr/`, `de/`) mirrors `en/` with translated content. The `obsidian-translations` repo is assumed to be a sibling directory (i.e. `../obsidian-translations/`).

## Pipeline

Start by checking whether `<locale>/filenames.txt` exists and whether there are already files in `<locale>/`. This determines which steps to skip.

### Step 1 — Create the locale directory and filenames.txt

```bash
mkdir -p <locale>
```

`filenames.txt` maps every EN file (by permalink) to its locale filename and folder:

```
[file.{permalink}]
original=EN filename
translation=Locale filename

[folder.EN Folder Name]
original=EN Folder Name
translation=Locale Folder Name
```

If `filenames.txt` doesn't exist yet, run the translate-filenames script to generate it:

```bash
npx tsx scripts/translate-filenames.ts <locale>
```

This uses the LLM to propose locale filenames. Review the output with the user before proceeding.

### Step 2 — Sync stubs from EN

Creates a stub `.md` file for every EN page that doesn't yet exist in the locale. Stubs contain EN frontmatter + EN content as placeholder, marked `localized: null`.

```bash
npx tsx scripts/sync-locale.ts <locale> --dry-run   # preview first
npx tsx scripts/sync-locale.ts <locale>             # apply
```

The sync script places files at locale paths (using filenames.txt), adds EN basename as `aliases` when filenames differ, and deletes any orphan locale files.

### Step 2b — Add redirect aliases for old locale paths

If the locale previously had old-format files (before this migration), add backward-compat redirect aliases so old Obsidian Publish URLs continue to resolve.

```bash
npx tsx scripts/migrate-locale.ts <locale>          # dry run — review matches
npx tsx scripts/migrate-locale.ts <locale> --apply  # write aliases
```

For uncertain or unmatched paths, create `<locale>/migration-map.json` with explicit mappings before running `--apply`:

```json
{
  "Old/Path without extension": "en-permalink",
  "Another/Old Path": null
}
```

Set a permalink to `null` to skip a path. See `es/migration-map.json` or `fr/migration-map.json` as examples.

### Step 3 — Translate all stubs

Sends each `localized: null` file to the LLM for full translation. Translates content + description frontmatter.

```bash
npx tsx scripts/translate-locale.ts <locale> --dry-run   # preview count
npx tsx scripts/translate-locale.ts <locale>             # translate all
```

Translate in batches if the locale is large:
```bash
npx tsx scripts/translate-locale.ts <locale> --limit 20
```

### Step 4 — Validate

```bash
npx tsx scripts/check-links.ts <locale>         # broken wikilinks
npx tsx scripts/lint-locale.ts <locale>         # unofficial terminology
npx tsx scripts/lint-locale.ts <locale> --fix   # auto-correct
```

Fix any broken wikilinks before publishing. The lint script cross-references official plugin/feature names from obsidian-translations.

### Step 5 — Publish

```bash
cd <locale> && ob publish --all --yes
```

## Notes

- `ANTHROPIC_API_KEY` must be set, or `scripts/llm-config.json` must exist
- The LLM never translates: Obsidian, Sync, Publish, Canvas, Markdown, CSS, API
- Callout types (`[!warning]`) include explicit titles in EN source — these get translated automatically
- `description` frontmatter is translated alongside content
- Always run `check-links` before publishing

## Key files

- `<locale>/filenames.txt` — permalink → locale filename/folder mapping
- `<locale>/headings.txt` — EN heading → locale heading mapping (auto-maintained)
- `scripts/sync-locale.ts` — syncs EN structure to locale
- `scripts/migrate-locale.ts` — adds redirect aliases from old locale paths
- `scripts/translate-locale.ts` — LLM translation
- `scripts/check-links.ts` — broken wikilink checker
- `scripts/lint-locale.ts` — terminology checker
