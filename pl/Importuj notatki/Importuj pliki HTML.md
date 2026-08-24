---
permalink: import/html
cssclasses:
  - soft-embed
---
Obsidian umożliwia łatwy import pojedynczych plików HTML oraz całych folderów z plikami HTML za pomocą oficjalnej [[Importer|wtyczki Importer]]. Jest to przydatne, jeśli chcesz zapisać całe strony internetowe w formacie [[Obsidian Flavored Markdown|Markdown]], lub jeśli chcesz zaimportować dane z narzędzia eksportującego do HTML.

Jeśli importujesz notatki z konkretnej aplikacji, warto najpierw sprawdzić listę aplikacji obsługiwanych przez [[Importer|wtyczkę Importer]], aby upewnić się, czy nie istnieje dedykowany konwerter, który lepiej zachowa migrowane dane.

## Importowanie danych HTML do Obsidian

Będziesz potrzebować oficjalnej wtyczki Obsidian [[Importer]]. Możesz ją [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz wtyczkę **Importer** za pomocą palety poleceń lub ikony na wstążce.
5. W polu **Format** wybierz **HTML (.html).**
6. Wskaż lokalizację plików lub folderów HTML.
7. Kliknij **Importuj**, aby przejrzeć wygenerowany szablon i podgląd przykładów z Twoich plików.
8. Kliknij **Importuj** ponownie i poczekaj na zakończenie importu.

### Importuj ustawienia

- **Limit rozmiaru załączników**: Pomiń importowanie załączników większych niż określony rozmiar.
- **Minimalny rozmiar obrazu**: Pomiń importowanie obrazów mniejszych niż określony rozmiar w dowolnym wymiarze. Może być używane do pomijania ikon i logo.

## Szablony

Użyj [[Szablony importera|szablonów Importera]], aby w pełni skonfigurować sposób importowania danych.

![[Szablony importera#Variables]]

Ponadto import HTML udostępnia wiele tych samych zmiennych co [[Wprowadzenie do Obsidian Web Clipper|Web Clipper]]:

| Zmienna | Opis |
| --- | --- |
| `{{author}}` | Autor strony. |
| `{{contentHtml}}` | Wyodrębniona zawartość strony w formacie HTML. |
| `{{description}}` | Opis lub fragment strony. |
| `{{domain}}` | Domena strony. |
| `{{favicon}}` | URL faviconu. |
| `{{fullHtml}}` | Nieprzetworzony HTML całej strony. |
| `{{image}}` | URL obrazu udostępniania społecznościowego. |
| `{{language}}` | Język strony. |
| `{{published}}` | Data publikacji, którą można sformatować za pomocą filtra `date`. |
| `{{site}}` | Nazwa witryny lub wydawcy. |
| `{{url}}` | Źródłowy URL znaleziony w importowanym dokumencie, jeśli jest dostępny. |
| `{{words}}` | Liczba słów. |
