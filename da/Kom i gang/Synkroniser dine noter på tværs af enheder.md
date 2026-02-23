---
cssclasses:
  - soft-embed
description: Hvordan du synkroniserer dine Obsidian noter på tværs af enheder og platforme.
mobile: true
permalink: synkroniser-noter
publish: true
---

Obsidian gemmer dine noter lokalt på din enhed, så du altid kan tilgå dem selvom du ikke er online. For at tilgå dine noter på flere enheder skal du benytte en synkroniseringsmetode.

Denne guide dækker almindelige synkronisringsmetoder indklusiv tips for at forhindre datatab og sikre en god oplevelse.

Vi anbefaler, at du også læser vores [[Lav backup af dine Obsidian filer|guide til backup]] som at sikre dine data.

## Synkroniseringsmetoder

Med Obsidian er dine data blot gemt som filer i en mappe kaldet en [[Lokal- og fjernbokse|boks]]. Dette betyder, at du har mange måder at kunne synkronisere dine data.

Her er beskrevet nogle få almindelige synkroniseringsmetoder som er rapporteret af medlemmer i [Obsidian fællesskabet](https://obsidian.md/community):

1. **Førsteparts synkronisering**: [[#Obsidian Sync]]
2. **Tredjeparts synkronisering**: [[#iCloud]], [[#OneDrive]], and [[#Google Drive]]
3. **Lokal synkronisering**:  [[#Syncthing]]
4. **Versions kontrol**: [[#Git]] and [[#Working Copy]]

## Obsidian Sync

**Anbefalede platforme**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

Den mest ligefremme og supporterede synkroniseringsmetode er vores førsteparts løsning: [[Introduktion til Obsidian Sync|Obsidian Sync]].

Obsidian Sync er slut-til-slut krypteret for maksimal sikkerhed og og giver problemfri integration med Obsidian applikationen.

Følg [[Opsætning af Obsidian Sync|opsætningsguiden]] for at konfigurere Obsidian Sync.

## ICloud

**Anbefalede platforme**:  `macOS`, `iOS`, `iPadOS`

iCloud kan benyttes til at synkronisere bokse mellem iOS og macOS. Bemærk at **iCloud på Windows**  kan lede til duplikering af filer eller ødelagte filer.

**Sådan opretter og gemmer du din boks på et iCloud drev**:

- **Aktiver iCloud Drevet**:
    - På macOS: Gå til **Systemindstillinger → Apple ID → iCloud → iCloud Drev**.
    - på iOS: Gå til **Indstillinger → [Dit navn] → iCloud → iCloud Drev**.
- **Opret en ny boks i iCloud**:
    - På macOS:
        1. Åbn **Obsidian** og vælg **Opret ny boks**.
        2. I filvælgervinduet skal du navigere til **iCloud Drev → Obsidian**.
        3. Opret en mappe til din boks og giv den et navn
        4. Vælg **Opret** for at oprette den
    - På iOS:
        1. Åbn **Obsidian** og tryk på **Opret ny boks**.
        2. Skriv navnet på din boks
        3. Slå **Gem i iCloud** til
        4. Tryk på **Opret**.
- **Åben boksen på en anden Apple enhed**: 
    - Du skal åbne **Obsidian** på en anden macOS eller iOS og gå til [[Håndter bokse|håndter bokse]] og vælge **Åbn mappe som boks**. Naviger til **iCloud Drev → Obsidian**.

> [!Tip] Bedste praksis:
> - For **macOS 14 (Sonoma) og tidligere versioner**: Deaktiver **Optimer Mac Lager** i iCloud indstillingerne for at forhindre filer fra at blive fjernet. Denne indstilling påvirker al iCloud lager på enheden og ikke bare Obsidian
> - For **macOS 15 (Sequoia)**: Højreklik på **Obsidian** mappen i iCloud og vælg **Hold downloaded**.

## OneDrive

**Anbefalede platforme**: `Windows`, `macOS` (begrænset funktionalitet på Android)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) er en populær cloud løsning for Windows- og macOS brugere. Men den har begrænsninger på Android og er ikke officielt understøttet til at supportere synkronisering på iOS.

> [!Important] Du skal sikre dig, at din boksmappe er markeret som **Gem altid på denne enhed** før du anvender OneDrive til synkronisering. Det forhindrer OneDrive fra at flytte filer offline og få Obsidian til at tænke, at de mangler.

**Sådan opretter og gemmer du din boks på OneDrive**:

1. **Opsæt OneDrive**:
   - På Windows: Log ind på din OneDrive app eller på din Microsoft konto
   - På macOS: Helt OneDrive appen og log ind
2. **Opret en ny boks på OneDrive**:
   - På Windows/macOS:
     1. Åbn **Stifinder** (Windows) eller **Finder** (macOS) og naviger til  **OneDrive → Dokumenter**
     2. Opret en ny mappe (fx. "Obsidian boks")
     3. Åbn **Obsidian**, klik **Opret ny boks**, og vælg OneDrive mapppen
3. **Åben boksen på en anden enhed**:
   - Åbn **Obsidian** på en anden enhed og gå til [[Håndter bokse|boksskifteren]] og vælg **Åbn mappe som boks**. Naviger til **OneDrive → Dokumenter**

> [!Note] OneDrive synkroniserer ikke godt på Android. Overvej at benytte apps sp,  [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) eller [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!Tip] Bedste praksis:
> - Holde altid dine filer **tilgængelig offline** ved at højreklikke på boksmappen og vælge: **Gem altid på denne enhed**
> - Undgå at benytte OneDrives **Filer On-Demand** funktion til bokse, for at undgå synkroniseringsproblemer

## Google Drive

**Anbefalede platforme**: `Windows`, `macOS`, `Android` (begrænset funktionalitet på iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) er en anden populær Cloud løsning. Selvom den ikke er supporteret officielt til Obsidian bokse kan du anvende tredjeparts apps og plugins til at synkronisere på tværs af enheder.

> [!Important] Google Drive er ikke offcielt understøttet til at synkronisere Obsidian bokse på iOS. Overvej at anvende en tredjepartsløsning eller et plugin til at synkronisere på iOS.

**Sådan opretter du og gemmer din boks på Google Drive**:

1. **Opsæt Google Drive**:
    - På Windows eller macOS: Hent Google Drive appen og log ind
    - På Android: Sørg for at Google Drive er aktiveret og du er logget ind
2. **Opret en boks på Google Drive**:
    - På Windows/macOS:
        1. Åbn **Stifinderen** (Windows) eller **Finder** (macOS) og naviger til **Google Drive**
        2. Opret en mappe (fx. "Obsidian Boks").
        3. Åbn **Obsidian**, klik på **Opret ny boks**, og vælg Google Drive mappen
3. **Åben boksen på en anden enhed**:
    - Åbn **Obsidian** på en anden enhed og gå til [[Håndter bokse|boksskifteren]] og vælg **Åbn mappe som boks**. Naviger til din Google Drive mappe

> [!Tip] Bedste praksis:
> - Sæt boks filer til **Tilgængelig Offline** på Google Drive for at hindre at de flyttes offline, hvilket giver synkroniseringsproblemer
> - Overvej alternative metoder for iOS, som fx. [[Introduction to Obsidian Sync|Obsidian Sync]], [[#iCloud]], eller benyt **Remotely Save** pluginnet.

## Syncthing

**Anbefalede platforme**: `Windows`, `macOS`, `Linux`, `Android`

Syncthing er et decentraliseret synkroniseringsværktøj, som ikke kræver en cloud. Den synkroniserer dine bokse direkte mellem enheder og et netærk eller internettet.

**Sådan anvender du Syncthing til at oprette og gemme din boks**:

1. **Opsæt Syncthing**:
   - Installer Syncthing på alle enheder. Find installationsguides på [Syncthings hjemmeside](https://syncthing.net/)
2. **Opret og konfigurer delte mapper**:
   - På alle enheder:
     1. Åbn Syncthing og opret en delt mappe. Sæt mappen sti til din Obsidian boks
     2. Sørg for at den samme mappe er valgt på alle enheder
     3. Konfigurer mappesynkroniseringsindstillingerne (e.g., **Send & Receive** for tovejs synkronisering)
3. **Åbn boksen i Obsidian**:
   - Når mappen er synkroniseret på tværs af enheder skal du åbne **Obsidian**,og gå til [[Håndter bokse|boksskifteren]] og vælge **Åbn mappe som boks**

> [!Note] Syncthing virker bedst, hvis mindst en enhed altså er online for at sikre kontinuerlig synkronisering.

> [!Tip] Bedste praksis:
> - Sørg for at alle enheder er forbundet til det samme netværk for lokal synkronisering.
> - Ekskluder `.obsidian` mappen fra synkronisering, hvis du ønsker separate Obsidian indstilliner på hver enhed
> - Benyt ekskuderings filtre for at undgå at synkronisere temporære filer eller backupfiler.

## Git

**Anbefalede platforme**: `Windows`, `macOS`, `Linux`

**Git** er et versionskontrol system, der gør dig i stand til at spore ændringer, samarbejde med andre og synkronisere dine bokse via repositories på GitHub, GitLab, eller på en selvhostet server.

**Sådan synkroniserer du din boks med Git**:

1. **Opsæt fjernrepositoriet**:
    - Opret et repository på en Git hosting platform (fx. GitHub, GitLab, eller på en selvhostet server)
2. **Synkroniser din boks**:
    1. Åbn en terminal eller en Git GUI (fx. GitKraken, Sourcetree)
    2. Initialiser et Git repository i din boks mappe med kommandoen`git init`
    3. Tilføj fjernrepositoriet: `git remote add origin [URL]`
    4. Commit dine ændringer: `git add .` og `git commit -m "Your message"`
    5. Push ændringerne: `git push origin main`
3. **Pull ændringer til andre enheder**:
    - Klon repositoriet på en anden enhed og pull ændringer med kommandoen `git pull origin main`

> [!Note] Git tilyder en stærk versionskontrol, men synkronisering er ikke automatisk. Du skal manuelt synkronisere din boks med push og pull kommandoer.

## iPhone og iPad synkronisering

**Anbefalede muligheder**:
- [[Introduktion til Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!Important] Undgå at synkronisere den samme boks over flere services (Vvd fx. at anvende både Obsidian Sync og iCloud samtidig) for at forhindre daata konflikter og ødelagte filer.

**Usupporterede muligheder**:
De følgende services er ikke officielt understøttet på iOS, men brugere har fundet måder at få dem til at fungere på ved brug af tredjeparts værktøjer eller plugins:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Nogle brugere har med succes brugt plugins som **Remotely Save** eller **LiveSync** til at synkronisere bokse på iOS. Men disse metoder er ikke officielt supporteret og succen kan variere.

### Working Copy

**Anbefalede platforme**: `iOS`
**Kræver**: [[#Git]]

**Working Copy** er en Git klient til iOS som tillader dig at clone, committe, og pushe ændringer til et Git repository. Den virker fint til at synkronisere Obsidian bokse via Git, selvom nogle funktioner kræver en betaling direkte i appen.

**Sådan synkroniserer du din boks med Working Copy**:

1. **Installer Working Copy**:
    - Hent **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** appen på din iPhone eller iPad
2. **Klon dit Git repository**:
    - Åbn Working Copy, tryk på **Add Repository**, og tilføj din repository URL (fx. GitHub, GitLab)
3. **Link repositoriet til Obsidian**:
    - Link den klonede repository mappe til en tom boks i **Obsidian**
4. **Commit og push ændringer**:
    - Når du er færdig med at redigere noter i Obsidian, anvender du Working Copy til at **committe** og **pushe** ændringer til fjernrepositoriet
    - På andre enheder udfører du et pull med Git for at synkronisere boksen

> [!Note] Selvom Working Copy ikke er officielt understøttet, har mange brugere haft succes med at bruge den til at synkronisere deres bokse med Git.


## Sammenligning

Hver synkroniseringsmetode har forskellige fordele og ulemper inklusiv pris, privatsikkerhed og funktioner.

|                                                  | Slut-til-slut<br>kryptering | Versionshistorik |
| ------------------------------------------------ | ------------------------ | ------------------ |
| [[Introduktion til Obsidian Sync\|Obsidian Sync]] | ✅                        | ✅                  |
| iCloud                                           | valgfri                 | ❌                  |
| OneDrive                                         | ❌                        | ❌                  |
| Google Drive                                     | ❌                        | ❌                  |
| Syncthing                                        | valgfri                 | ✅                  |
| Git                                              | ❌                        | ✅                  |


## Ofte stillede spørgsmål

**Hvorfor er min foretrukne synkroniseringsservice ikke officielt supporteret?**

Til forskel fra nogle notetagnings applikationer, som tilgår én fil af gangen, så kræver Obsidian tilgang til hele boksen til sine funktioner (fx. opdatering af links, når en fil omdøbes). Dette gør det svært for nogel services at fungere pålideligt med Obsidian.

**Hvorfor bliver jeg nødt til at holde mine filer **tilgængelige offline**?

Hvis services som OneDrive eller iCloud lægger filer offline (fx. med **Filer On-Demand** eller **Optimer Mac lager**) kan Obsidian ikke tilgå dem, hvilket skaber synkroniseringsproblemer. Marker din boks mappe som **Gem altid på denne enhed** (OneDrive) eller vær sikker på at **Hold downloaded** er slået til (iCloud).

**Hvordan håndterer jeg forskellige bokskonfigurationer?**

Obsidian tillader dig at konfigurationsmappen for en boks er forskellig for hver enhed ved hjælp af [[Konfigurationsmappen|konfigurationsmappe]] funktionen.
