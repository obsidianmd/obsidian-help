---
aliases:
  - Add another device
cssclasses:
  - soft-embed
---

In this guide, you'll create a local vault on another device to sync with your remote vault. This keeps the local vaults on all your devices in sync.

> [!tip] Obsidian URIs
> If you want Obsidian URIs to work across devices, make sure to give your local vaults the same name on all devices.

## Prerequisites

- An Obsidian account. If you don't have one, [sign up now](https://obsidian.md/account#mode=signup).
- An active Obsidian Sync subscription. If you don't have one, subscribe from [your account dashboard](https://obsidian.md/account).
- Sync enabled within the [[Core plugins]] settings. 
- Have created at least one [[Set up Obsidian Sync#Create a new remote vault|remote vault]].

## Sync a remote vault on a fresh installation

If this is the first time you open Obsidian on the device, follow these steps:

1. Open Obsidian.
2. Select **Sign in** next to **Open vault from Obsidian Sync**.
3. In **Email**, enter your email.
4. In **Password**, enter your password.
5. Select **Sign in**.
6. Select **Connect** for the vault you want to set up.
7. Enter a local name for the vault, or leave to use the same name as the remote vault.
8. Select **Browse** and select the folder on your device where you want to sync the vault.
9. Select **Create**.

You will be presented with the option to **Start Syncing**. If you continue at this stage, Obsidian Sync will use the default sync settings to load files to your device. It is ***strongly recommended*** that you [[Set up Obsidian Sync#Adjust Obsidian Sync settings|adjust your Obsidian Sync settings]] first before proceeding to begin syncing.

## Sync an existing local vault

This section explains how to sync an existing local vault with a remote vault.

![[Set up Obsidian Sync#Log in with your Obsidian account]]

![[Set up Obsidian Sync#Enable Obsidian Sync]]

### Connect to a remote vault

1. Open **Settings**.
2. In the sidebar, select **Sync**.
3. Next to **Pick remote vault**, click **Choose**.
4. Click **Connect** next to the remote vault you want to connect to.
5. In **Encryption password**, enter the password for your vault, if you have one.
6. You will be prompted to start Syncing. It is recommended to wait and adjust your sync settings first. If you do want to sync the entire vault to the device as is, you may **Start Syncing**. 

> [!warning] If the vault on your device already contains some notes (not recommended), you'll be warned that those notes will be merged before proceeding. Conflicts will be resolved through [[Troubleshoot Obsidian Sync#Conflict resolution|Sync's conflict resolution]].

![[Set up Obsidian Sync#Adjust Obsidian Sync settings]]

![[Set up Obsidian Sync#Begin syncing with Obsidian Sync]]

