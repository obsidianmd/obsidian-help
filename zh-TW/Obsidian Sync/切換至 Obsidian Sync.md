---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 了解如何從您目前的同步方案遷移至 Obsidian Sync。
---
了解如何從現有的同步方案遷移至 Obsidian Sync。

> [!warning] 避免使用多個方案同步相同的檔案
> 我們[[常見問題#我可以將第三方同步與 Obsidian Sync 一起使用嗎？|不建議]]將 Obsidian Sync 與雲端儲存服務（例如 iCloud、Dropbox、OneDrive、Google Drive）同時使用，因為這可能會導致衝突。不過，雲端儲存服務可以作為你[[備份你的 Obsidian 檔案|備份]]策略的一部分。

## 將保管庫移出第三方同步服務或雲端儲存

如果你的保管庫存放在以下任一位置，它很可能正被第三方服務同步：

- **Windows**：`C:\Users\Username\Desktop` 或 `C:\Users\Username\Documents`
- **macOS**：`/users/username/Desktop` 或 `/users/username/Documents`
- **iOS**：「檔案」應用程式中的 **iCloud** 資料夾
- **其他**：任何同步服務底下的資料夾，例如 `Drive/my-vault`、`Dropbox/my-vault`、`pSync/my-vault` 等。

雖然 Android 和 Linux 較少出現此類問題，但仍建議檢查這些裝置上的保管庫位置。

> [!tip] 如果你目前的本機保管庫已連接到遠端庫，Obsidian 會嘗試偵測保管庫是否位於同步服務中。如果是，你將在 Obsidian Sync 的設定頂部看到一則訊息。

為避免與同步服務產生衝突，我們建議將 Obsidian 保管庫存放在以下位置：

- **Windows**：依優先順序推薦的位置：
    1. `D:\` 或裝置上任何非 C 槽、非網路磁碟
    2. `C:\Vaults`（如果你有 C:\ 磁碟的使用權限）
    3. `C:\Users\Username\Vaults`（如果你必須將保管庫放在 C:\Users\Username 底下，請確保 OneDrive 未設定為移除檔案。OneDrive 在 `Desktop` 和 `Documents` 資料夾以外的地方通常較不會主動介入。）
- **macOS**：`/users/username/vaults`
- **Linux**：由於檔案系統種類多樣，沒有特定建議。只需確保 Obsidian 擁有完整的讀寫權限，且該資料夾未被任何同步服務管理。
- **iOS/iPadOS**：將保管庫存放在**「我的 iPhone」**或**「裝置上」**。
- **Android**：使用裝置上的 `Documents/` 資料夾。

## 在桌面版 Obsidian 中搬移保管庫

![[管理保管庫#將保管庫搬移到其他資料夾]]

## 在行動裝置上搬移保管庫

在行動裝置上，Obsidian 執行在沙盒環境中，這代表你無法像在桌面版一樣在應用程式內搬移保管庫。

### Android

Android 的檔案系統因裝置而異，但一般而言，請依照手動搬移保管庫的相同步驟操作，確保保管庫已從裝置上的任何同步服務中移除。

### iOS 與 iPadOS

若要將現有的 iCloud 保管庫搬移到裝置上，請依照以下步驟操作：

> [!note] 如果你已在其他裝置上擁有資料並設定了 Obsidian Sync，建議改為[[設定 Obsidian Sync#在其他裝置上同步遠端庫|從 Sync 設定新的本機保管庫]]。

- [[備份你的 Obsidian 檔案|備份]]你的保管庫。
- 在裝置上建立新的保管庫，確保已停用**儲存至 iCloud Drive**。
- 在所有裝置上強制關閉 Obsidian 應用程式以暫停同步。
- 在 iOS/iPadOS 裝置上開啟**「檔案」**應用程式。
- 長按 **iCloud Drive → Obsidian** 底下的保管庫資料夾，然後選擇**「搬移」**。
- 將保管庫搬移到**「我的 iPhone/裝置 → Obsidian」**，並確認它已可見。
- 點選**「拷貝」**。
- 返回 **iCloud Drive → Obsidian** 並刪除舊的保管庫資料夾。

重新開啟 Obsidian 後，保管庫應該會顯示保管庫圖示而非雲端圖示，確認它已不在 iCloud Drive 中。Obsidian Sync 也將不再於設定中顯示警告訊息。

## 後續步驟

- 想開始使用 Obsidian Sync？[[設定 Obsidian Sync]]
- 仍需要協助？請查看 [[Obsidian Sync 疑難排解]]
