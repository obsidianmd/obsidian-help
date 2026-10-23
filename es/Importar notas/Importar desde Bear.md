---
permalink: import/bear
cssclasses:
  - soft-embed
---
Obsidian te permite migrar fácilmente tus notas desde Bear usando el [[Importador|complemento Importador]]. Esto convierte tus datos de Bear a archivos Markdown duraderos que puedes usar con Obsidian y muchas otras aplicaciones.

## Exportar tus datos desde Bear

Obsidian puede utilizar los formatos de copia de seguridad de Bear `.bear2bk` o `ApplicationData.zip`.

### iOS

1. Abre Bear.
2. Ve a **Settings** → **Advanced** → **Share Application Data**.
3. Elige una ubicación para tu archivo de copia de seguridad.
4. Ahora deberías tener un archivo `ApplicationData.zip` que contiene todas tus notas.

### macOS

1. Abre Bear.
2. Ve a **File** → **Backup notes**.
3. Elige una ubicación para tu archivo de copia de seguridad.
4. Haz clic en **Export notes**.
5. Ahora deberías tener un archivo `.bear2bk` que contiene todas tus notas.

## Importar tus datos de Bear a Obsidian

Necesitarás el complemento oficial de Obsidian [[Importador]], que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importer.
4. Abre el complemento **Importer** usando la paleta de comandos o el icono del menú de cinta.
5. En **Formato de archivo** elige **Bear (.bear2bk, .zip)**.
6. Selecciona la ubicación de tu archivo de copia de seguridad de Bear.
7. Selecciona **Importar** para revisar la plantilla generada y previsualizar ejemplos de tus notas.
8. Selecciona **Importar** de nuevo y espera a que la importación finalice.

## Plantillas

Usa [[Plantillas del importador|plantillas de Importer]] para configurar completamente cómo se importan tus datos de Bear.

![[Plantillas del importador#Variables]]
