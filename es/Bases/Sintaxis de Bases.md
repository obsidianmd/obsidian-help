---
permalink: bases/syntax
publish: true
mobile: true
description: Esta página proporciona una introducción a la sintaxis de Bases en Obsidian.
---
Cuando [[Crear una base|creas una base]] en Obsidian, se guarda como un archivo `.base`. Las bases normalmente se editan utilizando la interfaz de la aplicación, pero la sintaxis también se puede editar manualmente e incrustar en un bloque de código.

La sintaxis de [[Introducción a Bases|Bases]] define [[Vistas]], filtros y [[Fórmulas|fórmulas]]. Las bases deben ser YAML válido que cumpla con el esquema definido a continuación.

## Ejemplo

Aquí hay un ejemplo de un archivo base. Recorreremos cada sección en detalle.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
summaries:
  customAverage: 'values.mean().round(3)'
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

### Filtros

De forma predeterminada, una base incluye todos los archivos de la bóveda. No existe un `from` o `source` como en SQL o Dataview. La sección `filters` te permite definir condiciones para reducir el conjunto de datos.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
```

Hay dos oportunidades para aplicar filtros:

1. A nivel global de `filters` (mostrado arriba), donde se aplican a todas las vistas de la base.
2. A nivel de `view`, donde se aplican solo a una vista específica.

Estas dos secciones son funcionalmente equivalentes y, al evaluarse para una vista, se concatenarán con un `AND`.

La sección `filters` contiene una única declaración de filtro como cadena, o un objeto de filtro definido recursivamente. Los objetos de filtro pueden contener uno de `and`, `or` o `not`. Estas claves son una lista heterogénea de otros objetos de filtro o declaraciones de filtro en cadenas. Una declaración de filtro es una línea que se evalúa como verdadera o falsa cuando se aplica a una nota. Puede ser una de las siguientes:

- Una comparación básica usando operadores aritméticos estándar.
- Una función. Hay una variedad de [[Funciones]] integradas, y los complementos pueden añadir funciones adicionales.

La sintaxis y las funciones disponibles para filtros y fórmulas son las mismas.

### Fórmulas

La sección `formulas` define [[Fórmulas|propiedades de fórmula]] que pueden mostrarse en todas las vistas del archivo base.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Las propiedades de fórmula admiten operadores aritméticos básicos y una variedad de [[Funciones]] integradas. En el futuro, los complementos podrán añadir funciones para usar en fórmulas.

Puedes hacer referencia a propiedades de diferentes maneras según su tipo:

- **Propiedades de nota** son propiedades definidas en los metadatos iniciales de la nota. Por ejemplo `note.price` o `note["price"]`.  
  Si no se especifica un prefijo, se asume que la propiedad es una propiedad de `note`.
- **Propiedades de archivo** describen el archivo en sí.  
  Por ejemplo `file.size` o `file.ext`. También puedes hacer referencia al objeto file directamente, por ejemplo, `file.hasLink()`.
- **Propiedades de fórmula** son otras fórmulas en la base.  
  Ejemplo: `formula.formatted_price`.

Una fórmula puede usar valores de otras propiedades de fórmula, siempre que no haya una referencia circular.  

Las propiedades de fórmula siempre se almacenan como cadenas en YAML, pero su **tipo de dato de salida** real está determinado por el tipo de los datos subyacentes y el valor de retorno de las funciones utilizadas.

Ten en cuenta que el uso de comillas anidadas es necesario para incluir literales de texto en el campo YAML. Los literales de texto deben estar encerrados entre comillas simples o dobles.

### Propiedades

La sección `properties` permite almacenar información de configuración sobre cada propiedad. Depende de la vista individual cómo usar estos valores de configuración. Por ejemplo, en las tablas el nombre para mostrar se usa para los encabezados de columna.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Los nombres para mostrar no se usan en filtros ni fórmulas.

### Resúmenes

La sección `summaries` se puede usar para definir fórmulas de resumen personalizadas. Además de definir fórmulas de resumen aquí, hay varias fórmulas de resumen predeterminadas disponibles.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

En este ejemplo, la fórmula `customAverage` es igual que el `Average` predeterminado, excepto que el valor se redondea a un número diferente de decimales. En las fórmulas de resumen, la palabra clave `values` es una lista que contiene todos los valores de esa propiedad en cada nota del conjunto de resultados. La fórmula de resumen debe devolver un único `Value`.

Ten en cuenta que esta sección `summaries` es diferente de la sección `summaries` en la configuración de la vista (explicada a continuación) donde las fórmulas de resumen se asignan a propiedades específicas.

#### Fórmulas de resumen predeterminadas

| Nombre    | Tipo de entrada | Descripción                                                         |
| --------- | --------------- | ------------------------------------------------------------------- |
| Average   | Número          | La media matemática de todos los números de los valores de entrada. |
| Min       | Número          | El número más pequeño de los valores de entrada.                    |
| Max       | Número          | El número más grande de los valores de entrada.                     |
| Sum       | Número          | La suma de todos los números en la entrada.                         |
| Range     | Número          | La diferencia entre `Max` y `Min`.                                  |
| Median    | Número          | La mediana matemática de todos los números de los valores de entrada. |
| Stddev    | Número          | La desviación estándar de todos los números de los valores de entrada. |
| Earliest  | Fecha           | La fecha más temprana de los valores de entrada.                    |
| Latest    | Fecha           | La fecha más reciente de los valores de entrada.                    |
| Range     | Fecha           | La diferencia entre `Latest` y `Earliest`.                         |
| Checked   | Booleano        | El número de valores `true`.                                        |
| Unchecked | Booleano        | El número de valores `false`.                                       |
| Empty     | Cualquiera      | El número de valores en la entrada que están vacíos.                |
| Filled    | Cualquiera      | El número de valores en la entrada que no están vacíos.             |
| Unique    | Cualquiera      | El número de valores únicos en la entrada.                          |

### Vistas

La sección `views` define cómo se pueden renderizar los datos. Cada entrada en la lista `views` define una vista separada de los mismos datos, y puede haber tantas vistas diferentes como sea necesario.

```yaml
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

- `type` selecciona entre los tipos de vista integrados y los añadidos por complementos.
- `name` es el nombre para mostrar, y se puede usar para definir la vista predeterminada.
- `filters` son exactamente iguales que los descritos anteriormente, pero se aplican solo a la vista.
- `groupBy` especifica una propiedad y dirección de ordenamiento. El valor de la propiedad especificada para cada fila se usa para colocar la fila en grupos.
- `summaries` mapea nombres de propiedades a un resumen con nombre. Los resúmenes realizan una agregación sobre la propiedad a través de todas las filas.

Las [[Vistas]] pueden añadir datos adicionales para almacenar cualquier información necesaria para mantener el estado o renderizar correctamente, sin embargo, los autores de complementos deben tener cuidado de no usar claves que ya estén en uso por el complemento principal de Bases. Como ejemplo, una vista de tabla puede usar esto para limitar el número de filas o para seleccionar qué columna se usa para ordenar filas y en qué dirección. Un tipo de vista diferente como un mapa podría usar esto para mapear qué propiedad de la nota corresponde a la latitud y longitud y qué propiedad debe mostrarse como título del pin.

En el futuro, la API permitirá a las vistas leer y escribir estos valores, permitiendo que la vista construya su propia interfaz de configuración.

## Propiedades

Hay tres tipos de propiedades usadas en bases:

1. **Propiedades de nota**, almacenadas en los metadatos iniciales de archivos Markdown.
2. **Propiedades de archivo**, accesibles para todos los tipos de archivo.
3. **Propiedades de fórmula**, definidas en el propio archivo `.base` (ver arriba).

### Propiedades de nota

Las [[Propiedades|propiedades de nota]] solo están disponibles para archivos Markdown, y se almacenan en los metadatos iniciales YAML de cada nota. Estas propiedades se pueden acceder usando el formato `note.author` o simplemente `author` como forma abreviada.

### Propiedades de archivo

Las propiedades de archivo se refieren al archivo que se está probando o evaluando actualmente. Las propiedades de archivo están disponibles para todos los [[Formatos de archivo aceptados|tipos de archivo]], incluyendo adjuntos.

Por ejemplo, un filtro `file.ext == "md"` será verdadero para todos los archivos Markdown y falso en caso contrario.

| Propiedad     | Tipo   | Descripción                                                   |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | Lista  | Lista de archivos con enlaces de retorno. Nota: Esta propiedad consume muchos recursos. Cuando sea posible, invierte la búsqueda y usa `file.links`. No actualiza automáticamente los resultados cuando la bóveda cambia. |
| `file.ctime`  | Fecha  | Fecha de creación                                             |
| `file.embeds` | Lista  | Lista de todas las incrustaciones en la nota                  |
| `file.ext`    | Cadena | Extensión del archivo                                         |
| `file.file`   | Archivo | Objeto de archivo, solo utilizable en funciones específicas  |
| `file.folder` | Cadena | Ruta de la carpeta del archivo                                |
| `file.links`  | Lista  | Lista de todos los enlaces internos en la nota, incluyendo metadatos iniciales |
| `file.mtime`  | Fecha  | Fecha de modificación                                         |
| `file.name`   | Cadena | Nombre del archivo                                            |
| `file.path`   | Cadena | Ruta del archivo                                              |
| `file.properties`   | Objeto | Todas las propiedades del archivo. Nota: No actualiza automáticamente los resultados cuando la bóveda cambia. |
| `file.size`   | Número | Tamaño del archivo                                            |
| `file.tags`   | Lista  | Lista de todas las etiquetas en el contenido del archivo y metadatos iniciales |

### Acceder a propiedades con `this`

Usa el objeto `this` para acceder a las propiedades del archivo. A qué se refiere `this` dependerá de dónde se muestre la base.

Cuando la base se abre en el área de contenido principal, `this` apunta a las propiedades del propio archivo base. Por ejemplo, usar `this.file.folder` devuelve la ruta de la carpeta donde se encuentra la base.

Cuando la base está incrustada en otro archivo, `this` apunta a las propiedades del archivo que _contiene la incrustación_ (la nota o Canvas que contiene la base). Por ejemplo, usar `this.file.name` devuelve el nombre del archivo que contiene la incrustación, no de la base.

Cuando la base está en una barra lateral, `this` se refiere al archivo activo en el área de contenido principal. Esto te permite crear consultas basadas en el archivo activo. Por ejemplo, puedes usar `file.hasLink(this.file)` para replicar el panel de enlaces de retorno.

## Operadores

### Operadores aritméticos

Los operadores aritméticos realizan operaciones aritméticas con números. Por ejemplo, `radius * (2 * 3.14)`.

| Operador | Descripción   |
| -------- | ------------- |
| `+`      | suma          |
| `-`      | resta         |
| `*`      | multiplicación |
| `/`      | división      |
| `%`      | módulo        |
| `( )`    | paréntesis    |

### Aritmética de fechas

Las fechas se pueden modificar añadiendo y restando duraciones. Las unidades de duración aceptan múltiples formatos:

| Unidad                   | Duración |
| ------------------------ | -------- |
| `y`, `year`, `years`     | año      |
| `M`, `month`, `months`   | mes      |
| `d`, `day`, `days`       | día      |
| `w`, `week`, `weeks`     | semana   |
| `h`, `hour`, `hours`     | hora     |
| `m`, `minute`, `minutes` | minuto   |
| `s`, `second`, `seconds` | segundo  |

Para modificar o desplazar objetos Date, usa el operador `+` o `-` con una cadena de duración. Por ejemplo, `date + "1M"` añade 1 mes a la fecha, mientras que `date - "2h"` resta 2 horas de la fecha.

La [[Funciones|función]] global `today()` se puede usar para obtener la fecha actual, y `now()` se puede usar para obtener la fecha actual con hora.

- `now() + "1 day"` devuelve una fecha y hora exactamente 24 horas desde el momento de ejecución.
- `file.mtime > now() - "1 week"` devuelve `true` si el archivo fue modificado en la última semana.
- `date("2024-12-01") + "1M" + "4h" + "3m"` devuelve un objeto Date que representa `2025-01-01 04:03:00`.
- Resta dos fechas para obtener la diferencia en milisegundos entre ambas, por ejemplo, `now() - file.ctime`.
- Para obtener la parte de fecha de un Date con hora, usa `datetime.date()`.
- Para formatear un objeto Date, usa la función `format()`, por ejemplo `datetime.format("YYYY-MM-DD")`.

### Operadores de comparación

Los operadores de comparación se pueden usar para comparar números u objetos Date. Igual y no igual se pueden usar con cualquier tipo de valor, no solo números y fechas.

| Operador | Descripción           |
| -------- | --------------------- |
| `==`     | igual                 |
| `!=`     | no igual              |
| `>`      | mayor que             |
| `<`      | menor que             |
| `>=`     | mayor o igual que     |
| `<=`     | menor o igual que     |

### Operadores booleanos

Los operadores booleanos se pueden usar para combinar o invertir valores lógicos, resultando en un valor verdadero o falso.

| Operador | Descripción |
| -------- | ----------- |
| `!`      | NOT lógico  |
| `&&`     | AND lógico  |
| \|\|     | OR lógico   |

## Funciones

Consulta la [[Funciones|lista de funciones]] que se pueden usar en fórmulas y [[Vistas|filtros]].

## Tipos

Bases tiene un sistema de tipos que es utilizado por fórmulas y filtros para aplicar funciones a las propiedades.

### Cadenas, números y booleanos

Las cadenas, números y booleanos son valores "primitivos" que no requieren una función para crearlos.

- Las cadenas se encierran entre comillas simples o dobles, por ejemplo `"message"`.
- Los números se escriben como dígitos, y opcionalmente pueden encerrarse entre paréntesis para mayor claridad. Por ejemplo, `1` o `(2.5)`.
- Los booleanos se escriben como `true` o `false` sin comillas.

### Fechas y duraciones

Las fechas representan una fecha específica, o una fecha y hora dependiendo de la función usada para crearlas, o del tipo que se haya asignado a la [[Propiedades|propiedad]].

- Para construir una fecha, usa la función `date`, por ejemplo `date("2025-01-01 12:00:00")`
- Para modificar una fecha, añade o elimina una duración, por ejemplo `now() + "1 hour"` o `today() + "7d"`
- Compara fechas usando operadores de comparación (por ejemplo, `>` o `<`) y operadores aritméticos (por ejemplo, `(now() + "1d") - now()` devuelve `86400000` milisegundos.)
- Para extraer partes de una fecha, usa los campos disponibles (`now().hour`), o una función de conveniencia (`now.time()`).
- Muchos otros [[Funciones|campos y funciones]] están disponibles en los objetos de fecha.

### Objetos y listas

- Convierte un solo elemento en una lista usando la función `list()`. Esto es especialmente útil para propiedades que pueden contener una mezcla de listas o valores individuales.
- Accede a los elementos de una lista usando corchetes y un índice basado en 0. Por ejemplo, `property[0]` devuelve el primer elemento de la lista.
- Accede a los elementos de un objeto usando corchetes y el nombre del elemento o notación de punto. Por ejemplo, `property.subprop` o `property["subprop"]`.

### Archivos y enlaces

Los [[Enlazar notas|enlaces wiki]] en las [[Propiedades|propiedades de metadatos iniciales]] se reconocen automáticamente como objetos Link. Los enlaces se renderizarán como un enlace clicable en la [[Vistas|vista]].

- Para construir un enlace, usa la [[Funciones|función]] global `link`, por ejemplo `link("filename")` o `link("https://obsidian.md")`.
- Puedes crear un enlace a partir de cualquier cadena, por ejemplo, `link(file.ctime.date().toString())`.
- Para establecer el texto mostrado, pasa una cadena o icono opcionales como segundo parámetro, por ejemplo `link("filename", "display")` o `link("filename", icon("plus"))`.

Un objeto File se puede convertir en un enlace usando `file.asLink()` con un texto mostrado opcional.

Los enlaces se pueden comparar con `==` y `!=`. Son equivalentes siempre que apunten al mismo archivo, o si el archivo no existe al buscarlo, su texto de enlace debe ser idéntico.

Los enlaces se pueden comparar con archivos como `file` o `this`. Serán iguales si el enlace resuelve al archivo. Por ejemplo, `author == this`.

Los enlaces también se pueden verificar en la comprobación de contenido en listas, por ejemplo, `authors.contains(this)`.
