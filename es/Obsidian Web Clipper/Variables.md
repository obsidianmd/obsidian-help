---
permalink: web-clipper/variables
---
Las [[Obsidian Web Clipper/Plantillas|plantillas de Web Clipper]] pueden usar variables para rellenar automáticamente datos de la página en una plantilla. Las variables se pueden usar en el **nombre de la nota**, **ubicación de la nota**, **propiedades** y **contenido de la nota**. Las variables también se pueden modificar usando [[Filtros|filtros]].

Usa el icono `...` en la extensión [[Introducción a Obsidian Web Clipper|Web Clipper]] para acceder a las variables de la página actual y usarlas en plantillas. Hay cinco tipos de variables que puedes usar:

- [[Variables#Variables predefinidas|Variables predefinidas]]
- [[Variables#Variables de prompt|Variables de prompt]]
- [[Variables#Variables meta|Variables meta]]
- [[Variables#Variables de selector|Variables de selector]]
- [[Variables#Variables Schema.org|Variables Schema.org]]

## Variables predefinidas

Las variables predefinidas se generan automáticamente basándose en el contenido de la página. Estas funcionan generalmente en la mayoría de los sitios web.

La variable de contenido principal es `{{content}}`, que contiene el contenido del artículo, los [[Resaltar páginas web|resaltados]], o la selección si hay texto seleccionado en la página. Ten en cuenta que `{{content}}` intenta extraer el contenido principal de la página, lo que puede no ser siempre lo que deseas. En ese caso, puedes usar otras variables predefinidas o variables de selector para extraer el contenido que necesitas.

| Variable            | Descripción                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| `{{author}}`        | Autor de la página                                                                      |
| `{{content}}`       | Contenido del artículo, [[Resaltar páginas web\|resaltados]], o selección, en formato Markdown |
| `{{contentHtml}}`   | Contenido del artículo, [[Resaltar páginas web\|resaltados]], o selección, en formato HTML     |
| `{{date}}`          | Fecha actual, se puede formatear usando el filtro `date`                                |
| `{{description}}`   | Descripción o extracto                                                                  |
| `{{domain}}`        | Dominio                                                                                 |
| `{{favicon}}`       | URL del favicon                                                                         |
| `{{fullHtml}}`      | HTML sin procesar del contenido completo de la página                                   |
| `{{highlights}}`    | [[Resaltar páginas web\|Resaltados]] con texto y marcas de tiempo                       |
| `{{image}}`         | URL de la imagen para compartir en redes sociales                                       |
| `{{published}}`     | Fecha de publicación, se puede formatear usando el filtro `date`                        |
| `{{selection}}`     | Selección en formato Markdown                                                           |
| `{{selectionHtml}}` | Selección en formato HTML                                                               |
| `{{site}}`          | Nombre del sitio o editor                                                               |
| `{{title}}`         | Título de la página                                                                     |
| `{{time}}`          | Fecha y hora actuales                                                                   |
| `{{url}}`           | URL actual                                                                              |
| `{{words}}`         | Conteo de palabras                                                                      |

## Variables de prompt

Las variables de prompt aprovechan modelos de lenguaje para extraer y modificar datos usando lenguaje natural. Las variables de prompt requieren que [[Interpretar páginas web|Intérprete]] esté habilitado y configurado.

Las variables de prompt usan la sintaxis `{{"un resumen de la página"}}`. Las comillas dobles alrededor del prompt son importantes y distinguen los prompts de las variables predefinidas. Las respuestas de los prompts se pueden post-procesar con [[Filtros|filtros]], por ejemplo `{{"un resumen de la página"|blockquote}}`.

### Cuándo usar variables de prompt

Las variables de prompt tienen la ventaja de ser extremadamente flexibles y fáciles de escribir, sin embargo conllevan varias desventajas: son más lentas de ejecutar, y pueden tener consideraciones de costo y privacidad dependiendo del [[Interpretar páginas web#Modelos|proveedor]] que elijas.

A diferencia de otros tipos de variables, las variables de prompt necesitan ser procesadas por un modelo de lenguaje externo, por lo que se reemplazan solo una vez que [[Interpretar páginas web|Intérprete]] se ha ejecutado.

Es mejor *no* usar variables de prompt si los datos que deseas extraer están en un formato consistente que podría extraerse con otros tipos de variables.

Por otro lado, las variables de prompt pueden ser útiles si los datos que deseas extraer están en un formato *inconsistente* entre sitios web. Por ejemplo, puedes crear una [[Obsidian Web Clipper/Plantillas|plantilla]] para guardar libros que sea agnóstica del sitio de libros. Variables de prompt como `{{"autor del libro"}}` funcionarán en cualquier sitio de libros, mientras que las variables de selector típicamente solo funcionan para un sitio.

### Ejemplos

Los prompts pueden usar casi cualquier consulta en lenguaje natural. Dependiendo del modelo que uses, los prompts pueden consultar o traducir datos entre idiomas.

- `{{"un resumen en tres viñetas, traducido al francés"}}` para extraer viñetas sobre la página y traducirlas al francés.
- `{{"un resumé de la page en trois points"}}` para extraer tres viñetas usando un prompt en francés.

Los prompts pueden transformar el contenido de la página en JSON que se puede manipular con [[Filtros|filtros]]. Por ejemplo:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Variables meta

Las variables meta te permiten extraer datos de [elementos meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) en la página, incluyendo datos de [Open Graph](https://ogp.me/) usados para rellenar las vistas previas para compartir en redes sociales.

- `{{meta:name}}` devuelve el contenido de la etiqueta meta name con el nombre dado, por ejemplo `{{meta:name:description}}` para la etiqueta meta `description`.
- `{{meta:property}}` devuelve el contenido de la etiqueta meta property con la propiedad dada, por ejemplo `{{meta:property:og:title}}` para la etiqueta meta `og:title`.

## Variables de selector

Las variables de selector te permiten extraer contenido de texto de elementos en la página usando [selectores CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

La sintaxis es `{{selector:selectorCss?atributo}}`, donde `?atributo` es opcional. Si no se especifica un atributo, se devuelve el contenido de texto del elemento. También puedes usar `{{selectorHtml:selectorCss}}` para obtener el contenido HTML del elemento. Las variables de selector tienden a funcionar mejor en un sitio web específico o conjunto de sitios web que tienen una estructura HTML consistente.

- `{{selector:h1}}` devuelve el contenido de texto de cualquier elemento `h1` en la página.
- `{{selector:.author}}` devuelve el contenido de texto de cualquier elemento `.author` en la página.
- `{{selector:img.hero?src}}` devuelve el atributo `src` de la imagen con clase `hero`.
- `{{selector:a.main-link?href}}` devuelve el atributo `href` de la etiqueta anchor con clase `main-link`.
- `{{selectorHtml:body|markdown}}` devuelve el HTML completo del elemento `body`, convertido a Markdown usando el [[Filtros#Procesamiento HTML|filtro]] `markdown`.
- Los selectores CSS anidados y combinadores están soportados si necesitas más especificidad.
- Si múltiples elementos coinciden con el selector, se devuelve un arreglo, que puedes procesar con [[Filtros#Arreglos y objetos|filtros de arreglos y objetos]] como `join` o `map`.

Las variables de selector también se pueden usar directamente en la [[Plantillas#Lógica de plantilla|lógica de plantilla]]:

- En bucles: `{% for comment in selector:.comment %}...{% endfor %}`
- En condicionales: `{% if selector:.premium-badge %}...{% endif %}`
- En asignación de variables: `{% set items = selector:.list-item %}`

## Variables Schema.org

Las variables de schema te permiten extraer datos de [schema.org](https://schema.org/) JSON-LD en la página. Los datos de schema.org también se pueden usar para [[Obsidian Web Clipper/Plantillas#Coincidencia con Schema.org|activar automáticamente una plantilla]].

- `{{schema:@Tipo:clave}}` devuelve el valor de la clave del schema.
- `{{schema:@Tipo:padre.hijo}}` devuelve el valor de una propiedad anidada.
- `{{schema:@Tipo:claveArreglo}}` devuelve el primer elemento en un arreglo.
- `{{schema:@Tipo:claveArreglo[índice].propiedad}}` devuelve el elemento en el índice especificado en un arreglo.
- `{{schema:@Tipo:claveArreglo[*].propiedad}}` devuelve una propiedad específica de todos los elementos en un arreglo.

También puedes usar una notación abreviada sin especificar el tipo de schema:

- `{{schema:author}}` coincidirá con la primera propiedad `author` encontrada en cualquier tipo de schema.
- `{{schema:name}}` coincidirá con la primera propiedad `name` encontrada en cualquier tipo de schema.

Esta notación abreviada es particularmente útil cuando no conoces o no te importa el tipo de schema específico, pero conoces el nombre de la propiedad que estás buscando.

Las propiedades anidadas y el acceso a arreglos también funcionan, tanto con como sin el `@Tipo` de schema especificado:

- `{{schema:author.name}}` encontrará la primera propiedad `author` y luego accederá a su subpropiedad `name`.
- `{{schema:author[0].name}}` accederá al `name` del primer autor en un arreglo de autores.
- `{{schema:author[*].name}}` devolverá un arreglo con todos los nombres de autores.
