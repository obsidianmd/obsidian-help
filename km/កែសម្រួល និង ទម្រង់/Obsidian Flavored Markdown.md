---
localized: false
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Learn about Obsidian Flavored Markdown, including supported extensions and how Markdown interacts with HTML elements.'
aliases:
  - Editing and formatting/Obsidian Flavored Markdown
---

Obsidian strives for maximum capability without breaking any existing formats. As a result, we use a combination of flavors of [[វាក្យសម្ពន្ធទម្រង់មូលដ្ឋាន|Markdown]].

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
| `[[Link]]`      | [[តំណភ្ជាប់ផ្ទៃក្នុង]]                                                    |
| `![[Link]]`     | [[បង្កប់ឯកសារ]]                                                       |
| `![[Link#^id]]` | [[តំណភ្ជាប់ផ្ទៃក្នុង#Link to a block in a note\|Block references]]        |
| `^id`           | [[តំណភ្ជាប់ផ្ទៃក្នុង#Link to a block in a note\|Defining a block]]        |
| `[^id]`         | [[វាក្យសម្ពន្ធទម្រង់មូលដ្ឋាន#Footnotes\|Footnotes]]                      |
| `%%Text%%`      | [[វាក្យសម្ពន្ធទម្រង់មូលដ្ឋាន#Comments\|Comments]]                        |
| `~~Text~~`      | [[វាក្យសម្ពន្ធទម្រង់មូលដ្ឋាន#Bold, italics, highlights\|Strikethroughs]] |
| `==Text==`      | [[វាក្យសម្ពន្ធទម្រង់មូលដ្ឋាន#Bold, italics, highlights\|Highlights]]     |
| `` ``` ``       | [[វាក្យសម្ពន្ធទម្រង់មូលដ្ឋាន#Code blocks\|Code blocks]]                  |
| `- [ ]`         | [[វាក្យសម្ពន្ធទម្រង់មូលដ្ឋាន#Task lists\|Incomplete task]]               |
| `- [x]`         | [[វាក្យសម្ពន្ធទម្រង់មូលដ្ឋាន#Task lists\|Completed task]]                |
| `> [!note]`     | [[ប្រអប់រំលេច]]                                                          |
| (see link)      | [[វាក្យសម្ពន្ធទម្រង់កម្រិតខ្ពស់#Tables\|Tables]]                         |
