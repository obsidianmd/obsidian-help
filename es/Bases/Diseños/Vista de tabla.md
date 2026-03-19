---
permalink: bases/views/table
---
Tabla es un tipo de [[Vistas|vista]] que puedes usar en [[Introducción a Bases|Bases]].

Selecciona ![[lucide-table.svg#icon]]  **Tabla** desde el menú de vistas para mostrar archivos como una tabla con una fila por cada archivo y columnas para las [[Propiedades]] de ese archivo.

![Ejemplo de una base mostrando una vista de tabla con una lista de libros](bases-noshadow.png#interface)

## Ajustes

Los ajustes de la vista de tabla se pueden configurar en [[Vistas#Ajustes de vista|Ajustes de vista]].

### Altura de fila

La altura de fila te permite mostrar más información. Elige entre **baja**, **media**, **alta** y **extra alta**.

## Resúmenes

Puedes añadir resúmenes a una columna de tabla para calcular rápidamente valores como totales, promedios o conteos para las filas actualmente visibles en la vista.

Los resúmenes están vinculados a la vista, no a la base. Cada vista puede mostrar diferentes resúmenes para la misma columna.

### Añadir un resumen

1. Haz clic derecho en el encabezado de columna en una vista de tabla.
2. Selecciona ![[lucide-calculator.svg#icon]] **Resumir…**.
3. Elige una de las funciones de resumen integradas, o selecciona ![[lucide-square-function.svg#icon]] **Añadir resumen** para definir el tuyo propio.

El resumen aparece en la parte inferior de la columna. Cuando los resultados están [[Vistas#Ordenar y agrupar resultados|agrupados]], el resumen de cada grupo se muestra en la parte superior del grupo.

Una vez que se añade la barra de resumen, puedes añadir más resúmenes para otras columnas haciendo clic en la celda de resumen. La barra de resumen se oculta si se eliminan todos los resúmenes.

### Resúmenes integrados

Los siguientes resúmenes están disponibles de forma predeterminada. Las opciones pueden variar según el tipo de propiedad.

#### Todos los tipos de propiedad

- **Sin valor**: cantidad de filas sin valor.
- **Con valor**: cantidad de filas con un valor.
- **Único**: número de valores distintos.

#### Números

- **Promedio**: promedio de todos los valores numéricos.
- **Máximo**: valor más grande.
- **Mediana**: valor mediano.
- **Mínimo**: valor más pequeño.
- **Rango**: diferencia entre el máximo y el mínimo.
- **Desviación estándar**: desviación estándar.
- **Suma**: total de todos los valores.

#### Fechas

- **Más antigua**: la fecha más pequeña/antigua.
- **Más reciente**: la fecha más grande/más reciente.
- **Rango**: diferencia entre la más antigua y la más reciente.

#### Casilla de verificación

- **Marcadas**: número de filas donde la casilla de verificación está activada.
- **No marcadas**: número de filas donde la casilla de verificación está desactivada.

### Resúmenes personalizados

Puedes definir tu propio resumen usando una fórmula:

1. En el menú ![[lucide-calculator.svg#icon]] **Resumir…**, elige ![[lucide-square-function.svg#icon]] **Añadir resumen**.
2. Dale un nombre al resumen.
3. Introduce una fórmula. La fórmula se ejecuta sobre la lista de valores en esa columna (por ejemplo, usando una [[Funciones|función]] como `values.reduce(...)`).
4. Guarda el resumen.

Los resúmenes personalizados son útiles cuando necesitas un cálculo que no está cubierto por las opciones integradas.

## Atajos

Puedes moverte rápidamente por una vista de tabla usando los siguientes atajos de ratón y [[Atajos de edición|teclado]].

- Hacer clic con Shift crea una selección de celdas.
- Haz clic derecho en una selección de celdas para acceder a acciones adicionales para esos archivos.

| Acción                                                                                                                                        | Atajo                | macOS               |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------- |
| Copiar las celdas seleccionadas                                                                                                               | `Ctrl+C`             | `Cmd+C`             |
| Pegar las celdas seleccionadas                                                                                                                | `Ctrl+V`             | `Cmd+V`             |
| Deshacer cambios en propiedades                                                                                                               | `Ctrl+Z`             | `Cmd+Z`             |
| Rehacer cambios en propiedades                                                                                                                | `Ctrl+Shift+Z`       | `Cmd+Shift+Z`       |
| Seleccionar todas las celdas en el grupo actual                                                                                               | `Ctrl+A`             | `Cmd+A`             |
| Seleccionar todas las celdas en una dirección dada                                                                                            | `Ctrl+Shift+Flecha`  | `Ctrl+Shift+Flecha` |
| Seleccionar la columna                                                                                                                        | `Ctrl+Espacio`       |                     |
| Seleccionar la fila                                                                                                                           | `Shift+Espacio`      |                     |
| Enfocar la celda actual — para casillas de verificación, esto alterna la casilla; para fórmulas, esto abre el editor de fórmulas              | `Enter`              |                     |
| Ir a la primera columna                                                                                                                       | `Inicio`             |                     |
| Ir a la última columna                                                                                                                        | `Fin`                |                     |
| Navegar arriba y abajo por la altura de página                                                                                                | `RePág`,`AvPág`      |                     |
| Limpiar la selección de celdas actual                                                                                                         | `Esc`                |                     |
| Limpiar las celdas actuales                                                                                                                   | `Retroceso`          |                     |
| Ir a la siguiente celda                                                                                                                       | `Tab`                |                     |
| Ir a la celda anterior                                                                                                                        | `Shift-Tab`          |                     |
