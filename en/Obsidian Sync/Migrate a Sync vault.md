---
aliases:
cssclasses:
  - soft-embed
description: This guide explains how to move your Sync vault to a different regional server.
mobile: true
permalink: sync/migrate
publish: true
---
When you create a [[Local and remote vaults|remote vault]] through [[Introduction to Obsidian Sync|Obsidian Sync]] your data is encrypted and stored on one of Obsidian's specific regional Sync servers.

This guide explains how to move your Sync vault to a different regional server.

> [!danger] Migrations are destructive
> 
> **Always [[Back up your Obsidian files|backup]] your vault before proceeding with a migration.**
> 
> When you migrate a remote vault to a different region your data will be replaced. This means:
> 
> 1. Remote data will be removed from Obsidian servers, and vault data will be re-uploaded in its place.
> 2. All [[Version history|version history]] for the vault will be lost.

## Change Sync region

To change your remote vault's region, you will need to perform the following steps in order. Please make a [[Back up your Obsidian files|backup]] of your data first.

![[Set up Obsidian Sync#Disconnect from a remote vault]]

If you are on the [[Plans and storage limits|Standard Plan]], you will also need to [[#Delete a remote vault|delete your remote vault]] before proceeding.

![[Set up Obsidian Sync#Create a new remote vault]]
![[Set up Obsidian Sync#Connect to a remote vault]]

Additionally, you can [[#Delete a remote vault|delete your old remote vault]] once you have confirmed transition to your new remote vault and its region.

## Upgrade Sync encryption

Obsidian occasionally upgrades Sync encryption to maintain the highest [[Obsidian Sync/Security and privacy|security]] standards. If an encryption upgrade is available you will see an option titled **Upgrade vault encryption** in **Obsidian Settings → Sync**. In this process you can also update your Sync region.

Once you re-upload your data with the new encryption, all other devices will need to re-connect to the new Sync vault. Note that all devices must be using an Obsidian app version that supports the Sync encryption you are migrating to.

| Sync version                                                            | Minimum app version |
| ----------------------------------------------------------------------- | ------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 1.8.3               |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0.9.21              |
