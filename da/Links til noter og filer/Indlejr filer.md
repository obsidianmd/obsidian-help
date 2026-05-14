---
permalink: embeds
aliases:
  - indlejringer
  - Indlejr filer
  - Link noter og filer/Indlejr filer
cssclasses:
  - soft-embed
---
Indlejrede filer viser deres indhold direkte i en note og opdateres automatisk, når kildefilen ændres.

For at indlejre en fil i din boks skal du tilføje et udråbstegn (`!`) foran et [[Interne links|internt link]]. Du kan indlejre filer af alle [[Accepterede filformater|accepterede filformater]].

> [!tip]- Træk og slip indlejringer
> På desktopudgaven af Obsidian kan du også trække og slippe supporterede filer direkte ind i din note for at indlejre dem automatisk.

## Indlejr en note i en anden note

Sådan indlejrer du en note:

```md
![[Interne links]]
```

Du kan også indlejre specifikke [[Interne links#Skift visningstekst for et link|overskrifter]] og [[Interne links#^b15695|blokke]].

Fx. kan du skrive følgende for at linke til en blok:
```md
![[Interne links#^b15695]]
```

Teksten vil vises som:
![[Interne links#^b15695]]

## Indlejr et billede i en note

Du indlejrer et billede ved at skrive:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Du kan ændre billedets dimensioner ved at tilføje fx. `|100x145` til links destinationen, hvor 100 er bredden i pixels og højden er 145 i pixels.

```md
![[Engelbart.jpg|100x145]]
```

Hvis du kun specificerer bredden, vil billedet blive skaleret proportionalt. Fx. `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Du kan også indlejre eksterne billeder fra internettet med et Markdown-link. Du kan kontrollere bredden og højden med samme syntaks som et wikilink.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Indlejr en lyd fil i en note

Du indlejrer lydfiler ved at skrive:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Indlejer et PDF dokument

Du indlejrer et PDF dokument ved at skrive:

```md
![[Document.pdf]]
```

Du kan også åbne PDF dokumentet på en specifik side ved at tilføje `#page=N` til linket, hvor `N` er sidetallet:

```md
![[Document.pdf#page=3]]
```

Du kan også specificere højden på den indlejrede PDF viser i pixels ved at tilføje `#height=[højde]` til linket, hvor `højde` er antal pixels:

```md
![[Document.pdf#height=400]]
```

## Indlejr et lærred i en note

Du indlejrer et [[Canvas|lærred]] ved at skrive:

```md
![[Mit lærred.canvas]]
```

> [!info]+ Indlejrede lærreder viser kun figurer
> Indlejrede lærreder viser figurer, men ikke teksten inde i kort. For at se det fulde lærred skal du åbne det direkte.

## Indlejr en liste i en note

For at indlejre en liste fra en anden note skal du først tilføje en [[Interne links#Link til en blok i en note|blokidentifikator]] til din liste:

```md

- list item 1
- list item 2

^mit-liste-id
```

Derefter kan du linke til listen ved at anvende blokidentifikatoren:
```md
![[Min note#^mit-liste-id]]
```

## Indlejr søgeresultater

![[Søg#Indlejr søgeresultater i en note]]
