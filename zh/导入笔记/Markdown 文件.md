---
permalink: import/markdown
aliases:
  - Import Markdown files
cssclasses:
  - soft-embed
---
由于 Obsidian 使用 Markdown（`.md`）文件作为笔记的主要格式，这使得将 Markdown 文件导入 Obsidian 变得非常简单。许多应用程序支持将数据导出为 Markdown 文件。

有几种方法可以将 Markdown 文件添加到 Obsidian 仓库中：

1. 将文件或文件夹拖放到[[文件列表]]中
2. 使用系统文件浏览器（例如 Windows 资源管理器或 macOS 上的 Finder），直接将文件移动到 Obsidian 仓库文件夹中。

## 使用 Importer 导入 Markdown 文件

当你需要在导入时选择文件夹、导入 `.zip` 压缩包、标准化格式、将行内标签移至[[属性|笔记属性]]或应用模板时，请使用官方的 [[迁移助手|Importer 插件]]。

1. 打开**[[设置]] → 社区插件**并[安装 Importer](obsidian://show-plugin?id=obsidian-importer)。
2. 启用 Importer 插件。
3. 通过[[命令面板]]或功能区图标打开 **Importer**。
4. 在**文件格式**下，选择 **Markdown (.md, .zip)**。
5. 选择单个 Markdown 文件、文件夹或 zip 压缩包。
6. 检查检测到的文件夹、输出选项、生成的模板和预览示例。
7. 选择**导入**并等待导入完成。

参阅 [[导入器模板|Importer 模板]]以自定义导入笔记的名称、属性和内容。

## 模板

使用 [[导入器模板|Importer 模板]]来完全配置数据的导入方式。

![[导入器模板#Variables]]
