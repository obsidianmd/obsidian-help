---
permalink: embeds
cssclasses:
  - soft-embed
---
Innebygde filer viser innholdet sitt innebygd i et notat og holdes oppdatert når kildefilen endres.

For å bygge inn en fil i hvelvet ditt, legg til et utropstegn (`!`) foran en [[Interne lenker|intern lenke]]. Du kan bygge inn filer i alle [[Aksepterte filformater]].

> [!tip]- Dra og slipp-innebygging
> På skrivebord kan du også dra og slippe støttede filer direkte inn i notatet ditt for å bygge dem inn automatisk.

## Bygg inn et notat i et annet notat

For å bygge inn et notat:

```md
![[Interne lenker]]
```

Du kan også bygge inn spesifikke [[Interne lenker#Lenke til en overskrift i et notat|overskrifter]] og [[Interne lenker#Lenke til en blokk i et notat|blokker]].

```md
![[Interne lenker#^b15695]]
```

Teksten nedenfor er et eksempel på en innebygd blokk:

![[Interne lenker#^b15695]]

## Bygg inn et bilde i et notat

For å bygge inn et bilde:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Du kan endre bildedimensjonene ved å legge til `|640x480` i lenkedestinasjonen, der 640 er bredden og 480 er høyden.

```md
![[Engelbart.jpg|100x145]]
```

Hvis du bare angir bredden, skaleres bildet proporsjonalt. For eksempel `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Du kan også bygge inn et eksternt bilde ved å bruke en Markdown-lenke. Du kan kontrollere bredde og høyde med samme syntaks som en wiki-lenke.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Bygg inn en lydfil i et notat

For å bygge inn en lydfil:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Bygg inn en PDF i et notat

For å bygge inn en PDF:

```md
![[Document.pdf]]
```

Du kan også åpne en bestemt side i PDF-en ved å legge til `#page=N` i lenkedestinasjonen, der `N` er sidenummeret:

```md
![[Document.pdf#page=3]]
```

Du kan også angi høyden i piksler for den innebygde PDF-visningen ved å legge til `#height=[number]` i lenkedestinasjonen. For eksempel:

```md
![[Document.pdf#height=400]]
```

## Bygg inn en Canvas i et notat

For å bygge inn en [[Canvas|Canvas]]:

```md
![[Min canvas.canvas]]
```

> [!info]+ Canvas-innebygginger viser kun former
> Innebygde canvaser viser former, men ikke teksten inne i kort. For å se hele canvasen, åpne den direkte.

## Bygg inn en liste i et notat

For å bygge inn en liste fra et annet notat, legg først til en [[Interne lenker#Lenke til en blokk i et notat|blokkidentifikator]] i listen din:

```md

- listeelement 1
- listeelement 2

^my-list-id
```

Lenk deretter til listen ved å bruke blokkidentifikatoren:

```md
![[Mitt notat#^my-list-id]]
```

## Bygg inn søkeresultater

![[Søk#Bygg inn søkeresultater i et notat]]
