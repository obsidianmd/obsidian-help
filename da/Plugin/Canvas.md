---
permalink: plugins/canvas
aliases:
  - plugins/lærred
  - Lærred
  - Plugins/Lærred
mobile: true
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

For kun at vise en del af en note i et kort kan du højreklikke på kortet og vælge **Begræns til overskrift...** eller **Begræns til blok...**. Vælg derefter overskriften eller blokken.

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

For at åbne websiden i din browser kan du trykke `Ctrl` (eller `Cmd` på macOS) og vælge kortets titel. Eller du kan højreklikke på kortet og vælge **Åbn eksternt link**.

Højreklik på et websidekort for flere muligheder.

- **Kopiér URL** kopierer websidens adresse.
- **Ændr URL...** ændrer den adresse, kortet viser.
- **Genindlæs side** indlæser websiden igen.

### Tilføj kort fra baser

For at vise en [[Introduktion til Baser|base]] på dit lærred kan du trække basefilen fra stifinderen ind på lærredet. Kortet viser basen.

Et basekort viser basens standardvisning. For at vise en anden visning:

1. Højreklik på kortet og vælg **Fastgør visning...**.
2. Vælg den visning, du ønsker.

For at gå tilbage til standardvisningen skal du vælge **Fastgør visning...** igen og derefter vælge **Vis standardvisning**.

### Tilføj kort fra mapper

Træk en mappe fra [[Stifinder|stifinderen]] ind på lærredet for at tilføje alle filer i den mappe.

### Rediger et kort

Dobbeltklik på et tekst- eller notekort for at starte redigering af det. Vælg et sted uden for kortet for at afslutte redigeringen. Du kan også trykke `Escape` for at stoppe redigering af kortet.

Du kan også redigere et kort ved at højreklikke på det og vælge **Rediger**. Eller vælg kortet og vælg **Rediger** ![[lucide-square-pen.svg#icon]] i popupmenuen.

### Slet et kort

Fjern valgte kort ved at højreklikke på dem og vælge **Fjern**. Eller tryk `Tilbage` (eller `Del` på macOS).

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

### Justér og arrangér kort

For at justere flere kort skal du vælge to eller flere kort. I popupmenuen vælger du **Juster** og derefter en mulighed.

- **Venstrejuster**, **Centrer** og **Højrejuster** justerer kortene langs en lodret linje.
- **Juster øverst**, **Juster til midten** og **Juster nederst** justerer kortene langs en vandret linje.
- **Arranger i en række**, **Arranger i en kolonne** og **Arranger i et gitter** flytter kortene til det pågældende layout.
- **Fordel vandret afstand** og **Fordel lodret afstand** fordeler kortene jævnt.
- **Lige margener vandret** og **Lige margener lodret** tilpasser hvert kort, så det matcher den fulde bredde eller højde af det valgte.

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

Hvis to forbundne kort er meget langt fra hinanden, kan du springe til kortet i den anden ende af forbindelsen. Højreklik på linjen tæt på den ene ende, og vælg derefter **Følg forbindelse**. Lærredet flyttes til kortet i den modsatte ende.

### Tilføj en mærkat til en forbindelse

Du kan tilføje en mærkat til en linje for at beskrive relationen mellem to kort.

For at give en forbindelse en mærkat:

1. Dobbeltklik på linjen.
2. Skriv mærkatens navn og tryk `Escape` eller vælg et andet sted på lærredet.

Du kan også give en forbindelse en mærkat ved at vælge den og vælge **Rediger mærkat** fra popupmenuen.

For at redigere en forbindelses mærkat kan du dobbeltklikke på linjen, eller højreklikke på linjen og vælge **Rediger mærkat**.

For at fjerne en mærkat skal du vælge forbindelsen og derefter vælge **Fjern mærkat** i popupmenuen.

### Skift retningen på en forbindelse

Som standard har en forbindelse en pil i den ende, der peger mod det andet kort. For at ændre dette:

1. Vælg forbindelsen.
2. I popupmenuen vælger du **Linjeretning**.
3. Vælg **Uden retning**, **Ensrettet** eller **Tovejs**.

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

### Tilføj en baggrund til en gruppe

Du kan vise et billede bag kortene i en gruppe.

1. Vælg gruppen.
2. I popupmenuen vælger du **Indstil baggrund**.
3. Vælg et billede fra din boks.

For at ændre baggrunden skal du vælge gruppen og derefter vælge **Rediger baggrund**.

- **Udskift baggrund** vælger et andet billede.
- **Fjern baggrund** fjerner billedet.
- **Udfyld** får billedet til at fylde gruppen.
- **Behold størrelsesforhold** bevarer billedets proportioner.
- **Gentag** lægger billedet som fliser på tværs af gruppen.

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


### Spring til en gruppe

For at flytte direkte til en gruppe på et stort lærred kan du åbne kommandopaletten og vælge **Lærred: Spring til gruppe**. En liste over grupperne på dit lærred vises. Vælg den gruppe, du vil gå til, og lærredet flyttes, så gruppen centreres.

## Lærredsindstillinger

Vælg **Lærredsindstillinger** ![[lucide-settings.svg#icon]] over lærredskontrollerne for at ændre, hvordan dit lærred opfører sig.

- **Fastgør til gitter** fastgør kort til baggrundsgitteret, når du flytter og tilpasser deres størrelse.
- **Fastgør til objekter** fastgør kort til nærliggende kort, når du flytter og tilpasser deres størrelse.
- **Skrivebeskyttet** forhindrer ændringer af lærredet.

## Eksportér et lærred som billede

Du kan eksportere et lærred som et PNG-billede på desktop. Eksportering af billeder er ikke tilgængelig i Obsidian-appen på mobil.

1. Åbn det lærred, du vil eksportere.
2. Åbn kommandopaletten og vælg **Lærred: Eksportér som billede**.
3. Vælg dine indstillinger.
    - **Visningsområde** angiver, hvad der skal eksporteres. Vælg **Hele lærredet** for hele lærredet eller **Kun visningsområde** for den del, du kan se nu.
    - **Zoom** angiver billedkvaliteten. Et højere zoomniveau giver et større og skarpere billede. Dialogen viser den estimerede billedstørrelse.
    - **Vis logo** tilføjer et Obsidian-logo nederst til venstre. Dette er aktiveret som standard.
    - **Privatlivstilstand** skjuler al tekst på dit lærred. Dette er deaktiveret som standard.
4. Vælg **Gem**.
5. Vælg, hvor filen skal gemmes. Filnavnet er som standard lærredets navn med endelsen `.png`.

Du kan ikke eksportere et tomt lærred.

## Fortryd og annuller fortrydelse

For at fortryde din seneste ændring skal du vælge **Fortryd** i lærredskontrollerne i højre side af lærredet. Eller tryk `Ctrl+Z` (Windows og Linux) eller `Command+Z` (macOS).

For at annullere en fortrydelse skal du vælge **Annuller fortrydelse**. Eller tryk `Ctrl+Y` eller `Ctrl+Shift+Z` (Windows og Linux) eller `Command+Y` eller `Command+Shift+Z` (macOS).

## Lærredshjælp

På desktop kan du vælge **Lærredshjælp** ![[lucide-help-circle.svg#icon]] under lærredskontrollerne for at se en liste over genveje til panorering, zoom, valg og flytning af kort.

## Indlejr et lærred

Du kan indlejre et lærred i en note ved hjælp af den standard indlejringssyntaks. For mere information, se [[Indlejr filer#Embed a canvas in a note|Indlejr et lærred i en note]].

## Brug Lærred på mobil

Når du åbner et lærred på en telefon eller tablet, viser Obsidian tre hints.

- **Træk for at panorere**
- **Knib for at zoome**
- **Tryk og hold for at tilføje / flytte / vælge**

### Åbn lærredsmenuen

Tryk og hold på et tomt område af lærredet. Menuen har disse elementer.

- **Tilføj kort** tilføjer et tekstkort.
- **Tilføj note fra boks** tilføjer en note fra din boks.
- **Tilføj medie fra boks** tilføjer et medie fra din boks.
- **Tilføj webside** indlejrer en webside.
- **Opret gruppe** opretter en tom gruppe.
- **Fastgør til gitter**, **Fastgør til objekter** og **Skrivebeskyttet** er de samme muligheder som i **Lærredsindstillinger**.

### Tilføj kort

Du kan tilføje kort fra lærredsmenuen. Du kan også vælge et ikon i bunden af lærredet.

- Det tomme filikon tilføjer et tekstkort.
- Dokumentikonet tilføjer en note fra din boks.
- Billedikonet tilføjer et medie fra din boks.

### Arbejd med et valgt kort

Tryk på et kort for at vælge det. En værktøjslinje vises over kortet.

- **Fjern** ![[lucide-trash-2.svg#icon]] sletter kortet.
- **Sæt farve** ![[lucide-palette.svg#icon]] ændrer kortets farve.
- **Zoom til valg** zoomer lærredet til kortet.
- **Rediger** ![[lucide-square-pen.svg#icon]] redigerer kortet.

### Flyt et kort

1. Tryk på kortet for at vælge det.
2. Tryk og hold på det valgte kort, og træk det til en ny position.

### Tilpas størrelsen på et kort

1. Tryk på kortet for at vælge det.
2. Træk i kortets sider for at gøre det større eller mindre.

### Åbn kortmenuen

Tryk og hold på et kort. Menuen har disse elementer.

- **Zoom til valg** zoomer lærredet til kortet.
- **Rediger** redigerer kortet.
- **Konvertér til fil...** konverterer et tekstkort til en note.
- **Dupliker** opretter en kopi af kortet.
- **Fjern** sletter kortet.

### Rediger et kort

For at redigere et tekstkort eller et notekort kan du bruge en af metoderne.

- Tryk på kortet for at vælge det, og dobbelttryk derefter på det. Tastaturet åbnes.
- Tryk på kortet for at vælge det, og vælg derefter **Rediger** ![[lucide-square-pen.svg#icon]] i værktøjslinjen over kortet.

### Giv en forbindelse en mærkat

1. Tryk på linjen for at vælge den.
2. I værktøjslinjen vælger du **Rediger mærkat** ![[lucide-square-pen.svg#icon]]. Tastaturet åbnes.
3. Skriv mærkaten.

For at fjerne en mærkat skal du trykke på linjen og derefter vælge **Fjern mærkat** i værktøjslinjen.

### Skift retningen på en forbindelse

1. Tryk på linjen for at vælge den.
2. I værktøjslinjen vælger du **Linjeretning**.
3. Vælg **Uden retning**, **Ensrettet** eller **Tovejs**.

### Åbn linjemenuen

Tryk og hold på en linje, der forbinder to kort. Menuen har disse elementer.

- **Rediger mærkat** tilføjer eller ændrer linjens mærkat.
- **Følg forbindelse** flytter lærredet til kortet i den modsatte ende af linjen.
- **Fjern** sletter forbindelsen.

### Forbind kort

1. Tryk på et kort for at vælge det.
2. Træk en af cirklerne på dets kanter til et andet kort.

Hvis du trækker linjen og slipper den i et tomt område, åbnes en menu med **Tilføj kort** og **Tilføj note fra boks**. Vælg en for at tilføje et kort i enden af linjen.

### Fjern forbindelse mellem kort

For at fjerne en forbindelse kan du bruge en af metoderne.

- Tryk på linjen, og vælg derefter **Fjern** ![[lucide-trash-2.svg#icon]].
- Træk pilenden af linjen tilbage til det kort, den startede fra. Linjen forsvinder.

### Gruppér kort

For at oprette en gruppe:

1. Tryk og hold på et tomt område af lærredet.
2. Vælg **Opret gruppe**.
3. Træk i gruppens kanter for at ændre dens størrelse.

For at tilføje kort til en gruppe kan du trække dem ind i gruppens område. Når du flytter gruppen, flyttes kortene inde i den også.

For at omdøbe en gruppe kan du dobbelttryk på dens navn. Tastaturet åbnes. Skriv det nye navn.

### Lærredskontroller

Kontroller i højre side af lærredet ændrer visningen og dine indstillinger.

- **Zoom ind** og **Zoom ud** ændrer zoomniveauet.
- **Nulstil zoom** vender lærredet tilbage til standardzoomniveauet.
- **Zoom til at passe** viser alle kort på lærredet.
- **Fortryd** og **Annuller fortrydelse** fortryder eller gentager din seneste ændring.
- **Lærredsindstillinger** har mulighederne **Fastgør til gitter**, **Fastgør til objekter** og **Skrivebeskyttet**.

## Avancerede tips

Vi har lavet nogle korte videoer, der demonstrerer nogle avancerede anvendelser af Lærred.

Du kan [se alle 72 tips her](https://obsidian.md/canvas#protips). Tipvideoerne er kun synlige på desktop.
