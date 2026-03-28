---
permalink: bases/create-base
---
[[Wprowadzenie do Baz danych|Bazy danych]] pozwalają tworzyć widoki notatek przypominające bazę danych. Oto jak możesz stworzyć bazę danych i osadzić ją w notatce. Każda baza danych może mieć jeden lub więcej [[Podglądy|podglądów]], aby wyświetlać informacje na różne sposoby.

## Stwórz nową bazę danych

**Paleta poleceń:**

1. Otwórz **Paletę poleceń**.
2. Wybierz
	- **Bazy danych: Stwórz nową bazę danych**, aby stworzyć bazę danych w tym samym folderze co aktywny plik.
	- **Bazy danych: Wstaw nową bazę danych**, aby stworzyć bazę danych i osadzić ją w bieżącym pliku.

**Eksplorator plików:**

1. W eksploratorze plików kliknij prawym przyciskiem myszy folder, w którym chcesz stworzyć bazę danych.
2. Wybierz **Nowa baza danych**.

**Wstążka:**

- W pionowym menu wstążkowym wybierz **Stwórz nową bazę danych**, aby stworzyć bazę danych w tym samym folderze co aktywny plik.

## Osadzanie bazy danych

### Osadzanie pliku bazy danych

Możesz osadzać pliki baz danych w [[Osadzanie plików|dowolnym innym pliku]] za pomocą składni `![[Plik.base]]`. Aby określić domyślny podgląd, użyj `![[Plik.base#Podgląd]]`.

### Osadzanie bazy danych jako blok kodu

Bazy danych mogą być również osadzane bezpośrednio w notatce za pomocą bloku kodu `base` i [[Składnia Baz danych|składni baz danych]].

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
