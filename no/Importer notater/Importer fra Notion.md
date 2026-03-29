---
permalink: import/notion
---
Obsidian lar deg enkelt migrere notatene dine fra Notion ved hjelp av [[Importer|Importer-tillegget]]. Dette vil konvertere Notion-dataene dine til holdbare Markdown-filer som du kan bruke frakoblet med Obsidian og mange andre apper.

Obsidian tilbyr to måter å importere Notion-dataene dine på:

1. **API-import** bevarer hele arbeidsområdet ditt, inkludert databaser og formler som konverteres til [[Introduksjon til Bases|Bases]], men krever et Notion-integrasjonstoken og internettforbindelse.
2. **Filimport** bevarer ikke databaser, men krever ikke et API-token eller internettforbindelse.

## API-import

### Opprett et Notion API-integrasjonstoken

For å få tilgang til Notion-dataene dine via API-et trenger du et integrasjonstoken. Dette trinnet tar omtrent 2 minutter å fullføre.

Tokenet er en lang streng med tall og bokstaver som vanligvis starter med `ntn_...` som lar deg laste ned dataene dine fra Notion.

1. Logg inn på [Notion Integrations](https://www.notion.so/profile/integrations/internal)-dashbordet.
2. Velg **New integration**.

![[notion-integration.png#interface]]

2. Gi integrasjonen din et navn, f.eks. «Personal». Hvilket som helst navn kan brukes.
3. Velg arbeidsområdet du vil eksportere.
4. Klikk **Save** og fortsett til **Configure integration settings**.
5. I fanen **Configuration** er API-tokenet ditt tilgjengelig i feltet **Internal Integration Secret**.
6. Velg **Show** og deretter **Copy**.
7. Lagre tokenet på et trygt sted, som passordbehandleren din.

![[notion-token.png#interface]]

Gi deretter integrasjonen din tilgang til Notion-sidene og databasene du vil importere.

1. Gå til fanen **Access** for integrasjonen du nettopp opprettet.
2. Klikk **Edit access**.
3. Legg til sidene og databasene du vil importere.

Du kan nå konvertere dataene dine med Obsidian Importer.

### Importer Notion-dataene dine via API

Du trenger det offisielle Obsidian [[Importer]]-tillegget, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]]**.
2. Gå til **Community-utvidelser** og [installer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktiver Importer-tillegget.
4. Åpne **Importer**-tillegget via kommandopaletten eller verktøylinje-ikonet.
5. Under **File format** velg **Notion (API)**
6. Under **API token** limer du inn din **Internal Integration Secret** fra Notion.
7. Klikk **Last inn** for å velge databasene og sidene du vil importere.
8. Gjennomgå og rediger importalternativene.
9. Velg **Importer** og vent til importen er fullført
10. Du er ferdig!

### Begrensninger

> [!info] API-import er nytt
> Notion API-importøren er ny. På grunn av kompleksiteten til Notion-arbeidsområder kan noen spesialtilfeller ikke ha blitt tatt hensyn til. Hvis du støter på problemer med konverteringen, [send inn en feilrapport](https://github.com/obsidianmd/obsidian-importer/issues) slik at vi kan forbedre den.

På grunn av Notion API-hastighetsbegrensninger kan import av store arbeidsområder ta betydelig tid. Vennligst vær tålmodig.

På grunn av begrensninger i Notion API-et er noen data ikke tilgjengelige eller kan ikke konverteres:

- Bare primærvisningen for hver database importeres.
- [Koblede datakilder](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) importeres ikke: *"Notion's API does not currently support linked data sources. When sharing a database with your integration, make sure it contains the original data source!"*
- `People`-funksjoner: `name()` og `email()`
- `Text`-funksjoner: `style()` og `unstyle()`

I tillegg vil Importer gjøre følgende endringer:

- Sider uten undersider eller databaser importeres som `[filnavn].md` i stedet for `[filnavn]/[filnavn].md`.
- Databaser representeres alltid som mapper kalt `[databasenavn]` med en `[databasenavn].base`-fil inni.

## Filimport

Filimport er en alternativ måte å importere Notion-dataene dine på. Denne metoden bevarer ikke databaser, men krever ikke et API-token eller internettforbindelse.

### Eksporter dataene dine fra Notion

For å klargjøre dataene dine for import, må du eksportere hele arbeidsområdet ditt ved å bruke Notions HTML-eksportformat. Vi anbefaler at du ikke bruker Notions Markdown-eksport da den utelater viktige data. Du må ha administratortilgang til Notion-arbeidsområdet for å eksportere alt innhold i arbeidsområdet.

1. Gå til **[[Innstillinger]]** øverst i Notion-sidefeltet.
2. Under **Workspace** velg **General**.
3. Finn og velg **Export all workspace content**.
4. Under **Export format** velg **HTML**.
5. Velg **Include everything**.
6. Aktiver **Create folders for subpages**.
7. Du vil motta en `.zip`-fil via e-post eller direkte i nettleseren.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Importer Notion .zip-filen din

Du trenger det offisielle Obsidian [[Importer]]-tillegget, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]]**.
2. Gå til **Community-utvidelser** og [installer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktiver Importer-tillegget.
4. Åpne **Importer**-tillegget via kommandopaletten eller verktøylinje-ikonet.
5. Under **File format** velg **Notion (.zip)**
6. Velg `.zip`-filen med Notion-filer du vil importere. *Det anbefales å importere alt fra Notion på én gang slik at interne lenker kan sammenkobles riktig.*
7. _Valgfritt_, velg en mappe for importen. Notion-sidene og databasene dine vil bli nestet inne i denne mappen.
8. Aktiver **Save parent pages in subfolders** for å beholde Notion-strukturen. *Merk at i Notion kan du skrive innhold i mapper, dette er ikke mulig i Obsidian og disse sidene vil bli lagt til som en underside under mappen.*
9. Velg **Importer** og vent til importen er fullført
10. Du er ferdig!

### Feilsøking

Hvis du støter på problemer under import fra Notion:

- Sørg for at du bruker **HTML** som eksportformat i Notion, **ikke Markdown**.
- Hvis Obsidian ser ut til å fryse under import, deaktiver community-utvidelser og prøv igjen.

Støter du på noe annet? Søk i [Importer-repositoriet](https://github.com/obsidianmd/obsidian-importer/issues) for å se om andre har opplevd det samme.

#### Import av store arbeidsområder

Hvis du importerer et arbeidsområde med flere gigabyte med data, kan eksporten fra Notion inneholde nestede `.zip`-filer. I dette tilfellet kan du se en feilmelding ved import som ser omtrent slik ut:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Hvis du ser denne feilen, kan du pakke ut filen fra Notion, og deretter importere de nestede `Export-{id}-Part-1.zip`-filene.
