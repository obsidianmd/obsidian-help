---
permalink: web-clipper/variables
---
[[Obsidian Web Clipper/Šablóny|Šablóny Web Clipper]] môžu používať premenné na automatické predvyplnenie údajov zo stránky v šablóne. Premenné je možné použiť v **názve poznámky**, **umiestnení poznámky**, **vlastnostiach** a **obsahu poznámky**. Premenné je tiež možné upravovať pomocou [[Filtre|filtrov]].

Pomocou ikony `...` v rozšírení [[Úvod do Obsidian Web Clipper|Web Clipper]] získate prístup k premenným aktuálnej stránky na použitie v šablónach. Existuje päť typov premenných, ktoré môžete použiť:

- [[Premenné#Prednastavené premenné|Prednastavené premenné]]
- [[Premenné#Promptové premenné|Promptové premenné]]
- [[Premenné#Meta premenné|Meta premenné]]
- [[Premenné#Selektorové premenné|Selektorové premenné]]
- [[Premenné#Premenné Schema.org|Premenné Schema.org]]

## Prednastavené premenné

Prednastavené premenné sú automaticky generované na základe obsahu stránky. Tieto zvyčajne fungujú na väčšine webových stránok.

Hlavná obsahová premenná je `{{content}}`, ktorá obsahuje obsah článku, alebo [[Zvýrazňovač|zvýraznenia]], alebo výber, ak je na stránke nejaký vybraný text. Všimnite si, že `{{content}}` sa pokúša extrahovať hlavný obsah stránky, čo nemusí vždy zodpovedať vašim potrebám. V takom prípade môžete použiť iné prednastavené premenné alebo selektorové premenné na extrakciu požadovaného obsahu.

| Premenná            | Popis                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Autor stránky                                                                          |
| `{{content}}`       | Obsah článku, [[Zvýrazňovač\|zvýraznenia]] alebo výber vo formáte Markdown |
| `{{contentHtml}}`   | Obsah článku, [[Zvýrazňovač\|zvýraznenia]] alebo výber vo formáte HTML |
| `{{date}}`          | Aktuálny dátum, možno formátovať pomocou filtra `date`                                 |
| `{{description}}`   | Popis alebo výňatok                                                                    |
| `{{domain}}`        | Doména                                                                                 |
| `{{favicon}}`       | URL favicon                                                                            |
| `{{fullHtml}}`      | Nespracované HTML celého obsahu stránky                                                |
| `{{highlights}}`    | [[Zvýrazňovač\|Zvýraznenia]] s textom a časovými značkami           |
| `{{image}}`         | URL obrázka na zdieľanie na sociálnych sieťach                                         |
| `{{published}}`     | Dátum publikovania, možno formátovať pomocou filtra `date`                             |
| `{{selection}}`     | Výber vo formáte Markdown                                                              |
| `{{selectionHtml}}` | Výber vo formáte HTML                                                                  |
| `{{site}}`          | Názov stránky alebo vydavateľ                                                          |
| `{{title}}`         | Nadpis stránky                                                                         |
| `{{time}}`          | Aktuálny dátum a čas                                                                   |
| `{{url}}`           | Aktuálna URL                                                                           |
| `{{words}}`         | Počet slov                                                                             |

## Promptové premenné

Promptové premenné využívajú jazykové modely na extrakciu a úpravu údajov pomocou prirodzeného jazyka. Promptové premenné vyžadujú, aby bol [[Interpret|Interpret]] zapnutý a nakonfigurovaný.

Promptové premenné používajú syntax `{{"súhrn stránky"}}`. Dvojité úvodzovky okolo promptu sú dôležité a odlišujú prompty od prednastavených premenných. Odpovede promptov je možné dodatočne spracovať pomocou [[Filtre|filtrov]], napr. `{{"súhrn stránky"|blockquote}}`.

### Kedy použiť promptové premenné

Promptové premenné majú výhodu extrémnej flexibility a jednoduchosti písania, avšak prichádzajú s niekoľkými kompromismi: sú pomalšie na spustenie a môžu mať nákladové a súkromné dôsledky v závislosti od [[Interpret#Modely|poskytovateľa]], ktorého si vyberiete.

Na rozdiel od iných typov premenných potrebujú promptové premenné spracovanie externým jazykovým modelom, takže sú nahradené až po spustení [[Interpret|Interpreta]].

Najlepšie je *nepoužívať* promptové premenné, ak sú údaje, ktoré chcete extrahovať, v konzistentnom formáte, ktorý by sa dal extrahovať inými typmi premenných.

Na druhej strane, promptové premenné môžu byť užitočné, ak sú údaje, ktoré chcete extrahovať, v *nekonzistentnom* formáte naprieč webovými stránkami. Napríklad môžete vytvoriť [[Obsidian Web Clipper/Šablóny|šablónu]] na ukladanie kníh, ktorá je nezávislá od konkrétnej knižnej stránky. Promptové premenné ako `{{"autor knihy"}}` budú fungovať na akejkoľvek knižnej stránke, zatiaľ čo selektorové premenné zvyčajne fungujú len pre jednu stránku.

### Príklady

Prompty môžu používať takmer akýkoľvek dopyt v prirodzenom jazyku. V závislosti od modelu, ktorý použijete, môžu prompty dopytovať alebo prekladať údaje naprieč jazykmi.

- `{{"súhrn v troch odrážkach, preložený do francúzštiny"}}` na extrakciu odrážok o stránke a ich preklad do francúzštiny.
- `{{"un resumé de la page en trois points"}}` na extrakciu troch odrážok pomocou promptu vo francúzštine.

Prompty môžu transformovať obsah stránky do formátu JSON, ktorý je možné manipulovať pomocou [[Filtre|filtrov]]. Napríklad:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Meta premenné

Meta premenné vám umožňujú extrahovať údaje z [meta elementov](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) na stránke, vrátane údajov [Open Graph](https://ogp.me/) používaných na vyplnenie náhľadov zdieľania na sociálnych sieťach.

- `{{meta:name}}` vráti obsah meta name značky s daným názvom, napr. `{{meta:name:description}}` pre meta značku `description`.
- `{{meta:property}}` vráti obsah meta property značky s danou vlastnosťou, napr. `{{meta:property:og:title}}` pre meta značku `og:title`.

## Selektorové premenné

Selektorové premenné vám umožňujú extrahovať textový obsah z elementov na stránke pomocou [CSS selektorov](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

Syntax je `{{selector:cssSelector?attribute}}`, kde `?attribute` je voliteľný. Ak nie je zadaný žiadny atribút, vráti sa textový obsah elementu. Môžete tiež použiť `{{selectorHtml:cssSelector}}` na získanie HTML obsahu elementu. Selektorové premenné fungujú najlepšie na konkrétnej webovej stránke alebo skupine stránok s konzistentnou HTML štruktúrou.

- `{{selector:h1}}` vráti textový obsah akýchkoľvek elementov `h1` na stránke.
- `{{selector:.author}}` vráti textový obsah akýchkoľvek elementov `.author` na stránke.
- `{{selector:img.hero?src}}` vráti atribút `src` obrázka s triedou `hero`.
- `{{selector:a.main-link?href}}` vráti atribút `href` odkazu s triedou `main-link`.
- `{{selectorHtml:body|markdown}}` vráti celé HTML elementu `body`, konvertované do Markdown pomocou [[Filtre#Spracovanie HTML|filtra]] `markdown`.
- Vnorené CSS selektory a kombinátory sú podporované, ak potrebujete väčšiu špecifickosť.
- Ak viacero elementov zodpovedá selektoru, vráti sa pole, ktoré môžete spracovať pomocou [[Filtre#Polia a objekty|filtrov polí a objektov]] ako `join` alebo `map`.

Selektorové premenné je možné použiť aj priamo v [[Logika|logike šablón]]:

- V cykloch: `{% for comment in selector:.comment %}...{% endfor %}`
- V podmienkach: `{% if selector:.premium-badge %}...{% endif %}`
- V priradení premenných: `{% set items = selector:.list-item %}`

## Premenné Schema.org

Premenné Schema umožňujú extrahovať údaje zo [schema.org](https://schema.org/) JSON-LD na stránke. Údaje schema.org je možné tiež použiť na automatické [[Obsidian Web Clipper/Šablóny#Párovanie Schema.org|spustenie šablóny]].

- `{{schema:@Type:key}}` vráti hodnotu kľúča zo schémy.
- `{{schema:@Type:parent.child}}` vráti hodnotu vnorenej vlastnosti.
- `{{schema:@Type:arrayKey}}` vráti prvú položku v poli.
- `{{schema:@Type:arrayKey[index].property}}` vráti položku na zadanom indexe v poli.
- `{{schema:@Type:arrayKey[*].property}}` vráti konkrétnu vlastnosť zo všetkých položiek v poli.

Môžete tiež použiť skrátený zápis bez špecifikácie typu schémy:

- `{{schema:author}}` nájde prvú vlastnosť `author` v akomkoľvek type schémy.
- `{{schema:name}}` nájde prvú vlastnosť `name` v akomkoľvek type schémy.

Tento skrátený zápis je obzvlášť užitočný, keď nepoznáte alebo vám nezáleží na konkrétnom type schémy, ale poznáte názov vlastnosti, ktorú hľadáte.

Vnorené vlastnosti a prístup k poliam fungujú tiež, s aj bez špecifikácie `@Type` schémy:

- `{{schema:author.name}}` nájde prvú vlastnosť `author` a potom pristúpi k jej podvlastnosti `name`.
- `{{schema:author[0].name}}` pristúpi k `name` prvého autora v poli autorov.
- `{{schema:author[*].name}}` vráti pole všetkých mien autorov.
