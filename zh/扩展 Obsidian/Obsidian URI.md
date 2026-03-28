---
aliases:
  - Obsidian URI
  - 扩展 Obsidian/Obsidian URI
permalink: uri
---
Obsidian URI 是 Obsidian 支持的自定义 URI 协议，可以让你触发各种操作，例如打开笔记或创建笔记。Obsidian URI 使自动化和跨应用工作流成为可能。

## URI 格式

Obsidian URI 使用以下格式：

```
obsidian://action?param1=value&param2=value
```

`action` 参数是你想要执行的操作。可用的操作包括：

- `open` 打开笔记。
- `new` 创建笔记或向已有笔记追加内容。
- `daily` 创建或打开日记。
- `unique` 创建新的唯一笔记。
- `search` 打开搜索。
- `choose-vault` 打开仓库管理器。

> [!warning] 编码
> 请确保你的值已正确进行 URI 编码。例如，正斜杠字符 `/` 必须编码为 `%2F`，空格字符必须编码为 `%20`。
> 
> 这一点尤为重要，因为未正确编码的"保留"字符可能会导致 URI 解析出错。[详见此处](https://en.wikipedia.org/wiki/Percent-encoding)。

## 打开笔记

`open` 操作用于打开一个 Obsidian 仓库，或打开该仓库中的文件。

### 示例

- `obsidian://open?vault=my%20vault`
  这将打开名为 `my vault` 的仓库。如果该仓库已打开，则聚焦到该窗口。
- `obsidian://open?vault=ef6ca3e3b524d22f`
  这将打开 ID 为 `ef6ca3e3b524d22f` 的仓库。
- `obsidian://open?vault=my%20vault&file=my%20note`
  这将打开仓库 `my vault` 中的笔记 `my note.md`（假设该文件存在）。
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  这将查找包含路径 `/home/user/my vault/path/to/my note` 的仓库。然后将路径的剩余部分传递给 `file` 参数。例如，如果仓库位于 `/home/user/my vault`，则等同于将 `file` 参数设置为 `path/to/my note`。


> [!tip] 打开标题或块
> 通过正确的 URI 编码，你可以导航到笔记中的某个标题或块。`Note%23Heading` 将导航到名为"Heading"的标题，而 `Note%23%5EBlock` 将导航到名为"Block"的块。

### 参数

- `vault` 可以是仓库名称或仓库 ID[^1]。
- `file` 可以是文件名，或从仓库根目录到指定文件的路径。如果文件扩展名为 `md`，则可以省略扩展名。
- `path` 文件的绝对文件系统路径。
  - 使用此参数将覆盖 `vault` 和 `file` 参数。
  - 这将使应用搜索包含指定文件路径的最匹配的仓库。
  - 然后路径的剩余部分将替换 `file` 参数。
- `prepend` 将内容添加到文件顶部，并尝试合并属性。
- `append` 将内容添加到文件末尾，并尝试合并属性。
- `paneType`（可选）决定笔记在界面中的打开位置。
  - 如果未指定，将替换最后活动的标签页。
  - `paneType=tab` 在新标签页中打开。
  - `paneType=split` 在新标签组中打开。
  - `paneType=window` 在弹出窗口中打开（仅桌面端）。

## 创建笔记

`new` 操作在仓库中创建一篇新笔记，可选地附带一些内容。

### 示例

- `obsidian://new?vault=my%20vault&name=my%20note`
  这将打开仓库 `my vault`，并创建一篇名为 `my note` 的新笔记。
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  这将打开仓库 `my vault`，并在 `path/to/my note` 路径下创建一篇新笔记。

### 参数

- `vault` 可以是仓库名称或仓库 ID[^1]。与 `open` 操作相同。
- `name` 要创建的文件名。如果指定了此参数，文件位置将根据你的"新建笔记的存放位置"偏好设置来选择。
- `file` 仓库内的绝对路径，包含文件名。如果指定了此参数，将覆盖 `name`。
- `path` 全局绝对路径。与 `open` 操作中的 `path` 选项类似，将覆盖 `vault` 和 `file` 参数。
- `paneType`（可选）决定笔记在界面中的打开位置。与 `open` 操作相同。
- `content`（可选）笔记的内容。
- `clipboard`（可选）使用剪贴板中的内容，而不是指定 `content`。
- `silent`（可选）如果你不想打开新笔记，请包含此参数。
- `append`（可选）如果已有同名文件，包含此参数将向其追加内容。
- `overwrite`（可选）如果已有同名文件，将覆盖该文件，但仅在未设置 `append` 时生效。
- `x-success`（可选）参见[[#使用 x-callback-url 参数]]。

## 创建或打开日记

`daily` 操作用于创建或打开你的日记。必须启用[[日记]]插件。

### 示例

- `obsidian://daily?vault=my%20vault`
  这将打开仓库 `my vault`，并创建或打开日记。

### 参数

`daily` 操作接受与 `new` 操作相同的参数。

## 时间戳笔记

`unique` 操作在仓库中创建一篇新的唯一笔记。必须启用[[时间戳笔记生成器]]插件。

### 示例

- `obsidian://unique?vault=my%20vault`
  这将打开仓库 `my vault`，并创建一篇新的唯一笔记。
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  这将打开仓库 `my vault`，并创建一篇内容为 `Hello World` 的新唯一笔记。

### 参数

- `vault` 可以是仓库名称或仓库 ID[^1]。与 `open` 操作相同。
- `paneType`（可选）决定笔记在界面中的打开位置。与 `open` 操作相同。
- `content`（可选）笔记的内容。
- `clipboard`（可选）使用剪贴板中的内容，而不是指定 `content`。
- `x-success`（可选）参见[[#使用 x-callback-url 参数]]。

## 打开搜索

`search` 操作在指定仓库中打开[[搜索]]，并可选地执行搜索。

### 示例

- `obsidian://search?vault=my%20vault`
  这将打开仓库 `my vault`，并打开[[搜索]]。
- `obsidian://search?vault=my%20vault&query=Obsidian`
  这将打开仓库 `my vault`，打开[[搜索]]，并搜索 `Obsidian`。

### 参数

- `vault` 可以是仓库名称或仓库 ID[^1]。与 `open` 操作相同。
- `query`（可选）要执行的搜索词。

## 打开仓库管理器

`choose-vault` 操作打开[[管理仓库|仓库管理器]]。

### 示例

- `obsidian://choose-vault`

## 与 Hook 集成

此 Obsidian URI 操作用于与 [Hook](https://hookproductivity.com/) 配合使用。

### 示例

`obsidian://hook-get-address`

### 参数

- `vault`（可选）可以是仓库名称或仓库 ID[^1]。如果未提供，将使用当前或最后聚焦的仓库。
- `x-success`（可选）参见[[#使用 x-callback-url 参数]]。
- `x-error`（可选）参见[[#使用 x-callback-url 参数]]。

如果定义了 `x-success`，此 API 将其作为 x-callback-url 使用。否则，它将以 `obsidian://open` URL 的形式将当前聚焦笔记的 Markdown 链接复制到剪贴板。

## 使用 x-callback-url 参数

某些端点接受 x-callback-url 参数 `x-success` 和 `x-error`。提供这些参数后，Obsidian 将向 `x-success` 回调提供以下信息：

- `name` 文件名（不含文件扩展名）。
- `url` 该文件的 `obsidian://` URI。
- `file`（仅桌面端）该文件的 `file://` URL。

例如，如果 Obsidian 收到
`obsidian://.....x-success=myapp://x-callback-url`，响应将为 `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## 简写格式

除了上述格式外，还有两种"简写"格式可用于打开仓库和文件：

1. `obsidian://vault/my vault/my note` 等同于 `obsidian://open?vault=my%20vault&file=my%20note`。
2. `obsidian:///absolute/path/to/my note` 等同于 `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`。

## 故障排除

### 注册 Obsidian URI

在 Windows 和 macOS 上，运行一次应用即可在你的计算机上注册 Obsidian URI 协议。

在 Linux 上，这个过程要复杂得多：

1. 确保你创建了 `obsidian.desktop` 文件。[详见此处](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files)。
2. 确保你的 desktop 文件中 `Exec` 字段指定为 `Exec=executable %u`。`%u` 用于将 `obsidian://` URI 传递给应用。
3. 如果你使用 AppImage 安装程序，可能需要使用 `Obsidian-x.y.z.AppImage --appimage-extract` 解压它。然后确保 `Exec` 指令指向解压后的可执行文件。


[^1]: 仓库 ID 是分配给仓库的随机 16 位字符代码，例如 `ef6ca3e3b524d22f`。此 ID 在你计算机上的每个文件夹中是唯一的。你可以通过打开仓库切换器，并在所需仓库的右键菜单中点击"复制仓库 ID"来获取该 ID。
