---
permalink: import/csv
cssclasses:
  - soft-embed
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
7. Velg **Importer** for å konfigurere hvordan data i CSV-filen din vil bli konvertert til notater med [[Egenskaper]].
8. Velg **Fortsett** for å gjennomgå den genererte malen og forhåndsvise eksempler fra radene dine.
9. Velg **Importer** og vent til importen er fullført.

## Konfigurer hvordan CSV-felt importeres

I feltkonfigurasjon-trinnet kan du velge hvordan data importeres. Importør genererer en mal fra CSV-overskriftene, bruker den første kolonnen som det opprinnelige notatnavnet, og oppretter en egenskap for hver kolonne.

## Maler

Bruk [[Importer-maler|Importør-maler]] for å fullt ut konfigurere hvordan dataene dine importeres.

Hver CSV-kolonne er tilgjengelig via overskriften sin. Hvis en kolonne ikke har noen overskrift, bruker Importør det genererte kolonnenavnet.

Bruk klammenotasjon slik at mellomrom og tegnsetting håndteres trygt:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Importer-maler#Variables]]
