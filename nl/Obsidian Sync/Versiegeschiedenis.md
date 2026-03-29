---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Obsidian Sync houdt een overzicht bij van alle wijzigingen in je notities en controleert regelmatig op updates en maakt nieuwe versies van je notities aan.
---
[[Introductie tot Obsidian Sync|Obsidian Sync]] controleert regelmatig op updates van je [[Sync-instellingen en selectieve synchronisatie|gesynchroniseerde bestanden]] en houdt een overzicht bij van alle wijzigingen. Deze worden opgeslagen als nieuwe vermeldingen in de [[#Versiegeschiedenis]]. Deze informatie is op verschillende manieren toegankelijk:

- [[#Synchronisatiegeschiedenis]]
- [[#Versiegeschiedenis]]

Hoewel het geen onderdeel is van Obsidian Sync, is er ook een lokale versiegeschiedenis beschikbaar op elk apparaat als de [[Bestanden herstellen]]-plug-in is ingeschakeld.

## Synchronisatiegeschiedenis

De synchronisatiegeschiedenis (of Sync-zijbalk), geïntroduceerd in Obsidian versie 1.7, stelt je in staat om snel recent aangemaakte of gewijzigde notities en bijlagen te bekijken die zijn gesynchroniseerd. Je kunt het ook zien als een _bewerkings_geschiedenis.

In de zijbalk kun je een item selecteren om het bestand te openen in je actieve venster. De items hebben ook contextmenu's waarmee je acties kunt uitvoeren zoals het verplaatsen van het bestand of het bekijken van de [[#Notities en bijlagen|Versiegeschiedenis]].

> [!compatibility] Alleen beschikbaar op desktop
> Wanneer je over een gesynchroniseerd bestand in de zijbalk zweeft, kun je zien wie het bestand als laatste heeft bewerkt. Dit is vooral handig als je [[Samenwerken aan een gedeelde kluis|samenwerkt]] aan een gedeelde kluis.

> [!tip] 
> Instellingen en verwijderde items verschijnen niet in de zijbalk van de synchronisatiegeschiedenis. Deze zijn in plaats daarvan te vinden in de [[#Notities en bijlagen|Versiegeschiedenis]].

### Synchronisatiegeschiedenis tonen

Wanneer je de [[Introductie tot Obsidian Sync|Sync]]-kernplug-in inschakelt, wordt de synchronisatiegeschiedenis automatisch geactiveerd, maar verschijnt deze standaard niet in de zijbalk. Je moet deze handmatig toevoegen via een opdracht of een sneltoets.

#### Activeren via opdrachtenpalet

> [!info] Deze optie vereist dat de [[Opdrachtenpaneel|opdrachtenpalet]]-kernplug-in is ingeschakeld.

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]

1. Open het **opdrachtenpalet**. ![[lucide-terminal.svg#icon]]
2. Typ "Sync".
3. Selecteer de optie "Sync: Toon synchronisatiegeschiedenis".

De synchronisatiegeschiedenis verschijnt dan in de [[Zijbalk|rechter zijbalk]].

**Mobiel** ![[obsidian-icon-smartphone.svg#icon]]

1. Open de [[Werkbalk]] ![[lucide-menu.svg#icon]].
2. Open het **opdrachtenpalet**. ![[lucide-terminal.svg#icon]]
3. Typ "Sync".
4. Selecteer de optie "Sync: Toon synchronisatiegeschiedenis".

De synchronisatiegeschiedenis verschijnt dan als een dropdown-optie in de [[Zijbalk|rechter zijbalk]].

#### Activeren via sneltoets

1. Open **[[Instellingen]]**.
2. Selecteer in de categorie **Opties** de optie **Sneltoetsen**.
3. Typ in de zoekbalk voor sneltoetsen "Sync".
4. Wijs naast "Sync: Toon synchronisatiegeschiedenis" je gewenste sneltoets toe.

## Versiegeschiedenis

Naast de [[#Synchronisatiegeschiedenis]] houdt Obsidian ook een versiegeschiedenis bij voor het herstellen van notities en bijlagen. Als je per ongeluk een notitie verwijdert of wilt terugkeren naar een eerdere versie, kun je deze herstellen vanuit de versiegeschiedenis.

De bewaartermijn voor je versiegeschiedenis is afhankelijk van je [[Abonnementen en opslaglimieten|Obsidian Sync-abonnement]]. Bij het Standard-abonnement worden notities 1 maand bewaard, terwijl ze bij het Plus-abonnement 12 maanden worden bewaard. Na deze periode worden oudere versies van je notities verwijderd.

Voor [[Bijlagen|bijlagen]] worden oudere versies <u>twee weken</u> bewaard.

![[Samenwerken aan een gedeelde kluis#^version-history-image]]

### Notities en bijlagen

Het proces voor het herstellen van zowel notities als bijlagen is hetzelfde.

#### Versiegeschiedenis van een bestand bekijken

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]
1. Selecteer in de **Verkenner** de notitie die je wilt herstellen.
2. Selecteer **Open versiegeschiedenis**.
3. Selecteer links de versie van de notitie die je wilt bekijken. De inhoud wordt rechts weergegeven.

**Mobiel** ![[obsidian-icon-smartphone.svg#icon]]
1. Selecteer in de **Verkenner** de notitie die je wilt herstellen.
2. Houd lang ingedrukt om het contextmenu te openen.
3. Selecteer **Open versiegeschiedenis**.
4. Selecteer in het pop-upmenu de versie van de notitie die je wilt bekijken.
5. Na selectie is de inhoud van de notitie beschikbaar om te bekijken.

#### Versiegeschiedenis van een verwijderd of hernoemd bestand bekijken

1. Open **[[Instellingen]]**.
2. Selecteer in de zijbalk onder **Ingebouwde plug-ins** de optie **Sync**.
3. Selecteer naast **Verwijderde bestanden** de optie **Weergave**.
4. Selecteer de notitie waarvan je de versiegeschiedenis wilt bekijken.
5. Selecteer in het pop-upvenster van de versiegeschiedenis links de versie van de notitie die je wilt bekijken.

#### Een eerdere versie van een bestand herstellen

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]
1. Selecteer in de **Verkenner** de notitie die je wilt herstellen.
2. Selecteer **Open versiegeschiedenis**.
3. Selecteer links de versie van de notitie die je wilt herstellen. De inhoud wordt rechts weergegeven.
4. Selecteer de knop **Herstellen**.
5. De inhoud van de notitie wordt vervangen door de herstelde versie.

**Mobiel** ![[obsidian-icon-smartphone.svg#icon]]
1. Selecteer in de **Verkenner** de notitie die je wilt herstellen.
2. Houd lang ingedrukt om het contextmenu te openen.
3. Selecteer **Open versiegeschiedenis**.
4. Selecteer in het pop-upmenu de versie van de notitie die je wilt herstellen.
5. Na selectie is de inhoud van de notitie beschikbaar om te bekijken.
6. Selecteer de knop **Herstellen**.
7. De inhoud van de notitie wordt vervangen door de herstelde versie.

#### Een verwijderd bestand herstellen

1. Open **[[Instellingen]]**.
2. Selecteer in de zijbalk onder **Ingebouwde plug-ins** de optie **Sync**.
3. Selecteer naast **Verwijderde bestanden** de optie **Weergave**.
4. Kies de notitie die je wilt herstellen.
5. Selecteer in de lijst met versies aan de linkerkant de versie die je wilt herstellen.
6. Selecteer de knop **Herstellen** aan de rechterkant.
7. De notitie wordt hersteld naar de oorspronkelijke locatie in het bestandssysteem.

> [!tip] Je kunt meerdere notities selecteren met **in bulk terugzetten** door de selectievakjes aan te vinken of `shift+klik` te gebruiken. Deze bestanden kunnen niet worden bekeken in dit menu.

### Instellingengeschiedenis

Obsidian Sync houdt ook de wijzigingen bij die zijn aangebracht in de configuratie-instellingen van je kluis.

#### Versiegeschiedenis van een instelling bekijken

1. Open **[[Instellingen]]**.
2. Selecteer in de zijbalk onder **Ingebouwde plug-ins** de optie **Sync**.
3. Navigeer naar **Kluisconfiguratiesynchronisatie**.
4. Selecteer de knop **Weergave** naast **[[Instellingen]] versiegeschiedenis**.
5. Kies in het pop-upvenster **[[Instellingen]] Bestand** een instellingenbestand dat je wilt bekijken.

#### Een eerdere versie van een instelling herstellen

1. Open **[[Instellingen]]**.
2. Selecteer in de zijbalk onder **Ingebouwde plug-ins** de optie **Sync**.
3. Navigeer naar **Kluisconfiguratiesynchronisatie**.
4. Selecteer de knop **Weergave** naast **[[Instellingen]] versiegeschiedenis**.
5. Kies in het pop-upvenster **[[Instellingen]] Bestand** een instellingenbestand dat je wilt bekijken.
6. Selecteer in het wijzigingenvenster de knop **Herstellen**.
7. Laad Obsidian opnieuw of start het opnieuw op om de instelling van kracht te laten worden. Raadpleeg voor meer details de instructies in [[Obsidian Sync instellen#Obsidian Sync-instellingen aanpassen|Obsidian Sync-instellingen aanpassen]].
