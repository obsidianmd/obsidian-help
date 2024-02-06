---
aliases:
  - Concepts/Insider builds
  - Insider builds
---
Get early access to upcoming releases by enabling _early access versions_. Early access versions are only available to users with a [[Catalyst license]].

> [!warning]
> Early access versions are beta releases. They include new features but may be less stable. Don't enable early access versions if you prefer a more reliable experience.
> 
> Be aware that community plugin and theme developers receive early access versions at the same time as everyone else. Be patient with developers who need to make updates to support new features.

## Enable early access versions for desktop

To receive early access versions as soon as they're available, follow these steps:

1. Open **Settings**.
2. In the sidebar, select **General**.
3. Under **App**, enable **Receive early access versions**.

## Install early access versions on mobile devices

To find instructions on how to install early access versions on your mobile device, follow these steps:

1. Join the [Obsidian Discord server](https://discord.gg/veuWUTm).
2. [[Catalyst license#Get your Discord badge|Get your Discord badge]] to access insider channels.
3. Open Discord.
4. In the `#insider-mobile-release` channel, open **Pinned Messages**.
   - On desktop, select the pushpin icon in the upper-right corner.
   - On mobile, swipe left and select **Pins**.
5. Under **Pinned Messages**, select the installation link for your device:
   - If you're using iOS, open the TestFlight link on your iPhone or iPad.
   - If you're using Android, download and install the APK file.

## Report issues and other feedback

If you discover an issue in an early access version, consider reporting it to the Obsidian team. Before you report an issue, search the [forum](https://forum.obsidian.md/) or Discord to see if someone has already reported it.

To report an issue, use one of the following channels:

- On Discord, report the issue in the respective `#insider-release` channel.
- In the forum, create a new topic under [Bug reports](https://forum.obsidian.md/c/bug-reports/7).

When you report an issue, include the build version and the OS you're running it on. You can find the build version under **Settings → About → App → Current version**.

## Switch back to public versions on desktop

To switch back to using public versions (not early access) on desktop:

1. Disable early access versions.
   1. Open **Settings**.
   2. In the sidebar, select **General**.
   3. Under **App**, disable **Receive early access versions**.
2. Close Obsidian.
3. Delete the `obsidian-VERSION.asar` file, where `VERSION` is the Obsidian version.
   - Windows: `%APPDATA%\obsidian\obsidian-VERSION.asar`
   - Mac: `~/Library/Application Support/obsidian/obsidian-VERSION.asar`
   - Linux: `~/.config/obsidian/obsidian-VERSION.asar`
4. Restart Obsidian.

## Switch back to public versions on mobile

To switch back to using public versions (not early access) on mobile:

1. Back up your vault data
2. Uninstall Obsidian
3. Reinstall Obsidian either from the Play Store or Apple App store
4. Restore your vault data from your backups
5. Open Obsidian
