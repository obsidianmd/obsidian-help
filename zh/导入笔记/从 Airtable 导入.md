---
permalink: import/airtable
cssclasses:
  - soft-embed
---
Obsidian 支持通过[[迁移助手|迁移助手插件]]从 Airtable 导入数据。该功能会将你的 Airtable bases 转换为持久化的 Markdown 文件，让你能够在 Obsidian 和许多其他应用中离线使用。

每个表格会变成一个文件夹，其中每条记录对应一篇笔记，同时还会生成一个[[Bases 简介|数据库]]文件来重建表格及其视图。由于使用了 Airtable API，导入过程需要个人访问令牌和网络连接。

## 创建 Airtable 个人访问令牌

要通过 API 访问你的 Airtable 数据，你需要一个个人访问令牌。这个步骤大约需要两分钟完成。

令牌是一串通常以 `pat...` 开头的长字符串（由数字和字母组成），用于从 Airtable 下载你的数据。

1. 登录 Airtable，进入账户设置中的[个人访问令牌](https://airtable.com/create/tokens)页面。
2. 选择 **Create new token**。
3. 为你的令牌命名，例如"Obsidian"。可以使用任何名称。
4. 在 **Scopes** 下，添加 `data.records:read` 和 `schema.bases:read`。
5. 在 **Access** 下，添加你想导入的 bases，或选择工作区中的所有 bases。
6. 选择 **Create token**，然后 **Copy** 令牌。
7. 将令牌保存到安全的地方，例如密码管理器中。

Airtable 只会显示一次令牌。如果丢失了，请创建一个新的。

## 导入你的 Airtable 数据

你需要安装官方的 Obsidian [[迁移助手]]插件，可以[在此安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开**[[设置]]**。
2. 进入**社区插件市场**并[安装迁移助手](obsidian://show-plugin?id=obsidian-importer)。
3. 启用迁移助手插件。
4. 通过命令面板或功能区图标打开**迁移助手**插件。
5. 在 **File format** 下选择 **Airtable**。
6. 在 **Airtable Personal Access Token** 下，点击 **Link...** 以添加新密钥。在 **ID** 中输入一个名称（如 `airtable`），在 **Secret** 中粘贴你的个人访问令牌。
7. 点击**加载**以浏览你的 bases，然后选择要导入的表格。
8. 查看并编辑导入选项。
9. 选择**导入**以设置字段如何转换为带有[[属性]]的笔记。
10. 选择**继续**以查看生成的模板并预览记录中的示例。
11. 选择**导入**并等待导入完成。

## 导入选项

- **Convert formulas** — 选择公式、查找、汇总和计数字段是否重写为[[公式|Bases 公式]]（当没有等效公式时，回退到 Airtable 计算的值），还是仅作为静态值导入。
- **下载附件** — 将附件文件保存到你的仓库中，使用你的附件文件夹和链接格式设置。禁用此选项时，或下载失败时，笔记会链接到 Airtable 上文件的 URL。
- **View property name** — 记录某条记录属于哪些 Airtable 视图的属性。生成的数据库中的每个视图会根据此属性进行筛选。默认值为 `Views`。
- **Save Airtable record ID** — 添加一个 `airtable-id` 属性，以便将来导入时即使笔记被移动或重命名也能识别记录。

## 设置 Airtable 字段的导入方式

在字段配置步骤中，你可以选择每个字段的导入方式。

默认情况下，每个 Airtable 字段都会成为一个属性。你可以在继续到模板预览之前重命名或移除属性并更改其值。

每个表格的主字段提供默认的笔记名称。你可以在预览步骤中编辑笔记名称模板。记录始终放置在以其表格命名的文件夹中。

参阅[[导入器模板|迁移助手模板]]以自定义生成的 Markdown。

## 导入的内容

对于名为 `Projects` 且包含 `Tasks` 表格的 base，迁移助手会创建：

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- 每条记录对应一篇笔记，主字段作为笔记标题，记录的其他字段作为[[属性]]。
- 每个表格对应一个 `.base` 文件，每个 Airtable 视图映射为一个[[视图|Bases 视图]]：
	- **Grid** 变为[[表格视图]]。
	- **Gallery** 变为[[卡片视图]]。
	- **List** 变为[[列表视图]]。
	- 所有其他视图类型都转换为表格视图。
- Airtable 字段类型映射为 Obsidian 属性类型，不会覆盖你已设置的类型。
- 链接记录变为指向相应笔记的链接。
- 附件会根据你的仓库设置下载到仓库中。


## 限制

由于 Airtable API 的速率限制，导入大型 bases 可能需要较长时间。请耐心等待。

由于 Airtable API 的限制，某些数据不可用或无法转换：

- 汇总值不会被导入。API 不会公开汇总计算值所使用的聚合方式，因此只会写入属性名称，以及在字段架构公开表达式时写入 Bases 公式。
- 使用 Obsidian 没有等效函数的公式，例如 `SWITCH`、`FIND`、`REGEX_EXTRACT` 和 `SQRT`，会回退到 Airtable 的静态值。
- 仅导入 grid、gallery 和 list 视图。其他视图类型（如日历、看板、时间线和甘特图）会被忽略。
- 链接到你未选择的表格中的记录会变为记录的纯文本标题而非链接。
- 界面设计、自动化、评论和修订历史不会被导入。

## 故障排除

如果你在转换过程中遇到问题，请[提交错误报告](https://github.com/obsidianmd/obsidian-importer/issues)以帮助我们改进。
