---
permalink: uri
aliases:
  - Advanced topics/Usando URI de Obsidian
---
URI de Obsidian es un protocolo URI personalizado compatible con Obsidian que te permite activar diversas acciones, como abrir una nota o crear una nota. El URI de Obsidian permite la automatización y flujos de trabajo entre aplicaciones.

## Formato de URI

Los URIs de Obsidian utilizan el siguiente formato:

```
obsidian://action?param1=value&param2=value
```

El parámetro `action` es la acción que deseas realizar. Las acciones disponibles incluyen:

- `open` para abrir una nota.
- `new` para crear o añadir contenido a una nota existente.
- `daily` para crear o abrir tu nota diaria.
- `unique` para crear una nueva nota única.
- `search` para abrir una búsqueda.
- `choose-vault` para abrir el gestor de bóvedas.

> [!warning] Codificación
> Asegúrate de que tus valores estén correctamente codificados para URI. Por ejemplo, los caracteres de barra diagonal `/` deben codificarse como `%2F` y los caracteres de espacio deben codificarse como `%20`.
> 
 Esto es especialmente importante porque un carácter "reservado" codificado incorrectamente puede romper la interpretación del URI. [Consulta aquí para más detalles](https://en.wikipedia.org/wiki/Percent-encoding).

## Abrir nota

La acción `open` abre una bóveda de Obsidian, o abre un archivo dentro de esa bóveda.

### Ejemplos

- `obsidian://open?vault=my%20vault`
  Esto abre la bóveda `my vault`. Si la bóveda ya está abierta, enfoca la ventana.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Esto abre la bóveda identificada por el ID `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Esto abre la nota `my note.md` en la bóveda `my vault`, asumiendo que el archivo existe.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Esto buscará cualquier bóveda que contenga la ruta `/home/user/my vault/path/to/my note`. Luego, el resto de la ruta se pasa al parámetro `file`. Por ejemplo, si existe una bóveda en `/home/user/my vault`, entonces esto sería equivalente al parámetro `file` establecido como `path/to/my note`.


> [!tip] Abrir un encabezado o bloque
> Con la codificación URI adecuada, puedes navegar a un encabezado o bloque dentro de una nota. `Note%23Heading` navegaría al encabezado llamado "Heading", mientras que `Note%23%5EBlock` navegaría al bloque llamado "Block".

### Parámetros

- `vault` puede ser el nombre de la bóveda o el ID de la bóveda[^1].
- `file` puede ser un nombre de archivo, o una ruta desde la raíz de la bóveda hasta el archivo especificado. Si la extensión del archivo es `md`, la extensión puede omitirse.
- `path` una ruta absoluta del sistema de archivos a un archivo.
  - Usar este parámetro anulará tanto `vault` como `file`.
  - Esto hará que la aplicación busque la bóveda más específica que contenga la ruta de archivo especificada.
  - Luego el resto de la ruta reemplaza el parámetro `file`.
- `prepend` añadirá contenido al inicio del archivo e intentará fusionar las propiedades.
- `append` añadirá contenido al final del archivo y también intentará fusionar las propiedades.
- `paneType` (opcional) determina dónde se abrirá la nota en la interfaz.
  - si no está presente, se reemplaza la última pestaña activa.
  - `paneType=tab` abrir en una nueva pestaña.
  - `paneType=split` abrir en un nuevo grupo de pestañas.
  - `paneType=window` abrir en una ventana emergente (solo escritorio).

## Crear nota

La acción `new` crea una nueva nota en la bóveda, opcionalmente con algún contenido.

### Ejemplos

- `obsidian://new?vault=my%20vault&name=my%20note`
  Esto abre la bóveda `my vault`, y crea una nueva nota llamada `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Esto abre la bóveda `my vault`, y crea una nueva nota en `path/to/my note`.

### Parámetros

- `vault` puede ser el nombre de la bóveda, o el ID de la bóveda[^1]. Igual que la acción `open`.
- `name` el nombre del archivo a crear. Si se especifica, la ubicación del archivo se elegirá según tus preferencias de "Ubicación por defecto para nuevas notas".
- `file` una ruta absoluta de la bóveda, incluyendo el nombre. Anulará `name` si se especifica.
- `path` una ruta globalmente absoluta. Funciona de manera similar a la opción `path` en la acción `open`, que anulará tanto `vault` como `file`.
- `paneType` (opcional) determina dónde se abrirá la nota en la interfaz. Igual que la acción `open`.
- `content` (opcional) el contenido de la nota.
- `clipboard` (opcional) usa el contenido del portapapeles en lugar de especificar `content`.
- `silent` (opcional) incluye este parámetro si no quieres abrir la nueva nota.
- `append` (opcional) incluye este parámetro para añadir contenido a un archivo existente si existe uno.
- `overwrite` (opcional) sobrescribe un archivo existente si existe uno, pero solo si `append` no está establecido.
- `x-success` (opcional) ver [[#Usar parámetros x-callback-url]].

## Crear o abrir nota diaria

La acción `daily` crea o abre tu nota diaria. El complemento [[Notas diarias]] debe estar habilitado.

### Ejemplos

- `obsidian://daily?vault=my%20vault`
  Esto abre la bóveda `my vault`, y crea o abre la nota diaria.

### Parámetros

La acción `daily` acepta los mismos parámetros que la acción `new`.

## Nota única

La acción `unique` crea una nueva nota única en la bóveda. El complemento [[Plugins/Unique note creator|Creador de nota única]] debe estar habilitado.

### Ejemplos

- `obsidian://unique?vault=my%20vault`
  Esto abre la bóveda `my vault`, y crea una nueva nota única.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Esto abre la bóveda `my vault`, y crea una nueva nota única con el contenido `Hello World`.

### Parámetros

- `vault` puede ser el nombre de la bóveda, o el ID de la bóveda[^1]. Igual que la acción `open`.
- `paneType` (opcional) determina dónde se abrirá la nota en la interfaz. Igual que la acción `open`.
- `content` (opcional) el contenido de la nota.
- `clipboard` (opcional) usa el contenido del portapapeles en lugar de especificar `content`.
- `x-success` (opcional) ver [[#Usar parámetros x-callback-url]].

## Abrir búsqueda

La acción `search` abre [[Búsqueda]] en la bóveda especificada, y opcionalmente realiza un término de búsqueda.

### Ejemplos

- `obsidian://search?vault=my%20vault`
  Esto abre la bóveda `my vault`, y abre [[Búsqueda]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Esto abre la bóveda `my vault`, abre [[Búsqueda]], y realiza una búsqueda de `Obsidian`.

### Parámetros

- `vault` puede ser el nombre de la bóveda, o el ID de la bóveda[^1]. Igual que la acción `open`.
- `query` (opcional) el término de búsqueda a realizar.

## Abrir el gestor de bóvedas

La acción `choose-vault` abre el [[Gestionar bóvedas|gestor de bóvedas]].

### Ejemplos

- `obsidian://choose-vault`

## Integración con Hook

Esta acción de URI de Obsidian está pensada para usarse con [Hook](https://hookproductivity.com/).

### Ejemplo

`obsidian://hook-get-address`

### Parámetros

- `vault` (opcional) puede ser el nombre de la bóveda, o el ID de la bóveda[^1]. Si no se proporciona, se usará la bóveda actual o la última enfocada.
- `x-success` (opcional) ver [[#Usar parámetros x-callback-url]].
- `x-error` (opcional) ver [[#Usar parámetros x-callback-url]].

Si `x-success` está definido, esta API lo usará como la x-callback-url. De lo contrario, copiará un enlace Markdown de la nota actualmente enfocada al portapapeles, como una URL `obsidian://open`.

## Usar parámetros x-callback-url

Algunos endpoints aceptan los parámetros x-callback-url `x-success` y `x-error`. Cuando se proporcionan, Obsidian proporcionará lo siguiente al callback `x-success`:

- `name` el nombre del archivo, sin la extensión del archivo.
- `url` el URI `obsidian://` para este archivo.
- `file` (solo escritorio) la URL `file://` para este archivo.

Por ejemplo, si Obsidian recibe
`obsidian://.....x-success=myapp://x-callback-url`, la respuesta sería `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Formatos abreviados

Además de los formatos anteriores, hay dos formatos "abreviados" más disponibles para abrir bóvedas y archivos:

1. `obsidian://vault/my vault/my note` es equivalente a `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` es equivalente a `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Solución de problemas

### Registrar el URI de Obsidian

En Windows y macOS, ejecutar la aplicación una vez debería ser suficiente para registrar el protocolo URI de Obsidian en tu computadora.

En Linux, es un proceso mucho más elaborado:

1. Asegúrate de crear un archivo `obsidian.desktop`. [Consulta aquí para más detalles](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Asegúrate de que tu archivo desktop especifique el campo `Exec` como `Exec=executable %u`. El `%u` se usa para pasar los URIs `obsidian://` a la aplicación.
3. Si estás usando el instalador AppImage, puede que necesites desempaquetarlo usando `Obsidian-x.y.z.AppImage --appimage-extract`. Luego asegúrate de que la directiva `Exec` apunte al ejecutable desempaquetado.


[^1]: El ID de la bóveda es el código aleatorio de 16 caracteres asignado a la bóveda, por ejemplo `ef6ca3e3b524d22f`. Este ID es único por carpeta en tu computadora. El ID se puede encontrar abriendo el selector de bóvedas y haciendo clic en "Copiar el identificador de la bóveda" en el menú contextual de la bóveda deseada.
