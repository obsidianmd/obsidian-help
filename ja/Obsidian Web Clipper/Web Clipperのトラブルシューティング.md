---
localized: 2026-03-19
permalink: web-clipper/troubleshoot
---
[[Obsidian Web Clipperの紹介|Web Clipper]]で問題が発生した場合は、[公式Discordチャンネル](https://discord.com/channels/686053708261228577/1285652864089198672)でヘルプを得ることができます。また、[GitHubリポジトリ](https://github.com/obsidianmd/obsidian-clipper)でバグを報告することもできます。

## 一般

### 一部のコンテンツが欠落する

デフォルトでは、Web Clipperはページからコンテンツをインテリジェントにキャプチャしようとします。ただし、すべてのウェブサイトで成功するとは限りません。

Web Clipperは[Defuddle](https://github.com/kepano/defuddle)を使用して、ページのメインコンテンツのみをキャプチャします。これにより、ヘッダー、フッター、その他の要素は除外されますが、保持したいコンテンツが過度に削除されてしまうことがあります。Defuddleに関する[バグ報告](https://github.com/kepano/defuddle)が可能です。

Web ClipperでDefuddleをバイパスするには、以下の方法を使用してください：

- テキストを選択するか、`Cmd/Ctrl+A`ですべてのテキストを選択します。
- [[ウェブページのハイライト|コンテンツをハイライト]]して、キャプチャしたい内容を正確に選択します。
- そのサイト用の[[Obsidian Web Clipper/テンプレート|カスタムテンプレート]]を使用します。

### Obsidianにコンテンツが表示されない

**Add to Obsidian**をクリックしてもObsidianにコンテンツが表示されない場合：

- Obsidianの[[ヘルプとサポート#コンソールログのキャプチャ|開発者コンソール]]でエラーを確認してください。
- Web Clipperの設定にある保管庫の名称が、Obsidianの*保管庫の名称*と正確に一致していることを確認してください。*保管庫のパスではありません*。
- フォルダ名が正しくフォーマットされていることを確認してください。

## Linux

#### Obsidianが開かない

- [[Obsidian URI]]プロトコルが[[Obsidian URI#Obsidian URIの登録|登録されている]]ことを確認してください。
- Firefoxを使用している場合は、[ブラウザの設定で登録](https://kb.mozillazine.org/Register_protocol)する必要があるかもしれません。

#### Obsidianは開くがファイル名のみが保存される

Obsidianがクリップボードにアクセスできない可能性があります。ブラウザからObsidianにデータを渡すには、クリップボードへのアクセスが必要です。設定によって、アプリのサンドボックス化やクリップボードの権限に影響が出ることがあります。

Waylandを使用している場合は、アプリがフォーカスされていないときにObsidianがクリップボードを読み取る権限を持っていることを確認してください。この設定は、HyprlandやSwayなどのタイリングウィンドウマネージャーにある場合があります。

Hyprlandを使用している場合：

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Swayを使用している場合：

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Flatpakを使用している場合は、[Obsidianの公式サポートバージョン](https://obsidian.md/download)を試してみてください。
- KDEを使用している場合は、**システム設定** → **ウィンドウ管理** → **ウィンドウルール**でObsidianがフォーカスを取得できるようにしてください。[[web-clipper-kde.png|スクリーンショットを参照]]。
- フォールバックとして、**Web Clipperの設定** → **一般**で**レガシーモード**に切り替えてみてください。これにより、クリップボードをバイパスしてURIから直接コンテンツを保存します。ただし、ブラウザやLinuxディストリビューションによって、クリップできる文字数が制限されることに注意してください。

## iOSおよびiPadOS

SafariでWeb Clipper拡張機能を有効にするには：

1. Safariを開き、ブラウザのURLバーにある一番左のボタン（下に線がある長方形のアイコン）をタップします。
2. **拡張機能を管理**をタップします。
3. 拡張機能のリストで**Obsidian Web Clipper**を有効にします。
4. メニューを閉じます。
5. 拡張機能を使用するには、URLバーの**パズルピースアイコンをタップ**します。

Web Clipperをすべてのウェブサイトで実行できるようにするには：

1. iOSの**[[設定]]** → **アプリ** → **Safari** → **拡張機能**に移動します。
2. **権限**ですべてのウェブサイトでの実行を許可します。

ObsidianがWeb Clipperのコンテンツを常に受信できるようにするには：

1. iOSの**[[設定]]** → **アプリ** → **Obsidian**に移動します。
2. **他のアプリからのペースト**を**許可**に設定します。
