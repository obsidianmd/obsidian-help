---
name: obsidian-localize-update
description: Sync recent English source changes into an existing obsidian-help locale — creating stubs for new pages, translating untranslated stubs, and retranslating manually flagged files. Use this skill whenever the user wants to update, sync, or refresh an existing locale translation in obsidian-help, catch up a locale with EN changes, or re-translate specific pages.
---

Sync recent English source changes into an existing locale.

The working directory is the obsidian-help repo root. If the user hasn't specified a locale code (e.g. `fr`, `de`), ask for it before proceeding.

## Context

The `en/` directory is source of truth. Translated files have no special frontmatter marker. Stubs (created by sync-locale for new EN pages) have `localized: false` — this is the only use of the `localized` field. To force a re-translation, add `needs-retranslation: true` to a file's frontmatter manually.

## Pipeline

Start each step with `--dry-run` so the user can review before committing.

### Step 1 — Sync structure from EN

Picks up new EN files (creates stubs) and removes deleted pages. Does NOT touch already-translated content.

```bash
npx tsx scripts/sync-locale.ts <locale> --dry-run   # preview
npx tsx scripts/sync-locale.ts <locale>             # apply
```

### Step 2 — Translate stubs + flagged files

For **stubs** (`localized: false`): full translation from scratch.

For **manually flagged files** (`needs-retranslation: true`): full re-translation.

```bash
npx tsx scripts/translate-locale.ts <locale> --dry-run   # preview
npx tsx scripts/translate-locale.ts <locale>             # translate
```

After translation, `localized` and `needs-retranslation` are removed from frontmatter.

### Step 3 — Validate

```bash
npx tsx scripts/check-links.ts <locale>          # broken wikilinks
npx tsx scripts/lint-locale.ts <locale>          # unofficial terminology
npx tsx scripts/lint-locale.ts <locale> --fix    # auto-correct terminology
```

### Step 4 — Publish

```bash
cd <locale> && ob publish --all --yes
```

## Common scenarios

**A new EN page was added** → sync-locale creates a stub, translate-locale translates it.

**An EN page was deleted** → sync-locale deletes the locale file.

**A specific page needs re-translation** → add `needs-retranslation: true` to its frontmatter, then run translate-locale.

## Key flags

| Command | Flag | Effect |
|---------|------|--------|
| `sync-locale` | `--dry-run` | Preview without writing |
| `translate-locale` | `--dry-run` | Preview without calling LLM |
| `translate-locale` | `--limit N` | Process N files at a time |
| `translate-locale` | `--file path` | Retranslate a specific file |
| `translate-locale` | `--fix-links` | Rewrite stale wikilink targets |
| `translate-locale` | `--translate-descriptions` | Batch-translate `description` fields |

## Notes

- `ANTHROPIC_API_KEY` must be set, or `scripts/llm-config.json` must exist
- Always run `check-links` before publishing
- If EN files were renamed, update `filenames.txt` and re-run `sync-locale` to move locale files to their new paths
