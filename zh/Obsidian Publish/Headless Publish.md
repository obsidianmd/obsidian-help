---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish offers a headless client to publish vaults without using the desktop app. Useful for CI pipelines and automated workflows.
aliases:
  - Headless Publish
  - Headless 发布
---
[[发布服务简介|Obsidian Publish]] 提供了一个无界面客户端，可以在不使用桌面应用的情况下发布仓库。这对于 CI 流水线和自动化工作流非常有用。你可以按计划或作为构建流水线的一部分发布最新更改。

安装 [[Obsidian Headless]] **（公开测试版）**，即可通过命令行与 [[发布服务简介|Obsidian Publish]] 交互，而无需使用 Obsidian 桌面应用。

## 快速开始

安装 [[Obsidian Headless]] **（公开测试版）**：

```shell
npm install -g obsidian-headless
```

你必须拥有一个有效的 [[发布服务简介|Obsidian Publish 订阅]]。

```shell
# 登录
ob login

# 列出你的发布网站
ob publish-list-sites

# 将本地仓库连接到发布网站
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# 预览更改（不实际发布）
ob publish --dry-run

# 发布更改
ob publish
```

## 命令

### `ob publish-list-sites`

列出你的账户下所有可用的发布网站。

### `ob publish-create-site`

创建一个新的发布网站。

```
ob publish-create-site --slug <slug>
```

| 选项 | 说明 |
| --- | --- |
| `--slug` | 网站的 URL 标识符（例如 `my-notes` 会创建 `publish.obsidian.md/my-notes`） |

### `ob publish-setup`

将本地仓库连接到发布网站。

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| 选项 | 说明 |
| --- | --- |
| `--site` | 网站 ID 或 slug |
| `--path` | 本地仓库路径（默认：当前目录） |

### `ob publish`

将仓库的更改发布到你的网站。默认情况下，只有前置元数据中包含 `publish: true` 的文件会被包含。

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| 选项 | 说明 |
| --- | --- |
| `--path` | 本地仓库路径（默认：当前目录） |
| `--all` | 包含所有文件，而不仅是带有 publish 标记的文件 |
| `--dry-run` | 显示更改但不实际发布 |
| `--yes` | 发布时无需确认提示 |

### `ob publish-config`

查看或更改仓库的包含/排除文件夹设置。不带选项运行可显示当前配置。

```
ob publish-config [--path <local-path>] [options]
```

| 选项 | 说明 |
| --- | --- |
| `--path` | 本地仓库路径（默认：当前目录） |
| `--includes` | 要包含的文件夹，以逗号分隔（空字符串表示清除） |
| `--excludes` | 要排除的文件夹，以逗号分隔（空字符串表示清除） |

### `ob publish-site-options`

查看或更新网站范围的显示和导航设置。不带选项运行可显示当前设置。

```
ob publish-site-options [--path <local-path>] [options]
```

| 选项 | 说明 |
| --- | --- |
| `--path` | 本地仓库路径（默认：当前目录） |
| `--site-name` | 网站名称 |
| `--index-file` | 首页文件路径 |
| `--logo` | 网站标志文件路径（空字符串表示清除） |
| `--show-navigation` | 显示文件列表侧边栏 |
| `--show-graph` | 显示局部关系图 |
| `--show-outline` | 显示目录 |
| `--show-search` | 显示搜索 |
| `--show-backlinks` | 显示反向链接 |
| `--show-hover-preview` | 页面预览 |
| `--show-theme-toggle` | 显示主题切换 |
| `--default-theme` | 默认主题：`light` 或 `dark` |
| `--readable-line-length` | 限制行宽 |
| `--strict-line-breaks` | 严格换行 |
| `--hide-title` | 隐藏行内标题 |
| `--sliding-window` | 滑动窗口模式 |
| `--nav-order` | 导航排序，以逗号分隔的路径（空字符串表示清除） |
| `--nav-hidden` | 隐藏的导航项目，以逗号分隔的路径（空字符串表示清除） |

### `ob publish-unlink`

断开仓库与发布网站的连接。

```
ob publish-unlink [--path <local-path>]
```
