---
localized: 2026-03-19T00:00:00.000Z
permalink: import/csv
aliases:
  - 导入笔记/Import CSV files
  - Import CSV files
---
Obsidian 允许你使用官方[[迁移助手|迁移助手插件]]从 CSV 文件导入数据。如果你有以表格形式存储在 Excel、Google Sheets、Numbers、Notion 或 Airtable 等应用中的数据，这个功能非常实用。

CSV 导入会为每一行数据生成 Markdown 文件，并生成一个[[Bases 简介|数据库]]文件，以表格形式展示所有导入的文件。

如果你要从特定应用导入笔记，建议先查看[[迁移助手|迁移助手插件]]支持的应用列表，看看是否有专门的转换器能更好地保留你要迁移的数据。

## 在 Obsidian 中从 CSV 数据创建笔记

你需要安装官方的 Obsidian [[迁移助手]]插件，可以[在此安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开**[[设置]]**。
2. 前往**社区插件市场**并[安装迁移助手](obsidian://show-plugin?id=obsidian-importer)。
3. 启用迁移助手插件。
4. 通过命令面板或功能区图标打开**迁移助手**插件。
5. 在**文本格式**下选择 **CSV (.csv)**。
6. 选择 CSV 文件的位置。
7. 点击**导入**来配置 CSV 文件中的数据如何转换为带有[[属性]]的笔记。
8. 点击**继续**并等待导入完成。
9. 大功告成！

## 配置 CSV 字段的导入方式

在 CSV 导入的第二步中，你可以通过模板来选择数据的导入方式。

CSV 文件中的每一列都会被赋予一个名为 `{{column_name}}` 的变量，它代表文件中表头的名称。你可以使用该变量来定义笔记的标题、位置、内容和[[属性|属性]]。
