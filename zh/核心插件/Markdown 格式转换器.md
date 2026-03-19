---
aliases:
  - Format converter
  - 格式转换器
  - 核心插件/Markdown 格式转换器
permalink: plugins/format-converter
localized: 2026-03-19
publish: true
mobile: true
description: Markdown 格式转换器是一个核心插件，可以将其他应用中的 Markdown 转换为 Obsidian 格式。
---
Markdown 格式转换器是一个[[核心插件|核心插件]]，可以将其他应用中的 Markdown 转换为 Obsidian 格式。它还可以将某些[[属性]]转换为新的必需格式。

> [!warning] 警告
> Markdown 格式转换器会根据你的设置转换整个仓库。请在执行转换前[[备份笔记]]。

要转换仓库中的所有笔记：

1. 在[[命令面板]]中，选择**打开 Markdown 格式转换器**。也可以在[[功能区]]中通过**打开 Markdown 格式转换器**（ ![[lucide-binary.svg#icon]] ）图标找到此功能。
2. 启用你想要转换的格式。
3. 点击**开始转换**。

更多信息，请参阅[[基本格式语法]]。

## 支持的格式

### Roam Research

Markdown 格式转换器可以转换以下 Roam Research 语法：

- **标签**：将 `#tag` 和 `#[[tag]]` 转换为 `[[tag]]`
- **高亮**：将 `^^highlight^^` 转换为 `==highlight==`
- **待办事项**：将 `{{[[TODO]]}}` 转换为 `[ ]`

### Bear

Markdown 格式转换器可以转换以下 Bear 语法：

- **高亮**：将 `::highlight::` 转换为 `==highlight==`

### Zettelkasten

Markdown 格式转换器可以转换以下 Zettelkasten 语法：

- **完整链接**：将 `[[UID]]` 转换为 `[[UID File Name]]`
- **美化链接**：将 `[[UID]]` 转换为 `[[UID File Name|File Name]]`

### [[属性]]

从 Obsidian `1.9.3` 开始，Markdown 格式转换器可以将[[属性#已弃用的属性|已弃用的属性]]格式转换为当前格式：

**别名**

```yaml
# 转换前

alias: My Note Title

# 转换后

aliases:
  - My Note Title
```

**标签**

```yaml
# 转换前

tag: project, important

# 转换后

tags:
  - project
  - important
```

**CSS 类**

```yaml
# 转换前

cssclass: custom-style

# 转换后

cssclasses:
  - custom-style
```
