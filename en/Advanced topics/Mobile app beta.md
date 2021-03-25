## Beta status

As of 2021/03/09, the mobile apps are in VIP-only closed beta. As it gets more stable, we'll gradually roll out to Supporters, Insiders, and then everyone else.

## Getting started

The mobile beta is currently only available to holders of the [VIP Catalyst license](https://obsidian.md/pricing).

If you already have a VIP Catalyst license, [join our Discord](https://discord.gg/veuWUTm).  If you don't have your badge yet, reach out to Silver with the email address your license is associated with.

Once you get your badge, you can access the beta as well as provide feedback in the #mobile channel.

## How do I provide feedback?

The current group being rolled out can access the #mobile channel on Discord as well as the new Mobile category on the forum, given you've obtained the badges for your Catalyst tier.

To keep track of bug reports and feature requests, please direct them to the forum as usual. Thank you for trying out our beta!

## Where are my vaults stored?

### Android

On Android, the vaults home is located in `Documents/Obsidian`. The `Documents` folder is typically stored in SD card or emulated storage.

Any folder in the vaults home directory will be considered a vault. If you copy a folder over into this directory, it can be recognized when you open Obsidian.

### iOS

Due to iOS security sandboxing, if you choose to create non-iCloud vault, it won't be accessible by any other apps. Only the built-in [[Obsidian Sync]] can access them.

An alternative is to put vaults on your [[#iCloud|iCloud Drive]]. iCloud comes with 5 GB of free storage and is natively supported by Apple.

## How do I sync my data?

As with Obsidian desktop, we provide our built-in paid [[Obsidian Sync]] service. You can also use your preferred sync solution to keep the local folder on your phone in sync with other devices.

### Android

There are apps on the Play Store that let you sync a folder on your phone with other devices, for example [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync&hl=en&gl=US).

However, we haven't tested these solutions. If you have success or experience with any of them, please let us know so we can supply the information on this page.

### iOS

Our iOS app supports both [[Obsidian Sync]] and iCloud.

#### iCloud

When creating a vault, you can choose an existing vault on your iCloud Drive, or create a new one there. This lets you open this vault from iCloud Drive on other devices.

#### Technical note on third party sync, Working Copy, and other storage locations on iOS.

Currently Obsidian does not support Working Copy, or other similar apps that exposes a virtual file system through FileProvider. This is due to a technical limitation in iOS's sandboxing and API.

iOS's cross-app file sharing model is well designed for an app to open, lock, and work with a single file at a time. It does not seem to be designed for an app to work simultaneously with an entire folder, recursively monitoring all of its subfolders. This means that for simple markdown editors, it's no problem, but Obsidian is so much more. Backlinks, tags, the file explorer, link auto-completion, live embedded notes, quick switcher, etc, all works off the entire hierarchy of files, so Obsidian will be extremely buggy when working with such a folder.

If you're an experienced iOS developer who knows how to properly recursively monitor a folder obtained from `UIDocumentPickerViewController`, feel free to reach out.