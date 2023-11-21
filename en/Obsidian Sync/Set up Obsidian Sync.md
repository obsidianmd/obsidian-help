In this guide, you'll enable [[Introduction to Obsidian Sync|Obsidian Sync]] for your vault.

> [!NOTE] Remote vaults and local vaults
> In this guide, you'll create a new [[Local and remote vaults|remote vault]] and connect it to an existing local vault. You don't need to create a new local vault to use Obsidian Sync.

## Prerequisites

- An Obsidian account. If you don't have one, [sign up now](https://obsidian.md/account#mode=signup).
- An active Obsidian Sync subscription. If you don't have one, subscribe from your [account page](https://obsidian.md/account).

## Log in with your obsidian account

1. Open **Settings**.
2. In the sidebar, click **About**.
3. Under **Account → Your Account**, click **Log in**.
4. In **Email**, enter your email.
5. In **Password**, enter your password.
6. Click **Login**.

## Enable obsidian sync

1. Open **Settings**.
2. In the sidebar, click **Core plugins**.
3. Enable **Sync**.

## Create a new remote vault

1. Open **Settings**.
2. In the sidebar, click **Sync**.
3. Next to **Remote vault**, click **Choose**.
4. Click **Create new vault**.
5. In **Vault name**, enter the name of the remote vault.
6. In **Region**, choose your [[#Regional sync servers|region]] for your remote vault. 
7. In **Encryption password**, choose a password for your vault. This creates an end-to-end encrypted vault. The vault password is separate from your Obsidian account and can be different for each of your vaults. For more information, refer to [[Security and privacy]].
8. Click **Create**.

### Regional sync servers

Starting from [Obsidian release 1.5](https://obsidian.md/changelog/2023-11-20-desktop-v1.5.0/), users will have the option to select the location for hosting their remote vault. 

![[sync-regional-sync-servers.png#interface|300]]

![[Obsidian Sync/Security and privacy#^sync-geo-regions]]

Once a location is chosen, it is important to note that the data center **cannot** be changed thereafter. To relocate your data, you will need to [Create a new remote vault](app://obsidian.md/index.html#Create%20a%20new%20remote%20vault) specifying the desired hosting location.

## Connect to a remote vault

1. Next to your newly created vault, click **Connect**.
2. In **Encryption password**, enter the password you configured for the vault.
3. Click **Unlock vault**.
4. Click **Start syncing**.

> [!note] Sync settings and other file types
> By default, Sync only syncs notes and images. For information how to sync other file types, refer to [[Select files and settings to sync#Select file types to sync|Select file types to sync]].
>
> If you want to sync vault configuration, such as settings for [[Core plugins]], [[Custom hotkeys]], or [[Community plugins]], learn how to [[Select files and settings to sync#Sync vault configuration|Sync vault configuration]].
