---
permalink: import/html
cssclasses:
  - soft-embed
---
Obsidian låter dig enkelt importera enskilda HTML-filer och hela mappar med HTML-filer med hjälp av det officiella [[Importerare|importerartillägget]]. Detta är användbart om du vill spara hela webbplatser i [[Obsidian Flavored Markdown|Markdown]]-format, eller om du vill importera data från ett verktyg som exporterar till HTML.

Om du importerar anteckningar från en specifik app kanske du först vill granska listan över appar som stöds av [[Importerare|importerartillägget]] för att kontrollera om det finns en specifik konverterare som bättre bevarar de data du migrerar.

## Importera HTML-data till Obsidian

Du behöver det officiella Obsidian-tillägget [[Importerare]], som du kan [installera här](obsidian://show-plugin?id=obsidian-importer).

1. Öppna **[[Inställningar]]**.
2. Gå till **Gemenskapstillägg** och [installera Importerare](obsidian://show-plugin?id=obsidian-importer).
3. Aktivera Importerare-tillägget.
4. Öppna **Importerare**-tillägget via kommandopaletten eller ribbon-ikonen.
5. Under **Filformat** välj **HTML (.html).**
6. Välj platsen för dina HTML-filer eller mappar.
7. Välj **Importera** för att granska den genererade mallen och förhandsgranska exempel från dina filer.
8. Välj **Importera** igen och vänta tills importen är klar.

### Importera inställningar

- **Storleksgräns för bilagor**: Hoppa över import av bilagor som är större än den angivna storleken.
- **Minsta bildstorlek**: Hoppa över import av bilder som är mindre än den angivna storleken i någon dimension. Kan användas för att hoppa över ikoner och logotyper.

## Mallar

Använd [[Mallar för Importer|Importerarmallar]] för att fullt konfigurera hur dina data importeras.

![[Mallar för Importer#Variables]]

Dessutom tillhandahåller HTML-import många av samma variabler som [[Introduktion till Obsidian Web Clipper|Web Clipper]]:

| Variabel | Beskrivning |
| --- | --- |
| `{{author}}` | Sidans författare. |
| `{{contentHtml}}` | Extraherat sidinnehåll i HTML-format. |
| `{{description}}` | Sidbeskrivning eller utdrag. |
| `{{domain}}` | Sidans domän. |
| `{{favicon}}` | Favicon-URL. |
| `{{fullHtml}}` | Obearbetad HTML för hela sidan. |
| `{{image}}` | URL för social delningsbild. |
| `{{language}}` | Sidans språk. |
| `{{published}}` | Publiceringsdatum, som kan formateras med `date`-filtret. |
| `{{site}}` | Webbplatsnamn eller utgivare. |
| `{{url}}` | Käll-URL som hittats i det importerade dokumentet, när tillgänglig. |
| `{{words}}` | Antal ord. |
