---
permalink: android
aliases:
  - Android
  - Obsidian/Android app
---

The Obsidian mobile app for Android brings powerful note-taking capabilities to your Android device. You can download it from [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) or as an [APK file](https://obsidian.md/download).
It currently supports Android versions 5.1 and above.

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

Obsidian for Android offers several widget options to quickly access your vaults and notes from your home screen. Available widgets include:

- **Open Note** — Open a specific note
- **New Note** — Create a new note
- **Search** — Launch a search query
- **Daily Note** — Open your daily note
- **Open Obsidian** — Launch the app

> [!note] Note
> These widgets are static, and do not show any previews of the selected note or vault.
> See below for dynamic preview widgets.

- **View Note** - View a specific note (a dynamic widget that shows a preview of the selected note)

To add widgets to your home screen:
1. Tap and hold anywhere on your home screen
2. Select "Widgets"
3. Find Obsidian, then select a widget that you want to use.

> [!note] Note
> Obsidian widgets can be resized. To resize a widget, tap and hold it, then drag the resizing handles.

You can add multiple widgets of the same type to open different files or trigger different search queries. 

To configure a widget, long-press it on your home screen, then find an "Edit" or "Configure" option. This will allow you to specify the specific parameters required for that widget's on-tap action to work, like File or Path, Search Query, and Vault Name.

See this [Google Support article](https://support.google.com/android/answer/9450271?hl=en) for more information on Android Widgets.

## Quick Settings tiles

Requires Android 7.0 or higher.

Add an Obsidian Quick Settings tile for fast access to the app from your notification shade. Works on your Home Screen and Lock Screen.

> [!note] Note
> Unlike app widgets, you can only add one Quick Settings tile of the same type.

To add a quick settings tile to your notification shade:

1. Access your notification shade, typically by swiping down from your status bar. Note: you may need to swipe one more time in order to see more options.
2. In the Quick Settings tiles, select "Edit" - this is usually the same section where toggles like Wi-Fi, Bluetooth, and Orientation Lock are located.
3. Find and select an Obsidian Quick Settings tile, then rearrange it to your liking.
4. To configure a Quick Settings tile, tap and hold it to bring up the configuration screen.

See this [Google Support article](https://support.google.com/android/answer/9083864?hl=en) for more information on Android Quick Settings.

## Shortcuts

Requires Android 7.1 or higher.

Obsidian provides app shortcuts that can be accessed in several ways:

- Long-press the Obsidian app icon
- Drag the shortcut icon to your home screen
- Access via the search bar on your launcher (available on most device vendors)

## Intent API

Obsidian for Android exposes an Intent API that lets other apps send content to Obsidian, and lets automation tools (such as [Tasker](https://tasker.joaoapps.com) or [MacroDroid](https://www.macrodroid.com)) trigger captures without any user interaction.

There are two integration points:

- **Share sheet** — any app using the standard Android share intent will appear in Obsidian Capture's share sheet. This is the recommended path for most integrations.
- **Direct service call** — automation apps can bypass the share sheet UI entirely and invoke the capture service directly.

---

### Share sheet integration

Obsidian registers `CaptureShareHandlerActivity` for the following intent filters. Any app that fires one of these intents will offer Obsidian Capture as a share target.

#### Share text

```
Action:   android.intent.action.SEND
MIME:     text/plain
Extra:    android.intent.extra.TEXT  (String — the text to capture)
```

Example (Kotlin):

```kotlin
val intent = Intent(Intent.ACTION_SEND).apply {
    type = "text/plain"
    putExtra(Intent.EXTRA_TEXT, "My captured note")
}
startActivity(Intent.createChooser(intent, null))
```

#### Share a single image

```
Action:   android.intent.action.SEND
MIME:     image/*
Extra:    android.intent.extra.STREAM  (Uri — content URI of the image)
```

The sharing app must grant `FLAG_GRANT_READ_URI_PERMISSION` on the URI. Android does this automatically when using `Intent.createChooser`.

Example (Kotlin):

```kotlin
val intent = Intent(Intent.ACTION_SEND).apply {
    type = "image/jpeg"
    putExtra(Intent.EXTRA_STREAM, imageUri)
    addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
}
startActivity(Intent.createChooser(intent, null))
```

#### Share multiple images

```
Action:   android.intent.action.SEND_MULTIPLE
MIME:     image/*
Extra:    android.intent.extra.STREAM  (ArrayList<Uri> — content URIs of the images)
```

Example (Kotlin):

```kotlin
val intent = Intent(Intent.ACTION_SEND_MULTIPLE).apply {
    type = "image/jpeg"
    putParcelableArrayListExtra(Intent.EXTRA_STREAM, arrayListOf(uri1, uri2))
    addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
}
startActivity(Intent.createChooser(intent, null))
```

Shared images are copied into the `attachments/` folder inside your vault. Obsidian wiki-links (`![[attachments/filename.jpg]]`) are inserted into the target note.

---

### Capture Service (e.g. for automation)

The capture service can be started directly, bypassing the UI. This is useful for automations in apps such as Tasker.

**Component:** `md.obsidian/md.obsidian.entrypoints.share.service.UpdatingCaptureTextService`


#### Required extras

Every direct service call must include these extras:

| Extra key | Type | Description |
|---|---|---|
| `android.intent.extra.TEXT` or `android.intent.extra.STREAM` | String or Uri | The content to capture |
| `capture_destination` | String | Storage location. See [Storage](#storage) |
| `capture_destination_type` | String | Where in the vault to write. See [Destination type](#destination-type) |
| `vault_name` | String | Name of the target vault |

#### Storage

| Value | Description |
|---|---|
| `APP_STORAGE` | Obsidian's private app storage |
| `DEVICE_STORAGE` | Shared device storage (requires SAF URI) |

When using `DEVICE_STORAGE`, also include:

| Extra key | Type | Description |
|---|---|---|
| `saf_uri_string` | String | SAF tree URI for the vault root, e.g. `content://com.android.externalstorage.documents/tree/primary%3AObsidian` |

#### Destination type

| Value | Description | Additional extras required |
|---|---|---|
| `BOOKMARK` | Append/prepend to a bookmark file | `file_or_path` |
| `NOTE` | Append/prepend to a specific note | `file_or_path` |
| `VAULT` | Write to a note resolved at capture time | `note_capture_destination` |

| Extra key | Type | Description |
|---|---|---|
| `file_or_path` | String | Path to the note or bookmark file relative to the vault root, e.g. `inbox/capture.md` |
| `note_capture_destination` | String | `DAILY_NOTE` or `NEW_NOTE` (only for `VAULT` destination type) |
| `new_note_name` | String | Filename for the new note including `.md` extension (only when `note_capture_destination = NEW_NOTE`) |

#### Capture position

| Extra key | Type | Default | Description |
|---|---|---|---|
| `capture_position` | String | `append` | `append` — add content after existing body. `prepend` — add content before existing body, after front matter. |

#### Example: append text to a daily note (Kotlin)

```kotlin
val intent = Intent(Intent.ACTION_SEND).apply {
    type = "text/plain"
    putExtra(Intent.EXTRA_TEXT, "My automated note")
    putExtra("capture_destination", "APP_STORAGE")
    putExtra("capture_destination_type", "VAULT")
    putExtra("vault_name", "My Vault")
    putExtra("note_capture_destination", "DAILY_NOTE")
    putExtra("capture_position", "append")
    setClassName(
        "md.obsidian",
        "md.obsidian.entrypoints.share.service.UpdatingCaptureTextService"
    )
}
ContextCompat.startForegroundService(context, intent)
```

#### Example: append text to a specific note on device storage (Kotlin)

```kotlin
val intent = Intent(Intent.ACTION_SEND).apply {
    type = "text/plain"
    putExtra(Intent.EXTRA_TEXT, "Meeting notes")
    putExtra("capture_destination", "DEVICE_STORAGE")
    putExtra("saf_uri_string", "content://com.android.externalstorage.documents/tree/primary%3AObsidian")
    putExtra("capture_destination_type", "NOTE")
    putExtra("vault_name", "My Vault")
    putExtra("file_or_path", "inbox/meetings.md")
    putExtra("capture_position", "append")
    setClassName(
        "md.obsidian",
        "md.obsidian.entrypoints.share.service.UpdatingCaptureTextService"
    )
}
ContextCompat.startForegroundService(context, intent)
```

> [!note] Permission required
> To start the Obsidian capture service from another app, your custom app needs the `android.permission.FOREGROUND_SERVICE` permission in its manifest. On Android 14 and higher, `android.permission.FOREGROUND_SERVICE_DATA_SYNC` is also required.

