---
permalink: android
---
To Sync your notes with Obsidian on Android see [[Sync your notes across devices]].

## Vault location

When you launch Obsidian on Android, you'll be asked to choose where your vault data should be stored. You can choose **device storage** (recommended) or **app storage**.

### Device storage

With the **device storage** option, your data is stored in a shared location on your device. This allows your Obsidian vault to be accessed by other apps and services, such as third-party [[Sync your notes across devices|sync]] tools.

This is the recommended option because it offers better compatibility with sync tools and ensures your data persists even if you uninstall the app. However, this option requires additional permissions to access your device's files.

Due to limitations with Android, Obsidian will request "All files" access to function reliably. Google recommends this for apps like Obsidian which are considered "document management apps". [Learn more](https://developer.android.com/training/data-storage/manage-all-files).

The app only uses this permission to help you access your data on your device. Your data is never accessible to us. To learn more about how we protect your data and ensure your privacy, visit our [Security page](https://obsidian.md/security).

### App storage

With the **app storage** option, your data is stored in Obsidian’s private app storage. This keeps your data isolated from other apps for added privacy.

This is a good option if you're not using any external sync tools and prefer tighter app-level sandboxing for your notes.

With this option you can use [[Introduction to Obsidian Sync|Obsidian Sync]] and third-party syncing plugins available through [[Community plugins]], but you cannot use tools like Syncthing that rely on shared storage.

> [!warning] Uninstalling Obsidian will delete your local notes if you are using app storage
> If you use the **App storage** option your local vault data will be deleted if you uninstall the app. Your Obsidian vault data on other devices will not be deleted.
