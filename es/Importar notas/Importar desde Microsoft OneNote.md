---
permalink: import/onenote
---
Obsidian te permite migrar fácilmente tus notas desde Microsoft OneNote usando el [[Importador|complemento Importador]]. Esto convertirá tus datos de OneNote a archivos Markdown duraderos, que puedes usar con Obsidian y muchas otras aplicaciones.

> [!Warning]
> Solo se pueden importar cuadernos que pertenezcan a tu cuenta personal. Las notas compartidas o las cuentas de trabajo y escolares no son compatibles.

## Importar tus datos de OneNote a Obsidian

Necesitarás el complemento oficial de Obsidian [[Importador]], que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importador](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importador.
4. Abre el complemento **Importador** usando la paleta de comandos o el icono del menú de cinta.
5. En **Formato de archivo** elige **Microsoft OneNote**.
6. Haz clic en **Iniciar sesión** para abrir tu navegador web en la página de inicio de sesión de Microsoft. Ingresa las credenciales de tu cuenta de Microsoft que contiene tus cuadernos de OneNote. Más información sobre el proceso de inicio de sesión de Microsoft está disponible a continuación.
7. Haz clic en **Aceptar** para otorgar a Obsidian permiso para ver tus cuadernos de OneNote.
8. Haz clic en **Abrir enlace** para permitir que tu navegador te redirija a la aplicación Obsidian.
9. En la aplicación Obsidian, el diálogo del Importador ahora mostrará que has iniciado sesión y listará tus cuadernos y secciones de OneNote. Marca las secciones que deseas importar.

![[OneNote-Importer-Select-Sections.png]]

10. Haz clic en **Importar** y espera hasta que la importación se complete.
11. ¡Listo!

## Solución de problemas

### No aparecen secciones ni cuadernos

Asegúrate de que los cuadernos que intentas importar estén sincronizados con OneDrive y visibles en OneNote Web. Deben ser de tu propiedad (los cuadernos compartidos escritos por otros no son compatibles).

Si falta una sección específica, asegúrate de que no sea una sección bloqueada — estas son invisibles sin eliminar primero el bloqueo.

### Las notas importadas están vacías o les falta contenido

Este problema puede ocurrir en cuadernos que usas con poca frecuencia. Para resolver el problema, sigue estos pasos:

1. Abre [OneNote Web](https://onenote.com/notebooks) en tu navegador.
2. **Haz clic derecho** en los cuadernos a los que les falta contenido.
3. Selecciona **Exportar cuaderno** del menú.
4. **Descomprime** el archivo que acabas de descargar en una carpeta.
5. Sube tus cuadernos de OneNote [aquí](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Abre el **Importador de Obsidian** e intenta importar de nuevo.

Si has seguido estos consejos y tu problema sigue sin resolverse, es posible que haya un problema temporal con los servidores de Microsoft. Si ese es el caso, espera unos minutos e intenta de nuevo. Si el problema persiste, por favor abre un reporte en el [repositorio de GitHub de Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Privacidad

El complemento Importador de Obsidian usa [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) para autenticarse con tu cuenta de Microsoft e importar tus cuadernos de OneNote. Esto otorga un token de acceso a corto plazo a tu cuenta que se usa únicamente desde tu computadora y nunca se almacena. Después de que la importación se complete, puedes opcionalmente revocar el token desde la [página de aplicaciones y servicios de Microsoft](https://account.live.com/consent/Manage).
