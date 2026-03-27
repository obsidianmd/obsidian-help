---
permalink: sync/headless
cssclasses:
  - reference
description: Obsidian Sync 提供無介面用戶端，無需使用桌面應用程式即可同步儲存庫。適用於 CI 管線、代理程式和自動化工作流程。可同步最新變更或持續保持檔案為最新狀態。
---
[[Obsidian Sync 簡介|Obsidian Sync]] 提供無介面客戶端，讓您無需使用桌面應用程式即可同步保管庫。適用於 CI 管線、代理程式及自動化工作流程。可同步最新變動或持續保持檔案為最新狀態。

安裝 [[無介面 Sync|Obsidian Headless]]**（開放測試版）**，即可從命令列與 [[Obsidian Sync 簡介|Obsidian Sync]] 互動，無需 Obsidian 桌面應用程式。無介面 Sync 使用與桌面應用程式相同的[[安全性與隱私|加密與隱私保護]]，包括端對端加密。

## 快速開始

> [!error] 開始前請先備份您的資料
> 1. 務必在開始前備份資料，以防發生任何意外狀況。
> 2. 請勿在同一裝置上*同時*使用桌面應用程式的同步功能與無介面 Sync，以免造成資料衝突。每台裝置只使用一種同步方式。

安裝 [[無介面 Sync|Obsidian Headless]]**（開放測試版）**：

```shell
npm install -g obsidian-headless
```

您必須擁有有效的 [[方案與儲存空間限制|Obsidian Sync 訂閱]]。

```shell
# 登入
ob login

# 列出您的遠端儲存庫
ob sync-list-remote

# 設定保管庫進行同步
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# 執行單次同步
ob sync

# 執行持續同步（監控變動）
ob sync --continuous
```

## 命令

### `ob sync-list-remote`

列出您帳戶可用的所有遠端儲存庫，包括共享的儲存庫。

### `ob sync-list-local`

列出本機已設定的保管庫及其路徑。

### `ob sync-create-remote`

建立新的遠端儲存庫。

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| 選項 | 說明 |
| --- | --- |
| `--name` | 儲存庫名稱（必填） |
| `--encryption` | `standard` 為託管加密，`e2ee` 為端對端加密 |
| `--password` | 端對端加密密碼（若省略則會提示輸入） |
| `--region` | 伺服器[[同步區域|區域]]（若省略則自動選擇） |

### `ob sync-setup`

設定本機保管庫與遠端儲存庫之間的同步。

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| 選項 | 說明 |
| --- | --- |
| `--vault` | 遠端儲存庫 ID 或名稱（必填） |
| `--path` | 本機目錄（預設：目前目錄） |
| `--password` | 端對端加密密碼（若省略則會提示輸入） |
| `--device-name` | 顯示於[[版本歷史|同步版本歷史]]中的裝置名稱 |
| `--config-dir` | [[設定資料夾|設定目錄]]名稱（預設：`.obsidian`） |

### `ob sync`

對已設定的保管庫執行同步。

```
ob sync [--path <local-path>] [--continuous]
```

| 選項 | 說明 |
| --- | --- |
| `--path` | 本機保管庫路徑（預設：目前目錄） |
| `--continuous` | 持續執行，監控變動 |

### `ob sync-config`

檢視或變更保管庫的[[同步設定與選擇性同步|同步設定]]。不帶任何選項執行可顯示目前設定。

```
ob sync-config [--path <local-path>] [options]
```

| 選項                  | 說明                                                                                                                                                                                                           |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | 本機保管庫路徑（預設：目前目錄）                                                                                                                                                                               |
| `--mode`              | 同步模式：`bidirectional`（預設，雙向）、`pull-only`（僅下載，忽略本機變動）或 `mirror-remote`（僅下載，還原本機變動）                                                                                           |
| `--conflict-strategy` | `merge`（合併）或 `conflict`（衝突）                                                                                                                                                                           |
| `--file-types`        | 要同步的附件類型：`image`、`audio`、`video`、`pdf`、`unsupported`（以逗號分隔，留空則清除）                                                                                                                     |
| `--configs`           | 要同步的設定類別：`app`、`appearance`、`appearance-data`、`hotkey`、`core-plugin`、`core-plugin-data`、`community-plugin`、`community-plugin-data`（以逗號分隔，留空則停用設定同步）                              |
| `--excluded-folders`  | 要排除的資料夾（以逗號分隔，留空則清除）                                                                                                                                                                       |
| `--device-name`       | 用於在同步版本歷史中識別此客戶端的裝置名稱                                                                                                                                                                     |
| `--config-dir`        | 設定目錄名稱（預設：`.obsidian`）                                                                                                                                                                              |

### `ob sync-status`

顯示保管庫的同步狀態與設定。

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

中斷保管庫與同步的連接，並移除儲存的憑證。

```
ob sync-unlink [--path <local-path>]
```

## 原生模組

Obsidian Headless 包含預先編譯的原生附加元件，可在 Windows 和 macOS 上設定檔案建立時間（birthtime）。這能在從伺服器下載檔案時保留原始的建立時間戳記。

該附加元件針對 N-API 第 3 版，因此編譯後的二進位檔案具有 ABI 穩定性，無需重新編譯即可跨 Node.js 版本運作。

在 Linux 上不支援 birthtime — 不包含該附加元件，同步功能仍可正常運作。

預先編譯的二進位檔案包含以下平台：

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
