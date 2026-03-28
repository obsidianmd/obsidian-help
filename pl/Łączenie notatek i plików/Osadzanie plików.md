---
permalink: embeds
cssclasses:
  - soft-embed
---
Dowiedz się, jak osadzać inne notatki i multimedia w swoich notatkach. Osadzając pliki w notatkach, możesz ponownie wykorzystywać zawartość w całym skarbcu.

Aby osadzić plik ze skarbca, dodaj wykrzyknik (`!`) przed [[Łącza wewnętrzne|łączem wewnętrznym]]. Możesz osadzać pliki w dowolnym z [[Obsługiwane formaty plików|obsługiwanych formatów plików]].

> [!tip] Osadzanie przez przeciągnij i upuść
> Na komputerze możesz również przeciągnąć i upuścić obsługiwane pliki bezpośrednio do notatki, aby osadzić je automatycznie.

## Osadzanie notatki w innej notatce

Aby osadzić notatkę:

```md
![[Łącza wewnętrzne]]
```

Możesz również osadzać łącza do [[Łącza wewnętrzne#Link do nagłówka w notatce|nagłówków]] i [[Łącza wewnętrzne#Link do bloku w notatce|bloków]].

```md
![[Łącza wewnętrzne#^b15695]]
```

Poniższy tekst jest przykładem osadzonego bloku:

![[Łącza wewnętrzne#^b15695]]

## Osadzanie obrazu w notatce

Aby osadzić obraz:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Możesz zmienić wymiary obrazu, dodając `|640x480` do celu łącza, gdzie 640 to szerokość, a 480 to wysokość.

```md
![[Engelbart.jpg|100x145]]
```

Jeśli określisz tylko szerokość, obraz zostanie przeskalowany zgodnie z oryginalnymi proporcjami. Na przykład `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Możesz również osadzić obraz hostowany zewnętrznie, używając łącza w formacie Markdown. Szerokość i wysokość kontrolujesz w ten sam sposób, co w przypadku odnośnika wiki.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Osadzanie pliku audio w notatce

Aby osadzić plik audio:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Osadzanie pliku PDF w notatce

Aby osadzić plik PDF:

```md
![[Document.pdf]]
```

Możesz również otworzyć konkretną stronę w pliku PDF, dodając `#page=N` do celu łącza, gdzie `N` to numer strony:

```md
![[Document.pdf#page=3]]
```

Możesz również określić wysokość w pikselach dla osadzonej przeglądarki PDF, dodając `#height=[number]` do łącza. Na przykład:

```md
![[Document.pdf#height=400]]
```

## Osadzanie listy w notatce

Aby osadzić listę z innej notatki, najpierw dodaj [[Łącza wewnętrzne#Link do bloku w notatce|identyfikator bloku]] do swojej listy:

```md

- element listy 1
- element listy 2

^my-list-id
```

Następnie utwórz łącze do listy, używając identyfikatora bloku:

```md
![[Moja notatka#^my-list-id]]
```

## Osadzanie wyników wyszukiwania

![[Szukaj#Osadzanie wyników wyszukiwania w notatce]]
