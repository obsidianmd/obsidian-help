---
permalink: style-guide
publish: true
mobile: true
description: Denna sida förklarar stilguiden för att skriva vår supportdokumentation.
---
Obsidian-dokumentationen följer stilriktlinjerna som listas på denna sida. Dessa riktlinjer baseras på bästa praxis inom branschen, särskilt [Googles stilguide för utvecklardokumentation](https://developers.google.com/style) och [Microsofts stilguide](https://learn.microsoft.com/en-us/style-guide/). För specialfall som inte täcks nedan, konsultera dessa externa guider som sekundära referenser.

> [!tip]- Bidra
> Det mesta av dokumentationen existerade innan denna stilguide skapades.
> 
> Om du hittar några överträdelser av denna stilguide, vänligen [skapa ett ärende](https://github.com/obsidianmd/obsidian-docs/issues/new) och skicka in en pull request till [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminologi och grammatik

### Språkstil

För vår engelska dokumentation rekommenderas det att använda [Global English](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) för att bättre betjäna vår världsomspännande publik och för att underlätta [[#Översättningar]]. Det innebär:

- Undvik idiom och kulturspecifika uttryck
- Använd aktiv röst och direkt meningsuppbyggnad
- Föredra enkla, vanliga ord framför komplex terminologi
- Var tydlig snarare än underförstådd
- Använd amerikansk engelska för stavningskonventioner (t.ex. 'organize' inte 'organise').

### Termer

- Föredra "tangentbordsgenväg" framför "snabbtangent". Använd Snabbtangent när du hänvisar till den specifika funktionen.
- Föredra "Obsidian-appen" på mobil, och "Obsidian-applikationen" på dator.
- Föredra "synka" eller "synkning" framför "synkronisera" eller "synkronisering".
- Föredra "sökterm" framför "sökfråga".
- Föredra "rubrik" framför "header" när du hänvisar till en text som introducerar en sektion.
- Föredra "maximum" framför "max" och "minimum" framför "min".

### Produktnamn

Obsidians produktnamn börjar med "Obsidian", till exempel "Obsidian Publish" och "Obsidian Sync".

Om ett stycke blir alltför repetitivt kan du använda kortformen i efterföljande hänvisningar.

Till exempel:

_För att tillåta enhetsspecifik konfiguration synkroniserar Obsidian Sync inte sina egna inställningar. Du behöver konfigurera Sync för var och en av dina enheter._

### Användargränssnitt och interaktioner

- Använd **fet stil** för att ange knapptext
- Föredra "välj" framför "tryck" eller "klicka".
	- För mobilspecifika instruktioner är "tryck" acceptabelt när du beskriver pekinteraktioner eftersom "klicka" inte är tillgängligt.
- Föredra "sidofält" framför "sido fält".
- Föredra "utför" framför "anropa" och "exekvera" när du hänvisar till kommandon eller åtgärder.

När du hänvisar till flera UI-interaktioner i sekvens, använd symbolen → (U+2192). Till exempel "**[[Inställningar]] → Gemenskapstillägg**".

### Anteckningar, filer och mappar

- Använd "anteckning" när du hänvisar till en Markdown-fil i valvet.
- Använd "fil" när du hänvisar till andra filändelser än Markdown.
- Föredra "anteckningsnamn" framför "anteckningstitel".
- Föredra "aktiv anteckning" framför "nuvarande anteckning".
- Föredra "mapp" framför "katalog".
- Föredra "filtyp" framför "filformat", om du inte specifikt hänvisar till dataformatet för filinnehållet.

När du navigerar mellan anteckningar, använd "öppna" om destinationen är dold, och "byt" om både käll- och destinationsanteckningar är öppna i separata delade vyer.

### Referensdokumentation för inställningar

När det är möjligt bör alla inställningar dokumenteras inom Obsidian med en beskrivande text. Undvik att dokumentera en specifik inställning i Obsidian-hjälpen om inte:

- Den kräver mer djupgående kunskap om hur och när den ska användas.
- Den ofta missförstås eller frågas om.
- Den _drastiskt_ förändrar användarupplevelsen.

Överväg att använda en tips-notis om du vill dra uppmärksamhet till en specifik inställning.

### Riktningstermer

Bindestreckssätt riktningstermer när de används som adjektiv. Undvik bindestreck när riktning används som substantiv.

**Rekommenderat:**

- Välj **[[Inställningar]]** i det nedre vänstra hörnet.
- Välj **[[Inställningar]]** längst ned till vänster.

**Inte rekommenderat:**

- Välj **[[Inställningar]]** i det nedre vänstra hörnet. (utan bindestreck)
- Välj **[[Inställningar]]** i nedre-vänstra.

Föredra "övre vänstra" och "övre högra" framför "topp-vänstra" och "topp-högra".

Ange inte en riktning när du hänvisar till inställningar. Placeringen av inställningskontrollen beror på enheten.

**Rekommenderat:**

- Bredvid **Välj fjärrvalv**, välj **Välj**.

**Inte rekommenderat:**

- Till höger om **Välj fjärrvalv**, välj **Välj**.

När du beskriver vertikal riktning i UI-element, använd "ovanför" och "nedanför" för rumsliga relationer. Undvik "upp" och "ner" eftersom de kan vara tvetydiga i olika sammanhang.

**Rekommenderat:**

- Sökrutan visas ovanför fillistan.
- Ytterligare alternativ finns tillgängliga nedanför.

**Inte rekommenderat:**

- Sökrutan är upp från fillistan.
- Fler alternativ finns längre ner nedan.

### Instruktioner

Använd imperativ för namn på guider, sektionsrubriker och steg-för-steg-instruktioner. Imperativformen är kortfattad och handlingsinriktad, vilket är mer rakt på sak för användare som följer instruktioner.

- Föredra "Konfigurera" framför "Konfigurering av"
- Föredra "Flytta en fil" framför "Att flytta en fil"
- Föredra "Importera dina anteckningar" framför "Att importera dina anteckningar"

### Meningsversaler

Föredra *meningsversaler* framför *titelversaler* för rubriker, knappar och titlar. När du hänvisar till UI-element, matcha alltid versaliseringen i texten i användargränssnittet.

**Rekommenderat:**

- Hur Obsidian lagrar data

**Inte rekommenderat:**

- Hur Obsidian Lagrar Data

### Exempel

Föredra realistiska exempel framför nonsensord.

**Rekommenderat:**

- `task:(ring ELLER schemalägg)`

**Inte rekommenderat:**

- `task:(foo ELLER bar)`

### Tangentnamn och tangentbordsgenvägar

Använd konsekvent notation när du hänvisar till tangenter och genvägar på tangentbordet.

**Individuella tangentnamn:**

När du hänvisar till ett tecken på tangentbordet vid namn, lägg till tecknet inom parentes direkt efter namnet.

**Rekommenderat:**

- Tryck på bindestrecks (-)-tangenten för att lägga till ett streck.
- Använd frågetecknet (?) för att söka.

**Inte rekommenderat:**

- Tryck på bindestrecks-tangenten för att lägga till ett streck.
- Använd ? för att söka.
- Lägg till ett `-` framför ordet.

**Tangentbordsgenvägar:**

Formatera tangentbordsgenvägar utan mellanslag runt plustecknet. När en genväg skiljer sig mellan operativsystem, ange båda.

**Rekommenderat:**

- Tryck `Ctrl+Z` (Windows) eller `Command+Z` (macOS) för att ångra.
- Tryck `Escape` för att stänga detta fönster.
- Använd `Tab` för att flytta mellan fält.

**Inte rekommenderat:**

- Tryck `Cmd+Z` för att ångra.
- Tryck `Ctrl + Z` (med mellanslag) för att ångra.
- Tryck `Ctrl/Cmd+Z` för att ångra.

För genvägar som är identiska på alla plattformar behöver du inte ange operativsystem. Om du är osäker på om en genväg skiljer sig mellan plattformar, ange operativsystem för säkerhets skull. Windows och Linux använder vanligtvis samma genvägar.

### Markdown

Använd nya rader mellan Markdown-block:

**Rekommenderat:**

```md
# Rubrik 1

Detta är en sektion.

1. Första punkten
2. Andra punkten
3. Tredje punkten
```

**Inte rekommenderat:**

```md
# Rubrik 1
Detta är en sektion.
1. Första punkten
2. Andra punkten
3. Tredje punkten
```

**Tankstreck i listor:**

Använd tankstreck (—) för att separera fetstilsord från deras beskrivningar i punktlistor. Använd inte tankstreck i enkla nästlade punktlistor med länkar.

**Rekommenderat:**

- **Vymeny** — skapa, redigera och växla vyer.
- **Beräkna värden** — lägg till priser, beräkna totaler eller utför matematiska operationer.

**Inte rekommenderat:**

- [[Skapa en bas]] — Lär dig hur du skapar och bäddar in en bas.

### Bilder

Använd "**bredd** x **höjd** pixlar" för att beskriva bild- eller skärmdimensioner.

**Exempel:**

Rekommenderade bilddimensioner: 1920 x 1080 pixlar.

## Informationsstruktur

### Notistyper

Använd notiser strategiskt för att framhäva specifika typer av information:

**Tips** (`[!tip]-`) - Praktiska råd eller bästa praxis som förbättrar användarens arbetsflöde. Använd för genvägar, lösningar eller icke-nödvändig men användbar information. Dessa notiser startar kollapsat.

**Info** (`[!info]+`) - Ytterligare kontext, bakgrundsinformation eller förtydliganden. Använd när information ger förståelse men inte krävs för att slutföra en uppgift. Dessa notiser startar expanderat.

**Varning** (`[!warning]+`) - Viktiga varningar som förebygger dataförlust, fel eller oavsiktliga konsekvenser. Använd sparsamt för genuint riskfyllda situationer. Dessa notiser ska aldrig vara kollapsade.

**Exempel** (`[!example]-`) - Allmänna tillägg eller kompletterande detaljer. Använd för sidoinformation som vissa användare kan finna relevant. Dessa notiser startar kollapsat.

**Exempel:**
```md
> [!tip]- Använd tangentbordsgenvägar
> Du kan snabba upp ditt arbetsflöde genom att memorera de mest använda genvägarna.

> [!info]+ Detta är ett betalt tillägg
> Denna funktion kräver en betald prenumeration för att använda.

> [!warning]+ Denna åtgärd kan inte ångras
> Att radera ett valv är permanent. Överväg att exportera dina anteckningar först.

> [!example]- Avancerad användning
> Du kan också konfigurera denna inställning via Graf-menyn.
```

### Listor kontra löptext

Använd listor när du presenterar enskilda punkter som inte har starka sekventiella eller kausala relationer. Använd löptext och stycken när punkter bygger på varandra, kräver förklaring eller drar nytta av ett berättande flöde.

**Använd en lista för:**
- En uppsättning orelaterade funktioner
- Installationskrav
- Konfigurationsalternativ
- Felsökningssteg

**Använd löptext för:**
- Förklaringar av hur något fungerar
- Arbetsflöden med beroenden
- Konceptuella översikter
- Vägledning som kräver kontext

### Tabeller

Använd tabeller för att jämföra funktioner, versioner eller relaterade datapunkter där justering underlättar förståelsen. Undvik tabeller för enkla listor eller data med en kolumn.

**Bra användningsfall:**

| Funktion | Mobil | Dator |
|----------|-------|-------|
| Sync | Ja | Ja |
| Tillägg | Nej | Ja |
| Teman | Begränsat | Fullt |

### Korsreferenser

Använd interna wikilänkar (`[[Anteckningsnamn]]`) frikostigt för att hjälpa användare navigera relaterade ämnen. Undvik dock överlänkning:

- Länka inte samma term flera gånger på en enda sida
- Länka bara när den refererade sidan ger betydande ytterligare kontext
- Använd beskrivande länktext när det är hjälpsamt: `[[Anteckningsnamn#Sektion|beskrivande text]]`

**Exempel:**

Första omnämnandet: "Lär dig om [[Introduktion till Obsidian Sync|Obsidian Sync]] för att hålla ditt valv uppdaterat mellan enheter."
Senare omnämnande: "Du kan konfigurera Sync för varje enhet separat."

### Plattformsspecifikt innehåll

När du dokumenterar funktioner som skiljer sig mellan plattformar, använd sektionsrubriker för att organisera innehållet.

Använd `Dator` och `Mobil` som underrubriker för att separera plattformsspecifika instruktioner eller funktioner.

**Rekommenderat:**
```md
## Anpassa ribbon

### Dator

I datorversionen kan du anpassa ribbon på följande sätt:

- Ändra ordningen på ribbon-åtgärder genom att dra och släppa ikonerna.
- För att dölja specifika åtgärder, högerklicka på ett tomt utrymme och avmarkera de åtgärder du vill dölja.

### Mobil

I mobilversionen kan du anpassa ribbon via inställningar:

1. Öppna **[[Inställningar]]**.
2. Navigera till **Utseende**.
3. Välj **Hantera** under **Ribbon-konfiguration**.
```

> [!info]+ När ska man skapa sektioner?
> Skapa bara separata sektioner om innehållet skiljer sig väsentligt. Om instruktionerna i stort sett är desamma med mindre variationer, använd inline-noteringar istället.

## Ikoner och bilder

Inkludera ikoner och bilder när de gör det lättare att förklara saker som är svåra att beskriva med ord, eller när du behöver visa viktiga delar av Obsidian-applikationen. Du kan spara bilder i mappen `Attachments`.

- Bilden bör göra texten den åtföljer lättare att förstå.

 **Exempel**: När det är aktiverat skapar tillägget [[Ordräkning]] en ny post i ditt nedre statusfält.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Bilder bör vara i antingen `.png`- eller `.svg`-format.
- Om en bild ser för stor ut i anteckningen, gör den mindre utanför Obsidian, eller justera dess dimensioner enligt beskrivningen i [[Bädda in filer#Bädda in en bild i en anteckning|bädda in en bild i en anteckning]].
- I sällsynta fall kan du vilja placera särskilt stora eller komplexa bilder i en [[Notiser#Vikbara notiser|vikbar notis]].
- För popup-fönster eller modaler bör bilden visa hela Obsidian-applikationsfönstret.
 ![[Style-guide-modal-example.png#interface]]

### Ikoner

[Lucide](https://lucide.dev/icons/)- och anpassade Obsidian-ikoner kan användas tillsammans med detaljerade element för att ge en visuell representation av en funktion.

**Exempel:** I ribbon till vänster, välj **Skapa ny canvas** ![[lucide-layout-dashboard.svg#icon]] för att skapa en canvas i samma mapp som den aktiva filen.

**Riktlinjer för ikoner**

- Lagra ikoner i mappen `Attachments/icons`.
- Lägg till prefixet `lucide-` före Lucide-ikonnamnet.
- Lägg till prefixet `obsidian-icon-` före Obsidian-ikonnamnet.

**Exempel:** Ikonen för att skapa en ny canvas bör heta `lucide-layout-dashboard`.

- Använd SVG-versionen av de tillgängliga ikonerna.
- Ikoner bör vara `18` pixlar breda, `18` pixlar höga och ha en linjebredd på `1.5`. Du kan justera dessa inställningar i SVG-datan.

> [!info]- Justera storlek och linjebredd i en SVG
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="BREDD" height="HÖJD" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="LINJEBREDD" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Använd `icon`-ankaret i inbäddade bilder för att finjustera utrymmet runt ikonen så att den justeras snyggt med texten i närheten.
- Ikoner bör omges av parenteser. ![[lucide-cog.svg#icon]]

**Exempel**: `![[lucide-cog.svg#icon]]`

### Bildankartaggar

Bildankartaggar finns tillgängliga för att lägga till dekorativa ändringar på de inbäddade bilderna.

> [!warning] Varning för live-förhandsvisning
> Ikonankartaggarna kommer inte att visas korrekt i **Live-förhandsvisning.** Använd **Läsvy** för att bekräfta att ankartaggen har tillämpats.

**Ikon**

`![[lucide-menu.svg#icon]]`

Ikonankartaggen säkerställer korrekt vertikal justering för ikoner som används för att indikera gränssnittselement.

Den första menyikonen använder ankartaggen ![[lucide-menu.svg#icon]], medan den andra menyikonen ( ![[lucide-menu.svg]] ) inte gör det.

**Gränssnitt**

`![[Vault picker.png#interface]]`

Gränssnittsankartaggen lägger till en dekorativ skugga runt bilden. I den första bilden är gränssnittsankartaggen tillämpad.
![[Vault picker.png#interface]]
Däremot har den andra bilden inte gränssnittsankaret tillämpat.

![[Vault picker.png]]

**Kontur**

`![[Backlinks.png#outline]]`

Konturankartaggen lägger till en subtil ram runt bilden. I den första bilden är konturankartaggen tillämpad.

> [!tip] Observera nedre vänstra delen av bilden för att se skillnaden.

![[Backlinks.png#outline]]

Den andra bilden saknar konturankartaggen.

![[Backlinks.png]]

### Optimering

Bilder saktar ner laddningstiden för sidan och tar värdefullt [[Introduktion till Obsidian Publish|Publish]]-lagringsutrymme. Att optimera bilder möjliggör en minskning av filstorleken, men bibehåller bildens visuella integritet.

Både bilder och ikoner bör optimeras.

> [!info] Verktyg för bildoptimering
> Här är några rekommenderade program för att minska storleken på dina bilder.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Vi rekommenderar en optimeringsgrad på 65-75%.

## Layout

### Trasiga länkar

Innan du skickar in din Pull Request, kontrollera om det finns trasiga länkar i dokumentationen för den översättning du arbetar med och korrigera dem. Trasiga länkar kan uppstå naturligt över tid, så att verifiera deras korrekthet hjälper till att upprätthålla dokumentationens kvalitet.

Du kan kontrollera trasiga länkar med hjälp av [[Gemenskapstillägg]] eller verktyg tillgängliga i din IDE.

### Beskrivningar

Denna dokumentation redigeras på GitHub och publiceras online via [[Introduktion till Obsidian Publish|Obsidian Publish]], vilket inkluderar [[Förhandsvisning av länkar på sociala medier#Beskrivning|beskrivningar]] för sociala kort och andra [[SEO]]-element.

Om sidan du arbetar med inte har en `description`-[[Egenskaper|egenskap]], vänligen lägg till en. Beskrivningen bör vara 150 tecken eller färre och ge en objektiv sammanfattning av sidans innehåll.

**Bra**: Lär dig skapa mallar som fångar och organiserar webbsidors metadata automatiskt med Web Clipper.
**Kan förbättras**: Lär dig hur du skapar mallar som automatiskt fångar och organiserar metadata från webbsidor med Web Clipper.

### Riktlinjer

När du skriver eller omarbetar [[#Instruktioner]] för hur man utför en åtgärd i appen, se till att inkludera steg för både mobil- och datorversionen.

Om du inte har tillgång till en mobil eller dator, vänligen nämn detta när du skickar in din Pull Request.

## Översättningar

Översätt allt innehåll när du genomför en översättning. Detta inkluderar men är inte begränsat till:

- Anteckningsnamn
- Mappnamn
- Aliaser
- Bilagenamn
- Alternativ länktext
