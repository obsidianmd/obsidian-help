You can use [symbolic links](https://en.wikipedia.org/wiki/Symbolic_link) (symlinks) and [junctions](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) in your vault to store files outside the vault and [[How Obsidian stores data#Global settings|system folder]].

> [!danger] Use at your own risk
> We strongly advise against using symbolic links. By using symbolic links and junctions in your vault, you risk losing or corrupting your data, or crashing Obsidian. Make sure you perform regular back-ups of your vault and settings.

Below are some limitations or issues we are aware of that you may want to keep in mind:

- Symlink loops are disallowed, to prevent crashing Obsidian due to an infinite loop.
- Symlink targets must be fully disjoint from the vault root or any other symlink targets. Disjoint means one folder doesn't contain another, or vice versa. Obsidian ignores any symlink to a parent folder of the vault, or from one folder in the vault to another folder in the same vault. It is a safeguard to ensure you don't end up with duplicated files in your vault, which could cause links to become ambiguous.
- Symlinks may not play well with Obsidian sync, or _any other kind of sync_. If the target of a symlink is itself a folder that's synced by a different Obsidian vault, you could (potentially) end up with sync conflicts or data loss. Some sync tools, such as Git, don't follow symlinks, but rather sync the _path_ the symlink points to, which may produce undesirable results if you share your vault with other people that way.
- Obsidian's file manager can't move files across device boundaries, so if you symlink to a folder on a different drive from your vault, you won't be able to drag files between that folder and other folders using Obsidian's file explorer. (You'll need to use your OS's explorer for such moves, and Obsidian will see the move as a deletion and the creation of a new file. It will also _not_ update any links that depended on the path of that file.)
- File symlinks (as opposed to folder symlinks) _may_ work, but aren't officially supported at this time. Changes performed outside of Obsidian aren't watched for, so if you change the file directly, Obsidian won't detect the change, update search indexes, etc.
- Symlinking things under the `.obsidian/` folder in order to share them between vaults **has a high chance of corrupting your settings**, unless you _really_ know what you're doing. If you decide to go this way, at least have backups.
