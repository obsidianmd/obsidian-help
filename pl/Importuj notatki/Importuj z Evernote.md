---
permalink: import/evernote
---
Obsidian umożliwia łatwe przeniesienie notatek z Evernote za pomocą [[Importer|wtyczki Importer]]. Konwertuje ona dane z Evernote do trwałych plików Markdown, które możesz używać z Obsidian i wieloma innymi aplikacjami.

## Eksportowanie danych z Evernote

Obsidian korzysta z formatu eksportu Evernote — plików `.enex`.

Instrukcje dotyczące eksportowania danych znajdziesz [na stronie Evernote](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Ta metoda pozwala eksportować całe notatniki w kliencie desktopowym.

1. Przejdź do ekranu Notatników.
2. Kliknij **Więcej opcji** ( `•••` ) i wybierz **Eksportuj notatnik...**
3. Wybierz **ENEX** jako format pliku.
3. Wybierz lokalizację dla wyeksportowanego pliku `.enex`.

## Importowanie danych z Evernote do Obsidian

Potrzebujesz oficjalnej wtyczki Obsidian [[Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz wtyczkę **Importer** za pomocą palety poleceń lub ikony na wstążce.
5. W polu **Format pliku** wybierz **Evernote (.enex)**.
6. Wskaż lokalizację pliku kopii zapasowej Evernote.
7. Kliknij **Importuj** i poczekaj na zakończenie importu.
8. Gotowe!

## Zaawansowane opcje importu

### Zachowanie hierarchii tagów

Eksport z Evernote nie zachowuje hierarchii tagów. Aby zachować hierarchię tagów, możesz „spłaszczyć" tagi, rozdzielając je znakiem „/". Na przykład, zakładając, że masz następującą strukturę tagów:

```
ParentTag
    ChildTag
```

Aby zachować powiązanie tagów w Obsidian, musisz:

1. Kliknąć prawym przyciskiem myszy na ChildTag.
2. Wybrać „Zmień nazwę".
3. Zmienić nazwę na `ParentTag/ChildTag`.

### Obsługa stosów notatników

Ponieważ proces eksportu jest ograniczony do pojedynczych notatników, domyślny plik eksportu nie zawiera informacji o stosach notatników. Jednakże importer potrafi rozpoznać wzorce w nazwie pliku enex, aby odtworzyć stosy notatników jako foldery.

Zakładając, że masz notatnik o nazwie ```NotebookA``` w stosie o nazwie ```Stack1```, możesz odtworzyć stos notatników, zmieniając nazwę pliku enex na ```Stack1@@@NotebookA```.

W rezultacie skonwertowane notatki zostaną wygenerowane w folderze Stack1/NotebookA.

### Więcej opcji

Jeśli potrzebujesz bardziej zaawansowanych opcji importu z Evernote, możesz również spróbować [importowania przez Yarle](https://github.com/akosbalasko/yarle).
