---
permalink: import/google-keep
---
Obsidian 讓你可以透過 [[匯入工具|匯入工具外掛]] 輕鬆地從 Google Keep 匯入筆記。這會將你的 Google Keep 資料轉換為耐用的 Markdown 檔案，可在 Obsidian 和許多其他應用程式中使用。

## 從 Google Keep 匯出資料

1. 前往 [Google Takeout](https://takeout.google.com/settings/takeout) 並登入你的 Google 帳戶。
2. 點擊右上角的**取消全選**。
3. 向下捲動並從清單中選擇 **Keep**。
4. 捲動到頁面底部並點擊**下一步**。
5. 在下一個畫面中，點擊**建立匯出**按鈕。
6. 當 `.zip` 檔案可用時下載它。

## 將 Google Keep 資料匯入 Obsidian

你需要官方的 Obsidian [[匯入工具]]外掛，可以[在此安裝](obsidian://show-plugin?id=obsidian-importer)。

1. 開啟**[[設定]]**。
2. 前往**社群外掛程式**並[安裝匯入工具](obsidian://show-plugin?id=obsidian-importer)。
3. 啟用匯入工具外掛。
4. 使用命令面板或功能區圖示開啟**匯入工具**外掛。
5. 在**格式**下選擇 **Google Keep (.zip)**。
6. 選擇 `.zip` 檔案的位置。
7. 點擊**匯入**並等待匯入完成。
8. 大功告成！

### 支援的功能

- 所有檢查清單都會以頂層項目匯入，因為 Google Keep 不會匯出縮排資訊。
- 筆記上的提醒和使用者指派不會被匯入，因為 Obsidian 不支援這些功能。
- 所有其他資訊應會以內容和標籤的組合方式匯入。
