---
name: obsidian-publish-all
description: Publish all active obsidian-help locales (en, ja, pt-br, es, zh, fr) via ob publish. Use this skill whenever the user wants to publish or deploy the help site, push locale changes live, or run ob publish across all locales.
---

Publish all active locales to Obsidian Publish.

The working directory is the obsidian-help repo root.

## Active locales

`en`, `ja`, `pt-br`, `es`, `zh`, `fr`

## Commands

```bash
# Preview what would be published (no changes made)
npx tsx scripts/publish-all.ts --dry-run

# Publish all active locales
npx tsx scripts/publish-all.ts

# Publish specific locales only
npx tsx scripts/publish-all.ts fr ja zh
```

## Notes

- Always run `--dry-run` first so the user can review the changeset before publishing.
- The script runs `ob publish --path <locale> --all --yes` for each locale sequentially.
- If a locale fails, the script continues with the remaining locales and exits with a non-zero code at the end.
- To publish a single locale manually: `ob publish --path <locale> --all --yes`
