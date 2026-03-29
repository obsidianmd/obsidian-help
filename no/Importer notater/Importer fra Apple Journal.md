---
permalink: import/apple-journal
---
Obsidian lar deg enkelt migrere journaloppføringene dine fra Apple Journal ved hjelp av [[Markdown-importør|Importer-utvidelsen]]. 
Dette vil konvertere journalene dine til holdbare Markdown-filer som du kan bruke med Obsidian og mange andre apper.

## Eksporter dataene dine fra Apple Journal

### På iPhone
Følg instruksjonene for [Skriv ut og eksporter oppføringer i Journal på iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. Gå til Journal-appen på iPhonen din.
2. Velg en journal eller trykk på Alle oppføringer.
3. Trykk på Mer-knappen øverst på skjermen.
4. Trykk på Eksporter, og velg deretter Eksporter.
5. Velg en plassering, og trykk deretter på Valgt-knappen.

### På Mac (Tahoe)
Følg instruksjonene for [Skriv ut og eksporter oppføringer i Journal på Mac](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. Gå til Journal-appen på Macen din.
2. Gå til Fil > Eksporter, og velg deretter Eksporter.

## Importer Apple Journal-data til Obsidian

Du trenger den offisielle Obsidian [[Markdown-importør|Importer]]-utvidelsen, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]]**.
2. Gå til **Community-utvidelser** og [installer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktiver Importer-utvidelsen.
4. Åpne **Importer**-utvidelsen ved hjelp av kommandopaletten eller verktøylinjeikonet.
5. Under **Filformat**, velg **Apple Journal (HTML Export)**.
6. I **Filer som skal importeres**, velg mappen med eksporterte data, vanligvis _AppleJournalEntries_, eller individuelle filer fra _Entries_.
7. Gjennomgå og rediger de andre importalternativene.
8. Velg Importer og vent til importen er fullført.
9. Du er ferdig!


## Støttet innhold

Utvidelsen kan importere Journal-metadata som startmetadata, for eksempel _state-of-mind_, _contacts_, _location_ og _workout-route_.

> [!note] Merknad
> Utvidelsen importerer ikke ressurser. Vedlegg som bilder, videoer og lydopptak ignoreres.
