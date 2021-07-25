El complemento Plantillas le permite insertar rápidamente fragmentos de texto en su nota actual.

### Configurar carpeta de plantillas

Cada fragmento de plantilla es solo una nota de Markdown normal, como todo lo demás en Obsidian.

Para designar archivos de plantilla, colóquelos en una carpeta y elija esa carpeta en Configuración -> Plantillas -> "Ubicación de la carpeta de plantilla" después de habilitar el complemento

### Insertar una plantilla

Después de configurar la ubicación de la carpeta, use el icono de la cinta para insertar la plantilla. Como siempre, también puede configurar una tecla de acceso rápido para esta opción o usar la paleta de comandos para acceder a ella.

El fragmento de plantilla se insertará en la posición de intercalación actual, y el texto especial se reemplazará por su valor real en el momento de la inserción (ver más abajo).

### Insertar título

Si desea insertar el título de una nota, puede configurarlo en una plantilla con  `{{title}}`.

### Insertar fecha y hora
En la configuración del complemento de Plantilla, también puede establecer un formato de fecha y un formato de hora.

Después de configurar estos formatos, `{{date}}` y `{{time}}` en los archivos de plantilla serán reemplazados por el formato de hora actual.

Para formatear la documentación de sintaxis, [por favor mira aquí](https://momentjs.com/docs/#/displaying/format/).

_Sugerencia: si desea tener dos formatos de fecha o dos formatos de hora, puede usar el otro `{{time}}` Como el segundo `{{date}}`, o `{{date}}` Como el segundo `{{time}}`._

### Formatos de fecha única

Además de  `{{date}}` y `{{time}}`, que funcionará en todos los archivos de plantilla, también puede escribir `{{date:YYYY-MM-DD}}` para insertar una fecha con un formato determinado solo una vez. Esto anulará el formato `{{date}}`. Cualquier cosa después `:` willser considerado parte del formato de fecha.

`{{time:HH:mm}}` funciona de manera similar.

### Uso de formatos de fecha personalizados en otros lugares

Actualmente, fechas como `{{date:YYYY-MM-DD}}` y `{{time:HH:mm}}` también funcionan en el archivo de plantilla de las [[Notas diarias]] y complemento [[Prefijo Zettelkasten]]. Sin embargo, `{{date}}` y `{{time}}` aún no funciona.