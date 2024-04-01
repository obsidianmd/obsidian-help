---
cssClasses: soft-embed
---

This page details how to install and manage the Obsidian installation in your workplace.

## Installing and updating Obsidian

Download your preferred version of Obsidian from our [GitHub releases page](https://github.com/obsidianmd/obsidian-releases/releases). Each release includes a link to our changelog, detailing the changes.

For Windows users who need a system installer, use the `-allusers.exe` file on the releases page.

## Network and access

Obsidian is designed to function primarily as an offline application. However, it does make network calls based on the services and features you use. These network connections can be disabled via a domain firewall or application lockdown.

The following is a list of network connections Obsidian makes.

### Obsidian-sourced connections

- **Early access updates**: Uses `releases.obsidian.md`.
- **Account and license management**: When accessing your Obsidian account in Settings and applying a Commercial License, we call `api.obsidian.md`.
- **Obsidian Sync**: Used for syncing your notes across devices.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` and `publish-xx.obsidian.md`, where `xx` is a number.
    2. Frontend: `publish.obsidian.md`.


### GitHub-sourced connections

- **Public releases**: If automatic updates are enabled, Obsidian checks GitHub for public releases.
- **Third-party themes and plugins**:
    - A check is performed once every 12 hours from the app's startup time to fetch a file hosted on GitHub used for "plugin deprecations." This file helps remotely disable specific versions of plugins known to malfunction, cause data loss, or potentially be vulnerable or malicious.
    - Enabled plugins may generate network traffic outside Obsidian and GitHub's control.

### Other connections

- **Embedded online content**: When opening notes that embed online content, such as an image (`![cat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **DNS requests**: If a hostname needs to be resolved before establishing a connection, including DNS over HTTPS. Refer to [Chromium's documentation](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium) for more information.

## Frequently asked questions

**How do I deploy licenses across multiple installations?**
Currently, we do not support the ability to deploy licenses via a deployment script, such as in a `.json` file.