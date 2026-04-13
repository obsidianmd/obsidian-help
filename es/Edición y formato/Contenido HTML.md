---
permalink: html
publish: true
mobile: true
description: 'Aprende a usar HTML en Obsidian, incluyendo limitaciones con el renderizado de Markdown y requisitos de bloques HTML.'
---
Obsidian admite HTML para permitirte mostrar tus notas de la manera que desees, o incluso [[Incrustar páginas web|incrustar páginas web]]. Permitir HTML dentro de tus notas conlleva riesgos. Para evitar que código malicioso cause daños, Obsidian _sanitiza_ cualquier HTML en tus notas.

> [!example]
> El elemento `<script>` normalmente te permite ejecutar JavaScript cada vez que se carga. Si Obsidian no sanitizara el HTML, un atacante podría convencerte de pegar un texto que contenga JavaScript que extraiga información sensible de tu computadora y se la envíe de vuelta.

Dicho esto, dado que la sintaxis Markdown no admite todas las formas de estilo, usar HTML sanitizado puede ser otra forma más de mejorar la calidad de tus notas. Hemos incluido algunos de los usos más comunes de HTML.

## Limitaciones de HTML

Obsidian tiene limitaciones específicas al usar HTML en tus notas:

### Sin Markdown dentro de HTML

Obsidian no renderiza la sintaxis Markdown dentro de elementos HTML. Esta es una decisión de diseño intencional para optimizar el rendimiento y mantener baja la complejidad del analizador al gestionar documentos grandes.

Por ejemplo, esto no funcionará como se espera:

```md
<div>
Esto **no se mostrará** en negrita y esto `no se mostrará` como código.
</div>
```

### Los bloques HTML deben ser autónomos

Los bloques HTML deben estar completos y no pueden contener líneas en blanco dentro de ellos. Las líneas en blanco romperán el bloque HTML.

Esto funcionará:

```md
<table>
<tr>
<td>Contenido aquí</td>
</tr>
</table>
```

Esto no funcionará correctamente:

```md
<table>

<tr>

<td>Contenido aquí</td>

</tr>

</table>
```

### Cuando Markdown parece funcionar en HTML

Algunas etiquetas HTML en línea como `<span>` o `<a>` tienen funcionalidad limitada y pueden parecer que renderizan Markdown, pero esto no es lo que realmente está ocurriendo. El Markdown se está procesando fuera del contexto HTML.

Para más detalles sobre cómo Obsidian maneja Markdown, consulta [[Markdown con formato Obsidian]].

## Uso común de HTML

> [!info] Se pueden encontrar más detalles sobre el uso de `<iframe>` en [[Incrustar páginas web]].

### Comentarios

Los [[Sintaxis de formato básico#Comentarios|comentarios Markdown]] son la forma preferida de agregar comentarios ocultos dentro de tus notas. Sin embargo, algunos métodos de conversión de notas Markdown, como [Pandoc](https://pandoc.org), tienen soporte limitado de comentarios Markdown. En esos casos, ¡puedes usar `<!-- Comentario HTML -->` en su lugar!

### Subrayado

Si necesitas subrayar rápidamente un elemento en tus notas, puedes usar `<u>Ejemplo</u>` para crear <u>tu texto subrayado</u>.

### Span/Div

Las etiquetas span y div se pueden usar para aplicar clases personalizadas desde un [[Fragmentos CSS|fragmento CSS]], o estilos personalizados definidos, sobre un área de texto seleccionada. Por ejemplo, usar `<span style="font-family: cursive">tu texto</span>` te permite <span style="font-family: cursive">cambiar tu fuente</span> rápidamente.

## Tachado

¿Necesitas tachar <s>algo de texto</s>? Usa `<s>esto</s>` para tacharlo.
