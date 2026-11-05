---
permalink: formulas
description: 'Las fórmulas te permiten crear propiedades calculadas usando datos de otras propiedades. Puedes realizar cálculos, manipular texto, trabajar con fechas y más.'
---
Las fórmulas te permiten crear propiedades calculadas en [[Introducción a Bases|Bases]] usando datos de otras [[Propiedades|propiedades]]. Puedes realizar cálculos, manipular texto, trabajar con fechas y más.

## Qué pueden hacer las fórmulas

Las fórmulas pueden ayudarte a:

- **Calcular valores**, sumar precios, computar totales o realizar operaciones matemáticas.
- **Manipular texto**, combinar cadenas, cambiar mayúsculas/minúsculas o extraer subcadenas.
- **Trabajar con fechas**, calcular diferencias de tiempo, dar formato a fechas o determinar plazos.
- **Aplicar lógica**, usar declaraciones condicionales para mostrar diferentes valores.
- **Procesar listas**, filtrar, ordenar, mapear o agregar datos de listas.
- **Usar notas enlazadas**, buscar o acumular propiedades de las notas a las que una nota enlaza. Consulta [[#Usar propiedades de notas enlazadas]].

## Crear una propiedad de fórmula

Para crear una propiedad de fórmula:

1. En tu base, haz clic en **Propiedades** en la barra de herramientas.
2. Haz clic en **Agregar fórmula** en la parte inferior del menú.
3. Introduce un nombre para tu propiedad de fórmula.
4. Escribe tu fórmula en el campo **Fórmula**.
5. Cierra el diálogo.

El editor de fórmulas autocompletará nombres de [[Funciones|funciones]] y propiedades mientras escribes para validar la sintaxis de tu fórmula. Aparecerá una marca de verificación verde cuando tu fórmula sea válida.

Una vez creada, puedes usar una propiedad de fórmula como cualquier otra propiedad en tu base. Añádela a [[Vistas|vistas]], úsala en filtros, ordena por ella y más.

## Escribir una fórmula

En el editor de fórmulas, escribe una expresión usando propiedades, operadores y funciones.

### Referenciar propiedades

Puedes referenciar diferentes tipos de propiedades en tus fórmulas:

- **Propiedades de nota** — Propiedades de los [[Propiedades|metadatos iniciales]] de una nota.
- **Propiedades de archivo** — Propiedades integradas como `file.name`, `file.size` o `file.mtime`.
- **Propiedades de fórmula** — Otras fórmulas usando `formula.nombre_formula`.

**Ejemplos:**

- `price * quantity` — multiplicar dos propiedades de nota
- `file.name + " - " + description` — combinar nombre de archivo con una propiedad de nota
- `formula.price_per_unit * 1.1` — usar otra propiedad de fórmula

### Usar operadores

Los **operadores aritméticos** realizan operaciones matemáticas con números:

- `price + tax` — sumar
- `price - discount` — restar
- `price * quantity` — multiplicar
- `price / quantity` — dividir
- `(part / whole) * 100` — usar paréntesis para el orden de operaciones

Los **operadores de comparación** comparan valores:

- `price > 100` — mayor que
- `age < 18` — menor que
- `status == "Done"` — igual a
- `status != "Done"` — diferente de
- `file.mtime > now() - '7d'` — comparar fechas

Los **operadores booleanos** combinan condiciones lógicas:

- `!completed` — no
- `price > 0 && quantity > 0` — y
- `urgent || important` — o

Aprende más en [[Sintaxis de Bases#Operadores|Sintaxis de Bases]].

### Usar funciones

Las funciones realizan operaciones sobre valores. Las funciones disponibles dependen del tipo de valor con el que estés trabajando. Consulta la lista completa de [[Funciones]].

**Categorías comunes de funciones:**

- **Funciones globales** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Funciones de cadena** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Funciones numéricas** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Funciones de fecha** — `format()`, `relative()`, `date()`, `time()`
- **Funciones de lista** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Ejemplos:**

- `if(price, "$" + price.toFixed(2), "")` para definir una condicional con formato numérico.
- `file.name.lower()` para convertir a minúsculas.
- `tags.contains("urgent")` para verificar si la lista de etiquetas contiene un valor.
- `due_date.format("YYYY-MM-DD")` para dar formato a una fecha.

## Usar propiedades de notas enlazadas

Las fórmulas pueden leer propiedades de las notas a las que una nota enlaza. Puedes buscar un valor de una nota enlazada, o acumular valores de varias notas enlazadas en un total, un conteo o una lista.

Para leer las propiedades de una nota enlazada, convierte el enlace en un archivo con `asFile()` y luego usa `properties`. Los enlaces almacenados en propiedades, como `project: "[[Rediseño del sitio web]]"`, funcionan de esta manera directamente.

> [!warning] Los resultados se actualizan cuando cambia la nota en la fila
> Si solo editas una nota enlazada, las búsquedas y acumulaciones en la base pueden no actualizarse hasta que vuelvas a abrir la base.

### Buscar un valor

Mostrar el `status` de la nota enlazada en la propiedad `project`:

```js
project.asFile().properties.status
```

Si la propiedad puede contener un solo enlace o una lista de enlaces, envuélvela en `list()` y toma el primer enlace:

```js
list(project)[0].asFile().properties.status
```

### Acumular valores

Sumar las `hours` de cada nota enlazada en la propiedad `tasks`:

```js
tasks.map(value.asFile().properties.hours).reduce(acc + value, 0)
```

Contar las notas enlazadas cuyo `status` no es "Done":

```js
tasks.filter(value.asFile().properties.status != "Done").length
```

Listar los estados de las notas enlazadas, sin duplicados:

```js
tasks.map(value.asFile().properties.status).unique()
```

### Acumular valores de notas que enlazan aquí

Para acumular valores de las notas que enlazan a una nota, como tareas que enlazan a su proyecto, usa `file.backlinks`:

```js
file.backlinks.map(value.asFile().properties.hours).reduce(acc + value, 0)
```

`file.backlinks` es lento en bóvedas grandes. Cuando sea posible, almacena los enlaces en la propia nota y acumúlalos con `map()` y `reduce()`, como se muestra arriba.

## Ejemplos de fórmulas

### Calcular una fecha límite

Establecer la fecha de entrega de un proyecto como 2 semanas después de la fecha de inicio:

```js
start_date + "2w"
```

### Mostrar estado de vencimiento

Mostrar "Vencido" si la fecha de entrega ha pasado y el estado no es "Done":

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Dar formato a moneda

Mostrar un precio con 2 decimales y símbolo de moneda:

```js
if(price, "$" + price.toFixed(2), "")
```

### Contar elementos de una lista

Contar el número de elementos en una propiedad de lista:

```js
tasks.length
```

### Calcular puntuación de prioridad

Combinar múltiples factores en una puntuación de prioridad:

```js
(impact * urgency) / effort
```

### Combinar campos de texto

Crear un nombre completo a partir del nombre y apellido:

```js
first_name + " " + last_name
```

### Calcular costo total

Multiplicar el costo mensual por el número de meses de propiedad:

```js
monthlyUses * formula.Owned.round()
```

## Tipos de datos

Las fórmulas trabajan con diferentes tipos de datos:

- **Cadenas** — Texto entre comillas: `"hello"` o `'world'`
- **Números** — Valores numéricos: `42`, `3.14`, `(2 + 2)`
- **Booleanos** — Verdadero o falso: `true`, `false`
- **Fechas** — Creadas con `date()`, `today()` o `now()`
- **Listas** — Colecciones de valores: `[1, 2, 3]`
- **Objetos** — Pares clave-valor: `{"name": "value"}`

El tipo de salida de una fórmula está determinado por los datos y funciones utilizados.

## Referenciar otras fórmulas

Las fórmulas pueden referenciar otras fórmulas, creando cálculos derivados. Por ejemplo, si tienes una fórmula llamada `price_per_unit`:

```js
price / quantity
```

Puedes referenciarla en otra fórmula:

```js
formula.price_per_unit * 1.1
```

> [!warning] Evita referencias circulares
> Una fórmula no puede referenciarse a sí misma directa o indirectamente a través de otras fórmulas.
