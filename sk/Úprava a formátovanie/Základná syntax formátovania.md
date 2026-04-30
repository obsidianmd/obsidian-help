---
permalink: syntax
publish: true
mobile: true
description: 'Naučte sa, ako aplikovať základné formátovanie na vaše poznámky v Obsidiane pomocou Markdownu.'
---
Naučte sa, ako aplikovať základné formátovanie na vaše poznámky pomocou [Markdown](https://daringfireball.net/projects/markdown/). Pre pokročilejšiu syntax formátovania si pozrite [[Rozšírená syntax formátovania]].

## Odseky

Na vytvorenie odsekov v Markdown použite **prázdny riadok** na oddelenie blokov textu. Každý blok textu oddelený prázdnym riadkom je považovaný za samostatný odsek.

```md
Toto je odsek.

Toto je ďalší odsek.
```

Toto je odsek.

Toto je ďalší odsek.

Prázdny riadok medzi riadkami textu vytvára samostatné odseky. Toto je predvolené správanie v Markdown.

> [!tip]- Viacero prázdnych medzier
> Viacero susediacich prázdnych medzier v rámci odsekov a medzi nimi sa pri zobrazení v [[Zobrazenia a režim úprav#Režim čítania|režime čítania]] alebo na stránkach [[Úvod do Obsidian Publish|Obsidian Publish]] zredukuje na jednu medzeru.
> 
> ```md
> Viacero          susediacich          medzier
> 
> 
> 
> a viacero nových riadkov medzi odsekmi.
> ```
> 
> > Viacero          susediacich          medzier
> > 
> > 
> > 
> > a viacero nových riadkov medzi odsekmi.
> 
> Ak chcete zabrániť zredukovaniu medzier alebo pridať viacero prázdnych medzier, môžete použiť HTML značky `&nbsp;` (nezlomiteľná medzera) alebo `<br>` (zalomenie riadku).

### Zalomenia riadkov

V predvolenom nastavení Obsidian jedným stlačením `Enter` vytvoríte nový riadok v poznámke, ale v renderovanom výstupe sa to považuje za *pokračovanie* toho istého odseku, v súlade s typickým správaním Markdown. Na vloženie zalomenia riadku *v rámci* odseku bez začatia nového odseku môžete buď:

- Pridať **dve medzery** na koniec riadku pred stlačením `Enter`, alebo
- Použiť skratku `Shift+Enter` na priame vloženie zalomenia riadku.

> [!question]- Prečo viacnásobné stlačenie `Enter` nevytvára viac zalomení riadkov v režime čítania?
> V Markdown sa jeden `Enter` ignoruje a viacero po sebe idúcich stlačení `Enter` vytvorí len jeden nový odsek. Toto správanie je v súlade s pravidlom mäkkého zalamovanie v Markdown, kde prázdne riadky navyše negenerujú ďalšie zalomenia riadkov alebo odseky — sú zredukované na jeden oddeľovač odsekov. Takto Markdown štandardne spracováva text, čím zabezpečuje, že odseky plynú prirodzene bez neočakávaných zlomení.

Obsidian obsahuje nastavenie **[[Nastavenia#Prísne zalomenia riadkov|Prísne zalomenia riadkov]]**, vďaka ktorému Obsidian dodržiava štandardnú špecifikáciu Markdown pre zalomenia riadkov.

Na zapnutie tejto funkcie:

1. Otvorte **[[Nastavenia]]**.
2. Prejdite na kartu **Editor**.
3. Zapnite **Prísne zalomenia riadkov**.

Keď sú **Prísne zalomenia riadkov** v Obsidian zapnuté, zalomenia riadkov majú tri rôzne správania v závislosti od toho, ako sú riadky oddelené:

**Jeden Enter bez medzier**: Jeden `Enter` bez koncových medzier spojí dva samostatné riadky do jedného riadku pri renderovaní.

```md
riadok jeden
riadok dva
```

Renderuje sa ako:

riadok jeden riadok dva

**Jeden Enter s dvoma alebo viacerými koncovými medzerami**: Ak pridáte dve alebo viac medzier na koniec prvého riadku pred stlačením `Enter`, dva riadky zostanú súčasťou toho istého odseku, ale budú oddelené zalomením riadku (HTML element `<br>`). V tomto príklade použijeme dva podčiarkovníky namiesto medzier.

```md
riadok tri__  
riadok štyri
```

Renderuje sa ako:

riadok tri<br>
riadok štyri

**Dvojitý Enter (s koncovými medzerami alebo bez nich)**: Dvojité stlačenie `Enter` (alebo viacnásobné) oddelí riadky do dvoch samostatných odsekov (HTML elementy `<p>`), bez ohľadu na to, či na koniec prvého riadku pridáte medzery.

```md
riadok päť

riadok šesť
```

Renderuje sa ako:

<p>riadok päť</p>
<p>riadok šesť</p>

## Nadpisy

Na vytvorenie nadpisu pridajte pred text nadpisu až šesť symbolov `#`. Počet symbolov `#` určuje úroveň nadpisu (ako je zobrazené v [[Prehľad|Prehľade]]).

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

## Tučné, kurzíva, zvýraznenia

Formátovanie textu je možné aplikovať aj pomocou [[Klávesové skratky úprav|klávesových skratiek úprav]].

| Štýl | Syntax | Príklad | Výstup |
|-|-|-|-|
| Tučné | `** **` alebo `__ __` | `**Tučný text**` | **Tučný text** |
| Kurzíva | `* *` alebo `_ _`  | `*Text kurzívou*` | *Text kurzívou* |
| Prečiarknutie | `~~ ~~` |  `~~Prečiarknutý text~~` | ~~Prečiarknutý text~~ |
| Zvýraznenie | `== ==` |  `==Zvýraznený text==` | ==Zvýraznený text== |
| Tučné a vnorená kurzíva | `** **` a `_ _`  | `**Tučný text a _vnorená kurzíva_ text**` | **Tučný text a _vnorená kurzíva_ text** |
| Tučné a kurzíva | `*** ***` alebo `___ ___` |  `***Tučný text a kurzíva***` | ***Tučný text a kurzíva*** |

Formátovanie je možné vynútiť zobrazenie ako obyčajný text pridaním spätného lomítka `\` pred neho.

\*\*Tento riadok nebude tučný\*\*

```markdown
\*\*Tento riadok nebude tučný\*\*
```

\**Tento riadok bude kurzívou a zobrazí hviezdičky*\*

```markdown
\**Tento riadok bude kurzívou a zobrazí hviezdičky*\*
```

## Interné odkazy

Obsidian podporuje dva formáty pre [[Interné odkazy|interné odkazy]] medzi poznámkami:

- Wiki odkaz: `[[Tri zákony pohybu]]`
- Markdown: `[Tri zákony pohybu](Tri%20zákony%20pohybu.md)`

## Externé odkazy

Ak chcete vytvoriť odkaz na externú URL adresu, môžete vytvoriť inline odkaz tak, že text odkazu obklopíte hranatými zátvorkami (`[ ]`) a potom URL adresu do okrúhlych zátvoriek (`( )`).

```md
[Pomocník Obsidian](https://help.obsidian.md)
```

[Pomocník Obsidian](https://help.obsidian.md)

Môžete tiež vytvoriť externé odkazy na súbory v iných trezoroch pomocou odkazu na [[Obsidian URI|Obsidian URI]].

```md
[Poznámka](obsidian://open?vault=MainVault&file=Note.md)
```

### Escapovanie medzier v odkazoch

Ak vaša URL adresa obsahuje medzery, musíte ich escapovať nahradením za `%20`.

```md
[Moja poznámka](obsidian://open?vault=MainVault&file=My%20Note.md)
```

URL adresu môžete tiež escapovať tak, že ju zabalíte do lomených zátvoriek (`< >`).

```md
[Moja poznámka](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Externé obrázky

Obrázky s externými URL adresami môžete pridať tak, že pred [[#Externé odkazy|externý odkaz]] pridáte symbol `!`.

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Rozmery obrázku môžete zmeniť pridaním `|640x480` do cieľa odkazu, kde 640 je šírka a 480 je výška.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Ak zadáte iba šírku, obrázok sa škáluje podľa pôvodného pomeru strán. Napríklad:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Tip
> Ak chcete pridať obrázok z vnútra vášho trezoru, môžete tiež [[Vkladanie súborov#Vloženie obrázka do poznámky|vložiť obrázok do poznámky]].

## Citáty

Text môžete citovať pridaním symbolu `>` pred text.

```md
> Ľudia čelia čoraz zložitejším a naliehavejším problémom a ich efektívnosť pri riešení týchto problémov je záležitosťou, ktorá je kritická pre stabilitu a pokračujúci pokrok spoločnosti.

\- Doug Engelbart, 1961
```

> Ľudia čelia čoraz zložitejším a naliehavejším problémom a ich efektívnosť pri riešení týchto problémov je záležitosťou, ktorá je kritická pre stabilitu a pokračujúci pokrok spoločnosti.

\- Doug Engelbart, 1961

> [!tip]- Tip
> Citát môžete premeniť na [[Popisy|zvýraznený blok]] pridaním `[!info]` ako prvého riadku v citáte.

## Zoznamy

Neusporiadaný zoznam môžete vytvoriť pridaním `-`, `*` alebo `+` pred text.

```md
- Prvá položka zoznamu
- Druhá položka zoznamu
- Tretia položka zoznamu
```

- Prvá položka zoznamu
- Druhá položka zoznamu
- Tretia položka zoznamu

Na vytvorenie číslovaného zoznamu začnite každý riadok číslom nasledovaným symbolom `.` alebo `)`.

```md
1. Prvá položka zoznamu
2. Druhá položka zoznamu
3. Tretia položka zoznamu
```

1. Prvá položka zoznamu
2. Druhá položka zoznamu
3. Tretia položka zoznamu

```md
1) Prvá položka zoznamu
2) Druhá položka zoznamu
3) Tretia položka zoznamu
```

1) Prvá položka zoznamu
2) Druhá položka zoznamu
3) Tretia položka zoznamu

Môžete použiť `Shift+Enter` na vloženie [[#Zalomenia riadkov|zalomenia riadku]] v rámci číslovaného zoznamu bez zmeny číslovania.

```md
1. Prvá položka zoznamu
   
2. Druhá položka zoznamu
3. Tretia položka zoznamu
   
4. Štvrtá položka zoznamu
5. Piata položka zoznamu
6. Šiesta položka zoznamu
```

### Zoznamy úloh

Na vytvorenie zoznamu úloh začnite každú položku zoznamu pomlčkou a medzerou, za ktorými nasleduje `[ ]`.

```md
- [x] Toto je dokončená úloha.
- [ ] Toto je nedokončená úloha.
```

- [x] Toto je dokončená úloha.
- [ ] Toto je nedokončená úloha.

Úlohu môžete prepnúť v režime čítania kliknutím na začiarkavacie políčko.

> [!tip]- Tip
> Na označenie úlohy ako dokončenej môžete do zátvoriek vložiť akýkoľvek znak.
>
> ```md
> - [x] Mlieko
> - [?] Vajcia
> - [-] Vajcia
> ```
>
> - [x] Mlieko
> - [?] Vajcia
> - [-] Vajcia

### Vnorené zoznamy

Môžete vnoriť akýkoľvek typ zoznamu — číslovaný, neusporiadaný alebo zoznam úloh — pod akýkoľvek iný typ zoznamu.

Na vytvorenie vnoreného zoznamu odsaďte jednu alebo viac položiek zoznamu. V rámci vnorenej štruktúry môžete kombinovať typy zoznamov:

```md
1. Prvá položka zoznamu
   1. Vnorená číslovaná položka
2. Druhá položka zoznamu
   - Vnorená nečíslovaná položka
```

1. Prvá položka zoznamu
   1. Vnorená číslovaná položka
2. Druhá položka zoznamu
   - Vnorená nečíslovaná položka

Podobne môžete vytvoriť vnorený zoznam úloh odsadením jednej alebo viacerých položiek zoznamu:

```md
- [ ] Položka úlohy 1
	- [ ] Podúloha 1
- [ ] Položka úlohy 2
	- [ ] Podúloha 1
```

- [ ] Položka úlohy 1
	- [ ] Podúloha 1
- [ ] Položka úlohy 2
	- [ ] Podúloha 1

Použite `Tab` alebo `Shift+Tab` na odsadenie alebo zmenšenie odsadenia vybraných položiek zoznamu pre jednoduchú organizáciu.

## Vodorovné pravítko

Môžete použiť tri alebo viac hviezdičiek `***`, pomlčiek `---` alebo podčiarkovníkov `___` na samostatnom riadku na pridanie vodorovnej čiary. Symboly môžete tiež oddeliť medzerami.

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

Kód môžete formátovať inline v rámci vety aj ako samostatný blok.

### Inline kód

Kód v rámci vety môžete formátovať pomocou jednoduchých spätných apostrofov.

```md
Text vo vnútri `spätných apostrofov` na riadku bude formátovaný ako kód.
```

Text vo vnútri `spätných apostrofov` na riadku bude formátovaný ako kód.

Ak chcete vložiť spätné apostrofy do inline bloku kódu, obklopte ich dvojitými spätnými apostrofmi takto: inline ``kód so spätným apostrofom ` vnútri``.

### Bloky kódu

Na formátovanie kódu ako bloku ho ohraničte tromi alebo viacerými spätnými apostrofmi alebo tromi alebo viacerými vlnovkami.

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

Blok kódu môžete vytvoriť aj odsadením textu pomocou `Tab` alebo 4 medzerami.
`````md
    cd ~/Desktop
`````

K bloku kódu môžete pridať zvýrazňovanie syntaxe pridaním kódu jazyka za prvú sadu spätných apostrofov.

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

Obsidian používa Prism na zvýrazňovanie syntaxe. Viac informácií nájdete v časti [Podporované jazyky](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS a zobrazenia editora
> [[Zobrazenia a režim úprav#Režim zdroja|Režim zdroja]] a [[Zobrazenia a režim úprav#Živý náhľad|Živý náhľad]] nepodporujú PrismJS a môžu zvýrazňovanie syntaxe renderovať odlišne.

#### Vnorené bloky kódu

Keď potrebujete zahrnúť blok kódu do iného bloku kódu (napríklad pri dokumentovaní použitia blokov kódu), môžete pre vonkajší blok kódu použiť viac ako tri spätné apostrofy alebo vlnovky.

Na vnorenie blokov kódu použite štyri alebo viac spätných apostrofov (alebo vlnoviek) pre vonkajší blok, zatiaľ čo vnútorný blok používa tri:
`````md
````md
Tu je návod ako vytvoriť blok kódu:
```js
console.log("Hello world")
```
````
`````

Môžete tiež kombinovať spätné apostrofy a vlnovky. To je obzvlášť užitočné pri práci s kódom, ktorý generuje ďalšie bloky kódu:
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

Kľúčový princíp je, že vonkajší blok kódu musí používať **viac** ohraničujúcich znakov (spätných apostrofov alebo vlnoviek) než akýkoľvek vnútorný blok kódu, alebo používať iný typ ohraničujúceho znaku.

## Poznámky pod čiarou

K poznámkam môžete pridať poznámky pod čiarou[^footnote] pomocou nasledujúcej syntaxe:

[^footnote]: Toto je poznámka pod čiarou.

```md
Toto je jednoduchá poznámka pod čiarou[^1].

[^1]: Toto je odkazovaný text.
[^2]: Pridajte 2 medzery na začiatok každého nového riadku.
  To vám umožní písať poznámky pod čiarou, ktoré presahujú viacero riadkov.
[^note]: Pomenované poznámky pod čiarou sa stále zobrazujú ako čísla, ale môžu uľahčiť identifikáciu a prepojenie odkazov.
```

Poznámky pod čiarou môžete tiež vložiť inline do vety. Všimnite si, že strieška ide mimo zátvoriek.

```md
Môžete tiež použiť inline poznámky pod čiarou. ^[Toto je inline poznámka pod čiarou.]
```

> [!note] Poznámka
> Inline poznámky pod čiarou fungujú iba v režime čítania, nie v živom náhľade.

Pomocou [[Zobrazenie poznámok pod čiarou]] môžete zobraziť všetky poznámky pod čiarou v poznámke.

## Komentáre

Komentáre môžete pridať obalením textu znakmi `%%`. Komentáre sú viditeľné iba v zobrazení editora.

```md
Toto je %%inline%% komentár.

%%
Toto je blokový komentár.

Blokové komentáre môžu presahovať viacero riadkov.
%%
```

## Escapovanie Markdown syntaxe

V niektorých prípadoch budete musieť zobraziť špeciálne znaky v Markdown, ako `*`, `_` alebo `#`, bez aktivovania ich formátovania. Na doslovné zobrazenie týchto znakov umiestnite pred ne spätné lomítko (`\`).

> [!example] Bežné znaky na escapovanie
> 
> - Hviezdička: `\*`
> - Podčiarkovník: `\_`
> - Mriežka: `\#`
> - Spätný apostrof: `` \` ``
> - Zvislá čiara (používaná v tabuľkách): `\|`
> - Vlnovka: `\~`

```md
\*Tento text nebude kurzívou\*.
```

\*Tento text nebude kurzívou\*.

Pri práci s číslovanými zoznamami môžete potrebovať escapovať bodku za číslom, aby ste zabránili automatickému formátovaniu zoznamu. Spätné lomítko (`\`) umiestnite pred bodku, **nie** pred číslo.

```md
1\. Toto nebude položka zoznamu.
```

1\. Toto nebude položka zoznamu.

## Viac informácií

Ak sa chcete dozvedieť viac o pokročilej syntaxi formátovania, ako sú tabuľky, diagramy a matematické výrazy, pozrite si [[Rozšírená syntax formátovania]].

Ak sa chcete dozvedieť viac o tom, ako Obsidian spracováva Markdown, pozrite si [[Obsidian Flavored Markdown]].
