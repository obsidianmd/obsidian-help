---
aliases:
  - Obsidian Sync/Obsidian Sync and third-party services
  - Obsidian Sync/Back up your vault
  - backup
permalink: backup
---
If you haven't backed up your computer yet, start now! Obsidian's [[File recovery]] plugin is useful but limited. It can only recover a certain amount of data, and it stores recovery information per device. For more robust protection, we recommend that you implement a proper backup system.

**Why back up your data?**

By default, Obsidian stores your notes **locally** on your device, not in the cloud. This means the [data is fully yours](https://obsidian.md/about), giving you control over it. However, local storage can be affected by issues like corruption or data loss. It is never a matter of if, but when. Backing up your data protects against these inevitabilities and ensures you maintain control of your notes.

## Syncing is not a backup

Services like [[Introduction to Obsidian Sync|Obsidian Sync]], iCloud, OneDrive, and Dropbox help you sync your notes across different devices. While they may offer features like [[Version history|note restoration]], **they are not designed for backups**. Syncing keeps your notes updated, but it doesn’t protect against data loss.

- **Sync:** Syncing ensures your files are the same on all devices. When you change a file on one device, it updates on all synced devices. Syncing services do not have a "primary" device.
- **Backup:** A backup saves a copy of your data in a different location to help recover it in case of data loss or corruption. Backups are not meant for real-time updates or collaboration.

To properly back up your vault, use a dedicated backup tool that creates a one-way copy of your data. This tool will send your data to a safe backup location without changing the data on your device.

If you use multiple devices with syncing, choose **one device** to be your backup device. This is usually your main or "primary" device, the one you use the most. Note that most syncing services do not recognize any device as "primary"; this is just a concept to help you manage backups.

> [!Example] You use Obsidian Sync on your laptop, tablet, phone, and work desktop. You mostly use your vault on your work desktop, sometimes on your laptop, and rarely on your tablet or phone. In this case, your work desktop would be your "primary device" for backup.

## Use community plugins

While the Obsidian Team cannot officially endorse any specific plugin, we recognize two community plugins that have become popular among users for backing up their files:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Use this plugin to back up your vault by committing its contents to a [GitHub](https://github.com/) repository. It's an effective way to version control your notes and ensure their safety on a remote server. However, please be aware that your data will be stored on Github [[#Use cloud-based services|using this method]].
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** This plugin allows you to create local copies of your vault in a folder of your choice, with options for archival. You can even use a syncing folder, like a Dropbox folder, to combine local and cloud backups. This method **pairs well** with the backup options described below.

## Use cloud-based services

> [!info] It is not recommended that you keep your vault location in your chosen backup service.

Keeping your backup in the cloud is an alternative and a complement to physical data storage, instead of an external hard drive or USB stick. An external hard drive or USB stick can be lost or damaged. The biggest advantage of storing files in the cloud is that they are available anytime, anywhere. The downside is, most backup services are owned by a private company.

In terms of security, you should always pay close attention to access and security with cloud backups. [Worldbackupday](https://www.worldbackupday.com/en) keeps an up-to-date list of online backup services to consider using.

## Use external drives

**Hard drives and SSD drives**
External hard drive backups are still valuable in an increasing cloud-based world, and are mainly used for data storage and computer backups. The biggest disadvantage of an external drive is that the drive can break down or get lost. The biggest advantage is that the storage space only needs to be purchased once. Using an external hard drive is often combined with a [[#Use computer backups|computer backup]].

**USB flash drives**
Flash drives (also called thumb drives, memory sticks, or pen drives) are a simple and effective method for quick backups.

1. Insert the flash drive into your computer or laptop.
2. Ensure the device is recognized and mounted in your file system. If necessary, format the flash drive to be compatible with your filesystem.
3. Copy your vault folder from its current location onto the flash drive.
4. Safely unmount the flash drive.
5. Remove the flash drive from your device.

> [!tip] If your external drive contains sensitive information, it is recommended to keep the external drive secure, such as in a secured room.

## Use computer backups

Your operating system itself offer the ability to help create backups, whether online in the cloud, or in an external drive.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Backup with OneDrive or an external drive. You may also use [System restore](https://support.microsoft.com/en-us/windows/use-system-restore-a5ae3ed9-07c4-fd56-45ee-096777ecd14e).
- **[Mac](https://support.apple.com/en-us/104984)**: Backup to an external device with Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` to a directory or drive of choice.

## Next steps

This help page provides a brief overview of backup options, but it's not exhaustive. For more in-depth information, visit [Worldbackupday.com](https://www.worldbackupday.com/en) or ask other Obsidian users in [our community](https://obsidian.md/community) about their backup strategies!
