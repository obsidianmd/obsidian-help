---
permalink: import/onenote
---
Obsidian lar deg enkelt migrere notatene dine fra Microsoft OneNote ved hjelp av [[Markdown-importør|Importer-tillegget]]. Dette vil konvertere OneNote-dataene dine til varige Markdown-filer som du kan bruke med Obsidian og mange andre apper.

> [!Warning]
> Bare notatbøker som eies av din personlige konto kan importeres. Delte notater, eller kontoer fra jobb- og skolekontoer støttes ikke.

## Importer OneNote-dataene dine til Obsidian

Du trenger det offisielle Obsidian [[Markdown-importør]]-tillegget, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]]**.
2. Gå til **Community-utvidelser** og [installer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktiver Importer-tillegget.
4. Åpne **Importer**-tillegget ved hjelp av kommandopaletten eller verktøylinjeikonet.
5. Under **Filformat** velg **Microsoft OneNote**.
6. Klikk **Logg inn** for å åpne nettleseren din til Microsofts påloggingsside. Skriv inn legitimasjonen for Microsoft-kontoen din som inneholder OneNote-notatbøkene dine. Mer informasjon om Microsofts påloggingsprosess er tilgjengelig nedenfor.
7. Klikk **Godta** for å gi Obsidian tillatelse til å se OneNote-notatbøkene dine.
8. Klikk **Åpne lenke** for å la nettleseren omdirigere deg til Obsidian-appen.
9. I Obsidian-appen vil Importer-dialogen nå vise at du er logget inn og liste opp OneNote-notatbøkene og -seksjonene dine. Merk av seksjonene du ønsker å importere.

![[OneNote-Importer-Select-Sections.png]]

10. Klikk **Importer** og vent til importen er fullført.
11. Du er ferdig!

## Feilsøking

### Ingen seksjoner eller notatbøker vises

Sørg for at notatbøkene du prøver å importere er synkronisert til OneDrive og synlige i OneNote Web. De må eies av deg (delte notatbøker skrevet av andre støttes ikke).

Hvis en bestemt seksjon mangler, sørg for at den ikke er en låst seksjon — disse er usynlige uten å fjerne låsen først.

### Importerte notater er tomme eller mangler innhold

Dette problemet kan oppstå med notatbøker du sjelden bruker. For å løse problemet, følg disse trinnene:

1. Åpne [OneNote Web](https://onenote.com/notebooks) i nettleseren din.
2. **Høyreklikk** på notatbøkene som mangler innhold.
3. Velg **Eksporter notatbok** fra menyen.
4. **Pakk ut** filen du nettopp lastet ned til en mappe.
5. Last opp OneNote-notatbøkene dine [her](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Åpne **Obsidian Importer** og prøv å importere på nytt.

Hvis du har fulgt disse tipsene og problemet ditt fortsatt ikke er løst, er det mulig at det er et midlertidig problem med Microsofts servere. Hvis det er tilfellet, vent noen minutter og prøv igjen. Hvis problemet vedvarer, vennligst opprett en sak på [Obsidian Importer GitHub-repositoriet](https://github.com/obsidianmd/obsidian-importer/issues).

## Personvern

Obsidian Importer-tillegget bruker [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) for å autentisere med Microsoft-kontoen din og importere OneNote-notatbøkene dine. Dette gir et korttids tilgangstoken til kontoen din som bare brukes fra datamaskinen din og aldri lagres. Etter at importen er fullført kan du valgfritt tilbakekalle tokenet fra [Microsofts apper og tjenester-siden](https://account.live.com/consent/Manage).
