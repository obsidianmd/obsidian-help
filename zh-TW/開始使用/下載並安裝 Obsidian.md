---
permalink: install
---
Obsidian 可在所有主要的桌面和行動平台上使用。以下是所有支援的下載與安裝 Obsidian 的方式。

## 在 Windows 上安裝 Obsidian

1. 開啟瀏覽器並前往[下載 Obsidian](https://obsidian.md/download)。
2. 在 **Windows** 下方，點擊 **Universal** 下載安裝檔。
3. 開啟安裝檔並依照指示操作。
4. 像開啟其他應用程式一樣開啟 Obsidian。

## 在 macOS 上安裝 Obsidian

1. 開啟瀏覽器並前往[下載 Obsidian](https://obsidian.md/download)。
2. 在 **macOS** 下方，點擊 **Universal** 下載安裝檔。
3. 開啟安裝檔。
4. 在開啟的視窗中，將 Obsidian 拖曳到「應用程式」資料夾。
5. 像開啟其他應用程式一樣開啟 Obsidian。

## 在 Linux 上安裝 Obsidian

如果你使用 Linux，可以透過多種方式安裝 Obsidian。請依照你所使用的套件管理系統的指示操作。

### 使用 Snap 安裝 Obsidian

1. 開啟瀏覽器並前往[下載 Obsidian](https://obsidian.md/download)。
2. 在 **Linux** 下方，點擊 **Snap** 下載安裝檔。
3. 開啟終端機並導覽至下載安裝檔的資料夾。
4. 在終端機中執行以下命令來安裝 Snap 套件：（需要 `--dangerous` 旗標是因為 Canonical——Snap 的開發公司——並未審核我們的套件；`--classic` 旗標允許 Obsidian 存取沙盒外部你儲存筆記的位置）

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. 像開啟其他應用程式一樣開啟 Obsidian。

### 使用 AppImage 安裝 Obsidian

1. 開啟瀏覽器並前往[下載 Obsidian](https://obsidian.md/download)。
2. 在 **Linux** 下方，點擊 **AppImage** 下載安裝檔。
3. 開啟終端機並導覽至下載安裝檔的資料夾。
4. 在終端機中執行以下命令來開啟 Obsidian：

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
注意：在 Chromebook 上，必須安裝 `libnss3-dev` 套件，否則可能會收到錯誤訊息 `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`。

### 使用 Flatpak 安裝 Obsidian

1. 在終端機中執行以下命令來安裝 Obsidian：

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. 執行以下命令來開啟 Obsidian：

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## 在 Android 上安裝 Obsidian

1. 在 [Play Store](https://play.google.com/store/apps/details?id=md.obsidian) 上找到 Obsidian。
2. 點擊**安裝**來下載應用程式。
3. 像開啟其他應用程式一樣開啟 Obsidian。

你也可以選擇從[下載 Obsidian](https://obsidian.md/download) 頁面下載 Android 的 APK 檔案。

## 在 iPhone 和 iPad 上安裝 Obsidian

1. 在 [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442) 上找到 Obsidian。
2. 點擊**取得**來下載應用程式。
3. 像開啟其他應用程式一樣開啟 Obsidian。
