Any files or settings that have been synced to your [[Local and remote vaults|remote vault]] count towards your [[Sync limitations#How large can each remote vault be|storage space]]. By default, [[Introduction to Obsidian Sync|Obsidian Sync]] does not sync larger files such as audio, video, and PDFs.

## Change the file types you want to sync

1. Open **Settings → Sync**.
2. Under **Selective sync**, enable the file types you want to sync.
3. Restart the application to ensure that your new settings take effect. On mobile or tablet, this may require a force quit.

Note that your [[Plans and storage limits|Sync plan]] defines the maximum file size you can sync. With the Standard plan you can sync files up to 5MB, while the Plus plan allows you to sync files up to 200MB.

> [!info] Synced files will not be deleted from your remote vault if you exclude them from sync. If possible, configure the files and settings you want to sync before you start syncing your vault to prevent using storage space unnecessarily.

## Exclude a folder from being synced

By default, Obsidian syncs all files and folders in your vault. If you don't want Obsidian to sync a specific folder, you can exclude it.

1. Open **Settings → Sync**.
2. Under **Selective sync**, next to **Excluded folders**, select **Manage**.
3. Select the checkbox to the left of the folder you want to exclude.
4. Select **Done**.

## Always excluded from sync

### Folders that start with a dot are not synced

Any folder that starts with a `.` such as`.hidden` will not sync, because these are considered hidden folders in the filesystem. The only exception is your [[configuration folder]], which is called `.obsidian` by default.

Common examples of hidden folders that will not be synced include `.vscode`, `.git`, and `.idea`.

### Sync settings are not synced

Sync settings are not synced so that each each device can be separately configured according to your needs.

> [!tip] Restart the app to apply settings changes on other devices
> Obsidian **only** applies vault settings when the app starts. If you change a setting on one device, you **must restart** Obsidian on your other devices for the new changes to take effect. 
> 
> For example, if you change the path of your daily notes in the [[Daily Notes]] plugin, you need to restart Obsidian on your other devices to use the new path.

## Updating your synced vault settings

If you have an existing multi-device sync setup and want to modify your sync settings across devices.

### Primary device

The primary device is your source-of-truth device. It can also mean the device you make the new change on, that you wish to sync across your other devices.

1. Access **Settings** → **Sync**.
2. Activate the desired settings under **Vault configuration sync**.
3. Restart Obsidian. On mobile or tablet, this may require a force quit.
4. Allow time for the settings to synchronize with your remote vault.

### Secondary device(s)

The secondary device is another device you use Obsidian with (e.g. your phone). It can also mean the devices you wish to receive an updated change on.

1. Navigate to **Settings** → **Sync**.
2. Enable the desired settings under **Vault configuration sync**.
3. Wait for the changes to be downloaded from your remote vault.
4. Restart the application to ensure that your synchronized settings take effect. On mobile or tablet, this may require a force quit.


## Settings profiles

Obsidian Sync can sync multiple [[Configuration folder|configuration folders]] to the same remote vault. You can use this to create different profiles, for example, one for mobile devices and another for your laptop.
## Create a settings profile

To set your settings folder:

1. Open **Settings → Files and links**.
2. In **Override config folder**, type the name of your profile, starting with a period (`.`). For example, `.obsidian-mobile`.
3. Relaunch Obsidian to have the changes take effect.

> [!note] 
> Changing your settings profile will require you to adjust your sync settings again. You will also need to redownload plugins and themes.
> 
> You can prevent this by making a copy of your `.obsidian` folder, and renaming it to your new config folder name (`.obsidian-mobile`) before making the changes.
