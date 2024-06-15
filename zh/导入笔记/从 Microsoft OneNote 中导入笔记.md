---
permalink: import/onenote
aliases:
  - Import from Microsoft OneNote
---

使用[[迁移助手|Importer 插件]]，你可以轻松将 Microsoft OneNote 中的笔记迁移到Obsidian。这将把你 OneNote 中的笔记转换成 Markdown 文件，从而让这些数据能被 Obsidian 等一系列软件读取和应用。

## 将 OneNote 数据导入 Obsidian

你需要安装 Obsidian 官方的 [[迁移助手]] 插件，你可以在[这里安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开 **设置**。
2. 进入 **社区插件市场** 并[安装 Importer](obsidian://show-plugin?id=obsidian-importer)。
3. 启用 Importer 插件。
4. 使用命令面板或功能区按钮打开 **Importer** 插件。
5. 在 **文件格式** 下选择 **Microsoft OneNote**。
6. 点击 **登录**，此时浏览器将跳转到 Microsoft 登录页面。输入 OneNote 笔记本对应的 Microsoft 账户信息。（关于 Microsoft 登录过程的更多信息请参考下面的说明。）
7. 点击 **接受**，授权 Obsidian 查看你的 OneNote 笔记本。
8. 点击 **打开链接**，允许浏览器重定向到 Obsidian 应用程序。
9. 在 Obsidian 应用中，Importer 对话框将显示你已登录，并列出你的 OneNote 笔记本和章节。勾选你想要导入的章节。

![[OneNote-Importer-Select-Sections.png]]

10. 点击 **导入**，等待导入完成。
11. 完成！

## 故障排除

### 没有显示任何章节或笔记本

确保你尝试导入的笔记本已同步到 OneDrive 并在 OneNote Web 中可见。这些笔记本必须属于你（他人的共享笔记本目前不支持导入）。

如果某些章节丢失，首先请确认它是否为被锁定的章节 —— 这些章节在解除锁定前是不可见的。

### 导入的笔记为空或内容丢失

这个问题可能发生在那些很少使用的笔记本上。请按照以下步骤解决问题：

1. 在浏览器中打开[OneNote Web](https://onenote.com/notebooks)。
2. **右键单击**缺少内容的笔记本。
3. 在菜单中选择 **导出笔记本**。
4. **解压缩**下载的文件到一个文件夹中。
5. 将你的 OneNote 笔记本上传到[这里](https://www.onenote.com/notebooks/exportimport?toImport=true)。
6. 打开 **Obsidian Importer**，再次尝试导入

如果你尝试了这些步骤但仍未解决问题，可能是 Microsoft 服务器出现了临时问题。请等待几分钟后再重试。如果问题仍然存在，请在[Obsidian Importer GitHub 仓库](https://github.com/obsidianmd/obsidian-importer/issues)上说明问题。

## 隐私

Obsidian Importer 插件使用[OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)来验证你的 Microsoft 账户并导入你的 OneNote 笔记本。这将为你的账户授予一个短期访问令牌，并仅在你的计算机上使用，相关信息绝不会被存储。导入完成后，你可以选择从[Microsoft 应用和服务页面](https://account.live.com/consent/Manage)中撤销该令牌。