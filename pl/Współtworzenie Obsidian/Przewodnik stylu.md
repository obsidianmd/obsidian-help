---
permalink: style-guide
publish: true
mobile: true
description: Ta strona wyjaśnia przewodnik stylistyczny dotyczący pisania naszej dokumentacji wsparcia.
---
Dokumentacja Obsidian jest zgodna z wytycznymi stylu wymienionymi na tej stronie. Wytyczne te opierają się na najlepszych praktykach branżowych, w szczególności na [Google developer documentation style guide](https://developers.google.com/style) i [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/). W przypadkach szczególnych nieuwzględnionych poniżej, należy zapoznać się z tymi zewnętrznymi przewodnikami jako odniesienia pomocnicze.

> [!tip]- Pomóż w rozwoju
> Większość dokumentacji powstała, zanim istniał niniejszy przewodnik stylu.
> 
> Jeśli znajdziesz jakiekolwiek naruszenia tego przewodnika stylu, [utwórz zgłoszenie](https://github.com/obsidianmd/obsidian-docs/issues/new) i prześlij pull request do [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminologia i gramatyka

### Styl językowy

W przypadku dokumentacji w języku angielskim zaleca się stosowanie [Global English](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html), aby lepiej obsłużyć naszych odbiorców na całym świecie i wspomóc [[#Tłumaczenia]]. Oznacza to:

- Unikanie idiomów i wyrażeń specyficznych kulturowo
- Stosowanie strony czynnej i bezpośredniej konstrukcji zdań
- Preferowanie prostych, powszechnych słów zamiast złożonej terminologii
- Wyrażanie się w sposób wyraźny, a nie domyślny
- W przypadku konwencji pisowni używaj amerykańskiego angielskiego (np. 'organize' zamiast 'organise').

### Terminy

- Preferuj „skrót klawiszowy" zamiast „skrót". Używaj Skrót klawiszowy, gdy odnosisz się do konkretnej funkcji.
- Preferuj „aplikacja Obsidian" na urządzeniach mobilnych oraz „aplikacja Obsidian" na komputerach.
- Preferuj „synchronizacja" i „synchronizowanie" zamiast innych form.
- Preferuj „wyszukiwane wyrażenie" zamiast „zapytanie wyszukiwania".
- Preferuj „nagłówek" zamiast „header" w odniesieniu do tekstu wprowadzającego sekcję.
- Preferuj „maksimum" zamiast „maks." i „minimum" zamiast „min.".

### Nazwy produktów

Nazwy produktów Obsidian zaczynają się od „Obsidian", na przykład „Obsidian Publish" i „Obsidian Sync".

Jeśli akapit staje się nadmiernie powtarzalny, w kolejnych odniesieniach można użyć formy skróconej.

Na przykład:

_Aby umożliwić konfigurację specyficzną dla urządzenia, Obsidian Sync nie synchronizuje własnych ustawień. Musisz skonfigurować Sync dla każdego ze swoich urządzeń._

### Interfejs użytkownika i interakcje

- Używaj **pogrubienia**, aby wskazać tekst przycisku.
- Preferuj „wybierz" zamiast „dotknij" lub „kliknij".
	- W przypadku instrukcji dotyczących urządzeń mobilnych, „dotknij" jest akceptowalne przy opisywaniu interakcji dotykowych, ponieważ „kliknij" nie ma zastosowania.
- Preferuj „pasek boczny" zamiast „panel boczny".
- Preferuj „wykonaj" zamiast „wywołaj" lub „uruchom" w odniesieniu do poleceń lub czynności.

Gdy odwołujesz się do wielu interakcji z interfejsem użytkownika w sekwencji, użyj symbolu → (U+2192). Na przykład „**[[Ustawienia]] → Wtyczki społeczności**".

### Notatki, pliki i foldery

- Używaj „notatka" w odniesieniu do pliku Markdown w skarbcu.
- Używaj „plik" w odniesieniu do innych rozszerzeń niż Markdown.
- Preferuj „nazwa notatki" zamiast „tytuł notatki".
- Preferuj „aktywna notatka" zamiast „bieżąca notatka".
- Preferuj „folder" zamiast „katalog".
- Preferuj „typ pliku" zamiast „format pliku", chyba że konkretnie odnosisz się do formatu danych zawartości pliku.

Przy przechodzeniu między notatkami, użyj „otwórz" jeśli cel jest ukryty, i „przełącz" jeśli zarówno źródłowa, jak i docelowa notatka są otwarte w oddzielnych podziałach.

### Dokumentacja referencyjna ustawień

Gdy to możliwe, wszelkie ustawienia powinny być dokumentowane w samym Obsidian za pomocą opisowego tekstu. Unikaj dokumentowania konkretnego ustawienia w Pomocy Obsidian, chyba że:

- Wymaga bardziej dogłębnej wiedzy o tym, jak i kiedy go używać.
- Jest powszechnie nieprawidłowo używane lub pytane o nie.
- _Drastycznie_ zmienia doświadczenie użytkownika.

Rozważ użycie bloku wyróżnienia typu tip, jeśli chcesz zwrócić uwagę na konkretne ustawienie.

### Terminy kierunkowe

Stosuj łącznik w terminach kierunkowych, gdy używasz ich jako przymiotników. Unikaj łącznika, gdy kierunek jest używany jako rzeczownik.

**Zalecane:**

- Wybierz **[[Ustawienia]]** w lewym dolnym rogu.
- Wybierz **[[Ustawienia]]** w lewym dolnym.

**Niezalecane:**

- Wybierz **[[Ustawienia]]** w dolnym lewym rogu.
- Wybierz **[[Ustawienia]]** w lewym-dolnym.

Preferuj „lewy górny" i „prawy górny" zamiast alternatywnych określeń.

Nie wskazuj kierunku, gdy odwołujesz się do ustawień. Lokalizacja elementu ustawień zależy od urządzenia.

**Zalecane:**

- Obok **Wybierz zdalny sejf**, wybierz **Wybierz**.

**Niezalecane:**

- Po prawej stronie **Wybierz zdalny sejf**, wybierz **Wybierz**.

Przy opisywaniu kierunku pionowego w elementach interfejsu, użyj „powyżej" i „poniżej" dla relacji przestrzennych. Unikaj „w górę" i „w dół", ponieważ są niejednoznaczne w różnych kontekstach.

**Zalecane:**

- Pole wyszukiwania pojawia się powyżej listy plików.
- Dodatkowe opcje są dostępne poniżej.

**Niezalecane:**

- Pole wyszukiwania jest w górę od listy plików.
- Więcej opcji jest niżej poniżej.

### Instrukcje

Używaj trybu rozkazującego w nazwach przewodników, nagłówkach sekcji i instrukcjach krok po kroku. Tryb rozkazujący jest zwięzły i zorientowany na działanie, co jest bardziej przejrzyste dla użytkowników wykonujących instrukcje.

- Preferuj „Skonfiguruj" zamiast „Konfigurowanie"
- Preferuj „Przenieś plik" zamiast „Przenoszenie pliku"
- Preferuj „Importuj swoje notatki" zamiast „Importowanie notatek"

### Wielkie litery w zdaniu

Preferuj *wielkie litery jak w zdaniu* zamiast *wielkich liter w każdym słowie* w nagłówkach, przyciskach i tytułach. Odwołując się do elementów interfejsu, zawsze dopasowuj wielkość liter do tekstu w interfejsie.

**Zalecane:**

- Jak Obsidian przechowuje dane

**Niezalecane:**

- Jak Obsidian Przechowuje Dane

### Przykłady

Preferuj realistyczne przykłady zamiast bezsensownych terminów.

**Zalecane:**

- `task:(zadzwoń OR zaplanuj)`

**Niezalecane:**

- `task:(foo OR bar)`

### Nazwy klawiszy i skróty klawiszowe

Odwołując się do klawiszy klawiatury i skrótów, stosuj spójną notację.

**Nazwy pojedynczych klawiszy:**

Odwołując się do znaku na klawiaturze po nazwie, dodaj ten znak w nawiasach zaraz po nazwie.

**Zalecane:**

- Naciśnij klawisz myślnik (-), aby dodać kreskę.
- Użyj znaku zapytania (?), aby wyszukiwać.

**Niezalecane:**

- Naciśnij klawisz myślnik, aby dodać kreskę.
- Użyj ?, aby wyszukiwać.
- Dodaj `-` przed słowem.

**Skróty klawiszowe:**

Formatuj skróty klawiszowe bez spacji wokół znaku plus. Gdy skrót różni się między systemami operacyjnymi, podaj oba warianty.

**Zalecane:**

- Naciśnij `Ctrl+Z` (Windows) lub `Command+Z` (macOS), aby cofnąć.
- Naciśnij `Escape`, aby zamknąć to okno.
- Użyj `Tab`, aby przechodzić między polami.

**Niezalecane:**

- Naciśnij `Cmd+Z`, aby cofnąć.
- Naciśnij `Ctrl + Z` (ze spacjami), aby cofnąć.
- Naciśnij `Ctrl/Cmd+Z`, aby cofnąć.

W przypadku skrótów identycznych na wszystkich platformach nie musisz określać systemu operacyjnego. Jeśli nie masz pewności, czy skrót różni się między platformami, podaj system operacyjny dla bezpieczeństwa. Windows i Linux zazwyczaj używają tych samych skrótów.

### Markdown

Używaj pustych linii między blokami Markdown:

**Zalecane:**

```md
# Nagłówek 1

To jest sekcja.

1. Pierwszy element
2. Drugi element
3. Trzeci element
```

**Niezalecane:**

```md
# Nagłówek 1
To jest sekcja.
1. Pierwszy element
2. Drugi element
3. Trzeci element
```

**Pauzy w listach:**

Używaj pauz (—), aby oddzielić pogrubione terminy od ich opisów w listach wypunktowanych. Nie używaj pauz w prostych zagnieżdżonych listach z linkami.

**Zalecane:**

- **Menu widoku** — twórz, edytuj i przełączaj widoki.
- **Obliczaj wartości** — dodawaj ceny, obliczaj sumy lub wykonuj operacje matematyczne.

**Niezalecane:**

- [[Tworzenie bazy danych]] — Dowiedz się, jak tworzyć i osadzać bazę danych.

### Obrazy

Używaj „**szerokość** x **wysokość** pikseli" do opisu wymiarów obrazu lub ekranu.

**Przykład:**

Zalecane wymiary obrazu: 1920 x 1080 pikseli.

## Struktura informacji

### Typy bloków wyróżnień

Używaj bloków wyróżnień strategicznie, aby podkreślić określone typy informacji:

**Wskazówka** (`[!tip]-`) — Praktyczne porady lub najlepsze praktyki, które ulepszają przepływ pracy użytkownika. Używaj do skrótów, obejść lub nieistotnych, ale przydatnych informacji. Te bloki wyróżnień domyślnie są zwinięte.

**Informacja** (`[!info]+`) — Dodatkowy kontekst, informacje tła lub wyjaśnienia. Używaj, gdy informacja dodaje zrozumienie, ale nie jest wymagana do ukończenia zadania. Te bloki wyróżnień domyślnie są rozwinięte.

**Ostrzeżenie** (`[!warning]+`) — Ważne przestrogi zapobiegające utracie danych, błędom lub niezamierzonym konsekwencjom. Używaj oszczędnie w przypadku naprawdę ryzykownych sytuacji. Te bloki wyróżnień nigdy nie powinny być zwinięte.

**Przykład** (`[!example]-`) — Ogólne uwagi dodatkowe lub uzupełniające szczegóły. Używaj do pobocznych informacji, które mogą być istotne dla niektórych użytkowników. Te bloki wyróżnień domyślnie są zwinięte.

**Przykłady:**
```md
> [!tip]- Używaj skrótów klawiszowych
> Możesz przyspieszyć swój przepływ pracy, zapamiętując najczęściej używane skróty.

> [!info]+ To jest płatny dodatek
> Ta funkcja wymaga płatnej subskrypcji.

> [!warning]+ Tej czynności nie można cofnąć
> Usunięcie skarbca jest trwałe. Rozważ wcześniejszy eksport notatek.

> [!example]- Zaawansowane użycie
> Możesz również skonfigurować to ustawienie za pośrednictwem menu Grafu.
```

### Listy vs. proza

Używaj list, gdy przedstawiasz odrębne elementy, które nie mają silnych sekwencyjnych lub przyczynowych zależności. Używaj prozy i akapitów, gdy elementy budują na sobie, wymagają wyjaśnienia lub korzystają z narracyjnego przepływu.

**Użyj listy do:**
- Zestawu niezwiązanych funkcji
- Wymagań instalacyjnych
- Opcji konfiguracyjnych
- Kroków rozwiązywania problemów

**Użyj prozy do:**
- Wyjaśnień, jak coś działa
- Przepływów pracy z zależnościami
- Przeglądów koncepcyjnych
- Wskazówek wymagających kontekstu

### Tabele

Używaj tabel do porównywania funkcji, wersji lub powiązanych punktów danych, gdy wyrównanie ułatwia zrozumienie. Unikaj tabel do prostych list lub danych jednokolumnowych.

**Dobre zastosowanie:**

| Funkcja | Mobilny | Komputer |
|---------|---------|----------|
| Synchronizacja | Tak | Tak |
| Wtyczki | Nie | Tak |
| Motywy | Ograniczone | Pełne |

### Odniesienia wewnętrzne

Używaj wewnętrznych odnośników wiki (`[[Nazwa notatki]]`) liberalnie, aby pomóc użytkownikom nawigować po powiązanych tematach. Jednak unikaj nadmiernego linkowania:

- Nie linkuj tego samego terminu wielokrotnie na jednej stronie
- Linkuj tylko wtedy, gdy strona, do której odsyłasz, dostarcza istotnego dodatkowego kontekstu
- Używaj opisowego tekstu linku, gdy jest to pomocne: `[[Nazwa notatki#Sekcja|tekst opisowy]]`

**Przykład:**

Pierwsze wspomnienie: „Dowiedz się o [[Wprowadzenie do Obsidian Sync|Obsidian Sync]], aby utrzymać swój skarbiec zaktualizowany na różnych urządzeniach."
Późniejsze wspomnienie: „Możesz skonfigurować Sync dla każdego urządzenia osobno."

### Treści specyficzne dla platformy

Dokumentując funkcje, które różnią się między platformami, użyj nagłówków sekcji, aby uporządkować treść.

Używaj `Komputer` i `Urządzenie mobilne` jako nagłówków podsekcji, aby oddzielić instrukcje lub funkcje specyficzne dla platformy.

**Zalecane:**
```md
## Dostosowywanie wstążki

### Komputer

W wersji na komputer możesz dostosować wstążkę w następujący sposób:

- Zmień kolejność akcji wstążki, przeciągając i upuszczając ikony.
- Aby ukryć określone akcje, kliknij prawym przyciskiem myszy w pustym miejscu i odznacz akcje, które chcesz ukryć.

### Urządzenie mobilne

W wersji mobilnej możesz dostosować wstążkę poprzez ustawienia:

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do **Wygląd**.
3. Wybierz **Zarządzaj** w sekcji **Konfiguracja menu wstążkowego**.
```

> [!info]+ Kiedy tworzyć oddzielne sekcje?
> Twórz oddzielne sekcje tylko wtedy, gdy treść znacząco się różni. Jeśli instrukcje są w dużej mierze takie same z niewielkimi różnicami, użyj zamiast tego uwag w tekście.

## Ikony i obrazy

Dołączaj ikony i obrazy, gdy ułatwiają wyjaśnianie rzeczy trudnych do opisania słowami, lub gdy musisz pokazać ważne części aplikacji Obsidian. Obrazy możesz zapisywać w folderze `Attachments`.

- Obraz powinien ułatwiać zrozumienie towarzyszącego mu tekstu.

 **Przykład**: Po włączeniu wtyczka [[Liczba słów]] utworzy nowy wpis na dolnym pasku stanu.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Obrazy powinny być w formacie `.png` lub `.svg`.
- Jeśli obraz wygląda na zbyt duży w notatce, zmniejsz go poza Obsidian lub dostosuj jego wymiary, jak wyjaśniono w [[Osadzanie plików#Osadzanie obrazu w notatce|osadzaniu obrazu w notatce]].
- W rzadkich przypadkach możesz umieścić szczególnie duże lub złożone obrazy w [[Objaśnienia#Zwijalne bloki wyróżnień|zwiniętym bloku wyróżnienia]].
- W przypadku okien wyskakujących lub modali, obraz powinien pokazywać całe okno aplikacji Obsidian.
 ![[Style-guide-modal-example.png#interface]]

### Ikony

Ikony [Lucide](https://lucide.dev/icons/) i niestandardowe ikony Obsidian mogą być używane obok szczegółowych elementów, aby zapewnić wizualną reprezentację funkcji.

**Przykład:** Na wstążce po lewej stronie wybierz **Stwórz nową tablicę** ![[lucide-layout-dashboard.svg#icon]], aby utworzyć tablicę w tym samym folderze co aktywny plik.

**Wytyczne dotyczące ikon**

- Przechowuj ikony w folderze `Attachments/icons`.
- Dodaj prefiks `lucide-` przed nazwą ikony Lucide.
- Dodaj prefiks `obsidian-icon-` przed nazwą ikony Obsidian.

**Przykład:** Ikona tworzenia nowej tablicy powinna nazywać się `lucide-layout-dashboard`.

- Używaj wersji SVG dostępnych ikon.
- Ikony powinny mieć `18` pikseli szerokości, `18` pikseli wysokości i grubość linii `1.5`. Możesz dostosować te ustawienia w danych SVG.

> [!info]- Dostosowywanie rozmiaru i grubości linii w SVG
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="SZEROKOŚĆ" height="WYSOKOŚĆ" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="GRUBOŚĆ-LINII" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Wykorzystuj kotwicę `icon` w osadzonych obrazach, aby dopasować odstępy wokół ikony, tak aby wyrównała się równo z tekstem w otoczeniu.
- Ikony powinny być otoczone nawiasami. ![[lucide-cog.svg#icon]]

**Przykład**: `![[lucide-cog.svg#icon]]`

### Znaczniki kotwicy obrazów

Znaczniki kotwicy obrazów są dostępne, aby dodać dekoracyjne zmiany do osadzonych obrazów.

> [!warning] Ostrzeżenie dotyczące podglądu na żywo
> Znaczniki kotwicy ikon nie będą wyświetlane poprawnie w **Podglądzie na żywo.** Użyj **Widoku czytania**, aby potwierdzić, że znacznik kotwicy został zastosowany.

**Ikona**

`![[lucide-menu.svg#icon]]`

Znacznik kotwicy ikony zapewnia prawidłowe wyrównanie pionowe ikon używanych do wskazywania elementów interfejsu.

Pierwsza ikona menu używa znacznika kotwicy ![[lucide-menu.svg#icon]], podczas gdy druga ikona menu ( ![[lucide-menu.svg]] ) nie.

**Interfejs**

`![[Vault picker.png#interface]]`

Znacznik kotwicy interfejsu dodaje dekoracyjny cień ramki wokół obrazu. Na pierwszym obrazie zastosowano znacznik kotwicy interfejsu.
![[Vault picker.png#interface]]
W przeciwieństwie do tego, drugi obraz nie ma zastosowanego znacznika kotwicy interfejsu.

![[Vault picker.png]]

**Obrys**

`![[Backlinks.png#outline]]`

Znacznik kotwicy obrysu dodaje subtelną ramkę wokół obrazu. Na pierwszym obrazie zastosowano znacznik kotwicy obrysu.

> [!tip] Zwróć uwagę na lewy dolny róg obrazu, aby zobaczyć różnicę.

![[Backlinks.png#outline]]

Drugi obraz nie ma znacznika kotwicy obrysu.

![[Backlinks.png]]

### Optymalizacja

Obrazy spowalniają czas ładowania strony i zajmują cenną przestrzeń dyskową [[Wprowadzenie do Obsidian Publish|Publish]]. Optymalizacja obrazów pozwala zmniejszyć rozmiar pliku, zachowując wizualną integralność obrazu.

Zarówno obrazy, jak i ikony powinny być optymalizowane.

> [!info] Narzędzia do optymalizacji obrazów
> Oto kilka zalecanych programów do zmniejszania rozmiaru obrazów.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Zalecamy stopień optymalizacji 65-75%.

## Układ

### Uszkodzone linki

Przed przesłaniem Pull Request sprawdź, czy w dokumentacji tłumaczenia, nad którym pracujesz, nie ma uszkodzonych linków, i popraw je. Uszkodzone linki mogą powstawać naturalnie z czasem, więc weryfikacja ich poprawności pomaga utrzymać jakość dokumentacji.

Możesz sprawdzać uszkodzone linki za pomocą [[Wtyczki społeczności|wtyczek społeczności]] lub narzędzi dostępnych w swoim IDE.

### Opisy

Ta dokumentacja jest edytowana na GitHubie i hostowana online za pośrednictwem [[Wprowadzenie do Obsidian Publish|Obsidian Publish]], co obejmuje [[Podglądy linków w mediach społecznościowych#Opis|opisy]] dla kart społecznościowych i inne elementy [[SEO]].

Jeśli strona, nad którą pracujesz, nie ma [[Atrybuty|właściwości]] `description`, dodaj ją. Opis powinien mieć 150 znaków lub mniej i zawierać obiektywne streszczenie zawartości strony.

**Dobrze**: Naucz się tworzyć szablony, które automatycznie przechwytują i organizują metadane stron internetowych za pomocą Web Clipper.
**Do poprawy**: Dowiedz się, jak tworzyć szablony, które automatycznie przechwytują i organizują metadane ze stron internetowych za pomocą Web Clipper.

### Wskazówki

Podczas pisania lub przepisywania [[#Instrukcje|instrukcji]] dotyczących wykonywania czynności w aplikacji, upewnij się, że uwzględniasz kroki zarówno dla wersji mobilnej, jak i komputerowej.

Jeśli nie masz dostępu do urządzenia mobilnego lub komputerowego, wspomnij o tym podczas przesyłania Pull Request.

## Tłumaczenia

Przetłumacz całą zawartość podczas tłumaczenia. Obejmuje to między innymi:

- Nazwy notatek
- Nazwy folderów
- Aliasy
- Nazwy załączników
- Alternatywny tekst linków
