---
permalink: import/csv
cssclasses:
  - soft-embed
---
Obsidian lets you import data from CSV files using the official [[Importer|Importer plugin]]. This is useful if you have data tabular stored in apps such as Excel, Google Sheets, Numbers, Notion, or Airtable.

CSV import generates Markdown files for each row and a [[Introduction to Bases|Base]] file that displays all the imported files as a table.

If you are importing notes from a specific app, you may want to first review the list of apps supported by [[Importer|Importer plugin]] to check if there is a specific converter that will better preserve the data you are migrating.

## Create notes from CSV data in Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Settings]]**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** choose **CSV (.csv).**
6. Select the location of your CSV file.
7. Select **Import** to configure how data in your CSV file will be converted to notes with [[Properties]].
8. Select **Continue** to review the generated template and preview examples from your rows.
9. Select **Import** and wait for the import to finish.

## Configure how CSV fields are imported

In the field configuration step, you can choose how data is imported. Importer generates a template from the CSV headers, uses the first column for the initial note name, and creates a property for each column.

## Templates

Use [[Importer templates|Importer templates]] to fully configure how your data is imported. 

Every CSV column is available using its header. If a column has no header, Importer uses its generated column name.

Use bracket notation so spaces and punctuation are handled safely:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Importer templates#Variables]]

