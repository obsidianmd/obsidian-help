---
permalink: aliases
cssclasses:
  - soft-embed
---
Jeśli chcesz odwoływać się do pliku za pomocą różnych nazw, rozważ dodanie _aliasów_ do notatki. Alias to alternatywna nazwa notatki.

Używaj aliasów do takich rzeczy jak akronimy, pseudonimy lub do odwoływania się do notatki w innym języku.

Jeśli chcesz jedynie zmienić wygląd linku w jednym miejscu, sprawdź jak [[Łącza wewnętrzne#Zmiana wyświetlanego tekstu łącza|Zmienić wyświetlany tekst łącza]].

![[Łącza wewnętrzne#^callout-internal-links-link-text]]

## Dodawanie aliasu do notatki

Aby dodać alias do notatki, dodaj właściwość `aliases` w [[Atrybuty|atrybutach]] notatki. Aliasy powinny być zawsze sformatowane jako lista w YAML.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Łączenie z notatką za pomocą aliasu

Aby utworzyć łącze do notatki za pomocą aliasu:

1. Zacznij wpisywać alias w [[Łącza wewnętrzne|łączu wewnętrznym]]. Każdy alias pojawi się na liście sugestii z ikoną zakrzywionej strzałki obok.
2. Naciśnij `Enter`, aby wybrać alias.

Obsidian utworzy łącze z aliasem jako niestandardowym wyświetlanym tekstem, na przykład `[[Artificial Intelligence|AI]]`.

> [!note] Uwaga
> Zamiast używać samego aliasu jako celu łącza (`[[AI]]`), Obsidian stosuje format łącza `[[Artificial Intelligence|AI]]`, aby zapewnić interoperacyjność z innymi aplikacjami korzystającymi z formatu odnośników wiki.

## Znajdowanie niepowiązanych wzmianek dla aliasu

Używając [[Linki zwrotne|linków zwrotnych]], możesz znaleźć niepowiązane wzmianki aliasów.

Na przykład, po ustawieniu "AI" jako aliasu dla "Artificial intelligence", możesz zobaczyć wzmianki o "AI" w innych notatkach.

Jeśli połączysz niepowiązaną wzmiankę z aliasem, Obsidian zamieni wzmiankę w [[Łącza wewnętrzne|łącze wewnętrzne]] z aliasem jako wyświetlanym tekstem.
