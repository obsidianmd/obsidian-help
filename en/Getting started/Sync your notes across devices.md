---
cssclasses:
  - soft-embed
description: This guide will help you sync your Obsidian vaults across different devices and platforms.
permalink: getting-started/sync-your-notes-across-devices
---

This guide will help you sync your Obsidian vaults across different devices and platforms. We cover common sync methods by type and platform, including tips for avoiding data loss and ensuring a smooth experience. 

We also recommend reading our [[Back up your Obsidian files|backup]] guide alongside this article for best protection of your data.

**Syncing Types**:

The list of syncing types is not exhaustive, and only covers the most common ones as reported by the [Obsidian Community](https://obsidian.md/community).

1. **First-party syncing**: [[#Obsidian Sync]]
2. **Third-party cloud syncing** [[iCloud Drive]] and [[#OneDrive]]
3. **Local sync** [[#Syncthing]]
4. **Version control**: [[#Git]] and [[#Working Copy]]

## Obsidian Sync

**Recommended systems**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

The most straightforward and officially supported method, [[Introduction to Obsidian Sync|Obsidian Sync]], keeps your vaults synced across all devices by using an off-site remote vault to make copies of your data, for retrieval on your other devices. A local copy will remain on your devices at all times.

![[Sync Canvas-dark.png#outline|50%]]

Follow the [[Set up Obsidian Sync|setup guide]] to configure it.

> [!Important] Avoid using Obsidian Sync alongside other cloud services like Dropbox or OneDrive, as this can cause data conflicts and file corruption.

## iCloud

**Recommended systems**: `macOS`, `iOS`, and `iPadOS`.

iCloud can be used to sync vaults between iOS and macOS. However, **iCloud Drive on Windows** may lead to file duplication or corruption.

> [!info]- Other syncing services for iPhone and iPad.
> We officially support the following options:
>
> - [[Introduction to Obsidian Sync|Obsidian Sync]]
> - [[#iCloud Drive]]
>
> The following services aren't supported. If you discover a way to sync your notes on your iOS device using any of these services, let us know on our community channels.
>
> - Dropbox
> - Google Drive
> - OneDrive
> - Syncthing

**How to create and store your vault in iCloud Drive**:

- **Enable iCloud Drive**: On your Mac or iPhone, make sure iCloud Drive is enabled under iCloud settings.
    - On macOS, go to **System Preferences → Apple ID → iCloud → iCloud Drive** and make sure it's enabled.
    - On iOS, go to **Settings → [Your Name] → iCloud → iCloud Drive**.
- **Create a new vault in iCloud**:
    - **On macOS**:
        1. Open **Obsidian** and select **Create new vault**.
        2. In the file picker, navigate to **iCloud Drive → Obsidian**.
        3. Create a new folder for your vault and name it.
        4. Select **Create** to finish.
    - **On iOS**:
        1. Open **Obsidian** and tap **Create new vault**.
        2. Enter a name for your vault.
        3. Toggle on **Store in iCloud**.
        4. Tap **Create**.
- **Open the vault on another Apple device**: 
	- On your Mac or another iOS device, open **Obsidian**. In the [[Manage vaults|Vault switcher]], go to **Open folder as vault**. Navigate to **iCloud Drive → Obsidian**, then select the vault folder.

> [!tip] Best practices
> - Disable "**Optimize Mac Storage**" in iCloud settings to prevent files from being offloaded​.
> - Ensure "**Keep Downloaded**" is selected in iCloud Drive settings.

## OneDrive

**Recommended systems**: `Windows`, `macOS` (limited functionality on Android)

OneDrive is a popular cloud storage option for Windows and macOS users. However, it has limitations on Android and isn't officially supported for syncing Obsidian vaults on iOS.

> [!Important] Before using OneDrive for syncing, ensure that your vault folder is marked as **"Always keep on this device"**. This prevents OneDrive from offloading your files and causing Obsidian to think they are missing.

**How to create and store your vault in OneDrive**:

1. **Set up OneDrive**: 
   - On **Windows**, sign in to OneDrive through the app or your Microsoft account.
   - On **macOS**, download the OneDrive app and sign in.
2. **Create a new vault in OneDrive**:
   - **On Windows/macOS**:
     1. Open **File Explorer** (Windows) or **Finder** (macOS) and navigate to **OneDrive → Documents**.
     2. Create a new folder, e.g., "Obsidian Vault".
     3. Open **Obsidian**, click on **Create new vault**, and select the OneDrive folder you just created.
3. **Open the vault on another device**:
   - To access the vault on another computer, open **Obsidian**. In the [[Manage vaults|Vault switcher]], go to **Open folder as vault**. Navigate to **OneDrive → Documents** and select your vault folder.

> [!note] OneDrive may not function well for Android syncing. Consider using apps like [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) or [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite) for a more reliable sync.

> [!tip] Best Practices
> - Always keep your vault files **"Available Offline"** by right-clicking the folder in OneDrive and selecting **"Always keep on this device"**.
> - Avoid using OneDrive's **Files On-Demand** feature for vaults, as it can cause syncing issues if files are not available locally.

## Syncthing

**Recommended systems**: `Windows`, `macOS`, `Linux`, `Android`

Syncthing is a decentralized file synchronization tool that doesn't rely on cloud storage. It syncs your vault directly between devices over your local network or the internet, providing a secure and private method for syncing Obsidian vaults.

**How to create and store your vault using Syncthing**:

1. **Set up Syncthing**:
   - Install Syncthing on each device where you want to sync your Obsidian vault. You can find installation guides on the [Syncthing website](https://syncthing.net/).
2. **Create and configure a shared folder**
   - **On all devices**:
     1. Open Syncthing and create a shared folder. Set the folder path to the location of your Obsidian vault.
     2. Make sure the same folder is selected on all the devices you want to sync.
     3. Set up folder syncing preferences, such as **Send & Receive** to ensure changes are synced bidirectionally between all devices.
3. **Open the vault in Obsidian**:
   - Once your folder is synced across devices, open **Obsidian**. In the [[Manage vaults|Vault switcher]], go to **Open folder as vault**. Navigate to the synced folder and open it as your vault.

> [!note] Syncthing works best when at least one device is always on to ensure continuous syncing, such as a desktop or home server.

> [!tip] Best practices
> - Ensure both devices are connected to the same network for local syncing, or configure Syncthing for internet-based syncing when devices are on different networks.
> - Exclude `.obsidian` from syncing if you want to maintain separate settings on each device, as syncing configuration files can lead to conflicts.
> - Set up ignore patterns for unnecessary files to avoid syncing temporary or backup files.

## Git

**Recommended systems**: `Windows`, `macOS`, `Linux`

**Git** is a version control system that allows you to track changes, collaborate with others, and sync your vaults through remote repositories like GitHub, GitLab, or a self-hosted Git server. This method is ideal for advanced users who are comfortable with Git commands and want version control for their notes.

**How to sync your vault using Git**:
1. **Set up a remote repository**:
    - Create a repository on a Git hosting platform such as GitHub, GitLab, or your own self-hosted server.
2. **Sync your vault**:
    1. Open a terminal or use a Git GUI (e.g., GitKraken, Sourcetree).
    2. Use `git init` to initialize a Git repository in your vault folder.
    3. Add the remote repository with `git remote add origin [URL]`.
    4. Commit your changes using `git add .` and `git commit -m "Your message"`.
    5. Push the changes to the remote repository using `git push origin main`.
3. **Pull changes on other devices**:
    - Clone the repository on another device and pull changes using `git pull origin main` to sync your vault across systems.

> [!note] Git provides strong version control, but syncing may not be automatic. You must manually push and pull changes. 

### Working Copy

**Recommended systems**: `iOS`

**Working Copy** is a Git client for iOS that allows you to clone, commit, and push changes to a Git repository from your iPhone or iPad. It's useful for users who want to manage their Obsidian vaults through Git on mobile devices. However, depending on what features you of Working Copy you use, you may have to pay Working Copy for an in-app purchase. 

**How to sync your vault using Working Copy**:

1. **Set up Working Copy**:
    - Install the **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** app on your iPhone or iPad.
2. **Clone your Git repository**:
    - Open Working Copy and tap **Add Repository**.
    - Enter the URL of your remote repository (e.g., GitHub, GitLab).
    - Once cloned, link the repository folder to an empty vault in **Obsidian** by selecting the folder as your vault directory.
3. **Commit and push changes**:
    - After editing your notes in Obsidian, use Working Copy to **Commit** changes and **Push** them to the remote Git repository.
    - On other devices, use Git to **Pull** changes from the repository to keep your vault in sync.

> [!note] While Working Copy isn't officially supported, many users have successfully used it to sync their notes through Git.

## Frequently asked questions

**Why is my preferred syncing service not officially supported?**

Unlike some note-taking apps which access one file at a time, Obsidian requires access to your entire vault for many of its features. For example, renaming a file requires Obsidian to update all links to that file across the vault. Achieving this functionality consistently and reliably with other services can be challenging or impossible. 

Obsidian officially supports Obsidian Sync and iCloud Drive, but there are many alternative syncing solutions available from other developers, including [[Community plugins]].

**Why do I need to keep files "Available Offline" on OneDrive?**

If OneDrive’s **Files On-Demand** feature is enabled, it may offload files from your local device to the cloud to save space. This can cause issues with Obsidian if the vault files are unavailable. Ensure that your vault folder is marked as "**Always keep on this device**" to avoid syncing problems.

**Where are my vaults stored?**

If you choose not to use [[#iCloud Drive]] or [[#OneDrive]] when you create your vault, Obsidian stores it in a local file system for the Obsidian app. Other apps, such as [[#Working Copy]], can access your vault by selecting the vault from the file system.

> [!warning]
> Before you uninstall Obsidian on iOS, please note that any notes stored in the local file system will be deleted by iOS. 
> 
> To avoid losing your data, make sure to back up your notes to a cloud service or an external storage device before uninstalling the Obsidian app.


**How do I have separate configurations for all my vaults?**

Obsidian allows you to customize the configuration folder per device using the [[Configuration folder|Customization/Config folders]] feature.

