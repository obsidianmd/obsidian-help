---
cssclasses:
  - soft-embed
aliases:
  - Deploy Obsidian across your team
---
Obsidian 作为一个本地应用程序运行在每个团队成员的设备上。它可以用于在线和离线工作，安全且私密，你可以完全掌控团队的数据。由于 Obsidian 不是在线应用，因此你需要将 Obsidian 部署到团队成员的设备上。

## 安装和更新 Obsidian

团队成员可以从我们的 [下载页面](https://obsidian.md/download) 下载 Obsidian。历史发布版本也可以在我们的 [GitHub 发布页面](https://github.com/obsidianmd/obsidian-releases/releases)上找到，其中包括 [更新日志](https://obsidian.md/changelog) 的链接。

> [!tip] 对于需要在所有账户上安装 Obsidian 的 Windows 用户，请使用发布页面上的 `-allusers.exe` 文件进行安装。

如果 Obsidian 中启用了自动更新，用户重新启动 Obsidian 时将自动安装新版本。此外，我们建议定期 [[更新 Obsidian#安装程序更新|更新安装程序]]以获取最新的 Electron 框架，从而获得包括安全修复在内的一系列改进。

如果你希望在此过程中限制 Obsidian 的网络访问，请查看 [[团队使用中的安全问题#网络和访问|网络和访问]]。

## 定制 Obsidian

Obsidian 易于根据团队需求进行修改。凭借广泛的 API 和庞大的用户生态系统，Obsidian 提供了大量的插件、主题和辅助工具。

有关这些内容的安全相关问题，请参考 [[团队使用中的安全问题]]。

### 设置文件夹

[[设置文件夹]] 是 Obsidian [[术语表#仓库|仓库]] 存储应用设置的地方。默认情况下，该文件夹名为 `.obsidian`，但您可以根据需要 [[设置文件夹#更改设置文件夹|更改设置文件夹]]。

我们建议创建一个标准化的设置文件夹，以便在团队设备上部署。

### 插件

[[核心插件]] 是由 Obsidian 团队为 Obsidian 开发的可选功能。这些功能集成在 Obsidian 的核心代码中，可以自行开启或关闭。

[[第三方插件]] 是添加到 Obsidian 的第三方功能，可以通过社区插件市场进行安装。第三方插件利用 Obsidian API 进行开发。插件下载后位于仓库内的 .obsidian/plugins 文件夹中。如果不想下载插件，你也可以手动将插件安装到该位置。

### 主题和片段

[[主题]]可以从视觉上改变 Obsidian 的界面。像插件一样，主题可以从我们的社区市场下载。主题安装于仓库内的 `.obsidian/themes` 文件夹中。

[[CSS 代码片段]] 是小型的 `.css` 文件，可以修改 Obsidian 界面的某些方面。在某些情况下，它还可以增强一些界面功能。片段安装于仓库内的 `.obsidian/snippets` 文件夹中。

## 常见问题解答

有关帐户管理和安全的问题，请参考 [[团队使用中的安全问题#账户安全|帐户安全]]。

### 部署

**我可以通过脚本部署许可证吗？**
目前，我们不支持通过部署脚本（例如 `.json` 文件）部署许可证。如果你的团队需要这个功能，请向我们提交 [功能请求](https://forum.obsidian.md/c/feature-requests/8)。

**Obsidian 是否可以通过设置锁定某些功能或设置？**
目前还不能。如果你的团队需要这个功能，请向我们提交 [功能请求](https://forum.obsidian.md/c/feature-requests/8)。