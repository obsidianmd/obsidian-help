Any files or settings that have been synced to your [[Local and remote vaults|remote vault]] count towards your [[Limitations#How large can each remote vault be|storage space]]. By default, [[مقدمه ای بر ابسیدین سینک|Obsidian Sync]] ignores larger files such as audio, video, and PDFs.

**Notes:**

- Synced files remain in your remote vault even if you exclude them later on. If possible, configure the files and settings you want to sync before you start syncing your vault.
- Obsidian only applies vault settings during start-up. If you change a setting on one device, you need to restart Obsidian on your other devices for the new changes to take effect. For example, if you change the path of your daily notes in the [[Daily Notes]] plugin, you need to restart Obsidian on your other devices to use the new path.
- ==Sync doesn't sync Sync's settings.== This allows users to configure Sync differently on each device according to their needs. This means, however, that you must configure custom Sync settings on each device.

## Sync vault

1. On your primary device, open **Settings** → **Sync**.
2. Under **Vault configuration sync**, enable the settings you want to sync.
3. Wait for the settings to sync to your remote vault.
4. On your secondary devices, open **Settings** → **Sync**.
5. Under **Vault configuration sync**, enable the settings you want to sync.
6. Wait for the changes to download from your remote vault.
7. Reload the app so that your synced settings take effect.

## Select file types to sync

1. Open **Settings → Sync**.
2. Under **Selective sync**, enable the file types you want to sync.

## Exclude folder from being synced

By default, Obsidian syncs all files and folders in your vault. If you don't want Obsidian to sync a certain folder, you can exclude it.

1. Open **Settings → Sync**.
2. Under **Selective sync**, next to **Excluded folders**, click **Manage**.
3. Click the checkbox to the left of folder you want to exclude.
4. Click **Done**.

## Create a settings profile

Obsidian Sync can sync multiple settings folders to the same remote vault. You can use this to create different profiles, for example one for mobile devices and another for your laptop.

To set your settings folder:

1. Open **Settings → About**.
2. In **Override config folder**, type the name of your profile, starting with a period (`.`). For example, `.obsidian-mobile`.
