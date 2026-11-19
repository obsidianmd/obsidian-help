---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian umożliwia migrację notatek z Samsung Notes za pomocą [[Szablony importera|wtyczki Importer]]. Konwertuje ona notatki na trwałe pliki Markdown, których możesz używać z Obsidian i wieloma innymi aplikacjami.

## Eksportowanie notatek z Samsung Notes

Samsung Notes zapisuje każdą notatkę jako plik Samsung Notes (`.sdocx`).

1. Otwórz Samsung Notes na telefonie lub tablecie.
2. Dotknij i przytrzymaj notatkę, a następnie zaznacz wszystkie notatki, które chcesz wyeksportować.
3. Kliknij **Zapisz jako plik**, a następnie wybierz **Plik Samsung Notes**.
4. Wybierz folder i kliknij **Zapisz**.
5. Przenieś pliki `.sdocx` na urządzenie, na którym używasz Obsidian, na przykład za pomocą kabla USB, Quick Share lub dysku w chmurze.

Jeśli masz wiele plików, możesz umieścić je w pliku `.zip` i zaimportować go zamiast pojedynczych plików. Samsung Notes nie uwzględnia swoich folderów w zapisywanych plikach, ale Importer zachowuje foldery wewnątrz pliku `.zip`. Aby zachować porządek w notatkach, przed spakowaniem zapisz notatki z każdego folderu Samsung Notes w folderze o tej samej nazwie.

## Importowanie danych Samsung Notes do Obsidian

Potrzebujesz oficjalnej wtyczki Obsidian [[Importuj notatki|Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz wtyczkę **Importer** za pomocą palety poleceń lub ikony na pasku bocznym.
5. W polu **Format pliku** wybierz **Samsung Notes (.sdocx)**.
6. Wybierz pliki `.sdocx` lub plik `.zip`, który je zawiera.
7. Kliknij **Import**, aby przejrzeć wygenerowany szablon i podgląd przykładów z Twoich notatek.
8. Kliknij **Import** ponownie i poczekaj na zakończenie importu.

## Ograniczenia

- Pismo odręczne i narysowane kształty są importowane jako obraz SVG na końcu notatki. Kreski zachowują swój kształt i kolor, ale nie zmienną grubość pióra reagującego na nacisk. Kształty i linie są importowane w kolorze czarnym.
- Pola tekstowe, obrazy umieszczone na stronie i opisane pliki PDF nie są jeszcze importowane.
- Elementy listy kontrolnej są importowane jako niezaznaczone.
- Kolory tekstu, czcionki i rozmiary czcionek nie są zachowywane.
- Odblokuj zablokowane notatki w Samsung Notes przed ich wyeksportowaniem.

## Szablony

Użyj [[Szablony importera|szablonów importera]], aby w pełni skonfigurować sposób importowania danych z Samsung Notes.

![[Szablony importera#Zmienne]]
