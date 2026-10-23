---
permalink: plugins/file-explorer
publish: true
mobile: true
description: Bestandsverkenner is een kernplug-in waarmee je bestanden en mappen binnen je kluis kunt beheren.
---
Bestandsverkenner is een [[Ingebouwde plug-ins|kernplug-in]] waarmee je bestanden en mappen in je kluis kunt beheren. Je kunt notities en andere [[Geaccepteerde bestandsformaten]] in je kluis doorbladeren en veel gangbare bestandsbewerkingen uitvoeren:

- Bestanden en mappen aanmaken, verwijderen en hernoemen.
- Bestanden en mappen verplaatsen door te slepen en neer te zetten.
- Het [[#Het contextmenu gebruiken|contextmenu]] gebruiken om alle beschikbare bewerkingen te openen.

> [!tip]- Bestanden slepen en neerzetten
> Je kunt een bestand vanuit de verkenner naar je notitie slepen om er een koppeling naar te maken, of een bestand naar een map in de verkenner slepen om het te kopiëren.

## Een nieuwe notitie aanmaken

Om een nieuwe notitie aan te maken op de standaardlocatie voor nieuwe notities:

1. Selecteer **Nieuwe notitie** ![[lucide-pen-line.svg#icon]] bovenaan de verkenner.
2. Typ de naam van de notitie en druk op `Enter`.

> [!tip]- Standaardlocatie wijzigen
> Je kunt de standaardlocatie voor nieuwe notities wijzigen via **[[Instellingen]] → [[Instellingen#Bestanden & Links|Bestanden & Links]] → [[Instellingen#Standaardlocatie voor nieuwe notitie|Standaardlocatie voor nieuwe notitie]]**.

Om een nieuwe notitie in een specifieke map aan te maken:

1. Klik met de rechtermuisknop op de map en selecteer **Nieuwe notitie**.
2. Typ de naam van de notitie en druk op `Enter`.

## Een nieuwe map aanmaken

Om een nieuwe map in de hoofdmap van je kluis aan te maken:

1. Selecteer **Nieuwe map** ![[lucide-folder-plus.svg#icon]] bovenaan de verkenner.
2. Typ de naam van de map en druk op `Enter`.

Om een submap aan te maken:

1. Klik met de rechtermuisknop op de map waarin je de submap wilt aanmaken en selecteer **Nieuwe map**.
2. Typ de naam van de map en druk op `Enter`.

## Sorteervolgorde aanpassen

Om de sorteervolgorde van je bestanden te wijzigen:

1.  Selecteer **Sorteervolgorde aanpassen** ![[lucide-arrow-up-narrow-wide.svg#icon]] bovenaan de verkenner.
2. Kies hoe je je bestanden wilt sorteren. Je kunt oplopend of aflopend sorteren op bestandsnaam, tijdstip gewijzigd of tijdstip gemaakt.

## Actief bestand automatisch tonen

Wanneer je een notitie opent, kan de verkenner automatisch naar die notitie scrollen en deze markeren in de mappenstructuur. Dit helpt je bij te houden waar je actieve notitie zich in je kluis bevindt.

Om automatisch tonen in of uit te schakelen:

- Selecteer **Actief bestand automatisch tonen** ![[lucide-gallery-vertical.svg#icon]] bovenaan de verkenner.

Wanneer ingeschakeld, zal de verkenner automatisch de actieve notitie volgen en tonen.

## Alle mappen uitvouwen of inklappen

Je kunt alle mappen in de verkenner in één keer uitvouwen of inklappen.

Om alle mappen uit te vouwen:

- Selecteer **Alles uitklappen** ![[lucide-chevrons-up-down.svg#icon]] bovenaan de verkenner.

Om alle mappen in te klappen:

- Selecteer **Alles inklappen** ![[lucide-chevrons-down-up.svg#icon]] bovenaan de verkenner.

## Een bestand of map verwijderen

1. Klik met de rechtermuisknop op het bestand dat je wilt verwijderen en selecteer **Verwijderen**.
2. Als je wordt gevraagd om te bevestigen dat je het bestand wilt verwijderen, selecteer dan **Verwijderen**.

Raadpleeg voor meer informatie [[Notities beheren#Een notitie verwijderen|Een notitie verwijderen]].

## De naam van een bestand of map wijzigen

1. Klik met de rechtermuisknop op het bestand waarvan je de naam wilt wijzigen en selecteer **Naam wijzigen**.
2. Typ de nieuwe naam en druk op `Enter`.

Raadpleeg voor meer informatie [[Notities beheren#Een notitie hernoemen|Een notitie hernoemen]].

## Een bestand of map verplaatsen

Om een bestand of map te verplaatsen kun je slepen en neerzetten of het contextmenu gebruiken.

**Slepen en neerzetten:**

- Sleep een bestand of map naar de map waarnaar je het wilt verplaatsen.
- Met `Alt-klik` (Windows/Linux) of `Opt-klik` (macOS) kun je meerdere afzonderlijke bestanden selecteren en naar een andere map slepen. Als ze allemaal op een rij staan, kun je `Shift-klik` gebruiken.

**Contextmenu:**

1. Klik met de rechtermuisknop op een bestand en selecteer **Verplaats bestand naar...**.
2. Zoek de naam van de map waarnaar je het bestand wilt verplaatsen en selecteer deze uit de lijst.

## Het contextmenu gebruiken

Het contextmenu toont de beschikbare acties voor een bestand of map. Veel van de bestandsitems verschijnen ook in het [[Meer opties-menu]].

### Desktop

Klik met de rechtermuisknop op een bestand of map in de verkenner.

**Bestanden**

- **Open in nieuw tabblad** en **Open aan de rechterkant** openen het bestand in een nieuw tabblad of in een paneel aan de rechterkant.
- **Open in nieuw venster** opent het bestand in een eigen venster. Zie [[Pop-outvensters]].
- **Dupliceren** maakt een kopie van het bestand.
- **Verplaats bestand naar...** verplaatst het bestand naar een andere map. Zie [[#Een bestand of map verplaatsen]].
- **Bladwijzer...** voegt het bestand toe aan je bladwijzers. Hiervoor is de Bladwijzers-plug-in nodig. Zie [[Bladwijzers#Een bladwijzer toevoegen]].
- **Volledig bestand samenvoegen met...** combineert de notitie met een andere. Hiervoor is de Notitiesamensteller-plug-in nodig. Zie [[Notitiesamensteller#Notities samenvoegen]].
- **Huidig bestand publiceren** publiceert de notitie naar je site. Hiervoor is Obsidian Publish nodig. Zie [[Introductie tot Obsidian Publish|Publish]].
- **Pad kopiëren** kopieert de locatie van het bestand als een Obsidian-URL, vanaf de kluismap of vanaf de systeemroot.
- **Open versiegeschiedenis** toont eerdere versies van het bestand. Hiervoor is een actief Obsidian Sync-abonnement nodig. Zie [[Versiegeschiedenis]].
- **Open in standaard app** opent het bestand in de app die je computer voor dat bestandstype gebruikt.
- **Toon in bestandssysteem** toont het bestand in je bestandsbeheerder. Op macOS staat er **Toon in Finder**. Op Windows en Linux staat er **Toon in systeemverkenner**.
- **Naam wijzigen...** wijzigt de bestandsnaam. Zie [[#De naam van een bestand of map wijzigen]].
- **Verwijderen** verwijdert het bestand. Zie [[#Een bestand of map verwijderen]].

**Mappen**

- **Nieuwe notitie** en **Nieuwe map** maken een notitie of een map aan in de map. Zie [[#Een nieuwe notitie aanmaken]] en [[#Een nieuwe map aanmaken]].
- **Nieuw doek** maakt een doek aan in de map. Zie [[Doek]].
- **Nieuwe basis** maakt een basis aan in de map. Zie [[Introductie tot Bases]].
- **Dupliceren** maakt een kopie van de map.
- **Verplaats map naar...** verplaatst de map naar een andere map.
- **In map zoeken** doorzoekt alleen de bestanden in de map. Zie [[Zoeken]].
- **Bladwijzer...** voegt de map toe aan je bladwijzers.
- **Pad kopiëren** kopieert de locatie van de map vanaf de kluismap of vanaf de systeemroot.
- **Toon in bestandssysteem** toont de map in je bestandsbeheerder, en toont dezelfde tekst als bij bestanden.
- **Naam wijzigen...** en **Verwijderen** wijzigen de mapnaam of verwijderen de map.

### Mobiel

Houd een map in de verkenner ingedrukt. Het menu heeft dezelfde items als het desktopmenu voor mappen, behalve **Bladwijzer...** en **Toon in bestandssysteem**.
