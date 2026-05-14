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

Alla gemenskapstillägg måste följa [Obsidians utvecklarpolicyer](https://docs.obsidian.md/Developer+policies). Obsidian skannar automatiskt varje tilläggsversion efter säkerhetsbrister, kodkvalitetsproblem och skadlig programvara. Varje tilläggs sida i [tilläggskatalogen](https://community.obsidian.md) visar resultaten som ett säkerhetskort.

Manuella granskningar fortsätter för populära, utvalda och flaggade tillägg.

- Om du upptäcker en säkerhetsbrist i ett gemenskapstillägg, se tilläggsförfattarens `security.md` eller `readme.md` för hur du rapporterar den. För kritiska brister, rapportera även problemet till [[Hjälp och support#Kontakta Obsidians support|Obsidians support]].
- Om du misstänker att ett gemenskapstillägg är skadligt kan du flagga det direkt från dess sida i tilläggskatalogen, rapportera det till [[Hjälp och support#Kontakta Obsidians support|Obsidians support]], eller skicka ett direktmeddelande till våra moderatorer.
