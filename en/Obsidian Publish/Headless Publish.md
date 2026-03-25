---
description: Obsidian Publish offers a headless client to publish vaults without using the desktop app. Useful for CI pipelines and automated workflows.
permalink: publish/headless
cssclasses:
  - reference
---
[[Introduction to Obsidian Publish|Obsidian Publish]] offers a headless client to publish vaults without using the desktop app. Useful for CI pipelines and automated workflows. Publish your latest changes on a schedule or as part of a build pipeline.

Install [[Obsidian Headless]] **(open beta)** to interact with [[Introduction to Obsidian Publish|Obsidian Publish]] from the command line without the Obsidian desktop app.

## Quick start

Install [[Obsidian Headless|Obsidian Headless]] **(open beta)**:

```shell
npm install -g obsidian-headless
```

You must have an active [[Introduction to Obsidian Publish|Obsidian Publish subscription]].

```shell
# Login
ob login

# List your publish sites
ob publish-list-sites

# Connect a local vault to a publish site
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Preview changes without publishing
ob publish --dry-run

# Publish changes
ob publish
```

## Commands

### `ob publish-list-sites`

List all Publish sites available to your account.

### `ob publish-create-site`

Create a new Publish site.

```
ob publish-create-site --slug <slug>
```

| Option | Description |
| --- | --- |
| `--slug` | URL identifier for your site (e.g. `my-notes` creates `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Connect a local vault to a Publish site.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Option | Description |
| --- | --- |
| `--site` | Site ID or slug |
| `--path` | Local vault path (default: current directory) |

### `ob publish`

Publish vault changes to your site. By default, only files with `publish: true` in their frontmatter are included.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Option | Description |
| --- | --- |
| `--path` | Local vault path (default: current directory) |
| `--all` | Include all files, not just those with a publish flag |
| `--dry-run` | Show changes without publishing |
| `--yes` | Publish without prompting for confirmation |

### `ob publish-config`

View or change include/exclude folder settings for a vault. Run with no options to display the current configuration.

```
ob publish-config [--path <local-path>] [options]
```

| Option | Description |
| --- | --- |
| `--path` | Local vault path (default: current directory) |
| `--includes` | Folders to include, comma-separated (empty string to clear) |
| `--excludes` | Folders to exclude, comma-separated (empty string to clear) |

### `ob publish-site-options`

View or update site-wide display and navigation settings. Run with no options to display the current settings.

```
ob publish-site-options [--path <local-path>] [options]
```

| Option | Description |
| --- | --- |
| `--path` | Local vault path (default: current directory) |
| `--site-name` | Site name |
| `--index-file` | Home page file path |
| `--logo` | Logo file path (empty string to clear) |
| `--show-navigation` | Show navigation sidebar |
| `--show-graph` | Show graph view |
| `--show-outline` | Show table of contents |
| `--show-search` | Show search |
| `--show-backlinks` | Show backlinks |
| `--show-hover-preview` | Show hover preview |
| `--show-theme-toggle` | Show theme toggle |
| `--default-theme` | Default theme: `light` or `dark` |
| `--readable-line-length` | Readable line length |
| `--strict-line-breaks` | Strict line breaks |
| `--hide-title` | Hide inline title |
| `--sliding-window` | Sliding window mode |
| `--nav-order` | Navigation order, comma-separated paths (empty string to clear) |
| `--nav-hidden` | Hidden navigation items, comma-separated paths (empty string to clear) |

### `ob publish-unlink`

Disconnect a vault from a Publish site.

```
ob publish-unlink [--path <local-path>]
```
