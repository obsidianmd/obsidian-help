---
permalink: plugins/format-converter
publish: true
mobile: true
description: Markdownフォーマットインポーターは、他のアプリケーションのMarkdownをObsidian形式に変換できるコアプラグインです。
aliases:
  - プラグイン/Markdownフォーマットインポーター
  - プラグイン/フォーマットコンバーター
---
Markdownフォーマットインポーターは、[[プロパティ#非推奨のプロパティ|非推奨のプロパティフォーマット]]をObsidianで使用される現在のフォーマットに移行します。

> [!warning] 保管庫をバックアップしてください
> 変換は保管庫全体に適用されます。開始する前に[[Obsidianファイルのバックアップ]]を行ってください。

ノート内のプロパティを変換するには：

1. [[コマンドパレット]]を開きます。
2. **Markdownフォーマットインポーター: フロントマターの移行**を選択します。
3. **変換を開始する**を選択します。

## 対応プロパティフォーマット

インポーターは、非推奨のフォーマットからエイリアス、タグ、CSSクラスを更新します：

**エイリアス**

```yaml
# 変換前

alias: My Note Title

# 変換後

aliases:
  - My Note Title
```

**タグ**

```yaml
# 変換前

tag: project, important

# 変換後

tags:
  - project
  - important
```

**CSSクラス**

```yaml
# 変換前

cssclass: custom-style

# 変換後

cssclasses:
  - custom-style
```
