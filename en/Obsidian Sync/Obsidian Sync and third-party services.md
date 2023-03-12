[[Introduction to Obsidian Sync|Obsidian Sync]] is a service for syncing your notes across devices. While it offers helpful features like [[Version history|restoring notes]], it's not designed to be used to back up your vault.

Though we recommend that you regularly back up your vault, be aware that **using a third-party syncing service together with Obsidian Sync may result in data corruption or data loss**.

If you set up the same third-party service on multiple devices, such as your phone, you risk having the service competing with Obsidian Sync whenever you make changes to your vault. This can lead to conflicts, duplicated files, or corrupted files.

To back up your vault using a third-party service, configure the service so that backups are only made from your primary device. For example, if you do most of your writing on your laptop, that's where you should configure your backups. 

We recommend using a dedicated backup service that doesn't automatically update data on your local device from your backup.

> [!important] Files On-Demand
> Some cloud storage services, such as OneDrive, allow you to only download files when you use them and later remove them locally to free up space. Since the files are no longer available locally, Obsidian Sync believes they've been deleted and removes them from your remote vault.
>
> To use Obsidian Sync together with Files On-Demand and similar features, make sure to configure the service to always keep the files on the device.

> [!QUESTION]- How do I move my vault out of iCloud Drive?
> > [!INFO]- Move your vault out of iCloud Drive on macOS
> > - Open the [[Vault Switcher]], right-click on the vault or tap the three dots, and select "Move vault."  
>   > 
> > If that doesn't work (e.g., if you are trying to move your vault across different drives):  
> > 1. Quit the Obsidian app.  
> > 2. Navigate to iCloud Drive → Obsidian in Finder  
> > 3. Drag the vault folder to another non-cloud-sync'd location on your file system.  
> > 4. Open the Obsidian app.  
> > 5. If your vault doesn't open immediately, you may have to use the vault picker's "Open folder as vault" feature, then navigate to your vault's new location and open it.  
>   
> > [!INFO]- Move your vault out of iCloud Drive on iOS
> > 1. Make a backup of your vault somewhere (just in case).  
> > 2. On your Obsidian device, create a new, temporary vault, and make sure "Save in iCloud Drive" is **not** enabled. (This is to make sure the app container folder we'll use in the next step exists. You'll delete this fake vault in a moment.)  
> > 3. Force quit the Obsidian app on all iOS devices and quit the app on any desktops. (This is to prevent Sync from doing anything while we move our files.)  
> > 4. On your iOS device, go into the Files app, navigate to iCloud Drive → Obsidian, and long-press on your vault's folder. Select Move, and navigate to On My iPhone → Obsidian. (You should see the fake vault you created in step 2 here.) Press "Copy."  
> > 5. Once the copying is finished: still in the Files app, navigate back to iCloud Drive → Obsidian. Delete your vault folder there.  
> > 6. Open the Obsidian app. You should be presented with the vault picker and your vault should now have a vault icon instead of a cloud, indicating it is no longer on iCloud Drive.
