---
permalink: html
publish: true
mobile: true
description: ObsidianでHTMLを使用する方法（Markdownレンダリングの制限やHTMLブロックの要件を含む）について学びます。
aliases:
  - HTML content
---
Obsidianはノートを思い通りに表示したり、[[ウェブページの埋め込み|ウェブページを埋め込む]]ためにHTMLをサポートしています。ノート内でHTMLを許可することにはリスクが伴います。悪意のあるコードによる被害を防ぐため、Obsidianはノート内のHTMLを_サニタイズ_します。

> [!example] 
> `<script>`要素は通常、読み込み時にJavaScriptを実行することができます。ObsidianがHTMLをサニタイズしなければ、攻撃者はコンピュータから機密情報を抽出して送信するJavaScriptを含むテキストを貼り付けるようあなたを騙す可能性があります。

とはいえ、Markdown構文はすべてのスタイリングをサポートしているわけではないため、サニタイズされたHTMLを使用することで、ノートの品質をさらに向上させることができます。ここでは、HTMLのより一般的な使用方法をいくつか紹介します。

## HTMLの制限事項

Obsidianでは、ノート内でHTMLを使用する際に特定の制限があります：

### HTML内でMarkdownは使えない

ObsidianはHTML要素内のMarkdown構文をレンダリングしません。これはパフォーマンスの最適化と、大きなドキュメントを管理する際のパーサーの複雑さを低く保つための意図的な設計上の選択です。

例えば、以下は期待通りに動作しません：

```md
<div>
This **will not** be bold and this `will not` be code.
</div>
```

### HTMLブロックは自己完結している必要がある

HTMLブロックは完全であり、その中に空行を含むことはできません。空行があるとHTMLブロックが壊れます。

これは動作します：

```md
<table>
<tr>
<td>Content here</td>
</tr>
</table>
```

これは正しく動作しません：

```md
<table>

<tr>

<td>Content here</td>

</tr>

</table>
```

### HTML内でMarkdownが動作しているように見える場合

`<span>`や`<a>`などの一部のインラインHTMLタグは機能が限定されており、Markdownをレンダリングしているように見えることがありますが、実際にはそうではありません。MarkdownはHTMLのコンテキストの外で処理されています。

ObsidianがMarkdownをどのように処理するかの詳細については、[[Obsidian Flavored Markdown]]を参照してください。

## HTMLの一般的な使用方法

> [!info] `<iframe>`の使用についての詳細は[[ウェブページの埋め込み]]を参照してください。

### コメント

[[基本的な書式構文#コメント|Markdownコメント]]は、ノート内に非表示のコメントを追加する推奨方法です。しかし、[Pandoc](https://pandoc.org)などのMarkdownノートを変換する一部の方法では、Markdownコメントのサポートが限定的です。そのような場合は、代わりに`<!-- HTML Comment -->`を使用できます！

### 下線

ノート内のテキストにすばやく下線を引きたい場合は、`<u>Example</u>`を使って<u>下線付きテキスト</u>を作成できます。

### Span/Div

spanタグとdivタグは、[[CSSスニペット]]のカスタムクラスやカスタム定義のスタイリングを、選択したテキスト領域に適用するために使用できます。例えば、`<span style="font-family: cursive">your text</span>`を使うと、すばやく<span style="font-family: cursive">フォントを変更</span>できます。

## 取り消し線

<s>テキスト</s>に取り消し線を引きたいですか？`<s>this</s>`を使って取り消し線を引きましょう。
