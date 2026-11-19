---
description: 'Canvas to wbudowana wtyczka do wizualnego tworzenia notatek. Rozmieszczaj i łącz notatki, obrazy oraz inne pliki w przestrzeni 2D.'
permalink: plugins/canvas
mobile: true
---
Canvas to [[Wbudowane wtyczki|wbudowana wtyczka]] do wizualnego tworzenia notatek. Zapewnia nieskończoną przestrzeń do rozmieszczania notatek i łączenia ich z innymi notatkami, załącznikami i stronami internetowymi.

Wizualne tworzenie notatek pomaga w zrozumieniu notatek poprzez organizowanie ich w przestrzeni 2D. Łącz notatki liniami i grupuj powiązane notatki, aby lepiej zrozumieć relacje między nimi.

Dane Canvas tworzone w Obsidian są zapisywane jako pliki `.canvas` przy użyciu otwartego formatu plików [JSON Canvas](https://jsoncanvas.org/).

## Tworzenie nowej tablicy

Aby rozpocząć korzystanie z Canvas, najpierw musisz utworzyć plik do przechowywania tablicy. Nową tablicę możesz utworzyć na kilka sposobów.

**Paleta poleceń:**

1. Otwórz [[Lista poleceń|paletę poleceń]].
2. Wybierz **Canvas: Stwórz nową tablicę**, aby utworzyć tablicę w tym samym folderze co aktywny plik.

**Przeglądarka plików:**

- W [[Przeglądarka plików|przeglądarce plików]] kliknij prawym przyciskiem myszy folder, w którym chcesz utworzyć tablicę.
- Wybierz **Nowa tablica**.

**Wstążka:**

- W pionowej wstążce wybierz **Stwórz nową tablicę** ![[lucide-layout-dashboard.svg#icon]], aby utworzyć tablicę w tym samym folderze co aktywny plik.

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

Aby dodać notatkę ze sejfu do tablicy:

1. Wybierz lub przeciągnij ikonę dokumentu na dole tablicy.
2. Wybierz notatkę, którą chcesz dodać.

Możesz również dodać notatki z menu kontekstowego tablicy:

1. Kliknij prawym przyciskiem myszy tablicę, a następnie wybierz **Dodaj notatkę z sejfu**.
2. Wybierz notatkę, którą chcesz dodać.

Możesz też dodać je do tablicy, przeciągając plik z [[Przeglądarka plików|przeglądarki plików]].

Aby wyświetlić tylko część notatki na karcie, kliknij prawym przyciskiem myszy kartę i wybierz **Dopasuj do nagłówka...** lub **Dopasuj do bloku...**. Następnie wybierz nagłówek lub blok.

### Dodawanie kart z multimediów

Aby dodać multimedia ze sejfu do tablicy:

1. Wybierz lub przeciągnij ikonę pliku obrazu na dole tablicy.
2. Wybierz plik multimedialny, który chcesz dodać.

Możesz również dodać multimedia z menu kontekstowego tablicy:

1. Kliknij prawym przyciskiem myszy tablicę, a następnie wybierz **Dodaj multimedia z sejfu**.
2. Wybierz plik multimedialny, który chcesz dodać.

Możesz też dodać je do tablicy, przeciągając plik z [[Przeglądarka plików|przeglądarki plików]].

### Dodawanie kart ze stron internetowych

Aby osadzić stronę internetową na tablicy:

1. Kliknij prawym przyciskiem myszy tablicę, a następnie wybierz **Dodaj stronę internetową**.
2. Wprowadź adres URL strony internetowej, a następnie wybierz **Zapisz**.

Możesz również zaznaczyć adres URL w przeglądarce, a następnie przeciągnąć go na tablicę, aby osadzić go w karcie.

Aby otworzyć stronę internetową w przeglądarce, naciśnij `Ctrl` (lub `Cmd` na macOS) i kliknij etykietę karty. Możesz też kliknąć prawym przyciskiem myszy kartę i wybrać **Otwórz w przeglądarce**.

Kliknij prawym przyciskiem myszy kartę strony internetowej, aby wyświetlić więcej opcji.

- **Skopiuj URL** kopiuje adres strony internetowej.
- **Zmień adres URL...** zmienia adres wyświetlany na karcie.
- **Przeładuj stronę** ponownie wczytuje stronę internetową.

### Dodawanie kart z baz danych

Aby wyświetlić [[Wprowadzenie do baz danych|bazę danych]] na tablicy, przeciągnij plik bazy danych z przeglądarki plików na tablicę. Karta wyświetli bazę danych.

Karta bazy danych pokazuje domyślny podgląd bazy. Aby wyświetlić inny podgląd:

1. Kliknij prawym przyciskiem myszy kartę, a następnie wybierz **Przypnij...**.
2. Wybierz podgląd, który chcesz wyświetlić.

Aby wrócić do domyślnego podglądu, ponownie wybierz **Przypnij...**, a następnie wybierz **Pokaż domyślny podgląd**.

### Dodawanie kart z folderów

Przeciągnij folder z przeglądarki plików, aby dodać wszystkie pliki z tego folderu do tablicy.

### Edytowanie karty

Kliknij dwukrotnie kartę tekstową lub kartę notatki, aby rozpocząć jej edycję. Kliknij poza kartą, aby zakończyć edycję. Możesz również nacisnąć `Escape`, aby zakończyć edycję karty.

Możesz też edytować kartę, klikając ją prawym przyciskiem myszy i wybierając **Edytuj**. Możesz również zaznaczyć kartę, a następnie wybrać **Edytuj** ![[lucide-square-pen.svg#icon]] w kontrolkach zaznaczenia.

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

### Wyrównywanie i rozmieszczanie kart

Aby wyrównać kilka kart, zaznacz dwie lub więcej kart. W kontrolkach zaznaczenia wybierz **Wyrównaj**, a następnie wybierz opcję.

- **Wyrównaj do lewej**, **Wyrównaj do środka** i **Wyrównaj do prawej** ustawiają karty wzdłuż linii pionowej.
- **Wyrównaj do góry**, **Wyrównaj do środka** i **Wyrównaj do dołu** ustawiają karty wzdłuż linii poziomej.
- **Rozmieść w rzędzie**, **Rozmieść w kolumnie** i **Rozmieść w siatce** przenoszą karty do wybranego układu.
- **Wyrównaj odstępy poziomo** i **Wyrównaj ostępy pionowo** rozmieszczają karty w równych odstępach.
- **Wyjustuj w poziomie** i **Wyjustuj w pionie** zmieniają rozmiar każdej karty, aby dopasować ją do pełnej szerokości lub wysokości zaznaczenia.

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

Jeśli dwie połączone karty są daleko od siebie, możesz przejść do karty na drugim końcu połączenia. Kliknij prawym przyciskiem myszy linię blisko jednego z końców, a następnie wybierz **Śledź połączenie**. Tablica przesunie się do karty na przeciwległym końcu.

### Dodawanie etykiety do połączenia

Możesz dodać etykietę do linii, aby opisać relację między dwiema kartami.

Aby oznaczyć połączenie:

1. Kliknij dwukrotnie linię.
2. Wprowadź etykietę, a następnie naciśnij `Escape` lub kliknij w dowolnym miejscu na tablicy.

Możesz również oznaczyć połączenie, zaznaczając je, a następnie wybierając **Edytuj etykietę** z kontrolek zaznaczenia.

Aby edytować etykietę połączenia, kliknij dwukrotnie linię lub kliknij ją prawym przyciskiem myszy, a następnie wybierz **Edytuj etykietę**.

Aby usunąć etykietę, zaznacz połączenie, a następnie wybierz **Usuń etykietę** w kontrolkach zaznaczenia.

### Zmiana kierunku połączenia

Domyślnie połączenie ma strzałkę na końcu wskazującą na drugą kartę. Aby to zmienić:

1. Zaznacz połączenie.
2. W kontrolkach zaznaczenia wybierz **Kierunek linii**.
3. Wybierz **Brak kierunku**, **Jednokierunkowy** lub **Dwukierunkowy**.

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

### Dodawanie tła do grupy

Możesz wyświetlić obraz za kartami w grupie.

1. Zaznacz grupę.
2. W kontrolkach zaznaczenia wybierz **Ustaw tło**.
3. Wybierz obraz z sejfu.

Aby zmienić tło, zaznacz grupę, a następnie wybierz **Edytuj tło**.

- **Zamień tło** wybiera inny obraz.
- **Usuń tło** usuwa obraz.
- **Okładka** sprawia, że obraz wypełnia grupę.
- **Zachowaj proporcje** zachowuje proporcje obrazu.
- **Powtórz** kafelkuje obraz w obrębie grupy.

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

### Przejdź do grupy

Aby szybko przejść do grupy na dużej tablicy, otwórz paletę poleceń i wybierz **Canvas: Przejdź do grupy**. Pojawi się lista grup na tablicy. Wybierz grupę, do której chcesz przejść, a tablica przesunie się, aby ją wyśrodkować.

## Ustawienia tablicy

Wybierz **Ustawienia tablic** ![[lucide-settings.svg#icon]] nad kontrolkami tablicy, aby zmienić zachowanie tablicy.

- **Przyciągaj do siatki** przyciąga karty do siatki pomocniczej podczas przesuwania i zmiany rozmiaru.
- **Przyciągaj do elementów** przyciąga karty do pobliskich kart podczas przesuwania i zmiany rozmiaru.
- **Tylko do odczytu** zapobiega zmianom na tablicy.

## Eksportowanie tablicy jako obrazu

Możesz wyeksportować tablicę jako obraz PNG na komputerze. Eksportowanie obrazu nie jest dostępne w aplikacji Obsidian na urządzeniach mobilnych.

1. Otwórz tablicę, którą chcesz wyeksportować.
2. Otwórz paletę poleceń i wybierz **Canvas: Eksportuj jako obraz**.
3. Wybierz ustawienia.
    - **Widoczny obszar** określa, co wyeksportować. Wybierz **Cała tablica** dla całej tablicy lub **Tylko widoczny obszar** dla części, którą aktualnie widzisz.
    - **Przybliżenie** określa jakość obrazu. Większe przybliżenie tworzy większy, ostrzejszy obraz. Okno dialogowe pokazuje szacowany rozmiar obrazu.
    - **Pokaż logo** dodaje logo Obsidian w lewym dolnym rogu. Ta opcja jest domyślnie włączona.
    - **Tryb prywatny** ukrywa cały tekst na tablicy. Ta opcja jest domyślnie wyłączona.
4. Wybierz **Zapisz**.
5. Wybierz miejsce zapisu pliku. Nazwa pliku domyślnie odpowiada nazwie tablicy z rozszerzeniem `.png`.

Nie można wyeksportować pustej tablicy.

## Cofanie i ponawianie

Aby cofnąć ostatnią zmianę, wybierz **Cofnij** w kontrolkach tablicy po prawej stronie. Możesz też nacisnąć `Ctrl+Z` (Windows i Linux) lub `Command+Z` (macOS).

Aby ponowić zmianę, wybierz **Ponów**. Możesz też nacisnąć `Ctrl+Y` lub `Ctrl+Shift+Z` (Windows i Linux) lub `Command+Y` lub `Command+Shift+Z` (macOS).

## Pomoc dotycząca tablic

Na komputerze wybierz **Pomoc dotycząca tablic** ![[lucide-help-circle.svg#icon]] pod kontrolkami tablicy, aby wyświetlić listę skrótów do przesuwania, powiększania, zaznaczania i przenoszenia kart.

## Osadzanie Canvas

Możesz osadzić Canvas w notatce, używając standardowej składni osadzania. Więcej informacji znajdziesz w sekcji [[Osadzanie plików#Osadzanie Canvas w notatce|Osadzanie Canvas w notatce]].

## Korzystanie z Canvas na urządzeniach mobilnych

Po otwarciu tablicy na telefonie lub tablecie Obsidian wyświetla trzy wskazówki.

- **Przeciągnij, aby przesunąć**
- **Uszczypnij, aby przybliżyć**
- **Kliknij i przytrzymaj, aby dodać / przesunąć / zaznaczyć**

### Otwieranie menu tablicy

Kliknij i przytrzymaj pusty obszar tablicy. Menu zawiera następujące elementy.

- **Dodaj kartę** dodaje kartę tekstową.
- **Dodaj notatkę z sejfu** dodaje notatkę z sejfu.
- **Dodaj multimedia z sejfu** dodaje multimedia z sejfu.
- **Dodaj stronę internetową** osadza stronę internetową.
- **Stwórz grupę** tworzy pustą grupę.
- **Przyciągaj do siatki**, **Przyciągaj do elementów** i **Tylko do odczytu** to te same opcje, co w **Ustawieniach tablic**.

### Dodawanie kart

Możesz dodawać karty z menu tablicy. Możesz również wybrać ikonę na dole tablicy.

- Ikona pustego pliku dodaje kartę tekstową.
- Ikona dokumentu dodaje notatkę z sejfu.
- Ikona obrazu dodaje multimedia z sejfu.

### Praca z zaznaczoną kartą

Stuknij kartę, aby ją zaznaczyć. Nad kartą pojawi się pasek narzędzi.

- **Usuń** ![[lucide-trash-2.svg#icon]] usuwa kartę.
- **Ustaw kolor** ![[lucide-palette.svg#icon]] zmienia kolor karty.
- **Dopasuj do zaznaczenia** przybliża tablicę do karty.
- **Edytuj** ![[lucide-square-pen.svg#icon]] edytuje kartę.

### Przenoszenie karty

1. Stuknij kartę, aby ją zaznaczyć.
2. Kliknij i przytrzymaj zaznaczoną kartę, a następnie przeciągnij ją na nową pozycję.

### Zmiana rozmiaru karty

1. Stuknij kartę, aby ją zaznaczyć.
2. Przeciągnij krawędzie karty, aby ją powiększyć lub zmniejszyć.

### Otwieranie menu karty

Kliknij i przytrzymaj kartę. Menu zawiera następujące elementy.

- **Dopasuj do zaznaczenia** przybliża tablicę do karty.
- **Edytuj** edytuje kartę.
- **Konwertuj do pliku...** konwertuje kartę tekstową na notatkę.
- **Duplikuj** tworzy kopię karty.
- **Usuń** usuwa kartę.

### Edytowanie karty

Aby edytować kartę tekstową lub kartę notatki, użyj jednej z metod.

- Stuknij kartę, aby ją zaznaczyć, a następnie stuknij ją dwukrotnie. Otworzy się klawiatura.
- Stuknij kartę, aby ją zaznaczyć, a następnie wybierz **Edytuj** ![[lucide-square-pen.svg#icon]] na pasku narzędzi nad kartą.

### Etykietowanie połączenia

1. Stuknij linię, aby ją zaznaczyć.
2. Na pasku narzędzi wybierz **Edytuj etykietę** ![[lucide-square-pen.svg#icon]]. Otworzy się klawiatura.
3. Wprowadź etykietę.

Aby usunąć etykietę, stuknij linię, a następnie wybierz **Usuń etykietę** na pasku narzędzi.

### Zmiana kierunku połączenia

1. Stuknij linię, aby ją zaznaczyć.
2. Na pasku narzędzi wybierz **Kierunek linii**.
3. Wybierz **Brak kierunku**, **Jednokierunkowy** lub **Dwukierunkowy**.

### Otwieranie menu linii

Kliknij i przytrzymaj linię łączącą dwie karty. Menu zawiera następujące elementy.

- **Edytuj etykietę** dodaje lub zmienia etykietę linii.
- **Śledź połączenie** przenosi tablicę do karty na przeciwległym końcu linii.
- **Usuń** usuwa połączenie.

### Łączenie kart

1. Stuknij kartę, aby ją zaznaczyć.
2. Przeciągnij jedno z kółek na jej krawędziach do innej karty.

Jeśli przeciągniesz linię i puścisz ją na pustym obszarze, otworzy się menu z opcjami **Dodaj kartę** i **Dodaj notatkę z sejfu**. Wybierz jedną z nich, aby dodać kartę na końcu linii.

### Rozłączanie kart

Aby usunąć połączenie, użyj jednej z metod.

- Stuknij linię, a następnie wybierz **Usuń** ![[lucide-trash-2.svg#icon]].
- Przeciągnij koniec linii ze strzałką z powrotem do karty, z której wychodzi. Linia zniknie.

### Grupowanie kart

Aby stworzyć grupę:

1. Kliknij i przytrzymaj pusty obszar tablicy.
2. Wybierz **Stwórz grupę**.
3. Przeciągnij krawędzie grupy, aby zmienić jej rozmiar.

Aby dodać karty do grupy, przeciągnij je w obszar grupy. Gdy przesuniesz grupę, karty w niej również się przesuną.

Aby zmienić nazwę grupy, stuknij dwukrotnie jej nazwę. Otworzy się klawiatura. Wprowadź nową nazwę.

### Kontrolki tablicy

Kontrolki po prawej stronie tablicy zmieniają podgląd i ustawienia.

- **Powiększ** i **Pomniejsz** zmieniają poziom przybliżenia.
- **Zresetuj przybliżenie** przywraca domyślny poziom przybliżenia.
- **Dopasuj do podglądu** wyświetla każdą kartę na tablicy.
- **Cofnij** i **Ponów** cofają lub ponawiają ostatnią zmianę.
- **Ustawienia tablic** zawiera opcje **Przyciągaj do siatki**, **Przyciągaj do elementów** i **Tylko do odczytu**.

## Zaawansowane wskazówki

Przygotowaliśmy kilka krótkich filmów demonstrujących zaawansowane zastosowania Canvas.

Możesz [sprawdzić wszystkie 72 wskazówki tutaj](https://obsidian.md/canvas#protips). Zwróć uwagę, że filmy ze wskazówkami są widoczne tylko na komputerze.
