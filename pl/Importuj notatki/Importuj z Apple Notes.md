---
permalink: import/apple-notes
cssclasses:
  - soft-embed
---
Obsidian pozwala łatwo przenieść notatki z Apple Notes za pomocą [[Importer|wtyczki Importer]]. Konwertuje ona dane z Apple Notes do trwałych plików Markdown, których możesz używać z Obsidian i wieloma innymi aplikacjami.

Obecnie Importer obsługuje migrację z Apple Notes tylko na macOS. Nie jest jeszcze dostępny na iOS.

## Importowanie danych z Apple Notes do Obsidian

Będziesz potrzebować oficjalnej wtyczki Obsidian [[Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz Importer w ustawieniach lub za pomocą [[Paleta poleceń|palety poleceń]].
5. W polu **Format pliku** wybierz **Apple Notes**.
6. Wybierz **Importuj**.
7. Wybierz **Otwórz** w oknie wyskakującym zatytułowanym `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Przejrzyj wygenerowany szablon i podgląd przykładów z twoich notatek.
9. Wybierz **Importuj** i poczekaj, aż import się zakończy.

## Dostosowywanie importowanych notatek

Przed rozpoczęciem importu Importer pokazuje podgląd wygenerowany z wybranych notatek Apple Notes. Możesz edytować wygenerowany szablon, atrybuty i nazwę notatki albo wybrać szablon Markdown ze swojego sejfu. Zobacz [[Szablony importera]].

## Obsługiwana zawartość

Wtyczka Obsidian Importer obsługuje praktycznie wszystkie typy zawartości Apple Notes. Obejmuje to tabele, obrazy, rysunki, skany, pliki PDF oraz łącza wprowadzone w iOS 17.

> [!Warning]
> Notatki chronione hasłem są szyfrowane przez Apple, więc przed importem należy je odblokować. Wszystkie zablokowane notatki zostaną pominięte.

### Skany

Apple przechowuje skany w różnych formatach w zależności od sposobu ich utworzenia. Aby zachować oryginalne dane, zostaną one wyeksportowane w różny sposób.

* Skany utworzone lub wyświetlane na starszych wersjach macOS lub iOS zostaną wyeksportowane jako seria nieprzeciętych obrazów.
* Skany utworzone lub wyświetlane na nowszych wersjach macOS lub iOS zwykle zostaną wyeksportowane jako przycięte obrazy.
* Skany edytowane za pomocą funkcji wprowadzonych w iOS 17 zwykle zostaną wyeksportowane jako pliki PDF.

## Szablony

Użyj [[Szablony importera|szablonów importera]], aby w pełni skonfigurować sposób importowania danych z Apple Notes.

![[Szablony importera#Zmienne]]

Apple Notes udostępnia też następującą zmienną.

| Zmienna        | Opis                         |
| -------------- | ---------------------------- |
| `{{isPinned}}` | Czy notatka jest przypięta.  |
