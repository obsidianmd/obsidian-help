---
permalink: import/notion
---
Obsidian te permite migrar fácilmente tus notas desde Notion usando el [[Importador|complemento Importador]]. Esto convertirá tus datos de Notion a archivos Markdown duraderos que puedes usar sin conexión con Obsidian y muchas otras aplicaciones.

Obsidian ofrece dos formas de importar tus datos de Notion:

1. **Cuenta de Notion (recomendado)** se conecta directamente a tu espacio de trabajo y te permite preservar Bases de datos y fórmulas que se convierten a [[Introducción a Bases|Bases]]. Requiere un token de integración de Notion y una conexión a internet.
2. **Importación por archivo** usa los archivos de exportación `.zip` de Notion. No preserva las Bases de datos pero no requiere un token de API ni conexión a internet.

## Importar desde tu cuenta de Notion

### Crear un token de acceso de la API de Notion

Para acceder a tus datos de Notion a través de la API necesitas un token de acceso. Este paso toma aproximadamente dos minutos.

El token es una cadena larga de números y letras que típicamente comienza con `ntn_...` y te permitirá descargar tus datos de Notion.

1. Inicia sesión en tu panel de [Conexiones de Notion](https://app.notion.com/developers/connections).
2. Elige **New connection**.
	1. Dale un nombre a tu conexión, por ejemplo "Personal". Se puede usar cualquier nombre.
	2. Elige **Access token** como método de autenticación.
	3. Elige el espacio de trabajo que quieres exportar como **Installable in**.

![[notion-integration.png#interface]]

3. Haz clic en **Create connection**.
4. En la pestaña **Configuration** tu token de API es accesible en el campo **Access token**.
5. Selecciona **Show** y luego **Copy**.
6. Guarda el token en un lugar seguro como tu gestor de contraseñas.

![[notion-token.png#interface]]

A continuación, dale a tu conexión acceso a las páginas y bases de datos de Notion que quieres importar.

1. Ve a la pestaña **Content access** de la conexión que acabas de crear.
2. Añade las páginas y bases de datos que quieres importar.

![[notion-content.png#interface]]

Ahora puedes convertir tus datos usando el Importador de Obsidian.

### Importar tus datos de Notion a través de la API

Necesitarás el complemento oficial [[Importador]] de Obsidian, que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importer.
4. Abre el complemento **Importer** usando la paleta de comandos o el icono del menú de cinta.
5. En **Formato de archivo** selecciona **Notion (API)**
6. En **API token**, haz clic en **Vincular...** para añadir un nuevo secreto. Para el **ID**, dale un nombre como `notion`, y para el **Secreto** pega tu **Access token** de Notion.
7. Haz clic en **Cargar** para elegir las bases de datos y páginas que quieres importar.
8. Revisa y edita las opciones de importación.
9. Selecciona **Import** y espera hasta que la importación se complete.
10. ¡Listo!

### Limitaciones

> [!info] La importación por API es nueva
> El importador de la API de Notion es nuevo. Debido a la complejidad de los espacios de trabajo de Notion, algunos casos límite pueden no haberse considerado. Si encuentras problemas con la conversión, [envía un informe de error](https://github.com/obsidianmd/obsidian-importer/issues) para que podamos mejorarlo.

Debido a los límites de velocidad de la API de Notion, importar espacios de trabajo grandes puede tomar un tiempo considerable. Por favor, ten paciencia.

Debido a limitaciones en la API de Notion, algunos datos no están disponibles o no pueden convertirse:

- Solo se importa la vista principal de cada base de datos.
- Las [fuentes de datos vinculadas](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) no se importan: *"La API de Notion actualmente no soporta fuentes de datos vinculadas. Al compartir una base de datos con tu integración, ¡asegúrate de que contenga la fuente de datos original!"*
- Funciones de `People`: `name()` y `email()`
- Funciones de `Text`: `style()` y `unstyle()`

Además, el Importador realizará los siguientes cambios:

- Las páginas sin páginas secundarias o bases de datos se importarán como `[nombre_archivo].md` en lugar de `[nombre_archivo]/[nombre_archivo].md`.
- Las bases de datos siempre se representan como carpetas llamadas `[nombre de la base de datos]` con un archivo `[nombre de la base de datos].base` dentro.

## Importar archivos de Notion (.zip)

La importación por archivo es una forma alternativa de importar tus datos de Notion. Este método no preserva las Bases de datos pero no requiere un token de API ni conexión a internet.

### Exportar tus datos desde Notion

Para preparar tus datos para la importación, necesitarás exportar todo tu espacio de trabajo usando el formato de exportación HTML de Notion. Recomendamos que no uses la exportación Markdown de Notion ya que omite datos importantes. Debes tener acceso de administrador al espacio de trabajo de Notion para exportar todo el contenido del espacio de trabajo.

1. Ve a **Settings** en la parte superior de la barra lateral de Notion.
2. En **Workspace** selecciona **General**.
3. Busca y selecciona **Export all workspace content**.
4. En **Export format** selecciona **HTML**.
5. Elige **Include everything**.
6. Activa **Create folders for subpages**.
7. Recibirás un archivo `.zip` por correo electrónico o directamente en el navegador.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Importar tu archivo .zip de Notion

Necesitarás el complemento oficial [[Importador]] de Obsidian, que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importer.
4. Abre el complemento **Importer** usando la paleta de comandos o el icono del menú de cinta.
5. En **Formato de archivo** selecciona **Notion (.zip)**
6. Elige el archivo `.zip` con los archivos de Notion que quieres importar. *Se recomienda importar todo tu Notion de una vez para que los enlaces internos puedan reconciliarse correctamente.*
7. _Opcionalmente_, selecciona una carpeta para la importación. Tus páginas y bases de datos de Notion se anidarán dentro de esta carpeta.
8. Activa **Save parent pages in subfolders** para mantener la estructura de Notion. *Ten en cuenta que en Notion puedes escribir contenido en Carpetas, esto no es posible en Obsidian y estas páginas se añadirán como una subpágina dentro de la carpeta.*
9. Selecciona **Import** y espera hasta que la importación se complete.
10. ¡Listo!

### Solución de problemas

Si encuentras problemas al importar desde Notion:

- Asegúrate de usar **HTML** como formato de exportación en Notion, **no Markdown**.
- Si Obsidian parece congelarse durante la importación, desactiva los complementos de la comunidad e inténtalo de nuevo.

¿Encontraste algo más? Busca en [el repositorio de Importer](https://github.com/obsidianmd/obsidian-importer/issues) para ver si otros han experimentado lo mismo.

#### Importar espacios de trabajo grandes

Si estás importando un espacio de trabajo con múltiples gigabytes de datos, la exportación de Notion puede contener archivos `.zip` anidados. En este caso puede que veas un mensaje de error de importación que se ve algo así:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Si ves este error, puedes descomprimir el archivo de Notion y luego importar los archivos `Export-{id}-Part-1.zip` anidados.
