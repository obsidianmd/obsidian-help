---
permalink: teams/security
cssclasses:
  - soft-embed
---
Vår [Säkerhetssida](https://obsidian.md/security) sammanställer information om hur Obsidian arbetar med att skydda dina data. Den är också platsen för säkerhetsgranskningar genomförda av tredje part.

## Överväganden

Obsidian är designat för att fungera som en offline och fristående applikation. Obsidian stödjer också anpassade tillägg och teman. Dessutom tillhandahåller vi både officiellt och inofficiellt stöd för olika filsynkroniseringstjänster.

Om du inte avser att använda gemenskapstillägg eller teman, eller [[Introduktion till Obsidian Sync|Obsidian Sync]] eller [[Introduktion till Obsidian Publish|Obsidian Publish]], gäller dina standardprocedurer för att säkra applikationer. Om du däremot planerar att använda någon av dessa funktioner rekommenderar vi att du noggrant utvärderar deras lämplighet för din arbetsplats.

## Gemenskapstillägg och teman

Vänligen granska sidan [[Tilläggssäkerhet]] utöver denna sektion.

Obsidian-teamet granskar alla gemenskapstillägg och teman som skickas in till den officiella katalogen, via vårt [releases-arkiv](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc). Vi granskar inte gemenskapsobjekt som inte har skickats in till den officiella katalogen.

Vi har ingen gemenskapsbutik för [[CSS-instick]]. Dessa filer erhålls vanligtvis från vår [Obsidian-gemenskap](https://obsidian.md/community) eller från publika GitHub-arkiv.

Vi kräver att tillgångar buntlas i CSS-instick och teman. Vi har dock gjort ett undantag för [Google Fonts](https://fonts.google.com/) för att upprätthålla prestanda på mobila enheter, där påverkan av att bunta typsnitt är mer märkbar.

## Nätverk och åtkomst

Även om vi prioriterar den lokala-först-principen i vår applikation, gör Obsidian nätverksanrop baserat på de tjänster och funktioner du använder. Dessa nätverksanslutningar kan inaktiveras via en domänbrandvägg eller applikationslåsning.

Obsidian gör dessa nätverksanslutningar på HTTPS port 443.

Följande är en lista över nätverksanslutningar som Obsidian gör.

### Obsidian-relaterade anslutningar

- **Uppdateringar med tidig åtkomst**: Använder `releases.obsidian.md`.
- **Konto- och licenshantering**: När du kommer åt ditt Obsidian-konto i Inställningar och tillämpar en kommersiell licens, anropar vi `api.obsidian.md`.
- **Obsidian Sync**: Används för att synkronisera dina anteckningar mellan enheter.
	- `sync-xx.obsidian.md`, där `xx` är ett nummer mellan 01-100.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` och `publish-xx.obsidian.md`, där `xx` är ett nummer.
    2. Frontend: `publish.obsidian.md`.

### GitHub-relaterade anslutningar

Obsidian gör nätverksförfrågningar till både `github.com` och `raw.githubusercontent.com`.

- **Publika versioner**: Om automatiska uppdateringar är aktiverade kontrollerar Obsidian GitHub efter publika versioner.
- **Tredjepartsteman och tillägg**:
    - En kontroll utförs var 12:e timme från appens starttid för att hämta en fil som finns på GitHub och som används för "utfasning av tillägg". Denna fil hjälper till att fjärrinaktivera specifika versioner av tillägg som är kända för att fungera felaktigt, orsaka dataförlust, eller potentiellt vara sårbara eller skadliga.
    - Aktiverade tillägg kan generera nätverkstrafik utanför Obsidians och GitHubs kontroll.

### Andra anslutningar

- **Inbäddat onlineinnehåll**: När du öppnar anteckningar som bäddar in onlineinnehåll, som en bild (`![cat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **DNS-förfrågningar**: Om ett värdnamn behöver lösas upp innan en anslutning upprättas, inklusive DNS över HTTPS. Se [Chromiums dokumentation](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium) för mer information.

## Vanliga frågor

### Kontosäkerhet

**Stödjer Obsidian Single Sign-On (SSO)?**
Obsidian stödjer inte SSO. I de flesta användningsfall kräver Obsidian inget konto eller inloggning på din arbetsplats, såvida du inte använder [[Introduktion till Obsidian Publish|Obsidian Publish]] eller [[Introduktion till Obsidian Sync|Obsidian Sync]].

**Stödjer Obsidian multifaktorautentisering (MFA)?**
Obsidian stödjer [[Tvåfaktorsautentisering]] (2FA) för Obsidian-konton, men stödjer inte 2FA för att öppna och använda basapplikationen. Användare av [[Introduktion till Obsidian Sync|Obsidian Sync]] och [[Introduktion till Obsidian Publish|Obsidian Publish]] som har 2FA aktiverat måste bekräfta sin 2FA-nyckel när de först loggar in i applikationen.

### Bedömningar och certifieringar

**Accepterar ni säkerhetsbedömningar från vårt företag?**
Vi kräver ett minimum beställningsbelopp innan vi överväger att genomföra en säkerhetsbedömning. Dessa bedömningar är ofta tidskrävande och kanske inte är tillämpliga på offlineapplikationer som Obsidian, eftersom de vanligtvis är inriktade på molnbaserade tjänster.

Du kan dock avstå från detta beställningsbelopp genom att gå med på att betala en förskottsavgift. Vänligen kontakta [[Hjälp och support#Kontakta Obsidians support|Obsidians support]] för att fråga om detta alternativ.

**Har ni några erkända certifieringar relaterade till informationssäkerhet eller kvalitetsstandarder, såsom ISO27001, NIST, COBIT, eller andra ISO- eller CSA-certifieringar?**
Inte för tillfället. Det kan vara något vi utforskar i framtiden, men för närvarande ligger vårt fokus på våra [säkerhetsgranskningar](https://obsidian.md/security).
