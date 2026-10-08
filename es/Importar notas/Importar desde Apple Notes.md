---
permalink: import/apple-notes
cssclasses:
  - soft-embed
---
Obsidian te permite migrar fácilmente tus notas desde Apple Notes utilizando el [[Importador|complemento Importador]]. Esto convierte tus datos de Apple Notes a archivos Markdown duraderos que puedes usar con Obsidian y muchas otras aplicaciones.

Actualmente, el Importador solo admite la migración desde Apple Notes en macOS. Aún no está disponible en iOS.

## Importar datos de Apple Notes a Obsidian

Necesitarás el complemento oficial de Obsidian [[Importador]], que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importador](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importador.
4. Abre el complemento **Importador** usando la paleta de comandos o el icono del menú de cinta.
5. En **Formato de archivo** elige **Apple Notes**.
6. Selecciona **Importar**.
7. Selecciona **Abrir** en la ventana emergente titulada `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Revisa la plantilla generada y previsualiza ejemplos de tus notas.
9. Selecciona **Importar** y espera a que la importación finalice.

## Personalizar las notas importadas

Antes de que comience la importación, el Importador muestra una vista previa generada a partir de tu selección de Apple Notes. Puedes editar la plantilla generada, las propiedades y el nombre de la nota, o elegir una plantilla Markdown de tu bóveda. Consulta [[Plantillas del Importador]].

## Contenido compatible

El complemento Importador de Obsidian admite prácticamente todos los tipos de contenido de Apple Notes. Esto incluye tablas, imágenes, dibujos, escaneos, PDFs y enlaces introducidos en iOS 17.

> [!Warning]
> Las notas protegidas con contraseña están cifradas por Apple, por lo que deben desbloquearse antes de importarlas. Cualquier nota bloqueada será omitida.

### Escaneos

Apple almacena los escaneos en una variedad de formatos dependiendo de cómo fueron creados. Para preservar los datos originales, esto significa que se exportarán de manera diferente.

* Los escaneos creados o visualizados en versiones anteriores de macOS o iOS se exportarán como una serie de imágenes sin recortar.
* Los escaneos creados o visualizados en versiones más recientes de macOS o iOS generalmente se exportarán como imágenes recortadas.
* Los escaneos que han sido editados usando las funciones introducidas en iOS 17 generalmente se exportarán como PDFs.

## Plantillas

Usa [[Plantillas del Importador|Plantillas del Importador]] para configurar completamente cómo se importan tus datos de Apple Notes.

![[Plantillas del Importador#Variables]]

Además, Apple Notes proporciona la siguiente variable.

| Variable       | Descripción                      |
| -------------- | -------------------------------- |
| `{{isPinned}}` | Si la nota está fijada o no. |
