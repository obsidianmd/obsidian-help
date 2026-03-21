---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian se ejecuta como una aplicación local en cada uno de los dispositivos de los miembros de tu equipo. Está diseñado para funcionar tanto en línea como sin conexión, de forma segura y privada, y darte control total sobre los datos de tu equipo. Obsidian no está disponible como aplicación web, por lo que necesitarás desplegar la aplicación para los miembros de tu equipo.

## Instalar y actualizar Obsidian

Tu equipo puede descargar Obsidian desde nuestra [página de descarga](https://obsidian.md/es/download). Las versiones también están disponibles en nuestra [página de lanzamientos de GitHub](https://github.com/obsidianmd/obsidian-releases/releases) que incluye enlaces al [registro de cambios](https://obsidian.md/es/changelog/).

> [!tip] Para usuarios de Windows que necesiten un instalador del sistema, el `.exe` Universal incluye la opción de instalar Obsidian para todos los usuarios.

Si las actualizaciones automáticas están habilitadas en la aplicación, las versiones futuras se instalarán automáticamente cuando los usuarios reinicien Obsidian. Además, recomendamos realizar periódicamente [[Actualizar Obsidian#Actualizaciones del instalador|actualizaciones del instalador]] para recibir las últimas actualizaciones del framework Electron, incluidas correcciones de seguridad.

Si buscas cómo limitar el acceso de red a Obsidian durante este proceso, consulta [[Consideraciones de seguridad para equipos#Red y acceso|red y acceso]].

## Personalizar Obsidian

Obsidian es fácil de modificar para adaptarse a las necesidades de tu equipo. Con una API extensa y un gran ecosistema de usuarios, Obsidian ofrece acceso a numerosos complementos, temas y herramientas complementarias.

Para preguntas relacionadas con la seguridad en estos temas, consulta [[Consideraciones de seguridad para equipos]].

### Carpetas de configuración

La [[Carpeta de configuración]] es donde una [[Glosario#Bóveda|bóveda]] de Obsidian almacena sus ajustes de aplicación. Por defecto, esta carpeta se llama `.obsidian`, pero tienes la flexibilidad de [[Carpeta de configuración#Cambiar tu carpeta de configuración|cambiar el nombre de la carpeta de configuración]] según tu preferencia.

Recomendamos crear una plantilla estandarizada de la carpeta de configuración para desplegarla en los dispositivos de tu equipo.

### Plugins

Los [[Complementos principales]] son funcionalidades opcionales creadas por el equipo de Obsidian. Estas funcionalidades están integradas en el código base de la aplicación principal y pueden activarse o desactivarse.

Los [[Complementos de la comunidad]] son funcionalidades de terceros añadidas a la aplicación de Obsidian, y pueden instalarse a través del directorio de la comunidad. Los complementos de terceros aprovechan la [API de Obsidian](https://github.com/obsidianmd/obsidian-api). Los complementos se encuentran en la carpeta `.obsidian/plugins` dentro de una bóveda, y pueden instalarse manualmente en esta ubicación.

### Temas y fragmentos

Los [[Temas]] modifican visualmente la interfaz de Obsidian. Al igual que los complementos, los temas pueden descargarse desde nuestro directorio de la comunidad. Los temas se encuentran en la carpeta `.obsidian/themes` dentro de una bóveda.

Los [[Fragmentos CSS|Fragmentos]] son pequeños archivos `.css` que modifican visualmente aspectos de la interfaz de Obsidian. En algunos casos, también pueden añadir mejoras funcionales. Los fragmentos se encuentran en la carpeta `.obsidian/snippets` dentro de una bóveda.

## Preguntas frecuentes

Para preguntas sobre la gestión de cuentas y seguridad, consulta [[Consideraciones de seguridad para equipos#Seguridad de la cuenta|seguridad de la cuenta]].

### Despliegue

**¿Puedo desplegar licencias en múltiples instalaciones?**
Actualmente, no admitimos el despliegue de licencias mediante un script de despliegue, como en un archivo `.json`. Si estás interesado en esta funcionalidad para tu equipo, envía una [solicitud de funcionalidad](https://forum.obsidian.md/c/feature-requests/8).

**¿Puede Obsidian bloquear ciertas funcionalidades o configuraciones mediante un ajuste o un indicador de la aplicación?**
Actualmente puedes hacer esto bloqueando el acceso de edición a la carpeta `.obsidian`, o a archivos y carpetas específicos dentro de ella, descritos anteriormente. Si estás interesado en más controles de acceso para tu equipo, envía una [solicitud de funcionalidad](https://forum.obsidian.md/c/feature-requests/8).
