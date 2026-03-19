---
permalink: tags
aliases:
  - How to/Trabajar con etiquetas
---
Las etiquetas son palabras clave o temas que te ayudan a encontrar rápidamente las notas que deseas.

## Añadir una etiqueta a una nota

Para crear una etiqueta, introduce un símbolo de almohadilla (`#`) en el editor, seguido de una palabra clave. Por ejemplo, `#reunión`.

También puedes añadir etiquetas usando la [[Propiedades|propiedad]] `tags`. Las etiquetas en YAML siempre deben formatearse como una lista:

```yaml
---
tags:
  - recipe
  - cooking
---
```

## Encontrar notas usando etiquetas

Para encontrar notas usando el complemento [[Búsqueda]], usa el [[Búsqueda#Operadores de búsqueda|operador de búsqueda]] `tag` en tu término de búsqueda, por ejemplo `tag:#reunión`.

También puedes buscar etiquetas haciendo clic en ellas dentro de tus notas.

Para encontrar notas usando el complemento [[Vista de etiquetas|Vista de etiquetas]], selecciona **Tags: Show tags** en la [[Paleta de comandos]], y luego selecciona la etiqueta que deseas buscar.

## Etiquetas anidadas

Las etiquetas anidadas definen jerarquías de etiquetas que facilitan encontrar y filtrar etiquetas relacionadas.

Crea etiquetas anidadas usando barras diagonales (`/`) en el nombre de la etiqueta, por ejemplo `#inbox/por-leer` e `#inbox/procesando`.

- En [[Búsqueda]], `tag:inbox` coincidirá con `#inbox` así como con todas las etiquetas anidadas como `#inbox/por-leer`.
- En la [[Vista de etiquetas]], las etiquetas anidadas se muestran como pertenecientes a su etiqueta padre.
- En [[Introducción a Bases|Bases]], las etiquetas anidadas son reconocidas por la función [[Funciones#hasTag|`hasTag`]], por lo que `file.hasTag("a")` coincidirá tanto con `#a` como con `#a/b`.

## Formato de etiquetas

Puedes usar cualquiera de los siguientes caracteres en tus etiquetas:

- Letras alfabéticas
- Números
- Guion bajo (`_`)
- Guion (`-`)
- Barra diagonal (`/`) para [[#Etiquetas anidadas]]

Las etiquetas deben contener al menos un carácter no numérico. Por ejemplo, #1984 no es una etiqueta válida, pero #y1984 sí lo es.

Las etiquetas no distinguen entre mayúsculas y minúsculas. Por ejemplo, #etiqueta y #ETIQUETA se tratarán como idénticas.

> [!note]
> Las etiquetas se mostrarán con las mayúsculas y minúsculas con las que fueron creadas por primera vez en la [[Vista de etiquetas]].
> Por ejemplo, crear #Etiqueta y luego #ETIQUETA mostrará #Etiqueta para ambas.

Las etiquetas no pueden contener espacios en blanco. Para separar dos o más palabras, puedes usar los siguientes formatos:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
