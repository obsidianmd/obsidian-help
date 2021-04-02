# Obsidian for Android

The Android app is currently in [[Mobile app beta|closed beta]], and is available as a signed APK.

## How do I sync my data?

Obsidian for Android stores all vaults in the public documents folder on your device locally. You may choose to use [[Obsidian Sync]] to synchronize your files, or use any third party sync provider that can choose to sync with the public documents folder.

### Obsidian Sync

As with Obsidian desktop, we provide our built-in paid [[Obsidian Sync]] service.

To setup a synced vault through Obsidian Sync, first create a new empty local vault. Once the empty vault is open, open the left sidebar, tap the settings button, and setup Obsidian Sync just like you did on Desktop:

1. Login to your Obsidian account in the Account tab.
2. Enable the Sync core plugin.
3. Choose the remote vault to sync with.
4. Keep the app open until all your files have synced over.

To view the sync status of Obsidian Sync, swipe to pull out the right drawer, and you should see the status indicator just like it shows on the desktop app. Tap on it to get more information, such as viewing the sync log to debug any issues.

Note: If you use Obsidian Sync along with a third party sync service, please make sure to exclude `.obsidian/sync.json` in your third party sync to avoid breaking Obsidian Sync. This file is used to keep track of the state of synchronization for the local device, and might cause issues when it's accidentally synchronized.

### Third party sync

You can also use your preferred sync solution to keep the local folder on your phone in sync with other devices.

There are apps on the Play Store that let you sync a folder on your phone with other devices, for example [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) or [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

However, we haven't tested these solutions. If you have success or experience with any of them, please let us know so we can supply the information on this page.

## Where are my vaults stored?

On Android, the Obsidian home folder is stored in the public documents folder under `Documents/Obsidian`. The public `Documents` folder is typically stored in SD card or emulated storage.

Any folder in this home folder will be considered a vault. If you sync or copy a vault folder into this directory, it can be recognized when you open Obsidian.

# Obsidian for iOS

The iOS app is currently in [[Mobile app beta|closed beta]], and is available through TestFlight.

## How do I sync my data?

Obsidian for iOS can store your vault either in iCloud, or locally. The two current tested and recommended sync solutions are iCloud and Obsidian Sync.

Any third party sync providers that can provide background-sync for a specific folder on your device should be able to work as well, but we are not aware of any. This is due to the limitations of the highly complex mechanism of cross-app file sharing in iOS, unlike Android which provides a public folder that all apps can access. Because of this, most third party sync providers don't have a proper implementation for background sync on iOS.

### Obsidian Sync

You can follow the same steps as Android's sync as shown below, making sure that you create a non-iCloud folder if you don't wish to store a copy of your vault in iCloud:

![[#Obsidian for Android#Obsidian Sync]]

### iCloud Drive Sync

To setup a synced vault through iCloud Drive, you must first install and open the Obsidian iOS app. This will create an app folder called "Obsidian" under your iCloud Drive, with a logo of the Obsidian app. Note that this folder is considered to be a special folder by iCloud and is different than a folder you manually create insider your iCloud Drive.

Next, on your computer, move your vault folder into `iCloud Drive/Obsidian/`. Doing so will allow Obsidian to read the special app folder in your iCloud Drive.

Let iCloud sync the entire vault folder, then on your mobile device, open the Obsidian app. You should now see the vault that you just put in, along with a cloud icon indicating it's stored in iCloud.

The first time you open that vault, Obsidian might freeze for a while because iCloud is downloading all the files in the background. Eventually once iCloud finish syncing everything over to the phone the app should work smoothly. This may require you to restart the app a few times though.

## Where are my vaults stored?

If you choose to store your vault in iCloud, then it is stored in a container in your iCloud Drive account, under an app folder named "Obsidian", which should have an icon of our logo.

If you chose not to use iCloud, then your vault will be stored in the sandboxed file system of the Obsidian app. In v0.0.13 the local vault is only accessible by Obsidian. In the upcoming release, it will be exposed through Files, so you can access it from other apps on your device.

Currently Obsidian does not directly support Working Copy, or other similar apps that exposes a virtual file system through FileProvider yet. We will be attempting this in the future as an improvement.

# Third party sync support

Many users asks why Obsidian for Mobile doesn't support their preferred sync solution. Here's a brief explanation on the current state of mobile sync support.

The thing about Obsidian that's different from other apps like 1Writer and iA Writer is that Obsidian works on top of a vault rather than a single note. Many of the core Obsidian functionality depend on the whole vault and all the files inside, such as the link auto-complete, image embedding, tag pane, backlinks, and all the cross-note functionality.

In contrast, most Markdown editing apps simply "open" a single note, let the user perform edits, then save the note back. Because of this, the OS and third party sync providers typically only provide an API for accessing/working with a single file, but not so much for working with a vault (folder of files with potentially subfolders).

For sync, a regular markdown editor app can simply implement the basic "download file when you open a selected file" and "upload the file back when you press save". Obsidian has to download the whole vault to be useful, and keep track of all the modified files (like for example, when you perform a file rename, we might update a bunch of other files for links that has changed due to the rename). On top of that, we need a way to monitor for changes through the sync solution to be able to update our internal caches when files change, to provide accurate links.

Keeping all that in sync with a third party sync provider would be quite tedious - and this is actually part of the reason why most sync providers don't make a proper sync client for mobile and you have to use a third party app (like DropSync or FolderSync) to do it. Unfortunately, such apps don't exist on iOS because of app sandboxing.