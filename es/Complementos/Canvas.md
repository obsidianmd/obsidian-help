---
permalink: plugins/canvas
mobile: true
---
Canvas es un [[Complementos principales|complemento principal]] para la toma de notas visuales. Te ofrece un espacio infinito para disponer notas y conectarlas con otras notas, adjuntos y páginas web.

Organizar tus notas en un espacio 2D te ayuda a ver y comprender las conexiones entre ellas. Conecta notas con líneas y agrupa las relacionadas.

Obsidian guarda los lienzos como archivos `.canvas` usando el formato abierto [JSON Canvas](https://jsoncanvas.org/).

## Crear un nuevo lienzo

Para comenzar a usar Canvas, primero necesitas crear un archivo que contenga tu lienzo. Puedes crear un nuevo lienzo usando los siguientes métodos.

**Paleta de comandos:**

1. Abre la [[Paleta de comandos]].
2. Selecciona **Canvas: Crear nuevo lienzo** para crear un lienzo en la misma carpeta que el archivo activo.

**Explorador de archivos:**

- En el [[Explorador de archivos]], haz clic derecho en la carpeta donde quieres crear el lienzo.
- Selecciona **Nuevo lienzo**.

**Menú de cinta:**

- En el menú vertical del menú de cinta, selecciona **Crear nuevo lienzo** ![[lucide-layout-dashboard.svg#icon]] para crear un lienzo en la misma carpeta que el archivo activo.

> [!note] La extensión de archivo .canvas
> Obsidian almacena los datos de tu lienzo como archivos `.canvas` usando un formato de archivo abierto llamado [JSON Canvas](https://jsoncanvas.org/).

## Agregar tarjetas

Puedes arrastrar archivos a tu lienzo desde Obsidian o desde otras aplicaciones. Por ejemplo, archivos Markdown, imágenes, audio, PDFs o incluso tipos de archivo no reconocidos.

### Agregar tarjetas de texto

Puedes agregar tarjetas de solo texto que no hacen referencia a un archivo. Puedes usar Markdown, enlaces y bloques de código de la misma manera que en una nota.

Para agregar una nueva tarjeta de texto a tu lienzo:

- Selecciona o arrastra el icono de archivo vacío en la parte inferior del lienzo.

También puedes agregar tarjetas de texto haciendo doble clic en el lienzo.

Para convertir una tarjeta de texto en un archivo:

1. Haz clic derecho en la tarjeta de texto y selecciona **Convertir a archivo...**.
2. Ingresa el nombre de la nota y selecciona **Guardar**.

> [!note] Tarjetas de solo texto y enlaces de retorno
> Las tarjetas de solo texto no aparecen en [[Enlace de retorno]]. Para que aparezcan, necesitas convertirlas en un archivo.

### Agregar tarjetas desde notas

Para agregar una nota de tu bóveda a tu lienzo:

1. Selecciona o arrastra el icono de documento en la parte inferior del lienzo.
2. Selecciona la nota que deseas agregar.

También puedes agregar notas desde el menú contextual del lienzo:

1. Haz clic derecho en el lienzo y selecciona **Agregar nota desde la bóveda**.
2. Selecciona la nota que deseas agregar.

También puedes arrastrar notas desde el [[Explorador de archivos]] al lienzo.

Para mostrar solo una parte de una nota en una tarjeta, haz clic derecho en la tarjeta y selecciona **Acotar al encabezado...** o **Acotar al bloque...**. Luego elige el encabezado o bloque.

### Agregar tarjetas desde medios

Para agregar medios de tu bóveda a tu lienzo:

1. Selecciona o arrastra el icono de archivo de imagen en la parte inferior del lienzo.
2. Selecciona el archivo multimedia que deseas agregar.

También puedes agregar medios desde el menú contextual del lienzo:

1. Haz clic derecho en el lienzo y selecciona **Agregar medio desde la bóveda**.
2. Selecciona el archivo multimedia que deseas agregar.

También puedes arrastrar archivos multimedia desde el [[Explorador de archivos]] al lienzo.

### Agregar tarjetas desde páginas web

Para incrustar una página web en tu lienzo:

1. Haz clic derecho en el lienzo y selecciona **Agregar página web**.
2. Ingresa la URL de la página web y selecciona **Guardar**.

También puedes seleccionar una URL en tu navegador y arrastrarla al lienzo para incrustarla en una tarjeta.

Para abrir la página web en tu navegador, presiona `Ctrl` (o `Cmd` en macOS) y selecciona la etiqueta de la tarjeta. O haz clic derecho en la tarjeta y selecciona **Abrir enlace externo**.

Haz clic derecho en una tarjeta de página web para más opciones.

- **Copiar dirección URL** copia la dirección de la página web.
- **Cambiar la URL...** cambia la dirección que muestra la tarjeta.
- **Recargar página** carga la página web de nuevo.

### Agregar tarjetas desde bases

Para mostrar una [[Introducción a Bases|base]] en tu lienzo, arrastra el archivo de base desde el Explorador de archivos al lienzo. La tarjeta muestra la base.

Una tarjeta de base muestra la vista predeterminada de la base. Para mostrar una vista diferente:

1. Haz clic derecho en la tarjeta y selecciona **Fijar vista...**.
2. Selecciona la vista que deseas.

Para volver a la vista predeterminada, selecciona **Fijar vista...** de nuevo, y luego selecciona **Mostrar vista predeterminada**.

### Agregar tarjetas desde carpetas

Arrastra una carpeta desde el [[Explorador de archivos]] para agregar todos los archivos de esa carpeta al lienzo.

### Editar una tarjeta

Haz doble clic en una tarjeta de texto o nota para comenzar a editarla. Selecciona cualquier lugar fuera de la tarjeta para dejar de editarla. También puedes presionar `Escape` para dejar de editar una tarjeta.

También puedes editar una tarjeta haciendo clic derecho en ella y seleccionando **Editar**. O selecciona la tarjeta y luego selecciona **Editar** ![[lucide-square-pen.svg#icon]] en los controles de selección.

### Eliminar una tarjeta

Elimina las tarjetas seleccionadas haciendo clic derecho en cualquiera de ellas y seleccionando **Eliminar**. O presiona `Backspace` (o `Delete` en macOS).

También puedes seleccionar **Eliminar** ![[lucide-trash-2.svg#icon]] en los controles de selección sobre tu selección.

### Intercambiar tarjetas

Puedes intercambiar una tarjeta de nota o medios por otra tarjeta del mismo tipo.

Para intercambiar una tarjeta de nota:

1. Haz clic derecho en la tarjeta que deseas reemplazar.
2. Selecciona **Intercambiar archivo**.
3. Selecciona la nota con la que deseas reemplazarla.

## Seleccionar tarjetas

Selecciona tarjetas individuales, o arrastra una selección alrededor de múltiples tarjetas.

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

### Alinear y ordenar tarjetas

Para alinear varias tarjetas, selecciona dos o más tarjetas. En los controles de selección, selecciona **Alinear**, y luego elige una opción.

- **Alinear a la izquierda**, **Alinear al centro** y **Alinear a la derecha** alinean las tarjetas en una línea vertical.
- **Alinear arriba**, **Alinear al medio** y **Alinear abajo** alinean las tarjetas en una línea horizontal.
- **Ordenar en una fila**, **Ordenar en una columna** y **Ordenar en una grilla** mueven las tarjetas a esa disposición.
- **Distribuir horizontalmente** y **Distribuir verticalmente** espacian las tarjetas uniformemente.
- **Justificar horizontalmente** y **Justificar verticalmente** redimensionan cada tarjeta para que coincida con el ancho o alto total de la selección.

## Conectar tarjetas

Dibuja líneas entre tarjetas para mostrar relaciones. Agrega colores y etiquetas para describir cómo se relacionan.

### Conectar dos tarjetas

Para conectar dos tarjetas con una línea dirigida:

1. Pasa el cursor sobre uno de los bordes de una tarjeta hasta que veas un círculo relleno.
2. Arrastra el círculo hasta el borde de una tarjeta diferente para conectarlas.

> [!tip]- Crear una tarjeta desde una nueva conexión
> Si arrastras la línea sin conectarla a otra tarjeta, puedes crear una nueva tarjeta en el otro extremo.

### Desconectar dos tarjetas

Para eliminar la conexión entre dos tarjetas:

1. Pasa el cursor sobre una línea de conexión hasta que aparezcan dos pequeños círculos en la línea.
2. Arrastra uno de los círculos fuera de la tarjeta sin conectarlo a otra.

También puedes desconectar dos tarjetas haciendo clic derecho en la línea entre ellas y seleccionando **Eliminar**. O seleccionando la línea y presionando `Backspace` (o `Delete` en macOS).

### Conectar una tarjeta a una tarjeta diferente

Para mover uno de los extremos de una línea de conexión:

1. Pasa el cursor sobre una línea de conexión hasta que aparezcan dos pequeños círculos en la línea.
2. Arrastra el círculo hacia otra tarjeta para reconectarlo.

### Navegar por una conexión

Si dos tarjetas conectadas están muy separadas, puedes saltar a la tarjeta en el otro extremo de la conexión. Haz clic derecho en la línea cerca de un extremo y selecciona **Seguir conexión**. El lienzo se mueve a la tarjeta en el extremo opuesto.

### Agregar una etiqueta a una conexión

Puedes agregar una etiqueta a una línea para describir la relación entre dos tarjetas.

Para etiquetar una conexión:

1. Haz doble clic en la línea.
2. Ingresa la etiqueta y presiona `Escape` o selecciona cualquier lugar del lienzo.

También puedes etiquetar una conexión seleccionándola y luego seleccionando **Editar etiqueta** en los controles de selección.

Para editar la etiqueta de una conexión, haz doble clic en la línea, o haz clic derecho en la línea y selecciona **Editar etiqueta**.

Para eliminar una etiqueta, selecciona la conexión y luego selecciona **Eliminar etiqueta** en los controles de selección.

### Cambiar la dirección de una conexión

De forma predeterminada, una conexión tiene una flecha en el extremo que apunta a la segunda tarjeta. Para cambiar esto:

1. Selecciona la conexión.
2. En los controles de selección, selecciona **Dirección de línea**.
3. Elige **No direccional**, **Unidireccional** o **Bidireccional**.

### Cambiar el color de una tarjeta o conexión

1. Selecciona las tarjetas o conexiones que deseas colorear.
2. En los controles de selección, selecciona **Definir color** ![[lucide-palette.svg#icon]].
3. Selecciona un color.

## Agrupar tarjetas

### Agrupar tarjetas seleccionadas

Para crear un grupo vacío:

- Haz clic derecho en el lienzo y selecciona **Crear grupo**.

Para agrupar tarjetas relacionadas:

1. Selecciona las tarjetas.
2. Haz clic derecho en cualquiera de las tarjetas seleccionadas y selecciona **Crear grupo**.

**Renombrar grupo:** Haz doble clic en el nombre del grupo para editarlo, y luego presiona `Enter` para guardar.

### Agregar un fondo a un grupo

Puedes mostrar una imagen detrás de las tarjetas en un grupo.

1. Selecciona el grupo.
2. En los controles de selección, selecciona **Definir fondo**.
3. Elige una imagen de tu bóveda.

Para cambiar el fondo, selecciona el grupo y luego selecciona **Editar fondo**.

- **Reemplazar fondo** elige una imagen diferente.
- **Eliminar fondo** elimina la imagen.
- **Portada** hace que la imagen llene el grupo.
- **Mantener relación de aspecto** mantiene las proporciones de la imagen.
- **Repetir** repite la imagen en mosaico a lo largo del grupo.

## Navegar por el lienzo

Usa el paneo y el zoom para moverte por el lienzo.

### Panear el lienzo

Para mover el lienzo vertical y horizontalmente, también conocido como _panear_, puedes usar cualquiera de los siguientes métodos:

- Presiona `Space` y arrastra el lienzo.
- Arrastra el lienzo usando el botón central del ratón.
- Desplaza la rueda del ratón para panear verticalmente, y presiona `Shift` mientras desplazas para panear horizontalmente.

### Ampliar el lienzo

Para ampliar el lienzo, presiona `Space` o `Ctrl` (o `Cmd` en macOS) y desplaza usando la rueda del ratón. O selecciona **Acercar** ![[lucide-plus.svg#icon]] y **Alejar** ![[lucide-minus.svg#icon]] en los controles de zoom en la esquina superior derecha.

#### Acercar para ajustar

Para ampliar el lienzo de modo que todos los elementos sean visibles, selecciona **Acercar para ajustar** ![[lucide-maximize.svg#icon]]. O usa el atajo de teclado `Shift+1`.

#### Acercar a la selección

Para ampliar el lienzo de modo que todos los elementos seleccionados sean visibles, haz clic derecho en una tarjeta seleccionada y selecciona **Acercar a la selección**. O presiona `Shift+2`.

#### Reiniciar zoom

Para cambiar el nivel de zoom al predeterminado, selecciona **Reiniciar zoom** en los controles de zoom en la esquina superior derecha.


### Saltar a un grupo

Para ir directamente a un grupo en un lienzo grande, abre la paleta de comandos y selecciona **Canvas: Saltar a un grupo**. Aparece una lista de los grupos en tu lienzo. Selecciona el grupo al que deseas ir, y el lienzo se mueve para centrarse en él.

## Ajustes de Canvas

Selecciona **Ajustes de lienzo** ![[lucide-settings.svg#icon]] sobre los controles del lienzo para cambiar el comportamiento de tu lienzo.

- **Ajustar a la cuadrícula** ajusta las tarjetas a la cuadrícula de fondo cuando las mueves y redimensionas.
- **Ajustar a objetos** ajusta las tarjetas a las tarjetas cercanas cuando las mueves y redimensionas.
- **Solo lectura** impide cambios en el lienzo.

## Exportar un lienzo como imagen

Puedes exportar un lienzo como imagen PNG en escritorio. La exportación de imagen no está disponible en la aplicación de Obsidian en móvil.

1. Abre el lienzo que deseas exportar.
2. Abre la paleta de comandos y selecciona **Canvas: Exportar como imagen**.
3. Elige tus ajustes.
    - **Vista** establece qué exportar. Selecciona **lienzo completo** para todo el lienzo, o **Solo la vista** para la parte que puedes ver ahora.
    - **Ampliar** establece la calidad de la imagen. Un zoom mayor produce una imagen más grande y nítida. El diálogo muestra el tamaño estimado de la imagen.
    - **Mostrar logo** agrega un logo de Obsidian en la esquina inferior izquierda. Está activado por defecto.
    - **Modo de privacidad** oculta todo el texto en tu lienzo. Está desactivado por defecto.
4. Selecciona **Guardar**.
5. Elige dónde guardar el archivo. El nombre del archivo es por defecto el nombre de tu lienzo, con la extensión `.png`.

No puedes exportar un lienzo vacío.

## Deshacer y rehacer

Para deshacer tu último cambio, selecciona **Deshacer** en los controles del lienzo en el lado derecho del lienzo. O presiona `Ctrl+Z` (Windows y Linux) o `Command+Z` (macOS).

Para rehacer un cambio, selecciona **Rehacer**. O presiona `Ctrl+Y` o `Ctrl+Shift+Z` (Windows y Linux), o `Command+Y` o `Command+Shift+Z` (macOS).

## Ayuda de Canvas

En escritorio, selecciona **Ayuda de lienzo** ![[lucide-help-circle.svg#icon]] debajo de los controles del lienzo para ver una lista de los atajos para panear, ampliar, seleccionar y mover tarjetas.

## Incrustar un lienzo

Puedes incrustar un lienzo en una nota usando la sintaxis estándar de incrustación. Para más información, consulta [[Incrustar archivos#Embed a canvas in a note|Incrustar un lienzo en una nota]].

## Usar Canvas en móvil

Cuando abres un lienzo en un teléfono o tableta, Obsidian muestra tres indicaciones.

- **Arrastrar para panear**
- **Pellizcar para hacer zoom**
- **Pulsar y mantener para agregar / mover / seleccionar**

### Abrir el menú del lienzo

Pulsa y mantén en un área vacía del lienzo. El menú tiene estos elementos.

- **Agregar tarjeta** agrega una tarjeta de texto.
- **Agregar nota desde la bóveda** agrega una nota de tu bóveda.
- **Agregar medio desde la bóveda** agrega medios de tu bóveda.
- **Agregar página web** incrusta una página web.
- **Crear grupo** crea un grupo vacío.
- **Ajustar a la cuadrícula**, **Ajustar a objetos** y **Solo lectura** son las mismas opciones que en **Ajustes de lienzo**.

### Agregar tarjetas

Puedes agregar tarjetas desde el menú del lienzo. También puedes seleccionar un icono en la parte inferior del lienzo.

- El icono de archivo vacío agrega una tarjeta de texto.
- El icono de documento agrega una nota de tu bóveda.
- El icono de imagen agrega medios de tu bóveda.

### Trabajar con una tarjeta seleccionada

Toca una tarjeta para seleccionarla. Aparece una barra de herramientas sobre la tarjeta.

- **Eliminar** ![[lucide-trash-2.svg#icon]] elimina la tarjeta.
- **Definir color** ![[lucide-palette.svg#icon]] cambia el color de la tarjeta.
- **Acercar a la selección** amplía el lienzo a la tarjeta.
- **Editar** ![[lucide-square-pen.svg#icon]] edita la tarjeta.

### Mover una tarjeta

1. Toca la tarjeta para seleccionarla.
2. Pulsa y mantén la tarjeta seleccionada, y luego arrástrala a una nueva posición.

### Redimensionar una tarjeta

1. Toca la tarjeta para seleccionarla.
2. Arrastra los lados de la tarjeta para hacerla más grande o más pequeña.

### Abrir el menú de la tarjeta

Pulsa y mantén una tarjeta. El menú tiene estos elementos.

- **Acercar a la selección** amplía el lienzo a la tarjeta.
- **Editar** edita la tarjeta.
- **Convertir a archivo...** convierte una tarjeta de texto en una nota.
- **Duplicar** hace una copia de la tarjeta.
- **Eliminar** elimina la tarjeta.

### Editar una tarjeta

Para editar una tarjeta de texto o una tarjeta de nota, usa cualquiera de los dos métodos.

- Toca la tarjeta para seleccionarla, y luego tócala dos veces. Se abre el teclado.
- Toca la tarjeta para seleccionarla, y luego selecciona **Editar** ![[lucide-square-pen.svg#icon]] en la barra de herramientas sobre la tarjeta.

### Etiquetar una conexión

1. Toca la línea para seleccionarla.
2. En la barra de herramientas, selecciona **Editar etiqueta** ![[lucide-square-pen.svg#icon]]. Se abre el teclado.
3. Ingresa la etiqueta.

Para eliminar una etiqueta, toca la línea y luego selecciona **Eliminar etiqueta** en la barra de herramientas.

### Cambiar la dirección de una conexión

1. Toca la línea para seleccionarla.
2. En la barra de herramientas, selecciona **Dirección de línea**.
3. Elige **No direccional**, **Unidireccional** o **Bidireccional**.

### Abrir el menú de la línea

Pulsa y mantén una línea que conecta dos tarjetas. El menú tiene estos elementos.

- **Editar etiqueta** agrega o cambia la etiqueta de la línea.
- **Seguir conexión** mueve el lienzo a la tarjeta en el extremo opuesto de la línea.
- **Eliminar** elimina la conexión.

### Conectar tarjetas

1. Toca una tarjeta para seleccionarla.
2. Arrastra uno de los círculos en sus bordes hacia otra tarjeta.

Si arrastras la línea y la sueltas en un área vacía, se abre un menú con **Agregar tarjeta** y **Agregar nota desde la bóveda**. Selecciona uno para agregar una tarjeta al final de la línea.

### Desconectar tarjetas

Para eliminar una conexión, usa cualquiera de los dos métodos.

- Toca la línea, y luego selecciona **Eliminar** ![[lucide-trash-2.svg#icon]].
- Arrastra el extremo de la flecha de la línea de vuelta a la tarjeta de donde partió. La línea desaparece.

### Agrupar tarjetas

Para crear un grupo:

1. Pulsa y mantén en un área vacía del lienzo.
2. Selecciona **Crear grupo**.
3. Arrastra los bordes del grupo para cambiar su tamaño.

Para agregar tarjetas a un grupo, arrástralas dentro del área del grupo. Cuando mueves el grupo, las tarjetas dentro de él también se mueven.

Para renombrar un grupo, toca dos veces su nombre. Se abre el teclado. Ingresa el nuevo nombre.

### Controles del lienzo

Los controles en el lado derecho del lienzo cambian la vista y tus ajustes.

- **Acercar** y **Alejar** cambian el nivel de zoom.
- **Reiniciar zoom** devuelve el lienzo al nivel de zoom predeterminado.
- **Acercar para ajustar** muestra todas las tarjetas del lienzo.
- **Deshacer** y **Rehacer** revierten o repiten tu último cambio.
- **Ajustes de lienzo** tiene las opciones **Ajustar a la cuadrícula**, **Ajustar a objetos** y **Solo lectura**.

## Consejos avanzados

Hemos creado algunos vídeos cortos para demostrar algunos casos de uso avanzados de Canvas.

Puedes [ver los 72 consejos aquí](https://obsidian.md/canvas#protips). Los vídeos de consejos solo son visibles en escritorio.
