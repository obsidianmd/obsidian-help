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

Obsidian for Android provides widgets that let you open your vaults and notes from your home screen.

- **View note** — Show a note and its contents.
- **New note** — Create a new note in a vault.
- **Daily note** — Open today's daily note.
- **Search** — Open search in a vault.
- **Open Obsidian** — Launch the Obsidian app.

Widgets can be resized. To resize a widget, touch and hold it, then drag the resizing handles. On Android 12 and later, the widget picker shows a preview of each widget.

### Add a widget

1. Touch and hold an empty area on your home screen.
2. Select **Widgets**.
3. Find Obsidian, then select the widget you want to add.

You can add multiple widgets of the same type to open different notes or run different searches.

See this [Google Support article](https://support.google.com/android/answer/9450271?hl=en) for more information on Android widgets.

<!-- TODO screenshot: android-widget-picker.png — Android 12 or later widget picker showing the Obsidian widgets and previews. -->
<!-- ![[android-widget-picker.png|400]] -->

### View note widget

The **View note** widget displays the contents of a note on your home screen. It supports common Markdown formatting, including bold, italic, strikethrough, inline code, links, lists, task checkboxes, blockquotes, code blocks, and thematic breaks. Frontmatter is hidden.

Scroll through the note inside the widget to read longer notes. Content fades at the top and bottom edges, and notes longer than 500 lines end with an ellipsis.

Tap anywhere in the widget to open the note. The widget refreshes when you leave the Obsidian app.

If the note or its vault is moved, the widget tries to find them again. If it can't, it shows a message; tap the widget to configure it again.

<!-- TODO screenshot: android-view-note-widget.png — Home screen with a View note widget showing a note title, formatted content, task items, and faded edges. -->
<!-- ![[android-view-note-widget.png|400]] -->

### Configure a widget

To configure a widget, touch and hold it on your home screen, then select **Edit** or **Configure**.

The available options depend on the widget:

| Option | Applies to | Description |
| --- | --- | --- |
| **Vault** | View note, New note, Daily note, Search | The vault the widget uses. |
| **Currently open vault** | New note, Daily note, Search | Follow the vault that is open when you tap the widget. |
| **Note** | View note | The note to display. Choose a bookmarked note or browse the vault. |
| **Note type** | New note | Create a **New note** or a **Unique note**. Unique notes require the Unique note creator core plugin. |
| **Open in** | View note, New note, Daily note | Open the note in the current tab or a new tab. |
| **Query** | Search | An optional search term to use when the widget opens search. |
| **Show note name** | View note | Show or hide the note name above the content. |
| **Font** | View note | Use the default, serif, or monospace font. |

> [!note] Note
> **Currently open vault** is available for the New note, Daily note, and Search widgets.

<!-- TODO screenshot: android-view-note-configuration.png — View note configuration with Vault, Note, Open in, Show note name, and Font options. -->
<!-- ![[android-view-note-configuration.png|400]] -->

### Other widgets

- **New note** — Create a new note in the selected vault. Choose **New note** or **Unique note**, then open it in the current tab or a new tab.
- **Daily note** — Open today's daily note in the selected vault, either in the current tab or a new tab.
- **Search** — Open search in the selected vault. Add an optional search term.
- **Open Obsidian** — Launch the Obsidian app. This widget has no configuration options.

<!-- TODO screenshot: android-new-note-configuration.png — New note configuration showing Vault with Currently open vault, Note type, and Open in. -->
<!-- ![[android-new-note-configuration.png|400]] -->

### Missing notes and vaults

If a widget can't find its note or vault, it shows a message and tries to find them again. Tap the widget to open its configuration and select another note or vault.

> [!note] Upgrading from an earlier version
> Widgets created in an earlier version may show **Tap to open Obsidian once to update**. Open Obsidian to finish updating them.

## Quick Settings tiles

Requires Android 7.0 or higher.

Add an Obsidian Quick Settings tile for fast access to the app from your notification shade. Tiles are available from the notification shade and, on supported devices, the Lock Screen.

- **Open note** — Open a specific note.
- **New note** — Create a new note.
- **Daily note** — Open today's daily note.
- **Search** — Open search.
- **Open Obsidian** — Launch the Obsidian app.

> [!note] Note
> You can add only one Quick Settings tile of each type.

Tiles use the same options as the matching widgets. **Open note** tiles include **Vault**, **Note**, and **Open in**, but not the View note display options.

### Add a tile

1. Open your notification shade, typically by swiping down from your status bar. You may need to swipe again to see more options.
2. Select **Edit** in the Quick Settings tiles. This is usually the same section where toggles such as Wi-Fi, Bluetooth, and Orientation Lock are located.
3. Find an Obsidian tile, then drag it to where you want it.
4. To configure a tile, touch and hold it.

<!-- TODO screenshot: android-quick-settings-tiles.png — Quick Settings shade with the Obsidian tiles and their subtitles. -->
<!-- ![[android-quick-settings-tiles.png|400]] -->

On Android 10 and later, tiles show a subtitle: the note name for an **Open note** tile, the selected vault name for other tiles (if one is set), or **Tap to configure** when the tile isn't configured.

Tap an unconfigured tile to open its configuration. Removing a tile clears its settings.

<!-- TODO screenshot: android-quick-settings-tile-configuration.png — Open note tile configuration with Vault, Note, and Open in. -->
<!-- ![[android-quick-settings-tile-configuration.png|400]] -->

See this [Google Support article](https://support.google.com/android/answer/9083864?hl=en) for more information on Android Quick Settings.

## Shortcuts

Requires Android 7.1 or higher.

Obsidian provides app shortcuts that you can access in several ways:

- Touch and hold the Obsidian app icon.
- Drag a shortcut to your home screen.
- Search for Obsidian in your launcher.

Available shortcuts:

| Shortcut | Description |
| --- | --- |
| **New note** | Create a new note in your vault. |
| **Today** | Open today's daily note. |
| **New unique note** | Create a note with a unique timestamp prefix. |
| **Manage vaults** | Open the vault chooser to switch vaults. |

> [!note] Note
> **Today** requires the Daily notes core plugin. **New unique note** requires the Unique note creator core plugin. Available shortcuts change when you enable or disable these plugins.
