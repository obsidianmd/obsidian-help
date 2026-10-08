---
permalink: import/html
aliases:
  - Import HTML files
cssclasses:
  - soft-embed
---
Obsidian 允许你使用官方的 [[迁移助手|Importer 插件]] 轻松导入单个 HTML 文件或整个 HTML 文件夹。如果你想将整个网站保存为 [[Obsidian 风格的 Markdown 语法|Markdown]] 格式，或者想要将其他工具的数据导出为 HTML 后再导入 Obsidian，这将非常有用。

如果你要从特定应用程序导入笔记，建议首先查看 [[迁移助手|Importer 插件]] 支持的应用程序列表，以确认插件是否有特定的转换器，从而可以更好地保留要迁移的数据内容。

## 将 HTML 数据导入 Obsidian

这需要 Obsidian 官方的 [[迁移助手]] 插件，可以[在此处安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开 **[[设置]]**。
2. 转到 **社区插件市场** 并[安装 Importer](obsidian://show-plugin?id=obsidian-importer)。
3. 启用 Importer 插件。
4. 使用命令面板或功能区按钮打开 **Importer** 插件。
5. 在 **文件格式** 下选择 **HTML (.html).**
6. 选择 HTML 文件或文件夹的位置。
7. 选择 **导入** 以查看生成的模板并预览文件中的示例。
8. 再次选择 **导入**，等待导入完成。

### 导入设置

- **附件大小限制**：导入时跳过大于指定大小的附件。
- **最小图像大小**：导入时跳过任何一个维度小于指定大小的图像。可用于跳过图标和 logo。

## 模板

使用 [[导入器模板|Importer 模板]] 来完全配置数据的导入方式。

![[导入器模板#Variables]]

此外，HTML 导入提供了许多与 [[Obsidian Web Clipper 简介|Web Clipper]] 相同的变量：

| 变量 | 描述 |
| --- | --- |
| `{{author}}` | 页面作者。 |
| `{{contentHtml}}` | 提取的页面内容，HTML 格式。 |
| `{{description}}` | 页面描述或摘要。 |
| `{{domain}}` | 页面域名。 |
| `{{favicon}}` | Favicon URL。 |
| `{{fullHtml}}` | 完整页面的未处理 HTML。 |
| `{{image}}` | 社交分享图片 URL。 |
| `{{language}}` | 页面语言。 |
| `{{published}}` | 发布日期，可使用 `date` 过滤器格式化。 |
| `{{site}}` | 网站名称或发布者。 |
| `{{url}}` | 在导入文档中找到的源 URL（如果有）。 |
| `{{words}}` | 字数统计。 |
