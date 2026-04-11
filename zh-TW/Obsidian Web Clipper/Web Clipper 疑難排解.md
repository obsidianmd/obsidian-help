---
permalink: web-clipper/troubleshoot
---
如果你在使用 [[Obsidian Web Clipper 簡介|Web Clipper]] 時遇到問題，可以透過[官方 Discord 頻道](https://discord.com/channels/686053708261228577/1285652864089198672)取得協助。你也可以在 [GitHub 儲存庫](https://github.com/obsidianmd/obsidian-clipper)回報錯誤。

## 一般問題

### 部分內容遺失

預設情況下，Web Clipper 會嘗試智慧擷取頁面內容。但並非在所有網站上都能成功擷取。

Web Clipper 使用 [Defuddle](https://github.com/kepano/defuddle) 來僅擷取頁面的主要內容。這會排除頁首、頁尾和其他元素，但有時可能過於保守而移除了你想保留的內容。你可以向 Defuddle [回報錯誤](https://github.com/kepano/defuddle)。

若要在 Web Clipper 中繞過 Defuddle，請使用以下方法：

- 選取文字，或使用 `Cmd/Ctrl+A` 全選文字。
- [[螢光筆|反白內容]]來精確選擇你想擷取的內容。
- 為該網站使用[[Obsidian Web Clipper/模板|自訂範本]]。

### Obsidian 中沒有顯示任何內容

如果你點擊**新增至 Obsidian** 後在 Obsidian 中看不到任何內容：

- 檢查 Obsidian [[說明與支援#擷取主控台日誌|開發者主控台]]中是否有錯誤。
- 檢查 Web Clipper 設定中的儲存庫名稱是否與 Obsidian 中的*儲存庫名稱*完全一致，而*非儲存庫路徑*。
- 檢查資料夾名稱的格式是否正確。

## Linux

#### Obsidian 無法開啟

- 確認 [[Obsidian URI]] 協定[[Obsidian URI#註冊 Obsidian URI|已註冊]]。
- 如果你使用 Firefox，可能需要[在瀏覽器設定中註冊](https://kb.mozillazine.org/Register_protocol)。

#### Obsidian 開啟了但只儲存了檔案名稱

這很可能是 Obsidian 無法存取你的剪貼簿。從瀏覽器傳遞資料到 Obsidian 需要剪貼簿存取權限。你的系統設定可能會影響應用程式的沙盒機制和剪貼簿權限。

如果你使用 Wayland，請確保 Obsidian 在應用程式未聚焦時也擁有讀取剪貼簿的權限。此偏好設定可能在你的平鋪式視窗管理器中，例如 Hyprland 或 Sway。

如果你使用 Hyprland：

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

如果你使用 Sway：

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- 如果你使用 Flatpak，請考慮嘗試使用[官方支援的 Obsidian 版本](https://obsidian.md/download)。
- 如果你使用 KDE，請前往**系統設定** → **視窗管理** → **視窗規則**，並允許 Obsidian 取得焦點，[[web-clipper-kde.png|查看截圖]]。
- 作為備用方案，請嘗試在 **Web Clipper 設定** → **一般**中切換為**舊版模式**。這將繞過剪貼簿，直接透過 URI 儲存內容。請注意，這會根據你的瀏覽器和 Linux 發行版限制可擷取的字元數量。

## iOS 與 iPadOS

若要在 Safari 中啟用 Web Clipper 擴充功能：

1. 開啟 Safari，點擊瀏覽器網址列最左側的按鈕，它看起來像一個底部有線條的矩形。
2. 點擊**管理擴充功能**。
3. 在擴充功能清單中啟用 **Obsidian Web Clipper**。
4. 離開選單。
5. 若要使用擴充功能，請**點擊網址列中的拼圖圖示**。

若要允許 Web Clipper 在所有網站上運行：

1. 前往 iOS **[[設定]]** → **Apps** → **Safari** → **擴充功能**。
2. 在**權限**下允許其在所有網站上運行。

若要允許 Obsidian 始終接收 Web Clipper 內容：

1. 前往 iOS **[[設定]]** → **Apps** → **Obsidian**。
2. 將**從其他 App 貼上**設為**允許**。
