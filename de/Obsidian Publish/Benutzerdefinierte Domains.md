---
permalink: publish/domains
mobile: true
description: Du kannst eine eigene Domain oder Subdomain für deine Obsidian Publish-Website einrichten.
---
Du kannst eine eigene Domain oder Subdomain für deine [[Einführung in Obsidian Publish|Obsidian Publish]]-Website einrichten.

> [!warning] Warnung
> Derzeit unterstützen wir nur die Konfiguration eigener Domains mit den folgenden Methoden:
>
> - [[#Einrichtung mit CloudFlare]] im [Full-Modus](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Einrichtung mit einem Proxy]]
> 
> Wir haben derzeit keine Möglichkeit, ein SSL-Zertifikat in deinem Namen bereitzustellen.

## Einrichtung mit CloudFlare

Der einfachste Weg, eine eigene Domain oder Subdomain einzurichten, ist ein [CloudFlare](https://cloudflare.com)-Konto zu erstellen und CloudFlare das DNS deiner Domain verwalten zu lassen.

Die folgenden Schritte verwenden CloudFlare, um eine eigene Domain für deine Obsidian Publish-Website zu konfigurieren, entweder mit einer Root-Domain (`mysite.com`) oder einer Subdomain (`notes.mysite.com`).

> [!important] Wichtig
> CloudFlare ist der **einzige offiziell unterstützte Anbieter** für die Einrichtung eigener Domains. Die Verwendung der folgenden Anweisungen mit anderen Anbietern wird wahrscheinlich nicht funktionieren.

**CloudFlare:**

1. Öffne Cloudflare für die Domain, unter der du deine Publish-Website hosten möchtest, z. B. `mysite.com`, auch wenn du eine Subdomain wie `notes.mysite.com` verwenden möchtest.
2. Gehe zu **DNS** und klicke auf **Add Record**.
3. Wähle **CNAME**.
4. Gib bei **name** deine Domain oder Subdomain ein, z. B. `notes.mysite.com`.
5. Gib bei **target** den Wert `publish-main.obsidian.md` ein. Füge deine persönliche Sub-URL nicht in diesen Wert ein. Obsidian Publish übernimmt dies aus deiner Konfiguration.
6. Stelle sicher, dass der **proxy status** aktiviert ist. Er sollte standardmäßig aktiviert sein.
7. Gehe zu **SSL/TLS** und setze den SSL/TLS-Verschlüsselungsmodus auf „Full", um das SSL/TLS-Zertifikat automatisch zu konfigurieren.

> [!note] Hinweis
> Um sowohl `mysite.com` als auch `www.mysite.com` auf Obsidian Publish umzuleiten, musst du eine [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) mit den folgenden Einstellungen erstellen:
>
> - URL match: `www.mysite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://mysite.com/$1`
>
> Nachdem du die Page Rule erstellt hast, erstelle einen CNAME-Eintrag für `www.mysite.com`, genau wie für `mysite.com`.

**Obsidian:**

1. Öffne Obsidian auf deinem Computer.
2. Klicke in der [[Menüband|Werkzeugleiste]] auf der linken Seite auf **Änderungen veröffentlichen** ![[lucide-send.svg#icon]].
3. Wähle unter **Änderungen veröffentlichen** die Option **Seiteneinstellungen ändern** ![[lucide-cog.svg#icon]].
4. Wähle neben **Eigene Domain** die Option **Konfigurieren**.
5. Gib unter **Eigene URL** die URL deiner Domain oder Subdomain ein. Achte darauf, kein `www.` in das Feld für die eigene URL einzugeben.

> [!note] Hinweis
> Wenn deine Einrichtung der eigenen Domain in einer Umleitungsschleife endet, wurde der Verschlüsselungsmodus in CloudFlare wahrscheinlich auf „Flexible" statt auf „Full" gesetzt.

## Einrichtung mit einem Proxy

Du kannst SSL/TLS für deine eigene Domain auch einrichten, indem du deinen eigenen Webserver verwendest.

Wenn du bereits eine Website unter deiner Domain oder Subdomain hostest, kannst du diese Option ebenfalls nutzen und deine Website so einrichten, dass sie deine Obsidian Publish-Website unter einem bestimmten URL-Pfad lädt, anstatt die gesamte Website zu hosten.

Leite alle Anfragen unter diesem URL-Pfad an `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` weiter und konfiguriere die Website-Einstellungen in Obsidian auf denselben URL-Pfad, indem du **Eigene URL** auf `mysite.com/my-notes` setzt.

Du kannst Obsidian Publish auch als Sub-URL einer Website einrichten, die dir gehört. Zum Beispiel `https://mysite.com/my-notes/`. Dazu musst du deinen eigenen Server hosten und alle Anfragen an unseren Server unter `https://publish.obsidian.md/` weiterleiten.

Die folgenden Proxy-Konfigurationsbeispiele sind nicht vollständig, bieten aber gängige Methoden für diese Implementierung.

### NGINX

Füge in deiner NGINX-Konfiguration Folgendes hinzu:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Einige Benutzer haben berichtet, dass das Hinzufügen von `$request_uri` zum Proxy-Pass erforderlich sein kann:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

Füge in `.htaccess` Folgendes hinzu:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Hinweis
> `mod_rewrite` muss aktiviert sein, und möglicherweise musst du auch [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache) konfigurieren.

### Netlify

Konfiguriere in `netlify.toml` [Weiterleitungen](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

Konfiguriere in `vercel.json` [Rewrites](https://vercel.com/docs/configuration#project/rewrites):

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

Dieses minimale Konfigurationsbeispiel leitet `mysite.com` an Obsidian Publish weiter.
Siehe die [Traefik-Dokumentation](https://doc.traefik.io/traefik/routing/overview/)
für ein vollständiges Beispiel.

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

### Unterstützte HTTP-X-Header

Wenn dein Proxy-Dienst keine Abfragepfade zulässt, kannst du `https://publish.obsidian.md/` mit einem benutzerdefinierten Header `x-obsidian-custom-domain` verwenden, der auf deine Website-URL `mysite.com/my-subpath` gesetzt ist.

## Alte Website auf eigene Domain umleiten

Wenn du deine Besucher von der alten `publish.obsidian.md`-Website auf deine neue eigene Domain umleiten möchtest, aktiviere die Option **Weiterleitung auf deine eigene Domain**, wenn du deine eigene Domain konfigurierst.

## Fehlerbehebung

Sobald du deine eigene Domain eingerichtet hast und du deine Website zuvor über den Link `https://publish.obsidian.md/slug` besucht hast, musst du möglicherweise deinen Browser-Cache leeren, damit bestimmte Funktionen (wie Schriftarten, Grafiken oder Passwort-Zugang) ordnungsgemäß funktionieren. Dies liegt an den domainübergreifenden Sicherheitsbeschränkungen, die von modernen Browsern erzwungen werden. Die gute Nachricht ist, dass Leser deiner Website dieses Problem nie haben sollten, wenn du Besucher nur über deine eigene Domain zugreifen lässt.
