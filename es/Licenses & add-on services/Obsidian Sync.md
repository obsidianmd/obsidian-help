Obsidian Sync™ es un servicio pago para sincronizar notas entre bóvedas en varios dispositivos.

### Cómo funciona Obsidian Sync

Obsidian Sync es bastante simple: una vez que conecte las bóvedas locales desde varios dispositivos a la misma bóveda remota, los cambios se sincronizarán automáticamente entre estas bóvedas locales, excepto los archivos y carpetas que le indique a Obsidian que ignore.

### Características

Actualmente, Obsidian Sync presenta:

- Cifrado de extremo a extremo
- Historial de versiones integrado en Obsidian
- Ver archivos eliminados
- Sincronización selectiva
	- Excluir ciertas carpetas
	- Alternar la sincronización de imágenes, audio, video y archivos PDF
- Cambiar entre múltiples bóvedas remotas

En el futuro, mejoraremos Obsidian Sync con:

- Compartir bóveda
- Sincronice las configuraciones de `.obsidian` si lo desea (para sincronizar complementos y temas)


### Habilitar el complemento Obsidian Sync

En Obsidian v0.9.21 o superior, puede habilitar Obsidian Sync habilitando el complemento "Sincronizar" en Configuración → Complementos principales.

### Configuración de bóvedas remotas

Advertencia: no recomendamos utilizar servicios de sincronización de terceros para sincronizar la misma bóveda con Obsidian Sync.
[[#Third party sync|More about this later]].

Para comenzar a sincronizar, primero debe crear una bóveda remota que almacene sus datos cifrados.

Para hacer eso, vaya a Configuración → Sincronización → Elegir bóveda remota → Elegir → Crear nueva bóveda.

Después de crearlo, puede conectarse inmediatamente a la bóveda haciendo clic en el botón "Conectar" al lado.

Puede elegir comenzar a sincronizar inmediatamente después de conectarse o elegir carpetas para ignorar.

##### Establecer contraseña de cifrado

De forma predeterminada, debe establecer una contraseña de cifrado para su bóveda. Esta contraseña se utiliza para cifrar y descifrar sus datos y es extremadamente importante.

Se le pedirá la contraseña cada vez que configure la sincronización con una bóveda cifrada. ==Si olvida o pierde la contraseña, sus datos permanecerán encriptados e inutilizables para siempre. No podemos recuperar su contraseña ni ningún dato cifrado por usted.== Sus archivos locales no se ven afectados.

También puede optar por desactivar la opción "Contraseña personalizada de un extremo a otro" para dejarnos la gestión de la clave de cifrado. Esto sigue siendo bastante seguro y ofrece la comodidad de no tener que recordar una contraseña.

### Verificar el estado de la sincronización

Después de conectarse a una bóveda remota, puede verificar el estado de sincronización actual en la barra de estado inferior. Puede colocar el cursor sobre el ícono de estado para leer más sobre lo que está sucediendo.

Al hacer clic en el icono de estado, se abrirá la configuración de sincronización como un acceso directo.

### Historial de versiones

A medida que edita sus notas, las versiones se guardan aproximadamente cada 10 segundos. ==El historial de versiones solo está disponible para notas, no para archivos adjuntos.==

Puede hacer clic con el botón derecho en un archivo en el panel del explorador de archivos para ver su historial de versiones. Esta opción también está disponible en el menú de más opciones.

Después de seleccionar una versión en la columna de la izquierda en la pantalla del historial de versiones, puede restaurar el archivo a esta versión haciendo clic en el botón "Restaurar".

### Archivos eliminados

Después de eliminar un archivo, puede verlo en Configuración → Sincronizar → Archivos eliminados → Ver.

Al hacer clic en un archivo eliminado, se abrirá su historial de versiones. A continuación, puede optar por restaurar el archivo a una versión anterior.

### Sincronización selectiva

Puede sincronizar archivos de forma selectiva por carpeta o tipo de archivo. ==La sincronización selectiva solo se aplica a cambios futuros. Los archivos que ya se hayan cargado no se eliminarán incluso si elige ignorarlos. Asegúrese de configurarlo antes de iniciar el proceso de sincronización.==

##### Excluir carpetas

Puede desmarcar las carpetas en Configuración → Sincronizar → Carpetas excluidas → Administrar para evitar que se sincronicen.

Las carpetas excluidas se ignorarán cuando se modifiquen tanto la carga como la descarga.

#### Tipos de archivo

Puede alternar la sincronización de imágenes, audio, video y archivos PDF en Configuración → Sincronización → Sincronización selectiva.


### Sincronización de terceros

Si está utilizando Obsidian Sync, no recomendamos utilizar servicios de sincronización de terceros como Dropbox, Google Drive, OneDrive o iCloud para sincronizar la misma bóveda entre los mismos dispositivos utilizando Obsidian Sync. Si lo hace, puede causar conflictos, archivos duplicados o, en el peor de los casos, podría provocar archivos corruptos.

Si configura Obsidian Sync y un servicio de sincronización de terceros para sincronizar una bóveda entre dos dispositivos, ocurrirá lo siguiente:
- Si Obsidian Sync "gana" la carrera y sincroniza su archivo primero, su servicio de sincronización de terceros generará una "copia en conflicto".
- Si su servicio de sincronización de terceros "gana" la carrera y sincroniza su archivo primero, entonces Obsidian Sync intentará fusionar las dos versiones ligeramente diferentes, lo que a menudo hace que los últimos caracteres que acaba de escribir se reviertan.

Si desea mantener una copia de seguridad de su bóveda mediante un servicio de sincronización de terceros, aún puede hacerlo configurando su proveedor de sincronización en su dispositivo único principal, pero no en sus dispositivos secundarios. Esto asegurará que su servicio de sincronización de terceros no "compita" con Obsidian Sync.

### FAQ

##### ¿Qué es el cifrado de extremo a extremo?

El cifrado de extremo a extremo significa que los datos se cifran desde el momento en que salen de su dispositivo y solo se pueden descifrar con su clave de cifrado una vez que están de vuelta en uno de sus dispositivos.

No tenemos la capacidad de leer sus datos, ni tampoco los posibles espías, como su proveedor de servicios de Internet.

En el raro caso de una violación completa del servidor, sus datos permanecerán cifrados y nadie podrá descifrar sus archivos sin conocer su contraseña.

##### ¿Cuántas bóvedas remotas puedo tener?

Cada cuenta con Obsidian Sync puede tener hasta 5 bóvedas remotas.

##### ¿Cuánto tiempo se mantiene el historial de versiones?

Los historiales de versiones se guardan hasta por un año antes de que lo limpiemos.

##### ¿Qué tamaño puede tener cada bóveda remota?

Por el momento, cada bóveda remota puede tener hasta 4 GB de datos, incluido el historial de versiones.

##### ¿Están mis datos cifrados en mi disco duro?

No, sus datos todavía están en texto sin formato en su disco duro. Si desea cifrarlo de personas que usan su computadora, debe buscar una solución de cifrado de disco.

##### ¿Cuánto tiempo se conservan mis datos después de que expire mi suscripción?

Los datos de sus bóvedas remotas, incluido el historial de versiones, se guardan durante un mes, después de que expire su suscripción.

Siempre que renueve dentro de un mes, no debería haber ningún impacto en su uso.

##### ¿Puedo usar Obsidian Sync como solución de respaldo?

Obsidian Sync está diseñado como un servicio de sincronización de datos, en lugar de un servicio de respaldo.

Con el historial de versiones, proporciona algunas funciones de copia de seguridad, sin embargo, recomendamos tener medidas de copia de seguridad adicionales.

Obsidian Sync se encuentra actualmente en prueba beta, por lo que recomendamos encarecidamente tener copias de seguridad, en caso de errores de software y fallas.

##### ¿Debería elegir mi propia contraseña de cifrado?

Elija su contraseña si necesita el más alto nivel de seguridad y privacidad. Esto garantiza que cualquier persona que no conozca su contraseña nunca podrá leer sus notas.

Dejarnos administrar su clave de cifrado es más conveniente y no corre el riesgo de olvidar o perder su contraseña.

Su bóveda local no se ve afectada por esta opción. Si realiza una copia de seguridad adecuada de su bóveda local, es posible que esto no sea un problema para usted.

##### ¿Es fuerte el cifrado de un extremo a otro?

Usamos AES-256 estándar de la industria para cifrar sus datos. AES-256 es una especificación de cifrado de grado militar que se usa ampliamente en la banca en línea.

Aquí están los detalles técnicos para los interesados:

- Función de derivación clave utilizada: scrypt con sal
- Algoritmo de cifrado utilizado: AES-256 con GCM