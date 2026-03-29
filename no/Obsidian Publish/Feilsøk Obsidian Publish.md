---
permalink: publish/troubleshoot
publish: true
mobile: true
description: Denne siden beskriver noen vanlige problemer du kan støte på når du bruker Obsidian Publish.
---
Denne siden lister vanlige problemer du kan støte på med [[Introduksjon til Obsidian Publish|Obsidian Publish]] og hvordan du kan løse dem.

Sørg for å gjennomgå [[Mediefiler]] og [[Publish-begrensninger|Publish-begrensninger]] først.

## Generelt

### Publisering av notater

**Jeg får en hash-feil når jeg prøver å publisere et notat.**

Bruker du en [[Community-utvidelser|community-utvidelse]] som endrer filens endringstid ved oppdatering? I så fall kan denne utvidelsen komme i konflikt med Publish. Vennligst send en feilrapport til utvikleren av utvidelsen for å løse problemet.

**Jeg får en merkelig nettverksfeil, og jeg har et veldig stort Publish-nettsted.**

Det er sannsynlig at vi trenger å undersøke databasen din. Vennligst [[Hjelp og støtte#Kontakt Obsidian-støtte|kontakt Obsidian-støtte]] for hjelp.

## CSS og temaer

**CSS-en min i [[Konfigurasjonsmappe|konfigurasjonsmappe]] fungerer ikke på Publish. Hvorfor?**

Publish leser ikke fra konfigurasjonsmappen. I stedet må du opprette en `publish.css`-fil i toppnivåkatalogen til publiseringshvelvet ditt. Du kan lese mer om dette i [[Tilpass nettstedet ditt]].

**CSS-en min ser ikke lik ut på Publish som den gjør i appen. Hvorfor?**

Obsidian Publish sin CSS er ikke nøyaktig den samme som i applikasjonen. Vi anbefaler å [utvikle all CSS og temaer](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) spesifikt for Publish fra bunnen av.

*Generelt* sett har det som fungerer for [[Visninger og redigeringsmodus#Lesevisning|lesevisning]] stor sannsynlighet for å fungere på Publish.
