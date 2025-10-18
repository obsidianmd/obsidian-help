---
aliases:
  - Search Engine Optimization
  - 搜索引擎优化
---
[[发布服务简介|Obsidian 发布服务]] 站点自动为搜索引擎与 [[社交媒体链接预览|社交媒体分享卡片]] 优化。你也可以自定义页面的摘要、永久链接和图像等元数据。

你还可以在 [[管理网站]] 拒绝搜索引擎索引。

### Google Search Console

若要跟踪 Google 的 SEO，请在 [Google Search Console](https://search.google.com/search-console) 注册你的网站。你也可以遵循我们的推荐步骤以 [[启用谷歌分析]]。

### 网站地图

你的发布服务网站的网站地图在 `/sitemap.xml` 可用，例如：  
https://help.obsidian.md/sitemap.xml

网站地图同样作为 RSS 源在 `/rss.xml` 可用：  
https://help.obsidian.md/rss.xml

### 永久链接

考虑使用 [[永久链接]] 来定义你网站上的永久链接。

### 元数据

页面元数据可以通过 [[属性]] 来自定义，这对 [[社交媒体链接预览|社交媒体分享卡片]] 很有用。

| 属性            | 描述                                     |
| ------------- | -------------------------------------- |
| `publish`     | 参考 [[发布笔记与取消发布#自动加入发布队列\|自动选择要发布的笔记]]。 |
| `permalink`   | 参考 [[发布笔记与取消发布#永久链接\|永久链接]]。           |
| `description` | 参考 [[社交媒体链接预览#摘要\|摘要]]。                |
| `image`       | 参考 [[社交媒体链接预览#图片\|图片]]。                |
| `cover`       | 参考 [[社交媒体链接预览#图片\|图片]]。                |
