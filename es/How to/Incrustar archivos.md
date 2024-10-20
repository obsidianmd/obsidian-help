### Insertar archivos adjuntos

Puede incrustar archivos adjuntos como imágenes o audio en sus notas. Utilice la sintaxis `! [[Filename.png]]` así:

![[Engelbart.jpg]]

![[Excerpt from Mother of All Demos (1968).ogg]]

Puede incrustar un archivo PDF en sus notas con la misma sintaxis. Además, puede escribir `! [[My File.pdf # page = number]]` para abrir esa página específica del PDF directamente.

### Insertar notas

También puede incrustar una nota, con la misma sintaxis:

![[Formatos de archivo aceptados]]

### iframe

"iframe" es una forma de incrustar una página web en otra. Es útil porque Markdown puede aceptar HTML, que es un lenguaje simple para construir las páginas web que vemos todos los días.

Por ejemplo:

```html
<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>
```

Produce:

<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>

La sintaxis básica es:

```html
<iframe src="INSERT YOUR URL HERE"></iframe>
```

Algunos sitios web tienen peculiaridades que no le permiten incrustarlos. Por ejemplo, no puede incrustar un video de YouTube usando su URL normal, pero puede usar su URL incrustada que es
`https://www.youtube.com/embed/VIDEO_ID`.

Si desea insertar un sitio web, intente buscar "{website} embed iframe".

Por ejemplo, puede incrustar tweets de Twitter como lo sugieren los resultados de búsqueda:


```html
<iframe
	border=0
	frameborder=0
	height=250
	width=550  
	src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20">
</iframe>
```

<iframe border=0 frameborder=0 height=250 width=550  
 src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20"></iframe>

---

### Notas del desarrollador

La sintaxis está inspirada en la sintaxis de imagen de Markdown. Tuvimos dos observaciones:

 1. `[Image](link.png)` 
 enlaza a la imagen, pero `![Image](link.png)` realmente lo muestra

 2. La sintaxis del enlace interno se basa en esta suposición:`[[My page]]` es un atajo (o "azúcar sintáctico" si se quiere) para`[My page](My page)`

Para combinar estas dos cosas, podemos crear un tercer patrón:`![[My page]]` debería ser equivalente a `![My page](My page)` , que según la convención de la imagen, si el título es el mismo que el enlace, debería mostrarlo.

Existen otras implementaciones, por ejemplo, usos de Roam Research `{{embed: ((NODE_ID))}}`. También hemos considerado utilizar el `((Page name))` sintaxis también, pero sentimos que`![[Page name]]` es más consistente, más familiar y deja más espacio para que los otros símbolos tengan sus propios significados.

#### Cambiar el tamaño de las imágenes
Puede cambiar el tamaño de las imágenes con la siguiente sintaxis:

Para imágenes de markdown, use`![AltText|100x100](https://url/to/image.png)`

Para incrustaciones, utilice`![[image.png|100x100]]`

Para tener la escala de la imagen de acuerdo con su relación de aspecto, omita la altura`![[image.png|100]]`
