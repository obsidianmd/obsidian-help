---
permalink: import/onenote
aliases:
  - Import from Microsoft OneNote
---
使用[[迁移助手|Importer 插件]]，你可以轻松将 Microsoft OneNote 中的笔记迁移到 Obsidian。这将把你 OneNote 中的笔记转换成 Markdown 文件，从而让这些数据能被 Obsidian 等一系列软件读取和应用。

Obsidian 提供两种导入 OneNote 数据的方式：

1. **Microsoft 账户**：登录你的 Microsoft 账户，导入已同步到 OneDrive 的笔记本。需要联网。
2. **文件导入**：使用 OneNote 的导出文件（`.onepkg` 和 `.one`）。无需账户或联网，适用于从未同步过的笔记本。

## 从 Microsoft 账户导入

> [!Warning]
> 只有属于你账户的笔记本才能导入。他人共享给你的笔记本不受支持，工作或学校账户可能需要你的组织批准访问权限。

你需要安装 Obsidian 官方的 [[迁移助手]] 插件，你可以在[这里安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开 **[[设置]]**。
2. 进入 **社区插件市场** 并[安装 Importer](obsidian://show-plugin?id=obsidian-importer)。
3. 启用 Importer 插件。
4. 使用命令面板或功能区按钮打开 **Importer** 插件。
5. 在 **文件格式** 下选择 **Microsoft OneNote**。
6. 点击 **登录**，此时浏览器将跳转到 Microsoft 登录页面。输入 OneNote 笔记本对应的 Microsoft 账户信息。（关于 Microsoft 登录过程的更多信息请参考下面的说明。）
7. 点击 **接受**，授权 Obsidian 查看你的 OneNote 笔记本。
8. 点击 **打开链接**，允许浏览器重定向到 Obsidian 应用程序。
9. 在 Obsidian 应用中，Importer 对话框将显示你已登录，并列出你的 OneNote 笔记本和章节。勾选你想要导入的章节。
10. 点击 **导入**，等待导入完成。
11. 完成！

如果你的笔记本属于工作或学校账户，OneNote 可能会在你登录后拒绝插件访问这些笔记本。此时 **登出** 按钮旁边会出现一个 **使用工作或学校账户访问** 按钮。使用该按钮以更高权限重新登录。你的组织可能需要先批准该权限才能正常使用。

### 故障排除

#### 没有显示任何章节或笔记本

确保你尝试导入的笔记本已同步到 OneDrive 并在 OneNote Web 中可见。这些笔记本必须属于你（他人的共享笔记本目前不支持导入）。

如果某些章节丢失，首先请确认它是否为被锁定的章节，这些章节在解除锁定前是不可见的。

如果是工作或学校笔记本，请参阅上面关于 **使用工作或学校账户访问** 的说明。

#### 导入的笔记为空或内容丢失

这个问题可能发生在那些很少使用的笔记本上。请按照以下步骤解决问题：

1. 在浏览器中打开[OneNote Web](https://onenote.com/notebooks)。
2. **右键单击**缺少内容的笔记本。
3. 在菜单中选择 **导出笔记本**。
4. **解压缩**下载的文件到一个文件夹中。
5. 将你的 OneNote 笔记本上传到[这里](https://www.onenote.com/notebooks/exportimport?toImport=true)。
6. 打开 **Obsidian Importer**，再次尝试导入

如果你尝试了这些步骤但仍未解决问题，可能是 Microsoft 服务器出现了临时问题。请等待几分钟后再重试。如果问题仍然存在，请在[Obsidian Importer GitHub 仓库](https://github.com/obsidianmd/obsidian-importer/issues)上说明问题。

## 导入 OneNote 文件（.one、.onepkg）

文件导入是导入 OneNote 数据的另一种方式。它直接读取 OneNote 自身生成的导出文件，因此无需 Microsoft 账户和网络连接。适用于仅存储在本地的笔记本、你的账户无法访问的笔记本，或者你不想登录账户的情况。

### 从 OneNote 导出笔记本

我们建议将每个笔记本导出为 **OneNote 包**（`.onepkg`）。一个包包含笔记本的所有章节，因此你可以一步完成导出和导入，Importer 会列出其中的章节供你选择。

导出功能仅在 **OneNote for Windows**（Microsoft 365 附带的桌面应用）中可用。Mac 版 OneNote 和旧版 OneNote for Windows 10 应用无法导出为这些格式。

1. 在 OneNote for Windows 中打开你要导出的笔记本。
2. 进入 **文件 → 导出**。
3. 在 **导出当前** 下选择 **笔记本**。
4. 在 **选择格式** 下选择 **OneNote 包（\*.onepkg）**。
5. 点击 **导出**，选择保存文件的位置。
6. 对每个要导入的笔记本重复上述步骤。

如果只需导出单个章节，在第 3 步选择 **章节**，在第 4 步选择 **OneNote 2010-2016 章节（\*.one）**。

你也可以直接导入 OneNote 已存储在磁盘上的章节文件，无需进行导出操作：

- 存储在本地的笔记本位于 `Documents\OneNote Notebooks`，每个章节对应一个 `.one` 文件。
- 已同步笔记本的备份位于 `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`。

### 导入 OneNote 文件

你需要安装 Obsidian 官方的 [[迁移助手]] 插件，你可以在[这里安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开 **[[设置]]**。
2. 进入 **社区插件市场** 并[安装 Importer](obsidian://show-plugin?id=obsidian-importer)。
3. 启用 Importer 插件。
4. 使用命令面板或功能区按钮打开 **Importer** 插件。
5. 在 **文件格式** 下选择 **Microsoft OneNote (.one, .onepkg)**。
6. 选择你要导入的 `.onepkg` 和 `.one` 文件。你可以一次选择多个文件，从而同时导入所有笔记本。
7. 在 **要导入的章节** 下，文件中发现的章节会被列出，默认全部勾选。取消勾选不需要的章节。
8. 可选择设置 **输出文件夹**、附件保存位置，以及再次导入同一笔记本时如何处理 **已有笔记**。
9. 点击 **导入**，等待导入完成。
10. 完成！

每个章节会成为一个文件夹，其中的每个页面会成为一篇笔记。子页面会保存在以其上级页面命名的文件夹中，这样既保留了 OneNote 中显示的结构，也避免了同名子页面之间的冲突。笔记本回收站中的页面不会被导入。

### 限制

- 受密码保护的章节以加密形式存储，其页面会被跳过。请在 OneNote 中移除密码并重新导出后再导入。
- 受权限保护的文件只能由策略允许的账户打开，Importer 无法读取。

## 隐私

如果你选择使用 Microsoft 账户导入，Obsidian Importer 插件使用[OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)来验证并导入你的 OneNote 笔记本。这将为你的账户授予一个短期访问令牌，并仅在你的计算机上使用，相关信息绝不会被存储。导入完成后，你可以选择从[Microsoft 应用和服务页面](https://account.live.com/consent/Manage)中撤销该令牌。

文件导入不会连接 Microsoft：你选择的文件在本地计算机上读取，无需任何网络连接。
