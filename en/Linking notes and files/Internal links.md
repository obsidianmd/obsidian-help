---
aliases:
  - How to/Internal link
  - How to/Link to blocks
cssclasses:
  - soft-embed
description: Learn how to link to notes, attachments, and other files from your notes, using internal links.
mobile: true
permalink: links
publish: true
---

Learn how to link to notes, attachments, and other files from your notes, using _internal links_. By linking notes, you can create a network of knowledge. ^b15695

Obsidian can automatically update internal links in your vault when you rename a file. If you want to be prompted instead, you can disable it under: 

Settings → Files & Links → Automatically update internal links.

## Supported formats for internal links

Obsidian supports the following link formats:

- Wikilink: `[[Three laws of motion]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion.md)`

The examples above are equivalent—they appear the same way in the editor, and links to the same note.

> [!note]
> When using the Markdown format, make sure to [URL encode](https://en.wikipedia.org/wiki/Percent-encoding) the link destination. For example, blank spaces become `%20`.

By default, due to its more compact format, Obsidian generates links using the Wikilink format. If interoperability is important to you, you can disable Wikilinks and use Markdown links instead.

To use the Markdown format:

1. Open Settings.
2. Under Files & Links, disable Use \[\[Wikilink\]\].

Even if you disable the Wikilink format, you can still autocomplete links by typing two square brackets `[[`. When you select one of the suggested files, Obsidian instead generates a Markdown link.

## Link to a file

To create a link while in Editing view, use either of the following ways:

- Type `[[` in the editor and then select the file you want to create a link to.
- Select text in the editor and then type `[[`.
- Open the [[Command palette]] and then select Add internal link.

![[Quick switcher#^search-autocomplete-large]]

While you can link to any of the [[Accepted file formats]], links to file formats other than Markdown needs to include a file extension, such as `[[Figure 1.png]]`.

> [!tip] Prefixing an internal link with an exclamation mark (!) allows you to embed the linked content. For more details, see [[Embed Files]].

## Link to a heading in a note

You can link to specific headings in notes, also known as _anchor links_.

**Linking to a heading within the same note**

To link to a heading within the same note, type `[[#` to get a list of headings within the note to link to.

For example, `[[#Preview a linked file]]` will create a link to [[#Preview a linked file]].

**Linking to a heading in another note**

To link to a heading in another note, add a hash (`#`) at the end of the link destination, followed by the heading text.

For example, `[[Obsidian#Links are first-class citizens]]` will create a link to [[Obsidian#Links are first-class citizens]].

**Linking to subheadings**

You can add multiple hash symbols for each subheading.

For example, `[[Help and support#Questions and advice#Report bugs and request features]]` will create a link to [[Help and support#Questions and advice#Report bugs and request features]].

**Searching for headers across the vault**

To search for headers across the entire vault, use the `[[## header]]` syntax.

For example, `[[##` will search generically across the vault, whereas `[[## team]]` will search for all headers that contain the word _team_.

> [!info]- Screenshot of searching for a heading link
>
> ![[internal-links-header.png#interface]]

## Link to a block in a note

A block is a unit of text in your note, such as a paragraph, block quote, or list item.

You can link to a block by adding `#^` at the end of your link destination, followed by a unique block identifier. For example: `[[2023-01-01#^37066d]]`. Fortunately, you don't need to manually find the identifier—when you type the caret (`^`), a list of suggestions will appear, allowing you to select the correct block.

For *simple paragraphs*, place the block identifier at the end of the line:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

For *structured blocks* (lists, quotations, callouts, tables), the block identifier should be on a separate line, with a blank line before and after:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

For *specific lines within a list*, the block identifier can be placed directly on a bullet point:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] We do not support links to specific parts of quotations, callouts, and tables.

**Searching for blocks across the vault**

You can also search for blocks to link to from across your vault using the `[[^^block]]` syntax. However, more items qualify as blocks compared to [[#Link to a heading in a note|heading links]], so this list will be much longer.

> [!info]- Screenshot of searching for a block link 
> ![[link-block-heading.png#interface]]

You can also create human-readable block identifiers by adding a blank space followed by the identifier. Block identifiers can only consist of Latin letters, numbers, and dashes.

For example, add `^quote-of-the-day` at the end of a block:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Now you can link to the block by typing `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Interoperability
> Block references are specific to Obsidian and not part of the standard Markdown format. Links containing block references won't work outside of Obsidian.

## Change the link display text

By default, Obsidian will show the link text as it appears. For example:  
- `[[Example]]` displays as [[Example]]  
- `[[Example#Details]]` displays as [[Example#Details]]

You can change how a link is displayed by customising its link text:

**Wikilink format**:  
Use a vertical bar (`|`) to change the display text.

- `[[Example|Custom name]]` appears as [[Example|Custom name]]  
- `[[Example#Details|Section name]]` appears as [[Example#Details|Section name]]

**Markdown format**:  
Use `[Display text](Link URL)` to customise how the link appears.

- `[Custom name](Example.md)` appears as [Custom name](Example.md)  
- `[Section name](Example.md#Details)` appears as [Section name](Example.md#Details)

This method is helpful for one-off situations where you want to change how a link looks in a specific context. If you want to set up an alternate link name that you can reuse throughout your vault, consider using an [[Aliases|alias]] instead. 

For example, if you regularly refer to `[[Three laws of motion]]` as `[[The 3 laws]]`, adding "3 laws" as an alias allows you to type just that—no need to add custom display text each time.

> [!tip]
> Use [[#Change the link display text|link display text]] when you want to customise how a link looks *in a specific place*.  
> 
> Use [[Aliases|aliases]] when you want to refer to the same note using *different names* throughout your vault.
^callout-internal-links-link-text

## Preview a linked file

> [!note]
> To preview linked files, you first need to enable [[Page preview]].

To preview a linked file, press `Ctrl` (or `Cmd` on macOS) while hovering the cursor over the link. A preview of the file content appears next to the cursor.
