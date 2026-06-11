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
- Skapa en ny anteckning
- Öppna en specifik anteckning
- Öppna daglig anteckning
- Öppna sök
- Öppna Obsidian

### Widgetar för hemskärm

Widgetar för hemskärm låter dig:
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

## Genvägar

Obsidian integrerar med Apples Genvägar-app, vilket låter dig skapa kraftfulla automatiseringar. Tillgängliga genvägar inkluderar:

- **Öppna en anteckning** — Öppna en specifik anteckning i ditt valv
- **Skapa en ny anteckning** — Skapa en ny anteckning i ditt valv
- **Öppna daglig anteckning** — Gå direkt till dagens dagliga anteckning
- **Spara till daglig anteckning** — Lägg till eller infoga text i den dagliga anteckningen utan att öppna Obsidian-appen
- **Spara till bokmärke** — Lägg till eller infoga text i en bokmärkt anteckning utan att öppna Obsidian-appen

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
