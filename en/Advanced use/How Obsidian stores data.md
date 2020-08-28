We believe [[Obsidian#How we're different|your data is always yours to own and control]]. Your notes are stored in markdown, which is an open format based on plain text files, and so should be readable in the future by any computer that can deal with text files. You can freely edit notes in other software, even while having them open in Obsidian.

There is, however, some data that is needed by the software that is not stored in markdown. Obsidian creates a directory called `.obsidian` in the root of any vault you create. This contains your configuration, including custom hotkeys and which plugins are enabled. Any directory starting with a `.` is invisible on most systems, so you will probably never see it unless you try. If you delete this directory, none of your data will be gone, but you will lose your custom settings. It will be recreated when you open that vault in Obsidian again. If you are using `git`, it's probably best to `ignore` the `.obsidian` directory, because the cache changes quickly enough that commits can get ugly, but we haven't observed any other issues with including it.

If you use custom css, Obsidian creates a file named `obsidian.css` in the root of your vault. For more on this, see [[Custom CSS]].

Obsidian also stores some information in the system directory. This is different per Operating System; on Mac it's `/Users/yourusername/Library/Application Support/obsidian`, on Windows `%APPDATA%\Obsidian\`, and `$XDG_CONFIG_HOME/Obsidian/` or `~/.config/Obsidian/` on Linux. As a result, we recommend against creating a vault in this directory.

Aside from that, though, you can create a Vault anywhere your operating system will allow. Obsidian files sync fine with Dropbox, iCloud, OneDrive, git, and every other syncing service we've tried thus far.
