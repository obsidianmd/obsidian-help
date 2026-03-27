---
permalink: publish/troubleshoot
publish: true
mobile: true
description: 本頁詳細說明您在使用 Obsidian Publish 時可能遇到的一些常見問題。
---
本頁列出使用 [[Obsidian Publish 介紹|Obsidian Publish]] 時可能遇到的常見問題及其解決方式。

請先確認已閱讀 [[媒體檔案]] 和 [[Publish 限制]]。

## 一般問題

### 發佈筆記

**嘗試發佈筆記時收到雜湊錯誤。**

你是否使用了會在更新時修改檔案修改時間的[[社群外掛程式|社群外掛程式]]？如果是，該外掛程式可能與 Publish 產生衝突。請向外掛程式開發者提交錯誤報告以解決此問題。

**我收到異常的網路錯誤，而且我的 Publish 網站非常大。**

我們可能需要檢查你的資料庫。請[[說明與支援#聯繫 Obsidian 支援|聯繫 Obsidian 支援]]以取得協助。

## CSS 與佈景主題

**為什麼我在[[設定資料夾]]中的 CSS 在 Publish 上不起作用？**

Publish 不會讀取設定資料夾的內容。你需要在發佈保管庫的頂層目錄中建立一個 `publish.css` 檔案。你可以在[[自訂網站]]中深入了解相關資訊。

**為什麼我的 CSS 在 Publish 上的外觀與應用程式中不同？**

Obsidian Publish 的 CSS 與應用程式中的並不完全相同。我們建議從頭開始[專門為 Publish 開發 CSS 與佈景主題](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes)。

_一般_而言，適用於[[檢視與編輯模式#閱讀檢視|閱讀檢視]]的樣式很有可能也能在 Publish 上正常運作。
