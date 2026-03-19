---
aliases:
  - How Obsidian stores data
  - 文件与文件夹/Obsidian 的储存机制
permalink: data-storage
localized: 2026-03-19
publish: true
mobile: true
description: 本页面介绍了 Obsidian 如何在你的设备上存储数据。
---
Obsidian 以 [[基本格式语法|Markdown 格式]] 的纯文本文件形式将笔记存储在*仓库*中。仓库是本地文件系统中的一个文件夹，包括其中的所有子文件夹。

由于笔记是纯文本文件，你可以使用其他文本编辑器和文件管理器来编辑和管理笔记。Obsidian 会自动刷新仓库以跟上任何外部更改。

你可以在操作系统允许的任何位置创建仓库。Obsidian 支持通过 [[Obsidian 官方同步简介|Obsidian Sync]]、Dropbox、iCloud、OneDrive、Git 以及许多其他第三方服务进行同步。

你可以将多个文件夹作为独立的仓库打开，例如将工作笔记和学习笔记分开管理。

> [!warning] 仓库中嵌套仓库
> 由于[[内部链接]]的作用范围限于单个仓库，我们建议不要在仓库内创建仓库。否则链接可能无法正确更新。

## 仓库设置

Obsidian 会在仓库的根文件夹中创建一个 `.obsidian` [[设置文件夹]]，其中包含该仓库的特定偏好设置，例如[[快捷键]]、[[主题]]和[[第三方插件]]。

默认情况下，大多数操作系统会隐藏以英文句点（`.`）开头的文件夹，因此你可能需要更改文件管理器的设置才能看到它。

- **macOS**：在访达中，按 `Cmd+Shift+.`（句点）即可显示隐藏文件。
- **Windows**：[显示隐藏文件](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux**：在大多数文件管理器中，按 `Ctrl + h` 即可显示隐藏文件。

> [!tip] 将 `.obsidian` 添加到 Git
> `.obsidian/workspace.json` 和 `.obsidian/workspaces.json` 文件存储当前的工作区布局，并在每次打开新文件时更新。如果你使用 [Git](https://git-scm.com) 管理仓库，可能需要将这些文件添加到 `.gitignore` 中。

## 全局设置

Obsidian 将全局设置存储在系统文件夹中。系统文件夹的位置取决于你使用的操作系统。

- **macOS**：`/Users/yourusername/Library/Application Support/obsidian`
- **Windows**：`%APPDATA%\Obsidian\`
- **Linux**：`$XDG_CONFIG_HOME/obsidian/` 或 `~/.config/obsidian/`

> [!warning] 请勿在系统文件夹中创建仓库。这可能会导致数据损坏或数据丢失。

## IndexedDB

IndexedDB 是一种底层的客户端数据库，Obsidian 将其用于后端存储。它有助于维护 [[Obsidian 官方同步简介|Obsidian Sync]] 连接的状态，并在应用关闭时保存[[#元数据缓存]]。

> [!warning] 如果启用了苹果的[锁定模式](<https://support.apple.com/en-us/105120>)且 Obsidian 未被排除在外，这些数据库文件将无法保存，导致每次启动应用时都需要重新建立索引。

### 元数据缓存

为了在使用应用时提供流畅的体验，Obsidian 会维护一份关于仓库中文件元数据的本地记录，称为**元数据缓存**。该元数据为应用中的许多功能提供支持，从关系图谱到大纲视图等。

Obsidian 会保持此缓存与仓库中的文件同步，但数据可能会与底层文件不一致。如果你的仓库出现这种情况，可以在应用设置的*文件与链接*部分重建元数据缓存。
