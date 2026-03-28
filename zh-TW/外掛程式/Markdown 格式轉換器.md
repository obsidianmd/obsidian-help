---
permalink: plugins/format-converter
publish: true
mobile: true
description: 格式轉換器是一個核心外掛，可讓您將其他應用程式的 Markdown 轉換為 Obsidian 格式。
---
Markdown 格式轉換器是一個[[核心外掛程式|核心外掛]]，可讓你將其他應用程式的 Markdown 轉換為 Obsidian 格式。它也可以將某些[[屬性]]轉換為新的必要格式。

> [!warning] 警告
> Markdown 格式轉換器會根據你的設定轉換整個保管庫。請在執行轉換之前先[[備份你的 Obsidian 檔案]]。

要轉換保管庫中的所有筆記：

1. 在[[命令面板]]中，選擇**開啟 Markdown 格式轉換器**。也可以在[[功能區選單]]中找到**開啟 Markdown 格式轉換器** ![[lucide-binary.svg#icon]] 圖示。
2. 啟用你想要轉換的格式。
3. 點擊**開始轉換**。

更多資訊請參閱[[基本格式語法]]。

## 支援的格式

### Roam Research

Markdown 格式轉換器可以轉換以下 Roam Research 語法：

- **標籤**：將 `#tag` 和 `#[[tag]]` 轉換為 `[[tag]]`
- **反白**：將 `^^highlight^^` 轉換為 `==highlight==`
- **待辦事項**：將 `{{[[TODO]]}}` 轉換為 `[ ]`

### Bear

Markdown 格式轉換器可以轉換以下 Bear 語法：

- **反白**：將 `::highlight::` 轉換為 `==highlight==`

### Zettelkasten

Markdown 格式轉換器可以轉換以下 Zettelkasten 語法：

- **完整連結**：將 `[[UID]]` 轉換為 `[[UID File Name]]`
- **美化連結**：將 `[[UID]]` 轉換為 `[[UID File Name|File Name]]`

### [[屬性]]

自 Obsidian `1.9.3` 起，Markdown 格式轉換器可以將[[屬性#已棄用的屬性|已棄用的屬性]]格式轉換為目前的格式：

**別名**

```yaml
# 轉換前

alias: My Note Title

# 轉換後

aliases:
  - My Note Title
```

**標籤**

```yaml
# 轉換前

tag: project, important

# 轉換後

tags:
  - project
  - important
```

**CSS 類別**

```yaml
# 轉換前

cssclass: custom-style

# 轉換後

cssclasses:
  - custom-style
```
