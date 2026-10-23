---
permalink: import/apple-journal
cssclasses:
  - soft-embed
---
Obsidianでは、[[インポーター|インポータープラグイン]]を使用してApple Journalのジャーナルエントリを簡単に移行できます。これにより、ジャーナルが耐久性のあるMarkdownファイルに変換され、Obsidianやその他の多くのアプリで使用できるようになります。

## Apple Journalからデータをエクスポートする

### iPhoneの場合
[iPhoneのジャーナルでエントリをプリント・書き出す](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806)の手順に従ってください：

1. iPhoneでジャーナルアプリを開きます。
2. ジャーナルを選択するか、「すべてのエントリ」をタップします。
3. 画面上部の「その他」ボタンをタップします。
4. 「書き出す」をタップし、「書き出す」を選択します。
5. ロケーションを選択し、選択済みボタンをタップします。

### Mac（Tahoe）の場合
[Macのジャーナルでエントリをプリント・書き出す](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a)の手順に従ってください：

1. Macでジャーナルアプリを開きます。
2. ファイル > 書き出す に進み、「書き出す」を選択します。

## Apple JournalのデータをObsidianにインポートする

公式のObsidian [[インポーター]]プラグインが必要です。[こちらからインストール](obsidian://show-plugin?id=obsidian-importer)できます。

1. **[[設定]]**を開きます。
2. **コミュニティプラグイン**に移動し、[インポーターをインストール](obsidian://show-plugin?id=obsidian-importer)します。
3. インポータープラグインを有効化します。
4. コマンドパレットまたはリボンメニューのアイコンから**インポーター**プラグインを開きます。
5. **ファイルフォーマット**で**Apple Journal (HTML Export)**を選択します。
6. **インポートするファイル**で、エクスポートされたデータのフォルダ（通常は_AppleJournalEntries_）または_Entries_内の個別ファイルを選択します。
7. その他のインポートオプションを確認・編集します。
8. **インポート**を選択して、生成されたテンプレートを確認し、エントリからのプレビュー例を確認します。
9. 再度**インポート**を選択し、インポートが完了するまで待ちます。

## テンプレート

[[インポーターテンプレート]]を使用して、Apple Journalデータのインポート方法を完全にカスタマイズできます。

![[インポーターテンプレート#Variables]]

**メタデータをフロントマターとして追加**が有効な場合、Apple Journalのメタデータは[[プロパティ]]に変換されます。エントリに応じて、`state-of-mind`、`contact`、`location`、`motion-activity`、`third-party-media`、`workout-route`などが含まれる場合があります。

`properties`変数を使用してこのメタデータにアクセスできます。例えば、ロケーションには`{{properties.location}}`を、心の状態には`{{properties["state-of-mind"]}}`を使用します。
