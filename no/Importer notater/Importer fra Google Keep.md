---
permalink: import/google-keep
---
Obsidian lar deg enkelt migrere notatene dine fra Google Keep ved hjelp av [[Importer|Importer-utvidelsen]]. Dette vil konvertere Google Keep-dataene dine til holdbare Markdown-filer som du kan bruke med Obsidian og mange andre apper.

## Eksporter dataene dine fra Google Keep

1. Gå til [Google Takeout](https://takeout.google.com/settings/takeout) og logg inn på Google-kontoen din.
2. Klikk **Opphev valg av alle** øverst i høyre hjørne.
3. Rull ned og velg **Keep** fra listen.
4. Rull ned til bunnen av siden og klikk **Neste trinn**.
5. På neste skjerm klikker du på **Opprett eksport**-knappen.
6. Last ned `.zip`-filen når den er tilgjengelig.

## Importer Google Keep-dataene dine til Obsidian

Du trenger den offisielle Obsidian [[Importer]]-utvidelsen, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]]**.
2. Gå til **Community-utvidelser** og [installer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktiver Importer-utvidelsen.
4. Åpne **Importer**-utvidelsen ved hjelp av kommandopaletten eller verktøylinjeikonet.
5. Under **Filformat** velger du **Google Keep (.zip).**
6. Velg plasseringen til `.zip`-filen din.
7. Klikk **Importer** og vent til importen er fullført.
8. Da er du ferdig!

### Støttede funksjoner

- Alle sjekklister vil importeres som toppnivåelementer fordi Google Keep ikke eksporterer innrykksinformasjon.
- Påminnelser og brukertilordninger på notater vil ikke bli importert fordi disse funksjonene ikke støttes av Obsidian.
- All annen informasjon bør importeres som en kombinasjon av innhold og tagger.
