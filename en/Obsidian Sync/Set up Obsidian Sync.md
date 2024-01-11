In this guide, you'll enable [[Introduction to Obsidian Sync|Obsidian Sync]] for your vault.

> [!hint] Remote vaults and local vaults
> In this guide, you'll create a new [[Local and remote vaults|remote vault]] and connect it to an existing local vault. You don't need to create a new local vault to use Obsidian Sync.

## Prerequisites

- An Obsidian account. If you don't have one, [sign up now](https://obsidian.md/account#mode=signup).
- An active Obsidian Sync subscription. If you don't have one, subscribe from your [account page](https://obsidian.md/account).

## Log in with your Obsidian account

1. Open **Settings**.
2. In the sidebar, select **General**.
3. Under **Account → Your Account**, select **Log in**.
4. In **Email**, enter your email.
5. In **Password**, enter your password.
6. Select **Login**.
## Enable Obsidian Sync

1. Open **Settings**.
2. In the sidebar, select **Core plugins**.
3. Enable **Sync**.

## Create a new remote vault

1. Open **Settings**.
2. In the sidebar, select **Sync**.
3. Next to **Remote vault**, select **Choose**.
4. Click **Create new vault**.
5. In **Vault name**, enter the name of the remote vault.
6. In **Region**, choose your server [[#Regional sync servers|region]] for your remote vault. 
7. In **Encryption password**, choose a password for your vault. This creates an end-to-end encrypted vault. The vault password is separate from your Obsidian account and can be different for each of your vaults. For more information, refer to [[Security and privacy]].
8. Click **Create**.

### Regional sync servers

As of [Obsidian release 1.5](https://obsidian.md/changelog/2023-11-20-desktop-v1.5.0/), users can now choose the hosting location for their remote vault. 

For users not yet on release 1.5 or a later version, the assignment of their remote vault location will be handled automatically. 

![[sync-regional-sync-servers.png#interface|300]]

After selecting a location, it's crucial to be aware that the data center **cannot** be changed afterward. If you wish to relocate your data, the process involves [[#Create a new remote vault|creating a new remote vault]] and specifying the desired hosting location during the setup.

![[Obsidian Sync/Security and privacy#^sync-geo-regions]]

## Connect to a remote vault

> [!danger] Is your current vault in an iCloud, OneDrive, Dropbox, or other syncing folder? Please [[Back up your vault|read this guide]] before proceeding.


1. Next to your newly created vault, select **Connect**.
2. In **Encryption password**, enter the password you configured for the vault if you opted into [[Obsidian Sync/Security and privacy#What does end-to-end encryption mean?|end-to-end encryption]].
3. Select **Unlock vault**.
4. It is highly recommended that you <u>do not</u> start syncing yet. Instead, proceed to [[Select files and settings to sync#Initially adjusting your Sync settings|syncing your vault settings for the first time]].
	1. If you wish to start syncing right away, select **Start Syncing**.


> [!note] Sync settings and other file types
> By default, Sync only syncs notes and images. For information how to sync other file types, refer to [[Select files and settings to sync#Select file types to sync|Select file types to sync]].
>
> If you want to sync vault configuration, such as settings for [[Core plugins]], [[Hotkeys]], or [[Community plugins]], learn how to [[Select files and settings to sync#Sync vault configuration|Sync vault configuration]].


