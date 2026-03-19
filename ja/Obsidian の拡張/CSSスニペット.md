---
permalink: snippets
publish: true
mobile: true
description: 完全なテーマを作成せずにObsidianアプリの外観の一部を変更する方法を学びましょう。
aliases:
  - ガイド/カスタムスタイルの追加
  - 高度なトピック/CSSのカスタマイズ
---
[テーマを構築する](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)ことなく、Obsidianアプリの外観の様々な側面を変更する方法を学びましょう。

> [!tip] [[Obsidian Publishの概要|Obsidian Publish]]のCSSの扱い方について知りたい場合は、[[サイトのカスタマイズ]]を確認してください。

CSSはHTMLの見た目を制御する言語です。CSSスニペットを追加することで、見出しのサイズや色など、Obsidianのユーザーインターフェースの一部を変更できます。Obsidianには[CSS変数](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)があり、インターフェースを簡単にカスタマイズできます。

Obsidianは保管庫の[[設定フォルダ]]内にあるCSSスニペットを検索します。

## スニペットの追加

**デスクトップ** ![[lucide-monitor-check.svg#icon]]でCSSスニペットを追加するには、以下の手順に従ってください：

1. **[[設定]]**（ ![[lucide-settings.svg#icon]] ）を開きます。
2. **外観 → CSSスニペット**で、**スニペットフォルダを開く**（ ![[lucide-folder-open.svg#icon]] ）を選択します。
3. スニペットフォルダで、スニペットを含むCSSファイルを作成します。
4. Obsidianに戻り、**外観 → CSSスニペット**で、**スニペットをリロード**（ ![[lucide-refresh-cw.svg#icon]] ）を選択してリスト内のスニペットを確認します。
5. トグルをクリックしてスニペットを有効にします。

**モバイル/タブレット** ![[obsidian-icon-smartphone.svg#icon]]でCSSスニペットを追加するには、以下の手順に従ってください：

1. ファイルマネージャーを開き、保管庫を見つけます。保管庫のロケーションは、「保管庫を管理…」で保管庫をタップしてパスを確認できます。
2. [[設定フォルダ]]を開き、`snippets`フォルダがなければ作成します。
3. このフォルダにCSSスニペットを追加します。
4. Obsidianの**[[設定]]**（ ![[lucide-settings.svg#icon]] ）を開きます。
5. 左側で**外観**を選択します。
6. **CSSスニペット**セクションまでスクロールします。
7. **スニペットをリロード**（![[lucide-refresh-cw.svg#icon]]）をタップしてリストを更新します。
8. トグルをタップしてスニペットを有効にします。

あるいは、以下の方法も使えます：
- 同期サービスを使って変更を[[デバイス間でノートを同期する|同期]]する。
- コミュニティプラグインを使ってObsidian内からスニペットを作成する。

有効にすると、ObsidianはCSSスニペットの変更を自動的に検出し、ファイルを保存した際に適用します。

> [!tip] 変更を反映するためにObsidianを再起動する必要はありません。ただし、現在のテーマやノートの変更を確認するには、[[コマンドパレット]]のコマンドを使ってObsidianを保存せずにリロードする必要がある場合があります。

## Obsidian向けCSSの記述

Obsidianには、CSSの記述をより簡単かつ強力にするいくつかの方法が用意されています。

Obsidianの各部分を簡単に変更できる多数の[CSS変数](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)と、1つまたは複数のノートの外観を変更するための組み込みの[[プロパティ#プロパティタイプ|プロパティタイプ]]があります。

> [!example] 変数
> `headers.css`というファイルを作成し、以下の内容を記述すると、6つの[[基本的な書式構文#見出し|見出しレベル]]の色を虹色に変更できます：
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] CSSクラス
> カスタムCSSクラスの名前（またはCSSクラスのリスト）を、定義済みの[[プロパティ]] `cssclasses`に割り当てることで、1つまたは複数のノートの見た目を他のノートと異なるものにできます。
> 
> **CSS**：
> ```css
> .red-border img {
>    border-color: #ff0000;
> }
> ```
> 
> **YAML/プロパティ**：
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> `cssclasses`プロパティに`red-border`という値を含むすべてのノートで、画像が赤い枠線付きで表示されます。

CSSファイルが有効で正しくフォーマットされていることを確認するために、[CSS Validation Service](https://jigsaw.w3.org/css-validator/)などのツールで検証することをお勧めします。無効なCSSは機能しません。

## 詳細を確認

- CSSが初めての方は、Mozillaの[Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)をご覧ください。
- Obsidianのスタイリングに関する詳細情報は以下を参照してください：
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
