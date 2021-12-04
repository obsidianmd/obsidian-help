# Select files and settings to sync

Any files or settings that have been synced to your [[Local and remote vaults|remote vault]] count towards your [[Limitations#How large can each remote vault be|storage space]]. By default, [[Introduction to Obsidian Sync|Obsidian Sync]] ignores larger files such as audio, video, and PDFs.

**Notes:**

- Synced files remain in your remote vault even if you exclude them later on. If possible, configure the files and settings you want to sync before you start syncing your vault.
- Settings are only synced during start-up. If you change what settings to sync, you need to restart Obsidian on your other devices for the new changes to take effect.

## Select settings to sync

1. Open **Settings** -> **Sync**.
2. Under **Vault configuration sync**, enable the settings you want to sync.

## Select file types to sync

1. Open **Settings** -> **Sync**.
2. Under **Selective sync**, enable the file types you want to sync.

## Exclude folder from being synced

By default, Obsidian syncs all files and folders in your vault. If you don't want Obsidian to sync a certain folder, you can exclude it.

1. Open **Settings** -> **Sync**.
2. Under **Selective sync**, next to **Excluded folders**, click **Manage**.
3. Click the checkbox to the left of folder you want to exclude.
4. Click **Done**.

## Create a settings profile

Obsidian Sync can sync multiple settings folders to the same remote vault. You can use this to create different profiles, for example one for mobile devices and another for your laptop.

To set your settings folder:

1. Open **Settings** -> **About**.
2. In **Override config folder**, type the name of your profile, starting with a period (`.`). For example, `.obsidian-mobile`.
