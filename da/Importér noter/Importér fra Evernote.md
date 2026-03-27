---
permalink: import/evernote
aliases:
  - Import fra Evernote
  - Import af noter/Import fra Evernote
---
Obsidian giver dig mulighed for nemt at migrere dine noter fra Evernote ved hjælp af [[Importer|Importer-pluginet]]. Dette vil konvertere dine Evernote-data til holdbare Markdown-filer, som du kan bruge med Obsidian og mange andre applikationer.

## Eksportér dine data fra Evernote

Obsidian bruger Evernotes eksportformat `.enex`-filer.

Du kan finde Evernotes instruktioner til eksport af dine data [på Evernotes hjemmeside](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Denne metode lader dig eksportere hele notesbøger i desktopklienten.

1. Gå til skærmen Notesbøger.
2. Klik på **Flere muligheder** ( `•••` ) og vælg **Eksportér notesbog...**
3. Vælg **ENEX** som filformat.
3. Vælg en placering for din eksporterede `.enex`-fil.

## Importér dine Evernote-data til Obsidian

Du skal bruge det officielle Obsidian [[Importer]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]]**.
2. Gå til **Fællesskabsplugins** og [installér Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktivér Importer-pluginet.
4. Åbn **Importer**-pluginet ved hjælp af kommandopaletten eller værktøjslinjeikonet.
5. Under **Filformat** vælg **Evernote (.enex)**.
6. Vælg placeringen af din Evernote-backupfil.
7. Klik på **Importér** og vent til importen er fuldført.
8. Du er færdig!

## Avancerede importindstillinger

### Bevar taghierarki

Evernote-eksport bevarer ikke taghierarkiet. For at beholde dit taghierarki kan du "flade" tags ud adskilt af "/". Antag for eksempel, at du har følgende tagstruktur:

```
ParentTag
    ChildTag
```

Det du skal gøre for at holde tags relaterede i Obsidian er:

1. Højreklik på ChildTag.
2. Vælg "Omdøb."
3. Omdøb det til `ParentTag/ChildTag`.

### Håndtering af notesbogstakke

Da eksportprocessen er begrænset til enkelte notesbøger, mangler standardeksportfilen information om notesbogstakke. Importeren kan dog genkende mønstre i enex-filnavnet for at genskabe notesbogstakke som mapper.

Antag at du har en notesbog kaldet ```NotebookA``` i en stak kaldet ```Stack1```, kan du genskabe en notesbogsstak ved at omdøbe enex-filen til ```Stack1@@@NotebookA```.

Dette resulterer i, at de konverterede noter genereres i mappen Stack1/NotebookA.

### Flere muligheder

For mere avancerede importindstillinger fra Evernote kan du også prøve [at importere via Yarle](https://github.com/akosbalasko/yarle).
