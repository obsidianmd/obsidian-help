In Obsidian 0.9.5 or higher, in addition to [[Internal link#Link to headings|linking to headings]], you can also link to blocks.

### What is a block

A "block" can be a paragraph, a blockquote, a list item, etc. In general, anything that has empty lines before and after is a block. ^dcf64c

### Link to blocks

To link to a block in a specific file, first type `[[filename` to bring up a list of matched files. After selecting a file, type `^` and continue typing to search for blocks to link to.

Once you hit enter, a link to that block will be generated for you, in the format similar to `[[filename#^dcf64c]]`, where `dcf64c` is the block ID that was just generated for you.

If you're not sure which file the block is in, another method is to type `[[^^` and search for blocks in all files. This will search through all the blocks in your vault, so expect a bit of delay if your vault is large.

For example, [[#^dcf64c]] is a link to a block above.

### Embed or transclude blocks

Similar to [[Embed files|files embeds]], you can simply use `!` in front of a block link to embed it.

Here's an example:

![[#^dcf64c]]

### Manual block IDs

If you want human readable block IDs, you can manually put `^your-id` after a block. Make sure there's at least one space if you're putting the ID at end of a line.

To refer to complex blocks like tables, put the block ID on its own after the block, and make sure there is an empty line both before and after the block ID.

After you add the block ID manually, when you refer to that block, `your-id` will be used instead of a randomly generated block ID.

Note that only letters, numbers, and dashes are allowed in manual block IDs.

### Interoperability

Please be aware that block reference is not part of standard Markdown, but rather Obsidian's specific flavor of Markdown. That means these links will not work outside of Obsidian.

You can still find referenced block by searching for the block ID, although that's a rather manual process. The connection is not lost as long as you have software that can search in a folder.
