---
permalink: plugins/web-viewer
---
Web viewer is a [[Core plugins|core plugin]] that lets you open external links within Obsidian on desktop. This lets you reading link content without leaving the app and makes multitasking on web research projects easier.

External links open as a [[Tabs|tab]] which you can rearrange, split, and open in a [[pop-out windows|pop-out window]]. Any web page cards embedded in [[canvas]] files can be opened as web viewer tabs.

Web viewer is not a replacement for your primary browser. Web viewer provides a quick way to access web pages for research within Obsidian. However, it does not offer the full functionality, security controls, or extensibility of a dedicated browser.

## Reader view

Click the glasses icon to view a plain text version of the web page. This feature works by cleaning the content using Mozilla's Readability library developed for Firefox.

## Save to vault

Click the more actions icon to save a web page to your vault. You can customize the save page location by going to **Settings** → **Web viewer**.

## Ad blocking

Web viewer blocks ads by default. You can customize ad blocking rules by adding lists such as [Easylist](https://easylist.to/). 

## Security

If you use third-party Obsidian plugins, we recommend using your primary browser for sensitive tasks and password-protected websites instead of Web viewer.

Web viewer is based on the same [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag) feature that lets you embed web pages in [[Canvas]]. Web viewer has been [independently audited](https://obsidian.md/blog/cure53-second-client-audit/) to verify that it has been safely implemented.

Obsidian plugins [[Plugin security#Plugin capabilities|are not sandboxed]] and have deep control over the app. This design enables powerful functionality but also comes with security trade-offs. While Obsidian is running, third-party plugins have full access to cookies in Web viewer.