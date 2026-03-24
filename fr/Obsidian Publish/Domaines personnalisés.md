---
permalink: publish/domains
description: Vous pouvez configurer un domaine ou un sous-domaine personnalisé pour votre site Obsidian Publish.
mobile: true
localized: '2026-03-18'

---
Vous pouvez configurer un domaine ou un sous-domaine personnalisé pour votre site [[Introduction à Obsidian Publish|Obsidian Publish]].

> [!warning] Avertissement
> Pour le moment, nous ne prenons en charge la configuration de domaines personnalisés qu'avec les méthodes suivantes :
>
> - [[#Configuration avec CloudFlare]] en utilisant le [mode Full](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Configuration avec un proxy]]
> 
> Nous n'avons pas encore la possibilité de provisionner un certificat SSL en votre nom.

## Configuration avec CloudFlare

La façon la plus simple de configurer un domaine ou un sous-domaine personnalisé est de créer un compte [CloudFlare](https://cloudflare.com) et de laisser CloudFlare gérer le DNS de votre domaine.

Les étapes suivantes utilisent CloudFlare pour configurer un domaine personnalisé pour votre site Obsidian Publish, que ce soit avec un domaine racine (`monsite.com`) ou un sous-domaine (`notes.monsite.com`).

> [!important] Important
> CloudFlare est le **seul fournisseur officiellement pris en charge** pour la configuration de domaines personnalisés. Utiliser les instructions suivantes avec un autre fournisseur ne fonctionnera probablement pas.

**CloudFlare :**

1. Ouvrez Cloudflare sur le domaine où vous souhaitez héberger votre site Publish, par exemple `monsite.com`, même si vous souhaitez un sous-domaine comme `notes.monsite.com`.
2. Allez dans **DNS** et cliquez sur **Add Record**.
3. Sélectionnez **CNAME**.
4. Dans **name**, entrez votre domaine ou sous-domaine, par exemple `notes.monsite.com`.
5. Dans **target**, entrez `publish-main.obsidian.md`. N'incluez pas votre sous-URL personnelle dans cette valeur. Obsidian Publish gère cela à partir de votre configuration.
6. Assurez-vous que le **proxy status** est activé. Il devrait être activé par défaut.
7. Allez dans **SSL/TLS** et définissez le mode de chiffrement SSL/TLS sur « Full » pour configurer automatiquement le certificat SSL/TLS.

> [!note] Remarque
> Pour rediriger à la fois `monsite.com` et `www.monsite.com` vers Obsidian Publish, vous devez créer une [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) avec les paramètres suivants :
>
> - URL match : `www.monsite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL : `https://monsite.com/$1`
>
> Après avoir créé la règle de page, créez un enregistrement CNAME pour `www.monsite.com` comme vous l'avez fait pour `monsite.com`.

**Obsidian :**

1. Ouvrez Obsidian sur votre ordinateur.
2. Dans le [[Ruban]] à gauche, cliquez sur **Publier les modifications** ![[lucide-send.svg#icon]].
3. Sous **Publier les modifications**, sélectionnez **Modifier les options du site** ![[lucide-cog.svg#icon]].
4. À côté de **Custom domain**, sélectionnez **Configure**.
5. Dans **Custom URL**, entrez l'URL de votre domaine ou sous-domaine. Veillez à ne pas mettre `www.` dans le champ de l'URL personnalisée.

> [!note] Remarque
> Si la configuration de votre domaine personnalisé aboutit à une boucle de redirection, c'est probablement parce que le mode de chiffrement dans CloudFlare a été défini sur « Flexible » au lieu de « Full ».

## Configuration avec un proxy

Vous pouvez également configurer SSL/TLS pour votre domaine personnalisé en utilisant votre propre serveur web.

Si vous hébergez déjà un site web sous votre domaine ou sous-domaine, vous pouvez aussi utiliser cette option et configurer votre site web pour charger votre site Obsidian Publish sous un chemin d'URL spécifique, au lieu d'héberger le site complet.

Redirigez toutes les requêtes sous ce chemin d'URL vers `https://publish.obsidian.md/serve?url=monsite.com/mes-notes/...` et configurez les options du site dans Obsidian sur le même chemin d'URL, en définissant **Custom URL** sur `monsite.com/mes-notes`.

Vous pouvez également configurer Obsidian Publish comme une sous-URL d'un site que vous possédez. Par exemple, `https://monsite.com/mes-notes/`. Pour cela, vous devez héberger votre propre serveur et rediriger toutes les requêtes vers notre serveur à `https://publish.obsidian.md/`.

Les exemples de configuration de proxy suivants ne sont pas exhaustifs, mais fournissent des méthodes courantes pour cette implémentation.

### NGINX

Dans votre configuration NGINX, ajoutez ce qui suit :

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Certains utilisateurs ont signalé que l'ajout de `$request_uri` au proxy pass peut être nécessaire :

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

Dans `.htaccess`, ajoutez ce qui suit :

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Remarque
> `mod_rewrite` doit être activé, et vous devrez peut-être aussi configurer [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache).

### Netlify

Dans `netlify.toml`, [configurez les redirections](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file) :

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

Dans `vercel.json`, [configurez les réécritures](https://vercel.com/docs/configuration#project/rewrites) :

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

Cet extrait de configuration minimal redirige `mysite.com` vers Obsidian Publish.
Consultez la [documentation Traefik](https://doc.traefik.io/traefik/routing/overview/)
pour un exemple complet.

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

### En-têtes HTTP X pris en charge

Si votre service proxy ne permet pas les chemins de requête, vous pouvez utiliser `https://publish.obsidian.md/` avec un en-tête personnalisé `x-obsidian-custom-domain` défini sur l'URL de votre site `monsite.com/mon-sous-chemin`.

## Rediriger l'ancien site vers le domaine personnalisé

Si vous souhaitez rediriger vos visiteurs depuis l'ancien site `publish.obsidian.md` vers votre nouveau domaine personnalisé, activez l'option **Redirect to your custom domain** lors de la configuration de votre domaine personnalisé.

## Dépannage

Une fois votre domaine personnalisé configuré, si vous avez visité votre site depuis votre ancien lien `https://publish.obsidian.md/slug`, vous devrez peut-être vider le cache de votre navigateur pour que certains éléments (comme les polices, les graphiques ou l'accès par mot de passe) fonctionnent correctement. Cela est dû aux restrictions de sécurité inter-domaines imposées par les navigateurs modernes. La bonne nouvelle est que les lecteurs de votre site ne devraient jamais rencontrer ce problème si vous ne leur donnez accès qu'à votre domaine personnalisé.
