---
permalink: sync/headless
cssclasses:
  - reference
description: >-
  Obsidian
  Syncは、デスクトップアプリを使用せずに保管庫を同期するためのヘッドレスクライアントを提供します。CIパイプライン、エージェント、自動化ワークフローに便利です。最新の変更を同期したり、ファイルを継続的に最新の状態に保つことができます。
---
[[Obsidian Syncの紹介|Obsidian Sync]]は、デスクトップアプリを使用せずに保管庫を同期するためのヘッドレスクライアントを提供します。CIパイプライン、エージェント、自動化ワークフローに便利です。最新の変更を同期したり、ファイルを継続的に最新の状態に保つことができます。

[[ヘッドレスSync|Obsidian Headless]] **（オープンベータ）** をインストールすると、Obsidianデスクトップアプリなしでコマンドラインから[[Obsidian Syncの紹介|Obsidian Sync]]を操作できます。ヘッドレスSyncは、エンドツーエンド暗号化を含む、デスクトップアプリと同じ[[セキュリティとプライバシー|暗号化とプライバシー保護]]を使用します。

## クイックスタート

> [!error] 開始前にデータをバックアップしてください
> 1. 予期しない事態に備えて、開始前に必ずデータをバックアップしてください。
> 2. 同じデバイスでデスクトップアプリのSyncとヘッドレスSyncの*両方*を使用しないでください。データの競合が発生する可能性があります。デバイスごとに1つの同期方法のみを使用してください。

[[ヘッドレスSync|Obsidian Headless]] **（オープンベータ）** をインストール：

```shell
npm install -g obsidian-headless
```

有効な[[プランとストレージ制限|Obsidian Syncサブスクリプション]]が必要です。

```shell
# ログイン
ob login

# リモート保管庫を一覧表示
ob sync-list-remote

# 同期用に保管庫をセットアップ
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# ワンタイム同期を実行
ob sync

# 継続的な同期を実行（変更を監視）
ob sync --continuous
```

## コマンド

### `ob sync-list-remote`

共有保管庫を含む、アカウントで利用可能なすべてのリモート保管庫を一覧表示します。

### `ob sync-list-local`

ローカルに設定された保管庫とそのパスを一覧表示します。

### `ob sync-create-remote`

新しいリモート保管庫を作成します。

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| オプション | 説明 |
| --- | --- |
| `--name` | 保管庫の名称（必須） |
| `--encryption` | `standard`はマネージド暗号化、`e2ee`はエンドツーエンド暗号化 |
| `--password` | エンドツーエンド暗号化のパスワード（省略時はプロンプトで入力） |
| `--region` | サーバーの[[Syncリージョン|リージョン]]（省略時は自動） |

### `ob sync-setup`

ローカル保管庫とリモート保管庫の間の同期をセットアップします。

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| オプション | 説明 |
| --- | --- |
| `--vault` | リモート保管庫のIDまたは名前（必須） |
| `--path` | ローカルディレクトリ（デフォルト：カレントディレクトリ） |
| `--password` | E2E暗号化のパスワード（省略時はプロンプトで入力） |
| `--device-name` | [[バージョン履歴|同期バージョン履歴]]に表示されるデバイス名 |
| `--config-dir` | [[設定フォルダ|設定ディレクトリ]]名（デフォルト：`.obsidian`） |

### `ob sync`

設定済みの保管庫の同期を実行します。

```
ob sync [--path <local-path>] [--continuous]
```

| オプション | 説明 |
| --- | --- |
| `--path` | ローカル保管庫のパス（デフォルト：カレントディレクトリ） |
| `--continuous` | 変更を監視して継続的に実行 |

### `ob sync-config`

保管庫の[[Sync設定と選択的同期|Sync設定]]を表示または変更します。オプションなしで実行すると、現在の設定が表示されます。

```
ob sync-config [--path <local-path>] [options]
```

| オプション                | 説明                                                                                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | ローカル保管庫のパス（デフォルト：カレントディレクトリ）                                                                                                                  |
| `--mode`              | 同期モード：`bidirectional`（デフォルト、双方向）、`pull-only`（ダウンロードのみ、ローカルの変更を無視）、または`mirror-remote`（ダウンロードのみ、ローカルの変更を元に戻す）                                                              |
| `--conflict-strategy` | `merge`または`conflict`                                                                                                                                                                                          |
| `--file-types`        | 同期する添付ファイルの種類：`image`、`audio`、`video`、`pdf`、`unsupported`（カンマ区切り、空でクリア）                                                                                                    |
| `--configs`           | 同期する設定カテゴリ：`app`、`appearance`、`appearance-data`、`hotkey`、`core-plugin`、`core-plugin-data`、`community-plugin`、`community-plugin-data`（カンマ区切り、空で設定の同期を無効化） |
| `--excluded-folders`  | 除外するフォルダ（カンマ区切り、空でクリア）                                                                                                                                                           |
| `--device-name`       | 同期バージョン履歴でこのクライアントを識別するためのデバイス名                                                                                                                |
| `--config-dir`        | 設定ディレクトリ名（デフォルト：`.obsidian`）                                                                                                                                                   |

### `ob sync-status`

保管庫の同期ステータスと設定を表示します。

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

保管庫の同期接続を切り、保存された認証情報を削除します。

```
ob sync-unlink [--path <local-path>]
```

## ネイティブモジュール

Obsidian Headlessには、WindowsおよびmacOSでファイルの作成日時（birthtime）を設定するためのビルド済みネイティブアドオンが含まれています。これにより、サーバーからファイルをダウンロードする際に、元の作成タイムスタンプが保持されます。

このアドオンはN-APIバージョン3をターゲットとしているため、コンパイル済みバイナリはABI安定であり、再コンパイルなしでNode.jsのバージョン間で動作します。

Linuxではbirthtimeがサポートされていないため、アドオンは含まれず、同期はアドオンなしで正常に動作します。

ビルド済みバイナリは以下のプラットフォーム向けに含まれています：

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
