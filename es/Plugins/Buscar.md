![[Search.png]]

La búsqueda es una función poderosa y tiene el potencial de ser confusa. En la mayoría de los casos, si escribe lo que desea encontrar, funcionará. Pero la búsqueda tiene muchas capacidades para acotar y encontrar exactamente lo que desea.

## Consejos rápidos

### Empezar a buscar

Puede invocar la búsqueda presionando `Ctrl + Shift + F` o` Cmd + Shift + F`. También puede personalizar esta tecla de acceso rápido en Configuración → Teclas de acceso rápido. Cuando se invoca la búsqueda, el foco se colocará automáticamente en la barra de búsqueda para que pueda comenzar a escribir su consulta de inmediato.

### Buscar texto seleccionado

Después de seleccionar el texto, puede buscarlo simplemente invocando la búsqueda como se muestra arriba.

## Buscar Historia

Obsidian recordará sus consultas de búsqueda utilizadas más recientemente.

Estas consultas se le presentarán cuando su consulta de búsqueda esté vacía. Puede hacer clic en cualquiera de ellos para buscarlo nuevamente, lo que le permite volver a ejecutar fácilmente consultas anteriores.

Para borrar el historial de búsqueda, simplemente haga clic en el botón "X".

## Opciones de búsqueda

Hay un par de conmutadores disponibles durante la búsqueda:

- `Match case` alterna la coincidencia sensible a mayúsculas y minúsculas, pero tenga en cuenta que se puede anular por búsqueda utilizando los operadores` match-case: `y` ignore-case: `explicados anteriormente.
- - `Explicar el término de búsqueda` le mostrará lo que realmente hace la consulta de búsqueda en términos sencillos.
- - `Colapsar resultados` alternará entre solo mostrar los nombres de las notas coincidentes y mostrar las líneas en las que aparecen las coincidencias. Estos resultados extendidos se pueden alternar para cada nota haciendo clic en el triángulo plegable junto al nombre del archivo.- `Mostrar más contexto` expandirá la visualización de las coincidencias para mostrar más texto alrededor de la coincidencia.
- `Cambiar orden de clasificación` ordena los resultados por varios órdenes, similar a cómo se ordenan los archivos en el [[Explorador de archivos]].

## Copiar resultados de búsqueda

Para llevar los resultados de la búsqueda a una lista de forma rápida y sencilla, utilice la opción "copiar resultado de búsqueda".

Puede personalizar si desea mostrar rutas, qué estilo de enlace usar (enlace wikilink o enlace Markdown) y cómo desea que aparezca su lista.

## Insertar resultados de búsqueda

Puede incrustar los resultados de la búsqueda en una nota.

Por ejemplo, si escribe:
<pre><code>```query
embed OR search
```</code></pre>

Debería ver esta vista de búsqueda incrustada (nota: no funciona en [[Obsidian Publish]] a partir del 18/01/2020):

```query
embed OR search
```

## Sintaxis de búsqueda

### Combinando subconsultas

Cuando elabore una consulta de búsqueda, recuerde que al hacer clic en "Explicar término de búsqueda" le dará una explicación de lo que se está buscando, lo que puede ser muy útil al depurar una búsqueda complicada.

- Las palabras de la consulta de búsqueda separadas por espacios se buscarán de forma independiente en cada nota. Por ejemplo, `foo bar` encontrará una nota que incluya tanto` foo` como `bar` en cualquier lugar de ella.
- Las `" cadenas entre comillas "` se pueden utilizar para buscar varias palabras consecutivas separadas por espacios, o en otras palabras, una frase. Por lo tanto, si busca `"foo bar"` con comillas, solo encontrará notas que incluyan esas palabras una al lado de la otra. Puede usar la barra invertida `\" `para escapar de las comillas dobles si realmente desea buscar una cadena que incluya comillas. Y `\\` hará lo mismo con la barra invertida.
- - Se pueden utilizar operaciones booleanas. Utilice `OR` para hacer coincidir uno u otro. Utilice `-` para negar una consulta. El carácter de espacio se utiliza para booleanos `AND`.
- - Por ejemplo: `foo OR bar` buscará todas las notas que contengan cualquiera de esas palabras, no es necesario que estén en la misma nota. `foo -bar` encontrará todas las notas que contengan `foo`, pero no si también contienen `bar`.
- Los paréntesis se pueden utilizar para agrupar operaciones booleanas. Por ejemplo, `((a OR b) (c OR d))`. Esto puede resultar útil al crear búsquedas complejas para asegurarse de que las cosas sucedan en el orden que desee.
- Las expresiones regulares (regex) ahora se pueden usar en la búsqueda. Utilice una barra inclinada para indicar una expresión regular. Por ejemplo: `/ [a-z] {3} /`.

### Operadores de búsqueda

Hay varios operadores especiales disponibles. Algunos operadores permiten anidar consultas usando paréntesis, por ejemplo: `file :(" to be "OR -" 2B ")`.

- `file: (...)` realizará la siguiente subconsulta en el nombre del archivo. Por ejemplo: `archivo:.jpg`. Si utiliza UID de estilo Zettelkasten, esto puede resultar útil para reducir un intervalo de tiempo, por ejemplo, `file:202007` para archivos creados en julio de 2020.
-  `path: (...)` realizará la siguiente subconsulta en la ruta del archivo, absoluta desde la raíz. Por ejemplo: `path:"Notas diarias/2020-07 "`.
- `content:(...)` realizará la siguiente subconsulta en el contenido del archivo. Por ejemplo: `content:"happy cat"`.
- `match-case:(...)` y `ignore-case(...):` anulará la lógica de coincidencia que distingue entre mayúsculas y minúsculas para la siguiente subconsulta.
- `tag:` buscará su etiqueta especificada dentro de un archivo, por ejemplo `tag:#work`. Esto es más rápido y preciso que buscar la etiqueta en texto sin formato. `#work`, ya que utiliza la información almacenada en caché e ignora el texto en bloques de código y secciones que no son texto Markdown.
- `line:(...)` realizará la subconsulta línea por línea, en lugar de archivo por archivo. Por ejemplo, si busca `foo bar`, esto podría coincidir con un archivo que tenga `foo` en el primer párrafo y `bar` en el último párrafo. La búsqueda de `line: (foo bar)` solo coincidirá si `foo` y `bar` están en la misma línea.
- `block:(...)` realizará la subconsulta bloque por bloque, donde cada bloque se define como un bloque Markdown, normalmente separado por líneas vacías o elementos de lista. Esto es costoso computacionalmente ya que requiere analizar cada archivo, lo que significa que probablemente sea más lento que otros modos.
- `section:(...)` realizará la subconsulta sección por sección, donde cada sección es el texto entre dos encabezados, incluido el primer encabezado.
- `task:(...)` realizará la subconsulta solo en cada [[Formatear tus notas#Lista de tareas|tarea]] y bloque por bloque. Usar `task:""` para que coincida con todas las tareas.
- `task-todo:(...)` realizará la subconsulta solo en cada  [[Formatear tus notas#Lista de tareas|tarea]] *incompleta* y bloque por bloque. Usar  `task-todo:""` para que coincida con todas las tareas incompletas.
- `task-done:(...)` realizará la subconsulta solo en cada [[Formatear tus notas#Lista de tareas|tarea]] *completa*  y bloque por bloque. Usar `task-done:""` para que coincida con todas las tareas completadas.
