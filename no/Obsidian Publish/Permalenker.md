---
permalink: publish/permalinks
---
Du kan gi nytt navn til URL-en til notatene dine ved hjelp av _permalenker_.

For eksempel kan du gjøre om dette:

```
https://publish.obsidian.md/username/Company/About+us
```

Til dette:

```
https://publish.obsidian.md/username/about
```

For å opprette en permalenke for et notat, legg til egenskapen `permalink` i [[Egenskaper|egenskapene]] dine.

```yaml
---
permalink: about
---
```

Hvis noen besøker et notat via den opprinnelige URL-en, blir de automatisk videresendt til permalenken.

## Videresend gamle notater

Å gi nytt navn til og fjerne notater er en naturlig del av å vedlikeholde et levende hvelv. Mens Obsidian automatisk oppdaterer lenker når du flytter et notat i det lokale hvelvet ditt, kan andre nettsteder fortsatt lenke til de gamle notatene dine på ditt publiserte [[Introduksjon til Obsidian Publish|Obsidian Publish]]-nettsted. Du kan videresende lesere fra ett notat til et annet.

Tenk deg at du vil flytte et notat fra en mappe til en annen:

- **Guider**
  - ~~Å bli venner.md~~ (fjernet)
- **Opplæringer**
  - *Hvordan bli venner.md* (lagt til)

Etter at du har flyttet notatet, oppdaterer Obsidian automatisk alle lenker i hvelvet. Men hvis du publiserer endringen til Publish-nettstedet ditt, vil eventuelle lenker til `/Guides/Making+friends` resultere i en 404-feil.

For å videresende lesere fra `/Guides/Making+friends` til `/Tutorials/How+to+make+friends`, må du legge til et [[Aliaser|alias]] i `How to make friends.md`, notatet du vil videresende til.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Viktig
> Sørg for at du inkluderer den fullstendige banen til det gamle notatet i aliaset. Selv om det fungerer å bruke bare notatnavnet som alias i det lokale hvelvet ditt, trenger Publish den fullstendige banen til notatet for å kunne videresende til det.

Du kan videresende flere notater ved å legge til et alias for hvert.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```
