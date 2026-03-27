---
permalink: import/notion
---
Obsidian 讓你可以透過 [[匯入工具|匯入工具外掛程式]] 輕鬆地從 Notion 匯入筆記。這會將你的 Notion 資料轉換為耐用的 Markdown 檔案，你可以離線使用 Obsidian 和其他許多應用程式來存取這些檔案。

Obsidian 提供兩種匯入 Notion 資料的方式：

1. **API 匯入** 會保留你的整個工作區，包括資料庫和公式，這些會被轉換為 [[資料庫介紹|資料庫]]，但需要 Notion 整合權杖和網路連線。
2. **檔案匯入** 不會保留資料庫，但不需要 API 權杖或網路連線。

## API 匯入

### 建立 Notion API 整合權杖

要透過 API 存取你的 Notion 資料，你需要一個整合權杖。此步驟大約需要 2 分鐘完成。

權杖是一串通常以 `ntn_...` 開頭的長數字和字母字串，它將允許你從 Notion 下載資料。

1. 登入你的 [Notion Integrations](https://www.notion.so/profile/integrations/internal) 儀表板。
2. 選擇 **New integration**。

![[notion-integration.png#interface]]

2. 為你的整合取一個名稱，例如「Personal」。可以使用任何名稱。
3. 選擇你想要匯出的工作區。
4. 點擊 **Save** 並繼續到 **Configure integration settings**。
5. 在 **Configuration** 分頁中，你可以在 **Internal Integration Secret** 欄位找到 API 權杖。
6. 選擇 **Show** 然後 **Copy**。
7. 將權杖儲存到安全的地方，例如你的密碼管理器。

![[notion-token.png#interface]]

接下來，授予你的整合對你想要匯入的 Notion 頁面和資料庫的存取權限。

1. 前往你剛建立的整合的 **Access** 分頁。
2. 點擊 **Edit access**。
3. 新增你想要匯入的頁面和資料庫。

現在你可以使用 Obsidian 匯入工具來轉換你的資料。

### 透過 API 匯入你的 Notion 資料

你需要官方的 Obsidian [[匯入工具]]外掛程式，你可以[在這裡安裝](obsidian://show-plugin?id=obsidian-importer)。

1. 開啟**[[設定]]**。
2. 前往**社群外掛程式**並[安裝匯入工具](obsidian://show-plugin?id=obsidian-importer)。
3. 啟用匯入工具外掛程式。
4. 使用命令面板或功能區圖示開啟**匯入工具**外掛程式。
5. 在 **File format** 下選擇 **Notion (API)**
6. 在 **API token** 下，貼上你從 Notion 取得的 **Internal Integration Secret**。
7. 點擊 **Load** 以選擇你想要匯入的資料庫和頁面。
8. 檢視並編輯匯入選項。
9. 選擇 **Import** 並等待匯入完成
10. 大功告成！

### 限制

> [!info] API 匯入是新功能
> Notion API 匯入工具是新功能。由於 Notion 工作區的複雜性，某些邊緣情況可能尚未被考慮到。如果你在轉換過程中遇到問題，請[提交錯誤回報](https://github.com/obsidianmd/obsidian-importer/issues)以便我們改進。

由於 Notion API 速率限制，匯入大型工作區可能需要相當長的時間。請耐心等待。

由於 Notion API 的限制，某些資料無法取得或無法轉換：

- 每個資料庫僅匯入主要檢視。
- [連結資料來源](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases)不會被匯入：*「Notion 的 API 目前不支援連結資料來源。當與你的整合分享資料庫時，請確保它包含原始資料來源！」*
- `People` 函式：`name()` 和 `email()`
- `Text` 函式：`style()` 和 `unstyle()`

此外，匯入工具會進行以下變更：

- 沒有子頁面或資料庫的頁面將以 `[filename].md` 匯入，而非 `[filename]/[filename].md`。
- 資料庫始終以名為 `[database name]` 的資料夾表示，內含一個 `[database name].base` 檔案。

## 檔案匯入

檔案匯入是匯入 Notion 資料的替代方式。此方法不會保留資料庫，但不需要 API 權杖或網路連線。

### 從 Notion 匯出你的資料

要準備你的資料以進行匯入，你需要使用 Notion 的 HTML 匯出格式來匯出整個工作區。我們建議你不要使用 Notion 的 Markdown 匯出，因為它會遺漏重要資料。你必須擁有 Notion 工作區的管理員權限才能匯出所有工作區內容。

1. 前往 Notion 側邊欄頂部的**[[設定]]**。
2. 在 **Workspace** 下選擇 **General**。
3. 找到並選擇 **Export all workspace content**。
4. 在 **Export format** 下選擇 **HTML**。
5. 選擇 **Include everything**。
6. 啟用 **Create folders for subpages**。
7. 你將會透過電子郵件或直接在瀏覽器中收到一個 `.zip` 檔案。

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### 匯入你的 Notion .zip 檔案

你需要官方的 Obsidian [[匯入工具]]外掛程式，你可以[在這裡安裝](obsidian://show-plugin?id=obsidian-importer)。

1. 開啟**[[設定]]**。
2. 前往**社群外掛程式**並[安裝匯入工具](obsidian://show-plugin?id=obsidian-importer)。
3. 啟用匯入工具外掛程式。
4. 使用命令面板或功能區圖示開啟**匯入工具**外掛程式。
5. 在 **File format** 下選擇 **Notion (.zip)**
6. 選擇包含你想要匯入的 Notion 檔案的 `.zip` 檔案。*建議一次匯入所有 Notion 資料，以便正確對應內部連結。*
7. _可選_，選擇一個匯入用的資料夾。你的 Notion 頁面和資料庫將嵌套在此資料夾內。
8. 啟用 **Save parent pages in subfolders** 以保留 Notion 結構。*請注意，在 Notion 中你可以在資料夾中撰寫內容，這在 Obsidian 中無法實現，這些頁面將作為資料夾下的子頁面新增。*
9. 選擇 **Import** 並等待匯入完成
10. 大功告成！

### 疑難排解

如果你在從 Notion 匯入時遇到問題：

- 確保你在 Notion 中使用 **HTML** 作為匯出格式，**而非 Markdown**。
- 如果 Obsidian 在匯入過程中似乎凍結，請停用社群外掛程式後重試。

遇到其他問題？搜尋[匯入工具儲存庫](https://github.com/obsidianmd/obsidian-importer/issues)以查看其他人是否遇到過相同的問題。

#### 匯入大型工作區

如果你正在匯入包含數 GB 資料的工作區，從 Notion 匯出的檔案可能包含巢狀的 `.zip` 檔案。在這種情況下，你可能會看到類似以下的匯入錯誤訊息：

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

如果你看到此錯誤，可以先解壓縮從 Notion 取得的檔案，然後匯入巢狀的 `Export-{id}-Part-1.zip` 檔案。
