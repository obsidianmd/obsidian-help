---
permalink: import/apple-notes
---
Obsidian allows you to easily migrate your notes from Apple Notes using the [[Importer|Importer plugin]]. This will convert your Apple Notes data to durable Markdown files, that you can use with Obsidian and many other apps.

Currently, Importer only supports migrating from Apple Notes on macOS. It is not available on iOS yet.

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

## Supported content

The Obsidian Importer plugin supports virtually all Apple Notes content types. This includes tables, images, drawings, scans, PDFs, and links introduced in iOS 17.

> [!Warning]
> Password-protected notes are encrypted by Apple, so must be unlocked before importing them. Any locked notes will be skipped.

### Scans

Apple stores scans in a variety of formats depending on how they were created. To preseve the original data, this means they'll be exported differently.

* Scans created or viewed on older versions of macOS or iOS will be exported as a series of uncropped images.
* Scans created or viewed on newer versions of macOS or iOS will usually be exported as cropped images.
* Scans that have been edited using the features introduced in iOS 17 will usually be exported as PDFs.

## Alternate export methods

Apple does not provide a native option to export your notes. However several third-party tools exist such as [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) by Chintan Ghate. Please be aware that most tools are limited in what data they will export from Apple Notes and might not provide the most compatible output data. These tools work best if your Apple Notes are primarily text-only, and have few attachments or special features such as drawings and scans.

Depending on the tool you used, the export may be in Markdown format or HTML format. Follow instructions based on the file format you exported to: 

- [[Import HTML files]]
- [[Import Markdown files]]
