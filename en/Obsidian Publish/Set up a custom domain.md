You can set up a custom domain or subdomain for your [[Introduction to Obsidian Publish|Obsidian Publish]] site.

> [!warning]
> At the moment, we only support configuring custom domains using the following methods:
>
> - [[#Set up using CloudFlare]] using [Full mode](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Set up using a proxy]]
> 
> We don't yet have a way to provision an SSL certificate on your behalf.

## Set up using CloudFlare

The easiest way to set up a custom domain or subdomain is to create a [CloudFlare](https://cloudflare.com) account and let CloudFlare manage your domain's DNS.

The following steps use CloudFlare to configure a custom domain for your Obsidian Publish site, either using a root domain (`mysite.com`) or a subdomain (`notes.mysite.com`).

> [!important]
> CloudFlare is the **only officially supported provider** for setting up custom domains. Using the following instructions with any other providers will likely not work.

**CloudFlare:**

1. Open Cloudflare to the domain where you want to host your Publish site, such as `mysite.com`, even if you want a subdomain like `notes.mysite.com`.
2. Go to **DNS** and click **Add Record**.
3. Select **CNAME**.
4. In **name**, enter your domain or subdomain, for example `notes.mysite.com`.
5. In **target**, enter `publish-main.obsidian.md`. Don't include your personal sub-URL in this value. Obsidian Publish handles this from your configuration.
6. Make sure that **proxy status** is enabled. It should be enabled by default.
7. Go to **SSL/TLS** and set the SSL/TLS encryption mode to "Full" to configure the SSL/TLS certificate automatically.

> [!note]
> To redirect both `mysite.com` and `www.mysite.com` to Obsidian Publish, you need to create a [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) with the following settings:
>
> - URL match: `www.mysite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://mysite.com/$1`
>
> After you've created the page rule, create a CNAME record for `www.mysite.com` just like you did for `mysite.com`.

**Obsidian:**

1. Open Obsidian on your computer.
2. In the [[Ribbon]] at the left, click **Publish changes** ( ![[lucide-send.svg#icon]] ).
3. Under **Publish changes**, select **Change site options** ( ![[lucide-cog.svg#icon]] ).
4. Next to **Custom domain**, select **Configure**.
5. In **Custom URL**, enter the URL to your domain or subdomain.

> [!note]
> If your custom domain setup ends up in a redirect loop, it's likely that the encryption mode in CloudFlare has been set to "Flexible" instead of "Full".

## Set up using a proxy

You can also set up SSL/TLS for your custom domain by using your own web server.

If you are already hosting a website under your domain or subdomain, you can also use this option and set up your website to load your Obsidian Publish site under a specific URL path, instead of hosting the full site.

Proxy all requests under that URL path to `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` and configure the site options in Obsidian to the same URL path, by setting **Custom URL** to `mysite.com/my-notes`.

You can also set up Obsidian Publish as a sub-URL of a site you own. For example, `https://mysite.com/my-notes/`. To achieve this, you must host your own server and proxy all requests to our server at `https://publish.obsidian.md/`.

### NGINX

In your NGINX configuration, add the following:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

In `.htaccess`, add the following:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note]
> `mod_rewrite` must be enabled, and you may also need to configure [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

```plain
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

### Caddy

```plain
mysite.com {
  encode zstd gzip
  handle /my-notes* {
    reverse_proxy https://publish.obsidian.md {
      header_up Host {upstream_hostport}
    }
    rewrite * /serve?url=mysite.com{path}
  }
}
```

### Traefik

This minimal configuration excerpt redirects `mysite.com` to Obsidian publish.
See the [Traefik documentation](https://doc.traefik.io/traefik/routing/overview/)
for a complete example.

```yaml
http:
  routers:
    mysite:
      rule: Host(`mysite.com`)
      service: obsidian-publish
      middlewares:
        - "publish-headers"
  services:
    obsidian-publish:
      loadBalancer:
        servers:
          - url: https://publish.obsidian.md
  middlewares:
    publish-headers:
      headers:
        customRequestHeaders:
          Host: "publish.obsidian.md"
          x-obsidian-custom-domain: "mysite.com"
```

### Supported HTTP X-Headers

If your proxy service doesn't allow query paths, you can use `https://publish.obsidian.md/` with a custom header `x-obsidian-custom-domain` set to your site URL `mysite.com/my-subpath`.

## Redirect old site to custom domain

If you want to redirect your visitors from the old `publish.obsidian.md` site to your new custom domain, enable the **Redirect to your custom domain** option when configuring your custom domain.

## Troubleshoot

Once you set up your custom domain, if you've visited your site from your previous `https://publish.obsidian.md/slug` link, you may have to clear your browser cache for certain things (like fonts, graphs, or password access) to work properly. This is due to the cross-domain security restrictions that are imposed by modern browsers. The good news is that readers of your site should never run into issue this if you only let visitors use your custom domain.
