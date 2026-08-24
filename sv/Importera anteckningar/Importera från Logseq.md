---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian låter dig migrera anteckningar från en filbaserad Logseq-graf (numera kallad "Logseq OG") med det officiella [[Importerare|Importer-tillägget]]. Importer läser Logseqs Markdown-filer direkt och konverterar Logseq-specifik formatering till hållbara filer som du kan använda offline med Obsidian och andra appar.

## Innan du börjar

- Säkerhetskopiera din Logseq-graf och ditt Obsidian-valv.
- Hitta rotmappen för din Logseq-graf. Den innehåller normalt mappar med namnen `pages`, `journals`, `assets` och `logseq`.
- Se till att du använder en filbaserad Logseq-graf. Logseqs databasgrafar stöds inte ännu.

## Importera din Logseq-graf

Du behöver det officiella Obsidian-tillägget [[Importerare|Importer]], som du kan [installera här](obsidian://show-plugin?id=obsidian-importer).

1. Öppna **[[Inställningar]] → Användartillägg** och [installera Importer](obsidian://show-plugin?id=obsidian-importer).
2. Aktivera Importer-tillägget.
3. Öppna **Importer** med [[Kommandopalett|kommandopaletten]] eller ribbon-ikonen.
4. Under **Filformat**, välj **Logseq**.
5. Under **Välj mappar**, välj rotmappen för din graf. Välj mappen som innehåller `pages` och `journals`, inte någon av dessa mappar individuellt.
6. Granska de identifierade mapparna och exkludera de du inte vill importera.
7. Välj en utdatamapp och var importerade bilagor ska lagras.
8. Granska importalternativen och förhandsgranska exempel på de konverterade anteckningarna.
9. Välj **Importera** och vänta tills importen är klar.

## Begränsningar

- Whiteboards importeras inte.
- Förfrågningar (queries) bevaras som kodblock om du väljer att behålla dem.
- Dynamiska Logseq-mallmakron förblir som bokstavlig text.
- Logseqs flashcard-schemaläggning, PDF-annoteringar och annan appspecifik data migreras inte.

## Inställningar

Importer konverterar vanliga Logseq-konventioner, inklusive:

- Sidegenskaper till Obsidian-[[Egenskaper]].
- Sidaliaser, taggar, namnrymder och länkar.
- Arbetsflödestillstånd till kryssrutelistmarkörer, med prioriteter och datum bevarade som läsbar text.
- Block-ID:n, blockreferenser och blockinbäddningar till Obsidian-länkar och inbäddningar.
- Journalfilnamn och datumlänkar.
- Markeringar, numrerade listor, Org-block, medieinbäddningar och länkade filer från grafens `assets`-mapp.

### Journaler

Som standard är **Använd inställningar för dagliga anteckningar** aktiverat. Importerade journaler använder mappen och datumformatet som konfigurerats av kärntillägget [[Dagliga anteckningar]]. Detta kan placera journaler utanför den utdatamapp som valts i Importer.

Om du inaktiverar detta alternativ skrivs journaler till en `Journals`-mapp inuti den valda utdatamappen och använder namnformatet `YYYY-MM-DD` för anteckningar.

### Platta ut dispositioner

Logseq använder nästlade punktlistor som sidans struktur. Som standard bevarar Importer denna dispositionsstruktur. Aktivera **Platta ut dispositioner** för att konvertera dispositionsblock till en kombination av stycken, rubriker och konventionella listor. Uppgifter och grupper av listliknande objekt förblir listobjekt, men konverteringen är heuristisk. Granska flera exempel i förhandsgranskningen innan du importerar en stor graf.

### Bevara inkompatibel data

Logseq-förfrågningar (queries), flashcards och tidsspårningsposter har inga direkta motsvarigheter i Obsidian. Importalternativen låter dig välja om du vill behålla varje typ av innehåll. När det behålls förblir det som oformaterad text.

- **Behåll förfrågningar** bevarar förfrågningar som avgränsade kodblock eller inline-kod.
- **Behåll flashcards** bevarar `#card`-markörer och cloze-omslag som oformaterad text.
- **Behåll tidsspårning** bevarar `LOGBOOK`- och `CLOCK`-poster som oformaterad text.

## Mallar

Använd [[Mallar för Importer|Importer-mallar]] för att fullt ut konfigurera hur din Logseq-data importeras.

![[Mallar för Importer#Variabler]]

## Felsökning

Om Importer inte hittar några anteckningar, kontrollera att du valde grafens rotmapp och att de konfigurerade sid- eller journalmapparna innehåller Markdown-filer.

Om en bilaga rapporteras som saknad, bekräfta att den refererade filen fortfarande finns i grafens `assets`-mapp.

För andra problem, sök i [Importers ärendehanterare](https://github.com/obsidianmd/obsidian-importer/issues) eller skicka in en felrapport med en liten exempelgraf.
