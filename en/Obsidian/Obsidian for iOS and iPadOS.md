---
permalink: ios
aliases:
  - iOS
  - iPadOS
  - Obsidian/iOS app
---
The Obsidian mobile app for iOS and iPadOS brings powerful note-taking capabilities to your iPhone and iPad. You can download it from the [Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

This page covers iOS-specific features including widgets, Siri integration, and Shortcuts. 

## Sync

For information on syncing notes between devices, please see [[Sync your notes across devices]].

## Widgets

Obsidian for iOS offers several widgets to take quick actions on your vault.

> [!note] Note
> Widgets are available on iOS and iPadOS 18 and higher.
> Widgets are not available when using "Require Face ID" to unlock the app.


### Lock Screen and Control Center widgets

Lock Screen and Control Center widgets allow you to:
- Create a new note
- Open a specific note
- Open daily note
- Open search
- Open Obsidian

### Home Screen widgets

Home Screen widgets allow you to:
- Create a note
- View a note
- Open your daily note

### Customizing widgets

You can customize widgets to suit your workflow, such as choosing which vault to use or specifying a particular note to open.

- **Home Screen widgets:** Tap and hold the widget, then select **Edit Widget**.
- **Lock Screen widgets:** Touch and hold your Lock Screen, tap **Customize**, select the Lock Screen, then tap the widget you want to customize.
- **Control Center widgets:** Open Control Center, tap the **+** button at the top left to begin editing, then tap the widget you want to customize.

**New Note** widget configuration options:

![[ios-new-note-configuration.png|400]]

**View Note** widget configuration options:

![[ios-view-note-configuration.png|400]]

## Shortcuts

Obsidian integrates with Apple's Shortcuts app, allowing you to create powerful automations. Available shortcuts include:

- **Open a note** — Open a specific note in your vault
- **Create a new note** — Create a new note in your vault
- **Open daily note** — Jump directly to today's daily note
- **Capture to Daily Note** — Append or prepend text to the daily note without opening the Obsidian app
- **Capture to Bookmark** — Append or prepend text to a bookmarked note without opening the Obsidian app

Capture shortcuts are particularly useful for quick note-taking, as they allow you to add content to a note in the background.

## Share Sheet

Obsidian's Share Sheet lets you capture content from web pages. It also works with apps like YouTube and other social networks.

> [!note]
> - The native Share Sheet is available on iOS and iPadOS 18 and higher.
> - The Share Sheet features described in this section require Obsidian 1.13.0 or later.

Use the Share Sheet to quickly send content from another app to Obsidian:
1. In another app, tap the **Share** button.
2. Select **Obsidian**.
3. Choose a Location.
4. Review or edit the captured content.
5. Tap **Save**.

![[ios-share-sheet-extension.png|400]]

### Locations

Locations let you decide where the shared content should go before you save it.

Locations can capture to:
- **New note** — Create a new note in a vault or folder.
- **Daily note** — Append or prepend content to today's daily note.
- **Bookmarked note** — Append or prepend content to a bookmarked note.
- **Note** — Choose an existing note in your vault.
- **New bookmark** — Save a shared URL to Obsidian bookmarks.

![[ios-share-sheet-locations.png|400]]

### Customizing Locations

You can create Locations for common workflows, such as saving articles to an inbox, appending quotes to your daily note, or adding links to bookmarks.

To customize Locations:

1. Open Obsidian from the iOS Share Sheet.
2. Tap the current Location in the toolbar.
3. Tap the **+** button to create a new Location, or select an existing Location to edit.
4. Choose the vault, behavior, and optional settings.

Depending on the `Behavior` type, you can configure options such as:
- Folder
- Template
- Bookmark group
- Append or prepend position
- Whether shared links capture **Full Text** or only the **URL**

![[ios-share-sheet-add-location.png|400]]

### Using a Template When Sharing

You can use a template when sharing content from the Share Sheet. Templates let you format captured web content with details such as the page title, author, source website, and publication date.

To set up a Location with a template:

1. Open Obsidian from the iOS Share Sheet.
2. Tap the current Location in the toolbar.
3. Tap the **+** button to create a new Location.
4. Enter a name for the Location.
5. Select a vault.
6. Set **Behavior** to **New Note**.
7. In the **Optional** section, tap **Template**.
8. Select a note from your vault to use as the template.
9. Tap **Save** to save the Location.

![[ios-share-sheet-set-template.png|400]]

When you share a link using this Location, Obsidian applies the template first, then adds the shared content.

Supported template placeholders:

| Placeholder | Description |
| --- | --- |
| `{{author}}` | Author of the article |
| `{{description}}` | Description or summary of the article |
| `{{domain}}` | Domain name of the website |
| `{{favicon}}` | URL of the website's favicon |
| `{{image}}` | URL of the article's main image |
| `{{published}}` | Publication date of the article, using the default date format |
| `{{published: YYYY-MM-DD}}` | Publication date using a custom date format |
| `{{site}}` | Name of the website |
| `{{title}}` | Title of the article |
| `{{url}}` | Article URL |
| `{{wordCount}}` | Total number of words in the extracted content |

You can also use standard template date and time placeholders:

| Placeholder | Description |
| --- | --- |
| `{{date}}` | Current date |
| `{{date: YYYY-MM-DD}}` | Current date using a custom format |
| `{{time}}` | Current time |
| `{{time: HH:mm}}` | Current time using a custom format |

## Siri integration

You can use Siri voice commands to interact with Obsidian:

- "Capture using Obsidian"
- "Capture to Obsidian"
- "Open my daily note in Obsidian"
- "Search in Obsidian"

## Spotlight integration

When you search for "Obsidian" in iOS Spotlight, you'll see quick actions:
- New Note
- Search
- Daily Note


