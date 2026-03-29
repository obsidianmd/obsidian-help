---
permalink: web-clipper/variables
---
[[Obsidian Web Clipper/Šablony|Šablony Web Clipper]] mohou používat proměnné k automatickému předvyplnění dat ze stránky v šabloně. Proměnné lze používat v **názvu poznámky**, **umístění poznámky**, **vlastnostech** a **obsahu poznámky**. Proměnné lze také upravovat pomocí [[Filtry|filtrů]].

Pomocí ikony `...` v rozšíření [[Úvod do Obsidian Web Clipper|Web Clipper]] získáte přístup k proměnným aktuální stránky pro použití v šablonách. Existuje pět typů proměnných, které můžete použít:

- [[Proměnné#Přednastavené proměnné|Přednastavené proměnné]]
- [[Proměnné#Promptové proměnné|Promptové proměnné]]
- [[Proměnné#Meta proměnné|Meta proměnné]]
- [[Proměnné#Selektorové proměnné|Selektorové proměnné]]
- [[Proměnné#Proměnné Schema.org|Proměnné Schema.org]]

## Přednastavené proměnné

Přednastavené proměnné jsou automaticky generovány na základě obsahu stránky. Obvykle fungují na většině webových stránek.

Hlavní obsahová proměnná je `{{content}}`, která obsahuje obsah článku, nebo [[Zvýraznění webových stránek|zvýrazněné části]], nebo výběr, pokud je na stránce vybraný text. Upozorňujeme, že `{{content}}` se pokouší extrahovat hlavní obsah stránky, což nemusí vždy odpovídat vašim potřebám. V takovém případě můžete použít jiné přednastavené proměnné nebo selektorové proměnné k extrakci požadovaného obsahu.

| Proměnná            | Popis                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Autor stránky                                                                          |
| `{{content}}`       | Obsah článku, [[Zvýraznění webových stránek\|zvýrazněné části]] nebo výběr ve formátu Markdown |
| `{{contentHtml}}`   | Obsah článku, [[Zvýraznění webových stránek\|zvýrazněné části]] nebo výběr ve formátu HTML |
| `{{date}}`          | Aktuální datum, lze formátovat pomocí filtru `date`                                    |
| `{{description}}`   | Popis nebo výňatek                                                                     |
| `{{domain}}`        | Doména                                                                                 |
| `{{favicon}}`       | URL faviconu                                                                           |
| `{{fullHtml}}`      | Nezpracované HTML celého obsahu stránky                                                |
| `{{highlights}}`    | [[Zvýraznění webových stránek\|Zvýrazněné části]] s textem a časovými značkami         |
| `{{image}}`         | URL obrázku pro sdílení na sociálních sítích                                           |
| `{{published}}`     | Datum publikování, lze formátovat pomocí filtru `date`                                 |
| `{{selection}}`     | Výběr ve formátu Markdown                                                              |
| `{{selectionHtml}}` | Výběr ve formátu HTML                                                                  |
| `{{site}}`          | Název webu nebo vydavatel                                                              |
| `{{title}}`         | Název stránky                                                                          |
| `{{time}}`          | Aktuální datum a čas                                                                   |
| `{{url}}`           | Aktuální URL                                                                           |
| `{{words}}`         | Počet slov                                                                             |

## Promptové proměnné

Promptové proměnné využívají jazykové modely k extrakci a úpravě dat pomocí přirozeného jazyka. Promptové proměnné vyžadují, aby byl [[Interpretovat webové stránky|Překladač]] zapnutý a nakonfigurovaný.

Promptové proměnné používají syntaxi `{{"shrnutí stránky"}}`. Dvojité uvozovky kolem promptu jsou důležité a odlišují prompty od přednastavených proměnných. Odpovědi na prompty lze následně zpracovat pomocí [[Filtry|filtrů]], např. `{{"shrnutí stránky"|blockquote}}`.

### Kdy používat promptové proměnné

Promptové proměnné mají výhodu extrémní flexibility a snadného zápisu, ale přinášejí i několik kompromisů: jsou pomalejší, a v závislosti na zvoleném [[Interpretovat webové stránky#Modely|poskytovateli]] mohou mít dopady na náklady a soukromí.

Na rozdíl od ostatních typů proměnných musí být promptové proměnné zpracovány externím jazykovým modelem, takže jsou nahrazeny až po spuštění [[Interpretovat webové stránky|Překladače]].

Nejlepší je *nepoužívat* promptové proměnné, pokud jsou data, která chcete extrahovat, v konzistentním formátu, který by bylo možné extrahovat pomocí jiných typů proměnných.

Na druhou stranu mohou být promptové proměnné užitečné, pokud jsou data, která chcete extrahovat, v *nekonzistentním* formátu napříč webovými stránkami. Můžete například vytvořit [[Obsidian Web Clipper/Šablony|šablonu]] pro ukládání knih, která je nezávislá na konkrétním knižním webu. Promptové proměnné jako `{{"autor knihy"}}` budou fungovat na jakémkoli knižním webu, zatímco selektorové proměnné obvykle fungují pouze pro jeden konkrétní web.

### Příklady

Prompty mohou používat téměř jakýkoli dotaz v přirozeném jazyce. V závislosti na použitém modelu mohou prompty dotazovat nebo překládat data napříč jazyky.

- `{{"shrnutí ve třech odrážkách, přeložené do francouzštiny"}}` pro extrakci odrážek o stránce a jejich překlad do francouzštiny.
- `{{"un resumé de la page en trois points"}}` pro extrakci tří odrážek pomocí promptu ve francouzštině.

Prompty mohou transformovat obsah stránky do formátu JSON, se kterým lze manipulovat pomocí [[Filtry|filtrů]]. Například:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Meta proměnné

Meta proměnné umožňují extrahovat data z [meta elementů](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) na stránce, včetně dat [Open Graph](https://ogp.me/) používaných k vyplnění náhledů pro sdílení na sociálních sítích.

- `{{meta:name}}` vrací obsah meta tagu name s daným názvem, např. `{{meta:name:description}}` pro meta tag `description`.
- `{{meta:property}}` vrací obsah meta tagu property s danou vlastností, např. `{{meta:property:og:title}}` pro meta tag `og:title`.

## Selektorové proměnné

Selektorové proměnné umožňují extrahovat textový obsah z elementů na stránce pomocí [CSS selektorů](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

Syntaxe je `{{selector:cssSelector?attribute}}`, kde `?attribute` je volitelný. Pokud není uveden žádný atribut, vrací se textový obsah elementu. Můžete také použít `{{selectorHtml:cssSelector}}` pro získání HTML obsahu elementu. Selektorové proměnné obvykle nejlépe fungují na konkrétní webové stránce nebo sadě webových stránek s konzistentní HTML strukturou.

- `{{selector:h1}}` vrací textový obsah všech elementů `h1` na stránce.
- `{{selector:.author}}` vrací textový obsah všech elementů `.author` na stránce.
- `{{selector:img.hero?src}}` vrací atribut `src` obrázku s třídou `hero`.
- `{{selector:a.main-link?href}}` vrací atribut `href` odkazu s třídou `main-link`.
- `{{selectorHtml:body|markdown}}` vrací celé HTML elementu `body`, převedené do Markdown pomocí [[Filtry#Zpracování HTML|filtru]] `markdown`.
- Vnořené CSS selektory a kombinátory jsou podporovány, pokud potřebujete větší specifičnost.
- Pokud selektoru odpovídá více elementů, vrací se pole, které můžete zpracovat pomocí [[Filtry#Pole a objekty|filtrů pro pole a objekty]] jako `join` nebo `map`.

Selektorové proměnné lze také používat přímo v [[Logika|logice šablon]]:

- Ve smyčkách: `{% for comment in selector:.comment %}...{% endfor %}`
- V podmínkách: `{% if selector:.premium-badge %}...{% endif %}`
- V přiřazení proměnných: `{% set items = selector:.list-item %}`

## Proměnné Schema.org

Schema proměnné umožňují extrahovat data z [schema.org](https://schema.org/) JSON-LD na stránce. Data schema.org lze také použít k automatickému [[Obsidian Web Clipper/Šablony#Schema.org matching|spuštění šablony]].

- `{{schema:@Type:key}}` vrací hodnotu klíče ze schématu.
- `{{schema:@Type:parent.child}}` vrací hodnotu vnořené vlastnosti.
- `{{schema:@Type:arrayKey}}` vrací první položku v poli.
- `{{schema:@Type:arrayKey[index].property}}` vrací položku na zadaném indexu v poli.
- `{{schema:@Type:arrayKey[*].property}}` vrací konkrétní vlastnost ze všech položek v poli.

Můžete také použít zkrácenou notaci bez uvedení typu schématu:

- `{{schema:author}}` najde první vlastnost `author` v jakémkoli typu schématu.
- `{{schema:name}}` najde první vlastnost `name` v jakémkoli typu schématu.

Tato zkrácená notace je obzvláště užitečná, když neznáte nebo nepotřebujete znát konkrétní typ schématu, ale znáte název vlastnosti, kterou hledáte.

Vnořené vlastnosti a přístup k polím fungují také, jak se specifikovaným `@Type` schématu, tak bez něj:

- `{{schema:author.name}}` najde první vlastnost `author` a poté přistoupí k její podvlastnosti `name`.
- `{{schema:author[0].name}}` přistoupí k `name` prvního autora v poli autorů.
- `{{schema:author[*].name}}` vrátí pole všech jmen autorů.
