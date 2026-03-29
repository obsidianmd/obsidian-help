---
permalink: import/evernote
---
Obsidian vám umožňuje snadno migrovat poznámky z Evernote pomocí [[Importér|pluginu Importér]]. Ten převede vaše data z Evernote do trvanlivých souborů Markdown, které můžete používat s Obsidian a mnoha dalšími aplikacemi.

## Export dat z Evernote

Obsidian používá exportní formát Evernote – soubory `.enex`.

Návod na export dat najdete [na webových stránkách Evernote](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Tato metoda umožňuje exportovat celé zápisníky v desktopovém klientu.

1. Přejděte na obrazovku Zápisníky.
2. Klikněte na **Více možností** ( `•••` ) a vyberte **Exportovat zápisník...**
3. Jako formát souboru vyberte **ENEX**.
3. Zvolte umístění pro exportovaný soubor `.enex`.

## Import dat z Evernote do Obsidian

Budete potřebovat oficiální plugin Obsidian [[Importér]], který můžete [nainstalovat zde](obsidian://show-plugin?id=obsidian-importer).

1. Otevřete **[[Nastavení]]**.
2. Přejděte na **Komunitní pluginy** a [nainstalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapněte plugin Importér.
4. Otevřete plugin **Importér** pomocí palety příkazů nebo ikony na postranním panelu nástrojů.
5. V části **Formát** vyberte **Evernote (.enex)**.
6. Vyberte umístění záložního souboru Evernote.
7. Klikněte na **Importovat** a počkejte na dokončení importu.
8. Hotovo!

## Rozšířené možnosti importu

### Zachování hierarchie štítků

Export z Evernote nezachovává hierarchii štítků. Pro zachování hierarchie štítků můžete štítky „zploštit" oddělením pomocí „/". Například za předpokladu, že máte následující strukturu štítků:

```
ParentTag
    ChildTag
```

Pro zachování vztahu mezi štítky v Obsidian postupujte takto:

1. Klikněte pravým tlačítkem na ChildTag.
2. Vyberte „Přejmenovat."
3. Přejmenujte ho na `ParentTag/ChildTag`.

### Zpracování zásobníků zápisníků

Jelikož je proces exportu omezen na jednotlivé zápisníky, výchozí exportní soubor neobsahuje informace o zásobnících zápisníků. Importér však dokáže rozpoznat vzory v názvu souboru enex a znovu vytvořit zásobníky zápisníků jako složky.

Za předpokladu, že máte zápisník s názvem ```NotebookA``` v zásobníku s názvem ```Stack1```, můžete zásobník zápisníků znovu vytvořit přejmenováním souboru enex na ```Stack1@@@NotebookA```.

Výsledkem bude, že převedené poznámky budou vygenerovány ve složce Stack1/NotebookA.

### Další možnosti

Pro pokročilejší možnosti importu z Evernote můžete také vyzkoušet [import přes Yarle](https://github.com/akosbalasko/yarle).
