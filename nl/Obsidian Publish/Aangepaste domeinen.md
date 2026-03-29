---
permalink: publish/domains
mobile: true
description: Je kunt een aangepast domein of subdomein instellen voor je Obsidian Publish-site.
---
Je kunt een aangepast domein of subdomein instellen voor je [[Inleiding tot Obsidian Publish|Obsidian Publish]]-site.

> [!warning] Waarschuwing
> Op dit moment ondersteunen we alleen het configureren van aangepaste domeinen met de volgende methoden:
>
> - [[#Instellen met CloudFlare]] met [Full-modus](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Instellen met een proxy]]
> 
> We hebben nog geen manier om namens jou een SSL-certificaat aan te maken.

## Instellen met CloudFlare

De eenvoudigste manier om een aangepast domein of subdomein in te stellen is door een [CloudFlare](https://cloudflare.com)-account aan te maken en CloudFlare de DNS van je domein te laten beheren.

De volgende stappen gebruiken CloudFlare om een aangepast domein te configureren voor je Obsidian Publish-site, ofwel met een hoofddomein (`mijnsite.com`) of een subdomein (`notities.mijnsite.com`).

> [!important] Belangrijk
> CloudFlare is de **enige officieel ondersteunde provider** voor het instellen van aangepaste domeinen. Het gebruik van de volgende instructies met andere providers zal waarschijnlijk niet werken.

**CloudFlare:**

1. Open Cloudflare voor het domein waar je je Publish-site wilt hosten, zoals `mijnsite.com`, zelfs als je een subdomein wilt zoals `notities.mijnsite.com`.
2. Ga naar **DNS** en klik op **Add Record**.
3. Selecteer **CNAME**.
4. Voer bij **name** je domein of subdomein in, bijvoorbeeld `notities.mijnsite.com`.
5. Voer bij **target** `publish-main.obsidian.md` in. Voeg je persoonlijke sub-URL niet toe aan deze waarde. Obsidian Publish regelt dit vanuit je configuratie.
6. Zorg ervoor dat **proxy status** is ingeschakeld. Dit zou standaard ingeschakeld moeten zijn.
7. Ga naar **SSL/TLS** en stel de SSL/TLS-versleutelingsmodus in op "Full" om het SSL/TLS-certificaat automatisch te configureren.

> [!note] Opmerking
> Om zowel `mijnsite.com` als `www.mijnsite.com` door te verwijzen naar Obsidian Publish, moet je een [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) aanmaken met de volgende instellingen:
>
> - URL match: `www.mijnsite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://mijnsite.com/$1`
>
> Nadat je de paginaregel hebt aangemaakt, maak je een CNAME-record aan voor `www.mijnsite.com` op dezelfde manier als voor `mijnsite.com`.

**Obsidian:**

1. Open Obsidian op je computer.
2. Klik in de [[Werkbalk]] aan de linkerkant op **Wijzigingen publiceren** ![[lucide-send.svg#icon]].
3. Selecteer onder **Wijzigingen publiceren** de optie **Verander site-opties** ![[lucide-cog.svg#icon]].
4. Selecteer naast **Aangepast domein** de optie **Configureren**.
5. Voer bij **Aangepaste URL** de URL naar je domein of subdomein in. Zorg ervoor dat je geen `www.` in het veld voor de aangepaste URL plaatst.

> [!note] Opmerking
> Als je aangepaste domeinconfiguratie resulteert in een omleidingslus, is het waarschijnlijk dat de versleutelingsmodus in CloudFlare is ingesteld op "Flexible" in plaats van "Full".

## Instellen met een proxy

Je kunt ook SSL/TLS instellen voor je aangepaste domein door je eigen webserver te gebruiken.

Als je al een website host onder je domein of subdomein, kun je ook deze optie gebruiken en je website zo instellen dat je Obsidian Publish-site wordt geladen onder een specifiek URL-pad, in plaats van de volledige site te hosten.

Proxy alle verzoeken onder dat URL-pad naar `https://publish.obsidian.md/serve?url=mijnsite.com/mijn-notities/...` en configureer de site-instellingen in Obsidian met hetzelfde URL-pad, door **Aangepaste URL** in te stellen op `mijnsite.com/mijn-notities`.

Je kunt Obsidian Publish ook instellen als een sub-URL van een site die je bezit. Bijvoorbeeld `https://mijnsite.com/mijn-notities/`. Hiervoor moet je je eigen server hosten en alle verzoeken doorsturen naar onze server op `https://publish.obsidian.md/`.

De volgende voorbeelden van proxyconfiguraties zijn niet uitputtend, maar bieden veelgebruikte methoden voor deze implementatie.

### NGINX

Voeg het volgende toe aan je NGINX-configuratie:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Sommige gebruikers hebben gemeld dat het toevoegen van `$request_uri` aan de proxy pass nodig kan zijn:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

Voeg het volgende toe aan `.htaccess`:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Opmerking
> `mod_rewrite` moet ingeschakeld zijn, en mogelijk moet je ook [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache) configureren.

### Netlify

Configureer in `netlify.toml` [omleidingen](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

Configureer in `vercel.json` [rewrites](https://vercel.com/docs/configuration#project/rewrites):

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

Dit minimale configuratiefragment leidt `mysite.com` om naar Obsidian Publish.
Zie de [Traefik-documentatie](https://doc.traefik.io/traefik/routing/overview/)
voor een volledig voorbeeld.

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

### Ondersteunde HTTP X-Headers

Als je proxyservice geen querypaden toestaat, kun je `https://publish.obsidian.md/` gebruiken met een aangepaste header `x-obsidian-custom-domain` ingesteld op je site-URL `mijnsite.com/mijn-subpad`.

## Oude site doorverwijzen naar aangepast domein

Als je je bezoekers wilt doorverwijzen van de oude `publish.obsidian.md`-site naar je nieuwe aangepaste domein, schakel dan de optie **Doorverwijzen naar je aangepaste domein** in bij het configureren van je aangepaste domein.

## Problemen oplossen

Zodra je je aangepaste domein hebt ingesteld en je je site eerder hebt bezocht via je vorige `https://publish.obsidian.md/slug`-link, moet je mogelijk je browsercache wissen om bepaalde zaken (zoals lettertypen, grafieken of wachtwoordtoegang) correct te laten werken. Dit komt door de cross-domein beveiligingsbeperkingen die door moderne browsers worden opgelegd. Het goede nieuws is dat lezers van je site dit probleem nooit zouden moeten tegenkomen als je bezoekers alleen je aangepaste domein laat gebruiken.
