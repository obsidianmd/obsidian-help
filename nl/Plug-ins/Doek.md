---
permalink: plugins/canvas
---
Canvas is een [[Ingebouwde plug-ins|kernplug-in]] voor visuele notities. Het biedt je oneindige ruimte om notities uit te leggen en te verbinden met andere notities, bijlagen en webpagina's.

Door je notities in een 2D-ruimte te ordenen, kun je de verbanden ertussen zien en begrijpen. Verbind notities met lijnen en groepeer gerelateerde notities samen.

Obsidian slaat doeken op als `.canvas`-bestanden met het open [JSON Canvas](https://jsoncanvas.org/)-formaat.

## Een nieuw doek aanmaken

Om Canvas te gaan gebruiken, moet je eerst een bestand aanmaken om je doek in op te slaan. Je kunt een nieuw doek aanmaken met de volgende methoden.

**Opdrachtenpalet:**

1. Open het [[Opdrachtenpaneel]].
2. Selecteer **Canvas: Nieuw doek aanmaken** om een doek aan te maken in dezelfde map als het actieve bestand.

**Bestandsverkenner:**

- Klik in de [[Bestandsverkenner]] met de rechtermuisknop op de map waarin je het doek wilt aanmaken.
- Selecteer **Nieuw doek**.

**Werkbalk:**

- Selecteer in het verticale werkbalkmenu **Nieuw doek aanmaken** ![[lucide-layout-dashboard.svg#icon]] om een doek aan te maken in dezelfde map als het actieve bestand.

> [!note] De .canvas-extensie
> Obsidian slaat je doekgegevens op als `.canvas`-bestanden met een open bestandsformaat genaamd [JSON Canvas](https://jsoncanvas.org/).

## Kaarten toevoegen

Je kunt bestanden naar je doek slepen vanuit Obsidian of vanuit andere applicaties. Bijvoorbeeld Markdown-bestanden, afbeeldingen, audio, PDF's of zelfs niet-herkende bestandstypen.

### Tekstkaarten toevoegen

Je kunt kaarten met alleen tekst toevoegen die niet naar een bestand verwijzen. Je kunt Markdown, koppelingen en codeblokken op dezelfde manier gebruiken als in een notitie.

Om een nieuwe tekstkaart aan je doek toe te voegen:

- Selecteer of sleep het blanco bestandspictogram onderaan het doek.

Je kunt ook tekstkaarten toevoegen door te dubbelklikken op het doek.

Om een tekstkaart naar een bestand om te zetten:

1. Klik met de rechtermuisknop op de tekstkaart en selecteer **Naar bestand omzetten...**.
2. Voer de notitienaam in en selecteer **Opslaan**.

> [!note] Kaarten met alleen tekst en terugverwijzingen
> Kaarten met alleen tekst verschijnen niet in [[Terugverwijzing]]. Om ze te laten verschijnen, moet je ze naar een bestand omzetten.

### Kaarten toevoegen vanuit notities

Om een notitie uit je kluis aan je doek toe te voegen:

1. Selecteer of sleep het documentpictogram onderaan het doek.
2. Selecteer de notitie die je wilt toevoegen.

Je kunt ook notities toevoegen vanuit het contextmenu van het doek:

1. Klik met de rechtermuisknop op het doek en selecteer **Notitie uit de kluis toevoegen**.
2. Selecteer de notitie die je wilt toevoegen.

Je kunt ook notities vanuit de [[Bestandsverkenner]] naar het doek slepen.

### Kaarten toevoegen vanuit media

Om media uit je kluis aan je doek toe te voegen:

1. Selecteer of sleep het afbeeldingsbestandspictogram onderaan het doek.
2. Selecteer het mediabestand dat je wilt toevoegen.

Je kunt ook media toevoegen vanuit het contextmenu van het doek:

1. Klik met de rechtermuisknop op het doek en selecteer **Media uit de kluis toevoegen**.
2. Selecteer het mediabestand dat je wilt toevoegen.

Je kunt ook mediabestanden vanuit de [[Bestandsverkenner]] naar het doek slepen.

### Kaarten toevoegen vanuit webpagina's

Om een webpagina in je doek in te sluiten:

1. Klik met de rechtermuisknop op het doek en selecteer **Webpagina toevoegen**.
2. Voer de URL van de webpagina in en selecteer **Opslaan**.

Je kunt ook een URL in je browser selecteren en vervolgens naar het doek slepen om het in een kaart in te sluiten.

Om de webpagina in je browser te openen, druk je op `Ctrl` (of `Cmd` op macOS) en selecteer je het kaartlabel. Of klik met de rechtermuisknop op de kaart en selecteer **Openen in browser**.

### Kaarten toevoegen vanuit mappen

Sleep een map vanuit de [[Bestandsverkenner]] om alle bestanden in die map aan het doek toe te voegen.

### Een kaart bewerken

Dubbelklik op een tekst- of notitiekaart om deze te bewerken. Selecteer ergens buiten de kaart om het bewerken te stoppen. Je kunt ook op `Escape` drukken om het bewerken van een kaart te stoppen.

Je kunt een kaart ook bewerken door er met de rechtermuisknop op te klikken en **Bewerken** te selecteren.

### Een kaart verwijderen

Verwijder geselecteerde kaarten door met de rechtermuisknop op een ervan te klikken en vervolgens **Verwijderen** te selecteren. Of druk op `Backspace` (of `Delete` op macOS).

Je kunt ook **Verwijderen** ![[lucide-trash-2.svg#icon]] selecteren in de selectiebesturing boven je selectie.

### Kaarten wisselen

Je kunt een notitie- of mediakaart verwisselen voor een andere kaart van hetzelfde type.

Om een notitiekaart te wisselen:

1. Klik met de rechtermuisknop op de kaart die je wilt vervangen.
2. Selecteer **Bestand wisselen**.
3. Selecteer de notitie waarmee je wilt vervangen.

## Kaarten selecteren

Selecteer individuele kaarten, of sleep een selectie om meerdere kaarten heen.

Je kunt ook kaarten toevoegen aan of verwijderen uit een bestaande selectie door `Shift` ingedrukt te houden en ze te selecteren.

Druk op `Ctrl+a` (of `Cmd+a` op macOS) om alle kaarten op het doek te selecteren.

Om de inhoud van een kaart te scrollen, moet je deze eerst selecteren.

### Kaarten ordenen

Sleep een geselecteerde kaart om deze te verplaatsen.

Druk op `Alt` (of `Option` op macOS) en sleep om de selectie te dupliceren.

Je kunt `Shift` ingedrukt houden tijdens het slepen om alleen in één richting te bewegen.

Druk op `Space` tijdens het verplaatsen van een selectie om uitlijning uit te schakelen.

Het selecteren van een kaart verplaatst deze naar de voorgrond.

### Een kaart in grootte wijzigen

Sleep een van de randen van een kaart om de grootte te wijzigen.

Je kunt `Space` ingedrukt houden tijdens het wijzigen van de grootte om uitlijning uit te schakelen.

Om de beeldverhouding te behouden tijdens het wijzigen van de grootte, houd je `Shift` ingedrukt.

## Kaarten verbinden

Teken lijnen tussen kaarten om relaties te tonen. Voeg kleuren en labels toe om te beschrijven hoe ze met elkaar samenhangen.

### Twee kaarten verbinden

Om twee kaarten met een gerichte lijn te verbinden:

1. Beweeg de cursor over een van de randen van een kaart totdat je een gevulde cirkel ziet.
2. Sleep de cirkel naar de rand van een andere kaart om ze te verbinden.

> [!tip]- Een kaart aanmaken vanuit een nieuwe verbinding
> Als je de lijn sleept zonder deze aan een andere kaart te verbinden, kun je een nieuwe kaart aan het andere uiteinde aanmaken.

### Twee kaarten loskoppelen

Om de verbinding tussen twee kaarten te verwijderen:

1. Beweeg de cursor over een verbindingslijn totdat er twee kleine cirkels op de lijn verschijnen.
2. Sleep een van de cirkels weg van de kaart zonder deze aan een andere te verbinden.

Je kunt ook twee kaarten loskoppelen door met de rechtermuisknop op de lijn ertussen te klikken en vervolgens **Verwijderen** te selecteren. Of selecteer de lijn en druk vervolgens op `Backspace` (of `Delete` op macOS).

### Een kaart met een andere kaart verbinden

Om een van de uiteinden van een verbindingslijn te verplaatsen:

1. Beweeg de cursor over een verbindingslijn totdat er twee kleine cirkels op de lijn verschijnen.
2. Sleep de cirkel naar een andere kaart om deze opnieuw te verbinden.

### Een verbinding volgen

Als twee verbonden kaarten ver uit elkaar liggen, kun je naar de bron of het doel van de verbinding navigeren door met de rechtermuisknop op de lijn te klikken en vervolgens **Ga naar doel** of **Ga naar bron** te selecteren.

### Een label aan een verbinding toevoegen

Je kunt een label aan een lijn toevoegen om de relatie tussen twee kaarten te beschrijven.

Om een verbinding te labelen:

1. Dubbelklik op de lijn.
2. Voer het label in en druk vervolgens op `Escape` of selecteer ergens op het doek.

Je kunt een verbinding ook labelen door deze te selecteren en vervolgens **Label aanpassen** te selecteren in de selectiebesturing.

Om een verbindingslabel te bewerken, dubbelklik je op de lijn, of klik je met de rechtermuisknop op de lijn en selecteer je **Label aanpassen**.

### De kleur van een kaart of verbinding wijzigen

1. Selecteer de kaarten of verbindingen die je wilt kleuren.
2. Selecteer in de selectiebesturing **Kleur instellen** ![[lucide-palette.svg#icon]].
3. Selecteer een kleur.

## Kaarten groeperen

### Geselecteerde kaarten groeperen

Om een lege groep aan te maken:

- Klik met de rechtermuisknop op het doek en selecteer **Groep aanmaken**.

Om gerelateerde kaarten te groeperen:

1. Selecteer de kaarten.
2. Klik met de rechtermuisknop op een van de geselecteerde kaarten en selecteer **Groep aanmaken**.

**Groep hernoemen:** Dubbelklik op de naam van de groep om deze te bewerken en druk vervolgens op `Enter` om op te slaan.

## Op het doek navigeren

Gebruik draaien en zoomen om over het doek te bewegen.

### Over het doek draaien

Om het doek verticaal en horizontaal te verplaatsen, ook wel _draaien_ genoemd, kun je een van de volgende methoden gebruiken:

- Druk op `Space` en sleep het doek.
- Sleep het doek met de middelste muisknop.
- Scroll met de muis om verticaal te draaien en houd `Shift` ingedrukt tijdens het scrollen om horizontaal te draaien.

### Op het doek inzoomen

Om op het doek in te zoomen, druk je op `Space` of `Ctrl` (of `Cmd` op macOS) en scroll je met het muiswiel. Of selecteer **Inzoomen** ![[lucide-plus.svg#icon]] en **Uitzoomen** ![[lucide-minus.svg#icon]] in de zoombesturing in de rechterbovenhoek.

#### Passend zoomen

Om het doek te zoomen zodat elk item zichtbaar is, selecteer je **Passend zoomen** ![[lucide-maximize.svg#icon]]. Of gebruik de sneltoets `Shift+1`.

#### Naar selectie zoomen

Om het doek te zoomen zodat alle geselecteerde items zichtbaar zijn, klik je met de rechtermuisknop op een geselecteerde kaart en selecteer je **Naar selectie zoomen**. Of druk op `Shift+2`.

#### Zoom resetten

Om het zoomniveau terug te zetten naar de standaardwaarde, selecteer je **Standaardzoomniveau** in de zoombesturing in de rechterbovenhoek.

## Een doek insluiten

Je kunt een doek in een notitie insluiten met de standaard insluitingssyntaxis. Zie voor meer informatie [[Bestanden insluiten#Een doek in een notitie insluiten|Een doek in een notitie insluiten]].

## Geavanceerde tips

We hebben enkele korte video's gemaakt om enkele geavanceerde toepassingen van Canvas te demonstreren.

Je kunt [hier alle 72 tips bekijken](https://obsidian.md/canvas#protips). De tipvideo's zijn alleen zichtbaar op desktop.
