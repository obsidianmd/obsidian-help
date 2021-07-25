左側のペインに新しくボタンを追加します。そのボタンをクリックすると新規ファイルを作成し、そのファイルに対して現在の時間を使ったプレフィックスを行えます。Zettelkasten UID-in-filenameメソッドのフォロワーの場合には、この機能が役立つでしょう。

デフォルトのフォーマットは "202001010000" のような12桁のタイムスタンプです。

### テンプレート
You can define a [[Templates|template file]] for your Zettelkasten notes. This file will be copied when a new Zettel note is created.

For the Zettelkasten prefixer plugin, `{{date}}` and `{{time}}` do not work. Please use `{{date:YYYY-MM-DD}}` and `{{time:HH:mm}}` in your template.


Zettelkastenノートの[[テンプレート|テンプレートファイル]]を定義することも可能です。このファイルは新規Zettelノートが作成される際にコピーされます。

Zettelkastenプレフィクサーのプラグインでは、`{{date}}` と `{{time}}` が機能しません。テンプレート中では `{{date:YYYY-MM-DD}}` と `{{time:HH:mm}}` を使用するようにしてください。