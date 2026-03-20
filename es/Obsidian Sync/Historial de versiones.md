---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Obsidian Sync mantiene un registro de todos los cambios realizados en tus notas y verifica regularmente si hay actualizaciones, creando nuevas versiones de tus notas.
---
[[Introducción a Obsidian Sync|Obsidian Sync]] verifica regularmente si hay actualizaciones en tus [[Ajustes de Sync y sincronización selectiva|archivos sincronizados]], manteniendo un registro de cualquier cambio. Estos se almacenan como nuevas entradas en el [[#Historial de versiones]]. Esta información se puede acceder de varias formas:

- [[#Historial de sincronización]]
- [[#Historial de versiones]]

Aunque no forma parte de Obsidian Sync, también hay un historial de versiones local disponible en cada dispositivo si el complemento [[Recuperación de archivos]] está habilitado.

## Historial de sincronización

La función de historial de sincronización (o barra lateral de Sync), introducida en la versión 1.7 de Obsidian, te permite ver rápidamente las notas y adjuntos recientemente creados o modificados que han sido sincronizados. También puedes considerarlo como un historial de _edición_.

En la barra lateral, puedes seleccionar un elemento para abrir su archivo en tu ventana activa. Los elementos también tienen menús contextuales, que te permiten realizar acciones como mover el archivo o ver su [[#Notas y adjuntos|Historial de versiones]].

> [!compatibility] Función exclusiva de escritorio
> Cuando pasas el cursor sobre un archivo sincronizado en la barra lateral, puedes ver quién editó el archivo por última vez. Esto es especialmente útil si estás [[Colaborar en una bóveda compartida|colaborando]] en una bóveda compartida.

> [!tip] 
> Los ajustes y elementos eliminados no aparecerán en la barra lateral del historial de sincronización. Estos se pueden encontrar en el [[#Notas y adjuntos|Historial de versiones]] en su lugar.

### Mostrar historial de sincronización

Cuando habilitas el complemento principal [[Introducción a Obsidian Sync|Sync]], el historial de sincronización se habilita automáticamente pero no aparece en la barra lateral de forma predeterminada. Necesitarás añadirlo manualmente usando un comando o un atajo de teclado.

#### Habilitar mediante la Paleta de comandos

> [!info] Esta opción requiere que el complemento principal [[Paleta de comandos]] esté habilitado.

**Escritorio/Tablet** ![[lucide-monitor-check.svg#icon]]

1. Abre la **Paleta de comandos**. ( ![[lucide-terminal.svg#icon]] )
2. Escribe "Sync".
3. Selecciona la opción "Sync: Mostrar historial de sincronización".

El historial de sincronización aparecerá entonces en la [[Barra lateral|barra lateral derecha]].

**Móvil** ![[obsidian-icon-smartphone.svg#icon]]

1. Abre la [[Menú de cinta]] ( ![[lucide-menu.svg#icon]] ).
2. Abre la **Paleta de comandos**. ( ![[lucide-terminal.svg#icon]] )
3. Escribe "Sync".
4. Selecciona la opción "Sync: Mostrar historial de sincronización".

El historial de sincronización aparecerá entonces como una opción desplegable en la [[Barra lateral|barra lateral derecha]].

#### Habilitar mediante atajo de teclado

1. Abre **[[Configuración]]**.
2. En la categoría **Opciones**, selecciona **Atajos de teclado**.
3. En la barra de búsqueda de atajos de teclado, escribe "Sync".
4. Junto a "Sync: Mostrar historial de sincronización," asigna tu atajo de teclado preferido.

## Historial de versiones

Además del [[#Historial de sincronización]], Obsidian también mantiene un historial de versiones para restaurar notas y adjuntos. Si eliminas accidentalmente una nota o quieres revertir a una versión anterior, puedes restaurarla desde el historial de versiones.

El período de retención de tu historial de versiones depende de tu [[Planes y límites de almacenamiento|plan de Obsidian Sync]]. En el plan Estándar, las notas se conservan durante 1 mes, mientras que en el plan Plus, se conservan durante 12 meses. Después de este período, las versiones más antiguas de tus notas se eliminan.

Para los [[Archivos adjuntos|adjuntos]], las versiones anteriores se almacenan durante <u>dos semanas</u>.

![[Colaborar en una bóveda compartida#^version-history-image]]

### Notas y adjuntos

El proceso para restaurar tanto notas como adjuntos es el mismo.

#### Ver el historial de versiones de un archivo

**Escritorio/Tablet** ![[lucide-monitor-check.svg#icon]]
1. En el **Explorador de archivos**, selecciona la nota que deseas restaurar.
2. Selecciona **Abrir el historial de versiones**.
3. Selecciona la versión de la nota que deseas ver a la izquierda. El contenido se mostrará a la derecha.

**Móvil** ![[obsidian-icon-smartphone.svg#icon]]
1. En el **Explorador de archivos**, selecciona la nota que deseas restaurar.
2. Mantén presionado para abrir el menú contextual.
3. Selecciona **Abrir el historial de versiones**.
4. En el menú emergente, selecciona la versión de la nota que deseas ver.
5. Una vez seleccionada, el contenido de la nota estará disponible para revisar.

#### Ver el historial de versiones de un archivo eliminado o renombrado

1. Abre **[[Configuración]]**.
2. En la barra lateral, bajo **Complementos principales***, selecciona **Sync**.
3. Junto a **Archivos eliminados**, selecciona **Vista**.
4. Selecciona la nota cuyo historial de versiones deseas ver.
5. En la ventana emergente del historial de versiones, selecciona la versión de la nota que deseas ver a la izquierda.

#### Restaurar una versión anterior de un archivo

**Escritorio/Tablet** ![[lucide-monitor-check.svg#icon]]
1. En el **Explorador de archivos**, selecciona la nota que deseas restaurar.
2. Selecciona **Abrir el historial de versiones**.
3. Selecciona la versión de la nota que deseas restaurar a la izquierda. El contenido se mostrará a la derecha.
4. Selecciona el botón **Restaurar**.
5. El contenido de la nota será reemplazado con la versión restaurada.

**Móvil** ![[obsidian-icon-smartphone.svg#icon]]
1. En el **Explorador de archivos**, selecciona la nota que deseas restaurar.
2. Mantén presionado para abrir el menú contextual.
3. Selecciona **Abrir el historial de versiones**.
4. En el menú emergente, selecciona la versión de la nota que deseas restaurar.
5. Una vez seleccionada, el contenido de la nota estará disponible para revisar.
6. Selecciona el botón **Restaurar**.
7. El contenido de la nota será reemplazado con la versión restaurada.

#### Restaurar un archivo eliminado

1. Abre **[[Configuración]]**.
2. En la barra lateral, bajo **Complementos principales***, selecciona **Sync**.
3. Junto a **Archivos eliminados**, selecciona **Vista**.
4. Elige la nota que deseas restaurar.
5. En la lista de versiones a la izquierda, selecciona la versión que deseas restaurar.
6. Selecciona el botón **Restaurar** a la derecha.
7. La nota será restaurada a su ubicación original en el sistema de archivos.

> [!tip] Puedes seleccionar múltiples notas con **restauración masiva** seleccionando las casillas de verificación, o usando `shift+clic`. Estos archivos no podrán ser revisados en este menú.

### Historial de ajustes

Obsidian Sync también lleva un registro de los cambios realizados en los ajustes de configuración de tu bóveda.

#### Ver el historial de versiones de un ajuste

1. Abre **[[Configuración]]**.
2. En la barra lateral, bajo **Complementos principales***, selecciona **Sync**.
3. Navega hacia abajo hasta **Sincronizar ajustes de la bóveda**.
4. Selecciona el botón **Vista** junto a **Historial de versiones de [[Configuración]]**.
5. En la ventana emergente de **Archivo de [[Configuración]]**, elige un archivo de ajustes que desees ver.

#### Restaurar una versión anterior de un ajuste

1. Abre **[[Configuración]]**.
2. En la barra lateral, bajo **Complementos principales**, selecciona **Sync**.
3. Navega hacia abajo hasta **Sincronizar ajustes de la bóveda**.
4. Selecciona el botón **Vista** junto a **Historial de versiones de [[Configuración]]**.
5. En la ventana emergente de **Archivo de [[Configuración]]**, elige un archivo de ajustes que desees ver.
6. En la ventana de cambios, selecciona el botón **Restaurar**.
7. Recarga o reinicia Obsidian para que el ajuste surta efecto. Para más detalles, consulta las instrucciones en [[Configurar Obsidian Sync#Ajustar la configuración de Obsidian Sync|Ajustar la configuración de Obsidian Sync]].
