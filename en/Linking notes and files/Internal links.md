---
aliases:
  - How to/Internal link
  - How to/Link to blocks
cssclasses:
  - soft-embed
---

Learn how to link to notes, attachments, and other files from your notes, using _internal links_. By linking notes, you can create a network of knowledge. ^b15695

Obsidian can automatically update internal links in your vault when you rename a file. If you want to be prompted instead, you can disable it under: 

**Settings → Files & Links → Automatically update internal links**.

## Supported formats for internal links

Obsidian supports the following link formats:

- Wikilink: `[[Three laws of motion]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion.md)`

The examples above are equivalent—they appear the same way in the editor, and links to the same note.

> [!note]
> When using the Markdown format, make sure to [URL encode](https://en.wikipedia.org/wiki/Percent-encoding) the link destination. For example, blank spaces become `%20`.

By default, due to its more compact format, Obsidian generates links using the Wikilink format. If interoperability is important to you, you can disable Wikilinks and use Markdown links instead.

To use the Markdown format:

1. Open **Settings**.
2. Under **Files & Links**, disable **Use \[\[Wikilink\]\]**.

Even if you disable the Wikilink format, you can still autocomplete links by typing two square brackets `[[`. When you select one of the suggested files, Obsidian instead generates a Markdown link.

## Link to a file

To create a link while in Editing view, use either of the following ways:

- Type `[[` in the editor and then select the file you want to create a link to.
- Select text in the editor and then type `[[`.
- Open the [[Command palette]] and then select **Add internal link**.

While you can link to any of the [[Accepted file formats]], links to file formats other than Markdown needs to include a file extension, such as `[[Figure 1.png]]`.

![[Quick switcher#^search-autocomplete-large]]

## Link to a heading in a note

You can link to specific headings in notes, also known as _anchor links_.

To link to a heading, add a hash (`#`) at the end of the link destination, followed by the heading text.

For example, `[[Three laws of motion#Second law]]`.

You can add multiple hash symbols for each subheading.

For example, `[[My note#Heading 1#Heading 2]]`.

> [!tip]- Heading links across the vault
> You can search for headers to link to from across your vault using the `[[##header]]` syntax. 
> 
> ![[internal-links-header.png#interface]]

## Link to a block in a note

A block is a unit of text in your note, for example a paragraph, block quote, or even a list item.

You can link to a block by adding `#^` at the end of your link destination followed by a unique block identifier, for example, `[[2023-01-01#^37066d]]`.

Fortunately, you don't need to know the identifier. When you type the caret (`^`), you can select the block from a list of suggestions to insert the right identifier.

You can also create human-readable block identifiers by adding a blank space followed by the identifier, for example `^quote-of-the-day`, at the end of a block:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Now you can instead link to the block by typing `[[2023-01-01#^quote-of-the-day]]`.

Block identifiers can only consist of Latin letters, numbers, and dashes.

> [!tip]- Block links across the vault
> You can search for blocks to link to from across your vault using the `[[^^block]]` syntax. However, more items qualify as blocks in comparison to [[#Link to a heading in a note|heading links]] so this list will be much longer in comparison.
> 
> ![[link-block-heading.png#interface]]

> [!warning] Interoperability
> Block references are specific to Obsidian and not part of the standard Markdown format. Links containing block references won't work outside of Obsidian.

## Change the link display text

By default, Obsidian will show the link text, or the [[Aliases|alias]] if you opt to [[Aliases#Link to a note using an alias|link to an alias]]. You have the option to modify the text used for displaying a link. This feature comes in handy when you prefer to incorporate a link into a sentence without explicitly using the file name.

**Wikilink format:**

You can use the vertical bar (`|`) to change the text used to display a link.

For example, `[[Internal links|custom display text]]` appears as [[Internal links|custom display text]].

**Markdown format:**

Enter the display text between the square brackets (`[]`).

For example, `[custom display text](Internal%20links.md)` appears as [custom display text](Internal%20links.md).

## Preview a linked file

> [!note]
> To preview linked files, you first need to enable [[Page preview]].

To preview a linked file, press `Ctrl` (or `Cmd` on macOS) while hovering the cursor over the link. A preview of the file content appears next to the cursor.
