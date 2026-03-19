---
permalink: android
---
La aplicación móvil de Obsidian para Android lleva poderosas capacidades de toma de notas a tu dispositivo Android. Puedes descargarla desde [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) o como un [archivo APK](https://obsidian.md/download).
Es compatible con Android versión 5.1 y superior.

Esta página cubre características específicas de Android, incluyendo widgets, integración con Ajustes rápidos y accesos directos.

## Sync

Para sincronizar tus notas con Obsidian en Android, consulta [[Sincronizar notas entre dispositivos]].

## Ubicación de la bóveda

Cuando inicies Obsidian en Android, se te pedirá elegir dónde deben almacenarse los datos de tu bóveda. Puedes elegir **almacenamiento del dispositivo** (recomendado) o **almacenamiento de la aplicación**.

### Almacenamiento del dispositivo

Con la opción de **almacenamiento del dispositivo**, tus datos se guardan en una ubicación compartida en tu dispositivo. Esto permite que tu bóveda de Obsidian sea accesible por otras aplicaciones y servicios, como herramientas de [[Sincronizar notas entre dispositivos|sincronización]] de terceros.

Esta es la opción recomendada porque ofrece mejor compatibilidad con herramientas de sincronización y asegura que tus datos persistan incluso si desinstalas la aplicación. Sin embargo, esta opción requiere permisos adicionales para acceder a los archivos de tu dispositivo.

Debido a limitaciones de Android, Obsidian solicitará acceso a "Todos los archivos" para funcionar de manera confiable. Google recomienda esto para aplicaciones como Obsidian que se consideran "aplicaciones de gestión de documentos". [Aprender más](https://developer.android.com/training/data-storage/manage-all-files).

La aplicación solo usa este permiso para ayudarte a acceder a tus datos en tu dispositivo. Tus datos nunca son accesibles para nosotros. Para conocer más sobre cómo protegemos tus datos y aseguramos tu privacidad, visita nuestra [página de Seguridad](https://obsidian.md/security).

### Almacenamiento de la aplicación

Con la opción de **almacenamiento de la aplicación**, tus datos se guardan en el almacenamiento privado de la aplicación Obsidian. Esto mantiene tus datos aislados de otras aplicaciones para mayor privacidad.

Esta es una buena opción si no estás usando herramientas de sincronización externas y prefieres un aislamiento más estricto a nivel de aplicación para tus notas.

Con esta opción puedes usar [[Introducción a Obsidian Sync|Obsidian Sync]] y complementos de sincronización de terceros disponibles a través de [[Complementos de la comunidad]], pero no puedes usar herramientas como Syncthing que dependen del almacenamiento compartido.

> [!warning] Desinstalar Obsidian eliminará tus notas locales si estás usando almacenamiento de la aplicación
> Si usas la opción de **Almacenamiento de la aplicación**, los datos de tu bóveda local se eliminarán si desinstalas la aplicación. Los datos de tu bóveda de Obsidian en otros dispositivos no se eliminarán.

## Widgets

Obsidian para Android ofrece varias opciones de widgets para acceder rápidamente a tus bóvedas y notas desde tu pantalla de inicio. Los widgets disponibles incluyen:

- **Abrir nota** — Abrir una nota específica
- **Nueva nota** — Crear una nueva nota
- **Buscar** — Iniciar una consulta de búsqueda
- **Nota diaria** — Abrir tu nota diaria
- **Abrir Obsidian** — Iniciar la aplicación

> [!note] Nota
> Estos widgets son estáticos y no muestran vistas previas de la nota o bóveda seleccionada.

Para añadir widgets a tu pantalla de inicio:
1. Mantén pulsado en cualquier lugar de tu pantalla de inicio
2. Selecciona "Widgets"
3. Busca Obsidian, luego selecciona el widget que deseas usar.

> [!note] Nota
> Los widgets de Obsidian se pueden redimensionar. Para redimensionar un widget, mantenlo pulsado y luego arrastra los controles de redimensionamiento.

Puedes añadir múltiples widgets del mismo tipo para abrir diferentes archivos o activar diferentes consultas de búsqueda.

Para configurar un widget, mantenlo pulsado en tu pantalla de inicio, luego busca una opción de "Editar" o "Configurar". Esto te permitirá especificar los parámetros específicos requeridos para que la acción al tocar ese widget funcione, como Archivo o Ruta, Consulta de búsqueda y Nombre de la bóveda.

Consulta este [artículo de soporte de Google](https://support.google.com/android/answer/9450271?hl=en) para más información sobre los widgets de Android.

## Mosaicos de Ajustes rápidos

Requiere Android 7.0 o superior.

Añade un mosaico de Ajustes rápidos de Obsidian para un acceso rápido a la aplicación desde tu panel de notificaciones. Funciona en tu pantalla de inicio y pantalla de bloqueo.

> [!note] Nota
> A diferencia de los widgets de aplicaciones, solo puedes añadir un mosaico de Ajustes rápidos del mismo tipo.

Para añadir un mosaico de ajustes rápidos a tu panel de notificaciones:

1. Accede a tu panel de notificaciones, normalmente deslizando hacia abajo desde tu barra de estado. Nota: es posible que necesites deslizar una vez más para ver más opciones.
2. En los mosaicos de Ajustes rápidos, selecciona "Editar" — esta suele ser la misma sección donde se encuentran los interruptores como Wi-Fi, Bluetooth y Bloqueo de orientación.
3. Busca y selecciona un mosaico de Ajustes rápidos de Obsidian, luego reorganízalo a tu gusto.
4. Para configurar un mosaico de Ajustes rápidos, mantenlo pulsado para abrir la pantalla de configuración.

Consulta este [artículo de soporte de Google](https://support.google.com/android/answer/9083864?hl=en) para más información sobre los Ajustes rápidos de Android.

## Accesos directos

Requiere Android 7.1 o superior.

Obsidian proporciona accesos directos de la aplicación que se pueden utilizar de varias formas:

- Mantén pulsado el icono de la aplicación Obsidian
- Arrastra el icono del acceso directo a tu pantalla de inicio
- Accede mediante la barra de búsqueda de tu lanzador (disponible en la mayoría de fabricantes de dispositivos)

Accesos directos disponibles:

- **Abrir nota** — Abrir una nota específica en tu bóveda
- **Nota diaria** — Ir directamente a la nota diaria de hoy

> [!note] Nota
> Los accesos directos en Obsidian 1.11 no son configurables y serán renovados en versiones posteriores para ofrecer opciones más dinámicas adaptadas a tus notas específicas.
