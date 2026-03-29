---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Leer hoe je overstapt van je huidige synchronisatieoplossing naar Obsidian Sync.
---
Leer hoe je kunt overstappen van je huidige synchronisatieoplossing naar Obsidian Sync.

> [!warning] Vermijd het gebruik van meerdere oplossingen om dezelfde bestanden te synchroniseren
> We [[Veelgestelde vragen#Kan ik synchronisatie van derden gebruiken samen met Obsidian Sync?|raden niet aan]] om Obsidian Sync te gebruiken samen met cloudopslagdiensten (bijv. iCloud, Dropbox, OneDrive, Google Drive), omdat dit conflicten kan veroorzaken. Cloudopslagdiensten kunnen echter wel een rol spelen in je [[Back-up maken van je Obsidian-bestanden|back-up]]strategie.

## Je kluis verplaatsen uit je synchronisatiedienst van derden of cloudopslag

Als je kluis op een van de volgende locaties is opgeslagen, wordt deze waarschijnlijk gesynchroniseerd door een externe dienst:

- **Windows**: `C:\Users\Username\Desktop` of `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` of `/users/username/Documents`
- **iOS**: De **iCloud**-map in de Bestanden-app
- **Overig**: Elke map binnen een synchronisatiedienst, zoals `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault`, enz.

Hoewel Android en Linux hier doorgaans minder problemen mee hebben, is het toch de moeite waard om je kluislocatie op deze apparaten te controleren.

> [!tip] Als je huidige lokale kluis verbonden is met een externe kluis, zal Obsidian proberen te detecteren of de kluis zich in een synchronisatiedienst bevindt. Als dat het geval is, zie je een melding bovenaan de instellingen van Obsidian Sync.

Om conflicten met synchronisatiediensten te voorkomen, raden we aan je Obsidian-kluizen op de volgende locaties op te slaan:

- **Windows**: Aanbevolen locaties in volgorde:
    1. `D:\` of een ander niet-C, niet-netwerkstation op je apparaat
    2. `C:\Vaults` (als je rechten hebt om de C:\-schijf te gebruiken)
    3. `C:\Users\Username\Vaults` (als je je kluis binnen C:\Users\Username moet bewaren, zorg er dan voor dat OneDrive is ingesteld om bestanden niet te verwijderen. OneDrive is over het algemeen minder agressief buiten de mappen `Desktop` en `Documents`.)
- **macOS**: `/users/username/vaults`
- **Linux**: Geen specifieke aanbeveling vanwege de verscheidenheid aan bestandssystemen. Zorg er alleen voor dat Obsidian volledige lees-/schrijftoegang heeft en dat geen enkele synchronisatiedienst de map beheert.
- **iOS/iPadOS**: Sla de kluis op onder **Op mijn iPhone** of **Op het apparaat**.
- **Android**: Gebruik de map `Documents/` op je apparaat.

## Je kluis verplaatsen met Obsidian op desktop

![[Kluizen beheren#Kluis verplaatsen naar een andere map]]

## Je kluis verplaatsen op mobiel

Op mobiele apparaten werkt Obsidian in een sandboxomgeving, wat betekent dat je kluizen niet binnen de app kunt verplaatsen zoals op desktop.

### Android

Android-bestandssystemen variëren sterk per apparaat, maar over het algemeen volg je dezelfde stappen als bij het handmatig verplaatsen van je kluis, waarbij je ervoor zorgt dat deze wordt verwijderd uit elke synchronisatiedienst op je apparaat.

### iOS en iPadOS

Volg deze stappen om een bestaande iCloud-kluis naar je apparaat te verplaatsen:

> [!note] Als je de gegevens al op een ander apparaat hebt en Obsidian Sync hebt ingesteld, wordt aanbevolen om in plaats daarvan [[Obsidian Sync instellen#Een externe kluis synchroniseren op een ander apparaat|een nieuwe lokale kluis vanuit Sync in te stellen]].

- Maak een [[Back-up maken van je Obsidian-bestanden|back-up]] van je kluis.
- Maak een nieuwe kluis aan op je apparaat en zorg ervoor dat **Bewaar in iCloud Drive** is uitgeschakeld.
- Forceer het sluiten van de Obsidian-app op alle apparaten om Sync te pauzeren.
- Open de **Bestanden**-app op je iOS/iPadOS-apparaat.
- Houd de kluismap onder **iCloud Drive → Obsidian** lang ingedrukt en selecteer **Verplaats**.
- Verplaats de kluis naar **Op mijn iPhone/apparaat → Obsidian** en bevestig dat deze nu zichtbaar is.
- Tik op **Kopieer**.
- Ga terug naar **iCloud Drive → Obsidian** en verwijder de oude kluismap.

Zodra je Obsidian opnieuw opent, zou de kluis een kluispictogram moeten tonen in plaats van een cloudpictogram, wat bevestigt dat deze niet langer in iCloud Drive staat. Obsidian Sync zal ook niet langer de waarschuwingsmelding in de instellingen weergeven.

## Volgende stappen

- Wil je aan de slag met Obsidian Sync? [[Obsidian Sync instellen]]
- Heb je nog hulp nodig? Bekijk [[Problemen oplossen met Obsidian Sync]]
