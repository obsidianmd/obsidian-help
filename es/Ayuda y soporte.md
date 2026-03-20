---
permalink: resources
publish: true
mobile: true
description: Encuentra recursos de soporte, reporta problemas de seguridad o violaciones de la comunidad, y aprende cómo contribuir a Obsidian.
---
Encuentra recursos de soporte, reporta problemas de seguridad o violaciones de la comunidad, y aprende cómo contribuir a Obsidian.

## Preguntas y consejos

Si tienes una pregunta sobre cómo usar Obsidian, o quieres conocer a otros usuarios de Obsidian, puedes unirte a uno de nuestros canales de la comunidad:

- [[Bóveda de pruebas|Explorar la bóveda de pruebas]]
- [Únete a nuestro servidor de Discord](https://discord.gg/obsidianmd)
- [Visita el foro](https://forum.obsidian.md/)

### Reportar errores y solicitar funciones

> [!tip]- Verifica que no existan duplicados primero
> Antes de solicitar una nueva función o reportar un error, por favor revisa las otras publicaciones para asegurarte de que alguien más no lo haya enviado ya.

Si quieres sugerir una función en Obsidian, dirígete a [Solicitudes de funciones](https://forum.obsidian.md/c/feature-requests/8).

Si quieres reportar un error en Obsidian, dirígete a [Reportes de errores](https://forum.obsidian.md/c/bug-reports/7). Los reportes de errores se mueven al [Cementerio de errores](https://forum.obsidian.md/c/bug-graveyard/12) una vez que se resuelven.

### Recopilar información de depuración

Cuando encuentres un error o necesites asistencia del [[#Contactar al soporte de Obsidian|soporte de Obsidian]], proporcionar información de depuración puede ser muy útil. Así es como puedes obtenerla:

1. Abre la [[Paleta de comandos]].
2. Escribe **Mostrar Información de Depuración**.
3. Selecciona la opción resaltada **Mostrar Información de Depuración**.
4. Selecciona **Copiar al portapapeles**.
5. Pega la información copiada en tu reporte de error o correo electrónico al soporte de Obsidian.

### Verificar el tiempo de inicio

Puedes verificar cuánto tarda Obsidian en iniciar usando la función **Tiempo de inicio**.

1. Abre **[[Configuración]] → General → Avanzado**.
2. Junto a **Notificar si la apertura tarda más de lo esperado**, selecciona el **icono de temporizador**.
3. Aparecerá una ventana de **Tiempo de inicio**, mostrando información detallada de tiempos:
   - **Inicio total de la aplicación**: Tiempo total de arranque.
   - **Inicialización**: Tiempo dedicado a cargar la aplicación en sí.
   - **Bóveda**: Tiempo para cargar los archivos de tu bóveda.
   - **Espacio de trabajo**: Tiempo para restaurar pestañas y disposición.
   - **Complementos principales**: Tiempo utilizado por los complementos principales activos.
4. Puedes seleccionar **Copiar al portapapeles** para copiar el reporte para solución de problemas o para compartirlo.

Además, puedes activar **Notificar si la apertura tarda más de lo esperado** para recibir una advertencia si el inicio es inusualmente lento.

### Capturar registros de consola

Cuando necesites reportar un error relacionado con un complemento de Obsidian o cuando el [[#Contactar al soporte de Obsidian|soporte de Obsidian]] te solicite proporcionar información de registros, es posible que necesites acceder a la consola de Obsidian desde la aplicación. Así es como hacerlo según tu sistema operativo:

- **Windows/Linux**: `Ctrl+Shift+I`
- **macOS**: `Command+Option+I`

> [!info]+ Método de acceso alternativo
> Si usas el estilo de marco de ventana **Marco de Obsidian**, también puedes acceder a la consola de Obsidian a través del menú del título.

Una vez que hayas abierto la consola de desarrollador:

1. Selecciona **console** en el menú superior.
2. Elige la opción del menú lateral **errors**. Cualquier error se mostrará como `# errors`.
3. Selecciona uno de los mensajes de error en rojo.
4. Elige la opción **Guardar como...** Esto guardará todos los errores en la consola.
5. Guarda el archivo de registro en tu dispositivo.
6. Adjunta el archivo de registro a tu reporte de error o correo electrónico al soporte de Obsidian.

![[help-support-console-menu.png#interface|600]]

> [!warning]+ Acceso a la consola en dispositivos móviles
> Los dispositivos móviles y tabletas tienen acceso limitado a sus consolas de desarrollador. Para estos usuarios, recomendamos usar el complemento de la comunidad [Logstravaganza](https://obsidian.md/plugins?id=logstravaganza) para generar automáticamente los datos del registro de consola en una nota Markdown.

### Contactar al soporte de Obsidian

Obsidian ofrece soporte por correo electrónico únicamente para consultas sobre [[Licencia comercial|licencias comerciales]], tu cuenta, pagos y servicios adicionales ([[Introducción a Obsidian Sync|Obsidian Sync]] e [[Introducción a Obsidian Publish|Obsidian Publish]]). Si necesitas ayuda con alguno de esos temas, [envía un correo al equipo de Obsidian](mailto:support@obsidian.md).

## Reportar un problema de seguridad

Si has descubierto un problema de seguridad en Obsidian, o si sospechas que un complemento es malicioso, por favor [envía un correo al equipo de Obsidian](mailto:support@obsidian.md).

## Reportar una violación del Código de Conducta

Ya seas víctima o testigo de una violación de nuestro [[Código de conducta de la comunidad]], puedes reportar el incidente a nuestro equipo de moderadores.

Reporta el incidente en uno de los siguientes canales de la comunidad:

- [[Código de conducta de la comunidad#Reportar en Discord|Reportar en Discord]]
- [[Código de conducta de la comunidad#Reportar en el foro|Reportar en el foro]]

## Contribuir a Obsidian

¿Te interesa aplicar tus habilidades y tiempo libre a Obsidian? Aquí es donde realmente podríamos usar tu ayuda:

- Ayuda a otros usuarios de Obsidian respondiendo preguntas en nuestro [servidor de Discord](https://discord.gg/obsidianmd), nuestro [foro](https://forum.obsidian.md/), o el reddit de [ObsidianMD](https://old.reddit.com/r/ObsidianMD/).
- [[Desarrolladores]], realmente podríamos usar tu ayuda para expandir nuestra [Documentación para Desarrolladores de Obsidian](https://github.com/obsidianmd/obsidian-developer-docs).
- ¿Conoces algún idioma escrito además del inglés? Considera ayudar con nuestras [[Traducciones]] a otros idiomas.
- ¿Hay algo en estos documentos de ayuda que esté desactualizado o sea confuso? Consulta la [[Guía de estilo]] y envía un [issue y pull request](https://github.com/obsidianmd/obsidian-help/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc).
- Si es posible, puedes [[Contribuciones financieras|contribuir financieramente]] utilizando uno de nuestros servicios adicionales de pago.
