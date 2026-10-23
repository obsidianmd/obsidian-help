---
permalink: plugins/canvas
mobile: true
---
Canvas är ett [[Kärntillägg|kärntillägg]] för visuellt antecknande. Det ger dig oändligt utrymme att lägga ut anteckningar och koppla dem till andra anteckningar, bilagor och webbsidor.

Att ordna dina anteckningar i ett 2D-utrymme hjälper dig att se och förstå sambanden mellan dem. Koppla samman anteckningar med linjer och gruppera relaterade tillsammans.

Obsidian sparar canvaser som `.canvas`-filer med det öppna [JSON Canvas](https://jsoncanvas.org/)-formatet.

## Skapa en ny canvas

För att börja använda Canvas behöver du först skapa en fil som innehåller din canvas. Du kan skapa en ny canvas med följande metoder.

**Kommandopalett:**

1. Öppna [[Kommandopalett|kommandopaletten]].
2. Välj **Canvas: Skapa ny canvas** för att skapa en canvas i samma mapp som den aktiva filen.

**Filutforskare:**

- I [[Filutforskare|filutforskaren]], högerklicka på mappen där du vill skapa canvasen.
- Välj **Ny canvas**.

**Ribbon:**

- I den vertikala ribbon-menyn, välj **Skapa ny canvas** ![[lucide-layout-dashboard.svg#icon]] för att skapa en canvas i samma mapp som den aktiva filen.

> [!note] Filändelsen .canvas
> Obsidian lagrar dina canvas-data som `.canvas`-filer med ett öppet filformat som kallas [JSON Canvas](https://jsoncanvas.org/).

## Lägg till kort

Du kan dra filer till din canvas från Obsidian eller från andra program. Till exempel Markdown-filer, bilder, ljud, PDF-filer eller till och med okända filtyper.

### Lägg till textkort

Du kan lägga till kort som bara innehåller text och inte refererar till en fil. Du kan använda Markdown, länkar och kodblock på samma sätt som i en anteckning.

För att lägga till ett nytt textkort på din canvas:

- Välj eller dra den tomma filikonen längst ner på canvasen.

Du kan också lägga till textkort genom att dubbelklicka på canvasen.

För att konvertera ett textkort till en fil:

1. Högerklicka på textkortet och välj sedan **Konvertera till fil...**.
2. Ange anteckningsnamnet och välj sedan **Spara**.

> [!note] Textkort och bakåtlänkar
> Textkort visas inte i [[Bakåtlänkar]]. För att de ska visas måste du konvertera dem till en fil.

### Lägg till kort från anteckningar

För att lägga till en anteckning från ditt valv på din canvas:

1. Välj eller dra dokumentikonen längst ner på canvasen.
2. Välj anteckningen du vill lägga till.

Du kan också lägga till anteckningar från canvasens kontextmeny:

1. Högerklicka på canvasen och välj sedan **Lägg till anteckning från valv**.
2. Välj anteckningen du vill lägga till.

Du kan också dra anteckningar från [[Filutforskare|filutforskaren]] till canvasen.

För att bara visa en del av en anteckning i ett kort, högerklicka på kortet och välj **Begränsa till rubrik...** eller **Begränsa till block...**. Välj sedan rubriken eller blocket.

### Lägg till kort från media

För att lägga till media från ditt valv på din canvas:

1. Välj eller dra bildfilikonen längst ner på canvasen.
2. Välj mediefilen du vill lägga till.

Du kan också lägga till media från canvasens kontextmeny:

1. Högerklicka på canvasen och välj sedan **Lägg till media från valv**.
2. Välj mediefilen du vill lägga till.

Du kan också dra mediefiler från [[Filutforskare|filutforskaren]] till canvasen.

### Lägg till kort från webbsidor

För att bädda in en webbsida på din canvas:

1. Högerklicka på canvasen och välj sedan **Lägg till webbsida**.
2. Ange URL:en till webbsidan och välj sedan **Spara**.

Du kan också markera en URL i din webbläsare och sedan dra den till canvasen för att bädda in den i ett kort.

För att öppna webbsidan i din webbläsare, tryck `Ctrl` (eller `Cmd` på macOS) och välj kortets etikett. Eller högerklicka på kortet och välj **Öppna extern länk**.

Högerklicka på ett webbsidekort för fler alternativ.

- **Kopiera url** kopierar webbsidans adress.
- **Ändra URL...** ändrar adressen som kortet visar.
- **Ladda om sida** laddar webbsidan igen.

### Lägg till kort från bases

För att visa en [[Introduktion till baser|base]] på din canvas, dra base-filen från filutforskaren till canvasen. Kortet visar basen.

Ett base-kort visar standardvyn för basen. För att visa en annan vy:

1. Högerklicka på kortet och välj sedan **fäst vy...**.
2. Välj den vy du vill använda.

För att gå tillbaka till standardvyn, välj **fäst vy...** igen och välj sedan **Visa standardvy**.

### Lägg till kort från mappar

Dra en mapp från [[Filutforskare|filutforskaren]] för att lägga till alla filer i den mappen på canvasen.

### Redigera ett kort

Dubbelklicka på ett text- eller anteckningskort för att börja redigera det. Välj var som helst utanför kortet för att sluta redigera det. Du kan också trycka på `Escape` för att sluta redigera ett kort.

Du kan också redigera ett kort genom att högerklicka på det och välja **Redigera**. Eller markera kortet och sedan välja **Redigera** ![[lucide-square-pen.svg#icon]] i markeringskontrollerna.

### Radera ett kort

Ta bort valda kort genom att högerklicka på något av dem och sedan välja **Ta bort**. Eller tryck `Backspace` (eller `Delete` på macOS).

Du kan också välja **Ta bort** ![[lucide-trash-2.svg#icon]] i markeringskontrollerna ovanför din markering.

### Byt ut kort

Du kan byta ut ett antecknings- eller mediakort mot ett annat kort av samma typ.

För att byta ut ett anteckningskort:

1. Högerklicka på kortet du vill ersätta.
2. Välj **Byt fil**.
3. Välj anteckningen du vill ersätta med.

## Markera kort

Markera enskilda kort, eller dra en markering runt flera kort.

Du kan också lägga till och ta bort kort från en befintlig markering genom att trycka `Shift` och klicka på dem.

Tryck `Ctrl+a` (eller `Cmd+a` på macOS) för att markera alla kort på canvasen.

För att rulla innehållet i ett kort måste du först markera det.

### Ordna kort

Dra ett markerat kort för att flytta det.

Tryck `Alt` (eller `Option` på macOS) och dra för att duplicera markeringen.

Du kan trycka `Shift` medan du drar för att bara flytta i en riktning.

Tryck `Space` medan du flyttar en markering för att inaktivera fästning.

Att markera ett kort flyttar det till framsidan.

### Ändra storlek på ett kort

Dra valfri kant på ett kort för att ändra storlek på det.

Du kan trycka `Space` medan du ändrar storlek för att inaktivera fästning.

För att behålla proportionerna medan du ändrar storlek, tryck `Shift` medan du ändrar storlek.

### Justera och ordna kort

För att rikta upp flera kort, markera två eller fler kort. I markeringskontrollerna, välj **Justera** och välj sedan ett alternativ.

- **Justera vänster**, **Justera mitten** och **Justera höger** riktar upp korten längs en vertikal linje.
- **Justera topp**, **Justera mitten** och **Justera botten** riktar upp korten längs en horisontell linje.
- **Ordna i en rad**, **Ordna i en kolumn** och **Ordna i ett rutnät** flyttar korten till den layouten.
- **Fördela horisontellt avstånd** och **Fördela vertikalt avstånd** fördelar korten jämnt.
- **Justera horisontellt** och **Justera vertikalt** ändrar storlek på varje kort så att det matchar den fulla bredden eller höjden av markeringen.

## Koppla samman kort

Rita linjer mellan kort för att visa relationer. Lägg till färger och etiketter för att beskriva hur de förhåller sig till varandra.

### Koppla samman två kort

För att koppla samman två kort med en riktad linje:

1. Hovra markören över en av kanterna på ett kort tills du ser en fylld cirkel.
2. Dra cirkeln till kanten på ett annat kort för att koppla samman dem.

> [!tip]- Skapa ett kort från en ny koppling
> Om du drar linjen utan att koppla den till ett annat kort kan du skapa ett nytt kort i den andra änden.

### Koppla ifrån två kort

För att ta bort kopplingen mellan två kort:

1. Hovra markören över en kopplingsline tills två små cirklar visas på linjen.
2. Dra en av cirklarna bort från kortet utan att koppla den till ett annat.

Du kan också koppla ifrån två kort genom att högerklicka på linjen mellan dem och sedan välja **Ta bort**. Eller markera linjen och sedan trycka `Backspace` (eller `Delete` på macOS).

### Koppla ett kort till ett annat kort

För att flytta en av ändarna på en kopplingsline:

1. Hovra markören över en kopplingsline tills två små cirklar visas på linjen.
2. Dra cirkeln till ett annat kort för att koppla om den.

### Navigera en koppling

Om två kopplade kort är långt ifrån varandra kan du hoppa till kortet i den andra änden av kopplingen. Högerklicka på linjen nära en ände och välj sedan **Följ anslutning**. Canvasen flyttar sig till kortet i den motsatta änden.

### Lägg till en etikett på en koppling

Du kan lägga till en etikett på en linje för att beskriva relationen mellan två kort.

För att etikettera en koppling:

1. Dubbelklicka på linjen.
2. Ange etiketten och tryck sedan `Escape` eller välj var som helst på canvasen.

Du kan också etikettera en koppling genom att markera den och sedan välja **Redigera etikett** från markeringskontrollerna.

För att redigera en kopplingsetikett, dubbelklicka på linjen, eller högerklicka på linjen och välj sedan **Redigera etikett**.

För att ta bort en etikett, markera kopplingen och välj sedan **Ta bort etikett** i markeringskontrollerna.

### Ändra riktning på en koppling

Som standard har en koppling en pil i änden som pekar mot det andra kortet. För att ändra detta:

1. Markera kopplingen.
2. I markeringskontrollerna, välj **Linjens riktning**.
3. Välj **Icke-riktad**, **Enriktad** eller **Tvåriktad**.

### Ändra färg på ett kort eller en koppling

1. Markera de kort eller kopplingar du vill färga.
2. I markeringskontrollerna, välj **Ställ in färg** ![[lucide-palette.svg#icon]].
3. Välj en färg.

## Gruppera kort

### Gruppera markerade kort

För att skapa en tom grupp:

- Högerklicka på canvasen och välj sedan **Skapa grupp**.

För att gruppera relaterade kort:

1. Markera korten.
2. Högerklicka på något av de markerade korten och välj sedan **Skapa grupp**.

**Byt namn på grupp:** Dubbelklicka på gruppens namn för att redigera det och tryck sedan `Enter` för att spara.

### Lägg till en bakgrund på en grupp

Du kan visa en bild bakom korten i en grupp.

1. Markera gruppen.
2. I markeringskontrollerna, välj **Ställ in bakgrund**.
3. Välj en bild från ditt valv.

För att ändra bakgrunden, markera gruppen och välj sedan **Redigera bakgrund**.

- **Ersätt bakgrund** väljer en annan bild.
- **Ta bort bakgrund** tar bort bilden.
- **Täck** gör att bilden fyller gruppen.
- **Behåll bildförhållande** behåller bildens proportioner.
- **Upprepa** kakelplacerar bilden över gruppen.

## Navigera på canvasen

Använd panorering och zoomning för att röra dig över canvasen.

### Panorera canvasen

För att flytta canvasen vertikalt och horisontellt, även kallat _panorering_, kan du använda någon av följande metoder:

- Tryck `Space` och dra canvasen.
- Dra canvasen med den mittersta musknappen.
- Rulla musen för att panorera vertikalt, och tryck `Shift` medan du rullar för att panorera horisontellt.

### Zooma canvasen

För att zooma canvasen, tryck `Space` eller `Ctrl` (eller `Cmd` på macOS) och rulla med mushjulet. Eller välj **Zooma in** ![[lucide-plus.svg#icon]] och **Zooma ut** ![[lucide-minus.svg#icon]] från zoomkontrollerna i det övre högra hörnet.

#### Zooma för att passa

För att zooma canvasen så att varje objekt är synligt, välj **Zooma för att passa** ![[lucide-maximize.svg#icon]]. Eller använd tangentbordsgenvägen `Shift+1`.

#### Zooma till markering

För att zooma canvasen så att alla markerade objekt är synliga, högerklicka på ett markerat kort och välj sedan **Zooma till markering**. Eller tryck `Shift+2`.

#### Återställ zoom

För att ändra inzoomningsnivån tillbaka till standard, välj **Återställ zoom** i zoomkontrollerna i det övre högra hörnet.


### Hoppa till en grupp

För att flytta direkt till en grupp i en stor canvas, öppna kommandopaletten och välj **Canvas: Hoppa till grupp**. En lista över grupperna på din canvas visas. Välj den grupp du vill gå till, och canvasen flyttar sig för att centrera på den.

## Canvas-inställningar

Välj **Canvas-inställningar** ![[lucide-settings.svg#icon]] ovanför canvasens kontroller för att ändra hur din canvas beter sig.

- **Snäpp till rutnät** snäpper kort till bakgrundsrutnätet när du flyttar och ändrar storlek på dem.
- **Snäpp till objekt** snäpper kort till närliggande kort när du flyttar och ändrar storlek på dem.
- **Skrivskyddad** förhindrar ändringar av canvasen.

## Exportera en canvas som bild

Du kan exportera en canvas som en PNG-bild på dator. Att exportera en bild är inte tillgängligt i Obsidian-appen på mobil.

1. Öppna canvasen du vill exportera.
2. Öppna kommandopaletten och välj **Canvas: Exportera som bild**.
3. Välj dina inställningar.
    - **Visningsport** anger vad som ska exporteras. Välj **Hela canvasen** för hela canvasen, eller **Endast visningsport** för den del du kan se just nu.
    - **Zoom** anger bildkvaliteten. En högre zoom ger en större, skarpare bild. Dialogrutan visar den uppskattade bildstorleken.
    - **Visa logotyp** lägger till en Obsidian-logotyp längst ner till vänster. Detta är aktiverat som standard.
    - **Sekretessläge** döljer all text på din canvas. Detta är inaktiverat som standard.
4. Välj **Spara**.
5. Välj var filen ska sparas. Filnamnet är som standard canvasens namn, med filändelsen `.png`.

Du kan inte exportera en tom canvas.

## Ångra och gör om

För att ångra din senaste ändring, välj **Ångra** i canvasens kontroller på höger sida av canvasen. Eller tryck `Ctrl+Z` (Windows och Linux) eller `Command+Z` (macOS).

För att göra om en ändring, välj **Gör om**. Eller tryck `Ctrl+Y` eller `Ctrl+Shift+Z` (Windows och Linux), eller `Command+Y` eller `Command+Shift+Z` (macOS).

## Canvas-hjälp

På dator, välj **Canvas-hjälp** ![[lucide-help-circle.svg#icon]] under canvasens kontroller för att se en lista över genvägar för panorering, zoomning, markering och flytt av kort.

## Bädda in en canvas

Du kan bädda in en canvas i en anteckning med den vanliga inbäddningssyntaxen. För mer information, se [[Bädda in filer#Embed a canvas in a note|Bädda in en canvas i en anteckning]].

## Använda Canvas på mobil

När du öppnar en canvas på en telefon eller surfplatta visar Obsidian tre tips.

- **Dra för att panorera**
- **Nyp för att zooma**
- **Tryck och håll för att lägga till / flytta / markera**

### Öppna canvas-menyn

Tryck och håll på ett tomt område av canvasen. Menyn har dessa alternativ.

- **Lägg till kort** lägger till ett textkort.
- **Lägg till anteckning från valv** lägger till en anteckning från ditt valv.
- **Lägg till media från valv** lägger till media från ditt valv.
- **Lägg till webbsida** bäddar in en webbsida.
- **Skapa grupp** skapar en tom grupp.
- **Snäpp till rutnät**, **Snäpp till objekt** och **Skrivskyddad** är samma alternativ som i **Canvas-inställningar**.

### Lägg till kort

Du kan lägga till kort från canvas-menyn. Du kan också välja en ikon längst ner på canvasen.

- Den tomma filikonen lägger till ett textkort.
- Dokumentikonen lägger till en anteckning från ditt valv.
- Bildikonen lägger till media från ditt valv.

### Arbeta med ett markerat kort

Tryck på ett kort för att markera det. Ett verktygsfält visas ovanför kortet.

- **Ta bort** ![[lucide-trash-2.svg#icon]] raderar kortet.
- **Ställ in färg** ![[lucide-palette.svg#icon]] ändrar färgen på kortet.
- **Zooma till markering** zoomar canvasen till kortet.
- **Redigera** ![[lucide-square-pen.svg#icon]] redigerar kortet.

### Flytta ett kort

1. Tryck på kortet för att markera det.
2. Tryck och håll det markerade kortet och dra det sedan till en ny position.

### Ändra storlek på ett kort

1. Tryck på kortet för att markera det.
2. Dra kortets sidor för att göra det större eller mindre.

### Öppna kortmenyn

Tryck och håll på ett kort. Menyn har dessa alternativ.

- **Zooma till markering** zoomar canvasen till kortet.
- **Redigera** redigerar kortet.
- **Konvertera till fil...** konverterar ett textkort till en anteckning.
- **Duplicera** gör en kopia av kortet.
- **Ta bort** raderar kortet.

### Redigera ett kort

För att redigera ett textkort eller ett anteckningskort, använd någon av metoderna.

- Tryck på kortet för att markera det, och dubbelklicka sedan på det. Tangentbordet öppnas.
- Tryck på kortet för att markera det, och välj sedan **Redigera** ![[lucide-square-pen.svg#icon]] i verktygsfältet ovanför kortet.

### Etikettera en koppling

1. Tryck på linjen för att markera den.
2. I verktygsfältet, välj **Redigera etikett** ![[lucide-square-pen.svg#icon]]. Tangentbordet öppnas.
3. Ange etiketten.

För att ta bort en etikett, tryck på linjen och välj sedan **Ta bort etikett** i verktygsfältet.

### Ändra riktning på en koppling

1. Tryck på linjen för att markera den.
2. I verktygsfältet, välj **Linjens riktning**.
3. Välj **Icke-riktad**, **Enriktad** eller **Tvåriktad**.

### Öppna linjemenyn

Tryck och håll på en linje som kopplar samman två kort. Menyn har dessa alternativ.

- **Redigera etikett** lägger till eller ändrar linjens etikett.
- **Följ anslutning** flyttar canvasen till kortet i den motsatta änden av linjen.
- **Ta bort** raderar kopplingen.

### Koppla samman kort

1. Tryck på ett kort för att markera det.
2. Dra en av cirklarna på dess kanter till ett annat kort.

Om du drar linjen och släpper i ett tomt område öppnas en meny med **Lägg till kort** och **Lägg till anteckning från valv**. Välj ett alternativ för att lägga till ett kort i slutet av linjen.

### Koppla ifrån kort

För att ta bort en koppling, använd någon av metoderna.

- Tryck på linjen och välj sedan **Ta bort** ![[lucide-trash-2.svg#icon]].
- Dra piländen av linjen tillbaka till kortet den startade från. Linjen försvinner.

### Gruppera kort

För att skapa en grupp:

1. Tryck och håll på ett tomt område av canvasen.
2. Välj **Skapa grupp**.
3. Dra gruppens kanter för att ändra dess storlek.

För att lägga till kort i en grupp, dra dem in i gruppens område. När du flyttar gruppen flyttas korten inuti den också.

För att byta namn på en grupp, dubbelklicka på dess namn. Tangentbordet öppnas. Ange det nya namnet.

### Canvas-kontroller

Kontroller på höger sida av canvasen ändrar vyn och dina inställningar.

- **Zooma in** och **Zooma ut** ändrar inzoomningsnivån.
- **Återställ zoom** återställer canvasen till standard inzoomningsnivå.
- **Zooma för att passa** visar alla kort på canvasen.
- **Ångra** och **Gör om** ångrar eller upprepar din senaste ändring.
- **Canvas-inställningar** har alternativen **Snäpp till rutnät**, **Snäpp till objekt** och **Skrivskyddad**.

## Avancerade tips

Vi har gjort några korta videor för att demonstrera några avancerade användningsområden för Canvas.

Du kan [se alla 72 tips här](https://obsidian.md/canvas#protips). Tippvideorna är bara synliga på dator.
