---
permalink: import/google-keep
---
Obsidian te permite migrar fácilmente tus notas desde Google Keep usando el [[Importador|complemento Importador]]. Esto convertirá tus datos de Google Keep a archivos Markdown duraderos, que puedes usar con Obsidian y muchas otras aplicaciones.

## Exportar tus datos de Google Keep

1. Ve a [Google Takeout](https://takeout.google.com/settings/takeout) e inicia sesión en tu cuenta de Google.
2. Haz clic en **Deseleccionar todo** en la esquina superior derecha.
3. Desplázate hacia abajo y selecciona **Keep** de la lista.
4. Desplázate hasta el final de la página y haz clic en **Siguiente paso**.
5. En la siguiente pantalla, haz clic en el botón **Crear exportación**.
6. Descarga el archivo `.zip` una vez que esté disponible.

## Importar tus datos de Google Keep a Obsidian

Necesitarás el complemento oficial de Obsidian [[Importador]], que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importador](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importador.
4. Abre el complemento **Importador** usando la paleta de comandos o el icono del menú de cinta.
5. En **Formato de archivo** elige **Google Keep (.zip).**
6. Selecciona la ubicación de tu archivo `.zip`.
7. Haz clic en **Importar** y espera hasta que la importación se complete.
8. ¡Listo!

### Características soportadas

- Todas las listas de verificación se importarán como elementos de nivel superior porque Google Keep no exporta información de sangría.
- Los recordatorios y las asignaciones de usuarios en las notas no se importarán porque estas características no son soportadas por Obsidian.
- Toda la demás información debería importarse como una combinación de contenido y etiquetas.
