---
permalink: aliases
cssclasses:
  - soft-embed
aliases:
  - How to/Agregar alias a la nota
---
Si deseas hacer referencia a un archivo usando diferentes nombres, considera agregar _alias_ a la nota. Un alias es un nombre alternativo para una nota.

Usa alias para cosas como acrónimos, apodos o para referirte a una nota en un idioma diferente.

Si solo intentas cambiar cómo se ve un enlace en un lugar, consulta cómo [[Enlaces internos#Cambiar el texto mostrado del enlace|Cambiar el texto mostrado del enlace]] en su lugar.

![[Enlaces internos#^callout-internal-links-link-text]]

## Agregar un alias a una nota

Para agregar un alias a una nota, agrega la propiedad `aliases` en las [[Propiedades]] de la nota. Los alias siempre deben formatearse como una lista en YAML.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Enlazar a una nota usando un alias

Para enlazar a una nota usando un alias:

1. Comienza a escribir el alias en un [[Enlaces internos|enlace interno]]. Cualquier alias aparecerá en la lista de sugerencias, con un icono de flecha curvada a su lado.
2. Presiona `Enter` para seleccionar el alias.

Obsidian crea el enlace con el alias como su texto mostrado personalizado, por ejemplo `[[Artificial Intelligence|AI]]`.

> [!note] Nota
> En lugar de simplemente usar el alias como destino del enlace (`[[AI]]`), Obsidian usa el formato de enlace `[[Artificial Intelligence|AI]]` para garantizar la interoperabilidad con otras aplicaciones que utilizan el formato de enlace wiki.

## Encontrar menciones no enlazadas para un alias

Usando [[Enlace de retorno]], puedes encontrar menciones no enlazadas de alias.

Por ejemplo, después de establecer "AI" como alias de "Artificial intelligence", puedes ver menciones de "AI" en otras notas.

Si enlazas una mención no enlazada a un alias, Obsidian convierte la mención en un [[Enlaces internos|enlace interno]] con el alias como su texto mostrado.
