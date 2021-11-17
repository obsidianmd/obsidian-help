El complemento Publish te permite publicar notas desde tu bóveda en tu sitio, todo desde la aplicación Obsidian.

Para obtener más información sobre el servicio Obsidian Publish™, qué se incluye, cómo funciona y privacidad, consulte la [[Obsidian Publish]] servicio complementario.

### Habilita el complemento

Desde Obsidian> Configuración> Complemento, habilite el complemento Publish. Después de eso, aparecerá un ícono de Publish (que parece un avión de papel) en el panel de la cinta.

Una vez habilitada, también puede configurar una tecla de acceso rápido para esta opción o usar la paleta de comandos para acceder a ella.

### Setee y configure su sitio

Dentro del complemento Publish, verá una opción para crear un sitio ingresando un ID de sitio único. Una vez publicado, su sitio estará disponible en `https://publish.obisidian.md/{site-id}`.

Después de crear una ID de sitio única, tendrá la opción de darle un nombre a su sitio, seleccionar una página de inicio, establecer un tema y alternar varios componentes como vista de gráfico, tabla de contenido, etc. Puede alternar estas opciones por haciendo clic en el ícono de ajustes cerca del nombre de su sitio en la parte superior del complemento Publish.

### Seleccionar archivos para publicar

Después de configurar su sitio, ¡ya puede publicar sus notas!

Con un sitio nuevo y vacío, todas sus notas aparecerán en la sección "Nuevo", lo que significa que son nuevas en su sitio. En este punto, puede elegir qué archivos desea publicar y luego hacer clic en el botón "Publish".

==Nota de privacidad: Obsidian Publish no tiene conocimiento (ni retención) de las notas que elija no publicar (ni de las notas que posteriormente elimine de su sitio publicado).==

### Hacer cambios

A medida que realiza cambios en las notas que ya se han publicado, esos cambios se seleccionarán automáticamente cuando abra el cuadro de diálogo del complemento Publish. Puede desmarcar cualquier archivo que no desee publicar en su sitio.

### Cambiar las opciones del sitio

Puede cambiar varias opciones del sitio haciendo clic en el icono de engranaje cerca del nombre de su sitio en el cuadro de diálogo "Publicar cambios".

#### Metadatos

En esta sección, puede establecer el nombre del sitio, el archivo de la página de inicio (el archivo que los visitantes ven cuando llegan a su sitio) y administrar el dominio personalizado (consulte [[Obsidian Publish#Custom domain|this guide]] para configurar su dominio personalizado).

#### Apariencia

Aquí puedes cambiar el tema entre claro y oscuro..

Si desea más personalización, puede considerar configurar [[Obsidian Publish#Custom CSS|CSS personalizado]] Y [[Obsidian Publish#Favicon|favicon]].

#### Experiencia de lectura

En esta sección, puede:

- Enableun modo especial llamado "ventanas deslizantes" que se parece a [Notas de Andy Matuschak](https://notes.andymatuschak.org/);
- Habilite la vista previa de la página al pasar el mouse como cuando se usa [[Vista previa de la página]] complemento en la aplicación;
- Configure si desea una longitud de línea legible y saltos de línea estrictos.

#### Componentes

Su sitio incluye algunos componentes que puede activar o desactivar. Éstas incluyen:

- Explorador de archivos (activado por defecto)
- Gráfico local (predeterminado activado)
- Esquema (predeterminado desactivado)
- Backlinks en la parte inferior (predeterminado desactivado)
- Barra de búsqueda (desactivada por defecto, requiere explorador de archivos)

#### Seguridad

Aquí puede establecer contraseñas para proteger su sitio. Una vez configurada, todos los visitantes deben ingresar una de las contraseñas para ingresar a su sitio.

Varias contraseñas facilitan compartir con múltiples grupos. Cuando ya no desee compartir con un grupo de visitantes, simplemente puede eliminar esa contraseña. Cada contraseña también se puede nombrar para su conveniencia.

A partir del 2021/01/20, todas las notas de su sitio están protegidas por el mismo conjunto de contraseñas.

### Agregar notas vinculadas

El botón "Agregar vinculado" le permite incluir para publicar cualquier nota en su bóveda que esté referenciada (vinculada a) por cualquier nota actualmente seleccionada. Esta es una buena forma de asegurarse de que no haya enlaces muertos en su sitio publicado.

A modo de ejemplo, supongamos que selecciona la Nota A para publicar. Suponiendo que la Nota A tiene enlaces a la Nota P, la Nota Q y la Nota R, entonces, si hace clic en el botón "Agregar enlace", las Notas P, Q y R se seleccionarán para su publicación junto con la Nota A actualmente seleccionada.

Cada vez que haga clic en el botón "Agregar vínculo", el complemento Publish buscará vínculos dentro de cada archivo seleccionado actualmente para incluirlo para su publicación. Asegúrese de revisar la lista de archivos seleccionados antes de hacer clic en el botón "Publish".

### Eliminar notas publicadas

Siempre tiene la opción de eliminar cualquier nota que se haya publicado en su sitio. Dentro del complemento Publish, se enumerarán todas las notas publicadas, de las cuales se puede seleccionar cualquiera o todas para su eliminación. Eliminar una nota de su sitio **no** elimina la nota de su bóveda, lo que le brinda la opción de volver a publicar la nota en el futuro.

### Eliminar todo el sitio

Si desea eliminar un sitio completo, haga clic en el icono de cambio de sitio (flechas) cerca de la parte superior del complemento de publicación. Luego haga clic en el botón X para eliminar su sitio. Nota: esto solo elimina su sitio público, pero no afecta ningún archivo en su bóveda. Siempre puede optar por volver a publicar sus notas.