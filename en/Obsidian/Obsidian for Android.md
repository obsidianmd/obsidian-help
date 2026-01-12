---
permalink: android
aliases:
  - Android
---

The Obsidian mobile app for Android brings powerful note-taking capabilities to your Android device. You can download it from [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) or as an [APK file](https://obsidian.md/download).

This page covers Android-specific features including widgets, Quick Settings integration, and shortcuts.

## Sync

To sync your notes with Obsidian on Android see [[Sync your notes across devices]].

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

## Widgets

Obsidian for Android offers several widget options to quickly access your vault from your home screen. Available widgets include:

- **Open Note** — Open a specific note
- **New Note** — Create a new note
- **Search** — Launch a search query
- **Daily Note** — Open your daily note
- **Open Obsidian** — Launch the app

You can add multiple widgets of the same type to open different files or trigger different search queries. To configure a widget, long-press it on your home screen.

## Quick Settings Tile

Requires Android 7.0 or higher.

Add an Obsidian Quick Settings tile for fast access to the app from your notification shade.

## Shortcuts

Requires Android 7.1 or higher.

Obsidian provides app shortcuts that can be accessed in several ways:
- Long-press the Obsidian app icon
- Drag the shortcut icon to your home screen
- Access via the search bar on your launcher (available on most device vendors)

Available shortcuts:
- **Open note** — Open a specific note in your vault
- **Daily note** — Jump directly to today's daily note

> [!note]
> Shortcuts are currently not configurable.

