We believe [[Obsidian#How we're different|your data is always yours to own and control]]. Your notes are stored in markdown, which is an open format based on plain text files, and so should be readable in the future by any computer that can deal with text files. You can freely edit notes in other software, even while having them open in Obsidian.

### Per vault data

There is, however, some data that is needed by the software that is not stored in markdown. Obsidian creates a directory called `.obsidian` in the root of any vault you create. This contains your configuration, including custom hotkeys and which plugins are enabled. Any directory starting with a `.` is invisible on most systems, so you will probably never see it unless you try. If you delete this directory, none of your data will be gone, but you will lose your custom settings. It will be recreated when you open that vault in Obsidian again. If you are using `git`, it's probably best to `ignore` the `.obsidian/workspace` file, because the this file stores your panes and opened files, but we haven't observed any other issues with including it.

### System directory

Obsidian also stores some information in the system directory. This is different per Operating System; on Mac it's `/Users/yourusername/Library/Application Support/obsidian`, on Windows `%APPDATA%\Obsidian\`, and `$XDG_CONFIG_HOME/Obsidian/` or `~/.config/Obsidian/` on Linux. As a result, we recommend against creating a vault in this directory.

Aside from that, though, you can create a Vault anywhere your operating system will allow. Obsidian files sync fine with Dropbox, iCloud, OneDrive, git, and every other syncing service we've tried thus far.

### Symbolic Links

Starting in v0.11.1, Obsidian will recognize symbolic links and junctions. We do not officially recommend using these, but we recognize there are valid use-cases for them. Use them at your own risk.

Beware that there are many pitfalls to using symbolic links, and some of them could have serious consequences such as data-loss, file corruption, or could crash Obsidian.

Below are some limitations or issues we are aware of that you may want to keep in mind:

- Symlink loops are disallowed, to prevent crashing Obsidian due to an infinite loop.
- Symlink targets must be fully disjoint from the vault root or any other symlink targets. Disjoint means one folder does not contain another, or vice versa. Obsidian will ignore any symlink to a parent folder of the vault, or from one folder in the vault to another folder in the same vault. It is a safeguard to ensure you don't end up with duplicated files in your vault, which could cause links to become ambiguous.
- Symlinks may not play well with Obsidian sync, or _any other kind of sync_. If the target of a symlink is itself a directory that's synced by a different Obsidian vault, you could (potentially) end up with sync conflicts or data loss. Some sync tools (e.g. git) do not follow symlinks, but rather synchronize the _path_ the symlink points to, which may produce undesirable results if you share your vault with other people that way.
- Obsidian's file manager cannot move files across device boundaries, so if you symlink to a folder on a different drive from your vault, you will not be able to drag files between that folder and other folders using Obsidian's file explorer. (You'll need to use your OS's explorer for such moves, and Obsidian will see the move as a deletion and the creation of a new file. It will also _not_ update any links that depended on the path of that file.)
- File symlinks (as opposed to folder symlinks) _may_ work, but are not officially supported at this time. Changes performed outside of Obsidian are not watched for, so if you change the file directly, Obsidian will not detect the change, update search indexes, etc.
- Symlinking things under the `.obsidian/` directory in order to share them between vaults **has a high chance of corrupting your settings**, unless you _really really_ know what you're doing. If you decide to go this way, at least have backups.
