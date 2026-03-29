---
permalink: settings
publish: true
mobile: true
description: Lär dig hur du anpassar Obsidian via inställningsgränssnittet.
---
Inställningar låter dig anpassa din Obsidian-upplevelse. Konfigurera allmänna alternativ, redigeringsinställningar, utseende, tangentbordsgenvägar och hantera både kärntillägg och gemenskapstillägg.

## Öppna inställningar

### Dator

I [[Sidofält#Öppna dolda sidofält|vänster sidofält]], välj **[[Inställningar]]** ![[lucide-cog.svg#icon]]. Du kan också öppna inställningar med [[Kommandopalett|kommandopaletten]].

### Mobil

I vänster sidofält, välj **[[Inställningar]]** ![[lucide-cog.svg#icon]].

## Organisation av inställningar

Inställningarna är organiserade i följande kategorier:

- **Inställningar** — Kärnapplikationsinställningar inklusive [[#Allmänt]], [[#Redigerare]], [[#Filer och länkar]], [[#Utseende]] och [[#Snabbkommandon]].
- **[[Kärntillägg]]** — Inbyggda tillägg som levereras med Obsidian.
- **[[Gemenskapstillägg]]** — Tredjepartstillägg installerade från gemenskapen.

## Allmänt

Sidan Allmänt innehåller versionsinformation, uppdateringsinställningar, språkinställningar och kontohantering.

### Version och uppdateringar

Visa din aktuella Obsidian-version och installationsversion högst upp på sidan. Välj **Sök efter uppdateringar** för att manuellt söka efter nya versioner, eller välj **[Läs ändringsloggen](<https://obsidian.md/changelog/>)** för att visa versionsanteckningar.

**Automatiska uppdateringar**

När aktiverat söker Obsidian automatiskt efter nya versioner och meddelar dig när uppdateringar finns tillgängliga.

**Få insider-byggen**

Uppdatera automatiskt till de senaste [[Tidig åtkomst-versioner|tidiga åtkomst-versionerna]]. Dessa versioner innehåller nya funktioner men kan vara mindre stabila.

> [!info]+ Catalyst-licens krävs
> Det här alternativet är bara tillgängligt för användare med en [[Catalyst-licens]].

### Språk

Välj ditt föredragna språk för Obsidians gränssnitt. Välj **[[Översättningar|Lär dig hur du lägger till ett nytt språk i Obsidian]]** för att bidra med en översättning.

### Hjälp

Välj **[[Hem|Öppna]]** för att komma åt hjälpresurser, inklusive dokumentation, gemenskapsforum och felsökningsguider.

### Konto

Hantera ditt Obsidian-konto och licenser.

**Ditt konto**

Visa din kontoinformation, inklusive användarnamn och e-post. Välj **[Hantera](https://obsidian.md/account)** för att komma åt kontoinställningar, eller välj **Logga ut** för att logga ut i appen.

**Catalyst-licens**

Visa din catalyst-licensstatus. Om du har en aktiv [[Catalyst-licens]] visas din licensnivå här.

**Kommersiell licens**

Om du stödjer [Obsidian för arbete](<https://obsidian.md/blog/free-for-work/>), välj **Aktivera** för att ange en kommersiell licensnyckel, eller välj **[Köp](https://obsidian.md/account/commercial)** för att köpa en licens. Välj **[[Kommersiell licens|Läs mer]]** för information om kommersiella licenser.

### Avancerat

#### Meddela om uppstarten tar längre tid än väntat

När aktiverat visar Obsidian ett meddelande om uppstarten är ovanligt långsam. Meddelandet innehåller diagnostisk information om vad som orsakar fördröjningen. Välj timerikon ![[lucide-timer.svg#icon]] bredvid den här inställningen för att [[Hjälp och support#Kontrollera uppstartstid|kontrollera din uppstartstid]].

## Redigerare

Sidan Redigerare innehåller inställningar för hur du visar och redigerar anteckningar.

### Fokusera alltid nya tabbar

När du öppnar en länk i en ny flik, byt till den automatiskt.

### Standardvy för nya tabbar

Standardvyn som en ny Markdown-filflik öppnas i. Välj mellan [[Vyer och redigeringsläge#Läsvy|Läsvy]] eller [[Vyer och redigeringsläge#Redigeringsvy|Redigeringsvy]].

### Normala skrivläget

Normala läget som en ny panel börjar med. Välj mellan [[Vyer och redigeringsläge#Live-förhandsvisning|Live-förhandsvisning]] eller [[Vyer och redigeringsläge#Källkodsläge|Källkodsläge]].

### Redigerarstatus

Visa redigeringslägets växlare i [[Statusfält|statusfältet]].

### Visa

#### Läsbar radlängd

Begränsa radlängd. Mindre får plats på skärmen, men långa stycken blir mer läsbara.

#### Stränga radbyten

Markdown-specifikationen ignorerar enkla [[Grundläggande formateringssyntax#Radbrytningar|radbrytningar]] i läsvy. Stäng av detta för att göra enkla radbrytningar synliga.

#### Egenskaper i dokument

Välj hur [[Egenskaper|egenskaper]] visas högst upp i anteckningar. Välj **källkod** för att visa egenskaper som rå YAML.

#### Vik in rubrik

[[Vikning|Vik in]] allt innehåll under en rubrik genom att välja kollaps-ikonen bredvid den.

### Vik in förskjutningar

[[Vikning|Vik in]] del av en indragning, till exempel listor, genom att välja kollaps-ikonen.

#### Radnummer

Visa radnummer i marginalen.

#### Förskjutningsmarkörer

Visa vertikala linjer mellan punkter som markörer.

#### Skriv högerifrån (RTL)

Gör så att texten går från höger till vänster.

#### Para ihop paranteser automatiskt

Para ihop paranteser och citattecken automatiskt.

#### Para ihop Markdown syntax

Para ihop Markdownsymboler (t.ex. fet stil, kursiv stil och sånt).

#### Flytta fram listpunkter på ett smart sätt

Ta hand om förskjutningar och listmarkörer åt dig.

#### Använd tabbar

Använd tabbar för indrag genom att trycka på Tab-tangenten. Stäng av detta för att använda 4 mellanslag istället.

#### Konvertera HTML automatiskt

Konvertera HTML automatiskt till Markdown vid inklistring och dra-och-släpp från webbsidor.

Använd `Ctrl/Cmd+Shift+V` för att klistra in HTML utan konvertering.

### Beteende

#### Stavningskontroll

Sätter på stavningskontrollen. Välj kugghjulsikonen för att ta bort sparade ord från den anpassade ordlistan.

#### Stavningskontrollsspråk

**Windows och Linux:**

Välj språk för att använda med stavningskontroll. Välj plusikonen (+) för att lägga till språk. För att ta bort ett språk, välj X bredvid det.

**macOS:**

Den inbyggda stavningskontrollen upptäcker automatiskt språket som används av operativsystemet.

#### Tabbstorlek

Antal mellanslag som en tabb motsvarar.

### Avancerat

#### Vim tangentbindningar

Gör så att du använder vim tangentbindningar i redigeraren.

## Filer och länkar

Sidan Filer och länkar innehåller inställningar för filhantering, länkar och valvets beteende.

### Stället där nya anteckningar hamnar

Var nya anteckningar hamnar. Alternativen inkluderar:

- **Valvbas** — Anteckningar skapas i roten av ditt valv.
- **Samma mapp som filen ligger i** — Anteckningar skapas i samma mapp som den för närvarande aktiva anteckningen.
- **I mappen som visas nedan** — Anteckningar skapas i en specifik mapp du väljer.

### Stället där nya bilagor hamnar

Var nyligen tillagda [[Bilagor|bilagor]] placeras. Alternativen inkluderar:

- **Valvbas** — Bilagor placeras i roten av ditt valv.
- **I mappen som visas nedan** — Bilagor placeras i en specifik mapp du väljer.
- **Samma mapp som filen ligger i** — Bilagor placeras i samma mapp som den för närvarande aktiva anteckningen.
- **I undermappen under nuvarande mappen** — Bilagor placeras i en undermapp inom den aktuella anteckningens mapp.

### Länkar

#### Nytt länkformat

Vilka länkar som infogas vid automatisk generering av [[Interna länkar|interna länkar]]. Alternativen inkluderar:

- **Kortaste vägen när det går** — Använder den kortaste unika sökvägen till den länkade filen.
- **Relativ sökväg till fil** — Använder en sökväg relativ till den aktuella filen.
- **Absolut sökväg i valvet** — Använder hela sökvägen från valvroten.

#### Uppdatera interna länkar

När aktiverat uppdaterar Obsidian automatiskt interna länkar när du byter namn på en fil. Stäng av detta för att bli tillfrågad om att uppdatera länkar efter namnbyte.

#### Använd wikilänkar

Generera wikilänkar automatiskt för `[[länkar]]` och `![[bilder]]` istället för Markdown-länkar och bilder. Inaktivera det här alternativet för att generera Markdown-länkar istället.

#### Visa alla filtyper

Visa filer med alla filändelser även om Obsidian inte kan öppna dem. Detta gör så att du kan länka till dem i anteckningar och se dem i filutforskare och snabbväxlare.

### Papperskorg

#### Bekräfta filradering

Fråga innan en fil raderas.

#### Raderade filer

Vad händer med filer efter att de tas bort. Alternativen inkluderar:

- **Flytta till operativsystemets papperskorg** — Filer flyttas till ditt operativsystems papperskorg.
- **Flytta till Obsidians papperskorg** — Filer flyttas till mappen `.trash` i ditt valv.
- **Ta bort permanent** — Filer raderas permanent och kan inte återställas.

### Avancerat

#### Exkluderade filer

Exkluderade filer döljs i [[Sök]], [[Grafvy]] och olinkade omnämnanden ([[Bakåtlänkar]] och [[Utgående länkar]]), och är mindre synliga i [[Snabbväxlare]] och länkförslag. Välj **Hantera** för att konfigurera exkluderade filer.

#### Överstyr konfigurationsmappen

Använd en annan [[Konfigurationsmapp|konfigurationsmapp]] än standardmappen. Måste börja med en punkt.

#### Tillåt URI-callbacks

Aktivera användning av x-callback-url via x-success eller x-error vid hantering av [[Obsidian URI|Obsidian-URI:er]].

#### Bygg om valvets cache

Bygger om valvets [[Hur Obsidian lagrar data#Metadata-cache|metadata-cache]]. Att bygga om cachen kan ta några sekunder till några minuter beroende på storleken på ditt valv. Välj **Bygg om** för att starta processen.

## Utseende

Sidan Utseende innehåller inställningar för att anpassa hur Obsidian ser ut.

### Bastema

Välj Obsidians standardfärgschema. Alternativen inkluderar:

- **Anpassa till system** — Matchar ditt operativsystems ljusa eller mörka läge.
- **Ljus** — Använder ljust läge.
- **Mörk** — Använder mörkt läge.

### Accentfärg

Välj den i appen tillämpade accentfärgen. Välj färgväljaren eller återställningsikonen för att anpassa.

### Teman

Hantera installerade [[Teman|teman]] och bläddra bland community-teman. Välj **Hantera** för att visa och installera teman. Rullgardinsmenyn visar ditt för närvarande aktiva tema. Mappikonen ![[lucide-folder-open.svg#icon]] öppnar temamappen i din [[Konfigurationsmapp|konfigurationsmapp]].

### Nuvarande community-teman

Visar antalet community-teman du har installerat.

### Typsnitt

#### Gränssnittstypsnitt

Använd samma bastypsnitt för hela Obsidian. Välj **Hantera** för att välja ett anpassat typsnitt eller ange ett typsnittsnamn.

#### Texttypsnitt

Välj typsnitt för skrivläget och läsläget. Välj **Hantera** för att välja ett anpassat typsnitt eller ange ett typsnittsnamn.

#### Typsnitt där alla bokstäver är lika breda

Välj typsnitt för kodblock och frontmatter. Välj **Hantera** för att välja ett anpassat typsnitt eller ange ett typsnittsnamn.

#### Typsnittsstorlek

Typsnittsstorlek i pixlar som påverkar skrivläget och läsläget. Justera med skjutreglaget.

#### Snabb typsnittsstorleksändring

Justera typsnittsstorleken med `Ctrl+Scroll` (Windows/Linux) eller `Cmd+Scroll` (macOS), eller med styrplattans nypzoomgest.

### Gränssnitt

#### Inbäddad rubrik

Visar filnamnet som en redigerbar rubrik inbäddad i filinnehållet. Den inbäddade rubriken fungerar som en rubrik inom Obsidian men lägger inte till en rubrik i din anteckning.

#### Visa tabbars titel-bar

Visa rubriken i toppen av varje tabb.

#### Visa ribbon

Visa vertikal verktygsfält på sidan av fönstret. Läs mer om [[Ribbon|ribbon]].

#### Ribbon-meny

Ändra vilka kommandon som dyker upp i ribbon-menyn. Välj **Hantera** för att anpassa.

> [!info]+ Ribbon-konfiguration på mobil
> På mobil fungerar ribbon-anpassning annorlunda. Se [[Ribbon#Mobil|Ribbon-anpassning på mobil]] för detaljer.

### Avancerat

#### Inzoomningsnivå

Styr inzoomningsnivån i appen. Justera med skjutreglaget.

#### Native-menyer

Menyer i appen kommer matcha operativsystemet. De kommer inte påverkas av det valda temat.

#### Fönsterramens stil

Bestämmer stilen av titel-baren för Obsidian-fönster. Kräver omstart för att tillämpas. Alternativen inkluderar:

- **Obsidian-ram** — Använder Obsidians anpassade fönsterram.
- **Native-ram** — Använder ditt operativsystems standardfönsterram.
- **Dold ram** — Döljer titelraden helt.

#### Anpassad appikon

Sätt en anpassad ikon för appen. Välj **Välj** för att välja en ikonfil (`.icns`, `.ico`, `.png` eller `.svg`). Läs mer om [[Utseende#Anpassad appikon|anpassade appikoner]].

#### Genomskinligt fönster

Slå på genomskinlighetseffekt för att förbättra en känsla av djup. Bäst använd med mörkt läge. Stöds inte på Linux.

> [!info]+ Endast macOS
> Den här funktionen är främst utformad för macOS. Läs mer om [[Utseende#Genomskinlighet|genomskinlighet]].

#### Hårdvaruacceleration

Sätter på hårdvaruacceleration, vilket använder grafikkortet för att göra Obsidian snabbare. Om du stänger av detta kan appens prestanda försämras avsevärt men det kan lösa vissa sällsynta problem.

### CSS-instick

Hantera och visa [[CSS-instick|CSS-instick]] lagrade i ditt valv. CSS-instick lagras i `/vault/.obsidian/snippets/`. Välj uppdateringsikonen för att ladda om instick, eller mappikonen ![[lucide-folder-open.svg#icon]] för att öppna insticksmappen.

## Snabbkommandon

Sidan [[Snabbkommandon]] låter dig visa, ställa in och anpassa [[Redigeringsgenvägar|tangentbordsgenvägar]] för kommandon i Obsidian.

Använd sökfältet för att filtrera kommandon och välj filterikonen för att bara visa kommandon med tilldelade tangentbordsgenvägar. För att lägga till en tangentbordsgenväg, välj plusikonen (+) bredvid ett kommando. För att ta bort en tangentbordsgenväg, välj X-ikonen bredvid tangentkombinationen.

## Kärntillägg

[[Kärntillägg]] är inbyggda tillägg som levereras med Obsidian. Varje tillägg lägger till specifik funktionalitet i appen.

För att aktivera eller inaktivera ett kärntillägg, välj reglaget bredvid tilläggets namn. Välj plusikonen ![[lucide-plus-circle.svg#icon]] för att visa [[Snabbkommandon|snabbkommandona]] för tillägget. Välj inställningsikonen ![[lucide-settings.svg#icon]] för att öppna tilläggets inställningssida.

Använd sökfältet för att filtrera tillägg efter namn.

## Gemenskapstillägg

[[Gemenskapstillägg]] är tredjepartstillägg skapade av Obsidian-gemenskapen. Bläddra och installera tillägg genom att välja **Bläddra**.

### Begränsat läge

[[Tilläggssäkerhet#Begränsat läge|Begränsat läge]] inaktiverar alla gemenskapstillägg av säkerhetsskäl. Välj **Slå på** för att aktivera begränsat läge.

### Nuvarande tillägg

Visar antalet gemenskapstillägg du har installerat. Välj **Sök efter uppdateringar** för att kontrollera om det finns tilläggsuppdateringar.

### Installerade tillägg

Visa och hantera dina installerade gemenskapstillägg. Använd sökfältet för att filtrera tillägg efter namn. Varje tillägg har ikoner för inställningar, tangentbordsgenvägar, finansiering, avinstallation och ett reglage för att aktivera eller inaktivera det.
