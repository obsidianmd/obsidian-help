---
permalink: import/bear
aliases:
  - Import from Bear
cssclasses:
  - soft-embed
---
使用[[迁移助手|Importer 插件]]，Obsidian 让你可以从熊掌记中轻松导出笔记。这将把你熊掌记中的笔记转换成 Markdown 文件，从而让这些数据能被 Obsidian 等一系列软件读取和应用。

## 从熊掌记导出你的数据

Obsidian 可以使用熊掌记的 `.bear2bk` 或 `ApplicationData.zip` 备份格式。

### iOS

1. 打开 Bear。
2. 进入**设置** → **高级** → **共享应用数据**。
3. 选择备份文件的保存位置。
4. 现在你应该有一个包含所有笔记的 `ApplicationData.zip` 文件。

### macOS

1. 打开 Bear。
2. 进入**文件** → **备份笔记**。
3. 选择备份文件的保存位置。
4. 点击**导出笔记**。
5. 现在你应该有一个包含所有笔记的 `.bear2bk` 文件。

## 将熊掌记数据导入 Obsidian

你需要安装 Obsidian 官方的 [[迁移助手|Importer 插件]]插件，你可以在[这里安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开**[[设置]]**。
2. 进入**社区插件市场**并[安装 Importer](obsidian://show-plugin?id=obsidian-importer)。
3. 启用 Importer 插件。
4. 使用命令面板或功能区按钮打开 **Importer** 插件。
5. 在**文件格式**下选择**Bear (.bear2bk, .zip)**。
6. 选择你的熊掌记备份文件位置。
7. 点击**导入**，查看生成的模板并预览笔记示例。
8. 再次点击**导入**，等待导入完成。

## 模板

使用 [[导入器模板|Importer 模板]] 来完全自定义熊掌记数据的导入方式。

![[导入器模板#Variables]]
