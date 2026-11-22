---
permalink: bases/views/kanban
---
Kanban to typ [[Widoki|widoku]], którego możesz używać w [[Wprowadzenie do baz danych|Bazach danych]].

Wybierz ![[lucide-kanban-square.svg#icon]] **Kanban** z menu widoku, aby wyświetlić pliki jako karty zorganizowane w kolumny. Każda kolumna reprezentuje wartość atrybutu użytego do grupowania wyników.


> [!note] Wymaga Obsidian 1.14+
> Widoki Kanban są dostępne w Obsidian 1.14 i nowszych wersjach.


## Grupowanie kart w kolumny

Widok Kanban wymaga atrybutu do grupowania wyników.

1. Wybierz **Grupuj** na pasku narzędzi. Na telefonach wybierz **Wyświetlanie → Grupuj**.
2. W sekcji **Grupuj** wybierz atrybut.

Pliki bez wartości dla wybranego atrybutu pojawiają się w kolumnie **Brak wartości**.

> [!info]
> Jeśli grupujesz według wzoru lub atrybutu pliku innego niż `file.folder`, nie możesz przenosić kart ani kolumn, ani tworzyć notatek z kolumn. Nadal możesz [[Widoki#Zmiana kolejności, ukrywanie i dodawanie grup|zarządzać kolejnością i widocznością grup]] w menu **Grupuj**.

## Praca z kartami i kolumnami

- Przeciągnij kartę do innej kolumny, aby zaktualizować atrybut grupowania w danej notatce. Między kolumnami można przenosić tylko notatki Markdown, z wyjątkiem grupowania według `file.folder`, gdzie przeniesienie karty przenosi plik do tego folderu.
- Wybierz ikonę plusa w nagłówku kolumny lub ![[lucide-plus.svg#icon]] **Nowe** na dole kolumny, aby utworzyć notatkę z wartością tej kolumny.
- Przeciągnij nagłówek kolumny, aby zmienić kolejność kolumn. Aby przywrócić automatyczną kolejność, otwórz **Grupuj** i wybierz automatyczną kolejność sortowania zamiast **Ręcznie**.
- Użyj **Grupuj**, aby [[Widoki#Zmiana kolejności, ukrywanie i dodawanie grup|zmieniać kolejność, ukrywać lub dodawać kolumny]].
- Użyj menu ![[lucide-list.svg#icon]] **Atrybuty**, aby wybrać atrybuty wyświetlane na każdej karcie. Pierwszy atrybut jest wyświetlany jako tytuł karty.

## Ustawienia

Ustawienia widoku Kanban można skonfigurować w [[Widoki#Ustawienia widoku|Ustawieniach widoku]].

- Szerokość kolumny
- Atrybut obrazu
- Dopasowanie obrazu
- Proporcje obrazu

### Szerokość kolumny

Określa szerokość każdej kolumny i jej kart.

### Atrybut obrazu

Karty Kanban obsługują opcjonalną okładkę wyświetlaną na górze karty. Obsługiwane wartości atrybutu są takie same jak w przypadku [[Widok kart#Atrybut obrazu|atrybutu obrazu w widoku Karty]].

### Dopasowanie obrazu

Jeśli masz skonfigurowany atrybut obrazu, ta opcja określa sposób wyświetlania obrazu na karcie.

- **Okładka:** Obraz wypełnia pole zawartości karty. Jeśli nie pasuje, obraz jest przycinany.
- **Zawartość:** Obraz jest skalowany, aż zmieści się w polu zawartości karty. Obraz nie jest przycinany.

### Proporcje obrazu

Wysokość okładki jest określana przez jej proporcje. Dostosuj tę opcję, aby obraz był krótszy lub wyższy.
