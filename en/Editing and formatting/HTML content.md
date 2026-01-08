---
aliases:
  - Advanced topics/HTML sanitization
  - Editing and formatting/Using HTML
description: Learn how to use HTML in Obsidian, including limitations with Markdown rendering, and HTML block requirements.
mobile: true
permalink:
publish: true
---

Obsidian supports HTML to allow you to display your notes the way you want, or even [[Embed web pages|embed web pages]]. Allowing HTML inside your notes comes with risks. To prevent malicious code from doing harm, Obsidian _sanitizes_ any HTML in your notes. 

> [!example] 
> The `<script>` element normally lets you run JavaScript whenever it loads. If Obsidian didn't sanitize HTML, an attacker could convince you to paste a text containing JavaScript that extracts sensitive information from your computer and sends it back to them.

That said, since Markdown syntax does not support all forms of styling, using sanitized HTML can be yet another way of enhancing the quality of your notes. We've included some of the more common usages of HTML.

## HTML limitations

Obsidian has specific limitations when using HTML in your notes:

### No Markdown inside HTML

Obsidian does not render Markdown syntax inside HTML elements. This is an intentional design choice for performance optimization and to keep parser complexity low when managing large documents.

For example, this will not work as expected:

```md
<div>
This **will not** be bold and this `will not` be code.
</div>
```

### HTML blocks must be self-contained

HTML blocks must be complete and cannot contain blank lines within them. Blank lines will break the HTML block.

This will work:

```md
<table>
<tr>
<td>Content here</td>
</tr>
</table>
```

This will not work correctly:

```md
<table>

<tr>

<td>Content here</td>

</tr>

</table>
```

### When Markdown appears to work in HTML

Some inline HTML tags like `<span>` or `<a>` have limited functionality and may appear to render Markdown, but this is not actually what's happening. The Markdown is being processed outside of the HTML context.

For more details on how Obsidian handles Markdown, see [[Obsidian Flavored Markdown]].

## Common HTML usage

> [!info] More details on using `<iframe>` can be found in [[Embed web pages]].

### Comments

[[Basic formatting syntax#Comments|Markdown comments]] are the preferred way of adding hidden comments within your notes. However some methods of converting Markdown notes, such as [Pandoc](https://pandoc.org), have limited support of Markdown comments. In those instances, you can use a `<!-- HTML Comment -->` instead!

### Underline

If you need to quickly underline an item in your notes, you can use `<u>Example</u>` to create <u>your underlined text</u>.

### Span/Div

Span and div tags can be used to apply custom classes from a [[CSS snippets|CSS snippet]], or custom defined styling, onto a selected area of text. For example, using `<span style="font-family: cursive">your text</span>` can allow you to quickly <span style="font-family: cursive">change your font</span>.

## Strikethrough

Need to strike <s>some text</s>? Use `<s>this</s>` to strike it out.

