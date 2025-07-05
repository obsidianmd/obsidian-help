---
aliases:
  - Sync settings
  - Selective syncing
  - Obsidian Sync/Select files and settings to sync
  - Settings profile
description: This page explains the Sync settings and guides you in selecting which files to sync.
mobile: true
permalink: sync/settings
publish: true
---

When you [[Plans and storage limits#Create a new remote vault|create a remote vault]] and [[Set up Obsidian Sync#Connect to a remote vault|connect to it]], the Sync Core plugin becomes the place for managing your remote vault.

## Sync settings

**Remote vault**  
This section shows your currently connected remote vault. It includes a **Disconnect** button to disconnect from the remote vault and a **Manage** button to view all remote vaults your account has access to (including shared vaults via [[Collaborate on a shared vault|collaboration]]).

> [!todo] If your remote vault is located in a third-party sync service, you will see a red error message. Follow the steps in [[Switch to Obsidian Sync]] to resolve this.

**Sync status**  
Displays the current sync status of the remote vault. This section includes either a **Pause** or **Resume** button, depending on the status.

**Device name**  
Assign a unique name to the device currently syncing. This helps track activity in the [[Status icon and messages#Sync activity log|sync log]].

**Deleted files**  
Contains a button to **View** or **Restore** deleted files. For more details, see [[Version history]].

**Storage usage**  
Displays a progress bar showing how much of your sync storage is used.

> [!tip] It may take up to 30 minutes for the current usage to update due to server-side processing.

**Contact support**  
Provides instructions on how to [[Help and support#Contact Obsidian support|contact Obsidian support]], including options to **Copy debug info** and **Email support**.

---

You can also choose what to sync in the Sync Core plugin's settings. This section covers **selective sync** and **vault configuration sync**, along with their associated caveats.

## Selective syncing

Files synced to your [[Local and remote vaults|remote vault]] contribute to your [[Frequently asked questions#How large can each remote vault be|storage limit]]. By default, Obsidian Sync activates **selective sync** for the following file types:
- Images
- Audio
- Videos
- PDFs

To sync additional file types, toggle the `Sync all other types` option.

The default **vault configuration sync** settings include:
- Other file types
- Main settings
- Appearance
- Themes and snippets
- Hotkeys
- Active core plugin list
- Core plugin settings

To sync community plugins, manually enable **Active community plugin list** and **Installed community plugin list**.

### Change the file types you want to sync

1. Open **Settings → Sync**.
2. Under **Selective sync**, enable the file types you want to sync.
3. Restart the application to apply the new settings. On mobile or tablet, this may require a force-quit.

Note that your [[Plans and storage limits|Sync plan]] defines the maximum file size you can sync. The Standard plan allows syncing files up to 5MB, while the Plus plan supports files up to 200MB.

> [!info] Adding a file to the **Excluded files** list does not remove it from the remote vault if it has already been synced. Configure your Sync settings *before* syncing to avoid using unnecessary storage.

### Exclude a folder from syncing

By default, Obsidian syncs all files and folders in your vault. To exclude a specific folder from syncing:
1. Open **Settings → Sync**.
2. Next to **Excluded folders**, select **Manage**.
3. Select the folder you want to exclude from the list.
4. Select **Done**.

To remove a folder from the exclusion list, select the ![[lucide-x.svg#icon]] button next to the folder name.

#### Always excluded from sync

##### File recovery snapshots

The snapshots in the [[File recovery]] plugin are not synced via Obsidian Sync, as snapshots are kept in the [[How Obsidian stores data#Global settings|Global settings]].

##### Hidden folders

Folders beginning with a `.` are treated as hidden and excluded from sync. The only exception is the vault's [[Configuration folder|configuration folder]] (`.obsidian`), which does sync.

Common examples of hidden folders that are not synced:
- `.vscode`
- `.git`
- `.idea`

##### Sync settings

Sync settings do not sync across devices. You need to configure them separately on each device as needed.

## Updating your synced vault settings

To modify sync settings across multiple devices, follow these steps:

> [!tip] The terms "primary" and "secondary" devices are for clarity only; Sync does not differentiate between them.

### Primary device

The primary device acts as the source of truth. Changes made here are synced across all other devices.

1. Go to **Settings → Sync**.
2. Activate the desired settings under **Vault configuration sync**.
3. Reload or restart Obsidian. On mobile or tablet, a force-quit may be required.
4. Allow time for the settings to sync with your remote vault.

### Secondary device(s)

Secondary devices (such as your phone) receive updates from the primary device.

1. Go to **Settings → Sync**.
2. Enable the necessary settings under **Vault configuration sync**.
3. Wait for changes to download from the remote vault.
4. Reload or restart the app to apply the synced settings. On mobile or tablet, a force-quit may be required.

### Reloading of settings

Certain settings can be hot reloaded, while others require a restart:

- **Hot-reloadable**: Most Obsidian configurations, including hotkeys and properties, appearance settings, and configurations for already-enabled core plugins.
- **Requires reload**: CSS changes (e.g., [[CSS snippets]], [[Themes]]), graph view configurations, and core plugin states (e.g., enabling/disabling Daily Notes).

Community plugins typically do not support hot reloading and require a restart when new settings are applied.

> [!todo] Plugin developers: Learn how to [integrate hot-reload functionality with Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Settings profiles

Obsidian Sync can sync multiple [[Configuration folder|configuration folders]] to the same remote vault, allowing you to create separate profiles (e.g., one for mobile, another for your laptop).

### Create a settings profile

To create a new settings profile:

1. Open **Settings → Files and links**.
2. Under **Override config folder**, enter a name for your profile, starting with a period (`.`), e.g., `.obsidian-mobile`.
3. Relaunch Obsidian to apply the changes.

> [!note] 
> Changing the settings profile will require reconfiguring your sync settings. To avoid redownloading plugins and themes, copy your existing `.obsidian` folder and rename it to match your new profile (e.g., `.obsidian-mobile`) before making changes.
