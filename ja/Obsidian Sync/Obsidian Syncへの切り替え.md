---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 現在使用中の同期ソリューションからObsidian Syncへの移行方法を学びます。
---
現在使用中の同期ソリューションからObsidian Syncへの移行方法を学びます。

> [!warning] 同じファイルに複数の同期ソリューションを使用しないでください
> Obsidian Syncをクラウドストレージサービス（例：iCloud、Dropbox、OneDrive、Google Drive）と併用することは[[よくある質問#サードパーティの同期サービスとObsidian Syncを併用できますか？|推奨していません]]。競合が発生する可能性があるためです。ただし、クラウドストレージサービスは[[Obsidianファイルのバックアップ|バックアップ]]戦略の一部として活用できます。

## サードパーティの同期サービスやクラウドストレージから保管庫を移動する

保管庫が以下のいずれかの場所に保存されている場合、サードパーティのサービスによって同期されている可能性があります：

- **Windows**：`C:\Users\Username\Desktop` または `C:\Users\Username\Documents`
- **macOS**：`/users/username/Desktop` または `/users/username/Documents`
- **iOS**：ファイルアプリ内の **iCloud** フォルダ
- **その他**：同期サービス配下のフォルダ（例：`Drive/my-vault`、`Dropbox/my-vault`、`pSync/my-vault` など）

AndroidやLinuxではこの問題が発生しにくい傾向がありますが、これらのデバイスでも保管庫の場所を確認する価値はあります。

> [!tip] 現在のローカル保管庫がリモート保管庫に接続されている場合、Obsidianは保管庫が同期サービス内にあるかどうかを検出しようとします。該当する場合、Obsidian Syncの設定の上部にメッセージが表示されます。

同期サービスとの競合を避けるため、Obsidianの保管庫は以下の場所に保存することを推奨します：

- **Windows**：推奨される場所（優先順）：
    1. `D:\` またはCドライブやネットワークドライブ以外のドライブ
    2. `C:\Vaults`（C:\ドライブを使用する権限がある場合）
    3. `C:\Users\Username\Vaults`（C:\Users\Username内に保管庫を置く必要がある場合は、OneDriveがファイルを削除しないように設定されていることを確認してください。OneDriveは一般的に`Desktop`や`Documents`フォルダの外では積極的にファイルを管理しません。）
- **macOS**：`/users/username/vaults`
- **Linux**：ファイルシステムが多様なため、特定の推奨はありません。Obsidianが完全な読み取り/書き込みアクセス権を持ち、同期サービスがフォルダを管理していないことを確認してください。
- **iOS/iPadOS**：保管庫を **このiPhone内** または **このデバイス内** に保存してください。
- **Android**：デバイスの `Documents/` フォルダを使用してください。

## デスクトップ版Obsidianで保管庫を移動する

![[保管庫の管理#保管庫を別のフォルダに移動する]]

## モバイルで保管庫を移動する

モバイルデバイスでは、Obsidianはサンドボックス環境で動作するため、デスクトップのようにアプリ内で保管庫を移動することはできません。

### Android

Androidのファイルシステムはデバイスによって大きく異なりますが、基本的には手動で保管庫を移動する場合と同じ手順に従い、デバイス上の同期サービスから保管庫が除外されていることを確認してください。

### iOSおよびiPadOS

既存のiCloud保管庫をデバイスに移動するには、以下の手順に従ってください：

> [!note] 別のデバイスにすでにデータがあり、Obsidian Syncをセットアップ済みの場合は、代わりに[[Obsidian Syncのセットアップ#別のデバイスでリモート保管庫を同期する|Syncから新しいローカル保管庫をセットアップする]]ことを推奨します。

- 保管庫を[[Obsidianファイルのバックアップ|バックアップ]]します。
- デバイスに新しい保管庫を作成し、**iCloud Driveに保存**が無効になっていることを確認します。
- すべてのデバイスでObsidianアプリを強制終了し、Syncを停止します。
- iOS/iPadOSデバイスで**ファイル**アプリを開きます。
- **iCloud Drive → Obsidian** の保管庫フォルダを長押しし、**移動**を選択します。
- 保管庫を **このiPhone/デバイス内 → Obsidian** に移動し、表示されていることを確認します。
- **コピー**をタップします。
- **iCloud Drive → Obsidian** に戻り、古い保管庫フォルダを削除します。

Obsidianを再度開くと、保管庫にクラウドアイコンではなく保管庫アイコンが表示され、iCloud Driveに保存されていないことが確認できます。Obsidian Syncの設定内の警告メッセージも表示されなくなります。

## 次のステップ

- Obsidian Syncを始めたい場合は [[Obsidian Syncのセットアップ]]
- さらにサポートが必要な場合は [[Obsidian Syncのトラブルシューティング]]
