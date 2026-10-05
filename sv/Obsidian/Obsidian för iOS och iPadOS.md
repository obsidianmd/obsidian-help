---
permalink: ios
---
Obsidian-mobilappen för iOS och iPadOS ger kraftfulla anteckningsfunktioner till din iPhone och iPad. Du kan ladda ner den från [Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

Den här sidan täcker iOS-specifika funktioner inklusive widgetar, Siri-integration och Genvägar.

## Synkronisera

För information om att synkronisera anteckningar mellan enheter, se [[Synkronisera dina anteckningar mellan enheter]].

## Widgetar

Obsidian för iOS erbjuder flera widgetar för att utföra snabba åtgärder i ditt valv.

> [!note] Observera
> Widgetar är tillgängliga på iOS och iPadOS 18 och högre.
> Widgetar är inte tillgängliga när "Kräv Face ID" används för att låsa upp appen.


### Widgetar för låsskärm och Kontrollcenter

Widgetar för låsskärm och Kontrollcenter låter dig:
- Öppna Snabbfångst
- Skapa en ny anteckning
- Öppna en specifik anteckning
- Öppna daglig anteckning
- Öppna sök
- Öppna Obsidian

### Widgetar för hemskärm

Widgetar för hemskärm låter dig:
- Öppna Snabbfångst
- Skapa en anteckning
- Visa en anteckning
- Öppna din dagliga anteckning

### Anpassa widgetar

Du kan anpassa widgetar för att passa ditt arbetsflöde, till exempel välja vilket valv som ska användas eller ange en specifik anteckning att öppna.

- **Hemskärmswidgetar:** Tryck och håll på widgeten, välj sedan **Redigera widget**.
- **Låsskärmswidgetar:** Tryck och håll på din låsskärm, tryck på **Anpassa**, välj låsskärmen och tryck sedan på widgeten du vill anpassa.
- **Kontrollcenter-widgetar:** Öppna Kontrollcenter, tryck på **+**-knappen uppe till vänster för att börja redigera, tryck sedan på widgeten du vill anpassa.

Konfigurationsalternativ för widgeten **Ny anteckning**:

![[ios-new-note-configuration.png|400]]

Konfigurationsalternativ för widgeten **Visa anteckning**:

![[ios-view-note-configuration.png|400]]

## Snabbfångst

Snabbfångst låter dig spara text till ditt valv från låsskärmen, Kontrollcenter eller hemskärmswidgetar. Beroende på vilken fångstplats du väljer kan Snabbfångst skapa en ny anteckning eller lägga till texten i en befintlig anteckning.

![[ios-quick-capture-view.png|400]]

> [!note] Observera
> Snabbfångst är tillgängligt på iOS och iPadOS 26 och högre.

Så här fångar du text:

1. Lägg till **Snabbfångst**-widgeten på din låsskärm, i Kontrollcenter eller på hemskärmen.
2. Tryck på widgeten för att öppna Snabbfångst.
3. Skriv in din text.
4. För att ändra var texten sparas, tryck på fångstplatsen överst på skärmen och välj en annan plats.
5. Tryck på bockmarkeringen för att spara texten.

**Observera**: Om Live Activities är aktiverat visas snabbfångstanteckningen även på låsskärmen och, på iPhone-modeller som stöds, i Dynamic Island. Tryck på fältet eller Live Activity för att fortsätta redigera.

![[ios-quick-capture-live-activity.png|400]]

### Fångstplatser

Fångstplatser bestämmer var Snabbfångst sparar din text. En fångstplats kan:

- Skapa en ny anteckning i en vald mapp, med en valfri mall och anpassat anteckningsnamn.
- Lägga till texten i slutet eller början av din dagliga anteckning.
- Lägga till texten i slutet eller början av en bokmärkt anteckning.
- Lägga till texten i slutet eller början av en annan anteckning du väljer.

Så här skapar du en fångstplats:
1. Öppna Snabbfångst.
2. Tryck på fångstplatsen överst på skärmen.
3. Tryck på plus (+)-knappen.
4. Välj ett beteende och konfigurera eventuella valfria inställningar.
5. Tryck på **Spara**.

Du kan även använda **Öppna anteckning efter fångst** för att välja om Obsidian ska öppna målanteckningen efter att fångsten sparats.

![[ios-quick-capture-locations.png|400]]

![[ios-quick-capture-config.png|400]]

### Mallar för Snabbfångst

Du kan använda en mall för att formatera den fångade texten. Mallar för Snabbfångst stöder följande platshållare:

| Platshållare | Beskrivning |
| --- | --- |
| `{{content}}` | Fångad text |
| `{{date}}` | Aktuellt datum |
| `{{time}}` | Aktuell tid |
| `{{latitude}}` | Aktuell latitud |
| `{{longitude}}` | Aktuell longitud |
| `{{shortAddress}}` | Kort form av aktuell adress |
| `{{fullAddress}}` | Fullständig aktuell adress |
| `{{googleMapsLink}}` | Google Maps-länk till aktuell plats |
| `{{appleMapsLink}}` | Apple Maps-länk till aktuell plats |
| `{{openStreetMapLink}}` | OpenStreetMap-länk till aktuell plats |

För att konfigurera en Snabbfångst-widget för en specifik fångstplats, använd stegen i [[#Anpassa widgetar]]. Hemskärmswidgetar kan visa flera fångstplatser.

![[ios-quick-capture-widget.png|400]]

## Genvägar

Obsidian integrerar med Apples Genvägar-app, vilket låter dig skapa kraftfulla automatiseringar. Tillgängliga genvägar inkluderar:

- **Snabbfångst** — Öppna Snabbfångst med en konfigurerad fångstplats
- **Öppna bokmärke** — Öppna en bokmärkt anteckning från ditt valv
- **Öppna ny anteckning** — Skapa en ny anteckning i ditt valv
- **Öppna daglig anteckning** — Gå direkt till dagens dagliga anteckning
- **Spara till daglig anteckning** — Lägg till eller infoga text i den dagliga anteckningen utan att öppna Obsidian-appen
- **Spara till bokmärke** — Lägg till eller infoga text i en bokmärkt anteckning utan att öppna Obsidian-appen
- **Hämta bokmärkt anteckning** — Hämtar text från en bokmärkt anteckning
- **Hämta daglig anteckning** — Hämtar text från en daglig anteckning
- **Sök i valv** — Sök i ditt valv efter ett nyckelord
- **Bokmärk länk** — Lägg till en webblänk i dina bokmärken
- **Öppna Obsidian** — Öppnar Obsidian

Spara-genvägar är särskilt användbara för snabba anteckningar, eftersom de låter dig lägga till innehåll i en anteckning i bakgrunden.

## Delningsblad

Obsidians delningsblad låter dig fånga innehåll från webbsidor. Det fungerar även med appar som YouTube och andra sociala nätverk.

> [!note]
> - Det inbyggda delningsbladet är tillgängligt på iOS och iPadOS 18 och högre.
> - Delningsbladsfunktionerna som beskrivs i detta avsnitt kräver Obsidian 1.13.0 eller senare.

Använd delningsbladet för att snabbt skicka innehåll från en annan app till Obsidian:
1. I en annan app, tryck på **Dela**-knappen.
2. Välj **Obsidian**.
3. Välj en plats.
4. Granska eller redigera det fångade innehållet.
5. Tryck på **Spara**.

![[ios-share-sheet-extension.png|400]]

### Platser

Platser låter dig bestämma vart det delade innehållet ska hamna innan du sparar det.

Platser kan spara till:
- **Ny anteckning** — Skapa en ny anteckning i ett valv eller en mapp.
- **Daglig anteckning** — Lägg till innehåll i början eller slutet av dagens dagliga anteckning.
- **Bokmärkt anteckning** — Lägg till innehåll i början eller slutet av en bokmärkt anteckning.
- **Anteckning** — Välj en befintlig anteckning i ditt valv.
- **Nytt bokmärke** — Spara en delad URL till Obsidians bokmärken.

![[ios-share-sheet-locations.png|400]]

### Anpassa platser

Du kan skapa platser för vanliga arbetsflöden, som att spara artiklar till en inkorg, lägga till citat i din dagliga anteckning eller lägga till länkar i bokmärken.

Så här anpassar du platser:

1. Öppna Obsidian från iOS delningsblad.
2. Tryck på den aktuella platsen i verktygsfältet.
3. Tryck på **+**-knappen för att skapa en ny plats, eller välj en befintlig plats att redigera.
4. Välj valv, beteende och valfria inställningar.

Beroende på typen av `Beteende` kan du konfigurera alternativ som:
- Mapp
- Mall
- Bokmärkesgrupp
- Position för att lägga till i början eller slutet
- Om delade länkar fångar **Fullständig text** eller bara **URL**

![[ios-share-sheet-add-location.png|400]]

### Använda en mall vid delning

Du kan använda en mall när du delar innehåll från delningsbladet. Mallar låter dig formatera fångat webbinnehåll med detaljer som sidtitel, författare, källwebbplats och publiceringsdatum.

Så här skapar du en plats med en mall:

1. Öppna Obsidian från iOS delningsblad.
2. Tryck på den aktuella platsen i verktygsfältet.
3. Tryck på **+**-knappen för att skapa en ny plats.
4. Ange ett namn för platsen.
5. Välj ett valv.
6. Ställ in **Beteende** till **Ny anteckning**.
7. I avsnittet **Valfritt**, tryck på **Mall**.
8. Välj en anteckning från ditt valv att använda som mall.
9. Tryck på **Spara** för att spara platsen.

![[ios-share-sheet-set-template.png|400]]

När du delar en länk med denna plats tillämpar Obsidian mallen först och lägger sedan till det delade innehållet.

Platshållare som stöds i mallar:

| Platshållare | Beskrivning |
| --- | --- |
| `{{author}}` | Artikelns författare |
| `{{description}}` | Beskrivning eller sammanfattning av artikeln |
| `{{domain}}` | Webbplatsens domännamn |
| `{{favicon}}` | URL till webbplatsens favicon |
| `{{image}}` | URL till artikelns huvudbild |
| `{{published}}` | Artikelns publiceringsdatum, med standarddatumformat |
| `{{published: YYYY-MM-DD}}` | Publiceringsdatum med anpassat datumformat |
| `{{site}}` | Webbplatsens namn |
| `{{title}}` | Artikelns titel |
| `{{url}}` | Artikelns URL |
| `{{wordCount}}` | Totalt antal ord i det extraherade innehållet |

Du kan även använda standardplatshållare för datum och tid i mallar:

| Platshållare | Beskrivning |
| --- | --- |
| `{{date}}` | Aktuellt datum |
| `{{date: YYYY-MM-DD}}` | Aktuellt datum med anpassat format |
| `{{time}}` | Aktuell tid |
| `{{time: HH:mm}}` | Aktuell tid med anpassat format |

## Siri-integration

Du kan använda Siri-röstkommandon för att interagera med Obsidian:

- "Capture using Obsidian"
- "Capture to Obsidian"
- "Open my daily note in Obsidian"
- "Search in Obsidian"

## Spotlight-integration

När du söker efter "Obsidian" i iOS Spotlight ser du snabbåtgärder:
- Ny anteckning
- Sök
- Daglig anteckning
