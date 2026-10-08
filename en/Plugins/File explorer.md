---
aliases:
description: File explorer is a core plugin that lets you manage files and folders inside your vault.
mobile: true
permalink: plugins/file-explorer
publish: true
---
File explorer is a [[Core plugins|core plugin]] that lets you manage files and folders inside your vault. You can browse notes and other [[Accepted file formats]] in your vault and perform many common file operations:

- Create, delete, and rename files and folders.
- Move files and folders with drag and drop.
- Use the [[#Use the context menu|context menu]] to access all available operations.

> [!tip]- Drag and drop files
> You can drag a file from the File explorer into your note to create a link to it, or drag a file into a folder in the File explorer to copy it.

## Create a new note

To create a new note in the default location for new notes:

1. Select **New note** ![[lucide-pen-line.svg#icon]] at the top of the File explorer.
2. Type the name of the note, and then press `Enter`.

> [!tip]- Change default location
> You can change the default location for new notes under **[[Settings]] → [[Settings#Files and links|Files and links]] → [[Settings#Default location for new notes|Default location for new notes]]**.

To create a new note in a specific folder:

1. Right-click the folder and then select **New note**.
2. Type the name of the note, and then press `Enter`.

## Create a new folder

To create a new folder in the root of your vault:

1. Select **New folder** ![[lucide-folder-plus.svg#icon]] at the top of the File explorer.
2. Type the name of the folder, and then press `Enter`.

To create a subfolder:

1. Right-click the folder you want to create the subfolder in, and then select **New folder**.
2. Type the name of the folder, and then press `Enter`.

## Change sort order

To change the sort order of your files:

1.  Select **Change sort order** ![[lucide-arrow-up-narrow-wide.svg#icon]] at the top of the File explorer.
2. Choose how you want to sort your files. You can sort in ascending or descending order by file name, modified time, or created time.

## Auto-reveal active file

When you open a note, File explorer can automatically scroll to and highlight that note in the folder tree. This helps you keep track of where your active note is located within your vault.

To toggle auto-reveal:

- Select **Auto-reveal active file** ![[lucide-gallery-vertical.svg#icon]] at the top of the File explorer.

When enabled, the File explorer will automatically follow and reveal the active note.

## Expand or collapse all folders

You can expand or collapse all folders in the File explorer at once.

To expand all folders:

- Select **Expand all** ![[lucide-chevrons-up-down.svg#icon]] at the top of the File explorer.

To collapse all folders:

- Select **Collapse all** ![[lucide-chevrons-down-up.svg#icon]] at the top of the File explorer.

## Delete a file or folder

1. Right-click the file you want to delete, and then select **Delete**.
2. If prompted to confirm that you want to delete the file, select **Delete**.

For more information, refer to [[Manage notes#Delete a note|Delete a note]].

## Rename a file or folder

1. Right-click the file you want to rename, and then select **Rename**.
2. Type the new name, and then press `Enter`.

For more information, refer to [[Manage notes#Rename a note|Rename a note]].

## Move a file or folder

To move a file or folder, you can use drag-and-drop or the context menu.

**Drag and drop:**

- Drag a file or folder to the folder you want to move it to.
- With `Alt-Click` (Windows/Linux) or `Opt-Click` (macOS) you can select multiple individual files and drag them to another folder. If they're all in a row, you can use `Shift-Click` for it.

**Context menu:**

1. Right-click a file, and then select **Move file to...**.
2. Search for the name of the folder you want to move the file to, and then select it from the list.

## Use the context menu

The context menu lists the actions available for a file or folder. Many of the file items also appear in the [[More options menu]].

### Desktop

Right-click a file or folder in the File explorer.

**Files**

- **Open in new tab** and **Open to the right** open the file in a new tab or in a pane on the right.
- **Open in new window** opens the file in its own window. See [[Pop-out windows]].
- **Duplicate** makes a copy of the file.
- **Move file to...** moves the file to another folder. See [[#Move a file or folder]].
- **Bookmark...** adds the file to your bookmarks. It needs the Bookmarks plugin. See [[Bookmarks#Add a bookmark]].
- **Merge entire file with...** combines the note with another one. It needs the Note composer plugin. See [[Note composer#Merge notes]].
- **Publish current file** publishes the note to your site. It needs Obsidian Publish. See [[Introduction to Obsidian Publish|Publish]].
- **Copy path** copies the file's location as an Obsidian URL, from the vault folder, or from the system root.
- **Open version history** shows earlier versions of the file. It needs an active Obsidian Sync subscription. See [[Version history]].
- **Open in default app** opens the file in the app your computer uses for that file type.
- **Reveal in Filesystem** shows the file in your file manager. On macOS, the item reads **Reveal in Finder**. On Windows and Linux, it reads **Show in system explorer**.
- **Rename...** changes the file name. See [[#Rename a file or folder]].
- **Delete** deletes the file. See [[#Delete a file or folder]].

**Folders**

- **New note** and **New folder** create a note or a folder inside the folder. See [[#Create a new note]] and [[#Create a new folder]].
- **New canvas** creates a canvas in the folder. See [[Canvas]].
- **New base** creates a base in the folder. See [[Introduction to Bases]].
- **Duplicate** makes a copy of the folder.
- **Move folder to...** moves the folder into another folder.
- **Search in folder** searches only the files in the folder. See [[Search]].
- **Bookmark...** adds the folder to your bookmarks.
- **Copy path** copies the folder's location from the vault folder or from the system root.
- **Reveal in Filesystem** shows the folder in your file manager, and reads the same as it does for files.
- **Rename...** and **Delete** change the folder name or delete the folder.

### Mobile

Press and hold a folder in the File explorer. The menu has the same items as the desktop folder menu, except **Bookmark...** and **Reveal in Filesystem**.
