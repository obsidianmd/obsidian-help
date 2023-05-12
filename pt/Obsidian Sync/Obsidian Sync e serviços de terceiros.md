[[Introdução ao Obsidian Sync|Obsidian Sync]] is a service for syncing your notes across devices. While it offers helpful features like [[Histórico da versão|restoring notes]], it's not designed to be used to back up your vault.

Though we recommend that you regularly back up your vault, be aware that **using a third-party syncing service together with Obsidian Sync may result in data corruption or data loss**.

If you set up the same third-party service on multiple devices, such as your phone, you risk having the service competing with Obsidian Sync whenever you make changes to your vault. This can lead to conflicts, duplicated files, or corrupted files.

To back up your vault using a third-party service, configure the service so that backups are only made from your primary device. For example, if you do most of your writing on your laptop, that's where you should configure your backups. 

We recommend using a dedicated backup service that doesn't automatically update data on your local device from your backup.

> [!important] Files On-Demand
> Some cloud storage services, such as OneDrive, allow you to only download files when you use them and later remove them locally to free up space. Since the files are no longer available locally, Obsidian Sync believes they've been deleted and removes them from your remote vault.
>
> To use Obsidian Sync together with Files On-Demand and similar features, make sure to configure the service to always keep the files on the device.

## Remove your vault from a third-party sync service

If you're using Obsidian Sync and realize that you've set up your vault in a folder synced by a third-party service, you can use the following steps to move the vault to a safer location.

## Desktop

### Option 1: Move your vault using the Vault switcher

1. In the bottom-left corner, select **Open another vault** (vault icon).
2. Next to the vault you want to move, select **More options** (three dots icon). 
3. Choose a new location for the vault on your file system.

### Option 2: Move your vault manually
  
1. Make backups of your vault. Copy your vault folder another location that you won't touch throughout the rest of this operation.
2. Quit Obsidian.  
3. Cut and paste (or move using drag and drop) your vault folder from the old location to your newly-selected vault location Don't put it in a folder that is being synced by another service.
4. Make sure your backup folder contains your vault.  
5. Relaunch Obsidian.  
6. Open the Vault switcher, and then select **Open folder as vault**.
7. Navigate to your vault's new location and choose your vault folder.  
8. Check and make sure the vault looks the same. You might have to re-enable community plugins under **Settings → Community Plugins → Turn restricted mode off**.)  
9. Set up Obsidian Sync again.

### iOS

1. Make a backup of your vault.
2. On your device, create a new vault and disable **Save in iCloud Drive**.
3. Force quit the Obsidian app on all your devices to prevent Sync from performing any operations while you move the files.
4. On your iOS device, open the Files app.
5. Under **iCloud Drive → Obsidian**, long-press on the vault folder and then select **Move**.
6. Navigate to **On My iPhone → Obsidian**. Make sure that you can see the vault you created earlier.
7. Press **Copy**.
5. After the vault has been copied, navigate back to **iCloud Drive → Obsidian**. 
6. Delete your vault folder.

The next time you open Obsidian and the Vault switcher, your vault now has a vault icon instead of a cloud, indicating it's no longer on iCloud Drive.
