---
permalink: headless
description: Obsidian Headless 是 Obsidian 服務的命令列用戶端。無需桌面應用程式即可同步您的保險庫。
---
Obsidian Headless **（公開測試版）** 是 Obsidian 服務的無介面客戶端。它讓您可以透過命令列[[無介面 Sync|同步保管庫]]，無需桌面應用程式，同時享有 [[Obsidian Sync 簡介|Obsidian Sync]] 的速度、隱私和端對端加密優勢。

您可能使用 Obsidian Headless 的原因：

- 自動化遠端備份。
- 自動化發佈網站。
- 讓 AI 代理工具存取保管庫，而無需存取您的整部電腦。
- 將共享的團隊保管庫同步到伺服器，以供其他工具使用。
- 執行排程自動化，例如將每日筆記彙總為每週摘要、自動標籤等。

> [!info] Obsidian Headless 與 Obsidian CLI
> [[Obsidian CLI]] 從終端機控制 Obsidian 桌面應用程式。Obsidian Headless 是獨立的客戶端，可獨立運行，不需要桌面應用程式。

## 安裝

Obsidian Headless **（公開測試版）** 需要 Node.js 22 或更新版本。從 [npm](https://www.npmjs.com/package/obsidian-headless) 安裝：

```shell
npm install -g obsidian-headless
```

## 驗證

### 登入

```shell
ob login
```

如果已登入，`ob login` 會顯示您的帳戶資訊。若要切換帳戶，請傳入 `--email` 和/或 `--password` 重新登入。

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

省略選項時皆為互動式——系統會提示輸入電子郵件和密碼，如果帳戶已啟用雙重驗證，也會自動要求輸入驗證碼。

若要登出並清除已儲存的憑證：

```shell
ob logout
```

## 服務

- [[無介面 Sync]]：透過命令列使用 [[Obsidian Sync 簡介|Obsidian Sync]]，無需桌面應用程式。
- [[Headless Publish]]：透過命令列使用 [[Obsidian Publish 介紹|Obsidian Publish]]，無需桌面應用程式。
