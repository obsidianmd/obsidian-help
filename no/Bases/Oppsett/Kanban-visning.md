---
permalink: bases/views/kanban
---
Kanban er en type [[Visninger|visning]] du kan bruke i [[Introduksjon til Bases|Bases]].

Velg ![[lucide-kanban-square.svg#icon]] **Kanban** fra visningsmenyen for å vise filer som kort organisert i kolonner. Hver kolonne representerer en verdi av egenskapen som brukes til å gruppere resultater.


> [!warning] Krever Obsidian 1.14+
> Kanban-visninger krever Obsidian 1.14, som for øyeblikket er i [[Tidlig tilgang-versjoner|tidlig tilgang]].


## Grupper kort i kolonner

En Kanban-visning krever en egenskap for å gruppere resultater etter.

1. Velg ![[lucide-arrow-up-down.svg#icon]] **Sorter** i verktøylinjen.
2. Under **Grupper etter**, velg **Egenskap** og velg en egenskap.

Filer uten en verdi for den valgte egenskapen vises i **Ingen**-kolonnen.

> [!info] 
> Hvis du grupperer etter en formel- eller filegenskap, kan du ikke flytte kort eller kolonner, eller opprette notater fra kolonnene. Disse egenskapene kan ikke redigeres ved å flytte et kort.

## Arbeid med kort og kolonner

- Dra et kort til en annen kolonne for å oppdatere den grupperte egenskapen i det notatet. Bare Markdown-notater kan flyttes mellom kolonner.
- Velg pluss-ikonet i en kolonneoverskrift eller ![[lucide-plus.svg#icon]] **Ny** nederst i en kolonne for å opprette et notat med den kolonnens verdi.
- Dra en kolonneoverskrift for å endre kolonnerekkefølgen. For å gjenopprette den opprinnelige rekkefølgen, høyreklikk på en kolonne og velg **Tilbakestill rekkefølge**.
- Bruk ![[lucide-list.svg#icon]] **Egenskaper**-menyen for å velge egenskapene som vises på hvert kort. Den første egenskapen vises som korttittelen.

## Innstillinger

Kanban-visningsinnstillinger kan konfigureres i [[Visninger#Visningsinnstillinger|Visningsinnstillinger]].

- Skjul tomme kolonner
- Kolonnebredde
- Bildeegenskap
- Bildetilpasning
- Bildets størrelsesforhold

### Skjul tomme kolonner

Skjuler kolonner som ikke inneholder noen kort.

### Kolonnebredde

Definerer bredden på hver kolonne og dens kort.

### Bildeegenskap

Kanban-kort støtter et valgfritt forsidebilde som vises øverst på kortet. De støttede egenskapsverdiene er de samme som for [[Kort-visning#Bildeegenskap|bildeegenskapen i Kort-visning]].

### Bildetilpasning

Hvis du har konfigurert en bildeegenskap, bestemmer dette alternativet hvordan bildet vises i kortet.

- **Fyll:** Bildet fyller kortets innholdsboks. Hvis det ikke passer, beskjæres bildet.
- **Tilpass:** Bildet skaleres til det passer innenfor kortets innholdsboks. Bildet beskjæres ikke.

### Bildets størrelsesforhold

Høyden på forsidebildet bestemmes av dets størrelsesforhold. Juster dette alternativet for å gjøre bildet lavere eller høyere.
