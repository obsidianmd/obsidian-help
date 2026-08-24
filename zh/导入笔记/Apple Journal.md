---
permalink: import/apple-journal
aliases:
  - 导入笔记/Import from Apple Journal
  - Import from Apple Journal
cssclasses:
  - soft-embed
---
Obsidian 可以让你轻松地使用[[迁移助手|迁移助手插件]]从 Apple Journal 迁移日记条目。这将把你的日记转换为持久的 Markdown 文件，你可以在 Obsidian 和许多其他应用中使用它们。

## 从 Apple Journal 导出数据

### 在 iPhone 上
按照 [在 iPhone 上的日记 App 中打印和导出条目](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806) 的说明操作：

1. 打开 iPhone 上的"日记" App。
2. 选择一个日记本或轻点"所有条目"。
3. 轻点屏幕顶部的"更多"按钮。
4. 轻点"导出"，然后选择"导出"。
5. 选择一个位置，然后轻点"已选择"按钮。

### 在 Mac（Tahoe）上
按照 [在 Mac 上的日记 App 中打印和导出条目](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a) 的说明操作：

1. 打开 Mac 上的"日记" App。
2. 前往"文件">"导出"，然后选择"导出"。

## 将 Apple Journal 数据导入 Obsidian

你需要安装官方的 Obsidian [[迁移助手]]插件，你可以[在此安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开**[[设置]]**。
2. 进入**社区插件市场**并[安装迁移助手](obsidian://show-plugin?id=obsidian-importer)。
3. 启用迁移助手插件。
4. 通过命令面板或功能区图标打开**迁移助手**插件。
5. 在**文件格式**下，选择 **Apple Journal (HTML Export)**。
6. 在**要导入的文件**中，选择包含导出数据的文件夹（通常是 _AppleJournalEntries_），或从 _Entries_ 中选择单个文件。
7. 查看并编辑其他导入选项。
8. 点击**导入**以查看生成的模板并预览条目示例。
9. 再次点击**导入**并等待导入完成。

## 模板

使用[[迁移助手模板]]来完全自定义 Apple Journal 数据的导入方式。

![[迁移助手模板#变量]]

当启用**将元数据添加为前置元数据**时，Apple Journal 的元数据将被转换为[[属性]]。根据条目内容，这些属性可能包括 `state-of-mind`、`contact`、`location`、`motion-activity`、`third-party-media` 和 `workout-route`。

使用 `properties` 变量来访问这些元数据。例如，使用 `{{properties.location}}` 获取位置信息，或使用 `{{properties["state-of-mind"]}}` 获取心情状态。
