---
permalink: import/onenote
---
Obsidianでは、[[インポーター|インポータープラグイン]]を使用してMicrosoft OneNoteからノートを簡単に移行できます。これにより、OneNoteのデータが耐久性のあるMarkdownファイルに変換され、Obsidianやその他多くのアプリで使用できるようになります。

> [!Warning]
> インポートできるのは、個人アカウントが所有するノートブックのみです。共有ノートや、職場・学校のアカウントからのインポートはサポートされていません。

## OneNoteのデータをObsidianにインポートする

公式のObsidian [[インポーター]]プラグインが必要です。[こちらからインストール](obsidian://show-plugin?id=obsidian-importer)できます。

1. **[[設定]]**を開きます。
2. **コミュニティプラグイン**に移動し、[インポーターをインストール](obsidian://show-plugin?id=obsidian-importer)します。
3. インポータープラグインを有効化します。
4. コマンドパレットまたはリボンメニューのアイコンから**インポーター**プラグインを開きます。
5. **ファイルフォーマット**で**Microsoft OneNote**を選択します。
6. **ログイン**をクリックすると、ウェブブラウザでMicrosoftのログインページが開きます。OneNoteノートブックが含まれるMicrosoftアカウントの資格情報を入力してください。Microsoftのログインプロセスの詳細は以下をご覧ください。
7. **Accept**をクリックして、ObsidianにOneNoteノートブックの閲覧権限を付与します。
8. **Open Link**をクリックして、ブラウザからObsidianアプリにリダイレクトされるようにします。
9. Obsidianアプリで、インポーターダイアログにログイン済みであることが表示され、OneNoteのノートブックとセクションが一覧表示されます。インポートしたいセクションにチェックを入れてください。

![[OneNote-Importer-Select-Sections.png]]

10. **Import**をクリックし、インポートが完了するまで待ちます。
11. 完了です！

## トラブルシューティング

### セクションやノートブックが表示されない

インポートしようとしているノートブックがOneDriveに同期されており、OneNote Webで表示可能であることを確認してください。ノートブックはあなたが所有している必要があります（他の人が作成した共有ノートブックはサポートされていません）。

特定のセクションが見つからない場合は、ロックされたセクションでないか確認してください。ロックされたセクションは、ロックを解除しないと表示されません。

### インポートしたノートが空またはコンテンツが欠落している

この問題は、あまり使用していないノートブックで発生することがあります。この問題を解決するには、以下の手順に従ってください：

1. ブラウザで[OneNote Web](https://onenote.com/notebooks)を開きます。
2. コンテンツが欠落しているノートブックを**右クリック**します。
3. メニューから**Export Notebook**を選択します。
4. ダウンロードしたファイルをフォルダに**解凍**します。
5. OneNoteノートブックを[こちら](https://www.onenote.com/notebooks/exportimport?toImport=true)にアップロードします。
6. **Obsidianインポーター**を開き、再度インポートを試みます。

これらのヒントに従っても問題が解決しない場合は、Microsoftサーバーに一時的な問題が発生している可能性があります。その場合は、数分待ってから再度お試しください。問題が解決しない場合は、[Obsidian Importer GitHubリポジトリ](https://github.com/obsidianmd/obsidian-importer/issues)でIssueを作成してください。

## プライバシー

Obsidianインポータープラグインは、[OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)を使用してMicrosoftアカウントで認証し、OneNoteノートブックをインポートします。これにより、アカウントへの短期間のアクセストークンが付与されますが、このトークンはあなたのコンピューターからのみ使用され、保存されることはありません。インポート完了後、[Microsoftのアプリとサービスページ](https://account.live.com/consent/Manage)からトークンを任意で取り消すことができます。
