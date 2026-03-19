---
permalink: publish/publish
publish: true
mobile: true
description: Aprende a publicar tu contenido usando Obsidian Publish
---
Esta página explica cómo administrar tu contenido publicado. Para aprender a personalizar el estilo de tu sitio, consulta [[Personalizar tu sitio]].

## Requisitos previos

- Una cuenta de Obsidian. Si no tienes una, [regístrate ahora](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Una suscripción activa a Obsidian Publish. Si no tienes una, suscríbete desde [el panel de tu cuenta](https://obsidian.md/account/publish).
- El complemento principal **Publish** está [[Configurar Obsidian Publish#Habilitar Obsidian Publish|habilitado]].
- Se ha creado un [[Gestionar sitios#Crear un nuevo sitio|sitio Publish]].

## Publicar notas

1. En la **Menú de cinta**, selecciona **Publicar cambios** (![[lucide-send.svg#icon]]).
2. En el diálogo **Publicar cambios**, selecciona **NUEVO** para ver todas las notas no publicadas.
3. Selecciona las notas que deseas publicar.
4. Selecciona **Publicar**.

## Despublicar notas

Las notas permanecen en tu bóveda local incluso después de despublicarlas.

1. En la **Menú de cinta**, selecciona **Publicar cambios** (![[lucide-send.svg#icon]]).
2. En el diálogo **Publicar cambios**, selecciona **SIN CAMBIOS** para ver todas las notas publicadas.
3. Selecciona las notas que deseas despublicar.
4. Selecciona **Publicar**.

## Actualizar una nota publicada

1. En la **Menú de cinta**, selecciona **Publicar cambios** (![[lucide-send.svg#icon]]).
2. En el diálogo **Publicar cambios**, selecciona **CAMBIOS** para ver todas las notas modificadas desde la última publicación.
3. Selecciona las notas que deseas actualizar.
4. Selecciona **Publicar**.

> [!hint] La eliminación de notas renombradas o eliminadas e imágenes de Publish ocurre en este paso. Debes seleccionar manualmente la casilla de verificación para eliminar estos datos, ya que no se selecciona automáticamente por seguridad.

## Publicar datos enlazados

Al publicar notas que contienen enlaces a otras notas o imágenes incrustadas, pueden producirse enlaces rotos a menos que las notas enlazadas también estén publicadas. **Obsidian Publish** ayuda a prevenir esto seleccionando automáticamente los medios enlazados desde las notas que ya has elegido.

Para incluir todas las notas enlazadas, selecciona **Añadir enlace** en el diálogo **Publicar cambios**.

Antes de publicar, revisa la selección actualizada para asegurarte de que no incluya datos que no estés listo para publicar.

> [!tip] La función **Añadir enlace** respeta cualquier exclusión definida en [[#Ignorar datos]].

## Seleccionar datos automáticamente para publicar

Establece `publish: true` en las [[Propiedades]] de una nota para incluirla automáticamente en la publicación como nota nueva o modificada.

También puedes seleccionar automáticamente notas e imágenes enlazadas en carpetas específicas agregándolas como carpetas **Incluidas**:

1. En la **Menú de cinta**, selecciona **Publicar cambios** (![[lucide-send.svg#icon]]) o abre la [[Paleta de comandos]] y escribe **Publish: Publicar cambios...**.
2. Selecciona el icono **Administrar los filtros de publicación** (![[lucide-filter.svg#icon]]).
3. En la sección **Carpetas incluidas**, selecciona **Administrar**.
4. Elige las carpetas que deseas incluir desde el selector.
5. La carpeta se añade a la lista de incluidas.
6. Selecciona **Hecho** cuando termines.

### Ignorar datos

Para ignorar una nota en Obsidian Publish, establece `publish: false` en las [[Propiedades]] de la nota. La nota ya no aparecerá en la lista de notas para publicar.

También puedes ignorar automáticamente notas e imágenes en carpetas específicas agregándolas como carpetas **Excluidas**:

1. En la **Menú de cinta**, selecciona **Publicar cambios** (![[lucide-send.svg#icon]]) o abre la [[Paleta de comandos]] y escribe **Publish: Publicar cambios...**.
2. Selecciona el icono **Administrar los filtros de publicación** (![[lucide-filter.svg#icon]]).
3. En la sección **Carpetas excluidas**, selecciona **Administrar**.
4. Elige las carpetas que deseas excluir desde el selector.
5. La carpeta se añade a la lista de excluidas.
6. Selecciona **Hecho** cuando termines.

> [!note] `publish: true` anula las carpetas excluidas
> Si un archivo tiene `publish: true`, se publicará igualmente aunque esté en una carpeta o filtro excluido. Esto se debe a que `publish: true` proporciona un control más específico.
