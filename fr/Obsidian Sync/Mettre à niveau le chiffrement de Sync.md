---
permalink: sync/migrate
cssclasses:
  - soft-embed
description: 'Move your Sync vault to a different region, perform and encryption upgrade.'
publish: true
mobile: true
localized: null
aliases:
  - Upgrade Sync encryption
---
By default Obsidian Sync uses [[Obsidian Sync/Sécurité et confidentialité#Encryption|end-to-end encryption]] for all your data. This guarantees that no one — not even the Obsidian team — can access your notes.

Obsidian occasionally upgrades Sync encryption to maintain the highest [[Obsidian Sync/Sécurité et confidentialité|security]] standards. If an encryption upgrade is available you will see an option titled **Upgrade vault encryption** in **Obsidian Settings → Sync**. This process also allows you to change your [[Régions de Sync|Sync region]].

## Encryption versions

All new vaults automatically use the latest encryption. Existing vaults can be upgraded using the migration assistant. Note that all devices must be using an Obsidian app version that supports the Sync encryption version you are migrating to.

| Release date                                                            | Sync version | Minimum app version |
| ----------------------------------------------------------------------- | ------------ | ------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3            | 1.8.3               |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0            | 0.9.21              |

## Upgrade encryption with the migration assistant

Before you proceed, create a [[Sauvegarder vos fichiers Obsidian|backup]] of your vault to prevent any potential data loss. This process will permanently delete all data in your remote vault with the old encryption, including the version history.

> [!danger] Migrations are destructive
> 
> **Always [[Sauvegarder vos fichiers Obsidian|back up]] your vault before proceeding with a migration.**
> 
> When you migrate a remote vault your data will be replaced. This means:
> 
> 1. Remote data will be removed from Obsidian servers, and vault data will be re-uploaded in its place.
> 2. All [[Version history|version history]] for the vault will be lost.

1. Open **[[Paramètres]]**.
2. In the sidebar, select **Sync**.
3. Click **Upgrade vault**. This option will only be visible if an upgrade is available for your remote vault.
4. Double check your backups and click **Continue**.
5. In **Vault name**, enter the name of the remote vault.
6. In **Region**, choose your server [[#Regional sync servers|region]] for your remote vault. 
7. In **Encryption password**, choose a password for your vault. This creates an end-to-end encrypted vault. The vault password is separate from your Obsidian account and can be different for each of your vaults. For more information, refer to [[Sécurité et confidentialité]].
8. Once you re-upload your data with the new encryption, re-connect to the new Sync vault on your other devices.
