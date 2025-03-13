---
aliases:
  - Sync status icon
  - Sync Icon
  - Sync Log
description: This page explains the Obsidian Sync status icons and provides details about the sync log.
mobile: true
permalink: sync/messages
publish: true
---

Obsidian Sync provides several elements to indicate sync status, mainly the [[#Sync status icon]] and [[#Sync log]]. Details about version control in Obsidian Sync are covered in the [[Version history]] page.

## Sync status icon

The Sync status icon is located in the [[Status bar]] on the desktop version and in the [[Sidebar#Open hidden sidebars|right sidebar]] on mobile and tablet. The icon reflects various sync states:

- ![[obsidian-icon-sync-synced.svg#icon]] **Synced**: Obsidian Sync has fully synced your files. This icon is typically green.
- ![[obsidian-icon-sync-syncing.svg]] **Syncing**: Obsidian is currently updating the remote vault. This icon is usually purple.
- ![[obsidian-icon-sync-paused.svg#icon]] **Paused**: Syncing has been paused, but Obsidian is still connected to the remote vault. The icon is typically purple.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Disconnected**: The Sync core plugin is active, but the [[Local and remote vaults|local vault]] is not connected to a remote vault. This icon is typically red.

Clicking or tapping the icon opens a context menu with the following options:
- ![[obsidian-icon-sync-paused.svg#icon]] Pause (or ![[lucide-circle-play.svg#icon]] Resume if paused)
- ![[lucide-history.svg#icon]] [[Version history]] (Greyed out if not viewing a note)
- ![[lucide-align-left.svg#icon]] Open [[#Sync log|Sync log]]
- ![[lucide-trash-2.svg#icon]] [[Version history#Restore a deleted file|Deleted files]]
- ![[lucide-cog.svg#icon]] [[Sync settings and selective syncing|Sync settings]]

## Sync log

Obsidian Sync includes a detailed Sync log that tracks interactions between your files and the remote vault. Whether files are being uploaded, deleted, or encountering issues like account expiration or merge conflicts, these logs provide key troubleshooting information.

> [!warning] The Sync log does not persist after Obsidian is closed. If you encounter an issue, ensure you copy the log _before_ closing the app.

The log categorizes messages into the following types:

- [[#General messages]]
- [[#Error messages]]
- [[#Skipped messages]]
- [[#Account messages]]

You can filter the Sync log by **All**, **Errors**, **Skipped**, and **Merge Conflicts**. Additionally, you can search the Sync log using the search box in the Sync window.

> [!summary] We have included some of the likely messages you have come across below. The list is not exhaustive. If you are experiencing an issue and have a sync log message you are not sure about, [[Help and support#Contact Obsidian support|contact Obsidian support]].

### General messages

These are common day-to-day messages you might encounter. 

**Connecting to server**  
Obsidian is trying to connect to your remote vault's [[Obsidian Sync/Security and privacy#Where can I find my current Sync server and where is it hosted?|Sync server]].

**Connected to server. Detecting changes...**  
Obsidian has established a connection and is comparing the local vault with the remote vault to determine if changes are needed.

> [!info] This message can also indicate other potential Sync issues. If you see it repeatedly and believe there are still items to sync, [[Help and support#Contact Obsidian support|contact Obsidian support]].

**Fully synced**  
- The local and remote vaults are fully synchronized.

**Merging conflicted file**  
A conflict was detected during syncing, and the file was merged rather than overwritten. See [[Troubleshoot Obsidian Sync#Conflict resolution|conflict resolution]] for more information. If the merge is unwanted, you can restore previous versions via [[Version history]] or [[File recovery]].

**Rejected server change**  
The changes on the remote vault are older than the version on your local device, so the local version is kept and the remote change is ignored. 

### Error messages

These are messages detailing an error in syncing a file.

**Out of memory**  
This issue typically occurs on mobile devices when there isn't enough storage space or memory available to download a file. It's most common with large files, such as videos.

### Skipped messages

These are messages detailing what was skipped, and potentially why. 

**Unable to download file with illegal name**

The file contains a [special character or naming convention](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) that is not allowed on the receiving operating system. For ease, you can rename the file on it's source device to remove all special characters but `-` and `_`.

Note that this also includes files with multiple periods `.` in their name on Android devices. 

### Account messages

These are messages related to a change in your subscription or account. 

**Vault limit exceeded**  
Your account has exceeded the [[Frequently asked questions#How large can each remote vault be|maximum storage size]]. Attachments and version history contribute to this size. Even if your vault seems smaller than the limit, older versions and files can push it over.

To reduce vault size:
1. Open **Settings → Sync**.
2. Use the options under **Vault size over limit** to remove large files.

**Vault not found**  
`{"res":"err","msg":"Vault not found."}`

This error may occur in these cases:

1. The vault was deleted from another device.
2. The sync subscription was inactive for over 30 days, causing the remote vault to be removed.
3. The subscription was canceled or refunded, resulting in the remote vault's deletion.
 
In these cases, you'll need to [[Set up Obsidian Sync#Disconnect from a remote vault|disconnect from the remote vault]] and [[Set up Obsidian Sync#Create a new remote vault|create a new remote vault]], ensuring your local data is preserved.

**Your subscription to Obsidian sync has expired.**  
Your account is now in a fully expired status as we were unable to process the payment on file. 

To continue using Obsidian Sync, you will need to resubscribe within [your account](https://obsidian.md/account/sync).

### Network messages

**Disconnected from server**
`Unable to connect to server`

Obsidian Sync has disconnected from the Sync server for an unknown reason. Sync will attempt to reconnect to the server periodically.

On iOS, this message displays as the following error:
`Null is not an object (evaluating 'this.socket.send')`

It means exactly the same as the `Unable to connect to server` message, and is not in any way indication that something else is wrong. 
