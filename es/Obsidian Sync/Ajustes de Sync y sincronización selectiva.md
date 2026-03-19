---
permalink: sync/settings
publish: true
mobile: true
description: >-
  Esta página explica los ajustes de Sync y te guía en la selección de qué
  archivos sincronizar.
---
Cuando [[Planes y límites de almacenamiento#Crear una nueva bóveda remota|creas una bóveda remota]] y [[Configurar Obsidian Sync#Conectar a una bóveda remota|te conectas a ella]], el complemento principal de Sync se convierte en el lugar para gestionar tu bóveda remota.

## Ajustes de Sync

**Bóveda remota**
Esta sección muestra tu bóveda remota actualmente conectada. Incluye un botón **Desconectar** para desconectarse de la bóveda remota y un botón **Administrar** para ver todas las bóvedas remotas a las que tu cuenta tiene acceso (incluyendo bóvedas compartidas mediante [[Colaborar en una bóveda compartida|colaboración]]).

> [!warning]+ Bóveda remota en un servicio de sincronización de terceros
> Si tu bóveda remota se encuentra en un servicio de sincronización de terceros, verás un mensaje de error en rojo. Sigue los pasos en [[Cambiar a Obsidian Sync]] para resolver esto.

**Estado de sincronización**
Muestra el estado de sincronización actual de la bóveda remota. Esta sección incluye un botón **Pausar** o **Continuar**, dependiendo del estado.

**Nombre del dispositivo**
Asigna un nombre único al dispositivo que está sincronizando actualmente. Esto ayuda a rastrear la actividad en el [[Icono de estado y mensajes#Registro de actividad de sincronización|registro de sincronización]]. Este ajuste es específico del dispositivo, al igual que la [[#Sincronización selectiva]].

**[[#Resolución de conflictos]]**
Elige cómo resolver conflictos cuando modificas un archivo en múltiples dispositivos. Este ajuste es específico del dispositivo, al igual que la [[#Sincronización selectiva]].

**Archivos eliminados**
Contiene un botón para **Ver** o **Restaurar** archivos eliminados. Para más detalles, consulta [[Historial de versiones]].

**Tamaño de la bóveda**
Muestra una barra de progreso que indica cuánto almacenamiento de sincronización se está utilizando.

> [!tip]- Tiempo de procesamiento del servidor
> Puede tomar hasta 30 minutos para que el uso actual se actualice debido al procesamiento del lado del servidor.

**Contactar a soporte**
Proporciona instrucciones sobre cómo [[Ayuda y soporte#Contactar al soporte de Obsidian|contactar al soporte de Obsidian]], incluyendo opciones para **Copiar información de depuración** y **Correo electrónico de soporte**.

### Resolución de conflictos

Elige cómo resolver conflictos cuando modificas un archivo en múltiples dispositivos antes de sincronizar. Puedes fusionar cambios automáticamente o crear archivos de conflicto separados para revisión manual. Consulta [[Solución de problemas de Obsidian Sync#Resolución de conflictos|Resolución de conflictos]] para más detalles sobre cómo funcionan los conflictos y cómo configurar este ajuste.

> [!warning]+ Configurar en cada dispositivo
> Este ajuste debe configurarse por separado en cada dispositivo.

---

También puedes elegir qué sincronizar en los ajustes del complemento principal de Sync. Esta sección cubre la **sincronización selectiva** y la **sincronización de configuración de la bóveda**, junto con sus consideraciones asociadas.

## Sincronización selectiva

Los archivos sincronizados a tu [[Bóvedas locales y remotas|bóveda remota]] contribuyen a tu [[Preguntas frecuentes#¿Qué tan grande puede ser cada bóveda remota?|límite de almacenamiento]]. Por defecto, Obsidian Sync activa la **sincronización selectiva** para los siguientes tipos de archivo:
- Imágenes
- Audio
- Vídeos
- PDFs

Para sincronizar tipos de archivo adicionales, activa la opción `Sincronizar todos los otros tipos`.

Los ajustes predeterminados de **sincronización de configuración de la bóveda** incluyen:
- Otros tipos de archivo
- Ajustes principales
- Apariencia
- Temas y funcionalidades
- Atajos de teclado
- Lista de complementos principales activos
- Ajustes de complementos principales

Para sincronizar complementos de la comunidad, habilita manualmente **Lista de complementos creados por la comunidad activados** y **Lista de complementos creados por la comunidad instalados**.

### Cambiar los tipos de archivo que deseas sincronizar

1. Abre **[[Configuración]] → Sync**.
2. Bajo **Sincronización selectiva**, habilita los tipos de archivo que deseas sincronizar.
3. Reinicia la aplicación para aplicar los nuevos ajustes. En móvil o tableta, esto puede requerir un cierre forzado.

Ten en cuenta que tu [[Planes y límites de almacenamiento|plan de Sync]] define el tamaño máximo de archivo que puedes sincronizar. El plan Estándar permite sincronizar archivos de hasta 5 MB, mientras que el plan Plus soporta archivos de hasta 200 MB.

> [!info]+ Los archivos excluidos permanecen en la bóveda remota
> Añadir un archivo a la lista de **Archivos excluidos** no lo elimina de la bóveda remota si ya ha sido sincronizado. Configura tus ajustes de Sync antes de sincronizar para evitar usar almacenamiento innecesario.

### Excluir una carpeta de la sincronización

Por defecto, Obsidian sincroniza todos los archivos y carpetas en tu bóveda. Para excluir una carpeta específica de la sincronización:
1. Abre **[[Configuración]] → Sync**.
2. Junto a **Carpetas excluidas**, selecciona **Administrar**.
3. Selecciona la carpeta que deseas excluir de la lista.
4. Selecciona **Hecho**.

Para eliminar una carpeta de la lista de exclusión, selecciona el botón ![[lucide-x.svg#icon]] junto al nombre de la carpeta.

#### Siempre excluidos de la sincronización

##### Instantáneas de recuperación de archivos

Las instantáneas del complemento [[Recuperación de archivos]] no se sincronizan a través de Obsidian Sync, ya que las instantáneas se mantienen en los [[Cómo Obsidian almacena los datos#Ajustes globales|Ajustes globales]].

##### Archivos y carpetas ocultos

Los archivos y carpetas que comienzan con un `.` se tratan como ocultos y se excluyen de la sincronización. La única excepción es la [[Carpeta de configuración|carpeta de configuración]] de la bóveda (`.obsidian`), que sí se sincroniza.

Ejemplos comunes de archivos y carpetas ocultos que no se sincronizan:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Ajustes de Sync

Los ajustes de Sync no se sincronizan entre dispositivos. Necesitas configurarlos por separado en cada dispositivo según sea necesario.

## Actualizar los ajustes de tu bóveda sincronizada

Para modificar los ajustes de sincronización en múltiples dispositivos, sigue estos pasos:

> [!tip]- Dispositivos primario y secundario
> Los términos "dispositivo primario" y "secundario" son solo para claridad. Sync no diferencia entre ellos.

### Dispositivo primario

El dispositivo primario actúa como la fuente de verdad. Los cambios realizados aquí se sincronizan en todos los demás dispositivos.

1. Ve a **[[Configuración]] → Sync**.
2. Activa los ajustes deseados bajo **Sincronizar ajustes de la bóveda**.
3. Recarga o reinicia Obsidian. En móvil o tableta, puede ser necesario un cierre forzado.
4. Permite tiempo para que los ajustes se sincronicen con tu bóveda remota.

### Dispositivo(s) secundario(s)

Los dispositivos secundarios (como tu teléfono) reciben actualizaciones del dispositivo primario.

1. Ve a **[[Configuración]] → Sync**.
2. Habilita los ajustes necesarios bajo **Sincronizar ajustes de la bóveda**.
3. Espera a que los cambios se descarguen desde la bóveda remota.
4. Recarga o reinicia la aplicación para aplicar los ajustes sincronizados. En móvil o tableta, puede ser necesario un cierre forzado.

### Recarga de ajustes

Ciertos ajustes pueden recargarse en caliente, mientras que otros requieren un reinicio:

- **Recargables en caliente**: La mayoría de las configuraciones de Obsidian, incluyendo atajos de teclado y propiedades, ajustes de apariencia y configuraciones para complementos principales ya habilitados.
- **Requieren reinicio**: Cambios de CSS (por ejemplo, [[Fragmentos CSS]], [[Temas]]), configuraciones de la vista de gráfico y estados de complementos principales (por ejemplo, habilitar/deshabilitar Notas diarias).

Los complementos de la comunidad generalmente no soportan la recarga en caliente y requieren un reinicio cuando se aplican nuevos ajustes.

> [!info]+ Para desarrolladores de complementos
> Aprende cómo [integrar la funcionalidad de recarga en caliente con Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Perfiles de ajustes

Obsidian Sync puede sincronizar múltiples [[Carpeta de configuración|carpetas de configuración]] a la misma bóveda remota, permitiéndote crear perfiles separados (por ejemplo, uno para móvil, otro para tu portátil).

### Crear un perfil de ajustes

Para crear un nuevo perfil de ajustes:

1. Abre **[[Configuración]] → Archivos y enlaces**.
2. Bajo **Anular la carpeta de configuración**, ingresa un nombre para tu perfil, comenzando con un punto (`.`), por ejemplo, `.obsidian-mobile`.
3. Reinicia Obsidian para aplicar los cambios.

> [!info]+ Evitar volver a descargar complementos y temas
> Cambiar el perfil de ajustes requerirá reconfigurar tus ajustes de sincronización. Para evitar volver a descargar complementos y temas, copia tu carpeta `.obsidian` existente y renómbrala para que coincida con tu nuevo perfil (por ejemplo, `.obsidian-mobile`) antes de hacer cambios.
