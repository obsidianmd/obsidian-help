---
permalink: android
aliases:
  - Android
  - Obsidian/Android app
---

The Obsidian mobile app for Android brings powerful note-taking capabilities to your Android device. You can download it from [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) or as an [APK file](https://obsidian.md/download).
It supports Android versions 6.0 and above.

This page covers Android-specific features including widgets, Quick Settings tiles, and shortcuts.

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

Obsidian for Android offers several widget options to quickly access your vaults and notes from your home screen. Available widgets include:

- **View note** — Show a note and its contents on your home screen. The widget renders common Markdown formatting, hides frontmatter and caps at 500 lines. Tap the widget to open the selected note.
- **New note** — Create a new note in a vault.
- **Daily note** — Open today's daily note.
- **Search** — Open search in a vault.
- **Open Obsidian** — Launch the Obsidian app.

### Add a widget

1. Touch and hold an empty area on your home screen.
2. Select **Widgets**.
3. Find Obsidian, then select the widget you want to add.

> [!note] Note
> Obsidian widgets can be resized and they default to 2x1. To resize a widget, touch and hold it, then drag the resizing handles.

You can add multiple widgets of the same type to open different notes or run different searches.

### Customizing widgets

To configure a widget, touch and hold it on your home screen, then select **Edit** or **Configure**.

> [!note] Note
> When selecting a vault, choose one from the list, or select **Currently open vault** to use whichever vault is open when you use the widget.
>
> **Currently open vault** is available for the New note, Daily note, and Search widgets.
>
> ![[android-currently-open-vault-selection.png|400]]

**View note** widget configuration options:

![[android-view-note-configuration.png|400]]

**New note** widget configuration options:

![[android-new-note-configuration.png|400]]

**Daily note** widget configuration options:

![[android-daily-note-configuration.png|400]]

**Search** widget configuration options:

![[android-search-configuration.png|400]]

> [!note] Upgrading from an earlier version
> Widgets created in an earlier version may show **Tap to open Obsidian once to update**. Open Obsidian to finish updating them.

## Quick Settings tiles

Requires Android 7.0 or higher.

Add an Obsidian Quick Settings tile for fast access to the app from your notification shade.

- **Open note** — Open a specific note.
- **New note** — Create a new note.
- **Daily note** — Open today's daily note.
- **Search** — Open search.
- **Open Obsidian** — Launch the Obsidian app.

> [!note] Note
> You can add only one Quick Settings tile of each type.

Tiles use the same options as the matching widgets. The **Open note** tile includes **Vault**, **Note**, and **Open in**, but not the View note display options.

### Add a tile

1. Open your notification shade, typically by swiping down from your status bar. You may need to swipe again to see more options.
2. Select **Edit** in the Quick Settings tiles.
3. Find an Obsidian tile, then drag it to where you want it.
4. To configure a tile, touch and hold it.

The New note, Daily note, and Search tiles work as soon as you add them. Tapping one runs its action instead of opening its configuration, using the currently open vault unless you chose a specific vault. Removing a tile clears its settings.

![[android-tiles.png|400]]

## App shortcuts

Requires Android 7.1 or higher.

Obsidian provides app shortcuts that you can access in several ways:

- Touch and hold the Obsidian app icon.
- Drag a shortcut to your home screen.
- Search for Obsidian in your launcher.

Available shortcuts:

- **New note** — Create a new note in your vault.
- **Manage vaults** — Open the vault chooser to switch vaults.
- **Today** — Open today's daily note. (Requires Daily Notes core plugin)
- **New unique note** — Create a new unique note. (Requires Unique Note Creator core plugin)

![[android-app-shortcuts.png|400]]

> [!note] Note
> Shortcuts in Obsidian 1.11 are not configurable and will be overhauled in later versions to offer more dynamic options tailored to your specific notes.
