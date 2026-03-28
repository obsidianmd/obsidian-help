---
permalink: snippets
publish: true
mobile: true
description: 'Dowiedz się, jak zmieniać elementy wyglądu aplikacji Obsidian bez tworzenia pełnego motywu.'
---
Dowiedz się, jak modyfikować aspekty wyglądu aplikacji Obsidian bez konieczności [budowania motywu](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Jeśli szukasz wskazówek dotyczących obsługi CSS dla [[Wprowadzenie do Obsidian Publish|Obsidian Publish]], koniecznie zapoznaj się z [[Dostosuj swoją stronę]].

CSS to język kontrolujący wygląd HTML. Dodając snippety CSS, możesz zmieniać części interfejsu użytkownika Obsidian, takie jak rozmiar i kolor nagłówków. Obsidian posiada [zmienne CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables), które ułatwiają dostosowywanie interfejsu.

Obsidian szuka snippetów CSS wewnątrz [[Folder konfiguracji|folderu konfiguracji]] skarbca.

## Dodawanie snippeta

Aby dodać snippet CSS na **komputerze** ![[lucide-monitor-check.svg#icon]], wykonaj następujące kroki:

1. Otwórz **[[Ustawienia]]** ![[lucide-settings.svg#icon]].
2. W sekcji **Wygląd → Snippety CSS** wybierz **Otwórz folder snippetów** ![[lucide-folder-open.svg#icon]].
3. W folderze snippetów utwórz plik CSS zawierający Twój snippet.
4. W Obsidian, w sekcji **Wygląd → Snippety CSS**, wybierz **Odśwież snippety** ![[lucide-refresh-cw.svg#icon]], aby zobaczyć snippet na liście.
5. Włącz snippet, klikając przełącznik.

Aby dodać snippet CSS na **urządzeniu mobilnym/tablecie** ![[obsidian-icon-smartphone.svg#icon]], możesz wykonać następujące kroki:

1. Otwórz menedżer plików i znajdź swój skarbiec. Możesz sprawdzić lokalizację skarbca w opcji _Zarządzaj skarbcami…_, dotykając swojego skarbca i sprawdzając ścieżkę.
2. Otwórz [[Folder konfiguracji]] i utwórz folder o nazwie `snippets`, jeśli nie istnieje.
3. Dodaj swój snippet CSS do tego folderu.
4. Otwórz **[[Ustawienia]]** ![[lucide-settings.svg#icon]] Obsidian.
5. Wybierz **Wygląd** po lewej stronie.
6. Przewiń w dół do sekcji **Snippety CSS**.
7. Dotknij **Odśwież snippety** ![[lucide-refresh-cw.svg#icon]], aby odświeżyć listę.
8. Dotknij przełącznika, aby włączyć snippet.

Alternatywnie możesz:
- [[Synchronizuj notatki między urządzeniami|Zsynchronizować]] wszelkie zmiany za pomocą usługi synchronizacji.
- Użyć wtyczki społeczności, aby utworzyć snippet bezpośrednio w Obsidian.

Po włączeniu Obsidian automatycznie wykryje zmiany w snippetach CSS i zastosuje je po zapisaniu pliku.

> [!tip] Nie musisz ponownie uruchamiać Obsidian, aby zmiany zaczęły obowiązywać. Może być jednak konieczne użycie polecenia z [[Lista poleceń|palety poleceń]], aby przeładować Obsidian bez zapisywania i zobaczyć zmiany w bieżącym motywie lub notatce.

## Pisanie CSS dla Obsidian

Obsidian oferuje kilka metod ułatwiających pisanie CSS i czyniących je bardziej zaawansowanym.

Posiada wiele [zmiennych CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) do łatwej modyfikacji części Obsidian oraz wbudowany [[Atrybuty#Rodzaje atrybutów|rodzaj atrybutu]] do zmiany wyglądu jednej lub kilku notatek.

> [!example] Zmienne
> Utwórz plik o nazwie `headers.css` z następującą zawartością, aby zmienić kolory sześciu [[Podstawowa składnia formatowania#Nagłówki|poziomów nagłówków]] na tęczowe:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] Klasy CSS
> Przypisz nazwę niestandardowej klasy CSS (lub listę klas CSS) do predefiniowanego [[Atrybuty|atrybutu]] `cssclasses`, aby jedna lub więcej notatek wyglądała inaczej niż pozostałe.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/Atrybuty**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> W każdej notatce zawierającej wartość `red-border` w atrybucie `cssclasses` obrazy wyświetlane są z czerwoną ramką.

Aby upewnić się, że plik CSS jest prawidłowy i poprawnie sformatowany, zalecamy walidację za pomocą narzędzia takiego jak [CSS Validation Service](https://jigsaw.w3.org/css-validator/), ponieważ nieprawidłowy CSS nie będzie działać.

## Dowiedz się więcej

- Jeśli dopiero zaczynasz przygodę z CSS, zapoznaj się z [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) od Mozilli.
- Więcej informacji o stylizowaniu Obsidian znajdziesz w:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
