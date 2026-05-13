---
permalink: import/bear
aliases:
  - Import fra Bear
  - Import af noter/Import fra Bear
---
Obsidian gør det nemt at migrere dine noter fra Bear ved hjælp af [[Importer|Importer-pluginet]]. Dette vil konvertere dine Bear-data til holdbare Markdown-filer, som du kan bruge med Obsidian og mange andre applikationer.

## Eksportér dine data fra Bear

Obsidian bruger Bears backupformat `.bear2bk`-filer. Du kan finde Bears instruktioner til at oprette backup [på Bears hjemmeside](https://bear.app/faq/backup-restore/).

1. Åbn Bear.
2. Opret en backup
	1. På macOS: **Fil** → **Backup notes**.
	2. På iOS: klik på menuen mere (⋮) øverst i sidebjælken og vælg **Backup all notes**.
3. Vælg en placering til din backupfil.
4. Klik på **Export notes**.
5. Du skulle nu have én `.bear2bk`-fil, der indeholder alle dine noter.

## Importér dine Bear-data til Obsidian

Du skal bruge det officielle Obsidian [[Importer]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]]**.
2. Gå til **Fællesskabsplugins** og [installér Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktivér Importer-pluginet.
4. Åbn **Importer**-pluginet ved hjælp af kommandopaletten eller ikonet på værktøjslinjen.
5. Under **Filformat** vælg **Bear (.bear2bk)**.
6. Vælg placeringen af din Bear-backupfil.
7. Klik på **Importér** og vent, indtil importen er fuldført.
8. Så er du færdig!
