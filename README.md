# Obsidian Help

This repository contains the source for the [Obsidian Help docs](https://help.obsidian.md/), along with the translations for each supported language.

⚠ Please do not open issues about Obsidian bug reports or feature requests here. Your issue will be closed and you'll be redirected to the forum.

The docs for each language are stand-alone vaults with a corresponding [Obsidian Publish](https://help.obsidian.md/Obsidian+Publish/Introduction+to+Obsidian+Publish) site.

| Language | URL                                     |
| -------- | --------------------------------------- |
| `en`     | https://help.obsidian.md/               |
| `ar`     | https://publish.obsidian.md/help-ar/    |
| `da`     | https://publish.obsidian.md/help-da/    |
| `es`     | https://publish.obsidian.md/help-es/    |
| `it`     | https://publish.obsidian.md/help-it/    |
| `ja`     | https://publish.obsidian.md/help-ja/    |
| `pt-br`  | https://publish.obsidian.md/help-pt-br/ |
| `ru`     | https://publish.obsidian.md/help-ru/    |
| `vi`     | https://publish.obsidian.md/help-vi/    |
| `zh`     | https://publish.obsidian.md/help-zh/    |

## Contribute

To contribute to Obsidian Help docs:

1. Fork the [obsidian-help](https://github.com/obsidianmd/obsidian-help) repository.
2. In the Obsidian vault switcher, select **Open folder as vault**.
3. Select the subfolder for the translation you want to contribute to, for example `/en/`. Don't open the root folder as a vault, as this may lead to links being updated incorrectly.

You can contribute in several ways:

- **Fix typos and mistakes**: If you want to fix a typo or other small modifications, you can submit a pull request. For smaller edits, you can use the GitHub web interface instead of cloning the repository.
- **Add missing or outdated content**: If you want to contribute missing or outdated content, please [submit an issue](https://github.com/obsidianmd/obsidian-help/issues/new) before you start working on it.

Any contributions to the English docs must follow our [Style guide](https://help.obsidian.md/Contributing+to+Obsidian/Style+guide).

## Translations

### Adding a new translation

To add a new translation, copy the entire `en` folder and rename it to the corresponding [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code in lowercase.

Each translation should follow the English docs (en) as closely as possible.

### Staying up-to-date

As we add more features and continue to improve the English docs, translations will eventually become out-of-date.

To see all changes to the English docs since the last update to the translation, run the following in your terminal:

```bash
git diff <COMMIT_SHA> HEAD -- en/
```

Replace `<COMMIT_SHA>` with the commit containing the latest changes for the translation.

> **Note**: If a translation falls too far behind the English version, we may eventually remove it.

## Roadmap

The Obsidian Help docs have grown considerably over the years. We're working on reorganizing some of the content to make things easier to find and understand.

The docs under the following folders have been updated to the new organization and style guide. If you're working on a translation, these are safe to work on (except for minor updates).

- [x] Contributing to Obsidian
- [x] Developers
- [x] Editing and formatting
- [x] Extending Obsidian
- [x] Getting started
- [x] Licenses and payment
- [x] Obsidian Publish
- [x] Obsidian Sync
- [x] Plugins

The docs in the following folders have yet to be updated, and may change considerably in the future. Any work done on these docs has a high risk of becoming outdated.

- [ ] Advanced topics
- [ ] Concepts
- [ ] Customization
- [ ] How to
- [ ] User interface

## Credits

To be featured on the [Credits](https://help.obsidian.md/Obsidian/Credits) page, add yourself to the [Credits](https://github.com/obsidianmd/obsidian-help/blob/master/en/Obsidian/Credits.md) file and to the corresponding translation.

## Additional resource

- [Style guide](https://help.obsidian.md/Contributing+to+Obsidian/Style+guide)
- [Translations](https://help.obsidian.md/Contributing+to+Obsidian/Translations)

