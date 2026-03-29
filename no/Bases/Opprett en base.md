---
permalink: bases/create-base
---
[[Introduksjon til Bases|Bases]] lar deg opprette databaselignende visninger av notatene dine. Her er hvordan du kan opprette en base og bygge den inn i et notat. Hver base kan ha én eller flere [[Visninger|visninger]] for å vise informasjon på forskjellige måter.

## Opprett en ny base

**Kommandopalett:**

1. Åpne **kommandopaletten**.
2. Velg
	- **Bases: Opprett ny base** for å opprette en base i samme mappe som den aktive filen.
	- **Bases: Sett inn ny base** for å opprette en base og bygge den inn i gjeldende fil.

**Filutforsker:**

1. I filutforskeren, høyreklikk på mappen du vil opprette basen i.
2. Velg **Ny base**.

**Verktøylinje:**

- I den vertikale verktøylinjen, velg **Opprett ny base** for å opprette en base i samme mappe som den aktive filen.

## Bygg inn en base

### Bygg inn en basefil

Du kan bygge inn basefiler i [[Bygge inn filer|hvilken som helst annen fil]] ved å bruke syntaksen `![[Fil.base]]`. For å spesifisere standardvisningen, bruk `![[Fil.base#Visning]]`.

### Bygg inn en base som en kodeblokk

Bases kan også bygges inn direkte i et notat ved hjelp av en `base`-kodeblokk og [[Bases-syntaks|Bases-syntaksen]].

~~~yaml
```base
filters:
  and:
    - file.hasTag("example")
views:
  - type: table
    name: Table
```
~~~
