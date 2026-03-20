---
permalink: sync/headless
cssclasses:
  - reference
description: Obsidian Sync 提供了一个无头客户端，可以在不使用桌面应用的情况下同步仓库。适用于 CI 流水线、代理程序和自动化工作流。同步最新更改或持续保持文件为最新状态。
aliases:
  - Obsidian 同步服务/Headless Sync
---
[[Obsidian 官方同步简介|Obsidian Sync]] 提供了一个无头客户端，可以在不使用桌面应用的情况下同步仓库。适用于 CI 流水线、代理程序和自动化工作流。同步最新更改或持续保持文件为最新状态。

安装 [[Obsidian Headless]]**（公开测试版）**，以便在不使用 Obsidian 桌面应用的情况下通过命令行与 [[Obsidian 官方同步简介|Obsidian Sync]] 进行交互。无头同步使用与桌面应用相同的[[同步安全和隐私|加密和隐私保护机制]]，包括端到端加密。

## 快速开始

> [!error] 开始之前请备份你的数据
> 1. 请务必在开始之前备份数据，以防出现意外情况。
> 2. 请勿在同一设备上同时使用桌面应用同步和无头同步，否则可能导致数据冲突。每台设备只应使用一种同步方式。

安装 [[Obsidian Headless|Obsidian Headless]]**（公开测试版）**：

```shell
npm install -g obsidian-headless
```

你必须拥有一个有效的 [[订阅计划与容量限制|Obsidian Sync 订阅]]。

```shell
# 登录
ob login

# 列出你的远程仓库
ob sync-list-remote

# 设置仓库进行同步
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# 执行一次性同步
ob sync

# 执行持续同步（监视更改）
ob sync --continuous
```

## 命令

### `ob sync-list-remote`

列出你的账户可用的所有远程仓库，包括分享的仓库。

### `ob sync-list-local`

列出本地已配置的仓库及其路径。

### `ob sync-create-remote`

创建一个新的远程仓库。

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| 选项 | 描述 |
| --- | --- |
| `--name` | 远程仓库名称（必填） |
| `--encryption` | `standard` 为托管加密，`e2ee` 为端到端加密 |
| `--password` | 端到端加密密码（省略时会提示输入） |
| `--region` | 服务器[[Sync regions\|区域]]（省略时自动选择） |

### `ob sync-setup`

设置本地仓库与远程仓库之间的同步。

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| 选项 | 描述 |
| --- | --- |
| `--vault` | 远程仓库 ID 或名称（必填） |
| `--path` | 本地目录（默认：当前目录） |
| `--password` | 端到端加密密码（省略时会提示输入） |
| `--device-name` | 在[[版本历史|同步版本历史]]中显示的设备名称 |
| `--config-dir` | [[设置文件夹|设置文件夹]]名称（默认：`.obsidian`） |

### `ob sync`

为已配置的仓库运行同步。

```
ob sync [--path <local-path>] [--continuous]
```

| 选项 | 描述 |
| --- | --- |
| `--path` | 本地仓库路径（默认：当前目录） |
| `--continuous` | 持续运行，监视更改 |

### `ob sync-config`

查看或更改仓库的[[同步文件和设置|同步设置]]。不带选项运行时将显示当前配置。

```
ob sync-config [--path <local-path>] [options]
```

| 选项                  | 描述                                                                                                                                                                                                           |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | 本地仓库路径（默认：当前目录）                                                                                                                                                                                  |
| `--mode`              | 同步模式：`bidirectional`（双向，默认）、`pull-only`（仅下载，忽略本地更改）或 `mirror-remote`（仅下载，还原本地更改）                                                                                              |
| `--conflict-strategy` | `merge`（合并）或 `conflict`（冲突）                                                                                                                                                                             |
| `--file-types`        | 要同步的附件类型：`image`、`audio`、`video`、`pdf`、`unsupported`（逗号分隔，留空则清除）                                                                                                                          |
| `--configs`           | 要同步的设置类别：`app`、`appearance`、`appearance-data`、`hotkey`、`core-plugin`、`core-plugin-data`、`community-plugin`、`community-plugin-data`（逗号分隔，留空则禁用设置同步）                                    |
| `--excluded-folders`  | 要排除的文件夹（逗号分隔，留空则清除）                                                                                                                                                                           |
| `--device-name`       | 用于在同步版本历史中标识此客户端的设备名称                                                                                                                                                                        |
| `--config-dir`        | 设置文件夹名称（默认：`.obsidian`）                                                                                                                                                                              |

### `ob sync-status`

显示仓库的同步状态和配置。

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

断开仓库的同步连接并移除已存储的凭据。

```
ob sync-unlink [--path <local-path>]
```

## 原生模块

Obsidian Headless 包含一个预编译的原生扩展，用于在 Windows 和 macOS 上设置文件创建时间（birthtime）。这可以在从服务器下载文件时保留原始的创建时间戳。

该扩展以 N-API 版本 3 为目标，因此编译后的二进制文件具有 ABI 稳定性，可在不同 Node.js 版本间使用而无需重新编译。

在 Linux 上，不支持 birthtime——该扩展不会包含在内，同步功能可以正常运行，不受影响。

预编译二进制文件包含以下平台：

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
