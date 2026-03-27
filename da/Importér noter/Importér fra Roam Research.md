---
permalink: import/roam
aliases:
  - Import fra Roam Research
  - Import af noter/Import fra Roam Research
---
Obsidian gør det nemt at migrere dine noter fra Roam Research ved hjælp af [[Importer|Importer-pluginet]]. Dette vil konvertere dine Roam-data til holdbare Markdown-filer, som du kan bruge med Obsidian og mange andre applikationer.

## Eksportér dine data fra Roam Research

1. I Roam Research, klik på **Flere handlinger** ( `•••` ) i øverste højre hjørne, og vælg derefter **Export All**.
   
   ![[Roam-exporting.png#interface]]
2. Under **Export Format**, vælg "JSON", og klik derefter på **Export All** for at hente et arkiv med dine noter.

## Importér dine Roam Research-data til Obsidian

Du skal bruge det officielle Obsidian [[Importer]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]]**.
2. Gå til **Fællesskabsplugins** og [installér Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktivér Importer-pluginet.
4. Åbn **Importer**-pluginet ved hjælp af kommandopaletten eller værktøjslinjeikonet.
5. Under **Filformat** vælg **Roam Research (.json).**
6. Vælg placeringen af din `.json`-fil.
7. Under **Outputmappe**, vælg hvor dine filer skal importeres.
8. Hvis du også vil importere vedhæftninger, slå **Download all attachments** til.
9. Klik på **Importér** og vent til importen er fuldført.
10. Du er færdig!

![[Roam-Importer-importing.png]]
