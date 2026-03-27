---
permalink: publish/collaborate
publish: true
mobile: true
description: 了解如何與其他 Obsidian 使用者在您的 Obsidian Publish 網站上進行協作。
---
了解如何與其他 Obsidian 使用者在你的 [[Obsidian Publish 介紹|Obsidian Publish]] 網站上進行協作。透過將朋友和同事新增為協作者，他們可以將變動發佈到你的網站。

只有網站擁有者需要擁有有效的 Obsidian Publish 訂閱。協作者只需要一個 [Obsidian 帳戶](https://obsidian.md/account)。

> [!warning] 在將變動發佈到共享網站之前，請確保先[[#在協作者之間同步變動|在協作者之間同步變動]]。否則，你可能會覆寫其他協作者的變動。

## 將協作者新增至網站

1. 在[[功能區選單]]中，選擇**發佈變動內容** ![[lucide-send.svg#icon]]，或開啟[[命令面板]]並輸入 **Publish: Publish changes...**
2. 在**發佈變動內容**對話框中，點擊**變更網站選項** ![[lucide-cog.svg#icon]]。
3. 在**網站協作**旁邊，選擇**管理**。
4. 在**邀請使用者**中，輸入協作者的電子郵件。
5. 選擇**新增**。

## 從網站移除協作者

1. 在[[功能區選單]]中，選擇**發佈變動內容** ![[lucide-send.svg#icon]]，或開啟[[命令面板]]並輸入 **Publish: Publish changes...**
2. 在**發佈變動內容**對話框中，點擊**變更網站選項** ![[lucide-cog.svg#icon]]。
3. 在**網站協作**旁邊，選擇**管理**。
4. 在你要移除的協作者旁邊，選擇**移除使用者** ![[lucide-x.svg#icon]]。

## 在協作者之間同步變動

Obsidian Publish 不會自動在本機保管庫之間同步已發佈的變動。協作者需要手動同步來自其他協作者的變動。

若要使用線上網站的變動來更新本機筆記：

1. 在[[功能區選單]]中，選擇**發佈變動內容** ![[lucide-send.svg#icon]]，或開啟[[命令面板]]並輸入 **Publish: Publish changes...**
2. 右鍵點擊或長按你要同步的變動，然後選擇**使用線上版本**。**這將會覆寫你本機保管庫中的筆記。**

> [!tip] 建議你使用其他工具在保管庫之間同步變動，例如 [[Obsidian Sync 簡介|Obsidian Sync]] 或 [git](https://git-scm.com/)。

## 權限

下表列出了擁有者和協作者可用的網站權限：

| 操作                             | 協作者 | 擁有者 |
|------------------------------------|:------------:|:-----:|
| 發佈新頁面                  | ✓            | ✓     |
| 發佈已發佈頁面的變動 | ✓            | ✓     |
| 取消發佈頁面                    | ✓            | ✓     |
| 設定網站選項             |              | ✓     |
| 管理權限                 |              | ✓     |
