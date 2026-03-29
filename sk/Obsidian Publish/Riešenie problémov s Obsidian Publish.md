---
permalink: publish/troubleshoot
publish: true
mobile: true
description: 'Táto stránka popisuje niektoré bežné problémy, s ktorými sa môžete stretnúť pri používaní Obsidian Publish.'
---
Táto stránka uvádza bežné problémy, s ktorými sa môžete stretnúť pri používaní [[Úvod do Obsidian Publish|Obsidian Publish]], a ako ich riešiť.

Najprv si nezabudnite pozrieť [[Mediálne súbory]] a [[Obmedzenia Publish|Obmedzenia Publish]].

## Všeobecné

### Publikovanie poznámok

**Pri pokuse o publikovanie poznámky sa mi zobrazuje chyba hashu.**

Používate [[Komunitné pluginy|komunitný plugin]], ktorý pri aktualizácii upravuje čas zmeny súboru? Ak áno, tento plugin môže byť v konflikte s Publish. Nahláste prosím chybu vývojárovi pluginu, aby problém vyriešil.

**Dostávam zvláštnu sieťovú chybu a mám veľmi veľkú Publish stránku.**

Pravdepodobne budeme musieť preskúmať vašu databázu. Prosím [[Nápoveda a podpora#Kontaktovať podporu Obsidian|kontaktujte podporu Obsidian]] pre pomoc.

## CSS a témy

**Moje CSS v mojom [[Konfiguračný priečinok|konfiguračnom priečinku]] nefunguje na Publish. Prečo?**

Publish nečíta z konfiguračného priečinka. Namiesto toho musíte vytvoriť súbor `publish.css` v hlavnom adresári vášho publikačného trezoru. Viac sa o tom dozviete v [[Prispôsobenie stránky]].

**Moje CSS nevyzerá na Publish rovnako ako v aplikácii. Prečo?**

CSS Obsidian Publish nie je úplne rovnaké ako v aplikácii. Odporúčame [vyvíjať akékoľvek CSS a témy](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) špeciálne pre Publish od základov.

_Všeobecne_ platí, že to, čo funguje v [[Zobrazenia a režim úprav#Režim čítania|režime čítania]], má vysokú pravdepodobnosť, že bude fungovať aj na Publish.
