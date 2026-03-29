---
permalink: import/bear
---
Obsidian lar deg enkelt migrere notatene dine fra Bear ved hjelp av [[Markdown-importør|Importer-utvidelsen]]. Dette vil konvertere Bear-dataene dine til holdbare Markdown-filer som du kan bruke med Obsidian og mange andre apper.

## Eksporter dataene dine fra Bear

Obsidian bruker Bears sikkerhetskopieringsformat `.bear2bk`-filer. Du kan finne Bears instruksjoner for å opprette sikkerhetskopien [på Bears nettside](https://bear.app/faq/backup-restore/).

1. Åpne Bear.
2. Opprett en sikkerhetskopi
	1. På macOS: **File** → **Backup notes**.
	2. På iOS: klikk på mer-menyen (⋮) øverst i sidefeltet og velg **Backup all notes**.
3. Velg en plassering for sikkerhetskopifilen.
4. Klikk **Export notes**.
5. Du skal nå ha én `.bear2bk`-fil som inneholder alle notatene dine.

## Importer Bear-dataene dine til Obsidian

Du trenger den offisielle Obsidian [[Markdown-importør|Importer]]-utvidelsen, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]]**.
2. Gå til **Community-utvidelser** og [installer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktiver Importer-utvidelsen.
4. Åpne **Importer**-utvidelsen ved hjelp av kommandopaletten eller verktøylinje-ikonet.
5. Under **Filformat** velg **Bear (.bear2bk)**.
6. Velg plasseringen til Bear-sikkerhetskopifilen din.
7. Klikk **Importer** og vent til importen er fullført.
8. Du er ferdig!
