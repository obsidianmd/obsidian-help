---
aliases:
  - Obsidian Sync/Obsidian Sync and third-party services
  - Obsidian Sync/Migrate to Obsidian Sync
cssclasses:
  - soft-embed
description: Learn how to transition from your current syncing solution to Obsidian Sync.
mobile: true
permalink: sync/switch
publish: true
---
Learn how to transition from your current syncing solution to Obsidian Sync.

> [!warning] Avoid using multiple solutions to sync the same files
> We [[Frequently asked questions#Can I use a third-party sync with Obsidian Sync?|do not recommend]] using Obsidian Sync alongside cloud storage services (e.g. iCloud, Dropbox, OneDrive, Google Drive) as this can cause conflicts. However, cloud storage services may play a role in your [[Back up your Obsidian files|backup]] strategy.

## Move your vault out of your third-party syncing service or cloud storage

If your vault is stored in any of the following locations, it's likely being synced by a third-party service:

- **Windows**: `C:\Users\Username\Desktop` or `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` or `/users/username/Documents`
- **iOS**: The **iCloud** folder within the Files app
- **Other**: Any folder under a syncing service, such as `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault`, etc.

While Android and Linux tend to have fewer issues with this, it's still worth checking your vault location on these devices.

> [!tip] If your current local vault is connected to a remote vault, Obsidian will try to detect if the vault is in a syncing service. If it is, you will see a message at the top of Obsidian Sync's settings.

To avoid conflicts with syncing services, we recommend storing your Obsidian vaults in the following locations:

- **Windows**: Recommended locations in order:
    1. `D:\` or any other non-C, non-network drive on your device
    2. `C:\Vaults` (if you have permissions to use the C:\ drive)
    3. `C:\Users\Username\Vaults` (if you must keep your vault within C:\Users\Username, make sure OneDrive is set not to remove files. OneDrive is generally less aggressive outside of `Desktop` and `Documents` folders.)
- **macOS**: `/users/username/vaults`
- **Linux**: No specific recommendation due to the variety of filesystems. Just ensure that Obsidian has full read/write access and that no syncing service manages the folder.
- **iOS/iPadOS**: Store the vault **On My iPhone** or **On the Device**.
- **Android**: Use the `Documents/` folder on your device.

## Move your vault using Obsidian on desktop

![[Manage vaults#Move vault to a different folder]]

## Move your vault on mobile

On mobile devices, Obsidian operates in a sandboxed environment, meaning you cannot move vaults within the app like you can on desktop.

### Android

Android filesystems vary greatly by device, but generally, follow the same steps as you would to move your vault manually, ensuring it is removed from any syncing service on your device.

### iOS and iPadOS

To move an existing iCloud vault to your device, follow these steps:

> [!note] If you already have the data on another device and have set up Obsidian Sync, it's recommended to [[Set up Obsidian Sync#Sync a remote vault on another device|set up a new local vault from Sync]] instead.

- [[Back up your Obsidian files|Back up]] your vault.
- Create a new vault on your device, ensuring **Save in iCloud Drive** is disabled.
- Force quit the Obsidian app on all devices to pause Sync.
- Open the **Files** app on your iOS/iPadOS device.
- Long-press the vault folder under **iCloud Drive → Obsidian**, then select **Move**.
- Move the vault to **On My iPhone/Device → Obsidian** and confirm that it's now visible.
- Tap **Copy**.
- Return to **iCloud Drive → Obsidian** and delete the old vault folder.

Once you reopen Obsidian, the vault should show a vault icon instead of a cloud icon, confirming it is no longer in iCloud Drive. Obsidian Sync will also no longer display the warning message within its settings.

## Next steps

- Looking to get started with Obsidian Sync? [[Set up Obsidian Sync]]
- Still need assistance? Check out [[Troubleshoot Obsidian Sync]]
