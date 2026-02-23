---
permalink: aliases
---

Hvis du vil referere til en fil under et andet navn, så overvej at tilføje _aliaser_ til noten. Et alias er et alternativt navn for en note.

Brug aliaser til akronymer (forkortelser), øgenavne, eller til at referere til en note på et andet sprog.

hvis du kun vil ændre hvordan et link skal se ud et sted, så læs guiden: [[Interne links#Skift visningstekst for et link|Skift visningstekst for et link]].

![[Interne links#^callout-internal-links-link-text]]

## Tilføj et alias til en note

Du tilføjer et alias til en note ved at tilføje en `aliases` egenskab i  notens [[Egenskaber|sektion med egenskaber]]:

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Hund
```

## Sådan benyttes et alias til at linke til en note

Du kan linke til en note ved at bruge et alias ved at:

1. Starte med at skrive et alias i et [[Interne links|internt link]]. Alle aliaser i listen af forslag har et bøjet-pil ikon ved siden af
2. Trykke `Retur` for at vælge aliaset

Obsidian opretter linket med aliaset som dets visningstekst, f.eks. `[[Kunstig intelligens|AI]]`.

> [!note]
> Obsidian benytter link formatet `[[Kunstig intelligens|AI]]` i stedet for at benytte aliasets navn som destination for at sikre kompabilitet med applikationer, som benytter Wikilink formatet.

## Find ikke-linkede omtaler for et alias

Du kan benytte [[Tilbagelinks|tilbagelinks]] til at finde ikke-linkede omtaler af aliaser.

Hvis du f.eks. benytter "AI" som et alias for "Kunstig inteligens" kan du se linkede omtaler af "AI" i andre noter.

Hvis du linker en ikke-linket omtale  til et alias vil Obsidian ændre omtalen til et [[Interne links|internt link]] med aliaset som visningstekst.