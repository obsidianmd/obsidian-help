---
aliases: front matter, フロントマター
---

フロントマターとして知られるYAMLはObsidianにおける5つのレベルのメタデータを扱うようにデザインされています。

フロントマターとはファイルの先頭行から始まるプレーンテキストによる属性のセクションです。フロントマターはマークダウンファイルにメタデータを追加する最もポピュラーな方法の一つであり、JekyllやHugo、Gatsbyといった静的ジェネレーターによって普及しました。

YAMLブロックにはObsidianや他のアプリによって認識できるように**三つのダッシュ**が必要です。==これはまた、ファイルの一番上に置かれる必要があります。==

例:

```
---
key: value
key2: value2
key3: [one, two, three]
key4:
- four
- five
- six
---
```

v0.12.12の時点において、以下の4つのキーがネイティブサポートの対象です:
- `tags` ([[タグの操作|詳細情報]])
- `aliases` ([[ノートにエイリアスを追加する|詳細情報]])
- `cssclass`
- `publish`([[パブリッシュ#パブリッシュのYAMLサポート|詳細情報]])

Obsidianは開発途中であるため、これらの機能に対してプラグインデベロッパーが更にアクセスしやすく、よりユーザーフレンドリーなものとして今後発展させていく予定です。
