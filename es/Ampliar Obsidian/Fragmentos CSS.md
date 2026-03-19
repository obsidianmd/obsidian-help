---
permalink: snippets
publish: true
mobile: true
description: >-
  Aprende cómo cambiar partes de la apariencia de la aplicación Obsidian sin
  crear un tema completo.
---
Aprende cómo modificar aspectos de la apariencia de la aplicación Obsidian sin necesidad de [construir un tema](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Si buscas orientación sobre cómo manejar CSS para [[Introducción a Obsidian Publish|Obsidian Publish]], asegúrate de revisar [[Personalizar tu sitio]].

CSS es un lenguaje que controla cómo se ve el HTML. Al añadir fragmentos CSS, puedes cambiar partes de la interfaz de usuario de Obsidian, como el tamaño y color de los encabezados. Obsidian tiene [variables CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) que te ayudan a personalizar la interfaz fácilmente.

Obsidian busca fragmentos CSS dentro de la [[Carpeta de configuración|carpeta de configuración]] de la bóveda.

## Añadir un fragmento

Para añadir un fragmento CSS en **Escritorio** ![[lucide-monitor-check.svg#icon]], sigue estos pasos:

1. Abre **[[Configuración]]** ( ![[lucide-settings.svg#icon]] ).
2. En **Apariencia → Fragmentos de CSS**, selecciona **Abrir carpeta de fragmentos de CSS** ( ![[lucide-folder-open.svg#icon]] ).
3. En la carpeta de fragmentos, crea un archivo CSS que contenga tu fragmento.
4. En Obsidian, en **Apariencia → Fragmentos de CSS**, selecciona **Recargar fragmentos de CSS** ( ![[lucide-refresh-cw.svg#icon]] ) para ver el fragmento en la lista.
5. Activa el fragmento haciendo clic en el interruptor.

Para añadir un fragmento CSS en **Móvil/Tableta** ![[obsidian-icon-smartphone.svg#icon]], puedes seguir estos pasos:

1. Abre un administrador de archivos y encuentra tu bóveda. Puedes verificar la ubicación de la bóveda en _Gestionar bóvedas…_ tocando tu bóveda y mirando la ruta.
2. Abre la [[Carpeta de configuración]] y crea una carpeta llamada `snippets` si no existe.
3. Añade tu fragmento CSS a esta carpeta.
4. Abre los **[[Configuración|Ajustes]]** de Obsidian ( ![[lucide-settings.svg#icon]] ).
5. Selecciona **Apariencia** a la izquierda.
6. Desplázate hacia abajo hasta la sección **Fragmentos de CSS**.
7. Toca **Recargar fragmentos de CSS** (![[lucide-refresh-cw.svg#icon]]) para actualizar la lista.
8. Toca el interruptor para activar el fragmento.

Alternativamente, puedes
- [[Sincronizar notas entre dispositivos|Sincronizar]] cualquier cambio con tu servicio de sincronización.
- Usar un complemento de la comunidad para crear un fragmento desde dentro de Obsidian.

Una vez activado, Obsidian detectará automáticamente los cambios en los fragmentos CSS y los aplicará cuando guardes el archivo.

> [!tip] No necesitas reiniciar Obsidian para que los cambios surtan efecto. Sin embargo, puede que necesites usar el comando de la [[Paleta de comandos]] para Recargar Obsidian sin guardar para ver los cambios en el tema o nota actual.

## Escribir CSS para Obsidian

Obsidian ofrece varios métodos que hacen que escribir CSS sea más fácil y potente.

Cuenta con una serie de [variables CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) para modificar fácilmente partes de Obsidian y un [[Propiedades#Tipo de propiedad|tipo de propiedad]] integrado para cambiar la apariencia de una o varias notas.

> [!example] Variables
> Crea un archivo llamado `headers.css` con el siguiente contenido para cambiar los colores de los seis [[Sintaxis de formato básico#Encabezados|niveles de encabezado]] a un arcoíris:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] Clases CSS
> Asigna el nombre de una clase CSS personalizada (o una lista de clases CSS) a una [[Propiedades|propiedad]] predefinida `cssclasses` para hacer que una o más notas se vean diferentes de las demás.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
> }
> ```
> 
> **YAML/Propiedades**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> En cada nota que contenga el valor `red-border` en la propiedad `cssclasses`, las imágenes se muestran con un borde rojo.

Para asegurarte de que el archivo CSS sea válido y esté formateado correctamente, te recomendamos validarlo con una herramienta como [CSS Validation Service](https://jigsaw.w3.org/css-validator/), ya que el CSS inválido no funcionará.

## Aprender más

- Si eres nuevo en CSS, consulta [Aprende a dar estilo a HTML usando CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) de Mozilla.
- Para más información sobre cómo dar estilo a Obsidian, consulta:
  - [Acerca del estilo](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Construir un tema](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Construir un tema para Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Flujo de trabajo del inspector CSS de Obsidian](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
