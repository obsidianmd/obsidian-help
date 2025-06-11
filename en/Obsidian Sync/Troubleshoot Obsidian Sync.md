---
aliases:
cssclasses:
  - soft-embed
description: This page lists uncommon issues you may encounter with Obsidian Sync and how to resolve them.
mobile: true
permalink: sync/troubleshoot
publish: true
---

This page lists uncommon issues you may encounter with [[Introduction to Obsidian Sync|Obsidian Sync]] and how to resolve them. Before proceeding, we recommend reviewing the [[Status icon and messages]] and [[Frequently asked questions]] pages.

## General

### Conflict resolution

A conflict occurs when changes are made to the same note on two or more devices before they have synced. For example, if you edit a note on your computer and, before that change uploads, you also modify the same note on your phone.

Conflicts are more common when working offline, as there are more changes and longer periods between syncs, increasing the chance of conflicts.

When Obsidian Sync detects a conflict between the local and remote versions of a note, it merges the changes using Google's [diff-match-patch](https://github.com/google/diff-match-patch) algorithm.

For conflicts in Obsidian settings, such as plugin settings, the process is different. Obsidian Sync merges the JSON files by applying keys from the local JSON on top of the remote JSON.

> [!help] To check when conflicts occurred, filter for "Merge Conflicts" in the [[Status icon and messages#Sync log|Sync log]].

###  Sync deleted a note I just created on two devices

Obsidian Sync typically attempts to [[#Conflict resolution|resolve conflicts]] by merging conflicting notes across devices. However, issues can occur for users who _automatically generate_ or _modify notes_ on startup, such as with [[Daily notes]] or when using the community plugin [Templater](https://github.com/SilentVoid13/Templater).

If a note is created locally on one device and, within a couple of minutes, Sync downloads a remote version of that same note, Sync will retain the remote version without merging the two. In this case, you can recover the local version using [[File recovery]].

### Sync will not Sync my plugins and settings updates

Obsidian [[Frequently asked questions#Does Obsidian Sync live-reload my settings?|does not live-reload all settings]]. After updating settings or plugins, you'll need to restart Obsidian on other devices to reflect the changes. On mobile devices, a force-quit of the app may be necessary.

> [!example] Changing a theme
> - On your primary device (usually a computer), you change your theme back to the default from a custom theme.
> - The Sync log confirms the updated files were sent to the remote vault, but your mobile device still shows the custom theme.
> - On the mobile device, check the Sync log to confirm receipt of the updated `appearance.json` file.
> - Reload or Restart Obsidian on the mobile device.
> - After reloading or restarting, the mobile device should display the same theme as your computer.

### My files keep disappearing from Sync as soon as I restore it

This issue is most commonly seen on Windows, where Windows Defender may quarantine files with code blocks, causing certain notes to disappear.

Another frequent cause is double-syncing, where Obsidian Sync is running alongside another syncing service.

![[Switch to Obsidian Sync#Move your vault out of your third-party syncing service or cloud storage]]

---

Finally, this can happen when a file is restored on one device, but then removed from a secondary device due to [[Status icon and messages#Skipped messages|illegal characters]] in the filename.

## Android

**My device is deleting my attachments I receive through Sync**

This issue is likely due to Google or Android Photos managing your attachments. To prevent the system from altering files received via Sync, add a `.nomedia` [file to your vault](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) on your Android device.

> [!tip] The community plugin [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) simplifies this process. Install it on your Android phone, as `.nomedia` files are not synced across devices through Obsidian Sync.
