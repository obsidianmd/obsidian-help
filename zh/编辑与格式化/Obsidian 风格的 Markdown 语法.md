---
aliases:
  - Obsidian Flavored Markdown
  - 编辑与格式化/Obsidian 风格的 Markdown 语法
permalink: obsidian-flavored-markdown
localized: 2026-03-19
publish: true
mobile: true
description: 了解 Obsidian 风格的 Markdown 语法，包括支持的扩展以及 Markdown 与 HTML 元素的交互方式。
---
Obsidian 致力于在不破坏任何现有格式的前提下实现最大的功能。因此，我们使用了多种 [[基本格式语法|Markdown]] 风格的组合。

Obsidian 支持 [CommonMark](https://commonmark.org/)、[GitHub Flavored Markdown](https://github.github.com/gfm/) 以及 [LaTeX](https://www.latex-project.org/)。

> [!tip]- HTML 内的 Markdown
> Obsidian 不会渲染 HTML 元素内部的 Markdown 语法。这是出于性能优化和降低管理大型文档时解析器复杂度的有意设计。
>
> 例如，像 `**bold**` 或 `` `code` `` 这样的 Markdown 格式，在 `<div>`、`<span>`、`<table>` 或其他任何 HTML 标签内都不会被处理。
>
> ```md
> <div>
> This **will not** be bold.
> </div>
> ```

### 支持的 Markdown 扩展

| 语法              | 描述                                                                  |
| --------------- | --------------------------------------------------------------------- |
| `[[Link]]`      | [[内部链接]]                                                          |
| `![[Link]]`     | [[插入文件]]                                                          |
| `![[Link#^id]]` | [[内部链接#链接到笔记中的块\|块引用]]                                 |
| `^id`           | [[内部链接#链接到笔记中的块\|定义块]]                                 |
| `[^id]`         | [[基本格式语法#脚注\|脚注]]                                           |
| `%%Text%%`      | [[基本格式语法#注释\|注释]]                                           |
| `~~Text~~`      | [[基本格式语法#粗体、斜体、高亮\|删除线]]                             |
| `==Text==`      | [[基本格式语法#粗体、斜体、高亮\|高亮]]                               |
| `` ``` ``       | [[基本格式语法#代码块\|代码块]]                                       |
| `- [ ]`         | [[基本格式语法#任务列表\|未完成任务]]                                  |
| `- [x]`         | [[基本格式语法#任务列表\|已完成任务]]                                  |
| `> [!note]`     | [[标注]]                                                              |
| （见链接）       | [[高级格式语法#表格\|表格]]                                           |
