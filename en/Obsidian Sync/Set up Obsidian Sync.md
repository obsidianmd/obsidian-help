---
cssclasses:
  - soft-embed
---

In this guide, you'll create a new [[Local and remote vaults|remote vault]] and connect it to an existing local vault. You don't need to create a new, empty local vault to use Obsidian Sync for this purpose.

## Prerequisites

- An Obsidian account. If you don't have one, [sign up now](https://obsidian.md/account#mode=signup).
- An active Obsidian Sync [[Plans and storage limits|subscription]]. If you don't have one, subscribe from [your account dashboard](https://obsidian.md/account).
- Sync enabled within the [[Core plugins]] settings. 

> [!danger] Is your current vault in an iCloud, OneDrive, Dropbox, or other syncing folder? Please [[Back up your Obsidian files|read this guide]] before proceeding.

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
4. Select **Create new vault**.
5. In **Vault name**, enter the name of the remote vault.
6. In **Region**, choose your server [[#Regional sync servers|region]] for your remote vault. 
7. In **Encryption password**, choose a password for your vault. This creates an end-to-end encrypted vault. The vault password is separate from your Obsidian account and can be different for each of your vaults. For more information, refer to [[Security and privacy]].
8. Select **Create**.

## Connect to a remote vault

1. Select **Connect** next to your newly created vault.
2. Enter the password you configured for the vault in the **Encryption password** field if you opted into [[Obsidian Sync/Security and privacy#What does end-to-end encryption mean?|end-to-end encryption]].
3. Select **Unlock vault**.
4. **Do not start syncing yet.** Check your sync settings in [[#Adjust Obsidian Sync settings|adjust Obsidian Sync settings]].
    - If you wish to start syncing immediately, move onto [[#Begin syncing with Obsidian Sync|begin syncing with Obsidian Sync]].
5. If you haven't already, close or dismiss the pop-up window prompting you to **Exclude Folders** and **Start Syncing**. Proceed to the next step.

#### Adjust Obsidian Sync settings

1. Navigate to **Settings** → **Sync** if needed.
2. Toggle the settings under **Selective Sync** and **Vault configuration sync** to indicate which items should be synced to and from the remote vault.
    - **Note**: If you recently disconnected from a remote vault and are reconnecting without an application restart, some settings may already be toggled on.
3. If you make changes to any settings, restart Obsidian completely.
4. Once Obsidian is restarted, return to **Settings** → **Sync**.

> [!tip] Add a device name to make reading your Sync logs easier!

> [!note] Sync settings and other file types
> By default, Sync only syncs notes and images. For information how to sync other file types, refer to [[Select files and settings to sync#Select file types to sync|Select file types to sync]].
>
> If you want to sync vault configuration, such as settings for [[Core plugins]], [[Hotkeys]], or [[Community plugins]], learn how to [[Select files and settings to sync#Sync vault configuration|Sync vault configuration]].

#### Begin syncing with Obsidian Sync

If you are beginning syncing after connecting to a remote vault, you will see a **Start Syncing** button. Select this button to begin syncing.

If you are beginning syncing after adjusting Obsidian Sync's settings and restarting the application, you will see a **Resume** button within Sync's settings. Select this button to begin syncing.

> [!done] Syncing status
> When Obsidian Sync has finished syncing, it displays a green circle with a checkmark ( ![[obsidian-icon-sync-circle.svg#icon]] ) in the bottom-right corner (desktop version) or the right sidebar (mobile version).
^obsidian-sync-status

### Next steps

To connect other devices to your newly created and synced remote vault, move onto [[Set up Obsidian Sync on another device]].

To learn more about settings and files, move onto [[Select files and settings to sync]].

## Disconnect from a remote vault

1. Open Obsidian's **Settings**.
2. Select **Sync** in the sidebar.
3. Click the **Disconnect** button next to Remote vaults.

You are now disconnected from the remote vault and are no longer syncing on this device.

## Delete a remote vault

> [!tip] Deleting a remote vault will not delete your local data on your device.

1. Open **Settings**.
2. In the sidebar, select **Sync**.
3. Select **Manage** next to Remote vaults. A window will open with your list of remote vaults.
4. Select the trash can icon ( ![[lucide-trash-2.svg#icon]] ) next to the remote vault you want to delete.
5. Confirm the deletion by selecting the red **Delete** button.
6. Your remote vault has been deleted.

## Regional sync servers

Obsidian Sync allows you to choose the hosting location for your remote vault. If you're using version 1.4.16 or older of Obsidian, the location will be automatically chosen for you.

If you're unsure where your current vault's region is, check out [[Obsidian Sync/Security and privacy#Where can I find my current Sync server and where is it hosted?|Where can I find my current Sync server and where is it hosted?]] for guidance.

![[sync-regional-sync-servers.png#interface|300]]

After selecting a location, it's crucial to be aware that the data center **cannot** be changed afterward. If you wish to relocate your data, the process involves recreating a remote vault and specifying the desired hosting location during the setup.

![[Obsidian Sync/Security and privacy#^sync-geo-regions]]

### Change your remote vault region

To change your remote vault's region, you will need to perform the following steps in order.

![[#Disconnect from a remote vault]]
![[#Create a new remote vault]]
![[#Connect to a remote vault]]

Additionally, you can [[#Delete a remote vault|delete your old remote vault]] once you have confirmed transition to your new remote vault and its region. 
