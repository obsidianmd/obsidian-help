---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian 允许你通过官方[[迁移助手|迁移助手插件]]从 Tomboy 和 Gnote 迁移笔记。迁移助手直接读取这些应用的 `.note` 文件，并将其 XML 内容转换为 Markdown。

## 定位你的笔记文件

Tomboy 和 Gnote 通常将笔记存储在以下文件夹中：

- **macOS：** `~/Library/Application Support/Tomboy`
- **Windows：** `%APPDATA%\Tomboy`
- **Linux：** `~/.local/share/tomboy` 或 `~/.local/share/gnote`

如果你移动了数据文件夹或使用了不同版本的应用，实际位置可能有所不同。

## 导入你的 Tomboy 或 Gnote 笔记

1. 打开**[[设置]] → 社区插件市场**并[安装迁移助手](obsidian://show-plugin?id=obsidian-importer)。
2. 启用迁移助手插件。
3. 通过[[命令面板]]或功能区图标打开**迁移助手**。
4. 在**文件格式**下选择 **Tomboy/Gnote (.note)**。
5. 选择单个 `.note` 文件或包含这些文件的文件夹。
6. 检查导入选项、生成的模板和预览示例。
7. 点击**导入**并等待导入完成。

## 模板

使用[[导入器模板]]来完全设置数据的导入方式。

![[导入器模板#变量]]
