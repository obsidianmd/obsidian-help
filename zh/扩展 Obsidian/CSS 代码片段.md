---
aliases:
  - CSS snippets
  - 扩展 Obsidian/CSS 代码片段
permalink: snippets
publish: true
mobile: true
description: 学习如何在不创建完整主题的情况下更改 Obsidian 应用的外观。
---
学习如何在无需[构建主题](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)的情况下修改 Obsidian 应用的外观。

> [!tip] 如果你需要关于 [[发布服务简介|Obsidian Publish]] 的 CSS 处理指南，请务必查看[[自定义网站界面]]。

CSS 是一种控制 HTML 外观的语言。通过添加 CSS 代码片段，你可以更改 Obsidian 用户界面的各个部分，例如标题的大小和颜色。Obsidian 提供了 [CSS 变量](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)来帮助你轻松自定义界面。

Obsidian 在仓库的[[设置文件夹]]中查找 CSS 代码片段。

## 添加代码片段

要在**桌面端** ![[lucide-monitor-check.svg#icon]] 添加 CSS 代码片段，请按照以下步骤操作：

1. 打开**[[设置]]**（ ![[lucide-settings.svg#icon]] ）。
2. 在**外观 → CSS 代码片段**下，选择**打开代码片段文件夹**（ ![[lucide-folder-open.svg#icon]] ）。
3. 在代码片段文件夹中，创建一个包含你的代码片段的 CSS 文件。
4. 在 Obsidian 中，在**外观 → CSS 代码片段**下，选择**重新加载代码片段**（ ![[lucide-refresh-cw.svg#icon]] ）以在列表中查看该代码片段。
5. 点击开关启用代码片段。

要在**移动端/平板端** ![[obsidian-icon-smartphone.svg#icon]] 添加 CSS 代码片段，可以按照以下步骤操作：

1. 打开文件管理器并找到你的仓库。你可以在"管理仓库…"中点击你的仓库并查看路径来确认仓库位置。
2. 打开[[设置文件夹]]，如果不存在 `snippets` 文件夹则创建一个。
3. 将你的 CSS 代码片段添加到此文件夹中。
4. 打开 Obsidian 的**[[设置]]**（ ![[lucide-settings.svg#icon]] ）。
5. 选择左侧的**外观**。
6. 向下滚动到 **CSS 代码片段**部分。
7. 点击**重新加载代码片段**（![[lucide-refresh-cw.svg#icon]]）以刷新列表。
8. 点击开关启用代码片段。

或者，你也可以
- 使用你的同步服务来[[同步笔记|同步]]任何更改。
- 使用社区插件在 Obsidian 内部创建代码片段。

启用后，Obsidian 会自动检测 CSS 代码片段的更改，并在你保存文件时应用它们。

> [!tip] 你无需重启 Obsidian 即可使更改生效。但是，你可能需要使用[[命令面板]]中的命令来重新加载 Obsidian（不保存），以查看当前主题或笔记中的更改。

## 为 Obsidian 编写 CSS

Obsidian 提供了多种方法，使编写 CSS 更加简便和强大。

它拥有大量 [CSS 变量](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)，可以轻松修改 Obsidian 的各个部分，还有一个内置的[[属性#属性类型|属性类型]]来更改一个或多个笔记的外观。

> [!example] 变量
> 创建一个名为 `headers.css` 的文件，包含以下内容，可以将六个[[基本格式语法#标题|标题级别]]的颜色更改为彩虹色：
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

> [!example] CSS 类
> 将自定义 CSS 类的名称（或 CSS 类列表）分配给预定义的[[属性]] `cssclasses`，使一个或多个笔记的外观与其他笔记不同。
> 
> **CSS**：
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/属性**：
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> 在每个 `cssclasses` 属性中包含 `red-border` 值的笔记中，图片将显示红色边框。

为确保 CSS 文件有效且格式正确，我们建议使用 [CSS 验证服务](https://jigsaw.w3.org/css-validator/)等工具进行验证，因为无效的 CSS 将无法生效。

## 了解更多

- 如果你是 CSS 新手，请查看 Mozilla 的[学习使用 CSS 为 HTML 设置样式](https://developer.mozilla.org/en-US/docs/Learn/CSS)。
- 有关 Obsidian 样式的更多信息，请参阅：
  - [关于样式](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [构建主题](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [构建 Publish 主题](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS 检查器工作流](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
