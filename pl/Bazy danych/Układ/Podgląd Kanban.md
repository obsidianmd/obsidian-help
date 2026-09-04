---
permalink: bases/views/kanban
---
Kanban to typ [[Podglądy|podglądu]], którego możesz używać w [[Wprowadzenie do baz danych|Bazach danych]].

Wybierz ![[lucide-kanban-square.svg#icon]] **Kanban** z menu podglądu, aby wyświetlić pliki jako karty zorganizowane w kolumny. Każda kolumna reprezentuje wartość właściwości użytej do grupowania wyników.


> [!warning] Wymaga Obsidian 1.14+
> Podglądy Kanban wymagają Obsidian 1.14, który jest obecnie dostępny w ramach [[Wersje wczesnego dostępu|wczesnego dostępu]].


## Grupowanie kart w kolumny

Podgląd Kanban wymaga właściwości do grupowania wyników.

1. Wybierz ![[lucide-arrow-up-down.svg#icon]] **Sortuj** na pasku narzędzi.
2. W sekcji **Grupuj**, wybierz **Atrybut** i wybierz właściwość.

Pliki bez wartości dla wybranej właściwości pojawiają się w kolumnie **Brak wartości**.

> [!info] 
> Jeśli grupujesz według wzoru lub właściwości pliku, nie możesz przenosić kart ani kolumn, ani tworzyć notatek z kolumn. Tych właściwości nie można edytować poprzez przenoszenie karty.

## Praca z kartami i kolumnami

- Przeciągnij kartę do innej kolumny, aby zaktualizować zgrupowaną właściwość w danej notatce. Między kolumnami można przenosić tylko notatki Markdown.
- Wybierz ikonę plusa w nagłówku kolumny lub ![[lucide-plus.svg#icon]] **Nowe** na dole kolumny, aby utworzyć notatkę z wartością tej kolumny.
- Przeciągnij nagłówek kolumny, aby zmienić kolejność kolumn. Aby przywrócić oryginalną kolejność, kliknij prawym przyciskiem myszy kolumnę i wybierz **Resetuj kolejność**.
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
