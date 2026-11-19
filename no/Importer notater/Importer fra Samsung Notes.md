---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian lar deg migrere notatene dine fra Samsung Notes ved hjelp av [[Importer|Importer-tillegget]]. Dette konverterer notatene dine til varige Markdown-filer du kan bruke med Obsidian og mange andre apper.

## Eksporter notatene dine fra Samsung Notes

Samsung Notes lagrer hvert notat som en Samsung Notes-fil (`.sdocx`).

1. Åpne Samsung Notes på telefonen eller nettbrettet ditt.
2. Trykk og hold på et notat, velg deretter alle notatene du vil eksportere.
3. Trykk på **Lagre som fil**, og velg deretter **Samsung Notes-fil**.
4. Velg en mappe og trykk på **Lagre**.
5. Flytt `.sdocx`-filene til enheten der du bruker Obsidian, for eksempel med en USB-kabel, Quick Share eller en skytjeneste.

Hvis du har mange filer, kan du legge dem i en `.zip`-fil og importere den i stedet. Samsung Notes inkluderer ikke mappene sine i filene den lagrer, men Importer beholder mappene inne i `.zip`-filen. For å holde notatene dine organisert, lagre notatene fra hver Samsung Notes-mappe i en mappe med samme navn før du zipper dem.

## Importer Samsung Notes-dataene dine til Obsidian

Du trenger det offisielle Obsidian [[Importer]]-tillegget, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]]**.
2. Gå til **Community-utvidelser** og [installer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktiver Importer-tillegget.
4. Åpne **Importer**-tillegget ved hjelp av kommandopaletten eller verktøylinjeikonet.
5. Under **Filformat**, velg **Samsung Notes (.sdocx)**.
6. Velg `.sdocx`-filene dine, eller en `.zip`-fil som inneholder dem.
7. Velg **Importer** for å gjennomgå den genererte malen og forhåndsvise eksempler fra notatene dine.
8. Velg **Importer** igjen og vent til importen er fullført.

## Begrensninger

- Håndskrift og tegnede figurer importeres som et SVG-bilde på slutten av notatet. Streker beholder formen og fargen sin, men ikke den varierende bredden fra en trykksensitiv penn. Figurer og linjer importeres i svart.
- Tekstbokser, bilder plassert på siden og annoterte PDF-filer importeres ikke ennå.
- Sjekkliste-elementer importeres som uavkryssede.
- Tekstfarger, skrifttyper og skriftstørrelser beholdes ikke.
- Lås opp låste notater i Samsung Notes før du eksporterer dem.

## Maler

Bruk [[Importer-maler]] for å konfigurere fullstendig hvordan Samsung Notes-dataene dine importeres.

![[Importer-maler#Variabler]]
