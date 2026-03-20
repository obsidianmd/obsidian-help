---
permalink: sync/faq
publish: true
mobile: true
description: Esta página enumera algunas de las preguntas comunes relacionadas con consultas y limitaciones de Obsidian Sync.
---
Esta página enumera algunas de las preguntas comunes relacionadas con consultas y limitaciones de [[Introducción a Obsidian Sync|Obsidian Sync]].

## General

### ¿Qué sistemas operativos soporta Obsidian Sync?

Obsidian Sync es compatible con todas las plataformas en las que Obsidian puede ejecutarse. Actualmente eso incluye Windows, macOS, Linux, Android e iOS.

### ¿Funciona Obsidian con el Modo de Aislamiento de Apple?

Obsidian puede usarse en el [Modo de Aislamiento](https://support.apple.com/en-us/105120) siempre que Obsidian se añada como una exclusión.

### ¿Qué tipo de datos se sincronizan?

De forma predeterminada, se sincronizan tus notas de Obsidian, imágenes y tu [[Carpeta de configuración]].

Puedes añadir opciones de sincronización adicionales para PDFs, archivos de audio, archivos de vídeo y otros archivos cuando [[Ajustes de Sync y sincronización selectiva|configures la sincronización selectiva]].

### ¿Cuánto almacenamiento tengo?

El límite de almacenamiento depende de tu [[Planes y límites de almacenamiento#Planes|plan de Sync]] de Obsidian. La cantidad máxima de almacenamiento es de 100 GB. Este límite de almacenamiento incluye el [[Historial de versiones|historial de versiones]].

Puedes ver el **Tamaño de la bóveda** en la aplicación de Obsidian yendo a **[[Configuración]] → Sync**.

### ¿Cuántas bóvedas remotas puedo tener?

El número de bóvedas remotas que puedes tener se determina según tu [[Planes y límites de almacenamiento#Planes|plan de Sync]]. El plan Estándar incluye 1 bóveda, el plan Plus incluye 10 bóvedas. Las bóvedas compartidas contigo no cuentan para tu límite de bóvedas.

### ¿Qué tan grande puede ser cada bóveda remota?

No hay límite por bóveda. El límite de almacenamiento está vinculado a tu cuenta utilizada y puede aplicarse a todas tus bóvedas.

### ¿Con cuántas personas puedo compartir una bóveda remota?

Puedes [[Colaborar en una bóveda compartida|compartir una bóveda remota]] con hasta 20 personas.

### ¿Qué tan grande puede ser cada archivo?

El tamaño máximo de archivo depende de tu [[Planes y límites de almacenamiento|plan de Obsidian Sync]]. Para el plan Estándar, el límite es de 5 MB. Para el plan Plus, el límite es de 200 MB por archivo.

### ¿Se sincronizan mis datos en segundo plano?

No, los archivos solo se sincronizan cuando Obsidian está en ejecución.

### ¿Obsidian Sync recarga mis ajustes en tiempo real?

Obsidian Sync puede recargar automáticamente ciertos ajustes, pero existen algunas limitaciones. Para más detalles, consulta [[Ajustes de Sync y sincronización selectiva#Recarga de ajustes|Recarga de ajustes]].

### ¿Puedo usar una sincronización de terceros con Obsidian Sync?

No recomendamos usar un servicio de sincronización de terceros junto con Obsidian Sync. Usar un servicio de terceros y Obsidian Sync en múltiples dispositivos puede provocar conflictos, resultando en archivos duplicados o corruptos.

Los servicios de almacenamiento en la nube como OneDrive y Dropbox ofrecen funciones de "Archivos bajo demanda" o "Archivos solo en línea", que descargan archivos solo cuando se necesitan y los eliminan localmente para ahorrar espacio. Sin embargo, dado que estos archivos no siempre están disponibles localmente, Obsidian Sync los interpretará como eliminados, provocando su eliminación de tu bóveda remota.

Para evitar estos problemas, desactiva las descargas bajo demanda cuando uses Obsidian Sync con servicios como OneDrive o Dropbox. Deberás asegurarte de que los ajustes del servicio de terceros estén configurados para mantener siempre los archivos en el dispositivo.

## Retención de datos

Estas son preguntas frecuentes sobre la retención de datos de Obsidian. Para respuestas más detalladas, consulta [[Seguridad y privacidad]].

### ¿Durante cuánto tiempo conservan el historial de versiones?

El [[Historial de versiones]] depende de tu [[Planes y límites de almacenamiento|plan de Obsidian Sync]]. En el plan Estándar, tus notas se conservan durante 1 mes. En el plan Plus, tus notas se conservan durante 12 meses. Después de este período, las versiones más antiguas se eliminan.

Las versiones anteriores de los [[Archivos adjuntos|adjuntos]] se almacenan durante dos semanas.

### ¿Durante cuánto tiempo conservan mis datos después de que expire mi suscripción?

Conservamos los datos en tus bóvedas remotas, incluyendo el historial de versiones, durante un mes después de que expire tu suscripción. Las bóvedas locales en tus dispositivos no se ven afectadas.

Siempre que renueves dentro de un mes, no debería haber impacto en tu uso. Si renuevas después de un mes, cuando tus bóvedas remotas hayan sido eliminadas, puedes [[Configurar Obsidian Sync|crear una nueva bóveda remota]] y conectar tu bóveda local.

### ¿Conservan mis datos si solicito un reembolso del servicio de suscripción?

No. Los datos se eliminan inmediatamente de los servidores de Obsidian Sync. Los datos en tu [[Bóvedas locales y remotas|bóveda local]] no se ven afectados.
