---
permalink: publish/domains
mobile: true
description: Pro svůj web Obsidian Publish můžete nastavit vlastní doménu nebo subdoménu.
---
Pro svou stránku [[Úvod do Obsidian Publish|Obsidian Publish]] si můžete nastavit vlastní doménu nebo subdoménu.

> [!warning] Varování
> V tuto chvíli podporujeme konfiguraci vlastních domén pouze následujícími metodami:
>
> - [[#Nastavení pomocí CloudFlare]] s použitím [režimu Full](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Nastavení pomocí proxy]]
> 
> Zatím nemáme možnost vystavit SSL certifikát vaším jménem.

## Nastavení pomocí CloudFlare

Nejjednodušší způsob, jak nastavit vlastní doménu nebo subdoménu, je vytvořit si účet na [CloudFlare](https://cloudflare.com) a nechat CloudFlare spravovat DNS vaší domény.

Následující kroky používají CloudFlare ke konfiguraci vlastní domény pro vaši stránku Obsidian Publish, ať už pomocí kořenové domény (`mysite.com`) nebo subdomény (`notes.mysite.com`).

> [!important] Důležité
> CloudFlare je **jediný oficiálně podporovaný poskytovatel** pro nastavení vlastních domén. Použití následujících instrukcí s jakýmkoli jiným poskytovatelem pravděpodobně nebude fungovat.

**CloudFlare:**

1. Otevřete Cloudflare pro doménu, na které chcete hostovat svou Publish stránku, například `mysite.com`, i když chcete subdoménu jako `notes.mysite.com`.
2. Přejděte na **DNS** a klikněte na **Add Record**.
3. Vyberte **CNAME**.
4. Do pole **name** zadejte svou doménu nebo subdoménu, například `notes.mysite.com`.
5. Do pole **target** zadejte `publish-main.obsidian.md`. Do této hodnoty nezahrnujte svou osobní sub-URL. Obsidian Publish to řeší z vaší konfigurace.
6. Ujistěte se, že **proxy status** je zapnutý. Měl by být zapnutý ve výchozím nastavení.
7. Přejděte na **SSL/TLS** a nastavte režim šifrování SSL/TLS na "Full" pro automatickou konfiguraci SSL/TLS certifikátu.

> [!note] Poznámka
> Pro přesměrování jak `mysite.com`, tak `www.mysite.com` na Obsidian Publish musíte vytvořit [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) s následujícím nastavením:
>
> - URL match: `www.mysite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://mysite.com/$1`
>
> Po vytvoření pravidla stránky vytvořte CNAME záznam pro `www.mysite.com` stejně jako jste to udělali pro `mysite.com`.

**Obsidian:**

1. Otevřete Obsidian na svém počítači.
2. V [[Postranní panel nástrojů|postranním panelu nástrojů]] vlevo klikněte na **Publikovat změny** ![[lucide-send.svg#icon]].
3. V části **Publikovat změny** vyberte **Změna nastavení stránky** ![[lucide-cog.svg#icon]].
4. Vedle **Vlastní doména** vyberte **Nastavit**.
5. Do pole **Vlastní URL** zadejte URL své domény nebo subdomény. Ujistěte se, že do pole vlastní URL nezadáváte `www.`.

> [!note] Poznámka
> Pokud nastavení vaší vlastní domény skončí smyčkou přesměrování, pravděpodobně byl režim šifrování v CloudFlare nastaven na "Flexible" místo "Full".

## Nastavení pomocí proxy

SSL/TLS pro svou vlastní doménu můžete také nastavit pomocí vlastního webového serveru.

Pokud již máte webové stránky hostované na své doméně nebo subdoméně, můžete také použít tuto možnost a nastavit svůj web tak, aby načítal stránku Obsidian Publish pod konkrétní cestou URL, namísto hostování celé stránky.

Přesměrujte přes proxy všechny požadavky pod touto cestou URL na `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` a nakonfigurujte nastavení stránky v Obsidian na stejnou cestu URL nastavením **Vlastní URL** na `mysite.com/my-notes`.

Obsidian Publish můžete také nastavit jako sub-URL stránky, kterou vlastníte. Například `https://mysite.com/my-notes/`. K dosažení toho musíte hostovat vlastní server a přesměrovat přes proxy všechny požadavky na náš server na `https://publish.obsidian.md/`.

Následující příklady nastavení proxy nejsou vyčerpávající, ale poskytují běžné metody pro tuto implementaci.

### NGINX

Do vaší konfigurace NGINX přidejte následující:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Někteří uživatelé hlásili, že může být nutné přidat `$request_uri` do proxy pass:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

Do `.htaccess` přidejte následující:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Poznámka
> `mod_rewrite` musí být zapnutý a možná budete muset také nakonfigurovat [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

V `netlify.toml` [nakonfigurujte přesměrování](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

V `vercel.json` [nakonfigurujte přepisy](https://vercel.com/docs/configuration#project/rewrites):

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

Tento minimální výňatek konfigurace přesměrovává `mysite.com` na Obsidian Publish.
Kompletní příklad naleznete v [dokumentaci Traefik](https://doc.traefik.io/traefik/routing/overview/).

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

### Podporované HTTP X-Headers

Pokud vaše proxy služba neumožňuje cesty dotazů, můžete použít `https://publish.obsidian.md/` s vlastní hlavičkou `x-obsidian-custom-domain` nastavenou na URL vaší stránky `mysite.com/my-subpath`.

## Přesměrování staré stránky na vlastní doménu

Pokud chcete přesměrovat své návštěvníky ze staré stránky `publish.obsidian.md` na svou novou vlastní doménu, zapněte možnost **Přesměrovat na vaši vlastní doménu** při konfiguraci vlastní domény.

## Řešení problémů

Jakmile nastavíte svou vlastní doménu, pokud jste svou stránku navštívili z předchozího odkazu `https://publish.obsidian.md/slug`, může být nutné vymazat mezipaměť prohlížeče, aby některé věci (jako písma, grafy nebo přístup chráněný heslem) fungovaly správně. To je způsobeno bezpečnostními omezeními mezi doménami, která jsou vynucována moderními prohlížeči. Dobrou zprávou je, že čtenáři vaší stránky by se s tímto problémem nikdy neměli setkat, pokud jim umožníte přistupovat pouze přes vaši vlastní doménu.
