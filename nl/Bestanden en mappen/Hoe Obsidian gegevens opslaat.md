---
permalink: data-storage
publish: true
mobile: true
description: Deze pagina legt uit hoe Obsidian zijn gegevens op uw apparaat opslaat.
---
Obsidian slaat je notities op als [[Basis opmaaksyntaxis|Markdown-opgemaakte]] platte tekstbestanden in een _kluis_. Een kluis is een map op je lokale bestandssysteem, inclusief eventuele submappen.

Omdat notities platte tekstbestanden zijn, kun je andere teksteditors en bestandsbeheerders gebruiken om notities te bewerken en te beheren. Obsidian vernieuwt je kluis automatisch om eventuele externe wijzigingen bij te houden.

Je kunt een kluis aanmaken waar je besturingssysteem dat toestaat. Obsidian synchroniseert met [[Introductie tot Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git en vele andere diensten van derden.

Je kunt meerdere mappen openen als afzonderlijke kluizen, bijvoorbeeld om notities voor werk en school te scheiden.

> [!warning] Kluizen binnen kluizen
> Omdat [[Interne koppelingen]] lokaal zijn binnen een kluis, raden we af om kluizen binnen kluizen aan te maken. Koppelingen worden mogelijk niet correct bijgewerkt.

## Kluisinstellingen

Obsidian maakt een `.obsidian` [[Configuratiemap|configuratiemap]] aan in de hoofdmap van de kluis, die voorkeuren bevat die specifiek zijn voor die kluis, zoals [[Sneltoetsen|sneltoetsen]], [[Thema's|thema's]] en [[Communityplug-ins|communityplug-ins]].

Standaard verbergen de meeste besturingssystemen mappen die beginnen met een punt (`.`), dus je moet mogelijk de instellingen van je bestandsbeheerder aanpassen om deze te kunnen zien.

- **macOS**: Druk in Finder op `Cmd+Shift+.` (punt) om verborgen bestanden weer te geven.
- **Windows**: [Verborgen bestanden weergeven](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** Druk in de meeste bestandsverkenners op `Ctrl + h` om verborgen bestanden weer te geven.

> [!tip] `.obsidian` toevoegen aan Git
> De bestanden `.obsidian/workspace.json` en `.obsidian/workspaces.json` slaan de huidige werkruimte-indeling op en worden bijgewerkt wanneer je een nieuw bestand opent. Als je [Git](https://git-scm.com) gebruikt om je kluis te beheren, wil je deze bestanden misschien toevoegen aan `.gitignore`.

## Algemene instellingen

Obsidian slaat algemene instellingen op in een systeemmap. De locatie van de systeemmap hangt af van het besturingssysteem dat je gebruikt.

- **macOS**: `/Users/jegebruikersnaam/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` of `~/.config/obsidian/`

> [!warning] Maak geen kluis aan in de systeemmap. Dit kan leiden tot beschadigde gegevens of gegevensverlies.

## IndexedDB

IndexedDB is een low-level database aan de clientzijde die Obsidian gebruikt voor backend-opslag. Het helpt de status van [[Introductie tot Obsidian Sync|Obsidian Sync]]-verbindingen te behouden en bewaart de [[#Metadatacache]] wanneer de applicatie wordt gesloten.

> [!warning] Als Apple's [Lockdown-modus](<https://support.apple.com/en-us/105120>) is ingeschakeld en Obsidian niet is uitgesloten, worden deze databasebestanden niet opgeslagen, waardoor de app bij elke start opnieuw moet indexeren.

### Metadatacache

Om een snelle ervaring te bieden tijdens het gebruik van de app, houdt Obsidian een lokaal overzicht bij van metadata over de bestanden in je kluis, de zogenaamde **metadatacache**. Deze metadata wordt op veel plaatsen in de app gebruikt, van de grafiekweergave tot het overzicht.

Obsidian houdt deze cache gesynchroniseerd met de bestanden in je kluis, maar het is mogelijk dat de gegevens niet meer overeenkomen met de onderliggende bestanden. Als dit met je kluis gebeurt, kun je je metadatacache opnieuw opbouwen vanuit de app-instellingen in het gedeelte *Bestanden & Links*.
