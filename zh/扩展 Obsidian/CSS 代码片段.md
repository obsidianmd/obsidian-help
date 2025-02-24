---
aliases:
  - CSS snippets
---

CSS 代码片段可以让你快速修改 Obsidian 的外观，而无需[开发一个主题](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)。

CSS 是用来定义 HTML 文档外观的语言。通过添加 CSS 代码片段，你可以重新定义 Obsidian 用户界面的各个部分，比如标题的大小和颜色。Obsidian 已经预先设置好了多个[CSS 变量](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables)，你可以利用这些变量轻松定制界面的各个部分。

Obsidian 会在仓库配置文件夹中查找 CSS 代码片段。

要添加 CSS 代码片段，请按照以下步骤操作：

1. 打开**设置**。
2. 在**外观 → CSS 代码片段**下，选择**打开片段文件夹**（文件夹图标）。
3. 在代码片段文件夹中，创建一个包含你的代码片段的 CSS 文件。
4. 在 Obsidian 中，进入**外观 → CSS 代码片段**，选择**重新加载代码片段**（刷新图标）以在列表中看到代码片段。

Obsidian 会自动检测 CSS 代码片段的更改，并在保存代码片段时应用这些更改。无需重新启动 Obsidian 片段即可生效。

> [!tip] 示例：修改文本颜色
> 例如，可以创建一个名为 `snippet.css` 的文件并在其中加入以下代码。该片段可以将文本颜色更改为红色：
>
> ```css
> body {
>   --text-normal: red;
> }
> ```

## 了解更多

- 如果你对 CSS 不熟悉，可以参考 Mozilla 的[学习使用 CSS 对 HTML 进行样式设置](https://developer.mozilla.org/en-US/docs/Learn/CSS)。
- 如果你想获取更多关于 Obsidian 样式的信息，请参考[关于样式](https://docs.obsidian.md/Reference/CSS+variables/About+styling)。