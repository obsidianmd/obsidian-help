---
permalink: bases/views/kanban
---
Kanban je typ [[Zobrazenia|zobrazenia]], ktorý môžete použiť v [[Úvod do Databáz|Databázach]].

Vyberte ![[lucide-kanban-square.svg#icon]] **Kanban** z menu zobrazenia na zobrazenie súborov ako kariet usporiadaných do stĺpcov. Každý stĺpec reprezentuje hodnotu vlastnosti použitej na zoskupenie výsledkov.


> [!note] Vyžaduje Obsidian 1.14+
> Kanban zobrazenia sú dostupné v Obsidian 1.14 a novšom.


## Zoskupenie kariet do stĺpcov

Kanban zobrazenie vyžaduje vlastnosť na zoskupenie výsledkov.

1. Vyberte **Skupina** na paneli nástrojov. Na telefónoch vyberte **Zobrazenie → Skupina**.
2. Pod **Zoskupiť podľa** zvoľte vlastnosť.

Súbory bez hodnoty pre vybranú vlastnosť sa zobrazujú v stĺpci **Žiadna hodnota**.

> [!info] 
> Ak zoskupujete podľa vzorca alebo vlastnosti súboru inej ako `file.folder`, nemôžete presúvať karty ani stĺpce, ani vytvárať poznámky zo stĺpcov. Stále môžete [[Zobrazenia#Zmena poradia, skrytie a pridanie skupín|spravovať poradie a viditeľnosť skupín]] v menu **Skupina**.

## Práca s kartami a stĺpcami

- Presuňte kartu do iného stĺpca na aktualizáciu zoskupenej vlastnosti v danej poznámke. Medzi stĺpcami je možné presúvať iba Markdown poznámky, s výnimkou zoskupenia podľa `file.folder`, kde presunutie karty presunie súbor do daného priečinka.
- Vyberte ikonu plus v záhlaví stĺpca alebo ![[lucide-plus.svg#icon]] **Nový** v spodnej časti stĺpca na vytvorenie poznámky s hodnotou daného stĺpca.
- Presuňte záhlavie stĺpca na zmenu poradia stĺpcov. Na obnovenie automatického poradia otvorte **Skupina** a zvoľte automatické zoradenie namiesto **Ručne**.
- Použite **Skupina** na [[Zobrazenia#Zmena poradia, skrytie a pridanie skupín|zmenu poradia, skrytie alebo pridanie stĺpcov]].
- Použite menu ![[lucide-list.svg#icon]] **Vlastnosti** na výber vlastností zobrazených na každej karte. Prvá vlastnosť sa zobrazuje ako nadpis karty.

## Nastavenia

Nastavenia Kanban zobrazenia je možné konfigurovať v [[Zobrazenia#Nastavenia zobrazenia|Nastaveniach zobrazenia]].

- Skryť prázdne stĺpce
- Šírka stĺpca
- Vlastnosť obrázka
- Prispôsobenie obrázka
- Pomer strán obrázka

### Skryť prázdne stĺpce

Skryje stĺpce, ktoré neobsahujú žiadne karty.

### Šírka stĺpca

Definuje šírku každého stĺpca a jeho kariet.

### Vlastnosť obrázka

Kanban karty podporujú voliteľný obrázok obálky, ktorý sa zobrazuje v hornej časti karty. Podporované hodnoty vlastnosti sú rovnaké ako pre [[Zobrazenie kariet#Vlastnosť obrázka|vlastnosť obrázka v Zobrazení kariet]].

### Prispôsobenie obrázka

Ak máte nakonfigurovanú vlastnosť obrázka, táto možnosť určuje, ako sa obrázok zobrazuje na karte.

- **Obálka:** Obrázok vyplní oblasť obsahu karty. Ak sa nezmestí, obrázok sa oreže.
- **Obsah:** Obrázok sa zmenší, kým sa zmestí do oblasti obsahu karty. Obrázok sa neoreže.

### Pomer strán obrázka

Výška obrázka obálky je určená jeho pomerom strán. Upravte túto možnosť na zmenšenie alebo zväčšenie výšky obrázka.
