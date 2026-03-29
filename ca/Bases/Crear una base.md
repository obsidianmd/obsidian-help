---
permalink: bases/create-base
---
[[Introducció a Bases|Bases]] us permet crear vistes semblants a bases de dades de les vostres notes. A continuació us expliquem com podeu crear una base i incrustar-la en una nota. Cada base pot tenir una o més [[Vistes|vistes]] per mostrar la informació de maneres diferents.

## Crear una base nova

**Paleta d'ordres:**

1. Obriu la **Paleta d'ordres**.
2. Seleccioneu
	- **Bases: Crea una base nova** per crear una base a la mateixa carpeta que el fitxer actiu.
	- **Bases: Insereix una base nova** per crear una base i incrustar-la al fitxer actual.

**Explorador de fitxers:**

1. A l'explorador de fitxers, feu clic dret a la carpeta on voleu crear la base.
2. Seleccioneu **Base nova**.

**Barra d'eines:**

- A la barra d'eines vertical, seleccioneu **Crea una base nova** per crear una base a la mateixa carpeta que el fitxer actiu.

## Incrustar una base

### Incrustar un fitxer de base

Podeu incrustar fitxers de base a [[Incrustar fitxers|qualsevol altre fitxer]] utilitzant la sintaxi `![[Fitxer.base]]`. Per especificar la vista per defecte utilitzeu `![[Fitxer.base#Vista]]`.

### Incrustar una base com a bloc de codi

Les bases també es poden incrustar directament en una nota utilitzant un bloc de codi `base` i la [[Sintaxi de Bases|sintaxi de Bases]].

~~~yaml
```base
filters:
  and:
    - file.hasTag("example")
views:
  - type: table
    name: Table
```
~~~
