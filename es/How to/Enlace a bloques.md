En Obsidian 0.9.5 o superior, además de[[Enlace interno#Enlace a títulos|encazar a titulos]], también puede vincular a bloques.

### Qué es un bloque

Un "bloque" puede ser un párrafo, una cita en bloque, un elemento de lista, etc. En general, cualquier cosa que tenga líneas vacías antes y después es un bloque. ^dcf64c

### Enlace a bloques

Para vincular a un bloque en un archivo específico, primero escriba `[[filename` para que aparezca una lista de archivos coincidentes. Después de seleccionar un archivo, escriba `^` y continúe escribiendo para buscar bloques a los que enlazar.

Una vez que presione enter, se generará un enlace a ese bloque, en un formato similar a `[[filename#^dcf64c]]`, dónde `dcf64c` es el ID de bloque que se acaba de generar.

Si no está seguro de en qué archivo se encuentra el bloque, otro método es escribir `[[^^` y busque bloques en todos los archivos. Esto buscará en todos los bloques de su bóveda, así que espere un poco de retraso si su bóveda es grande.

Por ejemplo, [[#^dcf64c]] es un enlace a un bloque de arriba.

### Incrustar o transcluir bloques

Similar a [[Incrustar archivos|incrustar archivos]], simplemente puedes usar `!` delante de un enlace de bloque para insertarlo.

He aquí un ejemplo:

![[#^dcf64c]]

### ID de bloque manual

Si desea ID de bloque legibles por humanos, puede poner manualmente `^your-id` después de un bloque. Asegúrese de que haya al menos un espacio si coloca la identificación al final de una línea.

Para hacer referencia a bloques complejos como tablas, coloque el ID del bloque después del bloque y asegúrese de que haya una línea vacía antes y después del ID del bloque.

Después de agregar la ID del bloque manualmente, cuando se refiere a ese bloque, `your-id` se utilizará en lugar de un ID de bloque generado aleatoriamente.

Tenga en cuenta que solo se permiten letras, números y guiones en las ID de bloques manuales.

### Interoperabilidad

Tenga en cuenta que la referencia de bloque no es parte de Markdown estándar, sino más bien el gusto específico de Markdown de Obsidian. Eso significa que estos enlaces no funcionarán fuera de Obsidian.

Todavía puede encontrar el bloque referenciado buscando el ID del bloque, aunque ese es un proceso bastante manual. La conexión no se pierde siempre que tenga un software que pueda buscar en una carpeta.
