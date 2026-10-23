---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Met Obsidian kun je notities migreren vanuit Tomboy en Gnote met behulp van de officiële [[Importeren|Importeur-plug-in]]. Importeur leest de `.note`-bestanden van de apps rechtstreeks en converteert hun XML-inhoud naar Markdown.

## Zoek je notitiebestanden

Tomboy en Gnote slaan notities normaal gesproken op in deze mappen:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` of `~/.local/share/gnote`

De exacte locatie kan afwijken als je de gegevensmap hebt verplaatst of een andere versie van de app gebruikt.

## Je Tomboy- of Gnote-notities importeren

1. Open **[[Instellingen]] → Communityplug-ins** en [installeer Importeur](obsidian://show-plugin?id=obsidian-importer).
2. Activeer de Importeur-plug-in.
3. Open **Importeur** via het [[Opdrachtenpaneel|opdrachtenpalet]] of het werkbalkpictogram.
4. Selecteer onder **Bestandsformaat** de optie **Tomboy/Gnote (.note)**.
5. Kies individuele `.note`-bestanden of de map die ze bevat.
6. Bekijk de importopties, het gegenereerde sjabloon en voorbeelden.
7. Selecteer **Importeren** en wacht tot het importeren is voltooid.

## Sjablonen

Gebruik [[Importeur-sjablonen]] om volledig te configureren hoe je gegevens worden geïmporteerd.

![[Importeur-sjablonen#Variabelen]]
