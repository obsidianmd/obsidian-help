---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Dowiedz się, jak linkować do notatek, załączników i innych plików ze swoich notatek, korzystając z linków wewnętrznych.'
---
Dowiedz się, jak tworzyć odnośniki do notatek, załączników i innych plików w swoich notatkach, używając _łączy wewnętrznych_. Łącząc notatki, możesz stworzyć sieć wiedzy. ^b15695

Obsidian może automatycznie aktualizować łącza wewnętrzne w Twoim skarbcu, gdy zmienisz nazwę pliku. Jeśli wolisz, aby pojawiało się pytanie o potwierdzenie, możesz to wyłączyć w:

**[[Ustawienia]]** → **[[Ustawienia#Pliki i łącza|Pliki i łącza]]** → **[[Ustawienia#Zawsze aktualizuj łącza wewnętrzne|Zawsze aktualizuj łącza wewnętrzne]]**.

## Obsługiwane formaty łączy wewnętrznych

Obsidian obsługuje następujące formaty łączy:

- Odnośnik wiki: `[[Three laws of motion]]` lub `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` lub `[Three laws of motion](Three%20laws%20of%20motion.md)`

Powyższe przykłady są równoważne — wyglądają tak samo w edytorze i prowadzą do tej samej notatki.

> [!note] Uwaga
> Korzystając z formatu Markdown, upewnij się, że [kodujesz URL](https://en.wikipedia.org/wiki/Percent-encoding) w miejscu docelowym łącza. Na przykład spacje stają się `%20`.

Domyślnie, ze względu na bardziej zwięzły format, Obsidian generuje łącza w formacie odnośników wiki. Jeśli zależy Ci na interoperacyjności, możesz wyłączyć odnośniki wiki i używać zamiast tego łączy Markdown.

Aby użyć formatu Markdown:

1. Otwórz **[[Ustawienia]]**.
2. W sekcji **Pliki i łącza** wyłącz opcję **Używaj \[\[Wikilinków\]\]**.

Nawet po wyłączeniu formatu odnośników wiki nadal możesz korzystać z autouzupełniania łączy, wpisując dwa nawiasy kwadratowe `[[`. Po wybraniu jednego z sugerowanych plików Obsidian wygeneruje łącze w formacie Markdown.

> [!note] Niedozwolone znaki
> Ciąg znaków zawierający następujące znaki może nie działać jako łącze: `# | ^ : %% [[ ]]`. 
> 
> Zalecamy unikanie tych znaków i stosowanie [bezpiecznych praktyk nazewnictwa plików](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names). 

## Łącze do pliku

Aby utworzyć łącze w trybie edycji, użyj jednego z poniższych sposobów:

- Wpisz `[[` w edytorze, a następnie wybierz plik, do którego chcesz utworzyć łącze.
- Zaznacz tekst w edytorze, a następnie wpisz `[[`.
- Otwórz [[Lista poleceń|paletę poleceń]], a następnie wybierz Łącze wewnętrzne.

![[Okno szybkiego wyboru#^search-autocomplete-large]]

Chociaż możesz tworzyć łącza do dowolnych [[Obsługiwane formaty plików|obsługiwanych formatów plików]], łącza do formatów innych niż Markdown muszą zawierać rozszerzenie pliku, na przykład `[[Figure 1.png]]`.

> [!tip] Dodanie wykrzyknika (!) przed łączem wewnętrznym pozwala osadzić powiązaną zawartość. Więcej szczegółów znajdziesz w [[Osadzanie plików]].

> [!info] Pominięte pliki
> Pliki pasujące do wzorców [[Ustawienia#Pominięte pliki|Pominięte pliki]] mają niższy priorytet w sugestiach łączy podczas tworzenia łączy wewnętrznych.

## Łącze do nagłówka w notatce

Możesz tworzyć łącza do konkretnych nagłówków w notatkach, znane również jako _łącza kotwicowe_.

**Łączenie do nagłówka w tej samej notatce**

Aby utworzyć łącze do nagłówka w tej samej notatce, wpisz `[[#`, aby wyświetlić listę nagłówków w notatce, do których można się odwołać.

Na przykład `[[#Podgląd powiązanego pliku]]` utworzy łącze do [[#Podgląd powiązanego pliku]].

**Łączenie do nagłówka w innej notatce**

Aby utworzyć łącze do nagłówka w innej notatce, dodaj hash (`#`) na końcu miejsca docelowego łącza, a następnie tekst nagłówka.

Na przykład `[[O Obsidian#Łącza to obywatele pierwszej klasy]]` utworzy łącze do [[O Obsidian#Łącza to obywatele pierwszej klasy]].

**Łączenie do podnagłówków**

Możesz dodać wiele symboli hash dla każdego podnagłówka.

Na przykład `[[Pomoc i wsparcie#Questions and advice#Report bugs and request features]]` utworzy łącze do [[Pomoc i wsparcie#Questions and advice#Report bugs and request features]].

**Wyszukiwanie nagłówków w całym skarbcu**

Aby wyszukać nagłówki w całym skarbcu, użyj składni `[[## nagłówek]]`.

Na przykład `[[##` wyszuka ogólnie w całym skarbcu, natomiast `[[## team]]` wyszuka wszystkie nagłówki zawierające słowo _team_.

> [!info]- Zrzut ekranu wyszukiwania łącza do nagłówka
>
> ![[internal-links-header.png#interface]]

## Łącze do bloku w notatce

Blok to jednostka tekstu w notatce, taka jak akapit, cytat blokowy lub element listy.

Możesz utworzyć łącze do bloku, dodając `#^` na końcu miejsca docelowego łącza, a następnie unikalny identyfikator bloku. Na przykład: `[[2023-01-01#^37066d]]`. Na szczęście nie musisz ręcznie szukać identyfikatora — gdy wpiszesz daszek (`^`), pojawi się lista sugestii, umożliwiająca wybranie odpowiedniego bloku.

Dla *zwykłych akapitów* umieść spację, a następnie daszek `^` i identyfikator bloku na końcu wiersza:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

Dla *bloków strukturalnych* (listy, cytaty, bloki wyróżnienia, tabele) identyfikator bloku powinien znajdować się w osobnym wierszu, z pustym wierszem przed i po:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

Dla *konkretnych wierszy na liście* identyfikator bloku można umieścić bezpośrednio przy punkcie listy:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Nie obsługujemy łączy do konkretnych części cytatów, bloków wyróżnienia ani tabel.

**Wyszukiwanie bloków w całym skarbcu**

Możesz także wyszukiwać bloki do linkowania z całego skarbca, używając składni `[[^^blok]]`. Jednak więcej elementów kwalifikuje się jako bloki w porównaniu z [[#Łącze do nagłówka w notatce|łączami do nagłówków]], więc ta lista będzie znacznie dłuższa.

> [!info]- Zrzut ekranu wyszukiwania łącza do bloku 
> ![[link-block-heading.png#interface]]

Możesz także tworzyć czytelne identyfikatory bloków, dodając spację, a następnie daszek (`^`) i identyfikator. Identyfikatory bloków mogą składać się wyłącznie z liter łacińskich, cyfr i myślników.

Na przykład dodaj `^quote-of-the-day` na końcu bloku:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Teraz możesz utworzyć łącze do bloku, wpisując `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Interoperacyjność
> Odniesienia do bloków są specyficzne dla Obsidian i nie są częścią standardowego formatu Markdown. Łącza zawierające odniesienia do bloków nie będą działać poza Obsidian.

## Zmiana wyświetlanego tekstu łącza

Domyślnie Obsidian wyświetla tekst łącza w takiej postaci, w jakiej się pojawia. Na przykład:  
- `[[Example]]` wyświetla się jako [[Example]]  
- `[[Example#Details]]` wyświetla się jako [[Example#Details]]

Możesz zmienić sposób wyświetlania łącza, dostosowując jego wyświetlany tekst:

**Format odnośnika wiki**:  
Użyj pionowej kreski (`|`), aby zmienić wyświetlany tekst.

- `[[Example|Niestandardowa nazwa]]` wyświetla się jako [[Example|Niestandardowa nazwa]]  
- `[[Example#Details|Nazwa sekcji]]` wyświetla się jako [[Example#Details|Nazwa sekcji]]

**Format Markdown**:  
Użyj `[Wyświetlany tekst](URL łącza)`, aby dostosować sposób wyświetlania łącza.

- `[Niestandardowa nazwa](Example.md)` wyświetla się jako [Niestandardowa nazwa](Example.md)  
- `[Nazwa sekcji](Example.md#Details)` wyświetla się jako [Nazwa sekcji](Example.md#Details)

Ta metoda jest przydatna w jednorazowych sytuacjach, gdy chcesz zmienić wygląd łącza w określonym kontekście. Jeśli chcesz ustawić alternatywną nazwę łącza, którą możesz wielokrotnie wykorzystywać w całym skarbcu, rozważ użycie [[Aliasy|aliasu]]. 

Na przykład, jeśli regularnie odwołujesz się do `[[Three laws of motion]]` jako `[[The 3 laws]]`, dodanie „3 laws" jako aliasu pozwoli Ci wpisać tylko tę frazę — bez konieczności dodawania niestandardowego wyświetlanego tekstu za każdym razem.

> [!tip] Wskazówka
> Użyj [[#Zmiana wyświetlanego tekstu łącza|wyświetlanego tekstu łącza]], gdy chcesz dostosować wygląd łącza *w konkretnym miejscu*.  
> 
> Użyj [[Aliasy|aliasów]], gdy chcesz odwoływać się do tej samej notatki, używając *różnych nazw* w całym skarbcu.
^callout-internal-links-link-text

## Podgląd powiązanego pliku

> [!note] Uwaga
> Aby wyświetlać podgląd powiązanych plików, musisz najpierw włączyć [[Podgląd notatki]].

Aby wyświetlić podgląd powiązanego pliku, najedź kursorem na łącze wewnętrzne. W trybie edycji naciśnij `Ctrl` (lub `Cmd` na macOS) podczas najeżdżania kursorem na łącze. Podgląd zawartości pliku pojawi się obok kursora.
