---
aliases: asunto principal
---

El asunto principal de YAML es cómo viven los metadatos a nivel de archivo en Obsidian.

El asunto principal es esencialmente una sección de atributos de texto sin formato colocados en la parte superior del archivo. El asunto principal fue popularizado por generadores estáticos como Jekyll, Hugo y Gatsby. Es una de las formas más populares de poner metadatos en un archivo Markdown.

Asunto principal es un bloque YAML con **guiones triples** tanto antes como después. ==También debe colocarse en la parte superior del archivo.==

Por ejemplo:

```
---
key: value
key2: value2
key3: [one, two, three]
key4:
- four
- five
- six
---
```

Desde 0.9.17, [[Agregar alias a la nota|alias]] utiliza material preliminar. Gradualmente lo haremos más accesible para los desarrolladores de complementos y más fácil de usar.

Actualmente, se admiten de forma nativa tres claves: `tags`, `aliases` y `cssclass`.