---
permalink: plugins/canvas
aliases:
  - plugins/lærred
  - Lærred
  - Plugins/Lærred
---
Lærred er et [[Kerneplugins|kerneplugin]] til visuel notetagning. Det giver dig uendeligt rum til at placere noter og forbinde dem med andre noter, vedhæftninger og websider.

At arrangere dine noter i et 2D-rum hjælper dig med at se og forstå forbindelserne mellem dem. Forbind noter med linjer og gruppér relaterede noter sammen.

Obsidian gemmer lærreder som `.canvas`-filer ved hjælp af det åbne [JSON Canvas](https://jsoncanvas.org/)-format.

## Opret et nyt lærred

For at anvende Lærred skal du først oprette en fil, der kan indeholde dit lærred. Du kan oprette et nyt lærred på en af følgende måder:

**Kommandopaletten:**

1. Åbn [[Kommandopaletten|kommandopaletten]].
2. Vælg **Lærred: Opret nyt lærred** for at oprette et nyt lærred i samme mappe som den aktive fil.

**Stifinderen:**

- Højreklik i [[Stifinder|stifinderen]] på den mappe, som du vil oprette et nyt lærred i.
- Vælg **Nyt lærred**.

**Værktøjslinjen:**

- Vælg **Opret nyt lærred** ![[lucide-layout-dashboard.svg#icon]] i den lodrette værktøjslinje for at oprette et nyt lærred i samme mappe som den aktive fil.

> [!note] .canvas fil endelse
> Obsidian gemmer dine lærredsdata som `.canvas`-filer ved hjælp af et åbent filformat kaldet [JSON Canvas](https://jsoncanvas.org/).

## Tilføj kort

Du kan trække filer ind på dit lærred fra Obsidian eller en anden applikation, fx Markdown-filer, billeder, lyd, PDF-dokumenter, eller endda filtyper, som Obsidian ikke genkender.

### Tilføj tekstkort

Du kan tilføje tekstkort, som ikke refererer til en fil. Du kan benytte Markdown, links og kodeblokke på samme måde som i en note.

For at tilføje et nyt tekstkort til dit lærred:

- Vælg eller træk det tomme filikon i bunden af lærredet.

Du kan også tilføje tekstkort ved at dobbeltklikke på lærredet.

For at konvertere et tekstkort til en fil:

1. Højreklik på tekstkortet og vælg **Konvertér til fil...**.
2. Skriv navnet på noten og vælg **Gem**.

> [!note] Tekstkort og tilbagelinks
> Tekstkort optræder ikke i [[Tilbagelinks|tilbagelinks]]. For at få dem til at optræde der, skal du konvertere kortet til en fil.

### Tilføj kort fra noter

For at tilføje en note fra din boks til dit lærred:

1. Vælg eller træk dokumentikonet i bunden af lærredet.
2. Vælg den note, du vil tilføje.

Du kan også tilføje noter fra popupmenuen i et lærred:

1. Højreklik på lærredet og vælg **Tilføj note fra boksen**.
2. Vælg den note, du vil tilføje.

Du kan også trække noter fra [[Stifinder|stifinderen]] ind på lærredet.

### Tilføj kort fra medier

For at tilføje et medie fra din boks til dit lærred:

1. Vælg eller træk billedfilsikonet i bunden af lærredet.
2. Vælg den mediefil, du vil tilføje.

Du kan også tilføje medier fra popupmenuen i et lærred:

1. Højreklik på lærredet og vælg **Tilføj medie fra boksen**.
2. Vælg den mediefil, du vil tilføje.

Du kan også trække mediefiler fra [[Stifinder|stifinderen]] ind på lærredet.

### Tilføj kort fra websider

For at indlejre en webside på dit lærred:

1. Højreklik på lærredet og vælg **Tilføj webside**.
2. Skriv websidens URL og vælg **Gem**.

Du kan også vælge en URL i din browser og trække den ind på lærredet for at indlejre den i et kort.

For at åbne websiden i din browser kan du trykke `Ctrl` (eller `Cmd` på macOS) og vælge kortets titel. Eller du kan højreklikke på kortet og vælge **Åbn i browser**.

### Tilføj kort fra mapper

Træk en mappe fra [[Stifinder|stifinderen]] ind på lærredet for at tilføje alle filer i den mappe.

### Rediger et kort

Dobbeltklik på et tekst- eller notekort for at starte redigering af det. Vælg et sted uden for kortet for at afslutte redigeringen. Du kan også trykke `Escape` for at stoppe redigering af kortet.

Du kan også redigere et kort ved at højreklikke på det og vælge **Rediger**.

### Slet et kort

Fjern valgte kort ved at højreklikke på dem og vælge **Slet**. Eller tryk `Tilbage` (eller `Del` på macOS).

Du kan også vælge **Fjern** ![[lucide-trash-2.svg#icon]] i popupmenuen over de valgte kort.

### Byt kort

Du kan udskifte et notekort eller et mediekort med et andet kort af samme type.

For at bytte et notekort:

1. Højreklik på det kort, som du vil erstatte.
2. Vælg **Byt fil...**.
3. Vælg den note, som du vil erstatte den med.

## Vælg kort

Vælg individuelle kort, eller træk en markering rundt om flere kort.

Du kan også tilføje og fjerne kort fra et valg ved at trykke `Skift` og klikke på dem.

Tryk `Ctrl+a` (eller `Cmd+a` på macOS) for at vælge alle kortene på et lærred.

For at rulle indholdet af et kort, skal du først vælge det.

### Omarrangér kort

Træk et valgt kort for at flytte det rundt på et lærred.

Tryk `Alt` (eller `Option` på macOS) og træk for at duplikere de valgte kort.

Du kan trykke `Skift` mens du trækker for kun at flytte i én retning.

Tryk `Mellemrum` mens du trækker for at forhindre fastgøring i gitter.

Når et kort vælges, flyttes det i front.

### Tilpas størrelsen på et kort

Træk i et af kortets kanter for at tilpasse kortets størrelse.

Du kan trykke på `Mellemrum` mens du tilpasser størrelsen for at forhindre fastgøring til gitter.

For at opretholde højde-bredde-forholdet skal du trykke `Skift` mens du tilpasser størrelsen.

## Forbind kort

Tegn linjer mellem kort for at vise relationer. Tilføj farver og mærkater for at beskrive, hvordan de relaterer sig til hinanden.

### Forbind to kort

For at forbinde to kort med en retningsstreg:

1. Før musemarkøren over en af kanterne på et kort, indtil du ser en udfyldt cirkel.
2. Træk cirklen over til kanten af et andet kort for at forbinde dem.

> [!tip]- Opret et kort fra en ny forbindelse
> Hvis du trækker en linje uden at forbinde den til et andet kort, kan du oprette et nyt kort i den anden ende.

### Fjern forbindelsen mellem to kort

For at fjerne forbindelsen mellem to kort:

1. Før musemarkøren over en forbindelseslinje, indtil du kan se to små cirkler på linjen.
2. Træk en af cirklerne væk uden at forbinde den til et andet kort.

Du kan også fjerne forbindelsen mellem to kort ved at højreklikke på linjen mellem dem og vælge **Fjern**. Eller vælg linjen og tryk `Tilbage` (eller `Del` på macOS).

### Forbind et kort til et andet kort

For at flytte en af enderne af en forbindelseslinje:

1. Før musemarkøren over en forbindelseslinje, indtil du kan se to små cirkler på linjen.
2. Træk cirklen til et andet kort for at forbinde den igen.

### Navigér en forbindelse

Hvis to forbundne kort er meget langt fra hinanden, kan du navigere til kilden eller destinationen ved at højreklikke på linjen og vælge **Gå til destination** eller **Gå til kilde**.

### Tilføj en mærkat til en forbindelse

Du kan tilføje en mærkat til en linje for at beskrive relationen mellem to kort.

For at give en forbindelse en mærkat:

1. Dobbeltklik på linjen.
2. Skriv mærkatens navn og tryk `Escape` eller vælg et andet sted på lærredet.

Du kan også give en forbindelse en mærkat ved at vælge den og vælge **Rediger mærkat** fra popupmenuen.

For at redigere en forbindelses mærkat kan du dobbeltklikke på linjen, eller højreklikke på linjen og vælge **Rediger mærkat**.

### Skift farve på et kort eller en forbindelse

1. Vælg de kort eller forbindelser, som du vil give en farve.
2. Vælg **Sæt farve** ![[lucide-palette.svg#icon]] i popupmenuen.
3. Vælg en farve.

## Gruppering af kort

### Gruppér valgte kort

For at oprette en tom gruppe:

- Højreklik på lærredet og vælg **Opret gruppe**.

For at gruppere relaterede kort:

1. Vælg kortene.
2. Højreklik på et af de valgte kort og vælg **Opret gruppe**.

**Omdøb gruppe:** Dobbeltklik på gruppens navn for at redigere det, og tryk `Retur` for at gemme.

## Navigering på lærredet

Brug panorering og zoom til at bevæge dig rundt på lærredet.

### Panorér lærredet

For at flytte lærredet vandret eller lodret, også kaldet _panorering_, kan du benytte følgende metoder:

- Tryk `Mellemrum` og træk lærredet.
- Træk lærredet ved brug af den midterste museknap.
- Rul musen for at panorere lodret, og tryk `Skift` mens du ruller for at panorere vandret.

### Zoom lærredet

For at zoome lærredet skal du trykke `Mellemrum` eller `Ctrl` (eller `Cmd` på macOS) og rulle med musens hjul. Eller vælg **Zoom ind** ![[lucide-plus.svg#icon]] og **Zoom ud** ![[lucide-minus.svg#icon]] i zoomkontrollerne i øverste højre hjørne.

#### Zoom til at passe

Vælg **Zoom til at passe** ![[lucide-maximize.svg#icon]] for at zoome lærredet, så alle elementer kan ses på en gang. Eller benyt genvejstasten `Shift+1`.

#### Zoom til valg

Højreklik på et valgt kort og vælg **Zoom til valg** for at zoome lærredet, så alle de valgte elementer kan ses. Eller tryk `Shift+2`.

#### Nulstil zoom

Vælg **Nulstil zoom** i zoomkontrollerne i øverste højre hjørne for at ændre zoomniveauet tilbage til standardstørrelsen.

## Indlejr et lærred

Du kan indlejre et lærred i en note ved hjælp af den standard indlejringssyntaks. For mere information, se [[Indlejr filer#Embed a canvas in a note|Indlejr et lærred i en note]].

## Avancerede tips

Vi har lavet nogle korte videoer, der demonstrerer nogle avancerede anvendelser af Lærred.

Du kan [se alle 72 tips her](https://obsidian.md/canvas#protips). Tipvideoerne er kun synlige på desktop.
