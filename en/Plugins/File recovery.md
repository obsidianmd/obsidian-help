---
aliases:
description: File Recovery helps protect your work from unintentional data loss by automatically saving snapshots of your notes at regular intervals. 
mobile: true 
permalink: plugins/file-recovery
publish: true 
---

File recovery is a [[Core plugins|core plugin]] that protects your work from accidental deletions, file corruption, or unwanted changes by automatically saving complete snapshots of your notes at regular intervals. File recovery is not a complete backup solution, and we recommend also [[Back up your Obsidian files|backing up]] your Obsidian files separately.

To avoid taking up [[#Storage and performance|too much space]], Obsidian keeps snapshots for a certain number of days before deleting them. Snapshots capture the full content of your files, not just changes, allowing you to restore any previous version.

> [!note] By default, snapshots are saved a minimum of 5 minutes from each other, and kept for 7 days. You can configure both intervals under **Settings → Core plugins → File recovery**.

Snapshots are kept in the [[How Obsidian stores data#Global settings|Global settings]], outside of the vault, to account for vault-related data loss. This means that snapshots are stored with the absolute path to the note. If you've moved your vault recently, you may need to move it back to the location where it was when the snapshot was taken.

> [!tip] If you are using [[Introduction to Obsidian Sync|Obsidian Sync]] or [[Sync your notes across devices|other syncing services]], File recovery snapshots will not sync between devices. Snapshots are device-specific and remain local to each device.

## Recover a snapshot

1. Open **Settings**.
2. In the sidebar, select **File recovery** under **Core plugins**.
3. Next to **Snapshots**, select **View**.
4. In the file name field, start typing the name of the file you want to recover, and you will see a suggestion list.
5. Select the file, press Enter, and you'll see a list of snapshots available.
6. Select the snapshot you want to recover.
    1. If you wish to copy and paste into a new note, select the **Copy** button.
    2. If you wish to restore the file completely, select the **Restore** button.
7. You can optionally show the differences between snapshots by toggling **Show changes**. This displays what content was added, removed, or modified between snapshot versions.

## Clear snapshot history

> [!danger] Clearing the snapshot history irreversibly deletes all snapshots in your vault.

1. Open **Settings**.
2. In the sidebar, select **File recovery** under **Core plugins**.
3. Next to **Clear history**, select **Clear**.
4. Confirm that you want to delete all snapshots, by clicking **Clear**.

## Storage and performance

File recovery snapshots typically use minimal disk space, as they only store changed files. However, in vaults with many large files or frequent edits, snapshots can accumulate over time. Monitor your storage usage and adjust the retention period if needed.

## Limitations

- **Apple Lockdown mode**: This feature is unavailable on Apple devices with [Lockdown mode](https://support.apple.com/en-us/105120) enabled unless Obsidian is exempted.
- **File types**: Only `.md` and `.canvas` files can be restored using File recovery.
- **Vault location**: If you move your vault to a different location without using the [[Manage vaults#Move vault to a different folder|vault switcher]], existing snapshots may not be accessible.

