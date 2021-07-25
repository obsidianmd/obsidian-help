Existen algunas diferencias entre la forma en que funcionan varios PKM y los sistemas de toma de notas, lo que significa que moverse entre ellos puede ser un poco complicado. En su mayor parte, si lo que sea que esté usando se puede convertir en Markdown, funcionará bastante bien dentro de Obsidian. Pero algunas cosas, como las etiquetas y los enlaces, pueden ser complicadas.

En nuestro foro hay un [métodos de recopilación de publicaciones que han desarrollado otras personas](https://forum.obsidian.md/t/meta-post-migration-workflows/768). Ahora mismo, incluye:

- [Importar desde Notion](https://forum.obsidian.md/t/import-from-notion/636)
- [Importar desde Notion (automatizado)](https://forum.obsidian.md/t/notion-2-obsidian-migration-instructions/2728)
- [Importar desde Evernote](https://forum.obsidian.md/t/import-from-evernote/108)
- [Importar desde OneNote](https://forum.obsidian.md/t/new-tool-for-migration-from-onenote-updated-and-improved-version/3055)
- [Importar desde Apple Notes](https://forum.obsidian.md/t/migrate-from-apple-notes-to-obsidian/732)
- [Importar desde Bear](https://forum.obsidian.md/t/import-from-bear-app/2284)
- [Importar desde Zkn3](https://forum.obsidian.md/t/migrating-from-zkn3-to-obsidian-without-losing-your-tags-and-internal-links-documentation/7457)
- [Importar desde TiddlyWiki 5](https://forum.obsidian.md/t/migrate-from-tiddlywiki-5-to-obsidian/731)

Pero si no ve su sistema en esta lista, consulte la publicación del foro, es posible que alguien haya resuelto su problema desde que se redactó este documento.

También es de destacar que los creadores de nvUltra, otro programa de toma de notas basado en rebajas, tienen una lista en su sitio web de [formas de exportar a nvUltra](https://nvultra.com/help/importing). En muchos casos, estos serán los mismos, o al menos un lugar útil para comenzar.


## Herramientas integradas

### De Roam Research

Si tiene datos en Roam, es fácil exportarlos y jugar con ellos en Obsidian.

> 1. Elija "Exportar todo" en el menú:
> ![[Pasted image.png]]

> 2. Haga clic en el botón azul "Exportar todo":
> ![[Pasted image 1.png]]

> 3. Descomprima el "Roam-Export-xxxxxxxxxxxxx.zip" en una carpeta.

> 4. Haga clic en el icono de la bóveda (la información sobre herramientas debe decir "Abrir otra bóveda") en la esquina inferior izquierda de la aplicación y seleccione "Abrir carpeta como bóveda".
> Elija la carpeta en la que acaba de descomprimir.

> 5. Utilice nuestro [[Convertidor de formato Markdown]] para convertir el formato Markdown de Roam Research al formato de Obsidian.
> Se puede usar para convertir `#tag` en Obsidian `[[links]]`.
> También puede convertir `^^highlight^^` en `==highlight==`.


### Desde Bear

Si está importando desde Bear, el complemento [[Convertidor de formato Markdown]] tiene una opción para convertir`::highlight::` to `==highlight==`.

### Usando Zettelkasten

Si ha estado utilizando el método Zettelkasten para estructurar sus notas, aquí hay algo que quizás desee saber:

Los enlaces en Obsidian requieren una coincidencia completa con el nombre de la nota. Esto significa que`[[202001010000]]` no se vinculará correctamente a `[[202001010000 My Note]]`.

Para solucionarlo, puede utilizar nuestro [[Convertidor de formato Markdown]] para convertir sus enlaces de Zettelkasten en `[[202001010000 My Note]]` o `[[202001010000 My Note|My Note]]`.

También podría estar interesado en el complemento [[Prefijo Zettelkasten]].