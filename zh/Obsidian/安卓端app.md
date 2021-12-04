安卓端 app 现已公开，下载方式可见[我们的网站](https://obsidian.md/mobile)。

## 数据存储位置

在安卓手机上，Obsidian 的库保存在文档（Document）文件夹下的 Obsidian 文件夹中。文档文件夹通常储存在 SD 卡或 emulated storage 路径下。

Obsidian 文件夹中的任何子文件夹都会被视为一个库。当你粘贴一个文件夹到该目录下，再次打开 Obsidian 时就会在库列表中看到该文件夹。


## 同步

对于安卓端来说，你可以选择 [[Obsidian 同步服务]]来同步你的笔记，也可以使用第三方同步服务。


### Obsidian 同步服务


和桌面端一样，[[Obsidian 同步服务]]也是内置于安卓端中。

要在安卓端上使用同步服务，首先要新建一个空白的库。这个库应该与桌面端中使用的库名称一致，这样[[使用 obsidian URI|obsidian URII]] 才能正常工作。

随后，打开这个空白的库，在左侧边栏中打开设置，然后像桌面端一样启动同步服务：

1. 在账户页面登录你的 Obsidian 账号。
2. 在核心插件中启动 `同步` 插件。
3. 打开设置中 `插件选项` 下方的 ` 同步` 标签页。
4. 选择一个远程库，连接。
5. 保持 app 打开直到所有文件同步完成。

想要查看同步服务的同步状态，需要在屏幕上左滑，拉出右侧边栏，随后你就能看到和桌面端一样的同步状态标志。点击标志能查看更多同步信息，比如同步日志等。

### 第三方同步服务

你也可以使用你喜欢的第三方同步服务。

以下是一些可以用于同步的软件，如[Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) 或 [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite)。

## 存储权限

当你启动安卓端时，安卓端会向你请求访问当前设备上文档（Document）文件夹以及访问媒体文件的权限。

理想情况下，我们仅所需库文件夹的访问权限即可。但安卓系统为了更好的保护用户隐私，其文件许可 API （也被称为范围存储）的一些限制可能会让 Obsidian 无法正常工作。

其中最大的两个限制在于：

- 范围存储会对每个文件的访问执行许多额外的许可检查，这可能会造成 Obsidian 启动、使用时性能下降。
- 范围存储无法从外部监视修改，这使得很多第三方同步服务无法应用于 Obsidian。

谷歌特别为这类应用程序的开发者提供了特殊许可。黑曜石属于以下两种类型：“文档管理应用程序”和“设备上的文件搜索应用程序”。[点击这里了解更多相关信息](https://developer.android.com/training/data-storage/manage-all-files)。