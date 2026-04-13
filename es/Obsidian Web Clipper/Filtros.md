---
permalink: web-clipper/filters
---
Los filtros permiten modificar [[variables]] en las [[Obsidian Web Clipper/Plantillas|plantillas de Web Clipper]]. Los filtros se aplican a las variables utilizando la sintaxis `{{variable|filter}}`.

- Los filtros funcionan para cualquier tipo de [[Variables|variable]], incluyendo variables `prompt`, `meta`, `selector` y `schema`.
- Los filtros se pueden encadenar, por ejemplo, `{{variable|filter1|filter2}}`, y se aplican en el orden en que se añaden.

## Fechas

Convierte y modifica fechas.

### `date`

Convierte una fecha al formato especificado, [ver referencia](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` convierte la fecha actual a "YYYY-MM-DD".
- Usa `date:("outputFormat", "inputFormat")` para especificar el formato de entrada, por ejemplo, `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` analiza "12/01/2024" y devuelve `"2024-12-01"`.

### `date_modify`

Modifica una fecha añadiendo o restando una cantidad de tiempo especificada, [ver referencia](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` devuelve `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` devuelve `"2024-10-01"`

### `duration`

Convierte cadenas de duración ISO 8601 o segundos en cadenas de tiempo formateadas. Utiliza tokens: `HH` (horas con relleno), `H` (horas), `mm` (minutos con relleno), `m` (minutos), `ss` (segundos con relleno), `s` (segundos).

- `"PT1H30M"|duration:"HH:mm:ss"` devuelve `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` devuelve `"1:01:05"`.
- Establecer `duration` sin parámetros usa `HH:mm:ss` para más de 1 hora, `mm:ss` para menos de 1 hora.
- Soporta tanto cadenas de duración ISO 8601 (por ejemplo, `PT6702S`, `PT1H30M`) como segundos simples.

## Conversión de texto y capitalización

Convierte cadenas de texto de un formato a otro.

### `camel`

Convierte texto a `camelCase`.

### `capitalize`

Capitaliza el primer carácter del valor y convierte el resto a minúsculas, por ejemplo, `"hELLO wORLD"|capitalize` devuelve `"Hello world"`.

### `decode_uri`

Decodifica una cadena codificada como URI, por ejemplo, `"%E4%BD%A0%E5%A5%BD"|decode_uri` devuelve `"你好"`.

- `"hello%20world"|decode_uri` devuelve `"hello world"`.
- Devuelve la cadena original si la decodificación falla (por ejemplo, secuencias URI malformadas).

### `kebab`

Convierte texto a `kebab-case`.

### `lower`

Convierte texto a `minúsculas`.

### `pascal`

Convierte texto a `PascalCase`.

### `replace`

Reemplaza ocurrencias del texto especificado:

- Reemplazo simple: `"hello!"|replace:",":""` elimina todas las comas.
- Reemplazos múltiples: `"hello world"|replace:("e":"a","o":"0")` devuelve `"hall0 w0rld"`.
- Los reemplazos se aplican en el orden en que se especifican.
- Para eliminar texto especificado, usa `""` como valor de reemplazo.
- Los caracteres especiales incluyendo `: | { } ( ) ' "` deben escaparse con una barra invertida cuando se usan en el término de búsqueda, por ejemplo, `\:` para buscar un carácter de dos puntos literal.

Se soportan expresiones regulares usando la sintaxis de regex de JavaScript:

- Reemplazar todas las vocales: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Sin distinción de mayúsculas: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Múltiples regex: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Banderas disponibles: `g` (global), `i` (sin distinción de mayúsculas), `m` (multilínea), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Convierte texto a un nombre de archivo seguro.

- Por defecto, `safe_name` aplica las reglas de saneamiento más conservadoras.
- Se pueden aplicar reglas específicas del sistema operativo con `safe_name:os` donde `os` puede ser `windows`, `mac` o `linux` para aplicar solo las reglas de ese sistema operativo.

### `snake`

Convierte texto a `snake_case`.

### `title`

Convierte texto a `Formato De Título`, por ejemplo, `"hello world"|title` devuelve `"Hello World"`.

### `trim`

Elimina espacios en blanco de ambos extremos de una cadena.

- `"  hello world  "|trim` devuelve `"hello world"`.

### `uncamel`

Convierte camelCase o PascalCase a palabras separadas por espacios, que luego puedes formatear con otros filtros como `title` o `capitalize`.

- `"camelCase"|uncamel` devuelve `"camel case"`.
- `"PascalCase"|uncamel` devuelve `"pascal case"`.

### `upper`

Convierte un valor a mayúsculas, por ejemplo, `"hello world"|upper` devuelve `"HELLO WORLD"`.

## Formato de texto

Aplica [[Sintaxis de formato básico]] y [[Sintaxis de formato avanzado]] al texto.

### `blockquote`

Añade un prefijo de cita Markdown (`> `) a cada línea de la entrada.

### `callout`

Crea un [[Destacados|recuadro]] con parámetros opcionales: `{{variable|callout:("type", "title", foldState)}}`

- `type` es el tipo de recuadro, por defecto es "info"
- `title` es el título del recuadro, por defecto está vacío
- `foldState` es un booleano para establecer el estado de plegado (true para plegado, false para desplegado, null para no plegable)

### `footnote`

Convierte un array u objeto en una lista de notas al pie en Markdown.

- Para arrays: `["first item","second item"]|footnote` devuelve: `[^1]: first item` etc.
- Para objetos: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` devuelve: `[^first-note]: Content 1` etc.

### `fragment_link`

Convierte cadenas y arrays en enlaces de [fragmento de texto](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments). Por defecto usa "link" como texto del enlace.

- `highlights|fragment_link` devuelve `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` devuelve `Highlight content [custom title](text-fragment-url)`

### `image`

Convierte cadenas, arrays u objetos en sintaxis de imagen Markdown.

- Para cadenas: `"image.jpg"|image:"alt text"` devuelve `![alt text](image.jpg)`.
- Para arrays: `["image1.jpg","image2.jpg"]|image:"alt text"` devuelve un array de cadenas de imagen Markdown con el mismo texto alternativo para todas las imágenes.
- Para objetos: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` devuelve cadenas de imagen Markdown con texto alternativo de las claves del objeto.

### `link`

Convierte cadenas, arrays u objetos en sintaxis de enlace Markdown (no confundir con [[Filtros#`wikilink`|wikilink]]).

- Para cadenas: `"url"|link:"author"` devuelve `[author](url)`.
- Para arrays: `["url1","url2"]|link:"author"` devuelve un array de enlaces Markdown con el mismo texto para todos los enlaces.
- Para objetos: `{"url1": "Author 1", "url2": "Author 2"}|link` devuelve enlaces Markdown con el texto que coincide con las claves del objeto.

### `list`

Convierte un array a una lista Markdown.

- `list` para convertir a una lista con viñetas.
- `list:task` para convertir a una lista de tareas.
- `list:numbered` para convertir a una lista numerada.
- `list:numbered-task` para convertir a una lista de tareas con números.

### `table`

Convierte un array o array de objetos en una [[Sintaxis de formato avanzado#Tablas|tabla Markdown]]:

- Para un array de objetos, usa las claves del objeto como encabezados.
- Para un array de arrays, crea una tabla con cada array anidado como una fila.
- Para un array simple, crea una tabla de una sola columna con "Value" como encabezado.
- Se pueden especificar encabezados de columna personalizados usando: `table:("Column 1", "Column 2", "Column 3")`. Cuando se usa con un array simple, divide automáticamente los datos en filas según el número de columnas especificadas.

### `wikilink`

Convierte cadenas, arrays u objetos en sintaxis de [[Enlazar notas|enlace wiki]] de Obsidian.

- Para cadenas: `"page"|wikilink` devuelve `[[page]]`.
- Para cadenas con alias: `"page"|wikilink:"alias"` devuelve `[[page|alias]]`.
- Para arrays: `["page1","page2"]|wikilink` devuelve un array de wikilinks sin alias.
- Para arrays con alias: `["page1","page2"]|wikilink:"alias"` devuelve un array de wikilinks con el mismo alias para todos los enlaces.
- Para objetos: `{"page1": "alias1", "page2": "alias2"}|wikilink` devuelve wikilinks con las claves como nombres de página y los valores como alias.

## Números

### `calc`

Realiza operaciones aritméticas básicas con números.

- Soporta operadores: `+`, `-`, `*`, `/`, `**` (o `^`) para exponenciación.
- Ejemplo: `5|calc:"+10"` devuelve `15`.
- Ejemplo: `2|calc:"**3"` devuelve `8` (2 al cubo).
- Devuelve la cadena original si la entrada no es un número.

### `length`

Devuelve la longitud de cadenas, arrays o el número de claves en objetos.

- Para cadenas: `"hello"|length` devuelve `5`.
- Para arrays: `["a","b","c"]|length` devuelve `3`.
- Para objetos: `{"a":1,"b":2}|length` devuelve `2`.

### `round`

Redondea un número al entero más cercano o a un número especificado de decimales.

- Sin parámetros: `3.7|round` devuelve `4`.
- Con decimales especificados: `3.14159|round:2` devuelve `3.14`.

## Procesamiento de HTML

Procesa contenido HTML y convierte HTML a Markdown. Ten en cuenta que tu [[Variables|variable]] de entrada debe contener contenido HTML, por ejemplo, usando `{{fullHtml}}`, `{{contentHtml}}` o una variable `{{selectorHtml:}}`.

### `markdown`

Convierte una cadena a una cadena formateada en [[Markdown con formato Obsidian]].

- Útil cuando se combina con variables que devuelven HTML como `{{contentHtml}}`, `{{fullHtml}}` y variables de selector como `{{selectorHtml:cssSelector}}`.

### `remove_attr`

Elimina solo los atributos HTML especificados de las etiquetas.

- Ejemplo: `"<div class="test" id="example">Content</div>"|remove_attr:"class"` devuelve `<div id="example">Content</div>`.
- Múltiples atributos: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Elimina los elementos HTML especificados y su contenido de una cadena.

- Soporta nombre de etiqueta, clase o id, por ejemplo, `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Para eliminar solo etiquetas o atributos HTML sin eliminar el contenido, usa los filtros `strip_tags` o `strip_attr`.

### `remove_tags`

Elimina solo las etiquetas HTML especificadas. Mantiene el contenido de las etiquetas.

- Ejemplo: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` devuelve `"<p>Hello world!</p>"`.
- Múltiples etiquetas: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Reemplaza etiquetas HTML, manteniendo el contenido y los atributos de la etiqueta.

- `{{fullHtml|replace_tags:"strong":"h2"}}` reemplaza todas las etiquetas `<strong>` por `<h2>`.

### `strip_attr`

Elimina **todos** los atributos HTML de una cadena.

- Usa `strip_attr:("class, id")` para mantener atributos específicos.
- Ejemplo: `"<div class="test" id="example">Content</div>"|strip_attr:("class")` devuelve `<div id="example">Content</div>`.

### `strip_md`

Elimina **todo** el formato Markdown y devuelve una cadena de texto sin formato, por ejemplo, convierte `**text**` en `text`.

- Convierte texto formateado en texto sin formato, incluyendo negrita, cursiva, resaltado, encabezados, código, citas en bloque, tablas, listas de tareas y wikilinks.
- Elimina completamente tablas, notas al pie, imágenes y elementos HTML.

### `strip_tags`

Elimina **todas** las etiquetas HTML de una cadena. El contenido dentro de la etiqueta se preserva.

- Usa `strip_tags:("p,strong,em")` para mantener etiquetas específicas.
- Ejemplo: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` devuelve `Hello <b>world</b>!`.

## Arrays y objetos

Procesa arrays y objetos.

### `first`

Devuelve el primer elemento de un array como cadena.

- `["a","b","c"]|first` devuelve `"a"`.
- Si la entrada no es un array, devuelve la entrada sin cambios.

### `join`

Combina los elementos de un array en una cadena.

- `["a","b","c"]|join` devuelve `"a,b,c"`.
- Se puede especificar un separador personalizado: `["a","b","c"]|join:" "` devuelve `"a b c"`. Usa `join:"\n"` para separar elementos con un salto de línea.
- Puede ser útil después de `split` o `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` devuelve `"b c"`.

### `last`

Devuelve el último elemento de un array como cadena.

- `["a","b","c"]|last` devuelve `"c"`.
- Si la entrada no es un array, devuelve la entrada sin cambios.

### `map`

Aplica una transformación a cada elemento de un array usando la sintaxis `map:item => item.property` o `map:item => item.nested.property` para propiedades anidadas.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` devuelve `["obsidian", "amethyst"]`.
- Usa paréntesis para literales de objeto y expresiones complejas: `map:item => ({key: value})`, por ejemplo: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` devuelve `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

También se soportan literales de cadena, por ejemplo, `["rock", "pop"]|map:item => "genres/${item}"` devuelve `["genres/rock", "genres/pop"]`.

Combina `map` con el filtro `template`, por ejemplo, `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Para maps de literales de cadena, usa `${str}` en la plantilla, por ejemplo, `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Nota: Los filtros incorporados no se pueden usar dentro de `map`. Esto significa que, por ejemplo, recortar cada valor de un array no se puede hacer con `map`.

### `merge`

Añade nuevos valores a un array.

- Para arrays: `["a","b"]|merge:("c","d")` devuelve `["a","b","c","d"]`.
- Valor único: `["a","b"]|merge:"c"` devuelve `["a","b","c"]`.
- Si la entrada no es un array, crea un nuevo array: `"a"|merge:("b","c")` devuelve `["a","b","c"]`.
- Los valores pueden entrecomillarse: `["a"]|merge:('b,"c,d",e')` devuelve `["a","b","c,d","e"]`.

### `nth`

Mantiene los elementos enésimos en un array usando sintaxis estilo nth-child de CSS y patrones de grupo. Todas las posiciones están basadas en 1 (el primer elemento es la posición 1).

- `array|nth:3` mantiene solo el 3er elemento.
- `array|nth:3n` mantiene cada 3er elemento (3, 6, 9, etc.).
- `array|nth:n+3` mantiene el 3er y todos los elementos siguientes.

Sintaxis de patrón de grupo para estructuras repetitivas:

- `array|nth:1,2,3:5` mantiene las posiciones 1, 2, 3 de cada grupo de 5 elementos. Ejemplo: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` devuelve `[1,2,3,6,7,8]`.

### `object`

Manipula datos de objetos:

- `object:array` convierte un objeto a un array de pares clave-valor.
- `object:keys` devuelve un array de las claves del objeto.
- `object:values` devuelve un array de los valores del objeto.
- Ejemplo: `{"a":1,"b":2}|object:array` devuelve `[["a",1],["b",2]]`.

### `slice`

Extrae una porción de una cadena o array.

- Para cadenas: `"hello"|slice:1,4` devuelve `"ell"`.
- Para arrays: `["a","b","c","d"]|slice:1,3` devuelve `["b","c"]`.
- Si solo se proporciona un parámetro, extrae desde ese índice hasta el final: `"hello"|slice:2` devuelve `"llo"`.
- Los índices negativos cuentan desde el final: `"hello"|slice:-3` devuelve `"llo"`.
- El segundo parámetro es exclusivo: `"hello"|slice:1,4` incluye los caracteres en los índices 1, 2 y 3.
- Usar un segundo parámetro negativo excluye elementos desde el final: `"hello"|slice:0,-2` devuelve `"hel"`.

### `split`

Divide una cadena en un array de subcadenas.

- `"a,b,c"|split:","` devuelve `["a","b","c"]`.
- `"hello world"|split:" "` devuelve `["hello","world"]`.
- Si no se proporciona separador, divide en cada carácter: `"hello"|split` devuelve `["h","e","l","l","o"]`.
- Se pueden usar expresiones regulares como separadores: `"a1b2c3"|split:[0-9]` devuelve `["a","b","c"]`.

### `template`

Aplica una cadena de plantilla a un objeto o array de objetos, usando la sintaxis `object|template:"Template with ${variable}"`.

- Acceder a propiedades anidadas: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` devuelve `"Obsidian"`.
- Para objetos: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` devuelve `"obsidian has a hardness of 5"`.
- Para arrays: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` devuelve una lista formateada.

Funciona con literales de cadena de `map` usando `${str}`:

- Ejemplo: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` devuelve una lista formateada.

### `unique`

Elimina valores duplicados de arrays y objetos.

- Para arrays de primitivos: `[1,2,2,3,3]|unique` devuelve `[1,2,3]`.
- Para arrays de objetos: `[{"a":1},{"b":2},{"a":1}]|unique` devuelve `[{"a":1},{"b":2}]`.
- Para objetos, elimina propiedades con valores duplicados, manteniendo la clave de la última ocurrencia.
- Para cadenas, devuelve la entrada sin cambios.
