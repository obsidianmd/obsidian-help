---
permalink: publish/permalinks
---
Możesz zmienić adres URL swoich notatek, używając _łączy stałych_.

Na przykład, możesz zamienić to:

```
https://publish.obsidian.md/username/Company/About+us
```

Na to:

```
https://publish.obsidian.md/username/about
```

Aby utworzyć łącze stałe dla notatki, dodaj właściwość `permalink` do swoich [[Atrybuty|Atrybutów]].

```yaml
---
permalink: about
---
```

Jeśli ktoś odwiedzi notatkę za pomocą oryginalnego adresu URL, zostanie automatycznie przekierowany na łącze stałe.

## Przekierowanie starych notatek

Zmiana nazw i usuwanie notatek to naturalna część utrzymywania żywego skarbca. Chociaż Obsidian automatycznie aktualizuje linki, gdy przenosisz notatkę w lokalnym skarbcu, inne strony internetowe mogą nadal linkować do Twoich starych notatek na opublikowanej stronie [[Wprowadzenie do Obsidian Publish|Obsidian Publish]]. Możesz przekierować czytelników z jednej notatki do innej.

Wyobraź sobie, że chcesz przenieść notatkę z jednego folderu do innego:

- **Guides**
  - ~~Making friends.md~~ (usunięty)
- **Tutorials**
  - *How to make friends.md* (dodany)

Po przeniesieniu notatki Obsidian automatycznie aktualizuje wszystkie linki w skarbcu. Jednak jeśli opublikujesz zmianę na swojej stronie Publish, wszelkie linki do `/Guides/Making+friends` spowodują błąd 404.

Aby przekierować czytelników z `/Guides/Making+friends` do `/Tutorials/How+to+make+friends`, musisz dodać [[Aliasy|alias]] w `How to make friends.md`, czyli notatce, do której chcesz przekierować.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Ważne
> Upewnij się, że w aliasie podajesz pełną ścieżkę do starej notatki. Chociaż użycie samej nazwy notatki jako aliasu działa w lokalnym skarbcu, Publish potrzebuje pełnej ścieżki do notatki, aby móc na nią przekierować.

Możesz przekierować wiele notatek, dodając alias dla każdej z nich.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```
