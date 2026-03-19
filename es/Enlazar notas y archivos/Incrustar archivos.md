---
permalink: embeds
cssclasses:
  - soft-embed
aliases:
  - How to/Incrustar archivos
---
DESCRIPTION: Aprende cómo puedes incrustar otras notas y archivos multimedia en tus notas. Al incrustar archivos en tus notas, puedes reutilizar contenido en toda tu bóveda.

Para incrustar un archivo en tu bóveda, añade un signo de exclamación (`!`) delante de un [[Enlaces internos|enlace interno]]. Puedes incrustar archivos en cualquiera de los [[Formatos de archivo aceptados]].

> [!tip] Incrustar con arrastrar y soltar
> En escritorio, también puedes arrastrar y soltar archivos compatibles directamente en tu nota para incrustarlos automáticamente.

## Incrustar una nota en otra nota

Para incrustar una nota:

```md
![[Enlaces internos]]
```

También puedes incrustar enlaces a [[Enlaces internos#Enlazar a un encabezado en una nota|encabezados]] y [[Enlaces internos#Enlazar a un bloque en una nota|bloques]].

```md
![[Enlaces internos#^b15695]]
```

El texto a continuación es un ejemplo de un bloque incrustado:

![[Enlaces internos#^b15695]]

## Incrustar una imagen en una nota

Para incrustar una imagen:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Puedes cambiar las dimensiones de la imagen añadiendo `|640x480` al destino del enlace, donde 640 es el ancho y 480 es la altura.

```md
![[Engelbart.jpg|100x145]]
```

Si solo especificas el ancho, la imagen se escala de acuerdo con su relación de aspecto original. Por ejemplo, `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

También puedes incrustar una imagen alojada externamente usando un enlace Markdown. Puedes controlar el ancho y la altura de la misma manera que con un enlace wiki.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Incrustar un archivo de audio en una nota

Para incrustar un archivo de audio:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Incrustar un PDF en una nota

Para incrustar un PDF:

```md
![[Document.pdf]]
```

También puedes abrir una página específica en el PDF añadiendo `#page=N` al destino del enlace, donde `N` es el número de la página:

```md
![[Document.pdf#page=3]]
```

También puedes especificar la altura en píxeles para el visor de PDF incrustado, añadiendo `#height=[number]` al enlace. Por ejemplo:

```md
![[Document.pdf#height=400]]
```

## Incrustar una lista en una nota

Para incrustar una lista de una nota diferente, primero añade un [[Enlaces internos#Enlazar a un bloque en una nota|identificador de bloque]] a tu lista:

```md

- elemento de lista 1
- elemento de lista 2

^my-list-id
```

Luego enlaza a la lista usando el identificador de bloque:

```md
![[Mi nota#^my-list-id]]
```

## Incrustar resultados de búsqueda

![[Búsqueda#Incrustar resultados de búsqueda en una nota]]
