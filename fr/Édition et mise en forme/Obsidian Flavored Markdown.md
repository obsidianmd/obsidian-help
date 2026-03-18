---
permalink: obsidian-flavored-markdown
description: >-
  Learn about Obsidian Flavored Markdown, including supported extensions and how
  Markdown interacts with HTML elements.
publish: true
mobile: true
localized: null
---

Obsidian strives for maximum capability without breaking any existing formats. As a result, we use a combination of flavors of [[Syntaxe de mise en forme de base|Markdown]].

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
| `[[Link]]`      | [[Liens internes]]                                                    |
| `![[Link]]`     | [[Incorporer des fichiers]]                                                       |
| `![[Link#^id]]` | [[Liens internes#Link to a block in a note\|Block references]]        |
| `^id`           | [[Liens internes#Link to a block in a note\|Defining a block]]        |
| `[^id]`         | [[Syntaxe de mise en forme de base#Footnotes\|Footnotes]]                      |
| `%%Text%%`      | [[Syntaxe de mise en forme de base#Comments\|Comments]]                        |
| `~~Text~~`      | [[Syntaxe de mise en forme de base#Bold, italics, highlights\|Strikethroughs]] |
| `==Text==`      | [[Syntaxe de mise en forme de base#Bold, italics, highlights\|Highlights]]     |
| `` ``` ``       | [[Syntaxe de mise en forme de base#Code blocks\|Code blocks]]                  |
| `- [ ]`         | [[Syntaxe de mise en forme de base#Task lists\|Incomplete task]]               |
| `- [x]`         | [[Syntaxe de mise en forme de base#Task lists\|Completed task]]                |
| `> [!note]`     | [[Callouts]]                                                          |
| (see link)      | [[Syntaxe de mise en forme avancée#Tables\|Tables]]                         |
