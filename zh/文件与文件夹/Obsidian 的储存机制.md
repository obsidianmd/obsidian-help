---
aliases:
  - How Obsidian stores data
---

Obsidian 将你的笔记以 [[基本格式语法|Markdown]] 纯文本文件形式存储在仓库中。仓库是你本地文件系统上的一个文件夹，包括了其下的所有子文件夹。

由于笔记是纯文本文件，你可以使用其他文本编辑器和文件管理器来编辑和管理笔记。Obsidian 会自动刷新仓库，以跟上这些来自外部的更改。

你可以在系统允许的任何位置创建仓库。Obsidian 可以与[[Obsidian 官方同步简介|Obsidian 同步服务]]、Dropbox、iCloud、OneDrive、Git 和许多其他第三方同步服务一齐使用。

你可以将多个文件夹作为单独的仓库打开，例如可以按用途创建工作仓库和个人仓库。

> [!warning] 嵌套仓库
> 由于[[内部链接]]是相对仓库进行工作的，因此我们建议不要在仓库中再嵌套仓库，这将使得链接可能无法正确更新。

## 仓库设置

Obsidian 在仓库的根文件夹中创建了一个名为 `.obsidian` 的[[设置文件夹]]，这个文件夹包含了该仓库的所有设置，如[[快捷键]]、[[主题]]和[[第三方插件]]。

默认情况下，大多数操作系统会隐藏以句点（`.`）开头的文件夹，所以你可能需要修改系统文件管理器的设置才能看到它。

- **macOS**：在 Finder 中，按 `Cmd+Shift+.`（句点）显示隐藏文件。
- **Windows**：[显示隐藏文件](https://support.microsoft.com/zh-cn/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)

> [!tip] 将 `.obsidian` 添加到 Git
> `.obsidian/workspace` 文件用于存储当前的工作区布局，并会在打开新文件时更改。如果你使用 [Git](https://git-scm.com) 来对仓库进行版本控制，可能需要将 `.obsidian/workspace` 文件添加到 `.gitignore` 中。

## 全局设置

Obsidian 将全局设置存储在系统设置文件夹中。系统设置文件夹的位置取决于你正在使用的操作系统。

- **macOS**：`/Users/你的用户名/Library/Application Support/obsidian`
- **Windows**：`%APPDATA%\Obsidian\`
- **Linux**：`$XDG_CONFIG_HOME/Obsidian/` 或 `~/.config/Obsidian/`

> [!warning] 注意
> 不要在系统设置文件夹中创建仓库。这可能导致数据损坏或数据丢失。

## 元数据的储存

为了让应用能高效运行，Obsidian 将仓库中文件的元数据保存到一个缓存中，即**元数据缓存**。这大大提高了 Obsidian 很多功能的效率，比如关系图谱和大纲。

Obsidian 会让这个缓存与仓库文件联动。但有时缓存数据也可能与文件失去同步。如果这种情况发生在当前仓库中，你可以通过“文件和链接”相关设置重新构建元数据缓存。
