---
localized: 2026-03-19T00:00:00.000Z
permalink: import/textbundle
aliases:
  - 导入笔记/Import Textbundle files
  - Import Textbundle files
---
Obsidian 允许你使用官方的[[迁移助手|迁移助手插件]]轻松导入 [Textbundle](https://textbundle.org/) 文件。

如果你正在从某个特定应用导入笔记，建议先查看[[迁移助手|迁移助手插件]]支持的应用列表，以确认是否有专门的转换器能更好地保留你要迁移的数据。

Textbundle 格式将 Markdown 文本和所有引用的图片打包到一个文件中，提供了一种更便捷的方式来将数据从沙箱化应用中导出。Textbundle 导出被[许多应用](https://textbundle.org/)支持，包括 Agenda、Craft、Taio、Ulysses、Zettlr 等。

## 将 Textbundle 文件导入 Obsidian

你需要安装官方的[[迁移助手]]插件，可以[点击此处安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开**[[设置文件夹|设置]]**。
2. 进入**社区插件市场**并[安装迁移助手](obsidian://show-plugin?id=obsidian-importer)。
3. 启用迁移助手插件。
4. 通过命令面板或功能区图标打开**迁移助手**插件。
5. 在**文件格式**下选择 **Textbundle (.textbundle, .textpack)**。
6. 选择 Textbundle 或 Textpack 文件的位置。也支持 Zip 文件。
7. 点击**导入**并等待导入完成。
8. 大功告成！

## 故障排查

### 没有文件被选中进行导入

Textbundle 导入一次只能导入一个 Textbundle 文件，并且仅限 Mac 设备。作为替代方案，你可以将所有要导入的 Textbundle 文件压缩为一个 .zip 文件，然后在任何设备上导入该文件。
