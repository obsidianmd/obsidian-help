---
cssclasses:
  - soft-embed
description: Move your Sync vault to a different region.
mobile: true
permalink: sync/region
publish: true
---
When you create a [[Local and remote vaults|remote vault]] through [[Introduction to Obsidian Sync|Obsidian Sync]] your data is encrypted and stored on one of Obsidian's regional Sync servers. This guide explains how to move your Sync vault to a different regional server.

## Available regions

The following regions are available with Obsidian Sync. We recommend using **Automatic** or choosing a location close to you to reduce latency and make the syncing process faster.

![[Obsidian Sync/Security and privacy#^sync-geo-regions]]

## Change Sync region

To change your remote vault's region, you will need to recreate your vault on a different Sync server. Note you can also change regions by using the [[Upgrade Sync encryption]] migration assistant, if your remote vault is on an older version.

> [!danger] Migrations are destructive
> 
> **Always [[Back up your Obsidian files|back up]] your vault before proceeding with a migration.**
> 
> When you migrate a remote vault your data will be replaced. This means:
> 
> 1. Remote data will be removed from Obsidian servers, and vault data will be re-uploaded in its place.
> 2. All [[Version history|version history]] for the vault will be lost.

![[Set up Obsidian Sync#Disconnect from a remote vault]]

If you are on the [[Plans and storage limits|Standard Plan]], you will also need to [[#Delete a remote vault|delete your remote vault]] before proceeding.

![[Set up Obsidian Sync#Create a new remote vault]]
![[Set up Obsidian Sync#Connect to a remote vault]]

Additionally, you can [[#Delete a remote vault|delete your old remote vault]] once you have confirmed transition to your new remote vault and its region.
