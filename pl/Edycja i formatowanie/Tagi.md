---
permalink: tags
---
Tagi to słowa kluczowe lub tematy, które pomagają szybko znaleźć poszukiwane notatki.

## Dodawanie tagu do notatki

Aby utworzyć tag, wpisz w edytorze symbol hash (`#`), a następnie słowo kluczowe. Na przykład `#spotkanie`.

Możesz również dodawać tagi za pomocą [[Atrybuty|właściwości]] `tags`. Tagi w YAML powinny być zawsze formatowane jako lista:

```yaml
---
tags:
  - przepis
  - gotowanie
---
```

## Znajdowanie notatek za pomocą tagów

Aby znaleźć notatki za pomocą wtyczki [[Szukaj]], użyj [[Szukaj#Operatory wyszukiwania|operatora wyszukiwania]] `tag` w swoim zapytaniu, na przykład `tag:#spotkanie`.

Możesz również wyszukiwać tagi, klikając je w swoich notatkach.

Aby znaleźć notatki za pomocą wtyczki [[Panel tagów|Panel tagów]], wybierz **Tagi: Pokaż panel tagów** w [[Lista poleceń|palecie poleceń]], a następnie wybierz tag, który chcesz wyszukać.

## Zagnieżdżone tagi

Zagnieżdżone tagi definiują hierarchie tagów, które ułatwiają znajdowanie i filtrowanie powiązanych tagów.

Twórz zagnieżdżone tagi, używając ukośników (`/`) w nazwie tagu, na przykład `#skrzynka/do-przeczytania` i `#skrzynka/przetwarzanie`.

- W [[Szukaj|wyszukiwarce]], `tag:skrzynka` dopasuje zarówno `#skrzynka`, jak i wszystkie zagnieżdżone tagi, takie jak `#skrzynka/do-przeczytania`.
- W [[Panel tagów|Panelu tagów]] zagnieżdżone tagi są wyświetlane jako należące do tagu nadrzędnego.
- W [[Wprowadzenie do Baz danych|Bazach danych]] zagnieżdżone tagi są rozpoznawane przez funkcję [[Funkcje#hasTag|`hasTag`]], więc `file.hasTag("a")` dopasuje zarówno `#a`, jak i `#a/b`.

## Format tagów

W tagach możesz używać dowolnych z poniższych znaków:

- Litery alfabetu
- Liczby
- Podkreślnik (`_`)
- Łącznik (`-`)
- Ukośnik (`/`) dla [[#Zagnieżdżone tagi]]
- Powszechnie akceptowane znaki Unicode, w tym emoji i inne symbole

Tagi muszą zawierać co najmniej jeden znak niebędący cyfrą. Na przykład #1984 nie jest prawidłowym tagiem, ale #r1984 już tak.

Tagi nie rozróżniają wielkości liter. Na przykład #tag i #TAG będą traktowane jako identyczne.

> [!note]
> Tagi są wyświetlane z wielkością liter, z jaką zostały pierwotnie utworzone w [[Panel tagów|Panelu tagów]].
> Na przykład utworzenie #Tag, a następnie #TAG spowoduje wyświetlenie #Tag dla obu.

Tagi nie mogą zawierać spacji. Aby oddzielić dwa lub więcej słów, możesz zamiast tego użyć następujących formatów:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
