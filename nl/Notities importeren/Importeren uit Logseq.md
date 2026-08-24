---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Met Obsidian kun je notities migreren vanuit een bestandsgebaseerde Logseq-grafiek (nu "Logseq OG" genoemd) met behulp van de officiële [[Importeren|Importeur-plug-in]]. De Importeur leest de Markdown-bestanden van Logseq rechtstreeks en converteert Logseq-specifieke opmaak naar duurzame bestanden die je offline kunt gebruiken met Obsidian en andere apps.

## Voordat je begint

- Maak een back-up van je Logseq-grafiek en Obsidian-kluis.
- Zoek de hoofdmap van je Logseq-grafiek. Deze bevat normaal gesproken mappen met de namen `pages`, `journals`, `assets` en `logseq`.
- Zorg ervoor dat je een bestandsgebaseerde Logseq-grafiek gebruikt. Logseq-databasegrafieken worden nog niet ondersteund.

## Je Logseq-grafiek importeren

Je hebt de officiële Obsidian [[Importeren|Importeur]]-plug-in nodig, die je [hier kunt installeren](obsidian://show-plugin?id=obsidian-importer).

1. Open **[[Instellingen]] → Communityplug-ins** en [installeer Importeur](obsidian://show-plugin?id=obsidian-importer).
2. Activeer de Importeur-plug-in.
3. Open **Importeur** via het [[Opdrachtenpaneel|opdrachtenpalet]] of het werkbalkpictogram.
4. Selecteer onder **Bestandsindeling** de optie **Logseq**.
5. Selecteer onder **Map kiezen** de hoofdmap van je grafiek. Selecteer de map die `pages` en `journals` bevat, niet een van die mappen afzonderlijk.
6. Bekijk de gedetecteerde mappen en sluit mappen uit die je niet wilt importeren.
7. Kies een uitvoermap en waar geïmporteerde bijlagen moeten worden opgeslagen.
8. Bekijk de importopties en bekijk voorbeelden van de geconverteerde notities.
9. Selecteer **Importeren** en wacht tot het importeren is voltooid.

## Beperkingen

- Whiteboards worden niet geïmporteerd.
- Query's worden bewaard als codeblokken als je ervoor kiest ze te behouden.
- Dynamische Logseq-sjabloonmacro's blijven als letterlijke tekst.
- Logseq-flashcardplanning, PDF-annotaties en andere app-specifieke gegevens worden niet gemigreerd.

## Instellingen

De Importeur converteert gangbare Logseq-conventies, waaronder:

- Pagina-eigenschappen naar Obsidian-[[Eigenschappen]].
- Pagina-aliassen, labels, namespaces en koppelingen.
- Workflowstatussen naar selectievakjes in lijstmarkeringen, met prioriteiten en datums bewaard als leesbare tekst.
- Blok-ID's, blokreferenties en blokinsluiting naar Obsidian-koppelingen en -insluitingen.
- Dagboekbestandsnamen en datumkoppelingen.
- Markeringen, genummerde lijsten, Org-blokken, media-insluitingen en gekoppelde bestanden uit de `assets`-map van de grafiek.

### Dagboeken

Standaard is **Dagnotitie-instellingen gebruiken** ingeschakeld. Geïmporteerde dagboeken gebruiken de map en datumindeling die zijn geconfigureerd door de kernplug-in [[Dagnotities]]. Dit kan ertoe leiden dat dagboeken buiten de in de Importeur geselecteerde uitvoermap worden geplaatst.

Als je deze optie uitschakelt, worden dagboeken geschreven naar een map `Journals` binnen de geselecteerde uitvoermap en wordt het notitienaamsformaat `YYYY-MM-DD` gebruikt.

### Overzichten afvlakken

Logseq gebruikt geneste opsommingstekens als de structuur van een pagina. Standaard behoudt de Importeur deze overzichtsstructuur. Schakel **Overzichten afvlakken** in om overzichtsblokken om te zetten in een combinatie van alinea's, koppen en conventionele lijsten. Taken en groepen van lijstachtige items blijven lijstitems, maar de conversie is heuristisch. Bekijk meerdere voorbeelden in het voorbeeld voordat je een grote grafiek importeert.

### Incompatibele gegevens behouden

Logseq-query's, flashcards en tijdregistratie-items hebben geen directe equivalenten in Obsidian. Met de importopties kun je kiezen of je elk type inhoud wilt behouden. Wanneer behouden, blijft het als platte tekst.

- **Query's behouden** bewaart query's als afgeschermde codeblokken of inline code.
- **Flashcards behouden** bewaart `#card`-markeringen en cloze-wrappers als platte tekst.
- **Tijdregistratie behouden** bewaart `LOGBOOK`- en `CLOCK`-items als platte tekst.

## Sjablonen

Gebruik [[Importeur-sjablonen]] om volledig te configureren hoe je Logseq-gegevens worden geïmporteerd.

![[Importeur-sjablonen#Variabelen]]

## Problemen oplossen

Als de Importeur geen notities vindt, controleer dan of je de hoofdmap van de grafiek hebt geselecteerd en of de geconfigureerde pagina- of dagboekmappen Markdown-bestanden bevatten.

Als een bijlage als ontbrekend wordt gemeld, controleer dan of het gerefereerde bestand nog bestaat in de `assets`-map van de grafiek.

Voor andere problemen kun je de [Importeur-issuetracker](https://github.com/obsidianmd/obsidian-importer/issues) doorzoeken of een bugrapport indienen met een kleine voorbeeldgrafiek.
