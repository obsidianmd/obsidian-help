---
permalink: import/apple-notes
---
Obsidian 讓你可以透過 [[匯入工具|匯入工具外掛]] 輕鬆地從 Apple Notes 遷移筆記。這會將你的 Apple Notes 資料轉換為耐久的 Markdown 檔案，你可以在 Obsidian 及許多其他應用程式中使用。

目前，匯入工具僅支援在 macOS 上從 Apple Notes 遷移。尚不支援 iOS。

## 將 Apple Notes 資料匯入 Obsidian

你需要官方的 Obsidian [[匯入工具]]外掛，你可以[在此安裝](obsidian://show-plugin?id=obsidian-importer)。

1. 開啟**[[設定]]**。
2. 前往**社群外掛程式**並[安裝匯入工具](obsidian://show-plugin?id=obsidian-importer)。
3. 啟用匯入工具外掛。
4. 使用命令面板或功能區圖示開啟**匯入工具**外掛。
5. 在**格式**下選擇 **Apple Notes**。
6. 點擊**匯入**。
7. 在出現的標題為 `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data` 的彈出視窗上點擊**開啟**。
8. 等待匯入完成。
9. 完成！

## 支援的內容

Obsidian 匯入工具外掛支援幾乎所有 Apple Notes 的內容類型。包括表格、圖片、繪圖、掃描件、PDF 以及 iOS 17 引入的連結。

> [!Warning]
> 受密碼保護的筆記已由 Apple 加密，因此必須先解鎖才能匯入。任何已鎖定的筆記將被跳過。

### 掃描件

Apple 會根據掃描件的建立方式以不同格式儲存。為了保留原始資料，這意味著它們的匯出方式也會不同。

* 在較舊版本的 macOS 或 iOS 上建立或檢視的掃描件，將匯出為一系列未裁剪的圖片。
* 在較新版本的 macOS 或 iOS 上建立或檢視的掃描件，通常會匯出為已裁剪的圖片。
* 使用 iOS 17 引入的功能編輯過的掃描件，通常會匯出為 PDF。

## 替代匯出方法

Apple 未提供原生選項來匯出你的筆記。不過有一些第三方工具可用，例如 Chintan Ghate 開發的 [Exporter](https://apps.apple.com/us/app/exporter/id1099120373)。請注意，大多數工具在從 Apple Notes 匯出資料時存在限制，可能無法提供最相容的輸出資料。這些工具在你的 Apple Notes 主要為純文字、附件或繪圖和掃描件等特殊功能較少時效果最佳。

根據你使用的工具，匯出格式可能為 Markdown 格式或 HTML 格式。請依據你匯出的檔案格式參照以下說明：

- [[匯入 HTML 檔案]]
- [[匯入 Markdown 檔案]]
