---
permalink: plugins/graph
publish: true
mobile: true
description: Grafiekweergave is een kernplug-in waarmee je de relaties tussen de notities in je kluis kunt visualiseren.
---
Grafiekweergave is een [[Ingebouwde plug-ins|kernplug-in]] waarmee je de relaties tussen de notities in je kluis kunt visualiseren.

Om de grafiekweergave te openen, klik je op **Open grafiek weergave** in de [[Werkbalk]].

- Cirkels vertegenwoordigen notities, of _nodes_.
- Lijnen vertegenwoordigen [[Interne koppelingen]] tussen twee nodes.

Hoe meer nodes naar een bepaalde node verwijzen, hoe groter deze wordt.

Om met notities in de grafiek te werken:

- Zweef over elke cirkel om de verbindingen van die notitie te markeren.
- Klik op een notitie in de grafiek om die notitie te openen.
- Klik met de rechtermuisknop op een notitie om een contextmenu te openen met de beschikbare acties voor die notitie.

Om door de grafiek te navigeren:

- Zoom in en uit met het scrollwiel van je muis, of met de `+` en `-` toetsen.
- Verplaats de grafiek door deze met je muiscursor te slepen, of met de pijltoetsen.

Je kunt Shift ingedrukt houden terwijl je het toetsenbord gebruikt om de bewegingen te versnellen.

## Instellingen

Om de grafiekinstellingen te openen, klik je op het tandwielpictogram in de rechterbovenhoek van de grafiekweergave.

Klik op **Standaardinstellingen terugzetten** in de rechterbovenhoek van het instellingenvak om eventuele wijzigingen te resetten.

### Filters

Dit gedeelte bepaalt welke nodes in de grafiek worden weergegeven.

- **Bestanden zoeken** laat je notities filteren op basis van een zoekterm. Raadpleeg [[Zoeken]] voor meer informatie over het schrijven van geavanceerdere zoektermen.
- **Labels** schakelt in of labels in de grafiek worden weergegeven.
- **Bijlagen** schakelt in of bijlagen in de grafiek worden weergegeven.
- **Alleen bestaande bestanden** schakelt in of alleen notities worden weergegeven die in je kluis bestaan. Aangezien een notitie niet hoeft te bestaan om ernaar te linken, kan dit helpen om je grafiek te beperken tot notities die je daadwerkelijk in je kluis hebt.
- **Wezen** schakelt in of notities zonder koppelingen worden weergegeven.

> [!info] Uitgesloten bestanden
> Bestanden die overeenkomen met je patronen voor [[Instellingen#Uitgesloten bestanden|Uitgesloten bestanden]] worden niet weergegeven in de grafiekweergave.

### Groepen

Maak groepen notities aan om ze met kleur van elkaar te onderscheiden.

Om een nieuwe groep aan te maken:

1. Klik op **Nieuwe bladwijzer groep**.
2. Typ in het zoekvak een zoekterm voor de notities die je aan de groep wilt toevoegen.
3. Klik op de gekleurde cirkel om de groep een kleur te geven.

Raadpleeg [[Zoeken]] voor meer informatie over het schrijven van geavanceerdere zoektermen.

### Weergave

Dit gedeelte bepaalt hoe nodes en koppelingen in de grafiek worden gevisualiseerd.

- **Pijlen** schakelt in of de richting van elke koppeling wordt weergegeven.
- **Tekstvervagingsdrempel** regelt de transparantie van de tekst voor de naam van elke notitie.
- **Node grootte** regelt de grootte van de cirkel die elke notitie vertegenwoordigt.
- **Link dikte** regelt de lijnbreedte voor elke koppeling.
- **Animeer** start een [[#Een time-lapse-animatie starten|time-lapse-animatie]].

### Krachten

Dit gedeelte bepaalt de krachten die op elke node in de grafiek inwerken.

- **Centrale kracht** regelt hoe compact de grafiek is. Een hogere waarde creëert een meer cirkelvormige grafiek.
- **Weerstandskracht** regelt hoezeer een node andere nodes van zich afduwt.
- **Link kracht** regelt de trekkracht op elke koppeling. Als de koppeling een elastiekje zou zijn, bepaalt de linkkracht hoe strak of los het elastiekje is.
- **Link afstand** regelt de lengte van de lijnen tussen elke notitie.

## Een time-lapse-animatie starten

Notities en bijlagen verschijnen in chronologische volgorde op basis van hun aanmaaktijd.

![[obsidian-graph-view.png#interface]]

## Lokale grafiek

Om een lokale grafiekweergave te openen, gebruik je de opdracht **Open locale grafiek**. Terwijl de grafiekweergave alle notities in je kluis toont, toont een lokale grafiekweergave notities die verbonden zijn met de actieve notitie.

De lokale grafiekweergave kan alle [[#Instellingen]] gebruiken die beschikbaar zijn voor de globale grafiekweergave. Daarnaast kun je de diepte van de lokale grafiek wijzigen. Elk diepteniveau toont notities die verbonden zijn met de notities die op het vorige diepteniveau zichtbaar zijn. Om de diepte van de lokale grafiek te regelen, gebruik je de schuifregelaar bovenaan het filterinstellingenpaneel van de lokale grafiek.
