File recovery helps you recover your work in the case of unintentional data loss, by regularly saving snapshots of your notes.

To avoid taking up too much space, Obsidian keeps snapshots for a certain number of days before deleting them.

> [!note] 
> By default, snapshots are saved a minimum of 5 minutes from each other, and kept for 7 days. You can configure both intervals under **Settings → File recovery**.

Snapshots are kept in the [[How Obsidian stores data#System directory|system directory]], outside of the vault, to account for vault-related data loss. This means that snapshots are stored with the absolute path to the note. If you've moved your vault recently, you may need to move it back to the location where it was when the snapshot was taken.

## Recover a snapshot

1. Open **Settings**.
2. In the sidebar, click **File recovery** under **Plugin options**.
3. Next to **Snapshots**, click **View**.
4. In the upper-**left** text box, start typing the name of the file you want to recover, and you'll see a suggestion list. 
5. Select the file, press Enter, and you'll see a list of snapshots available.
6. Select the snapshot you want to recover.
7. Click **Copy to clipboard** to copy the snapshot.
8. Paste the snapshot in the original note, or in a new note if you want to compare them.

## Clear snapshot history

**Caution:** Clearing the snapshot history irreversibly deletes all snapshots in your vault.

1. Open **Settings**.
2. In the sidebar, click **File recovery** under **Plugin options**.
3. Next to **Clear history**, click **Clear**.
4. Confirm that you want to delete all snapshots, by clicking **Clear**.
