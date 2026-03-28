---
permalink: plugins/graph
publish: true
mobile: true
description: 'Widok grafu to podstawowa wtyczka, która pozwala wizualizować powiązania między notatkami w Twoim sejfie.'
---
Widok grafu to [[Wbudowane wtyczki|wbudowana wtyczka]], która pozwala wizualizować relacje między notatkami w twoim skarbcu.

Aby otworzyć widok grafu, kliknij **Otwórz podgląd grafu** we [[Menu wstążkowe|wstążce]].

- Koła reprezentują notatki, czyli _węzły_.
- Linie reprezentują [[Łącza wewnętrzne]] między dwoma węzłami.

Im więcej węzłów odwołuje się do danego węzła, tym większy on jest.

Aby interagować z notatkami na grafie:

- Najedź kursorem na każde koło, aby wyróżnić połączenia tej notatki.
- Kliknij notatkę na grafie, aby ją otworzyć.
- Kliknij prawym przyciskiem myszy notatkę, aby otworzyć menu kontekstowe z dostępnymi akcjami dla tej notatki.

Aby nawigować po grafie:

- Powiększaj i pomniejszaj za pomocą kółka przewijania myszy lub klawiszy `+` i `-`.
- Przesuwaj graf, przeciągając go kursorem myszy lub za pomocą klawiszy strzałek.

Możesz przytrzymać Shift podczas korzystania z klawiatury, aby przyspieszyć ruchy.

## Ustawienia

Aby otworzyć ustawienia grafu, kliknij ikonę koła zębatego w prawym górnym rogu widoku grafu.

Kliknij **Przywróć ustawienia domyślne** w prawym górnym rogu okna ustawień, aby zresetować wszelkie wprowadzone zmiany.

### Filtry

Ta sekcja kontroluje, które węzły są wyświetlane na grafie.

- **Szukaj plików** pozwala filtrować notatki na podstawie wyszukiwanego terminu. Aby dowiedzieć się, jak pisać bardziej zaawansowane zapytania wyszukiwania, zapoznaj się z [[Szukaj]].
- **Tagi** przełącza wyświetlanie tagów na grafie.
- **Załączniki** przełącza wyświetlanie załączników na grafie.
- **Tylko istniejące pliki** przełącza wyświetlanie tylko notatek istniejących w twoim skarbcu. Ponieważ notatka nie musi istnieć, aby można było do niej linkować, opcja ta pomaga ograniczyć graf do notatek, które faktycznie znajdują się w twoim skarbcu.
- **Niepowiązane** przełącza wyświetlanie notatek bez żadnych linków.

> [!info] Pominięte pliki
> Pliki pasujące do wzorców [[Ustawienia#Pominięte pliki|Pominięte pliki]] nie będą wyświetlane w widoku grafu.

### Grupy

Twórz grupy notatek, aby odróżniać je od siebie za pomocą kolorów.

Aby stworzyć nową grupę:

1. Kliknij **Nowa grupa**.
2. W polu wyszukiwania wpisz termin wyszukiwania dla notatek, które chcesz dodać do grupy.
3. Kliknij kolorowe koło, aby nadać grupie kolor.

Aby dowiedzieć się, jak pisać bardziej zaawansowane zapytania wyszukiwania, zapoznaj się z [[Szukaj]].

### Wyświetlanie

Ta sekcja kontroluje sposób wizualizacji węzłów i połączeń na grafie.

- **Strzałki** przełącza wyświetlanie kierunku każdego połączenia.
- **Próg zanikania tekstu** kontroluje przezroczystość tekstu nazwy każdej notatki.
- **Rozmiar punktu** kontroluje rozmiar koła reprezentującego każdą notatkę.
- **Grubość połączenia** kontroluje szerokość linii każdego połączenia.
- **Wyświetl animację** uruchamia [[#Uruchamianie animacji poklatkowej|animację poklatkową]].

### Siły

Ta sekcja kontroluje siły działające na każdy węzeł na grafie.

- **Siła centralna** kontroluje, jak zwarty jest graf. Wyższa wartość tworzy bardziej okrągły graf.
- **Siła odpychania** kontroluje, jak mocno dany węzeł odpycha inne węzły od siebie.
- **Siła połączenia** kontroluje siłę przyciągania każdego połączenia. Gdyby połączenie było gumką recepturką, siła połączenia kontroluje, jak mocno lub luźno jest naciągnięta.
- **Długość połączenia** kontroluje długość linii między poszczególnymi notatkami.

## Uruchamianie animacji poklatkowej

Notatki i załączniki pojawiają się w kolejności chronologicznej na podstawie czasu ich utworzenia.

![[obsidian-graph-view.png#interface]]

## Lokalny graf

Aby otworzyć lokalny widok grafu, użyj polecenia **Otwórz lokalny podgląd grafu**. Podczas gdy widok grafu pokazuje wszystkie notatki w twoim skarbcu, lokalny widok grafu pokazuje notatki połączone z aktywną notatką.

Lokalny widok grafu może korzystać ze wszystkich [[#Ustawienia|ustawień]] dostępnych dla globalnego widoku grafu. Dodatkowo możesz zmienić głębokość lokalnego grafu. Każdy poziom głębokości pokaże notatki połączone z notatkami ujawnionymi na poprzednim poziomie głębokości. Aby kontrolować głębokość lokalnego grafu, użyj suwaka na górze panelu ustawień filtrów lokalnego grafu.
