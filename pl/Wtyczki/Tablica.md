---
permalink: plugins/canvas
---
Canvas to [[Wbudowane wtyczki|wbudowana wtyczka]] do wizualnego tworzenia notatek. Zapewnia nieskończoną przestrzeń do rozmieszczania notatek i łączenia ich z innymi notatkami, załącznikami i stronami internetowymi.

Wizualne tworzenie notatek pomaga w zrozumieniu notatek poprzez organizowanie ich w przestrzeni 2D. Łącz notatki liniami i grupuj powiązane notatki, aby lepiej zrozumieć relacje między nimi.

Dane Canvas tworzone w Obsidian są zapisywane jako pliki `.canvas` przy użyciu otwartego formatu plików [JSON Canvas](https://jsoncanvas.org/).

## Tworzenie nowej tablicy

Aby rozpocząć korzystanie z Canvas, najpierw musisz utworzyć plik do przechowywania tablicy. Nową tablicę możesz utworzyć na kilka sposobów.

**Paleta poleceń:**

1. Otwórz [[Lista poleceń|paletę poleceń]].
2. Wybierz **Canvas: Stwórz nową tablicę**, aby utworzyć tablicę w tym samym folderze co aktywny plik.

**Eksplorator plików:**

- W [[Eksplorator plików|eksploratorze plików]] kliknij prawym przyciskiem myszy folder, w którym chcesz utworzyć tablicę.
- Wybierz **Nowa tablica**.

**Wstążka:**

- W pionowym menu wstążkowym wybierz **Stwórz nową tablicę** ![[lucide-layout-dashboard.svg#icon]], aby utworzyć tablicę w tym samym folderze co aktywny plik.

> [!note] Rozszerzenie pliku .canvas
> Obsidian przechowuje dane tablicy jako pliki `.canvas` przy użyciu otwartego formatu plików o nazwie [JSON Canvas](https://jsoncanvas.org/).

## Dodawanie kart

Możesz przeciągać pliki na tablicę z Obsidian lub z innych aplikacji. Na przykład pliki Markdown, obrazy, audio, pliki PDF, a nawet nierozpoznane typy plików.

### Dodawanie kart tekstowych

Możesz dodawać karty zawierające tylko tekst, które nie odwołują się do pliku. Możesz używać Markdown, linków i bloków kodu tak samo jak w notatce.

Aby dodać nową kartę tekstową do tablicy:

- Wybierz lub przeciągnij ikonę pustego pliku na dole tablicy.

Możesz również dodać karty tekstowe, klikając dwukrotnie na tablicę.

Aby przekonwertować kartę tekstową na plik:

1. Kliknij prawym przyciskiem myszy kartę tekstową, a następnie wybierz **Konwertuj do...**.
2. Wprowadź nazwę notatki, a następnie wybierz **Zapisz**.

> [!note] Uwaga
> Karty zawierające tylko tekst nie pojawiają się w [[Linki zwrotne|linkach zwrotnych]]. Aby się pojawiły, musisz je przekonwertować na plik.

### Dodawanie kart z notatek

Aby dodać notatkę ze skarbca do tablicy:

1. Wybierz lub przeciągnij ikonę dokumentu na dole tablicy.
2. Wybierz notatkę, którą chcesz dodać.

Możesz również dodać notatki z menu kontekstowego tablicy:

1. Kliknij prawym przyciskiem myszy tablicę, a następnie wybierz **Dodaj notatkę z sejfu**.
2. Wybierz notatkę, którą chcesz dodać.

Możesz też dodać je do tablicy, przeciągając plik z [[Eksplorator plików|eksploratora plików]].

### Dodawanie kart z multimediów

Aby dodać multimedia ze skarbca do tablicy:

1. Wybierz lub przeciągnij ikonę pliku obrazu na dole tablicy.
2. Wybierz plik multimedialny, który chcesz dodać.

Możesz również dodać multimedia z menu kontekstowego tablicy:

1. Kliknij prawym przyciskiem myszy tablicę, a następnie wybierz **Dodaj multimedia z sejfu**.
2. Wybierz plik multimedialny, który chcesz dodać.

Możesz też dodać je do tablicy, przeciągając plik z [[Eksplorator plików|eksploratora plików]].

### Dodawanie kart ze stron internetowych

Aby osadzić stronę internetową na tablicy:

1. Kliknij prawym przyciskiem myszy tablicę, a następnie wybierz **Dodaj stronę internetową**.
2. Wprowadź adres URL strony internetowej, a następnie wybierz **Zapisz**.

Możesz również zaznaczyć adres URL w przeglądarce, a następnie przeciągnąć go na tablicę, aby osadzić go w karcie.

Aby otworzyć stronę internetową w przeglądarce, naciśnij `Ctrl` (lub `Cmd` na macOS) i kliknij etykietę karty. Możesz też kliknąć prawym przyciskiem myszy kartę i wybrać **Otwórz w przeglądarce**.

### Dodawanie kart z folderów

Przeciągnij folder z eksploratora plików, aby dodać wszystkie pliki z tego folderu do tablicy.

### Edytowanie karty

Kliknij dwukrotnie kartę tekstową lub kartę notatki, aby rozpocząć jej edycję. Kliknij poza kartą, aby zakończyć edycję. Możesz również nacisnąć `Escape`, aby zakończyć edycję karty.

Możesz też edytować kartę, klikając ją prawym przyciskiem myszy i wybierając **Edytuj**.

### Usuwanie karty

Usuń zaznaczone karty, klikając prawym przyciskiem myszy dowolną z nich, a następnie wybierając **Usuń**. Możesz też nacisnąć `Backspace` (lub `Delete` na macOS).

Możesz również wybrać **Usuń** ![[lucide-trash-2.svg#icon]] w kontrolkach zaznaczenia nad wybranym elementem.

### Zamiana kart

Możesz zamienić kartę notatki lub multimediów na inną kartę tego samego typu.

Aby zamienić kartę notatki:

1. Kliknij prawym przyciskiem myszy kartę, którą chcesz zastąpić.
2. Wybierz **Zamień plik**.
3. Wybierz notatkę, na którą chcesz zamienić.

## Zaznaczanie kart

Zaznaczaj karty na tablicy, klikając je. Możesz zaznaczyć wiele kart, przeciągając zaznaczenie wokół nich.

Możesz również dodawać i usuwać karty z istniejącego zaznaczenia, naciskając `Shift` i klikając je.

Naciśnij `Ctrl+a` (lub `Cmd+a` na macOS), aby zaznaczyć wszystkie karty na tablicy.

Aby przewijać zawartość karty, najpierw musisz ją zaznaczyć.

### Rozmieszczanie kart

Przeciągnij zaznaczoną kartę, aby ją przenieść.

Naciśnij `Alt` (lub `Option` na macOS) i przeciągnij, aby zduplikować zaznaczenie.

Możesz nacisnąć `Shift` podczas przeciągania, aby przenosić tylko w jednym kierunku.

Naciśnij `Space` podczas przenoszenia zaznaczenia, aby wyłączyć przyciąganie.

Zaznaczenie karty przenosi ją na wierzch.

### Zmiana rozmiaru karty

Przeciągnij dowolną krawędź karty, aby zmienić jej rozmiar.

Możesz nacisnąć `Space` podczas zmiany rozmiaru, aby wyłączyć przyciąganie.

Aby zachować proporcje podczas zmiany rozmiaru, naciśnij `Shift` podczas zmiany rozmiaru.

## Łączenie kart

Rysuj linie między kartami, aby tworzyć relacje między nimi. Używaj kolorów i etykiet, aby opisać, jak są ze sobą powiązane.

### Łączenie dwóch kart

Aby połączyć dwie karty linią skierowaną:

1. Najedź kursorem na jedną z krawędzi karty, aż zobaczysz wypełnione kółko.
2. Przeciągnij kółko do krawędzi innej karty, aby je połączyć.

> [!tip] Wskazówka
> Jeśli przeciągniesz linię bez połączenia jej z inną kartą, możesz następnie dodać kartę, z którą chcesz ją połączyć.

### Rozłączanie dwóch kart

Aby usunąć połączenie między dwiema kartami:

1. Najedź kursorem na linię połączenia, aż pojawią się dwa małe kółka na linii.
2. Przeciągnij jedno z kółek od karty bez łączenia go z inną.

Możesz również rozłączyć dwie karty, klikając prawym przyciskiem myszy linię między nimi, a następnie wybierając **Usuń**. Lub zaznaczając linię i naciskając `Backspace` (lub `Delete` na macOS).

### Łączenie karty z inną kartą

Aby przenieść jeden z końców linii połączenia:

1. Najedź kursorem na linię połączenia, aż pojawią się dwa małe kółka na linii.
2. Przeciągnij kółko nad końcem, który chcesz ponownie połączyć, do innej karty.

### Nawigowanie po połączeniu

Jeśli dwie połączone karty są daleko od siebie, możesz przejść do źródła lub celu połączenia, klikając prawym przyciskiem myszy linię, a następnie wybierając **Przejdź do celu** lub **Przejdź do źródła**.

### Dodawanie etykiety do połączenia

Możesz dodać etykietę do linii, aby opisać relację między dwiema kartami.

Aby oznaczyć połączenie:

1. Kliknij dwukrotnie linię.
2. Wprowadź etykietę, a następnie naciśnij `Escape` lub kliknij w dowolnym miejscu na tablicy.

Możesz również oznaczyć połączenie, zaznaczając je, a następnie wybierając **Edytuj etykietę** z kontrolek zaznaczenia.

Aby edytować etykietę połączenia, kliknij dwukrotnie linię lub kliknij ją prawym przyciskiem myszy, a następnie wybierz **Edytuj etykietę**.

### Zmiana koloru karty lub połączenia

1. Zaznacz karty lub połączenia, które chcesz pokolorować.
2. W kontrolkach zaznaczenia wybierz **Ustaw kolor** ![[lucide-palette.svg#icon]].
3. Wybierz kolor.

## Grupowanie kart

### Grupowanie zaznaczonych kart

Aby utworzyć pustą grupę:

- Kliknij prawym przyciskiem myszy tablicę, a następnie wybierz **Stwórz grupę**.

Aby zgrupować powiązane karty:

1. Zaznacz karty.
2. Kliknij prawym przyciskiem myszy dowolną z zaznaczonych kart, a następnie wybierz **Stwórz grupę**.

**Zmiana nazwy grupy:** Kliknij dwukrotnie nazwę grupy, aby ją edytować, a następnie naciśnij `Enter`, aby zapisać.

## Nawigowanie po tablicy

W miarę dodawania kolejnych kart do tablicy warto wiedzieć, jak po niej nawigować, aby zobaczyć jej poszczególne części. Dowiedz się, jak przesuwać i powiększać, aby łatwo poruszać się po tablicy.

### Przesuwanie tablicy

Aby przesuwać tablicę w pionie i poziomie, co nazywane jest również _panoramowaniem_, możesz użyć dowolnej z poniższych metod:

- Naciśnij `Space` i przeciągnij tablicę.
- Przeciągnij tablicę za pomocą środkowego przycisku myszy.
- Przewijaj kółkiem myszy, aby przesuwać w pionie, i naciśnij `Shift` podczas przewijania, aby przesuwać w poziomie.

### Powiększanie tablicy

Aby powiększyć tablicę, naciśnij `Space` lub `Ctrl` (lub `Cmd` na macOS) i przewijaj kółkiem myszy. Możesz też wybrać **Powiększ** ![[lucide-plus.svg#icon]] i **Pomniejsz** ![[lucide-minus.svg#icon]] z kontrolek powiększenia w prawym górnym rogu.

#### Dopasuj do podglądu

Aby powiększyć tablicę tak, aby każdy element był widoczny, wybierz **Dopasuj do podglądu** ![[lucide-maximize.svg#icon]]. Możesz też użyć skrótu klawiszowego `Shift+1`.

#### Dopasuj do zaznaczenia

Aby powiększyć tablicę tak, aby wszystkie zaznaczone elementy były widoczne, kliknij prawym przyciskiem myszy zaznaczoną kartę, a następnie wybierz **Dopasuj do zaznaczenia**. Możesz też użyć skrótu klawiszowego `Shift+2`.

#### Zresetuj przybliżenie

Aby przywrócić domyślny stopień przybliżenia, wybierz **Zresetuj przybliżenie** w kontrolkach powiększenia w prawym górnym rogu.

## Zaawansowane wskazówki

Przygotowaliśmy kilka krótkich filmów demonstrujących zaawansowane zastosowania Canvas.

Możesz [sprawdzić wszystkie 72 wskazówki tutaj](https://obsidian.md/canvas#protips). Zwróć uwagę, że filmy ze wskazówkami są widoczne tylko na komputerze.
