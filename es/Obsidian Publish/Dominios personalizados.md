---
permalink: publish/domains
mobile: true
description: Puedes configurar un dominio o subdominio personalizado para tu sitio de Obsidian Publish.
---
Puedes configurar un dominio o subdominio personalizado para tu sitio de [[Introducción a Obsidian Publish|Obsidian Publish]].

> [!warning] Advertencia
> Por el momento, solo soportamos la configuración de dominios personalizados utilizando los siguientes métodos:
>
> - [[#Configurar usando CloudFlare]] utilizando el [modo Full](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Configurar usando un proxy]]
> 
> Aún no disponemos de una forma de aprovisionar un certificado SSL en tu nombre.

## Configurar usando CloudFlare

La forma más fácil de configurar un dominio o subdominio personalizado es crear una cuenta de [CloudFlare](https://cloudflare.com) y permitir que CloudFlare administre el DNS de tu dominio.

Los siguientes pasos utilizan CloudFlare para configurar un dominio personalizado para tu sitio de Obsidian Publish, ya sea usando un dominio raíz (`mysite.com`) o un subdominio (`notes.mysite.com`).

> [!important] Importante
> CloudFlare es el **único proveedor oficialmente soportado** para configurar dominios personalizados. Usar las siguientes instrucciones con cualquier otro proveedor probablemente no funcionará.

**CloudFlare:**

1. Abre Cloudflare en el dominio donde deseas alojar tu sitio Publish, como `mysite.com`, incluso si quieres un subdominio como `notes.mysite.com`.
2. Ve a **DNS** y haz clic en **Add Record**.
3. Selecciona **CNAME**.
4. En **name**, ingresa tu dominio o subdominio, por ejemplo `notes.mysite.com`.
5. En **target**, ingresa `publish-main.obsidian.md`. No incluyas tu sub-URL personal en este valor. Obsidian Publish se encarga de esto desde tu configuración.
6. Asegúrate de que el **proxy status** esté habilitado. Debería estar habilitado por defecto.
7. Ve a **SSL/TLS** y configura el modo de cifrado SSL/TLS en "Full" para configurar el certificado SSL/TLS automáticamente.

> [!note] Nota
> Para redirigir tanto `mysite.com` como `www.mysite.com` a Obsidian Publish, necesitas crear una [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) con los siguientes ajustes:
>
> - URL match: `www.mysite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://mysite.com/$1`
>
> Después de haber creado la regla de página, crea un registro CNAME para `www.mysite.com` de la misma forma que lo hiciste para `mysite.com`.

**Obsidian:**

1. Abre Obsidian en tu computadora.
2. En la [[Menú de cinta]] a la izquierda, haz clic en **Publicar cambios** ![[lucide-send.svg#icon]].
3. En **Publicar cambios**, selecciona **Cambiar ajustes de sitio** ![[lucide-cog.svg#icon]].
4. Junto a **Custom domain**, selecciona **Configurar**.
5. En **Custom URL**, ingresa la URL de tu dominio o subdominio. Asegúrate de no poner `www.` en el campo de URL personalizada.

> [!note] Nota
> Si la configuración de tu dominio personalizado termina en un bucle de redirección, es probable que el modo de cifrado en CloudFlare se haya configurado en "Flexible" en lugar de "Full".

## Configurar usando un proxy

También puedes configurar SSL/TLS para tu dominio personalizado usando tu propio servidor web.

Si ya estás alojando un sitio web bajo tu dominio o subdominio, también puedes usar esta opción y configurar tu sitio web para cargar tu sitio de Obsidian Publish bajo una ruta URL específica, en lugar de alojar el sitio completo.

Redirige mediante proxy todas las solicitudes bajo esa ruta URL a `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` y configura las opciones del sitio en Obsidian con la misma ruta URL, estableciendo **Custom URL** como `mysite.com/my-notes`.

También puedes configurar Obsidian Publish como una sub-URL de un sitio que poseas. Por ejemplo, `https://mysite.com/my-notes/`. Para lograr esto, debes alojar tu propio servidor y redirigir mediante proxy todas las solicitudes a nuestro servidor en `https://publish.obsidian.md/`.

Los siguientes ejemplos de configuración de proxy no son exhaustivos, pero proporcionan métodos comunes para esta implementación.

### NGINX

En tu configuración de NGINX, agrega lo siguiente:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Algunos usuarios han reportado que agregar `$request_uri` al proxy pass puede ser necesario:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

En `.htaccess`, agrega lo siguiente:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Nota
> `mod_rewrite` debe estar habilitado, y también puede que necesites configurar [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

En `netlify.toml`, [configura redirecciones](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

En `vercel.json`, [configura reescrituras](https://vercel.com/docs/configuration#project/rewrites):

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

Este extracto de configuración mínima redirige `mysite.com` a Obsidian Publish.
Consulta la [documentación de Traefik](https://doc.traefik.io/traefik/routing/overview/)
para un ejemplo completo.

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

### Encabezados HTTP X compatibles

Si tu servicio de proxy no permite rutas de consulta, puedes usar `https://publish.obsidian.md/` con un encabezado personalizado `x-obsidian-custom-domain` configurado con la URL de tu sitio `mysite.com/my-subpath`.

## Redirigir el sitio antiguo al dominio personalizado

Si deseas redirigir a tus visitantes desde el sitio antiguo `publish.obsidian.md` a tu nuevo dominio personalizado, habilita la opción **Redirigir a su dominio personalizado** al configurar tu dominio personalizado.

## Solución de problemas

Una vez que configures tu dominio personalizado, si has visitado tu sitio desde tu enlace anterior `https://publish.obsidian.md/slug`, es posible que necesites limpiar la caché de tu navegador para que ciertas cosas (como fuentes, gráficos o acceso con contraseña) funcionen correctamente. Esto se debe a las restricciones de seguridad entre dominios que imponen los navegadores modernos. La buena noticia es que los lectores de tu sitio nunca deberían encontrar este problema si solo permites que los visitantes usen tu dominio personalizado.
