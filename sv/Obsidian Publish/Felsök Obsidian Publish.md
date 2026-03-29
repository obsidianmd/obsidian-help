---
permalink: publish/troubleshoot
publish: true
mobile: true
description: Den här sidan beskriver några vanliga problem som du kan stöta på när du använder Obsidian Publish.
---
Denna sida listar vanliga problem du kan stöta på med [[Introduktion till Obsidian Publish|Obsidian Publish]] och hur du åtgärdar dem.

Se till att granska [[Mediefiler]] och [[Publish-begränsningar|Publish-begränsningar]] först.

## Allmänt

### Publicera anteckningar

**Jag får ett hashfel när jag försöker publicera en anteckning.**

Använder du ett [[Gemenskapstillägg|gemenskapstillägg]] som ändrar filens ändringstid vid uppdatering? I så fall kan detta tillägg vara i konflikt med Publish. Skicka en felrapport till tilläggets utvecklare för att lösa problemet.

**Jag får ett konstigt nätverksfel, och jag har en mycket stor Publish-webbplats.**

Det är troligt att vi behöver undersöka din databas. Vänligen [[Hjälp och support#Kontakta Obsidians support|kontakta Obsidians support]] för hjälp.

## CSS och teman

**Min CSS i min [[Konfigurationsmapp]] fungerar inte på Publish. Varför?**

Publish läser inte från konfigurationsmappen. Istället behöver du skapa en `publish.css`-fil i toppnivåkatalogen i ditt publiceringsvalv. Du kan läsa mer om detta i [[Anpassa din webbplats]].

**Min CSS ser inte likadan ut på Publish som i appen. Varför?**

Obsidian Publishs CSS är inte exakt densamma som i applikationen. Vi rekommenderar att [utveckla all CSS och alla teman](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) specifikt för Publish från grunden.

I _allmänhet_ har det som fungerar för [[Vyer och redigeringsläge#Läsvy|läsvy]] stor sannolikhet att fungera på Publish.
