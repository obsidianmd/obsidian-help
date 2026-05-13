---
permalink: import/notion
aliases:
  - Import fra Notion
  - Import af noter/Import fra Notion
---
Obsidian gør det nemt at migrere dine noter fra Notion ved hjælp af [[Importer|Importer-pluginet]]. Dette vil konvertere dine Notion-data til holdbare Markdown-filer, som du kan bruge offline med Obsidian og mange andre applikationer.

Obsidian tilbyder to måder at importere dine Notion-data på:

1. **API-import** bevarer hele dit arbejdsområde inklusiv Databases og formler, som konverteres til [[Introduktion til Baser|Baser]], men kræver et Notion-integrationstoken og en internetforbindelse.
2. **Filimport** bevarer ikke Databases, men kræver hverken et API-token eller internetforbindelse.

## API-import

### Opret et Notion API-integrationstoken

For at få adgang til dine Notion-data via API'et skal du bruge et integrationstoken. Dette trin tager cirka 2 minutter at gennemføre.

Tokenet er en lang streng af tal og bogstaver, der typisk starter med `ntn_...`, som giver dig mulighed for at hente dine data fra Notion.

1. Log ind på dit [Notion Integrations](https://www.notion.so/profile/integrations/internal)-dashboard.
2. Vælg **New integration**.

![[notion-integration.png#interface]]

2. Giv din integration et navn, f.eks. "Personal". Ethvert navn kan bruges.
3. Vælg det arbejdsområde, du vil eksportere.
4. Klik på **Save** og fortsæt til **Configure integration settings**.
5. Under fanen **Configuration** er dit API-token tilgængeligt i feltet **Internal Integration Secret**.
6. Vælg **Show** og derefter **Copy**.
7. Gem tokenet et sikkert sted som f.eks. din adgangskodemanager.

![[notion-token.png#interface]]

Giv derefter din integration adgang til de Notion-sider og -databaser, du vil importere.

1. Gå til fanen **Access** for den integration, du lige har oprettet.
2. Klik på **Edit access**.
3. Tilføj de sider og databaser, du vil importere.

Du kan nu konvertere dine data ved hjælp af Obsidian Importer.

### Importér dine Notion-data via API

Du skal bruge det officielle Obsidian [[Importer]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]]**.
2. Gå til **Fællesskabsplugins** og [installér Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktivér Importer-pluginet.
4. Åbn **Importer**-pluginet ved hjælp af kommandopaletten eller værktøjslinjeikonet.
5. Under **Filformat** vælg **Notion (API)**
6. Under **API-token** indsæt dit **Internal Integration Secret** fra Notion.
7. Klik på **Indlæs** for at vælge de databaser og sider, du vil importere.
8. Gennemgå og rediger importindstillingerne.
9. Vælg **Importér** og vent, til importen er fuldført
10. Du er færdig!

### Begrænsninger

> [!info] API-import er nyt
> Notion API-importøren er ny. På grund af kompleksiteten af Notion-arbejdsområder er der muligvis ikke taget højde for alle grænsetilfælde. Hvis du støder på problemer med konverteringen, [indsend en fejlrapport](https://github.com/obsidianmd/obsidian-importer/issues), så vi kan forbedre den.

På grund af Notion API-hastighedsbegrænsninger kan import af store arbejdsområder tage betydelig tid. Vær tålmodig.

På grund af begrænsninger i Notion API'et er nogle data ikke tilgængelige eller kan ikke konverteres:

- Kun den primære visning for hver database importeres.
- [Linkede datakilder](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) importeres ikke: *"Notions API understøtter i øjeblikket ikke linkede datakilder. Når du deler en database med din integration, skal du sikre dig, at den indeholder den originale datakilde!"*
- `People`-funktioner: `name()` og `email()`
- `Text`-funktioner: `style()` og `unstyle()`

Derudover vil Importer foretage følgende ændringer:

- Sider uden undersider eller databaser importeres som `[filnavn].md` i stedet for `[filnavn]/[filnavn].md`.
- Databaser repræsenteres altid som mapper med navnet `[databasenavn]` med en `[databasenavn].base`-fil indeni.

## Filimport

Filimport er en alternativ måde at importere dine Notion-data på. Denne metode bevarer ikke Databases, men den kræver hverken et API-token eller internetforbindelse.

### Eksportér dine data fra Notion

For at forberede dine data til import skal du eksportere hele dit arbejdsområde ved hjælp af Notions HTML-eksportformat. Vi anbefaler, at du ikke bruger Notions Markdown-eksport, da den udelader vigtige data. Du skal have administratoradgang til Notion-arbejdsområdet for at eksportere alt arbejdsområdeindhold.

1. Gå til **[[Indstillinger]]** øverst i Notion-sidebjælken.
2. Under **Workspace** vælg **General**.
3. Find og vælg **Export all workspace content**.
4. Under **Export format** vælg **HTML**.
5. Vælg **Include everything**.
6. Aktivér **Create folders for subpages**.
7. Du vil modtage en `.zip`-fil via e-mail eller direkte i browseren.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Importér din Notion .zip-fil

Du skal bruge det officielle Obsidian [[Importer]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]]**.
2. Gå til **Fællesskabsplugins** og [installér Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktivér Importer-pluginet.
4. Åbn **Importer**-pluginet ved hjælp af kommandopaletten eller værktøjslinjeikonet.
5. Under **Filformat** vælg **Notion (.zip)**
6. Vælg den `.zip`-fil med Notion-filer, du vil importere. *Det anbefales at importere hele dit Notion på én gang, så interne links kan afstemmes korrekt.*
7. _Valgfrit_, vælg en mappe til importen. Dine Notion-sider og -databaser vil blive indlejret i denne mappe.
8. Aktivér **Gem overordnede sider i undermapper** for at bevare Notion-strukturen. *Bemærk, at du i Notion kan skrive indhold i mapper – dette er ikke muligt i Obsidian, og disse sider vil blive tilføjet som en underside under mappen.*
9. Vælg **Importér** og vent, til importen er fuldført
10. Du er færdig!

### Fejlfinding

Hvis du støder på problemer under import fra Notion:

- Sørg for at bruge **HTML** som eksportformat i Notion, **ikke Markdown**.
- Hvis Obsidian ser ud til at fryse under importen, deaktivér fællesskabsplugins og prøv igen.

Stødte du på noget andet? Søg i [Importer-repositoriet](https://github.com/obsidianmd/obsidian-importer/issues) for at se, om andre har oplevet det.

#### Import af store arbejdsområder

Hvis du importerer et arbejdsområde med flere gigabyte data, kan eksporten fra Notion indeholde indlejrede `.zip`-filer. I dette tilfælde kan du se en importfejlmeddelelse, der ser nogenlunde sådan ud:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Hvis du ser denne fejl, kan du pakke filen fra Notion ud og derefter importere de indlejrede `Export-{id}-Part-1.zip`-filer.
