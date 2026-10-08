---
aliases:
  - Advanced topics/Deleting files
  - How to/Rename notes
description:
mobile: false
permalink: manage-notes
publish: true
---
You can manage files and folders in several ways, using [[Hotkeys]], [[Command palette|commands]], or [[File explorer]].

## Create a new note

To create a new file:

1. Press `Ctrl+N` (or `Cmd+N` on macOS).
2. Enter the name of the note and then press `Enter` to start editing the note.

You can also create notes using [[File explorer#Create a new note|File explorer]], or by selecting **Create new note** from the [[Command palette]].

> [!hint] System character limitation
> Obsidian will respect the filename limitations of the operating system you create the note on. If you plan to [[Sync your notes across devices|sync your notes across devices]], make sure your filenames are [safe for other operating systems](https://stackoverflow.com/q/1976007).
^blockquote-system-limitation

## Open files outside your vault

On desktop, you can open and edit individual Markdown files outside your vault. Files open in your current window and stay in their original location.

> [!note] Requires Obsidian 1.14 and the latest installer
> [[Update Obsidian#Installer updates|Update your installer]] by downloading Obsidian from [obsidian.md/download](https://obsidian.md/download) and reinstalling the application.

To open a Markdown file:

1. Open the [[Command palette]].
2. Select **Open file from outside the vault...**.
3. Choose a Markdown file on your computer.

You can also use your operating system's **Open with** menu and select **Obsidian**. To open Markdown files in Obsidian by default, set it as the default application for `.md` files.

Image embeds and links to other local files resolve relative to the Markdown file's folder. Use [[Outline]] to navigate headings and [[Outgoing links]] to browse linked files.

### Preview files with Quick Look

On macOS, select a Markdown file in Finder and press `Space` to preview it with **Quick Look**. Quick Look previews work even when Obsidian is closed.

## Rename a note

To rename an active note:

1. Select the name of the note at the top of the editor (or press `F2`).
2. Enter the new name and then press `Enter`.

When you rename a file, Obsidian automatically updates all the links to that file.

You can rename a note or folder without opening it, by using [[File explorer#Rename a file or folder|File explorer]]

## Delete a note

To delete a note, select **More options → Delete file** at the upper right of an active note.

Or, select **Delete current file** from the [[Command palette]].

You can also delete a note or folder, using the [[File explorer#Delete a file or folder|File explorer]].

> [!note] What happens to files after I delete them?
> To change what happens to deleted files, select one of the following options under **[[Settings]] → Files & Links**:
>
> - **System trash**: By default, deleted files end up in the system trash for your operating system. To restore a file, use your preferred file manager.
> - **Obsidian trash**: You can send deleted files to a `.trash` folder in your vault.
> - **Permanently delete**: Files are immediately deleted without any means to restore them.
