---
aliases:
  - Format converter
  - 格式转换器
  - 核心插件/Markdown 格式转换器
permalink: plugins/format-converter
publish: true
mobile: true
description: Markdown 格式转换器是一个核心插件，可以将其他应用中的 Markdown 转换为 Obsidian 格式。
---
Markdown 格式转换器可以将[[属性#已弃用的属性|已弃用的属性格式]]迁移为 Obsidian 当前使用的格式。

> [!warning] 备份你的仓库
> 转换会应用于整个仓库。请在开始前[[备份笔记]]。

要转换笔记中的属性：

1. 打开[[命令面板]]。
2. 选择**Markdown 格式转换器：元数据 (Frontmatter) 迁移**。
3. 选择**开始转换**。

## 支持的属性格式

转换器会将别名、标签和 CSS 类从已弃用的格式更新为当前格式：

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
