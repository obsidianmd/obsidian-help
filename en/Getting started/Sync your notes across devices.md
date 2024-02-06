Syncing means keeping your notes up to date across your devices, such as your laptop and phone.

The easiest way to sync your notes between your devices is to use [[Introduction to Obsidian Sync|Obsidian Sync]]. If you already have an Obsidian Sync subscription, see how to [[Set up Obsidian Sync]].

Note that using multiple syncing services at the same time (e.g., Obsidian Sync _and_ Dropbox) may cause data loss, corruption, and other issues. [[Back up your vault|Find out more about using Obsidian Sync with other services here.]]

> [!important] Dealing with on-demand cloud storage
> Some cloud storage services, such as OneDrive, allow you to only download files when you use them and later remove them locally to free up space. Since the files are no longer available locally, Obsidian Sync believes they've been deleted and removes them from your remote vault.
>
> To use Obsidian Sync together with Files On-Demand and similar features, make sure to configure the service to always keep the files on the device.
^sync-files-on-demand

If you don't want to use Obsidian Sync, this page lists alternative methods for syncing your vaults with multiple devices.
## Sync notes across multiple desktops

If you don't use Obsidian on your mobile devices, you can use any third-party service that syncs a local folder to a cloud storage.

For example, you can use any of the following services:

- Dropbox
- Google Drive
- iCloud Drive
- OneDrive
- Syncthing

To sync your notes, follow the instructions for the service you're using to sync a folder on your local file system. Then open the folder as an existing vault on all your desktop devices.

## Sync your notes on iPhone and iPad

To sync your notes to your iPhone or iPad, we officially support the following options:

- [[Introduction to Obsidian Sync|Obsidian Sync]]
- [[#iCloud Drive]]

**Note:** The following services aren't supported. If you discover a way to sync your notes on your iOS device using any of these services, let us know on our community channels.

- Dropbox
- Google Drive
- OneDrive
- Syncthing

### iCloud Drive

Obsidian can use iCloud Drive as a local file system.

When utilizing iCloud Drive on macOS, make sure to upgrade your desktop app's installer version to v0.13.0 or later. Additionally, ensure that you do not surpass your iCloud storage limit, as exceeding it could lead to syncing interruptions.

> [!tip]
> Ensure that you disable "**Optimize Mac Storage**" in iCloud Drive's settings before syncing your Obsidian vault using iCloud Drive on macOS. Failing to disable this feature could cause iCloud Drive to offload your files, rendering them unusable by Obsidian, and potentially leading to unexpected behavior.

#### Create a new vault in iCloud Drive

To create a new vault in iCloud Drive on your iPhone or iPad:

1. Tap **Create new vault**.
2. In **Vault name**, enter the name of your vault.
3. Enable **Store in iCloud**.
4. Tap **Create**.

Obsidian has created a new folder inside your iCloud Drive. To open the iCloud Drive folder as a vault on your computer:

1. On your computer, open **Obsidian**.
2. At the right of **Open folder as vault**, select **Open**.
3. Navigate to **iCloud Drive → Obsidian**.
4. Select the folder with the name of the vault you want to sync with.

#### Sync an existing vault with iCloud Drive

To sync an existing vault using iCloud, you need to create an empty vault in iCloud Drive and then move your notes on your other device to the empty vault.

To create a new empty vault in iCloud Drive:

1. Tap **Create new vault**.
2. In **Vault name**, enter the same name as the vault you want to sync with.
3. Enable **Store in iCloud**.
4. Tap **Create**.

To move your notes to the new vault in your iCloud Drive:

1. On your computer, open the **iCloud Drive** folder.
2. Open the **Obsidian** folder. It might take a few minutes to appear.
3. Move the files in your existing vault to the folder with the name of your vault.

iCloud syncs the files to your mobile device. Depending on the size of your vault, this might take a few minutes.

### Working Copy

If you store your notes in a [Git](https://git-scm.com/) repository, you may want to look at [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)—a Git client for your iOS.

To sync using Working Copy:

1. Create an empty vault on your iPhone or iPad.
2. Use the **Setup Folder Sync** action and select your empty vault.
3. Commit and push any changes to your vault using the Working Copy app.

**Note:** While we don't officially support this method, several of our users have reported that they've successfully used Working Copy to sync their notes.

### Why can't I sync using X?

We understand that many of you use other services for syncing files and you'd prefer to use it for syncing your notes as well.

Obsidian works differently from other Markdown editors on iOS. Editors such as 1Writer and iA Writer access one note at a time, which lets them use built-in support for documents.

In contrast, many features in Obsidian need access to your entire vault. For example if you rename a file, then Obsidian needs to update all files in the vault that links to that file.

Implementing a system to read, modify, and monitor an entire folder structure comprising of possibly thousand of notes outside of the supported locations is challenging. We hope to address this limitation in the future.

If you're a developer, you can build a plugin that uses the Web APIs for each individual sync service.

### Where are my vaults stored?

If you choose not to use iCloud Drive when you create your vault, Obsidian stores it in a local file system for the Obsidian app. Other apps, such as [[#Working Copy]], can access your vault by selecting the vault from the file system.

**Caution:** Any notes stored in the local file system are deleted by iOS when you uninstall the app. Make sure to back up your notes before you uninstall the Obsidian app.

## Sync notes on Android

The easiest way to sync your notes on your Android device is using [[Introduction to Obsidian Sync|Obsidian Sync]].

Since Obsidian stores notes in a local folder on your Android device, you can also use any app that let you sync a folder, such as:

- [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync)
- [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite)

**Note:** Obsidian creates an Obsidian folder in the shared Documents folder. Any folder under `Documents/Obsidian` is considered an Obsidian vault.

## Config folders

You can utilize the ability to change your configuration folder per device, to maintain device specific settings even when using a syncing service. 

![[Configuration folder#Changing your config folder]]
