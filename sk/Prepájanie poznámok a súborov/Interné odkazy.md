---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Naučte sa, ako odkazovať na poznámky, prílohy a ďalšie súbory z vašich poznámok pomocou interných odkazov.'
---
Naučte sa, ako odkazovať na poznámky, prílohy a ďalšie súbory z vašich poznámok pomocou _interných odkazov_. Prepojením poznámok môžete vytvoriť sieť znalostí. ^b15695

Obsidian môže automaticky aktualizovať interné odkazy vo vašom trezore, keď premenujete súbor. Ak chcete byť namiesto toho vyzvaní, môžete to vypnúť v:

**[[Nastavenia]]** → **[[Nastavenia#Súbory a odkazy|Súbory a odkazy]]** → **[[Nastavenia#Vždy aktualizovať interné odkazy|Vždy aktualizovať interné odkazy]]**.

## Podporované formáty pre interné odkazy

Obsidian podporuje nasledujúce formáty odkazov:

- Wiki odkaz: `[[Three laws of motion]]` alebo `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` alebo `[Three laws of motion](Three%20laws%20of%20motion.md)`

Uvedené príklady sú ekvivalentné a v editore sa zobrazujú rovnako a odkazujú na rovnakú poznámku.

> [!note] Poznámka
> Pri použití formátu Markdown sa uistite, že cieľ odkazu je [URL kódovaný](https://en.wikipedia.org/wiki/Percent-encoding). Napríklad medzery sa zmenia na `%20`.

Predvolene, vďaka kompaktnejšiemu formátu, Obsidian generuje odkazy vo formáte wiki odkazov. Ak je pre vás dôležitá interoperabilita, môžete wiki odkazy vypnúť a namiesto toho používať Markdown odkazy.

Pre použitie formátu Markdown:

1. Otvorte **[[Nastavenia]]**.
2. V časti **Súbory a odkazy** vypnite **Používať \[\[Wiki odkazy\]\]**.

Aj keď formát wiki odkazov vypnete, stále môžete automaticky dopĺňať odkazy zadaním dvoch hranatých zátvoriek `[[`. Keď vyberiete jeden z navrhovaných súborov, Obsidian namiesto toho vygeneruje Markdown odkaz.

> [!note] Neplatné znaky
> Reťazec obsahujúci nasledujúce znaky nemusí fungovať ako odkaz: `# | ^ : %% [[ ]]`.
>
> Odporúčame vyhnúť sa používaniu týchto znakov a dodržiavať [bezpečné postupy pomenovania súborov](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names).

## Odkaz na súbor

Pre vytvorenie odkazu v režime úprav použite jeden z nasledujúcich spôsobov:

- Napíšte `[[` v editore a potom vyberte súbor, na ktorý chcete vytvoriť odkaz.
- Vyberte text v editore a potom napíšte `[[`.
- Otvorte [[Paleta príkazov|paletu príkazov]] a vyberte Pridať interný odkaz.

![[Rýchly prepínač#^search-autocomplete-large]]

Hoci môžete odkazovať na akýkoľvek z [[Akceptované formáty súborov|akceptovaných formátov súborov]], odkazy na súborové formáty iné ako Markdown musia obsahovať príponu súboru, napríklad `[[Figure 1.png]]`.

> [!tip] Pridaním výkričníka (!) pred interný odkaz môžete vložiť prepojený obsah. Viac podrobností nájdete v časti [[Vkladanie súborov]].

> [!info] Vylúčené súbory
> Súbory zodpovedajúce vašim vzorcom [[Nastavenia#Vylúčené súbory|Vylúčených súborov]] majú zníženú prioritu v návrhoch odkazov pri vytváraní interných odkazov.

## Odkaz na nadpis v poznámke

Môžete odkazovať na konkrétne nadpisy v poznámkach, známe aj ako _kotviace odkazy_.

**Odkaz na nadpis v rámci tej istej poznámky**

Pre odkaz na nadpis v rámci tej istej poznámky napíšte `[[#` a zobrazí sa zoznam nadpisov v poznámke, na ktoré môžete odkazovať.

Napríklad `[[#Náhľad prepojeného súboru]]` vytvorí odkaz na [[#Náhľad prepojeného súboru]].

**Odkaz na nadpis v inej poznámke**

Pre odkaz na nadpis v inej poznámke pridajte mriežku (`#`) na koniec cieľa odkazu, za ktorou nasleduje text nadpisu.

Napríklad `[[O Obsidian#Odkazy sú prvoradé]]` vytvorí odkaz na [[O Obsidian#Odkazy sú prvoradé]].

**Odkaz na podnadpisy**

Môžete pridať viacero znakov mriežky pre každý podnadpis.

Napríklad `[[Nápoveda a podpora#Questions and advice#Report bugs and request features]]` vytvorí odkaz na [[Nápoveda a podpora#Questions and advice#Report bugs and request features]].

**Vyhľadávanie nadpisov v celom trezore**

Pre vyhľadávanie nadpisov v celom trezore použite syntax `[[## nadpis]]`.

Napríklad `[[##` bude vyhľadávať všeobecne v celom trezore, zatiaľ čo `[[## team]]` vyhľadá všetky nadpisy obsahujúce slovo _team_.

> [!info]- Snímka obrazovky vyhľadávania odkazu na nadpis
>
> ![[internal-links-header.png#interface]]

## Odkaz na blok v poznámke

Blok je jednotka textu vo vašej poznámke, ako napríklad odsek, bloková citácia alebo položka zoznamu.

Na blok môžete odkazovať pridaním `#^` na koniec cieľa odkazu, za ktorým nasleduje jedinečný identifikátor bloku. Napríklad: `[[2023-01-01#^37066d]]`. Našťastie nemusíte identifikátor hľadať manuálne — keď napíšete striešku (`^`), zobrazí sa zoznam návrhov, ktorý vám umožní vybrať správny blok.

Pre *jednoduché odseky* umiestnite medzeru nasledovanú strieškou `^` a identifikátorom bloku na koniec riadku:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

Pre *štruktúrované bloky* (zoznamy, citácie, zvýraznené bloky, tabuľky) by mal byť identifikátor bloku na samostatnom riadku s prázdnym riadkom pred a za ním:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

Pre *konkrétne riadky v zozname* môže byť identifikátor bloku umiestnený priamo na odrážke:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Nepodporujeme odkazy na konkrétne časti citácií, zvýraznených blokov a tabuliek.

**Vyhľadávanie blokov v celom trezore**

Bloky na prepojenie môžete vyhľadávať aj v celom trezore pomocou syntaxe `[[^^blok]]`. Avšak viac položiek sa kvalifikuje ako bloky v porovnaní s [[#Odkaz na nadpis v poznámke|odkazmi na nadpisy]], takže tento zoznam bude oveľa dlhší.

> [!info]- Snímka obrazovky vyhľadávania odkazu na blok
> ![[link-block-heading.png#interface]]

Môžete tiež vytvoriť ľudsky čitateľné identifikátory blokov pridaním medzery nasledovanej strieškou (`^`) a identifikátorom. Identifikátory blokov môžu pozostávať iba z latinských písmen, číslic a pomlčiek.

Napríklad pridajte `^quote-of-the-day` na koniec bloku:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Teraz môžete na blok odkazovať napísaním `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Interoperabilita
> Odkazy na bloky sú špecifické pre Obsidian a nie sú súčasťou štandardného formátu Markdown. Odkazy obsahujúce referencie na bloky nebudú fungovať mimo Obsidian.

## Zmena zobrazovaného textu odkazu

Predvolene Obsidian zobrazuje text odkazu tak, ako sa objaví. Napríklad:
- `[[Example]]` sa zobrazí ako [[Example]]
- `[[Example#Details]]` sa zobrazí ako [[Example#Details]]

Spôsob zobrazenia odkazu môžete zmeniť prispôsobením jeho zobrazovaného textu:

**Formát wiki odkazov**:
Použite zvislú čiaru (`|`) na zmenu zobrazovaného textu.

- `[[Example|Vlastný názov]]` sa zobrazí ako [[Example|Vlastný názov]]
- `[[Example#Details|Názov sekcie]]` sa zobrazí ako [[Example#Details|Názov sekcie]]

**Formát Markdown**:
Použite `[Zobrazovaný text](URL odkazu)` na prispôsobenie zobrazenia odkazu.

- `[Vlastný názov](Example.md)` sa zobrazí ako [Vlastný názov](Example.md)
- `[Názov sekcie](Example.md#Details)` sa zobrazí ako [Názov sekcie](Example.md#Details)

Táto metóda je užitočná pre jednorazové situácie, kedy chcete zmeniť vzhľad odkazu v konkrétnom kontexte. Ak chcete nastaviť alternatívny názov odkazu, ktorý môžete opakovane používať v celom trezore, zvážte použitie [[Aliasy|aliasu]].

Napríklad, ak pravidelne odkazujete na `[[Three laws of motion]]` ako `[[The 3 laws]]`, pridanie „3 laws" ako aliasu vám umožní napísať len to — bez potreby pridávať vlastný zobrazovaný text zakaždým.

> [!tip] Tip
> Použite [[#Zmena zobrazovaného textu odkazu|zobrazovaný text odkazu]], keď chcete prispôsobiť vzhľad odkazu *na konkrétnom mieste*.
>
> Použite [[Aliasy|aliasy]], keď chcete odkazovať na rovnakú poznámku pomocou *rôznych názvov* v celom trezore.
^callout-internal-links-link-text

## Náhľad prepojeného súboru

> [!note] Poznámka
> Pre náhľad prepojených súborov musíte najprv povoliť [[Náhľad poznámky]].

Pre náhľad prepojeného súboru podržte kurzor nad interným odkazom. V režime úprav stlačte `Ctrl` (alebo `Cmd` na macOS) počas podržania kurzora nad odkazom. Vedľa kurzora sa zobrazí náhľad obsahu súboru.
