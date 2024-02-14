Any files or settings that have been synced to your [[Local and remote vaults|remote vault]] count towards your [[Sync limitations#How large can each remote vault be|storage space]]. By default, [[Introduction to Obsidian Sync|Obsidian Sync]] ignores larger files such as audio, video, and PDFs.

**Synced files and exclusions**:
Synced files remain in your remote vault even if you exclude them later on. If possible, configure the files and settings you want to sync before you start syncing your vault.

**Sync does not sync .hidden folders:**
`.hidden` folders will not sync, with the exception of the [[configuration folder]], as these are considered folders hidden from the filesystem.

Common examples include `.vscode`, `.git`, and `.idea`.

==**Sync does not sync Sync's settings**==:
This allows users to configure Sync differently on each device according to their needs. This means, however, that you must configure custom Sync settings on each device.

> [!tip] Sync settings and application restarts
> Obsidian **only** applies vault settings during start-up. If you change a setting on one device, you **need to restart** Obsidian on your other devices for the new changes to take effect. 
> 
> For example, if you change the path of your daily notes in the [[Daily Notes]] plugin, you need to restart Obsidian on your other devices to use the new path.

## Syncing your vault settings

> [!help] These instructions are designed for users with existing multi-device sync setups who wish to modify these settings across their devices.

**Primary device**

The primary device is your source-of-truth device. It can also mean the device you make the new change on, that you wish to sync across your other devices.

1. Access **Settings** → **Sync**.
2. Activate the desired settings under **Vault configuration sync**.
3. Restart Obsidian. On mobile or tablet, this may require a force quit.
4. Allow time for the settings to synchronize with your remote vault.

**Secondary device(s)**

The secondary device is your other devices. It can also mean the devices you wish to receive an updated change on.

1. Navigate to **Settings** → **Sync**.
2. Enable the desired settings under **Vault configuration sync**.
3. Wait for the changes to be downloaded from your remote vault.
4. Restart the application to ensure that your synchronized settings take effect. On mobile or tablet, this may require a force quit.

## Select file types to sync

1. Open **Settings → Sync**.
2. Under **Selective sync**, enable the file types you want to sync.
3. Restart the application to ensure that your new settings take effect. On mobile or tablet, this may require a force quit.

## Exclude folder from being synced

By default, Obsidian syncs all files and folders in your vault. If you don't want Obsidian to sync a certain folder, you can exclude it.

1. Open **Settings → Sync**.
2. Under **Selective sync**, next to **Excluded folders**, select **Manage**.
3. Select the checkbox to the left of the folder you want to exclude.
4. Select **Done**.

## Settings profiles

Obsidian Sync can sync multiple [[Configuration folder|configuration folders]] to the same remote vault. You can use this to create different profiles, for example, one for mobile devices and another for your laptop.
## Create a settings profile

To set your settings folder:

1. Open **Settings → General**.
2. In **Override config folder**, type the name of your profile, starting with a period (`.`). For example, `.obsidian-mobile`.
3. Relaunch Obsidian to have the changes take effect.

> [!note] 
> Changing your settings profile will require you to adjust your sync settings again. You will also need to redownload plugins and themes.
> 
> You can prevent this by making a copy of your `.obsidian` folder, and renaming it to your new config folder name (`.obsidian-mobile`) before making the changes.