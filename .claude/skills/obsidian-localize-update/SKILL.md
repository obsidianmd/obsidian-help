---
name: obsidian-localize-update
description: Sync recent English source changes into an existing obsidian-help locale using diff-based patching — detecting stale translations, applying targeted patches for small changes, and doing full re-translation for large rewrites. Use this skill whenever the user wants to update, sync, or refresh an existing locale translation in obsidian-help, catch up a locale with EN changes, or re-translate stale pages.
---

Sync recent English source changes into an existing locale using diff-based patching.

The working directory is the obsidian-help repo root. If the user hasn't specified a locale code (e.g. `fr`, `de`), ask for it before proceeding.

## Context

The `en/` directory is source of truth. Each localized file stores the date it was translated in `localized: 'YYYY-MM-DD'` frontmatter. When EN changes after that date, the file is stale.

## Pipeline

Start each step with `--dry-run` so the user can review before committing.

### Step 1 — Sync structure from EN

Picks up new EN files (creates stubs) and removes deleted pages. Does NOT touch already-translated content.

```bash
npx tsx scripts/sync-locale.ts <locale> --dry-run   # preview
npx tsx scripts/sync-locale.ts <locale>             # apply
```

### Step 2 — Detect stale translations

Scans git log to find EN files that changed after each locale file's `localized` date. Marks stale files with `needs-retranslation: true` — preserving the translation date so the diff can be computed.

```bash
npx tsx scripts/translate-locale.ts <locale> --verify --dry-run   # preview what's stale
npx tsx scripts/translate-locale.ts <locale> --verify             # mark stale files
```

### Step 3 — Apply patches + translate new stubs

For **stale files** (`needs-retranslation: true`): gets the `git diff` of the EN file since the `localized` date, sends the diff + current locale content to the LLM, and applies only the changed parts.

- Diff ≤40% of file → **patch mode** (targeted fix, preserves existing translation)
- Diff >40% → **full re-translation** (too much changed)

For **new stubs** (`localized: null`): full translation from scratch.

```bash
npx tsx scripts/translate-locale.ts <locale> --dry-run   # preview
npx tsx scripts/translate-locale.ts <locale>             # patch + translate
```

After patching, `needs-retranslation` is cleared and `localized` is updated to today.

### Step 4 — Validate

```bash
npx tsx scripts/check-links.ts <locale>          # broken wikilinks
npx tsx scripts/lint-locale.ts <locale>          # unofficial terminology
npx tsx scripts/lint-locale.ts <locale> --fix    # auto-correct terminology
```

### Step 5 — Publish

```bash
cd <locale> && ob publish --all --yes
```

## Common scenarios

**A typo was fixed in EN** → patch mode: LLM sees a 1-line diff, fixes just that word in the locale.

**A new section was added to EN** → patch mode: LLM sees the added lines, translates and inserts them.

**An EN page was substantially rewritten** → full re-translation triggered automatically.

**A new EN page was added** → sync-locale creates a stub, translate-locale does a full translation.

**An EN page was deleted** → sync-locale deletes the locale file.

## Key flags

| Command | Flag | Effect |
|---------|------|--------|
| `sync-locale` | `--dry-run` | Preview without writing |
| `translate-locale` | `--verify` | Mark stale files |
| `translate-locale` | `--dry-run` | Preview without calling LLM |
| `translate-locale` | `--limit N` | Process N files at a time |
| `translate-locale` | `--file path` | Retranslate a specific file |
| `translate-locale` | `--fix-links` | Rewrite stale wikilink targets |
| `translate-locale` | `--translate-descriptions` | Batch-translate `description` fields |

## Notes

- `ANTHROPIC_API_KEY` must be set, or `scripts/llm-config.json` must exist
- Patch mode requires git history — shallow clones fall back to full re-translation
- Always run `check-links` before publishing
- If EN files were renamed, update `filenames.txt` and re-run `sync-locale` to move locale files to their new paths
