---
permalink: snippets
publish: true
mobile: true
description: Learn how to change parts of the Obsidian app’s appearance without creating a full theme.
---
Даведайцеся, як змяніць асобныя элементы выгляду праграмы Obsidian, не [ствараючы тэму](https://docs.obsidian.md/Themes/App+themes/Build+a+theme). 

> [!tip] Калі вам патрэбна інфармацыя пра CSS для [[Уводзіны ў Obsidian Publish|Obsidian Publish]], глядзіце [[Наладжванне сайта]].

CSS — гэта мова, якая вызначае выгляд HTML. Дадаючы CSS-сніпеты, можна змяняць часткі інтэрфейсу Obsidian, напрыклад памер і колер загалоўкаў. У Obsidian ёсць [CSS-зменныя](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables), якія дапамагаюць лёгка наладжваць інтэрфейс.

Obsidian шукае CSS-сніпеты ў [[Папка канфігурацыі|папцы канфігурацыі]] сховішча.

## Дадаванне сніпета

Каб дадаць CSS-сніпет на **камп'ютары** ![[lucide-monitor-check.svg#icon]], выканайце наступныя крокі:

1. Адкрыйце **[[Налады|Налады]]** ![[lucide-settings.svg#icon]].
2. У раздзеле **Выгляд → CSS сніпеты** абярыце **Адкрыць папку сніпетаў** ![[lucide-folder-open.svg#icon]].
3. У папцы сніпетаў стварыце CSS-файл са сваім сніпетам.
4. У Obsidian у раздзеле **Выгляд → CSS сніпеты** абярыце **Абнавіць сніпеты** ![[lucide-refresh-cw.svg#icon]], каб убачыць сніпет у спісе.
5. Уключыце сніпет пераключальнікам.

Каб дадаць CSS-сніпет на **мабільнай прыладзе/планшэце** ![[obsidian-icon-smartphone.svg#icon]], выканайце наступныя крокі:

1. Адкрыйце файлавы мэнэджар і знайдзіце сваё сховішча. Месцазнаходжанне сховішча можна паглядзець у _Кіраваць сховішчамі..._: націсніце на сховішча і паглядзіце шлях.
2. Адкрыйце [[Папка канфігурацыі|папку канфігурацыі]] і стварыце ў ёй папку `snippets`, калі яе няма.
3. Дадайце ў гэтую папку свой CSS-сніпет.
4. Адкрыйце **[[Налады|Налады]]** ![[lucide-settings.svg#icon]] Obsidian.
5. Абярыце **Выгляд** злева.
6. Пракруціце ўніз да раздзела **CSS сніпеты**.
7. Націсніце **Абнавіць сніпеты** ![[lucide-refresh-cw.svg#icon]], каб абнавіць спіс.
8. Націсніце на пераключальнік, каб уключыць сніпет.

Акрамя таго, можна
- [[Сінхранізацыя нататак паміж прыладамі|Сінхранізаваць]] змены праз сваю службу сінхранізацыі.
- Выкарыстаць плагін супольнасці, каб ствараць сніпеты непасрэдна ў Obsidian. 

Пасля ўключэння Obsidian аўтаматычна заўважае змены ў CSS-сніпетах і ўжывае іх, калі вы захоўваеце файл. 

> [!tip] Перазапускаць Obsidian, каб змены ўступілі ў сілу, не трэба. Але, магчыма, давядзецца выканаць праз [[Меню каманд|меню каманд]] каманду «Перазагрузіць праграму без захавання», каб убачыць змены ў бягучай тэме або нататцы.

## Напісанне CSS для Obsidian

Obsidian прапануе некалькі спосабаў, якія робяць напісанне CSS прасцейшым і больш магутным.

У ім ёсць мноства [CSS-зменных](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables), каб лёгка змяняць часткі Obsidian, і ўбудаваны [[Уласцівасці#Тыпы ўласцівасцяў|тып уласцівасці]], каб змяняць выгляд адной або некалькіх нататак.

> [!example] Зменныя
> Стварыце файл `headers.css` з наступным змесцівам, каб пафарбаваць шэсць [[Асноўны сінтаксіс фарматавання#Загалоўкі|узроўняў загалоўкаў]] у колеры вясёлкі:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] CSS-класы
> Прызначце назву ўласнага CSS-класа (або спіс CSS-класаў) зададзенай [[Уласцівасці|уласцівасці]] `cssclasses`, каб адна або некалькі нататак выглядалі інакш, чым астатнія.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/Уласцівасці**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> Ва ўсіх нататках, дзе ўласцівасць `cssclasses` змяшчае значэнне `red-border`, выявы паказваюцца з чырвонай рамкай.

Каб пераканацца, што CSS-файл сапраўдны і правільна адфарматаваны, раім правяраць яго інструментам накшталт [CSS Validation Service](https://jigsaw.w3.org/css-validator/): няправільны CSS не будзе працаваць.

## Даведацца больш

- Калі вы толькі пачынаеце вывучаць CSS, паглядзіце [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) ад Mozilla.
- Падрабязней пра стылізацыю Obsidian:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
