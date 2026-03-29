---
permalink: publish/domains
mobile: true
description: Du kan konfigurera en anpassad domän eller underdomän för din Obsidian Publish-webbplats.
---
Du kan konfigurera en anpassad domän eller underdomän för din [[Introduktion till Obsidian Publish|Obsidian Publish]]-webbplats.

> [!warning] Varning
> För tillfället stöder vi bara konfiguration av anpassade domäner med följande metoder:
>
> - [[#Konfigurera med CloudFlare]] med [Full-läge](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Konfigurera med en proxy]]
> 
> Vi har ännu inget sätt att tillhandahålla ett SSL-certifikat å dina vägnar.

## Konfigurera med CloudFlare

Det enklaste sättet att konfigurera en anpassad domän eller underdomän är att skapa ett [CloudFlare](https://cloudflare.com)-konto och låta CloudFlare hantera din domäns DNS.

Följande steg använder CloudFlare för att konfigurera en anpassad domän för din Obsidian Publish-webbplats, antingen med en rotdomän (`mysite.com`) eller en underdomän (`notes.mysite.com`).

> [!important] Viktigt
> CloudFlare är den **enda officiellt stödda leverantören** för att konfigurera anpassade domäner. Att använda följande instruktioner med andra leverantörer kommer sannolikt inte att fungera.

**CloudFlare:**

1. Öppna Cloudflare för den domän där du vill vara värd för din Publish-webbplats, till exempel `mysite.com`, även om du vill ha en underdomän som `notes.mysite.com`.
2. Gå till **DNS** och klicka på **Add Record**.
3. Välj **CNAME**.
4. I **name**, ange din domän eller underdomän, till exempel `notes.mysite.com`.
5. I **target**, ange `publish-main.obsidian.md`. Inkludera inte din personliga under-URL i detta värde. Obsidian Publish hanterar detta från din konfiguration.
6. Se till att **proxy status** är aktiverad. Det bör vara aktiverat som standard.
7. Gå till **SSL/TLS** och ställ in SSL/TLS-krypteringsläget på "Full" för att konfigurera SSL/TLS-certifikatet automatiskt.

> [!note] Notera
> För att omdirigera både `mysite.com` och `www.mysite.com` till Obsidian Publish behöver du skapa en [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) med följande inställningar:
>
> - URL match: `www.mysite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://mysite.com/$1`
>
> Efter att du har skapat sidregeln, skapa en CNAME-post för `www.mysite.com` precis som du gjorde för `mysite.com`.

**Obsidian:**

1. Öppna Obsidian på din dator.
2. I [[Ribbon|ribbon]] till vänster, klicka på **Publish changes** ![[lucide-send.svg#icon]].
3. Under **Publish changes**, välj **Change site options** ![[lucide-cog.svg#icon]].
4. Bredvid **Custom domain**, välj **Konfigurera**.
5. I **Custom URL**, ange URL:en till din domän eller underdomän. Se till att inte ange `www.` i fältet för anpassad URL.

> [!note] Notera
> Om din konfiguration av anpassad domän hamnar i en omdirigeringsloop beror det troligen på att krypteringsläget i CloudFlare har ställts in på "Flexible" istället för "Full".

## Konfigurera med en proxy

Du kan också konfigurera SSL/TLS för din anpassade domän genom att använda din egen webbserver.

Om du redan har en webbplats under din domän eller underdomän kan du också använda detta alternativ och konfigurera din webbplats att ladda din Obsidian Publish-webbplats under en specifik URL-sökväg, istället för att vara värd för hela webbplatsen.

Proxya alla förfrågningar under den URL-sökvägen till `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` och konfigurera webbplatsalternativen i Obsidian till samma URL-sökväg genom att ställa in **Custom URL** på `mysite.com/my-notes`.

Du kan också konfigurera Obsidian Publish som en under-URL på en webbplats du äger. Till exempel `https://mysite.com/my-notes/`. För att uppnå detta måste du vara värd för din egen server och proxya alla förfrågningar till vår server på `https://publish.obsidian.md/`.

Följande exempel på proxy-konfigurationer är inte uttömmande, men ger vanliga metoder för denna implementation.

### NGINX

I din NGINX-konfiguration, lägg till följande:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Vissa användare har rapporterat att det kan krävas att lägga till `$request_uri` i proxy pass:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

I `.htaccess`, lägg till följande:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Notera
> `mod_rewrite` måste vara aktiverat, och du kan också behöva konfigurera [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

I `netlify.toml`, [konfigurera omdirigeringar](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

I `vercel.json`, [konfigurera omskrivningar](https://vercel.com/docs/configuration#project/rewrites):

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

Detta minimala konfigurationsutdrag omdirigerar `mysite.com` till Obsidian Publish.
Se [Traefik-dokumentationen](https://doc.traefik.io/traefik/routing/overview/)
för ett komplett exempel.

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

### HTTP X-Headers som stöds

Om din proxytjänst inte tillåter frågesökvägar kan du använda `https://publish.obsidian.md/` med en anpassad header `x-obsidian-custom-domain` inställd på din webbplats-URL `mysite.com/my-subpath`.

## Omdirigera gammal webbplats till anpassad domän

Om du vill omdirigera dina besökare från den gamla `publish.obsidian.md`-webbplatsen till din nya anpassade domän, aktivera alternativet **Omdirigera till din anpassade domän** när du konfigurerar din anpassade domän.

## Felsökning

När du har konfigurerat din anpassade domän kan du behöva rensa webbläsarens cache om du tidigare besökt din webbplats via din tidigare `https://publish.obsidian.md/slug`-länk, för att vissa saker (som typsnitt, grafer eller lösenordsskyddad åtkomst) ska fungera korrekt. Detta beror på de säkerhetsbegränsningar för korsdomäner som moderna webbläsare tillämpar. Den goda nyheten är att läsare av din webbplats aldrig bör stöta på detta problem om du bara låter besökare använda din anpassade domän.
