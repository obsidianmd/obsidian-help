---
permalink: import/html
cssclasses:
  - soft-embed
---
Obsidian stelt je in staat om eenvoudig individuele HTML-bestanden en hele mappen met HTML-bestanden te importeren met behulp van de officiële [[Importeren|Importer-plug-in]]. Dit is handig als je hele websites wilt opslaan in [[Obsidian Flavored Markdown|Markdown]]-formaat, of als je gegevens wilt importeren vanuit een tool die naar HTML exporteert.

Als je notities importeert vanuit een specifieke app, wil je misschien eerst de lijst met apps bekijken die worden ondersteund door de [[Importeren|Importer-plug-in]] om te controleren of er een specifieke converter is die de gegevens die je migreert beter behoudt.

## HTML-gegevens importeren in Obsidian

Je hebt de officiële Obsidian [[Importeren]]-plug-in nodig, die je [hier kunt installeren](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Instellingen]]**.
2. Ga naar **Communityplug-ins** en [installeer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Schakel de Importer-plug-in in.
4. Open de **Importer**-plug-in via het opdrachtenpalet of het werkbalkpictogram.
5. Kies onder **Bestandsformaat** de optie **HTML (.html).**
6. Selecteer de locatie van je HTML-bestanden of -mappen.
7. Selecteer **Importeren** om het gegenereerde sjabloon te bekijken en voorbeelden van je bestanden te bekijken.
8. Selecteer opnieuw **Importeren** en wacht tot het importeren is voltooid.

### Instellingen importeren

- **Limiet voor bijlagegrootte**: Sla het importeren over van bijlagen die groter zijn dan de opgegeven grootte.
- **Minimale afbeeldingsgrootte**: Sla het importeren over van afbeeldingen die in een van beide dimensies kleiner zijn dan de opgegeven grootte. Kan worden gebruikt om pictogrammen en logo's over te slaan.

## Sjablonen

Gebruik [[Importeur-sjablonen|Importer-sjablonen]] om volledig te configureren hoe je gegevens worden geïmporteerd.

![[Importeur-sjablonen#Variables]]

Daarnaast bieden HTML-imports veel van dezelfde variabelen als [[Introductie tot Obsidian Web Clipper|Web Clipper]]:

| Variabele | Beschrijving |
| --- | --- |
| `{{author}}` | Auteur van de pagina. |
| `{{contentHtml}}` | Geëxtraheerde pagina-inhoud in HTML-formaat. |
| `{{description}}` | Paginabeschrijving of uittreksel. |
| `{{domain}}` | Domein van de pagina. |
| `{{favicon}}` | Favicon-URL. |
| `{{fullHtml}}` | Onverwerkte HTML van de volledige pagina. |
| `{{image}}` | URL van de afbeelding voor sociaal delen. |
| `{{language}}` | Paginataal. |
| `{{published}}` | Publicatiedatum, die kan worden opgemaakt met het `date`-filter. |
| `{{site}}` | Sitenaam of uitgever. |
| `{{url}}` | Bron-URL gevonden in het geïmporteerde document, indien beschikbaar. |
| `{{words}}` | Aantal woorden. |
