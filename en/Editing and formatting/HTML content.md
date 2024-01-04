---
aliases:
  - Advanced topics/HTML sanitization
  - Editing and formatting/Using HTML
---
Obsidian supports HTML to allow you to display your notes the way you want, or even [[Embed web pages|embed web pages]]. Allowing HTML inside your notes comes with risks. To prevent malicious code from doing harm, Obsidian _sanitizes_ any HTML in your notes. 

> [!example] 
> The `<script>` element normally lets you run JavaScript whenever it loads. If Obsidian didn't sanitize HTML, an attacker could convince you to paste a text containing JavaScript that extracts sensitive information from your computer and sends it back to them.

That said, since Markdown syntax does not support all forms of styling, using sanitized HTML can be yet another way of enhancing the quality of your notes. We've included some of the more common usages of HTML. 

> [!info] More details on using `<iframe>` can be found in [[Embed web pages]].

### Comments

[[Basic formatting syntax#Comments|Markdown comments]] are the preferred way of adding hidden comments within your notes. However some methods of converting Markdown notes, such as [Pandoc](https://pandoc.org), have limited support of Markdown comments. In those instances, you can use a `<!-- HTML Comment -->` instead!

### Underline

If you need to quickly underline an item in your notes, you can use `<u>Example</u>` to create <u>your underlined text</u>.

### Span/Div

Span and div tags can be used to apply custom classes from a [[CSS snippets|CSS snippet]], or custom defined styling, onto a selected area of text. For example, using `<span style="font-family: cursive">your text</span>` can allow you to quickly <span style="font-family: cursive">change your font</span>.

## Strikethrough

Need to strike <s>some text</s>? Use `<s>this</s>` to strike it out.


