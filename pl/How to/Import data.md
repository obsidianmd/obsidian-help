There are a few differences between the way various PKM and note taking systems work that mean moving between them can be a little complicated. For the most part, if whatever you're using can be converted to markdown, it will work fairly well within Obsidian. But some things, like tags and links, can be tricky.

On our Forum there is a [post collecting methods that other people have developed](https://forum.obsidian.md/t/meta-post-migration-workflows/768). Right now, it includes:

- [Import from Notion](https://forum.obsidian.md/t/import-from-notion/636)
- [Import from Notion (automated)](https://forum.obsidian.md/t/notion-2-obsidian-migration-instructions/2728)
- [Import from Evernote](https://forum.obsidian.md/t/import-from-evernote/108)
- [Import from OneNote](https://forum.obsidian.md/t/new-tool-for-migration-from-onenote-updated-and-improved-version/3055)
- [Import from Apple Notes](https://forum.obsidian.md/t/migrate-from-apple-notes-to-obsidian/732)
- [Import from Bear](https://forum.obsidian.md/t/import-from-bear-app/2284)
- [Import from Zkn3](https://forum.obsidian.md/t/migrating-from-zkn3-to-obsidian-without-losing-your-tags-and-internal-links-documentation/7457)
- [Import from TiddlyWiki 5](https://forum.obsidian.md/t/migrate-from-tiddlywiki-5-to-obsidian/731)

But if you don't see your system on this list, check out the forum post, someone may have solved your issue since this document was written.

Also of note, the makers of nvUltra, another markdown-based note-taking program, have a list on their website of [ways to export to nvUltra](https://nvultra.com/help/importing). In a lot of cases, these will be the same, or at least a helpful place to start.

## Built-in tools

### From Roam Research

If you have data in Roam, it's easy to export and play around with it in Obsidian.

> 1. Choose "Export all" in the menu:
> ![[Pasted image.png]]

> 2. Click the blue "Export all" button:
> ![[Pasted image 1.png]]

> 3. Unzip the "Roam-Export-xxxxxxxxxxxxx.zip" into a folder.

> 4. Click on the vault icon (the tooltip should say "Open another vault") on the bottom left corner in the app, and select "Open folder as vault".
> Pick the folder you just unzipped to.

> 5. Use our [[markdown format converter]] to convert Roam Research's Markdown format into Obsidian's format.
> It can be used turn `#tag` into Obsidian `[[links]]`.
> It can also convert `^^highlight^^` into `==highlight==`.


### From Bear

If you're importing from Bear, the [[Markdown format converter]] plugin has an option to convert `::highlight::` to `==highlight==`.

### Using Zettelkasten

If you've been using the Zettelkasten method to structure your notes, here's something you might want to know:

Links in Obsidian require a full match to the note name. This means that `[[202001010000]]` will not properly link to `[[202001010000 My Note]]`.

In order to fix that, you can use our [[markdown format converter]] to convert your Zettelkasten links into either `[[202001010000 My Note]]` or `[[202001010000 My Note|My Note]]`.

You might also be interested in the [[Zettelkasten prefixer]] plugin.
