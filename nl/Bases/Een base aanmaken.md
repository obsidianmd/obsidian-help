---
permalink: bases/create-base
---
[[Introductie tot Bases|Bases]] laat je database-achtige weergaven van je notities aanmaken. Hier lees je hoe je een basis kunt aanmaken en insluiten in een notitie. Elke basis kan een of meer [[Weergaven|weergaven]] hebben om informatie op verschillende manieren weer te geven.

## Een nieuwe basis aanmaken

**Opdrachtenpalet:**

1. Open het **opdrachtenpalet**.
2. Selecteer
	- **Bases: Nieuwe basis maken** om een basis aan te maken in dezelfde map als het actieve bestand.
	- **Bases: Nieuwe basis invoegen** om een basis aan te maken en in te sluiten in het huidige bestand.

**Verkenner:**

1. Klik in de verkenner met de rechtermuisknop op de map waarin je de basis wilt aanmaken.
2. Selecteer **Nieuwe basis**.

**Werkbalk:**

- Selecteer in de verticale werkbalk **Nieuwe basis maken** om een basis aan te maken in dezelfde map als het actieve bestand.

## Een basis insluiten

### Een basisbestand insluiten

Je kunt basisbestanden insluiten in [[Bestanden insluiten|elk ander bestand]] met de `![[Bestand.base]]`-syntaxis. Om de standaardweergave te specificeren gebruik je `![[Bestand.base#Weergave]]`.

### Een basis insluiten als codeblok

Bases kunnen ook direct in een notitie worden ingesloten met behulp van een `base`-codeblok en de [[Bases-syntaxis|Bases-syntaxis]].

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
