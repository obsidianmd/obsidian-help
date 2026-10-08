---
permalink: import/csv
cssclasses:
  - soft-embed
---
Obsidian umożliwia importowanie danych z plików CSV za pomocą oficjalnej [[Importer|wtyczki Importer]]. Jest to przydatne, gdy masz dane tabelaryczne przechowywane w aplikacjach takich jak Excel, Google Sheets, Numbers, Notion lub Airtable.

Import CSV generuje pliki Markdown dla każdego wiersza oraz plik [[Wprowadzenie do baz danych|bazy danych]], który wyświetla wszystkie zaimportowane pliki jako tabelę.

Jeśli importujesz notatki z konkretnej aplikacji, warto najpierw przejrzeć listę aplikacji obsługiwanych przez [[Importer|wtyczkę Importer]], aby sprawdzić, czy istnieje specjalny konwerter, który lepiej zachowa migrowane dane.

## Tworzenie notatek z danych CSV w Obsidian

Będziesz potrzebować oficjalnej wtyczki Obsidian [[Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz wtyczkę **Importer** za pomocą palety poleceń lub ikony na wstążce.
5. W sekcji **Format** wybierz **CSV (.csv).**
6. Wybierz lokalizację pliku CSV.
7. Wybierz **Importuj**, aby skonfigurować sposób konwersji danych z pliku CSV na notatki z [[Atrybuty|atrybutami]].
8. Wybierz **Kontynuuj**, aby przejrzeć wygenerowany szablon i podgląd przykładów z wierszy.
9. Wybierz **Importuj** i poczekaj, aż import zostanie zakończony.

## Konfiguracja sposobu importowania pól CSV

W kroku konfiguracji pól możesz wybrać sposób importowania danych. Importer generuje szablon na podstawie nagłówków CSV, używa pierwszej kolumny jako początkowej nazwy notatki i tworzy atrybut dla każdej kolumny.

## Szablony

Użyj [[Szablony importera|szablonów Importer]], aby w pełni skonfigurować sposób importowania danych.

Każda kolumna CSV jest dostępna za pomocą swojego nagłówka. Jeśli kolumna nie ma nagłówka, Importer używa wygenerowanej nazwy kolumny.

Użyj notacji nawiasowej, aby spacje i znaki interpunkcyjne były obsługiwane bezpiecznie:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Szablony importera#Variables]]
