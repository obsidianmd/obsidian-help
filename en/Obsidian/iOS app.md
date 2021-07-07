The iOS app is currently in [[Mobile app beta|closed beta]], and is available through TestFlight.

## Where are my vaults stored?

If you choose to store your vault in iCloud, then it is stored in a container in your iCloud Drive account, under an app folder named "Obsidian", which should have an icon of our logo.

If you chose not to use iCloud, then your vault will be stored in the sandboxed file system of the Obsidian app. As of v0.0.14 the local vault is now accessible from any other apps that supports picking a folder form the file system. As such, apps like Working Copy can be used to sync with Obsidian's local vaults.

Currently Obsidian does not directly support third party sync providers that exposes a virtual file system through FileProvider yet. We will be attempting this in the future as an improvement.

## Sync

The two current officially supported sync solutions are iCloud and Obsidian Sync.

Currently, there is no known support for the following sync services on iOS:
- Dropbox
- Google Drive
- OneDrive
- Syncthing

If you find out a way to sync using these services on iOS with Obsidian, we would be glad if you can join our Discord server and teach us how to set it up.

In theory, any third party sync providers that can provide background-sync for a specific folder on your device should be able to work, but we are not aware of any other than Working Copy. This is due to the limitations of the highly complex mechanism of cross-app file sharing in iOS, unlike Android which allows easy cross-app file sharing. Because of this, most third party sync providers don't have a proper implementation for background sync on iOS.

### Obsidian Sync

You can follow the same steps as Android's sync as shown below, making sure that you create a non-iCloud folder as we do not recommend using both Obsidian Sync and iCloud Sync concurrently, which has been reported to cause data loss due to race conditions.

![[Android app#Obsidian Sync]]

### iCloud Drive Sync

To setup a synced vault through iCloud Drive, you must first install and open the Obsidian iOS app. This will automatically create an app folder called "Obsidian" under your iCloud Drive, with a logo of the Obsidian app. Note that this folder is considered to be a special folder by iCloud and is different than a folder you manually create insider your iCloud Drive.

Next, on your computer, move your vault folder into `iCloud Drive/Obsidian/`. Doing so will allow Obsidian to read the special app folder in your iCloud Drive.

Let iCloud sync the entire vault folder, then on your mobile device, open the Obsidian app. You should now see the vault that you just put in, along with a cloud icon indicating it's stored in iCloud.

The first time you open that vault, Obsidian might freeze for a while because iCloud is downloading all the files in the background. Eventually once iCloud finish syncing everything over to the phone the app should work smoothly. This may require you to restart the app a few times though.

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

On macOS, when syncing with iCloud, Finder will not allow you to drag & drop files into Obsidian's iCloud folder. This is a macOS bug we're working with Apple to fix. You'll also find that some desktop apps will not let you save files directly into Obsidian's iCloud folder.

As a workaround, you can use copy & paste instead of drag & drop, or alternatively use `mv` from the command line to move the file.

### Paste menu sometimes not appearing

Some users runs into an issue where tapping on the cursor does not show the paste menu. As a workaround, you can use the three-finger tap gesture to trigger a global edit menu which can be used to paste into the text.
