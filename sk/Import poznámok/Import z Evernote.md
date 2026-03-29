---
permalink: import/evernote
---
Obsidian vám umožňuje jednoducho migrovať vaše poznámky z Evernote pomocou [[Importér|pluginu Importér]]. Tento nástroj skonvertuje vaše dáta z Evernote do odolných Markdown súborov, ktoré môžete používať s Obsidian a mnohými ďalšími aplikáciami.

## Export dát z Evernote

Obsidian používa exportný formát Evernote – súbory `.enex`.

Inštrukcie od Evernote na export dát nájdete [na webovej stránke Evernote](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Táto metóda vám umožňuje exportovať celé zápisníky v desktopovom klientovi.

1. Prejdite na obrazovku Zápisníky.
2. Kliknite na **Viac možností** ( `•••` ) a vyberte **Exportovať zápisník...**
3. Vyberte **ENEX** ako formát súboru.
3. Vyberte umiestnenie pre váš exportovaný `.enex` súbor.

## Import dát z Evernote do Obsidian

Budete potrebovať oficiálny plugin Obsidian [[Importér]], ktorý môžete [nainštalovať tu](obsidian://show-plugin?id=obsidian-importer).

1. Otvorte **[[Nastavenia]]**.
2. Prejdite na **Komunitné pluginy** a [nainštalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapnite plugin Importér.
4. Otvorte plugin **Importér** pomocou palety príkazov alebo ikony na paneli nástrojov.
5. V časti **Formát súboru** vyberte **Evernote (.enex)**.
6. Vyberte umiestnenie vášho záložného súboru Evernote.
7. Kliknite na **Importovať** a počkajte, kým sa import nedokončí.
8. Hotovo!

## Rozšírené možnosti importu

### Zachovanie hierarchie značiek

Export z Evernote nezachováva hierarchiu značiek. Ak chcete zachovať hierarchiu značiek, môžete ich „sploštiť" oddelením pomocou „/". Napríklad, predpokladajme, že máte nasledujúcu štruktúru značiek:

```
ParentTag
    ChildTag
```

Aby ste zachovali vzťahy medzi značkami v Obsidian, musíte:

1. Kliknúť pravým tlačidlom myši na ChildTag.
2. Vybrať „Premenovať."
3. Premenovať ju na `ParentTag/ChildTag`.

### Spracovanie zásobníkov zápisníkov

Keďže proces exportu je obmedzený na jednotlivé zápisníky, predvolený exportný súbor neobsahuje informácie o zásobníkoch zápisníkov. Importér však dokáže rozpoznať vzory v názve enex súboru a znovu vytvoriť zásobníky zápisníkov ako priečinky.

Predpokladajme, že máte zápisník s názvom ```NotebookA``` v zásobníku s názvom ```Stack1```. Zásobník zápisníkov môžete znovu vytvoriť premenovaním enex súboru na ```Stack1@@@NotebookA```.

Výsledkom bude, že skonvertované poznámky sa vygenerujú v priečinku Stack1/NotebookA.

### Ďalšie možnosti

Pre pokročilejšie možnosti importu z Evernote môžete tiež skúsiť [import cez Yarle](https://github.com/akosbalasko/yarle).
