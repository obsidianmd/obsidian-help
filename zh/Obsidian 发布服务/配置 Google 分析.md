[Google 分析](https://analytics.google.com) 是一个允许你追踪网站流量的服务。本页面用于说明，如何为基于 [[Obsidian 发布服务介绍|Obsidian 发布服务]] 的网站启用 Google 分析。

> [!important] 重要提示
> 在你启用 Google 分析之前，确保你当地的法律法规允许你对访客进行追踪。

## 必备条件

要为 Obsidian 启用 Google 分析，你必须：

- 为你的 Obsidian 发布服务站点配置一个 [[设置自定义域名|自定义域名]]。

### 配置 Google 分析

为基于 Obsidian 发布服务的站点启用 Google 分析：

1. 在工具栏，也就是软件的左边栏，点击 **发布更改**（纸飞机图标）。
2. 在 **发布更改** 详情中，点击 **更改网站设置**（齿轮图标）。
3. 在 **Google 分析跟踪代码** 选框中，输入你的追踪代码。

## 排错

- 关闭浏览器的所有广告拦截插件，例如 uBlock Origin，以确认你的站点启用了 Google 分析，否则它们可能会阻碍追踪脚本的运行。

- 使用自定义 JavaScript 来追加你自己的脚本，以从 Google 分析切换为 Google Tag Manager。