---
permalink: import/airtable
cssclasses:
  - soft-embed
---
Obsidian te permite migrar tus datos desde Airtable usando el [[Importador|complemento Importador]]. Esto convierte tus bases de Airtable a archivos Markdown duraderos que puedes usar sin conexión con Obsidian y muchas otras aplicaciones.

Cada tabla se convierte en una carpeta de notas con una nota por registro, más un archivo [[Introducción a Bases|Base]] que recrea la tabla y sus vistas. Como utiliza la API de Airtable, la importación requiere un token de acceso personal y una conexión a internet.

## Crear un token de acceso personal de Airtable

Para acceder a tus datos de Airtable a través de la API necesitas un token de acceso personal. Este paso toma aproximadamente dos minutos en completarse.

El token es una cadena larga de números y letras que típicamente comienza con `pat...` que te permitirá descargar tus datos desde Airtable.

1. Inicia sesión en Airtable y ve a la página de [Tokens de acceso personal](https://airtable.com/create/tokens) en la configuración de tu cuenta.
2. Elige **Create new token**.
3. Dale un nombre a tu token, por ejemplo "Obsidian". Se puede usar cualquier nombre.
4. En **Scopes**, añade `data.records:read` y `schema.bases:read`.
5. En **Access**, añade las bases que deseas importar, o elige todas las bases en un espacio de trabajo.
6. Elige **Create token**, luego **Copy** el token.
7. Guarda el token en un lugar seguro como tu gestor de contraseñas.

Airtable solo muestra el token una vez. Si lo pierdes, crea uno nuevo.

## Importar tus datos de Airtable

Necesitarás el complemento oficial de Obsidian [[Importador]], que puedes [instalar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Abre **[[Configuración]]**.
2. Ve a **Complementos creados por la comunidad** e [instala Importador](obsidian://show-plugin?id=obsidian-importer).
3. Activa el complemento Importador.
4. Abre el complemento **Importador** usando la paleta de comandos o el icono de la barra de herramientas.
5. En **Formato de archivo** selecciona **Airtable**.
6. En **Airtable Personal Access Token**, haz clic en **Vincular...** para añadir un nuevo secreto. Para el **ID**, dale un nombre como `airtable`, y para el **Secreto** pega tu token de acceso personal.
7. Haz clic en **Cargar** para explorar tus bases, luego selecciona las tablas que deseas importar.
8. Revisa y edita las opciones de importación.
9. Selecciona **Importar** para configurar cómo tus campos serán convertidos a notas con [[Propiedades|propiedades]].
10. Selecciona **Continuar** para revisar la plantilla generada y previsualizar ejemplos de tus registros.
11. Selecciona **Importar** y espera a que la importación finalice.

## Opciones de importación

- **Convertir fórmulas** — elige si los campos de fórmula, búsqueda, rollup y conteo se reescriben como [[Fórmulas|fórmulas de Bases]], recurriendo al valor que Airtable calculó cuando no hay equivalente, o si se importan solo como valores estáticos.
- **Descargar adjuntos** — guarda los archivos adjuntos en tu bóveda, usando tu carpeta de adjuntos y la configuración de formato de enlace. Cuando está desactivado, o cuando una descarga falla, la nota enlaza a la URL del archivo en Airtable en su lugar.
- **Nombre de propiedad de vista** — la propiedad que registra a qué vistas de Airtable pertenece un registro. Cada vista en la Base generada filtra por esta propiedad. Por defecto es `Views`.
- **Guardar ID de registro de Airtable** — añade una propiedad `airtable-id` para que futuras importaciones puedan reconocer registros después de que sus notas hayan sido movidas o renombradas.

## Configurar cómo se importan los campos de Airtable

En el paso de configuración de campos, puedes elegir cómo se importa cada campo.

Por defecto, cada campo de Airtable se convierte en una propiedad. Puedes renombrar o eliminar propiedades y cambiar sus valores antes de continuar a la previsualización de la plantilla.

El campo primario de cada tabla proporciona el nombre de nota predeterminado. Puedes editar la plantilla del nombre de nota desde el paso de previsualización. Los registros siempre se colocan en una carpeta con el nombre de su tabla.

Consulta [[Plantillas del Importador]] para personalizar el Markdown generado.

## Qué se importa

Para una base llamada `Projects` con una tabla `Tasks`, el importador crea:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Una nota por registro, con el campo primario como título de la nota, y los otros campos del registro como [[Propiedades|propiedades]].
- Un archivo `.base` por tabla, con cada vista de Airtable mapeada a una [[Vistas|vista de Bases]]:
	- **Grid** se convierte en una [[Vista de tabla]].
	- **Gallery** se convierte en [[Vista de tarjetas]].
	- **List** se convierte en una [[Vista de lista]].
	- Todos los demás tipos de vista se convierten en vista de tabla.
- Los tipos de campo de Airtable se mapean a tipos de propiedad de Obsidian, sin sobrescribir los tipos que ya hayas establecido.
- Los registros vinculados se convierten en enlaces a las notas correspondientes.
- Los adjuntos se descargan en tu bóveda usando la configuración de tu bóveda.


## Limitaciones

Debido a los límites de tasa de la API de Airtable, importar bases grandes puede tomar un tiempo considerable. Por favor sé paciente.

Debido a limitaciones en la API de Airtable, algunos datos no están disponibles o no pueden ser convertidos:

- Los valores de rollup no se importan. La API no expone la agregación usada para el valor calculado de un rollup, por lo que solo se escribe el nombre de la propiedad, junto con una fórmula de Bases cuando el esquema del campo expone una expresión.
- Las fórmulas que usan funciones para las que Obsidian no tiene equivalente, como `SWITCH`, `FIND`, `REGEX_EXTRACT` y `SQRT`, recurren al valor estático de Airtable.
- Solo se importan las vistas de cuadrícula, galería y lista. Otros tipos de vista, como calendario, kanban, línea de tiempo y Gantt, se ignoran.
- Los enlaces a registros en tablas que no seleccionaste se convierten en el título simple del registro en lugar de un enlace.
- Los diseños de interfaz, automatizaciones, comentarios e historial de revisiones no se importan.

## Solución de problemas

Si encuentras problemas con la conversión, [envía un informe de error](https://github.com/obsidianmd/obsidian-importer/issues) para que podamos mejorarlo.
