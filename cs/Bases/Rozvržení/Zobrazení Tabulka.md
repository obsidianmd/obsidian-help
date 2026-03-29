---
permalink: bases/views/table
---
Tabulka je typ [[Zobrazení|zobrazení]], který můžete použít v [[Úvod do Základen|Základnách]].

Vyberte ![[lucide-table.svg#icon]]  **Tabulka** z nabídky zobrazení pro zobrazení souborů jako tabulky s řádkem pro každý soubor a sloupci pro [[Vlastnosti]] daného souboru.

![Příklad základny zobrazující tabulkové zobrazení se seznamem knih](bases-noshadow.png#interface)

## Nastavení

Nastavení tabulkového zobrazení lze konfigurovat v [[Zobrazení#Nastavení zobrazení|Nastavení zobrazení]].

### Výška řádku

Výška řádku umožňuje zobrazit více informací. Vyberte mezi **nízká**, **střední**, **vysoká** a **extra vysoká**.

## Shrnutí

K sloupci tabulky můžete přidat shrnutí pro rychlý výpočet hodnot jako součty, průměry nebo počty pro řádky aktuálně viditelné v zobrazení.

Shrnutí jsou vázána na zobrazení, nikoliv na základnu. Každé zobrazení může zobrazovat různá shrnutí pro stejný sloupec.

### Přidat souhrn

1. Klikněte pravým tlačítkem na záhlaví sloupce v tabulkovém zobrazení.
2. Vyberte ![[lucide-calculator.svg#icon]] **Sumarizovat…**.
3. Zvolte jednu z vestavěných souhrnných funkcí, nebo vyberte ![[lucide-square-function.svg#icon]] **Přidat souhrn** pro definování vlastního.

Shrnutí se zobrazí ve spodní části sloupce. Když jsou výsledky [[Zobrazení#Řazení a seskupení výsledků|seskupeny]], shrnutí pro každou skupinu se zobrazí v horní části skupiny.

Jakmile je řádek shrnutí přidán, můžete přidat další shrnutí pro ostatní sloupce kliknutím na buňku shrnutí. Řádek shrnutí je skrytý, pokud jsou všechna shrnutí odstraněna.

### Vestavěná shrnutí

Následující shrnutí jsou dostupná ve výchozím nastavení. Možnosti se mohou lišit v závislosti na typu vlastnosti.

#### Všechny typy vlastností

- **Prázdné**: počet řádků bez hodnoty.
- **Vyplněné**: počet řádků s hodnotou.
- **Jedinečné**: počet odlišných hodnot.

#### Čísla

- **Průměr**: průměr všech číselných hodnot.
- **Maximum**: největší hodnota.
- **Medián**: hodnota mediánu.
- **Minimum**: nejmenší hodnota.
- **Rozsah**: rozdíl mezi maximem a minimem.
- **Sm. odchylka**: směrodatná odchylka.
- **Součet**: celkový součet všech hodnot.

#### Data

- **Nejstarší**: nejmenší/nejstarší datum.
- **Nejnovější**: největší/nejnovější datum.
- **Rozsah**: rozdíl mezi nejstarším a nejnovějším.

#### Zaškrtávací políčko

- **Zaškrtnuté**: počet řádků, kde je zaškrtávací políčko zapnuté.
- **Nezaškrtnuté**: počet řádků, kde je zaškrtávací políčko vypnuté.

### Vlastní shrnutí

Můžete definovat vlastní shrnutí pomocí vzorce:

1. V nabídce ![[lucide-calculator.svg#icon]] **Sumarizovat…** zvolte ![[lucide-square-function.svg#icon]] **Přidat souhrn**.
2. Pojmenujte shrnutí.
3. Zadejte vzorec. Vzorec se spouští nad seznamem hodnot v daném sloupci (například pomocí [[Funkce|funkce]] jako `values.reduce(...)`).
4. Uložte shrnutí.

Vlastní shrnutí jsou užitečná, když potřebujete výpočet, který není pokryt vestavěnými možnostmi.

## Zkratky

V tabulkovém zobrazení se můžete rychle pohybovat pomocí následujících myší a [[Klávesové zkratky pro úpravy|klávesových zkratek]].

- Shift-kliknutí vytvoří výběr buněk.
- Kliknutím pravým tlačítkem na výběr buněk získáte přístup k dalším akcím pro dané soubory.

| Akce                                                                                                                    | Zkratka             | macOS              |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------ |
| Kopírovat vybrané buňky                                                                                                 | `Ctrl+C`            | `Cmd+C`            |
| Vložit vybrané buňky                                                                                                    | `Ctrl+V`            | `Cmd+V`            |
| Vrátit zpět změny vlastností                                                                                            | `Ctrl+Z`            | `Cmd+Z`            |
| Znovu provést změny vlastností                                                                                          | `Ctrl+Shift+Z`      | `Cmd+Shift+Z`      |
| Vybrat všechny buňky v aktuální skupině                                                                                 | `Ctrl+A`            | `Cmd+A`            |
| Vybrat všechny buňky v daném směru                                                                                      | `Ctrl+Shift+Arrow`  | `Ctrl+Shift+Arrow` |
| Vybrat sloupec                                                                                                          | `Ctrl+Space`        |                    |
| Vybrat řádek                                                                                                            | `Shift+Space`       |                    |
| Zaměřit aktuální buňku — u zaškrtávacích políček se přepne stav, u vzorců se otevře editor vzorců                      | `Enter`             |                    |
| Přejít na první sloupec                                                                                                 | `Home`              |                    |
| Přejít na poslední sloupec                                                                                              | `End`               |                    |
| Navigovat nahoru a dolů o výšku stránky                                                                                 | `PageUp`,`PageDown` |                    |
| Zrušit aktuální výběr buněk                                                                                             | `Esc`               |                    |
| Vymazat aktuální buňky                                                                                                  | `Backspace`         |                    |
| Přejít na další buňku                                                                                                   | `Tab`               |                    |
| Přejít na předchozí buňku                                                                                               | `Shift-Tab`         |                    |
