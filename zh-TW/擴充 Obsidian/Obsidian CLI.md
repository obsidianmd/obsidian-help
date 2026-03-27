---
permalink: cli
description: 您在 Obsidian 中能執行的任何操作，都可以透過命令列完成。
---
Obsidian CLI 是一個命令列介面，可讓你從終端機控制 Obsidian，用於腳本撰寫、自動化以及與外部工具整合。

任何你能在 Obsidian 中完成的操作，都能透過命令列完成。Obsidian CLI 甚至包含[[#開發者命令|開發者命令]]，可存取開發者工具、檢查元素、擷取截圖、重新載入外掛程式等。

![[obsidian-cli.mp4#interface]]

> [!warning] 需要 Obsidian 1.12 安裝程式
> 使用 CLI 需要 Obsidian 1.12 安裝程式。請參閱[[更新 Obsidian#安裝程式更新|安裝程式版本更新指南]]。

## 安裝 Obsidian CLI

升級至最新的 [[更新 Obsidian|Obsidian 安裝程式版本]]（1.11.7）以及最新的[[搶先體驗版本|搶先體驗版本]]（1.12.x）。

在 Obsidian 中啟用 Obsidian CLI：

1. 前往**設定** → **一般**。
2. 啟用**命令列介面**。
3. 依照提示註冊 Obsidian CLI。

如果安裝 Obsidian CLI 時遇到問題，請參閱[[#疑難排解]]。

## 開始使用

Obsidian CLI 同時支援單一命令和終端機使用者介面（TUI），後者提供互動式說明和自動完成功能。

> [!info] Obsidian 應用程式必須正在執行
> Obsidian CLI 需要 Obsidian 應用程式正在執行。如果 Obsidian 未在執行，你執行的第一個命令會啟動 Obsidian。
>
> 想要在沒有桌面應用程式的情況下同步嗎？請參閱 [[Obsidian Headless|Obsidian Headless]]。

### 執行命令

執行單一命令而不開啟 TUI：

```shell
# 執行說明命令
obsidian help
```

### 使用終端機介面

輸入 `obsidian` 使用 TUI。後續命令無需再加上 `obsidian`。

```shell
# 開啟 TUI，然後執行 help
obsidian
help
```

TUI 支援自動完成、命令歷史和反向搜尋。使用 `Ctrl+R` 搜尋你的命令歷史。所有可用快捷鍵請參閱[[#鍵盤快捷鍵]]。

## 範例

以下是 Obsidian CLI 可以做到的一些範例。

### 日常使用

```shell
# 開啟今天的每日筆記
obsidian daily

# 在每日筆記中新增任務
obsidian daily:append content="- [ ] Buy groceries"

# 搜尋你的保管庫
obsidian search query="meeting notes"

# 讀取目前檔案
obsidian read

# 列出每日筆記中的所有任務
obsidian tasks daily

# 從範本建立新筆記
obsidian create name="Trip to Paris" template=Travel

# 列出保管庫中所有標籤及其數量
obsidian tags counts

# 比較檔案的兩個版本
obsidian diff file=README from=1 to=3
```

### 開發者用途

許多[[#開發者命令]]可用於外掛程式和主題開發。這些命令允許代理式程式撰寫工具自動測試和除錯。

```shell
# 開啟開發者工具
obsidian devtools

# 重新載入你正在開發的社群外掛程式
obsidian plugin:reload id=my-plugin

# 擷取應用程式截圖
obsidian dev:screenshot path=screenshot.png

# 在應用程式主控台中執行 JavaScript
obsidian eval code="app.vault.getFiles().length"
```

## 操作方式

### 使用參數和旗標

命令可以使用**參數**和**旗標**。大多數命令不需要任何參數或旗標。必要參數會標記為 `required`。例如：

```shell
# 使用預設的「未命名」名稱建立新筆記
obsidian create
```

**參數**接受一個值，寫法為 `parameter=value`。如果值包含空格，請用引號包裹：

```shell
# 建立名為「Note」且內容為「Hello world」的新筆記
obsidian create name=Note content="Hello world"
```

**旗標**是不帶值的布林開關。加入即表示開啟，例如 `open` 和 `overwrite` 是旗標：

```shell
# 建立筆記並開啟它
obsidian create name=Note content="Hello" open overwrite
```

對於多行內容，使用 `\n` 表示換行。使用 `\t` 表示定位字元。

```bash
obsidian create name=Note content="# Title\n\nBody text"
```

### 指定保管庫

如果你的終端機目前工作目錄是保管庫資料夾，則預設使用該保管庫。否則，使用目前啟用的保管庫。

使用 `vault=<name>` 或 `vault=<id>` 指定特定保管庫。此參數必須放在命令之前：

```shell
obsidian vault=Notes daily
obsidian vault="My Vault" search query="test"
```

在 TUI 中，使用 `vault:open <name>` 或 `<id>` 切換到不同的保管庫。

### 指定檔案

許多命令接受 `file` 和 `path` 參數來指定特定檔案。如果兩者都未提供，命令預設使用目前啟用的檔案。

- `file=<name>` 使用與 [[內部連結|Wiki 連結]]相同的連結解析方式，依檔案名稱比對，不需要完整路徑或副檔名。
- `path=<path>` 需要從保管庫根目錄開始的完整路徑，例如 `folder/note.md`。

```shell
# 如果「Recipe.md」是唯一具有該名稱的檔案，以下兩者等效
obsidian read file=Recipe
obsidian read path="Templates/Recipe.md"
```

### 複製輸出

在任何命令後加上 `--copy` 可將輸出複製到剪貼簿：

```shell
read --copy
search query="TODO" --copy
```


## 一般命令

### `help`

顯示所有可用命令的清單。

| 參數   | 說明                       |
| ----------- | --------------------------------- |
| `<command>` | 顯示特定命令的說明。 |

### `version`

顯示 Obsidian 版本。

### `reload`

重新載入應用程式視窗。

### `restart`

重新啟動應用程式。


## 資料庫

[[資料庫介紹|資料庫]]相關命令。

### `bases`

列出保管庫中所有 `.base` 檔案。

### `base:views`

列出目前資料庫檔案中的檢視。

### `base:create`

在資料庫中建立新項目。若未指定檔案，預設使用目前啟用的資料庫檢視。

```bash
file=<name>        # 資料庫檔案名稱
path=<path>        # 資料庫檔案路徑
view=<name>        # 檢視名稱
name=<name>        # 新檔案名稱
content=<text>     # 初始內容

open               # 建立後開啟檔案
newtab             # 在新分頁開啟
```

### `base:query`

查詢資料庫並傳回結果。

```bash
file=<name>                    # 資料庫檔案名稱
path=<path>                    # 資料庫檔案路徑
view=<name>                    # 要查詢的檢視名稱
format=json|csv|tsv|md|paths   # 輸出格式（預設：json）
```

## 書籤

[[書籤]]相關命令。

### `bookmarks`

列出書籤。

```bash
total              # 傳回書籤數量
verbose            # 包含書籤類型
format=json|tsv|csv  # 輸出格式（預設：tsv）
```

### `bookmark`

新增書籤。

```bash
file=<path>        # 要加入書籤的檔案
subpath=<subpath>  # 檔案內的子路徑（標題或區塊）
folder=<path>      # 要加入書籤的資料夾
search=<query>     # 要加入書籤的搜尋查詢
url=<url>          # 要加入書籤的 URL
title=<title>      # 書籤標題
```

## 命令面板

[[命令面板]]和[[快速鍵]]相關命令。包含所有由外掛程式註冊的命令。

### `commands`

列出可用的命令 ID。

```bash
filter=<prefix>    # 依 ID 前綴篩選
```

### `command`

執行 Obsidian 命令。

```bash
id=<command-id>    # （必要）要執行的命令 ID
```

### `hotkeys`

列出所有命令的快捷鍵。

```bash
total              # 傳回快捷鍵數量
verbose            # 顯示快捷鍵是否為自訂
format=json|tsv|csv  # 輸出格式（預設：tsv）
```

### `hotkey`

取得命令的快捷鍵。

```bash
id=<command-id>    # （必要）命令 ID

verbose            # 顯示是自訂或預設
```

## 每日筆記

[[每日筆記]]相關命令。

### `daily`

開啟每日筆記。

```bash
paneType=tab|split|window    # 開啟的面板類型
```

### `daily:path`

取得每日筆記路徑。即使檔案尚未建立，也會傳回預期路徑。

### `daily:read`

讀取每日筆記內容。

### `daily:append`

在每日筆記末尾附加內容。

```bash
content=<text>     # （必要）要附加的內容
paneType=tab|split|window    # 開啟的面板類型

inline             # 不換行附加
open               # 新增後開啟檔案
```

### `daily:prepend`

在每日筆記開頭插入內容。

```bash
content=<text>     # （必要）要插入的內容
paneType=tab|split|window    # 開啟的面板類型

inline             # 不換行插入
open               # 新增後開啟檔案
```

## 檔案歷史

### `diff`

列出或比較本機[[檔案還原]]和 [[Obsidian Sync 簡介|Sync]] 的版本。版本從最新到最舊編號。

```bash
file=<name>          # 檔案名稱
path=<path>          # 檔案路徑
from=<n>             # 要比較的起始版本號
to=<n>               # 要比較的目標版本號
filter=local|sync    # 依版本來源篩選
```

**範例：**

```shell
# 列出目前檔案的所有版本
diff

# 列出特定檔案的所有版本
diff file=Recipe

# 比較最新版本與目前檔案
diff file=Recipe from=1

# 比較兩個版本
diff file=Recipe from=2 to=1

# 僅顯示 Sync 版本
diff filter=sync
```

### `history`

僅列出[[檔案還原]]的版本。Sync 的對應命令請參閱 [[#Sync|sync:history]]。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
```

### `history:list`

列出所有具有本機歷史的檔案。

### `history:read`

讀取本機歷史版本。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
version=<n>        # 版本號（預設：1）
```

### `history:restore`

還原本機歷史版本。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
version=<n>        # （必要）版本號
```

### `history:open`

開啟檔案還原。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
```

## 檔案和資料夾

### `file`

顯示檔案資訊（預設：目前啟用的檔案）。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
```

範例：

```
path       Notes/Recipe.md
name       Recipe
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

列出保管庫中的檔案。

```bash
folder=<path>      # 依資料夾篩選
ext=<extension>    # 依副檔名篩選

total              # 傳回檔案數量
```

### `folder`

顯示資料夾資訊。

```bash
path=<path>              # （必要）資料夾路徑
info=files|folders|size  # 僅傳回特定資訊
```

### `folders`

列出保管庫中的資料夾。

```bash
folder=<path>      # 依上層資料夾篩選

total              # 傳回資料夾數量
```

### `open`

開啟檔案。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑

newtab             # 在新分頁開啟
```

### `create`

建立或覆寫檔案。

```bash
name=<name>        # 檔案名稱
path=<path>        # 檔案路徑
content=<text>     # 初始內容
template=<name>    # 使用的範本

overwrite          # 若檔案存在則覆寫
open               # 建立後開啟檔案
newtab             # 在新分頁開啟
```

### `read`

讀取檔案內容（預設：目前啟用的檔案）。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
```

### `append`

在檔案末尾附加內容（預設：目前啟用的檔案）。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
content=<text>     # （必要）要附加的內容

inline             # 不換行附加
```

### `prepend`

在前置中繼資料之後插入內容（預設：目前啟用的檔案）。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
content=<text>     # （必要）要插入的內容

inline             # 不換行插入
```

### `move`

移動或重新命名檔案（預設：目前啟用的檔案）。如果在你的[[設定#始終更新內部連結|保管庫設定]]中已開啟，這會自動更新[[內部連結]]。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
to=<path>          # （必要）目標資料夾或路徑
```

### `rename`

重新命名檔案（預設：目前啟用的檔案）。如果新名稱省略副檔名，會自動保留原有副檔名。使用 [[#`move`|move]] 同時重新命名和移動檔案。如果在你的[[設定#始終更新內部連結|保管庫設定]]中已開啟，這會自動更新[[內部連結]]。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
name=<name>        # （必要）新檔案名稱
```

### `delete`

刪除檔案（預設：目前啟用的檔案，預設移至垃圾桶）。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑

permanent          # 跳過垃圾桶，永久刪除
```

## 連結

[[反向連結]]和[[對外連結]]相關命令。

### `backlinks`

列出檔案的反向連結（預設：目前啟用的檔案）。

```bash
file=<name>        # 目標檔案名稱
path=<path>        # 目標檔案路徑

counts             # 包含連結數量
total              # 傳回反向連結數量
format=json|tsv|csv  # 輸出格式（預設：tsv）
```

### `links`

列出檔案的對外連結（預設：目前啟用的檔案）。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑

total              # 傳回連結數量
```

### `unresolved`

列出保管庫中未解析的連結。

```bash
total              # 傳回未解析連結數量
counts             # 包含連結數量
verbose            # 包含來源檔案
format=json|tsv|csv  # 輸出格式（預設：tsv）
```

### `orphans`

列出沒有對內連結的檔案。

```bash
total              # 傳回孤立連結數量
```

### `deadends`

列出沒有對外連結的檔案。

```bash
total              # 傳回死路數量
```

## 大綱

[[大綱]]相關命令。

### `outline`

顯示目前檔案的標題。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
format=tree|md|json  # 輸出格式（預設：tree）

total              # 傳回標題數量
```

## 外掛程式

[[核心外掛程式]]和[[社群外掛程式]]相關命令。

### `plugins`

列出已安裝的外掛程式。

```bash
filter=core|community  # 依外掛程式類型篩選

versions               # 包含版本號
format=json|tsv|csv    # 輸出格式（預設：tsv）
```

### `plugins:enabled`

列出已啟用的外掛程式。

```bash
filter=core|community  # 依外掛程式類型篩選

versions               # 包含版本號
format=json|tsv|csv    # 輸出格式（預設：tsv）
```

### `plugins:restrict`

切換或檢查受限模式。

```bash
on                 # 啟用受限模式
off                # 停用受限模式
```

### `plugin`

取得外掛程式資訊。

```bash
id=<plugin-id>     # （必要）外掛程式 ID
```

### `plugin:enable`

啟用外掛程式。

```bash
id=<id>                # （必要）外掛程式 ID
filter=core|community  # 外掛程式類型
```

### `plugin:disable`

停用外掛程式。

```bash
id=<id>                # （必要）外掛程式 ID
filter=core|community  # 外掛程式類型
```

### `plugin:install`

安裝社群外掛程式。

```bash
id=<id>            # （必要）外掛程式 ID

enable             # 安裝後啟用
```

### `plugin:uninstall`

移除安裝社群外掛程式。

```bash
id=<id>            # （必要）外掛程式 ID
```

### `plugin:reload`

重新載入外掛程式（供開發者使用）。

```bash
id=<id>            # （必要）外掛程式 ID
```

## 屬性

[[屬性]]相關命令。

### `aliases`

列出保管庫中的別名。使用 `active` 或 `file`/`path` 顯示特定檔案的別名。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑

total              # 傳回別名數量
verbose            # 包含檔案路徑
active             # 顯示目前檔案的別名
```

### `properties`

列出保管庫中的屬性。使用 `active` 或 `file`/`path` 顯示特定檔案的屬性。

```bash
file=<name>        # 顯示檔案的屬性
path=<path>        # 顯示路徑的屬性
name=<name>        # 取得特定屬性的數量
sort=count         # 依數量排序（預設：name）
format=yaml|json|tsv  # 輸出格式（預設：yaml）

total              # 傳回屬性數量
counts             # 包含出現次數
active             # 顯示目前檔案的屬性
```

### `property:set`

設定檔案的屬性（預設：目前啟用的檔案）。

```bash
name=<name>                                    # （必要）屬性名稱
value=<value>                                  # （必要）屬性值
type=text|list|number|checkbox|date|datetime   # 屬性類型
file=<name>                                    # 檔案名稱
path=<path>                                    # 檔案路徑
```

### `property:remove`

從檔案移除屬性（預設：目前啟用的檔案）。

```bash
name=<name>        # （必要）屬性名稱
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
```

### `property:read`

從檔案讀取屬性值（預設：目前啟用的檔案）。

```bash
name=<name>        # （必要）屬性名稱
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
```

## Publish

[[Obsidian Publish 介紹|Obsidian Publish]] 相關命令。

### `publish:site`

顯示發佈網站資訊（slug、URL）。

### `publish:list`

列出已發佈的檔案。

```bash
total              # 傳回已發佈檔案數量
```

### `publish:status`

列出發佈變更。

```bash
total              # 傳回變更數量
new                # 僅顯示新檔案
changed            # 僅顯示已變更檔案
deleted            # 僅顯示已刪除檔案
```

### `publish:add`

發佈檔案或所有已變更的檔案（預設：目前啟用的檔案）。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑

changed            # 發佈所有已變更的檔案
```

### `publish:remove`

取消發佈檔案（預設：目前啟用的檔案）。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
```

### `publish:open`

在已發佈的網站上開啟檔案（預設：目前啟用的檔案）。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
```

## 漫遊筆記

[[漫遊筆記]]相關命令。

### `random`

開啟一則隨機筆記。

```bash
folder=<path>      # 限制在特定資料夾

newtab             # 在新分頁開啟
```

### `random:read`

讀取一則隨機筆記（包含路徑）。

```bash
folder=<path>      # 限制在特定資料夾
```

## 搜尋

[[搜尋]]相關命令。

### `search`

搜尋保管庫中的文字。傳回匹配的檔案路徑。

```bash
query=<text>       # （必要）搜尋查詢
path=<folder>      # 限制在特定資料夾
limit=<n>          # 最大檔案數
format=text|json   # 輸出格式（預設：text）

total              # 傳回匹配數量
case               # 區分大小寫
```

### `search:context`

搜尋並顯示匹配行的上下文。傳回 grep 風格的 `path:line: text` 輸出。

```bash
query=<text>       # （必要）搜尋查詢
path=<folder>      # 限制在特定資料夾
limit=<n>          # 最大檔案數
format=text|json   # 輸出格式（預設：text）

case               # 區分大小寫
```

### `search:open`

開啟搜尋檢視。

```bash
query=<text>       # 初始搜尋查詢
```

## Sync

[[Obsidian Sync 簡介|Obsidian Sync]] 相關命令。

> [!tip] 在沒有桌面應用程式的情況下同步
> 這些命令控制執行中的 Obsidian 應用程式內的 Sync。若要在不使用桌面應用程式的情況下從命令列同步保管庫，請參閱[[無介面 Sync]]。

### `sync`

暫停或繼續同步。

```bash
on                 # 繼續同步
off                # 暫停同步
```

### `sync:status`

顯示同步狀態和使用量。

### `sync:history`

列出檔案的同步版本歷史（預設：目前啟用的檔案）。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑

total              # 傳回版本數量
```

### `sync:read`

讀取同步版本（預設：目前啟用的檔案）。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
version=<n>        # （必要）版本號
```

### `sync:restore`

還原同步版本（預設：目前啟用的檔案）。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
version=<n>        # （必要）版本號
```

### `sync:open`

開啟同步歷史（預設：目前啟用的檔案）。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
```

### `sync:deleted`

列出同步中已刪除的檔案。

```bash
total              # 傳回已刪除檔案數量
```

## 標籤

[[標籤]]相關命令。

### `tags`

列出保管庫中的標籤。使用 `active` 或 `file`/`path` 顯示特定檔案的標籤。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
sort=count         # 依數量排序（預設：name）

total              # 傳回標籤數量
counts             # 包含標籤數量
format=json|tsv|csv  # 輸出格式（預設：tsv）
active             # 顯示目前檔案的標籤
```

### `tag`

取得標籤資訊。

```bash
name=<tag>         # （必要）標籤名稱

total              # 傳回出現次數
verbose            # 包含檔案清單和數量
```

## 任務

任務管理相關命令。

### `tasks`

列出保管庫中的任務。使用 `active` 或 `file`/`path` 顯示特定檔案的任務。

```bash
file=<name>        # 依檔案名稱篩選
path=<path>        # 依檔案路徑篩選
status="<char>"    # 依狀態字元篩選

total              # 傳回任務數量
done               # 顯示已完成的任務
todo               # 顯示未完成的任務
verbose            # 依檔案分組並顯示行號
format=json|tsv|csv  # 輸出格式（預設：text）
active             # 顯示目前檔案的任務
daily              # 顯示每日筆記的任務
```

**範例：**

```bash
# 列出保管庫中的所有任務
tasks

# 列出保管庫中未完成的任務
tasks todo

# 列出特定檔案的已完成任務
tasks file=Recipe done

# 列出今天每日筆記的任務
tasks daily

# 計算每日筆記中的任務數量
tasks daily total

# 列出任務並顯示檔案路徑和行號
tasks verbose

# 依自訂狀態篩選（特殊字元需引號）
tasks 'status=?'
```

### `task`

顯示或更新任務。

```bash
ref=<path:line>    # 任務參照（path:line）
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑
line=<n>           # 行號
status="<char>"    # 設定狀態字元

toggle             # 切換任務狀態
daily              # 每日筆記
done               # 標記為完成
todo               # 標記為待辦
```

**範例：**

```bash
# 顯示任務資訊
task file=Recipe line=8
task ref="Recipe.md:8"

# 切換任務完成狀態
task ref="Recipe.md:8" toggle

# 切換每日筆記中的任務
task daily line=3 toggle

# 設定任務狀態
task file=Recipe line=8 done      # → [x]
task file=Recipe line=8 todo      # → [ ]
task file=Recipe line=8 status=-  # → [-]
task daily line=3 done            # 將每日筆記任務標記為完成
```


## 範本

[[模板|範本]]相關命令。

### `templates`

列出範本。

```bash
total              # 傳回範本數量
```

### `template:read`

讀取範本內容。

```bash
name=<template>    # （必要）範本名稱
title=<title>      # 用於變數解析的標題

resolve            # 解析範本變數
```

### `template:insert`

將範本插入目前啟用的檔案。

```bash
name=<template>    # （必要）範本名稱
```

**說明：**
- `resolve` 選項會處理 `{{date}}`、`{{time}}`、`{{title}}` 變數
- 使用 `create path=<path> template=<name>` 從範本建立檔案

## 主題和程式碼片段

[[佈景主題]]和 [[CSS 片段]]相關命令。

### `themes`

列出已安裝的主題。

```bash
versions           # 包含版本號
```

### `theme`

顯示目前啟用的主題或取得資訊。

```bash
name=<name>        # 要查看詳情的主題名稱
```

### `theme:set`

設定啟用的主題。

```bash
name=<name>        # （必要）主題名稱（留空表示預設）
```

### `theme:install`

安裝社群主題。

```bash
name=<name>        # （必要）主題名稱

enable             # 安裝後啟用
```

### `theme:uninstall`

移除安裝主題。

```bash
name=<name>        # （必要）主題名稱
```

### `snippets`

列出已安裝的 CSS 片段。

### `snippets:enabled`

列出已啟用的 CSS 片段。

### `snippet:enable`

啟用 CSS 片段。

```bash
name=<name>        # （必要）片段名稱
```

### `snippet:disable`

停用 CSS 片段。

```bash
name=<name>        # （必要）片段名稱
```

## 唯一筆記

[[唯一筆記建立工具]]相關命令。

### `unique`

建立唯一筆記。

```bash
name=<text>        # 筆記名稱
content=<text>     # 初始內容
paneType=tab|split|window    # 開啟的面板類型

open               # 建立後開啟檔案
```

## 保管庫

### `vault`

顯示保管庫資訊。

```bash
info=name|path|files|folders|size  # 僅傳回特定資訊
```

### `vaults`

列出已知的保管庫。

```bash
total              # 傳回保管庫數量
verbose            # 包含保管庫路徑
```

### `vault:open`

切換到不同的保管庫（僅限 TUI）。

```bash
name=<name>        # （必要）保管庫名稱
```

## 網頁檢視器

[[網頁檢視器]]相關命令。

### `web`

在網頁檢視器中開啟 URL。

```bash
url=<url>          # （必要）要開啟的 URL

newtab             # 在新分頁開啟
```

## 字數統計

[[字數統計]]相關命令。

### `wordcount`

統計字數和字元數（預設：目前啟用的檔案）。

```bash
file=<name>        # 檔案名稱
path=<path>        # 檔案路徑

words              # 僅傳回字數
characters         # 僅傳回字元數
```

## 工作區

[[工作區]]和[[工作區]]外掛程式相關命令。

### `workspace`

顯示工作區樹狀結構。

```bash
ids                # 包含工作區項目 ID
```

### `workspaces`

列出已儲存的工作區。

```bash
total              # 傳回工作區數量
```

### `workspace:save`

將目前佈局儲存為工作區。

```bash
name=<name>        # 工作區名稱
```

### `workspace:load`

載入已儲存的工作區。

```bash
name=<name>        # （必要）工作區名稱
```

### `workspace:delete`

刪除已儲存的工作區。

```bash
name=<name>        # （必要）工作區名稱
```

### `tabs`

列出已開啟的分頁。

```bash
ids                # 包含分頁 ID
```

### `tab:open`

開啟新分頁。

```bash
group=<id>         # 分頁群組 ID
file=<path>        # 要開啟的檔案
view=<type>        # 要開啟的檢視類型
```

### `recents`

列出最近開啟的檔案。

```bash
total              # 傳回最近檔案數量
```

## 開發者命令

協助你開發[[社群外掛程式]]和[[佈景主題]]的命令。前往 [Obsidian 開發者文件](https://docs.obsidian.md)深入了解。

### `devtools`

切換 Electron 開發者工具。

### `dev:debug`

附加/分離 Chrome DevTools Protocol 除錯器。

```bash
on                 # 附加除錯器
off                # 分離除錯器
```

### `dev:cdp`

執行 Chrome DevTools Protocol 命令。

```bash
method=<CDP.method>  # （必要）要呼叫的 CDP 方法
params=<json>        # JSON 格式的方法參數
```

### `dev:errors`

顯示擷取的 JavaScript 錯誤。

```bash
clear              # 清空錯誤緩衝區
```

### `dev:screenshot`

擷取截圖（傳回 base64 PNG）。

```bash
path=<filename>    # 輸出檔案路徑
```

### `dev:console`

顯示擷取的主控台訊息。

```bash
limit=<n>                        # 最大訊息數量（預設 50）
level=log|warn|error|info|debug  # 依日誌層級篩選

clear                            # 清空主控台緩衝區
```

### `dev:css`

檢查 CSS 及其來源位置。

```bash
selector=<css>     # （必要）CSS 選擇器
prop=<name>        # 依屬性名稱篩選
```

### `dev:dom`

查詢 DOM 元素。

```bash
selector=<css>     # （必要）CSS 選擇器
attr=<name>        # 取得屬性值
css=<prop>         # 取得 CSS 屬性值

total              # 傳回元素數量
text               # 傳回文字內容
inner              # 傳回 innerHTML 而非 outerHTML
all                # 傳回所有匹配而非第一個
```

### `dev:mobile`

切換行動裝置模擬。

```bash
on                 # 啟用行動裝置模擬
off                # 停用行動裝置模擬
```

### `eval`

執行 JavaScript 並傳回結果。

```bash
code=<javascript>  # （必要）要執行的 JavaScript 程式碼
```

## 鍵盤快捷鍵

以下快捷鍵可在[[#使用終端機介面|TUI]]中使用。

### 導覽

| 動作                                                | 快捷鍵       |
| ----------------------------------------------------- | -------------- |
| 游標左移                                      | `←` / `Ctrl+B` |
| 游標右移（在行尾時接受建議） | `→` / `Ctrl+F` |
| 跳到行首                                 | `Ctrl+A`       |
| 跳到行尾                                   | `Ctrl+E`       |
| 往前移一個字                                    | `Alt+B`        |
| 往後移一個字                                   | `Alt+F`        |

### 編輯

| 動作                  | 快捷鍵                   |
| ----------------------- | -------------------------- |
| 刪除到行首 | `Ctrl+U`                   |
| 刪除到行尾   | `Ctrl+K`                   |
| 刪除前一個字    | `Ctrl+W` / `Alt+Backspace` |

### 自動完成

| 動作                                             | 快捷鍵    |
| -------------------------------------------------- | ----------- |
| 進入建議模式 / 接受選取的建議 | `Tab`       |
| 離開建議模式                               | `Shift+Tab` |
| 進入建議模式（從新輸入開始）           | `↓`         |
| 接受第一個/選取的建議（在行尾時）  | `→`         |

### 歷史

| 動作                                                     | 快捷鍵       |
| ---------------------------------------------------------- | -------------- |
| 上一筆歷史記錄 / 向上導覽建議           | `↑` / `Ctrl+P` |
| 下一筆歷史記錄 / 向下導覽建議             | `↓` / `Ctrl+N` |
| 反向搜尋歷史（輸入篩選，`Ctrl+R` 循環） | `Ctrl+R`       |

### 其他

| 動作                                                 | 快捷鍵            |
| ------------------------------------------------------ | ------------------- |
| 執行命令或接受建議                   | `Enter`             |
| 復原自動完成 / 離開建議模式 / 清空輸入 | `Escape`            |
| 清除畫面                                           | `Ctrl+L`            |
| 結束                                                   | `Ctrl+C` / `Ctrl+D` |

## 疑難排解

如果你在執行 Obsidian CLI 時遇到問題：

- 確保你使用的是最新的 [[更新 Obsidian|Obsidian 安裝程式版本]]（1.12.4 或以上）。
- 註冊 CLI 後重新啟動終端機，讓 PATH 變更生效。
- Obsidian 必須正在執行。CLI 會連接到正在執行的 Obsidian 實例。如果 Obsidian 未在執行，第一個 CLI 命令應會啟動應用程式。

### Windows

Windows 上的 Obsidian CLI 需要 Obsidian 1.12.4+ 安裝程式。請參閱[[更新 Obsidian|安裝程式版本更新]]。

Windows 使用終端機重導向器將 Obsidian 正確連接到 stdin/stdout。這是必要的，因為 Obsidian 通常作為 GUI 應用程式執行，與 Windows 上的終端機輸出不相容。當你安裝 Obsidian 1.12.4+ 時，`Obsidian.com` 終端機重導向器會新增到你安裝 `Obsidian.exe` 檔案的資料夾中。

### macOS

CLI 註冊會透過 `~/.zprofile` 將 Obsidian 二進位檔案目錄新增到你的 PATH。如果你遇到問題，請檢查以下內容：

你的 `~/.zprofile` 檔案應包含以下行。如果缺少，可以手動新增：

```
export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"
```

#### 替代 Shell

CLI 註冊僅修改 `~/.zprofile`，這是 zsh（macOS 預設 Shell）使用的。如果你使用不同的 Shell，請手動將 Obsidian 二進位檔案目錄新增到你的 Shell 設定檔中：

- Bash：將 `export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"` 新增到 `~/.bash_profile`
- Fish：執行 `fish_add_path /Applications/Obsidian.app/Contents/MacOS`


### Linux

CLI 註冊會在 `/usr/local/bin/obsidian` 建立指向 Obsidian 二進位檔案的符號連結（需要 sudo）。

#### AppImage

對於 AppImage 安裝，符號連結指向 `.AppImage` 檔案而非內部二進位檔案，因為掛載路徑每次啟動都會變更。如果 sudo 失敗，符號連結會作為備用建立在 `~/.local/bin/obsidian`。如果你遇到問題，請檢查以下內容。

檢查符號連結是否存在並指向正確的二進位檔案：

```
ls -l /usr/local/bin/obsidian
```

如果符號連結缺失，請手動建立：

```
sudo ln -s /path/to/obsidian /usr/local/bin/obsidian
```

如果符號連結建立在 `~/.local/bin/` 中，請確保該目錄在你的 PATH 中。將以下內容新增到你的 `~/.bashrc` 或 `~/.zshrc`：

```
export PATH="$PATH:$HOME/.local/bin"
```

如果移動或重新命名 `.AppImage` 檔案後符號連結中斷，請重新註冊 CLI 或手動更新符號連結。

#### Snap

Snap 套件將 Insider 版本資料儲存在其自己的使用者資料目錄中。如果 CLI 未偵測到 Insider 的 `.asar`，請將 `XDG_CONFIG_HOME` 設定為指向 Snap 設定路徑：

```
export XDG_CONFIG_HOME="$HOME/snap/obsidian/current/.config"
```

將此新增到你的 `~/.bashrc` 或 `~/.zshrc` 以使其持久生效。


#### Flatpak

Obsidian 會嘗試自動完成此操作，但以下是手動說明。如果是系統安裝：

```
ln -s /var/lib/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```

如果是使用者安裝：

```
ln -s ~/.local/share/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```
