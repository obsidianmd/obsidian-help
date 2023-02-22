This help article is legacy and only serves as a bridge to avoid breaking links. For information on the mobile app, please see [[Sync your notes across devices]].

## Sync

For information on syncing on the Android app, please see [[Sync your notes across devices#Sync notes on Android|Sync notes on Android]].

## Storage permissions

When starting Obsidian, you may notice that it prompts for permission to access your device's documents and media.

In an ideal world, we'd prefer to only ask for access rights to the vault folders you choose. However, Android's privacy-friendly file permission API (also known as "scoped storage") has a few restrictions that makes it impossible for Obsidian to function properly.

The two biggest roadblocks are:

- Scoped storage performs many extra permission checks for every single file access, causing significant performance degradation when opening and using Obsidian.
- Scoped storage doesn't provide a way to watch for external changes, which is critical when using Obsidian with a third-party syncing tool.

Google specifically gives instructions for developers of this kind of apps a special permission. Obsidian belongs to two categories in the list of exceptions: "document management apps", and "on-device file search". [Read more about it here.](https://developer.android.com/training/data-storage/manage-all-files)
