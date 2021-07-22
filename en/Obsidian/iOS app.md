The iOS app is now publicly available, and a link to the app store listing can be found at https://obsidian.md/mobile

## Where are my vaults stored?

If you choose, you can store your vaults in iCloud Drive. These vaults can be found in your iCloud Drive folder, under an app folder named "Obsidian" that shows the Obsidian logo.

If you choose not to use iCloud for a vault, then it will be stored in the sandboxed file system of the Obsidian app. The local vaults are accessible from any other apps that support picking a folder from the file system. As such, apps like Working Copy can be used to sync with Obsidian's local vaults.

==Be aware that if you choose to store your vault locally, they will be automatically deleted by iOS when you uninstall Obsidian's app.==

## Sync

### Quick start

If you already have a vault on your desktop, here's the two ways to sync your vault to mobile and access it:

- [[#iCloud Drive Sync]]
- [[#Obsidian Sync]]

The two current officially supported sync solutions are iCloud and Obsidian Sync.
Working Copy (git) is another alternative that has been tested to work with Obsidian on iOS.

Currently, there is **no** known support for the following sync services on iOS yet:
- Dropbox
- Google Drive
- OneDrive
- Syncthing

If you find out a way to sync using these services on iOS with Obsidian, we would be glad if you can join our Discord server and teach us how to set it up.

In theory, any third party sync providers that can provide background-sync for a specific folder on your device should be able to work, but we are not aware of any other than Working Copy. This is due to the limitations of the highly complex mechanism of cross-app file sharing in iOS, unlike Android which allows easy cross-app file sharing. Because of this, most third party sync providers don't have a proper implementation for background sync on iOS.

Currently Obsidian does not support third party sync providers that expose a virtual file system through FileProvider. We will be attempting this in the future as an improvement.

### Obsidian Sync

You can follow the same steps as Android's sync as shown below, making sure that you create a non-iCloud folder as we do not recommend using both Obsidian Sync and iCloud Sync concurrently, which has been reported to cause data loss due to [[Obsidian Sync#Third party sync|race conditions]].

![[Android app#Obsidian Sync]]

### iCloud Drive Sync

To setup a **new** synced vault through iCloud Drive:

1. Start the iOS app and choose "Create a new vault";
2. On desktop, using the "Open another vault" option, point to the new vault location in iCloud.

To setup an **existing** vault to be synced through iCloud Drive:

1. Start the app and choose "Create a new vault";
2. Name it the same as your desktop vault to make [[Using obsidian URI|inter-vault URIs]] work;
3. Wait for iCloud to sync this empty folder to your desktop;
4. Copy and paste everything under your vault to this empty folder, this will now be your synced folder location;
5. On desktop, using the "Open another vault" option, point to the new vault location in iCloud;
6. Wait for iCloud to sync everything to your mobile device.

### Working Copy

You can alternatively setup Working Copy to use Git to sync your vault on iOS. To do this, you should create an empty local vault on your device first, then you can "Setup Folder Sync" and select a local vault inside the Obsidian app. Then, you can manually commit & push.

### Third party sync support

Many users asks why Obsidian for Mobile doesn't support their preferred sync solution. Here's a brief explanation on the current state of mobile sync support.

The thing about Obsidian that's different from other apps like 1Writer and iA Writer is that Obsidian works on top of a vault rather than a single note. Many of the core Obsidian functionality depend on the whole vault and all the files inside, such as the link auto-complete, image embedding, tag pane, backlinks, and all the cross-note functionality.

In contrast, most Markdown editing apps simply "open" a single note, let the user perform edits, then save the note back. Because of this, the OS and third party sync providers typically only provide an API for accessing/working with a single file, but not so much for working with a vault (folder of files with potentially subfolders).

For sync, a regular markdown editor app can simply implement the basic "download file when you open a selected file" and "upload the file back when you press save". Obsidian has to download the whole vault to be useful, and keep track of all the modified files (like for example, when you perform a file rename, we might update a bunch of other files for links that has changed due to the rename). On top of that, we need a way to monitor for changes through the sync solution to be able to update our internal caches when files change, to provide accurate links.

Keeping all that in sync with a third party sync provider would be quite tedious - and this is actually part of the reason why most sync providers don't make a proper sync client for mobile and you have to use a third party app (like DropSync or FolderSync) to do it. Unfortunately, such apps don't exist on iOS because of app sandboxing.

## Known issues

### iCloud folder on macOS

If you find yourself unable to drag & drop things into the iCloud folder in Finder on macOS, please download the latest Obsidian Desktop release from https://obsidian.md as it contains a fix for this issue. Once it's installed, running the app should automatically cause iCloud to update the folder permissions. If this does not work right away, you may need to restart your machine.

### Paste menu sometimes not appearing

Some users runs into an issue where tapping on the cursor does not show the paste menu. As a workaround, you can use the three-finger tap gesture to trigger a global edit menu which can be used to paste into the text.
