Obsidian Sync™ 是用以同步多個裝置上的儲存庫中的筆記的付費服務。

### Obsidian Sync 如何運作

非常簡單，一旦您將不同裝置的本機儲存庫都連接上相同的遠端儲存庫後，在不同裝置間的修改都會被自動同步到每個儲存庫中。除了您指定要排除的資料夾及檔案。

### 功能

目前，Obsidian Sync 的功能有：

- 端對端加密。
- 在 Obsidian 中查看版本歷史。
- 查看並復原被刪除的檔案。
- 同步設定、主題、CSS 片段、擴充功能及其設定。
- Selective sync。
	- Exclude certain folders。
	- Toggle syncing for images, audio, video, PDF, and unsupported files。
- 在多個遠端儲存庫間切換。

In the future, we'll improve Obsidian Sync with:

- 分享儲存庫


### 啟用 Obsidian Sync 擴充功能

You can enable Obsidian Sync by enabling the "Sync" plugin under Settings -> Core plugins。

### Setting up remote vaults

警告：We do not recommend using third party sync services to sync the same vault with Obsidian Sync。 [[#Third party sync|More about this later]]。

To start syncing, first you need to create a remote vault that stores your encrypted data。

To do that, go to Setting -> Sync -> Pick remote vault -> Choose -> Create new vault。

After creating it, you can immediately connect to the vault by clicking on the "Connect" button next to it。

You can choose to either start syncing immediately after connecting, or choose folders to ignore。

##### 設定加密金鑰

By default, you need to set an encryption password for your vault。 This password is used to encrypt and decrypt your data and is extremely important。

You'll be asked for the password any time you setup sync with an encrypted vault。 ==If you forget or lose the password, your data will remain encrypted and unusable forever。 We are unable to recover your password or any encrypted data for you。== Your local files are not affected。

You can also choose to turn off the "Custom end-to-end password" option to leave managing the encryption key to us。 This is still fairly secure and provides the convenience of not having to remember a password。

### 檢查同步狀態

連接到遠端儲存庫後，您可以在下方的狀態欄查看目前的同步狀態。您可以將游標停在狀態圖示上以顯示詳細資訊。

點擊狀態圖示將開啟同步設定。

### 版本歷史

As you edit your notes, versions are saved approximately every 10 seconds。 ==Version history is only available for notes, not attachments。==

You can right click a file in the file explorer pane to see its version history。 This option is also available in the more options menu。

After selecting a version in the left column in the version history screen, you can restore the file to this version by clicking on the "Restore" button。

### 已刪除的檔案

After you delete a file, you can view it in Setting -> Sync -> Deleted files -> View。

Clicking on a deleted file will open its version history。 You can then choose to restore the file back to a previous version。

### Selective sync

You can selectively sync files by folder or file type。 ==Selective sync only applies to future changes。 Any files that have already been uploaded will not be deleted even if you choose to ignore them。 Please be sure to configure it before starting the sync process。==

##### 排除資料夾

You can uncheck folders in Settings -> Sync -> Excluded folders -> Manage to prevent them from getting synced。

Excluded folders will be ignored when both uploading and download changes。

#### 檔案類型

You can toggle sync for images, audio, video, PDFs, and unsupported files under Settings -> Sync -> Selective sync。

### 同步設定

In addition to your notes and attachments, Obsidian Sync offers individual toggles to synchronize these files:

- 主程式設定，包含編輯器設定、檔案及連結設定...等。
- 外觀設定，包含深色模式、選擇的主題及啟用的片段。
- 已下載的主題及片段。
- 快捷鍵。
- Which core plugins are enabled。
- Core plugin settings。
- Which community plugins are enabled。
- Downloaded/installed community plugins, and their settings。

You can choose which ones to synchronize with your remote vault to best suite your use case of Obsidian。

Keep in mind that Obsidian does not apply your settings until you restart the application, or reload the vault。 This normally isn't a problem on mobile since the app restarts often, but you may notice that settings you set on one desktop device is "synced" to another device, but doesn't take effect until the next restart。

Sync will respect your selection of the settings folder override in case you've set it to a folder other than `。obsidian`。 You can take advantage of this to create different profiles in your remote vault to sync your settings。 A common use case, for example, is to use a different profile for mobile devices vs desktop devices。

#### Settings version history

If something goes wrong, and you lost some of your settings, you can always revert the affected settings file through the "Settings version history" section in Sync。

### 第三方同步

If you are using Obsidian Sync, we do not recommend using third party sync services like Dropbox, Google Drive, OneDrive, or iCloud to sync the same vault between the same devices using Obsidian Sync。 Doing so may cause conflicts, duplicate files, or in the worst case, could lead to corrupted files。

If you do setup Obsidian Sync and a third party sync service to sync a vault between two devices, then the following will happen:
- If Obsidian Sync "wins" the race and syncs your file first, then your third party sync service will generate a "conflicted copy"。
- If your third party sync service "wins" the race and syncs your file first, then Obsidian Sync will attempt to merge the two slightly different versions, often causing the last few characters you just typed to be rolled back。

If you wish to maintain a backup of your vault using a third party sync service, you can still do so by setting up your sync provider on your primary single device, but not on your secondary devices。 This will ensure that your third party sync service does not "race" with Obsidian Sync。

### 常見問題

##### 甚麼是端對端加密？

End-to-end encryption means the data is encrypted from the moment it leaves your device, and can only be decrypted using your encryption key once it's back on one of your devices。

We do not have the capability of reading your data, nor do any potential eavesdroppers, such as your internet service provider。

In the rare case of a complete server breach, your data will remain encrypted, and nobody will have the ability to decrypt your files without knowing your password。

##### 我可以同時擁有多少個遠端儲存庫？

每個使用 Obsidian Sync 的帳號可以擁有 5 個遠端儲存庫。

##### 版本歷史會保留多久？

版本歷史將保留一年。

##### 遠端儲存庫的容量是多少？

目前，每個遠端儲存庫可以存放 4 GB 的資料，包括版本歷史。

##### 我的檔案會在我的硬碟上加密嗎？

不會，您的檔案在硬碟上仍是純文字。如果您希望在您的電腦上加密檔案，以防止其他人查看，您需要使用硬碟加密服務，例如 BitLocker。

##### 訂閱過期後，我的資料會保留多久？

在您的訂閱到期後，我們會將您的資料保留一個月，包括版本歷史。

只要您在這一個月的期限內續訂，資料即可繼續保留。

##### 我可以使用 Obsidian Sync 來備份嗎？

Obsidian Sync is designed as a data synchronization service, rather than a backup service。

With version history, it does provide some backup features, however we still recommend having additional backup measures。

Obsidian Sync is currently in beta testing, so we strongly recommend having backups, in case of software bugs and glitches。

##### Should I pick my own encryption password?

Pick your password if you require the highest level of security and privacy。 This guarantees that anyone who doesn't know your password will never be able to read your notes。

Letting us manage your encryption key is more convenient, and you do not risk forgetting or losing your password。

Your local vault is not affected by this option。 If you properly backup your local vault, this may not be a problem for you。

##### 端對端加密安全嗎？

我們使用業界標準的 AES-256 來為您的資料加密。AES-256 是軍事等級的加密標準，廣泛用於網路銀行中。

如果您有興趣的話，以下是詳細資料：

- 密鑰派生函數：scrypt (加鹽)
- 加密演算法：AES-256 (GCM)

##### 為甚麼我遇到 `vault limit exceeded` 錯誤？

Each vault using Obsidian Sync has a maximum size of 4gb。 This error indicates your vault has exceeded that limit in size。 Don't forget: attachments and version history contributes to the maximum, so you may exceed your 4gb limit even if your vault's actual size is less than 4gb。 

If you see this error, Obsidian can help you identify and purge large files from the Vault。 Go to the Obsidian Sync settings in Preferences → Sync and look for the "Vault size over limit" options。 
