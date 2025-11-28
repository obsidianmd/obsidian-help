---
aliases:
  - User interface/Workspace/Ribbon
description: Learn how to use the ribbon, a space for common commands in Obsidian, and customize it on desktop and mobile.
mobile: true
permalink: ribbon
publish: true
---

The ribbon functions as a space for common commands within Obsidian. 

On desktop, it's located in the [[Sidebar#Open hidden sidebars|left Sidebar]] and remains visible even when the left Sidebar is closed. 

On mobile, you can access the [[Use the mobile app#Ribbon actions|Ribbon Actions]] by tapping the **Menu option** ( ![[lucide-menu.svg#icon]] ) at the bottom-right corner of the app when you're not editing a note.

## Actions

Each action is represented by an icon in the ribbon. Hovering over these icons will display a tooltip, while selecting them will activate the associated action. On mobile, you can tap these icons to activate them.

1. Open **[[Manage vaults|Vault switcher]]** ( ![[obsidian-icon-vault-switcher.svg#icon]] ).
2. Access **help** ( ![[lucide-help-circle.svg#icon]] ).
3. Open **[[Settings]]** ( ![[lucide-settings.svg#icon]] ).

In the mobile version, you can configure a quick access action on the ribbon. For more information, see the [[#Mobile|mobile section]] and [[Use the mobile app]].

## Customize the ribbon

Your customized ribbon layout is remembered across sessions. It synchronizes with other devices and the mobile app when app settings (in the `workspace.json` and `workspace-mobile.json` files) are synchronized.

### Desktop

On the desktop version, you can customize the ribbon as follows:

- Rearrange the order of ribbon actions by dragging and dropping the icons.
- To hide specific actions, right-click on an empty space within the ribbon and uncheck the actions you want to hide.

#### Hide the ribbon

You can hide the ribbon in two ways:

- Right-click on the ribbon and select **Hide ribbon**.
- Open **[[Settings]]** → **Appearance**, scroll down to **Advanced**, and disable **Show ribbon**.

#### Show the ribbon

If you have hidden the ribbon and want to display it again:

1. Open **[[Settings]]** → **Appearance**.
2. Scroll down to **Advanced**.
3. Enable **Show ribbon**.
4. The ribbon will appear again on the left side of the window.

> [!tip] Custom CSS
> If you're using a community theme or custom CSS, make sure it does not hide the ribbon through custom style rules.

### Mobile

In the mobile version of Obsidian, you can perform quick access actions, rearrange items, and customize the ribbon menu. To access these customizations, follow these steps:

1. Open Obsidian's **[[Settings]]** ( ![[lucide-cog.svg#icon]] ).
2. Navigate to the **appearance** section.
3. Scroll down to the **advanced** options.
4. Select the **Manage** button under the **Ribbon menu** item.

#### Quick access

By default, the quick access option is set to "Open ribbon menu" on a *short press*. If you choose another option as your quick access:

- The selected option will be triggered with a *short press*.
- The ribbon menu access will change to a *long press*.

> [!info] Quick access options depend on the Obsidian settings and core plugins you have enabled.

#### Rearrange and visibility

To change the order of items in the ribbon menu, press and hold the **drag-and-drop** ( ![[lucide-menu.svg#icon]] ) button and move the selected item up or down.

You can show or hide items in the ribbon menu using the red **remove** ( ![[lucide-minus-circle.svg#icon]] ) or green **add** ( ![[lucide-plus-circle.svg#icon]] ) buttons to toggle their visibility.
 
 ![[ribbon-rearrange-visibility.jpeg#interface]]
