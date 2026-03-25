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

Picks up new EN files (creates stubs), removes deleted pages, and cleans up empty legacy folders. Does NOT touch already-translated content.

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
npx tsx scripts/check-terms.ts <locale>          # unofficial terminology
npx tsx scripts/check-terms.ts <locale> --fix    # auto-correct terminology
```

### Step 4 — Rebuild publish.js

`en/publish.js` is the source of truth. Each locale's `publish.js` = switcher + its own `publish.strings.js`. Rebuild after any change to `en/publish.js` or a locale's strings file.

```bash
npx tsx scripts/build-publish-js.ts [locale ...]   # omit locale to rebuild all
```

### Step 5 — Publish

```bash
ob publish --path <locale> --all --yes
```

## Diff-based updates (working from a base commit)

When the user provides a base commit, **inspect the diff first** before deciding what action to take:

```bash
git show <commit> --stat          # what files changed
git show <commit>                 # exact line-level changes
```

Categorize each changed EN file by the nature of its changes, then act accordingly:

| Change type | Action |
|-------------|--------|
| Wikilink/anchor fix only (target or anchor changed, display text unchanged) | Apply the same link fix surgically to each locale file — do NOT retranslate |
| Display text of a wikilink changed (e.g. "notes" → "data") | Apply surgically: update both anchor and display text using the locale's `headings.txt` for the correct translation |
| EN page renamed (wikilinks now point to a different file) | Update wikilinks in locale files to point to the locale equivalent of the new EN filename |
| Prose/content changed | Flag affected locale files with `needs-retranslation: true`, then run translate-locale |
| New page added | sync-locale creates a stub; translate-locale translates it |
| Page deleted | sync-locale removes the locale file |

**Never use `needs-retranslation: true` for wikilink-only changes.** Re-translating an entire file to fix a link destroys existing translation work.

When applying surgical link fixes: find the locale equivalent file by matching the `permalink` field, then apply the exact diff pattern to that file.

## Common scenarios

**A new EN page was added** → sync-locale creates a stub, translate-locale translates it.

**An EN page was deleted** → sync-locale deletes the locale file.

**A specific page needs re-translation** → add `needs-retranslation: true` to its frontmatter, then run translate-locale.

**EN wikilinks/anchors corrected** → inspect each change, apply surgically to locale files. Check if the old pattern actually appears in locale files before assuming it does.

**EN nav order changed** → run `sync-nav-order.ts` for affected locales.

**EN publish.js changed** → run `build-publish-js.ts` to rebuild all locale `publish.js` files.

**Locale UI strings need updating** → edit `<locale>/publish.strings.js`, then rebuild with `build-publish-js.ts`.

## Key flags

| Command | Flag | Effect |
|---------|------|--------|
| `sync-locale` | `--dry-run` | Preview without writing |
| `translate-locale` | `--dry-run` | Preview without calling LLM |
| `translate-locale` | `--limit N` | Process N files at a time |
| `translate-locale` | `--file path` | Retranslate a specific file |
| `translate-locale` | `--fix-links` | Rewrite stale wikilink targets |
| `translate-locale` | `--translate-descriptions` | Batch-translate `description` fields |
| `localize-nav-order` | `--dry-run` | Preview path translations without applying |
| `build-publish-js` | `--dry-run` | Preview without writing |

## Notes

- `ANTHROPIC_API_KEY` must be set, or `scripts/llm-config.json` must exist
- Always run `check-links` before publishing
- If EN files were renamed, update `filenames.txt` and re-run `sync-locale` to move locale files to their new paths
- `publish.js` is excluded from `sync-locale` — it is generated by `build-publish-js.ts`
- Locales in the language switcher dropdown: `en`, `es`, `fr`, `ja`, `zh`
