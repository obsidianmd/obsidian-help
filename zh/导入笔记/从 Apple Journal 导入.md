---
localized: 2026-03-19T00:00:00.000Z
permalink: import/apple-journal
aliases:
  - 导入笔记/Import from Apple Journal
  - Import from Apple Journal
---
Obsidian 可以让你轻松地使用[[迁移助手|迁移助手插件]]从 Apple Journal 迁移日记条目。
这将把你的日记转换为持久的 Markdown 文件，你可以在 Obsidian 和许多其他应用中使用它们。

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
8. 点击"导入"并等待导入完成。
9. 大功告成！


## 支持的内容

该插件可以将日记元数据作为前置元数据导入，例如 _state-of-mind_、_contacts_、_location_ 和 _workout-route_。

> [!note] 注意
> 该插件不会导入资源文件。照片、视频和录音等附件将被忽略。
