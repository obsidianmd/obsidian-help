---
permalink: import/bear
---
Obsidian umożliwia łatwą migrację notatek z Bear za pomocą [[Importer|wtyczki Importer]]. Konwertuje ona dane z Bear do trwałych plików Markdown, których możesz używać z Obsidian i wieloma innymi aplikacjami.

## Eksportowanie danych z Bear

Obsidian wykorzystuje format kopii zapasowej Bear — pliki `.bear2bk`. Instrukcje tworzenia kopii zapasowej Bear znajdziesz [na stronie Bear](https://bear.app/faq/backup-restore/).

1. Otwórz Bear.
2. Utwórz kopię zapasową
	1. Na macOS: **File** → **Backup notes**.
	2. Na iOS: kliknij menu dodatkowe (⋮) u góry paska bocznego i wybierz **Backup all notes**.
3. Wybierz lokalizację dla pliku kopii zapasowej.
4. Kliknij **Export notes**.
5. Powinieneś teraz mieć jeden plik `.bear2bk` zawierający wszystkie Twoje notatki.

## Importowanie danych z Bear do Obsidian

Będziesz potrzebować oficjalnej wtyczki Obsidian [[Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz wtyczkę **Importer** za pomocą palety poleceń lub ikony na wstążce.
5. W polu **Format pliku** wybierz **Bear (.bear2bk)**.
6. Wskaż lokalizację pliku kopii zapasowej Bear.
7. Kliknij **Importuj** i poczekaj, aż import się zakończy.
8. Gotowe!
