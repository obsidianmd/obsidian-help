Daily notes opens a note based on today's date, or creates it if it doesn't exist. Use daily notes to create journals, to-do lists, or daily logs for things you discovered during the day.

To open today's daily note, either:

- Click **Open today's daily note** (calendar with checkmark icon) in the [[Ribbon|ribbon]].
- Run **Open today's daily note** from the [[Command palette]].
- [[Hotkeys#Setting hotkeys|Use a hotkey]] for the **Open today's daily note** command.

By default, Obsidian creates a new empty note named after today's date in the YYYY-MM-DD format.

> [!tip] If you prefer to have your daily notes in a separate folder, you can set the <u>New file location</u> under plugin options to change where Obsidian creates new daily notes.

> [!example]- Automatic subfolders
> You can automatically organize your daily notes into folders using the **Date format** feature.
> 
> For instance, if you set the date format as `YYYY/MMMM/YYYY-MMM-DD`, your notes will be created as `2023/January/2023-Jan-01`. 
> 
> You can explore more formatting options on the [momentJS](https://momentjs.com/docs/#/displaying/format/) documentation site.

## Create a daily note from template

If your daily notes have the same structure, you can use a [[Templates|template]] to add pre-defined content to your daily notes when you create them.

1. Create a new note named "Daily template" with the following text (or whatever makes sense to you!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Tasks

   - [ ]
   ```

2. Open **Settings**.
3. In the sidebar, click **Daily notes** under **Plugin options**.
4. In the text box next to **Template file location**, select the "Daily template" note.

Obsidian uses the template the next time you create a new daily note.

## Daily notes and properties

When the Daily notes plugin is activated and a date property is present within any note, Obsidian will automatically attempt to generate a link to the daily note for that specific day. For instance, if a note titled `example.md` includes a date property like `2023-01-01`, this date will transform into a clickable link in the [[Edit and preview Markdown#Live Preview|live preview]] section.

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
