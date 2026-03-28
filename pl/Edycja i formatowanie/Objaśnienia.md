---
permalink: callouts
publish: true
mobile: true
description: 'Ta strona opisuje, jak używać objaśnień, aby dołączać dodatkową treść bez zakłócania przepływu notatek.'
---
Używaj bloków wyróżnienia, aby dołączyć dodatkową treść bez przerywania toku notatek.

Aby utworzyć blok wyróżnienia, dodaj `[!info]` do pierwszego wiersza cytatu blokowego, gdzie `info` to _identyfikator typu_. Identyfikator typu określa wygląd i styl bloku wyróżnienia. Aby zobaczyć wszystkie dostępne typy, przejdź do [[#Obsługiwane typy]]. Bloki wyróżnienia są również obsługiwane natywnie w [[Wprowadzenie do Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Oto tytuł bloku wyróżnienia
> Oto blok wyróżnienia.
> Obsługuje **Markdown**, [[Łącza wewnętrzne|odnośniki wiki]] i [[Osadzanie plików|osadzanie]]!
> ![[Engelbart.jpg]]
```

> [!info] Oto tytuł bloku wyróżnienia
> Oto blok wyróżnienia.
> Obsługuje **Markdown**, [[Łącza wewnętrzne|odnośniki wiki]] i [[Osadzanie plików|osadzanie]]!
> ![[Engelbart.jpg]]

Możesz wstawić domyślny blok wyróżnienia `[!note]` za pomocą [[Lista poleceń|polecenia]] `Objaśnienie`. Kursor automatycznie ustawi się w polu nazwy bloku wyróżnienia, umożliwiając usunięcie domyślnej nazwy i wpisanie nowej przed edycją treści.

Aby otoczyć istniejącą treść blokiem wyróżnienia, zaznacz tekst (w tym listy, bloki kodu itp.) i uruchom polecenie `Objaśnienie`. Zaznaczona treść zostanie automatycznie umieszczona w bloku wyróżnienia.

W [[Podglądy i tryb edycji#Podgląd na żywo|podglądzie na żywo]] możesz również kliknąć prawym przyciskiem myszy nazwę bloku wyróżnienia, aby zmienić jego typ.


### Zmiana tytułu

Domyślnie tytuł bloku wyróżnienia to jego identyfikator typu zapisany wielką literą. Możesz go zmienić, dodając tekst po identyfikatorze typu:

```markdown
> [!tip] Bloki wyróżnienia mogą mieć niestandardowe tytuły
> Tak jak ten.
```

> [!tip] Bloki wyróżnienia mogą mieć niestandardowe tytuły
> Tak jak ten.

Możesz nawet pominąć treść, aby utworzyć bloki wyróżnienia składające się tylko z tytułu:

```markdown
> [!tip] Blok wyróżnienia składający się tylko z tytułu
```

> [!tip] Blok wyróżnienia składający się tylko z tytułu

### Zwijalne bloki wyróżnienia

Możesz uczynić blok wyróżnienia zwijalnym, dodając plus (`+`) lub minus (`-`) bezpośrednio po identyfikatorze typu.

Znak plusa domyślnie rozwija blok wyróżnienia, a znak minusa go zwija.

```markdown
> [!faq]- Czy bloki wyróżnienia są zwijalne?
> Tak! W zwijalnym bloku wyróżnienia treść jest ukryta, gdy blok jest zwinięty.
```

> [!faq]- Czy bloki wyróżnienia są zwijalne?
> Tak! W zwijalnym bloku wyróżnienia treść jest ukryta, gdy blok jest zwinięty.

### Zagnieżdżone bloki wyróżnienia

Możesz zagnieżdżać bloki wyróżnienia na wielu poziomach.

```markdown
> [!question] Czy bloki wyróżnienia mogą być zagnieżdżone?
> > [!todo] Tak!, mogą.
> > > [!example] Możesz nawet użyć wielu poziomów zagnieżdżenia.
```

> [!question] Czy bloki wyróżnienia mogą być zagnieżdżone?
> > [!todo] Tak!, mogą.
> > > [!example] Możesz nawet użyć wielu poziomów zagnieżdżenia.

### Dostosowywanie bloków wyróżnienia

[[Snippety CSS]] i [[Wtyczki społeczności]] mogą definiować niestandardowe bloki wyróżnienia, a nawet nadpisywać domyślną konfigurację.

Aby zdefiniować niestandardowy blok wyróżnienia, utwórz następujący blok CSS:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

Wartość atrybutu `data-callout` to identyfikator typu, którego chcesz użyć, na przykład `[!custom-question-type]`.

- `--callout-color` definiuje kolor tła za pomocą liczb (0–255) dla czerwonego, zielonego i niebieskiego.
- `--callout-icon` może być identyfikatorem ikony z [lucide.dev](https://lucide.dev) lub elementem SVG.

> [!warning] Uwaga dotycząca wersji ikon lucide
> Obsidian okresowo aktualizuje ikony Lucide. Aktualnie dołączona wersja jest pokazana poniżej; używaj tych lub wcześniejszych ikon w niestandardowych blokach wyróżnienia.
> ![[Twórcy#^lucide]]

> [!tip] Ikony SVG
> Zamiast używać ikony Lucide, możesz również użyć elementu SVG jako ikony bloku wyróżnienia.
>
> ```css
> --callout-icon: '<svg>...niestandardowy svg...</svg>';
> ```

### Obsługiwane typy

Możesz używać kilku typów bloków wyróżnienia i aliasów. Każdy typ ma inny kolor tła i ikonę.

Aby użyć tych domyślnych stylów, zastąp `info` w przykładach dowolnym z tych typów, np. `[!tip]` lub `[!warning]`. Typy bloków wyróżnienia można również zmienić, klikając prawym przyciskiem myszy blok wyróżnienia w trybie podglądu na żywo.

O ile nie [[#Dostosowywanie bloków wyróżnienia|dostosujesz bloków wyróżnienia]], każdy nieobsługiwany typ domyślnie przyjmuje typ `note`. Identyfikator typu nie rozróżnia wielkości liter.

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
