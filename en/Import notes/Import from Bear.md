---
permalink: import/bear
---
Obsidian allows you to easily migrate your notes from Bear using the [[Importer|Importer plugin]]. This will convert your Bear data to durable Markdown files, that you can use with Obsidian and many other apps.

## Export your data from Bear

Obsidian uses Bear's backup format `.bear2bk` files. You can find Bear's instructions for creating the backup [on Bear's website](https://bear.app/faq/backup-restore/). 

1. Open Bear.
2. Create a backup
	1. On macOS: **File** → **Backup notes**.
	2. On iOS: click the more menu (⋮) at the top of the sidebar and choose **Backup all notes**.
3. Choose a location for your backup file.
4. Click **Export notes**.
5. You should now have one `.bear2bk` file that contains all your notes.

## Import your Bear data into Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **Settings**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** choose **Bear (.bear2bk)**.
6. Select the location of your Bear backup file.
7. Click **Import** and wait until import is complete.
8. You're done!
