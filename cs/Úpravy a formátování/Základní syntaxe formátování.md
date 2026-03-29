---
permalink: syntax
publish: true
mobile: true
description: 'Naučte se, jak v Obsidianu pomocí Markdownu aplikovat základní formátování na vaše poznámky.'
---
Naučte se, jak na poznámky aplikovat základní formátování pomocí [Markdown](https://daringfireball.net/projects/markdown/). Pro pokročilejší syntaxi formátování se podívejte na [[Rozšířená syntaxe formátování]].

## Odstavce

Pro vytvoření odstavců v Markdown použijte **prázdný řádek** k oddělení bloků textu. Každý blok textu oddělený prázdným řádkem je považován za samostatný odstavec.

```md
Toto je odstavec.

Toto je další odstavec.
```

Toto je odstavec.

Toto je další odstavec.

Prázdný řádek mezi řádky textu vytváří samostatné odstavce. Toto je výchozí chování v Markdown.

> [!tip]- Více prázdných mezer
> Více sousedních prázdných mezer uvnitř odstavců i mezi nimi se při zobrazení v [[Zobrazení a režim úprav#Režim čtení|režimu čtení]] nebo na stránkách [[Úvod do Obsidian Publish|Obsidian Publish]] sloučí do jedné mezery.
> 
> ```md
> Více          sousedních          mezer
> 
> 
> 
> a více nových řádků mezi odstavci.
> ```
> 
> > Více          sousedních          mezer
> > 
> > 
> > 
> > a více nových řádků mezi odstavci.
> 
> Pokud chcete zabránit sloučení mezer nebo přidat více prázdných mezer, můžete použít HTML tagy `&nbsp;` (nezlomitelná mezera) nebo `<br>` (zalomení řádku).

### Zalomení řádků

Ve výchozím nastavení v Obsidian jedním stisknutím `Enter` vytvoříte v poznámce nový řádek, ale ve vykresleném výstupu je tento řádek považován za *pokračování* stejného odstavce, což odpovídá typickému chování Markdown. Pro vložení zalomení řádku *uvnitř* odstavce bez zahájení nového odstavce můžete buď:

- Přidat **dvě mezery** na konec řádku před stisknutím `Enter`, nebo
- Použít zkratku `Shift+Enter` pro přímé vložení zalomení řádku.

> [!question]- Proč vícenásobné stisknutí `Enter` nevytváří více zalomení řádků v režimu čtení?
> V Markdown je jeden `Enter` ignorován a vícenásobné po sobě jdoucí stisknutí `Enter` vytvoří pouze jeden nový odstavec. Toto chování odpovídá pravidlu měkkého zalamování v Markdown, kde prázdné řádky navíc negenerují další zalomení řádků ani odstavce — sloučí se do jednoho oddělovače odstavců. Takto Markdown ve výchozím nastavení zpracovává text, čímž zajišťuje, že odstavce přirozeně plynout bez neočekávaných přerušení.

Obsidian obsahuje nastavení **[[Nastavení#Striktní zalomení řádku|Striktní zalomení řádku]]**, které zajistí, aby Obsidian dodržoval standardní specifikaci Markdown pro zalomení řádků.

Pro zapnutí této funkce:

1. Otevřete **[[Nastavení]]**.
2. Přejděte na kartu **Editor**.
3. Zapněte **Striktní zalomení řádku**.

Když jsou v Obsidian zapnuta **Striktní zalomení řádku**, zalomení řádků mají tři odlišná chování v závislosti na tom, jak jsou řádky odděleny:

**Jeden Enter bez mezer**: Jeden `Enter` bez koncových mezer sloučí dva samostatné řádky do jednoho řádku při vykreslení.

```md
řádek jedna
řádek dva
```

Vykreslí se jako:

řádek jedna řádek dva

**Jeden Enter se dvěma nebo více koncovými mezerami**: Pokud přidáte dvě nebo více mezer na konec prvního řádku před stisknutím `Enter`, dva řádky zůstanou součástí stejného odstavce, ale budou odděleny zalomením řádku (HTML element `<br>`). V tomto příkladu použijeme dvě podtržítka jako zástupce mezer.

```md
řádek tři__  
řádek čtyři
```

Vykreslí se jako:

řádek tři<br>
řádek čtyři

**Dvojitý Enter (s koncovými mezerami nebo bez nich)**: Stisknutí `Enter` dvakrát (nebo vícekrát) oddělí řádky do dvou samostatných odstavců (HTML elementy `<p>`), bez ohledu na to, zda na konec prvního řádku přidáte mezery.

```md
řádek pět

řádek šest
```

Vykreslí se jako:

<p>řádek pět</p>
<p>řádek šest</p>

## Nadpisy

Pro vytvoření nadpisu přidejte až šest symbolů `#` před text nadpisu. Počet symbolů `#` určuje úroveň nadpisu (jak je zobrazeno v [[Přehled|osnově]]).

```md
# Toto je nadpis 1
## Toto je nadpis 2
### Toto je nadpis 3
#### Toto je nadpis 4
##### Toto je nadpis 5
###### Toto je nadpis 6
```

%% These headings use HTML to avoid cluttering the Outline/Table of contents %%
<h1>Toto je nadpis 1</h1>
<h2>Toto je nadpis 2</h2>
<h3>Toto je nadpis 3</h3>
<h4>Toto je nadpis 4</h4>
<h5>Toto je nadpis 5</h5>
<h6>Toto je nadpis 6</h6>

## Tučné, kurzíva, zvýraznění

Formátování textu lze také aplikovat pomocí [[Klávesové zkratky pro úpravy]].

| Styl | Syntaxe | Příklad | Výstup |
|-|-|-|-|
| Tučné | `** **` nebo `__ __` | `**Tučný text**` | **Tučný text** |
| Kurzíva | `* *` nebo `_ _`  | `*Text kurzívou*` | *Text kurzívou* |
| Přeškrtnutí | `~~ ~~` |  `~~Přeškrtnutý text~~` | ~~Přeškrtnutý text~~ |
| Zvýraznění | `== ==` |  `==Zvýrazněný text==` | ==Zvýrazněný text== |
| Tučné a vnořená kurzíva | `** **` a `_ _`  | `**Tučný text a _vnořená kurzíva_ text**` | **Tučný text a _vnořená kurzíva_ text** |
| Tučné a kurzíva | `*** ***` nebo `___ ___` |  `***Tučný text kurzívou***` | ***Tučný text kurzívou*** |

Formátování lze vynutit k zobrazení jako prostý text přidáním zpětného lomítka `\` před něj.

\*\*Tento řádek nebude tučný\*\*

```markdown
\*\*Tento řádek nebude tučný\*\*
```

\**Tento řádek bude kurzívou a zobrazí hvězdičky*\*

```markdown
\**Tento řádek bude kurzívou a zobrazí hvězdičky*\*
```

## Interní odkazy

Obsidian podporuje dva formáty pro [[Interní odkazy|interní odkazy]] mezi poznámkami:

- Wiki odkaz: `[[Tři zákony pohybu]]`
- Markdown: `[Tři zákony pohybu](Tři%20zákony%20pohybu.md)`

## Externí odkazy

Pokud chcete odkazovat na externí URL, můžete vytvořit inline odkaz obalením textu odkazu do hranatých závorek (`[ ]`) a poté URL do kulatých závorek (`( )`).

```md
[Nápověda Obsidian](https://help.obsidian.md)
```

[Nápověda Obsidian](https://help.obsidian.md)

Můžete také vytvářet externí odkazy na soubory v jiných trezorech odkazováním na [[Obsidian URI|Obsidian URI]].

```md
[Poznámka](obsidian://open?vault=MainVault&file=Note.md)
```

### Escapování mezer v odkazech

Pokud vaše URL obsahuje mezery, musíte je escapovat nahrazením za `%20`.

```md
[Moje poznámka](obsidian://open?vault=MainVault&file=My%20Note.md)
```

Můžete také escapovat URL obalením do lomených závorek (`< >`).

```md
[Moje poznámka](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Externí obrázky

Můžete přidávat obrázky s externími URL přidáním symbolu `!` před [[#Externí odkazy|externí odkaz]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Rozměry obrázku můžete změnit přidáním `|640x480` k cíli odkazu, kde 640 je šířka a 480 je výška.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Pokud zadáte pouze šířku, obrázek se škáluje podle svého původního poměru stran. Například:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Tip
> Pokud chcete přidat obrázek zevnitř vašeho trezoru, můžete také [[Vkládání souborů#Vložení obrázku do poznámky|vložit obrázek do poznámky]].

## Citace

Text můžete citovat přidáním symbolu `>` před text.

```md
> Lidské bytosti čelí stále složitějším a naléhavějším problémům a jejich efektivita při řešení těchto problémů je záležitostí kritickou pro stabilitu a pokračující pokrok společnosti.

\- Doug Engelbart, 1961
```

> Lidské bytosti čelí stále složitějším a naléhavějším problémům a jejich efektivita při řešení těchto problémů je záležitostí kritickou pro stabilitu a pokračující pokrok společnosti.

\- Doug Engelbart, 1961

> [!tip]- Tip
> Citaci můžete proměnit na [[Zvýrazněné bloky|zvýrazněný blok]] přidáním `[!info]` jako prvního řádku v citaci.

## Seznamy

Neuspořádaný seznam můžete vytvořit přidáním `-`, `*` nebo `+` před text.

```md
- První položka seznamu
- Druhá položka seznamu
- Třetí položka seznamu
```

- První položka seznamu
- Druhá položka seznamu
- Třetí položka seznamu

Pro vytvoření číslovaného seznamu začněte každý řádek číslem následovaným symbolem `.` nebo `)`.

```md
1. První položka seznamu
2. Druhá položka seznamu
3. Třetí položka seznamu
```

1. První položka seznamu
2. Druhá položka seznamu
3. Třetí položka seznamu

```md
1) První položka seznamu
2) Druhá položka seznamu
3) Třetí položka seznamu
```

1) První položka seznamu
2) Druhá položka seznamu
3) Třetí položka seznamu

Můžete použít `Shift+Enter` pro vložení [[#Zalomení řádků|zalomení řádku]] v rámci číslovaného seznamu bez narušení číslování.

```md
1. První položka seznamu
   
2. Druhá položka seznamu
3. Třetí položka seznamu
   
4. Čtvrtá položka seznamu
5. Pátá položka seznamu
6. Šestá položka seznamu
```

### Seznamy úkolů

Pro vytvoření seznamu úkolů začněte každou položku seznamu pomlčkou a mezerou následovanou `[ ]`.

```md
- [x] Toto je dokončený úkol.
- [ ] Toto je nedokončený úkol.
```

- [x] Toto je dokončený úkol.
- [ ] Toto je nedokončený úkol.

Úkol můžete přepnout v režimu čtení zaškrtnutím políčka.

> [!tip]- Tip
> Pro označení jako dokončený můžete v závorkách použít jakýkoli znak.
>
> ```md
> - [x] Mléko
> - [?] Vejce
> - [-] Vejce
> ```
>
> - [x] Mléko
> - [?] Vejce
> - [-] Vejce

### Vnořování seznamů

Můžete vnořit jakýkoli typ seznamu — číslovaný, neuspořádaný nebo seznam úkolů — pod jakýkoli jiný typ seznamu.

Pro vytvoření vnořeného seznamu odsaďte jednu nebo více položek seznamu. V rámci vnořené struktury můžete kombinovat typy seznamů:

```md
1. První položka seznamu
   1. Vnořená číslovaná položka
2. Druhá položka seznamu
   - Vnořená nečíslovaná položka
```

1. První položka seznamu
   1. Vnořená číslovaná položka
2. Druhá položka seznamu
   - Vnořená nečíslovaná položka

Podobně můžete vytvořit vnořený seznam úkolů odsazením jedné nebo více položek seznamu:

```md
- [ ] Položka úkolu 1
	- [ ] Podúkol 1
- [ ] Položka úkolu 2
	- [ ] Podúkol 1
```

- [ ] Položka úkolu 1
	- [ ] Podúkol 1
- [ ] Položka úkolu 2
	- [ ] Podúkol 1

Použijte `Tab` nebo `Shift+Tab` pro odsazení nebo zmenšení odsazení vybraných položek seznamu pro snadnou organizaci.

## Vodorovná čára

Můžete použít tři nebo více hvězdiček `***`, pomlček `---` nebo podtržítek `___` na samostatném řádku pro přidání vodorovné čáry. Symboly můžete také oddělit mezerami.

```md
***
****
* * *
---
----
- - -
___
____
_ _ _
```

***

## Kód

Kód můžete formátovat jak inline v rámci věty, tak jako samostatný blok.

### Inline kód

Kód v rámci věty můžete formátovat pomocí jednoduchých zpětných apostrofů.

```md
Text uvnitř `zpětných apostrofů` na řádku bude formátován jako kód.
```

Text uvnitř `zpětných apostrofů` na řádku bude formátován jako kód.

Pokud chcete do inline bloku kódu vložit zpětné apostrofy, obalte jej dvojitými zpětnými apostrofy takto: inline ``kód se zpětným apostrofem ` uvnitř``.

### Bloky kódu

Pro formátování kódu jako bloku jej uzavřete třemi nebo více zpětnými apostrofy nebo třemi nebo více vlnovkami.

~~~
`````
cd ~/Desktop
`````
~~~
`````
~~~
cd ~/Desktop
~~~
`````
`````md
cd ~/Desktop
`````

Blok kódu můžete také vytvořit odsazením textu pomocí `Tab` nebo 4 prázdných mezer.
`````md
    cd ~/Desktop
`````

K bloku kódu můžete přidat zvýraznění syntaxe přidáním kódu jazyka za první sadu zpětných apostrofů.

~~~md
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````
~~~
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````

Obsidian používá Prism pro zvýraznění syntaxe. Více informací naleznete na stránce [Podporované jazyky](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS a režimy úprav
> [[Zobrazení a režim úprav#Režim zdroje|Režim zdroje]] a [[Zobrazení a režim úprav#Živý náhled|Živý náhled]] nepodporují PrismJS a mohou zvýraznění syntaxe vykreslovat odlišně.

#### Vnořování bloků kódu

Když potřebujete zahrnout blok kódu uvnitř jiného bloku kódu (například při dokumentaci použití bloků kódu), můžete pro vnější blok kódu použít více než tři zpětné apostrofy nebo vlnovky.

Pro vnořování bloků kódu použijte čtyři nebo více zpětných apostrofů (nebo vlnovek) pro vnější blok, zatímco vnitřní blok používá tři:
`````md
````md
Zde je návod, jak vytvořit blok kódu:
```js
console.log("Hello world")
```
````
`````

Můžete také kombinovat zpětné apostrofy a vlnovky. To je obzvláště užitečné při práci s kódem, který generuje další bloky kódu:
`````md
````md
```dataviewjs
dv.paragraph(`
~~~mermaid
graph TD
    A --> B
~~~
`)
```
````
`````

Klíčovým principem je, že vnější blok kódu musí používat **více** ohraničujících znaků (zpětných apostrofů nebo vlnovek) než jakýkoli vnitřní blok kódu, nebo používat jiný typ ohraničujícího znaku.

## Poznámky pod čarou

Do svých poznámek můžete přidat poznámky pod čarou[^footnote] pomocí následující syntaxe:

[^footnote]: Toto je poznámka pod čarou.

```md
Toto je jednoduchá poznámka pod čarou[^1].

[^1]: Toto je odkazovaný text.
[^2]: Přidejte 2 mezery na začátek každého nového řádku.
  To vám umožní psát poznámky pod čarou, které se rozprostírají přes více řádků.
[^note]: Pojmenované poznámky pod čarou se stále zobrazují jako čísla, ale mohou usnadnit identifikaci a propojení odkazů.
```

Můžete také vkládat inline poznámky pod čarou přímo do věty. Všimněte si, že stříška jde mimo závorky.

```md
Můžete také použít inline poznámky pod čarou. ^[Toto je inline poznámka pod čarou.]
```

> [!note] Poznámka
> Inline poznámky pod čarou fungují pouze v režimu čtení, ne v živém náhledu.

## Komentáře

Komentáře můžete přidat obalením textu pomocí `%%`. Komentáře jsou viditelné pouze v režimu úprav.

```md
Toto je %%inline%% komentář.

%%
Toto je blokový komentář.

Blokové komentáře mohou přesahovat více řádků.
%%
```

## Escapování syntaxe Markdown

V některých případech může být potřeba zobrazit speciální znaky v Markdown, jako `*`, `_` nebo `#`, bez aktivace jejich formátování. Pro doslovné zobrazení těchto znaků umístěte před ně zpětné lomítko (`\`).

> [!example] Běžné znaky k escapování
> 
> - Hvězdička: `\*`
> - Podtržítko: `\_`
> - Křížek: `\#`
> - Zpětný apostrof: `` \` ``
> - Svislítko (používané v tabulkách): `\|`
> - Vlnovka: `\~`

```md
\*Tento text nebude kurzívou\*.
```

\*Tento text nebude kurzívou\*.

Při práci s číslovanými seznamy může být potřeba escapovat tečku za číslem, aby se zabránilo automatickému formátování seznamu. Umístěte zpětné lomítko (`\`) před tečku, **ne** před číslo.

```md
1\. Toto nebude položka seznamu.
```

1\. Toto nebude položka seznamu.

## Zjistit více

Pro seznámení s pokročilejší syntaxí formátování, jako jsou tabulky, diagramy a matematické výrazy, se podívejte na [[Rozšířená syntaxe formátování]].

Pro více informací o tom, jak Obsidian analyzuje Markdown, se podívejte na [[Obsidian Flavored Markdown]].
