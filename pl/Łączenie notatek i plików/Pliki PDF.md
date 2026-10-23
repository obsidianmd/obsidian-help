---
permalink: pdf
publish: true
mobile: true
description: 'Dowiedz się, jak wyświetlać, wyszukiwać i linkować do plików PDF w Obsidian oraz jak eksportować notatkę jako PDF.'
---
Obsidian otwiera pliki PDF we wbudowanej przeglądarce. Możesz także osadzić PDF w notatce, linkować do fragmentu tekstu oraz wyeksportować dowolną notatkę jako PDF. Informacje o obsługiwanych typach plików znajdziesz w [[Obsługiwane formaty plików]].

> [!info]+ Niektóre funkcje są dostępne tylko na komputerze
> Aplikacja mobilna Obsidian nie obsługuje wyszukiwania wewnątrz PDF, kopiowania cytatu ani linku do zaznaczenia, ani eksportu notatki do PDF.

## Otwieranie PDF

W [[Przeglądarka plików|Przeglądarce plików]] wybierz PDF, aby otworzyć go w karcie.

> [!info]+ Adnotacje nie są obsługiwane
> Obsidian nie obsługuje dodawania adnotacji ani wyróżnień do pliku PDF. Aby oznaczyć PDF, użyj innej aplikacji, a następnie otwórz zaktualizowany plik w swoim sejfie.

Przeglądarka posiada pasek narzędzi z następującymi kontrolkami. Aplikacja mobilna Obsidian ma ten sam pasek narzędzi.

- **Pokaż lub ukryj pasek boczny** pokazuje lub ukrywa pasek boczny, a **Opcje paska bocznego** zmienia to, co pasek boczny wyświetla.
- **Oddal** i **Przybliż** zmieniają rozmiar strony.
- **Opcje wyświetlania** zmienia układ stron.
- Pole strony pokazuje bieżącą stronę. Wpisz numer strony, aby do niej przejść.

Aby wykonać operacje na samym pliku PDF, takie jak zmiana nazwy lub przeniesienie, wybierz **Więcej opcji** ![[lucide-more-horizontal.svg#icon]]. PDF ma mniej pozycji w tym menu niż notatka. Zobacz [[Menu więcej opcji]].

## Nawigacja w PDF

Wybierz **Opcje paska bocznego**, a następnie wybierz, co ma być wyświetlane.

- **Miniatury** pokazują mały podgląd każdej strony.
- **Spis treści** pokazuje strukturę PDF, jeśli ją posiada.
- **Wyświetl stronę w spisie treści** podświetla bieżącą stronę w spisie treści.

Aby utworzyć link do strony, kliknij prawym przyciskiem myszy jej miniaturę i wybierz **Skopiuj odnośnik do strony N**, gdzie N to numer strony. Wklej link do notatki.

Aby utworzyć link do sekcji, kliknij prawym przyciskiem myszy wpis w spisie treści i wybierz **Skopiuj odnośnik do "Tytuł"**, gdzie Tytuł to nazwa wpisu. Na urządzeniu mobilnym naciśnij i przytrzymaj wpis.

## Zmiana wyglądu PDF

Wybierz **Opcje wyświetlania**, aby zmienić układ.

- **Dopasuj szerokość** i **Dopasuj wysokość** dopasowują stronę do przeglądarki.
- **Pojedyncza strona** pokazuje jedną stronę na raz.
- **Dwie strony (nieparzyste)** pokazuje strony obok siebie, zaczynając od nieparzystej strony po lewej. Na przykład strony 1 i 2 wyświetlane są razem, a następnie strony 3 i 4.
- **Dwie strony (parzyste)** pokazuje strony obok siebie, zaczynając od parzystej strony po lewej. Na przykład strona 1 wyświetlana jest samodzielnie, a następnie strony 2 i 3 wyświetlane są razem.
- **Dopasuj do motywu** przyciemnia kolory PDF, gdy motyw Obsidian jest ciemny.

## Wyszukiwanie w PDF

Wyszukiwanie wewnątrz PDF jest dostępne tylko na komputerze. Aplikacja mobilna Obsidian nie posiada wyszukiwania w przeglądarce PDF.

1. Naciśnij `Ctrl+F` (Windows i Linux) lub `Command+F` (macOS).
2. W polu **Szukaj...** wpisz tekst, który chcesz znaleźć.
3. Wybierz strzałkę w górę lub w dół, aby przechodzić między wynikami.

Aby zmienić sposób działania wyszukiwania, użyj następujących opcji.

- **Rozróżniaj wielkość liter** dopasowuje dokładnie wielkie i małe litery. Jest to przycisk **Aa** w polu wyszukiwania.
- **Wyróżnij wszystko** podświetla każde dopasowanie. Wybierz przycisk ustawień obok strzałek, aby znaleźć tę opcję.
- **Dopasuj znaki diakrytyczne** traktuje litery z akcentami jako różne litery. Opcja znajduje się w tym samym menu ustawień.
- **Całe słowa** wyszukuje tylko całe słowa. Opcja znajduje się w tym samym menu ustawień.

Wybierz przycisk zamknięcia, aby wyjść z wyszukiwania.

## Kopiowanie tekstu z PDF

Na komputerze zaznacz tekst w PDF, a następnie kliknij go prawym przyciskiem myszy.

- **Kopiuj** kopiuje tekst.
- **Skopiuj jako cytat** kopiuje tekst jako cytat, po którym następuje link do fragmentu.
- **Skopiuj odnośnik do zaznaczenia** kopiuje link do tego fragmentu, dzięki czemu możesz wkleić go do notatki.

Cytat wygląda następująco po wklejeniu do notatki.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Link do zaznaczenia zawiera ten sam odnośnik samodzielnie.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Na urządzeniu mobilnym zaznaczenie tekstu w PDF wyświetla standardowe menu tekstowe urządzenia. **Skopiuj jako cytat** i **Skopiuj odnośnik do zaznaczenia** nie są dostępne.

## Osadzanie PDF

Aby wyświetlić PDF wewnątrz notatki, zobacz jak [[Osadzanie plików#Osadzanie PDF w notatce|osadzić PDF w notatce]]. Osadzony PDF ma ten sam pasek narzędzi co przeglądarka. Wybierz **Edytuj ten blok**, aby zmienić link osadzenia.

## Eksport notatki do PDF

Możesz wyeksportować dowolną notatkę jako PDF na komputerze. Eksport do PDF nie jest dostępny w aplikacji mobilnej Obsidian.

1. Otwórz notatkę, którą chcesz wyeksportować.
2. Otwórz [[Lista poleceń|Paletę poleceń]] i wybierz **Eksportuj do PDF**. Możesz także wybrać **Więcej opcji** ![[lucide-more-horizontal.svg#icon]] w notatce, a następnie wybrać **Eksportuj do PDF**.
3. Wybierz ustawienia.
    - **Dołącz nazwę pliku jako tytuł** dodaje nazwę pliku na górze PDF.
    - **Wielkość strony** ustawia rozmiar papieru. Możesz wybrać A3, A4, A5, Legal, Letter lub Tabloid.
    - **Orientacja pozioma** obraca strony na boki.
    - **Margines** ustawia margines strony na **Domyślne**, **Minimalny** lub **Żadne**.
    - **Skalowanie procentowe** skaluje zawartość na każdej stronie. Przy 100 zawartość pozostaje w pełnym rozmiarze. Niższe wartości zmniejszają tekst i obrazy, dzięki czemu na każdej stronie mieści się więcej treści.
4. Wybierz **Eksportuj do PDF**.
5. Wybierz, gdzie zapisać plik.

> [!tip]- Eksport notatki z ciemnym motywem
> Eksporty zawsze używają jasnego stylu, nawet jeśli Twój motyw jest ciemny. Aby zmienić wygląd eksportu, możesz użyć [[Snippety CSS|snippetu CSS]]. Na forum Obsidian znajdziesz przykłady snippetów do drukowania i eksportowania.[^1]

[^1]: Zobacz [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) i [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
