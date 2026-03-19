---
localized: 2026-03-19
permalink: web-clipper/troubleshoot
aliases:
  - Obsidian Web Clipper/Troubleshoot Web Clipper
  - Troubleshoot Web Clipper
---
如果你在使用 [[Obsidian Web Clipper 简介|Web Clipper]] 时遇到问题，可以通过[官方 Discord 频道](https://discord.com/channels/686053708261228577/1285652864089198672)获取帮助。你也可以在 [GitHub 仓库](https://github.com/obsidianmd/obsidian-clipper)中报告问题。

## 常规

### 部分内容缺失

默认情况下，Web Clipper 会尝试智能抓取页面内容。但它并不能在所有网站上都成功做到这一点。

Web Clipper 使用 [Defuddle](https://github.com/kepano/defuddle) 来仅抓取页面的主要内容。这会排除页眉、页脚和其他元素，但有时它可能过于保守，移除了你想要保留的内容。你可以向 Defuddle [报告问题](https://github.com/kepano/defuddle)。

要在 Web Clipper 中绕过 Defuddle，请使用以下方法：

- 选中文本，或使用 `Cmd/Ctrl+A` 选中所有文本。
- [[高亮网页|高亮内容]]以精确选择你想要抓取的内容。
- 为该网站使用[[Obsidian Web Clipper/模板|自定义模板]]。

### Obsidian 中没有出现任何内容

如果你点击**添加到 Obsidian**后在 Obsidian 中看不到任何内容：

- 检查 Obsidian [[帮助与支持#获取控制台日志|开发者控制台]]中是否有错误。
- 检查 Web Clipper 设置中的仓库名称是否与 Obsidian 中的*仓库名称*完全一致，注意不是仓库路径。
- 检查文件夹名称格式是否正确。

## Linux

#### Obsidian 无法打开

- 确保 [[Obsidian URI]] 协议[[Obsidian URI#注册 Obsidian URI|已注册]]。
- 如果你使用 Firefox，可能需要[在浏览器设置中注册协议](https://kb.mozillazine.org/Register_protocol)。

#### Obsidian 打开了但只保存了文件名

这很可能是因为 Obsidian 无法访问你的剪贴板。剪贴板访问权限是将数据从浏览器传递到 Obsidian 所必需的。你的系统配置可能会影响应用的沙箱机制和剪贴板权限。

如果你使用 Wayland，请确保 Obsidian 在应用未获得焦点时仍有权限读取剪贴板。此偏好设置可能在你的平铺窗口管理器中，例如 Hyprland 或 Sway。

如果你使用 Hyprland：

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

如果你使用 Sway：

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- 如果你使用 Flatpak，请考虑尝试[官方支持的 Obsidian 版本](https://obsidian.md/download)。
- 如果你使用 KDE，请前往**系统设置** → **窗口管理** → **窗口规则**，允许 Obsidian 获取焦点，[[web-clipper-kde.png|查看截图]]。
- 作为备选方案，尝试在 **Web Clipper 设置** → **常规**中切换到**旧版模式**。这将绕过剪贴板，通过 URI 直接保存内容。请注意，这将根据你的浏览器和 Linux 发行版限制可抓取的字符数量。

## iOS 和 iPadOS

要为 Safari 启用 Web Clipper 扩展：

1. 打开 Safari，点击浏览器地址栏最左侧的按钮，它看起来像一个下方带有横线的矩形。
2. 点击**管理扩展**。
3. 在扩展列表中启用 **Obsidian Web Clipper**。
4. 退出菜单。
5. 要使用扩展，请**点击地址栏中的拼图图标**。

要允许 Web Clipper 在所有网站上运行：

1. 前往 iOS **[[设置文件夹|设置]]** → **App** → **Safari** → **扩展**。
2. 在**权限**下允许它在所有网站上运行。

要允许 Obsidian 始终接收 Web Clipper 内容：

1. 前往 iOS **[[设置文件夹|设置]]** → **App** → **Obsidian**。
2. 将**从其他 App 粘贴**设置为**允许**。
