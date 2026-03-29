---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Hur du synkroniserar dina Obsidian-anteckningar mellan enheter och plattformar.
---
Obsidian lagrar anteckningar lokalt på din enhet så att du alltid har tillgång till dem, även offline. För att komma åt dina anteckningar på flera enheter behöver du konfigurera en synkroniseringsmetod.

Den här guiden täcker vanliga synkroniseringsmetoder, inklusive tips för att undvika dataförlust och säkerställa en smidig upplevelse.

Vi rekommenderar också att du läser vår [[Säkerhetskopiera dina Obsidian-filer|guide för säkerhetskopiering]] för att skydda dina data.

## Synkroniseringsmetoder

Med Obsidian lagras dina data helt enkelt som filer i en mapp som kallas ett [[Lokala och fjärrvalv|valv]]. Det betyder att det finns många sätt att synkronisera dina data.

Här är några vanligt använda synkroniseringsmetoder rapporterade av medlemmar i [Obsidian-gemenskapen](https://obsidian.md/community):

1. **Förstapartssynkronisering**: [[#Obsidian Sync]]
2. **Tredjepartsmoln-synkronisering**: [[#iCloud]], [[#OneDrive]] och [[#Google Drive]]
3. **Lokal synkronisering**: [[#Syncthing]]
4. **Versionskontroll**: [[#Git]] och [[#Working Copy]]

## Obsidian Sync

**Rekommenderade system**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

Den mest enkla och officiellt stödda synkroniseringsmetoden är vår förstapartslösning: [[Introduktion till Obsidian Sync|Obsidian Sync]].

Obsidian Sync håller dina valv synkroniserade mellan alla enheter genom att använda ett externt fjärrvalv för att göra kopior av dina data. En lokal kopia finns alltid kvar på dina enheter.

Följ [[Konfigurera Obsidian Sync|installationsguiden]] för att konfigurera Obsidian Sync.

## iCloud

**Rekommenderade system**: `macOS`, `iOS`, `iPadOS`

iCloud kan användas för att synkronisera valv mellan iOS och macOS. Dock kan **iCloud Drive på Windows** leda till filduplicering eller korruption.

**Så här skapar och lagrar du ditt valv i iCloud Drive**:

- **Aktivera iCloud Drive**:
    - På macOS: Gå till **Systeminställningar → Apple-ID → iCloud → iCloud Drive**.
    - På iOS: Gå till **Inställningar → [Ditt namn] → iCloud → iCloud Drive**.
- **Skapa ett nytt valv i iCloud**:
    - På macOS:
        1. Öppna **Obsidian** och välj **Skapa nytt valv**.
        2. I filväljaren, navigera till **iCloud Drive → Obsidian**.
        3. Skapa en mapp för ditt valv och ge den ett namn.
        4. Välj **Skapa** för att slutföra.
    - På iOS:
        1. Öppna **Obsidian** och tryck på **Skapa nytt valv**.
        2. Ange ett namn för ditt valv.
        3. Slå på **Lagra i iCloud**.
        4. Tryck på **Skapa**.
- **Öppna valvet på en annan Apple-enhet**:
    - På en annan macOS- eller iOS-enhet, öppna **Obsidian**, gå till [[Hantera valv|Valvväxlaren]] och välj **Öppna mapp som valv**. Navigera till **iCloud Drive → Obsidian**.

> [!warning]+ Mappplats för iOS och iPadOS
> När du använder iCloud på mobila enheter, se till att ditt valv lagras på rätt plats: `iCloud Drive/Obsidian/[Ditt valvnamn]`.
> 
> Valv bör vara inuti **Obsidian**-mappen i iCloud Drive. Mappen till höger med Obsidian-ikonen är korrekt. Använd inte den vanliga mappen utan appikonen.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> För att verifiera din valvplats, öppna appen **Filer**, tryck på **Bläddra**, välj **iCloud Drive** under **Platser** och bekräfta att ditt valv finns inuti **Obsidian**-mappen. Om ditt valv finns på en annan plats kan du uppleva synkroniseringsproblem.

> [!tip] Bästa praxis
> - För **macOS 14 (Sonoma) och tidigare**: Inaktivera **Optimera Mac-lagring** i iCloud-inställningar för att förhindra att filer avlastas. Denna inställning påverkar all iCloud-lagring på enheten, inte bara Obsidian.
> - För **macOS 15 (Sequoia)**: Högerklicka på **Obsidian**-mappen i iCloud Drive och välj **Behåll nedladdad**.

## OneDrive

**Rekommenderade system**: `Windows`, `macOS` (begränsad funktionalitet på Android)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) är ett populärt molnlagringsalternativ för Windows- och macOS-användare. Det har dock begränsningar på Android och stöds inte officiellt för synkronisering av Obsidian-valv på iOS.

> [!info] Behåll filer tillgängliga offline
> Innan du använder OneDrive för synkronisering, se till att din valvmapp är markerad som **Behåll alltid på denna enhet**. Detta förhindrar att OneDrive avlastar filer och får Obsidian att tro att de saknas.

**Så här skapar och lagrar du ditt valv i OneDrive**:

1. **Konfigurera OneDrive**:
   - På Windows: Logga in via OneDrive-appen eller ditt Microsoft-konto.
   - På macOS: Ladda ner OneDrive-appen och logga in.
2. **Skapa ett nytt valv i OneDrive**:
   - På Windows/macOS:
     1. Öppna **Utforskaren** (Windows) eller **Finder** (macOS) och navigera till **OneDrive → Dokument**.
     2. Skapa en ny mapp (t.ex. \"Obsidian Vault\").
     3. Öppna **Obsidian**, välj **Skapa nytt valv** och välj OneDrive-mappen.
3. **Öppna valvet på en annan enhet**:
   - På en annan enhet, öppna **Obsidian**, gå till [[Hantera valv|Valvväxlaren]] och välj **Öppna mapp som valv**. Navigera till **OneDrive → Dokument**.

> [!info] Android-synkronisering
> OneDrive kanske inte fungerar bra för Android-synkronisering. Överväg att använda appar som [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) eller [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Bästa praxis
> - Behåll alltid dina valvfiler **Tillgängliga offline** genom att högerklicka på mappen och välja **Behåll alltid på denna enhet**.
> - Undvik att använda OneDrives funktion **Filer på begäran** för valv för att förhindra synkroniseringsproblem.

## Google Drive

**Rekommenderade system**: `Windows`, `macOS`, `Android` (begränsad funktionalitet på iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) är en annan populär molnlagringslösning. Även om det inte officiellt stöds för synkronisering av Obsidian-valv kan du använda tredjepartsappar och tillägg för att synkronisera mellan enheter.

> [!info] iOS-stöd
> Google Drive stöds inte officiellt för synkronisering av Obsidian-valv på iOS. Överväg att använda en tredjepartslösning eller ett tillägg för att synkronisera på iOS.

**Så här skapar och lagrar du ditt valv i Google Drive**:

1. **Konfigurera Google Drive**:
    - På Windows eller macOS: Ladda ner Google Drive-appen och logga in.
    - På Android: Se till att Google Drive är aktiverat och inloggat.
2. **Skapa ett nytt valv i Google Drive**:
    - På Windows/macOS:
        1. Öppna **Utforskaren** (Windows) eller **Finder** (macOS) och navigera till **Google Drive**.
        2. Skapa en ny mapp (t.ex. \"Obsidian Vault\").
        3. Öppna **Obsidian**, välj **Skapa nytt valv** och välj Google Drive-mappen.
3. **Öppna valvet på en annan enhet**:
    - På en annan enhet, öppna **Obsidian**, gå till [[Hantera valv|Valvväxlaren]] och välj **Öppna mapp som valv**. Navigera till din Google Drive-mapp.

> [!tip] Bästa praxis
> - Ställ in valvfiler som **Tillgängliga offline** i Google Drive för att undvika synkroniseringsproblem på grund av avlastning.
> - För iOS, överväg alternativa metoder som [[Introduktion till Obsidian Sync|Obsidian Sync]], [[#iCloud]], eller använd tillägget **Remotely Save**.

## Syncthing

**Rekommenderade system**: `Windows`, `macOS`, `Linux`

Syncthing är ett decentraliserat filsynkroniseringsverktyg som inte förlitar sig på molnlagring. Det synkroniserar ditt valv direkt mellan enheter över nätverket eller internet.

> [!info]+ Android-stöd
> Den officiella Syncthing Android-appen underhålls inte längre. Dock fortsätter en community-fork kallad [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) aktiv utveckling och kan användas på Android-enheter.

**Så här skapar och lagrar du ditt valv med Syncthing**:

1. **Konfigurera Syncthing**:
   - Installera Syncthing på varje enhet. Se [Syncthings webbplats](https://syncthing.net/) för installationsguider.
   - På Android, installera [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) från GitHub-utgåvorna eller F-Droid.
2. **Skapa och konfigurera en delad mapp**:
   - På alla enheter:
     1. Öppna Syncthing och skapa en delad mapp. Ställ in mappsökvägen till ditt Obsidian-valv.
     2. Se till att samma mapp är vald på alla enheter.
     3. Konfigurera mappsynkroniseringsinställningar (t.ex. **Skicka och ta emot** för tvåriktad synkronisering).
3. **Öppna valvet i Obsidian**:
   - När mappen är synkroniserad mellan enheter, öppna **Obsidian**, gå till [[Hantera valv|Valvväxlaren]] och välj **Öppna mapp som valv**.

> [!info] Enhetstillgänglighet
> Syncthing fungerar bäst när minst en enhet alltid är påslagen för att säkerställa kontinuerlig synkronisering.

> [!tip] Bästa praxis
> - För lokal synkronisering, se till att alla enheter är anslutna till samma nätverk.
> - Exkludera `.obsidian` från synkronisering om du vill ha separata inställningar på varje enhet.
> - Använd ignoreringsmönster för att undvika synkronisering av temporära filer eller säkerhetskopior.

## Git

**Rekommenderade system**: `Windows`, `macOS`, `Linux`

**Git** är ett versionskontrollsystem som låter dig spåra ändringar, samarbeta med andra och synkronisera dina valv genom repositorier som GitHub, GitLab eller en självhostad server.

**Så här synkroniserar du ditt valv med Git**:

1. **Konfigurera ett fjärrrepositorium**:
    - Skapa ett repositorium på en Git-värdplattform (t.ex. GitHub, GitLab eller en självhostad server).
2. **Synkronisera ditt valv**:
    1. Öppna en terminal eller Git-GUI (t.ex. GitKraken, Sourcetree).
    2. Initiera ett Git-repositorium i din valvmapp med `git init`.
    3. Lägg till fjärrrepositoriet: `git remote add origin [URL]`.
    4. Committa dina ändringar: `git add .` och `git commit -m "Ditt meddelande"`.
    5. Pusha ändringarna: `git push origin main`.
3. **Hämta ändringar på andra enheter**:
    - Klona repositoriet på en annan enhet och hämta ändringar med `git pull origin main`.

> [!info] Manuell synkronisering krävs
> Git erbjuder stark versionskontroll, men synkroniseringen är inte automatisk. Du måste manuellt pusha och hämta ändringar.

## Synkronisering för iPhone och iPad

**Rekommenderade alternativ**:
- [[Introduktion till Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Undvik att blanda synkroniseringstjänster
> Undvik att synkronisera samma valv via flera tjänster (t.ex. att använda både Obsidian Sync och iCloud samtidigt) för att förhindra datakonflikter eller korruption.

**Alternativ som inte stöds**:
Följande tjänster stöds inte officiellt på iOS, men användare har hittat lösningar med hjälp av tredjepartsverktyg eller tillägg:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Vissa användare har framgångsrikt använt tillägg som **Remotely Save** eller **LiveSync** för att synkronisera valv på iOS. Dessa metoder stöds dock inte officiellt och resultaten kan variera.

### Working Copy

**Rekommenderade system**: `iOS`
**Kräver**: [[#Git]]

**Working Copy** är en Git-klient för iOS som låter dig klona, committa och pusha ändringar till ett Git-repositorium. Det fungerar bra för att synkronisera Obsidian-valv via Git, även om vissa funktioner kräver ett betalt köp i appen.

**Så här synkroniserar du ditt valv med Working Copy**:

1. **Installera Working Copy**:
    - Ladda ner appen **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** på din iPhone eller iPad.
2. **Klona ditt Git-repositorium**:
    - Öppna Working Copy, tryck på **Add Repository** och ange din repositorie-URL (t.ex. GitHub, GitLab).
3. **Länka repositoriet till Obsidian**:
    - Länka den klonade repositoriemappen till ett tomt valv i **Obsidian**.
4. **Committa och pusha ändringar**:
    - Efter att ha redigerat anteckningar i Obsidian, använd Working Copy för att **Committa** och **Pusha** ändringar till fjärrrepositoriet.
    - På andra enheter, hämta ändringar med Git för att synkronisera valvet.

> [!info] Gemenskapsanvändning
> Även om Working Copy inte stöds officiellt har många användare framgångsrikt använt det för att synkronisera valv med Git.

## Vanliga frågor

**Varför stöds inte min föredragna synkroniseringstjänst officiellt?**

Till skillnad från vissa anteckningsappar som använder en fil i taget kräver Obsidian åtkomst till hela valvet för sina funktioner (t.ex. att uppdatera länkar vid namnbyte av en fil). Detta gör det svårt för vissa tjänster att fungera tillförlitligt med Obsidian.

**Varför behöver jag behålla filer "Tillgängliga offline"?**

Om tjänster som OneDrive eller iCloud avlastar filer (t.ex. med **Filer på begäran** eller **Optimera Mac-lagring**) kan Obsidian inte komma åt dem, vilket orsakar synkroniseringsproblem. Markera din valvmapp som **Behåll alltid på denna enhet** (OneDrive) eller se till att **Behåll nedladdad** är aktiverat (iCloud).

**Hur hanterar jag olika konfigurationer för mina valv?**

Obsidian låter dig anpassa konfigurationsmappen per enhet med funktionen [[Konfigurationsmapp|Konfigurationsmappar]].
