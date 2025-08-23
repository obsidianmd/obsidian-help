---
cssclasses:
  - soft-embed
description: Move your Sync vault to a different region, perform and encryption upgrade.
mobile: true
permalink: sync/migrate
publish: true
aliases:
  - Migration assistant
---
By default Obsidian Sync uses [[Obsidian Sync/Security and privacy#Encryption|end-to-end encryption]] for all your data. This guarantees that no one — not even the Obsidian team — can access your notes.

Obsidian occasionally upgrades Sync encryption to maintain the highest [[Obsidian Sync/Security and privacy|security]] standards. If an encryption upgrade is available you will see an option titled **Upgrade vault encryption** in **Obsidian Settings → Sync**.

## Encryption versions

All new vaults automatically use the latest encryption. Existing vaults can be upgraded using the migration assistant. Note that all devices must be using an Obsidian app version that supports the Sync encryption version you are migrating to.

| Sync version                                                            | Minimum app version |
| ----------------------------------------------------------------------- | ------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 1.8.3               |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0.9.21              |

## Upgrade encryption with the migration assistant

Before you proceed, create a [[Back up your Obsidian files|backup]] of your vault before upgrading to prevent any potential data loss. This process will permanently delete all data encrypted with the old encryption, including the version history for your vault.

> [!danger] Migrations are destructive
> 
> **Always [[Back up your Obsidian files|back up]] your vault before proceeding with a migration.**
> 
> When you migrate a remote vault your data will be replaced. This means:
> 
> 1. Remote data will be removed from Obsidian servers, and vault data will be re-uploaded in its place.
> 2. All [[Version history|version history]] for the vault will be lost.

1. Open **Settings**.
2. In the sidebar, select **Sync**.
3. Click **Upgrade vault encryption**. This option will only be visible if an upgrade is available for your remote vault.
4. Follow the steps to create the new remote vault with upgraded encryption. In this process you can also update your [[Sync regions|Sync region]].
5. Once you re-upload your data with the new encryption, re-connect to the new Sync vault on your other devices.