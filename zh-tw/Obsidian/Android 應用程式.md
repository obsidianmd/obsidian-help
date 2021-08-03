The Android app is now publicly available, and a link to the Play store listing can be found at https://obsidian.md/mobile

## Where are my vaults stored?

On Android, the Obsidian home folder is stored in the public documents folder under `Documents/Obsidian`. The public `Documents` folder is typically stored in SD card or emulated storage.

Any folder in this home folder will be considered a vault. If you sync or copy a vault folder into this directory, it can be recognized when you open Obsidian.

## Sync

On Android, you may choose to use [[Obsidian Sync]] to synchronize your files, or use any third party sync provider that can perform sync in the background.

### Obsidian Sync

As with Obsidian desktop, we provide our built-in paid [[Obsidian Sync]] service.

To setup a synced vault through Obsidian Sync, first create a new empty local vault. You should name it the same as your desktop app to make [[Using obsidian URI|inter-vault URIs]] work.

Once the empty vault is open, open the left sidebar, tap the settings button, and setup Obsidian Sync just like you did on Desktop:

1. Login to your Obsidian account in the Account tab.
2. Enable the Sync core plugin.
3. Open settings, and choose the "Sync" tab under "Plugin options".
4. Choose the remote vault to sync with.
5. Keep the app open until all your files have synced over.

To view the sync status of Obsidian Sync, swipe to pull out the right drawer, and you should see the status indicator just like it shows on the desktop app. Tap on it to get more information, such as viewing the sync log to debug any issues.

### Third party sync

You can also use your preferred sync solution to keep the local folder on your phone in sync with other devices.

There are apps on the Play Store that let you sync a folder on your phone with other devices, for example [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) or [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

## Storage Permission

When starting Obsidian, you may notice that it prompts for permission to access your device's documents and media.

In an ideal world, we'd prefer to only ask for access rights to the vault folders you choose. However, Android's privacy-friendly file permission API (also known as "scoped storage") has a few restrictions that makes it impossible for Obsidian to function properly.

The two biggest roadblocks are:
- Scoped storage performs many extra permission checks for every single file access, causing significant performance degradation when opening and using Obsidian.
- Scoped storage does not provide a way to watch for external changes, which is critical when using Obsidian with a third-party synchronization tool.

Google specifically gives instructions for developers of this kind of apps a special permission. Obsidian belongs to two categories in the list of exceptions: "document management apps", and "on-device file search". [Read more about it here.](https://developer.android.com/training/data-storage/manage-all-files)
