---
cssclasses:
  - soft-embed
---
Our [Security](https://obsidian.md/security) page compiles information about how Obsidian approaches protecting your data. It is also the home for security audits completed by third parties.

## Considerations

Obsidian is designed to function as an offline and standalone application. Obsidian also supports custom plugins and themes. Additionally, we provide both official and unofficial support for various file syncing services.

If you do not intend to use community plugins or themes, or [[Introduction to Obsidian Sync|Obsidian Sync]] or [[Introduction to Obsidian Publish|Obsidian Publish]], your standard procedures for securing applications will apply. However, if you plan to use any of these features, we recommend thoroughly evaluating their suitability for your workplace.

## Community plugins and themes

Please review the [[Plugin security]] page in addition to this section. 

The Obsidian teams reviews all community plugins and themes submitted to the official directory, via our [releases repository](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc). We do not review community items which have not been submitted to the official directory.

We do not have a community store for [[CSS snippets]]. These files are typically obtained from within our [Obsidian Community](https://obsidian.md/community) or from public GitHub repositories.

We require bundling of assets in CSS snippets and themes. However, we have made an exception for [Google Fonts](https://fonts.google.com/) to maintain performance on mobile devices, where the impact of bundling fonts is more noticeable.

## Network and access

While prioritizing the local-first approach of our application, Obsidian does make network calls based on the services and features you use. These network connections can be disabled via a domain firewall or application lockdown.

Obsidian makes these network connections on HTTPS port 443.

The following is a list of network connections Obsidian makes.

### Obsidian-sourced connections

- **Early access updates**: Uses `releases.obsidian.md`.
- **Account and license management**: When accessing your Obsidian account in Settings and applying a Commercial License, we call `api.obsidian.md`.
- **Obsidian Sync**: Used for syncing your notes across devices.
	- `sync-xx.obsidian.md`, where `xx` is a number between 01-100.
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

### Account security

**Does Obsidian support Single Sign-On (SSO)?**
Obsidian does not support SSO. In most use cases, Obsidian does not require an account or sign-on in your workplace, unless you are using [[Introduction to Obsidian Publish|Obsidian Publish]] or [[Introduction to Obsidian Sync|Obsidian Sync]].

**Does Obsidian support Multi-Factor Authentication (MFA)?**
Obsidian supports [[2-factor authentication]] (2FA) for Obsidian accounts, but it does not support 2FA for opening and using the base application. Users of [[Introduction to Obsidian Sync|Obsidian Sync]] and [[Introduction to Obsidian Publish|Obsidian Publish]] who have 2FA enabled will be required to confirm their 2FA key when they first log into the application.

### Assessments and certifications

**Will you accept security assessments from our company?**
We require a minimum quoted purchase order amount before considering completing a security assessment. These assessments are often time-consuming and may not be applicable to offline applications like Obsidian, as they are typically geared towards cloud-based services.

However, you can waive this quoted purchase order amount by agreeing to pay a retainer fee. Please contact [[Help and support#Contact Obsidian support|Obsidian support]] to inquire about this option.

**Do you have any recognized certifications related to Information Security or quality standards, such as ISO27001, NIST, COBIT, or other ISO or CSA certifications?**
Not at this time. It may be something we explore in the future, but for now, our focus is on our [security audits](https://obsidian.md/security).