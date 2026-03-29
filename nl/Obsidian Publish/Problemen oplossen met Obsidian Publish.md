---
permalink: publish/troubleshoot
publish: true
mobile: true
description: Deze pagina beschrijft enkele veelvoorkomende problemen die je kunt tegenkomen bij het gebruik van Obsidian Publish.
---
Deze pagina beschrijft veelvoorkomende problemen die je kunt tegenkomen met [[Inleiding tot Obsidian Publish|Obsidian Publish]] en hoe je deze kunt oplossen.

Bekijk eerst [[Mediabestanden]] en [[Publish-beperkingen|Publish-beperkingen]].

## Algemeen

### Notities publiceren

**Ik krijg een hash-fout bij het publiceren van een notitie.**

Gebruik je een [[Communityplug-ins|community-plugin]] die het tijdstip gewijzigd van het bestand aanpast bij een update? Als dat zo is, kan deze plug-in conflicteren met Publish. Dien een bugreport in bij de ontwikkelaar van de plug-in om het probleem op te lossen.

**Ik krijg een vreemde netwerkfout en ik heb een zeer grote Publish-site.**

Het is waarschijnlijk dat we je database moeten onderzoeken. Neem [[Hulp en ondersteuning#Contact opnemen met Obsidian-ondersteuning|contact op met Obsidian-ondersteuning]] voor hulp.

## CSS en thema's

**Mijn CSS in mijn [[Configuratiemap]] werkt niet op Publish. Waarom?**

Publish leest niet uit de configuratiemap. In plaats daarvan moet je een `publish.css`-bestand aanmaken in de hoofdmap van je publicatiekluis. Meer hierover kun je lezen in [[Je site aanpassen]].

**Mijn CSS ziet er op Publish anders uit dan in de app. Waarom?**

De CSS van Obsidian Publish is niet precies hetzelfde als in de applicatie. We raden aan om [CSS en thema's specifiek voor Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) helemaal opnieuw te ontwikkelen.

Over het _algemeen_ geldt dat wat werkt voor de [[Weergaven en bewerkingsmodus#Leesweergave|leesweergave]] een grote kans heeft om ook op Publish te werken.
