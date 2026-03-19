---
permalink: import/apple-notes
---
Obsidian te permite migrar fácilmente tus notas desde Apple Notes utilizando el [[Importador|complemento Importador]]. Esto convertirá tus datos de Apple Notes a archivos Markdown duraderos, que puedes usar con Obsidian y muchas otras aplicaciones.

Actualmente, el Importador solo admite la migración desde Apple Notes en macOS. Aún no está disponible en iOS.

## Importar datos de Apple Notes a Obsidian

Necesitarás el complemento oficial de Obsidian [[Importador]], que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importador](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importador.
4. Abre el complemento **Importador** usando la paleta de comandos o el icono del menú de cinta.
5. En **Formato de archivo** elige **Apple Notes**.
6. Haz clic en **Importar**.
7. Haz clic en **Abrir** en la ventana emergente que aparece titulada `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Espera hasta que la importación se complete.
9. ¡Listo!

## Contenido compatible

El complemento Importador de Obsidian admite prácticamente todos los tipos de contenido de Apple Notes. Esto incluye tablas, imágenes, dibujos, escaneos, PDFs y enlaces introducidos en iOS 17.

> [!Warning]
> Las notas protegidas con contraseña están cifradas por Apple, por lo que deben desbloquearse antes de importarlas. Cualquier nota bloqueada será omitida.

### Escaneos

Apple almacena los escaneos en una variedad de formatos dependiendo de cómo fueron creados. Para preservar los datos originales, esto significa que se exportarán de manera diferente.

* Los escaneos creados o visualizados en versiones anteriores de macOS o iOS se exportarán como una serie de imágenes sin recortar.
* Los escaneos creados o visualizados en versiones más recientes de macOS o iOS generalmente se exportarán como imágenes recortadas.
* Los escaneos que han sido editados usando las funciones introducidas en iOS 17 generalmente se exportarán como PDFs.

## Métodos de exportación alternativos

Apple no proporciona una opción nativa para exportar tus notas. Sin embargo, existen varias herramientas de terceros como [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) de Chintan Ghate. Ten en cuenta que la mayoría de las herramientas son limitadas en cuanto a los datos que exportarán de Apple Notes y podrían no proporcionar los datos de salida más compatibles. Estas herramientas funcionan mejor si tus notas de Apple Notes son principalmente de solo texto, y tienen pocos adjuntos o funciones especiales como dibujos y escaneos.

Dependiendo de la herramienta que hayas utilizado, la exportación puede estar en formato Markdown o formato HTML. Sigue las instrucciones según el formato de archivo al que exportaste:

- [[Importar archivos HTML]]
- [[Importar archivos Markdown]]
