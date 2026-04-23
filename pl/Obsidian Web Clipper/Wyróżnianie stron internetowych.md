---
permalink: web-clipper/highlight
---
[[Wprowadzenie do Obsidian Web Clipper|Web Clipper]] pozwala wyróżniać tekst na stronach internetowych i wybierać elementy, które chcesz zapisać w Obsidian. Wyróżnienia są zapisywane, dzięki czemu możesz je zobaczyć, gdy ponownie odwiedzisz stronę.

Wyróżnienia mogą być zapisane w Obsidian za pomocą rozszerzenia. Opcje zakreślacza możesz zdefiniować w ustawieniach rozszerzenia.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Korzystanie z zakreślacza

Zakreślacz może być używany na stronach internetowych na żywo lub w [[Czytnik|Czytniku]]. W widoku Czytnika zaznaczenie tekstu daje możliwość jego wyróżnienia.

Możesz również automatycznie dodawać zaznaczenia do wyróżnień, aktywując zakreślacz:

- ![[lucide-highlighter.svg#icon]] **Ikona zakreślacza** w panelu rozszerzenia lub na pasku narzędzi Czytnika.
- **Skrót klawiszowy** konfigurowalny w ustawieniach rozszerzenia.
- **Menu kontekstowe**, klikając prawym przyciskiem myszy na odwiedzanej stronie internetowej.

Po włączeniu zakreślacza każdy zaznaczony tekst, obrazy i elementy zostaną dodane do Twoich wyróżnień. Wszystkie powyższe metody pozwalają również na wyłączenie zakreślacza.

## Dodawanie wyróżnień do notatek

Istnieją trzy opcje wstawiania wyróżnień do wyciętych notatek:

- **Wyróżnij zawartość strony** — dodaje wyróżnienia bezpośrednio w tekście za pomocą [[Obsidian Flavored Markdown|składni]] `==highlight==`.
- **Zastąp zawartość strony** — zwraca listę wyróżnień, bez żadnej zawartości strony.
- **Nic nie rób** — zwraca oryginalną zawartość bez wyróżnień.
 
Te opcje zmieniają [[Zmienne|zmienną]] `{{content}}` w Twoim szablonie. Możesz również dodawać wyróżnienia bezpośrednio do swojego szablonu za pomocą zmiennej `{{highlights}}`, na przykład:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Przeglądanie i wyszukiwanie wyróżnień

Wszystkie utworzone wyróżnienia można przeglądać na stronie Wyróżnień. Możesz otworzyć tę stronę, przechodząc do **Ustawienia** → **Zakreślacz**.

## Eksportowanie wyróżnień

Wyróżnienia mogą być wyeksportowane do pliku `.json`, zarówno na stronie Ustawień, jak i na stronie Wyróżnień.
