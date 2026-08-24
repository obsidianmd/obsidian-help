---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian te permite migrar notas desde un grafo de Logseq basado en archivos (ahora llamado "Logseq OG") utilizando el [[Importador|complemento Importador]] oficial. El Importador lee directamente los archivos Markdown de Logseq y convierte el formato específico de Logseq en archivos duraderos que puedes usar sin conexión con Obsidian y otras aplicaciones.

## Antes de comenzar

- Respalda tu grafo de Logseq y tu bóveda de Obsidian.
- Localiza la carpeta raíz de tu grafo de Logseq. Normalmente contiene carpetas llamadas `pages`, `journals`, `assets` y `logseq`.
- Asegúrate de estar usando un grafo de Logseq basado en archivos. Los grafos de base de datos de Logseq aún no son compatibles.

## Importar tu grafo de Logseq

Necesitas el complemento oficial [[Importador]] de Obsidian, que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]] → Complementos creados por la comunidad** e [instala Importador](obsidian://show-plugin?id=obsidian-importer).
2. Activa el complemento Importador.
3. Abre **Importador** usando la [[Paleta de comandos]] o el icono de la barra de herramientas.
4. En **Formato**, selecciona **Logseq**.
5. En **Elegir carpeta**, selecciona la carpeta raíz de tu grafo. Selecciona la carpeta que contiene `pages` y `journals`, no ninguna de esas carpetas individualmente.
6. Revisa las carpetas detectadas y excluye las que no quieras importar.
7. Elige una carpeta de salida y dónde se deben almacenar los adjuntos importados.
8. Revisa las opciones de importación y previsualiza ejemplos de las notas convertidas.
9. Selecciona **Importar** y espera a que termine la importación.

## Limitaciones

- Las pizarras no se importan.
- Las consultas se conservan como bloques de código si eliges mantenerlas.
- Las macros de plantillas dinámicas de Logseq permanecen como texto literal.
- La programación de tarjetas de estudio, las anotaciones de PDF y otros datos específicos de la aplicación de Logseq no se migran.

## Ajustes

El Importador convierte las convenciones comunes de Logseq, incluyendo:

- Propiedades de página en [[Propiedades]] de Obsidian.
- Alias de página, etiquetas, espacios de nombres y enlaces.
- Estados de flujo de trabajo en marcadores de lista con casillas de verificación, con prioridades y fechas preservadas como texto legible.
- IDs de bloque, referencias de bloque e incrustaciones de bloque en enlaces e incrustaciones de Obsidian.
- Nombres de archivo de diario y enlaces de fecha.
- Resaltados, listas numeradas, bloques Org, incrustaciones de medios y archivos vinculados desde la carpeta `assets` del grafo.

### Diarios

De forma predeterminada, **Usar ajustes de notas diarias** está habilitado. Los diarios importados usan la carpeta y el formato de fecha configurados por el complemento principal [[Notas diarias]]. Esto puede colocar los diarios fuera de la carpeta de salida seleccionada en el Importador.

Si desactivas esta opción, los diarios se escriben en una carpeta `Journals` dentro de la carpeta de salida seleccionada y usan el formato de nombre de nota `YYYY-MM-DD`.

### Aplanar esquemas

Logseq usa viñetas anidadas como estructura de una página. De forma predeterminada, el Importador preserva esta estructura de esquema. Activa **Aplanar esquemas** para convertir los bloques de esquema en una combinación de párrafos, encabezados y listas convencionales. Las tareas y los grupos de elementos similares a listas permanecen como elementos de lista, pero la conversión es heurística. Revisa varios ejemplos en la vista previa antes de importar un grafo grande.

### Preservar datos incompatibles

Las consultas, tarjetas de estudio y entradas de seguimiento de tiempo de Logseq no tienen equivalentes directos en Obsidian. Las opciones de importación te permiten elegir si mantener cada tipo de contenido. Cuando se mantiene, permanece como texto sin formato.

- **Mantener consultas** preserva las consultas como bloques de código delimitados o código en línea.
- **Mantener tarjetas de estudio** preserva los marcadores `#card` y los contenedores de cloze como texto sin formato.
- **Mantener seguimiento de tiempo** preserva las entradas `LOGBOOK` y `CLOCK` como texto sin formato.

## Plantillas

Usa [[Plantillas del importador|plantillas del Importador]] para configurar completamente cómo se importan tus datos de Logseq.

![[Plantillas del importador#Variables]]

## Solución de problemas

Si el Importador no encuentra ninguna nota, asegúrate de haber seleccionado la carpeta raíz del grafo y de que las carpetas de páginas o diarios configuradas contengan archivos Markdown.

Si se reporta un adjunto como faltante, confirma que el archivo referenciado aún existe en la carpeta `assets` del grafo.

Para otros problemas, busca en el [rastreador de problemas del Importador](https://github.com/obsidianmd/obsidian-importer/issues) o envía un informe de error con un grafo de ejemplo pequeño.
