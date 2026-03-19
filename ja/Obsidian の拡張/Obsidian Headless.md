---
localized: 2026-03-19
permalink: headless
description: Obsidian Headlessは、Obsidianサービス用のコマンドラインクライアントです。デスクトップアプリなしで保管庫を同期できます。
---
Obsidian Headless **（オープンベータ）** は、Obsidianサービス用のヘッドレスクライアントです。[[Obsidian Syncの紹介|Obsidian Sync]]の速度、プライバシー、エンドツーエンド暗号化のメリットをそのまま活かしながら、デスクトップアプリなしでコマンドラインから[[ヘッドレスSync|保管庫を同期]]できます。

Obsidian Headlessの活用例：

- リモートバックアップの自動化。
- ウェブサイト公開の自動化。
- コンピュータ全体へのアクセスを与えずに、エージェントツールに保管庫へのアクセスを提供。
- チーム共有の保管庫をサーバーに同期し、他のツールにデータを供給。
- スケジュールされた自動化の実行（例：デイリーノートの週次サマリーへの集約、自動タグ付けなど）。

> [!info] Obsidian HeadlessとObsidian CLIの違い
> [[Obsidian CLI]]はターミナルからObsidianデスクトップアプリを操作します。Obsidian Headlessはデスクトップアプリ不要で独立して動作するスタンドアロンクライアントです。

## インストール

Obsidian Headless **（オープンベータ）** にはNode.js 22以降が必要です。[npm](https://www.npmjs.com/package/obsidian-headless)からインストールしてください：

```shell
npm install -g obsidian-headless
```

## 認証

### ログイン

```shell
ob login
```

すでにログイン済みの場合、`ob login`はアカウント情報を表示します。アカウントを切り替えるには、`--email`や`--password`を指定して再度ログインしてください。

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

すべてのオプションは省略時に対話形式で入力できます。メールとパスワードはプロンプトで求められ、アカウントで2FAが有効な場合は自動的に要求されます。

ログアウトして保存された認証情報をクリアするには：

```shell
ob logout
```

## サービス

- [[ヘッドレスSync]]：デスクトップアプリなしでコマンドラインから[[Obsidian Syncの紹介|Obsidian Sync]]を使用できます。
