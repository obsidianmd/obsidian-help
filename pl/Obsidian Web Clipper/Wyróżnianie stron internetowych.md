---
permalink: web-clipper/highlight
---
[[Wprowadzenie do Obsidian Web Clipper|Web Clipper]] pozwala wyróżniać tekst na stronach internetowych i wybierać elementy, które chcesz zapisać w Obsidian. Twoje wyróżnienia są zapisywane, dzięki czemu możesz do nich wrócić, gdy ponownie odwiedzisz stronę.

Wyróżnienia mogą być [[Wycinanie stron internetowych|przechwycone]] i zapisane w Obsidian po otwarciu rozszerzenia.

## Włączanie zakreślacza

Możesz włączyć wyróżnianie na kilka sposobów, w zależności od przeglądarki:

- Ikona zakreślacza w panelu rozszerzenia.
- Skróty klawiszowe, aby aktywować rozszerzenie z klawiatury.
- Menu kontekstowe, klikając prawym przyciskiem myszy na odwiedzanej stronie internetowej.

Po włączeniu wyróżniania możesz zaznaczać tekst, obrazy i elementy, które chcesz wyróżnić.

## Ustawienia zakreślacza

Możesz zmienić zachowanie zakreślacza, przechodząc do ustawień Web Clipper. Tutaj możesz również wyeksportować swoje wyróżnienia do pliku `.json`.

Istnieją trzy opcje wstawiania wyróżnień do wyciętej notatki za pomocą [[Zmienne|zmiennej]] `{{content}}`:

- **Wyróżnij zawartość strony** — dodaje wyróżnienia bezpośrednio w tekście za pomocą [[Obsidian Flavored Markdown|składni]] `==highlight==`.
- **Zastąp zawartość strony** — zwraca listę wyróżnień, bez żadnej zawartości strony.
- **Nic nie rób** — zwraca oryginalną zawartość bez wyróżnień.

Możesz dodawać wyróżnienia bezpośrednio do swojego szablonu za pomocą zmiennej `{{highlights}}`, na przykład:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
