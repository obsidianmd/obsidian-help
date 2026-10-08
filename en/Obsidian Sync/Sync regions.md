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

## Record your settings

When you connect a device to the new remote vault, Sync can use the settings you have turned on at that moment. If you keep different settings on different devices, record them before you start. For example, you might not sync large media files to your phone.

On each device that uses the remote vault, open **[[Settings]] → Sync** and record these settings. A screenshot works well.

- **Selective sync**
- **Vault configuration sync**
- **Excluded folders**
- Device-specific settings, such as **Device name** and **Conflict resolution**

See [[Sync settings and selective syncing]] for what each setting does and which ones are on by default.

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

If you are on the [[Plans and storage limits|Standard Plan]], you will also need to [[Set up Obsidian Sync#Delete a remote vault|delete your remote vault]] before proceeding.

![[Set up Obsidian Sync#Create a new remote vault]]

## Reconnect your other devices

After the new remote vault finishes syncing on your first device, switch every other device that used the old remote vault. Work on one device at a time.

1. On the device, [[Set up Obsidian Sync#Disconnect from a remote vault|disconnect from the old remote vault]].
2. [[Set up Obsidian Sync#Sync a remote vault on another device|Connect to the new remote vault]]. Don't select **Start syncing** yet.
3. Set **Selective sync**, **Vault configuration sync**, and **Excluded folders** to match the settings you recorded for this device.
4. Restart Obsidian. On mobile or tablet, you may need to force-quit the app.
5. Select **Start syncing** or **Resume**, and wait until Sync finishes before you move to the next device.

Additionally, you can [[Set up Obsidian Sync#Delete a remote vault|delete your old remote vault]] once you have confirmed transition to your new remote vault and its region.
