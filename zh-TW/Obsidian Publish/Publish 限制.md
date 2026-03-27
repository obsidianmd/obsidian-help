---
permalink: publish/limitations
---
> [!tip] 我們優秀社群的成員已為其中一些限制設計了替代方案。更多資訊請瀏覽 Obsidian 論壇上的 [Publish 資源](https://forum.obsidian.md/t/obsidian-publish-resources/74582)討論串。

## 社群外掛程式

Obsidian Publish 對[[社群外掛程式]]的支援非常有限。

以原始 Markdown 輸出的外掛程式（例如 Waypoint 外掛），因為不需要應用程式來渲染資料，所以與 Publish 相容。

而需要外掛程式碼區塊來渲染的外掛程式（例如 Dataview 或 Fantasy Statblocks），在 Publish 中預設無法運作。

## 圖譜

Publish 透過 CSS 為其圖譜檢視提供基本的顏色自訂功能。你可以在 `publish.css` 檔案中利用[圖譜檢視 CSS 變數](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph)來修改節點顏色。

請注意，已發佈的圖譜不支援應用程式[[關聯圖檢視]]中提供的完整排序和檢視選項。

## 媒體檔案

Obsidian Publish 並未針對串流影片或大型音訊檔案進行最佳化。我們在這些文件中提供了一些處理[[媒體檔案]]的最佳做法。

為了改善訪客的體驗，我們建議你改用影片託管服務，例如 YouTube 或 Vimeo。

你可以上傳**最大 50MB** 的檔案至你的 Publish 網站。 ^publish-media-limit

## PDF

在行動裝置、平板電腦及小螢幕電腦上，你可能會遇到嵌入的 PDF 無法載入或只顯示第一頁的問題。這是由於行動裝置上 PDF 渲染器的限制所致。

對於面向行動使用者的內容，我們建議提供外部託管的 PDF 連結，或提供內部連結讓使用者可以直接下載 PDF 到他們的裝置上。

## 搜尋

Publish 對已發佈內容的純文字搜尋提供基本支援。搜尋結果的優先順序如下：

- 檔案名稱
- 別名
- 標題名稱

在搜尋完上述項目的匹配結果後，搜尋將接著包含已發佈筆記的純文字內容。

為了提升已發佈網站的可搜尋性，建議使用描述性的檔案名稱、加入多個別名，並選擇能準確反映內容的標題名稱。

此外，Publish 目前不支援應用程式的[[搜尋#在筆記中嵌入搜尋結果|嵌入搜尋結果]]功能。
