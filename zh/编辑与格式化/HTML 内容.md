---
permalink: html
publish: true
mobile: true
description: 了解如何在 Obsidian 中使用 HTML，包括 Markdown 渲染的限制以及 HTML 块的要求。
aliases:
  - HTML content
---
Obsidian 支持 HTML，让你可以按照自己想要的方式显示笔记，甚至可以[[嵌入网页|嵌入网页]]。在笔记中允许使用 HTML 会带来风险。为了防止恶意代码造成危害，Obsidian 会对笔记中的 HTML 进行_净化处理_。

> [!example] 
> `<script>` 元素通常允许在加载时运行 JavaScript。如果 Obsidian 不对 HTML 进行净化处理，攻击者可能会诱导你粘贴包含 JavaScript 的文本，从而提取你计算机上的敏感信息并发送给他们。

话虽如此，由于 Markdown 语法并不支持所有样式，使用经过净化处理的 HTML 可以作为另一种提升笔记质量的方式。下面介绍了一些常见的 HTML 用法。

## HTML 限制

在笔记中使用 HTML 时，Obsidian 有一些特定的限制：

### HTML 内不支持 Markdown

Obsidian 不会在 HTML 元素内渲染 Markdown 语法。这是出于性能优化以及在管理大型文档时降低解析器复杂度的考虑而做出的设计选择。

例如，以下写法不会按预期工作：

```md
<div>
This **will not** be bold and this `will not` be code.
</div>
```

### HTML 块必须是完整的

HTML 块必须是完整的，且内部不能包含空行。空行会打断 HTML 块。

以下写法可以正常工作：

```md
<table>
<tr>
<td>Content here</td>
</tr>
</table>
```

以下写法则无法正确工作：

```md
<table>

<tr>

<td>Content here</td>

</tr>

</table>
```

### 当 Markdown 看似在 HTML 中生效时

一些内联 HTML 标签如 `<span>` 或 `<a>` 功能有限，看起来可能会渲染 Markdown，但实际情况并非如此。Markdown 是在 HTML 上下文之外被处理的。

有关 Obsidian 如何处理 Markdown 的更多详情，请参阅 [[Obsidian 风格的 Markdown 语法]]。

## 常见 HTML 用法

> [!info] 有关使用 `<iframe>` 的更多详情，请参阅[[嵌入网页]]。

### 注释

[[基本格式语法#注释|Markdown 注释]]是在笔记中添加隐藏注释的首选方式。然而一些转换 Markdown 笔记的工具（如 [Pandoc](https://pandoc.org)）对 Markdown 注释的支持有限。在这种情况下，你可以使用 `<!-- HTML Comment -->` 来代替！

### 下划线

如果你需要在笔记中快速添加下划线，可以使用 `<u>Example</u>` 来创建<u>带下划线的文本</u>。

### Span/Div

Span 和 div 标签可以用来将 [[CSS 代码片段|CSS 代码片段]]中的自定义类或自定义样式应用到选定的文本区域。例如，使用 `<span style="font-family: cursive">your text</span>` 可以快速<span style="font-family: cursive">更改字体</span>。

## 删除线

需要给<s>某些文本</s>添加删除线？使用 `<s>this</s>` 来实现。
