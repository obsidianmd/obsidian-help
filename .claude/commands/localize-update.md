---
description: Sync EN changes to an existing locale (verify, patch, publish)
argument-hint: [locale-code]
allowed-tools: Bash(npx:*), Bash(ob:*), Bash(git:*), Read, Write, Edit
---

Sync recent English source changes into an existing locale (`$1`) using diff-based patching.

## Context

The `en/` directory is source of truth. Each localized file stores the date it was translated in `localized: 'YYYY-MM-DD'` frontmatter. When EN changes after that date, the file is stale.

## The incremental update pipeline

### Step 1 — Sync structure from EN

Picks up new EN files (creates stubs) and removes deleted pages. Does NOT touch already-translated content.

```bash
npx tsx scripts/sync-locale.ts $1 --dry-run   # preview
npx tsx scripts/sync-locale.ts $1             # apply
```

### Step 2 — Detect stale translations

Scans git log to find EN files that changed after each locale file's `localized` date. Marks stale files with `needs-retranslation: true` — preserving the translation date so the diff can be computed.

```bash
npx tsx scripts/translate-locale.ts $1 --verify --dry-run   # preview what's stale
npx tsx scripts/translate-locale.ts $1 --verify             # mark stale files
```

### Step 3 — Apply patches + translate new stubs

For **stale files** (`needs-retranslation: true`): the script gets the `git diff` of the EN file since the `localized` date, sends the diff + current locale content to the LLM, and asks it to apply only the changes. This preserves the existing translation and only updates what changed.

- If the diff is ≤40% of the file → **patch mode** (targeted fix)
- If the diff is >40% → **full re-translation** (too much changed)

For **new stubs** (`localized: null`): full translation from scratch.

```bash
npx tsx scripts/translate-locale.ts $1 --dry-run   # preview
npx tsx scripts/translate-locale.ts $1             # patch + translate
```

After patching, `needs-retranslation` is cleared and `localized` is updated to today.

### Step 4 — Validate

```bash
npx tsx scripts/check-links.ts $1          # broken wikilinks
npx tsx scripts/lint-locale.ts $1          # unofficial terminology
npx tsx scripts/lint-locale.ts $1 --fix    # auto-correct terminology
```

### Step 5 — Publish

```bash
cd $1 && ob publish --all --yes
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
- Patch mode requires git history — if running in a shallow clone, patch falls back to full re-translation
- Always run `check-links` before publishing to catch any broken wikilink targets introduced by the patch
- The `filenames.txt` mapping must stay in sync with `en/` — if EN files are renamed, update filenames.txt and run `sync-locale` to move locale files to their new paths

Now execute the steps above for locale `$1`. Start with `--dry-run` for each step so the user can review before committing.
