---
permalink: import/textbundle
cssclasses:
  - soft-embed
---
Obsidian 可以讓你使用官方的[[匯入工具|匯入工具外掛]]輕鬆匯入 [Textbundle](https://textbundle.org/) 檔案。

如果你正在從特定應用程式匯入筆記，你可能需要先查看[[匯入工具|匯入工具外掛]]支援的應用程式清單，確認是否有特定的轉換器能更好地保留你要遷移的資料。

Textbundle 格式將 Markdown 文字和所有參照的圖片打包成單一檔案，提供一種更流暢的方式從沙盒應用程式中匯出資料。許多[應用程式](https://textbundle.org/)都支援 Textbundle 匯出，包括 Agenda、Craft、Taio、Ulysses、Zettlr 等。

## 將 Textbundle 檔案匯入 Obsidian

你需要官方的 Obsidian [[匯入工具]]外掛，你可以[在此安裝](obsidian://show-plugin?id=obsidian-importer)。

1. 開啟**[[設定]]**。
2. 前往**社群外掛程式**並[安裝匯入工具](obsidian://show-plugin?id=obsidian-importer)。
3. 啟用匯入工具外掛。
4. 在設定中開啟匯入工具，或使用[[命令面板]]。
5. 在**檔案格式**下選擇 **Textbundle (.textbundle, .textpack)**。
6. 選取你的 Textbundle 或 Textpack 檔案所在位置。也支援 Zip 檔案。
7. 點選**匯入**以檢視產生的範本並預覽筆記中的範例。
8. 再次點選**匯入**並等待匯入完成。

## 自訂匯入的筆記

在匯入開始之前，匯入工具會顯示從所選 Textbundle 檔案產生的預覽。你可以編輯產生的範本，或從你的保管庫中選擇 Markdown 範本。請參閱 [[匯入器模板]]。

## 疑難排解

### 沒有選取任何檔案進行匯入

Textbundle 匯入一次只能匯入一個 Textbundle 檔案，且僅限 Mac 裝置。你可以改為將所有要匯入的 Textbundle 檔案壓縮成單一 .zip 檔案，然後從任何裝置匯入該壓縮檔。

## 範本

使用 [[匯入器模板|匯入工具範本]] 來完整設定資料的匯入方式。

![[匯入器模板#Variables]]
