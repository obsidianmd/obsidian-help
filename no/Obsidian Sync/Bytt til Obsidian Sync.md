---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Lær hvordan du går over fra din nåværende synkroniseringsløsning til Obsidian Sync.
---
Lær hvordan du går over fra din nåværende synkroniseringsløsning til Obsidian Sync.

> [!warning] Unngå å bruke flere løsninger for å synkronisere de samme filene
> Vi [[Ofte stilte spørsmål#Kan jeg bruke en tredjeparts synkroniseringstjeneste med Obsidian Sync?|anbefaler ikke]] å bruke Obsidian Sync sammen med skylagringstjenester (f.eks. iCloud, Dropbox, OneDrive, Google Drive) da dette kan forårsake konflikter. Skylagringstjenester kan imidlertid spille en rolle i din [[Sikkerhetskopier Obsidian-filene dine|sikkerhetskopierings]]-strategi.

## Flytt hvelvet ditt ut av tredjeparts synkroniseringstjeneste eller skylagring

Hvis hvelvet ditt er lagret på noen av følgende plasseringer, blir det sannsynligvis synkronisert av en tredjepartstjeneste:

- **Windows**: `C:\Users\Username\Desktop` eller `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` eller `/users/username/Documents`
- **iOS**: **iCloud**-mappen i Filer-appen
- **Annet**: Enhver mappe under en synkroniseringstjeneste, som `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault`, osv.

Selv om Android og Linux har en tendens til å ha færre problemer med dette, er det likevel verdt å sjekke hvelvplasseringen din på disse enhetene.

> [!tip] Hvis ditt nåværende lokale hvelv er koblet til et fjernhvelv, vil Obsidian forsøke å oppdage om hvelvet er i en synkroniseringstjeneste. Hvis det er det, vil du se en melding øverst i Obsidian Syncs innstillinger.

For å unngå konflikter med synkroniseringstjenester anbefaler vi å lagre Obsidian-hvelvene dine på følgende plasseringer:

- **Windows**: Anbefalte plasseringer i rekkefølge:
    1. `D:\` eller en annen stasjon som ikke er C: eller nettverksstasjon på enheten din
    2. `C:\Vaults` (hvis du har tillatelse til å bruke C:\-stasjonen)
    3. `C:\Users\Username\Vaults` (hvis du må beholde hvelvet innenfor C:\Users\Username, sørg for at OneDrive er innstilt til ikke å fjerne filer. OneDrive er generelt mindre aggressiv utenfor `Desktop`- og `Documents`-mappene.)
- **macOS**: `/users/username/vaults`
- **Linux**: Ingen spesifikk anbefaling på grunn av mangfoldet av filsystemer. Bare sørg for at Obsidian har full lese-/skrivetilgang og at ingen synkroniseringstjeneste administrerer mappen.
- **iOS/iPadOS**: Lagre hvelvet **På min iPhone** eller **På enheten**.
- **Android**: Bruk `Documents/`-mappen på enheten din.

## Flytt hvelvet ditt med Obsidian på skrivebord

![[Administrer hvelv#Flytt hvelvet til en annen mappe]]

## Flytt hvelvet ditt på mobil

På mobile enheter kjører Obsidian i et sandkassemiljø, noe som betyr at du ikke kan flytte hvelv innenfor appen slik du kan på skrivebord.

### Android

Android-filsystemer varierer mye etter enhet, men generelt følger du de samme trinnene som du ville gjort for å flytte hvelvet manuelt, og sørger for at det fjernes fra enhver synkroniseringstjeneste på enheten din.

### iOS og iPadOS

For å flytte et eksisterende iCloud-hvelv til enheten din, følg disse trinnene:

> [!note] Hvis du allerede har dataene på en annen enhet og har satt opp Obsidian Sync, anbefales det å [[Sett opp Obsidian Sync#Synkroniser et fjernhvelv på en annen enhet|sette opp et nytt lokalt hvelv fra Sync]] i stedet.

- [[Sikkerhetskopier Obsidian-filene dine|Sikkerhetskopier]] hvelvet ditt.
- Opprett et nytt hvelv på enheten din, og sørg for at **Lagre i iCloud Drive** er deaktivert.
- Tving avslutning av Obsidian-appen på alle enheter for å sette Sync på pause.
- Åpne **Filer**-appen på iOS/iPadOS-enheten din.
- Langt trykk på hvelvmappen under **iCloud Drive → Obsidian**, og velg deretter **Flytt**.
- Flytt hvelvet til **På min iPhone/Enhet → Obsidian** og bekreft at det nå er synlig.
- Trykk på **Kopier**.
- Gå tilbake til **iCloud Drive → Obsidian** og slett den gamle hvelvmappen.

Når du åpner Obsidian igjen, bør hvelvet vise et hvelvikon i stedet for et skyikon, noe som bekrefter at det ikke lenger er i iCloud Drive. Obsidian Sync vil heller ikke lenger vise advarselsmeldingen i innstillingene.

## Neste trinn

- Vil du komme i gang med Obsidian Sync? [[Sett opp Obsidian Sync]]
- Trenger du fortsatt hjelp? Sjekk ut [[Feilsøk Obsidian Sync]]
