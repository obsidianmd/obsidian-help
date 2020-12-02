Obsidianでは、アプリケーション内での様々なアクションのトリガーとして使うことができる`obsidian://` のカスタムURIプロトコルをサポートしています。通常、これはMacOSにおけるアプリケーションをまたいだワークフローに使用されます。

## Obsidian URIのインストール

利用しているオペレーティングシステムが `obsidian://` URIをObsidianのアプリケーションにリダイレクトすることを確認するために、実行する必要のある追加の手順がある場合があります。

- Windowsでは、アプリケーションを一度実行するだけで十分です。これにより Windowsのレジストリに`obsidian://`のカスタムプロトコルハンドラが登録されます。
- MacOSでも、アプリケーションを一度実行するだけで十分ですが、アプリケーションのインストールバージョンが0.8.12かそれより新しいものである**必要**があります。
- Linuxでは、より多くの手順が必要です。
	- 最初に、`obsidian.desktop`ファイルを作成してください。詳しくは[こちら](https://developer.gnome.org/integration-guide/stable/desktop-files.html.en)を参照してください。
	- AppImage installersを利用している場合には、`Obsidian-x.y.z.AppImage --appimage-extract`を使ってそれを展開する必要があるかもしれません。次に、`Exec`ディレクティブが展開された実行可能ファイルを指していることを確認してください。

## Obsidian URIを利用する

Obsidian URIは典型的に次のようなフォーマットです。

```
obsidian://action?param1=value&param2=value
```

- `action`は通常、実行したいアクションを指定してください。。

### エンコーディング

==重要==

値が正しくURIエンコードされていることを確認してください。例えば、スラッシュ`/`は`%2F`として、スペースは`%20`としてエンコードされる必要があります。
間違ってエンコードされた特殊文字はURIによる解釈を損なう可能性があるため、上で述べたことは特に重要です。詳細については [こちら](https://en.wikipedia.org/wiki/Percent-encoding)を参照してください。

### 利用可能なアクション

#### アクション`open`

説明 : Obsidianの保管庫を開き、保管庫内でファイルを開くことも可能です。

指定可能なパラメータ : 

- `vault`は保管庫の名前か保管庫のIDのどちらかを指定ができます。
	- 保管庫の名前は単に保管庫のフォルダの名前です。
	- 保管庫のIDはランダムに保管庫に割り当てられた16文字のコードで、このIDはコンピューター上のフォルダごとに一意になっています。例えば、 `ef6ca3e3b524d22f`というようになっています。このIDを見つける簡単な方法はまだありませんが、将来的に保管庫のスイッチャーで提供される予定です。現在は、Windowsの場合は`%appdata%/obsidian/obsidian.json`で見つけることができます。MacOSでは、 `%appdata%`を`~/Library/Application Support/`で置き換えてください。Linuxでは、 `%appdata%`を`~/.config/`で置き換えてください。
- `file`はファイル名か、保管庫のルートから特定のファイルへのパスのどちらかを指定できます。
	- ターゲットファイルを解決するため、Obsidianは保管庫内での通常の`[[wikilink]]`と同じリンク解決システムを使用します。
	- ファイル拡張子が`md`の場合には、拡張子を省くことが可能です。
- `path`では、ファイルに対して絶対パスを使用します。
	- このパラメータを使うと`vault`と`file`の両方をオーバーライドします。
	- これによってアプリケーションは指定されたファイルパスを含む最も明確な保管庫を検索します。
	- 最後にパスの残りの部分を`file`のパラメータで置き換えます。

例 :

- `obsidian://open?vault=my%20vault`
	これは`my vault`という保管庫を開きます。保管庫がすでに開かれている場合にはウィンドウにフォーカスします。

- `obsidian://open?vault=ef6ca3e3b524d22f`
	これは`ef6ca3e3b524d22f`というIDで識別された保管庫を開きます。

- `obsidian://open?vault=my%20vault&file=my%20note`
	これは`my note`が`my note.md`というファイルで存在することを仮定して`my note`というノートを保管庫`my vault`から開きます。 

- `obsidian://open?vault=my%20vault&file=my%20note.md`
	これも同様に`my note`というノートを保管庫`my vault`から開きます。

- `obsidian://open?vault=my%20vault&file=path%2Fto%2Fmy%20note`
	これは保管庫`my vault`の中から`path/to/my note`に位置しているノートを開きます。

- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
	これは`/home/user/my vault/path/to/my note`というパスを含むあらゆる保管庫を探します。次にパスの残りの部分が `file`パラメータに渡されます。例えば、保管庫が`/home/user/my vault`に存在していたとき、これは `file` パラメータに `path/to/my note` を設定したことと同じことになります

- `obsidian://open?path=D%3A%5CDocuments%5CMy%20vault%5CMy%20note`
	これは`D:\Documents\My vault\My note`というパスを含むあらゆる保管庫を探します。次にパスの残りの部分が `file`パラメータに渡されます。例えば、保管庫が`D:\Documents\My vault`に存在していたとき、これは `file` パラメータに `My note` を設定したことと同じことになります

#### アクション`search`

説明 : 保管庫で検索ペインを開き、オプションとして検索クエリを実行することが可能です。

指定可能なパラメータ :

- `vault`は`open`のアクションと同じく保管庫の名前か保管庫のIDのどちらかとして指定ができます。
- `query`で(選択的)検索クエリを実行します。

例 :

- `obsidian://search?vault=my%20vault`
	これは保管庫`my vault`を開いて、検索用ペインを開きます。

- `obsidian://search?vault=my%20vault&query=MOC`
	これは保管庫`my vault`を開いて、検索用ペインを開き、さらに`MOC`を検索します。
	
## 短縮フォーマット

上記のフォーマットに加えて、保管庫とファイルを開くのに二つの｢短縮｣されたフォーマットが利用可能です。

- `obsidian://vault/my vault/my note`は `obsidian://open?vault=my%20vault&file=my%20note`に相当します。
- `obsidian:///absolute/path/to/my note`は`obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`に相当します。
