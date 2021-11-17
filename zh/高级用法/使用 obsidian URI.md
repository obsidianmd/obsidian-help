Obsidian 支持自定义的 URI 协议 `Obsidian://`，这个协议可以用来触发 Obsidian 内部的各种动作。自定义 URI 协议通常用于 MacOS 中的跨应用程序工作流。

如果你已经安装了 Obsidian，下面这个命令将在当前设备上打开 Obidian：[点击此处](obsidian://open)

## 安装 Obsidian URI

为了让你的操作系统将 `obsidian://` URI 重定向到 Obsidian，你可能需要执行一些额外的步骤。

- 对于 Windows，运行一次 Obsidian 就足够了。因为这会在 Windows 注册表中注册 `obsidian://` 自定义协议处理程序。
- 对于 MacOS，运行一次 Obsidian 也足够了。但需要注意的是，Obsidian 版本必须为 0.8.12 或更高。
- 对于 Linux，则需要更多的步骤：
		- 首先，确保你创建了一个 `obsidian.desktop` 文件。[你可以在此获得更多相关信息](https://developer.gnome.org/integration-guide/stable/desktop-files.html.en)
		- 确保你的桌面文件将 `Exec` 字段指定为 `Exec=executable %u`。`%u` 将用于传递 `obsidian://` URI 给 Obsidian。
		- 如果你正在使用 AppImage 安装程序，你可能需要使用 `Obsidian-x.y.z.AppImage --appimage-extract` 来解压它。然后确保 `Exec` 指向解压出来的可执行文件。


## 使用 Obsidian URI

Obsidian URI 通常采用以下形式：

```
obsidian://action?param1=value&param2=value
```

-  `action` 表示你想让 Obsidian 执行的动作。

### 编码

==这部分非常重要==

你需要确保 URI 中的值是正确编码的。比如，正斜线字符 `/` 必须编码为 `%2F`，空格字符必须编码为 `%20`。这一点特别重要，因为不符合规范的 URI 将不能正常运行。[想要了解更多编码规范请点击此处](https://en.wikipedia.org/wiki/Percent-encoding)

### 可使用的动作

#### `open` 动作

动作描述：在 Obsidian 中打开一个库，甚至打开库内的某个文件。

可能用到的参数：

- `vault` 既可以使用库名称，也可以使用库 ID。
	- 库名称就是库文件夹的名称。
	- 库 ID 是每个库独有的、随机编码的 16 位字符串。比如：`ef6ca3e3b524d22f`。目前没有简单的方法来找到这些 ID，我们日后会开发相关的功能。目前库 ID 可以在以下路径找到：
		- 对于 Windows，路径为 `%appdata%/obsidian/obsidian.json`
		- 对于 MacOS，则把 `%appdata%` 替换为 `~/Library/Application Support/`
		- 对于 Linux，把 `%appdata%` 替换为 `~/.config/`。
- `file` 既可以使用文件名称，也可以使用基于库的根目录的文件路径。
	- 为了获取目标文件，Obsidian 使用了与 `[[Wiki链接]]` 一样的定位规则。
	- 如果文件扩展名是 `md`，可以省略扩展名。
- `path` 则是文件在系统中的绝对路径。
	- 这个参数将会覆盖 `vault` 和 `file` 参数。
	- 参数执行时，Obsidian 先会搜索包含特定路径的库，随后再在库中寻找相关的文件。即相当于先执行 `vault`，再执行 `file`。


示例:

- `obsidian://open?vault=my%20vault`
	这将打开名为 `my vault` 的库。如果该库已经打开，则让焦点回到该库上。

- `obsidian://open?vault=ef6ca3e3b524d22f`
	这将打开 ID 为 `ef6ca3e3b524d22f` 的库。

- `obsidian://open?vault=my%20vault&file=my%20note`
	假设有一个名为 `my vault` 的库，并且库中包含 `my note.md` 这样一条笔记的话，这将打开该笔记。

- `obsidian://open?vault=my%20vault&file=my%20note.md`
	这也会打开 `my vault` 库中名为 `my note` 的笔记。

- `obsidian://open?vault=my%20vault&file=path%2Fto%2Fmy%20note`
	这将打开 `my vault` 库中路径为 `path/to/my note` 的笔记。

- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note` 这将让 Obsidian 查找包含路径 `/home/user/my vault/path/to/my note` 的库。随后，路径参数的剩余部分将传递给 `file` 参数。这就好比在一个路径为 `/home/user/my vault` 的库中将 `file` 参数设置为 `path/to/my note` 一样。

- `obsidian://open?path=D%3A%5CDocuments%5CMy%20vault%5CMy%20note`
	这将让 Obsidian 寻找包含路径 `D:\Documents\My vault\My note` 的库。随后，路径参数的剩余部分将传递给 `file` 参数。这就好比在一个路径为 `D:\Documents\My vault` 的库中将 `file` 参数设置为 `My note` 一样。
	
#### `search` 动作

描述：打开 Obsidian 中某个库的查询面板，然后执行搜索（是否执行搜索是可选的）。

可能用到的参数：

- `vault` 既可以是库名称，也可以是库 ID，这和 `open` 动作里一样。
- `query` 用于设置要执行的搜索。这是可选参数。

示例：

- `obsidian://search?vault=my%20vault`
	这将打开名为 `my vault` 的库，然后打开该库的查询面板。

- `obsidian://search?vault=my%20vault&query=MOC`
	这将打开名为 `my vault` 的库，然后打开该库的查询面板，并搜索 `MOC`。
	
#### `new` 动作

描述：在库中创建一篇新笔记，并为笔记写入一些内容（可选）。

可能用到的参数：

- `vault` 既可以是库名称，也可以是库 ID，这和 `open` 动作里一样。
- `name` 用于指定创建的笔记名称。新笔记的存放位置受设置中 `新建笔记的存放位置` 选项控制。
- `file` 通过基于库的绝对路径来创建笔记。这将覆盖 `name` 的设置。
- `path` 通过全局的绝对路径来创建笔记，这和 `open` 动作中的一样。该参数将覆盖 `vault` 和 `file` 的设置。
- `content` 指定新笔记中的内容，该参数非必须。
- `silent` 如果你不想打开新笔记，则设置此参数。

示例：

-`obsidian://new?vault=my%20vault&name=my%20note\` 这将打开名为 `my vault` 的库，并创建一篇名为 `my note` 的新笔记。
-`obsidian://new?vault=my%20vault&path=path%2Fto%2Fmy%20note` 这将打开名为 `my vault` 的库，并在 `path/to/my note` 路径下创建一篇名为 `my note` 的新笔记。

#### `hook-get-address` 动作

描述：与 [Hook](https://hookproductivity.com/) 配合使用的动作，即复制当前笔记的 URI 到剪贴板，即点击该 URI 后自动生成一个 `open` 当前笔记的 URI 并复制到剪贴板。使用方式： `obsidian://hook-get-address`。

可能用到的参数：

- `vault` 用于指定库，可以是库名称也可以是库 ID。此参数非必须。如果不指定此参数，动作将指向当前或上次打开的库。

## 简写形式

除了上述形式之外，你还可以使用两种简写形式来打开库或文件：

- `obsidian://vault/my vault/my note` 这等同于 `obsidian://open?vault=my%20vault&file=my%20note`
- `obsidian:///absolute/path/to/my note` 这等同于 `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`
