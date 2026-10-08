---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian umożliwia migrację notatek z Tomboy i Gnote za pomocą oficjalnej [[Szablony importera|wtyczki Importer]]. Importer odczytuje pliki `.note` tych aplikacji bezpośrednio i konwertuje ich zawartość XML do Markdown.

## Zlokalizuj pliki notatek

Tomboy i Gnote zwykle przechowują notatki w następujących folderach:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` lub `~/.local/share/gnote`

Dokładna lokalizacja może się różnić, jeśli przeniosłeś folder danych lub używasz innej wersji aplikacji.

## Importuj notatki z Tomboy lub Gnote

1. Otwórz **[[Ustawienia]] → Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
2. Włącz wtyczkę Importer.
3. Otwórz **Importer** za pomocą [[Lista poleceń|palety poleceń]] lub ikony na wstążce.
4. W polu **Format**, wybierz **Tomboy/Gnote (.note)**.
5. Wybierz pojedyncze pliki `.note` lub folder je zawierający.
6. Przejrzyj opcje importu, wygenerowany szablon i przykłady podglądu.
7. Kliknij **Importuj** i poczekaj na zakończenie importu.

## Szablony

Użyj [[Szablony importera|szablonów importera]], aby w pełni skonfigurować sposób importowania danych.

![[Szablony importera#Zmienne]]
