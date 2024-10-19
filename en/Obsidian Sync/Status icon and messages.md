---
aliases:
  - Sync Status Icon
  - Sync Icon
  - Sync Log
publish: false
---

Obsidian Sync provides several elements to indicate sync status, mainly the [[#Sync status icon]] and [[#Sync log]]. Details about version control in Obsidian Sync are covered in the [[Version history]] page.

## Sync status icon

The Sync status icon is located in the [[Status bar]] on the desktop version and in the [[Sidebar#Open hidden sidebars|right sidebar]] on mobile and tablet. The icon reflects various sync states:

- ![[obsidian-icon-sync-synced.svg#icon]] **Synced**: Obsidian Sync has fully synced your files. This icon is typically green.
- ![[obsidian-icon-sync-syncing.svg]] **Syncing**: Obsidian is currently updating the remote vault. This icon is usually purple.
- ![[obsidian-icon-sync-paused.svg#icon]] **Paused**: Syncing has been paused, but Obsidian is still connected to the remote vault. The icon is typically purple.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Disconnected**: The Sync core plugin is active, but the [[Local and remote vaults|local vault]] is not connected to a remote vault. This icon is typically red.

## Sync log

Obsidian Sync includes a Sync log which details what is happening with your files when they interact with the remote vault. Are they being uploaded? deleted? Is your account expired? Were there merge conflicts? These logs provide valuable troubleshooting information.

> [!warning] The Sync log currently does not persist when Obsidian is closed. If you experience an issue, please make sure to copy your Sync log *before* you close Obsidian. 


