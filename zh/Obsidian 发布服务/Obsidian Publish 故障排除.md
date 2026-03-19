---
localized: 2026-03-19T00:00:00.000Z
permalink: publish/troubleshoot
publish: true
mobile: true
description: 此页面详细介绍了使用 Obsidian Publish 时可能遇到的一些常见问题
aliases:
  - Obsidian 发布服务/Troubleshoot Obsidian Publish
  - Troubleshoot Obsidian Publish
---
此页面列出了使用 [[发布服务简介|Obsidian Publish]] 时可能遇到的常见问题及解决方法。

请务必先查阅[[发布媒体文件]]和[[发布功能展望|发布功能展望]]。

## 常规

### 发布笔记

**尝试发布笔记时收到哈希错误。**

你是否正在使用某个会在更新时修改文件修改时间的[[第三方插件|社区插件]]？如果是，该插件可能与 Publish 冲突。请向插件开发者提交错误报告以解决此问题。

**我收到了一个奇怪的网络错误，而且我的 Publish 站点非常大。**

这可能需要我们检查你的数据库。请[[帮助与支持#联系 Obsidian 支持|联系 Obsidian 支持]]以获取帮助。

## CSS 和主题

**我在[[设置文件夹]]中的 CSS 在 Publish 上不起作用，为什么？**

Publish 不会读取设置文件夹中的内容。你需要在发布仓库的根目录中创建一个 `publish.css` 文件。你可以在[[自定义网站界面]]中了解更多信息。

**我的 CSS 在 Publish 上的效果与在应用中看到的不同，为什么？**

Obsidian Publish 的 CSS 与应用中的并不完全相同。我们建议从头开始[专门为 Publish 开发 CSS 和主题](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes)。

一般来说，在[[编辑与预览笔记#阅读视图|阅读视图]]中有效的样式很大概率在 Publish 上也能正常工作。
