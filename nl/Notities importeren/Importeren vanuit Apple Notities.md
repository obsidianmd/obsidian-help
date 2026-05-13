---
permalink: import/apple-notes
---
Obsidian maakt het eenvoudig om je notities vanuit Apple Notities te migreren met behulp van de [[Importer|Importer-plug-in]]. Hiermee worden je Apple Notities-gegevens geconverteerd naar duurzame Markdown-bestanden die je kunt gebruiken met Obsidian en vele andere apps.

Momenteel ondersteunt Importer alleen het migreren vanuit Apple Notities op macOS. Het is nog niet beschikbaar op iOS.

## Apple Notities-gegevens importeren in Obsidian

Je hebt de officiële Obsidian [[Importer]]-plug-in nodig, die je [hier kunt installeren](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Instellingen]]**.
2. Ga naar **Communityplug-ins** en [installeer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Activeer de Importer-plug-in.
4. Open de **Importer**-plug-in via het opdrachtenpalet of het werkbalkpictogram.
5. Kies onder **Bestandsformaat** de optie **Apple Notes**.
6. Klik op **Importeren**.
7. Klik op **Openen** in de pop-up die verschijnt met de titel `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Wacht tot het importeren is voltooid.
9. Je bent klaar!

## Ondersteunde inhoud

De Obsidian Importer-plug-in ondersteunt vrijwel alle inhoudstypen van Apple Notities. Dit omvat tabellen, afbeeldingen, tekeningen, scans, PDF's en koppelingen die zijn geïntroduceerd in iOS 17.

> [!Warning]
> Met een wachtwoord beveiligde notities zijn door Apple versleuteld en moeten daarom worden ontgrendeld voordat ze geïmporteerd worden. Vergrendelde notities worden overgeslagen.

### Scans

Apple slaat scans op in verschillende formaten, afhankelijk van hoe ze zijn gemaakt. Om de originele gegevens te behouden, worden ze op verschillende manieren geëxporteerd.

* Scans die zijn gemaakt of bekeken op oudere versies van macOS of iOS worden geëxporteerd als een reeks niet-bijgesneden afbeeldingen.
* Scans die zijn gemaakt of bekeken op nieuwere versies van macOS of iOS worden meestal geëxporteerd als bijgesneden afbeeldingen.
* Scans die zijn bewerkt met de functies die in iOS 17 zijn geïntroduceerd, worden meestal geëxporteerd als PDF's.

## Alternatieve exportmethoden

Apple biedt geen ingebouwde optie om je notities te exporteren. Er bestaan echter verschillende tools van derden, zoals [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) van Chintan Ghate. Houd er rekening mee dat de meeste tools beperkt zijn in welke gegevens ze uit Apple Notities exporteren en mogelijk niet de meest compatibele uitvoergegevens leveren. Deze tools werken het beste als je Apple Notities voornamelijk uit tekst bestaan en weinig bijlagen of speciale functies zoals tekeningen en scans bevatten.

Afhankelijk van de tool die je hebt gebruikt, kan de export in Markdown-formaat of HTML-formaat zijn. Volg de instructies op basis van het bestandsformaat waarnaar je hebt geëxporteerd:

- [[HTML-bestanden importeren]]
- [[Markdown-bestanden importeren]]
