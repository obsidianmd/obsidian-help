---
permalink: bases/views/kanban
---
Kanban je typ [[Zobrazenia|zobrazenia]], ktorý môžete použiť v [[Úvod do Databáz|Databázach]].

Vyberte ![[lucide-kanban-square.svg#icon]] **Kanban** z menu zobrazenia na zobrazenie súborov ako kariet usporiadaných do stĺpcov. Každý stĺpec reprezentuje hodnotu vlastnosti použitej na zoskupenie výsledkov.


> [!warning] Vyžaduje Obsidian 1.14+
> Kanban zobrazenia vyžadujú Obsidian 1.14, ktorý je momentálne vo [[Verzie s predčasným prístupom|verzii s predčasným prístupom]].


## Zoskupenie kariet do stĺpcov

Kanban zobrazenie vyžaduje vlastnosť na zoskupenie výsledkov.

1. Vyberte ![[lucide-arrow-up-down.svg#icon]] **Zoradiť** na paneli nástrojov.
2. Pod **Zoskupiť podľa** vyberte **Vlastnosť** a zvoľte vlastnosť.

Súbory bez hodnoty pre vybranú vlastnosť sa zobrazujú v stĺpci **Žiadna hodnota**.

> [!info] 
> Ak zoskupujete podľa vzorca alebo vlastnosti súboru, nemôžete presúvať karty ani stĺpce, ani vytvárať poznámky zo stĺpcov. Tieto vlastnosti nie je možné upraviť presunutím karty.

## Práca s kartami a stĺpcami

- Presuňte kartu do iného stĺpca na aktualizáciu zoskupenej vlastnosti v danej poznámke. Medzi stĺpcami je možné presúvať iba Markdown poznámky.
- Vyberte ikonu plus v záhlaví stĺpca alebo ![[lucide-plus.svg#icon]] **Nový** v spodnej časti stĺpca na vytvorenie poznámky s hodnotou daného stĺpca.
- Presuňte záhlavie stĺpca na zmenu poradia stĺpcov. Na obnovenie pôvodného poradia kliknite pravým tlačidlom na stĺpec a vyberte **Obnoviť poradie**.
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
