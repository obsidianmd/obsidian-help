---
permalink: import/evernote
---
Obsidian lar deg enkelt migrere notatene dine fra Evernote ved hjelp av [[Markdown-importør|Importør-tillegget]]. Dette vil konvertere Evernote-dataene dine til holdbare Markdown-filer som du kan bruke med Obsidian og mange andre apper.

## Eksporter dataene dine fra Evernote

Obsidian bruker Evernotes eksportformat `.enex`-filer.

Du finner Evernotes instruksjoner for å eksportere dataene dine [på Evernotes nettsted](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Denne metoden lar deg eksportere hele notatbøker i skrivebordsklienten.

1. Gå til Notatbøker-skjermen.
2. Klikk på **Flere handlinger** ( `•••` ) og velg **Eksporter notatbok...**
3. Velg **ENEX** som filformat.
3. Velg en plassering for den eksporterte `.enex`-filen.

## Importer Evernote-dataene dine til Obsidian

Du trenger det offisielle Obsidian [[Markdown-importør|Importør]]-tillegget, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]]**.
2. Gå til **Community-utvidelser** og [installer Importør](obsidian://show-plugin?id=obsidian-importer).
3. Aktiver Importør-tillegget.
4. Åpne **Importør**-tillegget ved hjelp av kommandopaletten eller verktøylinje-ikonet.
5. Under **Filformat** velg **Evernote (.enex)**.
6. Velg plasseringen til Evernote-sikkerhetskopifilen din.
7. Klikk **Importer** og vent til importen er fullført.
8. Du er ferdig!

## Avanserte importalternativer

### Behold tagghierarki

Evernote-eksport beholder ikke tagghierarkiet. For å beholde tagghierarkiet kan du «flate ut» tagger adskilt med «/». For eksempel, anta at du har følgende taggstruktur:

```
ParentTag
    ChildTag
```

Det du må gjøre for å beholde relaterte tagger i Obsidian er:

1. Høyreklikk på ChildTag.
2. Velg «Gi nytt navn.»
3. Gi den nytt navn til `ParentTag/ChildTag`.

### Håndtering av notatbokstabler

Siden eksportprosessen er begrenset til enkeltnotatbøker, mangler standard eksportfil informasjon om notatbokstabler. Importøren kan imidlertid gjenkjenne mønstre i enex-filnavnet for å gjenskape notatbokstabler som mapper.

Anta at du har en notatbok kalt ```NotebookA``` i en stabel kalt ```Stack1```, da kan du gjenskape en notatbokstabel ved å gi nytt navn til enex-filen til ```Stack1@@@NotebookA```.

Dette resulterer i at de konverterte notatene blir generert i mappen Stack1/NotebookA.

### Flere alternativer

For mer avanserte importalternativer fra Evernote kan du også prøve å [importere via Yarle](https://github.com/akosbalasko/yarle).
