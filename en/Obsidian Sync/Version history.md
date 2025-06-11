---
aliases:
  - Sync history
  - Sync Sidebar
cssclasses:
  - soft-embed
description: Obsidian Sync keeps a record of all changes made to your notes and regularly checks for updates and creates new versions of your notes.
mobile: true
publish: true
---
[[Introduction to Obsidian Sync|Obsidian Sync]] regularly checks for updates to your [[Sync settings and selective syncing|synced files]], keeping a record of any changes. These are stored as new entries in the [[#Version history]]. This information can be accessed in a few ways:

- [[#Sync history]]
- [[#Version history]]

While not part of Obsidian Sync, a local version history is also available on each device if the [[File recovery]] plugin is enabled.

## Sync history

The Sync history (or Sync sidebar) feature, introduced in Obsidian version 1.7, allows you to quickly view recently created or modified notes and attachments that have been synced. You can also think of it as an _editing_ history.

In the sidebar, you can select an item to open its file in your active window. The items also have context menus, allowing you to perform actions such as moving the file or viewing its [[#Notes and attachments|Version history]].

> [!compatibility] Desktop-only feature
> When you hover over a synced file in the sidebar, you can see who last edited the file. This is especially useful if you are [[Collaborate on a shared vault|collaborating]] on a shared vault.

> [!tip] 
> Settings and deleted items will not appear in the Sync history sidebar. These can be found in the [[#Notes and attachments|Version history]] instead.

### Show Sync history

When you enable the [[Introduction to Obsidian Sync|Sync]] core plugin, Sync history is automatically enabled but does not appear in the sidebar by default. You will need to manually add it using a command or a hotkey.

#### Enable via Command palette

> [!info] This option requires the [[Command palette]] core plugin to be enabled.

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]

1. Open the **Command palette**. ( ![[lucide-terminal.svg#icon]] )
2. Type "Sync".
3. Select the "Sync: Show Sync history" option.

Sync history will then appear in the [[Sidebar|right sidebar]].

**Mobile** ![[obsidian-smartphone.svg#icon]]

1. Open the [[Ribbon]] ( ![[lucide-menu.svg#icon]] ).
2. Open the **Command palette**. ( ![[lucide-terminal.svg#icon]] )
3. Type "Sync".
4. Select the "Sync: Show Sync history" option.

Sync history will then appear as a dropdown option in the [[Sidebar|right sidebar]].

#### Enable via Hotkey

1. Open **Settings**.
2. In the **Options** category, select **Hotkeys**.
3. In the hotkeys search bar, type "Sync".
4. Next to "Sync: Show Sync history," assign your preferred hotkey.

## Version history

In addition to the [[#Sync history]], Obsidian also maintains a version history for restoring notes and attachments. If you accidentally delete a note or want to revert to a previous version, you can restore it from the version history.

The retention period for your version history depends on your [[Plans and storage limits|Obsidian Sync plan]]. On the Standard plan, notes are retained for 1 month, while on the Plus plan, they are kept for 12 months. After this period, older versions of your notes are deleted. 

For [[Attachments|attachments]], older versions are stored for <u>two weeks</u>.

![[Collaborate on a shared vault#^version-history-image]]

### Notes and attachments

The process for restoring both notes and attachments is the same. 

#### View version history of a file

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]
1. In the **File explorer**, select the note you want to restore.
2. Select **Open version history**.
3. Select the version of the note you want to view on the left. The contents will be displayed on the right. 

**Mobile** ![[obsidian-smartphone.svg#icon]]
1. In the **File explorer**, select the note you want to restore.
2. Long press to bring up the context menu.
3. Select **Open version history**.
4. In the pop-up menu, select the version of the note you want to view. 
5. Once selected, the contents of the note will be available to review.

#### View version history of a deleted or renamed file

1. Open **Settings**.
2. In the sidebar, under **Core plugins***, select **Sync**.
3. Next to **Deleted files**, select **View**.
4. Select the note you want to view the version history for.
5. In the version history pop-up, select the version of the note you want to view on the left. 

#### Restore a previous version of a file

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]
1. In the **File explorer**, select the note you want to restore.
2. Select **Open version history**.
3. Select the version of the note you want to restore on the left. The contents will be displayed on the right.
4. Select the **Restore** button.
5. The note contents will be replaced with the restored version.

**Mobile** ![[obsidian-smartphone.svg#icon]]
1. In the **File explorer**, select the note you want to restore.
2. Long press to bring up the context menu.
3. Select **Open version history**.
4. In the pop-up menu, select the version of the note you want to restore.
5. Once selected, the contents of the note will be available to review.
6. Select the **Restore** button.
7. The note contents will be replaced with the restored version.

#### Restore a deleted file

1. Open **Settings**.
2. In the sidebar, under **Core plugins***, select **Sync**.
3. Next to **Deleted files**, select **View**.
4. Choose the note you want to restore.
5. In the list of versions to the left, select the version you want to restore.
6. Select the **Restore** button on the right.
7. The note will be restored to its original location in the filesystem.

> [!tip] You can select multiple notes with **bulk restore** by selecting the checkboxes, or using `shift+click`. These files will not be able to be reviewed in this menu. 

### Settings history

Obsidian Sync also keeps track of the changes made to your vault configuration settings. 

#### View version history of a setting

1. Open **Settings**.
2. In the sidebar, under **Core plugins***, select **Sync**.
3. Navigate down to **Vault configuration sync**. 
4. Select the **View** button next to **Settings version history**.
5. In the **Settings File** pop-up, choose a settings file you want to view.  

#### Restore a previous version of a setting

1. Open **Settings**.
2. In the sidebar, under **Core plugins**, select **Sync**.
3. Navigate down to **Vault configuration sync**. 
4. Select the **View** button next to **Settings version history**.
5. In the **Settings File** pop-up, choose a settings file you want to view.  
6. In the changes window, select the **Restore** button.
7. Reload or restart Obsidian to have the setting take effect. For more details, refer to the instructions in [[Set up Obsidian Sync#Adjust Obsidian Sync settings|Adjust Obsidian Sync settings]].
