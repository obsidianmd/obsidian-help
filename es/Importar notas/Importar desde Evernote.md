---
permalink: import/evernote
---
Obsidian te permite migrar fácilmente tus notas desde Evernote usando el [[Importador|complemento Importador]]. Esto convertirá tus datos de Evernote a archivos Markdown duraderos, que puedes usar con Obsidian y muchas otras aplicaciones.

## Exportar tus datos desde Evernote

Obsidian utiliza el formato de exportación de Evernote, archivos `.enex`.

Puedes encontrar las instrucciones de Evernote para exportar tus datos [en el sitio web de Evernote](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Este método te permite exportar cuadernos completos en el cliente de escritorio.

1. Ve a la pantalla de Cuadernos.
2. Haz clic en **Más acciones** ( `•••` ) y elige **Exportar cuaderno...**
3. Selecciona **ENEX** como formato de archivo.
3. Elige una ubicación para tu archivo `.enex` exportado.

## Importar tus datos de Evernote a Obsidian

Necesitarás el complemento oficial [[Importador]] de Obsidian, que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importador](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importador.
4. Abre el complemento **Importador** usando la paleta de comandos o el icono del menú de cinta.
5. En **Formato de archivo** elige **Evernote (.enex)**.
6. Selecciona la ubicación de tu archivo de respaldo de Evernote.
7. Haz clic en **Importar** y espera hasta que la importación se complete.
8. ¡Listo!

## Opciones avanzadas de importación

### Mantener la jerarquía de etiquetas

La exportación de Evernote no conserva la jerarquía de etiquetas. Para mantener tu jerarquía de etiquetas, puedes "aplanar" las etiquetas separándolas con "/". Por ejemplo, suponiendo que tienes la siguiente estructura de etiquetas:

```
EtiquetaPadre
    EtiquetaHija
```

Lo que necesitas hacer para mantener las etiquetas relacionadas en Obsidian es:

1. Haz clic derecho en la EtiquetaHija.
2. Selecciona "Renombrar."
3. Renómbrala como `EtiquetaPadre/EtiquetaHija`.

### Manejo de pilas de cuadernos

Dado que el proceso de exportación se limita a cuadernos individuales, el archivo de exportación predeterminado carece de información sobre las pilas de cuadernos. Sin embargo, el importador puede reconocer patrones en el nombre del archivo enex para recrear las pilas de cuadernos como carpetas.

Suponiendo que tienes un cuaderno llamado ```CuadernoA``` en una pila llamada ```Pila1```, puedes recrear una pila de cuadernos renombrando el archivo enex a ```Pila1@@@CuadernoA```.

Esto resulta en que las notas convertidas se generan dentro de la carpeta Pila1/CuadernoA.

### Más opciones

Para opciones de importación más avanzadas desde Evernote, también puedes probar [importar mediante Yarle](https://github.com/akosbalasko/yarle).
