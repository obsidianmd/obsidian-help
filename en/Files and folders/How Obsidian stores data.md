---
aliases: Advanced topics/How Obsidian stores data
---
Obsidian stores your notes as [[Basic formatting syntax|Markdown-formatted]] plain text files in a _vault_. A vault is a folder on your local file system, including any subfolders.

Because notes are plain text files, you can use other text editors and file managers to edit and manage notes. Obsidian automatically refreshes your vault to keep up with any external changes.

You can create a vault anywhere your operating system allows. Obsidian syncs with [[Introduction to Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git, and many other third-party services.

You can open multiple folders as individual vaults, for example to separate notes for work and personal use.

> [!warning] Vaults within vaults
> Because [[Internal links]] are local to a vault, we recommend that you don't create vaults within vaults. Links may not be updated correctly.

## Vault settings

Obsidian creates an `.obsidian` [[configuration folder]] in the root folder of the vault, which contains preferences specific to that vault, such as [[hotkeys]], [[themes]], and [[community plugins]].

By default, most operating systems hide folders that start with a period (`.`), so you may need to update the settings for your file manager to see it.

- **macOS**: In Finder, press `Cmd+Shift+.` (period) to show hidden files.
- **Windows**: [Show hidden files](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)

> [!tip] Adding `.obsidian` to Git
> The `.obsidian/workspace` file stores the current workspace layout, and changes any time you open a new file. If you use [Git](https://git-scm.com) to version control your vault, you may want to add the `.obsidian/workspace` file to `.gitignore`.

## Global settings

Obsidian stores global settings in a system folder. The location of the system folder depends on the operating system you're using.

- **macOS**: `/Users/yourusername/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/Obsidian/` or `~/.config/Obsidian/`

> [!warning]
> Don't create a vault in the system folder. This may lead to corrupted data or data loss.
