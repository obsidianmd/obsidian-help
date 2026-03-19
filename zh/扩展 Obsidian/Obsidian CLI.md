---
localized: 2026-03-19T00:00:00.000Z
permalink: cli
description: 在 Obsidian 中能做的任何事情，都可以通过命令行完成。
aliases:
  - 扩展 Obsidian/Obsidian CLI
---
Obsidian CLI 是一个命令行界面，让你可以从终端控制 Obsidian，用于脚本编写、自动化以及与外部工具集成。

在 Obsidian 中能做的任何事情，都可以通过命令行完成。Obsidian CLI 甚至包含[[#开发者命令|开发者命令]]，可用于访问开发者工具、检查元素、截图、重新加载插件等。

![[obsidian-cli.mp4#interface]]

> [!warning] 需要 Obsidian 1.12 安装程序
> 使用 CLI 需要 Obsidian 1.12 安装程序。请参阅[[更新 Obsidian#安装程序更新|安装程序版本更新指南]]。

## 安装 Obsidian CLI

升级到最新的 [[更新 Obsidian|Obsidian 安装程序版本]]（1.11.7）和最新的[[内部版本|内部版本]]（1.12.x）。

在 Obsidian 中启用 Obsidian CLI：

1. 前往**设置** → **常规**。
2. 启用**命令行界面**。
3. 按提示注册 Obsidian CLI。

如果安装 Obsidian CLI 时遇到问题，请参阅[[#故障排查]]。

## 快速上手

Obsidian CLI 支持单条命令和终端用户界面（TUI），后者提供交互式帮助和自动补全。

> [!info] Obsidian 应用必须在运行中
> Obsidian CLI 需要 Obsidian 应用处于运行状态。如果 Obsidian 未运行，你执行的第一条命令会启动 Obsidian。
>
> 想要在不运行桌面应用的情况下同步？请参阅 [[Obsidian Headless|Obsidian Headless]]。

### 执行命令

无需打开 TUI 即可执行单条命令：

```shell
# 运行帮助命令
obsidian help
```

### 使用终端界面

输入 `obsidian` 即可使用 TUI。后续命令无需再加 `obsidian` 前缀。

```shell
# 打开 TUI，然后运行 help
obsidian
help
```

TUI 支持自动补全、命令历史和反向搜索。使用 `Ctrl+R` 搜索命令历史。所有可用快捷键请参阅[[#键盘快捷键]]。

## 示例

以下是 Obsidian CLI 的一些使用示例。

### 日常使用

```shell
# 打开今天的日记
obsidian daily

# 向日记中添加任务
obsidian daily:append content="- [ ] Buy groceries"

# 搜索仓库
obsidian search query="meeting notes"

# 读取当前活动文件
obsidian read

# 列出日记中的所有任务
obsidian tasks daily

# 从模板创建新笔记
obsidian create name="Trip to Paris" template=Travel

# 列出仓库中所有标签及其数量
obsidian tags counts

# 比较文件的两个版本
obsidian diff file=README from=1 to=3
```

### 面向开发者

许多[[#开发者命令]]可用于插件和主题开发。这些命令允许智能编码工具自动测试和调试。

```shell
# 打开开发者工具
obsidian devtools

# 重新加载正在开发的社区插件
obsidian plugin:reload id=my-plugin

# 对应用进行截图
obsidian dev:screenshot path=screenshot.png

# 在应用控制台中运行 JavaScript
obsidian eval code="app.vault.getFiles().length"
```

## 操作指南

### 使用参数和标志

命令可以使用**参数**和**标志**。大多数命令不需要任何参数或标志。必填参数标记为 `required`。例如：

```shell
# 使用默认名称"未命名"创建新笔记
obsidian create
```

**参数**接受一个值，写法为 `parameter=value`。如果值包含空格，请用引号包裹：

```shell
# 创建名为"Note"且内容为"Hello world"的新笔记
obsidian create name=Note content="Hello world"
```

**标志**是没有值的布尔开关。包含它即表示开启，例如 `open` 和 `overwrite` 就是标志：

```shell
# 创建笔记并打开它
obsidian create name=Note content="Hello" open overwrite
```

对于多行内容，使用 `\n` 表示换行，使用 `\t` 表示制表符。

```bash
obsidian create name=Note content="# Title\n\nBody text"
```

### 指定仓库

如果终端当前工作目录是一个仓库文件夹，则默认使用该仓库。否则，使用当前活动仓库。

使用 `vault=<name>` 或 `vault=<id>` 指定特定仓库。此参数必须放在命令之前：

```shell
obsidian vault=Notes daily
obsidian vault="My Vault" search query="test"
```

在 TUI 中，使用 `vault:open <name>` 或 `<id>` 切换到不同仓库。

### 指定文件

许多命令接受 `file` 和 `path` 参数来指定特定文件。如果两者都未提供，命令默认作用于活动文件。

- `file=<name>` 使用与 [[内部链接|Wiki 链接]] 相同的链接解析方式解析文件，通过文件名匹配，无需完整路径或扩展名。
- `path=<path>` 需要从仓库根目录开始的完整路径，例如 `folder/note.md`。

```shell
# 如果"Recipe.md"是唯一具有该名称的文件，以下两条命令等效
obsidian read file=Recipe
obsidian read path="Templates/Recipe.md"
```

### 复制输出

在任何命令后添加 `--copy` 可将输出复制到剪贴板：

```shell
read --copy
search query="TODO" --copy
```


## 通用命令

### `help`

显示所有可用命令列表。

| 参数   | 描述                       |
| ----------- | --------------------------------- |
| `<command>` | 显示特定命令的帮助信息。 |

### `version`

显示 Obsidian 版本。

### `reload`

重新加载应用窗口。

### `restart`

重启应用。


## 数据库

用于 [[Bases 简介|数据库]] 的命令。

### `bases`

列出仓库中所有 `.base` 文件。

### `base:views`

列出当前数据库文件中的视图。

### `base:create`

在数据库中创建新项目。如果未指定文件，默认使用活动的数据库视图。

```bash
file=<name>        # 数据库文件名
path=<path>        # 数据库文件路径
view=<name>        # 视图名称
name=<name>        # 新文件名
content=<text>     # 初始内容

open               # 创建后打开文件
newtab             # 在新标签页中打开
```

### `base:query`

查询数据库并返回结果。

```bash
file=<name>                    # 数据库文件名
path=<path>                    # 数据库文件路径
view=<name>                    # 要查询的视图名称
format=json|csv|tsv|md|paths   # 输出格式（默认：json）
```

## 书签

用于[[书签]]的命令。

### `bookmarks`

列出书签。

```bash
total              # 返回书签数量
verbose            # 包含书签类型
format=json|tsv|csv  # 输出格式（默认：tsv）
```

### `bookmark`

添加书签。

```bash
file=<path>        # 要添加书签的文件
subpath=<subpath>  # 文件内的子路径（标题或块）
folder=<path>      # 要添加书签的文件夹
search=<query>     # 要添加书签的搜索查询
url=<url>          # 要添加书签的 URL
title=<title>      # 书签标题
```

## 命令面板

用于[[命令面板]]和[[快捷键]]的命令。包括所有由插件注册的命令。

### `commands`

列出可用的命令 ID。

```bash
filter=<prefix>    # 按 ID 前缀筛选
```

### `command`

执行 Obsidian 命令。

```bash
id=<command-id>    # （必填）要执行的命令 ID
```

### `hotkeys`

列出所有命令的快捷键。

```bash
total              # 返回快捷键数量
verbose            # 显示快捷键是否为自定义
format=json|tsv|csv  # 输出格式（默认：tsv）
```

### `hotkey`

获取某个命令的快捷键。

```bash
id=<command-id>    # （必填）命令 ID

verbose            # 显示是自定义还是默认
```

## 日记

用于[[日记]]的命令。

### `daily`

打开日记。

```bash
paneType=tab|split|window    # 打开方式
```

### `daily:path`

获取日记路径。即使文件尚未创建也会返回预期路径。

### `daily:read`

读取日记内容。

### `daily:append`

向日记追加内容。

```bash
content=<text>     # （必填）要追加的内容
paneType=tab|split|window    # 打开方式

inline             # 追加时不换行
open               # 添加后打开文件
```

### `daily:prepend`

在日记开头插入内容。

```bash
content=<text>     # （必填）要插入的内容
paneType=tab|split|window    # 打开方式

inline             # 插入时不换行
open               # 添加后打开文件
```

## 文件历史

### `diff`

列出或比较来自本地[[文件恢复]]和 [[Obsidian 官方同步简介|同步]] 的版本。版本从新到旧编号。

```bash
file=<name>          # 文件名
path=<path>          # 文件路径
from=<n>             # 对比起始版本号
to=<n>               # 对比目标版本号
filter=local|sync    # 按版本来源筛选
```

**示例：**

```shell
# 列出活动文件的所有版本
diff

# 列出特定文件的所有版本
diff file=Recipe

# 将最新版本与当前文件进行比较
diff file=Recipe from=1

# 比较两个版本
diff file=Recipe from=2 to=1

# 仅显示同步版本
diff filter=sync
```

### `history`

仅列出来自[[文件恢复]]的版本。同步服务的等效命令请参阅 [[#同步|sync:history]]。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
```

### `history:list`

列出所有有本地历史的文件。

### `history:read`

读取本地历史版本。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
version=<n>        # 版本号（默认：1）
```

### `history:restore`

恢复本地历史版本。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
version=<n>        # （必填）版本号
```

### `history:open`

打开文件恢复。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
```

## 文件和文件夹

### `file`

显示文件信息（默认：活动文件）。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
```

示例：

```
path       Notes/Recipe.md
name       Recipe
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

列出仓库中的文件。

```bash
folder=<path>      # 按文件夹筛选
ext=<extension>    # 按扩展名筛选

total              # 返回文件数量
```

### `folder`

显示文件夹信息。

```bash
path=<path>              # （必填）文件夹路径
info=files|folders|size  # 仅返回特定信息
```

### `folders`

列出仓库中的文件夹。

```bash
folder=<path>      # 按父文件夹筛选

total              # 返回文件夹数量
```

### `open`

打开文件。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径

newtab             # 在新标签页中打开
```

### `create`

创建或覆盖文件。

```bash
name=<name>        # 文件名
path=<path>        # 文件路径
content=<text>     # 初始内容
template=<name>    # 使用的模板

overwrite          # 如果文件存在则覆盖
open               # 创建后打开文件
newtab             # 在新标签页中打开
```

### `read`

读取文件内容（默认：活动文件）。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
```

### `append`

向文件追加内容（默认：活动文件）。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
content=<text>     # （必填）要追加的内容

inline             # 追加时不换行
```

### `prepend`

在前置元数据之后插入内容（默认：活动文件）。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
content=<text>     # （必填）要插入的内容

inline             # 插入时不换行
```

### `move`

移动或重命名文件（默认：活动文件）。如果在[[设置#始终更新内部链接|仓库设置]]中启用了相关选项，将自动更新[[内部链接]]。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
to=<path>          # （必填）目标文件夹或路径
```

### `rename`

重命名文件（默认：活动文件）。如果新名称中省略了文件扩展名，将自动保留原扩展名。使用 [[#`move`|move]] 可同时重命名和移动文件。如果在[[设置#始终更新内部链接|仓库设置]]中启用了相关选项，将自动更新[[内部链接]]。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
name=<name>        # （必填）新文件名
```

### `delete`

删除文件（默认：活动文件，默认移至回收站）。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径

permanent          # 跳过回收站，永久删除
```

## 链接

用于[[反向链接]]和[[出链]]的命令。

### `backlinks`

列出指向某文件的反向链接（默认：活动文件）。

```bash
file=<name>        # 目标文件名
path=<path>        # 目标文件路径

counts             # 包含链接数量
total              # 返回反向链接数量
format=json|tsv|csv  # 输出格式（默认：tsv）
```

### `links`

列出某文件的出链（默认：活动文件）。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径

total              # 返回链接数量
```

### `unresolved`

列出仓库中未解析的链接。

```bash
total              # 返回未解析链接数量
counts             # 包含链接数量
verbose            # 包含源文件
format=json|tsv|csv  # 输出格式（默认：tsv）
```

### `orphans`

列出没有入链的文件。

```bash
total              # 返回孤立文件数量
```

### `deadends`

列出没有出链的文件。

```bash
total              # 返回死端文件数量
```

## 大纲

用于[[大纲]]的命令。

### `outline`

显示当前文件的标题。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
format=tree|md|json  # 输出格式（默认：tree）

total              # 返回标题数量
```

## 插件

用于[[核心插件]]和[[第三方插件]]的命令。

### `plugins`

列出已安装的插件。

```bash
filter=core|community  # 按插件类型筛选

versions               # 包含版本号
format=json|tsv|csv    # 输出格式（默认：tsv）
```

### `plugins:enabled`

列出已启用的插件。

```bash
filter=core|community  # 按插件类型筛选

versions               # 包含版本号
format=json|tsv|csv    # 输出格式（默认：tsv）
```

### `plugins:restrict`

切换或检查受限模式。

```bash
on                 # 启用受限模式
off                # 禁用受限模式
```

### `plugin`

获取插件信息。

```bash
id=<plugin-id>     # （必填）插件 ID
```

### `plugin:enable`

启用插件。

```bash
id=<id>                # （必填）插件 ID
filter=core|community  # 插件类型
```

### `plugin:disable`

禁用插件。

```bash
id=<id>                # （必填）插件 ID
filter=core|community  # 插件类型
```

### `plugin:install`

安装社区插件。

```bash
id=<id>            # （必填）插件 ID

enable             # 安装后启用
```

### `plugin:uninstall`

卸载社区插件。

```bash
id=<id>            # （必填）插件 ID
```

### `plugin:reload`

重新加载插件（面向开发者）。

```bash
id=<id>            # （必填）插件 ID
```

## 属性

与[[属性]]相关的命令。

### `aliases`

列出仓库中的别名。使用 `active` 或 `file`/`path` 可显示特定文件的别名。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径

total              # 返回别名数量
verbose            # 包含文件路径
active             # 显示活动文件的别名
```

### `properties`

列出仓库中的属性。使用 `active` 或 `file`/`path` 可显示特定文件的属性。

```bash
file=<name>        # 显示指定文件的属性
path=<path>        # 显示指定路径文件的属性
name=<name>        # 获取特定属性的数量
sort=count         # 按数量排序（默认：按名称）
format=yaml|json|tsv  # 输出格式（默认：yaml）

total              # 返回属性数量
counts             # 包含出现次数
active             # 显示活动文件的属性
```

### `property:set`

在文件上设置属性（默认：活动文件）。

```bash
name=<name>                                    # （必填）属性名称
value=<value>                                  # （必填）属性值
type=text|list|number|checkbox|date|datetime   # 属性类型
file=<name>                                    # 文件名
path=<path>                                    # 文件路径
```

### `property:remove`

从文件中移除属性（默认：活动文件）。

```bash
name=<name>        # （必填）属性名称
file=<name>        # 文件名
path=<path>        # 文件路径
```

### `property:read`

从文件中读取属性值（默认：活动文件）。

```bash
name=<name>        # （必填）属性名称
file=<name>        # 文件名
path=<path>        # 文件路径
```

## 发布

用于 [[发布服务简介|Obsidian Publish]] 的命令。

### `publish:site`

显示发布站点信息（slug、URL）。

### `publish:list`

列出已发布的文件。

```bash
total              # 返回已发布文件数量
```

### `publish:status`

列出发布变更。

```bash
total              # 返回变更数量
new                # 仅显示新文件
changed            # 仅显示已更改的文件
deleted            # 仅显示已删除的文件
```

### `publish:add`

发布文件或所有已更改的文件（默认：活动文件）。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径

changed            # 发布所有已更改的文件
```

### `publish:remove`

取消发布文件（默认：活动文件）。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
```

### `publish:open`

在发布站点上打开文件（默认：活动文件）。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
```

## 随机笔记

用于[[漫游笔记]]的命令。

### `random`

打开一篇随机笔记。

```bash
folder=<path>      # 限定在某文件夹内

newtab             # 在新标签页中打开
```

### `random:read`

读取一篇随机笔记（包含路径）。

```bash
folder=<path>      # 限定在某文件夹内
```

## 搜索

用于[[搜索]]的命令。

### `search`

搜索仓库中的文本。返回匹配的文件路径。

```bash
query=<text>       # （必填）搜索查询
path=<folder>      # 限定在某文件夹内
limit=<n>          # 最大文件数
format=text|json   # 输出格式（默认：text）

total              # 返回匹配数量
case               # 区分大小写
```

### `search:context`

带上下文的搜索。返回 grep 风格的 `path:line: text` 输出。

```bash
query=<text>       # （必填）搜索查询
path=<folder>      # 限定在某文件夹内
limit=<n>          # 最大文件数
format=text|json   # 输出格式（默认：text）

case               # 区分大小写
```

### `search:open`

打开搜索视图。

```bash
query=<text>       # 初始搜索查询
```

## 同步

用于 [[Obsidian 官方同步简介|Obsidian Sync]] 的命令。

> [!tip] 无需桌面应用即可同步
> 这些命令控制运行中的 Obsidian 应用内的同步功能。要在不使用桌面应用的情况下从命令行同步仓库，请参阅 [[Headless Sync]]。

### `sync`

暂停或恢复同步。

```bash
on                 # 恢复同步
off                # 暂停同步
```

### `sync:status`

显示同步状态和使用情况。

### `sync:history`

列出文件的同步版本历史（默认：活动文件）。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径

total              # 返回版本数量
```

### `sync:read`

读取同步版本（默认：活动文件）。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
version=<n>        # （必填）版本号
```

### `sync:restore`

恢复同步版本（默认：活动文件）。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
version=<n>        # （必填）版本号
```

### `sync:open`

打开同步历史（默认：活动文件）。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
```

### `sync:deleted`

列出同步中已删除的文件。

```bash
total              # 返回已删除文件数量
```

## 标签

用于[[标签]]的命令。

### `tags`

列出仓库中的标签。使用 `active` 或 `file`/`path` 可显示特定文件的标签。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径
sort=count         # 按数量排序（默认：按名称）

total              # 返回标签数量
counts             # 包含标签数量
format=json|tsv|csv  # 输出格式（默认：tsv）
active             # 显示活动文件的标签
```

### `tag`

获取标签信息。

```bash
name=<tag>         # （必填）标签名称

total              # 返回出现次数
verbose            # 包含文件列表和数量
```

## 任务

用于任务管理的命令。

### `tasks`

列出仓库中的任务。使用 `active` 或 `file`/`path` 可显示特定文件的任务。

```bash
file=<name>        # 按文件名筛选
path=<path>        # 按文件路径筛选
status="<char>"    # 按状态字符筛选

total              # 返回任务数量
done               # 显示已完成的任务
todo               # 显示未完成的任务
verbose            # 按文件分组并显示行号
format=json|tsv|csv  # 输出格式（默认：text）
active             # 显示活动文件的任务
daily              # 显示日记中的任务
```

**示例：**

```bash
# 列出仓库中所有任务
tasks

# 列出仓库中未完成的任务
tasks todo

# 列出特定文件中已完成的任务
tasks file=Recipe done

# 列出今天日记中的任务
tasks daily

# 统计日记中的任务数量
tasks daily total

# 列出任务及其文件路径和行号
tasks verbose

# 按自定义状态筛选（引号包裹特殊字符）
tasks 'status=?'
```

### `task`

显示或更新任务。

```bash
ref=<path:line>    # 任务引用（path:line）
file=<name>        # 文件名
path=<path>        # 文件路径
line=<n>           # 行号
status="<char>"    # 设置状态字符

toggle             # 切换任务状态
daily              # 日记
done               # 标记为已完成
todo               # 标记为未完成
```

**示例：**

```bash
# 显示任务信息
task file=Recipe line=8
task ref="Recipe.md:8"

# 切换任务完成状态
task ref="Recipe.md:8" toggle

# 切换日记中的任务
task daily line=3 toggle

# 设置任务状态
task file=Recipe line=8 done      # → [x]
task file=Recipe line=8 todo      # → [ ]
task file=Recipe line=8 status=-  # → [-]
task daily line=3 done            # 将日记任务标记为已完成
```


## 模板

用于[[核心插件/模板|模板]]的命令。

### `templates`

列出模板。

```bash
total              # 返回模板数量
```

### `template:read`

读取模板内容。

```bash
name=<template>    # （必填）模板名称
title=<title>      # 用于变量解析的标题

resolve            # 解析模板变量
```

### `template:insert`

将模板插入活动文件。

```bash
name=<template>    # （必填）模板名称
```

**说明：**
- `resolve` 选项处理 `{{date}}`、`{{time}}`、`{{title}}` 变量
- 使用 `create path=<path> template=<name>` 可基于模板创建文件

## 主题和片段

用于[[主题]]和 [[CSS 代码片段]]的命令。

### `themes`

列出已安装的主题。

```bash
versions           # 包含版本号
```

### `theme`

显示当前主题或获取信息。

```bash
name=<name>        # 要查看详情的主题名称
```

### `theme:set`

设置当前主题。

```bash
name=<name>        # （必填）主题名称（留空则使用默认主题）
```

### `theme:install`

安装社区主题。

```bash
name=<name>        # （必填）主题名称

enable             # 安装后激活
```

### `theme:uninstall`

卸载主题。

```bash
name=<name>        # （必填）主题名称
```

### `snippets`

列出已安装的 CSS 代码片段。

### `snippets:enabled`

列出已启用的 CSS 代码片段。

### `snippet:enable`

启用 CSS 代码片段。

```bash
name=<name>        # （必填）片段名称
```

### `snippet:disable`

禁用 CSS 代码片段。

```bash
name=<name>        # （必填）片段名称
```

## 时间戳笔记

用于[[时间戳笔记生成器]]的命令。

### `unique`

创建时间戳笔记。

```bash
name=<text>        # 笔记名称
content=<text>     # 初始内容
paneType=tab|split|window    # 打开方式

open               # 创建后打开文件
```

## 仓库

### `vault`

显示仓库信息。

```bash
info=name|path|files|folders|size  # 仅返回特定信息
```

### `vaults`

列出已知仓库。

```bash
total              # 返回仓库数量
verbose            # 包含仓库路径
```

### `vault:open`

切换到其他仓库（仅限 TUI）。

```bash
name=<name>        # （必填）仓库名称
```

## 网页浏览器

用于[[网页查看器|网页浏览器]]的命令。

### `web`

在网页浏览器中打开 URL。

```bash
url=<url>          # （必填）要打开的 URL

newtab             # 在新标签页中打开
```

## 字数统计

用于[[字数统计]]的命令。

### `wordcount`

统计字数和字符数（默认：活动文件）。

```bash
file=<name>        # 文件名
path=<path>        # 文件路径

words              # 仅返回字数
characters         # 仅返回字符数
```

## 工作区

用于[[工作区]]和[[工作区]]插件的命令。

### `workspace`

显示工作区树。

```bash
ids                # 包含工作区项目 ID
```

### `workspaces`

列出已保存的工作区。

```bash
total              # 返回工作区数量
```

### `workspace:save`

将当前布局保存为工作区。

```bash
name=<name>        # 工作区名称
```

### `workspace:load`

加载已保存的工作区。

```bash
name=<name>        # （必填）工作区名称
```

### `workspace:delete`

删除已保存的工作区。

```bash
name=<name>        # （必填）工作区名称
```

### `tabs`

列出打开的标签页。

```bash
ids                # 包含标签页 ID
```

### `tab:open`

打开新标签页。

```bash
group=<id>         # 标签页组 ID
file=<path>        # 要打开的文件
view=<type>        # 要打开的视图类型
```

### `recents`

列出最近打开的文件。

```bash
total              # 返回最近文件数量
```

## 开发者命令

帮助你开发[[第三方插件]]和[[主题]]的命令。前往 [Obsidian 开发者文档](https://docs.obsidian.md) 了解更多。

### `devtools`

切换 Electron 开发者工具。

### `dev:debug`

附加/分离 Chrome DevTools Protocol 调试器。

```bash
on                 # 附加调试器
off                # 分离调试器
```

### `dev:cdp`

运行 Chrome DevTools Protocol 命令。

```bash
method=<CDP.method>  # （必填）CDP 方法
params=<json>        # 方法参数（JSON 格式）
```

### `dev:errors`

显示捕获的 JavaScript 错误。

```bash
clear              # 清除错误缓冲区
```

### `dev:screenshot`

截图（返回 base64 PNG）。

```bash
path=<filename>    # 输出文件路径
```

### `dev:console`

显示捕获的控制台消息。

```bash
limit=<n>                        # 最大消息数（默认 50）
level=log|warn|error|info|debug  # 按日志级别筛选

clear                            # 清除控制台缓冲区
```

### `dev:css`

检查 CSS 及其源位置。

```bash
selector=<css>     # （必填）CSS 选择器
prop=<name>        # 按属性名筛选
```

### `dev:dom`

查询 DOM 元素。

```bash
selector=<css>     # （必填）CSS 选择器
attr=<name>        # 获取属性值
css=<prop>         # 获取 CSS 属性值

total              # 返回元素数量
text               # 返回文本内容
inner              # 返回 innerHTML 而非 outerHTML
all                # 返回所有匹配项而非第一个
```

### `dev:mobile`

切换移动端模拟。

```bash
on                 # 启用移动端模拟
off                # 禁用移动端模拟
```

### `eval`

执行 JavaScript 并返回结果。

```bash
code=<javascript>  # （必填）要执行的 JavaScript 代码
```

## 键盘快捷键

这些快捷键在[[#使用终端界面|TUI]]中可用。

### 导航

| 操作                                                | 快捷键       |
| ----------------------------------------------------- | -------------- |
| 左移光标                                      | `←` / `Ctrl+B` |
| 右移光标（在行尾时接受建议） | `→` / `Ctrl+F` |
| 跳转到行首                                 | `Ctrl+A`       |
| 跳转到行尾                                   | `Ctrl+E`       |
| 后退一个单词                                    | `Alt+B`        |
| 前进一个单词                                   | `Alt+F`        |

### 编辑

| 操作                  | 快捷键                   |
| ----------------------- | -------------------------- |
| 删除到行首 | `Ctrl+U`                   |
| 删除到行尾   | `Ctrl+K`                   |
| 删除前一个单词    | `Ctrl+W` / `Alt+Backspace` |

### 自动补全

| 操作                                             | 快捷键    |
| -------------------------------------------------- | ----------- |
| 进入建议模式 / 接受选中的建议 | `Tab`       |
| 退出建议模式                               | `Shift+Tab` |
| 进入建议模式（从新输入开始）           | `↓`         |
| 接受第一个/选中的建议（在行尾时）  | `→`         |

### 历史

| 操作                                                     | 快捷键       |
| ---------------------------------------------------------- | -------------- |
| 上一条历史记录 / 向上浏览建议           | `↑` / `Ctrl+P` |
| 下一条历史记录 / 向下浏览建议             | `↓` / `Ctrl+N` |
| 反向历史搜索（输入筛选，`Ctrl+R` 循环） | `Ctrl+R`       |

### 其他

| 操作                                                 | 快捷键            |
| ------------------------------------------------------ | ------------------- |
| 执行命令或接受建议                   | `Enter`             |
| 撤销自动补全 / 退出建议模式 / 清除输入 | `Escape`            |
| 清屏                                           | `Ctrl+L`            |
| 退出                                                   | `Ctrl+C` / `Ctrl+D` |

## 故障排查

如果运行 Obsidian CLI 时遇到问题：

- 确保使用的是最新的 [[更新 Obsidian|Obsidian 安装程序版本]]（1.12.4 或更高）。
- 注册 CLI 后请重启终端，以使 PATH 更改生效。
- Obsidian 必须正在运行。CLI 连接到正在运行的 Obsidian 实例。如果 Obsidian 未运行，第一条 CLI 命令会启动应用。

### Windows

Windows 上的 Obsidian CLI 需要 Obsidian 1.12.4+ 安装程序。请参阅[[更新 Obsidian|安装程序版本更新]]。

Windows 使用终端重定向器将 Obsidian 正确连接到 stdin/stdout。这是必要的，因为 Obsidian 通常作为 GUI 应用运行，与 Windows 上的终端输出不兼容。安装 Obsidian 1.12.4+ 后，`Obsidian.com` 终端重定向器将被添加到安装 `Obsidian.exe` 文件的文件夹中。

### macOS

CLI 注册会通过 `~/.zprofile` 将 Obsidian 二进制目录添加到 PATH 中。如果遇到问题，请检查以下内容：

你的 `~/.zprofile` 文件应包含以下行。如果缺少，可以手动添加：

```
export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"
```

#### 其他 shell

CLI 注册仅修改 `~/.zprofile`，它由 zsh（macOS 默认 shell）使用。如果你使用其他 shell，请手动将 Obsidian 二进制目录添加到你的 shell 配置文件中：

- Bash：将 `export PATH="$PATH:/Applications/Obsidian.app/Contents/MacOS"` 添加到 `~/.bash_profile`
- Fish：运行 `fish_add_path /Applications/Obsidian.app/Contents/MacOS`


### Linux

CLI 注册会在 `/usr/local/bin/obsidian` 创建指向 Obsidian 二进制文件的符号链接（需要 sudo）。

#### AppImage

对于 AppImage 安装，符号链接指向 `.AppImage` 文件而非内部二进制文件，因为挂载路径每次启动都会改变。如果 sudo 失败，符号链接会作为备选方案创建在 `~/.local/bin/obsidian`。如果遇到问题，请检查以下内容。

检查符号链接是否存在且指向正确的二进制文件：

```
ls -l /usr/local/bin/obsidian
```

如果符号链接缺失，请手动创建：

```
sudo ln -s /path/to/obsidian /usr/local/bin/obsidian
```

如果符号链接创建在了 `~/.local/bin/` 中，请确保该目录在你的 PATH 中。将以下内容添加到 `~/.bashrc` 或 `~/.zshrc`：

```
export PATH="$PATH:$HOME/.local/bin"
```

如果移动或重命名 `.AppImage` 文件后符号链接失效，请重新注册 CLI 或手动更新符号链接。

#### Snap

Snap 包将内部版本数据存储在其自己的用户数据目录中。如果 CLI 未检测到内部版本的 `.asar`，请将 `XDG_CONFIG_HOME` 设置为指向 Snap 配置路径：

```
export XDG_CONFIG_HOME="$HOME/snap/obsidian/current/.config"
```

将此添加到 `~/.bashrc` 或 `~/.zshrc` 以使其持久生效。


#### Flatpak

Obsidian 会尝试自动完成此操作，但以下是手动说明。如果是系统级安装：

```
ln -s /var/lib/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```

如果是用户级安装：

```
ln -s ~/.local/share/flatpak/exports/bin/md.obsidian.Obsidian ~/.local/bin/obsidian
```
