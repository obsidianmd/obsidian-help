---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian 讓你可以使用官方的[[匯入工具|匯入工具外掛]]從 Tomboy 和 Gnote 遷移筆記。匯入工具會直接讀取這些應用程式的 `.note` 檔案，並將其 XML 內容轉換為 Markdown。

## 尋找你的筆記檔案

Tomboy 和 Gnote 通常將筆記儲存在以下資料夾中：

- **macOS：**`~/Library/Application Support/Tomboy`
- **Windows：**`%APPDATA%\Tomboy`
- **Linux：**`~/.local/share/tomboy` 或 `~/.local/share/gnote`

如果你移動了資料資料夾或使用不同版本的應用程式，實際位置可能會有所不同。

## 匯入你的 Tomboy 或 Gnote 筆記

1. 開啟**[[設定]] → 社群外掛程式**並[安裝匯入工具](obsidian://show-plugin?id=obsidian-importer)。
2. 啟用匯入工具外掛。
3. 使用[[命令面板]]或功能區圖示開啟**匯入工具**。
4. 在**檔案格式**下，選擇 **Tomboy/Gnote (.note)**。
5. 挑選個別的 `.note` 檔案或包含這些檔案的資料夾。
6. 檢視匯入選項、產生的範本和預覽範例。
7. 選擇**匯入**，然後等待匯入完成。

## 模板

使用[[匯入器模板|匯入器模板]]來完整設定資料的匯入方式。

![[匯入器模板#變數]]
