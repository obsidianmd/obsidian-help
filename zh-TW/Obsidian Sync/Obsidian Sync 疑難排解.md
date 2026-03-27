---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 本頁列出您在使用 Obsidian Sync 時可能遇到的不常見問題及其解決方法。
---
本頁列出了使用 [[Obsidian Sync 簡介|Obsidian Sync]] 時可能遇到的不常見問題及其解決方法。在繼續之前，建議先查看 [[狀態圖示與訊息]] 和 [[常見問題]] 頁面。

## 一般問題

### 衝突解決

當你在兩個或多個裝置上修改同一個檔案，且尚未完成同步時，就會發生衝突。例如，你在電腦上編輯了一則筆記，在該變動上傳之前，你又在手機上修改了同一則筆記。

離線工作時衝突發生的機率更高。因為變動更多且同步間隔時間更長，這增加了衝突的可能性。

#### Obsidian Sync 如何處理衝突

當 Obsidian Sync 偵測到衝突時，結果取決於檔案類型：

- **Markdown 檔案**：Obsidian Sync 使用 Google 的 [diff-match-patch](https://github.com/google/diff-match-patch) 演算法合併變動。
- **其他檔案類型**：對於所有其他檔案（包括白板），Obsidian 採用「最後修改者優先」的方式。最近修改的版本會取代先前的版本。

對於 Obsidian 設定中的衝突（例如外掛設定），Obsidian Sync 會合併 JSON 檔案。它會將本機 JSON 的鍵值套用到遠端 JSON 之上。

#### 衝突解決選項

從 Obsidian 1.9.7 開始，你可以選擇如何處理衝突。要設定此選項：

1. 開啟 **[[設定]]**。
2. 在側邊欄中，選擇 **Sync**。
3. 在 **[[同步設定與選擇性同步#衝突解決|衝突解決]]** 下，選擇你偏好的選項：
   - **自動合併**（預設）：Obsidian Sync 會將不同裝置的所有變動合併為單一檔案。這會保留所有編輯，但有時可能會產生重複文字或格式問題。你需要手動修正這些問題。
   - **建立衝突檔案**：當 Obsidian 偵測到衝突的變動時，它會建立一個獨立的衝突檔案，而不是自動合併。你可以查看兩個版本並自行合併。這讓你能完全控制最終結果。

> [!warning]+ 在所有裝置上設定
> 衝突解決設定是裝置特定的。你必須在每個裝置上設定你偏好的選項。這確保所有同步裝置上的行為一致。

**衝突檔案命名模式**

當你使用「建立衝突檔案」選項時，Obsidian 會以下列命名模式建立新檔案：

```
原始筆記名稱 (Conflicted copy 裝置名稱 YYYYMMDDHHMM).md
```

例如，如果 `Meeting notes.md` 這則筆記發生衝突，衝突檔案可能命名為：

```
Meeting notes (Conflicted copy MyMacBook2 202411281430).md
```

衝突檔案包含偵測到衝突的裝置上的變動。原始檔案保留遠端版本。你可以比較兩個檔案並手動合併內容。

> [!info]+ 查看同步紀錄
> 要查看衝突發生的時間，請開啟 [[狀態圖示與訊息#同步活動|同步紀錄]]。篩選「Merge Conflicts」或搜尋「Conflict」。

### Sync 刪除了我剛在兩個裝置上建立的筆記

Obsidian Sync 通常會嘗試透過跨裝置合併衝突筆記來 [[#衝突解決|解決衝突]]。然而，對於在啟動時自動建立或變更筆記的使用者，可能會發生問題。這包括 [[每日筆記]] 或使用社群外掛 [Templater](https://github.com/SilentVoid13/Templater) 時。

如果你在某個裝置上本機建立了一則筆記，並且在幾分鐘內，Sync 下載了該筆記的遠端版本，Sync 會保留遠端版本而不合併兩者。在這種情況下，你可以使用 [[檔案還原]] 來復原本機版本。

### Sync 不會同步我的外掛和設定更新

Obsidian [[常見問題#Obsidian Sync 會即時重新載入我的設定嗎？|不會即時重新載入所有設定]]。在你更新設定或外掛後，需要在其他裝置上重新啟動 Obsidian 才能看到變動。在行動裝置上，你可能需要強制關閉應用程式。

> [!example]- 變更主題
> - 在你的主要裝置（通常是電腦）上，你將主題從自訂主題改回預設主題。
> - 同步紀錄確認更新的檔案已傳送到遠端庫，但你的行動裝置仍顯示自訂主題。
> - 在行動裝置上，查看同步紀錄以確認已收到更新的 `appearance.json` 檔案。
> - 在行動裝置上重新載入或重新啟動 Obsidian。
> - 重新載入或重新啟動後，行動裝置應該會顯示與電腦相同的主題。

### 我的檔案在還原後立即從 Sync 中消失

這個問題在 Windows 上最為常見。Windows Defender 可能會隔離包含程式碼區塊的檔案，導致某些筆記消失。

另一個常見原因是雙重同步。這發生在 Obsidian Sync 與其他同步服務同時運行時。

![[切換至 Obsidian Sync#將你的保管庫移出第三方同步服務或雲端儲存空間]]

---

最後，當你在一個裝置上還原檔案，但該檔案從另一個裝置上被移除時，也可能發生這種情況。這發生在檔案名稱包含 [[狀態圖示與訊息#已跳過的訊息|非法字元]] 時。

## Android

**我的裝置正在刪除透過 Sync 接收的附件**

這個問題可能是由於 Google 或 Android 相簿在管理你的附件。為防止系統變更透過 Sync 接收的檔案，請在你的 Android 裝置上將 `.nomedia` [檔案加入你的保管庫](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en)。

> [!tip]- 使用外掛
> 社群外掛 [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) 可以簡化這個操作。在你的 Android 手機上安裝它。請注意，`.nomedia` 檔案不會透過 Obsidian Sync 在裝置之間同步。
