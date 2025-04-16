---
aliases:
  - Obsidian Sync/Set up Obsidian Sync on another device
cssclasses:
  - soft-embed
description: You've purchased Obsidian Sync and are ready to get started. This guide will help you set up and adjust your Obsidian Sync settings for daily use.
mobile: true
permalink: sync/setup
publish: true
---
You purchased Obsidian Sync and are ready to get started. This guide will help you set up and adjust your Obsidian Sync settings for daily use.

- **New to Obsidian Sync?** See: [[#Set up Obsidian Sync for the first time]]
- **Connecting a second device?** See: [[#Sync a remote vault on another device]]
- **Need to make changes?** See: [[#Manage your remote vaults]]

## Set up Obsidian Sync for the first time

In this section, you'll create a new [[Local and remote vaults|remote vault]] and connect it to an existing local vault. You don't need to create a new, empty local vault to use Obsidian Sync for this purpose.

> [!info] Is your current vault in an iCloud, OneDrive, Dropbox, or other syncing folder? If **yes**, or you are **unsure**, please read [[Frequently asked questions#Can I use a third-party sync with Obsidian Sync?|this]] and [[Switch to Obsidian Sync]] before proceeding.

**Prerequisites**

- An Obsidian account. If you don't have one, [sign up now](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- An active Obsidian Sync [[Plans and storage limits|subscription]]. If you don't have one, subscribe from [your account dashboard](https://obsidian.md/account/sync).
- **Recommended**: A [[Back up your Obsidian files|backup system]] in place for your Obsidian files. A syncing service is not a backup. 

### Log in with your Obsidian account

1. Open **Settings**.
2. In the sidebar, select **General**.
3. Under **Account → Your Account**, select **Log in**.
4. In **Email**, enter your email.
5. In **Password**, enter your password.
6. Select **Login**.

### Enable Obsidian Sync

1. Open **Settings**.
2. In the sidebar under **Options**, select **Core Plugins**.
3. Toggle **Sync**.

### Create a new remote vault

1. Open **Settings**.
2. In the sidebar, select **Sync**.
3. Next to **Remote vault**, select **Choose**.
4. Select **Create new vault**.
5. In **Vault name**, enter the name of the remote vault.
6. In **Region**, choose your server [[#Regional sync servers|region]] for your remote vault. 
7. In **Encryption password**, choose a password for your vault. This creates an end-to-end encrypted vault. The vault password is separate from your Obsidian account and can be different for each of your vaults. For more information, refer to [[Security and privacy]].
8. Select **Create**.

### Connect to a remote vault

1. Select **Connect** next to your newly created vault.
2. Enter the password you configured for the vault in the **Encryption password** field if you opted into [[Obsidian Sync/Security and privacy#What does end-to-end encryption mean?|end-to-end encryption]].
3. Select **Unlock vault**.
4. **Do not start syncing yet.** Check your sync settings in [[#Adjust Obsidian Sync settings|adjust Obsidian Sync settings]].
    - If you wish to start syncing immediately, move onto [[#Begin syncing with Obsidian Sync|begin syncing with Obsidian Sync]].
5. If you haven't already, close or dismiss the pop-up window prompting you to **Exclude Folders** and **Start Syncing**. Proceed to the next step.

#### Adjust Obsidian Sync settings

1. Navigate to **Settings** → **Sync** if needed.
2. If a device name has not been added, add one to make reading your Sync logs easier!
3. Toggle the settings under **Selective Sync** and **Vault configuration sync** to indicate which items should be synced to and from the remote vault.
    - **Note**: If you recently disconnected from a remote vault and are reconnecting without an application restart, some settings may already be toggled on.
4. If you make changes to any settings, restart Obsidian completely.
5. Once Obsidian is restarted, return to **Settings** → **Sync**.

#### Begin syncing with Obsidian Sync

If you are beginning syncing after connecting to a remote vault, you will see a **Start Syncing** button. Select this button to begin syncing.

If you are beginning syncing after adjusting Obsidian Sync's settings and restarting the application, you will see a **Resume** button within Sync's settings. Select this button to begin syncing.

> [!done] Syncing status
> When Obsidian Sync completes, a green circle with a checkmark ( ![[obsidian-icon-sync-synced.svg#icon]] ) appears in the bottom-right corner (desktop) or in the right sidebar (mobile). The Sync log will also display "Fully Synced" as one its most recent message.
>
> For more details on sync statuses, refer to [[Status icon and messages]].
^obsidian-sync-status

To connect other devices to your newly created and synced remote vault, keep reading!

To learn more about settings and files, move onto [[Sync settings and selective syncing]].

## Sync a remote vault on another device

In this section, you have already created a remote vault, and uploaded data to it. Now, you want to connect your other devices to it. 

**Prerequisites**
- An Obsidian account. If you don't have one, [sign up now](https://obsidian.md/account#mode=signup).
- An active Obsidian Sync subscription. If you don't have one, subscribe from [your account dashboard](https://obsidian.md/account).
- Sync enabled within the [[Core plugins]] settings. 
- An active remote vault. If you have not yet made one, please create a [[Set up Obsidian Sync#Create a new remote vault|remote vault]] first.
- **Recommended**: A [[Back up your Obsidian files|backup system]] in place for your Obsidian files on your most-used device. A syncing service is not a backup. 

### Sync your vault from the vault switcher

If you have freshly installed Obsidian, when you open the program you will be presented with the [[Manage vaults|Vault switcher]]. To create a new local vault from the contents of a remote vault, you will want to perform the following steps.

1. Open Obsidian (assuming this is your first time opening it)
2. Select one of the options depending upon your installation:
	1. **Desktop**: In the section that says Open vault from Obsidian Sync, choose **Setup**
	2. **Mobile/Tablet**: **Setup Obsidian Sync**
3. Login with your Obsidian User account
	1. If [[2-factor authentication|2FA]] is set up, enter your 2FA code.
4. You will be asked to choose which remote vault you want to sync to this device. Select **Connect**.
5. You will be asked to choose a name for the local vault that will be created on the device to hold this data. Enter the name of your choice. 
	1. If you use [[Obsidian URI]]s, you will want to use the same name as the local vault on your other device. 
6. Select **Create**.
7. The remove vaults window will pop-up momentary as Obsidian Sync connects to your server and validates the subscription. It will then present you a *Setup Connection* window. 
	1. It is highly recommended that you close or swipe down from this window, and [[#Adjust Obsidian Sync settings|adjust Obsidian Sync settings]] first.
	2. If you change any Sync Settings, please reload or restart Obsidian.

### Sync your vault from Obsidian Settings

If you have already created a local vault on this device, and you want to connect this local vault to a remote vault, the instructions are very similar to [[#Set up Obsidian Sync for the first time]].

![[Set up Obsidian Sync#Log in with your Obsidian account]]

![[Set up Obsidian Sync#Enable Obsidian Sync]]

#### Connect to a remote vault

1. Open **Settings**.
2. In the sidebar, select **Sync**.
3. Next to **Pick remote vault**, click **Choose**.
4. Click **Connect** next to the remote vault you want to connect to.
5. In **Encryption password**, enter the password for your vault, if you have one.
6. You will be prompted to start Syncing. It is recommended to wait and adjust your sync settings first. If you do want to sync the entire vault to the device as is, you may **Start Syncing**. 

> [!warning] If the vault on your device already contains some notes (not recommended), you'll be warned that those notes will be merged before proceeding. Conflicts will be resolved through [[Troubleshoot Obsidian Sync#Conflict resolution|Sync's conflict resolution]].

![[Set up Obsidian Sync#Adjust Obsidian Sync settings]]

![[Set up Obsidian Sync#Begin syncing with Obsidian Sync]]

## Manage your remote vaults

You have created and connected to a remote vault. You may have also synced this remote vault to multiple devices. This section goes over some of the other common instructions you may need in managing this remote vault.

### Disconnect from a remote vault

1. Open Obsidian's **Settings**.
2. Select **Sync** in the sidebar.
3. Click the **Disconnect** button next to Remote vaults.

You are now disconnected from the remote vault and are no longer syncing on this device.

### Delete a remote vault

> [!tip] Deleting a remote vault will not delete your local data on your device.

1. Open **Settings**.
2. In the sidebar, select **Sync**.
3. Select **Manage** next to Remote vaults. A window will open with your list of remote vaults.
4. Select the trash can icon ( ![[lucide-trash-2.svg#icon]] ) next to the remote vault you want to delete.
5. Confirm the deletion by selecting the red **Delete** button.
6. Your remote vault has been deleted.

### Regional sync servers

Obsidian Sync allows you to choose the hosting location for your remote vault. If you're using version `1.4.16` or older of Obsidian, the location will be automatically chosen for you.

If you're unsure where your current vault's region is, check out [[Obsidian Sync/Security and privacy#Where can I find my current Sync server and where is it hosted?|Where can I find my current Sync server and where is it hosted?]] for guidance.

![[sync-regional-sync-servers.png#interface|300]]

After selecting a location, your data center **cannot** be moved to a different server without re-uploading your data. To change regions, follow the [[Migrate a Sync vault|follow vault migration guide]].

![[Obsidian Sync/Security and privacy#^sync-geo-regions]]

## Next steps

Here are some suggested documents to read next.

- Explore more about [[Sync settings and selective syncing|selecting files and settings to sync]].
- Learn what happens if your remote vault [[Version history|fill up]].
- [[Collaborate on a shared vault]] with another Obsidian Sync user.
- Check out the [[Frequently asked questions|Sync FAQ]] for some answers to common questions.
