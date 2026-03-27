---
permalink: import/zettelkasten
---
如果你使用 Zettelkasten 方法來命名和連結筆記，你可能需要將連結從 `[[UID]]` 轉換為 `[[UID My note title]]`。

舉例來說，如果你有一則名為 `202301011230 My note title` 的筆記，並從另一則筆記中僅使用 UID 來連結它，也就是 `[[202301011230]]`。由於 Obsidian 使用筆記的全名來解析內部連結，這類連結將會失效。

若要將保管庫中所有 `[[UID]]` 連結更新為使用筆記的全名，請使用 [[Markdown 格式轉換器]]。

1. 開啟**[[設定]]**。
2. 在**核心外掛程式**下，啟用 **Markdown 格式轉換器**，然後關閉設定視窗。
3. 在功能區（應用程式視窗的左側），選擇**開啟格式轉換器** ![[lucide-binary.svg#icon]]。
4. 啟用 **ZK 卡片連結轉換**。
5. 選擇**開始轉換**。這將會轉換整個保管庫中的所有筆記。

> [!tip] 美化 ZK 卡片連結
> [[Markdown 格式轉換器]]也可以透過從顯示名稱中移除 UID 來美化你的連結。例如，`[[UID]]` 會轉換為 `[[UID My note title|My note title]]`。
>
> 若要美化你的 Zettelkasten 連結，請在格式轉換器視窗中啟用**美化 ZK 卡片連結**。

你也可以使用[[唯一筆記建立工具]]在 Obsidian 中建立 Zettelkasten 筆記。
