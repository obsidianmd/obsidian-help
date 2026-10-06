---
permalink: bases/views/kanban
---
Kanban to typ [[Podglądy|podglądu]], którego możesz używać w [[Wprowadzenie do baz danych|Bazach danych]].

Wybierz ![[lucide-kanban-square.svg#icon]] **Kanban** z menu podglądu, aby wyświetlić pliki jako karty zorganizowane w kolumny. Każda kolumna reprezentuje wartość właściwości użytej do grupowania wyników.


> [!note] Wymaga Obsidian 1.14+
> Podglądy Kanban są dostępne w Obsidian 1.14 i nowszych wersjach.


## Grupowanie kart w kolumny

Podgląd Kanban wymaga właściwości do grupowania wyników.

1. Wybierz **Grupuj** na pasku narzędzi. Na telefonach wybierz **Wyświetlanie → Grupuj**.
2. W sekcji **Grupuj**, wybierz właściwość.

Pliki bez wartości dla wybranej właściwości pojawiają się w kolumnie **Brak wartości**.

> [!info] 
> Jeśli grupujesz według wzoru lub właściwości pliku innej niż `file.folder`, nie możesz przenosić kart ani kolumn, ani tworzyć notatek z kolumn. Nadal możesz [[Podglądy#Zmienianie kolejności, ukrywanie i dodawanie grup|zarządzać kolejnością i widocznością grup]] w menu **Grupuj**.

## Praca z kartami i kolumnami

- Przeciągnij kartę do innej kolumny, aby zaktualizować zgrupowaną właściwość w danej notatce. Między kolumnami można przenosić tylko notatki Markdown, z wyjątkiem grupowania według `file.folder`, gdzie przeniesienie karty przenosi plik do tego folderu.
- Wybierz ikonę plusa w nagłówku kolumny lub ![[lucide-plus.svg#icon]] **Nowe** na dole kolumny, aby utworzyć notatkę z wartością tej kolumny.
- Przeciągnij nagłówek kolumny, aby zmienić kolejność kolumn. Aby przywrócić automatyczną kolejność, otwórz **Grupuj** i wybierz automatyczną kolejność sortowania zamiast **Ręcznie**.
- Użyj **Grupuj**, aby [[Podglądy#Zmienianie kolejności, ukrywanie i dodawanie grup|zmieniać kolejność, ukrywać lub dodawać kolumny]].
- Użyj menu ![[lucide-list.svg#icon]] **Atrybuty**, aby wybrać właściwości wyświetlane na każdej karcie. Pierwsza właściwość jest wyświetlana jako tytuł karty.

## Ustawienia

Ustawienia podglądu Kanban można skonfigurować w [[Podglądy#Ustawienia podglądu|Ustawieniach podglądu]].

- Ukryj puste kolumny
- Szerokość kolumny
- Atrybut obrazu
- Dopasowanie obrazu
- Proporcje obrazu

### Ukryj puste kolumny

Ukrywa kolumny, które nie zawierają żadnych kart.

### Szerokość kolumny

Określa szerokość każdej kolumny i jej kart.

### Atrybut obrazu

Karty Kanban obsługują opcjonalną okładkę wyświetlaną na górze karty. Obsługiwane wartości właściwości są takie same jak w przypadku [[Podgląd Karty#Atrybut obrazu|atrybutu obrazu w podglądzie Karty]].

### Dopasowanie obrazu

Jeśli masz skonfigurowany atrybut obrazu, ta opcja określa sposób wyświetlania obrazu na karcie.

- **Okładka:** Obraz wypełnia pole zawartości karty. Jeśli nie pasuje, obraz jest przycinany.
- **Zawartość:** Obraz jest skalowany, aż zmieści się w polu zawartości karty. Obraz nie jest przycinany.

### Proporcje obrazu

Wysokość okładki jest określana przez jej proporcje. Dostosuj tę opcję, aby obraz był krótszy lub wyższy.
