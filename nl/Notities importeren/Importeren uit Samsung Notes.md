---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Met Obsidian kun je je notities migreren vanuit Samsung Notes met behulp van de [[Importeren|Importeur-plug-in]]. Hiermee worden je notities omgezet naar duurzame Markdown-bestanden die je kunt gebruiken met Obsidian en veel andere apps.

## Je notities exporteren uit Samsung Notes

Samsung Notes slaat elke notitie op als een Samsung Notes-bestand (`.sdocx`).

1. Open Samsung Notes op je telefoon of tablet.
2. Houd een notitie ingedrukt en selecteer vervolgens elke notitie die je wilt exporteren.
3. Tik op **Opslaan als bestand** en kies **Samsung Notes-bestand**.
4. Kies een map en tik op **Opslaan**.
5. Verplaats de `.sdocx`-bestanden naar het apparaat waarop je Obsidian gebruikt, bijvoorbeeld met een USB-kabel, Quick Share of een clouddrive.

Als je veel bestanden hebt, kun je ze in een `.zip`-bestand plaatsen en dat in plaats daarvan importeren. Samsung Notes neemt zijn mappen niet op in de bestanden die het opslaat, maar de Importeur behoudt de mappen binnen het `.zip`-bestand. Om je notities georganiseerd te houden, sla je de notities van elke Samsung Notes-map op in een map met dezelfde naam voordat je ze zipt.

## Je Samsung Notes-gegevens importeren in Obsidian

Je hebt de officiële Obsidian [[Importeren|Importeur]]-plug-in nodig, die je [hier kunt installeren](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Instellingen]]**.
2. Ga naar **Communityplug-ins** en [installeer Importeur](obsidian://show-plugin?id=obsidian-importer).
3. Activeer de Importeur-plug-in.
4. Open de **Importeur**-plug-in via het opdrachtenpalet of het werkbalkpictogram.
5. Kies onder **Bestandsformaat** de optie **Samsung Notes (.sdocx)**.
6. Selecteer je `.sdocx`-bestanden of een `.zip`-bestand dat ze bevat.
7. Selecteer **Importeren** om het gegenereerde sjabloon te bekijken en voorbeelden van je notities te voorbeschouwen.
8. Selecteer nogmaals **Importeren** en wacht tot de import is voltooid.

## Beperkingen

- Handschrift en getekende vormen worden geïmporteerd als een SVG-afbeelding aan het einde van de notitie. Streken behouden hun vorm en kleur, maar niet de variërende breedte van een drukgevoelige pen. Vormen en lijnen worden in zwart geïmporteerd.
- Tekstvakken, afbeeldingen die op de pagina zijn geplaatst en geannoteerde PDF's worden nog niet geïmporteerd.
- Checklistitems worden als niet-aangevinkt geïmporteerd.
- Tekstkleuren, lettertypen en lettertypegroottes worden niet behouden.
- Ontgrendel vergrendelde notities in Samsung Notes voordat je ze exporteert.

## Sjablonen

Gebruik [[Importeur-sjablonen]] om volledig te configureren hoe je Samsung Notes-gegevens worden geïmporteerd.

![[Importeur-sjablonen#Variabelen]]
