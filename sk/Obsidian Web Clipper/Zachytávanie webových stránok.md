---
permalink: web-clipper/capture
---
Po nainštalovaní rozšírenia prehliadača [[Úvod do Obsidian Web Clipper|Web Clipper]] k nemu môžete pristupovať niekoľkými spôsobmi, v závislosti od vášho prehliadača:

1. Ikona Obsidian na paneli nástrojov vášho prehliadača.
2. Klávesové skratky na aktiváciu rozšírenia z klávesnice.
3. Kontextové menu kliknutím pravým tlačidlom myši na webovú stránku, ktorú navštevujete.

Na uloženie stránky do Obsidian kliknite na tlačidlo **Pridať do Obsidian**.

## Zachytenie stránky

Keď otvoríte rozšírenie, Web Clipper extrahuje dáta z aktuálnej webovej stránky podľa nastavení vo vašej [[Obsidian Web Clipper/Šablóny|šablóne]]. Môžete si vytvoriť vlastné šablóny a prispôsobiť výstup pomocou [[Premenné|premenných]] a [[Filtre|filtrov]].

V predvolenom nastavení sa Web Clipper pokúša inteligentne extrahovať iba hlavný obsah článku, pričom vynechá ostatné prvky na stránke. Toto správanie však môžete prepísať nasledujúcimi spôsobmi:

- Ak je prítomná vlastná šablóna, použije sa vaša šablóna.
- Ak je prítomný výber, použije sa výber. Môžete použiť `Ctrl/Cmd+A` na výber celej stránky.
- Ak sú prítomné nejaké [[Zvýrazňovanie webových stránok|zvýraznenia]], použijú sa zvýraznenia.

## Stiahnutie obrázkov

Obrázky sa pri použití Web Clipper nesťahujú automaticky. Namiesto toho obrázky odkazujú na svoju webovú URL adresu. To šetrí miesto vo vašom trezore, ale znamená to, že obrázky nebudú prístupné offline alebo ak URL adresa prestane fungovať.

Obrázky pre ľubovoľný súbor v Obsidian môžete stiahnuť pomocou [[Paleta príkazov|príkazu]] s názvom **Stiahnuť prílohy pre aktuálny súbor**. Tento príkaz je možné v Obsidian namapovať aj na klávesovú skratku.

## Klávesové skratky

Web Clipper obsahuje klávesové skratky, ktoré môžete použiť na zrýchlenie pracovného postupu. Na zmenu mapovaní klávesov prejdite do **Nastavenia Web Clipper** → **Všeobecné** a postupujte podľa pokynov pre váš prehliadač. Mapovanie je možné zmeniť pre všetky prehliadače okrem Safari, ktorý nepodporuje úpravu klávesových skratiek.

| Akcia                      | macOS          | Windows/Linux   |
| -------------------------- | -------------- | --------------- |
| Otvoriť clipper            | `Cmd+Shift+O`  | `Ctrl+Shift+O`  |
| Rýchle zachytenie          | `Opt+Shift+O`  | `Alt+Shift+O`   |
| Prepnúť režim zvýrazňovača | `Opt+Shift+H`  | `Alt+Shift+H`   |

## Funkcie rozhrania

Rozhranie Web Clipper je rozdelené do štyroch sekcií:

1. **Hlavička**, kde môžete prepínať šablóny, zapnúť [[Zvýrazňovanie webových stránok|zvýrazňovanie]], [[Čítačka|režim čítania]] a pristúpiť k nastaveniam.
2. **Vlastnosti** zobrazujú [[Vlastnosti|metadáta]] extrahované zo stránky, ktoré sa uložia ako [[Vlastnosti]] v Obsidian.
3. **Obsah poznámky**, ktorý sa uloží do Obsidian.
4. **Päta** umožňuje vybrať trezor a priečinok a pridať do Obsidian.

Funkcie hlavičky zahŕňajú:

- Rozbaľovací zoznam **Šablóna** na prepínanie medzi uloženými [[Obsidian Web Clipper/Šablóny|šablónami]] pridanými v nastaveniach Web Clipper.
- Tlačidlo **Viac (...)** na zobrazenie premenných stránky, ktoré môžete použiť v šablónach.
- Tlačidlo **Zvýrazňovač** na zapnutie [[Zvýrazňovanie webových stránok|zvýrazňovania]].
- Tlačidlo **Ozubené koliesko** na otvorenie nastavení Web Clipper.

Funkcie päty zahŕňajú:

- Tlačidlo **Pridať do Obsidian** na uloženie dát do Obsidian.
- Rozbaľovací zoznam **Trezor** na prepínanie medzi uloženými trezormi pridanými v nastaveniach Web Clipper.
- Pole **Priečinok** na definovanie priečinka, do ktorého sa má uložiť.
- **Interpret** na spustenie [[Interpretácia webových stránok|výziev v prirodzenom jazyku]] na stránke.
