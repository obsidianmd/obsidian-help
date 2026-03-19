---
permalink: import/bear
---
Obsidianでは、[[インポーター|インポータープラグイン]]を使用してBearからノートを簡単に移行できます。Bearのデータは耐久性のあるMarkdownファイルに変換され、Obsidianやその他の多くのアプリで使用できます。

## Bearからデータをエクスポートする

Obsidianは、Bearのバックアップフォーマットである`.bear2bk`ファイルを使用します。バックアップの作成方法については、[Bearのウェブサイト](https://bear.app/faq/backup-restore/)を参照してください。

1. Bearを開きます。
2. バックアップを作成します
	1. macOSの場合：**File** → **Backup notes**。
	2. iOSの場合：サイドバー上部のその他メニュー（⋮）をクリックし、**Backup all notes**を選択します。
3. バックアップファイルの保存先を選択します。
4. **Export notes**をクリックします。
5. すべてのノートを含む1つの`.bear2bk`ファイルが作成されます。

## BearのデータをObsidianにインポートする

公式のObsidian [[インポーター]]プラグインが必要です。[こちらからインストール](obsidian://show-plugin?id=obsidian-importer)できます。

1. **[[設定]]**を開きます。
2. **コミュニティプラグイン**に移動し、[インポーターをインストール](obsidian://show-plugin?id=obsidian-importer)します。
3. インポータープラグインを有効化します。
4. コマンドパレットまたはリボンメニューのアイコンから**インポーター**プラグインを開きます。
5. **フォーマット**で**Bear (.bear2bk)**を選択します。
6. Bearバックアップファイルの場所を選択します。
7. **Import**をクリックし、インポートが完了するまで待ちます。
8. 完了です！
