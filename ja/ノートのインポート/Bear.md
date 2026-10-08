---
permalink: import/bear
cssclasses:
  - soft-embed
---
Obsidianでは、[[インポーター|インポータープラグイン]]を使用してBearからノートを簡単に移行できます。Bearのデータは耐久性のあるMarkdownファイルに変換され、Obsidianやその他の多くのアプリで使用できます。

## Bearからデータをエクスポートする

Obsidianは、Bearのバックアップフォーマットである`.bear2bk`または`ApplicationData.zip`を使用できます。

### iOS

1. Bearを開きます。
2. **Settings** → **Advanced** → **Share Application Data**に移動します。
3. バックアップファイルの保存先を選択します。
4. すべてのノートを含む1つの`ApplicationData.zip`ファイルが作成されます。

### macOS

1. Bearを開きます。
2. **File** → **Backup notes**に移動します。
3. バックアップファイルの保存先を選択します。
4. **Export notes**をクリックします。
5. すべてのノートを含む1つの`.bear2bk`ファイルが作成されます。

## BearのデータをObsidianにインポートする

公式のObsidian [[インポーター]]プラグインが必要です。[こちらからインストール](obsidian://show-plugin?id=obsidian-importer)できます。

1. **[[設定]]**を開きます。
2. **コミュニティプラグイン**に移動し、[インポーターをインストール](obsidian://show-plugin?id=obsidian-importer)します。
3. インポータープラグインを有効化します。
4. コマンドパレットまたはリボンメニューのアイコンから**インポーター**プラグインを開きます。
5. **フォーマット**で**Bear (.bear2bk, .zip)**を選択します。
6. Bearバックアップファイルの場所を選択します。
7. **Import**を選択して、生成されたテンプレートとノートのプレビュー例を確認します。
8. 再度**Import**を選択し、インポートが完了するまで待ちます。

## テンプレート

[[インポーターテンプレート|インポーターテンプレート]]を使用して、Bearデータのインポート方法を完全にカスタマイズできます。

![[インポーターテンプレート#Variables]]
