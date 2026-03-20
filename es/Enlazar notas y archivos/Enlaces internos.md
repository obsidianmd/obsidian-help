---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Aprende cómo enlazar a notas, adjuntos y otros archivos desde tus notas, usando enlaces internos.
aliases:
  - How to/Enlace a bloques
  - How to/Enlace interno
---
Aprende cómo enlazar a notas, adjuntos y otros archivos desde tus notas, usando _enlaces internos_. Al enlazar notas, puedes crear una red de conocimiento. ^b15695

Obsidian puede actualizar automáticamente los enlaces internos en tu bóveda cuando renombras un archivo. Si prefieres que se te pregunte antes, puedes desactivarlo en:

**[[Configuración]]** → **[[Configuración#Archivos y enlaces|Archivos y enlaces]]** → **[[Configuración#Actualizar los enlaces internos automáticamente|Actualizar los enlaces internos automáticamente]]**.

## Formatos admitidos para enlaces internos

Obsidian admite los siguientes formatos de enlace:

- Enlace wiki: `[[Three laws of motion]]` o `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` o `[Three laws of motion](Three%20laws%20of%20motion.md)`

Los ejemplos anteriores son equivalentes, y se muestran de la misma manera en el editor y enlazan a la misma nota.

> [!note] Nota
> Al usar el formato Markdown, asegúrate de [codificar la URL](https://en.wikipedia.org/wiki/Percent-encoding) del destino del enlace. Por ejemplo, los espacios en blanco se convierten en `%20`.

Por defecto, debido a su formato más compacto, Obsidian genera enlaces usando el formato de enlace wiki. Si la interoperabilidad es importante para ti, puedes desactivar los enlaces wiki y usar enlaces Markdown en su lugar.

Para usar el formato Markdown:

1. Abre **[[Configuración]]**.
2. En **Archivos y enlaces**, desactiva **Usar \[\[Wikilinks\]\]**.

Incluso si desactivas el formato de enlace wiki, puedes seguir autocompletando enlaces escribiendo dos corchetes `[[`. Cuando selecciones uno de los archivos sugeridos, Obsidian generará un enlace Markdown en su lugar.

> [!note] Caracteres no válidos
> Una cadena que contenga los siguientes caracteres puede no funcionar como enlace: `# | ^ : %% [[ ]]`.
> 
> Recomendamos evitar el uso de esos caracteres y practicar [buenas prácticas para nombres de archivos](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names).

## Enlazar a un archivo

Para crear un enlace mientras estás en la vista de edición, usa cualquiera de las siguientes formas:

- Escribe `[[` en el editor y luego selecciona el archivo al que deseas crear un enlace.
- Selecciona texto en el editor y luego escribe `[[`.
- Abre la [[Paleta de comandos]] y luego selecciona Añadir enlace interno.

![[Selector rápido#^search-autocomplete-large]]

Aunque puedes enlazar a cualquiera de los [[Formatos de archivo aceptados]], los enlaces a formatos de archivo que no sean Markdown necesitan incluir una extensión de archivo, como `[[Figure 1.png]]`.

> [!tip] Prefijar un enlace interno con un signo de exclamación (!) te permite incrustar el contenido enlazado. Para más detalles, consulta [[Incrustar archivos]].

> [!info] Archivos excluidos
> Los archivos que coincidan con tus patrones de [[Configuración#Archivos excluidos|Archivos excluidos]] tienen menor prioridad en las sugerencias de enlaces al crear enlaces internos.

## Enlazar a un encabezado en una nota

Puedes enlazar a encabezados específicos en notas, también conocidos como _enlaces de ancla_.

**Enlazar a un encabezado dentro de la misma nota**

Para enlazar a un encabezado dentro de la misma nota, escribe `[[#` para obtener una lista de encabezados dentro de la nota a los que enlazar.

Por ejemplo, `[[#Vista previa de un archivo enlazado]]` creará un enlace a [[#Vista previa de un archivo enlazado]].

**Enlazar a un encabezado en otra nota**

Para enlazar a un encabezado en otra nota, añade una almohadilla (`#`) al final del destino del enlace, seguida del texto del encabezado.

Por ejemplo, `[[Acerca de Obsidian#Los enlaces son ciudadanos de primera clase]]` creará un enlace a [[Acerca de Obsidian#Los enlaces son ciudadanos de primera clase]].

**Enlazar a subencabezados**

Puedes añadir múltiples símbolos de almohadilla para cada subencabezado.

Por ejemplo, `[[Ayuda y soporte#Questions and advice#Report bugs and request features]]` creará un enlace a [[Ayuda y soporte#Questions and advice#Report bugs and request features]].

**Buscar encabezados en toda la bóveda**

Para buscar encabezados en toda la bóveda, usa la sintaxis `[[## encabezado]]`.

Por ejemplo, `[[##` buscará de forma genérica en toda la bóveda, mientras que `[[## team]]` buscará todos los encabezados que contengan la palabra _team_.

> [!info]- Captura de pantalla de búsqueda de un enlace de encabezado
>
> ![[internal-links-header.png#interface]]

## Enlazar a un bloque en una nota

Un bloque es una unidad de texto en tu nota, como un párrafo, una cita en bloque o un elemento de lista.

Puedes enlazar a un bloque añadiendo `#^` al final del destino de tu enlace, seguido de un identificador de bloque único. Por ejemplo: `[[2023-01-01#^37066d]]`. Afortunadamente, no necesitas buscar manualmente el identificador: cuando escribas el acento circunflejo (`^`), aparecerá una lista de sugerencias que te permitirá seleccionar el bloque correcto.

Para *párrafos simples*, coloca un espacio en blanco seguido de un acento circunflejo `^` y el identificador de bloque al final de la línea:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

Para *bloques estructurados* (listas, citas, recuadros, tablas), el identificador de bloque debe estar en una línea separada, con una línea en blanco antes y después:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

Para *líneas específicas dentro de una lista*, el identificador de bloque puede colocarse directamente en una viñeta:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] No admitimos enlaces a partes específicas de citas, recuadros y tablas.

**Buscar bloques en toda la bóveda**

También puedes buscar bloques para enlazar desde toda tu bóveda usando la sintaxis `[[^^bloque]]`. Sin embargo, más elementos califican como bloques en comparación con los [[#Enlazar a un encabezado en una nota|enlaces de encabezado]], por lo que esta lista será mucho más larga.

> [!info]- Captura de pantalla de búsqueda de un enlace de bloque
> ![[link-block-heading.png#interface]]

También puedes crear identificadores de bloque legibles añadiendo un espacio en blanco seguido de un acento circunflejo (`^`) y el identificador. Los identificadores de bloque solo pueden consistir en letras latinas, números y guiones.

Por ejemplo, añade `^quote-of-the-day` al final de un bloque:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Ahora puedes enlazar al bloque escribiendo `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Interoperabilidad
> Las referencias de bloque son específicas de Obsidian y no forman parte del formato Markdown estándar. Los enlaces que contengan referencias de bloque no funcionarán fuera de Obsidian.

## Cambiar el texto mostrado del enlace

Por defecto, Obsidian mostrará el texto del enlace tal como aparece. Por ejemplo:
- `[[Example]]` se muestra como [[Example]]
- `[[Example#Details]]` se muestra como [[Example#Details]]

Puedes cambiar cómo se muestra un enlace personalizando su texto de enlace:

**Formato de enlace wiki**:
Usa una barra vertical (`|`) para cambiar el texto mostrado.

- `[[Example|Nombre personalizado]]` aparece como [[Example|Nombre personalizado]]
- `[[Example#Details|Nombre de sección]]` aparece como [[Example#Details|Nombre de sección]]

**Formato Markdown**:
Usa `[Texto mostrado](URL del enlace)` para personalizar cómo aparece el enlace.

- `[Nombre personalizado](Example.md)` aparece como [Nombre personalizado](Example.md)
- `[Nombre de sección](Example.md#Details)` aparece como [Nombre de sección](Example.md#Details)

Este método es útil para situaciones puntuales donde quieres cambiar cómo se ve un enlace en un contexto específico. Si quieres configurar un nombre de enlace alternativo que puedas reutilizar en toda tu bóveda, considera usar un [[Alias|alias]] en su lugar.

Por ejemplo, si te refieres regularmente a `[[Three laws of motion]]` como `[[The 3 laws]]`, añadir "3 laws" como alias te permite escribir solo eso, sin necesidad de añadir texto de visualización personalizado cada vez.

> [!tip] Consejo
> Usa [[#Cambiar el texto mostrado del enlace|texto mostrado del enlace]] cuando quieras personalizar cómo se ve un enlace *en un lugar específico*.
> 
> Usa [[Alias|alias]] cuando quieras referirte a la misma nota usando *diferentes nombres* en toda tu bóveda.
^callout-internal-links-link-text

## Vista previa de un archivo enlazado

> [!note] Nota
> Para previsualizar archivos enlazados, primero necesitas habilitar [[Vista previa de página]].

Para previsualizar un archivo enlazado, pasa el cursor sobre un enlace interno. Mientras estés en modo de edición, presiona `Ctrl` (o `Cmd` en macOS) mientras pasas el cursor sobre el enlace. Una vista previa del contenido del archivo aparecerá junto al cursor.
