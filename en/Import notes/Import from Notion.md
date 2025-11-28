---
permalink: import/notion
---
Obsidian lets you easily migrate your notes from Notion using the [[Importer|Importer plugin]]. This will convert your Notion data to durable Markdown files that you can use offline with Obsidian and many other apps.

Obsidian offers two ways to import your Notion data:

1. **API import** preserves your entire workspace including Databases and formulas which are converted to [[Introduction to Bases|Bases]], but requires a Notion integration token and an internet connection.
2. **File import** does not preserve Databases but does not require an API token or internet connection.

## API import

### Create a Notion API integration token

To access your Notion data via the API you need an integration token. This step takes about 2 minutes to complete.

The token is a long string of numbers and letters typically starting with `ntn_...` that will allow you to download your data from Notion.

1. Sign into your [Notion Integrations](https://www.notion.so/profile/integrations/) dashboard.
2. Choose **New integration**.

![[notion-integration.png#interface]]

2. Give your integration a name, e.g. "Personal". Any name can be used.
3. Choose the workspace you want to export.
4. Click **Save** and continue to **Configure integration settings**.
5. In the **Configuration** tab your API token is accessible in the **Internal Integration Secret** field. 
6. Select **Show** then **Copy**.
7. Save the token to a safe place like your password manager.

![[notion-token.png#interface]]

Next, give your integration access to the Notion pages and databases you want to import.

1. Go to the **Access** tab of the integration you just created.
2. Click **Edit access**.
3. Add the pages and databases that you want to import.

You can now convert your data using Obsidian Importer.

### Import your Notion data via API

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Settings]]**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** select **Notion (API)**
6. Under **API token**, paste your **Internal Integration Secret** from Notion.
7. Click **Load** to choose the databases and pages you want to import.
8. Review and edit the import options.
9. Select **Import** and wait until import is complete
10. You're done!

### Limitations

> [!info] API import is new
> The Notion API importer is new. Because of the complexity of Notion workspaces, some edge cases may not have been considered. If you encounter issues with the conversion, [submit a bug report](https://github.com/obsidianmd/obsidian-importer/issues) so we can improve it. 

Due to Notion API rate limits, importing large workspaces may take considerable time. Please be patient.

Due to limitations in the Notion API some data is not available or cannot converted:

- Only the primary view for each database is imported.
- [Linked data sources](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) are not imported: *"Notion's API does not currently support linked data sources. When sharing a database with your integration, make sure it contains the original data source!"*
- `People` functions: `name()` and `email()`
- `Text` functions: `style()` and `unstyle()`

Additionally, Importer will make the following changes:

- Pages without child pages or databases will be imported as `[filename].md` instead of `[filename]/[filename].md`.
- Databases are always represented as folders named `[database name]` with a `[database name].base` file inside.

## File import

File import is alternative way to import your Notion data. This method does not preserve Databases but it does not require an API token or internet connection.

### Export your data from Notion

To prepare your data for import, you will need to export your entire workspace using Notion's HTML export format. We recommend that you do not use Notion's Markdown export as it omits important data. You must have admin access to the Notion workspace to export all workspace content.

1. Go to **[[Settings]]** at the top of the Notion sidebar.
2. Under **Workspace** select **General**.
3. Find and select **Export all workspace content**.
4. Under **Export format** select **HTML**.
5. Choose **Include everything**.
6. Enable **Create folders for subpages**.
7. You will receive a `.zip` file via email or directly in the browser.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Import your Notion .zip file

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Settings]]**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** select **Notion (.zip)**
6. Choose the `.zip` file with Notion files you want to import. *It's recommended to import all your Notion at once so internal links can be reconciled correctly.*
7. _Optionally_, select a folder for the import Your Notion pages and databases will be nested inside this folder.
8. Enable **Save parent pages in subfolders** to keep the Notion structure. *Note that in Notion you can write content in Folders, this is not possible in Obsidian and these pages will be added as a subpage under the folder.*
9. Select **Import** and wait until import is complete
10. You're done!

### Troubleshooting

If you run into issues while importing from Notion:

- Make sure you use **HTML** as the export format in Notion, **not Markdown**.
- If Obsidian appears to freeze during import, disable community plugins and try again.

Run into something else? Search [the Importer repository](https://github.com/obsidianmd/obsidian-importer/issues) to see if others have experienced it.

#### Importing large workspaces

If you are importing a workspace with multiple gigabytes of data, the export from Notion may contain nested `.zip` files. In this case you may see an import error message that looks something like this:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

If you see this error, you can unzip the file from Notion, and then import the nested `Export-{id}-Part-1.zip`  files.
