---
permalink: import/html
cssclasses:
  - soft-embed
---
Obsidian lar deg enkelt importere individuelle HTML-filer og hele mapper med HTML-filer ved hjelp av den offisielle [[Importer|Importer-utvidelsen]]. Dette er nyttig hvis du vil lagre hele nettsteder i [[Obsidian Flavored Markdown|Markdown]]-format, eller hvis du vil importere data fra et verktøy som eksporterer til HTML.

Hvis du importerer notater fra en bestemt app, kan det være lurt å først se gjennom listen over apper som støttes av [[Importer|Importer-utvidelsen]] for å sjekke om det finnes en spesifikk konvertering som bedre vil bevare dataene du migrerer.

## Importer HTML-data til Obsidian

Du trenger den offisielle Obsidian [[Importer]]-utvidelsen, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]]**.
2. Gå til **Community-utvidelser** og [installer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktiver Importer-utvidelsen.
4. Åpne **Importer**-utvidelsen ved hjelp av kommandopaletten eller verktøylinjeikonet.
5. Under **Filformat** velg **HTML (.html).**
6. Velg plasseringen til HTML-filene eller -mappene dine.
7. Velg **Importer** for å se gjennom den genererte malen og forhåndsvise eksempler fra filene dine.
8. Velg **Importer** igjen og vent til importen er fullført.

### Importer innstillinger

- **Størrelsesgrense for vedlegg**: Hopp over importering av vedlegg som er større enn den angitte størrelsen.
- **Minimum bildestørrelse**: Hopp over importering av bilder som er mindre enn den angitte størrelsen i en av dimensjonene. Kan brukes til å hoppe over ikoner og logoer.

## Maler

Bruk [[Importer-maler|Importer-maler]] for å konfigurere fullt ut hvordan dataene dine importeres.

![[Importer-maler#Variables]]

I tillegg gir HTML-import mange av de samme variablene som [[Introduksjon til Obsidian Web Clipper|Web Clipper]]:

| Variabel | Beskrivelse |
| --- | --- |
| `{{author}}` | Forfatter av siden. |
| `{{contentHtml}}` | Ekstrahert sideinnhold i HTML-format. |
| `{{description}}` | Sidebeskrivelse eller utdrag. |
| `{{domain}}` | Domene for siden. |
| `{{favicon}}` | Favicon-URL. |
| `{{fullHtml}}` | Ubehandlet HTML for hele siden. |
| `{{image}}` | URL for sosial delingsbilde. |
| `{{language}}` | Sidespråk. |
| `{{published}}` | Publiseringsdato, som kan formateres med `date`-filteret. |
| `{{site}}` | Nettstedsnavn eller utgiver. |
| `{{url}}` | Kilde-URL funnet i det importerte dokumentet, når tilgjengelig. |
| `{{words}}` | Ordtelling. |
