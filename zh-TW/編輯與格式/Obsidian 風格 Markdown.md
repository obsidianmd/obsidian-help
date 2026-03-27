---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 了解 Obsidian 風格的 Markdown，包括支援的擴充功能以及 Markdown 與 HTML 元素的互動方式。
---
Obsidian 致力於在不破壞任何現有格式的前提下提供最大的功能。因此，我們使用了多種 [[基本格式語法|Markdown]] 語法的組合。

Obsidian 支援 [CommonMark](https://commonmark.org/)、[GitHub Flavored Markdown](https://github.github.com/gfm/) 和 [LaTeX](https://www.latex-project.org/)。

> [!tip]- HTML 內的 Markdown
> Obsidian 不會在 HTML 元素內渲染 Markdown 語法。這是出於效能最佳化以及在管理大型文件時保持解析器複雜度低的刻意設計選擇。
>
> 例如，像 `**bold**` 或 `` `code` `` 這類 Markdown 格式不會在 `<div>`、`<span>`、`<table>` 或任何其他 HTML 標籤內被處理。
>
> ```md
> <div>
> This **will not** be bold.
> </div>
> ```

### 支援的 Markdown 延伸語法

| 語法              | 說明                                                                    |
| --------------- | --------------------------------------------------------------------- |
| `[[Link]]`      | [[內部連結]]                                                              |
| `![[Link]]`     | [[嵌入檔案]]                                                              |
| `![[Link#^id]]` | [[內部連結#連結到筆記中的區塊\|區塊引用]]                                              |
| `^id`           | [[內部連結#連結到筆記中的區塊\|定義區塊]]                                              |
| `[^id]`         | [[基本格式語法#註腳\|註腳]]                                                     |
| `%%Text%%`      | [[基本格式語法#註解\|註解]]                                                     |
| `~~Text~~`      | [[基本格式語法#粗體、斜體、反白\|刪除線]]                                               |
| `==Text==`      | [[基本格式語法#粗體、斜體、反白\|反白]]                                                |
| `` ``` ``       | [[基本格式語法#程式碼區塊\|程式碼區塊]]                                                |
| `- [ ]`         | [[基本格式語法#待辦清單\|未完成待辦]]                                                 |
| `- [x]`         | [[基本格式語法#待辦清單\|已完成待辦]]                                                 |
| `> [!note]`     | [[註標]]                                                                |
| （見連結）           | [[進階格式語法#表格\|表格]]                                                     |
