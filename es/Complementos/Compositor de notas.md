---
permalink: plugins/note-composer
---
El [[Compositor de notas]] es un [[Complementos principales|complemento principal]] que te permite fusionar dos notas o extraer parte de una nota en una nueva nota.

## Fusionar notas

Fusionar notas añade una nota a otra y elimina la primera. El compositor de notas actualiza todos los enlaces para que hagan referencia a la nota fusionada.

Cuando seleccionas la nota con la que fusionar, puedes elegir entre los siguientes métodos:

- `Enter`: Añade la nota de origen al _final_ de la nota de destino.
- `Shift+Enter`: Añade la nota de origen al _inicio_ de la nota de destino.
- `Ctrl+Enter` (o `Cmd+Enter` en macOS): Crea una nueva nota con el contenido de la nota de origen.

Para fusionar la nota activa con otra nota en tu bóveda:

**Explorador de archivos**

1. En el explorador de archivos, haz clic derecho en la nota que deseas fusionar.
2. Haz clic en **Combinar el archivo entero con...**.
3. Selecciona la nota con la que deseas fusionar.
4. Haz clic en **Fusionar** para confirmar.

**Paleta de comandos**

1. Abre la [[Paleta de comandos]].
2. Selecciona **Compositor de notas: Combinar el archivo actual con otro archivo...**.
3. Selecciona la nota con la que deseas fusionar.
4. Haz clic en **Fusionar** para confirmar.

> [!tip] Consejo
> Por defecto, el compositor de notas te pide confirmación al fusionar notas. Si desactivas la confirmación y fusionas una nota por error, aún puedes recuperarla con el complemento de [[Recuperación de archivos]].

## Extraer nota

Cuando seleccionas la nota en la que extraer la selección, puedes elegir entre los siguientes métodos:

- `Enter`: Añade el texto seleccionado al _final_ de la nota de destino.
- `Shift+Enter`: Añade el texto seleccionado al _inicio_ de la nota de destino.
- `Ctrl+Enter` (o `Cmd+Enter` en macOS): Crea una nueva nota con el texto seleccionado.

Para extraer texto en una nueva nota:

**Editor**

1. Mientras estés en la **vista de edición**, selecciona el texto que deseas extraer.
2. Haz clic derecho en el texto seleccionado.
3. Haz clic en **Extraer la selección actual...**.
4. Selecciona la nota en la que deseas extraer.

**Paleta de comandos**

1. Mientras estés en la **vista de edición**, selecciona el texto que deseas extraer.
2. Abre la [[Paleta de comandos]].
3. Selecciona **Compositor de notas: Extraer la selección actual...**.
4. Selecciona la nota en la que deseas extraer.

> [!tip] Consejo
> Por defecto, el compositor de notas reemplaza el texto extraído con un enlace a la nota de destino. En los ajustes, también puedes cambiar para [[Incrustar archivos|incrustar]] la nota de destino, o para no dejar nada en su lugar.

## Archivo de plantilla

Al configurar una plantilla, puedes personalizar el contenido antes de añadirlo a la nueva nota. Para usar una plantilla, introduce una **Ubicación de la plantilla** en los ajustes del complemento.

La plantilla puede contener las siguientes variables:

| Variable          | Descripción                                                                                                                                                          |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | El contenido a fusionar, o el texto seleccionado extraído. Si no incluyes esta variable, el compositor de notas añade el contenido al final de la plantilla.         |
| `{{fromTitle}}`   | Nombre de la nota de origen.                                                                                                                                         |
| `{{newTitle}}`    | Nombre de la nota de destino. Por ejemplo, para añadir el nombre del archivo como encabezado en la parte superior del archivo.                                       |
| `{{date:FORMAT}}` | Fecha de creación de la nueva nota. Por ejemplo, `{{date:YYYY-MM-DD}}`.                                                                                              |
