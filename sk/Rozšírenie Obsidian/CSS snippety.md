---
permalink: snippets
publish: true
mobile: true
description: 'Naučte sa, ako zmeniť časti vzhľadu aplikácie Obsidian bez vytvárania kompletnej témy.'
---
Naučte sa, ako upraviť aspekty vzhľadu aplikácie Obsidian bez potreby [vytvárať tému](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Ak hľadáte návod na prácu s CSS pre [[Úvod do Obsidian Publish|Obsidian Publish]], nezabudnite si pozrieť [[Prispôsobenie stránky]].

CSS je jazyk, ktorý ovláda, ako vyzerá HTML. Pridaním CSS snippetov môžete zmeniť časti používateľského rozhrania Obsidian, napríklad veľkosť a farbu nadpisov. Obsidian má [CSS premenné](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables), ktoré vám pomôžu jednoducho prispôsobiť rozhranie.

Obsidian hľadá CSS snippety vo vnútri [[Konfiguračný priečinok|konfiguračného priečinka]] trezora.

## Pridanie snippetu

Na pridanie CSS snippetu na **počítači** ![[lucide-monitor-check.svg#icon]] postupujte podľa týchto krokov:

1. Otvorte **[[Nastavenia]]** ![[lucide-settings.svg#icon]].
2. V časti **Vzhľad → CSS snippety** vyberte **Otvoriť priečinok so snippetmi** ![[lucide-folder-open.svg#icon]].
3. V priečinku snippetov vytvorte CSS súbor, ktorý obsahuje váš snippet.
4. V Obsidian v časti **Vzhľad → CSS snippety** vyberte **Znovu načítať snippety** ![[lucide-refresh-cw.svg#icon]], aby sa snippet zobrazil v zozname.
5. Zapnite snippet kliknutím na prepínač.

Na pridanie CSS snippetu na **mobilnom zariadení/tablete** ![[obsidian-icon-smartphone.svg#icon]] môžete postupovať podľa týchto krokov:

1. Otvorte správcu súborov a nájdite svoj trezor. Umiestnenie trezora môžete skontrolovať v _Spravovať trezory…_ ťuknutím na váš trezor a pozretím cesty.
2. Otvorte [[Konfiguračný priečinok]] a vytvorte priečinok s názvom `snippets`, ak neexistuje.
3. Pridajte svoj CSS snippet do tohto priečinka.
4. Otvorte **[[Nastavenia]]** Obsidian ![[lucide-settings.svg#icon]].
5. Vyberte **Vzhľad** na ľavej strane.
6. Prejdite nadol do sekcie **CSS snippety**.
7. Ťuknite na **Znovu načítať snippety** ![[lucide-refresh-cw.svg#icon]] na obnovenie zoznamu.
8. Ťuknutím na prepínač zapnite snippet.

Alternatívne môžete
- [[Synchronizácia poznámok medzi zariadeniami|Synchronizovať]] akékoľvek zmeny pomocou vašej synchronizačnej služby.
- Použiť komunitný plugin na vytvorenie snippetu priamo v Obsidian.

Po zapnutí Obsidian automaticky deteguje zmeny v CSS snippetoch a aplikuje ich pri uložení súboru.

> [!tip] Nepotrebujete reštartovať Obsidian, aby sa zmeny prejavili. Možno však budete musieť použiť príkaz [[Paleta príkazov|palety príkazov]] na opätovné načítanie Obsidian bez ukladania, aby ste videli zmeny v aktuálnej téme alebo poznámke.

## Písanie CSS pre Obsidian

Obsidian ponúka niekoľko metód, ktoré uľahčujú a zefektívňujú písanie CSS.

Obsahuje množstvo [CSS premenných](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) na jednoduchú úpravu častí Obsidian a vstavaný [[Vlastnosti#Typ vlastnosti|typ vlastnosti]] na zmenu vzhľadu jednej alebo viacerých poznámok.

> [!example] Premenné
> Vytvorte súbor s názvom `headers.css` s nasledujúcim obsahom na zmenu farieb šiestich [[Základná syntax formátovania#Nadpisy|úrovní nadpisov]] na dúhu:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] CSS triedy
> Priraďte názov vlastnej CSS triedy (alebo zoznam CSS tried) preddefinovanej [[Vlastnosti|vlastnosti]] `cssclasses`, aby jedna alebo viacero poznámok vyzerali inak ako ostatné.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/Vlastnosti**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> V každej poznámke, ktorá obsahuje hodnotu `red-border` vo vlastnosti `cssclasses`, sa obrázky zobrazujú s červeným okrajom.

Aby ste zabezpečili, že CSS súbor je platný a správne naformátovaný, odporúčame ho overiť nástrojom ako [CSS Validation Service](https://jigsaw.w3.org/css-validator/), pretože neplatné CSS nebude fungovať.

## Viac informácií

- Ak ste v CSS nováčik, pozrite si [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) od Mozilly.
- Pre viac informácií o štylizovaní Obsidian pozrite:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
