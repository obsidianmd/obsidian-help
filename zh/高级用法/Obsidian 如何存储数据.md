我们相信[[Obsidian#跟其他软件有何不同|你自始至终应该拥有并且掌控你的数据]] 。因此，你在 Obsidian 中记录的笔记将以 Markdown 格式进行存储。所谓 Markdown 格式，指的是基于纯文本的开放文件格式。任何能够打开纯文本文件的电脑，都能够编辑 Markdown 文件。所以，你也可以通过其他软件来编辑你在 Obsidian 中记录的笔记。

然而，一些 Obsidian 运行所需的数据并没有以 markdown 格式进行存储。Obsidian 在你创建的每一个库的根目录都建立了一个 `.obsidian` 文件夹，这个文件夹将存放你对库的配置，比如自定义的快捷键以及插件的启用情况等。在大多数系统中，一般情况下以 `.` 开头的文件都是不可见的，所以你很可能看不到 `.obsidian` 文件夹，除非你专门去找。如果你删除了这个文件夹，你任何一条笔记都不会丢失，但你将失去你对这个库的自定义配置。当你再次在 Obsidian 中打开这个库时，`.obsidian` 文件夹将被重新创建。如果你使用 `git` 来控制笔记版本的话，最好将这个文件夹加入 `ignore` 目录。这是因为 `.obsidian` 文件夹中的缓存文件会经常改动，这将使得 commit 列表变得非常混乱。但除此之外，我们并没有发现其他问题。


如果你使用自定义主题，Obsidian 会在库的根目录创建一个名为 `obsidian.css` 的文件。想获取更多关于自定义主题内容，参见[[自定义主题]]。（新版本已修改了主题存放的位置）

Obsidian 还会在系统目录中存储一些信息。对于不同的操作系统，信息存储的路径是不同的：Mac 上的路径是 `/Users/yourusername/Library/Application Support/obsidian`， Windows 上的路径是 `%APPDATA%\Obsidian\` 与 `$XDG_CONFIG_HOME/Obsidian/`，Linux 上的路径是 `~/.config/Obsidian/`。因此，我们建议不要在以上路径中创建库。

除了以上所列的路径外，你可以在系统上的任意位置创建你的库。Obsidian 可以与 Dropbox、iCloud、OneDrive、git 等同步服务配合使用，并且配合良好。