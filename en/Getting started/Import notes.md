---
alias: How to/Import data
---

If you're moving to Obsidian from a different note-taking app, you may want to import your existing notes into your Obsidian vault.

The easiest way to import your notes is to export them as Markdown-formatted text files and then add them to your Obsidian vault. 

> [!note] Markdown
> Markdown is a markup language for formatting text used by many modern note-taking apps today. To learn more, refer to [[Basic formatting syntax]].

Some note-taking apps, [[Obsidian Flavored Markdown|including Obsidian]], extend the Markdown syntax with their own custom syntax. Obsidian can help you convert some of the commonly-used Markdown variants, using [[Format converter]].

## Import notes from Roam Research

1. In Roam Research, select the three dots in the upper-right corner, and then select **Export All**.
   ![[Pasted image.png]]
2. In **Export Format**, select "Markdown", and then select **Export All** to download an archive with your notes.
   ![[Pasted image 1.png]]
3. Unzip the archive into a folder.
4. Open Obsidian. If you already have a vault open, run the **Open another vault** command from the [[Command palette]].
5. In the [[Vault switcher]], select **Open folder as vault**, and then select the folder where you unzipped the notes.

You've created a vault with the exported notes from Roam Research. Unfortunately, Roam Research formats notes differently than Obsidian. To convert the notes to the Obsidian format, use the [[Format converter]].

1. Open **Settings**.
2. Under **Core plugins**, enable **Format converter** and close the Settings window.
3. In the ribbon, on the left side of the app window, select **Open format convert** (ones and zeros icon).
4. Enable the Roam Research formats you want to convert.
5. Select **Start conversion**. This will convert all the notes in your entire vault.

## Import notes from Bear

To convert `::highlight::` (Bear) to `==highlight==` (Obsidian), use the [[Format converter]].

1. Open **Settings**.
2. Under **Core plugins**, enable **Format converter** and close the Settings window.
3. In the ribbon, on the left side of the app window, select **Open format convert** (ones and zeros icon).
4. Enable **Bear highlight fixer**.
5. Select **Start conversion**. This will convert all the notes in your entire vault.

## Import Zettelkasten notes

If you've been using the Zettelkasten method to name and link your notes, you may need to convert links from `[[UID]]` to `[[UID My note title]]`.

For example, if you have a note with the name `202301011230 My note title` and link to it from another note using only the UID, `[[202301011230]]`. Since Obsidian uses the full name of the note to resolve internal links, links like these will break.

To update all `[[UID]]` links in your vault to use the full name of the note instead, use the [[Format converter]].

1. Open **Settings**.
2. Under **Core plugins**, enable **Format converter** and close the Settings window.
3. In the ribbon, on the left side of the app window, select **Open format convert** (ones and zeros icon).
4. Enable **Zettelkasten link fixer**.
5. Select **Start conversion**. This will convert all the notes in your entire vault.

> [!tip] Zettelkasten link beautifier
> [[Format converter]] can also beautify your links by removing the UID from the display name. For example, `[[UID]]` converts to `[[UID My note title|My note title]]`.
>
> To beautify your Zettelkasten links, enable **Zettelkasten link beautifier** in the format converter window.

You can also use the [[Unique note creator]] to create Zettelkasten notes in Obsidian.

## Import notes from other apps

Our amazing community have written guides on how to import notes from many different note-taking apps and tools.

- [Import from Notion](https://forum.obsidian.md/t/import-from-notion/636)
- [Import from Notion (automated)](https://forum.obsidian.md/t/notion-2-obsidian-migration-instructions/2728)
- [Import from Evernote](https://forum.obsidian.md/t/import-from-evernote/108)
- [Import from OneNote](https://forum.obsidian.md/t/new-tool-for-migration-from-onenote-updated-and-improved-version/3055)
- [Import from Apple Notes](https://forum.obsidian.md/t/migrate-from-apple-notes-to-obsidian/732)
- [Import from Bear](https://forum.obsidian.md/t/import-from-bear-app/2284)
- [Import from Zkn3](https://forum.obsidian.md/t/migrating-from-zkn3-to-obsidian-without-losing-your-tags-and-internal-links-documentation/7457)
- [Import from TiddlyWiki 5](https://forum.obsidian.md/t/migrate-from-tiddlywiki-5-to-obsidian/731)

> [!tip]
> The makers of [nvUltra](https://nvultra.com/) list different ways to import your notes into nvUltra. In many cases, these steps will be the same for Obsidian, or at least a good place to start.