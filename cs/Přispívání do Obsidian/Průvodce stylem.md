---
permalink: style-guide
publish: true
mobile: true
description: Tato stránka vysvětluje stylistickou příručku pro psaní naší dokumentace podpory.
---
Dokumentace Obsidian se řídí stylistickými pravidly uvedenými na této stránce. Tato pravidla vycházejí z osvědčených postupů v oboru, zejména z [příručky stylu pro dokumentaci od Google](https://developers.google.com/style) a [příručky stylu od Microsoftu](https://learn.microsoft.com/en-us/style-guide/). V případech, které nejsou pokryty níže, se odkazujte na tyto externí příručky jako sekundární reference.

> [!tip]- Přispějte
> Většina dokumentace existovala dříve, než vznikla tato příručka stylu.
> 
> Pokud najdete jakékoli porušení této příručky stylu, prosím [vytvořte issue](https://github.com/obsidianmd/obsidian-docs/issues/new) a odešlete pull request do [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminologie a gramatika

### Jazykový styl

Pro naši anglickou dokumentaci se doporučuje používat [globální angličtinu](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html), aby lépe sloužila našemu celosvětovému publiku a usnadnila [[#Překlady]]. To znamená:

- Vyhýbat se idiomům a kulturně specifickým výrazům
- Používat činný rod a přímou stavbu vět
- Upřednostňovat jednoduchá, běžná slova před složitou terminologií
- Být explicitní spíše než implicitní
- Pro pravopisné konvence používejte americkou angličtinu (např. „organize" místo „organise").

### Termíny

- Upřednostňujte „keyboard shortcut" před „hotkey". Hotkey používejte, když odkazujete na konkrétní funkci.
- Na mobilních zařízeních upřednostňujte „aplikace Obsidian", na desktopu „aplikace Obsidian".
- Upřednostňujte „sync" nebo „synchronizace" před „synchronise" nebo „synchronising".
- Upřednostňujte „hledaný výraz" před „vyhledávací dotaz".
- Upřednostňujte „nadpis" před „záhlaví", když odkazujete na text, který uvozuje sekci.
- Upřednostňujte „maximum" před „max" a „minimum" před „min".

### Názvy produktů

Názvy produktů Obsidian začínají slovem „Obsidian", například „Obsidian Publish" a „Obsidian Sync".

Pokud by se odstavec stal příliš opakující se, můžete v následujících odkazech použít zkrácenou formu.

Například:

_Aby bylo možné provádět konfiguraci specifickou pro zařízení, Obsidian Sync nesynchronizuje svá vlastní nastavení. Sync je třeba nakonfigurovat pro každé ze svých zařízení._

### Uživatelské rozhraní a interakce

- Používejte **tučné písmo** pro označení textu tlačítek
- Upřednostňujte „vyberte" před „klepněte" nebo „klikněte".
	- Pro instrukce specifické pro mobilní zařízení je „klepněte" přijatelné při popisu dotykových interakcí, protože „kliknutí" není dostupné.
- Upřednostňujte „postranní panel" před „boční panel".
- Upřednostňujte „proveďte" před „vyvolejte" a „spusťte", když odkazujete na příkazy nebo akce.

Při odkazování na více interakcí s uživatelským rozhraním v sekvenci používejte symbol → (U+2192). Například „**[[Nastavení]] → Komunitní pluginy**".

### Poznámky, soubory a složky

- Používejte „poznámka", když odkazujete na soubor Markdown v trezoru.
- Používejte „soubor", když odkazujete na jiné přípony souborů než Markdown.
- Upřednostňujte „název poznámky" před „titulek poznámky".
- Upřednostňujte „aktivní poznámka" před „aktuální poznámka".
- Upřednostňujte „složka" před „adresář".
- Upřednostňujte „typ souboru" před „formát souboru", pokud specificky neodkazujete na datový formát obsahu souboru.

Při přecházení mezi poznámkami použijte „otevřít", pokud je cíl skrytý, a „přepnout", pokud jsou zdrojová i cílová poznámka otevřené v samostatných rozděleních.

### Referenční dokumentace pro nastavení

Pokud je to možné, všechna nastavení by měla být dokumentována přímo v Obsidian pomocí popisného textu. Vyhněte se dokumentování konkrétního nastavení v Nápovědě Obsidian, pokud:

- Vyžaduje hlubší znalosti o tom, jak a kdy ho používat.
- Je běžně špatně používáno nebo se na něj často ptají.
- _Výrazně_ mění uživatelský zážitek.

Zvažte použití zvýrazněného bloku s tipem, pokud chcete upozornit na konkrétní nastavení.

### Směrové termíny

Směrové termíny psané jako přídavná jména spojujte pomlčkou. Vyhněte se spojování pomlčkou, když je směr použit jako podstatné jméno.

**Doporučeno:**

- Vyberte **[[Nastavení]]** v levém dolním rohu.
- Vyberte **[[Nastavení]]** vlevo dole.

**Nedoporučeno:**

- Vyberte **[[Nastavení]]** v levém dolním rohu. (bez pomlčky v adjektivu)
- Vyberte **[[Nastavení]]** v levém-dolním.

Upřednostňujte „levý horní" a „pravý horní" před „horní levý" a „horní pravý".

Neuvádějte směr při odkazování na nastavení. Umístění ovládacího prvku nastavení závisí na zařízení.

**Doporučeno:**

- Vedle **Vybrat vzdálený trezor** vyberte **Vybrat**.

**Nedoporučeno:**

- Napravo od **Vybrat vzdálený trezor** vyberte **Vybrat**.

Při popisu vertikálního směru v prvcích uživatelského rozhraní používejte „nad" a „pod" pro prostorové vztahy. Vyhněte se výrazům „nahoru" a „dolů", protože jsou v různých kontextech nejednoznačné.

**Doporučeno:**

- Vyhledávací pole se zobrazí nad seznamem souborů.
- Další možnosti jsou k dispozici níže.

**Nedoporučeno:**

- Vyhledávací pole je nahoře od seznamu souborů.
- Další možnosti jsou dole.

### Instrukce

Používejte rozkazovací způsob pro názvy průvodců, nadpisy sekcí a postupy krok za krokem. Rozkazovací způsob je stručný a zaměřený na akci, což je pro uživatele sledující instrukce přímočařejší.

- Upřednostňujte „Nastavte" před „Nastavování"
- Upřednostňujte „Přesuňte soubor" před „Přesouvání souboru"
- Upřednostňujte „Importujte své poznámky" před „Importování poznámek"

### Velká a malá písmena ve větách

Upřednostňujte *velká písmena ve stylu věty* před *velkými písmeny ve stylu nadpisu* pro nadpisy, tlačítka a titulky. Při odkazování na prvky uživatelského rozhraní vždy odpovídejte velikosti písmen textu v uživatelském rozhraní.

**Doporučeno:**

- Jak Obsidian ukládá data

**Nedoporučeno:**

- Jak Obsidian Ukládá Data

### Příklady

Upřednostňujte realistické příklady před nesmyslnými termíny.

**Doporučeno:**

- `task:(zavolat OR naplánovat)`

**Nedoporučeno:**

- `task:(foo OR bar)`

### Názvy kláves a klávesové zkratky

Při odkazování na klávesy a klávesové zkratky používejte konzistentní zápis.

**Jednotlivé názvy kláves:**

Při odkazování na znak na klávesnici podle názvu přidejte znak mezi závorky hned za název.

**Doporučeno:**

- Stiskněte klávesu pomlčka (-) pro přidání pomlčky.
- Použijte otazník (?) pro vyhledávání.

**Nedoporučeno:**

- Stiskněte klávesu pomlčka pro přidání pomlčky.
- Použijte ? pro vyhledávání.
- Přidejte `-` před slovo.

**Klávesové zkratky:**

Formátujte klávesové zkratky bez mezer kolem znaménka plus. Když se zkratka liší mezi operačními systémy, uveďte obě.

**Doporučeno:**

- Stiskněte `Ctrl+Z` (Windows) nebo `Command+Z` (macOS) pro vrácení zpět.
- Stiskněte `Escape` pro zavření tohoto okna.
- Použijte `Tab` pro přesunutí mezi poli.

**Nedoporučeno:**

- Stiskněte `Cmd+Z` pro vrácení zpět.
- Stiskněte `Ctrl + Z` (s mezerami) pro vrácení zpět.
- Stiskněte `Ctrl/Cmd+Z` pro vrácení zpět.

U zkratek, které jsou stejné na všech platformách, nemusíte uvádět operační systém. Pokud si nejste jisti, zda se zkratka liší podle platformy, uveďte operační systém pro jistotu. Windows a Linux obvykle používají stejné zkratky.

### Markdown

Mezi bloky Markdown používejte prázdné řádky:

**Doporučeno:**

```md
# Nadpis 1

Toto je sekce.

1. První položka
2. Druhá položka
3. Třetí položka
```

**Nedoporučeno:**

```md
# Nadpis 1
Toto je sekce.
1. První položka
2. Druhá položka
3. Třetí položka
```

**Pomlčky em v seznamech:**

Používejte pomlčky em (—) k oddělení tučných termínů od jejich popisů v odrážkových seznamech. Nepoužívejte pomlčky em v jednoduchých vnořených odrážkových seznamech s odkazy.

**Doporučeno:**

- **Nabídka zobrazení** — vytváření, úprava a přepínání zobrazení.
- **Výpočet hodnot** — přidávání cen, počítání součtů nebo provádění matematických operací.

**Nedoporučeno:**

- [[Vytvoření základny]] — Naučte se, jak vytvořit a vložit základnu.

### Obrázky

Používejte „**šířka** x **výška** pixelů" pro popis rozměrů obrázku nebo obrazovky.

**Příklad:**

Doporučené rozměry obrázku: 1920 x 1080 pixelů.

## Struktura informací

### Typy zvýrazněných bloků

Používejte zvýrazněné bloky strategicky k zvýraznění specifických typů informací:

**Tip** (`[!tip]-`) - Praktické rady nebo osvědčené postupy, které vylepšují pracovní postup uživatele. Používejte pro zkratky, alternativní řešení nebo nepovinné, ale užitečné informace. Tyto zvýrazněné bloky začínají sbalené.

**Informace** (`[!info]+`) - Další kontext, doplňující informace nebo upřesnění. Používejte, když informace přidává porozumění, ale není nutná k dokončení úkolu. Tyto zvýrazněné bloky začínají rozbalené.

**Varování** (`[!warning]+`) - Důležitá upozornění, která předcházejí ztrátě dat, chybám nebo neočekávaným následkům. Používejte střídmě pro skutečně rizikové situace. Tyto zvýrazněné bloky by nikdy neměly být sbalené.

**Příklad** (`[!example]-`) - Obecné poznámky nebo doplňující podrobnosti. Používejte pro okrajové informace, které mohou být pro některé uživatele relevantní. Tyto zvýrazněné bloky začínají sbalené.

**Příklady:**
```md
> [!tip]- Používejte klávesové zkratky
> Svůj pracovní postup můžete urychlit zapamatováním nejpoužívanějších zkratek.

> [!info]+ Toto je placený doplněk
> Tato funkce vyžaduje k použití placené předplatné.

> [!warning]+ Tuto akci nelze vrátit zpět
> Smazání trezoru je trvalé. Zvažte nejprve export svých poznámek.

> [!example]- Pokročilé použití
> Toto nastavení můžete také nakonfigurovat přes nabídku Grafu.
```

### Seznamy vs. souvislý text

Používejte seznamy při prezentaci oddělených položek, které nemají silné sekvenční nebo kauzální vztahy. Používejte souvislý text a odstavce, když na sebe položky navazují, vyžadují vysvětlení nebo těží z narativního toku.

**Použijte seznam pro:**
- Sadu nesouvisejících funkcí
- Požadavky na instalaci
- Možnosti konfigurace
- Kroky řešení problémů

**Použijte souvislý text pro:**
- Vysvětlení, jak něco funguje
- Pracovní postupy se závislostmi
- Koncepční přehledy
- Pokyny vyžadující kontext

### Tabulky

Používejte tabulky k porovnání funkcí, verzí nebo souvisejících datových bodů, kde zarovnání pomáhá porozumění. Vyhněte se tabulkám pro jednoduché seznamy nebo data s jedním sloupcem.

**Vhodný případ použití:**

| Funkce | Mobilní | Desktop |
|--------|---------|---------|
| Sync | Ano | Ano |
| Pluginy | Ne | Ano |
| Motivy | Omezené | Plné |

### Křížové odkazy

Používejte interní wiki odkazy (`[[Název poznámky]]`) štědře, abyste pomohli uživatelům navigovat k souvisejícím tématům. Vyhněte se však nadměrnému odkazování:

- Neodkazujte stejný termín vícekrát na jedné stránce
- Odkazujte pouze tehdy, když odkazovaná stránka poskytuje významný doplňující kontext
- Použijte popisný text odkazu, pokud to pomáhá: `[[Název poznámky#Sekce|popisný text]]`

**Příklad:**

První zmínka: „Zjistěte více o [[Úvod do Obsidian Sync|Obsidian Sync]] pro udržení trezoru aktuálního napříč zařízeními."
Pozdější zmínka: „Sync můžete nakonfigurovat pro každé zařízení zvlášť."

### Obsah specifický pro platformu

Při dokumentování funkcí, které se liší mezi platformami, používejte nadpisy sekcí k organizaci obsahu.

Použijte `Desktop` a `Mobilní zařízení` jako nadpisy podsekcí k oddělení instrukcí nebo funkcí specifických pro platformu.

**Doporučeno:**
```md
## Přizpůsobení postranního panelu nástrojů

### Desktop

V desktopové verzi můžete postranní panel nástrojů přizpůsobit následovně:

- Změňte pořadí akcí v postranním panelu nástrojů přetažením ikon.
- Pro skrytí konkrétních akcí klikněte pravým tlačítkem na prázdné místo a odškrtněte akce, které chcete skrýt.

### Mobilní zařízení

V mobilní verzi můžete postranní panel nástrojů přizpůsobit přes nastavení:

1. Otevřete **[[Nastavení]]**.
2. Přejděte na **Vzhled**.
3. Klikněte na **Spravovat** pod **Ribbon Nastavení**.
```

> [!info]+ Kdy vytvářet sekce?
> Vytvářejte samostatné sekce pouze pokud se obsah výrazně liší. Pokud jsou instrukce převážně stejné s drobnými odchylkami, použijte místo toho inline poznámky.

## Ikony a obrázky

Vkládejte ikony a obrázky, když usnadňují vysvětlení věcí, které je obtížné popsat slovy, nebo když potřebujete ukázat důležité části aplikace Obsidian. Obrázky můžete ukládat do složky `Attachments`.

- Obrázek by měl usnadnit pochopení textu, který doprovází.

 **Příklad**: Po zapnutí plugin [[Počet slov]] vytvoří nový záznam ve vašem spodním stavovém řádku.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Obrázky by měly být ve formátu `.png` nebo `.svg`.
- Pokud obrázek vypadá v poznámce příliš velký, zmenšete ho mimo Obsidian, nebo upravte jeho rozměry podle popisu ve [[Vkládání souborů#Vložení obrázku do poznámky|vkládání obrázku do poznámky]].
- Ve výjimečných případech můžete chtít umístit obzvláště velké nebo složité obrázky do [[Zvýrazněné bloky#Sbalitelné zvýrazněné bloky|sbaleného zvýrazněného bloku]].
- Pro vyskakovací okna nebo modální dialogy by měl obrázek zobrazovat celé okno aplikace Obsidian.
 ![[Style-guide-modal-example.png#interface]]

### Ikony

Ikony [Lucide](https://lucide.dev/icons/) a vlastní ikony Obsidian lze používat vedle detailních prvků k poskytnutí vizuální reprezentace funkce.

**Příklad:** V postranním panelu nástrojů vlevo vyberte **Vytvořit nový canvas** ![[lucide-layout-dashboard.svg#icon]] pro vytvoření canvasu ve stejné složce jako aktivní soubor.

**Pravidla pro ikony**

- Ikony ukládejte do složky `Attachments/icons`.
- Přidejte předponu `lucide-` před název ikony Lucide.
- Přidejte předponu `obsidian-icon-` před název ikony Obsidian.

**Příklad:** Ikona pro vytvoření nového canvasu by měla být pojmenována `lucide-layout-dashboard`.

- Používejte SVG verzi dostupných ikon.
- Ikony by měly mít šířku `18` pixelů, výšku `18` pixelů a šířku tahu `1.5`. Tato nastavení můžete upravit v datech SVG.

> [!info]- Úprava velikosti a tahu v SVG
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="WIDTH" height="HEIGHT" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="STROKE-WIDTH" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Využijte kotvu `icon` ve vložených obrázcích k úpravě mezery kolem ikony tak, aby se úhledně zarovnala s okolním textem.
- Ikony by měly být obklopeny závorkami. ![[lucide-cog.svg#icon]]

**Příklad**: `![[lucide-cog.svg#icon]]`

### Kotvící značky obrázků

Kotvící značky obrázků jsou k dispozici pro přidání dekorativních změn k vloženým obrázkům.

> [!warning] Upozornění pro živý náhled
> Kotvící značky ikon se v **živém náhledu** nezobrazí správně. Použijte **režim čtení** k potvrzení, že kotvící značka byla aplikována.

**Ikona**

`![[lucide-menu.svg#icon]]`

Kotvící značka ikony zajišťuje správné vertikální zarovnání ikon používaných k označení prvků rozhraní.

První ikona nabídky používá kotvící značku ![[lucide-menu.svg#icon]], zatímco druhá ikona nabídky ( ![[lucide-menu.svg]] ) ne.

**Rozhraní**

`![[Vault picker.png#interface]]`

Kotvící značka rozhraní přidává dekorativní stín okolo obrázku. Na prvním obrázku je kotvící značka rozhraní aplikována.
![[Vault picker.png#interface]]
Naproti tomu na druhém obrázku kotvící značka rozhraní aplikována není.

![[Vault picker.png]]

**Obrys**

`![[Backlinks.png#outline]]`

Kotvící značka obrysu přidává jemný okraj okolo obrázku. Na prvním obrázku je kotvící značka obrysu aplikována.

> [!tip] Sledujte levý dolní roh obrázku, abyste viděli rozdíl.

![[Backlinks.png#outline]]

Na druhém obrázku kotvící značka obrysu chybí.

![[Backlinks.png]]

### Optimalizace

Obrázky zpomalují načítání stránky a zabírají cenný úložný prostor [[Úvod do Obsidian Publish|Publish]]. Optimalizace obrázků umožňuje snížení velikosti souboru při zachování vizuální integrity obrázku.

Jak obrázky, tak ikony by měly být optimalizovány.

> [!info] Nástroje pro optimalizaci obrázků
> Zde jsou některé doporučené programy pro snížení velikosti vašich obrázků.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Doporučujeme míru optimalizace 65–75 %.

## Rozvržení

### Nefunkční odkazy

Před odesláním Pull Requestu prosím zkontrolujte nefunkční odkazy v dokumentaci překladu, na kterém pracujete, a opravte je. Nefunkční odkazy mohou vznikat přirozeně v průběhu času, takže ověření jejich správnosti pomáhá udržovat kvalitu dokumentace.

Nefunkční odkazy můžete kontrolovat pomocí [[Komunitní pluginy|komunitních pluginů]] nebo nástrojů dostupných ve vašem IDE.

### Popisy

Tato dokumentace je upravována na GitHubu a hostována online přes [[Úvod do Obsidian Publish|Obsidian Publish]], který zahrnuje [[Náhledy odkazů na sociálních sítích#Popis|popisy]] pro sociální karty a další prvky [[SEO]].

Pokud stránka, na které pracujete, nemá [[Vlastnosti|vlastnost]] `description`, prosím přidejte ji. Popis by měl mít 150 znaků nebo méně a poskytovat objektivní shrnutí obsahu stránky.

**Dobré**: Naučte se vytvářet šablony, které zachycují a organizují metadata webových stránek automaticky pomocí Web Clipper.
**Mohlo by se vylepšit**: Naučte se, jak vytvářet šablony, které automaticky zachycují a organizují metadata z webových stránek pomocí Web Clipper.

### Směry

Při psaní nebo přepisování [[#Instrukce|instrukcí]], jak provést akci v aplikaci, nezapomeňte zahrnout kroky pro mobilní i desktopovou verzi.

Pokud nemáte přístup k mobilnímu nebo desktopovému zařízení, prosím uveďte to při odesílání Pull Requestu.

## Překlady

Překládejte kompletní obsah při dokončování překladu. To zahrnuje, ale není omezeno na:

- Názvy poznámek
- Názvy složek
- Aliasy
- Názvy příloh
- Alternativní text odkazů
