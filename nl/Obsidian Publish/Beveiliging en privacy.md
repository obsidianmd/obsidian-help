---
permalink: publish/security
---
Je kunt kiezen welke notities je wilt publiceren naar [[Inleiding tot Obsidian Publish|Obsidian Publish]]. De rest van je notities blijft veilig in je kluis.

Alleen de notities die je kiest om te publiceren worden naar de servers van Obsidian gestuurd, en notities die je ongedaan maakt worden verwijderd.

## Wachtwoordbeveiliging

Voor verbeterde toegangscontrole op je Publish-site kun je een sitewachtwoord instellen. Bezoekers worden om een wachtwoord gevraagd wanneer ze proberen de site te openen. Als je later besluit het sitewachtwoord te verwijderen, wordt de hele site weer zichtbaar voor het publiek.

> [!warning] Individuele wachtwoordbeveiliging voor gepubliceerde notities wordt momenteel niet ondersteund.

### Een sitewachtwoord toevoegen

1. Klik in de werkbalk, links van het toepassingsvenster, op **Wijzigingen publiceren** ![[lucide-send.svg#icon]].
2. Klik in het dialoogvenster **Wijzigingen publiceren** op **Verander site-opties** ![[lucide-cog.svg#icon]].
3. Klik onder **Andere site-instellingen**, naast **Wachtwoorden**, op **Beheren**.
4. Klik op **Nieuw wachtwoord**.
5. Voer bij **Wachtwoord** een wachtwoord in voor je site.
6. (Optioneel) Voer bij **Bijnaam** een bijnaam in voor het wachtwoord, bijvoorbeeld de persoon aan wie je toegang tot de site wilt verlenen.
7. Klik op **Wachtwoord toevoegen**.

### Een sitewachtwoord verwijderen

1. Klik in de werkbalk, links van het toepassingsvenster, op **Wijzigingen publiceren** ![[lucide-send.svg#icon]].
2. Klik in het dialoogvenster **Wijzigingen publiceren** op **Verander site-opties** ![[lucide-cog.svg#icon]].
3. Klik onder **Andere site-instellingen**, naast **Wachtwoorden**, op **Beheren**.
5. Klik op het kruispictogram naast het wachtwoord dat je wilt verwijderen.

## Gegevensverzameling
### Bezoekersgegevens

Standaard verzamelt Obsidian Publish **geen** bezoekersgegevens, slaat het geen cookies op en verwerkt het geen persoonlijke informatie. Je kunt echter analyses implementeren of andere gebruikersgegevens vastleggen door [[Je site aanpassen|je site aan te passen]].

Als site-eigenaar ben je zelf verantwoordelijk voor het naleven van de AVG en privacyregelgeving in jouw regio. Dit omvat het maken van je eigen meldingsbanner, die kan worden geïmplementeerd met publish.js, en het toevoegen van een privacybeleidspagina aan je site.

## Toegang

Obsidian heeft een contract met [Cloudflare](https://www.cloudflare.com) voor het hosten van onze Publish-sites. De servers staan in San Francisco, CA.

### Toegang tot Obsidian Publish op je netwerk beheren

Om de toegang tot Obsidian Publish op je netwerk te reguleren, moet je de volgende domeinen beheren:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

Daarnaast maken de backendservices gebruik van de volgende subdomeinen: `publish-xx.obsidian.md`, waarbij `xx` een nummer is van `1 - 100`.

> [!tip] Als je firewallsysteem dit ondersteunt, raden we aan om `publish-*.obsidian.md` op de whitelist te zetten om onze voortdurende uitbreiding van subdomeinen op te vangen.
