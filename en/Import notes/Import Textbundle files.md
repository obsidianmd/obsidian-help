---
permalink: import/textbundle
---
Obsidian allows you to easily import [Textbundle](https://textbundle.org/) files using the official [[Importer|Importer plugin]].

If you are importing notes from a specific app, you may want to first review the list of apps supported by [[Importer|Importer plugin]] to check if there is a specific converter that will better preserve the data you are migrating.

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

The Textbundle import can only import one Textbundle file at a time, and only on Mac devices. Instead, you may compress all of the Textbundle files you wish to import into a single .zip file and import this instead from any device.
