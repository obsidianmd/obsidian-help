---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian te permite migrar notas desde Tomboy y Gnote utilizando el [[Importador|complemento Importador]] oficial. El Importador lee directamente los archivos `.note` de las aplicaciones y convierte su contenido XML a Markdown.

## Localiza tus archivos de notas

Tomboy y Gnote normalmente almacenan las notas en estas carpetas:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` o `~/.local/share/gnote`

La ubicación exacta puede variar si moviste la carpeta de datos o usas una versión diferente de la aplicación.

## Importa tus notas de Tomboy o Gnote

1. Abre **[[Configuración]] → Complementos creados por la comunidad** e [instala el Importador](obsidian://show-plugin?id=obsidian-importer).
2. Activa el complemento Importador.
3. Abre el **Importador** usando la [[Paleta de comandos]] o el icono de la barra de herramientas.
4. En **Formato de archivo**, selecciona **Tomboy/Gnote (.note)**.
5. Elige archivos `.note` individuales o la carpeta que los contiene.
6. Revisa las opciones de importación, la plantilla generada y los ejemplos de vista previa.
7. Selecciona **Importar** y espera a que la importación finalice.

## Plantillas

Usa las [[Plantillas del importador|Plantillas del importador]] para configurar completamente cómo se importan tus datos.

![[Plantillas del importador#Variables]]
