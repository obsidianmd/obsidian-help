---
aliases:
  - Obsidian Markdown
description: Learn about Obsidian Flavored Markdown, including supported extensions and how Markdown interacts with HTML elements.
mobile: true
permalink: obsidian-flavored-markdown
publish: true
---

Obsidian strives for maximum capability without breaking any existing formats. As a result, we use a combination of flavors of [[Basic formatting syntax|Markdown]].

Obsidian supports [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/), and [LaTeX](https://www.latex-project.org/) math through MathJax. See [[#Specifications]] for the version of each.

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

Some of these, such as internal links, comments, and highlights, are specific to Obsidian. Other Markdown apps may show them as plain text.

### Specifications

These are the versions of the specifications that Obsidian's syntax refers to:

| Format                                    | Specification                                                                                         |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Markdown                                  | [CommonMark 0.31.2](https://spec.commonmark.org/0.31.2/)                                              |
| GitHub Flavored Markdown                  | [GFM 0.29-gfm](https://github.github.com/gfm/), for tables, strikethrough, task lists, and autolinks |
| [[Advanced formatting syntax#Math\|Math]] | [MathJax 4 TeX input](https://docs.mathjax.org/en/v4.0/input/tex/index.html)                          |
| [[Properties]]                            | [YAML 1.2](https://yaml.org/spec/1.2.2/)                                                              |

Obsidian doesn't follow every rule of these specifications. Reading view and the editor (Source mode and Live Preview) use different parsers, so they can also display the same text differently.
