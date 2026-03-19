---
localized: 2026-03-19
permalink: import/roam
---
Obsidianでは、[[インポーター|インポータープラグイン]]を使用して、Roam Researchからノートを簡単に移行できます。Roamのデータは耐久性のあるMarkdownファイルに変換され、Obsidianやその他多くのアプリで使用できます。

## Roam Researchからデータをエクスポートする

1. Roam Researchで、右上の**その他のアクション**（`•••`）をクリックし、**Export All**を選択します。
   
   ![[Roam-exporting.png#interface]]
2. **Export Format**で「JSON」を選択し、**Export All**を選択してノートのアーカイブをダウンロードします。

## Roam ResearchのデータをObsidianにインポートする

公式のObsidian [[インポーター]]プラグインが必要です。[こちらからインストール](obsidian://show-plugin?id=obsidian-importer)できます。

1. **[[設定]]**を開きます。
2. **コミュニティプラグイン**に移動し、[インポーターをインストール](obsidian://show-plugin?id=obsidian-importer)します。
3. インポータープラグインを有効化します。
4. コマンドパレットまたはリボンメニューのアイコンから**インポーター**プラグインを開きます。
5. **ファイルフォーマット**で**Roam Research (.json)**を選択します。
6. `.json`ファイルのロケーションを選択します。
7. **出力フォルダ**で、ファイルのインポート先を選択します。
8. 添付ファイルもインポートしたい場合は、**すべての添付ファイルをダウンロード**をオンにします。
9. **インポート**をクリックし、インポートが完了するまで待ちます。
10. 完了です！

![[Roam-Importer-importing.png]]
