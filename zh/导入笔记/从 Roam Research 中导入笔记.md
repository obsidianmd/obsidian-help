---
permalink: import/roam
aliases:
  - Import from Roam Research
---

在 Obsidian 中，你可以使用[[迁移助手|Importer插件]]轻松迁移 Roam Research 笔记。这将把你 Roam Research 中的笔记转换成 Markdown 文件，从而让这些数据能被 Obsidian 等一系列软件读取和应用。

## 从 Roam Research 中导出数据

1. 在 Roam Research 中，点击右上角的**更多操作**（`•••` 图标），然后选择**全部导出**。
   
	   ![[Roam-exporting.png#interface]]
2. 在**导出格式**中，选择"JSON"，然后选择**全部导出**以导出压缩文件。

## 将 Roam Research 数据导入 Obsidian

你需要安装Obsidian官方的 [[迁移助手]] 插件，你可以[在这里安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开**设置**。
2. 进入**社区插件市场**并[安装 Importer](obsidian://show-plugin?id=obsidian-importer)。
3. 启用 Importer 插件。
4. 使用命令面板或功能区按钮打开**Importer**插件。
5. 在**文件格式**下选择**Roam Research (.json).**
6. 选择你的`.json`文件的位置。
7. 在**输出文件夹**下，选择你希望导入文件保存在 Obsidian 中的位置。
8. 如果想同时导入附件，请开启**下载所有附件**选项。
9. 点击**导入**并等待导入完成。
10. 完成！

![[Roam-Importer-importing.png]]