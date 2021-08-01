File recovery is a core plugin to help you recover your data in case of all kind of accidents - user error, power outage, or misbehaving plugins and scripts.

File recovery is default to enabled, because it's too late to enable when you've already lost data.

## How it works

### Snapshots

As long as this plugin is enabled, full snapshots of what you're working on get saved at fixed intervals (you can configure this interval). Snapshots get deleted after a fixed amount of retention time.

This process is automatic. By default, snapshots are made every 5 minutes, and snapshots are kept for 7 days.

### Recovering

In case of data loss, here's how you can find saved snapshots:

1. Open settings;
2. Open the "File recovery" tab under "Plugin options";
3. Click on the "View" button in "Snapshots" section;
4. In the search bar on the left, enter the name of file you want to recover. If the file name does not show it, it means no snapshots were saved for that file;
5. After selecting a file in the dropdown, a list of snapshots will appear on the left. Select the one you want to recover;
6. The content of that snapshot will show up on the right. You can click "Copy to clipboard" to copy the whole thing, or cherry-pick some of the content.

## Options

### Snapshot interval

Minimal number of minutes between two snapshots. Default is 5 minutes.

### History length

Number of days to keep snapshots around for. Default is 7 days.

### Clear history

You also have the option to wipe all history. ==Please be careful as this action is irreversible.==

## Data storage

The file recovery data is stored in [[How Obsidian stores data#System directory|system directory]] in case of vault malfunctioning.

Please note that vaults are identified by their absolute path. If you've moved vault, you will need to move it back to its previous position in order to restore the snapshots while the vault was there.