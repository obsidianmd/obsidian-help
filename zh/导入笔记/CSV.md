---
permalink: import/csv
aliases:
  - 导入笔记/Import CSV files
  - Import CSV files
cssclasses:
  - soft-embed
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
7. 选择**导入**来配置 CSV 文件中的数据如何转换为带有[[属性]]的笔记。
8. 选择**继续**以查看生成的模板并预览数据行的示例。
9. 选择**导入**并等待导入完成。

## 配置 CSV 字段的导入方式

在字段配置步骤中，你可以选择数据的导入方式。迁移助手会根据 CSV 表头生成模板，使用第一列作为初始笔记名称，并为每一列创建一个属性。

## 模板

使用[[迁移助手模板|迁移助手模板]]来完整配置数据的导入方式。

每个 CSV 列都可以通过其表头来引用。如果某列没有表头，迁移助手将使用其生成的列名。

使用方括号表示法以安全处理空格和标点符号：

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[迁移助手模板#Variables]]
