---
permalink: publish/customize
publish: true
description: 'Dowiedz się, jak dostosować wygląd i styl swojej strony Obsidian Publish.'
---
Ta strona wyjaśnia, jak możesz dostosować wygląd i sposób działania swojej strony [[Wprowadzenie do Obsidian Publish|Obsidian Publish]].

## Zasoby statyczne

Możesz dostosować swoją stronę, [[Opublikuj swoją zawartość#Publikowanie notatek|publikując]] następujące pliki na swojej stronie:

- `publish.css` aby dodać własny CSS
- `publish.js` aby dodać własny JavaScript
- `favicon-32x32.png` aby ustawić favicon

**Uwagi:**

- [Zmienne CSS dla Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) można znaleźć na naszej stronie z dokumentacją.
- Ponieważ Obsidian nie obsługuje plików CSS ani JavaScript, musisz użyć innej aplikacji do ich tworzenia i edycji.
- Zarówno `publish.css`, jak i `publish.js` muszą znajdować się w katalogu głównym (`/`) twojego skarbca.
- Domyślnie `publish.css` i `publish.js` nie pojawiają się w eksploratorze plików, ale nadal możesz je opublikować z okna dialogowego **Opublikuj zmiany**.
- Aby użyć niestandardowego JavaScript z `publish.js`, musisz skonfigurować [[Niestandardowe domeny]].

W przypadku favicon, Obsidian Publish obsługuje następujące konwencje nazewnictwa, gdzie `32` oznacza wymiary ikony w pikselach:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Zalecamy dostarczenie jednego lub więcej z następujących wymiarów:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Masz swobodę w umieszczaniu favicon w dowolnym miejscu w skarbcu, pod warunkiem że zostaną opublikowane na twojej stronie.

## Użyj motywu społeczności

Aby użyć jednego z motywów społeczności na swojej stronie:

1. Otwórz swój skarbiec w domyślnym eksploratorze plików swojego systemu operacyjnego.
2. Przejdź do folderu ustawień skarbca (domyślnie: `.obsidian`).
3. Otwórz folder `themes`.
4. Skopiuj plik CSS motywu, którego chcesz użyć na swojej stronie.
5. Wklej plik do folderu głównego swojego skarbca.
6. Zmień nazwę pliku CSS na `publish.css`.
7. [[Opublikuj swoją zawartość#Publikowanie notatek|Opublikuj]] `publish.css`.

**Uwagi:**

- Jeśli styl nie zaktualizuje się w ciągu kilku minut, spróbuj wyczyścić pamięć podręczną przeglądarki.
- Możesz przełączać się między trybem jasnym i ciemnym w [[Zarządzaj stronami#Wyświetl opcje strony|opcjach strony]].
- Wiele motywów społeczności korzysta z **Style Settings** do niestandardowego stylowania, ale te ustawienia nie działają w Obsidian Publish.

> [!tip] Tworzenie motywów
> Nie możesz znaleźć odpowiedniego motywu? Dowiedz się, jak samodzielnie [zbudować motyw Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme).

## Włącz funkcje interfejsu

Możesz przełączać kilka funkcji interfejsu na swojej stronie, takich jak widok grafu czy spis treści.

Przeglądaj dostępne funkcje interfejsu w sekcjach **Przeglądanie strony** i **Komponenty** w [[Zarządzaj stronami#Wyświetl opcje strony|opcjach strony]].

### Dostosuj nawigację

W Obsidian Publish masz możliwość dostosowania kolejności nawigacji oraz wyświetlania plików i folderów w [[Eksplorator plików|eksploratorze plików]] Publish. Elementy nawigacji są domyślnie wyświetlane w kolejności publikacji. Notatki, które nie zostały opublikowane, nie pojawią się w tym panelu.

#### Dostęp do opcji dostosowywania nawigacji

1. Na [[Menu wstążkowe|wstążce]] wybierz **Opublikuj zmiany** ![[lucide-send.svg#icon]] lub otwórz [[Lista poleceń|paletę poleceń]] i wpisz **Publish: Opublikuj zmiany...**
2. W oknie dialogowym **Opublikuj zmiany** wybierz **Zmień ustawienia strony** ![[lucide-cog.svg#icon]].
3. W sekcji **Ustawienia komponentów**, obok **Dostosuj menu**, wybierz przycisk **Zarządzaj**.

Pojawi się nowe okno pop-up zatytułowane **Menu** nad oknem **Zmień ustawienia strony**.

#### Dostosuj elementy nawigacji

W sekcji oznaczonej jako **Podgląd menu** możesz dostosować kolejność wyświetlania opublikowanej zawartości.

1. Wybierz folder lub notatkę, które chcesz dostosować.
2. Przeciągnij notatkę lub folder w górę lub w dół, aż znajdzie się w pożądanym miejscu.
3. W prawym dolnym rogu okna **Menu** wybierz **Gotowe**.

Publish wyśle zmiany nawigacji na twoją stronę.

#### Ukrywanie i pokazywanie elementów nawigacji

Jeśli istnieją notatki lub foldery, które opublikowałeś, ale nie chcesz, aby były widoczne w nawigacji, możesz je ukryć.

1. Wybierz folder lub notatkę, które chcesz dostosować.
2. Kliknij prawym przyciskiem myszy i wybierz **Ukryj**. Element powinien teraz zniknąć z **Podglądu menu**.
3. W prawym dolnym rogu okna **Menu** wybierz **Gotowe**.

Publish wyśle zmiany nawigacji na twoją stronę.

> [!tip] Możesz **Pokaż ukryte** pliki, zaznaczając pole wyboru po prawej stronie tytułu **Podgląd menu**

## FAQ

**Czy mogę przenosić pliki z jednego folderu do innego w nawigacji?**

Nie. Struktura nawigacji plików dla notatek w folderach musi być zachowana. Możesz dostosować kolejność notatek w folderach (w tym w katalogu głównym skarbca) oraz kolejność folderów w innych folderach.

**Czy mogę edytować kolejność wielu notatek i folderów przed wybraniem Gotowe?**

Tak.

**Jak cofnąć te zmiany?**

- **Kolejność wyświetlania**: Wybierz ikonę **Przywróć domyślny skrót klawiszowy** (strzałka obracająca się przeciwnie do ruchu wskazówek zegara) obok **Kolejność wyświetlania elementów menu**. Spowoduje to przywrócenie elementów nawigacji do kolejności alfabetycznej.
- **Status ukrycia**: Wybierz ikonę **Przywróć domyślny skrót klawiszowy** (strzałka obracająca się przeciwnie do ruchu wskazówek zegara) obok **Ukryj strony lub foldery w menu**. Spowoduje to przywrócenie ukrytych elementów nawigacji do stanu widocznego.
