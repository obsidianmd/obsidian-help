---
permalink: publish/permalinks
---
Du kan omdøbe URL'en til dine noter ved hjælp af _permalinks_.

For eksempel kan du ændre dette:

```
https://publish.obsidian.md/username/Company/About+us
```

Til dette:

```
https://publish.obsidian.md/username/about
```

For at oprette et permalink til en note skal du tilføje egenskaben `permalink` til dine [[Egenskaber]].

```yaml
---
permalink: about
---
```

Hvis nogen besøger en note ved hjælp af den originale URL, bliver de automatisk omdirigeret til permalinket.

## Omdiriger gamle noter

At omdøbe og fjerne noter er en naturlig del af at vedligeholde en levende boks. Mens Obsidian automatisk opdaterer links, når du flytter en note i din lokale boks, kan andre hjemmesider stadig linke til dine gamle noter på dit udgivne [[Introduktion til Obsidian Publish|Obsidian Publish]]-websted. Du kan omdirigere læsere fra én note til en anden.

Forestil dig, at du vil flytte en note fra én mappe til en anden:

- **Guides**
  - ~~Making friends.md~~ (fjernet)
- **Tutorials**
  - *How to make friends.md* (tilføjet)

Når du har flyttet noten, opdaterer Obsidian automatisk alle links i boksen. Men hvis du udgiver ændringen til dit Publish-websted, vil alle links til `/Guides/Making+friends` resultere i en 404.

For at omdirigere læsere fra `/Guides/Making+friends` til `/Tutorials/How+to+make+friends` skal du tilføje et [[Aliasser|alias]] i `How to make friends.md`, den note du vil omdirigere til.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Vigtigt
> Sørg for at inkludere den fulde sti til den gamle note i aliaset. Selvom det fungerer i din lokale boks kun at bruge notenavnet som alias, har Publish brug for den fulde sti til noten for at kunne omdirigere til den.

Du kan omdirigere flere noter ved at tilføje et alias for hver.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```
