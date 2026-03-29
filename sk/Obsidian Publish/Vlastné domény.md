---
permalink: publish/domains
mobile: true
description: Pre svoju stránku Obsidian Publish si môžete nastaviť vlastnú doménu alebo subdoménu.
---
Môžete si nastaviť vlastnú doménu alebo subdoménu pre svoju stránku [[Úvod do Obsidian Publish|Obsidian Publish]].

> [!warning] Varovanie
> V súčasnosti podporujeme konfiguráciu vlastných domén iba pomocou nasledujúcich metód:
>
> - [[#Nastavenie pomocou CloudFlare]] s použitím [režimu Full](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Nastavenie pomocou proxy]]
> 
> Zatiaľ nemáme možnosť zabezpečiť SSL certifikát vo vašom mene.

## Nastavenie pomocou CloudFlare

Najjednoduchší spôsob, ako nastaviť vlastnú doménu alebo subdoménu, je vytvoriť si účet na [CloudFlare](https://cloudflare.com) a nechať CloudFlare spravovať DNS vašej domény.

Nasledujúce kroky používajú CloudFlare na konfiguráciu vlastnej domény pre vašu stránku Obsidian Publish, či už s použitím koreňovej domény (`mysite.com`) alebo subdomény (`notes.mysite.com`).

> [!important] Dôležité
> CloudFlare je **jediný oficiálne podporovaný poskytovateľ** na nastavenie vlastných domén. Použitie nasledujúcich pokynov s akýmkoľvek iným poskytovateľom pravdepodobne nebude fungovať.

**CloudFlare:**

1. Otvorte Cloudflare pre doménu, na ktorej chcete hosťovať svoju Publish stránku, napríklad `mysite.com`, aj keď chcete subdoménu ako `notes.mysite.com`.
2. Prejdite na **DNS** a kliknite na **Add Record**.
3. Vyberte **CNAME**.
4. Do poľa **name** zadajte svoju doménu alebo subdoménu, napríklad `notes.mysite.com`.
5. Do poľa **target** zadajte `publish-main.obsidian.md`. Nezahŕňajte svoju osobnú sub-URL do tejto hodnoty. Obsidian Publish to spracuje z vašej konfigurácie.
6. Uistite sa, že **proxy status** je povolený. Predvolene by mal byť zapnutý.
7. Prejdite na **SSL/TLS** a nastavte režim šifrovania SSL/TLS na „Full" pre automatickú konfiguráciu SSL/TLS certifikátu.

> [!note] Poznámka
> Na presmerovanie `mysite.com` aj `www.mysite.com` na Obsidian Publish musíte vytvoriť [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) s nasledujúcimi nastaveniami:
>
> - URL match: `www.mysite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://mysite.com/$1`
>
> Po vytvorení pravidla stránky vytvorte CNAME záznam pre `www.mysite.com` rovnako ako pre `mysite.com`.

**Obsidian:**

1. Otvorte Obsidian na počítači.
2. Na [[Panel nástrojov|paneli nástrojov]] naľavo kliknite na **Publikovať zmeny** ![[lucide-send.svg#icon]].
3. V časti **Publikovať zmeny** vyberte **Zmeniť možnosti stránky** ![[lucide-cog.svg#icon]].
4. Vedľa položky **Vlastná doména** vyberte **Konfigurovať**.
5. Do poľa **Vlastné URL** zadajte URL adresu svojej domény alebo subdomény. Uistite sa, že do poľa vlastného URL nezadávate `www.`.

> [!note] Poznámka
> Ak vaše nastavenie vlastnej domény skončí v slučke presmerovania, pravdepodobne bol režim šifrovania v CloudFlare nastavený na „Flexible" namiesto „Full".

## Nastavenie pomocou proxy

SSL/TLS pre svoju vlastnú doménu môžete nastaviť aj pomocou vlastného webového servera.

Ak už hostujete webovú stránku pod svojou doménou alebo subdoménou, môžete tiež použiť túto možnosť a nastaviť svoju webovú stránku tak, aby načítala vašu stránku Obsidian Publish pod konkrétnou URL cestou, namiesto hosťovania celej stránky.

Presmerujte všetky požiadavky pod touto URL cestou na `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` a nakonfigurujte možnosti stránky v Obsidian na rovnakú URL cestu nastavením **Vlastné URL** na `mysite.com/my-notes`.

Obsidian Publish môžete tiež nastaviť ako sub-URL stránky, ktorú vlastníte. Napríklad `https://mysite.com/my-notes/`. Na dosiahnutie tohto cieľa musíte hosťovať vlastný server a presmerovať všetky požiadavky na náš server na `https://publish.obsidian.md/`.

Nasledujúce príklady nastavenia proxy nie sú vyčerpávajúce, ale poskytujú bežné metódy pre túto implementáciu.

### NGINX

Do konfigurácie NGINX pridajte nasledovné:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Niektorí používatelia hlásili, že môže byť potrebné pridať `$request_uri` do proxy pass:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

Do `.htaccess` pridajte nasledovné:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Poznámka
> `mod_rewrite` musí byť povolený a možno budete musieť nakonfigurovať aj [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

V `netlify.toml` [nakonfigurujte presmerovania](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

V `vercel.json` [nakonfigurujte prepisy](https://vercel.com/docs/configuration#project/rewrites):

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

Tento minimálny konfiguračný úryvok presmerováva `mysite.com` na Obsidian Publish.
Pozrite si [dokumentáciu Traefik](https://doc.traefik.io/traefik/routing/overview/)
pre kompletný príklad.

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

Ak vaša proxy služba neumožňuje cesty dotazov, môžete použiť `https://publish.obsidian.md/` s vlastnou hlavičkou `x-obsidian-custom-domain` nastavenou na URL vašej stránky `mysite.com/my-subpath`.

## Presmerovanie starej stránky na vlastnú doménu

Ak chcete presmerovať návštevníkov zo starej stránky `publish.obsidian.md` na svoju novú vlastnú doménu, povoľte možnosť **Presmerujte na svoju vlastnú doménu** pri konfigurácii vlastnej domény.

## Riešenie problémov

Po nastavení vlastnej domény, ak ste navštívili svoju stránku z predchádzajúceho odkazu `https://publish.obsidian.md/slug`, možno budete musieť vymazať vyrovnávaciu pamäť prehliadača, aby niektoré veci (ako fonty, grafy alebo prístup heslom) fungovali správne. Je to spôsobené bezpečnostnými obmedzeniami medzi doménami, ktoré uplatňujú moderné prehliadače. Dobrou správou je, že čitatelia vašej stránky by sa s týmto problémom nemali nikdy stretnúť, ak návštevníkom umožníte používať iba vašu vlastnú doménu.
