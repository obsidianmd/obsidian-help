---
aliases: front matter
---

YAML front matter 是 Obsidian 储存文档级元信息的方法。

Front matter 是由纯文本构成的、放置于文件开头的属性信息。这是将元数据放入 Markdown 文件中的好方法。

Front matter 在开头和结尾处都有三个 `-`。==它需要放置在文件开头才能被识别。==

示例：

```
---
key: value
key2: value2
key3: [one, two, three]
key4:
- 4
- 5
- 6
---
```

从 0.9.17 版本开始，[[为笔记添加别名|笔记的别名]]可以在 Front matter 中出现。未来，我们将让开发者更容易访问 Front matter，同时也会让 Front matter 对用户更加友好。

当前 Obsidian 包含三个原生的 key：`tags`、`aliases` 以及 `cssclass`。