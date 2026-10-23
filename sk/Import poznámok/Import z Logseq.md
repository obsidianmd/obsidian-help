---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian umožňuje migrovať poznámky z Logseq grafu založeného na súboroch (teraz nazývaného „Logseq OG") pomocou oficiálneho [[Importér|pluginu Importér]]. Importér číta Markdown súbory Logseq priamo a konvertuje formátovanie špecifické pre Logseq na trvanlivé súbory, ktoré môžete používať offline s Obsidian a inými aplikáciami.

## Pred začatím

- Zálohujte si váš Logseq graf a Obsidian trezor.
- Nájdite koreňový priečinok vášho Logseq grafu. Zvyčajne obsahuje priečinky s názvom `pages`, `journals`, `assets` a `logseq`.
- Uistite sa, že používate Logseq graf založený na súboroch. Logseq databázové grafy zatiaľ nie sú podporované.

## Importovanie vášho Logseq grafu

Potrebujete oficiálny Obsidian plugin [[Importér]], ktorý môžete [nainštalovať tu](obsidian://show-plugin?id=obsidian-importer).

1. Otvorte **[[Nastavenia]] → Komunitné pluginy** a [nainštalujte Importér](obsidian://show-plugin?id=obsidian-importer).
2. Zapnite plugin Importér.
3. Otvorte **Importér** pomocou [[Paleta príkazov|palety príkazov]] alebo ikony na paneli nástrojov.
4. V časti **Formát súboru** vyberte **Logseq**.
5. V časti **Zvoľte priečinky** vyberte koreňový priečinok vášho grafu. Vyberte priečinok, ktorý obsahuje `pages` a `journals`, nie niektorý z týchto priečinkov samostatne.
6. Skontrolujte detegované priečinky a vylúčte tie, ktoré nechcete importovať.
7. Vyberte výstupný priečinok a miesto, kam sa majú ukladať importované prílohy.
8. Skontrolujte možnosti importu a pozrite si náhľad príkladov konvertovaných poznámok.
9. Vyberte **Importovať** a počkajte, kým sa import dokončí.

## Obmedzenia

- Tabule sa neimportujú.
- Dotazy sa zachovajú ako bloky kódu, ak sa rozhodnete ich ponechať.
- Dynamické makrá šablón Logseq zostanú ako doslovný text.
- Plánovanie kartičiek Logseq, anotácie PDF a ďalšie dáta špecifické pre aplikáciu sa nemigrujú.

## Nastavenia

Importér konvertuje bežné konvencie Logseq, vrátane:

- Vlastností stránky na Obsidian [[Vlastnosti]].
- Aliasov stránok, značiek, menných priestorov a odkazov.
- Stavov pracovného postupu na značky kontrolných zoznamov so začiarkavacími políčkami, pričom priority a dátumy sa zachovajú ako čitateľný text.
- ID blokov, referencií blokov a vložení blokov na Obsidian odkazy a vloženia.
- Názvov súborov denníkov a odkazov na dátumy.
- Zvýraznení, číslovaných zoznamov, Org blokov, vložení médií a prepojených súborov z priečinka `assets` grafu.

### Denníky

V predvolenom nastavení je zapnutá možnosť **Použiť nastavenia denných poznámok**. Importované denníky používajú priečinok a formát dátumu nakonfigurovaný základným pluginom [[Každodenné poznámky]]. To môže umiestniť denníky mimo výstupný priečinok vybraný v Importéri.

Ak túto možnosť vypnete, denníky sa zapíšu do priečinka `Journals` vo vybranom výstupnom priečinku a použijú formát názvu poznámky `YYYY-MM-DD`.

### Sploštenie osnov

Logseq používa vnorené odrážky ako štruktúru stránky. V predvolenom nastavení Importér zachováva túto štruktúru osnovy. Zapnite **Sploštenie osnov** na konvertovanie blokov osnovy na kombináciu odsekov, nadpisov a konvenčných zoznamov. Úlohy a skupiny položiek podobných zoznamom zostanú položkami zoznamu, ale konverzia je heuristická. Pred importovaním veľkého grafu si prezrite niekoľko príkladov v náhľade.

### Zachovanie nekompatibilných dát

Dotazy, kartičky a záznamy sledovania času v Logseq nemajú priame ekvivalenty v Obsidian. Možnosti importu vám umožňujú vybrať, či chcete zachovať každý typ obsahu. Keď sa zachová, zostane ako obyčajný text.

- **Ponechať dotazy** zachová dotazy ako ohraničené bloky kódu alebo vložený kód.
- **Ponechať kartičky** zachová značky `#card` a obaly cloze ako obyčajný text.
- **Ponechať sledovanie času** zachová záznamy `LOGBOOK` a `CLOCK` ako obyčajný text.

## Šablóny

Použite [[Šablóny importéra|šablóny Importéra]] na plnú konfiguráciu spôsobu importovania vašich dát z Logseq.

![[Šablóny importéra#Premenné]]

## Riešenie problémov

Ak Importér nenájde žiadne poznámky, uistite sa, že ste vybrali koreňový priečinok grafu a že nakonfigurované priečinky stránok alebo denníkov obsahujú Markdown súbory.

Ak je príloha hlásená ako chýbajúca, overte, či referenčný súbor stále existuje v priečinku `assets` grafu.

Pri iných problémoch prehľadajte [sledovač problémov Importéra](https://github.com/obsidianmd/obsidian-importer/issues) alebo odošlite hlásenie o chybe s malým príkladovým grafom.
