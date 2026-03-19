---
permalink: backup
---
Si aún no has respaldado tu computadora, ¡comienza ahora! El complemento [[Recuperación de archivos]] de Obsidian es útil pero limitado. Solo puede recuperar una cantidad determinada de datos, y almacena la información de recuperación por dispositivo. Para una protección más robusta, recomendamos que implementes un sistema de respaldo adecuado.

**¿Por qué respaldar tus datos?**

De forma predeterminada, Obsidian almacena tus notas **localmente** en tu dispositivo, no en la nube. Esto significa que los [datos son completamente tuyos](https://obsidian.md/about), dándote control sobre ellos. Sin embargo, el almacenamiento local puede verse afectado por problemas como corrupción o pérdida de datos. Nunca es cuestión de si ocurrirá, sino de cuándo. Respaldar tus datos te protege contra estas inevitabilidades y garantiza que mantengas el control de tus notas.

## La sincronización no es un respaldo

Servicios como [[Introducción a Obsidian Sync|Obsidian Sync]], iCloud, OneDrive y Dropbox te ayudan a sincronizar tus notas entre diferentes dispositivos. Aunque pueden ofrecer funciones como la [[Historial de versiones|restauración de notas]], **no están diseñados para respaldos**. La sincronización mantiene tus notas actualizadas, pero no protege contra la pérdida de datos.

- **Sincronización:** La sincronización asegura que tus archivos sean los mismos en todos los dispositivos. Cuando cambias un archivo en un dispositivo, se actualiza en todos los dispositivos sincronizados. Los servicios de sincronización no tienen un dispositivo "principal".
- **Respaldo:** Un respaldo guarda una copia de tus datos en una ubicación diferente para ayudar a recuperarlos en caso de pérdida o corrupción de datos. Los respaldos no están destinados a actualizaciones en tiempo real ni a colaboración.

Para respaldar correctamente tu bóveda, usa una herramienta de respaldo dedicada que cree una copia unidireccional de tus datos. Esta herramienta enviará tus datos a una ubicación de respaldo segura sin modificar los datos en tu dispositivo.

Si usas múltiples dispositivos con sincronización, elige **un dispositivo** como tu dispositivo de respaldo. Este suele ser tu dispositivo principal o "primario", el que más utilizas. Ten en cuenta que la mayoría de los servicios de sincronización no reconocen ningún dispositivo como "primario"; esto es solo un concepto para ayudarte a gestionar los respaldos.

> [!Example] Usas Obsidian Sync en tu portátil, tableta, teléfono y escritorio de trabajo. Principalmente usas tu bóveda en tu escritorio de trabajo, a veces en tu portátil, y rara vez en tu tableta o teléfono. En este caso, tu escritorio de trabajo sería tu "dispositivo primario" para respaldos.

## Usar complementos de la comunidad

Aunque el equipo de Obsidian no puede respaldar oficialmente ningún complemento específico, reconocemos dos complementos de la comunidad que se han vuelto populares entre los usuarios para respaldar sus archivos:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Usa este complemento para respaldar tu bóveda haciendo commits de su contenido en un [repositorio Git](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). Es una forma efectiva de controlar versiones de tus notas y asegurar su seguridad en un servidor remoto. Sin embargo, ten en cuenta que tus datos pueden almacenarse en una [[#Usar servicios en la nube|plataforma de alojamiento externa]] con este método.
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Este complemento te permite crear copias locales de tu bóveda en una carpeta de tu elección, con opciones de archivado. Incluso puedes usar una carpeta de sincronización, como una carpeta de Dropbox, para combinar respaldos locales y en la nube. Este método **combina bien** con las opciones de respaldo descritas a continuación.

## Usar servicios en la nube

> [!info] No se recomienda mantener la ubicación de tu bóveda en el servicio de respaldo que hayas elegido.

Mantener tu respaldo en la nube es una alternativa y un complemento al almacenamiento físico de datos, en lugar de un disco duro externo o una memoria USB. Un disco duro externo o una memoria USB pueden perderse o dañarse. La mayor ventaja de almacenar archivos en la nube es que están disponibles en cualquier momento y lugar. La desventaja es que la mayoría de los servicios de respaldo pertenecen a una empresa privada.

En términos de seguridad, siempre debes prestar especial atención al acceso y la seguridad con los respaldos en la nube. [Worldbackupday](https://www.worldbackupday.com/en) mantiene una lista actualizada de servicios de respaldo en línea que puedes considerar usar.

## Usar unidades externas

**Discos duros y unidades SSD**
Los respaldos en discos duros externos siguen siendo valiosos en un mundo cada vez más basado en la nube, y se utilizan principalmente para almacenamiento de datos y respaldos de computadoras. La mayor desventaja de una unidad externa es que puede averiarse o perderse. La mayor ventaja es que el espacio de almacenamiento solo necesita comprarse una vez. El uso de un disco duro externo a menudo se combina con un [[#Usar respaldos de computadora|respaldo de computadora]].

**Memorias USB**
Las memorias USB (también llamadas pendrives o memorias flash) son un método simple y efectivo para respaldos rápidos.

1. Inserta la memoria USB en tu computadora o portátil.
2. Asegúrate de que el dispositivo sea reconocido y montado en tu sistema de archivos. Si es necesario, formatea la memoria USB para que sea compatible con tu sistema de archivos.
3. Copia la carpeta de tu bóveda desde su ubicación actual a la memoria USB.
4. Desmonta la memoria USB de forma segura.
5. Retira la memoria USB de tu dispositivo.

**Respaldo en NAS**
Para usuarios experimentados, respaldar datos en un servidor NAS (Network Attached Storage) es un método bueno y seguro, ya que cuenta con múltiples discos duros y mecanismos de recuperación adicionales.

> [!tip] Si tu unidad externa contiene información sensible, se recomienda mantener la unidad externa segura, como en una habitación protegida.

## Usar respaldos de computadora

Tu propio sistema operativo ofrece la capacidad de ayudar a crear respaldos, ya sea en línea en la nube o en una unidad externa.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Respaldo con OneDrive o una unidad externa.
- **[Mac](https://support.apple.com/en-us/104984)**: Respaldo a un dispositivo externo con Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` a un directorio o unidad de tu elección.

## Próximos pasos

Esta página de ayuda proporciona una breve descripción general de las opciones de respaldo, pero no es exhaustiva. Para información más detallada, visita [Worldbackupday.com](https://www.worldbackupday.com/en) o pregunta a otros usuarios de Obsidian en [nuestra comunidad](https://obsidian.md/community) sobre sus estrategias de respaldo.
