---
permalink: sync/faq
description: >-
  This page lists some of the common questions related to questions and
  limitations for Obsidian Sync.
publish: true
mobile: true
localized: null
aliases:
  - Frequently asked questions
---

This page lists some of the common questions related to questions and limitations for [[Introduction à Obsidian Sync|Obsidian Sync]].

## General

### What operating systems does Obsidian Sync support?

Obsidian Sync supports every platform that Obsidian can run on. Currently that means Windows, macOS, Linux, Android and iOS.

### Does Obsidian work with Apple's Lockdown Mode?

Obsidian can be used in [Lockdown Mode](https://support.apple.com/en-us/105120) as long as Obsidian is added as an exclusion.

### What type of data is synced?

By default your Obsidian notes, images, and your [[Dossier de configuration]] are synced. 

You can add additional syncing options of PDF's, audio files, video files, and other files when you [[Paramètres de Sync et synchronisation sélective]].

### How much storage do I have?

The storage limit depends on your Obsidian [[Forfaits et limites de stockage#Plans|Sync plan]]. The maximum storage amount is 100 GB. This storage limit includes [[Version history|version history]]. 

You can view **Storage usage** in the Obsidian app by going to **[[Paramètres]] → Sync**.

### How many remote vaults can I have?  

The number of remote vaults you can have is determined based on your [[Forfaits et limites de stockage#Plans|Sync plan]]. The Standard plan includes 1 vault, the Plus plan includes 10 vaults. Vaults shared with you do not count towards your vault limit.

### How large can each remote vault be?

There is no per-vault limit. The storage limit is tied to your used account and can be applied across all your vaults.

### How many people can I share a remote vault with?

You can [[Collaborer sur un coffre partagé|share a remote vault]] with up to 20 people.

### How large can each file be?

The maximum file size depends on your [[Forfaits et limites de stockage|Obsidian Sync plan]]. For the Standard plan the limit is 5 MB. For the Plus plan the limit is 200 MB per file.

### Is my data being synced in the background?

No, files are only synced when Obsidian is running.

### Does Obsidian Sync live-reload my settings?

Obsidian Sync can automatically reload certain settings, but there are some limitations. For more details, refer to [[Paramètres de Sync et synchronisation sélective#Reloading of settings|Reloading of settings]].

### Can I use a third-party sync with Obsidian Sync?

We do not recommend using a third-party sync service alongside Obsidian Sync. Using the a third-party service and Obsidian Sync on multiple devices can lead to conflicts, resulting in duplicate or corrupted files.

Cloud storage services like OneDrive and Dropbox offer "Files on-demand" or "Online-only files" features, which download files only when needed and remove them locally to save space. However, since these files are not always available locally, Obsidian Sync will interpret them as deleted, leading to their removal from your remote vault.
 
To avoid these issues, disable on-demand downloads when using Obsidian Sync with services like OneDrive or Dropbox. You will need to ensure that the third-party service settings are configured to always keep files on the device.

## Data retention

These are commonly asked questions on Obsidian's data retention. For more in depth answers, see [[Obsidian Sync/Sécurité et confidentialité|Security and privacy]].

### How long do you keep the version history?

[[Version history]] depends on your [[Forfaits et limites de stockage|Obsidian Sync plan]]. On the Standard plan your notes are retained for 1 month. On the Plus plan your notes are retained for 12 months. After this period of time the older versions are deleted.

Older versions of [[Pièces jointes|attachments]] are stored for two weeks.

### How long do you keep my data after my subscription expires?

We keep data in your remote vaults, including version history, for one month after your subscription expires. Any local vaults on your devices are unaffected.

As long as you renew within one month, there should be no impact on your usage. If you renew after a month, when your remote vaults have been removed, you can [[Configurer Obsidian Sync|create a new remote vault]] and connect your local vault.

### Do you keep my data if I refund my subscription service?

No. The data is deleted immediately from Obsidian Sync servers. Data in your [[Coffres locaux et distants|local vault]] is not affected.
