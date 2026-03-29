---
permalink: plugin-security
---
Obsidian-teamet tar säkerhet på allvar. Den här sidan förklarar riskerna med att installera gemenskapstillägg och vad Obsidian-teamet gör för att hantera dem.

## Begränsat läge

Som standard körs Obsidian i begränsat läge för att förhindra körning av tredjepartskod. Inaktivera bara begränsat läge om du litar på författarna till de tillägg du installerar.

För att stänga av begränsat läge:

1. Öppna **[[Inställningar]]**.
2. I sidomenyn, välj **Gemenskapstillägg**.
3. Välj **Slå på gemenskapstillägg**.

För att slå på begränsat läge:

1. Öppna **[[Inställningar]]**.
2. I sidomenyn, välj **Gemenskapstillägg**.
3. Bredvid **Begränsat läge**, välj **Slå på**.

Installerade tillägg finns kvar i ditt valv även om du slår på begränsat läge, men ignoreras av Obsidian.

## Tilläggens kapacitet

På grund av tekniska begränsningar kan Obsidian inte på ett tillförlitligt sätt begränsa tillägg till specifika behörigheter eller åtkomstnivåer. Det innebär att tillägg ärver Obsidians åtkomstnivåer. Tänk därför på följande exempel på vad gemenskapstillägg kan göra:

- Gemenskapstillägg kan komma åt filer på din dator.
- Gemenskapstillägg kan ansluta till internet.
- Gemenskapstillägg kan installera ytterligare program.

> [!tip] 
> Om du arbetar med känslig data och vill installera ett gemenskapstillägg rekommenderar vi att du utför en oberoende säkerhetsgranskning av tillägget innan du använder det.

## Granskningsprocess för tillägg

Gemenskapstillägg genomgår en inledande granskning när de skickas in till tilläggsbutiken. Alla tillägg måste följa [Obsidians utvecklarpolicyer](https://docs.obsidian.md/Developer+policies).

Obsidian-teamet är litet och kan inte manuellt granska varje ny version av gemenskapstillägg. Istället förlitar vi oss på gemenskapens hjälp för att identifiera och rapportera problem med tillägg.

- Om du upptäcker mindre säkerhetsbrister i ett gemenskapstillägg, se tilläggsförfattarens `security.md` eller `readme.md` för hur du rapporterar dessa. För kritiska brister, rapportera även problemet till [[Hjälp och support#Kontakta Obsidians support|Obsidians support]].
- Om du misstänker att ett gemenskapstillägg är skadligt, rapportera det till [[Hjälp och support#Kontakta Obsidians support|Obsidians support]], eller genom att skicka ett direktmeddelande till våra moderatorer.
