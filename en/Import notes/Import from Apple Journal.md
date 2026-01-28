---
permalink: import/apple-journal
---
Obsidian lets you easily migrate your journal entries from Apple Journal using the [[Importer|Importer plugin]]. 
This will convert your journals to durable Markdown files, that you can use with Obsidian and many other apps.

## Export your data from Apple Journal

### On iPhone
Follow the instructions for [Print and export entries in Journal on iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. Go to the Journal app on your iPhone.
2. Choose a journal or tap All Entries.
3. Tap the More button at the top of the screen.
4. Tap Export, then choose Export.
5. Choose a location, then tap the Selected button.

### On Mac (Tahoe)
Follow the instructions for [Print and export entries in Journal on Mac](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. Go to the Journal app on your Mac.
2. Go to File > Export, then choose Export.

## Import Apple Journal data into Obsidian

You will need the official Obsidian [[Importer]] plugin, which you can [install here](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Settings]]**.
2. Go to **Community Plugins** and [install Importer](obsidian://show-plugin?id=obsidian-importer).
3. Enable the Importer plugin.
4. Open the **Importer** plugin using the command palette or ribbon icon.
5. Under **File format**, choose **Apple Journal (HTML Export)**.
6. In **Files to import**, select the folder with exported data, usually _AppleJournalEntries_, or individual files from _Entries_.
7. Review and edit the other import options.
8. Select Import and wait until import is complete
9. You're done!


## Supported content

The plugin can import Journal metadata as frontmatter, such as _state-of-mind_, _contacts_, _location_, and _workout-route_.

> [!note]
> The plugin does not import resources. Attachments like photos, videos, and audio recordings are ignored.
