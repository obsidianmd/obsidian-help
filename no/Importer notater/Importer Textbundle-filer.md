---
permalink: import/textbundle
cssclasses:
  - soft-embed
---
Obsidian lar deg enkelt importere [Textbundle](https://textbundle.org/)-filer ved hjelp av den offisielle [[Importer|Importer-utvidelsen]].

Hvis du importerer notater fra en spesifikk app, kan det være lurt å først se gjennom listen over apper som støttes av [[Importer|Importer-utvidelsen]] for å sjekke om det finnes en spesifikk konverterer som bedre ivaretar dataene du migrerer.

Textbundle-formatet pakker Markdown-tekst og alle refererte bilder inn i én enkelt fil, og gir en mer sømløs måte å flytte ut av en sandkasseapplikasjon. Textbundle-eksport støttes av [mange apper](https://textbundle.org/), inkludert Agenda, Craft, Taio, Ulysses, Zettlr og flere.

## Importer Textbundle-filer til Obsidian

Du trenger den offisielle Obsidian [[Importer]]-utvidelsen, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]]**.
2. Gå til **Community-utvidelser** og [installer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktiver Importer-utvidelsen.
4. Åpne **Importer**-utvidelsen ved hjelp av kommandopaletten eller verktøylinjeikonet.
5. Under **Filformat** velg **Textbundle (.textbundle, .textpack).**
6. Velg plasseringen til Textbundle- eller Textpack-filene dine. Zip-filer støttes også.
7. Velg **Importer** for å se gjennom den genererte malen og forhåndsvise eksempler fra notatene dine.
8. Velg **Importer** igjen og vent til importen er fullført.

## Tilpass importerte notater

Før importen starter, viser Importer en forhåndsvisning generert fra de valgte Textbundle-filene. Du kan redigere den genererte malen eller velge en Markdown-mal fra hvelvet ditt. Se [[Importer-maler]].

## Feilsøking

### Ingen filer er valgt for import

Textbundle-importen kan bare importere én Textbundle-fil om gangen, og bare på Mac-enheter. I stedet kan du komprimere alle Textbundle-filene du ønsker å importere til én enkelt .zip-fil og importere denne i stedet fra hvilken som helst enhet.

## Maler

Bruk [[Importer-maler|Importer-maler]] for å konfigurere fullstendig hvordan dataene dine importeres.

![[Importer-maler#Variables]]
