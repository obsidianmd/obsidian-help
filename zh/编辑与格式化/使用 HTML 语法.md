---
aliases:
  - HTML content
---

Obsidian支持 HTML语法，这可以让你可以根据自己的喜好来调整笔记，甚至[[嵌入网页]]。但是，在笔记中使用 HTML 也伴随着一定的风险。为了防止恶意代码造成风险，Obsidian 会对笔记中的 HTML 进行限制。

> [!Example] 举例
> `<script>`元素通常允许在加载时运行 JavaScript。如果 Obsidian 不对 HTML 进行限制，攻击者可能会让你粘贴包含 JavaScript 的文本，从而提取你电脑中的敏感信息并发送给他们。

话虽如此，由于 Markdown 语法并不支持所有样式，因此有选择地使用 HTML 语法也是提升笔记质量的一种方式。下面我们列出了一些 HTML 语法的常见用法。

> [!信息] 关于使用`<iframe>`的更多细节可在[[嵌入网页]]中找到。

### 注释

[[基本格式语法#注释|Markdown注释]]是在笔记中添加隐藏注释的首选方式。然而，一些 Markdown 笔记的输出程序，如[Pandoc](https://pandoc.org)，对 Markdown 注释语法的支持有限。在这种情况下，你可以使用`<!-- HTML注释 -->`代替。

### 下划线

如果需要快速给笔记中的某个项目加下划线，你可以使用`<u>示例</u>`来创建<u>下划线文本</u>。

### Span/Div

Span 和 div 标签可用于在所选文本应用来自[[CSS 代码片段|CSS代码片段]]或自定义的样式。例如，使用`<span style="font-family: cursive">你的文本</span>`可以让你快速地<span style="font-family: cursive">改变字体</span>。

## 删除线

需要给一些文本加上<s>删除线</s>吗？使用`<s>这个</s>`来划掉它。