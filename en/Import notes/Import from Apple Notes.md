---
permalink: import/apple-notes
---
Obsidian allows you to easily migrate your notes from Apple Notes using the [[Importer|Importer plugin]]. We recommend importing from Apple Notes on your macOS desktop rather than iOS.

## Import Apple Notes data into Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **Settings**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** choose **Apple Notes**.
6. Click **Import**.
7. Click **Open** on the popup that appears titled `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Wait until import is complete. 
9. You're done!

## Alternate export methods

Apple does not provide a native option to export your notes. However several third-party tools exist such as [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) by Chintan Ghate. Please be aware that most tools are limited in what data they will export from Apple Notes and might not provide the most compatible output data. These tools work best if your Apple Notes are primarily text-only, and have few attachments or special features such as drawings and scans.

Depending on the tool you used, the export may be in Markdown format or HTML format. Follow instructions based on the file format you exported to: 

- [[Import HTML files]]
- [[Import Markdown files]]