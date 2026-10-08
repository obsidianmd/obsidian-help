---
permalink: bases/views/kanban
---
Kanban es un tipo de [[Vistas|vista]] que puedes usar en [[Introducción a Bases|Bases]].

Selecciona ![[lucide-kanban-square.svg#icon]] **Kanban** en el menú de vista para mostrar archivos como tarjetas organizadas en columnas. Cada columna representa un valor de la propiedad utilizada para agrupar los resultados.


> [!note] Requiere Obsidian 1.14+
> Las vistas Kanban están disponibles en Obsidian 1.14 y versiones posteriores.


## Agrupar tarjetas en columnas

Una vista Kanban requiere una propiedad para agrupar los resultados.

1. Selecciona **Grupo** en la barra de herramientas. En teléfonos, selecciona **Pantalla → Grupo**.
2. En **Agrupar por**, elige una propiedad.

Los archivos sin un valor para la propiedad seleccionada aparecen en la columna **Ninguno**.

> [!info] 
> Si agrupas por una fórmula o una propiedad de archivo distinta de `file.folder`, no puedes mover tarjetas ni columnas, ni crear notas desde las columnas. Aún puedes [[Vistas#Reordenar, ocultar y agregar grupos|gestionar el orden y la visibilidad de los grupos]] en el menú **Grupo**.

## Trabajar con tarjetas y columnas

- Arrastra una tarjeta a otra columna para actualizar la propiedad agrupada en esa nota. Solo las notas Markdown pueden moverse entre columnas, excepto cuando se agrupa por `file.folder`, donde mover una tarjeta mueve el archivo a esa carpeta.
- Selecciona el icono de más en el encabezado de una columna o ![[lucide-plus.svg#icon]] **Nuevo** en la parte inferior de una columna para crear una nota con el valor de esa columna.
- Arrastra el encabezado de una columna para cambiar el orden de las columnas. Para restaurar el orden automático, abre **Grupo** y elige un orden automático en lugar de **Manual**.
- Usa **Grupo** para [[Vistas#Reordenar, ocultar y agregar grupos|reordenar, ocultar o agregar columnas]].
- Usa el menú ![[lucide-list.svg#icon]] **Propiedades** para elegir las propiedades que se muestran en cada tarjeta. La primera propiedad se muestra como el título de la tarjeta.

## Ajustes

Los ajustes de la vista Kanban se pueden configurar en [[Vistas#Ajustes de vista|Ajustes de vista]].

- Ocultar columnas vacías
- Ancho de columna
- Propiedad de la imagen
- Ajustar
- Proporción de aspecto de imagen

### Ocultar columnas vacías

Oculta las columnas que no contienen tarjetas.

### Ancho de columna

Define el ancho de cada columna y sus tarjetas.

### Propiedad de la imagen

Las tarjetas Kanban admiten una imagen de portada opcional que se muestra en la parte superior de la tarjeta. Los valores de propiedad admitidos son los mismos que para la [[Vista de tarjetas#Propiedad de la imagen|propiedad de la imagen en la vista de tarjetas]].

### Ajustar

Si tienes una propiedad de imagen configurada, esta opción determina cómo se muestra la imagen en la tarjeta.

- **Rellenar:** La imagen llena el cuadro de contenido de la tarjeta. Si no cabe, la imagen se recorta.
- **Contener:** La imagen se escala hasta que cabe dentro del cuadro de contenido de la tarjeta. La imagen no se recorta.

### Proporción de aspecto de imagen

La altura de la imagen de portada está determinada por su proporción de aspecto. Ajusta esta opción para hacer la imagen más baja o más alta.
