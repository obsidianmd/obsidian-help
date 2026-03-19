---
permalink: plugins/canvas
---
Canvas es un [[Complementos principales|complemento principal]] para la toma de notas visuales. Te ofrece un espacio infinito para disponer notas y conectarlas con otras notas, adjuntos y páginas web.

La toma de notas visual te ayuda a dar sentido a tus notas organizándolas en un espacio 2D. Conecta notas con líneas y agrupa notas relacionadas para comprender mejor la relación entre ellas.

Los datos de Canvas que crees en Obsidian se guardan como archivos `.canvas` usando el formato de archivo abierto [JSON Canvas](https://jsoncanvas.org/).

## Crear un nuevo lienzo

Para comenzar a usar Canvas, primero necesitas crear un archivo que contenga tu lienzo. Puedes crear un nuevo lienzo usando los siguientes métodos.

**Paleta de comandos:**

1. Abre la [[Paleta de comandos]].
2. Selecciona **Canvas: Crear nuevo lienzo** para crear un lienzo en la misma carpeta que el archivo activo.

**Explorador de archivos:**

- En el [[Explorador de archivos]], haz clic derecho en la carpeta donde quieres crear el lienzo.
- Selecciona **Nuevo lienzo**.

**Menú de cinta:**

- En el menú vertical del menú de cinta, selecciona **Crear nuevo lienzo** ( ![[lucide-layout-dashboard.svg#icon]] ) para crear un lienzo en la misma carpeta que el archivo activo.

> [!note] La extensión de archivo .canvas
> Obsidian almacena los datos de tu lienzo como archivos `.canvas` usando un formato de archivo abierto llamado [JSON Canvas](https://jsoncanvas.org/).

## Agregar tarjetas

Puedes arrastrar archivos a tu lienzo desde Obsidian o desde otras aplicaciones. Por ejemplo, archivos Markdown, imágenes, audio, PDFs o incluso tipos de archivo no reconocidos.

### Agregar tarjetas de texto

Puedes agregar tarjetas de solo texto que no hacen referencia a un archivo. Puedes usar Markdown, enlaces y bloques de código igual que en una nota.

Para agregar una nueva tarjeta de texto a tu lienzo:

- Selecciona o arrastra el icono de archivo vacío en la parte inferior del lienzo.

También puedes agregar tarjetas de texto haciendo doble clic en el lienzo.

Para convertir una tarjeta de texto en un archivo:

1. Haz clic derecho en la tarjeta de texto y selecciona **Convertir a archivo...**.
2. Ingresa el nombre de la nota y selecciona **Guardar**.

> [!note] Nota
> Las tarjetas de solo texto no aparecen en [[Enlaces entrantes]]. Para que aparezcan, necesitas convertirlas en un archivo.

### Agregar tarjetas desde notas

Para agregar una nota de tu bóveda a tu lienzo:

1. Selecciona o arrastra el icono de documento en la parte inferior del lienzo.
2. Selecciona la nota que deseas agregar.

También puedes agregar notas desde el menú contextual del lienzo:

1. Haz clic derecho en el lienzo y selecciona **Agregar nota desde la bóveda**.
2. Selecciona la nota que deseas agregar.

O puedes agregarlas al lienzo arrastrando el archivo desde el [[Explorador de archivos]].

### Agregar tarjetas desde medios

Para agregar medios de tu bóveda a tu lienzo:

1. Selecciona o arrastra el icono de archivo de imagen en la parte inferior del lienzo.
2. Selecciona el archivo multimedia que deseas agregar.

También puedes agregar medios desde el menú contextual del lienzo:

1. Haz clic derecho en el lienzo y selecciona **Agregar medio desde la bóveda**.
2. Selecciona el archivo multimedia que deseas agregar.

O puedes agregarlos al lienzo arrastrando el archivo desde el [[Explorador de archivos]].

### Agregar tarjetas desde páginas web

Para incrustar una página web en tu lienzo:

1. Haz clic derecho en el lienzo y selecciona **Agregar página web**.
2. Ingresa la URL de la página web y selecciona **Guardar**.

También puedes seleccionar una URL en tu navegador y arrastrarla al lienzo para incrustarla en una tarjeta.

Para abrir la página web en tu navegador, presiona `Ctrl` (o `Cmd` en macOS) y selecciona la etiqueta de la tarjeta. O haz clic derecho en la tarjeta y selecciona **Abrir en el navegador**.

### Agregar tarjetas desde carpetas

Arrastra una carpeta desde el explorador de archivos para agregar todos los archivos de esa carpeta al lienzo.

### Editar una tarjeta

Haz doble clic en una tarjeta de texto o nota para comenzar a editarla. Haz clic fuera de la tarjeta para dejar de editarla. También puedes presionar `Escape` para dejar de editar una tarjeta.

También puedes editar una tarjeta haciendo clic derecho en ella y seleccionando **Editar**.

### Eliminar una tarjeta

Elimina las tarjetas seleccionadas haciendo clic derecho en cualquiera de ellas y seleccionando **Eliminar**. O presiona `Backspace` (o `Delete` en macOS).

También puedes seleccionar **Eliminar** ( ![[lucide-trash-2.svg#icon]] ) en los controles de selección sobre tu selección.

### Intercambiar tarjetas

Puedes intercambiar una tarjeta de nota o medios por otra tarjeta del mismo tipo.

Para intercambiar una tarjeta de nota:

1. Haz clic derecho en la tarjeta que deseas reemplazar.
2. Selecciona **Intercambiar archivo**.
3. Selecciona la nota con la que deseas reemplazarla.

## Seleccionar tarjetas

Selecciona tarjetas en el lienzo haciendo clic en ellas. Puedes seleccionar múltiples tarjetas arrastrando una selección alrededor de ellas.

También puedes agregar y eliminar tarjetas de una selección existente presionando `Shift` y seleccionándolas.

Presiona `Ctrl+a` (o `Cmd+a` en macOS) para seleccionar todas las tarjetas del lienzo.

Para desplazar el contenido de una tarjeta, primero necesitas seleccionarla.

### Ordenar tarjetas

Arrastra una tarjeta seleccionada para moverla.

Presiona `Alt` (u `Option` en macOS) y arrastra para duplicar la selección.

Puedes presionar `Shift` mientras arrastras para moverte solo en una dirección.

Presiona `Space` mientras mueves una selección para desactivar el ajuste automático.

Seleccionar una tarjeta la mueve al frente.

### Redimensionar una tarjeta

Arrastra cualquiera de los bordes de una tarjeta para redimensionarla.

Puedes presionar `Space` mientras redimensionas para desactivar el ajuste automático.

Para mantener la relación de aspecto mientras redimensionas, presiona `Shift` mientras redimensionas.

## Conectar tarjetas

Dibuja líneas entre tarjetas para crear relaciones entre ellas. Usa colores y etiquetas para describir cómo se relacionan entre sí.

### Conectar dos tarjetas

Para conectar dos tarjetas con una línea dirigida:

1. Pasa el cursor sobre uno de los bordes de una tarjeta hasta que veas un círculo relleno.
2. Arrastra el círculo hasta el borde de una tarjeta diferente para conectarlas.

> [!tip] Consejo
> Si arrastras la línea sin conectarla a otra tarjeta, puedes agregar después la tarjeta a la que deseas conectarla.

### Desconectar dos tarjetas

Para eliminar la conexión entre dos tarjetas:

1. Pasa el cursor sobre una línea de conexión hasta que aparezcan dos pequeños círculos en la línea.
2. Arrastra uno de los círculos fuera de la tarjeta sin conectarlo a otra.

También puedes desconectar dos tarjetas haciendo clic derecho en la línea entre ellas y seleccionando **Eliminar**. O seleccionando la línea y presionando `Backspace` (o `Delete` en macOS).

### Conectar una tarjeta a una tarjeta diferente

Para mover uno de los extremos de una línea de conexión:

1. Pasa el cursor sobre una línea de conexión hasta que aparezcan dos pequeños círculos en la línea.
2. Arrastra el círculo del extremo que deseas reconectar hacia otra tarjeta.

### Navegar por una conexión

Si dos tarjetas conectadas están muy separadas, puedes navegar hacia el origen o el destino de la conexión haciendo clic derecho en la línea y seleccionando **Ir al destino** o **Ir al origen**.

### Agregar una etiqueta a una conexión

Puedes agregar una etiqueta a una línea para describir la relación entre dos tarjetas.

Para etiquetar una conexión:

1. Haz doble clic en la línea.
2. Ingresa la etiqueta y presiona `Escape` o haz clic en cualquier lugar del lienzo.

También puedes etiquetar una conexión seleccionándola y luego seleccionando **Editar etiqueta** en los controles de selección.

Para editar la etiqueta de una conexión, haz doble clic en la línea, o haz clic derecho en la línea y selecciona **Editar etiqueta**.

### Cambiar el color de una tarjeta o conexión

1. Selecciona las tarjetas o conexiones que deseas colorear.
2. En los controles de selección, selecciona **Definir color** ( ![[lucide-palette.svg#icon]] ).
3. Selecciona un color.

## Agrupar tarjetas

### Agrupar tarjetas seleccionadas

Para crear un grupo vacío:

- Haz clic derecho en el lienzo y selecciona **Crear grupo**.

Para agrupar tarjetas relacionadas:

1. Selecciona las tarjetas.
2. Haz clic derecho en cualquiera de las tarjetas seleccionadas y selecciona **Crear grupo**.

**Renombrar grupo:** Haz doble clic en el nombre del grupo para editarlo, y luego presiona `Enter` para guardar.

## Navegar por el lienzo

A medida que agregas más tarjetas a tu lienzo, querrás entender cómo navegar por el lienzo para ver una parte de él. Aprende cómo panear y ampliar para moverte por el lienzo con facilidad.

### Panear el lienzo

Para mover el lienzo vertical y horizontalmente, también conocido como _panear_, puedes usar cualquiera de los siguientes métodos:

- Presiona `Space` y arrastra el lienzo.
- Arrastra el lienzo usando el botón central del ratón.
- Desplaza la rueda del ratón para panear verticalmente, y presiona `Shift` mientras desplazas para panear horizontalmente.

### Ampliar el lienzo

Para ampliar el lienzo, presiona `Space` o `Ctrl` (o `Cmd` en macOS) y desplaza usando la rueda del ratón. O selecciona **Acercar** ( ![[lucide-plus.svg#icon]] ) y **Alejar** ( ![[lucide-minus.svg#icon]] ) en los controles de zoom en la esquina superior derecha.

#### Acercar para ajustar

Para ampliar el lienzo de modo que todos los elementos sean visibles, selecciona **Acercar para ajustar** ( ![[lucide-maximize.svg#icon]] ). O usa el atajo de teclado `Shift+1`.

#### Acercar a la selección

Para ampliar el lienzo de modo que todos los elementos seleccionados sean visibles, haz clic derecho en una tarjeta seleccionada y selecciona **Acercar a la selección**. O usa el atajo de teclado presionando `Shift+2`.

#### Reiniciar zoom

Para cambiar el nivel de zoom al predeterminado, selecciona **Reiniciar zoom** en los controles de zoom en la esquina superior derecha.

## Consejos avanzados

Hemos creado algunos vídeos cortos para demostrar algunos casos de uso avanzados de Canvas.

Puedes [ver los 72 consejos aquí](https://obsidian.md/canvas#protips). Ten en cuenta que los vídeos de consejos solo son visibles en escritorio.
