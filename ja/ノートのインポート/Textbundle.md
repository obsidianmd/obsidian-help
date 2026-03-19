---
localized: 2026-03-19
permalink: import/textbundle
---
Obsidianでは、公式の[[インポーター|インポータープラグイン]]を使用して[Textbundle](https://textbundle.org/)ファイルを簡単にインポートできます。

特定のアプリからノートをインポートする場合は、まず[[インポーター|インポータープラグイン]]がサポートするアプリの一覧を確認して、移行するデータをより適切に保持できる専用のコンバーターがあるかどうかを確認することをお勧めします。

Textbundleフォーマットは、Markdownテキストと参照されているすべての画像を単一のファイルにバンドルし、サンドボックス化されたアプリケーションからのデータ移行をよりシームレスに行える方法を提供します。Textbundleエクスポートは、Agenda、Craft、Taio、Ulysses、Zettlrなど、[多くのアプリ](https://textbundle.org/)でサポートされています。

## TextbundleファイルをObsidianにインポートする

公式のObsidian [[インポーター]]プラグインが必要です。[こちらからインストール](obsidian://show-plugin?id=obsidian-importer)できます。

1. **[[設定]]**を開きます。
2. **コミュニティプラグイン**に移動し、[インポーターをインストール](obsidian://show-plugin?id=obsidian-importer)します。
3. インポータープラグインを有効化します。
4. コマンドパレットまたはリボンメニューのアイコンから**インポーター**プラグインを開きます。
5. **ファイルフォーマット**で**Textbundle (.textbundle, .textpack)**を選択します。
6. TextbundleまたはTextpackファイルのロケーションを選択します。Zipファイルもサポートされています。
7. **Import**をクリックし、インポートが完了するまで待ちます。
8. 完了です！

## トラブルシューティング

### インポート対象のファイルが選択されない

Textbundleインポートは一度に1つのTextbundleファイルのみインポートでき、Macデバイスでのみ動作します。代わりに、インポートしたいすべてのTextbundleファイルを1つの.zipファイルに圧縮し、任意のデバイスからインポートすることができます。
