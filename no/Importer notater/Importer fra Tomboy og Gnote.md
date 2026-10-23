---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian lar deg migrere notater fra Tomboy og Gnote ved å bruke den offisielle [[Importer notater|Importer-utvidelsen]]. Importer leser appenes `.note`-filer direkte og konverterer XML-innholdet deres til Markdown.

## Finn notatfilene dine

Tomboy og Gnote lagrer normalt notater i disse mappene:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` eller `~/.local/share/gnote`

Den nøyaktige plasseringen kan variere hvis du har flyttet datamappen eller bruker en annen versjon av appen.

## Importer Tomboy- eller Gnote-notatene dine

1. Åpne **[[Innstillinger]] → Community-utvidelser** og [installer Importer](obsidian://show-plugin?id=obsidian-importer).
2. Aktiver Importer-utvidelsen.
3. Åpne **Importer** ved å bruke [[Kommandovelger|kommandopaletten]] eller verktøylinjeikonet.
4. Under **Filformat**, velg **Tomboy/Gnote (.note)**.
5. Velg individuelle `.note`-filer eller mappen som inneholder dem.
6. Se gjennom importalternativene, den genererte malen og forhåndsvisningseksemplene.
7. Velg **Importer** og vent til importen er ferdig.

## Maler

Bruk [[Importer-maler]] til å konfigurere fullstendig hvordan dataene dine importeres.

![[Importer-maler#Variabler]]
