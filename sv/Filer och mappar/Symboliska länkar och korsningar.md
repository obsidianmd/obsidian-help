---
permalink: symlinks
---
Du kan använda [symboliska länkar](https://en.wikipedia.org/wiki/Symbolic_link) (symlänkar) och [korsningar](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) i ditt valv för att lagra filer utanför valvet och [[Hur Obsidian lagrar data#Globala inställningar|systemmappen]].

> [!danger] Använd på egen risk
> Vi avråder starkt från att använda symboliska länkar. Genom att använda symboliska länkar och korsningar i ditt valv riskerar du att förlora eller korrumpera dina data, eller att Obsidian kraschar. Se till att du utför regelbundna säkerhetskopior av ditt valv och dina inställningar.

Nedan finns några begränsningar eller problem vi är medvetna om som du kan vilja ha i åtanke:

- Symlänk-loopar är inte tillåtna, för att förhindra att Obsidian kraschar på grund av en oändlig loop.
- Symlänkmål måste vara helt åtskilda från valvets rot eller andra symlänkmål. Åtskilda innebär att en mapp inte innehåller en annan, eller vice versa. Obsidian ignorerar alla symlänkar till en överordnad mapp i valvet, eller från en mapp i valvet till en annan mapp i samma valv. Det är en säkerhetsåtgärd för att säkerställa att du inte får duplicerade filer i ditt valv, vilket kan göra att länkar blir tvetydiga.
- Symlänkar kanske inte fungerar bra med Obsidian Sync, eller _någon annan typ av synkronisering_. Om målet för en symlänk i sig är en mapp som synkroniseras av ett annat Obsidian-valv kan du (potentiellt) hamna i synkroniseringskonflikter eller dataförlust. Vissa synkroniseringsverktyg, som Git, följer inte symlänkar utan synkroniserar istället _sökvägen_ som symlänken pekar på, vilket kan ge oönskade resultat om du delar ditt valv med andra personer på det sättet.
- Obsidians filhanterare kan inte flytta filer över enhetsgränser, så om du symlänkar till en mapp på en annan enhet än ditt valv kommer du inte att kunna dra filer mellan den mappen och andra mappar med hjälp av Obsidians filutforskare. (Du behöver använda ditt operativsystems utforskare för sådana flyttningar, och Obsidian kommer att se flyttningen som en radering och skapandet av en ny fil. Det kommer också _inte_ att uppdatera några länkar som var beroende av filens sökväg.)
- Filsymlänkar (till skillnad från mappsymlänkar) _kan_ fungera, men stöds inte officiellt för tillfället. Ändringar som utförs utanför Obsidian övervakas inte, så om du ändrar filen direkt kommer Obsidian inte att upptäcka ändringen, uppdatera sökindex, etc.
- Att symlänka saker under `.obsidian/`-mappen för att dela dem mellan valv **har en hög risk att korrumpera dina inställningar**, om du inte _verkligen_ vet vad du gör. Om du bestämmer dig för att gå den vägen, ha åtminstone säkerhetskopior.
