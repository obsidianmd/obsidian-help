---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish 提供無介面用戶端，無需使用桌面應用程式即可發佈儲存庫。適用於 CI 管線和自動化工作流程。
---
[[Obsidian Publish 介紹|Obsidian Publish]] 提供無介面用戶端，可在不使用桌面應用程式的情況下發佈保管庫。適用於 CI 管線和自動化工作流程。按照排程或作為建置管線的一部分發佈最新變更。

安裝 [[Obsidian Headless]]（**公開測試版**），即可從命令列與 [[Obsidian Publish 介紹|Obsidian Publish]] 互動，無需使用 Obsidian 桌面應用程式。

## 快速開始

安裝 [[Obsidian Headless]]（**公開測試版**）：

```shell
npm install -g obsidian-headless
```

您必須擁有有效的 [[Obsidian Publish 介紹|Obsidian Publish 訂閱]]。

```shell
# 登入
ob login

# 列出您的 Publish 網站
ob publish-list-sites

# 將本機保管庫連接到 Publish 網站
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# 預覽變更但不發佈
ob publish --dry-run

# 發佈變更
ob publish
```

## 命令

### `ob publish-list-sites`

列出您帳戶中所有可用的 Publish 網站。

### `ob publish-create-site`

建立新的 Publish 網站。

```
ob publish-create-site --slug <slug>
```

| 選項 | 說明 |
| --- | --- |
| `--slug` | 網站的 URL 識別碼（例如 `my-notes` 會建立 `publish.obsidian.md/my-notes`） |

### `ob publish-setup`

將本機保管庫連接到 Publish 網站。

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| 選項 | 說明 |
| --- | --- |
| `--site` | 網站 ID 或 slug |
| `--path` | 本機保管庫路徑（預設：目前目錄） |

### `ob publish`

將保管庫變更發佈到您的網站。預設情況下，僅包含前置中繼資料中設有 `publish: true` 的檔案。

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| 選項 | 說明 |
| --- | --- |
| `--path` | 本機保管庫路徑（預設：目前目錄） |
| `--all` | 包含所有檔案，而不僅是有發佈標記的檔案 |
| `--dry-run` | 顯示變更但不發佈 |
| `--yes` | 發佈時不提示確認 |

### `ob publish-config`

檢視或變更保管庫的包含/排除資料夾設定。不帶選項執行可顯示目前設定。

```
ob publish-config [--path <local-path>] [options]
```

| 選項 | 說明 |
| --- | --- |
| `--path` | 本機保管庫路徑（預設：目前目錄） |
| `--includes` | 要包含的資料夾，以逗號分隔（空字串則清除） |
| `--excludes` | 要排除的資料夾，以逗號分隔（空字串則清除） |

### `ob publish-site-options`

檢視或更新全站顯示與導覽設定。不帶選項執行可顯示目前設定。

```
ob publish-site-options [--path <local-path>] [options]
```

| 選項 | 說明 |
| --- | --- |
| `--path` | 本機保管庫路徑（預設：目前目錄） |
| `--site-name` | 網站名稱 |
| `--index-file` | 首頁檔案路徑 |
| `--logo` | 標誌檔案路徑（空字串則清除） |
| `--show-navigation` | 顯示導覽側邊欄 |
| `--show-graph` | 顯示圖譜檢視 |
| `--show-outline` | 顯示目錄 |
| `--show-search` | 顯示搜尋 |
| `--show-backlinks` | 顯示反向連結 |
| `--show-hover-preview` | 顯示懸停預覽 |
| `--show-theme-toggle` | 顯示主題切換 |
| `--default-theme` | 預設主題：`light` 或 `dark` |
| `--readable-line-length` | 縮減行寬 |
| `--strict-line-breaks` | 精確的換行符號 |
| `--hide-title` | 隱藏行內標題 |
| `--sliding-window` | 滑動視窗模式 |
| `--nav-order` | 導覽排序，以逗號分隔的路徑（空字串則清除） |
| `--nav-hidden` | 隱藏的導覽項目，以逗號分隔的路徑（空字串則清除） |

### `ob publish-unlink`

將保管庫與 Publish 網站斷開連接。

```
ob publish-unlink [--path <local-path>]
```
