---
aliases:
  - Obsidian Flavored Markdown
---

Obsidian 致力于在不新增语法的情况下尽可能实现所有功能。因此，我们使用了多种风格的[[基本格式语法|Markdown 语法]]。

Obsidian支持[CommonMark](https://commonmark.org/)、[GitHub Flavored Markdown](https://github.github.com/gfm/)和[LaTeX](https://www.latex-project.org/)。Obsidian不支持在 HTML 标签内部使用 Markdown 格式或空行。

### 目前支持的 Markdown 语法

语法 | 描述
-|-
`[[链接]]` | [[内部链接]] 
`![[链接]]` | [[插入文件]]  
`![[链接#^id]]` | [[内部链接|块引用]]
`^id` | [[内部链接|定义块]]
`%%文本%%` | [[基本格式语法#注释\|注释]]
`~~文本~~`| [[基本格式语法#粗体、斜体、高亮\|删除线]]
`==文本==`| [[基本格式语法#粗体、斜体、高亮\|高亮]]
`` ``` ``  | [[基本格式语法#代码块\|代码块]]
`- [ ]`  | [[基本格式语法#任务列表\|未完成任务]]
`- [x]`  | [[基本格式语法#任务列表\|已完成任务]]
`> [!note]` | [[标注]]
| (查看链接) | [[高级格式语法#表格\|表格]]