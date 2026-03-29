---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian körs som en lokal applikation på var och en av dina teammedlemmars enheter. Den är designad för att fungera både online och offline, säkert och privat, och ger dig total kontroll över ditt teams data. Obsidian finns inte som en webbaserad applikation, därför behöver du distribuera appen till dina teammedlemmar.

## Installera och uppdatera Obsidian

Ditt team kan ladda ner Obsidian från vår [nedladdningssida](https://obsidian.md/download). Utgåvor finns också tillgängliga på vår [GitHub-sida för utgåvor](https://github.com/obsidianmd/obsidian-releases/releases) som inkluderar länkar till [ändringsloggen](https://obsidian.md/changelog/).

> [!tip] För Windows-användare som behöver ett systeminstallationsprogram inkluderar den universella `.exe`-filen alternativet att installera Obsidian för alla användare.

Om automatiska uppdateringar är aktiverade i appen kommer framtida versioner att installeras automatiskt när användare startar om Obsidian. Dessutom rekommenderar vi att regelbundet utföra [[Uppdatera Obsidian#Uppdateringar av installationsprogrammet|uppdateringar av installationsprogrammet]] för att ta emot de senaste uppdateringarna av Electron-ramverket, inklusive säkerhetskorrigeringar.

Om du vill veta hur du begränsar nätverksåtkomst till Obsidian under denna process, se [[Säkerhetsöverväganden för team#Nätverk och åtkomst|nätverk och åtkomst]].

## Anpassa Obsidian

Obsidian är enkelt att modifiera för att passa ditt teams behov. Med ett omfattande API och ett stort ekosystem av användare erbjuder Obsidian tillgång till ett stort antal tillägg, teman och kompletterande verktyg.

För säkerhetsrelaterade frågor kring dessa ämnen, se [[Säkerhetsöverväganden för team]].

### Konfigurationsmappar

[[Konfigurationsmapp|Konfigurationsmappen]] är där ett Obsidian-[[Ordlista#Vault|valv]] lagrar sina applikationsinställningar. Som standard heter denna mapp `.obsidian`, men du har flexibiliteten att [[Konfigurationsmapp#Ändra din konfigurationsmapp|ändra konfigurationsmappens]] namn efter dina önskemål.

Vi rekommenderar att skapa en standardiserad mall av konfigurationsmappen som kan distribueras till ditt teams enheter.

### Tillägg

[[Kärntillägg]] är valfria funktioner skapade av Obsidian-teamet. Dessa funktioner är integrerade i applikationens kärnkod och kan slås på eller av.

[[Gemenskapstillägg]] är tredjepartsfunktioner som läggs till i Obsidian-applikationen och kan installeras via gemenskapskatalogen. Tredjepartstillägg använder [Obsidian API](https://github.com/obsidianmd/obsidian-api). Tillägg finns i mappen `.obsidian/plugins` i ett valv och kan installeras manuellt på denna plats.

### Teman och snippets

[[Teman]] ändrar visuellt Obsidians gränssnitt. Precis som tillägg kan teman laddas ner från vår gemenskapskatalog. Teman finns i mappen `.obsidian/themes` i ett valv.

[[CSS-instick|Snippets]] är små `.css`-filer som visuellt modifierar aspekter av Obsidians gränssnitt. I vissa fall kan de även lägga till funktionella förbättringar. Snippets finns i mappen `.obsidian/snippets` i ett valv.

## Vanliga frågor

För frågor om kontohantering och säkerhet, se [[Säkerhetsöverväganden för team#Kontosäkerhet|kontosäkerhet]].

### Distribution

**Kan jag distribuera licenser över flera installationer?**
För närvarande stöder vi inte distribution av licenser via ett distributionsskript, till exempel i en `.json`-fil. Om du är intresserad av denna funktion för ditt team, skicka gärna en [funktionsbegäran](https://forum.obsidian.md/c/feature-requests/8).

**Kan Obsidian låsa vissa funktioner eller konfigurationer via en inställning eller en applikationsflagga?**
För närvarande kan du göra detta genom att blockera redigeringsåtkomst till mappen `.obsidian`, eller specifika filer och mappar inom den, som beskrivs ovan. Om du är intresserad av fler åtkomstkontroller för ditt team, skicka gärna en [funktionsbegäran](https://forum.obsidian.md/c/feature-requests/8).
