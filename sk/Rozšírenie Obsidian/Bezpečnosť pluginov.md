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

Všetky komunitné pluginy musia dodržiavať [Vývojárske zásady Obsidian](https://docs.obsidian.md/Developer+policies). Obsidian automaticky skenuje každú verziu pluginu na bezpečnostné zraniteľnosti, problémy s kvalitou kódu a škodlivý softvér. Stránka každého pluginu v [adresári pluginov](https://community.obsidian.md) zobrazuje výsledky ako bezpečnostnú hodnotiacu kartu.

Manuálne kontroly pokračujú pre populárne, odporúčané a označené pluginy.

- Ak objavíte bezpečnostnú zraniteľnosť v komunitnom plugine, pozrite si súbor `security.md` alebo `readme.md` autora pluginu, kde nájdete informácie o nahlasovaní. V prípade kritických chýb nahláste problém aj [[Nápoveda a podpora#Kontaktovať podporu Obsidian|podpore Obsidian]].
- Ak máte podozrenie, že komunitný plugin je škodlivý, môžete ho nahlásiť priamo z jeho stránky v adresári pluginov, nahlásiť ho [[Nápoveda a podpora#Kontaktovať podporu Obsidian|podpore Obsidian]] alebo odoslať priamu správu našim moderátorom.
