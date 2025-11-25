---
aliases:
  - Sidebar
  - left Sidebar
  - right Sidebar
description: Learn about Obsidian's left and right sidebars and how to manage tabs and tab groups.
mobile: true
permalink: sidebar
publish: true
---

Obsidian has two sidebars: a left sidebar and a right sidebar. Sidebars hold tabs created by plugins, such as [[Backlinks]], [[Outgoing links]], and the [[File explorer]]. On desktop, you can also drag notes into the sidebar to keep them visible alongside your main editor. 

On desktop and larger tablets, the left sidebar includes the [[Ribbon]]. On mobile and smaller tablets, the sidebars are [[#Open hidden sidebars|collapsed by default]]. 

## Open hidden sidebars

### Desktop and larger tablets

On desktop and larger tablets, open a collapsed sidebar by selecting the left expand ( ![[obsidian-icon-side-bar-left.svg#icon]] ) or right expand ( ![[obsidian-icon-side-bar-right.svg#icon]] ) icon.

### Mobile and smaller tablets

On mobile and smaller tablets, you can open hidden sidebars in the following ways:

- Swipe left or right
- Select the left expand ( ![[obsidian-icon-side-bar-left.svg#icon]] ) icon (left sidebar only)
- Use the *Toggle left* or *Toggle right* [[Command palette]] options. 

## Tabs

By default, plugins create new tabs instead of new [[#Tab groups]].

You can switch between tabs by selecting on the icon. A tooltip appears to help you identify tabs.

In each pane, you can only see one tab at any given moment. Some actions automatically bring a tab into view. For example, when you select a tag, its tab opens.

### Open or reopen tabs

There are several ways to add tabs to your sidebars:

- **Enable a plugin**: Many plugins automatically create sidebar tabs when enabled. Go to **Settings → Community plugins** (or **Core plugins**) and enable the plugin for the tab you want.
- **Run a command**: Use the [[Command palette]] to search for commands that open specific tabs. For example, search for "Backlinks" or "Outgoing links" to open those tabs.
- **Drag a note** (desktop only): On desktop, you can drag a note from the [[File explorer]] or from an editor tab into the sidebar to open it there.

If you've closed a tab and want to get it back, these same methods will reopen it.

### Close tabs

Some tabs can be closed via the right-click menu, while others cannot. If you don't want to see a tab that can't be closed, consider disabling the relevant plugin or collapsing the sidebar by selecting the arrow icon.

### Rearrange tabs

You can drag and drop tab icons to rearrange them within a group of tabs.

On desktop, you can also drag tabs from the sidebar into the main editor area to open them there.

### Pin tabs

You can pin a tab in the sidebar to control how it updates when you interact with other parts of the app.

To pin or unpin a tab to the sidebar, drag the tab over to or from the sidebar. 

The behavior of a pinned tab within the sidebar depends on its content type:

- **Notes and Bases**: A pinned note or base tab stays in place. New notes open as separate tabs in the main editor instead of replacing the pinned tab.
- **Panes** (like [[Backlinks]] or [[Outgoing links]]): A pinned pane stays focused on the last selected note. Selecting a different note does not update the pinned pane.

For information about pinning tabs in the main editor, see [[Tabs#Pin a tab|Pin a tab]].

## Tab groups

You can have multiple tab groups in the sidebar.

### Create tab groups

To create a new tab group, drag the icon of a tab above or below a current tab group. The highlighted area indicates where the new tab group will be created.

### Close tab groups

To close a tab group, you can [[#Close tabs|close all tabs in it]], or drag all tabs in the group by their icons and drop them into existing tab groups.

When only the tab area of a tab group is highlighted, the tab being dragged will merge with other tabs in that group.
