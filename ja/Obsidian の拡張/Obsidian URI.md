---
permalink: uri
aliases:
  - 高度なトピック/Obsidian URIの利用
---
Obsidian URIは、ObsidianがサポートするカスタムURIプロトコルで、ノートを開いたり作成したりするなど、さまざまなアクションをトリガーできます。Obsidian URIにより、自動化やアプリ間のワークフローが実現できます。

## URIフォーマット

Obsidian URIは以下のフォーマットを使用します:

```
obsidian://action?param1=value&param2=value
```

`action`パラメータは実行したいアクションです。利用可能なアクションは以下のとおりです:

- `open` ノートを開く。
- `new` ノートを作成する、または既存のノートに追加する。
- `daily` デイリーノートを作成または開く。
- `unique` 新しい一意なノートを作成する。
- `search` 検索を開く。
- `choose-vault` 保管庫マネージャーを開く。

> [!warning] エンコーディング
> 値が適切にURIエンコードされていることを確認してください。例えば、スラッシュ文字`/`は`%2F`に、スペース文字は`%20`にエンコードする必要があります。
> 
 これは特に重要です。不適切にエンコードされた「予約」文字はURIの解釈を壊す可能性があるためです。[詳細はこちらを参照してください](https://en.wikipedia.org/wiki/Percent-encoding)。

## ノートを開く

`open`アクションは、Obsidian保管庫を開くか、その保管庫内のファイルを開きます。

### 例

- `obsidian://open?vault=my%20vault`
  保管庫`my vault`を開きます。保管庫がすでに開いている場合は、そのウィンドウにフォーカスします。
- `obsidian://open?vault=ef6ca3e3b524d22f`
  ID `ef6ca3e3b524d22f`で識別される保管庫を開きます。
- `obsidian://open?vault=my%20vault&file=my%20note`
  保管庫`my vault`内のノート`my note.md`を開きます（ファイルが存在する場合）。
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  パス`/home/user/my vault/path/to/my note`を含む保管庫を検索します。次に、残りのパスが`file`パラメータに渡されます。例えば、保管庫が`/home/user/my vault`に存在する場合、`file`パラメータが`path/to/my note`に設定されたのと同じになります。


> [!tip] 見出しやブロックを開く
> 適切なURIエンコーディングを使用すると、ノート内の見出しやブロックに移動できます。`Note%23Heading`は「Heading」という見出しに移動し、`Note%23%5EBlock`は「Block」というブロックに移動します。

### パラメータ

- `vault` 保管庫の名称または保管庫のID[^1]のいずれかを指定できます。
- `file` ファイル名、または保管庫のルートから指定ファイルまでのパスのいずれかを指定できます。ファイル拡張子が`md`の場合、拡張子は省略できます。
- `path` ファイルへの絶対ファイルシステムパス。
  - このパラメータを使用すると、`vault`と`file`の両方がオーバーライドされます。
  - 指定されたファイルパスを含む最も具体的な保管庫をアプリが検索します。
  - その後、残りのパスが`file`パラメータを置き換えます。
- `prepend` ファイルの先頭に追加し、プロパティの統合を試みます。
- `append` ファイルの末尾に追加し、プロパティの統合も試みます。
- `paneType`（オプション）ノートがUI上のどこで開かれるかを決定します。
  - 指定しない場合、最後にアクティブだったタブが置き換えられます。
  - `paneType=tab` 新規タブで開きます。
  - `paneType=split` 新しいタブグループで開きます。
  - `paneType=window` ポップアウトウィンドウで開きます（デスクトップのみ）。

## ノートを作成する

`new`アクションは、保管庫内に新しいノートを作成します。オプションでコンテンツを含めることもできます。

### 例

- `obsidian://new?vault=my%20vault&name=my%20note`
  保管庫`my vault`を開き、`my note`という名前の新しいノートを作成します。
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  保管庫`my vault`を開き、`path/to/my note`に新しいノートを作成します。

### パラメータ

- `vault` 保管庫の名称または保管庫のID[^1]のいずれかを指定できます。`open`アクションと同じです。
- `name` 作成されるファイル名。これが指定された場合、ファイルの場所は「新規ノートの作成場所」の設定に基づいて選択されます。
- `file` 名前を含む保管庫の絶対パス。指定された場合、`name`をオーバーライドします。
- `path` グローバル絶対パス。`open`アクションの`path`オプションと同様に動作し、`vault`と`file`の両方をオーバーライドします。
- `paneType`（オプション）ノートがUI上のどこで開かれるかを決定します。`open`アクションと同じです。
- `content`（オプション）ノートの内容。
- `clipboard`（オプション）`content`を指定する代わりにクリップボードの内容を使用します。
- `silent`（オプション）新しいノートを開きたくない場合にこのパラメータを含めます。
- `append`（オプション）既存のファイルが存在する場合にそのファイルに追記するために、このパラメータを含めます。
- `overwrite`（オプション）既存のファイルが存在する場合に上書きしますが、`append`が設定されていない場合のみです。
- `x-success`（オプション）[[#x-callback-urlパラメータを使用する]]を参照してください。

## デイリーノートを作成または開く

`daily`アクションはデイリーノートを作成または開きます。[[デイリーノート]]プラグインを有効にする必要があります。

### 例

- `obsidian://daily?vault=my%20vault`
  保管庫`my vault`を開き、デイリーノートを作成または開きます。

### パラメータ

`daily`アクションは`new`アクションと同じパラメータを受け取ります。

## ユニークノート

`unique`アクションは保管庫内に新しい一意なノートを作成します。[[Plugins/Unique note creator|ユニークノートクリエイター]]プラグインを有効にする必要があります。

### 例

- `obsidian://unique?vault=my%20vault`
  保管庫`my vault`を開き、新しい一意なノートを作成します。
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  保管庫`my vault`を開き、内容が`Hello World`の新しい一意なノートを作成します。

### パラメータ

- `vault` 保管庫の名称または保管庫のID[^1]のいずれかを指定できます。`open`アクションと同じです。
- `paneType`（オプション）ノートがUI上のどこで開かれるかを決定します。`open`アクションと同じです。
- `content`（オプション）ノートの内容。
- `clipboard`（オプション）`content`を指定する代わりにクリップボードの内容を使用します。
- `x-success`（オプション）[[#x-callback-urlパラメータを使用する]]を参照してください。

## 検索を開く

`search`アクションは指定された保管庫で[[検索]]を開き、オプションで検索語による検索を実行します。

### 例

- `obsidian://search?vault=my%20vault`
  保管庫`my vault`を開き、[[検索]]を開きます。
- `obsidian://search?vault=my%20vault&query=Obsidian`
  保管庫`my vault`を開き、[[検索]]を開き、`Obsidian`で検索を実行します。

### パラメータ

- `vault` 保管庫の名称または保管庫のID[^1]のいずれかを指定できます。`open`アクションと同じです。
- `query`（オプション）実行する検索語。

## 保管庫マネージャーを開く

`choose-vault`アクションは[[保管庫の管理|保管庫マネージャー]]を開きます。

### 例

- `obsidian://choose-vault`

## Hookとの連携

このObsidian URIアクションは[Hook](https://hookproductivity.com/)と一緒に使用するためのものです。

### 例

`obsidian://hook-get-address`

### パラメータ

- `vault`（オプション）保管庫の名称または保管庫のID[^1]のいずれかを指定できます。指定しない場合、現在のまたは最後にフォーカスされた保管庫が使用されます。
- `x-success`（オプション）[[#x-callback-urlパラメータを使用する]]を参照してください。
- `x-error`（オプション）[[#x-callback-urlパラメータを使用する]]を参照してください。

`x-success`が定義されている場合、このAPIはそれをx-callback-urlとして使用します。そうでない場合は、現在フォーカスされているノートのMarkdownリンクを`obsidian://open` URLとしてクリップボードにコピーします。

## x-callback-urlパラメータを使用する

一部のエンドポイントはx-callback-urlパラメータの`x-success`と`x-error`を受け取ります。提供された場合、Obsidianは`x-success`コールバックに以下を提供します:

- `name` ファイル拡張子を除いたファイル名。
- `url` このファイルの`obsidian://` URI。
- `file`（デスクトップのみ）このファイルの`file://` URL。

例えば、Obsidianが
`obsidian://.....x-success=myapp://x-callback-url`を受け取った場合、レスポンスは`myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`となります。

## 短縮フォーマット

上記のフォーマットに加えて、保管庫やファイルを開くための2つの「短縮」フォーマットも利用できます:

1. `obsidian://vault/my vault/my note`は`obsidian://open?vault=my%20vault&file=my%20note`と同等です。
2. `obsidian:///absolute/path/to/my note`は`obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`と同等です。

## トラブルシューティング

### Obsidian URIを登録する

WindowsとmacOSでは、アプリを一度実行するだけでコンピュータにObsidian URIプロトコルが登録されます。

Linuxでは、より複雑なプロセスが必要です:

1. `obsidian.desktop`ファイルを作成してください。[詳細はこちらを参照してください](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files)。
2. デスクトップファイルの`Exec`フィールドを`Exec=executable %u`と指定してください。`%u`は`obsidian://` URIをアプリに渡すために使用されます。
3. AppImageインストーラーを使用している場合は、`Obsidian-x.y.z.AppImage --appimage-extract`を使って展開する必要がある場合があります。その後、`Exec`ディレクティブが展開された実行ファイルを指すようにしてください。


[^1]: 保管庫IDは保管庫に割り当てられたランダムな16文字のコードです。例えば`ef6ca3e3b524d22f`のようなものです。このIDはコンピュータ上のフォルダごとに一意です。IDは保管庫スイッチャーを開き、目的の保管庫のコンテキストメニューで「保管庫IDをコピー」をクリックすることで確認できます。
