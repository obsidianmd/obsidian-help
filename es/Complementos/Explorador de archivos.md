---
permalink: plugins/file-explorer
publish: true
mobile: true
description: Explorador de archivos es un complemento principal que te permite gestionar archivos y carpetas dentro de tu bóveda.
aliases:
  - Plugins/Explorador de archivos
---
Explorador de archivos es un [[Complementos principales|complemento principal]] que te permite gestionar archivos y carpetas dentro de tu bóveda. Puedes explorar notas y otros [[Formatos de archivo aceptados]] en tu bóveda y realizar muchas operaciones comunes de archivos:

- Crear, eliminar y renombrar archivos y carpetas.
- Mover archivos y carpetas con arrastrar y soltar.
- Usar el [[#Usar el menú contextual|menú contextual]] para acceder a todas las operaciones disponibles.

> [!tip]- Arrastrar y soltar archivos
> Puedes arrastrar un archivo desde el Explorador de archivos a tu nota para crear un enlace hacia él, o arrastrar un archivo a una carpeta en el Explorador de archivos para copiarlo.

## Crear una nueva nota

Para crear una nueva nota en la ubicación predeterminada para nuevas notas:

1. Selecciona **Nueva nota** ![[lucide-pen-line.svg#icon]] en la parte superior del Explorador de archivos.
2. Escribe el nombre de la nota y luego presiona `Enter`.

> [!tip]- Cambiar la ubicación predeterminada
> Puedes cambiar la ubicación predeterminada para nuevas notas en **[[Configuración]] → [[Configuración#Archivos y enlaces|Archivos y enlaces]] → [[Configuración#Ubicación por defecto para nuevas notas|Ubicación por defecto para nuevas notas]]**.

Para crear una nueva nota en una carpeta específica:

1. Haz clic derecho en la carpeta y luego selecciona **Nueva nota**.
2. Escribe el nombre de la nota y luego presiona `Enter`.

## Crear una nueva carpeta

Para crear una nueva carpeta en la raíz de tu bóveda:

1. Selecciona **Nueva carpeta** ![[lucide-folder-plus.svg#icon]] en la parte superior del Explorador de archivos.
2. Escribe el nombre de la carpeta y luego presiona `Enter`.

Para crear una subcarpeta:

1. Haz clic derecho en la carpeta donde deseas crear la subcarpeta y luego selecciona **Nueva carpeta**.
2. Escribe el nombre de la carpeta y luego presiona `Enter`.

## Cambiar el orden de clasificación

Para cambiar el orden de clasificación de tus archivos:

1.  Selecciona **Cambiar el orden** ![[lucide-arrow-up-narrow-wide.svg#icon]] en la parte superior del Explorador de archivos.
2. Elige cómo deseas ordenar tus archivos. Puedes ordenar de forma ascendente o descendente por nombre de archivo, fecha de modificación o fecha de creación.

## Mostrar automáticamente el archivo activo

Cuando abres una nota, el Explorador de archivos puede desplazarse automáticamente y resaltar esa nota en el árbol de carpetas. Esto te ayuda a mantener un seguimiento de dónde se encuentra tu nota activa dentro de tu bóveda.

Para activar o desactivar la función de mostrar automáticamente:

- Selecciona **Mostrar automáticamente el archivo activo** ![[lucide-gallery-vertical.svg#icon]] en la parte superior del Explorador de archivos.

Cuando está habilitado, el Explorador de archivos seguirá y mostrará automáticamente la nota activa.

## Expandir o contraer todas las carpetas

Puedes expandir o contraer todas las carpetas en el Explorador de archivos a la vez.

Para expandir todas las carpetas:

- Selecciona **Expandir todo** ![[lucide-chevrons-up-down.svg#icon]] en la parte superior del Explorador de archivos.

Para contraer todas las carpetas:

- Selecciona **Colapsar todo** ![[lucide-chevrons-down-up.svg#icon]] en la parte superior del Explorador de archivos.

## Eliminar un archivo o carpeta

1. Haz clic derecho en el archivo que deseas eliminar y luego selecciona **Eliminar**.
2. Si se te solicita confirmar que deseas eliminar el archivo, selecciona **Eliminar**.

Para más información, consulta [[Gestionar notas#Eliminar una nota|Eliminar una nota]].

## Renombrar un archivo o carpeta

1. Haz clic derecho en el archivo que deseas renombrar y luego selecciona **Editar nombre del archivo**.
2. Escribe el nuevo nombre y luego presiona `Enter`.

Para más información, consulta [[Gestionar notas#Renombrar una nota|Renombrar una nota]].

## Mover un archivo o carpeta

Para mover un archivo o carpeta, puedes usar arrastrar y soltar o el menú contextual.

**Arrastrar y soltar:**

- Arrastra un archivo o carpeta a la carpeta donde deseas moverlo.
- Con `Alt-Clic` (Windows/Linux) u `Opt-Clic` (macOS) puedes seleccionar múltiples archivos individuales y arrastrarlos a otra carpeta. Si están todos en fila, puedes usar `Shift-Clic` para ello.

**Menú contextual:**

1. Haz clic derecho en un archivo y luego selecciona **Mover archivo a...**.
2. Busca el nombre de la carpeta donde deseas mover el archivo y luego selecciónala de la lista.

## Usar el menú contextual

El menú contextual lista las acciones disponibles para un archivo o carpeta. Muchos de los elementos de archivo también aparecen en el [[Menú de más opciones]].

### Escritorio

Haz clic derecho en un archivo o carpeta en el Explorador de archivos.

**Archivos**

- **Abrir en pestaña nueva** y **Abrir a la derecha** abren el archivo en una nueva pestaña o en un panel a la derecha.
- **Abrir en una nueva ventana** abre el archivo en su propia ventana. Consulta [[Ventanas emergentes]].
- **Duplicar** crea una copia del archivo.
- **Mover archivo a...** mueve el archivo a otra carpeta. Consulta [[#Mover un archivo o carpeta]].
- **Marcar...** agrega el archivo a tus marcadores. Requiere el complemento Marcadores. Consulta [[Marcadores#Añadir un marcador]].
- **Combinar el archivo entero con...** combina la nota con otra. Requiere el complemento Compositor de notas. Consulta [[Compositor de notas#Combinar notas]].
- **Publicar el archivo actual** publica la nota en tu sitio. Requiere Obsidian Publish. Consulta [[Introducción a Obsidian Publish|Publish]].
- **Copiar ruta** copia la ubicación del archivo como una URL de Obsidian, desde la carpeta de la bóveda o desde la raíz del sistema.
- **Abrir el historial de versiones** muestra versiones anteriores del archivo. Requiere una suscripción activa a Obsidian Sync. Consulta [[Historial de versiones]].
- **Abrir en la app por defecto** abre el archivo en la aplicación que tu computadora usa para ese tipo de archivo.
- **Mostrar en el sistema de archivos** muestra el archivo en tu gestor de archivos. En macOS, el elemento dice **Mostrar en el Finder**. En Windows y Linux, dice **Mostrar en carpeta**.
- **Renombrar...** cambia el nombre del archivo. Consulta [[#Renombrar un archivo o carpeta]].
- **Eliminar** elimina el archivo. Consulta [[#Eliminar un archivo o carpeta]].

**Carpetas**

- **Nueva nota** y **Nueva carpeta** crean una nota o una carpeta dentro de la carpeta. Consulta [[#Crear una nueva nota]] y [[#Crear una nueva carpeta]].
- **Nuevo lienzo** crea un lienzo en la carpeta. Consulta [[Canvas]].
- **Nueva base** crea una base en la carpeta. Consulta [[Introducción a Bases]].
- **Duplicar** crea una copia de la carpeta.
- **Mover carpeta a...** mueve la carpeta dentro de otra carpeta.
- **Buscar en la carpeta** busca solo los archivos en la carpeta. Consulta [[Búsqueda]].
- **Marcar...** agrega la carpeta a tus marcadores.
- **Copiar ruta** copia la ubicación de la carpeta desde la carpeta de la bóveda o desde la raíz del sistema.
- **Mostrar en el sistema de archivos** muestra la carpeta en tu gestor de archivos, y se lee igual que para los archivos.
- **Renombrar...** y **Eliminar** cambian el nombre de la carpeta o eliminan la carpeta.

### Móvil

Mantén presionada una carpeta en el Explorador de archivos. El menú tiene los mismos elementos que el menú de carpetas de escritorio, excepto **Marcar...** y **Mostrar en el sistema de archivos**.
