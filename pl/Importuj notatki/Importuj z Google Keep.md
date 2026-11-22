---
permalink: import/google-keep
cssclasses:
  - soft-embed
---
Obsidian umożliwia łatwe przeniesienie notatek z Google Keep za pomocą [[Importer|wtyczki Importer]]. Konwertuje ona dane z Google Keep do trwałych plików Markdown, które możesz używać z Obsidian i wieloma innymi aplikacjami.

## Eksportowanie danych z Google Keep

1. Przejdź do [Google Takeout](https://takeout.google.com/settings/takeout) i zaloguj się na swoje konto Google.
2. Kliknij **Odznacz wszystkie** w prawym górnym rogu.
3. Przewiń w dół i wybierz **Keep** z listy.
4. Przewiń na dół strony i kliknij **Następny krok**.
5. Na następnym ekranie kliknij przycisk **Utwórz eksport**.
6. Pobierz plik `.zip`, gdy będzie dostępny.

## Importowanie danych z Google Keep do Obsidian

Będziesz potrzebować oficjalnej wtyczki Obsidian [[Importer]], którą możesz [zainstalować tutaj](obsidian://show-plugin?id=obsidian-importer).

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wtyczki społeczności** i [zainstaluj Importer](obsidian://show-plugin?id=obsidian-importer).
3. Włącz wtyczkę Importer.
4. Otwórz Importer w ustawieniach lub za pomocą [[Paleta poleceń|palety poleceń]].
5. W polu **Format pliku** wybierz **Google Keep (.zip)**.
6. Wybierz lokalizację pliku `.zip`.
7. Wybierz **Importuj**, aby przejrzeć wygenerowany szablon i podgląd przykładów z twoich notatek.
8. Wybierz **Importuj** ponownie i poczekaj, aż import się zakończy.

## Ograniczenia

- Wszystkie listy kontrolne zostaną zaimportowane jako elementy najwyższego poziomu, ponieważ Google Keep nie eksportuje informacji o wcięciach.
- Przypomnienia i przypisania użytkowników do notatek nie zostaną zaimportowane, ponieważ te funkcje nie są obsługiwane przez Obsidian.

## Szablony

Użyj [[Szablony importera|szablonów importera]], aby w pełni skonfigurować sposób importowania danych z Google Keep.

![[Szablony importera#Zmienne]]

Google Keep udostępnia też zmienne z oryginalnym tekstem, listami, etykietami, załącznikami, kolorami, danymi udostępniania, zadaniami, adnotacjami i stanem notatki.

| Zmienna           | Opis                                              |
| ----------------- | ------------------------------------------------- |
| `{{isArchived}}`  | Czy notatka jest zarchiwizowana.                  |
| `{{isPinned}}`    | Czy notatka jest przypięta.                       |
| `{{isTrashed}}`   | Czy notatka jest w koszu.                         |
| `{{color}}`       | Nazwa koloru w Google Keep.                       |
| `{{labels}}`      | Tablica rekordów etykiet.                         |
| `{{sharees}}`     | Tablica osób, którym udostępniono notatkę.        |
| `{{annotations}}` | Tablica rekordów adnotacji łączy.                 |

Oryginalny tytuł z Google Keep jest dostępny jako `{{source.title}}`. Wspólna zmienna `{{title}}` zawiera tytuł zaimportowanej notatki.
