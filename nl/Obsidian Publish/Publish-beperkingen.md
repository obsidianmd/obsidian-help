---
permalink: publish/limitations
---
> [!tip] Leden van onze geweldige community hebben oplossingen bedacht voor sommige van deze beperkingen. Bezoek voor meer informatie onze [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582)-thread op de Obsidian-forums.

## Communityplug-ins

Obsidian Publish biedt minimale ondersteuning voor [[Communityplug-ins]].

Plug-ins die uitvoer genereren in rauwe Markdown, zoals de Waypoint-plug-in, zijn compatibel met Publish omdat ze de applicatie niet nodig hebben om hun gegevens te renderen.

Een plug-in die een plug-in-codeblok vereist om te renderen, zoals Dataview of Fantasy Statblocks, werkt standaard niet in Publish.

## Grafiek

Publish biedt basiskleuraanpassing voor de grafiekweergave met behulp van CSS. Je kunt de knooppuntkleuren in je `publish.css`-bestand aanpassen door gebruik te maken van de [Graph View CSS-variabelen](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Let op dat de gepubliceerde grafiek niet de uitgebreide sorteer- en weergaveopties ondersteunt die beschikbaar zijn in de [[Grafiek weergave]] van de applicatie.

## Mediabestanden

Obsidian Publish is niet geoptimaliseerd voor het streamen van video of grote audiobestanden. We hebben enkele best practices opgenomen voor het omgaan met je [[Mediabestanden|mediabestanden]] in deze documentatie.

Om de ervaring voor je bezoekers te verbeteren, raden we aan om in plaats daarvan een videohostingservice te gebruiken, zoals YouTube of Vimeo.

Je kunt bestanden uploaden **tot 50 MB** naar je Publish-site. ^publish-media-limit

## PDF's

Op mobiele apparaten, tablets en computers met kleine schermen kun je problemen ondervinden waarbij een ingesloten PDF niet laadt of alleen de eerste pagina wordt weergegeven. Dit komt door beperkingen van de PDF-renderer op mobiele apparaten.

Voor inhoud gericht op mobiele gebruikers raden we aan om koppelingen te bieden naar extern gehoste PDF's of interne koppelingen op te nemen waarmee gebruikers de PDF rechtstreeks naar hun apparaat kunnen downloaden.

## Zoeken

Publish biedt basisondersteuning voor het zoeken naar platte tekst in gepubliceerde inhoud. Voorkeur voor zoekresultaten wordt gegeven aan:

- Bestandsnamen
- Aliassen
- Kopnamen

Na het doorzoeken van bovenstaande op overeenkomsten, doorzoekt de zoekfunctie vervolgens de platte tekst van de gepubliceerde notities.

Om de doorzoekbaarheid van je gepubliceerde site te verbeteren, wordt aanbevolen om beschrijvende bestandsnamen te gebruiken, meerdere aliassen op te nemen en kopnamen te kiezen die de inhoud nauwkeurig weerspiegelen.

Daarnaast ondersteunt Publish momenteel niet de [[Zoeken#Zoekresultaten insluiten in een notitie|ingesloten zoekresultaten]]-functie van de applicatie.
