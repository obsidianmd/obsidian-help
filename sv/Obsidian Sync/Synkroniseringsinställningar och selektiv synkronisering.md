---
permalink: sync/settings
publish: true
mobile: true
description: Den här sidan förklarar Sync-inställningarna och vägleder dig i att välja vilka filer som ska synkroniseras.
---
När du [[Planer och lagringsgränser#Skapa ett nytt fjärrvalv|skapar ett fjärrvalv]] och [[Konfigurera Obsidian Sync#Anslut till ett fjärrvalv|ansluter till det]], blir Sync-kärntillägget platsen för att hantera ditt fjärrvalv.

## Synkroniseringsinställningar

**Fjärrvalv**  
Det här avsnittet visar ditt för närvarande anslutna fjärrvalv. Det innehåller en **Koppla från**-knapp för att koppla från fjärrvalvet och en **Hantera**-knapp för att visa alla fjärrvalv som ditt konto har åtkomst till (inklusive delade valv via [[Samarbeta i ett delat valv|samarbete]]).

> [!warning]+ Fjärrvalv i synktjänst från tredje part
> Om ditt fjärrvalv finns i en synktjänst från tredje part kommer du att se ett rött felmeddelande. Följ stegen i [[Byt till Obsidian Sync]] för att lösa detta.

**Sync-status**  
Visar aktuell synkroniseringsstatus för fjärrvalvet. Det här avsnittet innehåller antingen en **Pausa**- eller **Återuppta**-knapp, beroende på status.

**Enhetsnamn**  
Tilldela ett unikt namn till enheten som för närvarande synkroniseras. Detta hjälper till att spåra aktivitet i [[Statusikon och meddelanden#Sync-aktivitetslogg|sync-loggen]]. Den här inställningen är enhetsspecifik, precis som [[#Selektiv synkronisering]].

**[[#Konfliktlösning]]**
Välj hur konflikter ska lösas när du ändrar en fil på flera enheter. Den här inställningen är enhetsspecifik, precis som [[#Selektiv synkronisering]].

**Raderade filer**  
Innehåller en knapp för att **Visa** eller **Återställ** raderade filer. För mer information, se [[Versionshistorik]].

**Valvstorlek**  
Visar en förloppsindikator som visar hur mycket av ditt synkroniseringslagringsutrymme som används.

> [!tip]- Serverbearbetningstid
> Det kan ta upp till 30 minuter för den aktuella användningen att uppdateras på grund av bearbetning på serversidan.

**Kontakta support**  
Ger instruktioner om hur du [[Hjälp och support#Kontakta Obsidians support|kontaktar Obsidians support]], inklusive alternativ för att **Kopiera felsökningsinformation** och **E-posta support**.

### Konfliktlösning

Välj hur konflikter ska lösas när du ändrar en fil på flera enheter innan synkronisering. Du kan automatiskt sammanfoga ändringar eller skapa separata konfliktfiler för manuell granskning. Se [[Felsök Obsidian Sync#Konfliktlösning|Konfliktlösning]] för detaljer om hur konflikter fungerar och hur du konfigurerar den här inställningen.

> [!warning]+ Konfigurera på varje enhet
> Den här inställningen måste konfigureras separat på varje enhet.

---

Du kan också välja vad som ska synkroniseras i Sync-kärntilläggets inställningar. Det här avsnittet täcker **selektiv synkronisering** och **valvkonfigurationssynkronisering**, tillsammans med tillhörande förbehåll.

## Selektiv synkronisering

Filer som synkroniseras till ditt [[Lokala och fjärrvalv|fjärrvalv]] bidrar till din [[Vanliga frågor#Hur stort kan varje fjärrvalv vara|lagringsgräns]]. Som standard aktiverar Obsidian Sync **selektiv synkronisering** för följande filtyper:
- Bilder
- Ljud
- Videor
- PDF-filer

För att synkronisera ytterligare filtyper, växla alternativet `Synkronisera alla andra typer`.

Standardinställningarna för **valvkonfigurationssynkronisering** inkluderar:
- Andra filtyper
- Huvudinställningar
- Utseende
- Teman och snippets
- Snabbkommandon
- Aktiv kärntilläggslista
- Kärntilläggsinställningar

För att synkronisera gemenskapstillägg, aktivera manuellt **Aktiv gemenskapstilläggslista** och **Installerad gemenskapstilläggslista**.

### Ändra filtyperna du vill synkronisera

1. Öppna **[[Inställningar]] → Sync**.
2. Under **Selektiv synkronisering**, aktivera de filtyper du vill synkronisera.
3. Starta om appen för att tillämpa de nya inställningarna. På mobil eller surfplatta kan detta kräva en tvångsavslutning.

Observera att din [[Planer och lagringsgränser|Sync-plan]] definierar den maximala filstorleken du kan synkronisera. Standardplanen tillåter synkronisering av filer upp till 5 MB, medan Plus-planen stöder filer upp till 200 MB.

> [!info]+ Exkluderade filer finns kvar i fjärrvalvet
> Att lägga till en fil i listan **Exkluderade filer** tar inte bort den från fjärrvalvet om den redan har synkroniserats. Konfigurera dina Sync-inställningar innan synkronisering för att undvika onödig lagringsanvändning.

### Exkludera en mapp från synkronisering

Som standard synkroniserar Obsidian alla filer och mappar i ditt valv. För att exkludera en specifik mapp från synkronisering:
1. Öppna **[[Inställningar]] → Sync**.
2. Bredvid **Exkluderade mappar**, välj **Hantera**.
3. Välj mappen du vill exkludera från listan.
4. Välj **Klar**.

För att ta bort en mapp från exkluderingslistan, välj ![[lucide-x.svg#icon]]-knappen bredvid mappnamnet.

#### Alltid exkluderade från synkronisering

##### Ögonblicksbilder från filåterställning

Ögonblicksbilderna i tillägget [[Filåterställning]] synkroniseras inte via Obsidian Sync, eftersom ögonblicksbilder sparas i [[Hur Obsidian lagrar data#Globala inställningar|Globala inställningar]].

##### Dolda filer och mappar

Filer och mappar som börjar med en `.` behandlas som dolda och exkluderas från synkronisering. Det enda undantaget är valvets [[Konfigurationsmapp|konfigurationsmapp]] (`.obsidian`), som synkroniseras.

Vanliga exempel på dolda filer och mappar som inte synkroniseras:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Synkroniseringsinställningar

Synkroniseringsinställningar synkroniseras inte mellan enheter. Du behöver konfigurera dem separat på varje enhet efter behov.

## Uppdatera inställningarna för ditt synkroniserade valv

För att ändra synkroniseringsinställningar på flera enheter, följ dessa steg:

> [!tip]- Primära och sekundära enheter
> Termerna "primär" och "sekundär" enhet används bara för tydlighet. Sync skiljer inte mellan dem.

### Primär enhet

Den primära enheten fungerar som sanningskälla. Ändringar som görs här synkroniseras till alla andra enheter.

1. Gå till **[[Inställningar]] → Sync**.
2. Aktivera önskade inställningar under **Valvkonfigurationssynkronisering**.
3. Ladda om eller starta om Obsidian. På mobil eller surfplatta kan en tvångsavslutning krävas.
4. Vänta tills inställningarna har synkroniserats med ditt fjärrvalv.

### Sekundär(a) enhet(er)

Sekundära enheter (som din telefon) tar emot uppdateringar från den primära enheten.

1. Gå till **[[Inställningar]] → Sync**.
2. Aktivera nödvändiga inställningar under **Valvkonfigurationssynkronisering**.
3. Vänta tills ändringarna laddas ner från fjärrvalvet.
4. Ladda om eller starta om appen för att tillämpa de synkroniserade inställningarna. På mobil eller surfplatta kan en tvångsavslutning krävas.

### Omladdning av inställningar

Vissa inställningar kan laddas om direkt, medan andra kräver en omstart:

- **Kan laddas om direkt**: De flesta Obsidian-konfigurationer, inklusive snabbkommandon och egenskaper, utseendeinställningar och konfigurationer för redan aktiverade kärntillägg.
- **Kräver omladdning**: CSS-ändringar (t.ex. [[CSS-instick]], [[Teman]]), grafvykonfigurationer och kärntilläggens tillstånd (t.ex. aktivering/inaktivering av dagliga anteckningar).

Gemenskapstillägg stöder vanligtvis inte direkt omladdning och kräver en omstart när nya inställningar tillämpas.

> [!info]+ För tilläggsutvecklare
> Lär dig hur du [integrerar direkt-omladdningsfunktionalitet med Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Inställningsprofiler

Obsidian Sync kan synkronisera flera [[Konfigurationsmapp|konfigurationsmappar]] till samma fjärrvalv, vilket gör att du kan skapa separata profiler (t.ex. en för mobil, en annan för din bärbara dator).

### Skapa en inställningsprofil

För att skapa en ny inställningsprofil:

1. Öppna **[[Inställningar]] → Filer och länkar**.
2. Under **Överstyr konfigurationsmappen**, ange ett namn för din profil som börjar med en punkt (`.`), t.ex. `.obsidian-mobile`.
3. Starta om Obsidian för att tillämpa ändringarna.

> [!info]+ Undvik att ladda ner tillägg och teman igen
> Att ändra inställningsprofil kräver att du konfigurerar om dina synkroniseringsinställningar. För att undvika att ladda ner tillägg och teman igen, kopiera din befintliga `.obsidian`-mapp och byt namn på den så att den matchar din nya profil (t.ex. `.obsidian-mobile`) innan du gör ändringar.
