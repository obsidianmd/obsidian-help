---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Cómo sincronizar tus notas de Obsidian entre dispositivos y plataformas.
---
Obsidian almacena las notas localmente en tu dispositivo para que siempre tengas acceso a ellas, incluso sin conexión. Para acceder a tus notas en múltiples dispositivos, necesitas configurar un método de sincronización.

Esta guía cubre los métodos de sincronización más comunes, incluyendo consejos para evitar la pérdida de datos y asegurar una experiencia fluida.

También recomendamos leer nuestra [[Respaldar tus archivos de Obsidian|guía de respaldo]] para proteger tus datos.

## Métodos de sincronización

Con Obsidian, tus datos simplemente se almacenan como archivos en una carpeta llamada [[Bóvedas locales y remotas|bóveda]]. Esto significa que hay muchas formas de sincronizar tus datos.

Estos son algunos métodos de sincronización comúnmente utilizados reportados por miembros de la [Comunidad de Obsidian](https://obsidian.md/community):

1. **Sincronización propia**: [[#Obsidian Sync]]
2. **Sincronización en la nube de terceros**: [[#iCloud]], [[#OneDrive]] y [[#Google Drive]]
3. **Sincronización local**: [[#Syncthing]]
4. **Control de versiones**: [[#Git]] y [[#Working Copy]]

## Obsidian Sync

**Sistemas recomendados**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

El método de sincronización más sencillo y oficialmente soportado es nuestra solución propia: [[Introducción a Obsidian Sync|Obsidian Sync]].

Obsidian Sync mantiene tus bóvedas sincronizadas en todos los dispositivos utilizando una bóveda remota externa para hacer copias de tus datos. Una copia local permanece en tus dispositivos en todo momento.

Sigue la [[Configurar Obsidian Sync|guía de configuración]] para configurar Obsidian Sync.

## iCloud

**Sistemas recomendados**: `macOS`, `iOS`, `iPadOS`

iCloud se puede usar para sincronizar bóvedas entre iOS y macOS. Sin embargo, **iCloud Drive en Windows** puede provocar duplicación o corrupción de archivos.

**Cómo crear y almacenar tu bóveda en iCloud Drive**:

- **Habilitar iCloud Drive**:
    - En macOS: Ve a **Preferencias del Sistema → Apple ID → iCloud → iCloud Drive**.
    - En iOS: Ve a **Ajustes → [Tu Nombre] → iCloud → iCloud Drive**.
- **Crear una nueva bóveda en iCloud**:
    - En macOS:
        1. Abre **Obsidian** y selecciona **Crear nueva bóveda**.
        2. En el selector de archivos, navega a **iCloud Drive → Obsidian**.
        3. Crea una carpeta para tu bóveda y dale un nombre.
        4. Selecciona **Crear** para finalizar.
    - En iOS:
        1. Abre **Obsidian** y toca **Crear nueva bóveda**.
        2. Ingresa un nombre para tu bóveda.
        3. Activa **Almacenar en iCloud**.
        4. Toca **Crear**.
- **Abrir la bóveda en otro dispositivo Apple**:
    - En otro dispositivo macOS o iOS, abre **Obsidian**, ve al [[Gestionar bóvedas|Selector de bóvedas]] y selecciona **Abrir una carpeta como bóveda**. Navega a **iCloud Drive → Obsidian**.

> [!warning]+ Ubicación de carpeta en iOS e iPadOS
> Al usar iCloud en dispositivos móviles, asegúrate de que tu bóveda esté almacenada en la ubicación correcta: `iCloud Drive/Obsidian/[Nombre de tu bóveda]`.
> 
> Las bóvedas deben estar dentro de la carpeta **Obsidian** en iCloud Drive. La carpeta a la derecha con el icono de Obsidian es la correcta. No uses la carpeta simple sin el icono de la aplicación.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Para verificar la ubicación de tu bóveda, abre la aplicación **Archivos**, toca **Explorar**, selecciona **iCloud Drive** en **Ubicaciones** y confirma que tu bóveda está dentro de la carpeta **Obsidian**. Si tu bóveda está en una ubicación diferente, podrías experimentar problemas de sincronización.

> [!tip] Mejores prácticas
> - Para **macOS 14 (Sonoma) y anteriores**: Desactiva **Optimizar almacenamiento del Mac** en los ajustes de iCloud para evitar que los archivos se descarguen bajo demanda. Este ajuste afecta a todo el almacenamiento de iCloud en el dispositivo, no solo a Obsidian.
> - Para **macOS 15 (Sequoia)**: Haz clic derecho en la carpeta **Obsidian** en iCloud Drive y selecciona **Mantener descargado**.

## OneDrive

**Sistemas recomendados**: `Windows`, `macOS` (funcionalidad limitada en Android)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) es una opción popular de almacenamiento en la nube para usuarios de Windows y macOS. Sin embargo, tiene limitaciones en Android y no está oficialmente soportado para sincronizar bóvedas de Obsidian en iOS.

> [!info] Mantener archivos disponibles sin conexión
> Antes de usar OneDrive para sincronizar, asegúrate de que la carpeta de tu bóveda esté marcada como **Mantener siempre en este dispositivo**. Esto evita que OneDrive descargue archivos bajo demanda y que Obsidian piense que faltan.

**Cómo crear y almacenar tu bóveda en OneDrive**:

1. **Configurar OneDrive**:
   - En Windows: Inicia sesión a través de la aplicación de OneDrive o tu cuenta de Microsoft.
   - En macOS: Descarga la aplicación de OneDrive e inicia sesión.
2. **Crear una nueva bóveda en OneDrive**:
   - En Windows/macOS:
     1. Abre el **Explorador de archivos** (Windows) o **Finder** (macOS) y navega a **OneDrive → Documentos**.
     2. Crea una nueva carpeta (por ejemplo, \"Bóveda Obsidian\").
     3. Abre **Obsidian**, selecciona **Crear nueva bóveda** y selecciona la carpeta de OneDrive.
3. **Abrir la bóveda en otro dispositivo**:
   - En otro dispositivo, abre **Obsidian**, ve al [[Gestionar bóvedas|Selector de bóvedas]] y selecciona **Abrir una carpeta como bóveda**. Navega a **OneDrive → Documentos**.

> [!info] Sincronización en Android
> OneDrive puede no funcionar bien para la sincronización en Android. Considera usar aplicaciones como [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) o [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Mejores prácticas
> - Mantén siempre los archivos de tu bóveda **Disponibles sin conexión** haciendo clic derecho en la carpeta y seleccionando **Mantener siempre en este dispositivo**.
> - Evita usar la función **Archivos a petición** de OneDrive para las bóvedas para prevenir problemas de sincronización.

## Google Drive

**Sistemas recomendados**: `Windows`, `macOS`, `Android` (funcionalidad limitada en iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) es otra solución popular de almacenamiento en la nube. Aunque no está oficialmente soportado para sincronizar bóvedas de Obsidian, puedes usar aplicaciones y complementos de terceros para sincronizar entre dispositivos.

> [!info] Soporte para iOS
> Google Drive no está oficialmente soportado para sincronizar bóvedas de Obsidian en iOS. Considera usar una solución o complemento de terceros para sincronizar en iOS.

**Cómo crear y almacenar tu bóveda en Google Drive**:

1. **Configurar Google Drive**:
    - En Windows o macOS: Descarga la aplicación de Google Drive e inicia sesión.
    - En Android: Asegúrate de que Google Drive esté habilitado y con sesión iniciada.
2. **Crear una nueva bóveda en Google Drive**:
    - En Windows/macOS:
        1. Abre el **Explorador de archivos** (Windows) o **Finder** (macOS) y navega a **Google Drive**.
        2. Crea una nueva carpeta (por ejemplo, \"Bóveda Obsidian\").
        3. Abre **Obsidian**, selecciona **Crear nueva bóveda** y selecciona la carpeta de Google Drive.
3. **Abrir la bóveda en otro dispositivo**:
    - En otro dispositivo, abre **Obsidian**, ve al [[Gestionar bóvedas|Selector de bóvedas]] y selecciona **Abrir una carpeta como bóveda**. Navega a tu carpeta de Google Drive.

> [!tip] Mejores prácticas
> - Configura los archivos de la bóveda como **Disponibles sin conexión** en Google Drive para evitar problemas de sincronización por descarga bajo demanda.
> - Para iOS, considera métodos alternativos como [[Introducción a Obsidian Sync|Obsidian Sync]], [[#iCloud]], o usa el complemento **Remotely Save**.

## Syncthing

**Sistemas recomendados**: `Windows`, `macOS`, `Linux`

Syncthing es una herramienta de sincronización de archivos descentralizada que no depende del almacenamiento en la nube. Sincroniza tu bóveda directamente entre dispositivos a través de la red o internet.

> [!info]+ Soporte para Android
> La aplicación oficial de Syncthing para Android ya no se mantiene. Sin embargo, una bifurcación de la comunidad llamada [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) continúa en desarrollo activo y puede usarse en dispositivos Android.

**Cómo crear y almacenar tu bóveda usando Syncthing**:

1. **Configurar Syncthing**:
   - Instala Syncthing en cada dispositivo. Consulta el [sitio web de Syncthing](https://syncthing.net/) para guías de instalación.
   - En Android, instala [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) desde las versiones de GitHub o F-Droid.
2. **Crear y configurar una carpeta compartida**:
   - En todos los dispositivos:
     1. Abre Syncthing y crea una carpeta compartida. Establece la ruta de la carpeta a tu bóveda de Obsidian.
     2. Asegúrate de que la misma carpeta esté seleccionada en todos los dispositivos.
     3. Configura las preferencias de sincronización de carpetas (por ejemplo, **Enviar y Recibir** para sincronización bidireccional).
3. **Abrir la bóveda en Obsidian**:
   - Una vez que la carpeta esté sincronizada entre dispositivos, abre **Obsidian**, ve al [[Gestionar bóvedas|Selector de bóvedas]] y selecciona **Abrir una carpeta como bóveda**.

> [!info] Disponibilidad de dispositivos
> Syncthing funciona mejor cuando al menos un dispositivo está siempre encendido para asegurar una sincronización continua.

> [!tip] Mejores prácticas
> - Para sincronización local, asegúrate de que todos los dispositivos estén conectados a la misma red.
> - Excluye `.obsidian` de la sincronización si deseas ajustes separados en cada dispositivo.
> - Usa patrones de exclusión para evitar sincronizar archivos temporales o de respaldo.

## Git

**Sistemas recomendados**: `Windows`, `macOS`, `Linux`

**Git** es un sistema de control de versiones que te permite rastrear cambios, colaborar con otros y sincronizar tus bóvedas a través de repositorios como GitHub, GitLab o un servidor autoalojado.

**Cómo sincronizar tu bóveda usando Git**:

1. **Configurar un repositorio remoto**:
    - Crea un repositorio en una plataforma de alojamiento Git (por ejemplo, GitHub, GitLab o un servidor autoalojado).
2. **Sincronizar tu bóveda**:
    1. Abre una terminal o una interfaz gráfica de Git (por ejemplo, GitKraken, Sourcetree).
    2. Inicializa un repositorio Git en la carpeta de tu bóveda usando `git init`.
    3. Añade el repositorio remoto: `git remote add origin [URL]`.
    4. Confirma tus cambios: `git add .` y `git commit -m "Tu mensaje"`.
    5. Sube los cambios: `git push origin main`.
3. **Obtener cambios en otros dispositivos**:
    - Clona el repositorio en otro dispositivo y obtén los cambios usando `git pull origin main`.

> [!info] Se requiere sincronización manual
> Git proporciona un fuerte control de versiones, pero la sincronización no es automática. Debes subir y obtener los cambios manualmente.

## Sincronización en iPhone y iPad

**Opciones recomendadas**:
- [[Introducción a Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Evita mezclar servicios de sincronización
> Evita sincronizar la misma bóveda con múltiples servicios (por ejemplo, usar tanto Obsidian Sync como iCloud simultáneamente) para prevenir conflictos de datos o corrupción.

**Opciones no soportadas**:
Los siguientes servicios no están oficialmente soportados en iOS, pero los usuarios han encontrado soluciones alternativas usando herramientas o complementos de terceros:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Algunos usuarios han usado con éxito complementos como **Remotely Save** o **LiveSync** para sincronizar bóvedas en iOS. Sin embargo, estos métodos no están oficialmente soportados y los resultados pueden variar.

### Working Copy

**Sistemas recomendados**: `iOS`
**Requiere**: [[#Git]]

**Working Copy** es un cliente Git para iOS que te permite clonar, confirmar y subir cambios a un repositorio Git. Funciona bien para sincronizar bóvedas de Obsidian vía Git, aunque algunas funciones requieren una compra dentro de la aplicación.

**Cómo sincronizar tu bóveda usando Working Copy**:

1. **Instalar Working Copy**:
    - Descarga la aplicación **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** en tu iPhone o iPad.
2. **Clonar tu repositorio Git**:
    - Abre Working Copy, toca **Añadir repositorio** e ingresa la URL de tu repositorio (por ejemplo, GitHub, GitLab).
3. **Vincular el repositorio a Obsidian**:
    - Vincula la carpeta del repositorio clonado a una bóveda vacía en **Obsidian**.
4. **Confirmar y subir cambios**:
    - Después de editar notas en Obsidian, usa Working Copy para **Confirmar** y **Subir** cambios al repositorio remoto.
    - En otros dispositivos, obtén los cambios usando Git para sincronizar la bóveda.

> [!info] Uso de la comunidad
> Aunque Working Copy no está oficialmente soportado, muchos usuarios lo han utilizado con éxito para sincronizar bóvedas con Git.

## Preguntas frecuentes

**¿Por qué mi servicio de sincronización preferido no está oficialmente soportado?**

A diferencia de algunas aplicaciones de toma de notas que acceden a un archivo a la vez, Obsidian requiere acceso a toda la bóveda para sus funciones (por ejemplo, actualizar enlaces al renombrar un archivo). Esto dificulta que algunos servicios funcionen de manera confiable con Obsidian.

**¿Por qué necesito mantener los archivos "Disponibles sin conexión"?**

Si servicios como OneDrive o iCloud descargan archivos bajo demanda (por ejemplo, usando **Archivos a petición** u **Optimizar almacenamiento del Mac**), Obsidian no puede acceder a ellos, causando problemas de sincronización. Marca la carpeta de tu bóveda como **Mantener siempre en este dispositivo** (OneDrive) o asegúrate de que **Mantener descargado** esté habilitado (iCloud).

**¿Cómo gestiono diferentes configuraciones para mis bóvedas?**

Obsidian te permite personalizar la carpeta de configuración por dispositivo usando la función de [[Carpeta de configuración|Carpetas de configuración]].
