---
aliases:
  - User interface/Vault switcher
  - How to/Working with multiple vaults
  - Vault switcher
---
A **vault** is a folder on your file system which contains your notes, [[attachments]], and the [[configuration folder]] with Obsidian-specific settings. For more information on vaults, refer to [[How Obsidian stores data]].

You can manage your vaults using the **vault switcher**. The **vault switcher** opens the first time you open Obsidian.

To open the vault switcher from an existing vault, select **Open another vault** (vault icon) at the bottom of the [[Ribbon]]. Or, select **Open another vault** from the [[command palette]].

## Create new vault

1. On your computer, open Obsidian.
2. At the bottom left, select **Open another vault** ( ![[obsidian-icon-vault-switcher.svg#icon]] ).
3. To the right of **Create new vault**, select **Create**.
4. In **Vault name**, enter the name of your vault.
5. Click **Browse** to select where your new vault will be created.
6. Click **Create**.

## Create vault from an existing folder

1. On your computer, open Obsidian.
2. At the bottom left, select **Open another vault** ( ![[obsidian-icon-vault-switcher.svg#icon]] ).
3. At the right of **Open folder as vault**, click **Open**.
4. In the file browser, select the folder you want to use as your vault.
5. Click **Open**.

> [!tip] Open vault from Obsidian Sync
> If you want to open a remote vault using Obsidian Sync, refer to [[Set up Obsidian Sync on another device]].

## Rename vault

Since the name of a vault and the underlying folder are the same, renaming a vault also renames the folder.

1. On your computer, open Obsidian.
2. At the bottom left, select **Open another vault** ( ![[obsidian-icon-vault-switcher.svg#icon]] ).
3. In the vault list, select **More options** (three dots icon) next to the vault you want to rename.
4. Select **Rename vault**.
5. Enter the new name for the vault, and press `Enter`.

## Move vault to a different folder

1. On your computer, open Obsidian.
2. At the bottom left, select **Open another vault** ( ![[obsidian-icon-vault-switcher.svg#icon]] ).
3. In the vault list, select **More options** (three dots icon) next to the vault you want to move.
4. Select **Move vault**, and then select the new location.

## Remove vault

Removing a vault only removes it from the vault list. Your

1. On your computer, open Obsidian.
2. At the bottom left, select **Open another vault** ( ![[obsidian-icon-vault-switcher.svg#icon]] ).
3. In the vault list, select **More options** ! next to the vault you want to move.
4. Select **Remove from list**.

## Transfer settings to another vault

To use the same settings for another vault, use your preferred file manager (or terminal) to copy the `.obsidian` folder from the root of the source vault to the root of the destination vault.

You may need to restart Obsidian to apply the changes.

> [!note] Where do I find the `.obsidian` folder?
> By default, most operating systems hide folders starting with a period (`.`). For more information about the `.obsidian` folder and how to access it, refer to [[How Obsidian stores data#Vault settings|vault settings]] and [[Configuration folder|config folders]].
