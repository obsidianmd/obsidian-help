---
permalink: import/evernote
aliases:
  - Import from Evernote
---

使用[[迁移助手|Importer插件]]，你可以轻松将 Evernote 中的笔记迁移至Obsidian。这将把你 Evernote 中的笔记转换成 Markdown 文件，从而让这些数据能被 Obsidian 等一系列软件读取和应用。

## 从 Evernote 导出数据

这需要使用 Evernote 的 `.enex` 导出文件。

你可以在[Evernote官网](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML)找到关于 Evernote 导出数据的说明。这种方法允许你在桌面客户端中导出整个笔记本。

1. 进入笔记本界面。
2. 点击**更多操作**（`•••`图标），选择**导出笔记本...**。
3. 选择**ENEX**作为文件格式。
4. 选择`.enex`导出文件的位置。

## 将 Evernote 数据导入Obsidian

你需要使用 Obsidian 官方的[[迁移助手|Importer插件]]，你可以[在这里安装它](obsidian://show-plugin?id=obsidian-importer)。

1. 打开**设置**。
2. 进入**社区插件市场**，[安装Importer](obsidian://show-plugin?id=obsidian-importer)。
3. 启用Importer插件。
4. 使用命令面板或功能区按钮打开**Importer**插件。
5. 在**文件格式**下选择**Evernote (.enex)**。
6. 选择你的 Evernote 备份文件位置。
7. 点击**导入**，等待导入完成。
8. 完成！

## 高级导入选项

### 保留标签层次结构

Evernote 导出文件时不会保留标签的层次结构。为了保留标签层次结构，你可以在标签中使用 “/” 分隔符。例如，假设你有以下标签结构：

```
父标签
    子标签
```

为了在Obsidian中保留标签关系，你需要：

1. 右键点击子标签。
2. 选择“重命名”。
3. 将其重命名为`父标签/子标签`。

### 处理笔记本组

由于导出仅限于单个笔记本，导出文件缺乏有关笔记本层级的信息。不过，Importer 可以识别 enex 文件名中的规则，以根据笔记本层级重新创建文件夹。

假设你有一个名为```笔记本A```的笔记本，它位于名为```笔记本组1```的层级中，你可以通过将 enex 文件重命名为```笔记本组1@@@笔记本A```来重新创建笔记本组。

这样转换后的笔记会生成在 笔记本组1/笔记本A 文件夹内。

### 更多选项

如果你想要使用更多高级导入选项，则可以尝试[通过Yarle导入](https://github.com/akosbalasko/yarle)。