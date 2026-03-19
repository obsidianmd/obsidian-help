---
permalink: plugins/search
publish: true
mobile: true
description: >-
  Búsqueda es un complemento principal que te ayuda a encontrar datos en tu bóveda de
  Obsidian mediante el uso de términos de búsqueda y operadores para acotar
  resultados.
---
Búsqueda es un [[Complementos principales|complemento principal]] que te ayuda a encontrar datos en tu bóveda de Obsidian mediante el uso de términos de búsqueda y operadores para acotar resultados.

De forma predeterminada, puedes encontrar Búsqueda en la barra lateral izquierda ( ![[lucide-search.svg#icon]] ). También puedes abrir Búsqueda presionando `Ctrl+Shift+F` (Windows/Linux) o `Command+Shift+F` (macOS).

- **Buscar texto seleccionado**: Si seleccionas texto en el editor y abres Búsqueda con el atajo de teclado, Búsqueda te muestra los resultados para el texto seleccionado.
- **Buscar términos recientes**: Abre Búsqueda con un término vacío para ver la lista de términos de búsqueda recientes. Haz clic en cualquiera de ellos para usar el término de búsqueda de nuevo.

> [!info] Archivos excluidos
> Los archivos que coincidan con tus patrones de [[Configuración#Archivos excluidos|Archivos excluidos]] no aparecerán en los resultados de Búsqueda.

## Términos de búsqueda

Un término de búsqueda es la palabra o frase que introduces en el campo de búsqueda. Aprender a escribir términos de búsqueda de manera efectiva puede ayudarte a encontrar rápidamente lo que buscas, incluso en bóvedas grandes. Obsidian solo busca en el contenido de notas y canvas.

> [!tip]- Buscar rutas y nombres de archivo
> De forma predeterminada, solo puedes buscar las rutas y nombres de archivo de notas y canvas. Para buscar una ruta o nombre de archivo de cualquier archivo en la bóveda, usa el operador `path` o `file`.

Cada palabra del término de búsqueda se compara de forma independiente dentro de cada archivo. Para buscar una frase exacta, rodéala con comillas, por ejemplo `"star wars"`. Para buscar texto entre comillas dentro de una frase exacta, puedes _escapar_ las comillas añadiendo una barra invertida (`\`) delante de la comilla, por ejemplo `"they said \"hello\" to each other"`.

Puedes controlar si se devuelven archivos que contengan _todas_ las palabras de tu término de búsqueda, o _cualquiera_ de las palabras:

- `meeting work` devuelve archivos que contienen tanto `meeting` como `work`.
- `meeting OR work` devuelve archivos que contienen `meeting` o `work`.

Incluso puedes combinar ambos en el mismo término de búsqueda.

- `meeting work OR meetup personal` devuelve archivos de reuniones de trabajo y encuentros personales.

Puedes usar paréntesis para controlar la prioridad de cada expresión.

- `meeting (work OR meetup) personal` devuelve archivos que contienen `meeting`, `personal`, y ya sea `work` o `meetup`.

Para excluir o negar una palabra de los resultados de búsqueda, añade un guion (`-`) delante de ella:

- `meeting -work` devuelve archivos que contienen `meeting` pero no `work`.

Puedes excluir múltiples expresiones:

- `meeting -work -meetup` devuelve archivos que contienen `meeting` pero no `work` ni `meetup`.

Puedes excluir una combinación de expresiones usando paréntesis:

- `meeting -(work meetup)` devuelve archivos que contienen `meeting` pero no _ambos_ `work` y `meetup`.

Para filtrar resultados usando los operadores menor que (`<`) y mayor que (`>`), rodéalos con corchetes (`[]`) o comillas (`""`):

- `meeting [duration:<5]` devuelve archivos donde meeting está presente, y duration es menor que 5.
- `meeting [duration:>5]` devuelve archivos donde meeting está presente, y duration es mayor que 5.

> [!tip]- Explicar término de búsqueda
> Si necesitas depurar un término de búsqueda complejo, puedes hacer clic en **Explicar término de búsqueda** en Búsqueda para obtener una explicación de tu término de búsqueda.

## Operadores de búsqueda

Los operadores de búsqueda permiten términos de búsqueda más precisos para filtrar tus resultados aún más.

Algunos operadores incluso te permiten añadir un término de búsqueda anidado dentro de paréntesis, por ejemplo: `task:(call OR email)`.

| Operador de búsqueda | Descripción                                                                                                                                                                                                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file:`               | Busca texto en el nombre de archivo. Coincide con cualquier archivo en la bóveda.<p/>Ejemplo: `file:.jpg` o `file:202209`.                                                                                                                                                                                        |
| `path:`               | Busca texto en la ruta del archivo. Coincide con cualquier archivo en la bóveda.<p/>Ejemplo: `path:"Daily notes/2022-07"`.                                                                                                                                                                                        |
| `content:`            | Busca texto en el contenido del archivo.<p/>Ejemplo: `content:"happy cat"`.                                                                                                                                                                                                                                        |
| `match-case:`         | Coincidencia sensible a mayúsculas y minúsculas.<p/>Ejemplo: `match-case:HappyCat`.                                                                                                                                                                                                                               |
| `ignore-case:`        | Coincidencia insensible a mayúsculas y minúsculas.<p/>Ejemplo: `ignore-case:ikea`.                                                                                                                                                                                                                                 |
| `tag:`                | Busca etiquetas en el archivo.<p/>Ejemplo: `tag:#work`.<p/>Ten en cuenta que buscar `tag:#work` no devolverá resultados para `#myjob/work`.<br /><br />**Nota**: Dado que `tag:` ignora coincidencias en bloques de código y en contenido que no es Markdown, a menudo es más rápido y preciso que una búsqueda normal de texto completo para `#work`. |
| `line:`               | Busca archivos que contengan al menos una línea que coincida con `x`.<p/>Ejemplo: `line:(mix flour)`.<p/><br>**Nota:** Usar `-line` niega la búsqueda, lo que significa que encontrará archivos donde ninguna línea coincida con `x`.                                                                              |
| `block:`              | Busca coincidencias en el mismo bloque.<p/>Ejemplo: `block:(dog cat)`.<p/>**Nota**: Dado que `block:` requiere que Búsqueda analice el contenido Markdown en cada archivo, puede hacer que tu término de búsqueda tarde más en completarse.                                                                        |
| `section:`            | Busca coincidencias en la misma sección (texto entre dos encabezados).<p/>Ejemplo: `section:(dog cat)`.                                                                                                                                                                                                           |
| `task:`               | Busca coincidencias en una [[Sintaxis de formato básico#Listas de tareas\|tarea]] bloque por bloque.<p/>Ejemplo: `task:call`.                                                                                                                                                                                     |
| `task-todo:`          | Busca coincidencias en una [[Sintaxis de formato básico#Listas de tareas\|tarea]] *no completada* bloque por bloque.<p/>Ejemplo: `task-todo:call`.                                                                                                                                                                 |
| `task-done:`          | Busca coincidencias en una [[Sintaxis de formato básico#Listas de tareas\|tarea]] *completada* bloque por bloque.<p/>Ejemplo: `task-done:call`.                                                                                                                                                                    |

## Buscar propiedades

Puedes usar datos almacenados en [[Propiedades]] en tus términos de búsqueda.

Usa corchetes alrededor del nombre de una propiedad `[propiedad]` para devolver archivos con esa propiedad:

- `[aliases]` devuelve archivos que contienen la propiedad `aliases`

Usa corchetes y dos puntos `[propiedad:valor]` para devolver archivos con esa propiedad y valor:

- `[aliases:Name]` devuelve archivos donde el valor de la propiedad `aliases` es `Name`

Usa `null` como valor para encontrar propiedades que no tienen valor:

- `[aliases:null]` devuelve archivos donde la propiedad `aliases` existe pero no tiene valor

> [!info]+ Valores vacíos
> El operador `null` funciona cuando una propiedad está vacía (por ejemplo, `aliases: `), pero no cuando la propiedad contiene comillas vacías (`""`) o corchetes vacíos (`[]`).

Tanto la propiedad como el valor admiten subconsultas, como paréntesis para agrupar, el operador `OR`, comillas dobles para coincidencia exacta y expresiones regulares.

- `[status:Draft OR Published]` devuelve archivos donde el valor de la propiedad `status` es `Draft` o `Published`

## Cambiar sensibilidad a mayúsculas y minúsculas

De forma predeterminada, los términos de búsqueda no distinguen entre mayúsculas y minúsculas. Si deseas buscar con la capitalización exacta de tu término de búsqueda, selecciona **Coincidir mayúsculas y minúsculas** ( ![[obsidian-icon-upper-lowercase.svg#icon]] ) dentro de la barra de búsqueda.

Esta configuración puede alternarse. Si el icono de **Coincidir mayúsculas y minúsculas** está resaltado, significa que actualmente estás realizando una búsqueda sensible a mayúsculas y minúsculas.

## Cambiar el orden de los resultados

1. Introduce un [[#Términos de búsqueda|término de búsqueda]].
2. Debajo del campo de búsqueda, selecciona el menú desplegable a la derecha.
3. Selecciona el orden que desees. El predeterminado es "Nombre de archivo (A-Z)".

Las siguientes opciones están disponibles:

- Ordenar por nombre de archivo (A-Z)
- Ordenar por nombre de archivo (Z-A)
- Ordenar por fecha de edición (más reciente)
- Ordenar por fecha de edición (más antiguo)
- Creado (nuevo-antiguo)
- Creado (antiguo-nuevo)

## Copiar resultados de búsqueda

1. Introduce un [[#Términos de búsqueda|término de búsqueda]].
2. Debajo del campo de búsqueda, selecciona el icono de tres puntos junto al número de resultados.
3. Selecciona **Copiar resultados de búsqueda**.

## Usar expresiones regulares

Una expresión regular es un conjunto de caracteres que describe un patrón de texto. Para usar expresiones regulares en tu término de búsqueda, rodea la expresión con barras diagonales (`/`).

- `/\d{4}-\d{2}-\d{2}/` coincide con una fecha ISO 8601, como 2022-01-01.

Incluso puedes combinar expresiones regulares con operadores de búsqueda:

- `path:/\d{4}-\d{2}-\d{2}/` devuelve archivos con una fecha en la ruta del archivo.

Para más información sobre cómo escribir expresiones regulares, consulta la [guía práctica de Regex](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) de FreeCodeCamp o [Expresiones regulares](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) de Mozilla.

> [!info]+ Expresiones regulares con sintaxis de JavaScript
> Las expresiones regulares vienen en diferentes variantes que pueden verse diferentes entre sí. Obsidian usa expresiones regulares con sintaxis de JavaScript.

## Configurar ajustes de búsqueda

Para configurar Búsqueda, selecciona **Ajustes de búsqueda** ( ![[lucide-sliders-horizontal.svg#icon]] ) en el lado derecho de la barra de búsqueda para ver las opciones.

| Ajuste                          | Descripción                                                                 |
|---------------------------------|-----------------------------------------------------------------------------|
| **Explicar término de búsqueda** | Desglosa los términos de búsqueda y los explica en texto sin formato.       |
| **Colapsar resultados**          | Alterna si se muestra el contexto de búsqueda.                              |
| **Mostrar más contexto**         | Expande el resultado de búsqueda para mostrar más texto alrededor de la coincidencia. |

## Incrustar resultados de búsqueda en una nota

Para incrustar resultados de búsqueda en una nota, añade un bloque de código `query`:

````
```query
embed OR search
```
````

[[Introducción a Obsidian Publish|Obsidian Publish]] no soporta [[Limitaciones de Publish#Búsqueda|resultados de búsqueda]] incrustados. Para ver un ejemplo renderizado en vivo, usa el bloque de código anterior dentro de tu bóveda.

![[search-query-rendered.png]]
