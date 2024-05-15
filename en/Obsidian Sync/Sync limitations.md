---
aliases:
  - Limitations
  - Sync limitations
  - Sync FAQ
---
This page lists some of the common questions related to questions and limitations for [[Introduction to Obsidian Sync|Obsidian Sync]].

## General

### What operating systems does Obsidian Sync support?

Obsidian Sync supports every platform that Obsidian can run on. Currently that means Windows, macOS, Linux, Android and iOS.

#### Does Obsidian work with Apple's Lockdown Mode?

Obsidian will work with [Lockdown Mode](https://support.apple.com/en-us/105120) so long as Obsidian is added as an exclusion. Some individual users with edge cases experience problems using Obsidian with lockdown mode. 

### What type of data will sync?

By default your Obsidian notes, images, and your [[Configuration folder]] will sync. 

You can add additional syncing options of PDF's, audio files, video files, and other files when you [[select files and settings to sync]].

### How much storage do I have?

The storage limit depends on your Obsidian Sync plan. The maximum storage amount is 100 GB. This storage limit includes [[Version history|version history]]. 

You can view **Storage usage** in the Obsidian app by going to **Settings → Sync**.

### How many remote vaults can I have?

Each account with Obsidian Sync can have up to 10 remote vaults.

### How large can each remote vault be?

You can allocate your storage any way you want across all your vaults. 

### How many people can I share this remote vault with?

You can [[Collaborate on a shared vault|share a remote vault]] with up to 10 people.

### How large can each file be?

The maximum file size depends on your [[Plans and storage limits|Obsidian Sync plan]]. For the Standard plan the limit is 5 MB. For the Plus plan the limit is 200 MB per file.

### Is my data being synced in the background?

No, files are only synced when Obsidian is running.

### Does Obsidian Sync live-reload my settings?

No, plugins, settings, and theme updates from one device, will require a restart of the application on the other devices once the update is received. 

### Can I use a third-party sync with Obsidian Sync?

We do not recommend using a third-party sync service alongside Obsidian Sync. Using the same third-party service and Obsidian Sync on multiple devices can lead to conflicts, resulting in duplicate or corrupted files.

Cloud storage services like OneDrive and Dropbox offer "Files on-demand" or "Online-only files" features, which download files only when needed and remove them locally to save space. However, since these files are not always available locally, Obsidian Sync will interpret them as deleted, leading to their removal from your remote vault.
 
To avoid these issues, disable on-demand downloads when using Obsidian Sync with services like OneDrive or Dropbox. You will need to ensure that the third-party service settings are configured to always keep files on the device.

## Data retention

 
These are commonly asked questions on Obsidian's data retention. For more in depth answers, see [[Obsidian Sync/Security and privacy|Security and privacy]].

### How long do you keep the version history?

[[Version history]] depends on your [[Plans and storage limits|Obsidian Sync plan]]. On the Standard plan your notes are retained for 1 month. On the Plus plan your notes are retained for 12 months. After this period of time the older versions are deleted.

Older versions of [[Attachments|attachments]] are stored for two weeks.

### How long do you keep my data after my subscription expires?

We keep data in your remote vaults, including version history, for one month after your subscription expires. Any local vaults on your devices are unaffected.

As long as you renew within one month, there should be no impact on your usage. If you renew after a month, when your remote vaults have been removed, you can [[Set up Obsidian Sync|create a new remote vault]] and connect your local vault.

### Do you keep my data if I refund my subscription service?

No. The data is deleted immediately from Obsidian Sync servers. Data in your [[Local and remote vaults|local vault]] is not affected.
