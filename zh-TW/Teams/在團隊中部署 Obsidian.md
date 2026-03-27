---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian 以本機應用程式的形式在每位團隊成員的裝置上執行。它的設計兼顧線上與離線使用，確保安全與隱私，並讓你完全掌控團隊的資料。Obsidian 不提供網頁版應用程式，因此你需要將應用程式部署到團隊成員的裝置上。

## 安裝與更新 Obsidian

你的團隊可以從我們的[下載頁面](https://obsidian.md/download)下載 Obsidian。發行版本也可在我們的 [GitHub 發行頁面](https://github.com/obsidianmd/obsidian-releases/releases)取得，其中包含[更新日誌](https://obsidian.md/changelog/)的連結。

> [!tip] 對於需要系統安裝程式的 Windows 使用者，通用 `.exe` 包含為所有使用者安裝 Obsidian 的選項。

如果應用程式中已啟用自動更新，使用者重新啟動 Obsidian 時會自動安裝未來的版本。此外，我們建議定期執行[[更新 Obsidian#安裝程式更新|安裝程式更新]]，以獲得 Electron 框架的最新更新，包括安全性修正。

如果你想了解如何在此過程中限制 Obsidian 的網路存取，請參閱[[團隊安全性考量#網路與存取|網路與存取]]。

## 自訂 Obsidian

Obsidian 可以輕鬆修改以符合團隊的需求。憑藉廣泛的 API 和龐大的使用者生態系統，Obsidian 提供了眾多外掛程式、佈景主題和輔助工具。

有關這些主題的安全性問題，請參閱[[團隊安全性考量]]。

### 設定資料夾

[[設定資料夾]]是 Obsidian [[術語表#保管庫|保管庫]]儲存應用程式設定的位置。預設情況下，此資料夾名稱為 `.obsidian`，但你可以根據偏好靈活地[[設定資料夾#變更設定資料夾|變更設定資料夾]]名稱。

我們建議建立標準化的設定資料夾範本，以便部署到團隊的各個裝置上。

### 外掛程式

[[核心外掛程式]]是由 Obsidian 團隊建立的選用功能。這些功能整合在核心應用程式的程式碼中，可以開啟或關閉。

[[社群外掛程式]]是由第三方新增到 Obsidian 應用程式的功能，可透過社群目錄安裝。第三方外掛程式使用 [Obsidian API](https://github.com/obsidianmd/obsidian-api)。外掛程式位於保管庫中的 `.obsidian/plugins` 資料夾，也可以手動安裝到此位置。

### 佈景主題與程式碼片段

[[佈景主題]]可以從視覺上改變 Obsidian 的介面。與外掛程式一樣，佈景主題可以從社群目錄下載。佈景主題位於保管庫中的 `.obsidian/themes` 資料夾。

[[CSS 片段|程式碼片段]]是小型 `.css` 檔案，可從視覺上修改 Obsidian 介面的各個面向。在某些情況下，它也能新增功能增強。程式碼片段位於保管庫中的 `.obsidian/snippets` 資料夾。

## 常見問題

有關帳戶管理與安全性的問題，請參閱[[團隊安全性考量#帳戶安全性|帳戶安全性]]。

### 部署

**我可以將授權部署到多個安裝中嗎？**
目前我們不支援透過部署腳本（例如 `.json` 檔案）來部署授權。如果你的團隊對此功能有興趣，請提交[功能請求](https://forum.obsidian.md/c/feature-requests/8)。

**Obsidian 可以透過設定或應用程式旗標鎖定某些功能或設定嗎？**
目前你可以透過封鎖上述 `.obsidian` 資料夾或其中特定檔案與資料夾的編輯權限來實現。如果你的團隊對更多存取控制功能有興趣，請提交[功能請求](https://forum.obsidian.md/c/feature-requests/8)。
