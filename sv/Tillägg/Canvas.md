---
permalink: plugins/canvas
---
Canvas är ett [[Kärntillägg|kärntillägg]] för visuellt antecknande. Det ger dig oändligt utrymme att lägga ut anteckningar och koppla dem till andra anteckningar, bilagor och webbsidor.

Visuellt antecknande hjälper dig att förstå dina anteckningar genom att organisera dem i ett 2D-utrymme. Koppla samman anteckningar med linjer och gruppera relaterade anteckningar för att bättre förstå sambanden mellan dem.

Canvas-data du skapar i Obsidian sparas som `.canvas`-filer med det öppna filformatet [JSON Canvas](https://jsoncanvas.org/).

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

Du kan lägga till kort som bara innehåller text och inte refererar till en fil. Du kan använda Markdown, länkar och kodblock precis som i en anteckning.

För att lägga till ett nytt textkort på din canvas:

- Välj eller dra den tomma filikonen längst ner på canvasen.

Du kan också lägga till textkort genom att dubbelklicka på canvasen.

För att konvertera ett textkort till en fil:

1. Högerklicka på textkortet och välj sedan **Konvertera till fil...**.
2. Ange anteckningsnamnet och välj sedan **Spara**.

> [!note] Obs
> Textkort visas inte i [[Bakåtlänkar]]. För att de ska visas måste du konvertera dem till en fil.

### Lägg till kort från anteckningar

För att lägga till en anteckning från ditt valv på din canvas:

1. Välj eller dra dokumentikonen längst ner på canvasen.
2. Välj anteckningen du vill lägga till.

Du kan också lägga till anteckningar från canvasens kontextmeny:

1. Högerklicka på canvasen och välj sedan **Lägg till anteckning från valv**.
2. Välj anteckningen du vill lägga till.

Eller så kan du lägga till dem på canvasen genom att dra filen från [[Filutforskare|filutforskaren]].

### Lägg till kort från media

För att lägga till media från ditt valv på din canvas:

1. Välj eller dra bildfilikonen längst ner på canvasen.
2. Välj mediefilen du vill lägga till.

Du kan också lägga till media från canvasens kontextmeny:

1. Högerklicka på canvasen och välj sedan **Lägg till media från valv**.
2. Välj mediefilen du vill lägga till.

Eller så kan du lägga till dem på canvasen genom att dra filen från [[Filutforskare|filutforskaren]].

### Lägg till kort från webbsidor

För att bädda in en webbsida på din canvas:

1. Högerklicka på canvasen och välj sedan **Lägg till webbsida**.
2. Ange URL:en till webbsidan och välj sedan **Spara**.

Du kan också markera en URL i din webbläsare och sedan dra den till canvasen för att bädda in den i ett kort.

För att öppna webbsidan i din webbläsare, tryck `Ctrl` (eller `Cmd` på macOS) och välj kortets etikett. Eller högerklicka på kortet och välj **Öppna i webbläsare**.

### Lägg till kort från mappar

Dra en mapp från filutforskaren för att lägga till alla filer i den mappen på canvasen.

### Redigera ett kort

Dubbelklicka på ett text- eller anteckningskort för att börja redigera det. Klicka utanför kortet för att sluta redigera det. Du kan också trycka på `Escape` för att sluta redigera ett kort.

Du kan också redigera ett kort genom att högerklicka på det och välja **Redigera**.

### Radera ett kort

Ta bort valda kort genom att högerklicka på något av dem och sedan välja **Radera**. Eller tryck `Backspace` (eller `Delete` på macOS).

Du kan också välja **Ta bort** ![[lucide-trash-2.svg#icon]] i markeringskontrollerna ovanför din markering.

### Byt ut kort

Du kan byta ut ett antecknings- eller mediakort mot ett annat kort av samma typ.

För att byta ut ett anteckningskort:

1. Högerklicka på kortet du vill ersätta.
2. Välj **Byt fil**.
3. Välj anteckningen du vill ersätta med.

## Markera kort

Markera kort på canvasen genom att klicka på dem. Du kan markera flera kort genom att dra en markering runt dem.

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

## Koppla samman kort

Rita linjer mellan kort för att skapa relationer mellan dem. Använd färger och etiketter för att beskriva hur de förhåller sig till varandra.

### Koppla samman två kort

För att koppla samman två kort med en riktad linje:

1. Hovra markören över en av kanterna på ett kort tills du ser en fylld cirkel.
2. Dra cirkeln till kanten på ett annat kort för att koppla samman dem.

> [!tip] Tips
> Om du drar linjen utan att koppla den till ett annat kort kan du sedan lägga till det kort du vill koppla den till.

### Koppla ifrån två kort

För att ta bort kopplingen mellan två kort:

1. Hovra markören över en kopplingsline tills två små cirklar visas på linjen.
2. Dra en av cirklarna bort från kortet utan att koppla den till ett annat.

Du kan också koppla ifrån två kort genom att högerklicka på linjen mellan dem och sedan välja **Ta bort**. Eller genom att markera linjen och sedan trycka `Backspace` (eller `Delete` på macOS).

### Koppla ett kort till ett annat kort

För att flytta en av ändarna på en kopplingsline:

1. Hovra markören över en kopplingsline tills två små cirklar visas på linjen.
2. Dra cirkeln över den ände du vill koppla om, till ett annat kort.

### Navigera en koppling

Om två kopplade kort är långt ifrån varandra kan du navigera till källan eller målet för kopplingen genom att högerklicka på linjen och sedan välja **Gå till mål** eller **Gå till källa**.

### Lägg till en etikett på en koppling

Du kan lägga till en etikett på en linje för att beskriva relationen mellan två kort.

För att etikettera en koppling:

1. Dubbelklicka på linjen.
2. Ange etiketten och tryck sedan `Escape` eller klicka var som helst på canvasen.

Du kan också etikettera en koppling genom att markera den och sedan välja **Redigera etikett** från markeringskontrollerna.

För att redigera en kopplingsetikett, dubbelklicka på linjen, eller högerklicka på linjen och välj sedan **Redigera etikett**.

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

## Navigera på canvasen

När du börjar lägga till fler kort på din canvas vill du förstå hur du kan navigera på canvasen för att titta på en del av den. Lär dig hur du panorerar och zoomar för att enkelt röra dig över canvasen.

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

För att zooma canvasen så att alla markerade objekt är synliga, högerklicka på ett markerat kort och välj sedan **Zooma till markering**. Eller använd en tangentbordsgenväg genom att trycka `Shift+2`.

#### Återställ zoom

För att ändra inzoomningsnivån tillbaka till standard, välj **Återställ zoom** i zoomkontrollerna i det övre högra hörnet.

## Avancerade tips

Vi har gjort några korta videor för att demonstrera några avancerade användningsområden för Canvas.

Du kan [kolla in alla 72 tips här](https://obsidian.md/canvas#protips). Observera att tippvideorna bara är synliga på dator.
