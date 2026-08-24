---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian us permet migrar notes des de Tomboy i Gnote utilitzant el [[Importador|connector Importador]] oficial. L'Importador llegeix directament els fitxers `.note` de les aplicacions i converteix el seu contingut XML a Markdown.

## Localitzeu els vostres fitxers de notes

Tomboy i Gnote normalment emmagatzemen les notes en aquestes carpetes:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` o `~/.local/share/gnote`

La ubicació exacta pot variar si heu mogut la carpeta de dades o utilitzeu una versió diferent de l'aplicació.

## Importeu les vostres notes de Tomboy o Gnote

1. Obriu **[[Configuració]] → Connectors de la comunitat** i [instal·leu l'Importador](obsidian://show-plugin?id=obsidian-importer).
2. Habiliteu el connector Importador.
3. Obriu l'**Importador** utilitzant la [[Paleta d'ordres]] o la icona de la barra d'eines.
4. A **Format de fitxer**, seleccioneu **Tomboy/Gnote (.note)**.
5. Escolliu fitxers `.note` individuals o la carpeta que els conté.
6. Reviseu les opcions d'importació, la plantilla generada i els exemples de previsualització.
7. Seleccioneu **Importa** i espereu que la importació finalitzi.

## Plantilles

Utilitzeu les [[Plantilles de l'importador|plantilles de l'importador]] per configurar completament com s'importen les vostres dades.

![[Plantilles de l'importador#Variables]]
