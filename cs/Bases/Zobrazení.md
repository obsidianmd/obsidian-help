---
permalink: bases/views
---
Zobrazení umožňují organizovat informace v [[Úvod do Základen|Základně]] různými způsoby. Základna může obsahovat několik zobrazení a každé zobrazení může mít jedinečnou konfiguraci pro zobrazení, řazení a filtrování souborů.

Například můžete chtít vytvořit základnu nazvanou „Knihy", která má samostatná zobrazení pro „Seznam ke čtení" a „Nedávno dočtené".

## Nástrojový panel

V horní části základny se nachází nástrojový panel, který umožňuje pracovat se zobrazeními a jejich výsledky.

- ![[lucide-table.svg#icon]] **Nabídka zobrazení** — vytvoření, úprava a přepínání zobrazení.
- **Výsledky** — omezení, kopírování a export souborů.
- ![[lucide-arrow-up-down.svg#icon]] **Seřadit** — řazení a seskupování souborů.
- ![[lucide-list-filter.svg#icon]] **Filtr** — filtrování souborů.
- ![[lucide-list.svg#icon]] **Vlastnosti** — výběr vlastností k zobrazení a vytváření [[Vzorce|vzorců]].
- ![[lucide-search.svg#icon]] **Hledat** — hledání položek pomocí zobrazených vlastností.
- ![[lucide-plus.svg#icon]] **Nové** — vytvoření nového souboru v aktuálním zobrazení.

## Přidání a přepínání zobrazení

Existují dva způsoby, jak přidat zobrazení do základny:

- Klikněte na název zobrazení vlevo nahoře a vyberte ![[lucide-plus.svg#icon]] **Přidat zobrazení**.
- Použijte [[Paleta příkazů|paletu příkazů]] a vyberte **Základny: Přidat zobrazení**.

První zobrazení ve vašem seznamu zobrazení se načte jako výchozí. Přetažením zobrazení za jejich ikonu můžete změnit jejich pořadí.

## Nastavení zobrazení

Každé zobrazení má vlastní konfigurační možnosti. Pro úpravu nastavení zobrazení:

1. Klikněte na název zobrazení vlevo nahoře.
2. Klikněte na šipku doprava vedle zobrazení, které chcete nastavit.

Alternativně *klikněte pravým tlačítkem* na název zobrazení v nástrojovém panelu základny pro rychlý přístup k nastavení zobrazení.

## Rozvržení

Zobrazení mohou být zobrazena s různými rozvrženími, včetně ![[lucide-table.svg#icon]] **tabulka**, ![[lucide-list.svg#icon]] **seznam**, ![[lucide-layout-grid.svg#icon]] **karty** a ![[lucide-map.svg#icon]] **mapa**. Další rozvržení mohou být přidána pomocí [[Komunitní pluginy|Komunitních pluginů]]. Některá rozvržení jsou stále ve vývoji a vyžadují [[Verze s předběžným přístupem|verze s předběžným přístupem]] Obsidian.

| Rozvržení                          | Popis                                                                                                                         | Verze&nbsp;aplikace |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| [[Zobrazení Tabulka\|Tabulka]]     | Zobrazení souborů jako řádků v tabulce. Sloupce jsou naplněny z [[Vlastnosti\|vlastností]] ve vašich poznámkách.              | 1.9                 |
| [[Zobrazení Karty\|Karty]]         | Zobrazení souborů jako mřížky karet. Umožňuje vytvářet zobrazení podobná galerii s obrázky.                                  | 1.9                 |
| [[Zobrazení Seznam\|Seznam]]       | Zobrazení souborů jako [[Základní syntaxe formátování#Seznamy\|seznam]] s odrážkami nebo čísly.                               | 1.10                |
| [[Zobrazení Mapa\|Mapa]]           | Zobrazení souborů jako špendlíků na interaktivní mapě. Vyžaduje plugin Mapy.                                                 | 1.10                |


## Filtry

Otevřete nabídku ![[lucide-list-filter.svg#icon]] **Filtr** v horní části základny pro přidání filtrů.

Základna bez filtrů zobrazuje všechny soubory ve vašem trezoru. Filtry zúží výsledky tak, aby se zobrazily pouze soubory splňující konkrétní kritéria. Například můžete pomocí filtrů zobrazit pouze soubory s konkrétním [[Tagy|štítkem]] nebo v konkrétní složce. K dispozici je mnoho typů filtrů.

Filtry mohou být aplikovány na všechna zobrazení v základně, nebo pouze na jedno zobrazení výběrem z dvou sekcí v nabídce ![[lucide-list-filter.svg#icon]] **Filtr**.

- **Všechna zobrazení** aplikuje filtry na všechna zobrazení v základně.
- **Toto zobrazení** aplikuje filtry na aktivní zobrazení.

#### Komponenty filtru

Filtry mají tři komponenty:

1. **Vlastnost** — umožňuje vybrat [[Vlastnosti|vlastnost]] ve vašem trezoru, včetně [[Syntaxe Základen#Vlastnosti souboru|vlastností souboru]].
2. **Operátor** — umožňuje vybrat způsob porovnání podmínek. Seznam dostupných operátorů závisí na typu vlastnosti (text, datum, číslo atd.)
3. **Hodnota** — umožňuje vybrat hodnotu, se kterou porovnáváte. Hodnoty mohou obsahovat matematiku a [[Funkce|funkce]].

#### Spojky

- **Platí všechny následující podmínky** je příkaz `a` — výsledky se zobrazí pouze tehdy, pokud jsou splněny *všechny* podmínky ve skupině filtrů.
- **Platí alespoň jedna z následujících podmínek** je příkaz `nebo` — výsledky se zobrazí, pokud je splněna *jakákoliv* podmínka ve skupině filtrů.
- **Neplatí žádná z následujících podmínek** je příkaz `ne` — výsledky se nezobrazí, pokud je splněna *jakákoliv* podmínka ve skupině filtrů.

#### Skupiny filtrů

Skupiny filtrů umožňují vytvářet složitější logiku vytvářením kombinací spojek.

#### Pokročilý editor filtrů

Klikněte na tlačítko kódu ![[lucide-code-xml.svg#icon]] pro použití editoru **pokročilého filtru**. Zobrazí se surová [[Syntaxe Základen|syntaxe]] filtru a lze jej použít se složitějšími [[Funkce|funkcemi]], které nelze zobrazit pomocí rozhraní s klikáním.

## Řazení a seskupování výsledků

Otevřete nabídku ![[lucide-arrow-up-down.svg#icon]] **Seřadit** pro řazení a seskupování výsledků v zobrazení.

Výsledky můžete uspořádat podle jedné nebo více vlastností ve vzestupném nebo sestupném pořadí. To usnadňuje řazení poznámek podle názvu, času poslední úpravy nebo jakékoliv jiné vlastnosti — včetně vzorců.

Výsledky můžete také seskupit podle vlastnosti a organizovat podobné položky do vizuálně oddělených sekcí. V současnosti Obsidian podporuje seskupování pouze podle jedné vlastnosti.

### Přidání řazení

1. Otevřete nabídku ![[lucide-arrow-up-down.svg#icon]] **Seřadit** v horní části zobrazení.
2. Vyberte vlastnost, podle které chcete řadit (nebo seskupovat).
3. Pokud máte více řazení, přetáhněte je nahoru nebo dolů pomocí úchytu ![[lucide-grip-vertical.svg#icon]] pro změnu jejich priority.

Možnosti řazení výsledků závisí na typu vlastnosti:

- **Text**: řazení *abecedně* (A→Z) nebo v *obráceném abecedním pořadí* (Z→A).
- **Číslo**: řazení od *nejmenšího k největšímu* (0→1) nebo od *největšího k nejmenšímu* (1→0).
- **Datum a čas**: řazení *od starého k novému* nebo *od nového ke starému*.

### Odstranění řazení

1. Otevřete nabídku ![[lucide-arrow-up-down.svg#icon]] **Seřadit** v horní části zobrazení.
2. Klikněte na tlačítko koše ![[lucide-trash-2.svg#icon]] vedle řazení nebo seskupení, které chcete odstranit.

## Omezení, kopírování a export výsledků

### Omezení výsledků

Nabídka *výsledky* zobrazuje počet výsledků v zobrazení. Klikněte na tlačítko výsledků pro omezení počtu výsledků a přístup k dalším akcím.

### Kopírovat do schránky

Tato akce zkopíruje zobrazení do vaší schránky. Ze schránky jej můžete vložit do souboru Markdown nebo do jiných dokumentových aplikací včetně tabulkových procesorů jako Google Sheets, Excel a Numbers.

### Exportovat CSV

Tato akce uloží CSV vašeho aktuálního zobrazení.

## Vložení zobrazení

Soubory základen můžete vkládat do [[Vkládání souborů|jakéhokoliv jiného souboru]] pomocí syntaxe `![[Soubor.base]]`. Použije se první zobrazení v seznamu. Pořadí můžete změnit přetažením zobrazení v nabídce zobrazení.

Pro určení výchozího zobrazení pro embed použijte `![[Soubor.base#Zobrazení]]`.
