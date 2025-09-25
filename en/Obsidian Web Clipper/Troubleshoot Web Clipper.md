---
permalink: web-clipper/troubleshoot
description: Learn how to fix common issues you may experience with Obsidian Web Clipper.
---
If you encounter issues with [[Introduction to Obsidian Web Clipper|Web Clipper]] you can get help via the [official Discord channel](https://discord.com/channels/686053708261228577/1285652864089198672). You can also report bugs on the [GitHub repository](https://github.com/obsidianmd/obsidian-clipper).

## General

### Some content is missing

By default, Web Clipper tries to intelligently capture content from the page. However, it may not be successful in doing so across all websites.

Web Clipper uses a home-grown, Obsidian-made library called [Defuddle](https://github.com/kepano/defuddle) to capture only the main content of the page. It is intended for articles, and it cannot get the desired content from all sites. You can [report bugs here](https://github.com/kepano/defuddle/issues).

To bypass Defuddle in Web Clipper, you can use the following methods:

- Select text, or use `Cmd/Ctrl+A`, to select all text and copy it over to Obsidian.
- [[Highlight web pages|Highlight content]] to choose exactly what you want to capture.
- Use a [[Obsidian Web Clipper/Templates|custom template]] for the site.

### No content appears in Obsidian

If you don't see any content in Obsidian after clicking **Add to Obsidian**:

- Check for errors in the Obsidian [[Help and support#Capture console logs|developer console]].
- Check that the vault name in Web Clipper settings matches the Obsidian vault *name* and not the vault *path*.
- Check that the folder name is correctly formatted, for example "Articles/News".

## Linux

#### Obsidian does not open

- Make sure the [[Obsidian URI]] protocol [[Obsidian URI#Register Obsidian URI|is registered]].
- If you are using Firefox,.you may need to [register in the browser's settings](https://kb.mozillazine.org/Register_protocol).

#### Obsidian opens but only the file name is saved

The issue is likely that Obsidian cannot access your clipboard. Clipboard access is necessary to pass data from your browser to Obsidian. Your configuration can affect how apps are sandboxed and clipboard permissions.

If you use Wayland, make sure that Obsidian has the necessary permissions to read the clipboard when the app is not in focus. For example, in your Hyprland configuration:

```ini
# hyprland.conf
misc {
    focus_on_activate = true
}
```

- If you use Flatpak, consider trying an [officially supported Obsidian version](https://obsidian.md/download).
- As a fallback, try switching to **Legacy mode** in **Web Clipper Settings** → **General**. This will bypass the clipboard and save content directly via URI, although this will limit the number of characters that can be clipped depending on your browser and Linux distribution.

## iOS and iPadOS

To enable the Web Clipper extension for Safari:

1. Go to Safari, tap the left-most button in the browser URL bar. (![[Safari button.png|12]])
2. Tap **Manage Extensions**.
3. Enable **Obsidian Web Clipper** in the **Extensions** list.
4. Exit the menu.
5. To use the extension, tap **the puzzle piece icon** in the URL bar.

To allow Web Clipper to run on all websites:

1. Go to iOS **Settings** →  **Apps** →  **Safari** →  **Extensions**.
2. Under **Permissions**, allow it to run on all websites.

To allow Obsidian to always receive Web Clipper content:

1. Go to iOS **Settings** →  **Apps** →  **Obsidian**.
2. Set **Paste from other apps** to **Allow**.