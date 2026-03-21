---
permalink: sync/messages
publish: true
mobile: true
description: Esta página explica los iconos de estado de Obsidian Sync y proporciona detalles sobre el registro de actividad de sincronización.
---
Obsidian Sync proporciona varios elementos para indicar el estado de sincronización, principalmente el [[#Icono de estado de Sync]] y el [[#Registro de actividad de Sync]]. Los detalles sobre el control de versiones en Obsidian Sync se cubren en la página [[Historial de versiones]].

## Icono de estado de Sync

El icono de estado de Sync se encuentra en la [[Barra de estado]] en la versión de escritorio y en la [[Barra lateral#Abrir barras laterales ocultas|barra lateral derecha]] en dispositivos móviles y tabletas. El icono refleja varios estados de sincronización:

- ![[obsidian-icon-sync-synced.svg#icon]] **Sincronizado**: Obsidian Sync ha sincronizado completamente tus archivos. Este icono es típicamente verde.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Sincronizando**: Obsidian está actualizando actualmente la bóveda remota. Este icono es usualmente púrpura.
- ![[obsidian-icon-sync-paused.svg#icon]] **Pausado**: La sincronización ha sido pausada, pero Obsidian sigue conectado a la bóveda remota. El icono es típicamente púrpura.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Desconectado**: El complemento principal de Sync está activo, pero la [[Bóvedas locales y remotas|bóveda local]] no está conectada a una bóveda remota. Este icono es típicamente rojo.

Al hacer clic o tocar el icono se abre un menú contextual con las siguientes opciones:
- ![[obsidian-icon-sync-paused.svg#icon]] Pausar (o ![[lucide-circle-play.svg#icon]] Continuar si está pausado)
- ![[lucide-history.svg#icon]] [[Historial de versiones]] (Atenuado si no se está viendo una nota)
- ![[lucide-align-left.svg#icon]] Abrir [[#Registro de actividad de Sync|Registro de sincronización]]
- ![[lucide-trash-2.svg#icon]] [[Historial de versiones#Restaurar un archivo eliminado|Archivos eliminados]]
- ![[lucide-cog.svg#icon]] [[Ajustes de Sync y sincronización selectiva|Ajustes de Sync]]

## Registro de actividad de Sync

Obsidian Sync incluye un registro de sincronización detallado que rastrea todas las interacciones entre tus archivos locales y la bóveda remota. El registro muestra cargas, descargas, eliminaciones y cualquier problema como conflictos de fusión o problemas de conectividad.

**Acceder al registro de actividad:**
- Haz clic en el icono de estado de sincronización en la barra de estado
- Ve a **[[Configuración]] → Sync → Actividad de sincronización**
- Usa **Paleta de comandos → Sync: Abrir el registro de actividad**

El registro proporciona marcas de tiempo y detalles para cada operación de sincronización, lo que lo hace útil para solucionar problemas de sincronización.

> [!warning] El registro de Sync no persiste después de cerrar Obsidian. Si encuentras un problema, asegúrate de copiar el registro _antes_ de cerrar la aplicación.

El registro categoriza los mensajes en los siguientes tipos:

- [[#Mensajes generales]]
- [[#Mensajes de error]]
- [[#Mensajes de omisión]]
- [[#Mensajes de cuenta]]

Puedes filtrar el registro de Sync por **Todos**, **Errores**, **Omitido** y **Combinar conflictos**. Además, puedes buscar en el registro de Sync usando el cuadro de búsqueda en la ventana de Sync.

> [!summary] Hemos incluido a continuación algunos de los mensajes más probables que puedes haber encontrado. La lista no es exhaustiva. Si estás experimentando un problema y tienes un mensaje del registro de sincronización del que no estás seguro, [[Ayuda y soporte#Contactar con el soporte de Obsidian|contacta con el soporte de Obsidian]].

### Mensajes generales

Estos son mensajes comunes del día a día que podrías encontrar.

**Connecting to server**
Obsidian está intentando conectarse al [[Seguridad y privacidad#¿Dónde puedo encontrar mi servidor de Sync actual y dónde está alojado?|servidor de Sync]] de tu bóveda remota.

**Connected to server. Detecting changes...**
Obsidian ha establecido una conexión y está comparando la bóveda local con la bóveda remota para determinar si se necesitan cambios.

> [!info] Este mensaje también puede indicar otros posibles problemas de Sync. Si lo ves repetidamente y crees que todavía hay elementos por sincronizar, [[Ayuda y soporte#Contactar con el soporte de Obsidian|contacta con el soporte de Obsidian]].

**Fully synced**
- Las bóvedas local y remota están completamente sincronizadas.

**Merging conflicted file**
Se detectó un conflicto durante la sincronización y el archivo fue fusionado en lugar de sobrescrito. Consulta [[Solución de problemas de Obsidian Sync#Resolución de conflictos|resolución de conflictos]] para más información. Si la fusión no es deseada, puedes restaurar versiones anteriores a través del [[Historial de versiones]] o la [[Recuperación de archivos]].

**Rejected server change**
Los cambios en la bóveda remota son más antiguos que la versión en tu dispositivo local, por lo que se mantiene la versión local y se ignora el cambio remoto.

### Mensajes de error

Estos son mensajes que detallan un error en la sincronización de un archivo.

**Out of memory**
Este problema ocurre típicamente en dispositivos móviles cuando no hay suficiente espacio de almacenamiento o memoria disponible para descargar un archivo. Es más común con archivos grandes, como vídeos.

### Mensajes de omisión

Estos son mensajes que detallan lo que fue omitido y potencialmente por qué.

**Unable to download file with illegal name**

El archivo contiene un [carácter especial o convención de nomenclatura](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) que no está permitido en el sistema operativo receptor. Para mayor facilidad, puedes renombrar el archivo en su dispositivo de origen para eliminar todos los caracteres especiales excepto `-` y `_`.

Ten en cuenta que esto también incluye archivos con múltiples puntos `.` en su nombre en dispositivos Android.

### Mensajes de cuenta

Estos son mensajes relacionados con un cambio en tu suscripción o cuenta.

**Vault limit exceeded**
Tu cuenta ha excedido el [[Preguntas frecuentes#¿Qué tan grande puede ser cada bóveda remota?|tamaño máximo de almacenamiento]]. Los adjuntos y el historial de versiones contribuyen a este tamaño. Incluso si tu bóveda parece más pequeña que el límite, las versiones y archivos antiguos pueden hacer que lo supere.

Para reducir el tamaño de la bóveda:
1. Abre **[[Configuración]] → Sync**.
2. Usa las opciones bajo **El tamaño de la bóveda supera el límite** para eliminar archivos grandes.

**Vault not found**
`{"res":"err","msg":"Vault not found."}`

Este error puede ocurrir en estos casos:

1. La bóveda fue eliminada desde otro dispositivo.
2. La suscripción de sincronización estuvo inactiva por más de 30 días, causando que la bóveda remota fuera eliminada.
3. La suscripción fue cancelada o reembolsada, resultando en la eliminación de la bóveda remota.

En estos casos, necesitarás [[Configurar Obsidian Sync#Desconectar de una bóveda remota|desconectarte de la bóveda remota]] y [[Configurar Obsidian Sync#Crear una nueva bóveda remota|crear una nueva bóveda remota]], asegurándote de que tus datos locales se conserven.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**
Tu cuenta está ahora en un estado completamente expirado ya que no pudimos procesar el pago registrado.

Para continuar usando Obsidian Sync, necesitarás volver a suscribirte dentro de [tu cuenta](https://obsidian.md/es/account/sync).

**Failed to authenticate: Not logged in**

Obsidian Sync ha detectado que actualmente no has iniciado sesión. Necesitarás volver a iniciar sesión en la aplicación en la sección [[Configuración#General#Cuenta|Cuenta]] de **[[Configuración]]**.

En algunos casos, un complemento de la comunidad también puede impedir que Obsidian Sync pueda confirmar el estado de inicio de sesión de tu cuenta. Por favor entra en **[[Seguridad de complementos#Modo restringido|Modo restringido]]** e inténtalo de nuevo.

### Mensajes de red

**Disconnected from server**
`Unable to connect to server`

Obsidian Sync se ha desconectado del servidor de Sync por una razón desconocida. Sync intentará reconectarse al servidor periódicamente.

En iOS, este mensaje se muestra como el siguiente error:
`Null is not an object (evaluating 'this.socket.send')`

Significa exactamente lo mismo que el mensaje `Unable to connect to server`, y no es de ninguna manera indicación de que algo más esté mal.
