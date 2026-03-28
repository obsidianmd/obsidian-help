---
permalink: tabs
publish: true
mobile: true
description: 'Dowiedz się, jak otwierać, organizować i zarządzać kartami w Obsidian, w tym przypinanie, układanie w stos i widoki połączone.'
---
Karty w Obsidian działają podobnie jak karty w innych aplikacjach, na przykład przeglądarkach internetowych.

W Obsidian możesz otwierać dowolną liczbę kart. Możesz również układać karty, tworząc niestandardowe układy, które są zachowywane do następnego otwarcia aplikacji.

> [!note] Karty na urządzeniach mobilnych
> Na urządzeniach mobilnych możesz zarządzać otwartymi kartami za pomocą licznika kart na [[Aplikacja mobilna#Pasek nawigacji|Pasku nawigacji]].

## Otwieranie nowej karty

Na górze okna aplikacji, obok ostatniej karty po prawej stronie, wybierz **Nowa karta** ![[lucide-plus.svg#icon]]. Możesz też użyć skrótu klawiszowego:

- **Windows i Linux:** `Ctrl+t`
- **macOS:** `Cmd+t`

## Otwieranie linku

Wybierz link w Obsidian, aby otworzyć go w aktywnej karcie.

Aby otworzyć link w nowej karcie, naciśnij `Ctrl` (lub `Cmd` na macOS) i wybierz link.

Poniżej znajdziesz wszystkie klawisze modyfikujące, których możesz użyć do otwierania linków na różne sposoby:

|Akcja|MacOS|Windows/Linux|
|---|---|---|
|**Nawiguj**|_Brak_|_Brak_|
|**Nowa karta**|`⌘` (+ `Shift` w trybie źródłowym)|`Ctrl` (+ `Shift` w trybie źródłowym)|
|**Nowa grupa kart**|`⌘` `⌥`| `Ctrl` `Alt`|
|**Nowe okno**|`⌘` `⌥` `Shift`|`Ctrl` `Alt` `Shift`|

## Organizowanie kart i okien

Każda karta należy do _grupy kart_. Możesz przeciągać i upuszczać karty, aby zmieniać ich kolejność w grupie kart, przenosić je do innej grupy kart lub tworzyć nową grupę kart. Na komputerze możesz przeciągnąć karty poza okno, aby otworzyć je w osobnym [[Okna wyskakujące|oknie wyskakującym]].

Karty na paskach bocznych wyświetlają tylko ikonę. Najedź na ikonę, aby zobaczyć podpowiedź z tytułem karty.

### Układanie kart

Aby zmienić kolejność kart, przeciągnij kartę wzdłuż kart w grupie kart.

Podczas przeciągania karty podświetlane są _strefy upuszczania_ — obszary, do których możesz przenieść kartę. Strefa upuszczania określa, gdzie zostanie wstawiona karta. Niektóre karty mogą znajdować się tylko na jednym z pasków bocznych.

### Dzielenie grupy kart

Kliknij kartę prawym przyciskiem myszy i wybierz **Podziel w prawo** lub **Podziel w dół**, aby utworzyć nową grupę kart z tą kartą.

Możesz również podzielić grupę kart, przeciągając kartę na dół innej karty.

### Zmiana rozmiaru grupy kart

Aby zmienić rozmiar grupy kart, najedź kursorem na krawędź grupy kart. Krawędź podświetla się, gdy można ją przeciągnąć w celu zmiany rozmiaru.

W podobny sposób możesz zmieniać rozmiar pasków bocznych, aby zapewnić więcej miejsca dla grup kart na środku.

### Przenoszenie karty do nowego okna

**Przeciągnij i upuść:**

- Zaznacz i przeciągnij kartę poza okno aplikacji, aby otworzyć ją w nowym oknie.

**Paleta poleceń:**

- Otwórz paletę poleceń i wybierz **Przenieś aktywną kartę do nowego okna**.

### Przenoszenie karty do innego okna

Aby przenieść kartę do innego istniejącego okna, przeciągnij kartę do okna, do którego chcesz ją przenieść.

### Przypinanie karty

Aby przypiąć kartę w głównym edytorze, kliknij kartę prawym przyciskiem myszy i wybierz **Przypnij**. Linki w przypiętej karcie zawsze otwierają się w osobnej karcie.

Aby odpiąć przypiętą kartę w głównym edytorze, kliknij kartę prawym przyciskiem myszy i wybierz **Odepnij**.

Aby przypiąć lub odpiąć kartę na pasku bocznym, zobacz [[Pasek boczny#Przypinanie kart|przypinanie kart na pasku bocznym]].

## Przełączanie na inną kartę

Wybierz kartę, aby się na nią przełączyć. Możesz też użyć skrótu klawiszowego:

| Przełącz na                 | MacOS            | Windows/Linux        |
|---------------------------|------------------|----------------------|
| **Następna karta**              | `⌃`+`⇥`         | `Ctrl`+`Tab`         |
| **Poprzednia karta**          | `⌃`+`⇧`+`⇥`    | `Ctrl`+`Shift`+`Tab` |
| **Pierwsza karta po lewej** | `⌘`+`1`          | `Ctrl`+`1`           |
| **Karty od 2 do 8**        | `⌘`+`2`..`8`     | `Ctrl`+`2`..`8`      |
| **Ostatnia karta po prawej** | `⌘`+`9`          | `Ctrl`+`9`           |
| **Ostatnio zamknięta karta**   | `⌘`+`⇧`+`t`     | `Ctrl`+`Shift`+`t`   |

## Grupowanie kart

Możesz grupować karty, aby nakładać je na inne karty w tej samej grupie kart.

Aby zgrupować notatki, wybierz strzałkę w dół w prawym górnym rogu grupy kart, a następnie wybierz **Grupuj karty**.

![tab-stacks](https://user-images.githubusercontent.com/693981/188205363-0f24b2a5-3706-4a8c-b38b-7a66baa68ce6.gif)

Grupowanie kart jest inspirowane [przesuwanymi notatkami Andy'ego Matuschaka](https://notes.andymatuschak.org/).

## Widoki połączone

_Widoki połączone_ to karty, które odwołują się do innej karty. Gdy zmienia się zawartość karty, do której się odwołują, widok połączony również się zmienia.

Dla kart z notatkami możesz używać następujących wtyczek jako widoków połączonych:

- [[Podgląd grafu|Widok grafu]] (lokalny)
- [[Linki zwrotne]]
- [[Konspekt]]

Aby otworzyć widok połączony dla karty z notatką:

1. Wybierz **Więcej opcji** ![[lucide-more-horizontal.svg#icon]] w prawym górnym rogu notatki.
2. W sekcji **Otwórz widok połączony** wybierz widok połączony, który chcesz otworzyć.

## Zapisywanie układów

Możesz zapisywać i przywracać układy okien za pomocą wtyczki [[Obszary robocze]].
