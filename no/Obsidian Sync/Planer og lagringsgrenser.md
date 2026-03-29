---
permalink: sync/plans
publish: true
mobile: true
description: Lær om de ulike abonnementsalternativene vi tilbyr for Obsidian Sync.
---
## Planer

For å synkronisere notatene dine med [[Introduksjon til Obsidian Sync|Obsidian Sync]] trenger du et abonnementsplan. Du kan kjøpe en Sync-plan ved å logge inn på [kontoen din](https://obsidian.md/account/sync). Se [Sync-landingssiden](https://obsidian.md/sync) for priser.

Nedenfor er en sammenligning mellom Standard-planen og Plus-planen:

|                                                         | Sync Standard | Sync Plus       |
| ------------------------------------------------------- | ------------- | --------------- |
| Synkroniserte hvelv                                     | 1             | 10              |
| Maksimal filstørrelse                                   | 5 MB          | 200 MB          |
| Total lagring                                           | 1 GB          | 10 GB til 100 GB |
| [[Versjonshistorikk]]                                   | 1 måned       | 12 måneder      |
| Enheter                                                 | Ubegrenset    | Ubegrenset      |
| [[Samarbeid i et delt hvelv\|Delte hvelv]]              | Ja            | Ja              |

## Lagringsgrenser

Mengden data du kan lagre med [[Introduksjon til Obsidian Sync|Obsidian Sync]] avhenger av abonnementsplanen din. Med Sync Plus-planen kan du kjøpe ekstra lagring opptil 100 GB via [kontooversikten din](https://obsidian.md/account/sync). Se [[Ofte stilte spørsmål]] for mer informasjon.

Det er én enkelt kontobasert lagringsgrense for alle notater på tvers av hvelvene dine. [[Versjonshistorikk]] og [[vedlegg]] telles også mot kontoens lagringsgrense.

Når du når kontoens lagringsgrense, vil Sync-tillegget slutte å synkronisere filer, og du vil bli bedt om å rydde opp i fjernhvelvet/-hvelvene dine.

### Identifiser og slett store filer

For å identifisere og slette store filer fra hvelvet:

1. Åpne **[[Innstillinger]] → Sync**.
2. Velg **Vis største filer** ved siden av **Hvelvstørrelse over grensen**.
	1. Hvis du ikke ser **Hvelvstørrelse over grensen**, betyr det at ==du ikke har nådd størrelsesgrensen== ennå.
3. Lukk modalen **Vis største filer**.
4. Slett noen av de store filene du ikke lenger trenger.
5. Vent til Obsidian Sync fullfører oppgaven. Dette kan ta en stund.
6. Åpne **[[Innstillinger]] → Sync**.
7. Velg **Tøm** ved siden av **Hvelvstørrelse over grensen**. Dette vil fjerne de slettede filene fra fjernhvelvet for å frigjøre plass.

Etter at tømmingen er synkronisert til serveren, skal Obsidian Sync begynne å fungere igjen.

### Opprett et nytt fjernhvelv

Du kan **opprette et nytt fjernhvelv** for å ekskludere store filer før synkronisering. Versjonshistorikken for filene dine vil bli tilbakestilt hvis du oppretter et nytt fjernhvelv. Vær sikker på at du ikke trenger versjonshistorikk for eldre filer før du fortsetter.

For å synkronisere til et nytt fjernhvelv, følg disse trinnene:

1. Åpne **[[Innstillinger]] → Sync**.
2. Velg **Administrer** ved siden av **Fjernhvelv**.
3. Velg **Opprett nytt hvelv** og følg trinnene for å opprette det. Hvis du går tom for hvelv, kan det hende du må [[Sett opp Obsidian Sync#Koble fra et fjernhvelv|koble fra]] det nåværende fjernhvelvet og [[Sett opp Obsidian Sync#Slett et fjernhvelv|slette]] det først.
4. Sett opp ekskluderte filer før du starter synkronisering til det nye fjernhvelvet.
5. Start Obsidian på nytt for å bruke endringene.
6. Åpne **[[Innstillinger]] → Sync**.
7. Velg Fortsett for å starte synkronisering til det nye fjernhvelvet.

Det nye fjernhvelvet bør være mindre enn det forrige hvelvet, på grunn av fraværet av versjonshistorikk og ekskluderte filer.

## Oppgrader planen din

Du kan oppgradere planen din ved å logge inn på [kontooversikten din](https://obsidian.md/account/sync). Derfra kan du oppgradere planen fra Sync Standard til Sync Plus, og øke lagringen opptil 100 GB.

## Nedgrader planen din

Hvis du vil nedgradere Sync-planen din, men lagringsbruken overstiger den nye planens grense, må du frigjøre plass i fjernhvelvet ditt. For øyeblikket finnes det ingen direkte metode for raskt å fjerne spesifikke filer fra et eksisterende fjernhvelv. Dette skyldes at vedlegg beholdes i versjonshistorikken i opptil to uker, og versjonshistorikken telles mot lagringsgrensen din.

Den raskeste måten å redusere Sync-lagringsbruken på er å opprette et nytt fjernhvelv med vedlegg deaktivert, og deretter slette det gamle fjernhvelvet som overskrider lagringsgrensene. Vær oppmerksom på at du vil miste versjonshistorikken ved å gjøre dette.

Hvis du nedgraderer fra Sync Plus til Sync Standard, må du også redusere antall hvelv til ett før nedgraderingen tillates.

### Bevar versjonshistorikk

Vedlegg holdes i [[Versjonshistorikk|versjonshistorikken]] din i opptil to uker. Hvis du planlegger å nedgradere i nær fremtid, kan du starte med å fjerne vedlegg fra det lokale hvelvet ditt.

Etter to uker vil disse bli tømt fra fjernhvelvet og vil ikke lenger telle mot lagringsgrensen din. På dette tidspunktet vil du kunne nedgradere planen din mens du bevarer versjonshistorikken for andre filtyper, som Markdown-filer.
