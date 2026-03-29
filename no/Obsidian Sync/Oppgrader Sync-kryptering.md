---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Flytt Sync-hvelvet ditt til en annen region, utfør en krypteringsoppgradering.'
---
Som standard bruker Obsidian Sync [[Sikkerhet og personvern#Kryptering|ende-til-ende-kryptering]] for alle dataene dine. Dette garanterer at ingen — ikke engang Obsidian-teamet — kan få tilgang til notatene dine.

Obsidian oppgraderer av og til Sync-krypteringen for å opprettholde de høyeste [[Sikkerhet og personvern|sikkerhets]]-standardene. Hvis en krypteringsoppgradering er tilgjengelig, vil du se et alternativ kalt **Oppgrader hvelvkryptering** i **Obsidian-innstillinger → Sync**. Denne prosessen lar deg også endre din [[Sync-regioner|Sync-region]].

## Krypteringsversjoner

Alle nye hvelv bruker automatisk den nyeste krypteringen. Eksisterende hvelv kan oppgraderes ved hjelp av migreringsassistenten. Merk at alle enheter må bruke en Obsidian-appversjon som støtter Sync-krypteringsversjonen du migrerer til.

| Utgivelsesdato                                                          | Sync-versjon | Minimum appversjon |
| ----------------------------------------------------------------------- | ------------ | ------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3            | 1.8.3               |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0            | 0.9.21              |

## Oppgrader kryptering med migreringsassistenten

Før du fortsetter, opprett en [[Sikkerhetskopier Obsidian-filene dine|sikkerhetskopi]] av hvelvet ditt for å forhindre potensielt datatap. Denne prosessen vil permanent slette alle data i fjernhvelvet ditt med den gamle krypteringen, inkludert versjonshistorikken.

> [!danger] Migreringer er destruktive
> 
> **[[Sikkerhetskopier Obsidian-filene dine|Sikkerhetskopier]] alltid hvelvet ditt før du fortsetter med en migrering.**
> 
> Når du migrerer et fjernhvelv, vil dataene dine bli erstattet. Dette betyr:
> 
> 1. Fjerndata vil bli fjernet fra Obsidian-servere, og hvelvdata vil bli lastet opp på nytt i stedet.
> 2. All [[Versjonshistorikk|versjonshistorikk]] for hvelvet vil gå tapt.

1. Åpne **[[Innstillinger]]**.
2. Velg **Sync** i sidefeltet.
3. Klikk **Oppgrader hvelv**. Dette alternativet vil kun være synlig hvis en oppgradering er tilgjengelig for fjernhvelvet ditt.
4. Dobbeltsjekk sikkerhetskopiene dine og klikk **Fortsett**.
5. I **Hvelvnavn**, skriv inn navnet på fjernhvelvet.
6. I **Region**, velg server[[Sett opp Obsidian Sync#Regionale synkroniseringsservere|regionen]] for fjernhvelvet ditt.
7. I **Krypteringspassord**, velg et passord for hvelvet ditt. Dette oppretter et ende-til-ende-kryptert hvelv. Hvelvpassordet er atskilt fra Obsidian-kontoen din og kan være forskjellig for hvert av hvelvene dine. For mer informasjon, se [[Sikkerhet og personvern]].
8. Når du har lastet opp dataene dine på nytt med den nye krypteringen, koble til det nye Sync-hvelvet på de andre enhetene dine.
