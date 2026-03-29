---
permalink: symlinks
---
Vo svojom trezore môžete používať [symbolické odkazy](https://en.wikipedia.org/wiki/Symbolic_link) (symlinky) a [spojenia](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) na ukladanie súborov mimo trezora a [[Ako Obsidian ukladá dáta#Globálne nastavenia|systémového priečinka]].

> [!danger] Používajte na vlastné riziko
> Dôrazne neodporúčame používať symbolické odkazy. Používaním symbolických odkazov a spojení vo svojom trezore riskujete stratu alebo poškodenie dát, prípadne pád Obsidianu. Uistite sa, že vykonávate pravidelné zálohy vášho trezora a nastavení.

Nižšie sú uvedené niektoré obmedzenia alebo problémy, o ktorých vieme a na ktoré by ste mali pamätať:

- Slučky symlinkov nie sú povolené, aby sa zabránilo pádu Obsidianu kvôli nekonečnej slučke.
- Ciele symlinkov musia byť úplne oddelené od koreňového priečinka trezora alebo akýchkoľvek iných cieľov symlinkov. Oddelené znamená, že jeden priečinok neobsahuje druhý a naopak. Obsidian ignoruje akýkoľvek symlink na nadradený priečinok trezora alebo z jedného priečinka v trezore na iný priečinok v tom istom trezore. Je to ochranné opatrenie, ktoré zabezpečuje, aby ste nemali duplicitné súbory vo svojom trezore, čo by mohlo spôsobiť nejednoznačnosť odkazov.
- Symlinky nemusia dobre fungovať s Obsidian Sync ani s _akýmkoľvek iným druhom synchronizácie_. Ak je cieľ symlinku priečinok, ktorý je synchronizovaný iným trezorem Obsidian, môžete (potenciálne) skončiť s konfliktmi synchronizácie alebo stratou dát. Niektoré synchronizačné nástroje, ako napríklad Git, nenasledujú symlinky, ale synchronizujú _cestu_, na ktorú symlink ukazuje, čo môže priniesť nežiaduce výsledky, ak takýmto spôsobom zdieľate svoj trezor s inými ľuďmi.
- Správca súborov Obsidian nemôže presúvať súbory cez hranice zariadení, takže ak vytvoríte symlink na priečinok na inom disku ako váš trezor, nebudete môcť presúvať súbory medzi týmto priečinkom a inými priečinkami pomocou prieskumníka súborov Obsidian. (Na takéto presuny budete musieť použiť prieskumník vášho operačného systému a Obsidian bude vnímať presun ako odstránenie a vytvorenie nového súboru. Taktiež _neaktualizuje_ žiadne odkazy, ktoré záviseli od cesty tohto súboru.)
- Súborové symlinky (na rozdiel od priečinkových symlinkov) _môžu_ fungovať, ale v súčasnosti nie sú oficiálne podporované. Zmeny vykonané mimo Obsidian nie sú sledované, takže ak súbor zmeníte priamo, Obsidian zmenu nezistí, neaktualizuje vyhľadávacie indexy atď.
- Vytváranie symlinkov na položky v priečinku `.obsidian/` s cieľom ich zdieľania medzi trezormi **má vysokú pravdepodobnosť poškodenia vašich nastavení**, pokiaľ _skutočne_ neviete, čo robíte. Ak sa rozhodnete ísť touto cestou, aspoň si vytvorte zálohy.
