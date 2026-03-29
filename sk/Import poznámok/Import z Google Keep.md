---
permalink: import/google-keep
---
Obsidian vám umožňuje jednoducho migrovať vaše poznámky z Google Keep pomocou [[Importér|pluginu Importér]]. Tento nástroj skonvertuje vaše dáta z Google Keep do trvanlivých Markdown súborov, ktoré môžete používať s Obsidian a mnohými ďalšími aplikáciami.

## Export vašich dát z Google Keep

1. Prejdite na [Google Takeout](https://takeout.google.com/settings/takeout) a prihláste sa do svojho účtu Google.
2. Kliknite na **Zrušiť výber všetkého** v pravom hornom rohu.
3. Posuňte sa nadol a vyberte **Keep** zo zoznamu.
4. Posuňte sa na spodok stránky a kliknite na **Nasledujúci krok**.
5. Na ďalšej obrazovke kliknite na tlačidlo **Vytvoriť export**.
6. Stiahnite súbor `.zip`, keď bude k dispozícii.

## Import dát z Google Keep do Obsidian

Budete potrebovať oficiálny plugin Obsidian [[Importér]], ktorý môžete [nainštalovať tu](obsidian://show-plugin?id=obsidian-importer).

1. Otvorte **[[Nastavenia]]**.
2. Prejdite na **Komunitné pluginy** a [nainštalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapnite plugin Importér.
4. Otvorte plugin **Importér** pomocou palety príkazov alebo ikony na paneli nástrojov.
5. V časti **Formát súboru** vyberte **Google Keep (.zip).**
6. Vyberte umiestnenie vášho súboru `.zip`.
7. Kliknite na **Importovať** a počkajte, kým sa import dokončí.
8. Hotovo!

### Podporované funkcie

- Všetky kontrolné zoznamy sa importujú ako položky najvyššej úrovne, pretože Google Keep neexportuje informácie o odsadení.
- Pripomienky a priradenia používateľov v poznámkach sa neimportujú, pretože tieto funkcie nie sú podporované v Obsidian.
- Všetky ostatné informácie by sa mali importovať ako kombinácia obsahu a značiek.
