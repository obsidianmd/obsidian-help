You can set up a custom domain or subdomain for your [[Introduction to Obsidian Publish|Obsidian Publish]] site.

We don't yet have a way to provision SSL certificate on your behalf. If you want to enable HTTPS for a custom domain, you either need to use your own proxy or create a site on CloudFlare.

## Set up using CloudFlare

The easiest way to set up a custom domain or subdomain is to create a [CloudFlare](https://cloudflare.com) account and let CloudFlare manage your domain's DNS.

When you migrate to CloudFlare, you automatically keep all your existing DNS setup, including your subdomains, email service, and hosting services. Using CloudFlare can speed up your websites and add SSL to your sites for free.

Typically, users host their Obsidian Publish content on a root domain (e.g. `mysite.com`) or an immediate subdomain (e.g. `notes.mysite.com`).

**CloudFlare:**

1. Open Cloudflare to the domain you wish to add Publish to, such as `mysite.com`, even if you want a subdomain like `notes.mysite.com`.
2. Go to **DNS** and click **Add Record**.
3. Select **CNAME**
4. In **name**, enter your domain or subdomain, for example `notes.mysite.com`.
5. In **target**, enter `publish-main.obsidian.md`. Don't include your personal sub-URL in this value. Obsidian Publish handles this from your configuration.
6. Go to **SSL/TLS** and set the SSL/TLS encryption mode to "Full" to configure the SSL/TLS certificate automatically.

**Note:** To redirect both `mysite.com` and `www.mysite.com` to Obsidian Publish, you need to create a [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) with the following settings:

- URL match: `www.mysite.com/*`
- Foward URL - 301 Permanent Redirect
- Redirect URL: `https://mysite.com/$1`

Once you create the page rule, you should also create a CNAME record for `www.mysite.com` just like you created for `mysite.com`

**Obsidian:**

1. In ribbon, to the left of the application window, click **Publish changes** (paper plane icon).
2. In the **Publish changes** dialog, click **Change site options** (cog icon).
3. Next to **Custom domain**, click **Configure**.
4. In **Custom URL**, enter the URL to your domain or subdomain.

**Note:**: If your custom domain setup ends up in a redirect loop, it's likely that the encryption mode in CloudFlare has been set to "Flexible" instead of "Full".

## Set up using a proxy

If you want to host your own web server and set up your own SSL encryption, you can choose this option.

If you are already hosting a website under your domain or subdomain, you can also use this option and set up your website to load your Obsidian Publish site under a specific URL path, instead of hosting the full site.

Proxy all requests under that URL path to `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` and **configure the site options in Obsidian to the same URL path** by setting **Custom URL** to `mysite.com/my-notes`.

You can also set up Obsidian Publish as a sub-URL of a site you own. For example, `https://mysite.com/my-notes/`. To achieve this, you must host your own server and proxy all requests to our server at `https://publish.obsidian.md/`.

### NGINX

In your NGINX configuration, add the following:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
}
```

### Apache

In `.htaccess`, add the following:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

**Note:** `mod_rewrite` must be enabled, and you may also need to configure [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

```
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

In `vercel.json`, [configure rewrites](https://vercel.com/docs/configuration#project/rewrites):

```json
{
  ...

  "rewrites": [
    {
      "source": "/my-notes/",
      "destination": "https://publish.obsidian.md/serve?url=mysite.com/my-notes"
    },
    {
      "source": "/my-notes/:path*",
      "destination": "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:path*"
    }
  ]
}
```

### Supported HTTP X-Headers

If your proxy service doesn't allow query paths, you can use `https://publish.obsidian.md/` with a custom header `x-obsidian-custom-domain` set to your site URL `mysite.com/my-subpath`.

## Redirect old site to custom domain

If you want to redirect your visitors from the old `publish.obsidian.md` site to your new custom domain, enable the **Redirect to your custom domain** option when configuring your custom domain.

## Troubleshoot

Once you set up your custom domain, if you've visited your site from your previous `https://publish.obsidian.md/slug` link, you may have to clear your browser cache for certain things (like fonts, graphs, or password access) to work properly. This is due to the cross-domain security restrictions that are imposed by modern browsers. The good news is that readers of your site should never run into issue this if you only let visitors use your custom domain.
