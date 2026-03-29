---
permalink: publish/domains
mobile: true
description: Voit määrittää mukautetun verkkotunnuksen tai aliverkkotunnuksen Obsidian Publish -sivustollesi.
---
Voit määrittää mukautetun verkkotunnuksen tai aliverkkotunnuksen [[Johdanto Obsidian Publishiin|Obsidian Publish]] -sivustollesi.

> [!warning] Varoitus
> Tällä hetkellä tuemme mukautettujen verkkotunnusten määrittämistä vain seuraavilla menetelmillä:
>
> - [[#Käyttöönotto CloudFlaren avulla]] käyttäen [Full-tilaa](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Käyttöönotto välityspalvelimen avulla]]
> 
> Meillä ei vielä ole tapaa hankkia SSL-varmennetta puolestasi.

## Käyttöönotto CloudFlaren avulla

Helpoin tapa määrittää mukautettu verkkotunnus tai aliverkkotunnus on luoda [CloudFlare](https://cloudflare.com)-tili ja antaa CloudFlaren hallita verkkotunnuksesi DNS-asetuksia.

Seuraavissa vaiheissa käytetään CloudFlarea mukautetun verkkotunnuksen määrittämiseen Obsidian Publish -sivustollesi joko juuriverkkotunnuksella (`mysite.com`) tai aliverkkotunnuksella (`notes.mysite.com`).

> [!important] Tärkeää
> CloudFlare on **ainoa virallisesti tuettu tarjoaja** mukautettujen verkkotunnusten käyttöönottoon. Seuraavien ohjeiden käyttäminen muiden tarjoajien kanssa ei todennäköisesti toimi.

**CloudFlare:**

1. Avaa Cloudflare sille verkkotunnukselle, jossa haluat isännöidä Publish-sivustoasi, esimerkiksi `mysite.com`, vaikka haluaisit aliverkkotunnuksen kuten `notes.mysite.com`.
2. Siirry kohtaan **DNS** ja napsauta **Add Record**.
3. Valitse **CNAME**.
4. Kirjoita **name**-kenttään verkkotunnuksesi tai aliverkkotunnuksesi, esimerkiksi `notes.mysite.com`.
5. Kirjoita **target**-kenttään `publish-main.obsidian.md`. Älä sisällytä henkilökohtaista ali-URL-osoitettasi tähän arvoon. Obsidian Publish käsittelee tämän konfiguraatiosi perusteella.
6. Varmista, että **proxy status** on käytössä. Sen pitäisi olla oletuksena käytössä.
7. Siirry kohtaan **SSL/TLS** ja aseta SSL/TLS-salaustilaksi "Full", jolloin SSL/TLS-varmenne määritetään automaattisesti.

> [!note] Huomautus
> Jos haluat ohjata sekä `mysite.com`- että `www.mysite.com`-osoitteet Obsidian Publishiin, sinun täytyy luoda [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) seuraavilla asetuksilla:
>
> - URL match: `www.mysite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://mysite.com/$1`
>
> Kun olet luonut sivusäännön, luo CNAME-tietue osoitteelle `www.mysite.com` samalla tavalla kuin teit osoitteelle `mysite.com`.

**Obsidian:**

1. Avaa Obsidian tietokoneellasi.
2. Napsauta [[Nauha|nauhavalikossa]] vasemmalla **Julkaise muutokset** ![[lucide-send.svg#icon]].
3. Valitse kohdasta **Julkaise muutokset** **Muuta sivuston asetuksia** ![[lucide-cog.svg#icon]].
4. Valitse **Mukautettu verkkotunnus** -kohdan vierestä **Määritä**.
5. Kirjoita **Mukautettu verkko-osoite** -kenttään verkkotunnuksesi tai aliverkkotunnuksesi URL-osoite. Varmista, ettei mukautetun URL-osoitteen kenttään sisälly `www.`-etuliitettä.

> [!note] Huomautus
> Jos mukautetun verkkotunnuksen käyttöönotto johtaa uudelleenohjaussilmukkaan, CloudFlaren salaustila on todennäköisesti asetettu arvoon "Flexible" eikä "Full".

## Käyttöönotto välityspalvelimen avulla

Voit myös määrittää SSL/TLS:n mukautetulle verkkotunnuksellesi käyttämällä omaa verkkopalvelintasi.

Jos isännöit jo verkkosivustoa verkkotunnuksellasi tai aliverkkotunnuksellasi, voit myös käyttää tätä vaihtoehtoa ja määrittää verkkosivustosi lataamaan Obsidian Publish -sivustosi tietyssä URL-polussa sen sijaan, että isännöisit koko sivustoa.

Välitä kaikki pyynnöt kyseisessä URL-polussa osoitteeseen `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` ja määritä sivuston asetukset Obsidianissa samaan URL-polkuun asettamalla **Mukautettu verkko-osoite** arvoon `mysite.com/my-notes`.

Voit myös määrittää Obsidian Publishin omistamasi sivuston ali-URL-osoitteeksi. Esimerkiksi `https://mysite.com/my-notes/`. Tämän saavuttamiseksi sinun täytyy isännöidä omaa palvelinta ja välittää kaikki pyynnöt palvelimellemme osoitteessa `https://publish.obsidian.md/`.

Seuraavat välityspalvelinesimerkit eivät ole kattavia, mutta tarjoavat yleisiä menetelmiä tähän toteutukseen.

### NGINX

Lisää NGINX-konfiguraatioosi seuraava:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Jotkut käyttäjät ovat raportoineet, että `$request_uri`-muuttujan lisääminen proxy pass -kohtaan saattaa olla tarpeen:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

Lisää `.htaccess`-tiedostoon seuraava:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Huomautus
> `mod_rewrite`-moduulin täytyy olla käytössä, ja saatat myös joutua määrittämään [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)-asetuksen.

### Netlify

Tiedostossa `netlify.toml`, [määritä uudelleenohjaukset](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

Tiedostossa `vercel.json`, [määritä uudelleenkirjoitukset](https://vercel.com/docs/configuration#project/rewrites):

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

Tämä minimaalinen konfiguraatioesimerkki ohjaa `mysite.com`-osoitteen Obsidian Publishiin.
Katso [Traefik-dokumentaatio](https://doc.traefik.io/traefik/routing/overview/)
täydellisen esimerkin saamiseksi.

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

### Tuetut HTTP X-otsikot

Jos välityspalvelusi ei salli kyselypolkuja, voit käyttää osoitetta `https://publish.obsidian.md/` mukautetulla otsikolla `x-obsidian-custom-domain`, jonka arvoksi asetetaan sivustosi URL-osoite `mysite.com/my-subpath`.

## Vanhan sivuston uudelleenohjaus mukautettuun verkkotunnukseen

Jos haluat ohjata vierailijat vanhasta `publish.obsidian.md`-sivustosta uuteen mukautettuun verkkotunnukseesi, ota käyttöön **Ohjaa mukautettuun verkkotunnukseesi** -vaihtoehto mukautetun verkkotunnuksen määrittämisen yhteydessä.

## Vianmääritys

Kun olet määrittänyt mukautetun verkkotunnuksesi ja olet aiemmin vieraillut sivustollasi vanhalla `https://publish.obsidian.md/slug`-linkillä, saatat joutua tyhjentämään selaimesi välimuistin, jotta tietyt toiminnot (kuten fontit, verkkonäkymät tai salasanasuojaus) toimisivat oikein. Tämä johtuu modernien selainten asettamista verkkotunnusten välisistä tietoturvarajoituksista. Hyvä uutinen on, että sivustosi lukijoilla ei pitäisi koskaan olla tätä ongelmaa, jos annat vierailijoiden käyttää vain mukautettua verkkotunnustasi.
