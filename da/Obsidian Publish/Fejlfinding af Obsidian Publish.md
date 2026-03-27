---
permalink: publish/troubleshoot
publish: true
mobile: true
description: 'Denne side beskriver nogle almindelige problemer, du kan støde på, når du bruger Obsidian Publish.'
---
Denne side lister almindelige problemer, du kan støde på med [[Introduktion til Obsidian Publish|Obsidian Publish]], og hvordan du løser dem.

Sørg for at gennemgå [[Mediefiler]] og [[Publish-begrænsninger|Publish-begrænsninger]] først.

## Generelt

### Udgivelse af noter

**Jeg får en hash-fejl, når jeg prøver at udgive en note.**

Bruger du et [[Fællesskabsplugins|fællesskabsplugin]], der redigerer filens ændringstidspunkt ved opdatering? Hvis ja, kan dette plugin være i konflikt med Publish. Indsend venligst en fejlrapport til pluginudvikleren for at løse problemet.

**Jeg får en mærkelig netværksfejl, og jeg har et meget stort Publish-websted.**

Det er sandsynligt, at vi skal undersøge din database. [[Hjælp og support#Contact Obsidian support|Kontakt venligst Obsidian support]] for assistance.

## CSS og temaer

**Min CSS i min [[Konfigurationsmappe]] virker ikke på Publish. Hvorfor?**

Publish læser ikke fra konfigurationsmappen. I stedet skal du oprette en `publish.css`-fil i rodmappen i din udgivelsesboks. Du kan få mere at vide om dette i [[Tilpas dit websted]].

**Min CSS ser ikke ens ud på Publish og i applikationen. Hvorfor?**

Obsidian Publishes CSS er ikke helt den samme som i applikationen. Vi anbefaler at [udvikle al CSS og temaer](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) specifikt til Publish fra bunden.

Generelt har det, der virker i [[Visninger og redigeringstilstand#Læsevisning|læsevisning]], stor sandsynlighed for at virke på Publish.
