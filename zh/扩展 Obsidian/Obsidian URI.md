---
aliases:
  - Obsidian URI
---

Obsidian URI 是 Obsidian 自定义的 URI 协议，可以触发各种操作，比如打开笔记或创建笔记。

在 macOS 和移动应用中，通常用于自动化和跨应用工作流。

Obsidian URI 通常采用以下格式：

```
obsidian://action?param1=value&param2=value
```

`action` 参数是想执行的操作名称。

> [!warning] 编码
> 确保 URI 中的内容必须正确的编码。例如，斜杠 `/` 必须编码为 `%2F`，空格必须编码为 `%20`。
> 
> 这一点尤为重要，因为未正确编码的字符可能会阻碍 URI 的执行。[详细信息请参阅这里](https://en.wikipedia.org/wiki/Percent-encoding)。

## 注册 Obsidian URI

在 Windows 和 macOS 上，运行一次 Obsidian 就可以在计算机上注册 Obsidian URI 协议。

在 Linux 上，这个过程相对复杂：

1. 确保创建了 `obsidian.desktop` 文件。[详细信息请参阅这里](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files)。
2. 确保上述文件的 `Exec` 字段为 `Exec=executable %u`。`%u` 用于将 `obsidian://` URI 传递给应用程序。
3. 如果使用的是 AppImage 安装程序，可能需要使用 `Obsidian-x.y.z.AppImage --appimage-extract` 进行解压。然后确保 `Exec` 指令指向解压后的可执行文件。

## 打开笔记

打开笔记 URI 可以打开 Obsidian 仓库，或在该仓库内打开文件。

### 示例

- `obsidian://open?vault=my%20vault`
  这将打开名为 `my vault` 的仓库。如果该仓库已经打开，则切换至仓库对应的窗口。

- `obsidian://open?vault=ef6ca3e3b524d22f`
  这将打开 ID 为 `ef6ca3e3b524d22f` 的仓库。

- `obsidian://open?vault=my%20vault&file=my%20note`
  这将在名为 `my vault` 的仓库中打开名为 `my note.md` 的笔记（假设文件存在）。

- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  这将查找包含路径 `/home/user/my vault/path/to/my note` 的所有仓库。然后，路径的其余部分将传递给 `file` 参数以查找对应笔记。例如，如果在 `/home/user/my vault` 下存在一个仓库，则相当于将 `file` 参数设置为 `path/to/my note`。

> [!tip] 打开标题或块
> 通过正确的 URI 编码，你可以打开笔记中的小标题或块。`Note%23Heading` 将跳转到名为“Heading”的小标题，而 `Note%23%5EBlock` 将跳转到名为“Block”的块。

### 参数

- `vault` 可以是仓库名称或仓库 ID[^1]。
- `file` 可以是文件名，或从仓库根目录到指定文件的路径。如果文件扩展名为 `md`，则可以省略扩展名。
- `path` 用来指定文件的绝对路径。
	- 使用此参数将覆盖 `vault` 和 `file`。
	- 这将导致应用程序搜索包含指定文件路径的仓库。
	- 然后，路径的其余部分将替代 `file` 参数完成余下查找。

## 打开搜索

这个 Obsidian URI 可以在指定仓库中打开[[搜索|搜索]]，或执行具体的查询语句。

### 示例

- `obsidian://search?vault=my%20vault`
  这将打开名为 `my vault` 的仓库，并打开[[搜索|搜索]]。

- `obsidian://search?vault=my%20vault&query=Obsidian`
  这将打开名为 `my vault` 的仓库，打开[[搜索|搜索]]，并搜索 `Obsidian` 这一词语。

### 参数

- `vault` 可以是仓库名称或仓库 ID[^1]。与 `open` 动作相同。
- `query`（可选）要执行的搜索语句。

## 创建笔记

这个 URI 可以在仓库中新建一个笔记，或是新建笔记的同时附上一些内容。

### 示例

- `obsidian://new?vault=my%20vault&name=my%20note`
  这将打开名为 `my vault` 的仓库，并创建一个名为 `my note` 的新笔记。
- `obsidian://new?vault=my%20vault&path=path%2Fto%2Fmy%20note`
  这将打开名为 `my vault` 的仓库，并在 `path/to/my note` 处创建一个新笔记。

### 参数

- `vault` 可以是仓库名称或仓库 ID[^1]。与 `open` 动作相同。
- `name` 要创建的笔记名。如果指定了此选项，文件位置将根据“新建笔记的存放位置”设置进行保存。
- `file` 新建笔记基于仓库的绝对路径，包括笔记名称。此参数将覆盖 `name`。
- `path` 新建笔记在全局的绝对路径。与 `open` 动作中的 `path` 选项类似，将覆盖 `vault` 和 `file`。
- `content`（可选）笔记的内容。
- `silent`（可选）如果不想打开新笔记，请使用此参数。
- `append`（可选）此参数表示如果笔记已存在的话，则追加内容。
- `overwrite`（可选）此参数表示如果笔记已存在的话，覆盖现有文件。该参数仅当未设置 `append` 时生效。
- `x-success`（可选）参见[[#使用 x-callback-url 参数]]。

## 与 Hook 联用

Obsidian URI 可以与 [Hook](https://hookproductivity.com/) 配合使用。

### 示例

`obsidian://hook-get-address`

### 参数

- `vault`（可选）可以是仓库名称或仓库 ID[^1]。如果未提供，则将使用当前或最近打开的仓库。
- `x-success`（可选）参见[[#使用 x-callback-url 参数]]。
- `x-error`（可选）参见[[#使用 x-callback-url 参数]]。

如果定义了 `x-success`，此 API 将使用它作为 x-callback-url。否则，它将把当前打开笔记的 Markdown 链接复制到剪贴板，作为 `obsidian://open` URL。

## 使用 x-callback-url 参数

一些命令支持如 `x-success` 和 `x-error` 这样的 x-callback-url 参数 。当提供这些参数时，Obsidian 将向 `x-success` 提供以下信息：

- `name` 文件名，不包括文件扩展名。
- `url` 此文件的 `obsidian://` URI。
- `file`（仅桌面端）此文件的 `file://` URL。

例如，如果 Obsidian 收到
`obsidian://.....x-success=myapp://x-callback-url`，则响应将是 `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## 简写

除了上述格式外，还有两种“简写”格式可用于打开仓库和文件：

1. `obsidian://vault/my vault/my note` 等同于 `obsidian://open?vault=my%20vault&file=my%20note`。
2. `obsidian:///absolute/path/to/my note` 等同于 `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`。

---

[^1]: 仓库 ID 是分配给仓库的16 个随机字符，例如 `ef6ca3e3b524d22f`。此 ID 对于计算机上每个仓库文件夹都是唯一的。你可以通过打开仓库切换器，并在所需仓库的上下文菜单中单击“复制仓库 ID”来找到该仓库的 ID。