---
permalink: import/notion
---
Obsidian allows you to easily migrate your notes from Notion using the [[Importer|Importer plugin]]. This will convert your Notion data to durable Markdown files, that you can use with Obsidian and many other apps.

## Export your data from Notion

To prepare your data for import, you will need to export your entire workspace using Notion's HTML export format. We recommend that you do not use Notion's Markdown export as it omits important data. You must have admin access to the Notion workspace to export all workspace content.

1. Go to **Settings & members** at the top of your left-hand sidebar.
2. Select **Settings** in the sidebar of that window.
3. Scroll down and select the **Export all workspace content** button.
4. Under **Export format** select **HTML**.
5. Enable **Include subpages**
6. Enable **Create folders for subpages**
7. You will receive a `.zip` file via email or directly in the browser.

![[notion-export.png#interface]]

## Import your Notion data into Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **Settings**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** select **Notion (.zip)**
6. Choose the `.zip` file with Notion files you want to import. *It's recommended to import all your Notion at once so internal links can be reconciled correctly.*
7. _Optionally_, select a folder for the import Your Notion pages and databases will be nested inside this folder.
8. Enable **Save parent pages in subfolders** to keep the Notion structure. *Note that in Notion you can write content in Folders, this is not possible in Obsidian and these pages will be added as a subpage under the folder.*
9. Select **Import** and wait until import is complete
10. You're done!

## Troubleshooting

If you run into issues while importing from Notion:

- Make sure you use **HTML** as the export format in Notion, **not Markdown**.
- If Obsidian appears to freeze during import, disable community plugins and try again.

Run into something else? Search [the Importer repository](https://github.com/obsidianmd/obsidian-importer/issues) to see if others have experienced it.

### Importing large workspaces

If you are importing a workspace with multiple gigabytes of data, the export from Notion may contain nested `.zip` files. In this case you may see an import error message that looks something like this:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

If you see this error, you can unzip the file from Notion, and then import the nested `Export-{id}-Part-1.zip`  files.