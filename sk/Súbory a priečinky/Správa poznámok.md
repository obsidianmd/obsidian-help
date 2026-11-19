---
permalink: manage-notes
publish: true
mobile: false
description: null
---
Súbory a priečinky môžete spravovať niekoľkými spôsobmi, pomocou [[Klávesové skratky|klávesových skratiek]], [[Paleta príkazov|príkazov]] alebo [[Prieskumník súborov|prieskumníka súborov]].

## Vytvorenie novej poznámky

Na vytvorenie nového súboru:

1. Stlačte `Ctrl+N` (alebo `Cmd+N` na macOS).
2. Zadajte názov poznámky a potom stlačte `Enter` na začatie úprav poznámky.

Poznámky môžete vytvárať aj pomocou [[Prieskumník súborov#Vytvorenie novej poznámky|prieskumníka súborov]] alebo výberom možnosti **Vytvoriť novú poznámku** z [[Paleta príkazov|palety príkazov]].

> [!hint] Obmedzenie systémových znakov
> Obsidian rešpektuje obmedzenia názvov súborov operačného systému, na ktorom poznámku vytvárate. Ak plánujete [[Synchronizácia poznámok medzi zariadeniami|synchronizovať poznámky medzi zariadeniami]], uistite sa, že názvy súborov sú [bezpečné pre ostatné operačné systémy](https://stackoverflow.com/q/1976007).
^blockquote-system-limitation

## Otváranie súborov mimo vášho trezora

Na desktope môžete otvárať a upravovať jednotlivé Markdown súbory mimo vášho trezora. Súbory sa otvoria v aktuálnom okne a zostanú na pôvodnom mieste.

> [!note] Vyžaduje Obsidian 1.14 a najnovší inštalátor
> [[Aktualizácia Obsidian#Aktualizácie inštalátora|Aktualizujte svoj inštalátor]] stiahnutím Obsidianu z [obsidian.md/download](https://obsidian.md/download) a preinštalovaním aplikácie.

Na otvorenie Markdown súboru:

1. Otvorte [[Paleta príkazov|paletu príkazov]].
2. Vyberte **Otvoriť súbor mimo trezora...**.
3. Vyberte Markdown súbor na vašom počítači.

Môžete tiež použiť ponuku **Otvoriť pomocou** vášho operačného systému a vybrať **Obsidian**. Ak chcete predvolene otvárať Markdown súbory v Obsidiane, nastavte ho ako predvolenú aplikáciu pre súbory `.md`.

Vložené obrázky a odkazy na iné lokálne súbory sa rozlišujú relatívne k priečinku Markdown súboru. Použite [[Osnova|osnovu]] na navigáciu medzi nadpismi a [[Odchádzajúce odkazy|odchádzajúce odkazy]] na prehliadanie prepojených súborov.

### Náhľad súborov pomocou Quick Look

Na macOS vyberte Markdown súbor vo Finderi a stlačte `Medzerník` na zobrazenie náhľadu pomocou **Quick Look**. Náhľady Quick Look fungujú aj keď je Obsidian zatvorený.

## Premenovanie poznámky

Na premenovanie aktívnej poznámky:

1. Vyberte názov poznámky v hornej časti editora (alebo stlačte `F2`).
2. Zadajte nový názov a potom stlačte `Enter`.

Pri premenovaní súboru Obsidian automaticky aktualizuje všetky odkazy na tento súbor.

Poznámku alebo priečinok môžete premenovať aj bez ich otvorenia pomocou [[Prieskumník súborov#Premenovanie súboru alebo priečinka|prieskumníka súborov]].

## Odstránenie poznámky

Na odstránenie poznámky vyberte **Viac možností → Odstrániť súbor** v pravom hornom rohu aktívnej poznámky.

Alebo vyberte **Odstrániť aktuálny súbor** z [[Paleta príkazov|palety príkazov]].

Poznámku alebo priečinok môžete odstrániť aj pomocou [[Prieskumník súborov#Odstránenie súboru alebo priečinka|prieskumníka súborov]].

> [!note] Čo sa stane so súbormi po ich odstránení?
> Ak chcete zmeniť, čo sa stane s odstránenými súbormi, vyberte jednu z nasledujúcich možností v časti **[[Nastavenia]] → Súbory a odkazy**:
>
> - **Systémový kôš**: V predvolenom nastavení sa odstránené súbory presunú do systémového koša vášho operačného systému. Na obnovenie súboru použite váš preferovaný správca súborov.
> - **Kôš Obsidian**: Odstránené súbory môžete odoslať do priečinka `.trash` vo vašom trezore.
> - **Permanentné odstránenie**: Súbory sa okamžite odstránia bez akejkoľvek možnosti obnovenia.
