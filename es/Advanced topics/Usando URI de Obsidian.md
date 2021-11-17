Obsidian admite un protocolo URI personalizado `obsidian: //` que se puede utilizar para desencadenar varias acciones dentro de la aplicación. Esto se usa comúnmente en MacOS y aplicaciones móviles para automatización y flujos de trabajo entre aplicaciones.

Si tiene Obsidian instalado, este enlace abrirá la aplicación en su dispositivo: [Haga clic aquí](obsidian://open)

## Instalación URI de Obsidian

Para asegurarse de que su sistema operativo redirija los URI de `obsidian://` a la aplicación de Obsidian, puede haber pasos adicionales que deba realizar.

- En Windows, ejecutar la aplicación una vez debería ser suficiente. Esto se registrará para el controlador de protocolo personalizado `obsidian://` en el registro de Windows.
- En MacOS, ejecutar la aplicación una vez debería ser suficiente, sin embargo, su aplicación **debe** ser la versión del instalador 0.8.12 o posterior.
- En Linux, hay un proceso mucho más complicado:
	- Primero, asegúrese de crear un archivo `obsidian.desktop`. [Consulte aquí para obtener más detalles](https://developer.gnome.org/integration-guide/stable/desktop-files.html.en)
	-  Asegúrese de que el archivo de su escritorio especifique el campo `Exec` como` Exec = ejecutable %u`. El `%u` se usa para pasar los URI de `obsidian://` a la aplicación.
	-  Si está utilizando el instalador de AppImage, es posible que deba descomprimirlo usando `Obsidian-x.y.z.AppImage --appimage-extract`. Luego asegúrese de que la directiva `Exec` apunte al ejecutable descomprimido.

## Usar URI de Obsidian

Las URI de Obsidian suelen tener este formato:

```
obsidian://action?param1=value&param2=value
```

- La `action` suele ser la acción que le gustaría realizar.

### Codificación

==Importante==

Asegúrese de que sus valores estén codificados con URI correctamente. Por ejemplo, los caracteres de barra inclinada `/` deben codificarse como `%2F` y los espacios deben codificarse como`%20`.

Esto es especialmente importante porque un carácter "reservado" codificado incorrectamente puede romper la interpretación del URI. [Consulte aquí para obtener más detalles](https://en.wikipedia.org/wiki/Percent-encoding)

### Acciones disponibles

#### Acción `open`

Descripción: abre una bóveda de Obsidian y posiblemente abra un archivo dentro de esa bóveda.

Posibles parámetros:

- `vault` puede ser el nombre de la bóveda o el ID de la bóveda.
- El nombre de la bóveda es simplemente el nombre de la carpeta de la bóveda.
- El ID de la bóveda es el código aleatorio de 16 caracteres asignado a la bóveda. Esta identificación es única por carpeta en su computadora. Ejemplo: `ef6ca3e3b524d22f`. Todavía no hay una manera fácil de encontrar esta identificación, se ofrecerá una en una fecha posterior en el conmutador de bóveda. Actualmente se puede encontrar en `%appdata%/obsidian/obsidian.json` para Windows. Para MacOS, reemplace `%appdata%` con `~/Library/Application Support/`. Para Linux, reemplace `%appdata%` con `~/.config/`.
- `file` puede ser un nombre de archivo o una ruta desde la raíz de la bóveda hasta el archivo especificado.
	- Para resolver el archivo de destino, Obsidian usa el mismo sistema de resolución de enlaces que un `[[wikilink]]` dentro de la bóveda.
	- Si la extensión del archivo es `md`, la extensión se puede omitir.
- `path` una ruta absoluta del sistema de archivos a un archivo.
	- El uso de este parámetro anulará tanto `vault` y `file`.
	- Esto hará que la aplicación busque la bóveda más específica que contenga la ruta de archivo especificada.
	- Cuando el resto del camino reemplaza el parámetro `file`.

Ejemplos de:

- `obsidian://open?vault=my%20vault`
	Esto abre la bóveda `my vault`. Si la bóveda ya está abierta, enfóquese en la ventana.

- `obsidian://open?vault=ef6ca3e3b524d22f`
	Esto abre la bóveda identificada por el ID `ef6ca3e3b524d22f`.

- `obsidian://open?vault=my%20vault&file=my%20note`
	Esto abre la nota `my note` en la bóveda `my vault`, asumiendo que `my note` existe y el archivo es `my note.md`.

- `obsidian://open?vault=my%20vault&file=my%20note.md`
	Esto también abre la nota `my note` en la bóveda `my vault`.

- `obsidian://open?vault=my%20vault&file=path%2Fto%2Fmy%20note`
	Esto abre la nota ubicada en `path/to/my note` en la bóveda `my vault`.

- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
	Esto buscará cualquier bóveda que contenga la ruta. `/home/user/my vault/path/to/my note`. Luego, el resto del camino se pasa al parámetro `file`. Por ejemplo, si existe una bóveda en `/home/user/my vault`, entonces esto sería equivalente a `file` parámetro establecido en `path/to/my note`.

- `obsidian://open?path=D%3A%5CDocuments%5CMy%20vault%5CMy%20note`
	Esto buscará cualquier bóveda que contenga la ruta. `D:\Documents\My vault\My note`. Luego, el resto del camino se pasa al parámetro `file` . Por ejemplo, si existe una bóveda en `D:\Documents\My vault`, entonces esto sería equivalente al parámetro `file` configurado en `My note`.
	
#### Acción `search`

Descripción: abre el panel de búsqueda de una bóveda y, opcionalmente, realiza una consulta de búsqueda.

Posibles parámetros:

- `vault` puede ser el nombre de la bóveda o el ID de la bóveda. Igual que la acción `open`.
- `query` (opcional) La consulta de búsqueda a realizar.

Ejemplos:

- `obsidian://search?vault=my%20vault`
	Esto abre la bóveda `my vault` y abre el panel de búsqueda.
	
- `obsidian://search?vault=my%20vault&query=MOC`
	Esto abre la bóveda `my vault`, abre el panel de búsqueda y realiza una búsqueda de `MOC`.
	
#### Acción `new`

Descripción: crea una nueva nota en la bóveda, opcionalmente con algún contenido.

Posibles parámetros:

- `vault` puede ser el nombre de la bóveda o el ID de la bóveda. Igual que la acción `open`.
- `name` el nombre del archivo que se va a crear. Si se especifica esto, la ubicación del archivo se elegirá en función de sus preferencias de "Ubicación predeterminada para nuevas notas".
- `file` una ruta absoluta de la bóveda, incluido el nombre. Anulará `name` si se especifica.
-`path` un camino globalmente absoluto. Funciona similar a la opción `path` en la acción` open`, que anulará tanto el `vault` como el `file`.
- `content` (opcional) el contenido de la nota.
- `silent` (opcional) configúrelo si no desea abrir la nueva nota.

Ejemplos:

- `obsidian://new?vault=my%20vault&name=my%20note`
	Esto abre la bóveda `my vault`, y crea una nueva nota llamada `my note`.
- `obsidian://new?vault=my%20vault&path=path%2Fto%2Fmy%20note`
	Esto abre la bóveda `my vault`, y crea una nueva nota en `path/to/my note`.
	
#### Acción `hook-get-address`

Descripción: Punto final para usar con [Hook](https://hookproductivity.com/). Copia un enlace Markdown de la nota enfocada actual en el portapapeles, como un `obsidian://open` URL. Usar: `obsidian://hook-get-address`

Posibles parámetros:

- `vault` (opcional) puede ser el nombre de la bóveda o el ID de la bóveda. Si no se proporciona, se utilizará la bóveda enfocada actual o la última.

## Formatos taquigráficos

Además de los formatos anteriores, hay dos formatos más "abreviados" disponibles para abrir bóvedas y archivos:

- `obsidian://vault/my vault/my note` es equivalente a `obsidian://open?vault=my%20vault&file=my%20note`
- `obsidian:///absolute/path/to/my note` es equivalente a `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`