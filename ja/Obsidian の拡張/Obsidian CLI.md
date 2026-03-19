---
localized: 2026-03-19
permalink: cli
description: Obsidianで行えることはすべてコマンドラインから実行できます。
---
Obsidian CLIは、ターミナルからObsidianを操作できるコマンドラインインターフェースで、スクリプト作成、自動化、外部ツールとの連携に利用できます。

Obsidianで行えることはすべてコマンドラインから実行できます。Obsidian CLIには、開発者ツールへのアクセス、要素の検査、スクリーンショットの取得、プラグインの再読み込みなどを行うための[[#開発者コマンド|開発者コマンド]]も含まれています。

![[obsidian-cli.mp4#interface]]

> [!warning] Obsidian 1.12インストーラーが必要です
> CLIを使用するにはObsidian 1.12インストーラーが必要です。[[Obsidianのアップデート#インストーラーのアップデート|インストーラーバージョンのアップデートガイド]]をご覧ください。

## Obsidian CLIのインストール

最新の[[Obsidianのアップデート|Obsidianインストーラーバージョン]]（1.11.7）および最新の[[早期アクセスバージョン|早期アクセスバージョン]]（1.12.x）にアップグレードしてください。

ObsidianでObsidian CLIを有効にします：

1. **設定** → **一般**に移動します。
2. **コマンドラインインターフェース**を有効にします。
3. プロンプトに従ってObsidian CLIを登録します。

Obsidian CLIのインストールで問題が発生した場合は、[[#トラブルシューティング]]をご覧ください。

## はじめに

Obsidian CLIは、単一コマンドと、インタラクティブなヘルプと自動補完を備えたターミナルユーザーインターフェース（TUI）の両方をサポートしています。

> [!info] Obsidianアプリが起動している必要があります
> Obsidian CLIを使用するにはObsidianアプリが起動している必要があります。Obsidianが起動していない場合、最初に実行するコマンドがObsidianを起動します。
>
> デスクトップアプリなしで同期したい場合は、[[Obsidian Headless|Obsidian Headless]]をご覧ください。

### コマンドの実行

TUIを開かずに個別のコマンドを実行します：

```shell
# helpコマンドを実行
obsidian help
```

### ターミナルインターフェースの使用

`obsidian`と入力してTUIを使用します。以降のコマンドは`obsidian`なしで入力できます。

```shell
# TUIを開いてからhelpを実行
obsidian
help
```

TUIは自動補完、コマンド履歴、逆方向検索をサポートしています。`Ctrl+R`でコマンド履歴を検索できます。利用可能なすべてのショートカットについては、[[#キーボードショートカット]]をご覧ください。

## 使用例

Obsidian CLIでできることのいくつかの例を示します。

### 日常的な使用

```shell
# 今日のデイリーノートを開く
obsidian daily

# デイリーノートにタスクを追加
obsidian daily:append content="- [ ] Buy groceries"

# 保管庫を検索
obsidian search query="meeting notes"

# アクティブなファイルを読む
obsidian read

# デイリーノートからすべてのタスクを一覧表示
obsidian tasks daily

# テンプレートから新しいノートを作成
obsidian create name="Trip to Paris" template=Travel

# 保管庫内のすべてのタグをカウント付きで一覧表示
obsidian tags counts

# ファイルの2つのバージョンを比較
obsidian diff file=README from=1 to=3
```

### 開発者向け

プラグインやテーマの開発に利用できる多くの[[#開発者コマンド]]があります。これらのコマンドにより、エージェントコーディングツールが自動的にテストとデバッグを行えます。

```shell
# 開発者ツールを開く
obsidian devtools

# 開発中のコミュニティプラグインを再読み込み
obsidian plugin:reload id=my-plugin

# アプリのスクリーンショットを撮る
obsidian dev:screenshot path=screenshot.png

# アプリコンソールでJavaScriptを実行
obsidian eval code="app.vault.getFiles().length"
```

## 使い方

### パラメータとフラグの使用

コマンドには**パラメータ**と**フラグ**を使用できます。ほとんどのコマンドはパラメータやフラグを必要としません。必須パラメータは`required`と表記されています。例：

```shell
# デフォルトの「Untitled」名で新しいノートを作成
obsidian create
```

**パラメータ**は値を取り、`parameter=value`の形式で記述します。値にスペースが含まれる場合は引用符で囲みます：

```shell
# 「Note」という名前でコンテンツ「Hello world」の新しいノートを作成
obsidian create name=Note content="Hello world"
```

**フラグ**は値のないブール型のスイッチです。含めることで有効になります。例えば`open`と`overwrite`はフラグです：

```shell
# ノートを作成して開く
obsidian create name=Note content="Hello" open overwrite
```

複数行のコンテンツには改行に`\n`を使用します。タブには`\t`を使用します。

```bash
obsidian create name=Note content="# Title\n\nBody text"
```

### 保管庫の指定

ターミナルの現在の作業ディレクトリが保管庫フォルダの場合、その保管庫がデフォルトで使用されます。そうでない場合は、現在アクティブな保管庫が使用されます。

特定の保管庫を指定するには`vault=<name>`または`vault=<id>`を使用します。これはコマンドの前の最初のパラメータとして指定する必要があります：

```shell
obsidian vault=Notes daily
obsidian vault="My Vault" search query="test"
```

TUIでは、`vault:open <name>`または`<id>`を使用して別の保管庫に切り替えます。

### ファイルの指定

多くのコマンドは特定のファイルを指定するための`file`および`path`パラメータを受け付けます。どちらも指定されない場合、コマンドはアクティブなファイルをデフォルトとして使用します。

- `file=<name>`は[[内部リンク|ウィキリンク]]と同じリンク解決を使用してファイルを解決し、完全なパスや拡張子を必要とせずにファイル名で照合します。
- `path=<path>`は保管庫ルートからの正確なパスが必要です（例：`folder/note.md`）。

```shell
# 「Recipe.md」がその名前を持つ唯一のファイルの場合、これらは同等です
obsidian read file=Recipe
obsidian read path="Templates/Recipe.md"
```

### 出力のコピー

任意のコマンドに`--copy`を追加すると、出力をクリップボードにコピーします：

```shell
read --copy
search query="TODO" --copy
```


## 一般コマンド

### `help`

利用可能なすべてのコマンドの一覧を表示します。

| パラメータ  | 説明                           |
| ----------- | ------------------------------ |
| `<command>` | 特定のコマンドのヘルプを表示。 |

### `version`

Obsidianのバージョンを表示します。

### `reload`

アプリウィンドウを再読み込みします。

### `restart`

アプリを再起動します。


## ベース

[[Basesの紹介|ベース]]のコマンド。

### `bases`

保管庫内のすべての`.base`ファイルを一覧表示します。

### `base:views`

現在のベースファイルのビューを一覧表示します。

### `base:create`

ベースに新しいアイテムを作成します。ファイルが指定されていない場合、アクティブなベースビューをデフォルトとして使用します。

```bash
file=<name>        # ベースファイル名
path=<path>        # ベースファイルパス
view=<name>        # ビュー名
name=<name>        # 新しいファイル名
content=<text>     # 初期コンテンツ

open               # 作成後にファイルを開く
newtab             # 新規タブで開く
```

### `base:query`

ベースにクエリを実行して結果を返します。

```bash
file=<name>                    # ベースファイル名
path=<path>                    # ベースファイルパス
view=<name>                    # クエリするビュー名
format=json|csv|tsv|md|paths   # 出力形式（デフォルト：json）
```

## ブックマーク

[[ブックマーク]]のコマンド。

### `bookmarks`

ブックマークを一覧表示します。

```bash
total              # ブックマーク数を返す
verbose            # ブックマークの種類を含む
format=json|tsv|csv  # 出力形式（デフォルト：tsv）
```

### `bookmark`

ブックマークを追加します。

```bash
file=<path>        # ブックマークするファイル
subpath=<subpath>  # ファイル内のサブパス（見出しまたはブロック）
folder=<path>      # ブックマークするフォルダ
search=<query>     # ブックマークする検索クエリ
url=<url>          # ブックマークするURL
title=<title>      # ブックマークのタイトル
```

## コマンドパレット

[[コマンドパレット]]と[[ホットキー]]のコマンド。プラグインによって登録されたすべてのコマンドを含みます。

### `commands`

利用可能なコマンドIDを一覧表示します。

```bash
filter=<prefix>    # IDプレフィックスでフィルター
```

### `command`

Obsidianコマンドを実行します。

```bash
id=<command-id>    # （必須）実行するコマンドID
```

### `hotkeys`

すべてのコマンドのショートカットキーを一覧表示します。

```bash
total              # ショートカットキー数を返す
verbose            # カスタムかどうかを表示
format=json|tsv|csv  # 出力形式（デフォルト：tsv）
```

### `hotkey`

コマンドのショートカットキーを取得します。

```bash
id=<command-id>    # （必須）コマンドID

verbose            # カスタムかデフォルトかを表示
```

## デイリーノート

[[デイリーノート]]のコマンド。

### `daily`

デイリーノートを開きます。

```bash
paneType=tab|split|window    # 開くペインの種類
```

### `daily:path`

デイリーノートのパスを取得します。ファイルがまだ作成されていなくても、予想されるパスを返します。

### `daily:read`

デイリーノートの内容を読み取ります。

### `daily:append`

デイリーノートにコンテンツを末尾に追加します。

```bash
content=<text>     # （必須）追加するコンテンツ
paneType=tab|split|window    # 開くペインの種類

inline             # 改行なしで追加
open               # 追加後にファイルを開く
```

### `daily:prepend`

デイリーノートにコンテンツを先頭に追加します。

```bash
content=<text>     # （必須）先頭に追加するコンテンツ
paneType=tab|split|window    # 開くペインの種類

inline             # 改行なしで先頭に追加
open               # 追加後にファイルを開く
```

## ファイル履歴

### `diff`

ローカルの[[ファイルリカバリー]]と[[Obsidian Syncの紹介|Sync]]からバージョンを一覧表示または比較します。バージョンは新しい順に番号付けされています。

```bash
file=<name>          # ファイル名
path=<path>          # ファイルパス
from=<n>             # 差分の開始バージョン番号
to=<n>               # 差分の終了バージョン番号
filter=local|sync    # バージョンソースでフィルター
```

**使用例：**

```shell
# アクティブなファイルのすべてのバージョンを一覧表示
diff

# 特定のファイルのすべてのバージョンを一覧表示
diff file=Recipe

# 最新バージョンと現在のファイルを比較
diff file=Recipe from=1

# 2つのバージョンを比較
diff file=Recipe from=2 to=1

# Syncバージョンのみ表示
diff filter=sync
```

### `history`

[[ファイルリカバリー]]のバージョンのみを一覧表示します。同等のSyncコマンドについては、[[#Sync|sync:history]]をご覧ください。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
```

### `history:list`

ローカル履歴があるすべてのファイルを一覧表示します。

### `history:read`

ローカル履歴のバージョンを読み取ります。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
version=<n>        # バージョン番号（デフォルト：1）
```

### `history:restore`

ローカル履歴のバージョンを復元します。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
version=<n>        # （必須）バージョン番号
```

### `history:open`

ファイルリカバリーを開きます。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
```

## ファイルとフォルダ

### `file`

ファイル情報を表示します（デフォルト：アクティブなファイル）。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
```

例：

```
path       Notes/Recipe.md
name       Recipe
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

保管庫内のファイルを一覧表示します。

```bash
folder=<path>      # フォルダでフィルター
ext=<extension>    # 拡張子でフィルター

total              # ファイル数を返す
```

### `folder`

フォルダ情報を表示します。

```bash
path=<path>              # （必須）フォルダパス
info=files|folders|size  # 特定の情報のみを返す
```

### `folders`

保管庫内のフォルダを一覧表示します。

```bash
folder=<path>      # 親フォルダでフィルター

total              # フォルダ数を返す
```

### `open`

ファイルを開きます。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス

newtab             # 新規タブで開く
```

### `create`

ファイルを作成または上書きします。

```bash
name=<name>        # ファイル名
path=<path>        # ファイルパス
content=<text>     # 初期コンテンツ
template=<name>    # 使用するテンプレート

overwrite          # ファイルが存在する場合は上書き
open               # 作成後にファイルを開く
newtab             # 新規タブで開く
```

### `read`

ファイルの内容を読み取ります（デフォルト：アクティブなファイル）。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
```

### `append`

ファイルにコンテンツを末尾に追加します（デフォルト：アクティブなファイル）。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
content=<text>     # （必須）追加するコンテンツ

inline             # 改行なしで追加
```

### `prepend`

フロントマターの後にコンテンツを先頭に追加します（デフォルト：アクティブなファイル）。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
content=<text>     # （必須）先頭に追加するコンテンツ

inline             # 改行なしで先頭に追加
```

### `move`

ファイルを移動またはリネームします（デフォルト：アクティブなファイル）。[[設定#内部リンクを自動的に更新|保管庫の設定]]で有効になっている場合、[[内部リンク]]を自動的に更新します。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
to=<path>          # （必須）移動先フォルダまたはパス
```

### `rename`

ファイルをリネームします（デフォルト：アクティブなファイル）。新しい名前から拡張子が省略された場合、ファイル拡張子は自動的に保持されます。リネームと移動を同時に行うには[[#`move`|move]]を使用してください。[[設定#内部リンクを自動的に更新|保管庫の設定]]で有効になっている場合、[[内部リンク]]を自動的に更新します。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
name=<name>        # （必須）新しいファイル名
```

### `delete`

ファイルを削除します（デフォルト：アクティブなファイル、デフォルトではゴミ箱に移動）。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス

permanent          # ゴミ箱をスキップして完全に削除
```

## リンク

[[バックリンク]]と[[アウトゴーイングリンク]]のコマンド。

### `backlinks`

ファイルへのバックリンクを一覧表示します（デフォルト：アクティブなファイル）。

```bash
file=<name>        # 対象ファイル名
path=<path>        # 対象ファイルパス

counts             # リンク数を含む
total              # バックリンク数を返す
format=json|tsv|csv  # 出力形式（デフォルト：tsv）
```

### `links`

ファイルからのアウトゴーイングリンクを一覧表示します（デフォルト：アクティブなファイル）。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス

total              # リンク数を返す
```

### `unresolved`

保管庫内の未解決リンクを一覧表示します。

```bash
total              # 未解決リンク数を返す
counts             # リンク数を含む
verbose            # ソースファイルを含む
format=json|tsv|csv  # 出力形式（デフォルト：tsv）
```

### `orphans`

入ってくるリンクのないファイルを一覧表示します。

```bash
total              # オーファン数を返す
```

### `deadends`

アウトゴーイングリンクのないファイルを一覧表示します。

```bash
total              # デッドエンド数を返す
```

## アウトライン

[[アウトライン]]のコマンド。

### `outline`

現在のファイルの見出しを表示します。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
format=tree|md|json  # 出力形式（デフォルト：tree）

total              # 見出し数を返す
```

## プラグイン

[[コアプラグイン]]と[[コミュニティプラグイン]]のコマンド。

### `plugins`

インストールされたプラグインを一覧表示します。

```bash
filter=core|community  # プラグインの種類でフィルター

versions               # バージョン番号を含む
format=json|tsv|csv    # 出力形式（デフォルト：tsv）
```

### `plugins:enabled`

有効なプラグインを一覧表示します。

```bash
filter=core|community  # プラグインの種類でフィルター

versions               # バージョン番号を含む
format=json|tsv|csv    # 出力形式（デフォルト：tsv）
```

### `plugins:restrict`

制限モードの切り替えまたは確認を行います。

```bash
on                 # 制限モードを有効にする
off                # 制限モードを無効にする
```

### `plugin`

プラグイン情報を取得します。

```bash
id=<plugin-id>     # （必須）プラグインID
```

### `plugin:enable`

プラグインを有効にします。

```bash
id=<id>                # （必須）プラグインID
filter=core|community  # プラグインの種類
```

### `plugin:disable`

プラグインを無効にします。

```bash
id=<id>                # （必須）プラグインID
filter=core|community  # プラグインの種類
```

### `plugin:install`

コミュニティプラグインをインストールします。

```bash
id=<id>            # （必須）プラグインID

enable             # インストール後に有効にする
```

### `plugin:uninstall`

コミュニティプラグインをアンインストールします。

```bash
id=<id>            # （必須）プラグインID
```

### `plugin:reload`

プラグインを再読み込みします（開発者向け）。

```bash
id=<id>            # （必須）プラグインID
```

## プロパティ

[[プロパティ]]に関連するコマンド。

### `aliases`

保管庫内のエイリアスを一覧表示します。`active`または`file`/`path`を使用して特定のファイルのエイリアスを表示します。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス

total              # エイリアス数を返す
verbose            # ファイルパスを含む
active             # アクティブなファイルのエイリアスを表示
```

### `properties`

保管庫内のプロパティを一覧表示します。`active`または`file`/`path`を使用して特定のファイルのプロパティを表示します。

```bash
file=<name>        # ファイルのプロパティを表示
path=<path>        # パスのプロパティを表示
name=<name>        # 特定のプロパティのカウントを取得
sort=count         # カウントで並べ替え（デフォルト：名前）
format=yaml|json|tsv  # 出力形式（デフォルト：yaml）

total              # プロパティ数を返す
counts             # 出現回数を含む
active             # アクティブなファイルのプロパティを表示
```

### `property:set`

ファイルにプロパティを設定します（デフォルト：アクティブなファイル）。

```bash
name=<name>                                    # （必須）プロパティ名
value=<value>                                  # （必須）プロパティ値
type=text|list|number|checkbox|date|datetime   # プロパティタイプ
file=<name>                                    # ファイル名
path=<path>                                    # ファイルパス
```

### `property:remove`

ファイルからプロパティを削除します（デフォルト：アクティブなファイル）。

```bash
name=<name>        # （必須）プロパティ名
file=<name>        # ファイル名
path=<path>        # ファイルパス
```

### `property:read`

ファイルからプロパティ値を読み取ります（デフォルト：アクティブなファイル）。

```bash
name=<name>        # （必須）プロパティ名
file=<name>        # ファイル名
path=<path>        # ファイルパス
```

## Publish

[[Obsidian Publishの概要|Obsidian Publish]]のコマンド。

### `publish:site`

パブリッシュサイトの情報（スラッグ、URL）を表示します。

### `publish:list`

公開済みのファイルを一覧表示します。

```bash
total              # 公開済みファイル数を返す
```

### `publish:status`

パブリッシュの変更点を一覧表示します。

```bash
total              # 変更数を返す
new                # 新規ファイルのみ表示
changed            # 変更されたファイルのみ表示
deleted            # 削除されたファイルのみ表示
```

### `publish:add`

ファイルまたはすべての変更されたファイルを公開します（デフォルト：アクティブなファイル）。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス

changed            # 変更されたすべてのファイルを公開
```

### `publish:remove`

ファイルの公開を取り消します（デフォルト：アクティブなファイル）。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
```

### `publish:open`

公開済みサイトでファイルを開きます（デフォルト：アクティブなファイル）。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
```

## ランダムノート

[[ランダムノート]]のコマンド。

### `random`

ランダムなノートを開きます。

```bash
folder=<path>      # フォルダに限定

newtab             # 新規タブで開く
```

### `random:read`

ランダムなノートを読み取ります（パスを含む）。

```bash
folder=<path>      # フォルダに限定
```

## 検索

[[検索]]のコマンド。

### `search`

保管庫内のテキストを検索します。一致するファイルパスを返します。

```bash
query=<text>       # （必須）検索クエリ
path=<folder>      # フォルダに限定
limit=<n>          # 最大ファイル数
format=text|json   # 出力形式（デフォルト：text）

total              # 一致数を返す
case               # 大文字/小文字を区別
```

### `search:context`

一致行のコンテキスト付きで検索します。grep形式の`path:line: text`出力を返します。

```bash
query=<text>       # （必須）検索クエリ
path=<folder>      # フォルダに限定
limit=<n>          # 最大ファイル数
format=text|json   # 出力形式（デフォルト：text）

case               # 大文字/小文字を区別
```

### `search:open`

検索ビューを開きます。

```bash
query=<text>       # 初期検索クエリ
```

## Sync

[[Obsidian Syncの紹介|Obsidian Sync]]のコマンド。

> [!tip] デスクトップアプリなしで同期
> これらのコマンドは実行中のObsidianアプリ内のSyncを制御します。デスクトップアプリなしでコマンドラインから保管庫を同期するには、[[ヘッドレスSync]]をご覧ください。

### `sync`

同期を停止または再開します。

```bash
on                 # 同期を再開
off                # 同期を停止
```

### `sync:status`

同期ステータスと使用量を表示します。

### `sync:history`

ファイルのSyncバージョン履歴を一覧表示します（デフォルト：アクティブなファイル）。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス

total              # バージョン数を返す
```

### `sync:read`

Syncバージョンを読み取ります（デフォルト：アクティブなファイル）。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
version=<n>        # （必須）バージョン番号
```

### `sync:restore`

Syncバージョンを復元します（デフォルト：アクティブなファイル）。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
version=<n>        # （必須）バージョン番号
```

### `sync:open`

Sync履歴を開きます（デフォルト：アクティブなファイル）。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
```

### `sync:deleted`

Syncの削除されたファイルを一覧表示します。

```bash
total              # 削除されたファイル数を返す
```

## タグ

[[タグ]]のコマンド。

### `tags`

保管庫内のタグを一覧表示します。`active`または`file`/`path`を使用して特定のファイルのタグを表示します。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス
sort=count         # カウントで並べ替え（デフォルト：名前）

total              # タグ数を返す
counts             # タグのカウントを含む
format=json|tsv|csv  # 出力形式（デフォルト：tsv）
active             # アクティブなファイルのタグを表示
```

### `tag`

タグ情報を取得します。

```bash
name=<tag>         # （必須）タグ名

total              # 出現回数を返す
verbose            # ファイルリストとカウントを含む
```

## タスク

タスク管理のコマンド。

### `tasks`

保管庫内のタスクを一覧表示します。`active`または`file`/`path`を使用して特定のファイルのタスクを表示します。

```bash
file=<name>        # ファイル名でフィルター
path=<path>        # ファイルパスでフィルター
status="<char>"    # ステータス文字でフィルター

total              # タスク数を返す
done               # 完了したタスクを表示
todo               # 未完了のタスクを表示
verbose            # 行番号付きでファイルごとにグループ化
format=json|tsv|csv  # 出力形式（デフォルト：text）
active             # アクティブなファイルのタスクを表示
daily              # デイリーノートのタスクを表示
```

**使用例：**

```bash
# 保管庫内のすべてのタスクを一覧表示
tasks

# 保管庫内の未完了タスクを一覧表示
tasks todo

# 特定のファイルの完了したタスクを一覧表示
tasks file=Recipe done

# 今日のデイリーノートのタスクを一覧表示
tasks daily

# デイリーノートのタスク数をカウント
tasks daily total

# ファイルパスと行番号付きでタスクを一覧表示
tasks verbose

# カスタムステータスでフィルター（特殊文字は引用符で囲む）
tasks 'status=?'
```

### `task`

タスクを表示または更新します。

```bash
ref=<path:line>    # タスクの参照（path:line）
file=<name>        # ファイル名
path=<path>        # ファイルパス
line=<n>           # 行番号
status="<char>"    # ステータス文字を設定

toggle             # タスクのステータスを切り替え
daily              # デイリーノート
done               # 完了としてマーク
todo               # 未完了としてマーク
```

**使用例：**

```bash
# タスク情報を表示
task file=Recipe line=8
task ref="Recipe.md:8"

# タスクの完了状態を切り替え
task ref="Recipe.md:8" toggle

# デイリーノートのタスクを切り替え
task daily line=3 toggle

# タスクのステータスを設定
task file=Recipe line=8 done      # → [x]
task file=Recipe line=8 todo      # → [ ]
task file=Recipe line=8 status=-  # → [-]
task daily line=3 done            # デイリーノートのタスクを完了としてマーク
```


## テンプレート

[[テンプレート]]のコマンド。

### `templates`

テンプレートを一覧表示します。

```bash
total              # テンプレート数を返す
```

### `template:read`

テンプレートの内容を読み取ります。

```bash
name=<template>    # （必須）テンプレート名
title=<title>      # 変数解決用のタイトル

resolve            # テンプレート変数を解決
```

### `template:insert`

アクティブなファイルにテンプレートを挿入します。

```bash
name=<template>    # （必須）テンプレート名
```

**注記：**
- `resolve`オプションは`{{date}}`、`{{time}}`、`{{title}}`変数を処理します
- テンプレート付きでファイルを作成するには`create path=<path> template=<name>`を使用してください

## テーマとスニペット

[[テーマ]]と[[CSSスニペット]]のコマンド。

### `themes`

インストールされたテーマを一覧表示します。

```bash
versions           # バージョン番号を含む
```

### `theme`

アクティブなテーマまたはテーマの情報を表示します。

```bash
name=<name>        # 詳細を表示するテーマ名
```

### `theme:set`

アクティブなテーマを設定します。

```bash
name=<name>        # （必須）テーマ名（デフォルトの場合は空）
```

### `theme:install`

コミュニティテーマをインストールします。

```bash
name=<name>        # （必須）テーマ名

enable             # インストール後にアクティブにする
```

### `theme:uninstall`

テーマをアンインストールします。

```bash
name=<name>        # （必須）テーマ名
```

### `snippets`

インストールされたCSSスニペットを一覧表示します。

### `snippets:enabled`

有効なCSSスニペットを一覧表示します。

### `snippet:enable`

CSSスニペットを有効にします。

```bash
name=<name>        # （必須）スニペット名
```

### `snippet:disable`

CSSスニペットを無効にします。

```bash
name=<name>        # （必須）スニペット名
```

## ユニークノート

[[ユニークノートクリエイター]]のコマンド。

### `unique`

ユニークノートを作成します。

```bash
name=<text>        # ノート名
content=<text>     # 初期コンテンツ
paneType=tab|split|window    # 開くペインの種類

open               # 作成後にファイルを開く
```

## 保管庫

### `vault`

保管庫の情報を表示します。

```bash
info=name|path|files|folders|size  # 特定の情報のみを返す
```

### `vaults`

既知の保管庫を一覧表示します。

```bash
total              # 保管庫数を返す
verbose            # 保管庫のパスを含む
```

### `vault:open`

別の保管庫に切り替えます（TUIのみ）。

```bash
name=<name>        # （必須）保管庫名
```

## Webビューア

[[ウェブビューアー]]のコマンド。

### `web`

WebビューアでURLを開きます。

```bash
url=<url>          # （必須）開くURL

newtab             # 新規タブで開く
```

## ワードカウント

[[ワードカウント]]のコマンド。

### `wordcount`

単語数と文字数をカウントします（デフォルト：アクティブなファイル）。

```bash
file=<name>        # ファイル名
path=<path>        # ファイルパス

words              # 単語数のみを返す
characters         # 文字数のみを返す
```

## ワークスペース

[[ワークスペース]]と[[ワークスペース]]プラグインのコマンド。

### `workspace`

ワークスペースツリーを表示します。

```bash
ids                # ワークスペースアイテムIDを含む
```

### `workspaces`

保存されたワークスペースを一覧表示します。

```bash
total              # ワークスペース数を返す
```

### `workspace:save`

現在のレイアウトをワークスペースとして保存します。

```bash
name=<name>        # ワークスペース名
```

### `workspace:load`

保存されたワークスペースを読み込みます。

```bash
name=<name>        # （必須）ワークスペース名
```

### `workspace:delete`

保存されたワークスペースを削除します。

```bash
name=<name>        # （必須）ワークスペース名
```

### `tabs`

開いているタブを一覧表示します。

```bash
ids                # タブIDを含む
```

### `tab:open`

新しいタブを開きます。

```bash
group=<id>         # タブグループID
file=<path>        # 開くファイル
view=<type>        # 開くビューの種類
```

### `recents`

最近開いたファイルを一覧表示します。

```bash
total              # 最近のファイル数を返す
```

## 開発者コマンド

[[コミュニティプラグイン]]と[[テーマ]]の開発を支援するコマンドです。詳細は[Obsidian開発者ドキュメント](https://docs.obsidian.md)をご覧ください。

### `devtools`

Electron開発者ツールを切り替えます。

### `dev:debug`

Chrome DevToolsプロトコルデバッガーの接続/切断を行います。

```bash
on                 # デバッガーを接続
off                # デバッガーを切断
```

### `dev:cdp`

Chrome DevToolsプロトコルコマンドを実行します。

```bash
method=<CDP.method>  # （必須）呼び出すCDPメソッド
params=<json>        # JSON形式のメソッドパラメータ
```

### `dev:errors`

キャプチャされたJavaScriptエラーを表示します。

```bash
clear              # エラーバッファをクリア
```

### `dev:screenshot`

スクリーンショットを撮ります（base64 PNGを返します）。

```bash
path=<filename>    # 出力ファイルパス
```

### `dev:console`

キャプチャされたコンソールメッセージを表示します。

```bash
limit=<n>                        # 表示する最大メッセージ数（デフォルト50）
level=log|warn|error|info|debug  # ログレベルでフィルター

clear                            # コンソールバッファをクリア
```

### `dev:css`

ソースの場所付きでCSSを検査します。

```bash
selector=<css>     # （必須）CSSセレクター
prop=<name>        # プロパティ名でフィルター
```

### `dev:dom`

DOM要素をクエリします。

```bash
selector=<css>     # （必須）CSSセレクター
attr=<name>        # 属性値を取得
css=<prop>         # CSSプロパティ値を取得

total              # 要素数を返す
text               # テキストコンテンツを返す
inner              # outerHTMLの代わりにinnerHTMLを返す
all                # 最初のみではなくすべての一致を返す
```

### `dev:mobile`

モバイルエミュレーションを切り替えます。

```bash
on                 # モバイルエミュレーションを有効にする
off                # モバイルエミュレーションを無効にする
```

### `eval`

JavaScriptを実行して結果を返します。

```bash
code=<javascript>  # （必須）実行するJavaScriptコード
```

## キーボードショートカット

これらのショートカットは[[#ターミナルインターフェースの使用|TUI]]で利用できます。

### ナビゲーション

| アクション                                           | ショートカット  |
| ---------------------------------------------------- | --------------- |
| カーソルを左に移動                                   | `←` / `Ctrl+B` |
| カーソルを右に移動（行末で候補を受け入れ）           | `→` / `Ctrl+F` |
| 行の先頭にジャンプ                                   | `Ctrl+A`        |
| 行の末尾にジャンプ                                   | `Ctrl+E`        |
| 1単語前に移動                                        | `Alt+B`         |
| 1単語先に移動                                        | `Alt+F`         |

### 編集

| アクション                   | ショートカット             |
| ---------------------------- | -------------------------- |
| 行の先頭まで削除             | `Ctrl+U`                   |
| 行の末尾まで削除             | `Ctrl+K`                   |
| 前の単語を削除               | `Ctrl+W` / `Alt+Backspace` |

### 自動補完

| アクション                                         | ショートカット |
| -------------------------------------------------- | -------------- |
| 候補モードに入る / 選択された候補を受け入れる      | `Tab`          |
| 候補モードを終了                                   | `Shift+Tab`    |
| 候補モードに入る（新しい入力から）                 | `↓`            |
| 最初/選択された候補を受け入れる（行末で）          | `→`            |

### 履歴

| アクション                                                             | ショートカット  |
| ---------------------------------------------------------------------- | --------------- |
| 前の履歴エントリ / 候補を上に移動                                      | `↑` / `Ctrl+P` |
| 次の履歴エントリ / 候補を下に移動                                      | `↓` / `Ctrl+N` |
| 逆方向履歴検索（入力してフィルター、`Ctrl+R`で巡回）                   | `Ctrl+R`        |

### その他

| アクション                                                       | ショートカット       |
| ---------------------------------------------------------------- | -------------------- |
| コマンドを実行または候補を受け入れる                             | `Enter`              |
| 自動補完を元に戻す / 候補モードを終了 / 入力をクリア            | `Escape`             |
| 画面をクリア                                                     | `Ctrl+L`             |
| 終了                                                             | `Ctrl+C` / `Ctrl+D` |

## トラブルシューティング

Obsidian CLIの実行に問題がある場合：

- 最新の[[Obsidianのアップデート|Obsidianインストーラーバージョン]]（1.12.4以上）を使用していることを確認してください。
- CLIを登録した後、PATHの変更を反映させるためにターミナルを再起動してください。
- Obsidianが起動している必要があります。CLIは実行中のObsidianインスタンスに接続します。Obsidianが起動していない場合、最初のCLIコマンドがアプリを起動します。

### Windows

WindowsでのObsidian CLIにはObsidian 1.12.4+インストーラーが必要です。[[Obsidianのアップデート|インストーラーバージョンのアップデート]]をご覧ください。

Windowsでは、Obsidianをstdin/stdoutに適切に接続するターミナルリダイレクターを使用します。これは、ObsidianがWindows上のターミナル出力と互換性のないGUIアプリとして通常実行されるためです。Obsidian 1.12.4+をインストールすると、`Obsidian.exe`ファイルをインストールしたフォルダに`Obsidian.com`ターミナルリダイレクターが追加されます。

### macOS

CLI登録は`~/.zprofile`を介してObsidianバイナリディレクトリをPATHに追加します。問題が発生した場合は、以下を確認してください：

`~/.zprofile`ファイルに以下の行が含まれている必要があります。見つからない場合は手動で追加できます：

```
export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"
```

#### 代替シェル

CLI登録は`~/.zprofile`のみを変更します。これはzsh（macOSのデフォルトシェル）で使用されます。別のシェルを使用している場合は、シェルの設定ファイルにObsidianバイナリディレクトリを手動で追加してください：

- Bash：`~/.bash_profile`に`export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"`を追加
- Fish：`fish_add_path /Applications/Obsidian.app/Contents/MacOS`を実行


### Linux

CLI登録は`/usr/local/bin/obsidian`にObsidianバイナリを指すシンボリックリンクを作成します（sudo権限が必要）。

#### AppImage

AppImageインストールの場合、内部バイナリではなく`.AppImage`ファイルを指すシンボリックリンクが作成されます。マウントパスは起動ごとに変わるためです。sudoが失敗した場合、フォールバックとして`~/.local/bin/obsidian`にシンボリックリンクが作成されます。問題が発生した場合は、以下を確認してください。

シンボリックリンクが存在し、正しいバイナリを指していることを確認します：

```
ls -l /usr/local/bin/obsidian
```

シンボリックリンクが見つからない場合は手動で作成します：

```
sudo ln -s /path/to/obsidian /usr/local/bin/obsidian
```

シンボリックリンクが`~/.local/bin/`に作成された場合は、そのディレクトリがPATHに含まれていることを確認してください。`~/.bashrc`または`~/.zshrc`に以下を追加します：

```
export PATH="$PATH:$HOME/.local/bin"
```

`.AppImage`ファイルを移動またはリネームした後にシンボリックリンクが壊れた場合は、CLIを再登録するかシンボリックリンクを手動で更新してください。

#### Snap

Snapパッケージはインサイダービルドのデータを独自のユーザーデータディレクトリに保存します。CLIがインサイダー`.asar`を検出しない場合は、`XDG_CONFIG_HOME`をSnapの設定パスに設定してください：

```
export XDG_CONFIG_HOME="$HOME/snap/obsidian/current/.config"
```

永続的に設定するには、`~/.bashrc`または`~/.zshrc`に追加してください。


#### Flatpak

Obsidianはこれを自動的に行おうとしますが、以下は手動での手順です。システムインストールの場合：

```
ln -s /var/lib/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```

ユーザーインストールの場合：

```
ln -s ~/.local/share/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```
