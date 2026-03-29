---
permalink: publish/domains
mobile: true
description: Podeu configurar un domini o subdomini personalitzat per al vostre lloc d'Obsidian Publish.
---
Pots configurar un domini o subdomini personalitzat per al teu lloc d'[[Introducció a Obsidian Publish|Obsidian Publish]].

> [!warning] Advertència
> De moment, només admetem la configuració de dominis personalitzats amb els mètodes següents:
>
> - [[#Configuració amb CloudFlare]] amb el [mode Full](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Configuració amb un proxy]]
> 
> Encara no tenim una manera de proporcionar un certificat SSL en nom teu.

## Configuració amb CloudFlare

La manera més fàcil de configurar un domini o subdomini personalitzat és crear un compte a [CloudFlare](https://cloudflare.com) i deixar que CloudFlare gestioni el DNS del teu domini.

Els passos següents utilitzen CloudFlare per configurar un domini personalitzat per al teu lloc Obsidian Publish, ja sigui amb un domini arrel (`elmeulloc.com`) o un subdomini (`notes.elmeulloc.com`).

> [!important] Important
> CloudFlare és l'**únic proveïdor oficialment admès** per configurar dominis personalitzats. Utilitzar les instruccions següents amb qualsevol altre proveïdor probablement no funcionarà.

**CloudFlare:**

1. Obre Cloudflare al domini on vols allotjar el teu lloc Publish, com ara `elmeulloc.com`, fins i tot si vols un subdomini com `notes.elmeulloc.com`.
2. Ves a **DNS** i fes clic a **Add Record**.
3. Selecciona **CNAME**.
4. A **name**, introdueix el teu domini o subdomini, per exemple `notes.elmeulloc.com`.
5. A **target**, introdueix `publish-main.obsidian.md`. No incloguis la teva sub-URL personal en aquest valor. Obsidian Publish ho gestiona des de la teva configuració.
6. Assegura't que l'**estat del proxy** estigui activat. Hauria d'estar activat per defecte.
7. Ves a **SSL/TLS** i estableix el mode de xifratge SSL/TLS a "Full" per configurar el certificat SSL/TLS automàticament.

> [!note] Nota
> Per redirigir tant `elmeulloc.com` com `www.elmeulloc.com` a Obsidian Publish, necessites crear una [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) amb la configuració següent:
>
> - Coincidència d'URL: `www.elmeulloc.com/*`
> - Redirecció d'URL - 301 Redirecció permanent
> - URL de redirecció: `https://elmeulloc.com/$1`
>
> Després d'haver creat la regla de pàgina, crea un registre CNAME per a `www.elmeulloc.com` de la mateixa manera que ho vas fer per a `elmeulloc.com`.

**Obsidian:**

1. Obre Obsidian al teu ordinador.
2. A la [[Cinta]] de l'esquerra, fes clic a **Publica canvis** ![[lucide-send.svg#icon]].
3. Dins de **Publica canvis**, selecciona **Canvia les opcions del lloc** ![[lucide-cog.svg#icon]].
4. Al costat de **Domini personalitzat**, selecciona **Configurar**.
5. A **URL personalitzada**, introdueix l'URL del teu domini o subdomini. Assegura't de no posar `www.` a la casella d'URL personalitzada.

> [!note] Nota
> Si la configuració del teu domini personalitzat acaba en un bucle de redirecció, probablement el mode de xifratge a CloudFlare s'ha establert a "Flexible" en comptes de "Full".

## Configuració amb un proxy

També pots configurar SSL/TLS per al teu domini personalitzat utilitzant el teu propi servidor web.

Si ja tens un lloc web allotjat sota el teu domini o subdomini, també pots utilitzar aquesta opció i configurar el teu lloc web per carregar el teu lloc Obsidian Publish sota una ruta d'URL específica, en comptes d'allotjar el lloc complet.

Redirigeix totes les peticions sota aquesta ruta d'URL a `https://publish.obsidian.md/serve?url=elmeulloc.com/les-meves-notes/...` i configura les opcions del lloc a Obsidian amb la mateixa ruta d'URL, establint l'**URL personalitzada** a `elmeulloc.com/les-meves-notes`.

També pots configurar Obsidian Publish com a sub-URL d'un lloc que tens. Per exemple, `https://elmeulloc.com/les-meves-notes/`. Per aconseguir-ho, has d'allotjar el teu propi servidor i redirigir totes les peticions al nostre servidor a `https://publish.obsidian.md/`.

Els exemples de configuració de proxy següents no són exhaustius, però proporcionen mètodes habituals per a aquesta implementació.

### NGINX

A la configuració d'NGINX, afegeix el següent:

```nginx
location /les-meves-notes {
  proxy_pass https://publish.obsidian.md/serve?url=elmeulloc.com/les-meves-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Alguns usuaris han informat que pot ser necessari afegir `$request_uri` al proxy pass:

```nginx
location /les-meves-notes {
  proxy_pass https://publish.obsidian.md/serve?url=elmeulloc.com/les-meves-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

A `.htaccess`, afegeix el següent:

```htaccess
RewriteEngine  on
RewriteRule    "^les-meves-notes/(.*)$"  "https://publish.obsidian.md/serve?url=elmeulloc.com/les-meves-notes/$1"  [L,P]
```

> [!note] Nota
> `mod_rewrite` ha d'estar activat, i també pot ser necessari configurar [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

A `netlify.toml`, [configura les redireccions](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://elmeulloc.com/les-meves-notes/*"
  to = "https://publish.obsidian.md/serve?url=elmeulloc.com/les-meves-notes/:splat"
  status = 200
  force = true
```

### Vercel

A `vercel.json`, [configura les reescriptures](https://vercel.com/docs/configuration#project/rewrites):

```json
{
  ...

  "rewrites": [
    {
      "source": "/les-meves-notes/",
      "destination": "https://publish.obsidian.md/serve?url=elmeulloc.com/les-meves-notes"
    },
    {
      "source": "/les-meves-notes/:path*",
      "destination": "https://publish.obsidian.md/serve?url=elmeulloc.com/les-meves-notes/:path*"
    }
  ]
}
```

### Caddy

```plain
elmeulloc.com {
  encode zstd gzip
  handle /les-meves-notes* {
    reverse_proxy https://publish.obsidian.md {
      header_up Host {upstream_hostport}
    }
    rewrite * /serve?url=elmeulloc.com{path}
  }
}
```

### Traefik

Aquest extracte de configuració mínim redirigeix `elmeulloc.com` a Obsidian Publish.
Consulta la [documentació de Traefik](https://doc.traefik.io/traefik/routing/overview/)
per a un exemple complet.

```yaml
http:
  routers:
    elmeulloc:
      rule: Host(`elmeulloc.com`)
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
          x-obsidian-custom-domain: "elmeulloc.com"
```

### Capçaleres HTTP X admeses

Si el teu servei de proxy no permet rutes de consulta, pots utilitzar `https://publish.obsidian.md/` amb una capçalera personalitzada `x-obsidian-custom-domain` establerta a l'URL del teu lloc `elmeulloc.com/la-meva-subruta`.

## Redirigir el lloc antic al domini personalitzat

Si vols redirigir els teus visitants des de l'antic lloc `publish.obsidian.md` al teu nou domini personalitzat, activa l'opció **Redirigeix al teu domini personalitzat** quan configuris el teu domini personalitzat.

## Resolució de problemes

Un cop hagis configurat el teu domini personalitzat, si has visitat el teu lloc des del teu enllaç anterior `https://publish.obsidian.md/slug`, pot ser que hagis de buidar la memòria cau del navegador perquè certes coses (com tipus de lletra, gràfics o accés amb contrasenya) funcionin correctament. Això es deu a les restriccions de seguretat entre dominis imposades pels navegadors moderns. La bona notícia és que els lectors del teu lloc no haurien de trobar mai aquest problema si només deixes que els visitants utilitzin el teu domini personalitzat.
