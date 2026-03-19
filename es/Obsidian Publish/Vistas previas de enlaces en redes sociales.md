---
permalink: publish/social-share
---
Muchas redes sociales muestran una vista previa enriquecida de tu sitio web cuando un usuario comparte un enlace al mismo. Usando [[Propiedades]], puedes personalizar cómo aparecen tus notas en la vista previa.

> [!warning] Advertencia
> Las etiquetas sobreescritas en esta sección son **solo** visibles por rastreadores web. Los navegadores web regulares reciben la página sin modificar por rendimiento.

## Descripción

Obsidian genera automáticamente una descripción basada en el contenido de la nota, pero puedes proporcionar la tuya propia usando `description`.

```yaml
---
description: Una introducción a nuestro sistema solar.
---
```

> [!note] Etiquetas meta
> `description` sobreescribe la descripción generada automáticamente en `<meta name="description" content="...">` y los equivalentes para `og:description` y `twitter:description`.

## Imagen

Puedes usar una imagen personalizada para la vista previa del enlace, añadiendo `image` o `cover` con una ruta a la imagen. La imagen debe estar subida a Publish.

La ruta puede ser una ruta absoluta desde la raíz de tu bóveda:

```yaml
---
cover: "Attachments/Cover image.png"
---
```


La ruta a la imagen distingue entre mayúsculas y minúsculas. En nuestro ejemplo anterior, tenemos una ruta a una imagen llamada `Cover image.png`. La ruta a continuación no funcionará, porque usa mayúsculas y minúsculas incorrectas.

```yaml
---
cover: "Attachments/cover Image.png"
---
```


En lugar de una ruta absoluta en tu bóveda, también puedes usar una url externa:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```


`image` y `cover` son idénticos. Usa solo uno de ellos.

> [!note] Etiquetas meta
> `image` y `cover` sobreescriben la imagen generada automáticamente en `<meta property="og:image" content="...">`.
