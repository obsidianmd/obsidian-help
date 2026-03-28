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

Creates a stub `.md` file for every EN page that doesn't yet exist in the locale. Stubs contain EN frontmatter + EN content as placeholder, marked `localized: false`.

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

Since `filenames.txt` is created in this session and not yet committed, the script can't auto-detect the pre-migration commit. Pass the last commit that touched the locale:

```bash
git log --oneline -- <locale>/   # find last commit
npx tsx scripts/migrate-locale.ts <locale> --commit <sha>
npx tsx scripts/migrate-locale.ts <locale> --commit <sha> --apply
```

### Step 3 — Translate all stubs

Sends each `localized: false` file to the LLM for full translation. After translating the body, descriptions are automatically translated in a batched pass.

```bash
npx tsx scripts/translate-locale.ts <locale> --dry-run   # preview count
npx tsx scripts/translate-locale.ts <locale>             # translate all
```

To re-translate descriptions for already-localized files (e.g. after EN descriptions changed):
```bash
npx tsx scripts/translate-locale.ts <locale> --translate-descriptions
```

Translate in batches if the locale is large:
```bash
npx tsx scripts/translate-locale.ts <locale> --limit 20
```

### Step 4 — Validate

```bash
npx tsx scripts/check-links.ts <locale>         # broken wikilinks
npx tsx scripts/check-terms.ts <locale>         # unofficial terminology
npx tsx scripts/check-terms.ts <locale> --fix   # auto-correct
```

Fix any broken wikilinks before publishing. The lint script cross-references official plugin/feature names from obsidian-translations.

### Step 5 — Add publish UI strings and language switcher

Create `<locale>/publish.strings.js` with translated UI strings for the Publish site. Use official app strings from `../obsidian-translations/translations/<lang>.txt` for accuracy:

```js
// Locale UI strings — <Language>
(function () {
  function apply() {
    var el;
    el = document.querySelector('.search-bar');
    if (!el) return false;
    el.placeholder = '<Search pages or headings...>';
    el = document.querySelector('.site-footer a');
    if (el) el.textContent = '<Powered by Obsidian Publish>';
    el = document.querySelector('.graph-view-outer span:last-child');
    if (el) el.textContent = '<Interactive graph>';
    el = document.querySelector('.graph-expand');
    if (el) el.setAttribute('aria-label', '<Expand>');
    el = document.querySelector('.graph-global');
    if (el) el.setAttribute('aria-label', '<Global graph>');
    el = document.querySelector('.outline-view-outer span:last-child');
    if (el) el.textContent = '<On this page>';
    return true;
  }
  function poll() { if (!apply()) requestAnimationFrame(poll); }
  poll();
  var blText = '<Backlinks>';
  function applyBl() { document.querySelectorAll('.backlinks span:last-child').forEach(function(e) { e.textContent = blText; }); }
  new MutationObserver(applyBl).observe(document.body, { childList: true, subtree: true });
  applyBl();
})();
```

Add the locale to `scripts/locales.json` (single source of truth — keep alphabetical, `zh` last). Then build:

```bash
# Edit scripts/locales.json — add entry { "code": "xx", "label": "Native Name", "base": "https://obsidian.md/xx/help" }
# For locales where the directory name differs from the URL code (e.g. pt-BR → pt-br), add a "dir" field
npx tsx scripts/build-publish-js.ts <locale>   # bootstrap locale's publish.js (first time)
npx tsx scripts/build-publish-js.ts            # sync to all locales (also regenerates en/publish.js)
```

Label conventions: use the native language name, e.g. `Português (Brasil)` for pt-BR, `Español` for es. Use the correct locale code (e.g. `pt-BR` not `pt-br`) to match the Obsidian Publish URL.

### Step 6 — Link Publish site

Before publishing, link the locale to its Obsidian Publish site. The site slug is `help-<locale-slug>` where the slug is the lowercase version of the locale code (e.g. `zh-TW` → `help-zh-tw`, `pt-BR` → `help-pt-br`):

```bash
cd <locale> && ob publish-setup --site help-<locale-slug>
```

This writes the Obsidian Publish credentials into the locale's `.obsidian/publish.json` with the correct path. Without this step, `ob publish` will report "No publish configuration found".

> **Note:** `setup-sites.ts` (run automatically by `publish-all.ts`) re-runs `ob publish-setup` for every locale before publishing. It uses `locales.json` to resolve the correct directory name, so mixed-case locales like `zh-TW` are handled correctly.

### Step 7 — Update README

Add the new locale to the language table in `README.md`. The table is sorted alphabetically by locale code, with `en` first and `zh`/`zh-TW` last. Insert the new row in the correct alphabetical position:

```markdown
| `<locale>` | https://obsidian.md/<locale>/help/ |
```

Use the same locale code casing as in `locales.json` (e.g. `pt-BR`, `zh-TW`).

### Step 8 — Publish

Publish the new locale using the publish-all script (it handles nav order and site options too):

```bash
npx tsx scripts/publish-all.ts <locale>        # publish just this locale
npx tsx scripts/publish-all.ts                 # publish all locales (to push updated language switcher)
```

## Notes

- `ANTHROPIC_API_KEY` must be set, or `scripts/llm-config.json` must exist
- The LLM never translates: Obsidian, Sync, Publish, Canvas, Markdown, CSS, API
- `translate-filenames.ts` automatically loads official plugin name translations from `../obsidian-translations/translations/<lang>.txt` and passes them to the LLM — this prevents mismatches between filename and content translations (e.g. "Backlinks" vs "Links inversos")
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
- `scripts/check-terms.ts` — terminology checker
- `<locale>/publish.strings.js` — locale UI strings for Publish site (search, footer, graph, outline, backlinks labels)
- `scripts/locales.json` — **single source of truth** for active locales (code, label, base URL, optional dir)
- `scripts/build-publish-js.ts` — reads locales.json, regenerates LOCALES block in en/publish.js, concatenates publish.strings.js into each locale's publish.js
- `scripts/sync-nav-order.ts` — translates EN nav order to locale paths; run automatically by `publish-all.ts`
