---
permalink: import/evernote
---
Obsidian 讓你可以透過[[匯入工具|匯入工具外掛]]輕鬆從 Evernote 遷移筆記。這會將你的 Evernote 資料轉換為持久的 Markdown 檔案，可供 Obsidian 及許多其他應用程式使用。

## 從 Evernote 匯出資料

Obsidian 使用 Evernote 的匯出格式 `.enex` 檔案。

你可以在 [Evernote 的網站](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML)上找到 Evernote 的資料匯出說明。此方法可讓你在桌面版用戶端中匯出整個筆記本。

1. 前往筆記本畫面。
2. 點擊**更多動作**（`•••`）並選擇**匯出筆記本……**
3. 選擇 **ENEX** 作為檔案格式。
3. 選擇匯出的 `.enex` 檔案的儲存位置。

## 將 Evernote 資料匯入 Obsidian

你需要安裝官方的 Obsidian [[匯入工具]]外掛，你可以[在此安裝](obsidian://show-plugin?id=obsidian-importer)。

1. 開啟**[[設定]]**。
2. 前往**社群外掛程式**並[安裝匯入工具](obsidian://show-plugin?id=obsidian-importer)。
3. 啟用匯入工具外掛。
4. 透過命令面板或功能區圖示開啟**匯入工具**外掛。
5. 在**檔案格式**下選擇 **Evernote (.enex)**。
6. 選擇 Evernote 備份檔案的位置。
7. 點擊**匯入**並等待匯入完成。
8. 大功告成！

## 進階匯入選項

### 維持標籤層級結構

Evernote 匯出不會保留標籤的層級結構。若要保留標籤層級結構，你可以將標籤以「/」分隔來「扁平化」。例如，假設你有以下標籤結構：

```
ParentTag
    ChildTag
```

要在 Obsidian 中保持標籤的關聯性，你需要：

1. 右鍵點擊 ChildTag。
2. 選擇「重新命名」。
3. 將其重新命名為 `ParentTag/ChildTag`。

### 處理筆記本堆疊

由於匯出過程僅限於單一筆記本，預設的匯出檔案不包含筆記本堆疊的資訊。不過，匯入工具可以識別 enex 檔案名稱中的模式來將筆記本堆疊重建為資料夾。

假設你有一個名為 ```NotebookA``` 的筆記本位於名為 ```Stack1``` 的堆疊中，你可以透過將 enex 檔案重新命名為 ```Stack1@@@NotebookA``` 來重建筆記本堆疊。

這會使轉換後的筆記產生在 Stack1/NotebookA 資料夾中。

### 更多選項

若需更多從 Evernote 匯入的進階選項，你也可以嘗試[透過 Yarle 匯入](https://github.com/akosbalasko/yarle)。
