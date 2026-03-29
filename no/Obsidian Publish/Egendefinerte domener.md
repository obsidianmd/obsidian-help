---
permalink: publish/domains
mobile: true
description: Du kan sette opp et egendefinert domene eller underdomene for Obsidian Publish-nettstedet ditt.
---
Du kan sette opp et egendefinert domene eller underdomene for [[Introduksjon til Obsidian Publish|Obsidian Publish]]-nettstedet ditt.

> [!warning] Advarsel
> For øyeblikket støtter vi kun konfigurering av egendefinerte domener ved hjelp av følgende metoder:
>
> - [[#Sett opp med CloudFlare]] ved bruk av [Full-modus](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Sett opp med en proxy]]
> 
> Vi har foreløpig ikke en måte å utstede et SSL-sertifikat på dine vegne.

## Sett opp med CloudFlare

Den enkleste måten å sette opp et egendefinert domene eller underdomene er å opprette en [CloudFlare](https://cloudflare.com)-konto og la CloudFlare administrere domenet ditt sin DNS.

Følgende trinn bruker CloudFlare til å konfigurere et egendefinert domene for Obsidian Publish-nettstedet ditt, enten ved bruk av et rotdomene (`mysite.com`) eller et underdomene (`notes.mysite.com`).

> [!important] Viktig
> CloudFlare er den **eneste offisielt støttede leverandøren** for oppsett av egendefinerte domener. Bruk av følgende instruksjoner med andre leverandører vil sannsynligvis ikke fungere.

**CloudFlare:**

1. Åpne Cloudflare for domenet der du vil være vert for Publish-nettstedet ditt, for eksempel `mysite.com`, selv om du ønsker et underdomene som `notes.mysite.com`.
2. Gå til **DNS** og klikk **Add Record**.
3. Velg **CNAME**.
4. I **name**, skriv inn domenet eller underdomenet ditt, for eksempel `notes.mysite.com`.
5. I **target**, skriv inn `publish-main.obsidian.md`. Ikke inkluder din personlige under-URL i denne verdien. Obsidian Publish håndterer dette fra konfigurasjonen din.
6. Sørg for at **proxy status** er aktivert. Den skal være aktivert som standard.
7. Gå til **SSL/TLS** og sett SSL/TLS-krypteringsmodus til "Full" for å konfigurere SSL/TLS-sertifikatet automatisk.

> [!note] Merknad
> For å omdirigere både `mysite.com` og `www.mysite.com` til Obsidian Publish, må du opprette en [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) med følgende innstillinger:
>
> - URL match: `www.mysite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://mysite.com/$1`
>
> Etter at du har opprettet sideregelen, opprett en CNAME-post for `www.mysite.com` på samme måte som du gjorde for `mysite.com`.

**Obsidian:**

1. Åpne Obsidian på datamaskinen din.
2. I [[Verktøylinje|verktøylinjen]] til venstre, klikk **Publiser endringer** ![[lucide-send.svg#icon]].
3. Under **Publiser endringer**, velg **Endre nettstedsalternativer** ![[lucide-cog.svg#icon]].
4. Ved siden av **Egendefinert domene**, velg **Konfigurer**.
5. I **Egendefinert URL**, skriv inn URL-en til domenet eller underdomenet ditt. Sørg for å ikke skrive `www.` i feltet for egendefinert URL.

> [!note] Merknad
> Hvis oppsettet av det egendefinerte domenet ender i en omdirigeringsløkke, er det sannsynligvis fordi krypteringsmodusen i CloudFlare har blitt satt til "Flexible" i stedet for "Full".

## Sett opp med en proxy

Du kan også sette opp SSL/TLS for det egendefinerte domenet ditt ved å bruke din egen webserver.

Hvis du allerede er vert for et nettsted under domenet eller underdomenet ditt, kan du også bruke dette alternativet og sette opp nettstedet ditt til å laste inn Obsidian Publish-nettstedet under en spesifikk URL-bane, i stedet for å være vert for hele nettstedet.

Videresend alle forespørsler under den URL-banen til `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` og konfigurer nettstedsalternativene i Obsidian til samme URL-bane, ved å sette **Egendefinert URL** til `mysite.com/my-notes`.

Du kan også sette opp Obsidian Publish som en under-URL av et nettsted du eier. For eksempel `https://mysite.com/my-notes/`. For å oppnå dette må du være vert for din egen server og videresende alle forespørsler til vår server på `https://publish.obsidian.md/`.

Følgende eksempler på proxy-oppsett er ikke uttømmende, men gir vanlige metoder for denne implementeringen.

### NGINX

I NGINX-konfigurasjonen din, legg til følgende:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Noen brukere har rapportert at det kan være nødvendig å legge til `$request_uri` i proxy pass:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

I `.htaccess`, legg til følgende:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Merknad
> `mod_rewrite` må være aktivert, og du kan også trenge å konfigurere [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

I `netlify.toml`, [konfigurer omdirigeringer](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

I `vercel.json`, [konfigurer omskrivninger](https://vercel.com/docs/configuration#project/rewrites):

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

Dette minimale konfigurasjonsutdraget omdirigerer `mysite.com` til Obsidian Publish.
Se [Traefik-dokumentasjonen](https://doc.traefik.io/traefik/routing/overview/)
for et komplett eksempel.

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

### Støttede HTTP X-Headers

Hvis proxy-tjenesten din ikke tillater spørringsbaner, kan du bruke `https://publish.obsidian.md/` med en egendefinert header `x-obsidian-custom-domain` satt til nettstedets URL `mysite.com/my-subpath`.

## Omdirigere gammelt nettsted til egendefinert domene

Hvis du vil omdirigere besøkende fra det gamle `publish.obsidian.md`-nettstedet til det nye egendefinerte domenet ditt, aktiver alternativet **Videresend til ditt egendefinerte domene** når du konfigurerer det egendefinerte domenet.

## Feilsøking

Når du har satt opp det egendefinerte domenet ditt, og du tidligere har besøkt nettstedet fra den gamle `https://publish.obsidian.md/slug`-lenken, kan det hende du må tømme nettleserens hurtigbuffer for at visse ting (som skrifttyper, grafer eller passordbeskyttet tilgang) skal fungere riktig. Dette skyldes sikkerhetsrestriksjoner på tvers av domener som pålegges av moderne nettlesere. Den gode nyheten er at lesere av nettstedet ditt aldri bør støte på dette problemet hvis du bare lar besøkende bruke det egendefinerte domenet ditt.
