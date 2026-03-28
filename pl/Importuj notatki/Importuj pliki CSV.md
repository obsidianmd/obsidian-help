---
permalink: import/csv
---
Obsidian umożliwia importowanie danych z plików CSV za pomocą oficjalnej [[Importer|wtyczki Importer]]. Jest to przydatne, gdy masz dane tabelaryczne przechowywane w aplikacjach takich jak Excel, Google Sheets, Numbers, Notion lub Airtable.

Import CSV generuje pliki Markdown dla każdego wiersza oraz plik [[Wprowadzenie do Baz danych|Bazy danych]], który wyświetla wszystkie zaimportowane pliki jako tabelę.

Jeśli importujesz notatki z konkretnej aplikacji, warto najpierw przejrzeć listę aplikacji obsługiwanych przez [[Importer|wtyczkę Importer]], aby sprawdzić, czy istnieje specjalny konwerter, który lepiej zachowa migrowane dane.

## Tworzenie notatek z danych CSV w Obsidian

Będziesz potrzebować oficjalnej wtyczki Obsidian [[Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz wtyczkę **Importer** za pomocą palety poleceń lub ikony na wstążce.
5. W sekcji **Format** wybierz **CSV (.csv).**
6. Wybierz lokalizację pliku CSV.
7. Kliknij **Importuj**, aby skonfigurować sposób konwersji danych z pliku CSV na notatki z [[Atrybuty|atrybutami]].
8. Kliknij **Kontynuuj** i poczekaj, aż import zostanie zakończony.
9. Gotowe!

## Konfiguracja sposobu importowania pól CSV

W drugim kroku importu CSV możesz wybrać sposób importowania danych za pomocą szablonu.

Każda kolumna w pliku CSV otrzymuje zmienną o nazwie `{{column_name}}`, która reprezentuje nazwę nagłówka w pliku. Możesz użyć tej zmiennej do zdefiniowania tytułu notatki, lokalizacji, treści oraz [[Atrybuty|atrybutów]].
