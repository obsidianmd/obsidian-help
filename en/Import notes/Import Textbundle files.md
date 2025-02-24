---
permalink: import/textbundle
---

Obsidian allows you to easily migrate your notes from apps that support the [Textbundle](https://textbundle.org/) format using the [[Importer|Importer plugin]].

The Textbundle format bundles Markdown text and all referenced images into a single file, providing a more seamless way to move out of a sandboxed application. Textbundle export is supported by [many apps](https://textbundle.org/), including Agenda, Craft, Taio, Ulysses, Zettlr, and more.

## Import Textbundle files into Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **Settings**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** choose **Textbundle (.textbundle, .textpack).**
6. Select the location of your Textbundle or Textpack files. Zip files are also supported.
7. Click **Import** and wait until import is complete.
8. You're done!

## Troubleshooting

### No files are selected for import

The textbundle import can only import one textbundle file at a time, and only on Mac devices. Instead, you may compress all of the textbundle files you wish to import into a single .zip file and import this instead from any device.
