---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian draait als een lokale applicatie op elk apparaat van je teamleden. Het is ontworpen om zowel online als offline te werken, veilig en privé, en geeft je volledige controle over de gegevens van je team. Obsidian is niet beschikbaar als webapplicatie, daarom moet je de app uitrollen naar je teamleden.

## Obsidian installeren en bijwerken

Je team kan Obsidian downloaden van onze [Downloadpagina](https://obsidian.md/download). Releases zijn ook beschikbaar op onze [GitHub-releasepagina](https://github.com/obsidianmd/obsidian-releases/releases) met links naar [het wijzigingslogboek](https://obsidian.md/changelog/).

> [!tip] Voor Windows-gebruikers die een systeeminstallatieprogramma nodig hebben: de universele `.exe` bevat de optie om Obsidian voor alle gebruikers te installeren.

Als automatische updates zijn ingeschakeld in de app, worden toekomstige versies automatisch geïnstalleerd wanneer gebruikers Obsidian opnieuw opstarten. Daarnaast raden we aan om periodiek [[Obsidian bijwerken#Installatieprogramma-updates|installatieprogramma-updates]] uit te voeren om de nieuwste updates van het Electron-framework te ontvangen, inclusief beveiligingspatches.

Als je wilt weten hoe je de netwerktoegang tot Obsidian tijdens dit proces kunt beperken, bekijk dan [[Beveiligingsoverwegingen voor teams#Netwerk en toegang|netwerk en toegang]].

## Obsidian aanpassen

Obsidian is eenvoudig aan te passen aan de behoeften van je team. Met een uitgebreide API en een groot ecosysteem van gebruikers biedt Obsidian toegang tot talrijke plug-ins, thema's en aanvullende tools.

Voor beveiligingsgerelateerde vragen over deze onderwerpen, raadpleeg [[Beveiligingsoverwegingen voor teams]].

### Configuratiemappen

De [[Configuratiemap]] is waar een Obsidian-[[Woordenlijst#Kluis|kluis]] zijn applicatie-instellingen opslaat. Standaard heet deze map `.obsidian`, maar je hebt de flexibiliteit om de naam van de [[Configuratiemap#De configuratiemap wijzigen|configuratiemap te wijzigen]] naar je voorkeur.

We raden aan om een gestandaardiseerd sjabloon van de configuratiemap te maken dat kan worden uitgerold op de apparaten van je team.

### Plug-ins

[[Ingebouwde plug-ins]] zijn optionele functies gemaakt door het Obsidian-team. Deze functies zijn geïntegreerd in de kerncode van de applicatie en kunnen worden in- of uitgeschakeld.

[[Communityplug-ins]] zijn functies van derden die aan de Obsidian-applicatie worden toegevoegd en kunnen worden geïnstalleerd via de communitydirectory. Plug-ins van derden maken gebruik van de [Obsidian API](https://github.com/obsidianmd/obsidian-api). Plug-ins bevinden zich in de map `.obsidian/plugins` binnen een kluis en kunnen handmatig op deze locatie worden geïnstalleerd.

### Thema's en snippets

[[Thema's]] veranderen het uiterlijk van de Obsidian-interface. Net als plug-ins kunnen thema's worden gedownload uit onze communitydirectory. Thema's bevinden zich in de map `.obsidian/themes` binnen een kluis.

[[CSS-fragmenten|Snippets]] zijn kleine `.css`-bestanden die visuele aspecten van de Obsidian-interface aanpassen. In sommige gevallen kunnen ze ook functionele verbeteringen toevoegen. Snippets bevinden zich in de map `.obsidian/snippets` binnen een kluis.

## Veelgestelde vragen

Voor vragen over accountbeheer en beveiliging, raadpleeg [[Beveiligingsoverwegingen voor teams#Accountbeveiliging|accountbeveiliging]].

### Uitrol

**Kan ik licenties uitrollen over meerdere installaties?**
Momenteel ondersteunen we het uitrollen van licenties via een uitrolscript, zoals in een `.json`-bestand, niet. Als je geïnteresseerd bent in deze functie voor je team, dien dan een [functieverzoek](https://forum.obsidian.md/c/feature-requests/8) in.

**Kan Obsidian bepaalde functies of configuraties vergrendelen via een instelling of een applicatievlag?**
Momenteel kun je dit doen door bewerkingstoegang tot de map `.obsidian`, of specifieke bestanden en mappen daarbinnen, te blokkeren, zoals hierboven beschreven. Als je geïnteresseerd bent in meer toegangscontroles voor je team, dien dan een [functieverzoek](https://forum.obsidian.md/c/feature-requests/8) in.
