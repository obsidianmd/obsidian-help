Obsidian Publish™ es un servicio de alojamiento de pago para sus notas.

Para obtener instrucciones sobre cómo publicar sus notas desde la aplicación Obsidian, consulte el [[Publish|complemento Publish]].

### Privacidad

Tienes control total sobre qué publicar a través del [[Publish|complemento Publish]] - ya sea su bóveda completa o solo notas seleccionadas dentro de su bóveda. En cuanto a las notas que elijas para **no**  publicar, puede estar seguro de que esas notas permanecerán completamente privadas y Obsidian Publish no las conoce.

### Retrocediendo

Tenga en cuenta que Obsidian Publish no debe utilizarse como copia de seguridad de su contenido. Asegúrese de tener siempre una copia de seguridad personal de su sitio utilizando su método de copia de seguridad preferido. Nuestros esfuerzos en Obsidian Publish se centrarán más en la funcionalidad, la facilidad de uso y la disponibilidad del sitio.

### Demo

Es muy probable que ya esté viendo este artículo en nuestro sitio oficial desarrollado por Obsidian Publish.

Si no, puedes visitarlo aquí.: https://publish.obsidian.md/help.

### Qué está incluido

El servicio Obsidian Publish le permite crear su sitio directamente desde la aplicación Obsidian eligiendo las notas que desea publicar.
Para personalizar su sitio, puede elegir entre el modo claro y oscuro, y también alternar entre longitud de línea legible y longitud de página completa.

Hay varios componentes que se pueden encender o apagar desde el [[Publish|complemento Publish]]. Los cambios en estas opciones se reflejarán en su sitio publicado una vez que se borre la memoria caché, generalmente en 5 minutos.

##### Navegación

Al habilitar esta opción, se agrega una barra lateral de navegación que muestra todas las páginas publicadas y las carpetas que las contienen. Los espectadores verán la nota abierta actual resaltada y pueden hacer clic en cualquier otra nota para navegar.

##### Barra de búsqueda

Agrega una barra de búsqueda a la página. Esta barra se puede utilizar para buscar páginas, alias y encabezados dentro de las páginas. Actualmente no busca en el contenido de texto completo del sitio.

##### Vista de gráfico

Muestra un gráfico local de la página abierta actualmente. Esto usa el mismo motor de renderizado que el complemento [[Vista de gráfico]] en Obsidian.

##### Tabla de contenido

Muestra una tabla de contenido para la página actualmente abierta. La lista se genera a partir de encabezados dentro de la página, similar al complemento [[Esquema]]. Los espectadores que naveguen por la nota verán el encabezado correspondiente resaltado a medida que se desplazan, y pueden hacer clic en otro encabezado para navegar inmediatamente hasta él. 

##### Backlinks

Muestra una sección al final de cada página llamada "Vinculado a esta página", que contiene backlinks de otras páginas. Si no hay backlinks, la sección no se mostrará.

##### Tags

Cuando el lector hace clic en una etiqueta, puede ver una lista de otras páginas que incluyen la misma etiqueta.


##### Vista previa de desplazamiento

Al pasar el cursor sobre los enlaces, su contenido se muestra dentro de un cuadro emergente. Esto funciona de manera similar al complemento [[Vista previa de la página]] en Obsidian.

##### CSS personalizado

Para personalizar el estilo de su sitio, puede cargar un `publish.css`. Este archivo debe almacenarse en la carpeta raíz de su sitio. Puede usar su tema existente y agregar algunos ajustes adicionales para publicar en `publish.css`.

##### Favicon

Para cambiar el favicon de su sitio, puede cargar íconos `png` de cualquier tamaño en el formato`favicon-32.png` o `favicon-32x32.png`. También puede cargar el archivo `favicon.ico`. Estos archivos se pueden almacenar en cualquier carpeta. La recomendación actual (a partir de 2020) es proporcionar tamaños `32 × 32`,` 128x128`, `152 × 152`,` 167x167`, `180x180`,` 192x192` y `196x196`.

##### JS personalizado

Si desea ejecutar su propio código JavaScript para cambiar la experiencia del visitante, o agregar varias integraciones como Discus!, Discourse, etc., puede hacerlo cargando `publish.js` dentro de la raíz de su bóveda. Tenga en cuenta que estos scripts solo se ejecutarán para los visitantes de su dominio personalizado.

##### No permitir la indexación del motor de búsqueda

Esta opción agrega una metaetiqueta noindex a todas sus páginas para que los motores de búsqueda como Google no indexen su sitio. Tenga en cuenta que los motores de búsqueda no podrán indexar su sitio de todos modos si está protegido con contraseña.

##### Google Analytics

Si desea configurar Google Analytics para su sitio, primero asegúrese de que las leyes y regulaciones locales lo permitan. Luego, solo necesita poner el código de seguimiento, en forma de `UA-XXXXX-Y` en el cuadro de texto y su sitio rastreará automáticamente las visitas a la página. Tenga en cuenta que Google Analytics solo está disponible para los visitantes de su dominio personalizado.

Al probar Google Analytics, asegúrese de deshabilitar cualquier extensión de navegador que bloquee anuncios, como uBlock Origin, que bloquea la ejecución de los scripts de Google Analytics.

Además, Obsidian Publish no es directamente compatible con Google Tag Manager en este momento; puede configurarlo usando javascript personalizado si desea usar Google Tag Manager en lugar de Google Analytics.

### Dominio personalizado

Puede configurar un dominio o subdominio personalizado para su sitio de Obsidian Publish. Actualmente, todavía no tenemos una forma de proporcionar un certificado SSL en su nombre, por lo que debe recurrir a un servidor propio habilitado para SSL o configurar su sitio en CloudFlare, que proporciona SSL de forma gratuita.

También puede configurar Obsidian Publish como una sub-URL de un sitio de su propiedad. Por ejemplo, `https://misitio.com /mis-notas/`. Para lograr esto, debe alojar su propio servidor y enviar todas las solicitudes a nuestro servidor en `https://publish.obsidian.md/`.

Continúe leyendo para conocer los detalles de la configuración.

#### Configuración de CloudFlare

La forma más fácil de configurar un dominio o subdominio personalizado es crear una cuenta con [CloudFlare] (https://cloudflare.com) y dejar que CloudFlare administre su dominio. Esto le permite agregar SSL a su sitio de forma gratuita, así como garantizar que su sitio sea rápido desde cualquier lugar del mundo desde el que se acceda. Normalmente, los usuarios alojarán su contenido de Obsidian Publish en un dominio raíz (por ejemplo, `misitio.com`) o un subdominio inmediato (por ejemplo,` notas.mysitio.com`). Estas instrucciones funcionan para ambos casos.

1. Abra Cloudflare en el dominio al que desea agregar Publicar (por ejemplo, `misitio.com`, incluso si desea un subdominio como` notas.mysitio.com`).
2. Vaya a DNS y haga clic en Agregar registro. Seleccione CNAME, y en 'nombre' ingrese el dominio o subdominio que desee (por ejemplo, `notes.misitio.com`). En 'objetivo', ingrese el valor `publish-main.obsidian.md`. No incluya su sub-URL personal en este valor, ya que Obsidian Publish maneja esto desde su configuración.
3. Vaya a SSL / TLS y configure el modo de cifrado SSL / TLS en `Full`. Esto configurará el certificado SSL / TLS automáticamente.

Una vez que haya terminado de configurar CloudFlare, puede dirigirse a las opciones de su sitio en Obsidian y establecer la URL de su dominio o subdominio. Esto permite que nuestro servidor asocie el dominio a su sitio.

Solución de problemas: si la configuración de su dominio personalizado termina en un bucle de redireccionamiento, es probable que el modo de cifrado en CloudFlare sea `Flexible` en lugar de `Full`.

Si deseas configurar tanto `misitio.com` como `www.misitio.com` a Obsidian Publish, necesitará crear un [Regla de página](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) como sigue:
- Coincidencia de URL: `www.misitio.com/*`
- URL de reenvío: redireccionamiento permanente 301
- Redireccionar URL: `https://misitio.com/$1`

Una vez que crea la regla de la página, también debe crear un registro CNAME para `www.misitio.com` tal como lo creó para` misitio.com`

#### Configuración de proxy / redireccionamiento

Si desea alojar su propio servidor web y configurar su propio cifrado SSL, puede elegir esta opción. Si ya está alojando un sitio web con su dominio o subdominio, también puede usar esta opción y configurar su sitio web para cargar su sitio de Obsidian Publish bajo una ruta URL específica, en lugar de alojar el sitio completo.

Simplemente envíe todas las solicitudes bajo esa ruta URL a `https: //publish.obsidian.md/serve? Url = misitio.com / my-subpath / ...` y configure las opciones del sitio en Obsidian en la misma ruta URL.


Por ejemplo, en NGINX, puede configurarlo como:
```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=misitio.com/my-notes/;
  proxy_ssl_server_name on;
}
```

En Apache `.htaccess`, puede configurarlo como:
(Nota: mod_rewrite debe estar habilitado y es posible que también deba configurar [SSLProxyEngine] (https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache))
```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=misitio.com/my-notes/$1"  [L,P]
```

Si está utilizando Netlify, puede configurarlo como:
```
[[redirects]]
  from = "https://misitio.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=misitio.com/my-notes/:splat"
  status = 200
  force = true
```

Alternativamente, si su servicio de proxy no permite rutas de consulta, puede usar `https://publish.obsidian.md/` con un encabezado personalizado `x-obsidian-custom-domain` configurado en la URL de su sitio `misitio.com/my-subpath`.

#### Problemas posteriores a la configuración del dominio personalizado

Una vez que configure su dominio personalizado, si ha visitado su sitio desde su enlace anterior `https://publish.obsidian.md/slug`, es posible que deba borrar la memoria caché de su navegador para ciertas cosas (como fuentes, gráficos o acceso con contraseña) para que funcione correctamente. Esto se debe a las restricciones de seguridad entre dominios que imponen los navegadores modernos. La buena noticia es que los lectores de su sitio nunca deberían tener este problema si solo permite que los visitantes usen su dominio personalizado.

#### Redirigir el sitio antiguo a un dominio personalizado

Si desea redirigir a sus visitantes desde el antiguo sitio `publish.obsidian.md` a su nuevo dominio personalizado, hay una opción que puede habilitar en la página de configuración del dominio personalizado que hará precisamente eso.

### Subiendo

Obsidian Publish is still in its early days. Here are some features we plan to add:

- Soporte completo de dominio personalizado (con aprovisionamiento de certificado SSL).
- Búsqueda de texto completo.
- Más temas integrados.

Háganos saber si tiene alguna solicitud de función de Obsidian Publish enviando una [solicitud de foro aquí] (https://forum.obsidian.md/).

### Precios

Para conocer los precios de Obsidian Publish, visite [nuestra página de precios] (https://obsidian.md/pricing).

### Detalles técnicos

Obsidian Publish usa Cloudflare como CDN (red de entrega de contenido) para distribuir su sitio por todo el mundo para un acceso más rápido. Esto implica almacenar copias en caché de los archivos de su sitio en algunos de los más de 200 centros de datos para garantizar la latencia más baja para sus lectores y que el sitio permanezca rápido y se cargue rápido incluso si su espectador vive lejos de nuestros servidores primarios.

Sin embargo, esto significa que cuando cambia la configuración del sitio, publica contenido nuevo o anula la publicación de contenido, es posible que los visitantes no vean la última versión por un tiempo. Actualmente, nuestra caché está configurada para persistir durante una hora antes de tener que "volver a validar" para garantizar que el contenido no haya cambiado.

Si acaba de publicar elementos pero sigue viendo una versión anterior, normalmente puede realizar una "actualización completa" manteniendo presionado el botón de recarga y seleccionando "Recarga completa" en el menú desplegable. De lo contrario, puede intentar borrar la memoria caché del navegador o deshabilitar la memoria caché utilizando las herramientas de desarrollador en la pestaña de red.

#### Alojamiento de archivos multimedia

Si bien Obsidian Publish le permite cargar videoclips, no está optimizado para la entrega de videos. Como tal, sus visitantes pueden encontrar que los videos en su sitio pueden no brindar una gran experiencia.

Recomendamos utilizar un servicio de alojamiento de videos adecuado como YouTube o Vimeo para alojar sus videos en Obsidian Publish. Las ventajas de utilizar un sitio de alojamiento de videos adecuado incluyen:

- La recodificación automática garantiza que sus videos se puedan reproducir en todos los dispositivos móviles, independientemente del formato de codificación que utilizó en su archivo original.
- Ajuste de calidad dinámico basado en la disponibilidad de ancho de banda y asegura que los videos se puedan reproducir sin problemas sin pausas constantemente para "almacenarlos en búfer".
- Compresión de video de alta eficiencia para garantizar que los visitantes no superen su límite de datos al ver su sitio.
- CDN global que permite que sus videos se carguen rápidamente independientemente de dónde se encuentre su visitante en el mundo.
---

### Relacionadas

Consulte el [[Publish | complemento de publicación]] para obtener detalles sobre cómo publicar sus notas.
