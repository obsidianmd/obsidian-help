---
permalink: import/zettelkasten
---
If you've been using the Zettelkasten method to name and link your notes, you may need to convert links from `[[UID]]` to `[[UID My note title]]`.

For example, if you have a note with the name `202301011230 My note title` and link to it from another note using only the UID, `[[202301011230]]`. Since Obsidian uses the full name of the note to resolve internal links, links like these will break.

To update all `[[UID]]` links in your vault to use the full name of the note instead, use the [[Format converter]].

1. Open **Settings**.
2. Under **Core plugins**, enable **Format converter** and close the Settings window.
3. In the ribbon, on the left side of the app window, select **Open format convert** ( ![[lucide-binary.svg#icon]] ).
4. Enable **Zettelkasten link fixer**.
5. Select **Start conversion**. This will convert all the notes in your entire vault.

> [!tip] Zettelkasten link beautifier
> [[Format converter]] can also beautify your links by removing the UID from the display name. For example, `[[UID]]` converts to `[[UID My note title|My note title]]`.
>
> To beautify your Zettelkasten links, enable **Zettelkasten link beautifier** in the format converter window.

You can also use the [[Unique note creator]] to create Zettelkasten notes in Obsidian.