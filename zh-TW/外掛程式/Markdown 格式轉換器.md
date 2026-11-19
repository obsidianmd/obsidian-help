---
permalink: plugins/format-converter
publish: true
mobile: true
description: 格式轉換器是一個核心外掛，可讓您將其他應用程式的 Markdown 轉換為 Obsidian 格式。
---
Markdown 格式轉換器可將[[屬性#已棄用的屬性|已棄用的屬性格式]]轉換為 Obsidian 目前使用的格式。

> [!warning] 備份你的保管庫
> 轉換會套用至整個保管庫。請在開始之前先[[備份你的 Obsidian 檔案]]。

要轉換筆記中的屬性：

1. 開啟[[命令面板]]。
2. 選擇 **Markdown 格式轉換器：Frontmatter 合併**。
3. 選擇**開始轉換**。

## 支援的屬性格式

轉換器會將別名、標籤和 CSS 類別從已棄用的格式更新為目前的格式：

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
