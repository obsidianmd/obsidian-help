---
aliases:
  - Obsidian Sync/Obsidian Sync and third-party services
---
[[Introduction to Obsidian Sync|Obsidian Sync]] is a service for syncing your notes across devices. While it offers the ability to [[Version history|restore notes]], it is **not** designed to back up your vault.

To back up your vault we recommend using a dedicated one-way backup tool that pushes data from your device to a backup location, and doesn't rewrite the data on your local device.

## Using a third-party service to back up your vault

> [!danger] Though we recommend that you regularly back up your vault, be aware that **using a third-party syncing service together with Obsidian Sync may result in data corruption or data loss**.

If you set up the same third-party service on multiple devices, such as your phone, you risk having the service competing with Obsidian Sync whenever you make changes to your vault. This can lead to conflicts, duplicated files, or corrupted files.

To back up your vault using a third-party service, configure the service so that backups are only made from your primary device. For example, if you do most of your writing on your laptop, that's where you should configure your backups. 

In the vault switcher, your vault now has a vault icon instead of a cloud, to indicate it's no longer synced to iCloud Drive. 

> [!warning] Files must be available offline
> Some cloud storage services such as OneDrive and Dropbox allow you to only download files when you use them and later remove them locally to free up space. These features are sometimes called "Files on-demand" or "Online-only files".
> 
> Since the files are no longer available locally, they will appear deleted to Obsidian Sync, and will be removed from your remote vault.
>
> To use Obsidian Sync together with OneDrive, Dropbox, or other similar services,  disable on-demand downloads. Configure the third-party service settings to always keep files on the device.

## Remove your vault from a third-party sync service

If you're using Obsidian Sync and realize that you've set up your vault in a folder synced by a third-party service, you can use the following steps to move the vault to a safer location.

### Desktop

#### Option 1: Move your vault using the vault switcher

1. In the bottom-left corner, select **Open another vault** ( ![[obsidian-icon-vault-switcher.svg#icon]] ).
2. Next to the vault you want to move, select **More options** ( ![[lucide-more-horizontal.svg#icon]] ). 
3. Choose a new location for the vault on your file system.

#### Option 2: Move your vault manually
  
1. Make backups of your vault. Copy your vault folder another location that you won't touch throughout the rest of this operation.
2. Quit Obsidian.  
3. Cut and paste (or move using drag and drop) your vault folder from the old location to your newly-selected vault location Don't put it in a folder that is being synced by another service.
4. Make sure your backup folder contains your vault.  
5. Relaunch Obsidian.  
6. At the bottom left, select **Open another vault** ( ![[obsidian-icon-vault-switcher.svg#icon]] ).
7. Select **Open folder as vault**.
8. Navigate to your vault's new location and choose your vault folder.  
9. Check and make sure the vault looks the same. You might have to re-enable community plugins under **Settings → Community Plugins → Turn restricted mode off**.)  
10. Set up Obsidian Sync again.


### Mobile

On Android, the majority of distributions will install directly to the filesystem, and the steps to relocate the vault are identical to those outlined in [[#Option 1 Move your vault using the vault switcher|move your vault using the vault switcher]].

#### iOS

1. Make a backup of your vault.
2. On your device, create a new vault and disable **Save in iCloud Drive**.
3. Force quit the Obsidian app on all your devices to prevent Sync from performing any operations while you move the files.
4. On your iOS device, open the Files app.
5. Under **iCloud Drive → Obsidian**, long-press on the vault folder and then select **Move**.
6. Navigate to **On My iPhone → Obsidian**. Make sure that you can see the vault you created earlier.
7. Press **Copy**.
5. After the vault has been copied, navigate back to **iCloud Drive → Obsidian**. 
6. Delete your vault folder.

The next time you open Obsidian, your vault now has a vault icon instead of a cloud, indicating it's no longer on iCloud Drive.
