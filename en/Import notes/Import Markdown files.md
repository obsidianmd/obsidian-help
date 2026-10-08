---
permalink: import/markdown
cssclasses:
  - soft-embed
---
Obsidian uses Markdown `.md` files as the primary format for notes. This makes it easy to import Markdown files into Obsidian. Many apps can edit Markdown files or export to this format.

There are several ways to add Markdown files to your Obsidian vault:

1. Drag and drop files or folders into the [[File explorer]] window
2. Use your system file browser (e.g. Windows Explorer or Finder on macOS), and move your files directly into the Obsidian vault folder.

## Import Markdown files with Importer

Use the official [[Importer|Importer plugin]] when you want to select folders inside an import, import a `.zip` archive, standardize formatting, move inline tags to [[Properties|properties]], or apply a template.

1. Open **[[Settings]] → Community plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
2. Enable the Importer plugin.
3. Open **Importer** using the [[Command palette]] or ribbon icon.
4. Under **File format**, select **Markdown (.md, .zip)**.
5. Choose individual Markdown files, folders, or zip archives.
6. Review the detected folders, output options, generated template, and preview examples.
7. Select **Import** and wait for the import to finish.

See [[Importer templates]] to customize the imported note name, properties, and content.

## Templates

Use [[Importer templates|Importer templates]] to fully configure how your data is imported. 

![[Importer templates#Variables]]
