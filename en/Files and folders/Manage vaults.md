---
aliases:
  - User interface/Vault switcher
  - How to/Working with multiple vaults
  - Vault switcher
---
A **vault** is a folder on your file system which contains your notes, [[attachments]], and the [[configuration folder]] with Obsidian-specific settings. For more information on vaults, refer to [[How Obsidian stores data]].

You can manage your vaults using the **Vault switcher**. The *Vault profile* opens the first time you open Obsidian.

To open the vault switcher from an existing vault, select **Vault profile** ( ![[lucide-chevrons-up-down.svg#icon]]) at the bottom of the [[Sidebar|left sidebar]]. Or, select **Open another vault** from the [[command palette]].

## Create new vault

1. On your computer, open Obsidian.
2. At the bottom left, select the **Vault profile** ( ![[lucide-chevrons-up-down.svg#icon]]).
3. A context menu will pop up. Select **Manage Vaults...**.
3. To the right of **Create new vault**, select **Create**.
4. In **Vault name**, enter the name of your vault.
5. Click **Browse** to select where your new vault will be created.
6. Click **Create**.

## Create vault from an existing folder

1. On your computer, open Obsidian.
2. At the bottom left, select the **Vault profile** ( ![[lucide-chevrons-up-down.svg#icon]]).
3. A context menu will pop up. Select **Manage Vaults...**.
3. At the right of **Open folder as vault**, click **Open**.
4. In the file browser, select the folder you want to use as your vault.
5. Click **Open**.

> [!tip] Open vault from Obsidian Sync
> If you want to open a remote vault using Obsidian Sync, refer to [[Set up Obsidian Sync on another device]].

## Rename vault

Since the name of a vault and the underlying folder are the same, renaming a vault also renames the folder.

1. On your computer, open Obsidian.
2. At the bottom left, select the **Vault profile** ( ![[lucide-chevrons-up-down.svg#icon]]).
3. A context menu will pop up. Select **Manage Vaults...**.
4. In the vault list, select **More options** ( ![[lucide-more-horizontal.svg]] ) next to the vault you want to rename.
5. Select **Rename vault**.
6. Enter the new name for the vault, and press `Enter`.

## Move vault to a different folder

1. On your computer, open Obsidian.
2. At the bottom left, select the **Vault profile** ( ![[lucide-chevrons-up-down.svg#icon]]).
3. A context menu will pop up. Select **Manage Vaults...**.
4. In the vault list, select **More options** ( ![[lucide-more-horizontal.svg]] ) next to the vault you want to move.
5. Select **Move vault**, and then select the new location.

Some operating systems do not allow the vault to be moved with the Vault Switcher. In these cases, move your vault manually:

1. Close Obsidian.
2. Move your vault folder to a new location, avoiding folders synced by other services.
3. Reopen Obsidian.
4. Click the **Vault profile** icon at the bottom left ( ![[lucide-chevrons-up-down.svg#icon]]).
5. From the pop-up menu, select **Manage Vaults...**.
6. Next to **Open folder as vault**, click **Open**.
7. Navigate to and select your new vault folder.
8. Click **Open**.
9. Verify that the vault contents are unchanged. If necessary, re-enable community plugins by navigating to **Settings → Community Plugins → Turn restricted mode off**.

## Remove vault

Removing a vault only removes it from the vault list. 

1. On your computer, open Obsidian.
2. At the bottom left, select the **Vault profile** ( ![[lucide-chevrons-up-down.svg#icon]]).
3. A context menu will pop up. Select **Manage Vaults...**.
4. In the vault list, select **More options** ( ![[lucide-more-horizontal.svg]]) next to the vault you want to move.
5. Select **Remove from list**.

## Transfer settings to another vault

To use the same settings for another vault, use your preferred file manager (or terminal) to copy the `.obsidian` folder from the root of the source vault to the root of the destination vault.

You may need to restart Obsidian to apply the changes.

> [!note] Where do I find the `.obsidian` folder?
> By default, most operating systems hide folders starting with a period (`.`). For more information about the `.obsidian` folder and how to access it, refer to [[How Obsidian stores data#Vault settings|vault settings]] and [[Configuration folder|config folders]].
