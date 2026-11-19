---
permalink: plugins/canvas
mobile: true
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

Om slechts een deel van een notitie in een kaart te tonen, klik je met de rechtermuisknop op de kaart en selecteer je **Versmal naar de kop...** of **Versmal naar blok...**. Kies vervolgens de kop of het blok.

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

Om de webpagina in je browser te openen, druk je op `Ctrl` (of `Cmd` op macOS) en selecteer je het kaartlabel. Of klik met de rechtermuisknop op de kaart en selecteer **In browser openen**.

Klik met de rechtermuisknop op een webpaginakaart voor meer opties.

- **Kopieer URL** kopieert het adres van de webpagina.
- **URL wijzigen...** wijzigt het adres dat de kaart toont.
- **Pagina opnieuw laden** laadt de webpagina opnieuw.

### Kaarten toevoegen vanuit bases

Om een [[Introductie tot Bases|basis]] in je doek te tonen, sleep je het basisbestand vanuit de Bestandsverkenner naar het doek. De kaart toont de basis.

Een basiskaart toont de standaardweergave van de basis. Om een andere weergave te tonen:

1. Klik met de rechtermuisknop op de kaart en selecteer **Weergave vastmaken...**.
2. Selecteer de weergave die je wilt.

Om terug te gaan naar de standaardweergave, selecteer je opnieuw **Weergave vastmaken...** en selecteer je vervolgens **Standaardweergave tonen**.

### Kaarten toevoegen vanuit mappen

Sleep een map vanuit de [[Bestandsverkenner]] om alle bestanden in die map aan het doek toe te voegen.

### Een kaart bewerken

Dubbelklik op een tekst- of notitiekaart om deze te bewerken. Selecteer ergens buiten de kaart om het bewerken te stoppen. Je kunt ook op `Escape` drukken om het bewerken van een kaart te stoppen.

Je kunt een kaart ook bewerken door er met de rechtermuisknop op te klikken en **Bewerken** te selecteren. Of selecteer de kaart en selecteer vervolgens **Bewerken** ![[lucide-square-pen.svg#icon]] in de selectiebesturing.

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

### Kaarten uitlijnen en ordenen

Om meerdere kaarten uit te lijnen, selecteer je twee of meer kaarten. Selecteer in de selectiebesturing **Uitlijnen** en kies vervolgens een optie.

- **Links uitlijnen**, **Centraal uitlijnen** en **Rechts uitlijnen** lijnen de kaarten uit op een verticale lijn.
- **Bovenaan uitlijnen**, **In het midden uitlijnen** en **Onderaan uitlijnen** lijnen de kaarten uit op een horizontale lijn.
- **In een rij opstellen**, **In een kolom opstellen** en **In een raster opstellen** verplaatsen de kaarten naar die lay-out.
- **Verdeel horizontale ruimte** en **Verdeel verticale ruimte** verdelen de ruimte tussen de kaarten gelijkmatig.
- **Horizontaal uitvullen** en **Verticaal uitvullen** wijzigen de grootte van elke kaart zodat deze de volledige breedte of hoogte van de selectie beslaat.

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

Als twee verbonden kaarten ver uit elkaar liggen, kun je naar de kaart aan het andere uiteinde van de verbinding springen. Klik met de rechtermuisknop op de lijn dicht bij een uiteinde en selecteer vervolgens **Connectie volgen**. Het doek verplaatst zich naar de kaart aan het tegenoverliggende uiteinde.

### Een label aan een verbinding toevoegen

Je kunt een label aan een lijn toevoegen om de relatie tussen twee kaarten te beschrijven.

Om een verbinding te labelen:

1. Dubbelklik op de lijn.
2. Voer het label in en druk vervolgens op `Escape` of selecteer ergens op het doek.

Je kunt een verbinding ook labelen door deze te selecteren en vervolgens **Label aanpassen** te selecteren in de selectiebesturing.

Om een verbindingslabel te bewerken, dubbelklik je op de lijn, of klik je met de rechtermuisknop op de lijn en selecteer je **Label aanpassen**.

Om een label te verwijderen, selecteer je de verbinding en selecteer je vervolgens **Label verwijderen** in de selectiebesturing.

### De richting van een verbinding wijzigen

Standaard heeft een verbinding een pijl aan het uiteinde dat naar de tweede kaart wijst. Om dit te wijzigen:

1. Selecteer de verbinding.
2. Selecteer in de selectiebesturing **Lijnrichting**.
3. Kies **Geen richting**, **In één richting** of **In twee richtingen**.

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

### Een achtergrond aan een groep toevoegen

Je kunt een afbeelding achter de kaarten in een groep tonen.

1. Selecteer de groep.
2. Selecteer in de selectiebesturing **Achtergrond instellen**.
3. Kies een afbeelding uit je kluis.

Om de achtergrond te wijzigen, selecteer je de groep en selecteer je vervolgens **Achtergrond wijzigen**.

- **Achtergrond vervangen** kiest een andere afbeelding.
- **Achtergrond verwijderen** verwijdert de afbeelding.
- **Omslag** laat de afbeelding de groep vullen.
- **Verhouding behouden** behoudt de verhoudingen van de afbeelding.
- **Herhalen** tegelt de afbeelding over de groep.

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


### Naar een groep springen

Om direct naar een groep in een groot doek te gaan, open je het opdrachtenpalet en selecteer je **Canvas: Naar groep springen**. Een lijst van de groepen in je doek verschijnt. Selecteer de groep waarnaar je wilt gaan, en het doek beweegt om deze te centreren.

## Doekinstellingen

Selecteer **Doekinstellingen** ![[lucide-settings.svg#icon]] boven de doekbesturing om het gedrag van je doek te wijzigen.

- **In raster laten springen** laat kaarten in het achtergrondraster springen wanneer je ze verplaatst en van grootte verandert.
- **Naar objecten laten springen** laat kaarten naar kaarten in de buurt springen wanneer je ze verplaatst en van grootte verandert.
- **Alleen-lezen** voorkomt wijzigingen aan het doek.

## Een doek exporteren als afbeelding

Je kunt een doek exporteren als een PNG-afbeelding op desktop. Het exporteren van een afbeelding is niet beschikbaar in de Obsidian-app op mobiel.

1. Open het doek dat je wilt exporteren.
2. Open het opdrachtenpalet en selecteer **Canvas: Exporteer als afbeelding**.
3. Kies je instellingen.
    - **Weergave** stelt in wat er geëxporteerd wordt. Selecteer **Volledige doek** voor het hele doek, of **Allen huidige weergave** voor het deel dat je nu kunt zien.
    - **Inzoomen** stelt de beeldkwaliteit in. Een hogere zoom maakt een grotere, scherpere afbeelding. Het dialoogvenster toont de geschatte afbeeldingsgrootte.
    - **Logo tonen** voegt een Obsidian-logo toe linksonder. Dit staat standaard aan.
    - **Privacyweergave** verbergt alle tekst op je doek. Dit staat standaard uit.
4. Selecteer **Opslaan**.
5. Kies waar je het bestand wilt opslaan. De bestandsnaam is standaard de naam van je doek, met de extensie `.png`.

Je kunt een leeg doek niet exporteren.

## Ongedaan maken en opnieuw

Om je laatste wijziging ongedaan te maken, selecteer je **Ongedaan maken** in de doekbesturing aan de rechterkant van het doek. Of druk op `Ctrl+Z` (Windows en Linux) of `Command+Z` (macOS).

Om een wijziging opnieuw uit te voeren, selecteer je **Opnieuw**. Of druk op `Ctrl+Y` of `Ctrl+Shift+Z` (Windows en Linux), of `Command+Y` of `Command+Shift+Z` (macOS).

## Doekondersteuning

Op desktop selecteer je **Doekondersteuning** ![[lucide-help-circle.svg#icon]] onder de doekbesturing om een lijst te zien van de sneltoetsen voor draaien, zoomen, selecteren en verplaatsen van kaarten.

## Een doek insluiten

Je kunt een doek in een notitie insluiten met de standaard insluitingssyntaxis. Zie voor meer informatie [[Bestanden insluiten#Een doek in een notitie insluiten|Een doek in een notitie insluiten]].

## Canvas op mobiel gebruiken

Wanneer je een doek opent op een telefoon of tablet, toont Obsidian drie hints.

- **Slepen om te draaien**
- **Gebruik twee vingers om te zoomen**
- **Raak aan en houd vast om toe te voegen / te bewegen / te selecteren**

### Het doekmenu openen

Raak een leeg gebied van het doek aan en houd vast. Het menu bevat de volgende items.

- **Kaart toevoegen** voegt een tekstkaart toe.
- **Notitie uit de kluis toevoegen** voegt een notitie uit je kluis toe.
- **Media uit de kluis toevoegen** voegt media uit je kluis toe.
- **Webpagina toevoegen** sluit een webpagina in.
- **Groep aanmaken** maakt een lege groep aan.
- **In raster laten springen**, **Naar objecten laten springen** en **Alleen-lezen** zijn dezelfde opties als in **Doekinstellingen**.

### Kaarten toevoegen

Je kunt kaarten toevoegen vanuit het doekmenu. Je kunt ook een pictogram onderaan het doek selecteren.

- Het blanco bestandspictogram voegt een tekstkaart toe.
- Het documentpictogram voegt een notitie uit je kluis toe.
- Het afbeeldingspictogram voegt media uit je kluis toe.

### Werken met een geselecteerde kaart

Tik op een kaart om deze te selecteren. Er verschijnt een werkbalk boven de kaart.

- **Verwijderen** ![[lucide-trash-2.svg#icon]] verwijdert de kaart.
- **Kleur instellen** ![[lucide-palette.svg#icon]] wijzigt de kleur van de kaart.
- **Naar selectie zoomen** zoomt het doek naar de kaart.
- **Bewerken** ![[lucide-square-pen.svg#icon]] bewerkt de kaart.

### Een kaart verplaatsen

1. Tik op de kaart om deze te selecteren.
2. Raak de geselecteerde kaart aan, houd vast en sleep deze naar een nieuwe positie.

### Een kaart in grootte wijzigen

1. Tik op de kaart om deze te selecteren.
2. Sleep de zijkanten van de kaart om deze groter of kleiner te maken.

### Het kaartmenu openen

Raak een kaart aan en houd vast. Het menu bevat de volgende items.

- **Naar selectie zoomen** zoomt het doek naar de kaart.
- **Bewerken** bewerkt de kaart.
- **Naar bestand omzetten...** zet een tekstkaart om naar een notitie.
- **Dupliceren** maakt een kopie van de kaart.
- **Verwijderen** verwijdert de kaart.

### Een kaart bewerken

Om een tekstkaart of notitiekaart te bewerken, gebruik je een van beide methoden.

- Tik op de kaart om deze te selecteren en tik er vervolgens dubbel op. Het toetsenbord opent.
- Tik op de kaart om deze te selecteren en selecteer vervolgens **Bewerken** ![[lucide-square-pen.svg#icon]] in de werkbalk boven de kaart.

### Een verbinding labelen

1. Tik op de lijn om deze te selecteren.
2. Selecteer in de werkbalk **Label aanpassen** ![[lucide-square-pen.svg#icon]]. Het toetsenbord opent.
3. Voer het label in.

Om een label te verwijderen, tik je op de lijn en selecteer je vervolgens **Label verwijderen** in de werkbalk.

### De richting van een verbinding wijzigen

1. Tik op de lijn om deze te selecteren.
2. Selecteer in de werkbalk **Lijnrichting**.
3. Kies **Geen richting**, **In één richting** of **In twee richtingen**.

### Het lijnmenu openen

Raak een lijn aan die twee kaarten verbindt en houd vast. Het menu bevat de volgende items.

- **Label aanpassen** voegt een label toe aan de lijn of wijzigt het.
- **Connectie volgen** verplaatst het doek naar de kaart aan het tegenoverliggende uiteinde van de lijn.
- **Verwijderen** verwijdert de verbinding.

### Kaarten verbinden

1. Tik op een kaart om deze te selecteren.
2. Sleep een van de cirkels op de randen naar een andere kaart.

Als je de lijn sleept en loslaat in een leeg gebied, opent een menu met **Kaart toevoegen** en **Notitie uit de kluis toevoegen**. Selecteer er een om een kaart toe te voegen aan het uiteinde van de lijn.

### Kaarten loskoppelen

Om een verbinding te verwijderen, gebruik je een van beide methoden.

- Tik op de lijn en selecteer vervolgens **Verwijderen** ![[lucide-trash-2.svg#icon]].
- Sleep het pijluiteinde van de lijn terug naar de kaart waar deze begon. De lijn verdwijnt.

### Kaarten groeperen

Om een groep aan te maken:

1. Raak een leeg gebied van het doek aan en houd vast.
2. Selecteer **Groep aanmaken**.
3. Sleep de randen van de groep om de grootte te wijzigen.

Om kaarten aan een groep toe te voegen, sleep je ze naar het gebied van de groep. Wanneer je de groep verplaatst, bewegen de kaarten erin mee.

Om een groep te hernoemen, tik je dubbel op de naam. Het toetsenbord opent. Voer de nieuwe naam in.

### Doekbesturing

Besturingselementen aan de rechterkant van het doek wijzigen de weergave en je instellingen.

- **Inzoomen** en **Uitzoomen** wijzigen het zoomniveau.
- **Standaardzoomniveau** zet het doek terug naar het standaard zoomniveau.
- **Passend zoomen** toont elke kaart in het doek.
- **Ongedaan maken** en **Opnieuw** draaien je laatste wijziging terug of herhalen deze.
- **Doekinstellingen** bevat de opties **In raster laten springen**, **Naar objecten laten springen** en **Alleen-lezen**.

## Geavanceerde tips

We hebben enkele korte video's gemaakt om enkele geavanceerde toepassingen van Canvas te demonstreren.

Je kunt [hier alle 72 tips bekijken](https://obsidian.md/canvas#protips). De tipvideo's zijn alleen zichtbaar op desktop.
