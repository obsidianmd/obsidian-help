---
permalink: import/reflect
---
Obsidian lets you easily migrate your notes from Reflect using the [[Importer|Importer plugin]]. This will convert your Reflect data to durable Markdown files, that you can use with Obsidian and many other apps.

## Export your data from Reflect

1. In Reflect, open **Preferences** (`Cmd + ,` on macOS, `Ctrl + ,` on Windows).
2. Select the graph you want to export in the sidebar.
3. Under **Export**, choose "Reflect JSON" as the format.
4. Select **Export Reflect** to download a `.json` file with all your notes.

> [!note]
> The export includes all notes in the selected graph. Individual note export is not currently supported.

## Import your Reflect data into Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Settings]]**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** choose **Reflect (.json)**.
6. Select the location of your `.json` file.
7. Under **Output folder**, choose where your files should import.
8. Review the import settings:
	- **Download all attachments** — downloads images uploaded to Reflect _(on by default)_.
	- **Add YAML tags** — adds your Reflect tags as note properties _(on by default)_.
	- **Add YAML created/updated date** — adds timestamps as note properties _(off by default)_.
	- **Add YAML title** — adds the full title as a note property _(off by default)_.
9. Select **Import** and wait until import is complete.
10. You're done!

> [!tip] Daily notes
> If you have the [[Daily notes]] plugin enabled, your Reflect daily notes will be imported using your configured daily note format.

## Supported content

The following content types are converted from Reflect to Markdown:

- Headings, paragraphs, and horizontal rules
- Bullet lists, ordered lists, and task lists
- Backlinks (`[[note title]]`)
- Tags
- Images and attachments
- Code blocks (with language syntax)
- Blockquotes
- Embeds (YouTube and other iframes)
- Bold, italic, strikethrough, underline, and inline code
