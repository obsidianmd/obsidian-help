---
permalink: publish/collaborate
publish: true
mobile: true
description: 'Zistite, ako spolupracovať s ostatnými používateľmi Obsidianu na vašej stránke Obsidian Publish.'
---
Zistite, ako spolupracovať na vašej stránke [[Úvod do Obsidian Publish|Obsidian Publish]] s ostatnými používateľmi Obsidian. Pridaním priateľov a kolegov ako spolupracovníkov im umožníte publikovať zmeny na vašej stránke.

Len vlastník stránky potrebuje aktívne predplatné na Obsidian Publish. Spolupracovníci potrebujú len [účet Obsidian](https://obsidian.md/account).

> [!warning] Pred publikovaním zmien na zdieľanej stránke sa uistite, že ste [[#Synchronizácia zmien medzi spolupracovníkmi|synchronizovali zmeny medzi spolupracovníkmi]]. V opačnom prípade riskujete prepísanie zmien od ostatných spolupracovníkov.

## Pridanie spolupracovníka na stránku

1. V [[Panel nástrojov|Paneli nástrojov]] vyberte **Publikovať zmeny** ![[lucide-send.svg#icon]] alebo otvorte [[Paleta príkazov|Paletu príkazov]] a napíšte **Publish: Publish changes...**
2. V dialógu **Publikovať zmeny** kliknite na **Zmeniť možnosti stránky** ![[lucide-cog.svg#icon]].
3. Vedľa **Spolupracovníci stránky** vyberte **Spravovať**.
4. Do poľa **Pozvať používateľa** zadajte e-mail spolupracovníka.
5. Vyberte **Pridať**.

## Odstránenie spolupracovníka zo stránky

1. V [[Panel nástrojov|Paneli nástrojov]] vyberte **Publikovať zmeny** ![[lucide-send.svg#icon]] alebo otvorte [[Paleta príkazov|Paletu príkazov]] a napíšte **Publish: Publish changes...**
2. V dialógu **Publikovať zmeny** kliknite na **Zmeniť možnosti stránky** ![[lucide-cog.svg#icon]].
3. Vedľa **Spolupracovníci stránky** vyberte **Spravovať**.
4. Vedľa spolupracovníka, ktorého chcete odstrániť, vyberte **Odstrániť používateľa** ![[lucide-x.svg#icon]].

## Synchronizácia zmien medzi spolupracovníkmi

Obsidian Publish automaticky nesynchronizuje publikované zmeny medzi lokálnymi trezormi. Namiesto toho musia spolupracovníci manuálne synchronizovať zmeny od ostatných spolupracovníkov.

Ak chcete aktualizovať lokálnu poznámku zmenami zo živej stránky:

1. V [[Panel nástrojov|Paneli nástrojov]] vyberte **Publikovať zmeny** ![[lucide-send.svg#icon]] alebo otvorte [[Paleta príkazov|Paletu príkazov]] a napíšte **Publish: Publish changes...**
2. Kliknite pravým tlačidlom alebo dlho stlačte zmenu, ktorú chcete synchronizovať, a potom vyberte **Použiť živú verziu**. **Tým sa prepíše poznámka vo vašom lokálnom trezore.**

> [!tip] Odporúčame používať na synchronizáciu zmien medzi trezormi iný nástroj, napríklad [[Úvod do Obsidian Sync|Obsidian Sync]] alebo [git](https://git-scm.com/).

## Oprávnenia

Nasledujúca tabuľka uvádza dostupné oprávnenia stránky pre vlastníkov a spolupracovníkov:

| Akcia                                       | Spolupracovník | Vlastník |
|---------------------------------------------|:--------------:|:--------:|
| Publikovať nové stránky                     | ✓              | ✓        |
| Publikovať zmeny na publikovaných stránkach | ✓              | ✓        |
| Zrušiť publikovanie stránok                 | ✓              | ✓        |
| Konfigurovať možnosti stránky               |                | ✓        |
| Spravovať oprávnenia                        |                | ✓        |
