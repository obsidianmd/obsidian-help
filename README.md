# Obsidian Help

This repository contains the source for the [Obsidian Help docs](https://obsidian.md/help/), along with the translations for each supported language.

⚠ Please do not open issues about Obsidian bug reports or feature requests here. Your issue will be closed and you'll be redirected to the forum.

The docs for each language are stand-alone vaults with a corresponding [Obsidian Publish](https://obsidian.md/help/publish) site.

| Language | URL                             |
| -------- | --------------------------------|
| `en`     | https://obsidian.md/help/       |
| `ar`     | https://obsidian.md/ar/help/    |
| `da`     | https://obsidian.md/da/help/    |
| `de`     | https://obsidian.md/de/help/    |
| `el`     | https://obsidian.md/el/help/    |
| `es`     | https://obsidian.md/es/help/    |
| `fa`     | https://obsidian.md/fa/help/    |
| `fr`     | https://obsidian.md/fr/help/    |
| `he`     | https://obsidian.md/he/help/    |
| `id`     | https://obsidian.md/id/help/    |
| `it`     | https://obsidian.md/it/help/    |
| `ja`     | https://obsidian.md/ja/help/    |
| `km`     | https://obsidian.md/km/help/    |
| `ko`     | https://obsidian.md/ko/help/    |
| `nl`     | https://obsidian.md/nl/help/    |
| `pl`     | https://obsidian.md/pl/help/    |
| `pt-BR`  | https://obsidian.md/pt-BR/help/ |
| `ru`     | https://obsidian.md/ru/help/    |
| `th`     | https://obsidian.md/th/help/    |
| `tr`     | https://obsidian.md/tr/help/    |
| `uk`     | https://obsidian.md/uk/help/    |
| `vi`     | https://obsidian.md/vi/help/    |
| `zh`     | https://obsidian.md/zh/help/    |
| `zh-TW`     | https://obsidian.md/zh-TW/help/ |

## Guidelines

- The English locale `en` is considered the source of truth. All changes should be made to the English locale first.
- For any Obsidian app text (such as buttons, features, etc), use [obsidian-translations](https://github.com/obsidianmd/obsidian-translations) as the source of truth for all locales.
- Every page uses the same `permalink` value across locales. This permalink functions as a unique ID and path for cross-locale access to the same content. For example, `obsidian.md/help/resources` (for English) points to the same content as `obsidian.md/fr/help/resources` (French).
- All pages from the English locale should exist 1:1 on all other locales to ensure all permalinks work across locales. It is better to have untranslated English text at the locale URL than a broken URL.
- See the [Style Guide](https://obsidian.md/help/style-guide) for guidelines on writing style.

## Workflow

### Add a new language

To add a new language, please [submit an issue](https://github.com/obsidianmd/obsidian-help/issues/new).

When bootstrapping a new translation, we use [/scripts](/scripts) to copy the entire `en` content to the new locale and create an initial automatic translation.

### Update English first

All additions and removals should be made to the `en` locale first. Changes are applied automatically to other locales using [/scripts](/scripts). 

The scripts use diffs to determine if the changes can be made deterministically (e.g. removing entire sections), can be processed in chunks (e.g. adding a bullet point to an exsiting list), or need an entirely new page translation.

### Refine other languages

Refinements to translations should be done on top of the automatic translations generated in previous steps.

Focus on sentences that could be made to sound more native and natural, while retaining the meaning from the original English content.

### Publishing

All commits to `main` branch are automatically published.

## Contribute

To contribute to Obsidian Help docs:

1. Fork the [obsidian-help](https://github.com/obsidianmd/obsidian-help) repository.
2. In the Obsidian vault switcher, select **Open folder as vault**.
3. Select the subfolder for the translation you want to contribute to, for example `/en/`. Don't open the root folder as a vault, as this may lead to links being updated incorrectly.

You can contribute in several ways:

- **Native tone**: Automatic translations don't read as naturally as human translation from native speakers. Look for content that seems directly generated from English to make it read more natively.
- **Fix typos and mistakes**: If you want to fix a typo or other small modifications, you can submit a pull request. For smaller edits, you can use the GitHub web interface instead of cloning the repository.
- **Add missing or outdated content**: If you want to contribute missing or outdated content, please [submit an issue](https://github.com/obsidianmd/obsidian-help/issues/new) before you start working on it.

Any contributions to the English docs must follow our [Style guide](https://obsidian.md/help/style-guide).

## Credits

To be featured on the [Credits](https://obsidian.md/help/credits) page, add yourself to the [Credits](https://github.com/obsidianmd/obsidian-help/blob/master/en/Obsidian/Credits.md) file and to the corresponding translation.

## Additional resource

- [Style guide](https://obsidian.md/help/style-guide)
- [Translations](https://obsidian.md/help/translations)

