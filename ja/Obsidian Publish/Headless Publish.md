---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish offers a headless client to publish vaults without using the desktop app. Useful for CI pipelines and automated workflows.
---
[[Obsidian Publishの概要|Obsidian Publish]]は、デスクトップアプリを使用せずに保管庫をパブリッシュするためのヘッドレスクライアントを提供します。CIパイプラインや自動化されたワークフローに便利です。スケジュールに基づいて、またはビルドパイプラインの一部として最新の変更を公開できます。

[[Obsidian Headless]]**（オープンベータ）**をインストールすると、Obsidianデスクトップアプリなしでコマンドラインから[[Obsidian Publishの概要|Obsidian Publish]]を操作できます。

## クイックスタート

[[Obsidian Headless|Obsidian Headless]]**（オープンベータ）**をインストール：

```shell
npm install -g obsidian-headless
```

有効な[[Obsidian Publishの概要|Obsidian Publishサブスクリプション]]が必要です。

```shell
# ログイン
ob login

# Publishサイトの一覧を表示
ob publish-list-sites

# ローカル保管庫をPublishサイトに接続
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# 公開せずに変更をプレビュー
ob publish --dry-run

# 変更を公開
ob publish
```

## コマンド

### `ob publish-list-sites`

アカウントで利用可能なすべてのPublishサイトを一覧表示します。

### `ob publish-create-site`

新しいPublishサイトを作成します。

```
ob publish-create-site --slug <slug>
```

| オプション | 説明 |
| --- | --- |
| `--slug` | サイトのURL識別子（例：`my-notes`で`publish.obsidian.md/my-notes`が作成されます） |

### `ob publish-setup`

ローカル保管庫をPublishサイトに接続します。

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| オプション | 説明 |
| --- | --- |
| `--site` | サイトIDまたはslug |
| `--path` | ローカル保管庫のパス（デフォルト：現在のディレクトリ） |

### `ob publish`

保管庫の変更をサイトに公開します。デフォルトでは、フロントマターに`publish: true`が設定されたファイルのみが対象になります。

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| オプション | 説明 |
| --- | --- |
| `--path` | ローカル保管庫のパス（デフォルト：現在のディレクトリ） |
| `--all` | publishフラグの有無に関係なく、すべてのファイルを対象にする |
| `--dry-run` | 公開せずに変更を表示する |
| `--yes` | 確認プロンプトなしで公開する |

### `ob publish-config`

保管庫のフォルダの包含/除外設定を表示または変更します。オプションなしで実行すると、現在の設定を表示します。

```
ob publish-config [--path <local-path>] [options]
```

| オプション | 説明 |
| --- | --- |
| `--path` | ローカル保管庫のパス（デフォルト：現在のディレクトリ） |
| `--includes` | 含めるフォルダ（カンマ区切り、空文字列でクリア） |
| `--excludes` | 除外するフォルダ（カンマ区切り、空文字列でクリア） |

### `ob publish-site-options`

サイト全体の表示およびナビゲーション設定を表示または更新します。オプションなしで実行すると、現在の設定を表示します。

```
ob publish-site-options [--path <local-path>] [options]
```

| オプション | 説明 |
| --- | --- |
| `--path` | ローカル保管庫のパス（デフォルト：現在のディレクトリ） |
| `--site-name` | サイト名称 |
| `--index-file` | ホームページのファイルパス |
| `--logo` | ロゴのファイルパス（空文字列でクリア） |
| `--show-navigation` | ナビゲーションサイドバーを表示 |
| `--show-graph` | グラフビューを表示 |
| `--show-outline` | 目次を表示 |
| `--show-search` | 検索を表示 |
| `--show-backlinks` | バックリンクを表示 |
| `--show-hover-preview` | ホバープレビューを表示 |
| `--show-theme-toggle` | テーマ切り替えを表示 |
| `--default-theme` | デフォルトテーマ：`light`または`dark` |
| `--readable-line-length` | 読みやすい行の長さ |
| `--strict-line-breaks` | 厳密な改行 |
| `--hide-title` | インラインタイトルを非表示 |
| `--sliding-window` | スライディングウィンドウモード |
| `--nav-order` | ナビゲーションの順序（カンマ区切りのパス、空文字列でクリア） |
| `--nav-hidden` | 非表示のナビゲーションアイテム（カンマ区切りのパス、空文字列でクリア） |

### `ob publish-unlink`

保管庫とPublishサイトの接続を切断します。

```
ob publish-unlink [--path <local-path>]
```
