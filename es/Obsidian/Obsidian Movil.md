# Obsidian para Android

La aplicación de Android se encuentra actualmente en [[Beta de la aplicación móvil|beta cerrada]], y está disponible como APK firmado.

## ¿Cómo sincronizo mis datos?

Obsidian para Android almacena todas las bóvedas en la carpeta de documentos públicos de su dispositivo de forma local. Puede optar por utilizar [[Obsidian Sync]] para sincronizar sus archivos o utilizar cualquier proveedor de sincronización de terceros que pueda optar por sincronizar con la carpeta de documentos públicos.

### Obsidian Sync

Al igual que con el escritorio Obsidian, ofrecemos nuestro sistema de pago integrado [[Obsidian Sync]].

Para configurar una bóveda sincronizada a través de Obsidian Sync, primero cree una nueva bóveda local vacía. Una vez que la bóveda vacía esté abierta, abra la barra lateral izquierda, toque el botón de configuración y configure Obsidian Sync como lo hizo en el escritorio:

1. Inicie sesión en su cuenta de Obsidian en la pestaña Cuenta.
2. Habilite el complemento Sync core.
3. Elija la bóveda remota con la que sincronizar.
4. Mantenga la aplicación abierta hasta que todos sus archivos se hayan sincronizado.

Para ver el estado de sincronización de Obsidian Sync, deslice el dedo para sacar el cajón derecho y debería ver el indicador de estado tal como se muestra en la aplicación de escritorio. Toque para obtener más información, como ver el registro de sincronización para depurar cualquier problema.

Nota: si utiliza Obsidian Sync junto con un servicio de sincronización de terceros, asegúrese de excluir `.obsidian/sync.json` en su sincronización de terceros para evitar romper Obsidian Sync. Este archivo se utiliza para realizar un seguimiento del estado de sincronización del dispositivo local y puede causar problemas cuando se sincroniza accidentalmente.

### Sincronización de terceros

También puede usar su solución de sincronización preferida para mantener la carpeta local en su teléfono sincronizada con otros dispositivos.

Hay aplicaciones en Play Store que le permiten sincronizar una carpeta en su teléfono con otros dispositivos, por ejemplo [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) o [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

Sin embargo, no hemos probado estas soluciones. Si tiene éxito o experiencia con alguno de ellos, háganoslo saber para que podamos proporcionar la información en esta página.

## ¿Dónde se almacenan mis bóvedas?

En Android, la carpeta de inicio de Obsidian se almacena en la carpeta de documentos públicos en `Documents/Obsidian`. La carpeta pública `Documents` normalmente se almacena en una tarjeta SD o en un almacenamiento emulado.

Cualquier carpeta de esta carpeta de inicio se considerará una bóveda. Si sincroniza o copia una carpeta de la bóveda en este directorio, se puede reconocer cuando abre Obsidian.

# Obsidian para iOS

La aplicación de iOS se encuentra actualmente en [[Beta de la aplicación móvil|beta cerrada]], y está disponible a través de TestFlight.

## ¿Cómo sincronizo mis datos?

Obsidian para iOS puede almacenar su bóveda en iCloud o localmente. Las dos soluciones de sincronización probadas y recomendadas actualmente son iCloud y Obsidian Sync.

Cualquier proveedor de sincronización de terceros que pueda proporcionar sincronización en segundo plano para una carpeta específica en su dispositivo también debería poder funcionar, pero no tenemos conocimiento de ninguno. Esto se debe a las limitaciones del mecanismo altamente complejo de compartir archivos entre aplicaciones en iOS, a diferencia de Android, que proporciona una carpeta pública a la que pueden acceder todas las aplicaciones. Debido a esto, la mayoría de los proveedores de sincronización de terceros no tienen una implementación adecuada para la sincronización en segundo plano en iOS.

### Sincronización de Obsidian

Puede seguir los mismos pasos que la sincronización de Android como se muestra a continuación, asegurándose de crear una carpeta que no sea de iCloud, ya que no recomendamos usar Obsidian Sync y iCloud Sync simultáneamente, que se ha informado que causa pérdida de datos debido a las condiciones de la carrera.

![[#Obsidian Sync]]

### iCloud Drive Sync

Para configurar una bóveda sincronizada a través de iCloud Drive, primero debe instalar y abrir la aplicación Obsidian iOS. Esto creará una carpeta de aplicaciones llamada "Obsidian" debajo de tu iCloud Drive, con un logotipo de la aplicación Obsidian. Tenga en cuenta que iCloud considera que esta carpeta es una carpeta especial y es diferente a una carpeta que crea manualmente dentro de su iCloud Drive.

A continuación, en su computadora, mueva la carpeta de la bóveda a `iCloud Drive/Obsidian/`. Hacerlo permitirá que Obsidian lea la carpeta de la aplicación especial en su iCloud Drive.

Deje que iCloud sincronice toda la carpeta de la bóveda, luego, en su dispositivo móvil, abra la aplicación Obsidian. Ahora debería ver la bóveda que acaba de instalar, junto con un icono de nube que indica que está almacenado en iCloud.

La primera vez que abra esa bóveda, Obsidian podría congelarse por un tiempo porque iCloud está descargando todos los archivos en segundo plano. Finalmente, una vez que iCloud termine de sincronizar todo con el teléfono, la aplicación debería funcionar sin problemas. Sin embargo, esto puede requerir que reinicie la aplicación varias veces.

### Copia de trabajo

Alternativamente, puede configurar Working Copy para usar Git para sincronizar su bóveda en iOS. Para hacer esto, primero debe crear una bóveda local vacía en su dispositivo, luego puede "Configurar sincronización de carpetas" y seleccionar una bóveda local dentro de la aplicación Obsidian. Luego, puede confirmar y enviar manualmente.

## ¿Dónde se almacenan mis bóvedas?

Si elige almacenar su bóveda en iCloud, entonces se almacena en un contenedor en su cuenta de iCloud Drive, en una carpeta de aplicaciones llamada "Obsidian", que debe tener un icono de nuestro logotipo.

Si elige no usar iCloud, su bóveda se almacenará en el sistema de archivos de espacio aislado de la aplicación Obsidian. A partir de la versión 0.0.14, ahora se puede acceder a la bóveda local desde cualquier otra aplicación que admita la selección de una carpeta del sistema de archivos. Como tal, aplicaciones como Working Copy se pueden usar para sincronizar con las bóvedas locales de Obsidian.

Actualmente, Obsidian no admite directamente proveedores de sincronización de terceros que exponen un sistema de archivos virtual a través de FileProvider todavía. Intentaremos esto en el futuro como una mejora.

# Soporte de sincronización de terceros

Muchos usuarios preguntan por qué Obsidian for Mobile no es compatible con su solución de sincronización preferida. Aquí hay una breve explicación sobre el estado actual de la compatibilidad con la sincronización móvil.

Lo que tiene Obsidian que es diferente de otras aplicaciones como 1Writer e iA Writer es que Obsidian funciona sobre una bóveda en lugar de una sola nota. Muchas de las funciones básicas de Obsidian dependen de toda la bóveda y de todos los archivos que contiene, como el enlace de autocompletar, la incrustación de imágenes, el panel de etiquetas, los Backlinks y toda la funcionalidad de notas cruzadas.

Por el contrario, la mayoría de las aplicaciones de edición de Markdown simplemente "abren" una sola nota, dejan que el usuario realice ediciones y luego guardan la nota. Debido a esto, el sistema operativo y los proveedores de sincronización de terceros generalmente solo proporcionan una API para acceder / trabajar con un solo archivo, pero no tanto para trabajar con una bóveda (carpeta de archivos con posibles subcarpetas).

Para la sincronización, una aplicación de edición Markdown normal puede simplemente implementar el "archivo de descarga cuando abra un archivo seleccionado" y "cargar el archivo cuando presione guardar". Obsidian tiene que descargar toda la bóveda para que sea útil y realizar un seguimiento de todos los archivos modificados (como, por ejemplo, cuando realiza un cambio de nombre de archivo, podríamos actualizar un montón de otros archivos para los enlaces que han cambiado debido al cambio de nombre). Además de eso, necesitamos una forma de monitorear los cambios a través de la solución de sincronización para poder actualizar nuestros cachés internos cuando los archivos cambian, para proporcionar enlaces precisos.

Mantener todo eso sincronizado con un proveedor de sincronización de terceros sería bastante tedioso, y esta es en realidad parte de la razón por la que la mayoría de los proveedores de sincronización no crean un cliente de sincronización adecuado para dispositivos móviles y tienes que usar una aplicación de terceros (como DropSync o FolderSync) para hacerlo. Desafortunadamente, estas aplicaciones no existen en iOS debido al sandboxing de aplicaciones.