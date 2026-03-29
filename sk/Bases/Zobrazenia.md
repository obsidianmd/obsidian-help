---
permalink: bases/views
---
Zobrazenia umožňujú organizovať informácie v [[Úvod do Databáz|Databáze]] viacerými spôsobmi. Databáza môže obsahovať niekoľko zobrazení a každé zobrazenie môže mať unikátnu konfiguráciu na zobrazenie, zoradenie a filtrovanie súborov.

Napríklad, môžete chcieť vytvoriť databázu s názvom „Knihy", ktorá má samostatné zobrazenia pre „Zoznam na čítanie" a „Nedávno dočítané".

## Panel nástrojov

V hornej časti databázy sa nachádza panel nástrojov, ktorý umožňuje pracovať so zobrazeniami a ich výsledkami.

- ![[lucide-table.svg#icon]] **Menu zobrazení** — vytváranie, úprava a prepínanie zobrazení.
- **Výsledky** — obmedzenie, kopírovanie a export súborov.
- ![[lucide-arrow-up-down.svg#icon]] **Zoradenie** — zoraďovanie a zoskupovanie súborov.
- ![[lucide-list-filter.svg#icon]] **Filter** — filtrovanie súborov.
- ![[lucide-list.svg#icon]] **Vlastnosti** — výber vlastností na zobrazenie a vytváranie [[Vzorce|vzorcov]].
- ![[lucide-search.svg#icon]] **Hľadať** — vyhľadávanie položiek pomocou zobrazených vlastností.
- ![[lucide-plus.svg#icon]] **Nový** — vytvorenie nového súboru v aktuálnom zobrazení.

## Pridanie a prepínanie zobrazení

Existujú dva spôsoby, ako pridať zobrazenie do databázy:

- Kliknite na názov zobrazenia vľavo hore a vyberte ![[lucide-plus.svg#icon]] **Pridať zobrazenie**.
- Použite [[Paleta príkazov|paletu príkazov]] a vyberte **Bases: Add view**.

Prvé zobrazenie vo vašom zozname zobrazení sa načíta predvolene. Presuňte zobrazenia za ich ikonu, aby ste zmenili ich poradie.

## Nastavenia zobrazenia

Každé zobrazenie má vlastné konfiguračné možnosti. Na úpravu nastavení zobrazenia:

1. Kliknite na názov zobrazenia vľavo hore.
2. Kliknite na šípku doprava vedľa zobrazenia, ktoré chcete konfigurovať.

Prípadne *kliknite pravým tlačidlom* na názov zobrazenia v paneli nástrojov databázy pre rýchly prístup k nastaveniam zobrazenia.

## Rozloženie

Zobrazenia je možné zobraziť s rôznymi rozloženiami vrátane ![[lucide-table.svg#icon]] **tabuľky**, ![[lucide-list.svg#icon]] **zoznamu**, ![[lucide-layout-grid.svg#icon]] **kariet** a ![[lucide-map.svg#icon]] **mapy**. Ďalšie rozloženia je možné pridať pomocou [[Komunitné pluginy|komunitných pluginov]]. Niektoré rozloženia sú stále vo vývoji a vyžadujú [[Verzie s predčasným prístupom|verzie s predčasným prístupom]] Obsidian.

| Rozloženie                          | Popis                                                                                                         | Verzia&nbsp;aplikácie |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------- | --------------------- |
| [[Zobrazenie tabuľky\|Tabuľka]]    | Zobrazí súbory ako riadky v tabuľke. Stĺpce sú vyplnené z [[Vlastnosti\|vlastností]] vo vašich poznámkach.  | 1.9                   |
| [[Zobrazenie kariet\|Karty]]       | Zobrazí súbory ako mriežku kariet. Umožňuje vytvárať zobrazenia typu galéria s obrázkami.                    | 1.9                   |
| [[Zobrazenie zoznamu\|Zoznam]]     | Zobrazí súbory ako [[Základná syntax formátovania#Zoznamy\|zoznam]] s odrážkovými alebo číselnými značkami.  | 1.10                  |
| [[Zobrazenie mapy\|Mapa]]          | Zobrazí súbory ako špendlíky na interaktívnej mape. Vyžaduje plugin Maps.                                    | 1.10                  |


## Filtre

Otvorte menu ![[lucide-list-filter.svg#icon]] **Filter** v hornej časti databázy na pridanie filtrov.

Databáza bez filtrov zobrazuje všetky súbory vo vašom trezore. Filtre zužujú výsledky tak, aby sa zobrazovali len súbory, ktoré spĺňajú konkrétne kritériá. Napríklad, filtre môžete použiť na zobrazenie len súborov s konkrétnou [[Značky|značkou]] alebo v konkrétnom priečinku. K dispozícii je mnoho typov filtrov.

Filtre je možné aplikovať na všetky zobrazenia v databáze, alebo len na jedno zobrazenie výberom z dvoch sekcií v menu ![[lucide-list-filter.svg#icon]] **Filter**.

- **Všetky zobrazenia** aplikuje filtre na všetky zobrazenia v databáze.
- **Toto zobrazenie** aplikuje filtre na aktívne zobrazenie.

#### Komponenty filtra

Filtre majú tri komponenty:

1. **Vlastnosť** — umožňuje vybrať [[Vlastnosti|vlastnosť]] vo vašom trezore, vrátane [[Syntax Databáz#Vlastnosti súboru|vlastností súboru]].
2. **Operátor** — umožňuje vybrať spôsob porovnania podmienok. Zoznam dostupných operátorov závisí od typu vlastnosti (text, dátum, číslo, atď.)
3. **Hodnota** — umožňuje vybrať hodnotu, s ktorou porovnávate. Hodnoty môžu obsahovať matematiku a [[Funkcie|funkcie]].

#### Spojky

- **Všetky z nasledovných sú pravdivé** je príkaz `a` — výsledky sa zobrazia len ak sú splnené *všetky* podmienky v skupine filtrov.
- **Niektoré z nasledovných sú pravdivé** je príkaz `alebo` — výsledky sa zobrazia, ak je splnená *ktorákoľvek* z podmienok v skupine filtrov.
- **Žiadne z nasledovných nie sú pravdivé** je príkaz `nie` — výsledky sa nezobrazia, ak je splnená *ktorákoľvek* z podmienok v skupine filtrov.

#### Skupiny filtrov

Skupiny filtrov umožňujú vytvárať zložitejšiu logiku vytváraním kombinácií spojok.

#### Pokročilý editor filtrov

Kliknite na tlačidlo kódu ![[lucide-code-xml.svg#icon]] na použitie **pokročilého editora filtrov**. Ten zobrazuje surovú [[Syntax Databáz|syntax]] filtra a možno ho použiť s komplexnejšími [[Funkcie|funkciami]], ktoré nie je možné zobraziť pomocou rozhrania s kliknutiami.

## Zoradenie a zoskupovanie výsledkov

Otvorte menu ![[lucide-arrow-up-down.svg#icon]] **Zoradenie** na zoradenie a zoskupenie výsledkov v zobrazení.

Výsledky môžete usporiadať podľa jednej alebo viacerých vlastností vo vzostupnom alebo zostupnom poradí. To uľahčuje zoradiť poznámky podľa názvu, času poslednej úpravy alebo akejkoľvek inej vlastnosti — vrátane vzorcov.

Výsledky môžete tiež zoskupiť podľa vlastnosti na organizáciu podobných položiek do vizuálne odlíšených sekcií. V súčasnosti Obsidian podporuje zoskupovanie len podľa jednej vlastnosti.

### Pridanie zoradenia

1. Otvorte menu ![[lucide-arrow-up-down.svg#icon]] **Zoradenie** v hornej časti zobrazenia.
2. Vyberte vlastnosť, podľa ktorej chcete zoradiť (alebo zoskupiť).
3. Ak máte viacero zoradení, presúvajte ich nahor alebo nadol pomocou ![[lucide-grip-vertical.svg#icon]] úchytu na zmenu ich priority.

Možnosti zoradenia výsledkov závisia od typu vlastnosti:

- **Text**: zoradenie *abecedne* (A→Z) alebo v *opačnom abecednom poradí* (Z→A).
- **Číslo**: zoradenie od *najmenšieho po najväčšie* (0→1) alebo od *najväčšieho po najmenšie* (1→0).
- **Dátum a čas**: zoradenie od *najstaršieho po najnovšie* alebo od *najnovšieho po najstaršie*.

### Odstránenie zoradenia

1. Otvorte menu ![[lucide-arrow-up-down.svg#icon]] **Zoradenie** v hornej časti zobrazenia.
2. Kliknite na tlačidlo ![[lucide-trash-2.svg#icon]] koša vedľa zoradenia alebo zoskupenia, ktoré chcete odstrániť.

## Obmedzenie, kopírovanie a export výsledkov

### Obmedzenie výsledkov

Menu *výsledkov* zobrazuje počet výsledkov v zobrazení. Kliknite na tlačidlo výsledkov na obmedzenie počtu výsledkov a prístup k ďalším akciám.

### Kopírovať do schránky

Táto akcia skopíruje zobrazenie do vašej schránky. Zo schránky ho môžete prilepiť do Markdown súboru alebo do iných dokumentových aplikácií vrátane tabuľkových procesorov ako Google Sheets, Excel a Numbers.

### Export CSV

Táto akcia uloží CSV vášho aktuálneho zobrazenia.

## Vloženie zobrazenia

Súbory databáz môžete vložiť do [[Vkladanie súborov|akéhokoľvek iného súboru]] pomocou syntaxe `![[Súbor.base]]`. Použije sa prvé zobrazenie v zozname. Poradie môžete zmeniť presúvaním zobrazení v menu zobrazení.

Na určenie predvoleného zobrazenia pre vloženie použite `![[Súbor.base#Zobrazenie]]`.
