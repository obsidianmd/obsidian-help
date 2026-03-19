---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 了解如何从当前的同步方案迁移到 Obsidian Sync。
aliases:
  - Obsidian 同步服务/Switch to Obsidian Sync
  - Switch to Obsidian Sync
---
了解如何从当前的同步方案迁移到 Obsidian Sync。

> [!warning] 避免使用多个方案同步同一批文件
> 我们[[同步常见问题#我可以将第三方同步与 Obsidian Sync 一起使用吗？|不建议]]将 Obsidian Sync 与云存储服务（如 iCloud、Dropbox、OneDrive、Google Drive）同时使用，因为这可能导致冲突。不过，云存储服务可以作为[[备份笔记|备份]]策略的一部分。

## 将仓库移出第三方同步服务或云存储

如果你的仓库存储在以下任意位置，则很可能正在被第三方服务同步：

- **Windows**：`C:\Users\Username\Desktop` 或 `C:\Users\Username\Documents`
- **macOS**：`/users/username/Desktop` 或 `/users/username/Documents`
- **iOS**：文件应用中的 **iCloud** 文件夹
- **其他**：任何同步服务下的文件夹，如 `Drive/my-vault`、`Dropbox/my-vault`、`pSync/my-vault` 等。

虽然 Android 和 Linux 在这方面出现问题的可能性较小，但仍然值得检查这些设备上的仓库位置。

> [!tip] 如果你当前的本地仓库已连接到远程仓库，Obsidian 会尝试检测该仓库是否处于同步服务中。如果是，你会在 Obsidian Sync 的设置顶部看到一条提示消息。

为避免与同步服务冲突，我们建议将 Obsidian 仓库存储在以下位置：

- **Windows**：按推荐顺序排列：
    1. `D:\` 或设备上任何非 C 盘、非网络驱动器
    2. `C:\Vaults`（如果你有使用 C:\ 驱动器的权限）
    3. `C:\Users\Username\Vaults`（如果必须将仓库保留在 C:\Users\Username 下，请确保 OneDrive 未设置为删除文件。OneDrive 在 `Desktop` 和 `Documents` 文件夹之外通常不会那么激进。）
- **macOS**：`/users/username/vaults`
- **Linux**：由于文件系统种类繁多，没有特定推荐。只需确保 Obsidian 具有完整的读写权限，且没有同步服务管理该文件夹。
- **iOS/iPadOS**：将仓库存储在**我的 iPhone** 或**我的设备**上。
- **Android**：使用设备上的 `Documents/` 文件夹。

## 在桌面端使用 Obsidian 移动仓库

![[管理仓库#将仓库移动到其他文件夹]]

## 在移动端移动仓库

在移动设备上，Obsidian 运行在沙盒环境中，这意味着你无法像在桌面端那样在应用内移动仓库。

### Android

Android 的文件系统因设备而异，但通常可以按照手动移动仓库的相同步骤操作，确保仓库已从设备上的任何同步服务中移除。

### iOS 和 iPadOS

要将现有的 iCloud 仓库移动到设备本地，请按以下步骤操作：

> [!note] 如果你已经在另一台设备上拥有数据并设置了 Obsidian Sync，建议改为[[启动同步服务#在其他设备上同步远程仓库|从 Sync 新建一个本地仓库]]。

- [[备份笔记|备份]]你的仓库。
- 在设备上创建一个新仓库，确保**保存到 iCloud Drive** 已禁用。
- 在所有设备上强制退出 Obsidian 应用以暂停同步。
- 在 iOS/iPadOS 设备上打开**文件**应用。
- 长按 **iCloud Drive → Obsidian** 下的仓库文件夹，然后选择**移动**。
- 将仓库移动到**我的 iPhone/设备 → Obsidian**，并确认它现在可见。
- 点击**拷贝**。
- 返回 **iCloud Drive → Obsidian** 并删除旧的仓库文件夹。

重新打开 Obsidian 后，仓库应显示仓库图标而非云图标，确认它已不在 iCloud Drive 中。Obsidian Sync 也不会再在其设置中显示警告消息。

## 后续步骤

- 想要开始使用 Obsidian Sync？请参阅 [[启动同步服务]]
- 仍需帮助？请查看 [[官方同步故障排查指南]]
