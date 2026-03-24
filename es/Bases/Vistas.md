---
permalink: bases/views
---
Las vistas te permiten organizar la información en una [[Introducción a Bases|Base]] de múltiples maneras. Una base puede contener varias vistas, y cada vista puede tener una configuración única para mostrar, ordenar y filtrar archivos.

Por ejemplo, puedes querer crear una base llamada "Libros" que tenga vistas separadas para "Lista de lectura" y "Terminados recientemente".

## Barra de herramientas

En la parte superior de una base hay una barra de herramientas que te permite interactuar con las vistas y sus resultados.

- ![[lucide-table.svg#icon]] **Menú de vista** — crear, editar y cambiar entre vistas.
- **Resultados** — limitar, copiar y exportar archivos.
- ![[lucide-arrow-up-down.svg#icon]] **Ordenar** — ordenar y agrupar archivos.
- ![[lucide-list-filter.svg#icon]] **Filtro** — filtrar archivos.
- ![[lucide-list.svg#icon]] **Propiedades** — elegir propiedades para mostrar y crear [[Fórmulas|fórmulas]].
- ![[lucide-search.svg#icon]] **Buscar** — buscar elementos usando sus propiedades mostradas.
- ![[lucide-plus.svg#icon]] **Nuevo** — crear un nuevo archivo en la vista actual.

## Añadir y cambiar vistas

Hay dos formas de añadir una vista a una base:

- Haz clic en el nombre de la vista en la esquina superior izquierda y selecciona ![[lucide-plus.svg#icon]] **Añadir vista**.
- Usa la [[Paleta de comandos|paleta de comandos]] y selecciona **Bases: Añadir vista**.

La primera vista en tu lista de vistas se cargará de forma predeterminada. Arrastra las vistas por su icono para cambiar su orden.

## Ajustes de vista

Cada vista tiene sus propias opciones de configuración. Para editar los ajustes de una vista:

1. Haz clic en el nombre de la vista en la esquina superior izquierda.
2. Haz clic en la flecha derecha junto a la vista que deseas configurar.

Alternativamente, haz *clic derecho* en el nombre de la vista en la barra de herramientas de la base para acceder rápidamente a los ajustes de la vista.

## Disposición

Las vistas pueden mostrarse con diferentes disposiciones, incluyendo como ![[lucide-table.svg#icon]] **tabla**, ![[lucide-list.svg#icon]] **lista**, ![[lucide-layout-grid.svg#icon]] **tarjetas** y ![[lucide-map.svg#icon]] **mapa**. Los [[Complementos de la comunidad]] pueden añadir disposiciones adicionales. Algunas disposiciones aún están en desarrollo y requieren [[Versiones de acceso anticipado|versiones de acceso anticipado]] de Obsidian.

| Disposición                     | Descripción                                                                                                              | Versión&nbsp;de&nbsp;la&nbsp;app |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| [[Vista de tabla\|Tabla]]       | Muestra archivos como filas en una tabla. Las columnas se completan a partir de las [[Propiedades|propiedades]] de tus notas. | 1.9                              |
| [[Vista de tarjetas\|Tarjetas]] | Muestra archivos como una cuadrícula de tarjetas. Permite crear vistas tipo galería con imágenes.                        | 1.9                              |
| [[Vista de lista\|Lista]]       | Muestra archivos como una [[Sintaxis de formato básico#Listas\|lista]] con viñetas o marcadores numerados.               | 1.10                             |
| [[Vista de mapa\|Mapa]]        | Muestra archivos como pines en un mapa interactivo. Requiere el complemento Maps.                                        | 1.10                             |


## Filtros

Abre el menú ![[lucide-list-filter.svg#icon]] **Filtro** en la parte superior de una base para añadir filtros.

Una base sin filtros muestra todos los archivos de tu bóveda. Los filtros reducen los resultados para mostrar solo los archivos que cumplen criterios específicos. Por ejemplo, puedes usar filtros para mostrar solo archivos con una [[Etiquetas|etiqueta]] específica o dentro de una carpeta específica. Hay muchos tipos de filtros disponibles.

Los filtros pueden aplicarse a todas las vistas de una base, o solo a una vista individual, eligiendo entre las dos secciones del menú ![[lucide-list-filter.svg#icon]] **Filtro**.

- **Todas las vistas** aplica filtros a todas las vistas de la base.
- **Esta vista** aplica filtros a la vista activa.

#### Componentes de un filtro

Los filtros tienen tres componentes:

1. **Propiedad** — te permite elegir una [[Propiedades|propiedad]] de tu bóveda, incluyendo [[Sintaxis de Bases#Propiedades del archivo|propiedades del archivo]].
2. **Operador** — te permite elegir cómo comparar las condiciones. La lista de operadores disponibles depende del tipo de propiedad (texto, fecha, número, etc.)
3. **Valor** — te permite elegir el valor con el que estás comparando. Los valores pueden incluir matemáticas y [[Funciones|funciones]].

#### Conjunciones

- **Todos los siguientes son verdaderos** es una declaración `y` — los resultados solo se mostrarán si *todas* las condiciones del grupo de filtros se cumplen.
- **Cualquiera de los siguientes son verdaderos** es una declaración `o` — los resultados se mostrarán si *cualquiera* de las condiciones del grupo de filtros se cumple.
- **Ninguno de los siguientes son verdaderos** es una declaración `no` — los resultados no se mostrarán si *cualquiera* de las condiciones del grupo de filtros se cumple.

#### Grupos de filtros

Los grupos de filtros te permiten crear lógica más compleja creando combinaciones de conjunciones.

#### Editor avanzado de filtros

Haz clic en el botón de código ![[lucide-code-xml.svg#icon]] para usar el editor de **filtro avanzado**. Esto muestra la [[Sintaxis de Bases|sintaxis]] sin procesar del filtro, y puede usarse con [[Funciones|funciones]] más complejas que no pueden mostrarse usando la interfaz de apuntar y hacer clic.

## Ordenar y agrupar resultados

Abre el menú ![[lucide-arrow-up-down.svg#icon]] **Ordenar** para ordenar y agrupar los resultados en una vista.

Puedes ordenar los resultados por una o más propiedades en orden ascendente o descendente. Esto facilita listar notas por nombre, última hora de edición o cualquier otra propiedad, incluyendo fórmulas.

También puedes agrupar resultados por una propiedad para organizar elementos similares en secciones visualmente distintas. Actualmente, Obsidian permite agrupar por una sola propiedad.

### Añadir un ordenamiento

1. Abre el menú ![[lucide-arrow-up-down.svg#icon]] **Ordenar** en la parte superior de la vista.
2. Elige la propiedad por la que deseas ordenar (o agrupar).
3. Si tienes múltiples ordenamientos, arrástralos hacia arriba o hacia abajo usando el ![[lucide-grip-vertical.svg#icon]] asa de agarre para cambiar su prioridad.

Las opciones para ordenar resultados dependen del tipo de propiedad:

- **Texto**: ordenar *alfabéticamente* (A→Z) o en *orden alfabético inverso* (Z→A).
- **Número**: ordenar de *menor a mayor* (0→1) o de *mayor a menor* (1→0).
- **Fecha y hora**: ordenar de *antiguo a nuevo*, o de *nuevo a antiguo*.

### Eliminar un ordenamiento

1. Abre el menú ![[lucide-arrow-up-down.svg#icon]] **Ordenar** en la parte superior de la vista.
2. Haz clic en el botón de papelera ![[lucide-trash-2.svg#icon]] junto al ordenamiento o agrupamiento que deseas eliminar.

## Limitar, copiar y exportar resultados

### Limitar resultados

El menú de *resultados* muestra el número de resultados en la vista. Haz clic en el botón de resultados para limitar el número de resultados y acceder a acciones adicionales.

### Copiar al portapapeles

Esta acción copia la vista a tu portapapeles. Una vez en tu portapapeles puedes pegarlo en un archivo Markdown, o en otras aplicaciones de documentos incluyendo hojas de cálculo como Google Sheets, Excel y Numbers.

### Exportar CSV

Esta acción guarda un CSV de tu vista actual.

## Incrustar una vista

Puedes incrustar archivos de base en [[Incrustar archivos|cualquier otro archivo]] usando la sintaxis `![[Archivo.base]]`. Se usará la primera vista de la lista. Puedes cambiar el orden arrastrando las vistas en el menú de vistas.

Para especificar la vista predeterminada para una incrustación usa `![[Archivo.base#Vista]]`.
