---
permalink: publish/customize
publish: true
description: >-
  Aprende a personalizar la apariencia y el estilo de tu sitio de Obsidian
  Publish.
---
Esta página explica cómo puedes personalizar la apariencia y el estilo de tu sitio de [[Introducción a Obsidian Publish|Obsidian Publish]].

## Recursos estáticos

Puedes personalizar tu sitio [[Publicar tu contenido#Publicar notas|publicando]] los siguientes archivos en tu sitio:

- `publish.css` para agregar CSS personalizado
- `publish.js` para agregar JavaScript personalizado
- `favicon-32x32.png` para establecer el favicon

**Notas:**

- Las [variables CSS para Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) se pueden encontrar en nuestro sitio de documentación.
- Dado que Obsidian no admite archivos CSS o JavaScript, necesitas usar otra aplicación para crearlos y editarlos.
- Tanto `publish.css` como `publish.js` deben estar ubicados en el directorio raíz (`/`) de tu bóveda.
- Por defecto, `publish.css` y `publish.js` no aparecen en el explorador de archivos, pero aún puedes publicarlos desde el diálogo **Publicar cambios**.
- Para usar JavaScript personalizado con `publish.js`, necesitas [[Dominios personalizados]].

Para los favicons, Obsidian Publish admite las siguientes convenciones de nomenclatura, donde `32` representa las dimensiones del icono en píxeles:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Recomendamos que proporciones una o más de las siguientes dimensiones:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Tienes flexibilidad para colocar los favicons en cualquier lugar dentro de la bóveda, siempre que estén publicados en tu sitio.

## Usar un tema de la comunidad

Para usar uno de los temas de la comunidad en tu sitio:

1. Abre tu bóveda en el explorador de archivos predeterminado de tu sistema operativo.
2. Ve a la carpeta de configuración de la bóveda (predeterminada: `.obsidian`).
3. Abre la carpeta `themes`.
4. Copia el archivo CSS del tema que deseas usar para tu sitio.
5. Pega el archivo en la carpeta raíz de tu bóveda.
6. Renombra el archivo CSS a `publish.css`.
7. [[Publicar tu contenido#Publicar notas|Publica]] `publish.css`.

**Notas:**

- Si el estilo no se actualiza en unos minutos, intenta limpiar la caché de tu navegador.
- Puedes cambiar entre modo claro y oscuro en las [[Gestionar sitios#Ver opciones del sitio|opciones del sitio]].
- Muchos temas de la comunidad usan **Style Settings** para estilos personalizados, pero estos ajustes no funcionan en Obsidian Publish.

> [!tip] Desarrollar temas
> ¿No encuentras el tema adecuado para ti? Aprende a [construir un tema para Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme) tú mismo.

## Habilitar características de la interfaz

Puedes activar o desactivar varias características de la interfaz para tu sitio, como la vista de gráfico o una tabla de contenidos.

Explora las características de interfaz disponibles en las secciones **Experiencia de lectura** y **Componentes** en las [[Gestionar sitios#Ver opciones del sitio|opciones del sitio]].

### Personalizar navegación

Dentro de Obsidian Publish, tienes la capacidad de personalizar el orden de navegación y la visualización de archivos y carpetas dentro del [[Explorador de archivos]] de Publish. Los elementos de navegación se listan en orden de publicación por defecto. Las notas no publicadas no aparecerán en este panel.

#### Acceder a las opciones de personalizar navegación

1. En la [[Menú de cinta]], selecciona **Publicar cambios** (![[lucide-send.svg#icon]]) o abre la [[Paleta de comandos]] y escribe **Publish: Publicar cambios...**
2. En el diálogo **Publicar cambios**, selecciona **Cambiar ajustes de sitio** ( ![[lucide-cog.svg#icon]] ).
3. En **Ajustes de componentes**, junto a **Personalizar navegación**, selecciona el botón **Administrar**.

Aparecerá una nueva ventana emergente titulada **Navegación** sobre tu ventana de **Cambiar ajustes de sitio**.

#### Ajustar elementos de navegación

En la sección etiquetada **Vista previa de navegación**, puedes ajustar el orden de visualización de tu contenido publicado.

1. Selecciona la carpeta o nota que deseas ajustar.
2. Arrastra la nota o carpeta hacia arriba o hacia abajo hasta que esté en el lugar deseado.
3. En la parte inferior derecha de la ventana **Navegación**, selecciona **Hecho**.

Publish enviará los cambios de navegación a tu sitio.

#### Ocultar y mostrar elementos de navegación

Si hay notas o carpetas que has publicado, pero no deseas que sean visibles en tu navegación, puedes optar por ocultar esos elementos.

1. Selecciona la carpeta o nota que deseas ajustar.
2. Haz clic derecho y selecciona **Ocultar en navegación**. El elemento debería desaparecer de la **Vista previa de navegación**.
3. En la parte inferior derecha de la ventana **Navegación**, selecciona **Hecho**.

Publish enviará los cambios de navegación a tu sitio.

> [!tip] Puedes **Mostrar archivos ocultos** seleccionando la casilla de verificación a la derecha del título **Vista previa de navegación**

## Preguntas frecuentes

**¿Puedo mover archivos de una carpeta a otra dentro de la Navegación?**

No. La estructura de navegación de archivos para las notas dentro de las carpetas debe mantenerse. Puedes ajustar el orden de las notas dentro de las carpetas (incluyendo la raíz de la bóveda), y el orden de las carpetas dentro de otras carpetas.

**¿Puedo editar el orden de múltiples notas y carpetas antes de seleccionar Hecho?**

Sí.

**¿Cómo revierto estos cambios?**

- **Orden de visualización**: Selecciona el icono **Restaurar los valores por defecto** (flecha de rotación en sentido contrario a las agujas del reloj) junto a **Orden de los elementos de navegación**. Esto restaurará tus elementos de navegación al orden alfabético.
- **Estado oculto**: Selecciona el icono **Restaurar los valores por defecto** (flecha de rotación en sentido contrario a las agujas del reloj) junto a **Ocultar páginas o carpetas de la navegación**. Esto restaurará tus elementos de navegación ocultos a un estado visible.
