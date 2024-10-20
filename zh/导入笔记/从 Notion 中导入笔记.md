---
permalink: import/notion
aliases:
  - Import from Notion
---

使用[[迁移助手|Importer插件]]，你可以轻松将笔记从 Notion 迁移到 Obsidian。这将把你 Notion 中的笔记转换成 Markdown 文件，从而让这些数据能被 Obsidian 等一系列软件读取和应用。

## 从 Notion 导出数据

要将数据导入 Obsidian，你需要使用 Notion 的 HTML 导出格式导出整个工作区。我们建议你不要使用 Notion 的 Markdown 导出，因为它省略了很多重要数据。你可以在 [Notion官网](https://www.notion.so/help/export-your-content)找到导出整个工作区的指南。但需要注意的是，你必须是工作区的管理员才能看到此选项。

1. 在左侧侧边栏顶部转到**设置与成员**。
2. 在该窗口的侧边栏中选择**设置**。
3. 向下滚动并选择**导出所有工作区内容**按钮。
4. 在**导出格式**下选择**HTML**。
5. 启用**包括子页面**。
6. 启用**为子页面创建文件夹**。
7. 你将在邮件中或直接在浏览器中下载到一个`.zip`文件。

![[notion-export.png#interface]]

## 将 Notion 数据导入 Obsidian

你需要使用我们的[[迁移助手]]插件，你可以在[这里安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开**设置**。
2. 转到**社区插件市场**并[安装 Importer](obsidian://show-plugin?id=obsidian-importer)。
3. 启用 Importer 插件。
4. 使用命令面板或功能区按钮打开**Importer**插件。
5. 在**文件格式**下选择**Notion（.zip）**。
6. 选择要导入的`.zip`文件。*建议一次性导入所有 Notion 内容，以便内部链接可以正确对应。*
7. _可选项：_可以只选择一个文件夹进行导入，你的 Notion 页面和数据库将被嵌套在这个文件夹内。
8. 启用**将父页面保存在子文件夹中**以保留 Notion 结构。*请注意，在 Notion 中可以在文件夹中编写内容，而这一功能在 Obsidian 中不支持，这些页面将被添加为文件夹下的子页面。*
9. 选择**导入**并等待导入完成。
10. 完成！

## 故障排除

如果在从 Notion 导入时遇到问题：

- 确保在 Notion 中使用**HTML**作为导出格式，而不是 Markdown。
- 如果在导入过程中 Obsidian 出现卡顿，请禁用社区插件后重试。

遇到其他问题时，请到[Importer 的仓库](https://github.com/obsidianmd/obsidian-importer/issues)看看其他人是否遇到过相同问题、并是否存在解决方法。
### 导入大型工作区

如果你打算导入 Notion 中以 GB 计的数据， Notion 的导出文件可能包含嵌套的 zip 压缩文件。在这种情况下，你导入时可能会看到错误提示，大致如下:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

如果看到此错误，则可以解压相关文件，然后导入嵌套的`export- {id} -part-1.zip`文件。
