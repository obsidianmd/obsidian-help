---
permalink: import/google-keep
aliases:
  - Import from Google Keep
cssclasses:
  - soft-embed
---
通过 [[迁移助手|Importer 插件]]，Obsidian 让你可以轻松地从 Google Keep 迁移笔记。这将把你 Google Keep 中的笔记转换成 Markdown 文件，从而让这些数据能被 Obsidian 等一系列软件读取和应用。

## 从 Google Keep 导出数据

1. 进入 [Google Takeout](https://takeout.google.com/settings/takeout) 并登录您的 Google 账号。
2. 点击右上角的**取消全选**。
3. 滚动页面并从列表中选择**Keep**。
4. 滚动到页面底部，点击**下一步**。
5. 在下一个页面，点击**创建导出**按钮。
6. 下载导出的 `.zip`文件。

## 将 Google Keep 数据导入 Obsidian

你需要安装 Obsidian 官方的 [[迁移助手|Importer 插件]]，你可以[在此处安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开 **[[设置]]**。
2. 进入**社区插件市场**并[安装 Importer](obsidian://show-plugin?id=obsidian-importer)。
3. 启用 Importer 插件。
4. 使用命令面板或功能区按钮打开 **Importer** 插件。
5. 在**文件格式**下选择**Google Keep (.zip).**
6. 选择`.zip`文件的位置。
7. 点击**导入**以查看生成的模板并预览笔记示例。
8. 再次点击**导入**并等待导入完成。

## 限制

- 所有的清单将作为顶级列表项目导入，因为 Google Keep 无法导出缩进信息。
- 由于 Obsidian 不支持日程相关功能，提醒和分配用户相关内容将不会被导入。


## 模板

使用 [[导入器模板|Importer 模板]] 来完全自定义 Google Keep 数据的导入方式。

![[导入器模板#Variables]]

此外，Google Keep 提供了用于原始文本、列表、标签、附件、颜色、共享数据、任务、注释和笔记状态的变量。

| 变量 | 描述 |
| ----------------- | ------------------------------------------------- |
| `{{isArchived}}` | 笔记是否已归档。 |
| `{{isPinned}}` | 笔记是否已置顶。 |
| `{{isTrashed}}` | 笔记是否在回收站中。 |
| `{{color}}` | Google Keep 颜色名称。 |
| `{{labels}}` | 标签记录数组。 |
| `{{sharees}}` | 笔记共享对象的数组。 |
| `{{annotations}}` | 链接注释记录数组。 |

原始的 Google Keep 标题可通过 `{{source.title}}` 获取。共享的 `{{title}}` 变量包含导入后的笔记标题。
