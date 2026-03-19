---
localized: 2026-03-19T00:00:00.000Z
permalink: publish/seo
aliases:
  - Obsidian 发布服务/SEO
---
[[发布服务简介|Obsidian Publish]] 网站会自动针对搜索引擎和[[自定义分享链接|社交分享卡片]]进行优化。你还可以通过描述、永久链接和图片来自定义页面元数据。

请注意，你可以在[[管理网站#网站设置|网站设置]]中禁止搜索引擎索引。

### Google Search Console

要通过 Google 跟踪 SEO，请在 [Google Search Console](https://search.google.com/search-console) 上注册你的网站。你也可以按照我们推荐的步骤来[[启用谷歌分析|设置 Google Analytics]]。

### 站点地图

你的 Publish 网站的站点地图可通过 `/sitemap.xml` 访问，例如：
https://help.obsidian.md/sitemap.xml

站点地图也可以通过 `/rss.xml` 以 RSS 订阅源的形式访问：
https://help.obsidian.md/rss.xml

### 永久链接

建议使用 [[永久链接]] 来为你的网站定义永久 URL。

### 元数据

页面元数据可以通过[[属性#Obsidian Publish 的属性|属性]]进行自定义，这对于[[自定义分享链接|社交分享卡片]]非常有用。

| 属性            | 描述                                                                                                              |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| `publish`     | 参见[[发布笔记与取消发布#自动选择要发布的笔记\|自动选择要发布的笔记]]。 |
| `permalink`   | 参见 [[Permalinks\|永久链接]]。                                                                                   |
| `description` | 参见[[自定义分享链接#描述\|描述]]。                                                      |
| `image`       | 参见[[自定义分享链接#图片\|图片]]。                                                                  |
| `cover`       | 参见[[自定义分享链接#图片\|图片]]。                                                                  |
