---
permalink: publish/sites
---
Esta página explica cómo gestionar los sitios de [[Introducción a Obsidian Publish|Obsidian Publish]].

Un sitio es una colección de notas alojada por Obsidian Publish y disponible en línea, ya sea a través de una dirección de Obsidian Publish o un [[Dominios personalizados|dominio personalizado]].

## Crear un nuevo sitio

> [!note] El número de sitios que puedes tener al mismo tiempo está determinado por tu suscripción a Obsidian Publish. Antes de crear un nuevo sitio, asegúrate de que tu suscripción lo permita.

1. En la barra de herramientas, a la izquierda de la ventana de la aplicación, haz clic en **Publicar cambios** ( ![[lucide-send.svg#icon]] ).
2. Si ya tienes un sitio existente, haz clic en **Cambiar sitio** ( ![[lucide-repeat.svg#icon]] ).
3. En **ID de página web**, introduce la ruta que deseas para tu sitio. Por ejemplo, un sitio con el ID `my-amazing-site` estará disponible en publish.obsidian.md/my-amazing-site.
4. Haz clic en **Crear**.

## Eliminar un sitio existente

> [!note] Las notas permanecen en tu bóveda incluso después de eliminar un sitio.

1. En la barra de herramientas, a la izquierda de la ventana de la aplicación, haz clic en **Publicar cambios** ( ![[lucide-send.svg#icon]] ).
2. Haz clic en **Cambiar sitio** ( ![[lucide-repeat.svg#icon]] ).
3. Haz clic en **Eliminar página web** ( ![[lucide-x.svg#icon]] ) a la derecha del sitio que deseas eliminar.
4. Haz clic en **Eliminar** para confirmar.

## Cambiar entre sitios

1. En la barra de herramientas, a la izquierda de la ventana de la aplicación, haz clic en **Publicar cambios** ( ![[lucide-send.svg#icon]] ).
2. Haz clic en **Cambiar sitio** ( ![[lucide-repeat.svg#icon]] ).
3. Haz clic en **Elegir** a la derecha del sitio al que deseas cambiar.

## Cambiar el ID del sitio

1. En la barra de herramientas, a la izquierda de la ventana de la aplicación, haz clic en **Publicar cambios** ( ![[lucide-send.svg#icon]] ).
2. Haz clic en **Cambiar sitio** ( ![[lucide-repeat.svg#icon]] ).
3. Haz clic en **Editar ID de página web** ( ![[lucide-edit-3.svg#icon]] ) a la derecha del sitio que deseas editar.
4. En **ID de página web**, introduce el nuevo ID para tu sitio.
5. Haz clic en **Cambio**.

## Ver opciones del sitio

1. En la barra de herramientas, a la izquierda de la ventana de la aplicación, haz clic en **Publicar cambios** ( ![[lucide-send.svg#icon]] ).
2. En el diálogo **Publicar cambios**, haz clic en **Cambiar ajustes de sitio** ( ![[lucide-cog.svg#icon]] ).

## Opciones del sitio

### General

| Opción                                       | Tipo   | Descripción                                                                                                                                     |
| -------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Nombre de la página web                      | Entrada | El nombre público y título de tu sitio de Obsidian Publish.                                                                                     |
| Archivo de página de inicio                  | Entrada | La ubicación del archivo Markdown que deseas que actúe como tu página de inicio.                                                                |
| Logotipo                                     | Entrada | La imagen que deseas que actúe como banner de tu sitio. La imagen debe [[Publicar tu contenido#Publicar notas\|estar publicada]].               |
| Colaboración de página web                   | Botón  | Declara otros usuarios a los que deseas dar acceso para editar tus notas publicadas. Los usuarios deben tener una cuenta de Obsidian.           |
| Dominio personalizado                        | Botón  | [[Dominios personalizados]]                                                                                                                     |
| Deshabilitar indexado de motores de búsqueda | Alternador | Impide que los motores de búsqueda respetuosos rastreen tu sitio añadiendo un archivo `robots.txt`.                                          |

### Apariencia

| Opción                          | Tipo        | Descripción                                                                                              |
| ------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| Tema                            | Desplegable | Elige cómo se presenta tu tema en tu sitio; **Claro**, **Oscuro** o **Adaptar al sistema**.              |
| Alternar modo claro/oscuro      | Alternador  | Permite a los usuarios alternar entre modo **Claro**/**Oscuro** con un botón de alternancia en tu sitio. |

## Experiencia de lectura

| Opción                                    | Tipo       | Descripción                                                                                                                  |
| ----------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Mostrar previsualización al ponerse encima | Alternador | Habilita o deshabilita la vista previa de página al pasar el cursor sobre un enlace interno activo.                          |
| Ocultar título de página                  | Alternador | Habilita o deshabilita la visualización del título en línea de una nota publicada.                                           |
| Longitud de línea visible                 | Alternador | Habilita o deshabilita la longitud de línea legible dentro de tu sitio.                                                      |
| Saltos de línea estrictos                 | Alternador | Habilita o deshabilita que los saltos de línea simples se muestren en tu sitio.                                              |
| Usar ventanas deslizantes                 | Alternador | Habilita o deshabilita las [[Pestañas#Apilar grupos de pestañas\|Pestañas apiladas]] en tu sitio.                            |

### Componentes

| Opción                      | Tipo       | Descripción                                                                                                                                                          |
| --------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mostrar navegación          | Alternador | Habilita o deshabilita la vista del [[Explorador de archivos]] en tu sitio de Publish.                                                                               |
| Personalizar navegación     | Botón      | [[Personalizar tu sitio#Personalizar navegación\|Personaliza]] el orden en que se listan tus archivos si **Mostrar navegación** está habilitado.                     |
| Mostrar barra de búsqueda  | Alternador | Habilita o deshabilita una barra de búsqueda en tu sitio.                                                                                                            |
| Mostrar vista gráfica       | Alternador | Habilita o deshabilita la vista de gráfico en la barra lateral derecha de tu sitio.                                                                                  |
| Mostrar tabla de contenidos | Alternador | Habilita o deshabilita la vista de [[Esquema\|Tabla de contenidos]] en tu sitio.                                                                                     |
| Mostrar enlaces entrantes   | Alternador | Habilita o deshabilita los [[Backlinks]] en tu sitio.                                                                                                                |

### Otros ajustes de la página web

| Opción                                      | Tipo    | Descripción                                                                                                                          |
| ------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Contraseñas                                 | Botón   | [[Obsidian Publish/Seguridad y privacidad#Añadir una contraseña al sitio\|Establece una contraseña]] para restringir el acceso a todo tu sitio. |
| Código de seguimiento de Google Analytics   | Entrada | **Solo para URL de dominio personalizado**. Coloca aquí tu código de seguimiento de Google Analytics.                                |
