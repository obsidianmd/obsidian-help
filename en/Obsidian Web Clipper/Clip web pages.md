---
permalink: web-clipper/capture
aliases:
  - Obsidian Web Clipper/Capture web pages
---
Once you install the [[Introduction to Obsidian Web Clipper|Web Clipper]] browser extension, you can access it in several ways, depending on your browser:

1. The Obsidian icon in your browser toolbar.
2. Hotkeys, to activate the extension from your keyboard.
3. Context menu, by right-clicking the web page you are visiting.

To save a page to Obsidian click the **Add to Obsidian** button.

## Capture a page

When you open the extension, Web Clipper extracts data from the current web page following the settings in your [[Obsidian Web Clipper/Templates|template]]. You can create your own templates, and customize the output using [[variables]] and [[filters]].

By default Web Clipper attempts to intelligently extract only the main article content, excluding other elements on the page. However, you can override this behavior in the following ways:

- If a custom template is present it uses your template.
- If a selection is present, it uses the selection. You can use `Ctrl/Cmd+A` to select the entire page.
- If any [[Highlighter|highlights]] are present, it uses the highlights.

## Download images

Images are not automatically downloaded when you use Web Clipper. Instead, images link to their web-based URL. This saves space in your vault but it means the images will not be accessible offline, or if the URL stops working.

You can download images for any file in Obsidian using the [[Command palette|command]] named **Download attachments for current file**. This command can also be mapped to a hotkey in Obsidian.

## Hotkeys

Web Clipper includes keyboard shortcuts you can use to speed up your workflow. To change key mappings go to **Web Clipper Settings** → **General** and follow the instructions for your browser. Mappings can be changed for all browsers except Safari which does not support editing hotkeys.

| Action             | macOS         | Windows/Linux  |
| ------------------ | ------------- | -------------- |
| Open clipper       | `Cmd+Shift+O` | `Ctrl+Shift+O` |
| Quick clip         | `Opt+Shift+O` | `Alt+Shift+O`  |
| Toggle highlighter | `Opt+Shift+H` | `Alt+Shift+H`  |
| Toggle reader      | `Opt+Shift+R` | `Alt+Shift+R`  |

## Interface functionality

The Web Clipper interface is divided into four sections:

1. **Header** where you can switch templates, turn on [[Highlighter|highlighting]], [[Reader|read mode]],  and access settings.
2. **Properties** shows the [[Properties|metadata]] extracted from the page that will be saved as [[Properties]] in Obsidian.
3. **Note content** that will be saved to Obsidian.
4. **Footer** allows you select the vault and folder, and add to Obsidian.

Header functionality includes:

- ![[lucide-chevrons-up-down.svg#icon]] **Template** switcher to use saved [[Obsidian Web Clipper/Templates|templates]] added in the extension settings.
- ![[lucide-more-horizontal.svg#icon]] **More** button to display page variables you can use in templates.
- ![[lucide-highlighter.svg#icon]] **Highlighter** button to turn on [[Highlighter|highlighting]].
- ![[lucide-book-icon.svg#icon]] **Reader** button to turn on [[Reader|reading view]].
- ![[lucide-picture-in-picture-2.svg#icon]] **Embed** button to move Web Clipper from the popup into the page.
- ![[lucide-settings.svg#icon]] **Settings** button to open the extension settings.

Footer functionality includes:

- **Add to Obsidian** button to save data to Obsidian.
- **Vault** dropdown to switch between saved vaults added in Web Clipper settings.
- **Folder** field to define which folder to save to.
- **Interpreter** to run [[Interpreter|natural language prompts]] on the page.

