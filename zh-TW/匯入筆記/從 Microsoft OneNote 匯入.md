---
permalink: import/onenote
cssclasses:
  - soft-embed
---
Obsidian 讓你可以透過 [[匯入工具|匯入工具外掛]] 輕鬆地從 Microsoft OneNote 匯入筆記。這會將你的 OneNote 資料轉換為耐久的 Markdown 檔案，可供 Obsidian 及許多其他應用程式使用。

Obsidian 提供兩種方式匯入你的 OneNote 資料：

1. **Microsoft 帳戶**登入你的 Microsoft 帳戶並匯入已同步至 OneDrive 的筆記本。需要網路連線。
2. **檔案匯入**使用 OneNote 的匯出檔案（`.onepkg` 和 `.one`）。不需要帳戶或網路連線，也適用於從未同步過的筆記本。

## 從你的 Microsoft 帳戶匯入

> [!Warning]
> 僅能匯入你帳戶擁有的筆記本。不支援他人與你共用的筆記本，而工作或學校帳戶可能需要你的組織核准存取權限。

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
10. 點擊**匯入**並等待匯入完成。
11. 完成！

如果你的筆記本屬於工作或學校帳戶，OneNote 可能會在你登入後拒絕外掛存取它們。此時**登出**旁會出現**使用工作或學校帳戶存取**按鈕。使用該按鈕以這些帳戶所需的更廣泛權限重新登入。你的組織可能需要先核准該權限才能生效。

### 疑難排解

#### 沒有顯示任何分區或筆記本

請確認你嘗試匯入的筆記本已同步至 OneDrive，且在 OneNote Web 中可見。筆記本必須由你擁有（不支援他人擁有的共用筆記本）。

如果特定分區遺失，請確認該分區未被鎖定，因為被鎖定的分區在移除鎖定前是不可見的。

如果是工作或學校筆記本，請參閱上方關於**使用工作或學校帳戶存取**的說明。

#### 匯入的筆記為空白或缺少內容

此問題可能發生在你很少使用的筆記本上。請按照以下步驟解決：

1. 在瀏覽器中開啟 [OneNote Web](https://onenote.com/notebooks)。
2. **右鍵點擊**缺少內容的筆記本。
3. 從選單中選擇**匯出筆記本**。
4. 將剛下載的檔案**解壓縮**到一個資料夾。
5. 將你的 OneNote 筆記本上傳至[這裡](https://www.onenote.com/notebooks/exportimport?toImport=true)。
6. 開啟 **Obsidian 匯入工具**並再次嘗試匯入。

如果你已按照這些提示操作但問題仍未解決，可能是 Microsoft 伺服器暫時出現問題。如果是這種情況，請等待幾分鐘後再試一次。如果問題持續存在，請在 [Obsidian Importer GitHub 儲存庫](https://github.com/obsidianmd/obsidian-importer/issues)上提交問題。

## 匯入 OneNote 檔案（.one、.onepkg）

檔案匯入是匯入 OneNote 資料的另一種方式。它讀取 OneNote 自身產生的匯出檔案，因此不需要 Microsoft 帳戶也不需要網路連線。適用於僅儲存在你電腦上的筆記本、你的帳戶無法存取的筆記本，或者當你不想登入時使用。

### 從 OneNote 匯出你的筆記本

我們建議將每個筆記本匯出為 **OneNote 套件**（`.onepkg`）。一個套件包含筆記本的所有分區，因此你可以在單一步驟中匯出和匯入筆記本，匯入工具會列出其分區供你選擇。

匯出功能僅在 **OneNote for Windows** 中可用，即隨 Microsoft 365 提供的桌面應用程式。Mac 版 OneNote 應用程式和舊版 OneNote for Windows 10 應用程式無法匯出為這些格式。

1. 在 OneNote for Windows 中開啟你要匯出的筆記本。
2. 前往**檔案 → 匯出**。
3. 在**匯出目前的**下選擇**筆記本**。
4. 在**選取格式**下選擇 **OneNote 套件 (\*.onepkg)**。
5. 點擊**匯出**並選擇儲存檔案的位置。
6. 對你想匯入的每個筆記本重複此操作。

若要匯出單一分區，請在步驟 3 中選擇**分區**，並在步驟 4 中選擇 **OneNote 2010-2016 分區 (\*.one)**。

你也可以直接匯入 OneNote 已儲存在磁碟上的分區檔案，無需匯出任何東西：

- 儲存在你電腦上的筆記本位於 `Documents\OneNote Notebooks`，每個分區一個 `.one` 檔案。
- 已同步筆記本的備份位於 `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`。

### 匯入你的 OneNote 檔案

你需要官方的 Obsidian [[匯入工具]]外掛，可以[在此安裝](obsidian://show-plugin?id=obsidian-importer)。

1. 開啟**[[設定]]**。
2. 前往**社群外掛程式**並[安裝匯入工具](obsidian://show-plugin?id=obsidian-importer)。
3. 啟用匯入工具外掛。
4. 透過命令面板或功能區圖示開啟**匯入工具**外掛。
5. 在**檔案格式**下選擇 **Microsoft OneNote (.one, .onepkg)**。
6. 選擇你要匯入的 `.onepkg` 和 `.one` 檔案。你可以一次選擇多個檔案，這樣所有筆記本就可以一起匯入。
7. 在**要匯入的分區**下會列出這些檔案中找到的分區，預設全部勾選。取消勾選你不想匯入的項目。
8. 可選擇性地設定匯入的**輸出資料夾**、附件的儲存位置，以及再次匯入相同筆記本時如何處理**現有筆記**。
9. 點擊**匯入**並等待匯入完成。
10. 完成！

每個分區會成為一個資料夾，其中的每個頁面會成為一個筆記。子頁面會儲存在以其上層頁面命名的資料夾中，這樣可以保持 OneNote 中顯示的結構，並避免同名子頁面發生衝突。筆記本資源回收筒中的頁面不會被匯入。

### 限制

- 受密碼保護的分區以加密方式儲存，其頁面會被跳過。請在 OneNote 中移除密碼後重新匯出以進行匯入。
- 受權限保護的檔案只能由原則允許的帳戶開啟，匯入工具無法讀取。

## 隱私權

如果你選擇使用 Microsoft 帳戶匯入，Obsidian 匯入工具外掛使用 [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) 來驗證並匯入你的 OneNote 筆記本。這會授予你帳戶一個短期存取權杖，該權杖僅從你的電腦使用，且永遠不會被儲存。匯入完成後，你可以選擇從 [Microsoft 應用程式與服務頁面](https://account.live.com/consent/Manage)撤銷該權杖。

檔案匯入永遠不會連線至 Microsoft：你選擇的檔案會在你的電腦上讀取，不需要任何網路連線。
