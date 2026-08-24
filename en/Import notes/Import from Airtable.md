---
permalink: import/airtable
cssclasses:
  - soft-embed
---
Obsidian lets you migrate your data from Airtable using the [[Importer|Importer plugin]]. This converts your Airtable bases to durable Markdown files that you can use offline with Obsidian and many other apps.

Each table becomes a folder of notes with one note per record, plus a [[Introduction to Bases|Base]] file that recreates the table and its views. Because it uses the Airtable API, importing requires a personal access token and an internet connection.

## Create an Airtable personal access token

To access your Airtable data via the API you need a personal access token. This step takes about two minutes to complete.

The token is a long string of numbers and letters typically starting with `pat...` that will allow you to download your data from Airtable.

1. Sign into Airtable and go to the [Personal access tokens](https://airtable.com/create/tokens) page in your account settings.
2. Choose **Create new token**.
3. Give your token a name, e.g. "Obsidian". Any name can be used.
4. Under **Scopes**, add `data.records:read` and `schema.bases:read`.
5. Under **Access**, add the bases you want to import, or choose all bases in a workspace.
6. Choose **Create token**, then **Copy** the token.
7. Save the token to a safe place like your password manager.

Airtable only shows the token once. If you lose it, create a new one.

## Import your Airtable data

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Settings]]**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** select **Airtable**.
6. Under **Airtable Personal Access Token**, click **Link...** to add a new secret. For the **ID**, give it a name like `airtable`, and for the **Secret** paste your personal access token.
7. Click **Load** to browse your bases, then select the tables you want to import.
8. Review and edit the import options.
9. Select **Import** to configure how your fields will be converted to notes with [[Properties|properties]].
10. Select **Continue** to review the generated template and preview examples from your records.
11. Select **Import** and wait for the import to finish.

## Import options

- **Convert formulas** — choose whether formula, lookup, rollup, and count fields are rewritten as [[Formulas|Bases formulas]], falling back to the value Airtable computed when there is no equivalent, or imported as static values only.
- **Download attachments** — save attachment files into your vault, using your attachment folder and link format settings. When disabled, or when a download fails, the note links to the file's URL on Airtable instead.
- **View property name** — the property that records which Airtable views a record belongs to. Each view in the generated Base filters on this property. Defaults to `Views`.
- **Save Airtable record ID** — adds an `airtable-id` property so future imports can recognize records after their notes are moved or renamed.

## Configure how Airtable fields are imported

In the field configuration step, you can choose how each field is imported.

By default, every Airtable field becomes a property. You can rename or remove properties and change their values before continuing to the template preview.

Each table's primary field supplies the default note name. You can edit the note-name template from the preview step. Records are always placed in a folder named after their table.

See [[Importer templates]] to customize the generated Markdown.

## What gets imported

For a base named `Projects` with a `Tasks` table, the importer creates:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- One note per record, with the primary field as the note title, and the record's other fields as [[Properties|properties]].
- A `.base` file per table, with each Airtable view mapped to a [[Views|Bases view]]:
	- **Grid** becomes a [[Table view]].
	- **Gallery** becomes [[Cards view]].
	- **List** becomes a [[List view]].
	- All other view types are converted to table view.
- Airtable field types are mapped to Obsidian property types, without overriding types you have already set.
- Linked records become links to the corresponding notes.
- Attachments are downloaded into your vault using your vault settings.


## Limitations

Due to Airtable API rate limits, importing large bases may take considerable time. Please be patient.

Due to limitations in the Airtable API some data is not available or cannot be converted:

- Rollup values are not imported. The API does not expose the aggregation used for a rollup's computed value, so only the property name is written, along with a Bases formula where the field's schema exposes an expression.
- Formulas using functions that Obsidian has no equivalent for, such as `SWITCH`, `FIND`, `REGEX_EXTRACT`, and `SQRT`, fall back to the static value from Airtable.
- Only grid, gallery, and list views are imported. Other view types, such as calendar, kanban, timeline, and Gantt, are ignored.
- Links to records in tables you did not select become the record's plain title rather than a link.
- Interface designs, automations, comments, and revision history are not imported.

## Troubleshooting

If you encounter issues with the conversion, [submit a bug report](https://github.com/obsidianmd/obsidian-importer/issues) so we can improve it.
