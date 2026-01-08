---
aliases:
  - Obsidian Markdown
description: Learn about Obsidian Flavored Markdown, including supported extensions and how Markdown interacts with HTML elements.
mobile: true
permalink: obsidian-flavored-markdown
publish: true
---

Obsidian strives for maximum capability without breaking any existing formats. As a result, we use a combination of flavors of [[Basic formatting syntax|Markdown]].

Obsidian supports [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/), and [LaTeX](https://www.latex-project.org/). 

> [!tip]- Markdown inside HTML
> Obsidian does not render Markdown syntax inside HTML elements. This is an intentional design choice for performance optimization and to keep parser complexity low when managing large documents.
>
> For example, Markdown formatting like `**bold**` or `` `code` `` will not be processed inside `<div>`, `<span>`, `<table>`, or any other HTML tags.
>
> ```md
> <div>
> This **will not** be bold.
> </div>
> ```

### Supported Markdown extensions

| Syntax          | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| `[[Link]]`      | [[Internal links]]                                                    |
| `![[Link]]`     | [[Embed files]]                                                       |
| `![[Link#^id]]` | [[Internal links#Link to a block in a note\|Block references]]        |
| `^id`           | [[Internal links#Link to a block in a note\|Defining a block]]        |
| `[^id]`         | [[Basic formatting syntax#Footnotes\|Footnotes]]                      |
| `%%Text%%`      | [[Basic formatting syntax#Comments\|Comments]]                        |
| `~~Text~~`      | [[Basic formatting syntax#Bold, italics, highlights\|Strikethroughs]] |
| `==Text==`      | [[Basic formatting syntax#Bold, italics, highlights\|Highlights]]     |
| `` ``` ``       | [[Basic formatting syntax#Code blocks\|Code blocks]]                  |
| `- [ ]`         | [[Basic formatting syntax#Task lists\|Incomplete task]]               |
| `- [x]`         | [[Basic formatting syntax#Task lists\|Completed task]]                |
| `> [!note]`     | [[Callouts]]                                                          |
| (see link)      | [[Advanced formatting syntax#Tables\|Tables]]                         |
