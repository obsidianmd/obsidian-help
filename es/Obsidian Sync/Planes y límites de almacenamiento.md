---
permalink: sync/plans
publish: true
mobile: true
description: Aprende sobre las diferentes opciones de planes disponibles para Obsidian Sync.
---
## Planes

Para sincronizar tus notas con [[Introducción a Obsidian Sync|Obsidian Sync]] necesitas un plan de suscripción. Puedes comprar un plan de Sync iniciando sesión en [tu cuenta](https://obsidian.md/account/sync). Consulta la [página de Sync](https://obsidian.md/sync) para ver los precios.

A continuación se muestra una comparación entre el plan Standard y el plan Plus:

|                                                           | Sync Standard | Sync Plus       |
| --------------------------------------------------------- | ------------- | --------------- |
| Bóvedas sincronizadas                                     | 1             | 10              |
| Tamaño máximo de archivo                                  | 5 MB          | 200 MB          |
| Almacenamiento total                                      | 1 GB          | 10 GB a 100 GB  |
| [[Historial de versiones]]                                | 1 mes         | 12 meses        |
| Dispositivos                                              | Ilimitados    | Ilimitados      |
| [[Colaborar en una bóveda compartida\|Bóvedas compartidas]] | Sí            | Sí              |

## Límites de almacenamiento

La cantidad de datos que puedes almacenar usando [[Introducción a Obsidian Sync|Obsidian Sync]] depende de tu plan de suscripción. Con el plan Sync Plus puedes comprar almacenamiento adicional hasta 100 GB a través del [panel de tu cuenta](https://obsidian.md/account/sync). Consulta [[Preguntas frecuentes]] para más detalles.

Existe un único límite de almacenamiento a nivel de cuenta para todas las notas en tus bóvedas. El [[Historial de versiones]] y los [[Archivos adjuntos|adjuntos]] también cuentan para el límite de almacenamiento de tu cuenta.

Cuando alcances el límite de almacenamiento de tu cuenta, el complemento de Sync dejará de sincronizar archivos y se te pedirá que reduzcas tu(s) bóveda(s) remota(s).

### Identificar y eliminar archivos grandes

Para identificar y eliminar archivos grandes de la bóveda:

1. Abre **[[Configuración]] → Sync**.
2. Selecciona **Ver archivos más grandes** junto a **El tamaño de la bóveda supera el límite**.
	1. Si no ves **El tamaño de la bóveda supera el límite**, significa que ==aún no has alcanzado el límite de tamaño==.
3. Cierra el modal de **Ver archivos más grandes**.
4. Elimina algunos de los archivos grandes que ya no necesites.
5. Espera a que Obsidian Sync termine la tarea. Esto puede tardar un tiempo.
6. Abre **[[Configuración]] → Sync**.
7. Selecciona **Purgar** junto a **El tamaño de la bóveda supera el límite**. Esto eliminará los archivos borrados de la bóveda remota para liberar espacio.

Después de que la purga se sincronice con el servidor, Obsidian Sync debería reanudar su funcionamiento.

### Crear una nueva bóveda remota

Puedes **crear una nueva bóveda remota** para excluir archivos grandes antes de sincronizar. El historial de versiones de tus archivos se restablecerá si creas una nueva bóveda remota. Asegúrate de que no necesitas el historial de versiones de archivos anteriores antes de proceder.

Para sincronizar con una nueva bóveda remota, sigue estos pasos:

1. Abre **[[Configuración]] → Sync**.
2. Selecciona **Administrar** junto a **Bóveda remota**.
3. Elige **Crear nueva bóveda** y sigue los pasos para crearla. Si te quedas sin bóvedas, puede que necesites [[Configurar Obsidian Sync#Desconectar de una bóveda remota|desconectar]] de la bóveda remota actual y [[Configurar Obsidian Sync#Eliminar una bóveda remota|eliminarla]] primero.
4. Configura los archivos excluidos antes de comenzar a sincronizar con la nueva bóveda remota.
5. Reinicia Obsidian para aplicar los cambios.
6. Abre **[[Configuración]] → Sync**.
7. Selecciona Continuar para comenzar a sincronizar con la nueva bóveda remota.

La nueva bóveda remota debería ser más pequeña que la anterior, debido a la ausencia de historial de versiones y archivos excluidos.

## Mejorar tu plan

Puedes mejorar tu plan iniciando sesión en el [panel de tu cuenta](https://obsidian.md/account/sync). Desde allí podrás actualizar tu plan de Sync Standard a Sync Plus y aumentar el almacenamiento hasta 100 GB.

## Reducir tu plan

Si deseas reducir tu plan de Sync pero tu uso de almacenamiento excede el límite del nuevo plan, necesitarás liberar espacio en tu bóveda remota. Actualmente, no existe un método directo para eliminar archivos específicos de una bóveda remota existente rápidamente. Esto se debe a que los adjuntos se conservan en el historial de versiones hasta por dos semanas, y el historial de versiones cuenta para tu límite de almacenamiento.

La forma más rápida de reducir tu uso de almacenamiento de Sync es crear una nueva bóveda remota con los adjuntos deshabilitados y luego eliminar la bóveda remota antigua que excede los límites de almacenamiento. Ten en cuenta que perderás el historial de versiones al hacer esto.

Si estás reduciendo de Sync Plus a Sync Standard, también necesitarás reducir el número de bóvedas presentes a una antes de que se permita la reducción.

### Preservar el historial de versiones

Los adjuntos se conservan en tu [[Historial de versiones|historial de versiones]] hasta por dos semanas. Si planeas reducir tu plan en un futuro cercano, puedes comenzar eliminando los adjuntos de tu bóveda local.

Después de dos semanas, estos se purgarán de la bóveda remota y ya no contarán para tu límite de almacenamiento. En ese momento podrás reducir tu plan preservando el historial de versiones para otros tipos de archivo, como archivos Markdown.
