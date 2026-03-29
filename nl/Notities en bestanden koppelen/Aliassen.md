---
permalink: aliases
cssclasses:
  - soft-embed
---
Als je een bestand met verschillende namen wilt aanduiden, kun je overwegen om _aliassen_ aan de notitie toe te voegen. Een alias is een alternatieve naam voor een notitie.

Gebruik aliassen voor zaken als afkortingen, bijnamen, of om naar een notitie te verwijzen in een andere taal.

Als je alleen wilt veranderen hoe een koppeling eruitziet op één plek, bekijk dan hoe je de [[Interne koppelingen#De weergavetekst van de koppeling wijzigen|weergavetekst van de koppeling kunt wijzigen]].

![[Interne koppelingen#^callout-internal-links-link-text]]

## Een alias toevoegen aan een notitie

Om een alias toe te voegen aan een notitie, voeg je de eigenschap `aliases` toe in de [[Eigenschappen]] van de notitie. Aliassen moeten altijd als lijst in YAML worden opgemaakt.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Koppelen naar een notitie met een alias

Om naar een notitie te koppelen met een alias:

1. Begin de alias te typen in een [[Interne koppelingen|interne koppeling]]. Elke alias verschijnt in de lijst met suggesties, met een gebogen pijlpictogram ernaast.
2. Druk op `Enter` om de alias te selecteren.

Obsidian maakt de koppeling met de alias als aangepaste weergavetekst, bijvoorbeeld `[[Artificial Intelligence|AI]]`.

> [!note] Opmerking
> In plaats van alleen de alias als koppelingsdoel te gebruiken (`[[AI]]`), gebruikt Obsidian het koppelingformaat `[[Artificial Intelligence|AI]]` om compatibiliteit met andere applicaties die het wiki-link-formaat gebruiken te waarborgen.

## Ongelinkte vermeldingen zoeken voor een alias

Door [[Terugverwijzing]] te gebruiken, kun je ongelinkte vermeldingen van aliassen vinden.

Bijvoorbeeld, nadat je "AI" als alias hebt ingesteld voor "Artificial intelligence", kun je vermeldingen van "AI" in andere notities zien.

Als je een ongelinkte vermelding aan een alias koppelt, zet Obsidian de vermelding om in een [[Interne koppelingen|interne koppeling]] met de alias als weergavetekst.
