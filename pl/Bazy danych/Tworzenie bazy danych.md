---
permalink: bases/create-base
---
[[Wprowadzenie do baz danych|bazy danych]] pozwalają tworzyć widoki notatek przypominające bazę danych. Oto jak możesz utworzyć bazę danych i osadzić ją w notatce. Każda baza danych może mieć jeden lub więcej [[Widoki|widoków]], aby wyświetlać informacje na różne sposoby.

## Utwórz nową bazę danych

**Paleta poleceń:**

1. Otwórz **Paletę poleceń**.
2. Wybierz
	- **Bazy danych: Utwórz nową bazę danych**, aby utworzyć bazę danych w tym samym folderze co aktywny plik.
	- **Bazy danych: Wstaw nową bazę danych**, aby utworzyć bazę danych i osadzić ją w bieżącym pliku.

**Eksplorator plików:**

1. W eksploratorze plików kliknij prawym przyciskiem myszy folder, w którym chcesz utworzyć bazę danych.
2. Wybierz **Nowa baza danych**.

## Osadzanie bazy danych

### Osadzanie pliku bazy danych

Możesz osadzać pliki baz danych w [[Osadzanie plików|dowolnym innym pliku]] za pomocą składni `![[Plik.base]]`. Aby określić domyślny widok, użyj `![[Plik.base#Podgląd]]`.

### Osadzanie bazy danych jako blok kodu

Bazy danych mogą być również osadzane bezpośrednio w notatce za pomocą bloku kodu `base` i [[Składnia baz danych|składni baz danych]].

~~~yaml
```base
filters:
  and:
    - file.hasTag("example")
views:
  - type: table
    name: Table
```
~~~
