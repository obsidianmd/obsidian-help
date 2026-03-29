---
permalink: bases/views/table
---
Tabuľka je typ [[Zobrazenia|zobrazenia]], ktoré môžete použiť v [[Úvod do Databáz|Databázach]].

Vyberte ![[lucide-table.svg#icon]]  **Tabuľka** z ponuky zobrazení na zobrazenie súborov ako tabuľky s riadkom pre každý súbor a stĺpcami pre [[Vlastnosti]] daného súboru.

![Príklad databázy zobrazujúcej tabuľkové zobrazenie so zoznamom kníh](bases-noshadow.png#interface)

## Nastavenia

Nastavenia zobrazenia tabuľky je možné konfigurovať v [[Zobrazenia#Nastavenia zobrazenia|Nastaveniach zobrazenia]].

### Výška riadka

Výška riadka vám umožňuje zobraziť viac informácií. Vyberte si medzi **nízka**, **stredná**, **vysoká** a **extra vysoká**.

## Súhrny

K stĺpcu tabuľky môžete pridať súhrny na rýchly výpočet hodnôt ako súčty, priemery alebo počty pre riadky aktuálne viditeľné v zobrazení.

Súhrny sú viazané na zobrazenie, nie na databázu. Každé zobrazenie môže zobrazovať rôzne súhrny pre ten istý stĺpec.

### Pridanie súhrnu

1. Kliknite pravým tlačidlom myši na hlavičku stĺpca v zobrazení tabuľky.
2. Vyberte ![[lucide-calculator.svg#icon]] **Súhrn…**.
3. Vyberte jednu zo vstavaných súhrnných funkcií, alebo zvoľte ![[lucide-square-function.svg#icon]] **Pridať súhrn** na definovanie vlastného.

Súhrn sa zobrazí v spodnej časti stĺpca. Keď sú výsledky [[Zobrazenia#Zoradiť a zoskupiť výsledky|zoskupené]], súhrn pre každú skupinu sa zobrazí na vrchu skupiny.

Po pridaní riadku súhrnu môžete pridať ďalšie súhrny pre iné stĺpce kliknutím na bunku súhrnu. Riadok súhrnu sa skryje, ak sú všetky súhrny odstránené.

### Vstavané súhrny

Nasledujúce súhrny sú dostupné predvolene. Možnosti sa môžu líšiť v závislosti od typu vlastnosti.

#### Všetky typy vlastností

- **Žiadna hodnota**: počet riadkov bez hodnoty.
- **Vyplnené**: počet riadkov s hodnotou.
- **Unikátny**: počet odlišných hodnôt.

#### Čísla

- **Priemer**: priemer všetkých číselných hodnôt.
- **Maximum**: najväčšia hodnota.
- **Medián**: stredná hodnota.
- **Minimum**: najmenšia hodnota.
- **Rozsah**: rozdiel medzi maximom a minimom.
- **Smerodajná odchýlka**: smerodajná odchýlka.
- **Súčet**: súčet všetkých hodnôt.

#### Dátumy

- **Najstarší**: najmenší/najstarší dátum.
- **Najnovší**: najväčší/najnovší dátum.
- **Rozsah**: rozdiel medzi najstarším a najnovším.

#### Začiarkavacie políčko

- **Začiarknuté**: počet riadkov, kde je začiarkavacie políčko zapnuté.
- **Nezačiarknuté**: počet riadkov, kde je začiarkavacie políčko vypnuté.

### Vlastné súhrny

Môžete definovať vlastný súhrn pomocou vzorca:

1. V ponuke ![[lucide-calculator.svg#icon]] **Súhrn…** zvoľte ![[lucide-square-function.svg#icon]] **Pridať súhrn**.
2. Pomenujte súhrn.
3. Zadajte vzorec. Vzorec sa spustí nad zoznamom hodnôt v danom stĺpci (napríklad pomocou [[Funkcie|funkcie]] ako `values.reduce(...)`).
4. Uložte súhrn.

Vlastné súhrny sú užitočné, keď potrebujete výpočet, ktorý nie je pokrytý vstavanými možnosťami.

## Skratky

V zobrazení tabuľky sa môžete rýchlo pohybovať pomocou nasledujúcich myšových a [[Klávesové skratky úprav|klávesových skratiek]].

- Shift-kliknutie vytvorí výber buniek.
- Kliknite pravým tlačidlom myši na výber buniek pre prístup k ďalším akciám pre tieto súbory.

| Akcia                                                                                                                           | Skratka             | macOS               |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------- |
| Kopírovať vybrané bunky                                                                                                        | `Ctrl+C`            | `Cmd+C`             |
| Prilepiť vybrané bunky                                                                                                         | `Ctrl+V`            | `Cmd+V`             |
| Vrátiť zmeny vlastností späť                                                                                                   | `Ctrl+Z`            | `Cmd+Z`             |
| Znova vykonať zmeny vlastností                                                                                                  | `Ctrl+Shift+Z`      | `Cmd+Shift+Z`       |
| Vybrať všetky bunky v aktuálnej skupine                                                                                        | `Ctrl+A`            | `Cmd+A`             |
| Vybrať všetky bunky v danom smere                                                                                               | `Ctrl+Shift+Arrow`  | `Ctrl+Shift+Arrow`  |
| Vybrať stĺpec                                                                                                                  | `Ctrl+Space`        |                     |
| Vybrať riadok                                                                                                                   | `Shift+Space`       |                     |
| Aktivovať aktuálnu bunku — pre začiarkavacie políčka prepne stav, pre vzorce otvorí editor vzorcov                             | `Enter`             |                     |
| Prejsť na prvý stĺpec                                                                                                         | `Home`              |                     |
| Prejsť na posledný stĺpec                                                                                                     | `End`               |                     |
| Navigácia hore a dole o výšku stránky                                                                                          | `PageUp`,`PageDown` |                     |
| Zrušiť aktuálny výber buniek                                                                                                   | `Esc`               |                     |
| Vymazať aktuálne bunky                                                                                                         | `Backspace`         |                     |
| Prejsť na nasledujúcu bunku                                                                                                    | `Tab`               |                     |
| Prejsť na predchádzajúcu bunku                                                                                                 | `Shift-Tab`         |                     |
