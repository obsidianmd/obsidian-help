Muestra una representación gráfica de los  [[Enlace interno|enlaces internos]]  entre tus notas.

En este gráfico, las notas se representan por nodos cuyo tamaño aumenta en función de la cantidad de referencias que reciben. Cuanto más referencias tenga una nota, mayor será su nodo.

![[Pasted image 10.png]]


### Consejos de visualización

- Puede colocar el cursor sobre cada nodo para resaltar sus conexiones, desvaneciendo todo lo demás
- Puede arrastrar nodos para reorganizar el gráfico. Esto puede resultar útil si algunos nodos se superponen a otros


### Consejos de navegación

- Para hacer zoom, puede usar la rueda de desplazamiento del mouse, así como las teclas `+` y `-`
- Para desplazarse, arrastre el fondo o use las teclas de flecha del teclado
- Mantenga presionada la tecla `Shift` mientras navega con el teclado para acelerar las cosas


### CSS personalizado

Dado que el gráfico se representa usando `<canvas>` y WebGL, [[Personalización de CSS | CSS]] no puede afectar cosas como nodos y enlaces. Para personalizar la vista de gráfico, hemos proporcionado una forma de convertir colores CSS en comandos WebGL.


#### Se admiten las siguientes clases de CSS:

```
.graph-view.color-fill
.graph-view.color-fill-tag (theme-dependent)
.graph-view.color-fill-attachment (theme-dependent)
.graph-view.color-arrow
.graph-view.color-circle
.graph-view.color-line
.graph-view.color-text
.graph-view.color-fill-highlight
.graph-view.color-line-highlight
.graph-view.color-fill-unresolved
```

\* theme-dependent significa que puede que tenga que agregar `.theme-dark` o` .theme-light` para diseñarlo para diferentes temas. Consulte [[#CSS personalizado#Predeterminado]] para obtener una explicación.

#### Se admiten las siguientes reglas CSS:

```css
 .graph-view.color-class {
	/* Supports all CSS color directives, like #HEX, rgb and rgba */
	color:   #FFF;
	color:   #FFFFFF;
	color:   rgb(0, 0, 0);
	color:   rgba(0, 0, 0, 1);
	/* Opacity (similar to rgba) will make the color transparent */
	opacity: 0.5;
}
```

#### Predeterminado:

Estas reglas CSS son las que usa Obsidian por defecto. Puede anular cualquiera de ellos utilizando una regla CSS idéntica o [más específica](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). Esto se aplica especialmente a `.color-fill-tag` y` .color-fill-attach` Como último recurso, agregue `!important` al final de tu regla.

```css
.graph-view.color-fill,
.theme-dark .graph-view.color-fill-tag,
.theme-light .graph-view.color-fill-tag,
.theme-dark .graph-view.color-fill-attachment,
.theme-light .graph-view.color-fill-attachment,
.graph-view.color-arrow,
.graph-view.color-circle,
.graph-view.color-line,
.graph-view.color-text,
.graph-view.color-fill-highlight,
.graph-view.color-line-highlight,
.graph-view.color-fill-unresolved {}
```