---
localized: 2026-03-19
permalink: publish/troubleshoot
publish: true
mobile: true
description: このページでは、Obsidian Publishの使用時に発生する可能性のある一般的な問題について説明します
---
このページでは、[[Obsidian Publishの概要|Obsidian Publish]]で発生する可能性のある一般的な問題とその対処方法を記載しています。

まず[[メディアファイル]]と[[Publishの制限事項|Publishの制限事項]]を確認してください。

## 一般

### ノートの公開

**ノートを公開しようとするとハッシュエラーが発生します。**

ファイルの更新時に変更日時を編集する[[コミュニティプラグイン|コミュニティプラグイン]]を使用していませんか？そのようなプラグインがPublishと競合している可能性があります。問題を解決するために、プラグインの開発者にバグレポートを提出してください。

**非常に大きなPublishサイトがあり、奇妙なネットワークエラーが発生しています。**

データベースの調査が必要な可能性があります。[[ヘルプとサポート#Obsidianサポートへの連絡|Obsidianサポートにお問い合わせ]]ください。

## CSSとテーマ

**[[設定フォルダ]]内のCSSがPublishで機能しません。なぜですか？**

Publishは設定フォルダを読み取りません。代わりに、公開用保管庫のトップレベルディレクトリに`publish.css`ファイルを作成する必要があります。詳細は[[サイトのカスタマイズ]]で確認できます。

**PublishでのCSSの見た目がアプリとは異なります。なぜですか？**

Obsidian PublishのCSSはアプリケーションのものとまったく同じではありません。Publish専用のCSSやテーマをゼロから[開発する](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes)ことをお勧めします。

_一般_的に、[[ビューと編集モード#リーディングビュー|リーディングビュー]]で機能するものは、Publishでも機能する可能性が高いです。
