---
permalink: plugins/canvas
mobile: true
---
Canvas er en [[Kjerneutvidelser|kjerneutvidelse]] for visuell notatskriving. Den gir deg uendelig plass til å legge ut notater og koble dem til andre notater, vedlegg og nettsider.

Å organisere notatene dine i et 2D-rom hjelper deg med å se og forstå sammenhengene mellom dem. Koble notater med linjer og grupper relaterte notater sammen.

Obsidian lagrer Canvas-filer som `.canvas`-filer ved bruk av det åpne [JSON Canvas](https://jsoncanvas.org/)-formatet.

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

Du kan legge til kort som bare inneholder tekst og ikke refererer til en fil. Du kan bruke Markdown, lenker og kodeblokker på samme måte som i et notat.

For å legge til et nytt tekstkort i Canvas:

- Velg eller dra det tomme filikonet nederst på Canvas.

Du kan også legge til tekstkort ved å dobbeltklikke på Canvas.

For å konvertere et tekstkort til en fil:

1. Høyreklikk på tekstkortet og velg **Konverter til fil...**.
2. Skriv inn notatnavnet og velg **Lagre**.

> [!note] Tekstkort og tilbakelenker
> Tekstkort vises ikke i [[Lenker tilbake]]. For å få dem til å vises må du konvertere dem til en fil.

### Legg til kort fra notater

For å legge til et notat fra hvelvet ditt i Canvas:

1. Velg eller dra dokumentikonet nederst på Canvas.
2. Velg notatet du vil legge til.

Du kan også legge til notater fra Canvas-kontekstmenyen:

1. Høyreklikk på Canvas og velg **Legg til notat fra vault**.
2. Velg notatet du vil legge til.

Du kan også dra notater fra [[Filutforsker|filutforskeren]] inn i Canvas.

For å bare vise en del av et notat i et kort, høyreklikk på kortet og velg **Avgrens til overskrift...** eller **Avgrens til blokk...**. Velg deretter overskriften eller blokken.

### Legg til kort fra media

For å legge til media fra hvelvet ditt i Canvas:

1. Velg eller dra bildefilikonet nederst på Canvas.
2. Velg mediefilen du vil legge til.

Du kan også legge til media fra Canvas-kontekstmenyen:

1. Høyreklikk på Canvas og velg **Legg till media fra vault**.
2. Velg mediefilen du vil legge til.

Du kan også dra mediefiler fra [[Filutforsker|filutforskeren]] inn i Canvas.

### Legg til kort fra nettsider

For å bygge inn en nettside i Canvas:

1. Høyreklikk på Canvas og velg **Legg till hjemmeside**.
2. Skriv inn URL-en til nettsiden og velg **Lagre**.

Du kan også velge en URL i nettleseren din og deretter dra den inn i Canvas for å bygge den inn i et kort.

For å åpne nettsiden i nettleseren, trykk `Ctrl` (eller `Cmd` på macOS) og velg kortetiketten. Eller høyreklikk på kortet og velg **Åpne ekstern lenke**.

Høyreklikk på et nettsidekort for flere alternativer.

- **Kopier URL** kopierer adressen til nettsiden.
- **Endre URL...** endrer adressen kortet viser.
- **Last inn siden på nytt** laster nettsiden på nytt.

### Legg til kort fra baser

For å vise en [[Introduksjon til Bases|base]] i Canvas, dra basefilen fra filutforskeren inn i Canvas. Kortet viser basen.

Et basekort viser standardvisningen til basen. For å vise en annen visning:

1. Høyreklikk på kortet og velg **Fest visning...**.
2. Velg visningen du ønsker.

For å gå tilbake til standardvisningen, velg **Fest visning...** igjen, og velg deretter **Vis standardvisning**.

### Legg til kort fra mapper

Dra en mappe fra [[Filutforsker|filutforskeren]] for å legge til alle filer i den mappen i Canvas.

### Rediger et kort

Dobbeltklikk på et tekst- eller notatkort for å begynne å redigere det. Velg hvor som helst utenfor kortet for å slutte å redigere det. Du kan også trykke `Escape` for å slutte å redigere et kort.

Du kan også redigere et kort ved å høyreklikke på det og velge **Rediger**. Eller velg kortet og deretter **Rediger** ![[lucide-square-pen.svg#icon]] i valgkontrollene.

### Slett et kort

Fjern valgte kort ved å høyreklikke på et av dem, og deretter velge **Fjern**. Eller trykk `Backspace` (eller `Delete` på macOS).

Du kan også velge **Fjern** ![[lucide-trash-2.svg#icon]] i valgkontrollene over utvalget ditt.

### Bytt kort

Du kan bytte et notat- eller mediakort med et annet kort av samme type.

For å bytte et notatkort:

1. Høyreklikk på kortet du vil erstatte.
2. Velg **Bytt fil**.
3. Velg notatet du vil erstatte med.

## Velg kort

Velg individuelle kort, eller dra et utvalg rundt flere kort.

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

### Juster og ordne kort

For å stille opp flere kort, velg to eller flere kort. I valgkontrollene, velg **Juster**, og velg deretter et alternativ.

- **Align venstre**, **Align senter** og **Align høyre** stiller kortene opp på en vertikal linje.
- **Align opp**, **Align midt** og **Align nede** stiller kortene opp på en horisontal linje.
- **Ordne i en rad**, **Ordne i en kolonne** og **Ordne i et rutenett** flytter kortene til det oppsettet.
- **Fordel horisontalt** og **Fordel vertikalt** fordeler kortene jevnt.
- **Blokkjuster horisontalt** og **Blokkjuster vertikalt** endrer størrelsen på hvert kort slik at det fyller hele bredden eller høyden av utvalget.

## Koble kort

Tegn linjer mellom kort for å vise relasjoner. Legg til farger og etiketter for å beskrive hvordan de forholder seg til hverandre.

### Koble to kort

For å koble to kort med en rettet linje:

1. Hold musepekeren over en av kantene på et kort til du ser en fylt sirkel.
2. Dra sirkelen til kanten av et annet kort for å koble dem.

> [!tip]- Opprett et kort fra en ny forbindelse
> Hvis du drar linjen uten å koble den til et annet kort, kan du opprette et nytt kort i den andre enden.

### Koble fra to kort

For å fjerne forbindelsen mellom to kort:

1. Hold musepekeren over en forbindelseslinje til to små sirkler vises på linjen.
2. Dra en av sirklene bort fra kortet uten å koble den til et annet.

Du kan også koble fra to kort ved å høyreklikke på linjen mellom dem, og deretter velge **Fjern**. Eller velg linjen og trykk deretter `Backspace` (eller `Delete` på macOS).

### Koble et kort til et annet kort

For å flytte en av endene av en forbindelseslinje:

1. Hold musepekeren over en forbindelseslinje til to små sirkler vises på linjen.
2. Dra sirkelen til et annet kort for å koble den til på nytt.

### Naviger en forbindelse

Hvis to tilkoblede kort er langt fra hverandre, kan du hoppe til kortet i den andre enden av forbindelsen. Høyreklikk på linjen nær den ene enden, og velg deretter **Følg forbindelse**. Canvas flytter seg til kortet i den motsatte enden.

### Legg til en etikett på en forbindelse

Du kan legge til en etikett på en linje for å beskrive forholdet mellom to kort.

For å sette etikett på en forbindelse:

1. Dobbeltklikk på linjen.
2. Skriv inn etiketten og trykk deretter `Escape` eller velg hvor som helst på Canvas.

Du kan også sette etikett på en forbindelse ved å velge den og deretter velge **Rediger label** fra valgkontrollene.

For å redigere en forbindelsesetikett, dobbeltklikk på linjen, eller høyreklikk på linjen og velg **Rediger label**.

For å fjerne en etikett, velg forbindelsen og velg deretter **Fjern label** i valgkontrollene.

### Endre retningen på en forbindelse

Som standard har en forbindelse en pil i enden som peker mot det andre kortet. For å endre dette:

1. Velg forbindelsen.
2. I valgkontrollene, velg **Linjeretning**.
3. Velg **Uten retning**, **Énveis** eller **Toveis**.

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

### Legg til en bakgrunn på en gruppe

Du kan vise et bilde bak kortene i en gruppe.

1. Velg gruppen.
2. I valgkontrollene, velg **Angi bakgrunn**.
3. Velg et bilde fra hvelvet ditt.

For å endre bakgrunnen, velg gruppen og velg deretter **Rediger bakgrunn**.

- **Erstatt bakgrunn** velger et annet bilde.
- **Fjern bakgrunn** fjerner bildet.
- **Dekk** gjør at bildet fyller gruppen.
- **Behold størrelsesforhold** beholder proporsjonene til bildet.
- **Gjenta** legger bildet side ved side over gruppen.

## Naviger i Canvas

Bruk panorering og zooming for å bevege deg over Canvas.

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

For å zoome Canvas slik at alle valgte elementer er synlige, høyreklikk på et valgt kort og velg **Zoom til markering**. Eller trykk `Shift+2`.

#### Tilbakestill zoom

For å endre zoomnivået tilbake til standard, velg **Tilbakestill zoom** i zoom-kontrollene i øvre høyre hjørne.


### Hopp til en gruppe

For å flytte rett til en gruppe i en stor Canvas, åpne kommandopaletten og velg **Canvas: Hopp til gruppe**. En liste over gruppene i Canvas vises. Velg gruppen du vil gå til, og Canvas flytter seg for å sentrere på den.

## Canvas-innstillinger

Velg **Canvas-innstillinger** ![[lucide-settings.svg#icon]] over Canvas-kontrollene for å endre hvordan Canvas oppfører seg.

- **Fest til rutenett** fester kort til bakgrunnsrutenettet når du flytter og endrer størrelse på dem.
- **Fest til objekter** fester kort til nærliggende kort når du flytter og endrer størrelse på dem.
- **Skrivebeskyttet** forhindrer endringer i Canvas.

## Eksporter en Canvas som bilde

Du kan eksportere en Canvas som et PNG-bilde på skrivebord. Eksportering av bilde er ikke tilgjengelig i Obsidian-appen på mobil.

1. Åpne Canvas-en du vil eksportere.
2. Åpne kommandopaletten og velg **Canvas: Eksporter som bilde**.
3. Velg innstillingene dine.
    - **Visningsområde** angir hva som skal eksporteres. Velg **Hele Canvas** for hele Canvas, eller **Kun visningsområde** for den delen du kan se nå.
    - **Zoom** angir bildekvaliteten. Høyere zoom gir et større, skarpere bilde. Dialogboksen viser den estimerte bildestørrelsen.
    - **Vis logo** legger til en Obsidian-logo nederst til venstre. Dette er på som standard.
    - **Personvernmodus** skjuler all tekst på Canvas. Dette er av som standard.
4. Velg **Lagre**.
5. Velg hvor filen skal lagres. Filnavnet er som standard navnet på Canvas-en din, med filtypen `.png`.

Du kan ikke eksportere en tom Canvas.

## Angre og gjør om

For å angre den siste endringen, velg **Angre** i Canvas-kontrollene på høyre side av Canvas. Eller trykk `Ctrl+Z` (Windows og Linux) eller `Command+Z` (macOS).

For å gjøre om en endring, velg **Gjør om**. Eller trykk `Ctrl+Y` eller `Ctrl+Shift+Z` (Windows og Linux), eller `Command+Y` eller `Command+Shift+Z` (macOS).

## Canvas-hjelp

På skrivebord, velg **Canvas-hjelp** ![[lucide-help-circle.svg#icon]] under Canvas-kontrollene for å se en liste over hurtigtaster for panorering, zooming, valg og flytting av kort.

## Bygg inn en Canvas

Du kan bygge inn en Canvas i et notat ved hjelp av standard innebyggingssyntaks. For mer informasjon, se [[Bygge inn filer#Embed a canvas in a note|Bygg inn en Canvas i et notat]].

## Bruke Canvas på mobil

Når du åpner en Canvas på en telefon eller nettbrett, viser Obsidian tre hint.

- **Dra for å panorere**
- **Knip for å zoome**
- **Trykk og hold for å legge til / flytte / velge**

### Åpne Canvas-menyen

Trykk og hold på et tomt område av Canvas. Menyen har disse elementene.

- **Legg til kort** legger til et tekstkort.
- **Legg til notat fra vault** legger til et notat fra hvelvet ditt.
- **Legg till media fra vault** legger til media fra hvelvet ditt.
- **Legg till hjemmeside** bygger inn en nettside.
- **Opprett gruppe** oppretter en tom gruppe.
- **Fest til rutenett**, **Fest til objekter** og **Skrivebeskyttet** er de samme alternativene som i **Canvas-innstillinger**.

### Legg til kort

Du kan legge til kort fra Canvas-menyen. Du kan også velge et ikon nederst på Canvas.

- Det tomme filikonet legger til et tekstkort.
- Dokumentikonet legger til et notat fra hvelvet ditt.
- Bildeikonet legger til media fra hvelvet ditt.

### Arbeid med et valgt kort

Trykk på et kort for å velge det. En verktøylinje vises over kortet.

- **Fjern** ![[lucide-trash-2.svg#icon]] sletter kortet.
- **Velg farge** ![[lucide-palette.svg#icon]] endrer fargen på kortet.
- **Zoom til markering** zoomer Canvas til kortet.
- **Rediger** ![[lucide-square-pen.svg#icon]] redigerer kortet.

### Flytt et kort

1. Trykk på kortet for å velge det.
2. Trykk og hold det valgte kortet, og dra det til en ny posisjon.

### Endre størrelse på et kort

1. Trykk på kortet for å velge det.
2. Dra sidene av kortet for å gjøre det større eller mindre.

### Åpne kortmenyen

Trykk og hold på et kort. Menyen har disse elementene.

- **Zoom til markering** zoomer Canvas til kortet.
- **Rediger** redigerer kortet.
- **Konverter til fil...** konverterer et tekstkort til et notat.
- **Dupliser** lager en kopi av kortet.
- **Fjern** sletter kortet.

### Rediger et kort

For å redigere et tekstkort eller et notatkort, bruk en av metodene.

- Trykk på kortet for å velge det, og dobbelttrykk deretter på det. Tastaturet åpnes.
- Trykk på kortet for å velge det, og velg deretter **Rediger** ![[lucide-square-pen.svg#icon]] i verktøylinjen over kortet.

### Sett etikett på en forbindelse

1. Trykk på linjen for å velge den.
2. I verktøylinjen, velg **Rediger label** ![[lucide-square-pen.svg#icon]]. Tastaturet åpnes.
3. Skriv inn etiketten.

For å fjerne en etikett, trykk på linjen og velg deretter **Fjern label** i verktøylinjen.

### Endre retningen på en forbindelse

1. Trykk på linjen for å velge den.
2. I verktøylinjen, velg **Linjeretning**.
3. Velg **Uten retning**, **Énveis** eller **Toveis**.

### Åpne linjemenyen

Trykk og hold på en linje som forbinder to kort. Menyen har disse elementene.

- **Rediger label** legger til eller endrer etiketten på linjen.
- **Følg forbindelse** flytter Canvas til kortet i den motsatte enden av linjen.
- **Fjern** sletter forbindelsen.

### Koble kort

1. Trykk på et kort for å velge det.
2. Dra en av sirklene på kantene til et annet kort.

Hvis du drar linjen og slipper den i et tomt område, åpnes en meny med **Legg til kort** og **Legg til notat fra vault**. Velg et alternativ for å legge til et kort i enden av linjen.

### Koble fra kort

For å fjerne en forbindelse, bruk en av metodene.

- Trykk på linjen, og velg deretter **Fjern** ![[lucide-trash-2.svg#icon]].
- Dra pilenden av linjen tilbake til kortet den startet fra. Linjen forsvinner.

### Grupper kort

For å opprette en gruppe:

1. Trykk og hold på et tomt område av Canvas.
2. Velg **Opprett gruppe**.
3. Dra kantene av gruppen for å endre størrelsen.

For å legge til kort i en gruppe, dra dem inn i gruppens område. Når du flytter gruppen, flyttes kortene inni den også.

For å gi en gruppe nytt navn, dobbelttrykk på navnet. Tastaturet åpnes. Skriv inn det nye navnet.

### Canvas-kontroller

Kontroller på høyre side av Canvas endrer visningen og innstillingene dine.

- **Zoom inn** og **Zoom ut** endrer zoomnivået.
- **Tilbakestill zoom** returnerer Canvas til standard zoomnivå.
- **Zoom for å tilpasse** viser alle kort i Canvas.
- **Angre** og **Gjør om** reverserer eller gjentar den siste endringen.
- **Canvas-innstillinger** har alternativene **Fest til rutenett**, **Fest til objekter** og **Skrivebeskyttet**.

## Avanserte tips

Vi har laget noen korte videoer for å demonstrere noen avanserte bruksområder for Canvas.

Du kan [se alle 72 tipsene her](https://obsidian.md/canvas#protips). Tipsvideoene er kun synlige på skrivebord.
