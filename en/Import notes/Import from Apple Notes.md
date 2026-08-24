---
permalink: import/apple-notes
---
Obsidian lets you easily migrate your notes from Apple Notes using the [[Importer|Importer plugin]]. This converts your Apple Notes data to durable Markdown files you can use with Obsidian and many other apps.

Currently, Importer only supports migrating from Apple Notes on macOS. It is not available on iOS yet.

## Import Apple Notes data into Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Settings]]**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** choose **Apple Notes**.
6. Select **Import**.
7. Select **Open** on the popup titled `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Review the generated template and preview examples from your notes.
9. Select **Import** and wait for the import to finish.

## Customize imported notes

Before the import begins, Importer shows a preview generated from your Apple Notes selection. You can edit the generated template, properties, and note name, or choose a Markdown template from your vault. See [[Importer templates]].

## Supported content

The Obsidian Importer plugin supports virtually all Apple Notes content types. This includes tables, images, drawings, scans, PDFs, and links introduced in iOS 17.

> [!Warning]
> Password-protected notes are encrypted by Apple, so must be unlocked before importing them. Any locked notes will be skipped.

### Scans

Apple stores scans in a variety of formats depending on how they were created. To preserve the original data, this means they'll be exported differently.

* Scans created or viewed on older versions of macOS or iOS will be exported as a series of uncropped images.
* Scans created or viewed on newer versions of macOS or iOS will usually be exported as cropped images.
* Scans that have been edited using the features introduced in iOS 17 will usually be exported as PDFs.

## Templates

Use [[Importer templates|Importer templates]] to fully configure how your Apple Notes data is imported. 

![[Importer templates#Variables]]

Additionally Apple Notes provides the following variable.

| Variable       | Description                 |
| -------------- | --------------------------- |
| `{{isPinned}}` | Whether the note is pinned. |
