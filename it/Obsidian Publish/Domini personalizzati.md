---
permalink: publish/domains
mobile: true
description: >-
  Puoi configurare un dominio o sottodominio personalizzato per il tuo sito
  Obsidian Publish.
aliases:
  - Custom domains
---
Puoi configurare un dominio o sottodominio personalizzato per il tuo sito [[Introduzione a Obsidian Publish|Obsidian Publish]].

> [!warning] Avvertimento
> Al momento, supportiamo solo la configurazione di domini personalizzati utilizzando i seguenti metodi:
>
> - [[#Configurazione tramite CloudFlare]] utilizzando la [modalità Full](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Configurazione tramite proxy]]
> 
> Non disponiamo ancora di un modo per generare un certificato SSL per conto tuo.

## Configurazione tramite CloudFlare

Il modo più semplice per configurare un dominio o sottodominio personalizzato è creare un account [CloudFlare](https://cloudflare.com) e lasciare che CloudFlare gestisca il DNS del tuo dominio.

I seguenti passaggi utilizzano CloudFlare per configurare un dominio personalizzato per il tuo sito Obsidian Publish, sia utilizzando un dominio radice (`mysite.com`) sia un sottodominio (`notes.mysite.com`).

> [!important] Importante
> CloudFlare è l'**unico fornitore ufficialmente supportato** per la configurazione di domini personalizzati. L'utilizzo delle seguenti istruzioni con qualsiasi altro fornitore probabilmente non funzionerà.

**CloudFlare:**

1. Apri Cloudflare sul dominio in cui desideri ospitare il tuo sito Publish, ad esempio `mysite.com`, anche se desideri un sottodominio come `notes.mysite.com`.
2. Vai su **DNS** e fai clic su **Add Record**.
3. Seleziona **CNAME**.
4. In **name**, inserisci il tuo dominio o sottodominio, ad esempio `notes.mysite.com`.
5. In **target**, inserisci `publish-main.obsidian.md`. Non includere il tuo sotto-URL personale in questo valore. Obsidian Publish lo gestisce dalla tua configurazione.
6. Assicurati che lo **proxy status** sia abilitato. Dovrebbe essere abilitato per impostazione predefinita.
7. Vai su **SSL/TLS** e imposta la modalità di crittografia SSL/TLS su "Full" per configurare automaticamente il certificato SSL/TLS.

> [!note] Nota
> Per reindirizzare sia `mysite.com` che `www.mysite.com` a Obsidian Publish, è necessario creare una [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) con le seguenti impostazioni:
>
> - URL match: `www.mysite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://mysite.com/$1`
>
> Dopo aver creato la regola di pagina, crea un record CNAME per `www.mysite.com` come hai fatto per `mysite.com`.

**Obsidian:**

1. Apri Obsidian sul tuo computer.
2. Nella [[Barra degli strumenti|barra degli strumenti]] a sinistra, fai clic su **Pubblica modifiche** ( ![[lucide-send.svg#icon]] ).
3. In **Pubblica modifiche**, seleziona **Modifica le opzioni del sito** ( ![[lucide-cog.svg#icon]] ).
4. Accanto a **Dominio personalizzato**, seleziona **Configura**.
5. In **URL personalizzato**, inserisci l'URL del tuo dominio o sottodominio. Assicurati di non inserire `www.` nel campo URL personalizzato.

> [!note] Nota
> Se la configurazione del dominio personalizzato genera un ciclo di reindirizzamento, è probabile che la modalità di crittografia in CloudFlare sia stata impostata su "Flexible" anziché su "Full".

## Configurazione tramite proxy

Puoi anche configurare SSL/TLS per il tuo dominio personalizzato utilizzando il tuo server web.

Se stai già ospitando un sito web sul tuo dominio o sottodominio, puoi anche utilizzare questa opzione e configurare il tuo sito web per caricare il tuo sito Obsidian Publish sotto un percorso URL specifico, invece di ospitare l'intero sito.

Inoltra tramite proxy tutte le richieste sotto quel percorso URL a `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` e configura le opzioni del sito in Obsidian sullo stesso percorso URL, impostando l'**URL personalizzato** su `mysite.com/my-notes`.

Puoi anche configurare Obsidian Publish come sotto-URL di un sito di tua proprietà. Ad esempio, `https://mysite.com/my-notes/`. Per ottenere questo risultato, devi ospitare il tuo server e inoltrare tramite proxy tutte le richieste al nostro server all'indirizzo `https://publish.obsidian.md/`.

I seguenti esempi di configurazione proxy non sono esaustivi, ma forniscono metodi comuni per questa implementazione.

### NGINX

Nella configurazione di NGINX, aggiungi quanto segue:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Alcuni utenti hanno segnalato che potrebbe essere necessario aggiungere `$request_uri` al proxy pass:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

In `.htaccess`, aggiungi quanto segue:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Nota
> `mod_rewrite` deve essere abilitato e potrebbe essere necessario configurare anche [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

In `netlify.toml`, [configura i reindirizzamenti](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

In `vercel.json`, [configura le riscritture](https://vercel.com/docs/configuration#project/rewrites):

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

Questo estratto di configurazione minimale reindirizza `mysite.com` a Obsidian Publish.
Consulta la [documentazione di Traefik](https://doc.traefik.io/traefik/routing/overview/)
per un esempio completo.

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

### Header HTTP X supportati

Se il tuo servizio proxy non consente percorsi di query, puoi utilizzare `https://publish.obsidian.md/` con un header personalizzato `x-obsidian-custom-domain` impostato sull'URL del tuo sito `mysite.com/my-subpath`.

## Reindirizzare il vecchio sito al dominio personalizzato

Se desideri reindirizzare i tuoi visitatori dal vecchio sito `publish.obsidian.md` al tuo nuovo dominio personalizzato, abilita l'opzione **Reindirizza a dominio personalizzato** quando configuri il tuo dominio personalizzato.

## Risoluzione dei problemi

Una volta configurato il dominio personalizzato, se hai visitato il tuo sito dal precedente collegamento `https://publish.obsidian.md/slug`, potresti dover svuotare la cache del browser affinché alcuni elementi (come tipi di carattere, grafi o accesso con password) funzionino correttamente. Questo è dovuto alle restrizioni di sicurezza cross-domain imposte dai browser moderni. La buona notizia è che i lettori del tuo sito non dovrebbero mai riscontrare questo problema se consenti ai visitatori di utilizzare solo il tuo dominio personalizzato.
