Each collection of notes in Obsidian is known as a Vault. A Vault consists of a folder, and any sub-folders within it. Right now, you're looking at the `Obsidian Help` Vault, which is just a folder of files included with Obsidian.

You can open another Vault anywhere on your computer, and it will retain its own individual [[Core plugins|Plugins]] and [[Add custom styles|custom styling]]. This is useful, for example, if you have one Vault where you keep notes but a different one in which you do long-form writing.

A new or existing Vault can be opened from the button just above the Settings gear.

![[Vault picker.png]]

You have the option to either open an existing folder of markdown files, create a new vault (which essentially just creates a new folder that you will put markdown files into), or opening a special vault containing these help files. The Help Vault is stored in a special Obsidian directory (see [[How Obsidian stores data]]), but aside from that, it's a directory of files just like any other.

[[Internal link|Internal Links]] are not shared across Vaults. If you have one Vault inside another Vault, this can get confusing, so we recommend not doing that.

Always remember, a Vault is just a collection of markdown files. You can use whatever file management techniques you would normally to move them around on your file system, and Obsidian will automatically refresh to keep up.

### Transfer settings between vaults

All settings, themes, and plugins are stored in the `.obsidian` folder under your vault. If you copy this folder from one vault to another, all the settings will be transferred as well. You may need to restart Obsidian for all of the settings to take effect.

This folder is hidden in some operating systems. Notably, you can use `Cmd-Shift-Period` to show hidden files on macOS in order to reveal the `.obsidian` folder.