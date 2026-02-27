---
description: Obsidian Sync offers a headless client to sync vaults without using the desktop app. Useful for CI pipelines, agents, and automated workflows. Sync the latest changes or keep files continuously up to date.
permalink: sync/headless
---
[[Introduction to Obsidian Sync|Obsidian Sync]] offers a headless client to sync vaults without using the desktop app. Useful for CI pipelines, agents, and automated workflows. Sync the latest changes or keep files continuously up to date.

Install [[Obsidian Headless]] **(open beta)** to interact with [[Introduction to Obsidian Sync|Obsidian Sync]] from the command line without the Obsidian desktop app. Headless Sync uses the same [[Security and privacy|encryption and privacy protections]] as the desktop app, including end-to-end encryption.

## Quick start

> [!error] Back up your data before you start
> 1. Always back up your data before you start in case anything unexpected happens.
> 2. Do not sync the same vault using both the desktop app and headless client  to prevent data conflicts or corruption.


Install [[Obsidian Headless|Obsidian Headless]] **(open beta)**:

```shell
npm install -g obsidian-headless
```

You must have an active [[Plans and storage limits|Obsidian Sync subscription]].

```shell
# Login
ob login

# List your remote vaults
ob sync-list-remote

# Set up a vault for syncing
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Run a one-time sync
ob sync

# Run continuous sync (watches for changes)
ob sync --continuous
```

## Commands

### `ob sync-list-remote`

List all remote vaults available to your account, including shared vaults.

### `ob sync-list-local`

List locally configured vaults and their paths.

### `ob sync-create-remote`

Create a new remote vault.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Option | Description |
| --- | --- |
| `--name` | Vault name (required) |
| `--encryption` | `standard` for managed encryption, `e2ee` for end-to-end encryption |
| `--password` | End-to-end encryption password (prompted if omitted) |
| `--region` | Server [[Sync regions\|region]] (automatic if omitted) |

### `ob sync-setup`

Set up sync between a local vault and a remote vault.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Option | Description |
| --- | --- |
| `--vault` | Remote vault ID or name (required) |
| `--path` | Local directory (default: current directory) |
| `--password` | E2E encryption password (prompted if omitted) |
| `--device-name` | Device name shown in [[Version history\|sync version history]] |
| `--config-dir` | [[Configuration folder\|Config directory]] name (default: `.obsidian`) |

### `ob sync`

Run sync for a configured vault.

```
ob sync [--path <local-path>] [--continuous]
```

| Option | Description |
| --- | --- |
| `--path` | Local vault path (default: current directory) |
| `--continuous` | Run continuously, watching for changes |

### `ob sync-config`

View or change [[Sync settings and selective syncing|sync settings]] for a vault. Run with no options to display the current configuration.

```
ob sync-config [--path <local-path>] [options]
```

| Option | Description |
| --- | --- |
| `--path` | Local vault path (default: current directory) |
| `--conflict-strategy` | `merge` or `conflict` |
| `--file-types` | Attachment types to sync: `image`, `audio`, `video`, `pdf`, `unsupported` (comma-separated, empty to clear) |
| `--configs` | Config categories to sync: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (comma-separated, empty to disable config syncing) |
| `--excluded-folders` | Folders to exclude (comma-separated, empty to clear) |
| `--device-name` | Device name shown in [[Version history\|sync version history]] |
| `--config-dir` | [[Configuration folder\|Config directory]] name (default: `.obsidian`) |

### `ob sync-status`

Show sync status and configuration for a vault.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Disconnect a vault from sync and remove stored credentials.

```
ob sync-unlink [--path <local-path>]
```

## Native modules

Obsidian Headless includes a prebuilt native addon for setting file creation time (birthtime) on Windows and macOS. This preserves original creation timestamps when downloading files from the server.

The addon targets N-API version 3, so the compiled binaries are ABI-stable and work across Node.js versions without recompilation.

On Linux, birthtime is not supported — the addon is not included and sync operates normally without it.

Prebuilt binaries are included for:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
