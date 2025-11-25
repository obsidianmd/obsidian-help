---
permalink: import/csv
---
Obsidian lets you import data from CSV files using the official [[Importer|Importer plugin]]. This is useful if you have data tabular stored in apps such as Excel, Google Sheets, Numbers, Notion, or Airtable.

CSV import generates Markdown files for each row and a [[Introduction to Bases|Base]] file that displays all the imported files as a table.

If you are importing notes from a specific app, you may want to first review the list of apps supported by [[Importer|Importer plugin]] to check if there is a specific converter that will better preserve the data you are migrating.

## Create notes from CSV data in Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **Settings**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** choose **CSV (.csv).**
6. Select the location of your CSV file.
7. Click **Import** to configure how data in your CSV file will be converted to notes with [[Properties]].
8. Click **Continue** and wait until import is complete.
9. You're done!

## Configure how CSV fields are imported

In the second step of the CSV import, you can choose how data is imported using a template.

Each column in your CSV file is attributed a variable called `{{column_name}}` which represents the name of the header in your file. You can use this variable to define the note's title, location, content, and [[Properties|properties]].