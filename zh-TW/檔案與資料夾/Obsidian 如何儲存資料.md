---
permalink: data-storage
publish: true
mobile: true
description: 本頁說明 Obsidian 如何在您的裝置上儲存資料。
---
Obsidian 將你的筆記以 [[基本格式語法|Markdown 格式]] 的純文字檔案儲存在一個_保管庫_中。保管庫是你本機檔案系統上的一個資料夾，包含所有子資料夾。

由於筆記是純文字檔案，你可以使用其他文字編輯器和檔案管理工具來編輯和管理筆記。Obsidian 會自動重新整理保管庫以同步任何外部變更。

你可以在作業系統允許的任何位置建立保管庫。Obsidian 可透過 [[Obsidian Sync 簡介|Obsidian Sync]]、Dropbox、iCloud、OneDrive、Git 及許多其他第三方服務進行同步。

你可以將多個資料夾作為個別保管庫開啟，例如將工作筆記和學校筆記分開管理。

> [!warning] 保管庫中的保管庫
> 由於[[內部連結]]是保管庫內部的連結，我們建議你不要在保管庫內建立保管庫。連結可能無法正確更新。

## 保管庫設定

Obsidian 會在保管庫的根目錄中建立一個 `.obsidian` [[設定資料夾]]，其中包含該保管庫專屬的偏好設定，例如[[快速鍵]]、[[佈景主題]]和[[社群外掛程式]]。

預設情況下，大多數作業系統會隱藏以句點（`.`）開頭的資料夾，因此你可能需要更新檔案管理工具的設定才能看到它。

- **macOS**：在 Finder 中，按下 `Cmd+Shift+.`（句點）以顯示隱藏檔案。
- **Windows**：[顯示隱藏檔案](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux**：在大多數檔案瀏覽器中，按下 `Ctrl + h` 以顯示隱藏檔案。

> [!tip] 將 `.obsidian` 加入 Git
> `.obsidian/workspace.json` 和 `.obsidian/workspaces.json` 檔案會儲存目前的工作區佈局，並在你開啟新檔案時更新。如果你使用 [Git](https://git-scm.com) 來管理保管庫，你可能會想將這些檔案加入 `.gitignore`。

## 全域設定

Obsidian 會將全域設定儲存在系統資料夾中。系統資料夾的位置取決於你使用的作業系統。

- **macOS**：`/Users/yourusername/Library/Application Support/obsidian`
- **Windows**：`%APPDATA%\Obsidian\`
- **Linux**：`$XDG_CONFIG_HOME/obsidian/` 或 `~/.config/obsidian/`

> [!warning] 不要在系統資料夾中建立保管庫。這可能會導致資料損毀或資料遺失。

## IndexedDB

IndexedDB 是一個低階的用戶端資料庫，Obsidian 將其用於後端儲存。它有助於維護 [[Obsidian Sync 簡介|Obsidian Sync]] 連線的狀態，並在應用程式關閉時保留[[#中繼資料快取]]。

> [!warning] 如果啟用了 Apple 的[封鎖模式](<https://support.apple.com/en-us/105120>)且未將 Obsidian 排除在外，這些資料庫檔案將無法儲存，導致每次啟動應用程式時都需要重新建立索引。

### 中繼資料快取

為了在使用應用程式時提供快速的體驗，Obsidian 會維護一份保管庫中檔案中繼資料的本機記錄，稱為**中繼資料快取**。此中繼資料為應用程式中的許多功能提供支援，從圖譜檢視到大綱檢視皆是如此。

Obsidian 會將此快取與保管庫中的檔案保持同步，但資料有可能與底層檔案不同步。如果你的保管庫發生此情況，你可以在應用程式設定的*檔案與連結*區段中重建中繼資料快取。
