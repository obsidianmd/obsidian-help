---
permalink: plugins/canvas
---
Canvas er en [[Kjerneutvidelser|kjerneutvidelse]] for visuell notatskriving. Den gir deg uendelig plass til å legge ut notater og koble dem til andre notater, vedlegg og nettsider.

Visuell notatskriving hjelper deg med å forstå notatene dine ved å organisere dem i et 2D-rom. Koble notater med linjer og grupper relaterte notater sammen for bedre å forstå forholdet mellom dem.

Canvas-data du oppretter i Obsidian lagres som `.canvas`-filer ved bruk av det åpne filformatet [JSON Canvas](https://jsoncanvas.org/).

## Opprett en ny Canvas

For å begynne å bruke Canvas må du først opprette en fil som holder Canvas-innholdet ditt. Du kan opprette en ny Canvas ved hjelp av følgende metoder.

**Kommandopalett:**

1. Åpne [[Kommandovelger|kommandopaletten]].
2. Velg **Canvas: Opprett ny Canvas** for å opprette en Canvas i samme mappe som den aktive filen.

**Filutforsker:**

- I [[Filutforsker|filutforskeren]], høyreklikk på mappen du vil opprette Canvas i.
- Velg **Ny Canvas**.

**Verktøylinje:**

- I den vertikale verktøylinjen, velg **Opprett ny Canvas** ![[lucide-layout-dashboard.svg#icon]] for å opprette en Canvas i samme mappe som den aktive filen.

> [!note] .canvas-filtypen
> Obsidian lagrer Canvas-dataene dine som `.canvas`-filer ved bruk av et åpent filformat kalt [JSON Canvas](https://jsoncanvas.org/).

## Legg til kort

Du kan dra filer inn i Canvas fra Obsidian eller fra andre applikasjoner. For eksempel Markdown-filer, bilder, lyd, PDF-er, eller til og med ukjente filtyper.

### Legg til tekstkort

Du kan legge til kort som bare inneholder tekst og ikke refererer til en fil. Du kan bruke Markdown, lenker og kodeblokker akkurat som i et notat.

For å legge til et nytt tekstkort i Canvas:

- Velg eller dra det tomme filikonet nederst på Canvas.

Du kan også legge til tekstkort ved å dobbeltklikke på Canvas.

For å konvertere et tekstkort til en fil:

1. Høyreklikk på tekstkortet og velg **Konverter til fil...**.
2. Skriv inn notatnavnet og velg **Lagre**.

> [!note] Merknad
> Tekstkort vises ikke i [[Lenker tilbake]]. For å få dem til å vises må du konvertere dem til en fil.

### Legg til kort fra notater

For å legge til et notat fra hvelvet ditt i Canvas:

1. Velg eller dra dokumentikonet nederst på Canvas.
2. Velg notatet du vil legge til.

Du kan også legge til notater fra Canvas-kontekstmenyen:

1. Høyreklikk på Canvas og velg **Legg til notat fra vault**.
2. Velg notatet du vil legge til.

Eller du kan legge dem til i Canvas ved å dra filen fra [[Filutforsker|filutforskeren]].

### Legg til kort fra media

For å legge til media fra hvelvet ditt i Canvas:

1. Velg eller dra bildefilikonet nederst på Canvas.
2. Velg mediefilen du vil legge til.

Du kan også legge til media fra Canvas-kontekstmenyen:

1. Høyreklikk på Canvas og velg **Legg till media fra vault**.
2. Velg mediefilen du vil legge til.

Eller du kan legge dem til i Canvas ved å dra filen fra [[Filutforsker|filutforskeren]].

### Legg til kort fra nettsider

For å bygge inn en nettside i Canvas:

1. Høyreklikk på Canvas og velg **Legg till hjemmeside**.
2. Skriv inn URL-en til nettsiden og velg **Lagre**.

Du kan også velge en URL i nettleseren din og deretter dra den inn i Canvas for å bygge den inn i et kort.

For å åpne nettsiden i nettleseren, trykk `Ctrl` (eller `Cmd` på macOS) og velg kortetiketten. Eller høyreklikk på kortet og velg **Åpne i nettleser**.

### Legg til kort fra mapper

Dra en mappe fra filutforskeren for å legge til alle filer i den mappen i Canvas.

### Rediger et kort

Dobbeltklikk på et tekst- eller notatkort for å begynne å redigere det. Klikk utenfor kortet for å slutte å redigere det. Du kan også trykke `Escape` for å slutte å redigere et kort.

Du kan også redigere et kort ved å høyreklikke på det og velge **Rediger**.

### Slett et kort

Fjern valgte kort ved å høyreklikke på et av dem, og deretter velge **Slett**. Eller trykk `Backspace` (eller `Delete` på macOS).

Du kan også velge **Fjern** ![[lucide-trash-2.svg#icon]] i valgkontrollene over utvalget ditt.

### Bytt kort

Du kan bytte et notat- eller mediakort med et annet kort av samme type.

For å bytte et notatkort:

1. Høyreklikk på kortet du vil erstatte.
2. Velg **Bytt fil**.
3. Velg notatet du vil erstatte med.

## Velg kort

Velg kort i Canvas ved å klikke på dem. Du kan velge flere kort ved å dra et utvalg rundt dem.

Du kan også legge til og fjerne kort fra et eksisterende utvalg ved å trykke `Shift` og velge dem.

Trykk `Ctrl+a` (eller `Cmd+a` på macOS) for å velge alle kort i Canvas.

For å rulle innholdet i et kort må du først velge det.

### Ordne kort

Dra et valgt kort for å flytte det.

Trykk `Alt` (eller `Option` på macOS) og dra for å duplisere utvalget.

Du kan trykke `Shift` mens du drar for å bare flytte i én retning.

Trykk `Space` mens du flytter et utvalg for å deaktivere snapping.

Å velge et kort flytter det til forsiden.

### Endre størrelse på et kort

Dra en av kortets kanter for å endre størrelsen.

Du kan trykke `Space` mens du endrer størrelse for å deaktivere snapping.

For å beholde sideforholdet mens du endrer størrelse, trykk `Shift` mens du endrer størrelse.

## Koble kort

Tegn linjer mellom kort for å opprette relasjoner mellom dem. Bruk farger og etiketter for å beskrive hvordan de forholder seg til hverandre.

### Koble to kort

For å koble to kort med en rettet linje:

1. Hold musepekeren over en av kantene på et kort til du ser en fylt sirkel.
2. Dra sirkelen til kanten av et annet kort for å koble dem.

> [!tip] Tips
> Hvis du drar linjen uten å koble den til et annet kort, kan du deretter legge til kortet du vil koble den til.

### Koble fra to kort

For å fjerne forbindelsen mellom to kort:

1. Hold musepekeren over en forbindelseslinje til to små sirkler vises på linjen.
2. Dra en av sirklene bort fra kortet uten å koble den til et annet.

Du kan også koble fra to kort ved å høyreklikke på linjen mellom dem, og deretter velge **Fjern**. Eller ved å velge linjen og deretter trykke `Backspace` (eller `Delete` på macOS).

### Koble et kort til et annet kort

For å flytte en av endene av en forbindelseslinje:

1. Hold musepekeren over en forbindelseslinje til to små sirkler vises på linjen.
2. Dra sirkelen over enden du vil koble til på nytt, til et annet kort.

### Naviger en forbindelse

Hvis to tilkoblede kort er langt fra hverandre, kan du navigere til kilden eller målet for forbindelsen ved å høyreklikke på linjen og deretter velge **Gå til mål** eller **Gå til kilde**.

### Legg til en etikett på en forbindelse

Du kan legge til en etikett på en linje for å beskrive forholdet mellom to kort.

For å sette etikett på en forbindelse:

1. Dobbeltklikk på linjen.
2. Skriv inn etiketten og trykk deretter `Escape` eller klikk hvor som helst på Canvas.

Du kan også sette etikett på en forbindelse ved å velge den og deretter velge **Rediger label** fra valgkontrollene.

For å redigere en forbindelsesetikett, dobbeltklikk på linjen, eller høyreklikk på linjen og velg **Rediger label**.

### Endre fargen på et kort eller en forbindelse

1. Velg kortene eller forbindelsene du vil fargelegge.
2. I valgkontrollene, velg **Velg farge** ![[lucide-palette.svg#icon]].
3. Velg en farge.

## Grupper kort

### Grupper valgte kort

For å opprette en tom gruppe:

- Høyreklikk på Canvas og velg **Opprett gruppe**.

For å gruppere relaterte kort:

1. Velg kortene.
2. Høyreklikk på et av de valgte kortene og velg **Opprett gruppe**.

**Gi gruppen nytt navn:** Dobbeltklikk på navnet på gruppen for å redigere det, og trykk deretter `Enter` for å lagre.

## Naviger i Canvas

Når du begynner å legge til flere kort i Canvas, vil du forstå hvordan du kan navigere i Canvas for å se på en del av det. Lær hvordan du panorerer og zoomer for å bevege deg over Canvas med letthet.

### Panorer i Canvas

For å flytte Canvas vertikalt og horisontalt, også kjent som _panorering_, kan du bruke en av følgende metoder:

- Trykk `Space` og dra Canvas.
- Dra Canvas med midtre museknapp.
- Rull musen for å panorere vertikalt, og trykk `Shift` mens du ruller for å panorere horisontalt.

### Zoom i Canvas

For å zoome i Canvas, trykk `Space` eller `Ctrl` (eller `Cmd` på macOS) og rull med musehjulet. Eller velg **Zoom inn** ![[lucide-plus.svg#icon]] og **Zoom ut** ![[lucide-minus.svg#icon]] fra zoom-kontrollene i øvre høyre hjørne.

#### Zoom for å tilpasse

For å zoome Canvas slik at alle elementer er synlige, velg **Zoom for å tilpasse** ![[lucide-maximize.svg#icon]]. Eller bruk hurtigtasten `Shift+1`.

#### Zoom til markering

For å zoome Canvas slik at alle valgte elementer er synlige, høyreklikk på et valgt kort og velg **Zoom til markering**. Eller bruk hurtigtasten `Shift+2`.

#### Tilbakestill zoom

For å endre zoomnivået tilbake til standard, velg **Tilbakestill zoom** i zoom-kontrollene i øvre høyre hjørne.

## Avanserte tips

Vi har laget noen korte videoer for å demonstrere noen avanserte bruksområder for Canvas.

Du kan [se alle 72 tipsene her](https://obsidian.md/canvas#protips). Vennligst merk at tipsvideoene kun er synlige på skrivebord.
