---
permalink: plugins/web-viewer
---
Webový prehliadač je [[Vstavané pluginy|základný plugin]], ktorý umožňuje otvárať externé odkazy v rámci Obsidian na desktope. Vďaka tomu môžete čítať obsah odkazov bez opustenia aplikácie, čo uľahčuje multitasking pri výskumných projektoch na webe.

Externé odkazy sa otvárajú ako [[Karty|karta]], ktorú môžete preskupovať, rozdeľovať a otvárať vo [[Vyskakovacie okná|vyskakovacom okne]]. Akékoľvek karty webových stránok vložené v súboroch [[Canvas]] je možné otvoriť ako karty webového prehliadača.

Webový prehliadač nie je náhradou za váš primárny prehliadač. Webový prehliadač poskytuje rýchly spôsob prístupu k webovým stránkam na výskum v rámci Obsidian. Neponúka však plnú funkcionalitu, bezpečnostné ovládacie prvky ani rozšíriteľnosť špecializovaného prehliadača.

## Režim čítania

Kliknite na ikonu okuliarov pre zobrazenie textovej verzie webovej stránky. Táto funkcia funguje tak, že čistí obsah pomocou knižnice Readability od Mozilly vyvinutej pre Firefox.

## Uložiť do trezoru

Kliknite na ikonu ďalších akcií pre uloženie webovej stránky do vášho trezoru. Umiestnenie ukladania stránky môžete prispôsobiť v časti **[[Nastavenia]]** → **Webový prehliadač**.

## Blokovanie reklám

Webový prehliadač štandardne blokuje reklamy. Pravidlá blokovania reklám si môžete prispôsobiť pridaním zoznamov, ako napríklad [Easylist](https://easylist.to/).

## Bezpečnosť

Ak používate pluginy Obsidian tretích strán, odporúčame pre citlivé úlohy a webové stránky chránené heslom používať namiesto webového prehliadača váš primárny prehliadač.

Webový prehliadač je založený na rovnakej funkcii [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag), ktorá umožňuje vkladať webové stránky do [[Canvas]]. Webový prehliadač bol [nezávisle auditovaný](https://obsidian.md/blog/cure53-second-client-audit/), aby sa overilo, že bol bezpečne implementovaný.

Pluginy Obsidian [[Bezpečnosť pluginov#Možnosti pluginov|nie sú izolované v sandboxe]] a majú hlbokú kontrolu nad aplikáciou. Tento dizajn umožňuje výkonnú funkcionalitu, ale prináša aj bezpečnostné kompromisy. Počas behu Obsidian majú pluginy tretích strán plný prístup ku cookies vo webovom prehliadači.
