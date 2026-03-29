---
permalink: publish/permalinks
---
Du kan byta namn på URL:en till dina anteckningar med hjälp av _permalänkar_.

Till exempel kan du omvandla detta:

```
https://publish.obsidian.md/username/Company/About+us
```

Till detta:

```
https://publish.obsidian.md/username/about
```

För att skapa en permalänk för en anteckning, lägg till egenskapen `permalink` i dina [[Egenskaper]].

```yaml
---
permalink: about
---
```

Om någon besöker en anteckning med den ursprungliga URL:en omdirigeras de automatiskt till permalänken.

## Omdirigera gamla anteckningar

Att byta namn på och ta bort anteckningar är en naturlig del av att underhålla ett levande valv. Medan Obsidian automatiskt uppdaterar länkar när du flyttar en anteckning inom ditt lokala valv, kan andra webbplatser fortfarande länka till dina gamla anteckningar på din publicerade [[Introduktion till Obsidian Publish|Obsidian Publish]]-webbplats. Du kan omdirigera läsare från en anteckning till en annan.

Tänk dig att du vill flytta en anteckning från en mapp till en annan:

- **Guides**
  - ~~Making friends.md~~ (borttagen)
- **Tutorials**
  - *How to make friends.md* (tillagd)

Efter att du har flyttat anteckningen uppdaterar Obsidian automatiskt alla länkar inom valvet. Men om du publicerar ändringen på din Publish-webbplats kommer alla länkar till `/Guides/Making+friends` att resultera i ett 404-fel.

För att omdirigera läsare från `/Guides/Making+friends` till `/Tutorials/How+to+make+friends` behöver du lägga till ett [[Aliaser|alias]] i `How to make friends.md`, anteckningen du vill omdirigera till.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Viktigt
> Se till att du inkluderar den fullständiga sökvägen till den gamla anteckningen i aliaset. Även om det fungerar att bara använda anteckningsnamnet som alias i ditt lokala valv, behöver Publish den fullständiga sökvägen till anteckningen för att kunna omdirigera till den.

Du kan omdirigera flera anteckningar genom att lägga till ett alias för varje.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```
