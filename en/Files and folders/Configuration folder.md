---
aliases:
  - .config
  - Config folders
  - Customization folder
description: Learn how to access and manage your configuration folder on desktop and mobile devices.
mobile: true
permalink: configuration-folder
publish: true
---

Obsidian's configuration folder contains all the settings files pertaining to your [[Manage vaults|vault]].

By default, your configuration folder is named `.obsidian` and placed in the vault folder. When using a syncing service, or if you wish to test different profiles in the same vault, you may want to change your config folder. 

## Access your configuration folder

### Desktop

On desktop, the `.obsidian` folder is located in your vault folder. You can access it through your system file manager.

### Mobile

Accessing the configuration folder differs by platform:

**iOS and iPadOS**

There is no default way to access the `.obsidian` folder on iOS or iPadOS. To view and edit hidden files and folders, you'll need a third-party app such as:

- **Taio** — Free app with basic features for viewing and editing folder and file names.
- **Textastic** — Paid app with advanced file editing capabilities.

**Android**

To access the `.obsidian` folder on Android:

1. Open your system file manager.
2. Enable the "Show hidden files" toggle in the settings.
3. Navigate to your vault folder. The `.obsidian` folder will appear at the top level.

> [!tip]- Alternative file managers
> If your default file manager doesn't have a "Show hidden files" option, install a file manager app that includes this feature.

## Change your configuration folder

To set your config folder:

1. Open **[[Settings]] → Files and Links**.
2. In **Override config folder**, type the name of your profile, starting with a period (`.`). For example, `.obsidian-awesome`.
3. Relaunch Obsidian to have the changes take effect. 

> [!info] Any settings within your config folder will not transfer to your new config folder. However, your prior config folder will remain within your vault folder.
