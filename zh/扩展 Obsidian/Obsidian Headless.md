---
permalink: headless
description: Obsidian Headless 是 Obsidian 服务的命令行客户端。无需桌面应用即可同步你的仓库。
aliases:
  - 扩展 Obsidian/Obsidian Headless
---
Obsidian Headless **（公开测试版）** 是 Obsidian 服务的无界面客户端。它允许你通过命令行[[Headless Sync|同步仓库]]，无需桌面应用，同时享有 [[Obsidian 官方同步简介|Obsidian Sync]] 的速度、隐私和端到端加密优势。

你可能使用 Obsidian Headless 的场景：

- 自动化远程备份。
- 自动化发布网站。
- 让 AI 代理工具访问仓库，而无需访问你的整台电脑。
- 将团队共享仓库同步到服务器，供其他工具使用。
- 运行定时自动化任务，例如将日记汇总为周报、自动打标签等。

> [!info] Obsidian Headless 与 Obsidian CLI
> [[Obsidian CLI]] 用于从终端控制 Obsidian 桌面应用。Obsidian Headless 是一个独立客户端，可以独立运行，无需桌面应用。

## 安装

Obsidian Headless **（公开测试版）** 需要 Node.js 22 或更高版本。通过 [npm](https://www.npmjs.com/package/obsidian-headless) 安装：

```shell
npm install -g obsidian-headless
```

## 身份验证

### 登录

```shell
ob login
```

如果已登录，`ob login` 会显示你的账户信息。要切换账户，请传入 `--email` 和/或 `--password` 重新登录。

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

省略选项时均支持交互式输入——系统会提示输入邮箱和密码，如果账户启用了两步验证，也会自动要求输入验证码。

要登出并清除已保存的凭据：

```shell
ob logout
```

## 服务

- [[Headless Sync]]：通过命令行使用 [[Obsidian 官方同步简介|Obsidian Sync]]，无需桌面应用。
- [[Headless Publish]]：通过命令行使用 [[发布服务简介|Obsidian Publish]]，无需桌面应用。
