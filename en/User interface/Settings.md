---
aliases:
  - Obsidian settings
description: Learn how to customize Obsidian through the Settings interface.
mobile: true
permalink: settings
publish: true
---

Settings allow you to customize your Obsidian experience. Configure general options, editor preferences, appearance, keyboard shortcuts, and manage both core and community plugins.

## Open Settings

### Desktop

In the [[Sidebar#Open hidden sidebars|left sidebar]], select **[[Settings]]** ( ![[lucide-cog.svg#icon]] ). You can also open Settings with the [[Command palette]].

### Mobile

In the left sidebar, select **[[Settings]]** ( ![[lucide-cog.svg#icon]] ).

## Settings organization

Settings are organized into the following categories:

- **Options** — Core application settings including [[#General]], [[#Editor]], [[#Files and links]], [[#Appearance]], and [[#Hotkeys]].
- **[[Core plugins]]** — Built-in plugins that come with Obsidian.
- **[[Community plugins]]** — Third-party plugins installed from the community.

## General

The General page contains version information, update settings, language preferences, and account management.

### Version and updates

View your current Obsidian version and installer version at the top of the page. Select **Check for updates** to manually check for new versions, or select **[Read the changelog](<https://obsidian.md/changelog/>)** to view release notes.

**Automatic updates**

When enabled, Obsidian automatically checks for new versions and notifies you when updates are available.

**Receive early access versions**

Auto-update to the latest [[Early access versions]]. These versions include new features but may be less stable.

> [!info]+ Catalyst license required
> This option is only available for users with a [[Catalyst license]].

### Language

Select your preferred language for the Obsidian interface. Select **[[Translations|Learn how to add a new language to Obsidian]]** to contribute a translation.

### Help

Select **[[Home|Open]]** to access help resources, including documentation, community forums, and troubleshooting guides.

### Account

Manage your Obsidian account and licenses.

**Your account**

View your account information, including username and email. Select **[Manage](https://obsidian.md/account)** to access account settings, or select **Log out** to sign out on the app.

**Catalyst license**

View your Catalyst license status. If you have an active [[Catalyst license]], your license tier appears here.

**Commercial license**

If you support [Obsidian for work](<https://obsidian.md/blog/free-for-work/>), select **Activate** to enter a commercial license key, or select **[Purchase](https://obsidian.md/account/commercial)** to buy a license. Select **[[Commercial license|Learn more]]** for information about Commercial licenses.

### Advanced

#### Notify if startup takes longer than expected

When enabled, Obsidian displays a notification if startup is unusually slow. The notification includes diagnostic information about what's causing the delay. Select the timer icon ( ![[lucide-timer.svg#icon]] )next to this setting to [[Help and support#Check startup time|check your startup time]].

## Editor

The Editor page contains settings for how you view and edit notes.

### Always focus new tabs

When you open a link in a new tab, switch to it immediately.

### Default view for new tabs

The default view that a new Markdown file tab gets opened in. Choose between [[Views and editing mode#Reading view|Reading view]] or [[Views and editing mode#Editing view|Editing view]].

### Default editing mode

The default editing mode a new tab will start with. Choose between [[Views and editing mode#Live Preview|Live preview]] or [[Views and editing mode#Source mode|Source mode]].

### Show editing mode in status bar

Show the editing mode toggle in the [[Status bar|status bar]].

### Display

#### Readable line length

Limit maximum line length. Less content fits onscreen, but long blocks of text are more readable.

#### Strict line breaks

Markdown specs ignore single [[Basic formatting syntax#Line breaks|Line breaks]] in reading view. Turn this off to make single line breaks visible.

#### Properties in document

Choose how [[Properties|properties]] are displayed at the top of notes. Select **source** to show properties as raw YAML.

#### Fold heading

[[Folding|Fold]] all content under a heading by selecting the collapse icon next to it.

### Fold indent

[[Folding|Fold]] part of an indentation, such as lists, by selecting the collapse icon.

#### Show line numbers

Show line numbers in the gutter.

#### Show indentation guides

Show vertical relationship lines between list items.

#### Right-to-left (RTL)

Sets the default text direction of notes to right-to-left.

#### Auto-pair brackets

Pair brackets and quotes automatically.

#### Auto-pair Markdown syntax

Pair symbols automatically for bold, italic, code, and more.

#### Smart lists

Automatically set indentation and place list items correctly.

#### Indent using tabs

Use tabs to indent by pressing the Tab key. Turn this off to indent using 4 spaces.

#### Convert pasted HTML to Markdown

Automatically convert HTML to Markdown when pasting and drag-and-drop from web pages. 

Use `Ctrl/Cmd+Shift+V` to paste HTML without converting.

### Behavior

#### Spellcheck

Turn on the spellchecker. Select the gear icon to remove saved items from the custom dictionary.

#### Spellcheck languages

**Windows and Linux:**

Choose the languages for the spellchecker to use. Select the plus (+) icon to add languages. To remove a language, select the X next to it.

**macOS:**

The native spellchecker automatically detects the language used by the OS.

#### Indent visual width

Number of spaces a tab character will render as.

### Advanced

#### Vim key bindings

Use Vim key bindings when editing.

## Files and links

The Files and links page contains settings for file management, links, and vault behavior.

### Default location for new notes

Where newly created notes are placed. Options include:

- **Vault folder** — Notes are created in the root of your vault.
- **Same folder as current file** — Notes are created in the same folder as the currently active note.
- **In the folder specified below** — Notes are created in a specific folder you choose.

### Default location for new attachments

Where newly added [[Attachments|attachments]] are placed. Options include:

- **Vault folder** — Attachments are placed in the root of your vault.
- **In the folder specified below** — Attachments are placed in a specific folder you choose.
- **Same folder as current file** — Attachments are placed in the same folder as the currently active note.
- **In subfolder under current folder** — Attachments are placed in a subfolder within the current note's folder.

### Links

#### New link format

What links to insert when auto-generating [[Internal links|internal links]]. Options include:

- **Shortest path when possible** — Uses the shortest unique path to the linked file.
- **Relative path to file** — Uses a path relative to the current file.
- **Absolute path in vault** — Uses the full path from the vault root.

#### Automatically update internal links

When enabled, Obsidian automatically updates internal links when you rename a file. Turn this off to be prompted to update links after renaming.

#### Use Wikilinks

Auto-generate Wikilinks for `[[links]]` and `![[images]]` instead of Markdown links and images. Disable this option to generate Markdown links instead.

#### Show all file types

Show files with any extension even if Obsidian can't open them natively, so you can link to them and see them in File Explorer and Quick Switcher.

### Trash

#### Confirm file deletion

Ask before deleting a file.

#### Deleted files

What happens to a file after you delete it. Options include:

- **Move to system trash** — Files are moved to your operating system's trash.
- **Move to Obsidian trash** — Files are moved to the `.trash` folder in your vault.
- **Permanently delete** — Files are permanently deleted and cannot be recovered.

### Advanced

#### Excluded files

Excluded files will be hidden in [[Search]], [[Graph View]], and Unlinked Mentions ([[Backlinks]] and [[Outgoing links]]), and less noticeable in [[Quick Switcher ]]and link suggestions. Select **Manage** to configure excluded files.

#### Override config folder

Use a different [[Configuration folder|config folder]] than the default one. Must start with a dot.

#### Allow URI callbacks

Enable the use of x-callback-url through x-success or x-error when handling [[Obsidian URI|Obsidian URIs]]. 

#### Rebuild vault cache

Rebuilds the vault's [[How Obsidian stores data#Metadata cache|metadata cache]]. Rebuilding the cache could take a few seconds to a few minutes depending on the size of your vault. Select **Rebuild** to start the process.

## Appearance

The Appearance page contains settings for customizing how Obsidian looks.

### Base color scheme

Choose Obsidian's default color scheme. Options include:

- **Adapt to system** — Matches your operating system's light or dark mode.
- **Light** — Uses light mode.
- **Dark** — Uses dark mode.

### Accent color

Choose the accent color used throughout the app. Select the color picker or reset icon to customize.

### Themes

Manage installed [[Themes|themes]] and browse community themes. Select **Manage** to view and install themes. The dropdown shows your currently active theme. The folder icon ( ![[lucide-folder-open.svg#icon]] ) opens the themes folder in your [[Configuration folder|configuration folder]].

### Current community themes

Displays the number of community themes you have installed.

### Font

#### Interface font

Set base font for all of Obsidian. Select **Manage** to choose a custom font or enter a font name.

#### Text font

Set font for editing and reading views. Select **Manage** to choose a custom font or enter a font name.

#### Monospace font

Set font for places like code blocks and frontmatter. Select **Manage** to choose a custom font or enter a font name.

#### Font size

Font size in pixels that affects editing and reading views. Adjust using the slider.

#### Quick font size adjustment

Adjust the font size using `Ctrl+Scroll` (Windows/Linux) or `Cmd+Scroll` (macOS), or using the trackpad pinch-zoom gesture.

### Interface

#### Show inline title

Displays the filename as an editable title inline with the file contents. The inline title acts as a heading within Obsidian but does not add a heading to your note.

#### Show tab title bar

Display the header at the top of every tab.

#### Show ribbon

Display vertical toolbar on the side of the window. Learn more about the [[Ribbon|ribbon]].

#### Ribbon menu configuration

Configure what commands appear in the ribbon menu. Select **Manage** to customize.

> [!info]+ Mobile ribbon configuration
> On mobile, ribbon customization works differently. See [[Ribbon#Mobile|Ribbon customization on mobile]] for details.

### Advanced

#### Zoom level

Controls the overall zoom level of the app. Adjust using the slider.

#### Native menus

Menus throughout the app will match the operating system. They will not be affected by your theme.

#### Window frame style

Determines the styling of the title bar of Obsidian windows. Requires a full restart to take effect. Options include:

- **Obsidian frame** — Uses Obsidian's custom window frame.
- **Native frame** — Uses your operating system's default window frame.
- **Hidden frame** — Hides the title bar completely.

#### Custom app icon

Set a custom icon for the app. Select **Choose** to pick an icon file (`.icns`, `.ico`, `.png`, or `.svg`). Learn more about [[Appearance#Custom app icon|custom app icons]].

#### Translucent window

Turn on translucency effect to enhance a sense of depth. Best used with dark mode. Not supported on Linux.

> [!info]+ macOS only
> This feature is primarily designed for macOS. Learn more about [[Appearance#Translucency|translucency]].

#### Hardware acceleration

Turns on Hardware Acceleration, which uses your GPU to make Obsidian smoother. If you turn this off, app performance can be severely degraded but may solve some rare issues. 

### CSS snippets

Manage and view [[CSS snippets|CSS snippets]] stored in your vault. CSS Snippets are stored in `/vault/.obsidian/snippets/`. Select the refresh icon to reload snippets, or the folder icon ( ![[lucide-folder-open.svg#icon]] ) to open the snippets folder.

## Hotkeys

The [[Hotkeys]] page allows you to view, set, and customize [[Editing shortcuts|keyboard shortcuts]] for commands in Obsidian.

Use the search bar to filter commands, and select the filter icon to show only commands with assigned hotkeys. To add a hotkey, select the plus (+) icon next to a command. To remove a hotkey, select the X icon next to the keyboard combination.

## Core plugins

[[Core plugins]] are built-in plugins that come with Obsidian. Each plugin adds specific functionality to the app.

To enable or disable a core plugin, select the toggle next to the plugin name. Select the plus ( ![[lucide-plus-circle.svg#icon]] ) icon to view the [[Hotkeys]] for the plugin. Select the settings ( ![[lucide-settings.svg#icon]] ) icon to open the plugin's settings page.

Use the search bar to filter plugins by name.

## Community plugins

[[Community plugins]] are third-party plugins created by the Obsidian community. Browse and install plugins by selecting **Browse**.

### Restricted mode

[[Plugin security#Restricted mode|Restricted mode]] disables all community plugins for security. Select **Turn on and reload** to enable restricted mode.

### Current plugins

Displays the number of community plugins you have installed. Select **Check for updates** to check for plugin updates.

### Installed plugins

View and manage your installed community plugins. Use the search bar to filter plugins by name. Each plugin has icons for settings, hotkeys, funding, uninstalling, and a toggle to enable or disable it.