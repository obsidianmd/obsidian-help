---
aliases:
  - Obsidian Publish/Set up Google Analytics
permalink: publish/analytics
---
## Prerequisites

To use analytics on your [[Introduction to Obsidian Publish|Obsidian Publish]] site, you need a [[Custom domains|custom domain]].

> [!important]
> Before you enable analytics, make sure that your local laws and regulations allow you to track your visitors. Depending the tools you use, you may need to add a consent banner to your site.

## Google Analytics

To enable Google Analytics for your Obsidian Publish site:

1. In ribbon, to the left of the application window, click **Publish changes** ( ![[lucide-send.svg#icon]] ).
2. In the **Publish changes** dialog, click **Change site options** ( ![[lucide-cog.svg#icon]] ).
3. In **Google Analytics tracking code**, enter your tracking code.

To use Google Tag Manager instead of Google Analytics, use custom JavaScript to add your own scripts.

## Plausible, Fathom, and other analytics services

You can add most analytics services to your site via your [[Customize your site|publish.js]] file. Make sure to replace `yourdomain.com` with your domain, and the script `src` with the script from your analytics provide.

Here is an example using [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

 The same approach can be used for [Fathom Analytics](https://usefathom.com/). Note the change from `data-domain` to `data-site` — different analytics providers may have a different format for how the script should be inserted.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Troubleshooting

To verify that your site is using your analytics service, disable any ad-blocking browser extensions, such as uBlock Origin, that may block the tracking script from running.