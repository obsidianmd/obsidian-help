---
permalink: import/onenote
cssclasses:
  - soft-embed
---
Obsidian te permite migrar fácilmente tus notas desde Microsoft OneNote usando el [[Importador|complemento Importador]]. Esto convierte tus datos de OneNote a archivos Markdown duraderos que puedes usar con Obsidian y muchas otras aplicaciones.

Obsidian ofrece dos formas de importar tus datos de OneNote:

1. **Cuenta de Microsoft** inicia sesión en tu cuenta de Microsoft e importa los cuadernos sincronizados con OneDrive. Requiere conexión a internet.
2. **Importación de archivos** usa los archivos de exportación de OneNote (`.onepkg` y `.one`). No requiere cuenta ni conexión a internet, y funciona para cuadernos que nunca fueron sincronizados.

## Importar desde tu cuenta de Microsoft

> [!Warning]
> Solo se pueden importar cuadernos que pertenezcan a tu cuenta. Los cuadernos que otras personas compartieron contigo no son compatibles, y una cuenta de trabajo o escolar puede necesitar que tu organización apruebe el acceso.

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
10. Selecciona **Importar** para revisar la plantilla generada y previsualizar ejemplos de tus páginas.
11. Selecciona **Importar** de nuevo y espera a que la importación finalice.

Si tus cuadernos pertenecen a una cuenta de trabajo o escolar, OneNote puede rechazar el acceso del complemento a ellos después de iniciar sesión. Cuando esto ocurra, aparecerá un botón **Usar acceso de trabajo o escolar** junto a **Cerrar sesión**. Úsalo para iniciar sesión de nuevo con el permiso más amplio que esas cuentas necesitan. Tu organización puede tener que aprobar ese permiso antes de que funcione.

### Solución de problemas

#### No aparecen secciones ni cuadernos

Asegúrate de que los cuadernos que intentas importar estén sincronizados con OneDrive y visibles en OneNote Web. Deben ser de tu propiedad (los cuadernos compartidos escritos por otros no son compatibles).

Si falta una sección específica, asegúrate de que no sea una sección bloqueada, ya que estas son invisibles sin eliminar primero el bloqueo.

Si es un cuaderno de trabajo o escolar, consulta la nota sobre **Usar acceso de trabajo o escolar** más arriba.

#### Las notas importadas están vacías o les falta contenido

Este problema puede ocurrir en cuadernos que usas con poca frecuencia. Para resolver el problema, sigue estos pasos:

1. Abre [OneNote Web](https://onenote.com/notebooks) en tu navegador.
2. **Haz clic derecho** en los cuadernos a los que les falta contenido.
3. Selecciona **Exportar cuaderno** del menú.
4. **Descomprime** el archivo que acabas de descargar en una carpeta.
5. Sube tus cuadernos de OneNote [aquí](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Abre el **Importador de Obsidian** e intenta importar de nuevo.

Si has seguido estos consejos y tu problema sigue sin resolverse, es posible que haya un problema temporal con los servidores de Microsoft. Si ese es el caso, espera unos minutos e intenta de nuevo. Si el problema persiste, por favor abre un reporte en el [repositorio de GitHub de Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Importar archivos de OneNote (.one, .onepkg)

La importación de archivos es una forma alternativa de importar tus datos de OneNote. Lee los archivos de exportación que OneNote genera, por lo que no necesita cuenta de Microsoft ni conexión a internet. Úsala para cuadernos almacenados solo en tu computadora, cuadernos a los que tu cuenta no puede acceder, o cuando prefieras no iniciar sesión.

### Exportar tus cuadernos desde OneNote

Recomendamos exportar cada cuaderno como un **Paquete de OneNote** (`.onepkg`). Un paquete contiene todas las secciones del cuaderno, por lo que puedes exportar e importar un cuaderno en un solo paso, y el Importador listará sus secciones para que elijas.

La exportación solo está disponible en **OneNote para Windows**, la aplicación de escritorio que viene con Microsoft 365. La aplicación de OneNote para Mac y la antigua aplicación OneNote para Windows 10 no pueden exportar a estos formatos.

1. Abre el cuaderno que deseas exportar en OneNote para Windows.
2. Ve a **Archivo → Exportar**.
3. En **Exportar actual** elige **Cuaderno**.
4. En **Seleccionar formato** elige **Paquete de OneNote (\*.onepkg)**.
5. Haz clic en **Exportar** y elige dónde guardar el archivo.
6. Repite para cada cuaderno que desees importar.

Para exportar una sola sección, elige **Sección** en el paso 3 y **Sección de OneNote 2010-2016 (\*.one)** en el paso 4.

También puedes importar los archivos de sección que OneNote ya mantiene en disco, sin necesidad de exportar nada:

- Los cuadernos almacenados en tu computadora están en `Documentos\OneNote Notebooks`, un archivo `.one` por sección.
- Las copias de seguridad de cuadernos sincronizados están en `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Importar tus archivos de OneNote

Necesitarás el complemento oficial de Obsidian [[Importador]], que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importador](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importador.
4. Abre el complemento **Importador** usando la paleta de comandos o el icono del menú de cinta.
5. En **Formato de archivo** elige **Microsoft OneNote (.one, .onepkg)**.
6. Elige los archivos `.onepkg` y `.one` que deseas importar. Puedes seleccionar más de un archivo a la vez, para que todos tus cuadernos se importen juntos.
7. En **Secciones a importar** se listan las secciones encontradas en esos archivos, con todo marcado. Desmarca lo que no desees.
8. Opcionalmente, elige una **Carpeta de salida** para la importación, dónde deben guardarse los adjuntos, y qué debe pasar con las **Notas existentes** si importas el mismo cuaderno de nuevo.
9. Selecciona **Importar** para revisar la plantilla generada y previsualizar ejemplos de tus páginas.
10. Selecciona **Importar** de nuevo y espera a que la importación finalice.

Cada sección se convierte en una carpeta, y cada página en ella se convierte en una nota. Una subpágina se guarda en una carpeta con el nombre de la página que está encima, lo que mantiene la estructura que OneNote mostraba y evita que dos subpáginas con el mismo nombre colisionen. Las páginas en la papelera de reciclaje del cuaderno no se importan.

### Limitaciones

- Las secciones protegidas con contraseña están almacenadas con cifrado, y sus páginas se omiten. Elimina la contraseña en OneNote y exporta de nuevo para importarlas.
- Los archivos protegidos por derechos solo pueden ser abiertos por una cuenta que la política permita, y no pueden ser leídos por el Importador.

## Plantillas

Usa [[Plantillas del importador|plantillas del Importador]] para configurar completamente cómo se importan tus datos de OneNote.

![[Plantillas del importador#Variables]]

## Privacidad

Si eliges importar usando tu cuenta de Microsoft, el complemento Importador de Obsidian usa [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) para autenticarse e importar tus cuadernos de OneNote. Esto otorga un token de acceso a corto plazo a tu cuenta que se usa únicamente desde tu computadora y nunca se almacena. Después de que la importación se complete, puedes opcionalmente revocar el token desde la [página de aplicaciones y servicios de Microsoft](https://account.live.com/consent/Manage).

La importación de archivos nunca se conecta a Microsoft: los archivos que seleccionas se leen en tu computadora, sin ninguna conexión de red.
