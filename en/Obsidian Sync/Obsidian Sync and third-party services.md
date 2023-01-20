[[Introduction to Obsidian Sync|Obsidian Sync]] is a service for syncing your notes across devices. While it offers helpful features like [[Version history|restoring notes]], it's not designed to be used to back up your vault.

Though we recommend that you regularly back up your vault, be aware that **using a third-party service together with Obsidian Sync may result in data corruption or data loss**.

To back up your vault using a third-party service, configure the service so that backups are only made from your primary device. For example, if you do most of your writing on your laptop, that's where you should configure your backups.

If you set up the same third-party service on multiple devices, such as your phone, you risk having the service competing with Obsidian Sync whenever you make changes to your vault. This can lead to conflicts, duplicated files, or corrupted files.

> [!important] Files On-Demand
> Some cloud storage services, such as OneDrive, allow you to only download files when you use them and later remove them locally to free up space. Since the files are no longer available locally, Obsidian Sync believes they've been deleted and removes them from your remote vault.
>
> To use Obsidian Sync together with Files On-Demand and similar features, make sure to configure the service to always keep the files on the device.
