---
permalink: publish/analytics
---
## Requisitos previos

Para usar analíticas en tu sitio de [[Introducción a Obsidian Publish|Obsidian Publish]], necesitas un [[Dominios personalizados|dominio personalizado]].

> [!important] Importante
> Antes de activar las analíticas, asegúrate de que las leyes y regulaciones locales te permitan rastrear a tus visitantes. Dependiendo de las herramientas que utilices, es posible que necesites añadir un banner de consentimiento a tu sitio.

## Google Analytics

Para activar Google Analytics en tu sitio de Obsidian Publish:

1. En la barra de herramientas, a la izquierda de la ventana de la aplicación, haz clic en **Publicar cambios** ![[lucide-send.svg#icon]].
2. En el diálogo **Publicar cambios**, haz clic en **Cambiar ajustes de sitio** ![[lucide-cog.svg#icon]].
3. En **Código de seguimiento de Google Analytics**, introduce tu código de seguimiento.

Para usar Google Tag Manager en lugar de Google Analytics, utiliza JavaScript personalizado para añadir tus propios scripts.

## Plausible, Fathom y otros servicios de analíticas

Puedes añadir la mayoría de los servicios de analíticas a tu sitio a través de tu archivo [[Personalizar tu sitio|publish.js]]. Asegúrate de reemplazar `yourdomain.com` con tu dominio, y el `src` del script con el script de tu proveedor de analíticas.

Aquí hay un ejemplo usando [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

El mismo enfoque puede utilizarse para [Fathom Analytics](https://usefathom.com/). Observa el cambio de `data-domain` a `data-site` — diferentes proveedores de analíticas pueden tener un formato diferente para cómo debe insertarse el script.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Solución de problemas

Para verificar que tu sitio está usando tu servicio de analíticas, desactiva cualquier extensión del navegador que bloquee anuncios, como uBlock Origin, que pueda impedir la ejecución del script de seguimiento.
