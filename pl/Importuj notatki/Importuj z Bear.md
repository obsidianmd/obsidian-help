---
permalink: import/bear
cssclasses:
  - soft-embed
---
Obsidian umożliwia łatwą migrację notatek z Bear za pomocą [[Importer|wtyczki Importer]]. Konwertuje ona dane z Bear do trwałych plików Markdown, których możesz używać z Obsidian i wieloma innymi aplikacjami.

## Eksportowanie danych z Bear

Obsidian obsługuje formaty kopii zapasowej Bear: `.bear2bk` i `ApplicationData.zip`.

### iOS

1. Otwórz Bear.
2. Przejdź do **Settings** → **Advanced** → **Share Application Data**.
3. Wybierz lokalizację pliku kopii zapasowej.
4. Powinieneś mieć teraz jeden plik `ApplicationData.zip` ze wszystkimi notatkami.

### macOS

1. Otwórz Bear.
2. Przejdź do **File** → **Backup notes**.
3. Wybierz lokalizację pliku kopii zapasowej.
4. Kliknij **Export notes**.
5. Powinieneś mieć teraz jeden plik `.bear2bk` ze wszystkimi notatkami.

## Importowanie danych z Bear do Obsidian

Będziesz potrzebować oficjalnej wtyczki Obsidian [[Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz Importer w ustawieniach lub za pomocą [[Paleta poleceń|palety poleceń]].
5. W polu **Format pliku** wybierz **Bear (.bear2bk, .zip)**.
6. Wskaż lokalizację pliku kopii zapasowej Bear.
7. Wybierz **Importuj**, aby przejrzeć wygenerowany szablon i podgląd przykładów z twoich notatek.
8. Wybierz **Importuj** ponownie i poczekaj, aż import się zakończy.

## Szablony

Użyj [[Szablony importera|szablonów importera]], aby w pełni skonfigurować sposób importowania danych z Bear.

![[Szablony importera#Zmienne]]
