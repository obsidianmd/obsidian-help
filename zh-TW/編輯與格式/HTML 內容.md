---
permalink: html
publish: true
mobile: true
description: 了解如何在 Obsidian 中使用 HTML，包括 Markdown 渲染的限制以及 HTML 區塊的要求。
---
Obsidian 支援 HTML，讓你能夠以想要的方式呈現筆記，甚至可以[[嵌入網頁|嵌入網頁]]。在筆記中允許使用 HTML 會帶來一些風險。為了防止惡意程式碼造成危害，Obsidian 會對筆記中的所有 HTML 進行_消毒_處理。

> [!example] 
> `<script>` 元素通常會在載入時執行 JavaScript。如果 Obsidian 不對 HTML 進行消毒處理，攻擊者可能會誘騙你貼上包含 JavaScript 的文字，從你的電腦中擷取敏感資訊並回傳給他們。

話雖如此，由於 Markdown 語法並不支援所有的樣式設定，使用經過消毒處理的 HTML 可以成為提升筆記品質的另一種方式。我們在此列出了一些較常見的 HTML 用法。

## HTML 限制

在筆記中使用 HTML 時，Obsidian 有特定的限制：

### HTML 內不支援 Markdown

Obsidian 不會在 HTML 元素內渲染 Markdown 語法。這是基於效能最佳化以及在管理大型文件時降低解析器複雜度而做出的設計決策。

例如，以下寫法不會如預期般運作：

```md
<div>
This **will not** be bold and this `will not` be code.
</div>
```

### HTML 區塊必須是獨立完整的

HTML 區塊必須完整，且內部不能包含空行。空行會破壞 HTML 區塊的結構。

以下寫法可以正常運作：

```md
<table>
<tr>
<td>Content here</td>
</tr>
</table>
```

以下寫法則無法正確運作：

```md
<table>

<tr>

<td>Content here</td>

</tr>

</table>
```

### 當 Markdown 看似在 HTML 中運作時

某些行內 HTML 標籤如 `<span>` 或 `<a>` 的功能有限，可能看起來像是在渲染 Markdown，但實際上並非如此。Markdown 是在 HTML 上下文之外被處理的。

關於 Obsidian 如何處理 Markdown 的更多細節，請參閱 [[Obsidian 風格 Markdown]]。

## 常見 HTML 用法

> [!info] 關於使用 `<iframe>` 的更多細節，請參閱[[嵌入網頁]]。

### 註解

[[基本格式語法#註解|Markdown 註解]]是在筆記中新增隱藏註解的首選方式。然而，某些轉換 Markdown 筆記的方法（例如 [Pandoc](https://pandoc.org)）對 Markdown 註解的支援有限。在這些情況下，你可以改用 `<!-- HTML Comment -->`！

### 底線

如果你需要在筆記中快速為某個項目加上底線，可以使用 `<u>Example</u>` 來建立<u>底線文字</u>。

### Span/Div

Span 和 div 標籤可用於將來自 [[CSS 片段|CSS 片段]]的自訂類別或自訂樣式套用到選定的文字區域。例如，使用 `<span style="font-family: cursive">your text</span>` 可以讓你快速<span style="font-family: cursive">變更字型</span>。

## 刪除線

需要為<s>某些文字</s>加上刪除線？使用 `<s>this</s>` 即可將文字劃掉。
