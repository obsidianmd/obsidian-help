---
permalink: import/tomboy
---
Obsidian lets you migrate notes from Tomboy and Gnote using the official [[Importer|Importer plugin]]. Importer reads the apps' `.note` files directly and converts their XML content into Markdown.

## Locate your note files

Tomboy and Gnote normally store notes in these folders:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` or `~/.local/share/gnote`

The exact location may differ if you moved the data folder or use a different version of the app.

## Import your Tomboy or Gnote notes

1. Open **[[Settings]] → Community plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
2. Enable the Importer plugin.
3. Open **Importer** using the [[Command palette]] or ribbon icon.
4. Under **File format**, select **Tomboy/Gnote (.note)**.
5. Choose individual `.note` files or the folder containing them.
6. Review the import options, generated template, and preview examples.
7. Select **Import** and wait for the import to finish.

## Templates

Use [[Importer templates|Importer templates]] to fully configure how your data is imported. 

![[Importer templates#Variables]]
