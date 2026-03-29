---
permalink: publish/domains
mobile: true
description: Egyéni domaint vagy aldomaint állíthatsz be az Obsidian Publish webhelyedhez.
---
Beállíthat egyedi tartományt vagy altartományt az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] webhelyéhez.

> [!warning] Figyelmeztetés
> Jelenleg csak a következő módszerekkel támogatjuk az egyedi tartományok konfigurálását:
>
> - [[#Beállítás CloudFlare használatával]] a [Full mód](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/) alkalmazásával.
> - [[#Beállítás proxy használatával]]
> 
> Egyelőre nem áll módunkban SSL tanúsítványt kiállítani az Ön nevében.

## Beállítás CloudFlare használatával

Az egyedi tartomány vagy altartomány beállításának legegyszerűbb módja egy [CloudFlare](https://cloudflare.com) fiók létrehozása, és a CloudFlare-rel kezeltetni a tartomány DNS-beállításait.

Az alábbi lépések a CloudFlare segítségével konfigurálnak egyedi tartományt az Obsidian Publish webhelyéhez, akár gyökértartomány (`mysite.com`), akár altartomány (`notes.mysite.com`) használatával.

> [!important] Fontos
> A CloudFlare az **egyetlen hivatalosan támogatott szolgáltató** az egyedi tartományok beállításához. Az alábbi utasítások bármely más szolgáltatóval való használata valószínűleg nem fog működni.

**CloudFlare:**

1. Nyissa meg a Cloudflare-t azon a tartományon, ahol a Publish webhelyét szeretné elhelyezni, például `mysite.com`, még akkor is, ha altartományt szeretne használni, mint például `notes.mysite.com`.
2. Lépjen a **DNS** menüpontra, és kattintson az **Add Record** gombra.
3. Válassza a **CNAME** lehetőséget.
4. A **name** mezőbe írja be a tartományát vagy altartományát, például `notes.mysite.com`.
5. A **target** mezőbe írja be: `publish-main.obsidian.md`. Ne adja meg a személyes al-URL-jét ebben az értékben. Az Obsidian Publish ezt a konfigurációból kezeli.
6. Győződjön meg arról, hogy a **proxy status** engedélyezve van. Alapértelmezés szerint engedélyezve kell lennie.
7. Lépjen az **SSL/TLS** menüpontra, és állítsa az SSL/TLS titkosítási módot "Full" értékre az SSL/TLS tanúsítvány automatikus konfigurálásához.

> [!note] Megjegyzés
> Ha mind a `mysite.com`, mind a `www.mysite.com` címet át szeretné irányítani az Obsidian Publish-re, létre kell hoznia egy [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) szabályt a következő beállításokkal:
>
> - URL match: `www.mysite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://mysite.com/$1`
>
> Miután létrehozta az oldal szabályt, hozzon létre egy CNAME rekordot a `www.mysite.com` számára ugyanúgy, mint a `mysite.com` esetében.

**Obsidian:**

1. Nyissa meg az Obsidiant a számítógépén.
2. A bal oldali [[Szalag|szalagon]] kattintson a **Módosítások publikálása** ![[lucide-send.svg#icon]] gombra.
3. A **Módosítások publikálása** alatt válassza a **Webhely beállításainak módosítása** ![[lucide-cog.svg#icon]] lehetőséget.
4. Az **Egyedi tartomány** mellett válassza a **Konfigurálás** lehetőséget.
5. Az **Egyedi URL** mezőbe írja be a tartomány vagy altartomány URL-jét. Ügyeljen arra, hogy ne írjon `www.`-t az egyedi URL mezőbe.

> [!note] Megjegyzés
> Ha az egyedi tartomány beállítása átirányítási hurokba kerül, valószínűleg a CloudFlare titkosítási módja "Flexible"-re van állítva a "Full" helyett.

## Beállítás proxy használatával

SSL/TLS-t is beállíthat az egyedi tartományához saját webszerver használatával.

Ha már üzemeltet egy webhelyet a tartománya vagy altartománya alatt, ezt a lehetőséget is használhatja, és beállíthatja webhelyét úgy, hogy az Obsidian Publish webhelyét egy adott URL-útvonalon töltse be, a teljes webhely üzemeltetése helyett.

Proxyzzuk az összes kérést az adott URL-útvonalon a `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` címre, és konfigurálja a webhely beállításait az Obsidianban ugyanarra az URL-útvonalra, az **Egyedi URL** beállítását `mysite.com/my-notes` értékre állítva.

Az Obsidian Publish-t egy saját tulajdonú webhely al-URL-jeként is beállíthatja. Például: `https://mysite.com/my-notes/`. Ehhez saját szervert kell üzemeltetnie, és az összes kérést a szerverünkre kell proxyáznia a `https://publish.obsidian.md/` címen.

Az alábbi proxy-beállítási példák nem teljes körűek, de gyakori módszereket mutatnak be ehhez a megvalósításhoz.

### NGINX

Az NGINX konfigurációjában adja hozzá a következőt:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Egyes felhasználók arról számoltak be, hogy szükség lehet a `$request_uri` hozzáadására a proxy pass-hoz:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

A `.htaccess` fájlban adja hozzá a következőt:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Megjegyzés
> A `mod_rewrite` modult engedélyezni kell, és szükség lehet az [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache) konfigurálására is.

### Netlify

A `netlify.toml` fájlban [konfigurálja az átirányításokat](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

A `vercel.json` fájlban [konfigurálja az újraírásokat](https://vercel.com/docs/configuration#project/rewrites):

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

Ez a minimális konfigurációs részlet átirányítja a `mysite.com`-ot az Obsidian Publish-re.
A teljes példáért tekintse meg a [Traefik dokumentációt](https://doc.traefik.io/traefik/routing/overview/).

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

### Támogatott HTTP X-fejlécek

Ha a proxy szolgáltatása nem engedélyezi a lekérdezési útvonalakat, használhatja a `https://publish.obsidian.md/` címet egyéni `x-obsidian-custom-domain` fejléccel, amelyet a webhely URL-jére állít be: `mysite.com/my-subpath`.

## Régi webhely átirányítása az egyedi tartományra

Ha át szeretné irányítani a látogatóit a régi `publish.obsidian.md` webhelyről az új egyedi tartományára, engedélyezze az **Átirányítás az egyedi tartományára** opciót az egyedi tartomány konfigurálásakor.

## Hibaelhárítás

Miután beállította az egyedi tartományát, ha korábban meglátogatta webhelyét a korábbi `https://publish.obsidian.md/slug` hivatkozásról, előfordulhat, hogy törölnie kell a böngésző gyorsítótárát ahhoz, hogy bizonyos dolgok (például betűtípusok, gráfok vagy jelszavas hozzáférés) megfelelően működjenek. Ennek oka a modern böngészők által alkalmazott tartományok közötti biztonsági korlátozások. A jó hír az, hogy a webhely olvasói soha nem fognak ilyen problémába ütközni, ha csak az egyedi tartományon keresztül engedi a látogatókat hozzáférni.
