---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Hvordan synkronisere Obsidian-notatene dine på tvers av enheter og plattformer.
---
Obsidian lagrer notater lokalt på enheten din, slik at du alltid har tilgang til dem, selv uten nettilgang. For å få tilgang til notatene dine på flere enheter, må du sette opp en synkroniseringsmetode.

Denne guiden dekker vanlige synkroniseringsmetoder, inkludert tips for å unngå datatap og sikre en smidig opplevelse.

Vi anbefaler også å lese vår [[Sikkerhetskopier Obsidian-filene dine|sikkerhetskopieringsguide]] for å beskytte dataene dine.

## Synkroniseringsmetoder

Med Obsidian lagres dataene dine ganske enkelt som filer i en mappe kalt et [[Lokale og fjernhvelv|hvelv]]. Dette betyr at det finnes mange måter å synkronisere dataene dine på.

Her er noen vanlige synkroniseringsmetoder rapportert av medlemmer av [Obsidian-fellesskapet](https://obsidian.md/community):

1. **Førsteparts synkronisering**: [[#Obsidian Sync]]
2. **Tredjeparts skysynkronisering**: [[#iCloud]], [[#OneDrive]] og [[#Google Drive]]
3. **Lokal synkronisering**: [[#Syncthing]]
4. **Versjonskontroll**: [[#Git]] og [[#Working Copy]]

## Obsidian Sync

**Anbefalte systemer**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

Den mest enkle og offisielt støttede synkroniseringsmetoden er vår førstepartsløsning: [[Introduksjon til Obsidian Sync|Obsidian Sync]].

Obsidian Sync holder hvelvene dine synkronisert på tvers av alle enheter ved å bruke et eksternt fjernhvelv til å lage kopier av dataene dine. En lokal kopi forblir på enhetene dine til enhver tid.

Følg [[Sett opp Obsidian Sync|oppsettguiden]] for å konfigurere Obsidian Sync.

## iCloud

**Anbefalte systemer**: `macOS`, `iOS`, `iPadOS`

iCloud kan brukes til å synkronisere hvelv mellom iOS og macOS. Imidlertid kan **iCloud Drive på Windows** føre til filduplisering eller korrupsjon.

**Slik oppretter og lagrer du hvelvet ditt i iCloud Drive**:

- **Aktiver iCloud Drive**:
    - På macOS: Gå til **Systeminnstillinger → Apple-ID → iCloud → iCloud Drive**.
    - På iOS: Gå til **Innstillinger → [Ditt navn] → iCloud → iCloud Drive**.
- **Opprett et nytt hvelv i iCloud**:
    - På macOS:
        1. Åpne **Obsidian** og velg **Opprett nytt hvelv**.
        2. I filvelgeren, naviger til **iCloud Drive → Obsidian**.
        3. Opprett en mappe for hvelvet ditt og gi den et navn.
        4. Velg **Opprett** for å fullføre.
    - På iOS:
        1. Åpne **Obsidian** og trykk **Opprett nytt hvelv**.
        2. Skriv inn et navn for hvelvet ditt.
        3. Slå på **Lagre i iCloud**.
        4. Trykk **Opprett**.
- **Åpne hvelvet på en annen Apple-enhet**: 
    - På en annen macOS- eller iOS-enhet, åpne **Obsidian**, gå til [[Administrer hvelv|Hvelvbytteren]] og velg **Åpne mappe som hvelv**. Naviger til **iCloud Drive → Obsidian**.

> [!warning]+ Mappeplassering for iOS og iPadOS
> Når du bruker iCloud på mobile enheter, sørg for at hvelvet ditt er lagret på riktig plassering: `iCloud Drive/Obsidian/[Ditt hvelvnavn]`.
> 
> Hvelv bør være inne i **Obsidian**-mappen i iCloud Drive. Mappen til høyre med Obsidian-ikonet er riktig. Ikke bruk den vanlige mappen uten app-ikonet.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> For å bekrefte hvelvplasseringen din, åpne **Filer**-appen, trykk **Bla gjennom**, velg **iCloud Drive** under **Plasseringer**, og bekreft at hvelvet ditt er inne i **Obsidian**-mappen. Hvis hvelvet ditt er på en annen plassering, kan du oppleve synkroniseringsproblemer.

> [!tip] Beste praksis
> - For **macOS 14 (Sonoma) og tidligere**: Deaktiver **Optimaliser Mac-lagring** i iCloud-innstillingene for å forhindre at filer lastes ned fra enheten. Denne innstillingen påvirker all iCloud-lagring på enheten, ikke bare Obsidian.
> - For **macOS 15 (Sequoia)**: Høyreklikk på **Obsidian**-mappen i iCloud Drive og velg **Behold nedlastet**.

## OneDrive

**Anbefalte systemer**: `Windows`, `macOS` (begrenset funksjonalitet på Android)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) er et populært skylagringsalternativ for Windows- og macOS-brukere. Det har imidlertid begrensninger på Android og er ikke offisielt støttet for synkronisering av Obsidian-hvelv på iOS.

> [!info] Hold filer tilgjengelige frakoblet
> Før du bruker OneDrive til synkronisering, sørg for at hvelvmappen din er merket som **Behold alltid på denne enheten**. Dette forhindrer OneDrive fra å laste ned filer og få Obsidian til å tro at de mangler.

**Slik oppretter og lagrer du hvelvet ditt i OneDrive**:

1. **Konfigurer OneDrive**:
   - På Windows: Logg inn via OneDrive-appen eller Microsoft-kontoen din.
   - På macOS: Last ned OneDrive-appen og logg inn.
2. **Opprett et nytt hvelv i OneDrive**:
   - På Windows/macOS:
     1. Åpne **Filutforsker** (Windows) eller **Finder** (macOS) og naviger til **OneDrive → Dokumenter**.
     2. Opprett en ny mappe (f.eks. \"Obsidian-hvelv\").
     3. Åpne **Obsidian**, velg **Opprett nytt hvelv**, og velg OneDrive-mappen.
3. **Åpne hvelvet på en annen enhet**:
   - På en annen enhet, åpne **Obsidian**, gå til [[Administrer hvelv|Hvelvbytteren]] og velg **Åpne mappe som hvelv**. Naviger til **OneDrive → Dokumenter**.

> [!info] Android-synkronisering
> OneDrive fungerer kanskje ikke godt for Android-synkronisering. Vurder å bruke apper som [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) eller [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Beste praksis
> - Hold alltid hvelvfilene dine **Tilgjengelige frakoblet** ved å høyreklikke på mappen og velge **Behold alltid på denne enheten**.
> - Unngå å bruke OneDrives **Filer ved behov**-funksjon for hvelv for å forhindre synkroniseringsproblemer.

## Google Drive

**Anbefalte systemer**: `Windows`, `macOS`, `Android` (begrenset funksjonalitet på iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) er en annen populær skylagringsløsning. Selv om den ikke er offisielt støttet for synkronisering av Obsidian-hvelv, kan du bruke tredjepartsapper og tillegg for å synkronisere på tvers av enheter.

> [!info] iOS-støtte
> Google Drive er ikke offisielt støttet for synkronisering av Obsidian-hvelv på iOS. Vurder å bruke en tredjepartsløsning eller et tillegg for å synkronisere på iOS.

**Slik oppretter og lagrer du hvelvet ditt i Google Drive**:

1. **Konfigurer Google Drive**:
    - På Windows eller macOS: Last ned Google Drive-appen og logg inn.
    - På Android: Sørg for at Google Drive er aktivert og innlogget.
2. **Opprett et nytt hvelv i Google Drive**:
    - På Windows/macOS:
        1. Åpne **Filutforsker** (Windows) eller **Finder** (macOS) og naviger til **Google Drive**.
        2. Opprett en ny mappe (f.eks. \"Obsidian-hvelv\").
        3. Åpne **Obsidian**, velg **Opprett nytt hvelv**, og velg Google Drive-mappen.
3. **Åpne hvelvet på en annen enhet**:
    - På en annen enhet, åpne **Obsidian**, gå til [[Administrer hvelv|Hvelvbytteren]] og velg **Åpne mappe som hvelv**. Naviger til Google Drive-mappen din.

> [!tip] Beste praksis
> - Sett hvelvfiler til **Tilgjengelig frakoblet** i Google Drive for å unngå synkroniseringsproblemer på grunn av nedlasting.
> - For iOS, vurder alternative metoder som [[Introduksjon til Obsidian Sync|Obsidian Sync]], [[#iCloud]], eller bruk **Remotely Save**-tillegget.

## Syncthing

**Anbefalte systemer**: `Windows`, `macOS`, `Linux`

Syncthing er et desentralisert filsynkroniseringsverktøy som ikke er avhengig av skylagring. Det synkroniserer hvelvet ditt direkte mellom enheter over nettverket eller internett.

> [!info]+ Android-støtte
> Den offisielle Syncthing Android-appen vedlikeholdes ikke lenger. Imidlertid fortsetter en fellesskapsforgrening kalt [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) aktiv utvikling og kan brukes på Android-enheter.

**Slik oppretter og lagrer du hvelvet ditt med Syncthing**:

1. **Konfigurer Syncthing**:
   - Installer Syncthing på hver enhet. Se [Syncthing-nettstedet](https://syncthing.net/) for installasjonsveiledninger.
   - På Android, installer [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) fra GitHub-utgivelser eller F-Droid.
2. **Opprett og konfigurer en delt mappe**:
   - På alle enheter:
     1. Åpne Syncthing og opprett en delt mappe. Sett mappebanen til Obsidian-hvelvet ditt.
     2. Sørg for at den samme mappen er valgt på alle enheter.
     3. Konfigurer mappesynkroniseringsinnstillinger (f.eks. **Send og motta** for toveis synkronisering).
3. **Åpne hvelvet i Obsidian**:
   - Når mappen er synkronisert på tvers av enheter, åpne **Obsidian**, gå til [[Administrer hvelv|Hvelvbytteren]] og velg **Åpne mappe som hvelv**.

> [!info] Enhetstilgjengelighet
> Syncthing fungerer best når minst én enhet alltid er på for å sikre kontinuerlig synkronisering.

> [!tip] Beste praksis
> - For lokal synkronisering, sørg for at alle enheter er koblet til det samme nettverket.
> - Ekskluder `.obsidian` fra synkronisering hvis du ønsker separate innstillinger på hver enhet.
> - Bruk ignoreringsmønstre for å unngå synkronisering av midlertidige filer eller sikkerhetskopifiler.

## Git

**Anbefalte systemer**: `Windows`, `macOS`, `Linux`

**Git** er et versjonskontrollsystem som lar deg spore endringer, samarbeide med andre og synkronisere hvelvene dine gjennom repositorier som GitHub, GitLab eller en selvhostet server.

**Slik synkroniserer du hvelvet ditt med Git**:

1. **Konfigurer et eksternt repository**:
    - Opprett et repository på en Git-hostingplattform (f.eks. GitHub, GitLab eller en selvhostet server).
2. **Synkroniser hvelvet ditt**:
    1. Åpne en terminal eller Git GUI (f.eks. GitKraken, Sourcetree).
    2. Initialiser et Git-repository i hvelvmappen din med `git init`.
    3. Legg til det eksterne repositoriet: `git remote add origin [URL]`.
    4. Commit endringene dine: `git add .` og `git commit -m "Din melding"`.
    5. Push endringene: `git push origin main`.
3. **Pull endringer på andre enheter**:
    - Klon repositoriet på en annen enhet og pull endringer med `git pull origin main`.

> [!info] Manuell synkronisering kreves
> Git gir sterk versjonskontroll, men synkronisering skjer ikke automatisk. Du må manuelt pushe og pulle endringer.

## iPhone- og iPad-synkronisering

**Anbefalte alternativer**:
- [[Introduksjon til Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Unngå å blande synkroniseringstjenester
> Unngå å synkronisere det samme hvelvet på tvers av flere tjenester (f.eks. bruke både Obsidian Sync og iCloud samtidig) for å forhindre datakonflikter eller korrupsjon.

**Ikke-støttede alternativer**:
Følgende tjenester er ikke offisielt støttet på iOS, men brukere har funnet løsninger ved hjelp av tredjepartsverktøy eller tillegg:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Noen brukere har lykkes med å bruke tillegg som **Remotely Save** eller **LiveSync** for å synkronisere hvelv på iOS. Disse metodene er imidlertid ikke offisielt støttet, og resultatene kan variere.

### Working Copy

**Anbefalte systemer**: `iOS`
**Krever**: [[#Git]]

**Working Copy** er en Git-klient for iOS som lar deg klone, committe og pushe endringer til et Git-repository. Den fungerer godt for synkronisering av Obsidian-hvelv via Git, selv om noen funksjoner krever et betalt kjøp i appen.

**Slik synkroniserer du hvelvet ditt med Working Copy**:

1. **Installer Working Copy**:
    - Last ned **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)**-appen på din iPhone eller iPad.
2. **Klon Git-repositoriet ditt**:
    - Åpne Working Copy, trykk **Add Repository**, og skriv inn repository-URL-en din (f.eks. GitHub, GitLab).
3. **Koble repositoriet til Obsidian**:
    - Koble den klonede repository-mappen til et tomt hvelv i **Obsidian**.
4. **Commit og push endringer**:
    - Etter å ha redigert notater i Obsidian, bruk Working Copy til å **Committe** og **Pushe** endringer til det eksterne repositoriet.
    - På andre enheter, pull endringer med Git for å synkronisere hvelvet.

> [!info] Fellesskapsbruk
> Selv om Working Copy ikke er offisielt støttet, har mange brukere lykkes med å bruke den til å synkronisere hvelv med Git.

## Ofte stilte spørsmål

**Hvorfor er min foretrukne synkroniseringstjeneste ikke offisielt støttet?**

I motsetning til noen notatapper som får tilgang til én fil om gangen, krever Obsidian tilgang til hele hvelvet for funksjonene sine (f.eks. oppdatering av lenker ved omdøping av en fil). Dette gjør det vanskelig for noen tjenester å fungere pålitelig med Obsidian.

**Hvorfor må jeg holde filer «Tilgjengelige frakoblet»?**

Hvis tjenester som OneDrive eller iCloud laster ned filer (f.eks. ved bruk av **Filer ved behov** eller **Optimaliser Mac-lagring**), kan ikke Obsidian få tilgang til dem, noe som forårsaker synkroniseringsproblemer. Merk hvelvmappen din som **Behold alltid på denne enheten** (OneDrive) eller sørg for at **Behold nedlastet** er aktivert (iCloud).

**Hvordan administrerer jeg forskjellige konfigurasjoner for hvelvene mine?**

Obsidian lar deg tilpasse konfigurasjonsmappen per enhet ved hjelp av [[Konfigurasjonsmappe|Konfigurasjonsmapper]]-funksjonen.
