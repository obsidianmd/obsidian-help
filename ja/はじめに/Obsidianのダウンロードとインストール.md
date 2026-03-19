---
localized: 2026-03-19
permalink: install
---
Obsidianは主要なデスクトップおよびモバイルプラットフォームすべてで利用可能です。以下はObsidianをダウンロードしてインストールするためのすべてのサポートされた方法です。

## WindowsへのObsidianのインストール

1. ブラウザを開き、[Obsidianのダウンロード](https://obsidian.md/download)にアクセスします。
2. **Windows**の下にある**Universal**をクリックしてインストールファイルをダウンロードします。
3. インストールファイルを開き、指示に従います。
4. 他のアプリケーションと同じ方法でObsidianを開きます。

## macOSへのObsidianのインストール

1. ブラウザを開き、[Obsidianのダウンロード](https://obsidian.md/download)にアクセスします。
2. **macOS**の下にある**Universal**をクリックしてインストールファイルをダウンロードします。
3. インストールファイルを開きます。
4. 開いたウィンドウで、Obsidianをアプリケーションフォルダにドラッグします。
5. 他のアプリケーションと同じ方法でObsidianを開きます。

## LinuxへのObsidianのインストール

Linuxを使用している場合、いくつかの方法でObsidianをインストールできます。使用しているパッケージングシステムの手順に従ってください。

### Snapを使用したObsidianのインストール

1. ブラウザを開き、[Obsidianのダウンロード](https://obsidian.md/download)にアクセスします。
2. **Linux**の下にある**Snap**をクリックしてインストールファイルをダウンロードします。
3. ターミナルを開き、インストールファイルをダウンロードしたフォルダに移動します。
4. ターミナルで以下のコマンドを実行してSnapパッケージをインストールします：（`--dangerous`フラグは、Snapを開発したCanonical社がパッケージを審査していないため必要です。`--classic`フラグにより、ノートが保存されているサンドボックス外へのアクセスがObsidianに許可されます）

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. 他のアプリケーションと同じ方法でObsidianを開きます。

### AppImageを使用したObsidianのインストール

1. ブラウザを開き、[Obsidianのダウンロード](https://obsidian.md/download)にアクセスします。
2. **Linux**の下にある**AppImage**をクリックしてインストールファイルをダウンロードします。
3. ターミナルを開き、インストールファイルをダウンロードしたフォルダに移動します。
4. ターミナルで以下のコマンドを実行してObsidianを開きます：

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
注意：Chromebookでは、`libnss3-dev`パッケージがインストールされている必要があります。インストールされていない場合、`error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`というエラーが表示されることがあります。

### Flatpakを使用したObsidianのインストール

1. ターミナルで以下のコマンドを実行してObsidianをインストールします：

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. 以下のコマンドを実行してObsidianを開きます：

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## AndroidへのObsidianのインストール

1. [Playストア](https://play.google.com/store/apps/details?id=md.obsidian)でObsidianを見つけます。
2. **インストール**をタップしてアプリをダウンロードします。
3. 他のアプリと同じ方法でObsidianを開きます。

オプションとして、[Obsidianのダウンロード](https://obsidian.md/download)ページからAndroid用のAPKをダウンロードすることもできます。

## iPhoneおよびiPadへのObsidianのインストール

1. [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442)でObsidianを見つけます。
2. **入手**をタップしてアプリをダウンロードします。
3. 他のアプリと同じ方法でObsidianを開きます。
