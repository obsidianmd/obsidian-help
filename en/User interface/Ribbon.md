---
aliases:
  - User interface/Workspace/Ribbon
---
The ribbon functions as a space for common commands within Obsidian. 

On desktop, it's located in the left sidebar and remains visible even when the left sidebar is closed. 

On mobile, you can access the ribbon by tapping the **Menu option** ( ![[lucide-menu.svg#icon]] ) at the bottom right corner of the app when you're not editing a note.

## Actions

Each action is represented by an icon in the ribbon. Hovering over these icons will display a tooltip, while clicking or tapping them will activate the associated action.

The top set of icons consists of actions added by various plugins, including both [[Core plugins|core plugins]] and [[Community plugins]].

The bottom three icons in the ribbon correspond to essential Obsidian system actions:

1. Open another vault ( ![[obsidian-icon-vault-switcher.svg#icon]] ).
2. Access **help** ( ![[lucide-help-circle.svg#icon]] ).
3. Open **settings** ( ![[lucide-settings.svg#icon]] ).

In the mobile version, the ribbon can serve as a quick access action, which can be configured by following the instructions in the [[#Mobile|mobile section]] on customizing the ribbon.

## Customizing the ribbon

Your customized ribbon layout is remembered across sessions and synchronizes with other devices and the mobile app when app settings, specifically the `workspace.json` file, are synchronized.

### Desktop

On the desktop version, you can customize the ribbon as follows:

- Rearrange the order of ribbon actions by simply dragging and dropping the icons.
- To hide specific actions, right-click on an empty space within the ribbon and uncheck the actions you want to hide.

### Mobile

In the mobile version of Obsidian, you can perform quick access actions, rearrange items, and customize the visibility status of the ribbon menu. To access these customizations, follow these steps:

1. Open Obsidian's **settings** ( ![[lucide-cog.svg#icon]] ).
2. Navigate to the **appearance** section.
3. Scroll down to the **advanced** options.
4. Click the **Manage** button under the **Ribbon menu** item.

#### Quick access

By default, the quick access option is set to "Open ribbon menu" on a *short press*. If you choose another option as your quick access:

- The selected option will be triggered with a *short press*.
- The ribbon menu access will change to a *long press*.

> [!info] Quick access options depend on the Obsidian settings and core plugins you have enabled.

#### Rearrange and visibility

To change the order of items in the ribbon menu, press and hold the **drag-and-drop** ( ![[lucide-menu.svg#icon]] ) button and move the selected item up or down.

You can show or hide items in the ribbon menu using the red **remove** ( ![[lucide-minus-circle.svg#icon]] ) or green **add** ( ![[lucide-plus-circle.svg#icon]] ) buttons to toggle their visibility.
 
 ![[ribbon-rearrange-visibility.jpeg#interface]]
