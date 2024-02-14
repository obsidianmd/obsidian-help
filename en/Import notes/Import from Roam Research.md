---
permalink: import/roam
---
Obsidian allows you to easily migrate your notes from Roam Research  using the [[Importer|Importer plugin]]. This will convert your Roam data to durable Markdown files, that you can use with Obsidian and many other apps.

## Export your data from Roam Research

1. In Roam Research, click on **More actions** (`•••` icon) in the upper-right corner, and then select **Export All**.
   
   ![[Roam-exporting.png#interface]]
2. In **Export Format**, select "JSON", and then select **Export All** to download an archive with your notes.

## Import your Roam Research data into Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **Settings**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** choose **Roam Research (.json).**
6. Select the location of your `.json` file.
7. Under **Output folder**, choose where your files should import.
8. If you want to also import attachments, toggle **Download all attachments**.
9. Click **Import** and wait until import is complete.
10. You're done!

![[Roam-Importer-importing.png]]

