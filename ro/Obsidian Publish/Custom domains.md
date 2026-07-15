---
permalink: publish/domains
mobile: true
description: "Poți configura un domeniu sau subdomeniu personalizat pentru site-ul tău\_Obsidian Publish."
---

Poți configura un domeniu sau subdomeniu personalizat pentru site-ul tău [[Introduction to Obsidian Publish|Obsidian Publish]].

> [!warning] Avertisment
> În acest moment, sprijinim configurarea domeniilor personalizate doar prin următoarele metode:
>
> - [[#Configurare folosind CloudFlare]] utilizând [modul Full](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Configurare folosind un proxy]]
> 
> Deocamdată nu avem o modalitate de a furniza un certificat SSL în numele tău.

## Configurare folosind CloudFlare

Cea mai simplă modalitate de a configura un domeniu sau subdomeniu personalizat este să creezi un cont [CloudFlare](https://cloudflare.com) și să lași CloudFlare să administreze DNS-ul domeniului tău.

Pașii următori folosesc CloudFlare pentru a configura un domeniu personalizat pentru site-ul tău Obsidian Publish, fie folosind un domeniu rădăcină (`mysite.com`), fie un subdomeniu (`notes.mysite.com`).

> [!important] Important
> CloudFlare este **singurul furnizor sprijinit oficial** pentru configurarea domeniilor personalizate. Folosirea instrucțiunilor următoare cu orice alt furnizor probabil nu va funcționa.

**CloudFlare:**

1. Deschide Cloudflare la domeniul unde vrei să găzduiești site-ul tău Publish, cum ar fi `mysite.com`, chiar dacă vrei un subdomeniu precum `notes.mysite.com`.
2. Mergi la **DNS** și apasă pe **Add Record**.
3. Selectează **CNAME**.
4. La **name**, introdu domeniul sau subdomeniul tău, de exemplu `notes.mysite.com`.
5. La **target**, introdu `publish-main.obsidian.md`. Nu include în această valoare sub-URL-ul tău personal. Obsidian Publish se ocupă de acest lucru pe baza configurației tale.
6. Asigură-te că **proxy status** este activat. Ar trebui să fie activat implicit.
7. Mergi la **SSL/TLS** și setează modul de criptare SSL/TLS la „Full” pentru a configura automat certificatul SSL/TLS.

> [!note] Notă
> Pentru a redirecționa atât `mysite.com`, cât și `www.mysite.com` către Obsidian Publish, trebuie să creezi o [regulă de pagină (Page Rule)](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) cu următoarele setări:
>
> - Potrivire URL: `www.mysite.com/*`
> - Forward URL - 301 Permanent Redirect
> - URL de redirecționare: `https://mysite.com/$1`
>
> După ce ai creat regula de pagină, creează o înregistrare CNAME pentru `www.mysite.com`, la fel cum ai făcut pentru `mysite.com`.

**Obsidian:**

1. Deschide Obsidian pe computerul tău.
2. În [[Ribbon|Panglică]], în stânga, apasă pe **Publică schimbările** ![[lucide-send.svg#icon]].
3. Sub **Publică schimbările**, selectează **Schimbă opțiunile siteului** ![[lucide-cog.svg#icon]].
4. Lângă **Domeniu personalizat**, selectează **Configurează**.
5. La **URL personalizat**, introdu URL-ul domeniului sau subdomeniului tău. Ai grijă să nu pui `www.` în câmpul URL-ului personalizat.

> [!note] Notă
> Dacă configurarea domeniului tău personalizat ajunge într-o buclă de redirecționare, este posibil ca modul de criptare din CloudFlare să fie setat la „Flexible” în loc de „Full”.

## Configurare folosind un proxy

Poți configura de asemenea SSL/TLS pentru domeniul tău personalizat folosind propriul server web.

Dacă găzduiești deja un site web sub domeniul sau subdomeniul tău, poți folosi și această opțiune și configura site-ul tău să încarce site-ul tău Obsidian Publish sub o cale URL specifică, în loc să găzduiești întregul site.

Direcționează toate cererile de sub acea cale URL către `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` și configurează opțiunile siteului din Obsidian cu aceeași cale URL, setând **URL personalizat** la `mysite.com/my-notes`.

Poți configura de asemenea Obsidian Publish ca sub-URL al unui site pe care îl deții. De exemplu, `https://mysite.com/my-notes/`. Pentru a realiza acest lucru, trebuie să găzduiești propriul server și să direcționezi toate cererile către serverul nostru la `https://publish.obsidian.md/`.

Exemplele de configurare proxy următoare nu sunt exhaustive, dar oferă metode comune pentru această implementare.

### NGINX

În configurația ta NGINX, adaugă următoarele:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Unii utilizatori au raportat că adăugarea `$request_uri` la proxy pass poate fi necesară:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

În `.htaccess`, adaugă următoarele:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Notă
> `mod_rewrite` trebuie să fie activat, iar tu ar putea fi nevoie să configurezi și [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

În `netlify.toml`, [configurează redirecționările](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

În `vercel.json`, [configurează rescrierile](https://vercel.com/docs/configuration#project/rewrites):

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

Acest fragment de configurare minimală redirecționează `mysite.com` către Obsidian Publish.
Vezi [documentația Traefik](https://doc.traefik.io/traefik/routing/overview/)
pentru un exemplu complet.

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

### X-Headers HTTP acceptate

Dacă serviciul tău de proxy nu permite căi de interogare, poți folosi `https://publish.obsidian.md/` cu un antet personalizat `x-obsidian-custom-domain` setat la URL-ul siteului tău `mysite.com/my-subpath`.

## Redirecționează siteul vechi către domeniul personalizat

Dacă vrei să redirecționezi vizitatorii de pe vechiul site `publish.obsidian.md` către noul tău domeniu personalizat, activează opțiunea **Redirecționează către domeniul tău personalizat** când configurezi domeniul personalizat.

## Depanare

După ce configurezi domeniul personalizat, dacă ai vizitat siteul tău de la vechiul link `https://publish.obsidian.md/slug`, s-ar putea să fie nevoie să ștergi memoria cache a browserului pentru ca anumite lucruri (precum fonturile, graficele sau accesul cu parolă) să funcționeze corect. Acest lucru se datorează restricțiilor de securitate cross-domain impuse de browserele moderne. Vestea bună este că cititorii siteului tău nu ar trebui să întâmpine niciodată această problemă dacă permiți vizitatorilor să folosească doar domeniul tău personalizat.
