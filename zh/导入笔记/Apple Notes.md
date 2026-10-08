---
aliases:
  - Import from Apple Notes
permalink: import/apple-notes
cssclasses:
  - soft-embed
---
你可以借助 [[迁移助手|Importer 插件]]轻松将笔记从 Apple Notes 中迁移出来。这将把你苹果系统上的备忘录数据转换成 Markdown 文件，从而让这些数据能被 Obsidian 等一系列软件读取和应用。

目前，该插件仅支持在 macOS 桌面端将笔记从 Apple Notes 迁出。

## 将 Apple Notes 数据导入 Obsidian

你需要安装官方的 Obsidian [[迁移助手]]插件，你可以[在这里安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开 **[[设置]]**。
2. 进入 **第三方插件** 并[安装 Importer](obsidian://show-plugin?id=obsidian-importer)。
3. 启用 Importer 插件。
4. 使用命令面板或功能区图标打开 **Importer** 插件。
5. 在 **文件格式** 下选择 **Apple Notes**。
6. 选择 **导入**。
7. 在弹出的标题为 `选择 "group.com.apple.notes" 文件夹以允许 Obsidian 读取 Apple Notes 数据` 的窗口中选择 **打开**。
8. 查看生成的模板并预览从你笔记中提取的示例。
9. 选择 **导入** 并等待导入完成。

## 自定义导入的笔记

在导入开始之前，Importer 会显示从你的 Apple Notes 选择中生成的预览。你可以编辑生成的模板、属性和笔记名称，或从你的仓库中选择一个 Markdown 模板。参见 [[导入器模板|Importer 模板]]。

## 支持的内容

Obsidian Importer 插件几乎支持所有 Apple Notes 的内容类型。这包括表格、图片、绘画、扫描、PDF 以及 iOS 17 中加入的链接。

> [!Warning]
> 受密码保护的笔记由 Apple 加密，我们无法解决。因此在导入之前必须解锁这些笔记，否则任何受锁定的笔记将被跳过。

### 扫描文件

由于创建方式的不同，Apple 以各种格式存储扫描文件。为了保留原始数据，我们将这些文件以不同的方式导出。

* 在旧版本的 macOS 或 iOS 上创建或查看的扫描文件将被导出为未裁剪的图像。
* 在新版本的 macOS 或 iOS 上创建或查看的扫描文件通常将被导出为裁剪后的图像。
* 使用 iOS 17 中加入功能编辑过的扫描文件通常将被导出为 PDF。

## 模板

使用 [[导入器模板|Importer 模板]]来完全配置你的 Apple Notes 数据的导入方式。

![[导入器模板#Variables]]

此外，Apple Notes 提供以下变量。

| 变量             | 描述                 |
| ---------------- | -------------------- |
| `{{isPinned}}`   | 笔记是否被置顶。     |
