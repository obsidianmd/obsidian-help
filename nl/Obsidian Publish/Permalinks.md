---
permalink: publish/permalinks
---
Je kunt de URL naar je notities hernoemen met behulp van _permalinks_.

Je kunt bijvoorbeeld dit:

```
https://publish.obsidian.md/username/Company/About+us
```

Veranderen in dit:

```
https://publish.obsidian.md/username/about
```

Om een permalink voor een notitie aan te maken, voeg je de eigenschap `permalink` toe aan je [[Eigenschappen]].

```yaml
---
permalink: about
---
```

Als iemand een notitie bezoekt via de oorspronkelijke URL, wordt diegene automatisch doorgestuurd naar de permalink.

## Oude notities doorverwijzen

Het hernoemen en verwijderen van notities is een natuurlijk onderdeel van het onderhouden van een levende kluis. Hoewel Obsidian automatisch koppelingen bijwerkt wanneer je een notitie binnen je lokale kluis verplaatst, kunnen andere websites nog steeds verwijzen naar je oude notities op je gepubliceerde [[Inleiding tot Obsidian Publish|Obsidian Publish]]-site. Je kunt lezers doorverwijzen van de ene notitie naar een andere.

Stel je voor dat je een notitie van de ene map naar een andere wilt verplaatsen:

- **Gidsen**
  - ~~Vrienden maken.md~~ (verwijderd)
- **Tutorials**
  - *Hoe maak je vrienden.md* (toegevoegd)

Nadat je de notitie verplaatst hebt, werkt Obsidian automatisch alle koppelingen binnen de kluis bij. Als je de wijziging echter publiceert naar je Publish-site, resulteert elke koppeling naar `/Guides/Making+friends` in een 404.

Om lezers door te verwijzen van `/Guides/Making+friends` naar `/Tutorials/How+to+make+friends`, moet je een [[Aliassen|alias]] toevoegen in `How to make friends.md`, de notitie waarnaar je wilt doorverwijzen.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Belangrijk
> Zorg ervoor dat je het volledige pad naar de oude notitie opneemt in de alias. Hoewel het gebruik van alleen de notitienaam als alias werkt in je lokale kluis, heeft Publish het volledige pad naar de notitie nodig om ernaar te kunnen doorverwijzen.

Je kunt meerdere notities doorverwijzen door voor elke notitie een alias toe te voegen.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```
