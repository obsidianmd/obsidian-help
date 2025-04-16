---
aliases:
  - Advanced topics/How Obsidian stores data
description: This page explains how Obsidian stores its data on your device.
mobile: true
permalink: data-storage
publish: true
---

Obsidian stores your notes as [[Basic formatting syntax|Markdown-formatted]] plain text files in a _vault_. A vault is a folder on your local file system, including any subfolders.

Because notes are plain text files, you can use other text editors and file managers to edit and manage notes. Obsidian automatically refreshes your vault to keep up with any external changes.

You can create a vault anywhere your operating system allows. Obsidian syncs with [[Introduction to Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git, and many other third-party services.

You can open multiple folders as individual vaults, for example to separate notes for work and school.

> [!warning] Vaults within vaults
> Because [[Internal links]] are local to a vault, we recommend that you don't create vaults within vaults. Links may not be updated correctly.

## Vault settings

Obsidian creates an `.obsidian` [[configuration folder]] in the root folder of the vault, which contains preferences specific to that vault, such as [[hotkeys]], [[themes]], and [[community plugins]].

By default, most operating systems hide folders that start with a period (`.`), so you may need to update the settings for your file manager to see it.

- **macOS**: In Finder, press `Cmd+Shift+.` (period) to show hidden files.
- **Windows**: [Show hidden files](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** In most File Explorers, press `Ctrl + h` to show hidden files.

> [!tip] Adding `.obsidian` to Git
> The `.obsidian/workspace.json` and `.obsidian/workspaces.json` files store the current workspace layout and update whenever you open a new file. If you use [Git](https://git-scm.com) to manage your vault, you might want to add these files to `.gitignore`.

## Global settings

Obsidian stores global settings in a system folder. The location of the system folder depends on the operating system you're using.

- **macOS**: `/Users/yourusername/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` or `~/.config/obsidian/`

> [!warning] Don't create a vault in the system folder. This may lead to corrupted data or data loss.

## IndexedDB

IndexedDB is a low-level, client-side database that Obsidian uses for backend storage. It helps maintain the state of [[Introduction to Obsidian Sync|Obsidian Sync]] connections, and preserves the [[#Metadata cache]] when the application is closed. 

> [!warning] If Apple's [Lockdown Mode](<https://support.apple.com/en-us/105120>) is enabled and Obsidian is not excluded, these database files will not save, requiring reindexing each time the app starts.

### Metadata cache

In order to provide a fast experience while using the app, Obsidian maintains a local record of metadata about the files in your vault called the **metadata cache**. This metadata powers many things across the app, from the Graph view to the Outline view.

Obsidian keeps this cache in sync with the files in your vault, but it is possible for the data to get out of sync with the underlying files. In the event that this happens to your vault, you can rebuild your metadata cache from the app settings in the *Files and links* section.

