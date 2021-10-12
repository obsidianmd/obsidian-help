---
aliases: front matter
---

YAML，也被称为 front matter，是位于文件开头、并用 `---` 标识的区域，用于表示文件的元信息。front matter 不仅可被计算机识别，也能被我们人类理解。

因 Jekyll、Hugo 和 Gatsby 等静态生成器的存在，通过 Front matter 为 Markdown 文件添加元信息已经成为了非常常见的方法。

Front matter 以 `---` 开头，也以其结尾。需要注意的是，==它需要放置在文件开头才能被 Obsidian 或其他软件识别。==

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

从 0.12.12 版本起，Obsidian 支持四种原生键名：

- `tags` （详情见[[标签的使用]]）
- `aliases` （详情见[[为笔记添加别名]]）
- `cssclass`
- `publish` （详情见[[发布#YAML 与发布]]）

Obsidian 还在不断成长。未来，我们将让插件开发者更容易调用 Front matter，同时也会让 Front matter 对用户更加友好。