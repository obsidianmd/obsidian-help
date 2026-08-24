---
permalink: import/csv
cssclasses:
  - soft-embed
---
Obsidian giver dig mulighed for at importere data fra CSV-filer ved hjælp af det officielle [[Importér|Importer-plugin]]. Dette er nyttigt, hvis du har tabeldata gemt i applikationer som Excel, Google Sheets, Numbers, Notion eller Airtable.

CSV-import genererer Markdown-filer for hver række og en [[Introduktion til Baser|Base]]-fil, der viser alle de importerede filer som en tabel.

Hvis du importerer noter fra en bestemt applikation, kan det være en god idé først at gennemgå listen over applikationer, der understøttes af [[Importér|Importer-plugin]], for at tjekke om der findes en specifik konverter, der bedre bevarer de data, du migrerer.

## Opret noter fra CSV-data i Obsidian

Du skal bruge det officielle Obsidian [[Importér]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]]**.
2. Gå til **Fællesskabsplugins** og [installér Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktivér Importer-pluginet.
4. Åbn **Importer**-pluginet ved hjælp af kommandopaletten eller værktøjslinjeikonen.
5. Under **Filformat** vælg **CSV (.csv).**
6. Vælg placeringen af din CSV-fil.
7. Vælg **Importér** for at konfigurere, hvordan data i din CSV-fil konverteres til noter med [[Egenskaber]].
8. Vælg **Fortsæt** for at gennemgå den genererede skabelon og forhåndsvise eksempler fra dine rækker.
9. Vælg **Importér** og vent, til importen er fuldført.

## Konfigurér, hvordan CSV-felter importeres

I feltkonfigurationstrinnet kan du vælge, hvordan data importeres. Importer genererer en skabelon ud fra CSV-overskrifterne, bruger den første kolonne til det indledende notenavn og opretter en egenskab for hver kolonne.

## Skabeloner

Brug [[Importér skabeloner|Importer-skabeloner]] til fuldt ud at konfigurere, hvordan dine data importeres.

Hver CSV-kolonne er tilgængelig via sin overskrift. Hvis en kolonne ikke har nogen overskrift, bruger Importer det genererede kolonnenavn.

Brug parentesnotation, så mellemrum og tegnsætning håndteres sikkert:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Importér skabeloner#Variabler]]
