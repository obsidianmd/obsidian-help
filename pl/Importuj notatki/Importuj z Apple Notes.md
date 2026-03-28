---
permalink: import/apple-notes
---
Obsidian pozwala łatwo przenieść notatki z Apple Notes za pomocą [[Importer|wtyczki Importer]]. Konwertuje ona dane z Apple Notes do trwałych plików Markdown, których możesz używać z Obsidian i wieloma innymi aplikacjami.

Obecnie Importer obsługuje migrację z Apple Notes tylko na macOS. Nie jest jeszcze dostępny na iOS.

## Importowanie danych z Apple Notes do Obsidian

Będziesz potrzebować oficjalnej wtyczki Obsidian [[Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz wtyczkę **Importer** za pomocą palety poleceń lub ikony na wstążce.
5. W polu **Format pliku** wybierz **Apple Notes**.
6. Kliknij **Importuj**.
7. Kliknij **Otwórz** w wyskakującym okienku zatytułowanym `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Poczekaj, aż import się zakończy.
9. Gotowe!

## Obsługiwana zawartość

Wtyczka Obsidian Importer obsługuje praktycznie wszystkie typy zawartości Apple Notes. Obejmuje to tabele, obrazy, rysunki, skany, pliki PDF oraz łącza wprowadzone w iOS 17.

> [!Warning]
> Notatki chronione hasłem są szyfrowane przez Apple, więc przed importem należy je odblokować. Wszystkie zablokowane notatki zostaną pominięte.

### Skany

Apple przechowuje skany w różnych formatach w zależności od sposobu ich utworzenia. Aby zachować oryginalne dane, zostaną one wyeksportowane w różny sposób.

* Skany utworzone lub wyświetlane na starszych wersjach macOS lub iOS zostaną wyeksportowane jako seria nieprzeciętych obrazów.
* Skany utworzone lub wyświetlane na nowszych wersjach macOS lub iOS zwykle zostaną wyeksportowane jako przycięte obrazy.
* Skany edytowane za pomocą funkcji wprowadzonych w iOS 17 zwykle zostaną wyeksportowane jako pliki PDF.

## Alternatywne metody eksportu

Apple nie zapewnia natywnej opcji eksportu notatek. Istnieją jednak narzędzia firm trzecich, takie jak [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) autorstwa Chintan Ghate. Należy pamiętać, że większość narzędzi ma ograniczenia co do tego, jakie dane eksportuje z Apple Notes i może nie zapewniać najbardziej kompatybilnych danych wyjściowych. Narzędzia te działają najlepiej, gdy notatki w Apple Notes zawierają głównie tekst i mają niewiele załączników lub funkcji specjalnych, takich jak rysunki i skany.

W zależności od użytego narzędzia eksport może być w formacie Markdown lub HTML. Postępuj zgodnie z instrukcjami odpowiadającymi formatowi pliku, do którego wyeksportowałeś dane:

- [[Importuj pliki HTML]]
- [[Importuj pliki Markdown]]
