---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Flytt Sync-hvelvet ditt til en annen region.
---
Når du oppretter et [[Lokale og fjernhvelv|fjernhvelv]] gjennom [[Introduksjon til Obsidian Sync|Obsidian Sync]], blir dataene dine kryptert og lagret på en av Obsidians regionale Sync-servere. Denne veiledningen forklarer hvordan du flytter Sync-hvelvet ditt til en annen regional server.

## Tilgjengelige regioner

Følgende regioner er tilgjengelige med Obsidian Sync. Vi anbefaler å bruke **Automatisk** eller velge en plassering nær deg for å redusere ventetid og gjøre synkroniseringsprosessen raskere.

![[Obsidian Sync/Sikkerhet og personvern#^sync-geo-regions]]

## Registrer innstillingene dine

Når du kobler en enhet til det nye fjernhvelvet, kan Sync bruke innstillingene du har aktivert på det tidspunktet. Hvis du har forskjellige innstillinger på forskjellige enheter, bør du notere dem ned før du begynner. For eksempel synkroniserer du kanskje ikke store mediefiler til telefonen din.

På hver enhet som bruker fjernhvelvet, åpne **[[Innstillinger]] → Sync** og noter disse innstillingene. Et skjermbilde fungerer godt.

- **Selektiv synkronisering**
- **Synkronisering av hvelvkonfigurasjon**
- **Ekskluderte mapper**
- Enhetsspesifikke innstillinger, som **Enhetsnavn** og **Konfliktløsning**

Se [[Sync-innstillinger og selektiv synkronisering]] for hva hver innstilling gjør og hvilke som er aktivert som standard.

## Endre Sync-region

For å endre regionet til fjernhvelvet ditt, må du opprette hvelvet på nytt på en annen Sync-server. Merk at du også kan endre regioner ved å bruke migrasjonsassistenten for [[Oppgrader Sync-kryptering]], dersom fjernhvelvet ditt er på en eldre versjon.

> [!danger] Migrasjoner er destruktive
> 
> **[[Sikkerhetskopier Obsidian-filene dine|Sikkerhetskopier]] alltid hvelvet ditt før du fortsetter med en migrering.**
> 
> Når du migrerer et fjernhvelv, vil dataene dine bli erstattet. Dette betyr:
> 
> 1. Fjerndata vil bli fjernet fra Obsidians servere, og hvelvdata vil bli lastet opp på nytt i stedet.
> 2. All [[Versjonshistorikk|versjonshistorikk]] for hvelvet vil gå tapt.

![[Sett opp Obsidian Sync#Koble fra et fjernhvelv]]

Hvis du er på [[Planer og lagringsgrenser|Standard-planen]], må du også [[Sett opp Obsidian Sync#Slett et fjernhvelv|slette fjernhvelvet ditt]] før du fortsetter.

![[Sett opp Obsidian Sync#Opprett et nytt fjernhvelv]]

## Koble til de andre enhetene dine på nytt

Etter at det nye fjernhvelvet er ferdig synkronisert på den første enheten din, bytter du over alle andre enheter som brukte det gamle fjernhvelvet. Jobb med én enhet om gangen.

1. På enheten, [[Sett opp Obsidian Sync#Koble fra et fjernhvelv|koble fra det gamle fjernhvelvet]].
2. [[Sett opp Obsidian Sync#Synkroniser et fjernhvelv på en annen enhet|Koble til det nye fjernhvelvet]]. Ikke velg **Start synkronisering** ennå.
3. Sett **Selektiv synkronisering**, **Synkronisering av hvelvkonfigurasjon** og **Ekskluderte mapper** til å samsvare med innstillingene du noterte for denne enheten.
4. Start Obsidian på nytt. På mobil eller nettbrett kan du måtte tvangsstoppe appen.
5. Velg **Start synkronisering** eller **Fortsett**, og vent til Sync er ferdig før du går videre til neste enhet.

I tillegg kan du [[Sett opp Obsidian Sync#Slett et fjernhvelv|slette det gamle fjernhvelvet ditt]] når du har bekreftet overgangen til det nye fjernhvelvet og dets region.
