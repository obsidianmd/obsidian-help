---
permalink: uri
---
Obsidian URI 是 Obsidian 支援的自訂 URI 協定，能讓你觸發各種動作，例如開啟筆記或建立筆記。Obsidian URI 可實現自動化與跨應用程式的工作流程。

## URI 格式

Obsidian URI 使用以下格式：

```
obsidian://action?param1=value&param2=value
```

`action` 參數是你想要執行的動作。可用的動作包括：

- `open`：開啟筆記。
- `new`：建立或附加至現有筆記。
- `daily`：建立或開啟每日筆記。
- `unique`：建立新的唯一筆記。
- `search`：開啟搜尋。
- `choose-vault`：開啟保管庫管理器。

> [!warning] 編碼
> 請確保你的值已正確進行 URI 編碼。例如，斜線字元 `/` 必須編碼為 `%2F`，空格字元必須編碼為 `%20`。
> 
> 這一點尤其重要，因為未正確編碼的「保留」字元可能會導致 URI 解析錯誤。[詳情請見此處](https://en.wikipedia.org/wiki/Percent-encoding)。

## 開啟筆記

`open` 動作會開啟一個 Obsidian 保管庫，或開啟該保管庫中的檔案。

### 範例

- `obsidian://open?vault=my%20vault`
  這會開啟保管庫 `my vault`。如果保管庫已經開啟，則聚焦至該視窗。
- `obsidian://open?vault=ef6ca3e3b524d22f`
  這會開啟 ID 為 `ef6ca3e3b524d22f` 的保管庫。
- `obsidian://open?vault=my%20vault&file=my%20note`
  這會在保管庫 `my vault` 中開啟筆記 `my note.md`（假設該檔案存在）。
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  這會尋找包含路徑 `/home/user/my vault/path/to/my note` 的任何保管庫。然後，路徑的其餘部分會傳遞給 `file` 參數。例如，如果保管庫位於 `/home/user/my vault`，則這等同於將 `file` 參數設為 `path/to/my note`。


> [!tip] 開啟標題或區塊
> 透過正確的 URI 編碼，你可以導航至筆記中的標題或區塊。`Note%23Heading` 會導航至名為「Heading」的標題，而 `Note%23%5EBlock` 會導航至名為「Block」的區塊。

### 參數

- `vault` 可以是保管庫名稱或保管庫 ID[^1]。
- `file` 可以是檔案名稱，或從保管庫根目錄到指定檔案的路徑。如果副檔名為 `md`，可以省略副檔名。
- `path` 檔案的絕對檔案系統路徑。
  - 使用此參數會覆寫 `vault` 和 `file` 兩個參數。
  - 這會使應用程式搜尋包含指定檔案路徑的最精確保管庫。
  - 然後路徑的其餘部分會取代 `file` 參數。
- `prepend` 會新增至檔案頂部並嘗試合併屬性。
- `append` 會新增至檔案末尾並同樣嘗試合併屬性。
- `paneType`（選用）決定筆記在介面中的開啟位置。
  - 如果未指定，會取代最後使用的分頁。
  - `paneType=tab`：在新分頁中開啟。
  - `paneType=split`：在新分頁群組中開啟。
  - `paneType=window`：在彈出式視窗中開啟（僅限桌面版）。

## 建立筆記

`new` 動作會在保管庫中建立新筆記，並可選擇附帶一些內容。

### 範例

- `obsidian://new?vault=my%20vault&name=my%20note`
  這會開啟保管庫 `my vault`，並建立名為 `my note` 的新筆記。
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  這會開啟保管庫 `my vault`，並在 `path/to/my note` 建立新筆記。

### 參數

- `vault` 可以是保管庫名稱或保管庫 ID[^1]。與 `open` 動作相同。
- `name` 要建立的檔案名稱。如果指定此參數，檔案位置將根據你的「新建筆記儲存位置」偏好設定來決定。
- `file` 保管庫絕對路徑（包含名稱）。如果指定此參數，會覆寫 `name`。
- `path` 全域絕對路徑。運作方式類似於 `open` 動作中的 `path` 選項，會覆寫 `vault` 和 `file` 兩個參數。
- `paneType`（選用）決定筆記在介面中的開啟位置。與 `open` 動作相同。
- `content`（選用）筆記的內容。
- `clipboard`（選用）使用剪貼簿的內容，而非指定 `content`。
- `silent`（選用）如果你不想開啟新筆記，請包含此參數。
- `append`（選用）如果已存在同名檔案，則附加至該檔案。
- `overwrite`（選用）如果已存在同名檔案則覆寫，但僅在未設定 `append` 時生效。
- `x-success`（選用）請參閱 [[#使用 x-callback-url 參數]]。

## 建立或開啟每日筆記

`daily` 動作會建立或開啟你的每日筆記。必須啟用[[每日筆記]]外掛。

### 範例

- `obsidian://daily?vault=my%20vault`
  這會開啟保管庫 `my vault`，並建立或開啟每日筆記。

### 參數

`daily` 動作接受與 `new` 動作相同的參數。

## 唯一筆記

`unique` 動作會在保管庫中建立新的唯一筆記。必須啟用[[唯一筆記建立工具|唯一筆記建立工具]]外掛。

### 範例

- `obsidian://unique?vault=my%20vault`
  這會開啟保管庫 `my vault`，並建立新的唯一筆記。
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  這會開啟保管庫 `my vault`，並建立內容為 `Hello World` 的新唯一筆記。

### 參數

- `vault` 可以是保管庫名稱或保管庫 ID[^1]。與 `open` 動作相同。
- `paneType`（選用）決定筆記在介面中的開啟位置。與 `open` 動作相同。
- `content`（選用）筆記的內容。
- `clipboard`（選用）使用剪貼簿的內容，而非指定 `content`。
- `x-success`（選用）請參閱 [[#使用 x-callback-url 參數]]。

## 開啟搜尋

`search` 動作會在指定的保管庫中開啟[[搜尋]]，並可選擇執行搜尋詞彙。

### 範例

- `obsidian://search?vault=my%20vault`
  這會開啟保管庫 `my vault`，並開啟[[搜尋]]。
- `obsidian://search?vault=my%20vault&query=Obsidian`
  這會開啟保管庫 `my vault`，開啟[[搜尋]]，並搜尋 `Obsidian`。

### 參數

- `vault` 可以是保管庫名稱或保管庫 ID[^1]。與 `open` 動作相同。
- `query`（選用）要執行的搜尋詞彙。

## 開啟保管庫管理器

`choose-vault` 動作會開啟[[管理保管庫|保管庫管理器]]。

### 範例

- `obsidian://choose-vault`

## 與 Hook 整合

此 Obsidian URI 動作用於與 [Hook](https://hookproductivity.com/) 搭配使用。

### 範例

`obsidian://hook-get-address`

### 參數

- `vault`（選用）可以是保管庫名稱或保管庫 ID[^1]。如果未提供，將使用目前或最後聚焦的保管庫。
- `x-success`（選用）請參閱 [[#使用 x-callback-url 參數]]。
- `x-error`（選用）請參閱 [[#使用 x-callback-url 參數]]。

如果定義了 `x-success`，此 API 會將其作為 x-callback-url 使用。否則，它會將目前聚焦筆記的 Markdown 連結以 `obsidian://open` URL 的形式複製到剪貼簿。

## 使用 x-callback-url 參數

部分端點接受 x-callback-url 參數 `x-success` 和 `x-error`。當提供這些參數時，Obsidian 會向 `x-success` 回呼提供以下資訊：

- `name`：檔案名稱（不含副檔名）。
- `url`：此檔案的 `obsidian://` URI。
- `file`（僅限桌面版）：此檔案的 `file://` URL。

例如，如果 Obsidian 收到
`obsidian://.....x-success=myapp://x-callback-url`，回應將會是 `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## 簡寫格式

除了上述格式外，還有兩種「簡寫」格式可用於開啟保管庫和檔案：

1. `obsidian://vault/my vault/my note` 等同於 `obsidian://open?vault=my%20vault&file=my%20note`。
2. `obsidian:///absolute/path/to/my note` 等同於 `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`。

## 疑難排解

### 註冊 Obsidian URI

在 Windows 和 macOS 上，執行一次應用程式應該就足以在你的電腦上註冊 Obsidian URI 協定。

在 Linux 上，這是一個較為複雜的過程：

1. 確保你建立了 `obsidian.desktop` 檔案。[詳情請見此處](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files)。
2. 確保你的桌面檔案在 `Exec` 欄位中指定為 `Exec=executable %u`。`%u` 用於將 `obsidian://` URI 傳遞給應用程式。
3. 如果你使用的是 AppImage 安裝程式，你可能需要使用 `Obsidian-x.y.z.AppImage --appimage-extract` 來解壓縮。然後確保 `Exec` 指令指向解壓縮後的可執行檔。


[^1]: 保管庫 ID 是指派給保管庫的隨機 16 字元代碼，例如 `ef6ca3e3b524d22f`。此 ID 在你的電腦上每個資料夾都是唯一的。你可以透過開啟保管庫切換器，並在所需保管庫的右鍵選單中點擊「複製儲存庫 ID」來找到此 ID。
