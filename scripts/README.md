# Scripts

Localization and publishing toolchain for the obsidian-help repo. All scripts are TypeScript and run with `npx tsx scripts/<name>.ts`.

## Set up a new locale

| Script | Description |
| --- | --- |
| [translate-filenames.ts](#translate-filenamests) | Translate EN file/folder names and save to `filenames.txt` |
| [sync-locale.ts](#sync-localets) | Sync locale structure and frontmatter from EN |
| [migrate-locale.ts](#migrate-localets) | Add redirect aliases for old paths after restructuring |
| [translate-locale.ts](#translate-localets) | Translate EN content to a locale via Claude API |
| [rewrite-urls.ts](#rewrite-urlsts) | Rewrite obsidian.md links to locale-specific URLs |
| [build-publish-js.ts](#build-publish-jsts) | Generate locale `publish.js` from base and locale strings |
| [publish-all.ts](#publish-allts) | Publish all locales to Obsidian Publish |

## Update a locale

| Script | Description |
| --- | --- |
| [sync-locale.ts](#sync-localets) | Sync locale structure and frontmatter from EN |
| [apply-diff-locale.ts](#apply-diff-localets) | Propagate EN git diff changes to a locale |
| [translate-locale.ts](#translate-localets) | Translate EN content to a locale via Claude API |
| [check-links.ts](#check-linksts) | Validate wikilink targets in a locale |
| [check-terms.ts](#check-termsts) | Check for unofficial feature/plugin name translations |
| [build-publish-js.ts](#build-publish-jsts) | Generate locale `publish.js` from base and locale strings |
| [publish-all.ts](#publish-allts) | Publish all locales and sync nav order |

---

## translate-filenames.ts

Translates EN file and folder names into locale equivalents and saves them to `filenames.txt`. Run this after new EN files are added and before `sync-locale.ts` to get correct locale paths.

```bash
npx tsx scripts/translate-filenames.ts <locale> [--dry-run]
```

- Skips proper nouns that should not be translated: *Obsidian, Sync, Publish, Canvas, Markdown, CSS, API, Bases, Attachments*
- Processes in batches of 50 per LLM call
- Incremental: only translates entries missing from or unchanged in `filenames.txt`

**filenames.txt format:**

```ini
[file.{permalink}]
original=EN filename
translation=Locale filename

[folder.{EN folder name}]
original=EN folder name
translation=Locale folder name
```

---

## sync-locale.ts

Syncs a locale's directory structure and frontmatter to match EN (source of truth). Run this whenever EN files are added, moved, or removed.

```bash
npx tsx scripts/sync-locale.ts <locale> [--dry-run]
```

- **Moves** files that exist but are at the wrong path (adds old basename as alias)
- **Creates** stubs for EN files not yet in the locale (`localized: false`)
- **Deletes** orphaned locale files with no EN counterpart
- **Syncs** frontmatter fields: `permalink`, `cssclasses`, `publish`, `mobile`
- **Preserves** locale-specific aliases; strips EN-only aliases
- **publish.css**: concatenates `en/publish.css` + `scripts/rtl.css` (RTL locales: ar, he, fa, ur) + any `LOCALE-CUSTOM` section in the existing file
- Syncs root assets (favicon, etc.) and `Attachments/` from EN
- Uses `filenames.txt` to resolve locale-specific file and folder names

---

## migrate-locale.ts

Creates backward-compatible redirect aliases for old file paths after a locale restructure.

```bash
npx tsx scripts/migrate-locale.ts <locale> [--apply] [--commit <sha>]
```

- Fuzzy-matches old paths to EN permalinks by filename and heading similarity
- Groups matches by confidence: exact (100%), confident (≥35%), uncertain (<35%), unmatched
- Accepts a `<locale>/migration-map.json` file to override specific matches
- `--apply`: write matched aliases to locale files (default: preview only)

---

## translate-locale.ts

Translates EN markdown content into a locale using the Claude API. Reads stubs created by `sync-locale.ts` and writes fully translated files.

```bash
npx tsx scripts/translate-locale.ts <locale> [options]
```

| Option | Description |
| --- | --- |
| _(default)_ | Translate all files with `localized: null/false` or `needs-retranslation: true` |
| `--fix-links` | Rewrite heading anchors and wikilink targets in already-translated files (no re-translation) |
| `--edit` | Convert speech register throughout (e.g. formal → informal) |
| `--verify` | Also re-queue stale files for translation |
| `--file <path>` | Translate a single file |
| `--dry-run` | Preview without writing |

**How it works:**
- Loads glossaries from `obsidian-translations` and `obsidian-clipper` repos
- Loads `headings.txt` for heading anchor link rewriting
- Loads `filenames.txt` for EN → locale wikilink target rewriting
- After translating, extracts heading translations and saves them to `headings.txt`

**Language-specific notes:** German uses informal *du*; Korean uses 해요체 register.

---

## rewrite-urls.ts

Rewrites `https://obsidian.md/` links to locale-specific URLs.

```bash
npx tsx scripts/rewrite-urls.ts <locale> [--dry-run]
npx tsx scripts/rewrite-urls.ts --all [--dry-run]
```

- Adds `/<locale>/` prefix to obsidian.md URLs
- Skips URLs that already have a locale prefix, contain `/images/`, or point to files with extensions
- Active locales: `ar ja pt-br es ko zh fr ru it`

---

## apply-diff-locale.ts

Propagates EN content changes to a locale by applying a git diff. Useful for keeping translated files in sync after EN edits.

```bash
npx tsx scripts/apply-diff-locale.ts <locale> [--from <git-ref>] [--dry-run]
```

- `--from <ref>`: compare against a specific git ref (default: HEAD, i.e. uncommitted changes)
- Pure removals (paragraphs, callouts, headings) are applied structurally without the LLM
- Additions and mixed changes are sent to Claude for intelligent translation
- Skips files that are still unlocalized stubs
- Adds 1-second delay between LLM calls to respect rate limits

---

## check-links.ts

Validates that all wikilink targets in a locale resolve to real files.

```bash
npx tsx scripts/check-links.ts <locale>
```

- Scans all `.md` files for `[[target]]` wikilinks
- Matches against file basenames and aliases (case-insensitive)
- Skips stubs (`localized: false`), code blocks, block references, and attachment extensions
- Exits with code 1 if broken links are found

---

## check-terms.ts

Checks translated files for unofficial feature and plugin names using the `obsidian-translations` repo as the authority.

```bash
npx tsx scripts/check-terms.ts <locale> [--fix]
```

- Flags English terms where an official translation exists
- Skips short words, proper nouns, code spans, URLs, and wikilinks
- `--fix`: auto-corrects issues in-place
- Without `--fix`: prints a grouped report with line numbers and context

---

## sync-nav-order.ts

Translates the EN navigation order to locale equivalents and applies it to the Publish site. Called automatically by `publish-all.ts` after each non-EN publish.

```bash
npx tsx scripts/sync-nav-order.ts <locale> [--dry-run]
```

- Reads EN nav order from `ob publish-site-options --path en/`
- Translates paths using `filenames.txt` mappings
- Applies via `ob publish-site-options --nav-order`
- `--dry-run`: show proposed changes without applying

---

## build-publish-js.ts

Generates locale-specific `publish.js` files by concatenating the base and locale-specific JavaScript.

```bash
npx tsx scripts/build-publish-js.ts [locale ...] [--dry-run]
```

- Concatenates `en/publish.js` (shared base) with `<locale>/publish.strings.js` (locale UI strings)
- Auto-detects all locales if none specified
- Skips files that have not changed

---

## publish-all.ts

Publishes all (or specified) locales to Obsidian Publish, then syncs nav order for each non-EN locale.

```bash
npx tsx scripts/publish-all.ts [--dry-run] [locale ...]
```

- Runs `ob publish --path <locale> --all --yes` for each locale sequentially
- After each non-EN publish, runs `sync-nav-order.ts` to update nav order on the live site
- Active locales: `en ar de ja pt-br es ko zh fr ru it`
- Continues publishing remaining locales if one fails; exits non-zero if any failed
- `--dry-run`: preview changes without uploading

---

## Configuration

LLM-backed scripts (`translate-locale.ts`, `translate-filenames.ts`, `apply-diff-locale.ts`) read API settings from `scripts/llm-config.json`. Copy `llm-config.example.json` to get started.
