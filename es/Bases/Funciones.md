---
permalink: bases/functions
publish: true
mobile: true
description: Esta página detalla las funciones utilizadas en Obsidian Bases para manipular datos de propiedades en filtros y fórmulas.
---
Las funciones se utilizan en [[Introducción a Bases|Bases]] para manipular datos de [[Propiedades|propiedades]] en [[Vistas#Filtros|filtros]] y [[Fórmulas|fórmulas]]. Consulta la referencia de [[Sintaxis de Bases|sintaxis de Bases]] para aprender más sobre cómo puedes usar las funciones.

Aparte de las funciones [[Funciones#Global|Globales]], la mayoría de las funciones dependen del tipo de valor que deseas modificar:

- [[Funciones#Cualquiera|Cualquiera]]
- [[Funciones#Fecha|Fecha]]
- [[Funciones#Cadena|Cadena]]
- [[Funciones#Número|Número]]
- [[Funciones#Lista|Lista]]
- [[Funciones#Enlace|Enlace]]
- [[Funciones#Archivo|Archivo]]
- [[Funciones#Objeto|Objeto]]
- [[Funciones#Expresión regular|Expresión regular]]

## Global

Las funciones globales se utilizan sin un tipo.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Escapa caracteres especiales en una cadena para hacerla segura para su inclusión en HTML.

### `date()`

`date(date: string): date`

- `date(string): date` analiza la cadena proporcionada y devuelve un objeto de fecha.
- La cadena `date` debe estar en el formato `YYYY-MM-DD HH:mm:ss`.

### `duration()`

`duration(value: string): duration`

- Analiza una cadena como una duración. Consulta la [[Sintaxis de Bases#Aritmética de fechas|sección de aritmética de fechas]] para el formato de la cadena `value`.
- Las duraciones no necesitan ser analizadas explícitamente al realizar aritmética de fechas (por ejemplo, `now() + '1d'`), pero sí cuando se realiza aritmética sobre duraciones (por ejemplo, `now() + (duration('1d') * 2)`).
- Al realizar aritmética de duraciones con escalares, la duración debe estar a la izquierda. Por ejemplo `duration('5h') * 2`, en lugar de `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Devuelve un objeto de archivo para el archivo o ruta dados.
- Ejemplo: `file(link("[[nombre-archivo]]"))` o `file("ruta al archivo")`.

### `html()`

`html(html: string): html`

- Convierte una cadena en un fragmento de código que se renderiza como HTML.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` es la condición a evaluar.
- `trueResult` es la salida si la condición es verdadera.
- `falseResult` es la salida opcional si la condición es falsa. Si no se proporciona, se asume como `null`.
- Devuelve `trueResult` si `condition` es verdadera, o es un valor truthy, o `falseResult` en caso contrario.
- Ejemplo: `if(isModified, "Modificado", "Sin modificar")`

### `image()`

`image(path: string | file | url): image`

- Devuelve un objeto de imagen que renderizará la imagen en la vista.
- Ejemplo: `image(propiedad-imagen)` o `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(name: string): icon`

- Devuelve un valor que se renderizará como un icono en una vista. El nombre del icono debe coincidir con un icono Lucide compatible.
- Ejemplo: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Analiza una cadena `path` y devuelve un objeto Link que se renderiza como un enlace a la ruta dada.
- Opcionalmente proporciona el parámetro `display` para cambiar el texto que muestra el enlace.

### `list()`

`list(element: any): List`

- Si el elemento proporcionado es una lista, lo devuelve sin modificar.
- De lo contrario, envuelve el `element` proporcionado en una lista, creando una lista con un solo elemento.
- Esta función puede ser útil cuando una propiedad contiene una mezcla de cadenas o listas a lo largo de la bóveda.
- Ejemplo: `list("valor")` devuelve `["valor"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Devuelve el mayor de todos los números proporcionados.

### `min()`

`min(value1: number, value2: number...): number`

- Devuelve el menor de todos los números proporcionados.

### `now()`

`now(): date`

- `now()` devuelve un objeto de fecha que representa el momento actual.

### `number()`

`number(input: any): number`

- Intenta devolver el valor proporcionado como un número.
- Los objetos de fecha se devolverán como milisegundos desde la época unix.
- Los booleanos devolverán 1 o 0.
- Las cadenas se analizarán como número y devolverán un error si el resultado es inválido.
- Ejemplo: `number("3.4")` devuelve `3.4`.

### `duration()`

`duration(value: string): duration`

- Analiza una cadena como una duración. Consulta la [[Sintaxis de Bases#Aritmética de fechas|sección de aritmética de fechas]] para el formato de la cadena `value`.
- Las duraciones no necesitan ser analizadas explícitamente al realizar aritmética de fechas (por ejemplo, `now() + '1d'`), pero sí cuando se realiza aritmética sobre duraciones (por ejemplo, `now() + (duration('1d') * 2)`).
- Al realizar aritmética de duraciones con escalares, la duración debe estar a la izquierda. Por ejemplo `duration('5h') * 2`, en lugar de `2 * duration('5h')`.

### `today()`

`today(): date`

- `today()` devuelve un objeto de fecha que representa la fecha actual. La porción de tiempo se establece en cero.

## Cualquiera

Funciones que puedes usar con cualquier valor. Esto incluye cadenas (por ejemplo, `"hola"`), números (por ejemplo, `42`), listas (por ejemplo, `[1,2,3]`), objetos y más.

### `isTruthy()`

`any.isTruthy(): boolean`

- Devuelve el valor convertido a booleano.
- Ejemplo: `1.isTruthy()` devuelve `true`.

### `isType()`

`any.isType(type: string): boolean`

- Devuelve true si el valor es del tipo proporcionado.
- Ejemplo: `"ejemplo".isType("string")` y `true.isType("boolean")` ambos devuelven true.

### `toString()`

`any.toString(): string`

- Devuelve la representación en cadena de cualquier valor.
- Ejemplo: `123.toString()` devuelve `"123"`.

## Fecha

Funciones que puedes usar con fecha y hora como `date("2025-05-27")`. Las comparaciones de fechas se pueden realizar usando [[Sintaxis de Bases#Aritmética de fechas|aritmética de fechas]].

### Campos

Los siguientes campos están disponibles para fechas:

| Campo              | Tipo     | Descripción                    |
| ------------------ | -------- | ------------------------------ |
| `date.year`        | `number` | El año de la fecha             |
| `date.month`       | `number` | El mes de la fecha (1–12)      |
| `date.day`         | `number` | El día del mes                 |
| `date.hour`        | `number` | La hora (0–23)                 |
| `date.minute`      | `number` | El minuto (0–59)               |
| `date.second`      | `number` | El segundo (0–59)              |
| `date.millisecond` | `number` | El milisegundo (0–999)         |

### `date()`

`date.date(): date`

- Devuelve un objeto de fecha con la hora eliminada.
- Ejemplo: `now().date().format("YYYY-MM-DD HH:mm:ss")` devuelve una cadena como "2025-12-31 00:00:00"

### `format()`

`date.format(format: string): string`

- `format` es la cadena de formato (por ejemplo, `"YYYY-MM-DD"`).
- Devuelve la fecha formateada según lo especificado por una cadena de formato de Moment.js.
- Ejemplo: `date.format("YYYY-MM-DD")` devuelve `"2025-05-27"`.

### `time()`

`date.time(): string`

- Devuelve la hora.
- Ejemplo: `now().time()` devuelve una cadena como "23:59:59"

### `relative()`

`date.relative(): string`

- Devuelve una comparación legible de la fecha con la fecha y hora actual.
- Ejemplo: `file.mtime.relative()` devuelve un valor como `hace 3 días`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Devuelve false.

## Cadena

Funciones que puedes usar con una secuencia de caracteres como `"hola"`.

### Campos

| Campo           | Tipo     | Descripción                              |
| --------------- | -------- | ---------------------------------------- |
| `string.length` | `number` | El número de caracteres en la cadena     |

### `contains()`

`string.contains(value: string): boolean`

- `value` es la subcadena a buscar.
- Devuelve true si la cadena contiene `value`.
- Ejemplo: `"hello".contains("ell")` devuelve `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` son una o más subcadenas a buscar.
- Devuelve true si la cadena contiene todos los `values`.
- Ejemplo: `"hello".containsAll("h", "e")` devuelve `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` son una o más subcadenas a buscar.
- Devuelve true si la cadena contiene al menos uno de los `values`.
- Ejemplo: `"hello".containsAny("x", "y", "e")` devuelve `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` es la cadena a verificar al final.
- Devuelve true si esta cadena termina con `query`.
- Ejemplo: `"hello".endsWith("lo")` devuelve `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Devuelve true si la cadena no tiene caracteres, o no está presente.
- Ejemplo: `"Hello world".isEmpty()` devuelve `false`.
- Ejemplo: `"".isEmpty()` devuelve `true`.

### `lower()`

`string.lower(): string`

- Devuelve la cadena convertida a minúsculas.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` es el valor a buscar en la cadena objetivo.
- `replacement` es el valor con el que reemplazar los patrones encontrados.
- Si `pattern` es una cadena, todas las ocurrencias del patrón serán reemplazadas.
- Si `pattern` es una Regexp, la bandera `g` determina si solo la primera o todas las ocurrencias son reemplazadas.
- Ejemplo: `""a:b:c:d".replace(/:/, "-")` devuelve `"a-b,c,d"`, mientras que `"a:b:c:d".replace(/:/g, "-")` devuelve `"a-b-c-d"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` es el número de veces que se repite la cadena.
- Ejemplo: `"123".repeat(2)` devuelve `"123123"`

### `reverse()`

`string.reverse(): string`

- Invierte la cadena.
- Ejemplo: `"hello".reverse()` devuelve `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` es el índice de inicio inclusivo.
- `end` es el índice de fin exclusivo opcional.
- Devuelve una subcadena desde `start` (inclusivo) hasta `end` (exclusivo).
- Ejemplo: `"hello".slice(1, 4)` devuelve `"ell"`.
- Si `end` se omite, corta hasta el final de la cadena.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` es el delimitador para dividir la cadena.
- `n` es un número opcional. Si se proporciona, el resultado tendrá los primeros `n` elementos.
- Devuelve una lista de subcadenas.
- Ejemplo: `"a,b,c,d".split(",", 3)` o `"a,b,c,d".split(/,/, 3)` devuelve `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` es la cadena a verificar al inicio.
- Devuelve true si esta cadena comienza con `query`.
- Ejemplo: `"hello".startsWith("he")` devuelve `true`.

### `title()`

`string.title(): string`

- Convierte la cadena a formato de título (primera letra de cada palabra en mayúscula).
- Ejemplo: `"hello world".title()` devuelve `"Hello World"`.

### `trim()`

`string.trim(): string`

- Elimina los espacios en blanco de ambos extremos de la cadena.
- Ejemplo: `"  hi  ".trim()` devuelve `"hi"`.

## Número

Funciones que puedes usar con valores numéricos como `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Devuelve el valor absoluto del número.
- Ejemplo: `(-5).abs()` devuelve `5`.

### `ceil()`

`number.ceil(): number`

- Redondea el número hacia arriba al entero más cercano.
- Ejemplo: `(2.1).ceil()` devuelve `3`.

### `floor()`

`number.floor(): number`

- Redondea el número hacia abajo al entero más cercano.
- Ejemplo: `(2.9).floor()` devuelve `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Devuelve true si el número no está presente.
- Ejemplo: `5.isEmpty()` devuelve `false`.

### `round()`

`number.round(digits: number): number`

- Redondea el número al entero más cercano.
- Opcionalmente, proporciona un parámetro `digits` para redondear a esa cantidad de dígitos decimales.
- Ejemplo: `(2.5).round()` devuelve `3`, y `(2.3333).round(2)` devuelve `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` es el número de decimales.
- Devuelve una cadena con el número en notación de punto fijo.
- Ejemplo: `(3.14159).toFixed(2)` devuelve `"3.14"`.

## Lista

Funciones que puedes usar con una lista ordenada de elementos como `[1, 2, 3]`.

### Campos

| Campo         | Tipo     | Descripción                             |
| ------------- | -------- | --------------------------------------- |
| `list.length` | `number` | El número de elementos en la lista      |

### `contains()`

`list.contains(value: any): boolean`

- `value` es el elemento a buscar.
- Devuelve true si la lista contiene `value`.
- Ejemplo: `[1,2,3].contains(2)` devuelve `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` son uno o más elementos a buscar.
- Devuelve true si la lista contiene todos los `values`.
- Ejemplo: `[1,2,3].containsAll(2,3)` devuelve `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` son uno o más elementos a buscar.
- Devuelve true si la lista contiene al menos uno de los `values`.
- Ejemplo: `[1,2,3].containsAny(3,4)` devuelve `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Filtra los elementos de esta lista llamando a una función de filtro, que usa las variables `index` y `value`, y devuelve un valor booleano indicando si el elemento debe conservarse.
- `value` es el valor de un elemento en la lista.
- `index` es el índice del valor actual.
- Ejemplo: `[1,2,3,4].filter(value > 2)` devuelve `[3,4]`.

### `flat()`

`list.flat(): list`

- Aplana listas anidadas en una sola lista.
- Ejemplo: `[1,[2,3]].flat()` devuelve `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Devuelve true si la lista no tiene elementos.
- Ejemplo: `[1,2,3].isEmpty()` devuelve `false`.

### `join()`

`list.join(separator: string): string`

- `separator` es la cadena a insertar entre elementos.
- Une todos los elementos de la lista en una sola cadena.
- Ejemplo: `[1,2,3].join(",")` devuelve `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Transforma cada elemento de esta lista llamando a una función de conversión, que usa las variables `index` y `value`, y devuelve el nuevo valor a colocar en la lista.
- `value` es el valor de un elemento en la lista.
- `index` es el índice del valor actual.
- Ejemplo: `[1,2,3,4].map(value + 1)` devuelve `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Reduce los elementos de esta lista a un solo valor ejecutando una expresión para cada elemento. La expresión puede usar las variables `index`, `value` y `acc` (el acumulador), y debe devolver el siguiente valor del acumulador.
- `expression` se evalúa para cada elemento en la lista.
- `value` es el valor del elemento actual en la lista.
- `index` es el índice del elemento actual.
- `acc` es el valor acumulado hasta el momento.
- Ejemplo (suma): `[1,2,3].reduce(acc + value, 0)` devuelve `6`.
- Ejemplo (máximo): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` devuelve el número más grande, o `null` si no hay ninguno.

### `reverse()`

`list.reverse(): list`

- Invierte la lista en su lugar.
- Ejemplo: `[1,2,3].reverse()` devuelve `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` es el índice de inicio inclusivo.
- `end` es el índice de fin exclusivo opcional.
- Devuelve una copia superficial de una porción de la lista desde `start` (inclusivo) hasta `end` (exclusivo).
- Ejemplo: `[1,2,3,4].slice(1,3)` devuelve `[2,3]`.
- Si `end` se omite, corta hasta el final de la lista.

### `sort()`

`list.sort(): list`

- Ordena los elementos de la lista de menor a mayor.
- Ejemplo: `[3, 1, 2].sort()` devuelve `[1, 2, 3]`.
- Ejemplo: `["c", "a", "b"].sort()` devuelve `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Elimina elementos duplicados.
- Ejemplo: `[1,2,2,3].unique()` devuelve `[1,2,3]`.

## Enlace

Funciones que puedes usar sobre un enlace. Los enlaces se pueden crear desde un archivo (`file.asLink()`) o una ruta (`link("ruta")`).

### `asFile()`

`link.asFile(): file`

- Devuelve un objeto de archivo si el enlace se refiere a un archivo local válido.
- Ejemplo: `link("[[nombre-archivo]]").asFile()`

### `linksTo()`

`link.linksTo(file): boolean`

- Devuelve si el archivo representado por el `link` tiene un enlace a `file`.

## Archivo

Funciones que puedes usar con archivos en la bóveda.

### Campos

Los siguientes campos están disponibles para archivos:

| Campo             | Tipo     | Descripción                                                      |
| ----------------- | -------- | ---------------------------------------------------------------- |
| `file.name`       | `string` | El nombre de este archivo.                                       |
| `file.basename`   | `string` | El nombre de este archivo sin la extensión de archivo.           |
| `file.path`       | `string` | La ruta completa a este archivo, relativa a la raíz de la bóveda.|
| `file.folder`     | `string` | La ruta completa a la carpeta padre.                             |
| `file.ext`        | `string` | La extensión de archivo para este archivo.                       |
| `file.size`       | `number` | El tamaño de este archivo, en bytes.                             |
| `file.properties` | `object` | Las propiedades de nota para este archivo.                       |
| `file.tags`       | `list`   | Las etiquetas para este archivo. Incluye etiquetas en línea.     |
| `file.links`      | `list`   | Los enlaces internos dentro de este archivo.                     |
| `file.ctime`      | `date`   | Marca de tiempo de cuando se creó este archivo.                  |
| `file.mtime`      | `date`   | Marca de tiempo de la última modificación de este archivo.       |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` texto de visualización opcional para el enlace.
- Devuelve un objeto Link que se renderiza como un enlace funcional.
- Ejemplo: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` es otro objeto de archivo o ruta de cadena a verificar.
- Devuelve true si `file` enlaza a `otherFile`.
- Ejemplo: `file.hasLink(otherFile)` devuelve `true` si hay un enlace de `file` a `otherFile`.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Devuelve true si la nota tiene la propiedad de archivo dada.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` son uno o más nombres de etiquetas.
- Devuelve true si el archivo tiene alguna de las etiquetas en `values`.
- Ejemplo: `file.hasTag("tag1", "tag2")` devuelve `true` si el archivo tiene la etiqueta `#tag1` o `#tag2`. También incluye cualquier [[Etiquetas#Etiquetas anidadas|etiqueta anidada]], como `#tag1/a` o `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` es el nombre de la carpeta a verificar.
- Devuelve true si el archivo está en la carpeta especificada o en una de sus subcarpetas.
- Ejemplo: `file.inFolder("notas")` devuelve `true`.

## Objeto

Funciones que puedes usar con una colección de pares clave-valor como `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Devuelve true si el objeto no tiene propiedades propias.
- Ejemplo: `{}.isEmpty()` devuelve `true`.

### `keys()`

`object.keys(): list`

- Devuelve una lista que contiene las claves del objeto.

### `values()`

`object.values(): list`

- Devuelve una lista que contiene los valores del objeto.

## Expresión regular

Funciones que puedes usar con un patrón de expresión regular. Ejemplo: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` es la cadena a probar.
- Devuelve true si la expresión regular coincide con `value`.
- Ejemplo: `/abc/.matches("abcde")` devuelve `true`.
