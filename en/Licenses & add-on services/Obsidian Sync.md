Obsidian Sync™ is a paid service to sync notes between vaults on various devices.

### How Obsidian Sync works

Obsidian Sync is fairly simple: once you hook up local vaults from multiple devices to the same remote vault, changes will be automatically synced between these local vaults, except for files and folders you instruct Obsidian to ignore.

### Features

Currently, Obsidian Sync features:

- End-to-end encryption.
- Version history integrated into Obsidian.
- View & restore deleted files.
- Synchronize settings, themes, CSS snippets, plugins, and plugin settings.
- Selective sync.
	- Exclude certain folders.
	- Toggle syncing for images, audio, video, PDF, and unsupported files.
- Switch between multiple remote vaults.

In the future, we'll improve Obsidian Sync with:

- Vault sharing


### Enable Obsidian Sync plugin

You can enable Obsidian Sync by enabling the "Sync" plugin under Settings => Core plugins.

### Setting up remote vaults

Warning: We do not recommend using third party sync services to sync the same vault with Obsidian Sync. [[#Third party sync|More about this later]].

To start syncing, first you need to create a remote vault that stores your encrypted data.

To do that, go to Setting => Sync => Pick remote vault => Choose => Create new vault.

After creating it, you can immediately connect to the vault by clicking on the "Connect" button next to it.

You can choose to either start syncing immediately after connecting, or choose folders to ignore.

##### Set encryption password 

By default, you need to set an encryption password for your vault. This password is used to encrypt and decrypt your data and is extremely important.

You'll be asked for the password any time you setup sync with an encrypted vault. ==If you forget or lose the password, your data will remain encrypted and unusable forever. We are unable to recover your password or any encrypted data for you.== Your local files are not affected.

You can also choose to turn off the "Custom end-to-end password" option to leave managing the encryption key to us. This is still fairly secure and provides the convenience of not having to remember a password.

### Check sync status

After connecting to a remote vault, you can check the current sync status in the bottom status bar. You can hover over the status icon to read more about what's going on.

Clicking on the status icon will open up sync settings as a shortcut.

### Version history

As you edit your notes, versions are saved approximately every 10 seconds. ==Version history is only available for notes, not attachments.==

You can right click a file in the file explorer pane to see its version history. This option is also available in the more options menu.

After selecting a version in the left column in the version history screen, you can restore the file to this version by clicking on the "Restore" button.

### Deleted files

After you delete a file, you can view it in Setting => Sync => Deleted files => View.

Clicking on a deleted file will open its version history. You can then choose to restore the file back to a previous version.

### Selective sync

You can selectively sync files by folder or file type. ==Selective sync only applies to future changes. Any files that have already been uploaded will not be deleted even if you choose to ignore them. Please be sure to configure it before starting the sync process.==

##### Exclude folders

You can uncheck folders in Settings => Sync => Excluded folders => Manage to prevent them from getting synced.

Excluded folders will be ignored when both uploading and download changes.

#### File types

You can toggle sync for images, audio, video, PDFs, and unsupported files under Settings => Sync => Selective sync.

### Synchronizing settings

In addition to your notes and attachments, Obsidian Sync offers individual toggles to synchronize these files:
- The main app settings, including editor settings, files & links settings, etc.
- Appearance settings, including dark mode, selected theme, and enabled snippets.
- Themes and snippets that has been downloaded.
- Hotkeys.
- Which [[Core plugins]] are enabled.
- Core plugin settings.
- Which community plugins are enabled.
- Downloaded/installed community plugins, and their settings.

You can choose which ones to synchronize with your remote vault to best suite your use case of Obsidian.

Keep in mind that Obsidian does not apply your settings until you restart the application, or reload the vault. This normally isn't a problem on mobile since the app restarts often, but you may notice that settings you set on one desktop device is "synced" to another device, but doesn't take effect until the next restart.

Sync will respect your selection of the settings folder override in case you've set it to a folder other than `.obsidian`. You can take advantage of this to create different profiles in your remote vault to sync your settings. A common use case, for example, is to use a different profile for mobile devices vs desktop devices.

#### Settings version history

If something goes wrong, and you lost some of your settings, you can always revert the affected settings file through the "Settings version history" section in Sync.

### Third party sync

If you are using Obsidian Sync, we do not recommend using third party sync services like Dropbox, Google Drive, OneDrive, or iCloud to sync the same vault between the same devices using Obsidian Sync. Doing so may cause conflicts, duplicate files, or in the worst case, could lead to corrupted files.

If you do setup Obsidian Sync and a third party sync service to sync a vault between two devices, then the following will happen:
- If Obsidian Sync "wins" the race and syncs your file first, then your third party sync service will generate a "conflicted copy".
- If your third party sync service "wins" the race and syncs your file first, then Obsidian Sync will attempt to merge the two slightly different versions, often causing the last few characters you just typed to be rolled back.

If you wish to maintain a backup of your vault using a third party sync service, you can still do so by setting up your sync provider on your primary single device, but not on your secondary devices. This will ensure that your third party sync service does not "race" with Obsidian Sync.

### FAQ

##### What is end-to-end encryption?

End-to-end encryption means the data is encrypted from the moment it leaves your device, and can only be decrypted using your encryption key once it's back on one of your devices.

We do not have the capability of reading your data, nor do any potential eavesdroppers, such as your internet service provider.

In the rare case of a complete server breach, your data will remain encrypted, and nobody will have the ability to decrypt your files without knowing your password.

##### How many remote vaults can I have?

Each account with Obsidian Sync can have up to 5 remote vaults.

##### How long is version history kept?

Version histories are kept for up to one year before we clean it up.

##### How large can each remote vault be?

At the moment, each remote vault can have up to 4 GB of data, including version history.

##### Is my data encrypted on my hard disk?

No, your data is still in plain text on your hard disk. If you wish to encrypt it from people who use your computer, you should look for a disk encryption solution.

##### How long is my data kept after my subscription expires?

Data in your remote vaults, including version history, is kept for one month for you, after your subscription expires.

As long as you renew within one month, there should be no impact on your usage.

##### Can I use Obsidian Sync as a backup solution?

Obsidian Sync is designed as a data synchronization service, rather than a backup service.

With version history, it does provide some backup features, however we still recommend having additional backup measures.

Obsidian Sync is currently in beta testing, so we strongly recommend having backups, in case of software bugs and glitches.

##### Should I pick my own encryption password?

Pick your password if you require the highest level of security and privacy. This guarantees that anyone who doesn't know your password will never be able to read your notes.

Letting us manage your encryption key is more convenient, and you do not risk forgetting or losing your password.

Your local vault is not affected by this option. If you properly backup your local vault, this may not be a problem for you.

##### Is the end-to-end encryption strong?

We use industry-standard AES-256 to encrypt your data. AES-256 is a military-grade encryption specification that is widely used in online banking.

Here are the technical details for those interested:

- Key derivation function used: scrypt with salt
- Encryption algorithm used: AES-256 using GCM

##### What does the `vault limit exceeded` error mean?

Each vault using Obsidian Sync has a maximum size of 4gb. This error indicates your vault has exceeded that limit in size. Don't forget: attachments and version history contributes to the maximum, so you may exceed your 4gb limit even if your vault's actual size is less than 4gb. 

If you see this error, Obsidian can help you identify and purge large files from the Vault. Go to the Obsidian Sync settings in Preferences => Sync and look for the "Vault size over limit" options. 
