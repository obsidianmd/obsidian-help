---
permalink: bases/views
---
Zobrazení umožňují organizovat informace v [[Úvod do Základen|Základně]] různými způsoby. Základna může obsahovat několik zobrazení a každé zobrazení může mít jedinečnou konfiguraci pro zobrazení, řazení a filtrování souborů.

Například můžete chtít vytvořit základnu nazvanou „Knihy", která má samostatná zobrazení pro „Seznam ke čtení" a „Nedávno dočtené".

## Nástrojový panel

V horní části základny se nachází nástrojový panel, který umožňuje pracovat se zobrazeními a jejich výsledky.

- ![[lucide-table.svg#icon]] **Nabídka zobrazení** — vytvoření, úprava a přepínání zobrazení.
- **Výsledky** — omezení, kopírování a export souborů.
- ![[lucide-arrow-up-down.svg#icon]] **Seřadit** — řazení souborů.
- ![[lucide-stretch-horizontal.svg#icon]] **Seskupit** — seskupování souborů a správa pořadí a viditelnosti skupin.
- ![[lucide-list-filter.svg#icon]] **Filtr** — filtrování souborů.
- ![[lucide-list.svg#icon]] **Vlastnosti** — výběr vlastností k zobrazení a vytváření [[Vzorce|vzorců]].
- ![[lucide-search.svg#icon]] **Hledat** — hledání položek pomocí zobrazených vlastností.
- ![[lucide-plus.svg#icon]] **Nové** — vytvoření nového souboru v aktuálním zobrazení.

Na telefonech se **Výsledky**, **Seřadit**, ![[lucide-stretch-horizontal.svg#icon]] **Seskupit** a **Vlastnosti** nacházejí v nabídce ![[lucide-sliders-horizontal.svg#icon]] **Zobrazení**.

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

Zobrazení mohou být zobrazena s různými rozvrženími, včetně ![[lucide-table.svg#icon]] **tabulka**, ![[lucide-list.svg#icon]] **seznam**, ![[lucide-layout-grid.svg#icon]] **karty**, ![[lucide-kanban-square.svg#icon]] **Kanban** a ![[lucide-map.svg#icon]] **mapa**. Další rozvržení mohou být přidána pomocí [[Komunitní pluginy|Komunitních pluginů]].

| Rozvržení                          | Popis                                                                                                                         | Verze&nbsp;aplikace |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| [[Zobrazení Tabulka\|Tabulka]]     | Zobrazení souborů jako řádků v tabulce. Sloupce jsou naplněny z [[Vlastnosti\|vlastností]] ve vašich poznámkách.              | 1.9                 |
| [[Zobrazení Karty\|Karty]]         | Zobrazení souborů jako mřížky karet. Umožňuje vytvářet zobrazení podobná galerii s obrázky.                                  | 1.9                 |
| [[Zobrazení Seznam\|Seznam]]       | Zobrazení souborů jako [[Základní syntaxe formátování#Seznamy\|seznam]] s odrážkami nebo čísly.                               | 1.10                |
| [[Zobrazení Kanban\|Kanban]]       | Zobrazení souborů jako karet uspořádaných do sloupců na základě seskupené vlastnosti.                                         | 1.14                |
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

Pomocí nabídky ![[lucide-arrow-up-down.svg#icon]] **Seřadit** můžete uspořádat výsledky a pomocí nabídky ![[lucide-stretch-horizontal.svg#icon]] **Seskupit** můžete organizovat podobné položky do sekcí.

Výsledky můžete uspořádat podle jedné nebo více vlastností ve vzestupném nebo sestupném pořadí. To usnadňuje řazení poznámek podle názvu, času poslední úpravy nebo jakékoliv jiné vlastnosti — včetně vzorců.

Každé zobrazení může mít několik řazení, ale seskupovat výsledky lze pouze podle jedné vlastnosti.

### Přidání řazení

1. Otevřete nabídku ![[lucide-arrow-up-down.svg#icon]] **Seřadit** v horní části zobrazení.
2. Vyberte **Přidat řazení** a poté zvolte vlastnost, podle které chcete řadit.
3. Pokud máte více řazení, přetáhněte je nahoru nebo dolů pomocí úchytu ![[lucide-grip-vertical.svg#icon]] pro změnu jejich priority.

Možnosti řazení výsledků závisí na typu vlastnosti:

- **Text**: řazení *abecedně* (A→Z) nebo v *obráceném abecedním pořadí* (Z→A).
- **Číslo**: řazení od *nejmenšího k největšímu* (0→1) nebo od *největšího k nejmenšímu* (1→0).
- **Datum a čas**: řazení *od starého k novému* nebo *od nového ke starému*.

### Odstranění řazení

1. Otevřete nabídku ![[lucide-arrow-up-down.svg#icon]] **Seřadit** v horní části zobrazení.
2. Vyberte tlačítko koše ![[lucide-trash-2.svg#icon]] vedle řazení, které chcete odstranit.

### Seskupování výsledků

1. Otevřete nabídku ![[lucide-stretch-horizontal.svg#icon]] **Seskupit** v horní části zobrazení. Na telefonech otevřete **Zobrazení → Seskupit**.
2. V části **Seskupit podle** vyberte vlastnost.
3. Zvolte automatické pořadí řazení, nebo vyberte **Ručně** pro ruční uspořádání skupin.

Pro zrušení seskupování výsledků vyberte tlačítko koše ![[lucide-trash-2.svg#icon]] vedle vlastnosti seskupení.

### Změna pořadí, skrytí a přidání skupin

V nabídce ![[lucide-stretch-horizontal.svg#icon]] **Seskupit** vyberte **Ručně** z nabídky pořadí řazení pro správu zobrazených skupin a jejich pořadí.

- Zaškrtnutím skupiny ji zobrazíte, odškrtnutím ji skryjete. Vyberte **Zobrazit vše** nebo **Skrýt vše** pro změnu viditelnosti všech skupin.
- Přetáhněte úchyt ![[lucide-grip-vertical.svg#icon]] vedle skupiny pro změnu její pozice.
- Vyberte **Přidat skupinu** a zadejte hodnotu pro zobrazení nové prázdné skupiny. Tím se nevytvoří poznámka ani nezmění existující poznámky.

Pro obnovení automatického pořadí skupin a zobrazení všech skupin zvolte automatické pořadí řazení místo **Ručně**.

### Sbalení skupin

V rozvrženích [[Zobrazení Tabulka|tabulka]], [[Zobrazení Karty|karty]] a [[Zobrazení Seznam|seznam]] vyberte záhlaví skupiny pro sbalení nebo rozbalení dané skupiny. Sbalení skupiny dočasně skryje její položky bez změny jejich vlastností.

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
