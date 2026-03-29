---
permalink: formulas
description: 'Vzorce vám umožňujú vytvárať vypočítané vlastnosti pomocou údajov z iných vlastností. Môžete vykonávať výpočty, manipulovať s textom, pracovať s dátumami a ďalšie.'
---
Vzorce vám umožňujú vytvárať vypočítané vlastnosti v [[Úvod do Databáz|Databázach]] pomocou údajov z iných [[Vlastnosti|vlastností]]. Môžete vykonávať výpočty, manipulovať s textom, pracovať s dátumami a oveľa viac.

## Čo vzorce dokážu

Vzorce vám môžu pomôcť:

- **Vypočítať hodnoty**, sčítať ceny, vypočítať súčty alebo vykonávať matematické operácie.
- **Manipulovať s textom**, kombinovať reťazce, meniť veľkosť písmen alebo extrahovať podreťazce.
- **Pracovať s dátumami**, vypočítať časové rozdiely, formátovať dátumy alebo určovať termíny.
- **Aplikovať logiku**, používať podmienené príkazy na zobrazenie rôznych hodnôt.
- **Spracovať zoznamy**, filtrovať, zoradiť, mapovať alebo agregovať údaje zoznamu.

## Vytvorenie vlastnosti vzorca

Ak chcete vytvoriť vlastnosť vzorca:

1. Vo vašej báze kliknite na **Vlastnosti** v paneli nástrojov.
2. Kliknite na **Pridať vzorec** v spodnej časti ponuky.
3. Zadajte názov pre vašu vlastnosť vzorca.
4. Zadajte vzorec do poľa **Vzorec**.
5. Zatvorte dialógové okno.

Editor vzorcov bude automaticky dopĺňať názvy [[Funkcie|funkcií]] a vlastností počas písania a overovať syntax vášho vzorca. Keď je váš vzorec platný, zobrazí sa zelená značka.

Po vytvorení môžete vlastnosť vzorca používať ako akúkoľvek inú vlastnosť vo vašej báze. Pridajte ju do [[Zobrazenia|zobrazení]], používajte ju vo filtroch, zoraďujte podľa nej a ďalšie.

## Napísanie vzorca

V editore vzorcov zadajte výraz pomocou vlastností, operátorov a funkcií.

### Odkazovanie na vlastnosti

Vo vzorcoch môžete odkazovať na rôzne typy vlastností:

- **Vlastnosti poznámky** — Vlastnosti z [[Vlastnosti|úvodných metadát]] poznámky.
- **Vlastnosti súboru** — Vstavané vlastnosti ako `file.name`, `file.size` alebo `file.mtime`.
- **Vlastnosti vzorcov** — Iné vzorce pomocou `formula.názov_vzorca`.

**Príklady:**

- `price * quantity` — vynásobenie dvoch vlastností poznámky
- `file.name + " - " + description` — kombinácia názvu súboru s vlastnosťou poznámky
- `formula.price_per_unit * 1.1` — použitie inej vlastnosti vzorca

### Používanie operátorov

**Aritmetické operátory** vykonávajú matematické operácie s číslami:

- `price + tax` — sčítanie
- `price - discount` — odčítanie
- `price * quantity` — násobenie
- `price / quantity` — delenie
- `(part / whole) * 100` — použitie zátvoriek pre poradie operácií

**Porovnávacie operátory** porovnávajú hodnoty:

- `price > 100` — väčšie než
- `age < 18` — menšie než
- `status == "Done"` — rovná sa
- `status != "Done"` — nerovná sa
- `file.mtime > now() - '7d'` — porovnanie dátumov

**Boolovské operátory** kombinujú logické podmienky:

- `!completed` — negácia
- `price > 0 && quantity > 0` — a
- `urgent || important` — alebo

Viac informácií v [[Syntax Databáz#Operátory|Syntax Databáz]].

### Používanie funkcií

Funkcie vykonávajú operácie s hodnotami. Dostupné funkcie závisia od typu hodnoty, s ktorou pracujete. Pozrite si kompletný zoznam [[Funkcie|Funkcií]].

**Bežné kategórie funkcií:**

- **Globálne funkcie** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Reťazcové funkcie** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Číselné funkcie** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Dátumové funkcie** — `format()`, `relative()`, `date()`, `time()`
- **Zoznamové funkcie** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Príklady:**

- `if(price, "$" + price.toFixed(2), "")` na definovanie podmienky s formátovaním čísel.
- `file.name.lower()` na konverziu na malé písmená.
- `tags.contains("urgent")` na overenie, či zoznam značiek obsahuje hodnotu.
- `due_date.format("YYYY-MM-DD")` na formátovanie dátumu.

## Príklady vzorcov

### Výpočet termínu

Nastavenie termínu projektu na 2 týždne po dátume začiatku:

```js
start_date + "2w"
```

### Zobrazenie stavu oneskorenia

Zobrazenie "Overdue" ak termín uplynul a stav nie je "Done":

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Formátovanie meny

Zobrazenie ceny s 2 desatinnými miestami a symbolom meny:

```js
if(price, "$" + price.toFixed(2), "")
```

### Počítanie položiek zoznamu

Spočítanie počtu položiek vo vlastnosti zoznamu:

```js
tasks.length
```

### Výpočet skóre priority

Kombinácia viacerých faktorov do skóre priority:

```js
(impact * urgency) / effort
```

### Kombinácia textových polí

Vytvorenie celého mena z krstného mena a priezviska:

```js
first_name + " " + last_name
```

### Výpočet celkových nákladov

Vynásobenie mesačných nákladov počtom mesiacov vlastníctva:

```js
monthlyUses * formula.Owned.round()
```

## Dátové typy

Vzorce pracujú s rôznymi typmi údajov:

- **Reťazce** — Text uzavretý v úvodzovkách: `"hello"` alebo `'world'`
- **Čísla** — Číselné hodnoty: `42`, `3.14`, `(2 + 2)`
- **Boolovské hodnoty** — Pravda alebo nepravda: `true`, `false`
- **Dátumy** — Vytvorené pomocou `date()`, `today()` alebo `now()`
- **Zoznamy** — Kolekcie hodnôt: `[1, 2, 3]`
- **Objekty** — Páry kľúč-hodnota: `{"name": "value"}`

Výstupný typ vzorca je určený použitými údajmi a funkciami.

## Odkazovanie na iné vzorce

Vzorce môžu odkazovať na iné vzorce, čím vytvárajú odvodené výpočty. Napríklad, ak máte vzorec s názvom `price_per_unit`:

```js
price / quantity
```

Môžete naň odkazovať v inom vzorci:

```js
formula.price_per_unit * 1.1
```

> [!warning] Vyhnite sa kruhovým odkazom
> Vzorec nemôže odkazovať na seba samého priamo ani nepriamo cez iné vzorce.
