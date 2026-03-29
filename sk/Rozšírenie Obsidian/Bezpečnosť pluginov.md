---
permalink: plugin-security
---
Tím Obsidian berie bezpečnosť vážne. Táto stránka vysvetľuje riziká spojené s inštaláciou komunitných pluginov a čo tím Obsidian robí na ich riešenie.

## Obmedzený režim

V predvolenom nastavení Obsidian beží v obmedzenom režime, aby zabránil spúšťaniu kódu tretích strán. Obmedzený režim vypnite len vtedy, ak dôverujete autorom pluginov, ktoré inštalujete.

Vypnutie obmedzeného režimu:

1. Otvorte **[[Nastavenia]]**.
2. V bočnom menu vyberte **Komunitné pluginy**.
3. Vyberte **Zapnúť komunitné pluginy**.

Zapnutie obmedzeného režimu:

1. Otvorte **[[Nastavenia]]**.
2. V bočnom menu vyberte **Komunitné pluginy**.
3. Vedľa **Obmedzený režim** vyberte **Zapnúť**.

Nainštalované pluginy zostanú vo vašom trezore aj po zapnutí obmedzeného režimu, ale Obsidian ich bude ignorovať.

## Schopnosti pluginov

Kvôli technickým obmedzeniam Obsidian nemôže spoľahlivo obmedziť pluginy na konkrétne oprávnenia alebo úrovne prístupu. To znamená, že pluginy zdedia úrovne prístupu Obsidian. Preto zvážte nasledujúce príklady toho, čo komunitné pluginy môžu robiť:

- Komunitné pluginy môžu pristupovať k súborom na vašom počítači.
- Komunitné pluginy sa môžu pripojiť na internet.
- Komunitné pluginy môžu inštalovať ďalšie programy.

> [!tip] 
> Ak pracujete s citlivými údajmi a chcete nainštalovať komunitný plugin, odporúčame vykonať nezávislý bezpečnostný audit pluginu pred jeho použitím.

## Proces kontroly pluginov

Komunitné pluginy prechádzajú počiatočnou kontrolou pri odoslaní do obchodu s pluginmi. Všetky pluginy musia dodržiavať [Vývojárske zásady Obsidian](https://docs.obsidian.md/Developer+policies).

Tím Obsidian je malý a nemôže manuálne kontrolovať každú novú verziu komunitných pluginov. Namiesto toho sa spoliehame na pomoc komunity pri identifikácii a nahlasovaní problémov s pluginmi.

- Ak objavíte akékoľvek menšie bezpečnostné zraniteľnosti v komunitnom plugine, pozrite si súbor `security.md` alebo `readme.md` autora pluginu, kde nájdete informácie o nahlasovaní. V prípade kritických chýb nahláste problém aj [[Nápoveda a podpora#Kontaktovať podporu Obsidian|podpore Obsidian]].
- Ak máte podozrenie, že komunitný plugin je škodlivý, nahláste ho [[Nápoveda a podpora#Kontaktovať podporu Obsidian|podpore Obsidian]] alebo odošlite priamu správu našim moderátorom.
