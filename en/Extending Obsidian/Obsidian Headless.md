---
description: Obsidian Headless is a command line client for Obsidian services. Sync your vaults without the desktop app.
permalink: headless
aliases:
  - headless
---
Obsidian Headless is a headless client for Obsidian services. It lets you sync your vaults from the command line without the desktop app. It is ideal for servers, CI pipelines, and automation. See [[Headless Sync]].

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] controls the Obsidian desktop app from your terminal. Obsidian Headless is a standalone client that runs independently — no desktop app required.

## Install

Obsidian Headless requires Node.js 22 or later. Install it from [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Authentication

### Log in

```shell
ob login
```

If already logged in, `ob login` displays your account info. To switch accounts, pass `--email` and/or `--password` to log in again.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

All options are interactive when omitted — email and password are prompted, and 2FA is requested automatically if enabled on the account.

To log out and clear stored credentials:

```shell
ob logout
```

### Environment variable

For non-interactive use (CI, scripts, servers), set the `OBSIDIAN_AUTH_TOKEN` environment variable instead of using `ob login`:

```shell
export OBSIDIAN_AUTH_TOKEN="your-auth-token"
```

When set, all commands that require authentication use this token automatically.

## Services

- [[Headless Sync]]
	- Sync your vaults from the command line without the desktop app.
