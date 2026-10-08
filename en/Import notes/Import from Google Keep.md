---
permalink: import/google-keep
cssclasses:
  - soft-embed
---
Obsidian lets you easily migrate your notes from Google Keep using the [[Importer|Importer plugin]]. This converts your Google Keep data to durable Markdown files you can use with Obsidian and many other apps.

## Export your data from Google Keep

1. Go to [Google Takeout](https://takeout.google.com/settings/takeout) and log into your Google account.
2. Click **Deselect all** in the top right corner.
3. Scroll down and select **Keep** from the list. 
4. Scroll down to the bottom of the page and click **Next step**.
5. On the next screen, click the **Create export** button.
6. Download the `.zip` file once it is available.

## Import your Google Keep data into Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Settings]]**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format** choose **Google Keep (.zip).**
6. Select the location of your `.zip` file.
7. Select **Import** to review the generated template and preview examples from your notes.
8. Select **Import** again and wait for the import to finish.

## Limitations

- All checklists will import as top-level items because Google Keep doesn't export indentation information.
- Reminders and user assignments on notes will not be imported because these features are not supported by Obsidian.


## Templates

Use [[Importer templates|Importer templates]] to fully configure how your Google Keep data is imported. 

![[Importer templates#Variables]]

Additionally Google Keep provides variables for the original text, lists, labels, attachments, colors, sharing data, tasks, annotations, and note state.

| Variable          | Description                                       |
| ----------------- | ------------------------------------------------- |
| `{{isArchived}}`  | Whether the note is archived.                     |
| `{{isPinned}}`    | Whether the note is pinned.                       |
| `{{isTrashed}}`   | Whether the note is in the trash.                 |
| `{{color}}`       | Google Keep color name.                           |
| `{{labels}}`      | Array of label records.                           |
| `{{sharees}}`     | Array of people with whom the note was shared.    |
| `{{annotations}}` | Array of link annotation records.                 |

The original Google Keep title is available as `{{source.title}}`. The shared `{{title}}` variable contains the imported note title.
