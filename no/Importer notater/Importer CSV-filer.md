---
permalink: import/csv
---
Obsidian lar deg importere data fra CSV-filer ved hjelp av den offisielle [[Markdown-importør|Importør-utvidelsen]]. Dette er nyttig hvis du har tabulære data lagret i apper som Excel, Google Sheets, Numbers, Notion eller Airtable.

CSV-import genererer Markdown-filer for hver rad og en [[Introduksjon til Bases|Base]]-fil som viser alle de importerte filene som en tabell.

Hvis du importerer notater fra en bestemt app, kan det være lurt å først sjekke listen over apper som støttes av [[Markdown-importør|Importør-utvidelsen]] for å se om det finnes en spesifikk konverterer som bedre bevarer dataene du migrerer.

## Opprett notater fra CSV-data i Obsidian

Du trenger den offisielle Obsidian [[Markdown-importør|Importør]]-utvidelsen, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]]**.
2. Gå til **Community-utvidelser** og [installer Importør](obsidian://show-plugin?id=obsidian-importer).
3. Aktiver Importør-utvidelsen.
4. Åpne **Importør**-utvidelsen ved hjelp av kommandopaletten eller verktøylinje-ikonet.
5. Under **Filformat** velg **CSV (.csv).**
6. Velg plasseringen til CSV-filen din.
7. Klikk **Importer** for å konfigurere hvordan data i CSV-filen din vil bli konvertert til notater med [[Egenskaper]].
8. Klikk **Fortsett** og vent til importen er fullført.
9. Du er ferdig!

## Konfigurer hvordan CSV-felt importeres

I det andre trinnet av CSV-importen kan du velge hvordan data importeres ved hjelp av en mal.

Hver kolonne i CSV-filen din tilordnes en variabel kalt `{{column_name}}` som representerer navnet på overskriften i filen din. Du kan bruke denne variabelen til å definere notatets tittel, plassering, innhold og [[Egenskaper|egenskaper]].
