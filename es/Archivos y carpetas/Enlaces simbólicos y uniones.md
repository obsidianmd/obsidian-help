---
permalink: symlinks
---
Puedes usar [enlaces simbólicos](https://en.wikipedia.org/wiki/Symbolic_link) (symlinks) y [uniones](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) en tu bóveda para almacenar archivos fuera de la bóveda y la [[Cómo Obsidian almacena los datos#Ajustes globales|carpeta del sistema]].

> [!danger] Úsalo bajo tu propio riesgo
> Desaconsejamos encarecidamente el uso de enlaces simbólicos. Al usar enlaces simbólicos y uniones en tu bóveda, corres el riesgo de perder o corromper tus datos, o de que Obsidian se bloquee. Asegúrate de realizar copias de seguridad regulares de tu bóveda y ajustes.

A continuación se detallan algunas limitaciones o problemas de los que somos conscientes y que podrías querer tener en cuenta:

- Los bucles de symlinks no están permitidos, para evitar que Obsidian se bloquee debido a un bucle infinito.
- Los destinos de los symlinks deben ser completamente disjuntos de la raíz de la bóveda o de cualquier otro destino de symlink. Disjunto significa que una carpeta no contiene a otra, o viceversa. Obsidian ignora cualquier symlink a una carpeta padre de la bóveda, o de una carpeta en la bóveda a otra carpeta en la misma bóveda. Es una protección para asegurar que no termines con archivos duplicados en tu bóveda, lo que podría hacer que los enlaces se vuelvan ambiguos.
- Los symlinks pueden no funcionar bien con Obsidian Sync, o con _cualquier otro tipo de sincronización_. Si el destino de un symlink es en sí mismo una carpeta que está sincronizada por una bóveda de Obsidian diferente, podrías (potencialmente) terminar con conflictos de sincronización o pérdida de datos. Algunas herramientas de sincronización, como Git, no siguen los symlinks, sino que sincronizan la _ruta_ a la que apunta el symlink, lo que puede producir resultados indeseados si compartes tu bóveda con otras personas de esa manera.
- El administrador de archivos de Obsidian no puede mover archivos a través de los límites de dispositivos, así que si creas un symlink a una carpeta en una unidad diferente a la de tu bóveda, no podrás arrastrar archivos entre esa carpeta y otras carpetas usando el explorador de archivos de Obsidian. (Necesitarás usar el explorador de tu sistema operativo para tales movimientos, y Obsidian verá el movimiento como una eliminación y la creación de un nuevo archivo. Tampoco _actualizará_ ningún enlace que dependiera de la ruta de ese archivo.)
- Los symlinks de archivos (a diferencia de los symlinks de carpetas) _pueden_ funcionar, pero no están oficialmente soportados en este momento. Los cambios realizados fuera de Obsidian no se monitorizan, así que si cambias el archivo directamente, Obsidian no detectará el cambio, no actualizará los índices de búsqueda, etc.
- Crear symlinks de elementos dentro de la carpeta `.obsidian/` para compartirlos entre bóvedas **tiene una alta probabilidad de corromper tus ajustes**, a menos que _realmente_ sepas lo que estás haciendo. Si decides seguir este camino, al menos ten copias de seguridad.
