---
permalink: import/onenote
---
Obsidian 讓你可以透過 [[匯入工具|匯入工具外掛]] 輕鬆地從 Microsoft OneNote 匯入筆記。這會將你的 OneNote 資料轉換為耐久的 Markdown 檔案，可供 Obsidian 及許多其他應用程式使用。

> [!Warning]
> 僅能匯入個人帳戶擁有的筆記本。不支援共用筆記，也不支援工作或學校帳戶。

## 將 OneNote 資料匯入 Obsidian

你需要官方的 Obsidian [[匯入工具]]外掛，可以[在此安裝](obsidian://show-plugin?id=obsidian-importer)。

1. 開啟**[[設定]]**。
2. 前往**社群外掛程式**並[安裝匯入工具](obsidian://show-plugin?id=obsidian-importer)。
3. 啟用匯入工具外掛。
4. 透過命令面板或功能區圖示開啟**匯入工具**外掛。
5. 在**檔案格式**下選擇 **Microsoft OneNote**。
6. 點擊**登入**以在網頁瀏覽器中開啟 Microsoft 登入頁面。輸入包含你 OneNote 筆記本的 Microsoft 帳戶憑證。關於 Microsoft 登入流程的更多資訊請參閱下方。
7. 點擊**接受**以授權 Obsidian 檢視你的 OneNote 筆記本。
8. 點擊**開啟鏈接**以允許瀏覽器將你重新導向至 Obsidian 應用程式。
9. 在 Obsidian 應用程式中，匯入工具對話方塊現在會顯示你已登入，並列出你的 OneNote 筆記本和分區。勾選你想匯入的分區。

![[OneNote-Importer-Select-Sections.png]]

10. 點擊**匯入**並等待匯入完成。
11. 完成！

## 疑難排解

### 沒有顯示任何分區或筆記本

請確認你嘗試匯入的筆記本已同步至 OneDrive，且在 OneNote Web 中可見。筆記本必須由你擁有（不支援他人擁有的共用筆記本）。

如果特定分區遺失，請確認該分區未被鎖定——被鎖定的分區在移除鎖定前是不可見的。

### 匯入的筆記為空白或缺少內容

此問題可能發生在你很少使用的筆記本上。請按照以下步驟解決：

1. 在瀏覽器中開啟 [OneNote Web](https://onenote.com/notebooks)。
2. **右鍵點擊**缺少內容的筆記本。
3. 從選單中選擇**匯出筆記本**。
4. 將剛下載的檔案**解壓縮**到一個資料夾。
5. 將你的 OneNote 筆記本上傳至[這裡](https://www.onenote.com/notebooks/exportimport?toImport=true)。
6. 開啟 **Obsidian 匯入工具**並再次嘗試匯入。

如果你已按照這些提示操作但問題仍未解決，可能是 Microsoft 伺服器暫時出現問題。如果是這種情況，請等待幾分鐘後再試一次。如果問題持續存在，請在 [Obsidian Importer GitHub 儲存庫](https://github.com/obsidianmd/obsidian-importer/issues)上提交問題。

## 隱私權

Obsidian 匯入工具外掛使用 [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) 來驗證你的 Microsoft 帳戶並匯入你的 OneNote 筆記本。這會授予你帳戶一個短期存取權杖，該權杖僅從你的電腦使用，且永遠不會被儲存。匯入完成後，你可以選擇從 [Microsoft 應用程式與服務頁面](https://account.live.com/consent/Manage)撤銷該權杖。
