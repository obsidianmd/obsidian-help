---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian umožňuje migrovat poznámky z Logseq grafu založeného na souborech (nyní nazývaného „Logseq OG") pomocí oficiálního [[Importér|pluginu Importér]]. Importér čte Markdown soubory Logseq přímo a převádí formátování specifické pro Logseq do trvanlivých souborů, které můžete používat offline s Obsidian a dalšími aplikacemi.

## Než začnete

- Zálohujte svůj Logseq graf a trezor Obsidian.
- Najděte kořenovou složku svého Logseq grafu. Obvykle obsahuje složky s názvy `pages`, `journals`, `assets` a `logseq`.
- Ujistěte se, že používáte Logseq graf založený na souborech. Databázové grafy Logseq zatím nejsou podporovány.

## Import Logseq grafu

Potřebujete oficiální plugin Obsidian [[Importér]], který můžete [nainstalovat zde](obsidian://show-plugin?id=obsidian-importer).

1. Otevřete **[[Nastavení]] → Komunitní pluginy** a [nainstalujte Importér](obsidian://show-plugin?id=obsidian-importer).
2. Zapněte plugin Importér.
3. Otevřete **Importér** pomocí [[Paleta příkazů|palety příkazů]] nebo ikony na postranním panelu nástrojů.
4. V části **Formát souboru** vyberte **Logseq**.
5. V části **Vybrat složky** vyberte kořenovou složku svého grafu. Vyberte složku, která obsahuje `pages` a `journals`, nikoli některou z těchto složek jednotlivě.
6. Zkontrolujte detekované složky a vyloučte ty, které nechcete importovat.
7. Zvolte výstupní složku a místo, kam se mají ukládat importované přílohy.
8. Zkontrolujte možnosti importu a prohlédněte si příklady převedených poznámek v náhledu.
9. Vyberte **Importovat** a počkejte na dokončení importu.

## Omezení

- Tabule se neimportují.
- Dotazy jsou zachovány jako bloky kódu, pokud se rozhodnete je ponechat.
- Dynamická makra šablon Logseq zůstanou jako doslovný text.
- Plánování karet Logseq, anotace PDF a další data specifická pro aplikaci se nemigrují.

## Nastavení

Importér převádí běžné konvence Logseq, včetně:

- Vlastností stránek na [[Vlastnosti]] Obsidian.
- Aliasů stránek, štítků, jmenných prostorů a odkazů.
- Stavů workflow na značky kontrolních seznamů, přičemž priority a data jsou zachovány jako čitelný text.
- ID bloků, odkazů na bloky a embedů bloků na odkazy a embedy Obsidian.
- Názvů souborů deníku a odkazů na data.
- Zvýraznění, číslovaných seznamů, Org bloků, embedů médií a propojených souborů ze složky `assets` grafu.

### Deníky

Ve výchozím nastavení je zapnutá možnost **Použít nastavení denních poznámek**. Importované deníky používají složku a formát data nakonfigurované základním pluginem [[Každodenní poznámky]]. To může umístit deníky mimo výstupní složku vybranou v Importéru.

Pokud tuto možnost vypnete, deníky se zapíší do složky `Journals` uvnitř vybrané výstupní složky a použijí formát názvu poznámky `YYYY-MM-DD`.

### Zploštění osnov

Logseq používá vnořené odrážky jako strukturu stránky. Ve výchozím nastavení Importér tuto strukturu osnovy zachovává. Zapněte **Zploštění osnov** pro převod bloků osnovy na kombinaci odstavců, nadpisů a běžných seznamů. Úkoly a skupiny položek podobných seznamu zůstanou jako položky seznamu, ale převod je heuristický. Před importem velkého grafu si prohlédněte několik příkladů v náhledu.

### Zachování nekompatibilních dat

Dotazy, kartičky a záznamy sledování času Logseq nemají přímé ekvivalenty v Obsidian. Možnosti importu vám umožňují zvolit, zda zachovat každý typ obsahu. Pokud je zachován, zůstane jako prostý text.

- **Zachovat dotazy** zachovává dotazy jako ohraničené bloky kódu nebo inline kód.
- **Zachovat kartičky** zachovává značky `#card` a cloze obálky jako prostý text.
- **Zachovat sledování času** zachovává záznamy `LOGBOOK` a `CLOCK` jako prostý text.

## Šablony

Použijte [[Šablony importéru|šablony importéru]] pro plnou konfiguraci způsobu importu vašich dat z Logseq.

![[Šablony importéru#Proměnné]]

## Řešení problémů

Pokud Importér nenajde žádné poznámky, ujistěte se, že jste vybrali kořenovou složku grafu a že nakonfigurované složky stránek nebo deníků obsahují Markdown soubory.

Pokud je příloha hlášena jako chybějící, ověřte, že odkazovaný soubor stále existuje ve složce `assets` grafu.

Pro další problémy hledejte v [nástroji pro sledování problémů Importéru](https://github.com/obsidianmd/obsidian-importer/issues) nebo odešlete hlášení o chybě s malým ukázkovým grafem.
