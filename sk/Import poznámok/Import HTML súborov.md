---
permalink: import/html
cssclasses:
  - soft-embed
---
Obsidian vám umožňuje jednoducho importovať jednotlivé HTML súbory a celé priečinky HTML súborov pomocou oficiálneho [[Importér|pluginu Importér]]. Toto je užitočné, ak chcete uložiť celé webové stránky do formátu [[Obsidian Flavored Markdown|Markdown]], alebo ak chcete importovať dáta z nástroja, ktorý exportuje do HTML.

Ak importujete poznámky z konkrétnej aplikácie, možno budete chcieť najskôr skontrolovať zoznam aplikácií podporovaných [[Importér|pluginom Importér]], aby ste zistili, či existuje špecifický konvertor, ktorý lepšie zachová dáta, ktoré migrujete.

## Import HTML dát do Obsidian

Budete potrebovať oficiálny plugin Obsidian [[Importér]], ktorý môžete [nainštalovať tu](obsidian://show-plugin?id=obsidian-importer).

1. Otvorte **[[Nastavenia]]**.
2. Prejdite do **Komunitné pluginy** a [nainštalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapnite plugin Importér.
4. Otvorte plugin **Importér** pomocou palety príkazov alebo ikony na paneli nástrojov.
5. V časti **Formátovať súbor** vyberte **HTML (.html).**
6. Vyberte umiestnenie vašich HTML súborov alebo priečinkov.
7. Vyberte **Importovať** na kontrolu vygenerovanej šablóny a náhľad príkladov z vašich súborov.
8. Znovu vyberte **Importovať** a počkajte, kým sa import dokončí.

### Nastavenia importu

- **Limit veľkosti príloh**: Preskočí importovanie príloh väčších ako zadaná veľkosť.
- **Minimálna veľkosť obrázka**: Preskočí importovanie obrázkov menších ako zadaná veľkosť v ktoromkoľvek rozmere. Môže sa použiť na preskočenie ikon a log.

## Šablóny

Použite [[Šablóny importéra|šablóny Importéra]] na úplnú konfiguráciu spôsobu importovania vašich dát.

![[Šablóny importéra#Variables]]

Okrem toho importy HTML poskytujú mnoho rovnakých premenných ako [[Úvod do Obsidian Web Clipper|Web Clipper]]:

| Premenná | Popis |
| --- | --- |
| `{{author}}` | Autor stránky. |
| `{{contentHtml}}` | Extrahovaný obsah stránky vo formáte HTML. |
| `{{description}}` | Popis alebo výňatok stránky. |
| `{{domain}}` | Doména stránky. |
| `{{favicon}}` | URL faviconu. |
| `{{fullHtml}}` | Nespracované HTML celej stránky. |
| `{{image}}` | URL obrázka pre sociálne zdieľanie. |
| `{{language}}` | Jazyk stránky. |
| `{{published}}` | Dátum publikovania, ktorý je možné formátovať pomocou filtra `date`. |
| `{{site}}` | Názov stránky alebo vydavateľa. |
| `{{url}}` | Zdrojová URL nájdená v importovanom dokumente, ak je dostupná. |
| `{{words}}` | Počet slov. |
