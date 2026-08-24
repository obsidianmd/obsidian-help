---
permalink: import/notion
aliases:
  - Import from Notion
cssclasses:
  - soft-embed
---
Obsidian 支持通过 [[迁移助手|迁移助手插件]] 轻松地从 Notion 中迁移数据。该工具会将你的 Notion 工作区转换为持久的 Markdown 文件，你可以在 Obsidian 和许多其他应用中离线使用这些文件。

Obsidian 提供两种方式来导入 Notion 数据：

1. **Notion 账户（推荐）**直接连接到你的工作区，可以保留数据库和公式，并将其转换为 [[Bases 简介|数据库]]。需要 Notion 集成令牌和网络连接。
2. **文件导入**使用 Notion 的 `.zip` 导出文件。不会保留数据库，但不需要 API 令牌或网络连接。

## 自定义导入页面

两种导入方式都会在导入开始前显示预览。你可以编辑生成的模板，或从仓库中选择一个 Markdown 模板。封面和数据库属性名称等设置会更新预览中显示的生成属性。参见 [[迁移助手模板]]。

## 从 Notion 账户导入

### 创建 Notion API 访问令牌

要通过 API 访问你的 Notion 数据，你需要一个访问令牌。此步骤大约需要两分钟完成。

令牌是一串以 `ntn_...` 开头的数字和字母组成的长字符串，它允许你从 Notion 下载数据。

1. 登录你的 [Notion Connections](https://app.notion.com/developers/connections) 仪表板。
2. 选择 **New connection**。
	1. 为你的连接命名，例如"Personal"。可以使用任何名称。
	2. 选择 **Access token** 作为认证方式。
	3. 选择你想要导出的工作区作为 **Installable in**。

![[notion-integration.png#interface]]

3. 点击 **Create connection**。
4. 在 **Configuration** 选项卡中，你的 API 令牌位于 **Access token** 字段。
5. 选择 **Show** 然后 **Copy**。
6. 将令牌保存到安全的地方，如密码管理器。

![[notion-token.png#interface]]

接下来，为你的连接授予对要导入的 Notion 页面和数据库的访问权限。

1. 前往你刚创建的连接的 **Content access** 选项卡。
2. 添加你想要导入的页面和数据库。

![[notion-content.png#interface]]

现在你可以使用 Obsidian 迁移助手来转换你的数据了。

### 通过 API 导入 Notion 数据

你需要安装 Obsidian 官方的[[迁移助手]]插件，你可以[在此安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开**[[设置]]**。
2. 前往**社区插件市场**并[安装迁移助手](obsidian://show-plugin?id=obsidian-importer)。
3. 启用迁移助手插件。
4. 通过命令面板或功能区图标打开**迁移助手**插件。
5. 在 **File format** 下选择 **Notion (API)**
6. 在 **API token** 下，点击 **Link...** 添加一个新的密钥。在 **ID** 中输入一个名称如 `notion`，在 **Secret** 中粘贴你从 Notion 获取的 **Access token**。
7. 点击 **Load** 来选择你想要导入的数据库和页面。
8. 检查并编辑导入选项。
9. 选择 **Import** 以查看生成的模板和页面预览示例。
10. 再次选择 **Import** 并等待导入完成。

### 限制

> [!info] API 导入是新功能
> Notion API 迁移助手是一项新功能。由于 Notion 工作区的复杂性，某些边界情况可能尚未被考虑到。如果你在转换过程中遇到问题，请[提交 bug 报告](https://github.com/obsidianmd/obsidian-importer/issues)以便我们改进。

由于 Notion API 速率限制，导入大型工作区可能需要较长时间。请耐心等待。

由于 Notion API 的限制，某些数据不可用或无法转换：

- 每个数据库仅导入主视图。
- [链接数据源](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases)不会被导入：*"Notion 的 API 目前不支持链接数据源。与集成共享数据库时，请确保它包含原始数据源！"*
- `People` 函数：`name()` 和 `email()`
- `Text` 函数：`style()` 和 `unstyle()`

此外，迁移助手会进行以下更改：

- 没有子页面或数据库的页面将以 `[filename].md` 而非 `[filename]/[filename].md` 的形式导入。
- 数据库始终以名为 `[database name]` 的文件夹表示，文件夹内包含一个 `[database name].base` 文件。

## 导入 Notion 文件（.zip）

文件导入是导入 Notion 数据的另一种方式。此方法不保留数据库，但不需要 API 令牌或网络连接。

### 从 Notion 导出数据

要准备导入数据，你需要使用 Notion 的 HTML 导出格式导出整个工作区。我们建议你不要使用 Notion 的 Markdown 导出，因为它会遗漏重要数据。你必须拥有 Notion 工作区的管理员权限才能导出所有工作区内容。

1. 前往 Notion 侧边栏顶部的 **Settings**。
2. 在 **Workspace** 下选择 **General**。
3. 找到并选择 **Export all workspace content**。
4. 在 **Export format** 下选择 **HTML**。
5. 选择 **Include everything**。
6. 启用 **Create folders for subpages**。
7. 你将通过邮箱或直接在浏览器中收到一个 `.zip` 文件。

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### 导入 Notion .zip 文件

你需要安装 Obsidian 官方的[[迁移助手]]插件，你可以[在此安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开**[[设置]]**。
2. 前往**社区插件市场**并[安装迁移助手](obsidian://show-plugin?id=obsidian-importer)。
3. 启用迁移助手插件。
4. 通过命令面板或功能区图标打开**迁移助手**插件。
5. 在 **File format** 下选择 **Notion (.zip)**
6. 选择包含你要导入的 Notion 文件的 `.zip` 文件。*建议一次性导入所有 Notion 数据，以便正确解析内部链接。*
7. *可选*，选择一个导入目标文件夹。你的 Notion 页面和数据库将嵌套在此文件夹内。
8. 启用 **Save parent pages in subfolders** 以保留 Notion 的结构。*请注意，在 Notion 中你可以在文件夹中编写内容，但这在 Obsidian 中是不可行的，这些页面将作为该文件夹下的子页面添加。*
9. 选择 **Import** 以查看生成的模板和页面预览示例。
10. 再次选择 **Import** 并等待导入完成。

### 故障排除

如果你在从 Notion 导入时遇到问题：

- 确保你在 Notion 中使用 **HTML** 作为导出格式，**而非 Markdown**。
- 如果 Obsidian 在导入过程中出现卡顿，请禁用社区插件后重试。

遇到其他问题？请搜索[迁移助手仓库](https://github.com/obsidianmd/obsidian-importer/issues)查看是否有其他人遇到过相同的问题。

#### 导入大型工作区

如果你要导入包含数 GB 数据的工作区，从 Notion 导出的文件可能包含嵌套的 `.zip` 文件。在这种情况下，你可能会看到类似以下的导入错误消息：

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

如果你看到此错误，可以先解压从 Notion 导出的文件，然后导入其中嵌套的 `Export-{id}-Part-1.zip` 文件。

## 模板

使用 [[迁移助手模板|迁移助手模板]] 来完全配置你的 Notion 数据导入方式。

![[迁移助手模板#变量]]
