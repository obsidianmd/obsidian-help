---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Ha comprado Obsidian Sync y está listo para comenzar. Esta guía le ayudará a configurar y ajustar los ajustes de Obsidian Sync para su uso diario.
---
Ha comprado Obsidian Sync y está listo para comenzar. Esta guía le ayudará a configurar y ajustar los ajustes de Obsidian Sync para su uso diario.

- **¿Nuevo en Obsidian Sync?** Consulte: [[#Configurar Obsidian Sync por primera vez]]
- **¿Conectando un segundo dispositivo?** Consulte: [[#Sincronizar una bóveda remota en otro dispositivo]]
- **¿Necesita hacer cambios?** Consulte: [[#Administrar sus bóvedas remotas]]

## Configurar Obsidian Sync por primera vez

En esta sección, creará una nueva [[Bóvedas locales y remotas|bóveda remota]] y la conectará a una bóveda local existente. No necesita crear una nueva bóveda local vacía para usar Obsidian Sync con este propósito.

> [!info] ¿Su bóveda actual está en una carpeta de iCloud, OneDrive, Dropbox u otro servicio de sincronización? Si la respuesta es **sí**, o **no está seguro**, lea [[Preguntas frecuentes#¿Puedo usar una sincronización de terceros con Obsidian Sync?|esto]] y [[Cambiar a Obsidian Sync]] antes de continuar.

**Requisitos previos**

- Una cuenta de Obsidian. Si no tiene una, [regístrese ahora](https://obsidian.md/es/auth?returnto=%2Faccount%2Fsync#signup).
- Una [[Planes y límites de almacenamiento|suscripción]] activa de Obsidian Sync. Si no tiene una, suscríbase desde [el panel de su cuenta](https://obsidian.md/es/account/sync).
- **Recomendado**: Un [[Respaldar tus archivos de Obsidian|sistema de respaldo]] implementado para sus archivos de Obsidian. Un servicio de sincronización no es un respaldo.

### Iniciar sesión con su cuenta de Obsidian

1. Abra **[[Configuración]]**.
2. En la barra lateral, seleccione **General**.
3. En **Cuenta → Su cuenta**, seleccione **Iniciar sesión**.
4. En **Correo electrónico**, ingrese su correo electrónico.
5. En **Contraseña**, ingrese su contraseña.
6. Seleccione **Iniciar sesión**.

### Activar Obsidian Sync

1. Abra **[[Configuración]]**.
2. En la barra lateral, bajo **Opciones**, seleccione **Complementos principales**.
3. Active **Sync**.

### Crear una nueva bóveda remota

1. Abra **[[Configuración]]**.
2. En la barra lateral, seleccione **Sync**.
3. Junto a **Bóveda remota**, seleccione **Elegir**.
4. Seleccione **Crear nueva bóveda**.
5. En **Nombre de la bóveda**, ingrese el nombre de la bóveda remota.
6. En **Región**, elija la [[#Servidores de sincronización regionales|región]] del servidor para su bóveda remota.
7. En **Contraseña de cifrado**, elija una contraseña para su bóveda. Esto crea una bóveda con cifrado de extremo a extremo. La contraseña de la bóveda es independiente de su cuenta de Obsidian y puede ser diferente para cada una de sus bóvedas. Para más información, consulte [[Seguridad y privacidad]].
8. Seleccione **Crear**.

### Conectar a una bóveda remota

1. Seleccione **Conectar** junto a su bóveda recién creada.
2. Ingrese la contraseña que configuró para la bóveda en el campo **Contraseña de cifrado** si optó por el [[Obsidian Sync/Seguridad y privacidad#¿Qué significa cifrado de extremo a extremo?|cifrado de extremo a extremo]].
3. Seleccione **Desbloquear bóveda**.
4. **No inicie la sincronización aún.** Revise sus ajustes de sincronización en [[#Ajustar los ajustes de Obsidian Sync|ajustar los ajustes de Obsidian Sync]].
    - Si desea iniciar la sincronización inmediatamente, continúe con [[#Comenzar a sincronizar con Obsidian Sync|comenzar a sincronizar con Obsidian Sync]].
5. Si aún no lo ha hecho, cierre u omita la ventana emergente que le solicita **Excluir carpetas** e **Iniciar sincronización**. Continúe con el siguiente paso.

#### Ajustar los ajustes de Obsidian Sync

1. Navegue a **[[Configuración]]** → **Sync** si es necesario.
2. Si no se ha añadido un nombre de dispositivo, añada uno para facilitar la lectura de los registros de Sync.
3. Active los ajustes en **Sincronización selectiva** y **Sincronizar ajustes de la bóveda** para indicar qué elementos deben sincronizarse hacia y desde la bóveda remota.
    - **Nota**: Si se desconectó recientemente de una bóveda remota y se está reconectando sin reiniciar la aplicación, algunos ajustes pueden ya estar activados.
4. Si realiza cambios en algún ajuste, reinicie Obsidian completamente.
5. Una vez reiniciado Obsidian, regrese a **[[Configuración]]** → **Sync**.

#### Comenzar a sincronizar con Obsidian Sync

Si está iniciando la sincronización después de conectarse a una bóveda remota, verá un botón **Iniciar sincronización**. Seleccione este botón para comenzar a sincronizar.

Si está iniciando la sincronización después de ajustar los ajustes de Obsidian Sync y reiniciar la aplicación, verá un botón **Continuar** dentro de los ajustes de Sync. Seleccione este botón para comenzar a sincronizar.

> [!done] Estado de sincronización
> Cuando Obsidian Sync se completa, un círculo verde con una marca de verificación ![[obsidian-icon-sync-synced.svg#icon]] aparece en la esquina inferior derecha (escritorio) o en la barra lateral derecha (móvil). El registro de sincronización también mostrará "Completamente sincronizado" como uno de sus mensajes más recientes.
>
> Para más detalles sobre los estados de sincronización, consulte [[Icono de estado y mensajes]].
^obsidian-sync-status

Para conectar otros dispositivos a su bóveda remota recién creada y sincronizada, continúe con [[Configurar Obsidian Sync#Sincronizar una bóveda remota en otro dispositivo|Sincronizar una bóveda remota en otro dispositivo]].

Para aprender más sobre ajustes y archivos, continúe con [[Ajustes de Sync y sincronización selectiva]].

## Sincronizar una bóveda remota en otro dispositivo

En esta sección, ya ha creado una bóveda remota y ha subido datos a ella. Ahora, desea conectar sus otros dispositivos a ella.

**Requisitos previos**
- Una cuenta de Obsidian. Si no tiene una, [regístrese ahora](https://obsidian.md/es/account#mode=signup).
- Una suscripción activa de Obsidian Sync. Si no tiene una, suscríbase desde [el panel de su cuenta](https://obsidian.md/es/account).
- Sync activado dentro de los ajustes de [[Complementos principales]].
- Una bóveda remota activa. Si aún no ha creado una, primero cree una [[Configurar Obsidian Sync#Crear una nueva bóveda remota|bóveda remota]].
- **Recomendado**: Un [[Respaldar tus archivos de Obsidian|sistema de respaldo]] implementado para sus archivos de Obsidian en su dispositivo más utilizado. Un servicio de sincronización no es un respaldo.

### Sincronizar su bóveda desde el selector de bóvedas

Si ha instalado Obsidian recientemente, cuando abra el programa se le presentará el [[Gestionar bóvedas|Selector de bóvedas]]. Para crear una nueva bóveda local a partir del contenido de una bóveda remota, deberá realizar los siguientes pasos.

1. Abra Obsidian (asumiendo que es la primera vez que lo abre)
2. Seleccione una de las opciones dependiendo de su instalación:
	1. **Escritorio**: En la sección que dice Conectar con Obsidian Sync, elija **Configurar**
	2. **Móvil/Tableta**: **Configurar Obsidian Sync**
3. Inicie sesión con su cuenta de usuario de Obsidian
	1. Si la [[Autenticación de 2 factores|2FA]] está configurada, ingrese su código 2FA.
4. Se le pedirá que elija qué bóveda remota desea sincronizar con este dispositivo. Seleccione **Conectar**.
5. Se le pedirá que elija un nombre para la bóveda local que se creará en el dispositivo para almacenar estos datos. Ingrese el nombre de su preferencia.
	1. Si usa [[Obsidian URI]]s, querrá usar el mismo nombre que la bóveda local en su otro dispositivo.
6. Seleccione **Crear**.
7. La ventana de bóvedas remotas aparecerá momentáneamente mientras Obsidian Sync se conecta a su servidor y valida la suscripción. Luego le presentará una ventana de *Configurar conexión*.
	1. Es muy recomendable que cierre o deslice hacia abajo esta ventana y [[#Ajustar los ajustes de Obsidian Sync|ajuste los ajustes de Obsidian Sync]] primero.
	2. Si cambia algún ajuste de Sync, recargue o reinicie Obsidian.

### Sincronizar su bóveda desde los Ajustes de Obsidian

Si ya ha creado una bóveda local en este dispositivo y desea conectar esta bóveda local a una bóveda remota, las instrucciones son muy similares a [[#Configurar Obsidian Sync por primera vez]].

![[Configurar Obsidian Sync#Iniciar sesión con su cuenta de Obsidian]]

![[Configurar Obsidian Sync#Activar Obsidian Sync]]

#### Conectar a una bóveda remota

1. Abra **[[Configuración]]**.
2. En la barra lateral, seleccione **Sync**.
3. Junto a **Elegir bóveda remota**, haga clic en **Elegir**.
4. Haga clic en **Conectar** junto a la bóveda remota a la que desea conectarse.
5. En **Contraseña de cifrado**, ingrese la contraseña de su bóveda, si tiene una.
6. Se le pedirá que inicie la sincronización. Se recomienda esperar y ajustar sus ajustes de sincronización primero. Si desea sincronizar toda la bóveda al dispositivo tal como está, puede **Iniciar sincronización**.

> [!warning] Si la bóveda en su dispositivo ya contiene algunas notas (no recomendado), se le advertirá que esas notas serán fusionadas antes de proceder. Los conflictos se resolverán mediante la [[Solución de problemas de Obsidian Sync#Resolución de conflictos|resolución de conflictos de Sync]].

![[Configurar Obsidian Sync#Ajustar los ajustes de Obsidian Sync]]

![[Configurar Obsidian Sync#Comenzar a sincronizar con Obsidian Sync]]

## Administrar sus bóvedas remotas

Ha creado y conectado una bóveda remota. También puede haber sincronizado esta bóveda remota con múltiples dispositivos. Esta sección cubre algunas de las otras instrucciones comunes que puede necesitar para administrar esta bóveda remota.

### Desconectarse de una bóveda remota

1. Abra los **[[Configuración|Ajustes]]** de Obsidian.
2. Seleccione **Sync** en la barra lateral.
3. Haga clic en el botón **Desconectar** junto a Bóvedas remotas.

Ahora está desconectado de la bóveda remota y ya no está sincronizando en este dispositivo.

### Eliminar una bóveda remota

> [!tip] Eliminar una bóveda remota no eliminará sus datos locales en su dispositivo.

1. Abra **[[Configuración]]**.
2. En la barra lateral, seleccione **Sync**.
3. Seleccione **Administrar** junto a Bóvedas remotas. Se abrirá una ventana con su lista de bóvedas remotas.
4. Seleccione el icono de papelera ![[lucide-trash-2.svg#icon]] junto a la bóveda remota que desea eliminar.
5. Confirme la eliminación seleccionando el botón rojo **Eliminar**.
6. Su bóveda remota ha sido eliminada.

> [!info] Si no hay un icono de papelera visible, puede que necesite desconectarse primero de la bóveda remota. Una vez desconectado, seleccione el botón **Elegir** para abrir la lista de bóvedas remotas.

### Servidores de sincronización regionales

Obsidian Sync le permite elegir la ubicación de alojamiento para su bóveda remota. Si está usando la versión `1.4.16` o anterior de Obsidian, la ubicación se elegirá automáticamente por usted.

Si no está seguro de dónde está la región de su bóveda actual, consulte [[Obsidian Sync/Seguridad y privacidad#¿Dónde puedo encontrar mi servidor de Sync actual y dónde está alojado?|¿Dónde puedo encontrar mi servidor de Sync actual y dónde está alojado?]] para obtener orientación.

![[sync-regional-sync-servers.png#interface|300]]

Después de seleccionar una ubicación, su centro de datos **no puede** ser movido a un servidor diferente sin volver a subir sus datos. Para cambiar de región, siga la [[Regiones de Sync|guía de regiones de Sync de bóvedas]].

![[Obsidian Sync/Seguridad y privacidad#^sync-geo-regions]]

## Próximos pasos

Aquí hay algunos documentos sugeridos para leer a continuación.

- Explore más sobre [[Ajustes de Sync y sincronización selectiva|seleccionar archivos y ajustes para sincronizar]].
- Aprenda qué sucede si su bóveda remota [[Historial de versiones|se llena]].
- [[Colaborar en una bóveda compartida]] con otro usuario de Obsidian Sync.
- Consulte las [[Preguntas frecuentes|preguntas frecuentes de Sync]] para obtener respuestas a preguntas comunes.
