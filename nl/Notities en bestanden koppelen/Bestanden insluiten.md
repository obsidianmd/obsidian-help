---
permalink: embeds
cssclasses:
  - soft-embed
---
Leer hoe je andere notities en media in je notities kunt insluiten. Door bestanden in je notities in te sluiten, kun je inhoud hergebruiken in je kluis.

Om een bestand in je kluis in te sluiten, voeg je een uitroepteken (`!`) toe vóór een [[Interne koppelingen|interne koppeling]]. Je kunt bestanden insluiten in elk van de [[Geaccepteerde bestandsformaten]].

> [!tip] Insluiten door slepen en neerzetten
> Op de desktop kun je ondersteunde bestanden ook rechtstreeks naar je notitie slepen en neerzetten om ze automatisch in te sluiten.

## Een notitie insluiten in een andere notitie

Om een notitie in te sluiten:

```md
![[Interne koppelingen]]
```

Je kunt ook koppelingen naar [[Interne koppelingen#Koppelen naar een kop in een notitie|koppen]] en [[Interne koppelingen#Koppelen naar een blok in een notitie|blokken]] insluiten.

```md
![[Interne koppelingen#^b15695]]
```

De tekst hieronder is een voorbeeld van een ingesloten blok:

![[Interne koppelingen#^b15695]]

## Een afbeelding insluiten in een notitie

Om een afbeelding in te sluiten:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Je kunt de afbeeldingsdimensies wijzigen door `|640x480` toe te voegen aan de koppelingbestemming, waarbij 640 de breedte is en 480 de hoogte.

```md
![[Engelbart.jpg|100x145]]
```

Als je alleen de breedte opgeeft, wordt de afbeelding geschaald volgens de oorspronkelijke beeldverhouding. Bijvoorbeeld `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Je kunt ook een extern gehoste afbeelding insluiten met behulp van een Markdown-link. Je kunt de breedte en hoogte op dezelfde manier instellen als bij een wiki-link.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Een audiobestand insluiten in een notitie

Om een audiobestand in te sluiten:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Een PDF insluiten in een notitie

Om een PDF in te sluiten:

```md
![[Document.pdf]]
```

Je kunt ook een specifieke pagina in de PDF openen door `#page=N` toe te voegen aan de koppelingbestemming, waarbij `N` het paginanummer is:

```md
![[Document.pdf#page=3]]
```

Je kunt ook de hoogte in pixels opgeven voor de ingesloten PDF-viewer door `#height=[number]` toe te voegen aan de koppeling. Bijvoorbeeld:

```md
![[Document.pdf#height=400]]
```

## Een lijst insluiten in een notitie

Om een lijst uit een andere notitie in te sluiten, voeg je eerst een [[Interne koppelingen#Koppelen naar een blok in een notitie|blok-ID]] toe aan je lijst:

```md

- lijstitem 1
- lijstitem 2

^my-list-id
```

Koppel vervolgens naar de lijst met behulp van het blok-ID:

```md
![[Mijn notitie#^my-list-id]]
```

## Zoekresultaten insluiten

![[Zoeken#Zoekresultaten insluiten in een notitie]]
