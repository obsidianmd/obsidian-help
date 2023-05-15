Get early access to upcoming releases by enabling _Insider builds_.

Insider builds are only available to users with a [[Catalyst license]].

> [!warning]
> Insider builds are development builds and may be unstable. Don't enable Insider builds if you prefer a more reliable experience.

## Enable Insider builds for desktop

To receive new Insider builds as soon as they're available, follow these steps:

1. Open **Settings**.
2. In the sidebar, select **About**.
3. Under **App**, enable **Receive insider builds**.

## Install Insider builds on mobile devices

To find instructions on how to install Insider builds on your mobile device, follow these steps:

1. Join the [Obsidian Discord server](https://discord.gg/veuWUTm).
2. [[Catalyst license#Get your Discord badge|Get your Discord badge]] to access insider channels.
3. Open Discord.
4. In the `#insider-mobile` channel, open **Pinned Messages**.
   - On desktop, select the pushpin icon in the upper-right corner.
   - On mobile, swipe left and select **Pins**.
5. Under **Pinned Messages**, select the installation link for your device:
   - If you're using iOS, open the TestFlight link on your iPhone or iPad.
   - If you're using Android, download and install the APK file.

## Report issues and other feedback

If you discover an issue in an Insider build, consider reporting it to the Obsidian team.

Before you report an issue, refer to the [List of known issues and planned improvements](https://forum.obsidian.md/t/list-of-known-issues-and-planned-improvements/14286) to see if someone has already reported it.

To report an issue, please use one of the following channels:

- On Discord, report the issue in the `#insider-build` channel.
- In the forum, create a new topic under [Bug reports](https://forum.obsidian.md/c/bug-reports/7).

When you report an issue, include the build version and the OS you're running it on. You can find the build version under **Settings > About > App > Current version**.

## Change back to public builds on desktop

To change back to using public (non-Insider) builds on desktop:

1. Disable Insider builds.
    1. Open **Settings**.
    2. In the sidebar, select **About**.
    3. Under **App**, disable **Receive insider builds**.
2. Close Obsidian.
3. Delete the `obsidian-VERSION.asar` file, where `VERSION` is the Obsidian version.
   - Windows: `%APPDATA%\obsidian\obsidian-VERSION.asar`
   - Mac: `~/Library/Application Support/obsidian/obsidian-VERSION.asar`
   - Linux: `~/.config/obsidian/obsidian-VERSION.asar`
4. Restart Obsidian.
