---
permalink: import/templates
description: 'Dostosuj nazwę notatki, właściwości i treść tworzoną przez Importer.'
---
[[Importer|Importer]] pozwala definiować szablony kontrolujące sposób importowania notatek z innych aplikacji. Oznacza to, że możesz modyfikować tytuł, właściwości i zawartość importowanych notatek.

## Edytowanie szablonu importu

Wybierz **Edytuj** nad podglądem, aby edytować domyślny szablon. Możesz edytować:

- Nazwę notatki wyświetlaną jako tytuł w linii.
- Właściwości na początku notatki.
- Zawartość notatki w formacie Markdown.

Wybierz **Zapisz**, aby wrócić do podglądu. Importer zapamiętuje edytowany szablon w linii na potrzeby przyszłych importów korzystających z tego samego formatu.

Alternatywnie możesz wczytać szablon z pliku Markdown w bieżącym skarbcu.

## Podgląd wyników

Podgląd pokazuje do dziesięciu próbek z wybranych danych. Użyj przycisków strzałek, aby przechodzić między próbkami. Zmiany ustawień importu i szablonu aktualizują podgląd zanim cokolwiek zostanie dodane do twojego skarbca.

Niektóre załączniki, elementy zdalne i odniesienia między notatkami nie mogą być w pełni rozwiązane do momentu uruchomienia importu. W takich przypadkach podgląd może zachować link źródłowy lub wyświetlić symbol zastępczy.

## Składnia szablonów

Szablony Importera używają składni składającej się ze zmiennych, [[Filtry|filtrów]] i [[Logika|logiki]]. Wykorzystują tę samą składnię [Knap](https://github.com/obsidianmd/knap) co [[Wprowadzenie do Obsidian Web Clipper|Web Clipper]].

Wstawiaj zmienne za pomocą podwójnych nawiasów klamrowych, takich jak `{{title}}`, `{{content}}` lub `{{date}}`. Zmienne mogą być używane w nazwie notatki, właściwościach i zawartości.

Zmienne można modyfikować za pomocą [[Filtry|filtrów]]. Na przykład, aby zmienić format daty, użyj `{{date|date:"YYYY-MM-DD"}}`. Użyj [[Logika|logiki]] do bardziej zaawansowanych warunków, pętli i przypisywania zmiennych.

## Zmienne

Następujące zmienne są dostępne w każdym szablonie Importera:

| Zmienna          | Opis                                                                                                |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Treść Markdown bez właściwości (bez metadanych początkowych).                                       |
| `{{content}}`    | Kompletny Markdown przed zastosowaniem wybranego szablonu.                                          |
| `{{ctime}}`      | Czas utworzenia źródła jako znacznik czasu ISO 8601; pusty gdy niedostępny.                          |
| `{{date}}`       | Bieżąca data i czas renderowania szablonu, jako znacznik czasu ISO 8601.                            |
| `{{importer}}`   | ID Importera, np. `keep`, `html` lub `notion-api`.                                                  |
| `{{folder}}`     | Końcowy folder nadrzędny względem skarbca. Pusty gdy notatka jest w katalogu głównym skarbca.        |
| `{{mtime}}`      | Czas modyfikacji źródła jako znacznik czasu ISO 8601; pusty gdy niedostępny.                        |
| `{{noteName}}`   | Końcowa rozwiązana nazwa notatki, po usunięciu nieprawidłowych znaków i dodaniu sufiksów dla duplikatów. |
| `{{path}}`       | Końcowa ścieżka względem skarbca, wraz z rozszerzeniem `.md`.                                       |
| `{{properties}}` | Obiekt zawierający właściwości metadanych początkowych.                                              |
| `{{source}}`     | Obiekt zawierający wygenerowane właściwości i wartości specyficzne dla źródła.                       |
| `{{sourceId}}`   | Stabilny identyfikator źródła, gdy importer go udostępnia; w przeciwnym razie pusty.                |
| `{{time}}`       | Alias dla `{{date}}`.                                                                               |
| `{{title}}`      | Oryginalny tytuł notatki przed oczyszczeniem i deduplikacją.                                        |

## Wartości źródłowe dla właściwości

W formatach importu obsługujących [[Atrybuty|właściwości]], wartości źródłowe są również dostępne jako zmienne najwyższego poziomu dla wygody.

Jeśli wartość źródłowa ma taką samą nazwę jak zmienna współdzielona, uzyskaj do niej dostęp przez `{{source}}`. Na przykład, jeśli źródło importu ma właściwość o nazwie `content`, jest ona dostępna jako `{{source.content}}`, podczas gdy `{{content}}` pozostaje domyślną zmienną Importera.

Użyj notacji nawiasowej, gdy nazwa pola zawiera spacje, znaki interpunkcyjne lub inne znaki specjalne:

```twig
{{source["Project: status"]}}
```

## Przykładowy szablon

Oto przykład szablonu używającego zmiennych i [[Filtry|filtrów]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Możesz warunkowo dodawać dane do notatki, używając [[Logika|logiki]]:

```twig
{% if tags %}
## Tagi
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
