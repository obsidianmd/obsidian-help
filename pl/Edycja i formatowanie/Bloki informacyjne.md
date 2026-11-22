---
permalink: callouts
publish: true
mobile: true
description: 'Ta strona opisuje, jak używać objaśnień, aby dołączać dodatkową treść bez zakłócania przepływu notatek.'
---
Używaj bloków informacyjnych, aby dołączyć dodatkową treść bez przerywania toku notatek.

Aby utworzyć blok informacyjny, dodaj `[!info]` do pierwszego wiersza cytatu blokowego, gdzie `info` to _identyfikator typu_. Identyfikator typu określa wygląd i styl bloku informacyjnego. Aby zobaczyć wszystkie dostępne typy, przejdź do [[#Obsługiwane typy]]. Bloki informacyjne są również obsługiwane natywnie w [[Wprowadzenie do Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Oto tytuł bloku informacyjnego
> Oto blok informacyjny.
> Obsługuje **Markdown**, [[Łącza wewnętrzne|odnośniki wiki]] i [[Osadzanie plików|osadzanie]]!
> ![[Engelbart.jpg]]
```

> [!info] Oto tytuł bloku informacyjnego
> Oto blok informacyjny.
> Obsługuje **Markdown**, [[Łącza wewnętrzne|odnośniki wiki]] i [[Osadzanie plików|osadzanie]]!
> ![[Engelbart.jpg]]

Możesz wstawić domyślny blok informacyjny `[!note]` za pomocą [[Paleta poleceń|polecenia]] `Objaśnienie`. Kursor automatycznie ustawi się w polu nazwy bloku informacyjnego, umożliwiając usunięcie domyślnej nazwy i wpisanie nowej przed edycją treści.

Aby otoczyć istniejącą treść blokiem informacyjnym, zaznacz tekst (w tym listy, bloki kodu itp.) i uruchom polecenie `Objaśnienie`. Zaznaczona treść zostanie automatycznie umieszczona w bloku informacyjnym.

W [[Tryby edycji i odczytu#Podgląd na żywo|podglądzie na żywo]] możesz również kliknąć prawym przyciskiem myszy nazwę bloku informacyjnego, aby zmienić jego typ.


### Zmiana tytułu

Domyślnie tytuł bloku informacyjnego to jego identyfikator typu zapisany wielką literą. Możesz go zmienić, dodając tekst po identyfikatorze typu:

```markdown
> [!tip] Bloki informacyjne mogą mieć niestandardowe tytuły
> Tak jak ten.
```

> [!tip] Bloki informacyjne mogą mieć niestandardowe tytuły
> Tak jak ten.

Możesz nawet pominąć treść, aby utworzyć bloki informacyjne składające się tylko z tytułu:

```markdown
> [!tip] Blok informacyjny składający się tylko z tytułu
```

> [!tip] Blok informacyjny składający się tylko z tytułu

### Zwijalne bloki informacyjne

Możesz uczynić blok informacyjny zwijalnym, dodając plus (`+`) lub minus (`-`) bezpośrednio po identyfikatorze typu.

Znak plusa domyślnie rozwija blok informacyjny, a znak minusa go zwija.

```markdown
> [!faq]- Czy bloki informacyjne są zwijalne?
> Tak! W zwijalnym bloku informacyjnym treść jest ukryta, gdy blok jest zwinięty.
```

> [!faq]- Czy bloki informacyjne są zwijalne?
> Tak! W zwijalnym bloku informacyjnym treść jest ukryta, gdy blok jest zwinięty.

### Zagnieżdżone bloki informacyjne

Możesz zagnieżdżać bloki informacyjne na wielu poziomach.

```markdown
> [!question] Czy bloki informacyjne mogą być zagnieżdżone?
> > [!todo] Tak!, mogą.
> > > [!example] Możesz nawet użyć wielu poziomów zagnieżdżenia.
```

> [!question] Czy bloki informacyjne mogą być zagnieżdżone?
> > [!todo] Tak!, mogą.
> > > [!example] Możesz nawet użyć wielu poziomów zagnieżdżenia.

### Dostosowywanie bloków informacyjnych

[[Snippety CSS]] i [[Wtyczki społeczności]] mogą definiować niestandardowe bloki informacyjne, a nawet nadpisywać domyślną konfigurację.

Aby zdefiniować niestandardowy blok informacyjny, utwórz następujący blok CSS:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: #000000;
    --callout-icon: lucide-alert-circle;
}
```

Wartość atrybutu `data-callout` to identyfikator typu, którego chcesz użyć, na przykład `[!custom-question-type]`.

- `--callout-color` definiuje kolor tła. Działa każdy prawidłowy kolor CSS, na przykład kod heksadecymalny (`#000000`) lub wartość `rgb()`.
- `--callout-icon` może być identyfikatorem ikony z [lucide.dev](https://lucide.dev) lub elementem SVG.

> [!warning] Uwaga dotycząca wersji ikon lucide
> Obsidian okresowo aktualizuje ikony Lucide. Aktualnie dołączona wersja jest pokazana poniżej; używaj tych lub wcześniejszych ikon w niestandardowych blokach informacyjnych.
> ![[Twórcy#^lucide]]

> [!tip] Ikony SVG
> Zamiast używać ikony Lucide, możesz również użyć elementu SVG jako ikony bloku informacyjnego.
>
> ```css
> --callout-icon: '<svg>...niestandardowy svg...</svg>';
> ```

> [!tip]- Dalsze dostosowywanie
> Nie jesteś ograniczony do `--callout-color` i `--callout-icon`. Bloki informacyjne obsługują standardowe selektory i właściwości CSS, a także dodatkowe zmienne CSS do takich rzeczy jak obramowanie i stylizacja tytułu.
> 
> Na przykład, ukryj tytuł bloku informacyjnego:
> 
> ```css
> .callout[data-callout="custom-question-type"] .callout-title {
>     display: none;
> }
> ```
> 
> Lub dostosuj jego obramowanie:
> 
> ```css
> .callout[data-callout="custom-question-type"] {
>     --callout-border-width: 2px;
>     --callout-border-opacity: 0.25;
> }
> ```
> 
> Pełną listę [zmiennych CSS bloków informacyjnych](https://docs.obsidian.md/Reference/CSS+variables/Editor/Callout) znajdziesz w dokumentacji.

### Obsługiwane typy

Możesz używać kilku typów bloków informacyjnych i aliasów. Każdy typ ma inny kolor tła i ikonę.

Aby użyć tych domyślnych stylów, zastąp `info` w przykładach dowolnym z tych typów, np. `[!tip]` lub `[!warning]`. Typy bloków informacyjnych można również zmienić, klikając prawym przyciskiem myszy blok informacyjny w trybie podglądu na żywo.

O ile nie [[#Dostosowywanie bloków informacyjnych|dostosujesz bloków informacyjnych]], każdy nieobsługiwany typ domyślnie przyjmuje typ `note`. Identyfikator typu nie rozróżnia wielkości liter.

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]-
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

Aliasy: `summary`, `tldr`

---

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

---

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

Aliasy: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Aliasy: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Aliasy: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Aliasy: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Aliasy: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Alias: `error`

---

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

---

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

Alias: `cite`
