---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian 可以讓你透過[[匯入工具|匯入工具外掛]]從 Samsung Notes 匯入筆記。這會將你的筆記轉換為耐久的 Markdown 檔案，可在 Obsidian 及許多其他應用程式中使用。

## 從 Samsung Notes 匯出筆記

Samsung Notes 會將每則筆記儲存為 Samsung Notes 檔案（`.sdocx`）。

1. 在手機或平板上開啟 Samsung Notes。
2. 長按一則筆記，然後選取所有你想匯出的筆記。
3. 點選**另存為檔案**，然後選擇 **Samsung Notes 檔案**。
4. 選擇資料夾並點選**儲存**。
5. 將 `.sdocx` 檔案移至你使用 Obsidian 的裝置，例如透過 USB 傳輸線、Quick Share 或雲端硬碟。

如果你有大量檔案，可以將它們放入 `.zip` 檔案中再匯入。Samsung Notes 不會在儲存的檔案中包含資料夾結構，但匯入工具會保留 `.zip` 檔案內的資料夾。為了保持筆記井然有序，請在壓縮前將 Samsung Notes 各資料夾的筆記分別存入相同名稱的資料夾中。

## 將 Samsung Notes 資料匯入 Obsidian

你需要官方的 Obsidian [[匯入工具]]外掛，可以[在此安裝](obsidian://show-plugin?id=obsidian-importer)。

1. 開啟**[[設定]]**。
2. 前往**社群外掛程式**並[安裝匯入工具](obsidian://show-plugin?id=obsidian-importer)。
3. 啟用匯入工具外掛。
4. 透過命令面板或功能區圖示開啟**匯入工具**外掛。
5. 在**檔案格式**下，選擇 **Samsung Notes (.sdocx)**。
6. 選取你的 `.sdocx` 檔案，或包含這些檔案的 `.zip` 檔案。
7. 選取**匯入**以檢閱產生的範本並預覽筆記的範例。
8. 再次選取**匯入**，等待匯入完成。

## 限制

- 手寫內容和繪製的形狀會以 SVG 圖片的形式匯入到筆記末尾。筆劃會保留形狀和顏色，但不會保留感壓筆的筆畫粗細變化。形狀和線條會以黑色匯入。
- 文字方塊、頁面上的圖片及標註的 PDF 目前尚不支援匯入。
- 檢查清單項目會以未勾選狀態匯入。
- 文字顏色、字型和字型大小不會保留。
- 匯出前請先在 Samsung Notes 中解鎖已鎖定的筆記。

## 模板

使用[[匯入器模板]]完整設定 Samsung Notes 資料的匯入方式。

![[匯入器模板#變數]]
