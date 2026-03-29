---
permalink: formulas
description: 'Vzorce umožňují vytvářet vypočítané vlastnosti pomocí dat z jiných vlastností. Můžete provádět výpočty, manipulovat s textem, pracovat s daty a více.'
---
Vzorce umožňují vytvářet vypočítané vlastnosti v [[Úvod do Základen|Základnách]] pomocí dat z jiných [[Vlastnosti|vlastností]]. Můžete provádět výpočty, manipulovat s textem, pracovat s daty a dalšími.

## Co vzorce umí

Vzorce vám mohou pomoci:

- **Vypočítat hodnoty**, sčítat ceny, počítat celkové součty nebo provádět matematické operace.
- **Manipulovat s textem**, kombinovat řetězce, měnit velikost písmen nebo extrahovat podřetězce.
- **Pracovat s daty**, vypočítat časové rozdíly, formátovat data nebo určovat termíny.
- **Aplikovat logiku**, používat podmíněné příkazy k zobrazení různých hodnot.
- **Zpracovávat seznamy**, filtrovat, řadit, mapovat nebo agregovat data seznamů.

## Vytvoření vlastnosti se vzorcem

Pro vytvoření vlastnosti se vzorcem:

1. Ve vaší základně klikněte na **Vlastnosti** v nástrojovém panelu.
2. Klikněte na **Přidat vzorec** ve spodní části nabídky.
3. Zadejte název pro vaši vlastnost se vzorcem.
4. Napište vzorec do pole **Vzorec**.
5. Zavřete dialog.

Editor vzorců bude automaticky doplňovat názvy [[Funkce|funkcí]] a vlastností při psaní a validovat syntaxi vašeho vzorce. Když je vzorec platný, zobrazí se zelené zaškrtnutí.

Po vytvoření můžete vlastnost se vzorcem používat jako jakoukoli jinou vlastnost ve vaší základně. Přidejte ji do [[Zobrazení|zobrazení]], použijte ji ve filtrech, řaďte podle ní a další.

## Psaní vzorce

V editoru vzorců zadejte výraz pomocí vlastností, operátorů a funkcí.

### Odkazování na vlastnosti

Ve vzorcích můžete odkazovat na různé typy vlastností:

- **Vlastnosti poznámky** — Vlastnosti z [[Vlastnosti|úvodních metadat]] poznámky.
- **Vlastnosti souboru** — Vestavěné vlastnosti jako `file.name`, `file.size` nebo `file.mtime`.
- **Vlastnosti se vzorcem** — Jiné vzorce pomocí `formula.název_vzorce`.

**Příklady:**

- `price * quantity` — vynásobení dvou vlastností poznámky
- `file.name + " - " + description` — kombinace názvu souboru s vlastností poznámky
- `formula.price_per_unit * 1.1` — použití jiné vlastnosti se vzorcem

### Použití operátorů

**Aritmetické operátory** provádějí matematické operace s čísly:

- `price + tax` — sčítání
- `price - discount` — odčítání
- `price * quantity` — násobení
- `price / quantity` — dělení
- `(part / whole) * 100` — použití závorek pro pořadí operací

**Porovnávací operátory** porovnávají hodnoty:

- `price > 100` — větší než
- `age < 18` — menší než
- `status == "Done"` — rovná se
- `status != "Done"` — nerovná se
- `file.mtime > now() - '7d'` — porovnání dat

**Booleovské operátory** kombinují logické podmínky:

- `!completed` — negace
- `price > 0 && quantity > 0` — a
- `urgent || important` — nebo

Zjistěte více v [[Syntaxe Základen#Operátory|Syntaxe Základen]].

### Použití funkcí

Funkce provádějí operace s hodnotami. Dostupné funkce závisí na typu hodnoty, se kterou pracujete. Podívejte se na kompletní seznam [[Funkce|funkcí]].

**Běžné kategorie funkcí:**

- **Globální funkce** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Řetězcové funkce** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Číselné funkce** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Datumové funkce** — `format()`, `relative()`, `date()`, `time()`
- **Seznamové funkce** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Příklady:**

- `if(price, "$" + price.toFixed(2), "")` pro definování podmínky s formátováním čísel.
- `file.name.lower()` pro převod na malá písmena.
- `tags.contains("urgent")` pro kontrolu, zda seznam štítků obsahuje hodnotu.
- `due_date.format("YYYY-MM-DD")` pro formátování data.

## Příklady vzorců

### Výpočet termínu

Nastavení termínu projektu jako 2 týdny po datu zahájení:

```js
start_date + "2w"
```

### Zobrazení stavu po termínu

Zobrazení „Po termínu", pokud termín vypršel a stav není „Hotovo":

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Formátování měny

Zobrazení ceny se 2 desetinnými místy a symbolem měny:

```js
if(price, "$" + price.toFixed(2), "")
```

### Počítání položek seznamu

Spočítání počtu položek ve vlastnosti typu seznam:

```js
tasks.length
```

### Výpočet skóre priority

Kombinace více faktorů do skóre priority:

```js
(impact * urgency) / effort
```

### Kombinování textových polí

Vytvoření celého jména z křestního jména a příjmení:

```js
first_name + " " + last_name
```

### Výpočet celkových nákladů

Vynásobení měsíčních nákladů počtem měsíců vlastnictví:

```js
monthlyUses * formula.Owned.round()
```

## Datové typy

Vzorce pracují s různými typy dat:

- **Řetězce** — Text uzavřený v uvozovkách: `"hello"` nebo `'world'`
- **Čísla** — Číselné hodnoty: `42`, `3.14`, `(2 + 2)`
- **Booleovské hodnoty** — Pravda nebo nepravda: `true`, `false`
- **Data** — Vytvořená pomocí `date()`, `today()` nebo `now()`
- **Seznamy** — Kolekce hodnot: `[1, 2, 3]`
- **Objekty** — Páry klíč-hodnota: `{"name": "value"}`

Výstupní typ vzorce je určen použitými daty a funkcemi.

## Odkazování na jiné vzorce

Vzorce mohou odkazovat na jiné vzorce a vytvářet odvozené výpočty. Například pokud máte vzorec s názvem `price_per_unit`:

```js
price / quantity
```

Můžete na něj odkázat v jiném vzorci:

```js
formula.price_per_unit * 1.1
```

> [!warning] Vyhněte se kruhovým odkazům
> Vzorec nemůže odkazovat sám na sebe přímo ani nepřímo prostřednictvím jiných vzorců.
