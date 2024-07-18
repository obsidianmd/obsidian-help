Any files or settings synced to your [[Local and remote vaults|remote vault]] contribute to your [[Sync limitations#How large can each remote vault be|storage space]]. By default, [[Introduction to Obsidian Sync|Obsidian Sync]] activates **selective sync** for the following file types:
- Images
- Audio
- Videos
- PDFs

To sync additional file types, manually toggle `Sync all other types`.

The default **vault configuration sync** settings include:
- Other file types
- Main settings
- Appearance
- Themes and snippets
- Hotkeys
- Active core plugin list
- Core plugin settings

To sync community plugins, manually toggle **Active community plugin list** and **Installed community plugin list**.

## Change the file types you want to sync

1. Open **Settings → Sync**.
2. Under **Selective sync**, enable the file types you want to sync.
3. Restart the application to ensure that your new settings take effect. On mobile or tablet, this may require a force quit.

Note that your [[Plans and storage limits|Sync plan]] defines the maximum file size you can sync. With the Standard plan you can sync files up to 5MB, while the Plus plan allows you to sync files up to 200MB.

> [!info] Adding a file to the **Excluded files** list will not remove the file from the remote vault if it has already been synced. Configure the files and settings you wish to sync before initiating the process to avoid unnecessary use of storage space.

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

Sync settings are not shared across devices. You must separately configure the settings on each device according to your needs.

## Updating your synced vault settings

If you need to modify your sync settings across multiple devices, follow these steps:

> [!tip] In this context, the remote vault does not differentiate between primary and secondary devices; these terms are used for user clarity.

### Primary device

The primary device is considered your source-of-truth. This is the device on which you make changes that you want to sync across all other devices.

1. Access **Settings** → **Sync**.
2. Activate the desired settings under **Vault configuration sync**.
3. Reload or Restart Obsidian. On mobile or tablet, this may require a force quit.
4. Allow time for the settings to synchronize with your remote vault.

### Secondary device(s)

The secondary device is any other device you use with Obsidian, such as your phone. It refers to devices that receive updates from the primary device.

1. Navigate to **Settings** → **Sync**.
2. Enable the desired settings under **Vault configuration sync**.
3. Wait for the changes to be downloaded from your remote vault.
4. Reload or restart the application to ensure that your synchronized settings take effect. On mobile or tablet, this may require a force quit.

## Reloading of settings

Obsidian has limited ability to update and apply configurations received from Sync. The following configurations will hot reload:

- Most Obsidian app configurations, including hotkeys and properties.
- Appearance configurations.
- Configurations for already enabled Obsidian Core plugins (e.g., the location of the daily notes template folder).

However, for CSS changes involving [[CSS snippets]] or [[Themes]], while the appearance configurations are received, the application must be reloaded to reflect visual changes.

The following configurations will not hot reload, and will require an application reload or restart:

- Graph view configurations.
- States of Obsidian Core plugins (e.g., whether Daily Notes is enabled).

Additionally, in rare cases, configurations that do not support hot reloading may be merged incorrectly or overwritten completely. For more details, see [[Troubleshoot Obsidian Sync#Conflict resolution|conflict resolution]].

> [!todo] Are you a plugin developer? Learn how to [seamlessly integrate your plugin with Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

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
