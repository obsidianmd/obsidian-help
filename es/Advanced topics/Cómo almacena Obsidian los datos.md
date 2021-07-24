Nosotros creemos [[Obsidian#En qué somos diferentes|que sus datos son siempre suyos para poseer y controlar]]. Sus notas se almacenan en markdown, que es un formato abierto basado en archivos de texto sin formato, por lo que deberían ser legibles en el futuro por cualquier computadora que pueda manejar archivos de texto. Puede editar notas libremente en otro software, incluso mientras las tiene abiertas en Obsidian.

### Datos por bóveda

Sin embargo, hay algunos datos que necesita el software que no se almacenan en Markdown. Obsidian crea un directorio llamado `.Obsidian` en la raíz de cualquier bóveda que cree. Contiene su configuración, incluidas las teclas de acceso rápido personalizadas y los complementos que están habilitados. Cualquier directorio que comience con un  `.` es invisible en la mayoría de los sistemas, por lo que probablemente nunca lo verá a menos que lo intente. Si elimina este directorio, ninguno de sus datos desaparecerá, pero perderá su configuración personalizada. Se volverá a crear cuando vuelvas a abrir esa bóveda en Obsidian. Si esta usando `git`, probablemente sea mejor  `ignorar` el archivo `.Obsidian/workspace` , porque este archivo almacena sus paneles y archivos abiertos, pero no hemos observado ningún otro problema al incluirlo.

### Directorio del sistema

Obsidian también almacena cierta información en el directorio del sistema. Esto es diferente según el sistema operativo; en Mac es  `/Users/yourusername/Library/Application Support/Obsidian`, en Windows `%APPDATA%\Obsidian\`, y  `$XDG_CONFIG_HOME/Obsidian/` o  `~/.config/Obsidian/` en Linux. Como resultado, recomendamos no crear una bóveda en este directorio.

Sin embargo, aparte de eso, puede crear una bóveda en cualquier lugar que su sistema operativo lo permita. Los archivos de Obsidian se sincronizan bien con Dropbox, iCloud, OneDrive, git y todos los demás servicios de sincronización que hemos probado hasta ahora.

### Enlaces simbólicos

A partir de v0.11.1, Obsidian reconocerá enlaces y uniones simbólicos. No recomendamos oficialmente su uso, pero reconocemos que existen casos de uso válidos para ellos. Usélos bajo su propio riesgo.

Tenga en cuenta que existen muchas trampas en el uso de enlaces simbólicos, y algunas de ellas podrían tener consecuencias graves, como la pérdida de datos, la corrupción de archivos o podrían bloquear Obsidian.

A continuación, se muestran algunas limitaciones o problemas que conocemos y que quizás desee tener en cuenta:

- Los bucles de enlace simbólico no están permitidos para evitar que Obsidian se bloquee debido a un bucle infinito.
- Los destinos de enlace simbólico deben estar completamente separados de la raíz de la bóveda o de cualquier otro destino de enlace simbólico. Disjunto significa que una carpeta no contiene otra, o viceversa. Obsidian ignorará cualquier enlace simbólico a una carpeta principal de la bóveda, o de una carpeta en la bóveda a otra carpeta en la misma bóveda. Es una protección para garantizar que no termine con archivos duplicados en su bóveda, lo que podría hacer que los enlaces se vuelvan ambiguos.
- Es posible que los enlaces simbólicos no funcionen bien con la sincronización de Obsidian o _con cualquier otro tipo de sincronización_. Si el destino de un enlace simbólico es en sí mismo un directorio que está sincronizado con una bóveda de Obsidian diferente, podría (potencialmente) terminar con conflictos de sincronización o pérdida de datos. Algunas herramientas de sincronización (por ejemplo, git) no siguen enlaces simbólicos, sino que sincronizan la _ruta_ a la que apunta el enlace simbólico, lo que puede producir resultados no deseados si comparte su bóveda con otras personas de esa manera.
- El administrador de archivos de Obsidian no puede mover archivos a través de los límites del dispositivo, por lo que si enlaza simbólicamente a una carpeta en una unidad diferente de su bóveda, no podrá arrastrar archivos entre esa carpeta y otras carpetas usando el explorador de archivos de Obsidian. (Deberá usar el explorador de su sistema operativo para tales movimientos, y Obsidian verá el movimiento como una eliminación y la creación de un nuevo archivo. _Tampoco_ actualizará ningún enlace que dependa de la ruta de ese archivo).
- Los enlaces simbólicos de archivos (a diferencia de los enlaces simbólicos de carpetas) _pueden_ funcionar, pero no se admiten oficialmente en este momento. Los cambios realizados fuera de Obsidian no se vigilan, por lo que si cambia el archivo directamente, Obsidian no detectará el cambio, actualizará los índices de búsqueda, etc.
- Simbolizar cosas bajo el directorio `.obsidian/`  para compartirlos entre bóvedas **tiene una alta probabilidad de dañar su configuración**, a menos que _realmente realmente_ sepa lo que está haciendo. Si decide ir de esta manera, al menos tenga copias de seguridad.