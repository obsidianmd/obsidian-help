---
permalink: import/evernote
---
Obsidian låter dig enkelt migrera dina anteckningar från Evernote med hjälp av [[Importerare|Importerare-tillägget]]. Detta konverterar din Evernote-data till hållbara Markdown-filer som du kan använda med Obsidian och många andra appar.

## Exportera din data från Evernote

Obsidian använder Evernotes exportformat `.enex`-filer.

Du kan hitta Evernotes instruktioner för att exportera din data [på Evernotes webbplats](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Denna metod låter dig exportera hela anteckningsböcker i skrivbordsklienten.

1. Gå till skärmen för anteckningsböcker.
2. Klicka på **Fler alternativ** ( `•••` ) och välj **Exportera anteckningsbok...**
3. Välj **ENEX** som filformat.
3. Välj en plats för din exporterade `.enex`-fil.

## Importera din Evernote-data till Obsidian

Du behöver det officiella Obsidian-tillägget [[Importerare]], som du kan [installera här](obsidian://show-plugin?id=obsidian-importer).

1. Öppna **[[Inställningar]]**.
2. Gå till **Gemenskapstillägg** och [installera Importerare](obsidian://show-plugin?id=obsidian-importer).
3. Aktivera Importerare-tillägget.
4. Öppna **Importerare**-tillägget via kommandopaletten eller ribbon-ikonen.
5. Under **Filformat** välj **Evernote (.enex)**.
6. Välj platsen för din Evernote-säkerhetskopia.
7. Klicka på **Importera** och vänta tills importen är klar.
8. Du är klar!

## Avancerade importalternativ

### Behåll tagghierarkin

Evernotes export behåller inte tagghierarkin. För att behålla din tagghierarki kan du "platta till" taggar separerade med "/". Anta till exempel att du har följande taggstruktur:

```
ParentTag
    ChildTag
```

Vad du behöver göra för att behålla taggrelationer i Obsidian är:

1. Högerklicka på ChildTag.
2. Välj "Byt namn."
3. Byt namn till `ParentTag/ChildTag`.

### Hantera anteckningsboksstackar

Eftersom exportprocessen är begränsad till enskilda anteckningsböcker saknar den exporterade filen som standard information om anteckningsboksstackar. Importeraren kan dock känna igen mönster i enex-filnamnet för att återskapa anteckningsboksstackar som mappar.

Anta att du har en anteckningsbok som heter ```NotebookA``` i en stack som heter ```Stack1```, då kan du återskapa en anteckningsboksstack genom att byta namn på enex-filen till ```Stack1@@@NotebookA```.

Detta resulterar i att de konverterade anteckningarna genereras i mappen Stack1/NotebookA.

### Fler alternativ

För mer avancerade importalternativ från Evernote kan du också prova att [importera via Yarle](https://github.com/akosbalasko/yarle).
