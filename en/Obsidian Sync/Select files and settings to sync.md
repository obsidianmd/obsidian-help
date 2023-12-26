Any files or settings that have been synced to your [[Local and remote vaults|remote vault]] count towards your [[Sync limitations#How large can each remote vault be|storage space]]. By default, [[Introduction to Obsidian Sync|Obsidian Sync]] ignores larger files such as audio, video, and PDFs.

**Synced files and exclusions**:
Synced files remain in your remote vault even if you exclude them later on. If possible, configure the files and settings you want to sync before you start syncing your vault.

**Sync does not sync .hidden folders:**
`.hidden` folders will not sync, with the exception of the [config folders](app://obsidian.md/Config%20folders), as these are considered folders hidden from the filesystem.

Common examples include `.vscode`, `.git`, and `.idea`.

==**Sync does not sync Sync's settings**==:
This allows users to configure Sync differently on each device according to their needs. This means, however, that you must configure custom Sync settings on each device.

> [!tip] Sync settings and application restarts
> Obsidian **only** applies vault settings during start-up. If you change a setting on one device, you **need to restart** Obsidian on your other devices for the new changes to take effect. 
> 
> For example, if you change the path of your daily notes in the [[Daily Notes]] plugin, you need to restart Obsidian on your other devices to use the new path.

## Initially adjusting your Sync settings


> [!help] This set of instructions is intended for users who wish to modify their [[Set up Obsidian Sync on another device|sync settings on an additional device]] or a remote vault after [[Set up Obsidian Sync#Connect to a remote vault|establishing a connection to a remote vault]].

1. If you haven't already, close (x) or dismiss the pop-up window prompting you to **Exclude Folders** and **Start Syncing**.
2. On your primary device, navigate to **Settings** → **Sync**.
3. Under **Vault configuration sync**, activate the settings you want to synchronize.
    1. If you make changes to any settings, restart Obsidian completely.
4. After restarting Obsidian, if any settings were modified, return to **Settings** → **Sync**.
5. Choose **Resume**.
6. The synchronization process will initiate, involving uploading, downloading, or merging your files, depending on whether the remote vault contains existing files or not.


## Syncing your vault settings

> [!help] These instructions are designed for users with existing multi-device sync setups who wish to modify these settings across their devices.

**Primary device**
1. Access **Settings** → **Sync**.
2. Activate the desired settings under **Vault configuration sync**.
3. Restart Obsidian
4. Allow time for the settings to synchronize with your remote vault.

**Secondary device(s)**
1. Navigate to **Settings** → **Sync**.
2. Enable the desired settings under **Vault configuration sync**.
3. Wait for the changes to be downloaded from your remote vault.
4. Restart the application to ensure that your synchronized settings take effect.

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

Obsidian Sync can sync multiple [[Config folders|config folders]] to the same remote vault. You can use this to create different profiles, for example one for mobile devices and another for your laptop.

To set your settings folder:

1. Open **Settings → General**.
2. In **Override config folder**, type the name of your profile, starting with a period (`.`). For example, `.obsidian-mobile`.
3. Relaunch Obsidian to have the changes take effect. 