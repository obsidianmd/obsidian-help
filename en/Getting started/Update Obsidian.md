---
aliases:
  - How to/Update Obsidian
  - Installer version update
---

Obsidian regularly checks for new updates. If automatic updates are enabled, the application will apply any available updates when you restart it.

## Check for an update and the current version

Open **Settings → General**.

You can find the current Obsidian version and installer version in the upper-left corner.

![[application-installer-current-version.png#interface]]

To check for updates, select **Check for updates**. If there are new updates, this button will change to **Relaunch**. select **Relaunch** to apply any available updates.

## Disable automatic updates

If you prefer to update Obsidian manually, you can disable automatic updates.

1. Open **Settings → General**.
2. Disable **Automatic updates**.

## Installer updates

Occasionally, Obsidian [release notes](https://obsidian.md/changelog/) will indicate that a manual installer update is required, and include a link to our website. These updates address the scaffolding of Obsidian, and cannot be handled within the automatic update process. 

> [!tip] 
> You **do not** need to uninstall Obsidian to update the installer version.

To update Obsidian when an installer update is required:

1. Navigate to [https://obsidian.md/download](https://obsidian.md/download "https://obsidian.md/download").
2. Download the installer onto your system.
	1. If Obsidian is open, completely close it.
3. Run the installation process as directed in [[Download and install Obsidian]].

Your installer update is now complete. You may now re-open Obsidian.

> [!Question]- A plugin author or theme developer is asking me to update my installer, but the Obsidian team has not. Why?
> This is very common when we have internal library updates within the installer that do not need a minimum application version update, which would force everyone to update. 
> 
> For example, if you were using a PDF annotation plugin, and we updated the `pdf.js` library within Obsidian, the plugin author would want to take advantage of updates of that library. 
>
> Similarly, updated CSS capability would prompt a theme developer to require an installer update, so you can have the benefit of some new options that allow more styling features. 

## Troubleshooting

Some features may depend on a more recent installer version. If you experience issues with a recently added feature, consider [[Download and install Obsidian|reinstalling Obsidian]] to update the installer version.
