---
permalink: teams/security
cssclasses:
  - soft-embed
---
Onze [Beveiliging](https://obsidian.md/security)-pagina verzamelt informatie over hoe Obsidian de bescherming van je gegevens benadert. Het is ook de thuisbasis voor beveiligingsaudits die door derden zijn uitgevoerd.

## Overwegingen

Obsidian is ontworpen om te functioneren als een offline en zelfstandige app. Obsidian ondersteunt ook aangepaste plug-ins en thema's. Daarnaast bieden we zowel officiële als niet-officiële ondersteuning voor diverse bestandssynchronisatiediensten.

Als je niet van plan bent community-plug-ins of thema's te gebruiken, of [[Introductie tot Obsidian Sync|Obsidian Sync]] of [[Inleiding tot Obsidian Publish|Obsidian Publish]], zijn je standaardprocedures voor het beveiligen van apps van toepassing. Als je echter van plan bent een van deze functies te gebruiken, raden we aan om hun geschiktheid voor je werkplek grondig te evalueren.

## Communityplug-ins en thema's

Bekijk de pagina [[Plug-inbeveiliging]] naast dit gedeelte.

Het Obsidian-team beoordeelt alle communityplug-ins en thema's die zijn ingediend bij de officiële lijst, via onze [releases-repository](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc). We beoordelen geen community-items die niet bij de officiële lijst zijn ingediend.

We hebben geen communitywinkel voor [[CSS-fragmenten]]. Deze bestanden worden doorgaans verkregen vanuit onze [Obsidian Community](https://obsidian.md/community) of vanuit openbare GitHub-repository's.

We vereisen het bundelen van bestanden in CSS-fragmenten en thema's. We hebben echter een uitzondering gemaakt voor [Google Fonts](https://fonts.google.com/) om de prestaties op mobiele apparaten te behouden, waar de impact van het bundelen van lettertypen meer merkbaar is.

## Netwerk en toegang

Hoewel Obsidian prioriteit geeft aan de local-first benadering van onze app, maakt Obsidian wel netwerkverbindingen op basis van de diensten en functies die je gebruikt. Deze netwerkverbindingen kunnen worden uitgeschakeld via een domeinfirewall of applicatievergrendeling.

Obsidian maakt deze netwerkverbindingen via HTTPS-poort 443.

Hieronder volgt een lijst van netwerkverbindingen die Obsidian maakt.

### Door Obsidian geïnitieerde verbindingen

- **Vroege-toegangsupdates**: Gebruikt `releases.obsidian.md`.
- **Account- en licentiebeheer**: Bij het openen van je Obsidian-account in Instellingen en het toepassen van een commerciële licentie, roepen we `api.obsidian.md` aan.
- **Obsidian Sync**: Gebruikt voor het synchroniseren van je notities tussen apparaten.
	- `sync-xx.obsidian.md`, waarbij `xx` een nummer is tussen 01-100.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` en `publish-xx.obsidian.md`, waarbij `xx` een nummer is.
    2. Frontend: `publish.obsidian.md`.

### Door GitHub geïnitieerde verbindingen

Obsidian maakt netwerkverzoeken naar zowel `github.com` als `raw.githubusercontent.com`.

- **Openbare releases**: Als automatisch bijwerken is ingeschakeld, controleert Obsidian GitHub op openbare releases.
- **Thema's en plug-ins van derden**:
    - Elke 12 uur vanaf de starttijd van de app wordt een controle uitgevoerd om een bestand op GitHub op te halen dat wordt gebruikt voor "plug-in-afkeuringen." Dit bestand helpt om op afstand specifieke versies van plug-ins uit te schakelen waarvan bekend is dat ze problemen veroorzaken, gegevensverlies veroorzaken, of mogelijk kwetsbaar of kwaadaardig zijn.
    - Ingeschakelde plug-ins kunnen netwerkverkeer genereren buiten de controle van Obsidian en GitHub.

### Overige verbindingen

- **Ingesloten online inhoud**: Bij het openen van notities die online inhoud insluiten, zoals een afbeelding (`![kat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **DNS-verzoeken**: Als een hostnaam moet worden opgelost voordat een verbinding wordt gemaakt, inclusief DNS over HTTPS. Raadpleeg de [documentatie van Chromium](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium) voor meer informatie.

## Veelgestelde vragen

### Accountbeveiliging

**Ondersteunt Obsidian Single Sign-On (SSO)?**
Obsidian ondersteunt geen SSO. In de meeste gevallen vereist Obsidian geen account of aanmelding op je werkplek, tenzij je [[Inleiding tot Obsidian Publish|Obsidian Publish]] of [[Introductie tot Obsidian Sync|Obsidian Sync]] gebruikt.

**Ondersteunt Obsidian Multi-Factor Authentication (MFA)?**
Obsidian ondersteunt [[Tweefactorauthenticatie]] (2FA) voor Obsidian-accounts, maar ondersteunt geen 2FA voor het openen en gebruiken van de basisapp. Gebruikers van [[Introductie tot Obsidian Sync|Obsidian Sync]] en [[Inleiding tot Obsidian Publish|Obsidian Publish]] die 2FA hebben ingeschakeld, moeten hun 2FA-sleutel bevestigen wanneer ze voor het eerst inloggen in de app.

### Beoordelingen en certificeringen

**Accepteren jullie beveiligingsbeoordelingen van ons bedrijf?**
We vereisen een minimaal geoffreerd inkooporderbedrag voordat we overwegen een beveiligingsbeoordeling af te ronden. Deze beoordelingen zijn vaak tijdrovend en mogelijk niet van toepassing op offline apps zoals Obsidian, aangezien ze doorgaans gericht zijn op cloudgebaseerde diensten.

Je kunt dit geoffreerde inkooporderbedrag echter laten vervallen door akkoord te gaan met het betalen van een voorschotvergoeding. Neem contact op met [[Hulp en ondersteuning#Contact opnemen met Obsidian-ondersteuning|Obsidian-ondersteuning]] om naar deze optie te informeren.

**Beschikken jullie over erkende certificeringen op het gebied van informatiebeveiliging of kwaliteitsnormen, zoals ISO27001, NIST, COBIT, of andere ISO- of CSA-certificeringen?**
Op dit moment niet. Het is iets dat we in de toekomst mogelijk zullen verkennen, maar voorlopig ligt onze focus op onze [beveiligingsaudits](https://obsidian.md/security).
