---
permalink: bases/views/kanban
---
Kanban es un tipo de [[Vistas|vista]] que puedes usar en [[Introducción a Bases|Bases]].

Selecciona ![[lucide-kanban-square.svg#icon]] **Kanban** en el menú de vista para mostrar archivos como tarjetas organizadas en columnas. Cada columna representa un valor de la propiedad utilizada para agrupar los resultados.


> [!warning] Requiere Obsidian 1.14+
> Las vistas Kanban requieren Obsidian 1.14, que actualmente está en [[Versiones de acceso anticipado|acceso anticipado]].


## Agrupar tarjetas en columnas

Una vista Kanban requiere una propiedad para agrupar los resultados.

1. Selecciona ![[lucide-arrow-up-down.svg#icon]] **Ordenar** en la barra de herramientas.
2. En **Agrupar por**, selecciona **Propiedad** y elige una propiedad.

Los archivos sin un valor para la propiedad seleccionada aparecen en la columna **Ninguno**.

> [!info] 
> Si agrupas por una fórmula o propiedad de archivo, no puedes mover tarjetas ni columnas, ni crear notas desde las columnas. Estas propiedades no pueden editarse moviendo una tarjeta.

## Trabajar con tarjetas y columnas

- Arrastra una tarjeta a otra columna para actualizar la propiedad agrupada en esa nota. Solo las notas Markdown pueden moverse entre columnas.
- Selecciona el icono de más en el encabezado de una columna o ![[lucide-plus.svg#icon]] **Nuevo** en la parte inferior de una columna para crear una nota con el valor de esa columna.
- Arrastra el encabezado de una columna para cambiar el orden de las columnas. Para restaurar el orden original, haz clic derecho en una columna y selecciona **Restablecer orden**.
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
