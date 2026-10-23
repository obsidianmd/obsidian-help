---
permalink: manage-notes
publish: true
mobile: false
description: null
aliases:
  - Advanced topics/Eliminando archivos
  - How to/Cambiar el nombre de las notas
---
Puedes gestionar archivos y carpetas de varias maneras, utilizando [[Teclas de acceso rápido]], [[Paleta de comandos|comandos]], o el [[Explorador de archivos]].

## Crear una nueva nota

Para crear un nuevo archivo:

1. Presiona `Ctrl+N` (o `Cmd+N` en macOS).
2. Introduce el nombre de la nota y luego presiona `Enter` para comenzar a editarla.

También puedes crear notas usando el [[Explorador de archivos#Crear una nueva nota|Explorador de archivos]], o seleccionando **Crear nueva nota** desde la [[Paleta de comandos]].

> [!hint] Limitación de caracteres del sistema
> Obsidian respetará las limitaciones de nombres de archivo del sistema operativo en el que crees la nota. Si planeas [[Sincronizar notas entre dispositivos|sincronizar tus notas entre dispositivos]], asegúrate de que tus nombres de archivo sean [seguros para otros sistemas operativos](https://stackoverflow.com/q/1976007).
^blockquote-system-limitation

## Abrir archivos fuera de tu bóveda

En escritorio, puedes abrir y editar archivos Markdown individuales fuera de tu bóveda. Los archivos se abren en tu ventana actual y permanecen en su ubicación original.

> [!note] Requiere Obsidian 1.14 y el instalador más reciente
> [[Actualizar Obsidian#Actualizaciones del instalador|Actualiza tu instalador]] descargando Obsidian desde [obsidian.md/download](https://obsidian.md/download) y reinstalando la aplicación.

Para abrir un archivo Markdown:

1. Abre la [[Paleta de comandos]].
2. Selecciona **Abrir un archivo externo a la bóveda...**.
3. Elige un archivo Markdown en tu computadora.

También puedes usar el menú **Abrir con** de tu sistema operativo y seleccionar **Obsidian**. Para abrir archivos Markdown en Obsidian por defecto, configúralo como la aplicación predeterminada para archivos `.md`.

Las imágenes incrustadas y los enlaces a otros archivos locales se resuelven de forma relativa a la carpeta del archivo Markdown. Usa [[Esquema|Esquema]] para navegar por los encabezados y [[Enlaces salientes|Enlaces salientes]] para explorar los archivos enlazados.

### Previsualizar archivos con Quick Look

En macOS, selecciona un archivo Markdown en Finder y presiona `Espacio` para previsualizarlo con **Quick Look**. Las previsualizaciones de Quick Look funcionan incluso cuando Obsidian está cerrado.

## Renombrar una nota

Para renombrar una nota activa:

1. Selecciona el nombre de la nota en la parte superior del editor (o presiona `F2`).
2. Introduce el nuevo nombre y luego presiona `Enter`.

Cuando renombras un archivo, Obsidian actualiza automáticamente todos los enlaces a ese archivo.

Puedes renombrar una nota o carpeta sin abrirla, usando el [[Explorador de archivos#Renombrar un archivo o carpeta|Explorador de archivos]]

## Eliminar una nota

Para eliminar una nota, selecciona **Más opciones → Eliminar archivo** en la esquina superior derecha de una nota activa.

O selecciona **Eliminar archivo actual** desde la [[Paleta de comandos]].

También puedes eliminar una nota o carpeta usando el [[Explorador de archivos#Eliminar un archivo o carpeta|Explorador de archivos]].

> [!note] ¿Qué sucede con los archivos después de eliminarlos?
> Para cambiar lo que sucede con los archivos eliminados, selecciona una de las siguientes opciones en **[[Configuración]] → Archivos y enlaces**:
>
> - **Papelera del sistema**: Por defecto, los archivos eliminados van a la papelera del sistema de tu sistema operativo. Para restaurar un archivo, usa tu gestor de archivos preferido.
> - **Papelera de Obsidian**: Puedes enviar los archivos eliminados a una carpeta `.trash` en tu bóveda.
> - **Eliminar permanentemente**: Los archivos se eliminan inmediatamente sin posibilidad de restaurarlos.
