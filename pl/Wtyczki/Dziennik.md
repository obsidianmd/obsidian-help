---
permalink: plugins/daily-notes
---
Dziennik to [[Wbudowane wtyczki|wbudowana wtyczka]], która otwiera notatkę na podstawie dzisiejszej daty lub tworzy ją, jeśli jeszcze nie istnieje. Używaj dziennika do tworzenia dzienników, list zadań lub codziennych zapisków z odkryciami dnia.

Aby otworzyć dzisiejszy dziennik, możesz:

- Kliknąć **Otwórz dzisiejszy dziennik** ![[lucide-calendar.svg#icon]] na [[Menu wstążkowe|wstążce]].
- Uruchomić polecenie **Otwórz dzisiejszy dziennik** z [[Lista poleceń|palety poleceń]].
- [[Skróty klawiszowe#Ustawianie skrótu klawiszowego|Użyć skrótu klawiszowego]] dla polecenia **Otwórz dzisiejszy dziennik**.

Domyślnie Obsidian tworzy nową pustą notatkę o nazwie odpowiadającej dzisiejszej dacie w formacie RRRR-MM-DD.

> [!tip] Jeśli wolisz przechowywać codzienne notatki w osobnym folderze, możesz ustawić <u>Lokalizację nowych plików</u> w opcjach wtyczki, aby zmienić miejsce, w którym Obsidian tworzy nowe codzienne notatki.

> [!example]- Automatyczne podfoldery
> Możesz automatycznie organizować codzienne notatki w foldery, korzystając z funkcji **Format daty**.
> 
> Na przykład, jeśli ustawisz format daty jako `YYYY/MMMM/YYYY-MMM-DD`, notatki będą tworzone jako `2023/January/2023-Jan-01`. 
> 
> Więcej opcji formatowania znajdziesz na stronie dokumentacji [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Tworzenie codziennej notatki z szablonu

Jeśli Twoje codzienne notatki mają tę samą strukturę, możesz użyć [[Wtyczki/Szablony|szablonu]], aby dodawać predefiniowaną zawartość do codziennych notatek podczas ich tworzenia.

1. Stwórz nową notatkę o nazwie „Szablon dzienny" z następującą treścią (lub dowolną inną, która Ci odpowiada!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Zadania

   - [ ]
   ```

2. Otwórz **[[Ustawienia]]**.
3. Na pasku bocznym kliknij **Dziennik** w sekcji **Opcje wtyczek**.
4. W polu tekstowym obok **Lokalizacja szablonu** wybierz notatkę „Szablon dzienny".

Obsidian użyje szablonu przy następnym tworzeniu nowej codziennej notatki.

## Dziennik a atrybuty

Gdy wtyczka Dziennik jest aktywowana i w dowolnej notatce znajduje się atrybut daty, Obsidian automatycznie spróbuje wygenerować link do codziennej notatki dla tego konkretnego dnia. Na przykład, jeśli notatka o nazwie `example.md` zawiera atrybut daty `2023-01-01`, data ta zostanie przekształcona w klikalny link w sekcji [[Podglądy i tryb edycji#Podgląd na żywo|podglądu na żywo]].

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
