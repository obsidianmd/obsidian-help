---
permalink: import/google-keep
aliases:
  - Import from Google Keep
---

通过[[迁移助手|Importer插件]]，Obsidian 让你可以轻松地从 Google Keep 迁移笔记。

## 从 Google Keep 导出数据

1. 进入[Google Takeout](https://takeout.google.com/settings/takeout)并登录您的Google账号。
2. 点击右上角的**取消全选**。
3. 滚动页面并从列表中选择**Keep**。
4. 滚动到页面底部，点击**下一步**。
5. 在下一个页面，点击**创建导出**按钮。
6. 下载导出的 `.zip`文件。

## 将Google Keep数据导入Obsidian

你需要安装Obsidian 官方的 [[迁移助手|Importer插件]]，你可以[在此处安装](obsidian://show-plugin?id=obsidian-importer)。

1. 打开**设置**。
2. 进入**社区插件市场**并[安装Importer](obsidian://show-plugin?id=obsidian-importer)。
3. 启用 Importer 插件。
4. 使用命令面板或功能区按钮打开**Importer**插件。
5. 在**文件格式**下选择**Google Keep (.zip).**
6. 选择`.zip`文件的位置。
7. 点击**导入**并等待导入完成。
8. 完成！

### 导入说明

- 所有的清单将作为顶级列表项目导入，因为 Google Keep 无法导出缩进信息。
- 由于 Obsidian 不支持日程相关功能，提醒和分配用户相关内容将不会被导入。
- 其他信息将作为内容和标签的组合导入 Obsidian。