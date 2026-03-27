---
permalink: snippets
publish: true
mobile: true
description: 了解如何在不建立完整主題的情況下變更 Obsidian 應用程式的部分外觀。
---
了解如何在不需要[建立主題](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)的情況下修改 Obsidian 應用程式的外觀。

> [!tip] 如果你正在尋找處理 [[Obsidian Publish 介紹|Obsidian Publish]] CSS 的指引，請務必查閱[[自訂網站]]。

CSS 是一種控制 HTML 外觀的語言。透過新增 CSS 片段，你可以變更 Obsidian 使用者介面的部分元素，例如標題的大小和顏色。Obsidian 提供了 [CSS 變數](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)，幫助你輕鬆自訂介面。

Obsidian 會在保管庫的[[設定資料夾|設定資料夾]]中尋找 CSS 片段。

## 新增片段

若要在**桌面版** ![[lucide-monitor-check.svg#icon]] 新增 CSS 片段，請按照以下步驟操作：

1. 開啟**[[設定]]** ![[lucide-settings.svg#icon]]。
2. 在**外觀 → CSS 片段**下，選擇**開啟 CSS 片段資料夾** ![[lucide-folder-open.svg#icon]]。
3. 在片段資料夾中，建立一個包含你的片段的 CSS 檔案。
4. 在 Obsidian 中，於**外觀 → CSS 片段**下，選擇**重新載入 CSS 片段** ![[lucide-refresh-cw.svg#icon]] 以在清單中查看該片段。
5. 點擊切換按鈕以啟用片段。

若要在**行動裝置/平板** ![[obsidian-icon-smartphone.svg#icon]] 新增 CSS 片段，你可以按照以下步驟操作：

1. 開啟檔案管理器並找到你的保管庫。你可以在「管理保管庫…」中點擊你的保管庫並查看路徑來確認保管庫的位置。
2. 開啟[[設定資料夾]]，如果 `snippets` 資料夾不存在則建立一個。
3. 將你的 CSS 片段新增到此資料夾中。
4. 開啟 Obsidian 的**[[設定]]** ![[lucide-settings.svg#icon]]。
5. 在左側選擇**外觀**。
6. 向下捲動至 **CSS 片段**區段。
7. 點擊**重新載入 CSS 片段** ![[lucide-refresh-cw.svg#icon]] 以重新整理清單。
8. 點擊切換按鈕以啟用片段。

或者，你也可以：
- 透過同步服務[[跨裝置同步筆記|同步]]任何變更。
- 使用社群外掛從 Obsidian 內部建立片段。

啟用後，Obsidian 將自動偵測 CSS 片段的變更，並在你儲存檔案時套用它們。

> [!tip] 你不需要重新啟動 Obsidian 即可讓變更生效。但是，你可能需要使用[[命令面板]]命令來重新載入 Obsidian（不儲存），以查看當前主題或筆記中的變更。

## 為 Obsidian 撰寫 CSS

Obsidian 提供了多種方法，讓撰寫 CSS 更加簡單且強大。

它擁有大量的 [CSS 變數](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)，可輕鬆修改 Obsidian 的各個部分，以及內建的[[屬性#屬性類型|屬性類型]]來變更一個或多個筆記的外觀。

> [!example] 變數
> 建立一個名為 `headers.css` 的檔案，包含以下內容，將六個[[基本格式語法#標題|標題層級]]的顏色變更為彩虹色：
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] CSS 類別
> 將自訂 CSS 類別的名稱（或 CSS 類別清單）指定給預定義的[[屬性|屬性]] `cssclasses`，以使一個或多個筆記的外觀與其他筆記不同。
> 
> **CSS**：
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/屬性**：
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> 在每個 `cssclasses` 屬性中包含 `red-border` 值的筆記中，圖片將以紅色邊框顯示。

為確保 CSS 檔案有效且格式正確，我們建議使用 [CSS Validation Service](https://jigsaw.w3.org/css-validator/) 等工具進行驗證，因為無效的 CSS 將無法運作。

## 深入了解

- 如果你是 CSS 新手，請查看 Mozilla 的 [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)。
- 如需更多關於設定 Obsidian 樣式的資訊，請參閱：
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
