---
permalink: web-clipper/templates
description: 'Naučte se vytvářet šablony, které automaticky zachycují a organizují metadata webových stránek pomocí Web Clipperu.'
---
[[Úvod do Obsidian Web Clipper|Web Clipper]] umožňuje vytvářet šablony, které automaticky zachycují a organizují metadata z webových stránek. Ukázkové šablony jsou dostupné v [repozitáři clipper-templates](https://github.com/kepano/clipper-templates).

## Vytvoření nebo úprava šablony

Pro **vytvoření** šablony přejděte do nastavení Web Clipper a klikněte na tlačítko **Nová šablona** v postranním panelu. Šablonu můžete také **duplikovat** pomocí nabídky **Více** v pravém horním rohu.

Pro **úpravu** šablony vyberte šablonu z postranního panelu. Vaše změny se automaticky uloží.

Šablony využívají [[Proměnné]] a [[Filtry]], které umožňují přizpůsobit způsob ukládání obsahu.

## Import a export šablon Web Clipper

Import šablony:

1. Otevřete rozšíření a klikněte na ikonu ozubeného kolečka **[[Nastavení]]**.
2. Přejděte na libovolnou šablonu v seznamu.
3. Klikněte na **Importovat** v pravém horním rohu nebo přetáhněte soubor(y) šablony ve formátu `.json` kamkoli do oblasti šablon.

Pro export šablony klikněte na **Exportovat** v pravém horním rohu. Tím se stáhne soubor šablony ve formátu `.json`. Data šablony můžete také zkopírovat do schránky přes nabídku **Více**.

## Nastavení šablony

### Chování

Definujte, jak bude obsah z Web Clipper přidán do Obsidian:

- **Vytvořit novou poznámku**
- **Přidat do existující poznámky**, na začátek nebo konec
- **Přidat do denní poznámky**, na začátek nebo konec (vyžaduje aktivní plugin [[Každodenní poznámky]])

### Automatické spuštění šablony

Spouštěče šablon umožňují automaticky vybrat šablonu na základě URL aktuální stránky nebo dat [schema.org](https://schema.org/). Pro každou šablonu můžete definovat více pravidel, oddělených novým řádkem.

První shoda v seznamu šablon určuje, která šablona bude použita. V nastavení Web Clipper můžete šablony přetahovat nahoru a dolů a měnit tak pořadí, ve kterém se šablony porovnávají.

#### Jednoduché porovnávání URL

Jednoduché porovnávání spustí šablonu, pokud URL aktuální stránky *začíná* daným vzorem. Například:

- `https://obsidian.md` odpovídá jakékoli URL, která začíná tímto textem.

#### Porovnávání regulárním výrazem

Šablony můžete spouštět na základě složitějších vzorů URL pomocí regulárních výrazů. Svůj vzor regulárního výrazu uzavřete do lomítek (`/`). Nezapomeňte speciální znaky ve vzorech regulárních výrazů (jako `.` a `/`) escapovat zpětným lomítkem (`\`). Například:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` odpovídá jakékoli referenční stránce IMDB.

#### Porovnávání schema.org

Šablony můžete spouštět na základě dat [schema.org](https://schema.org/) přítomných na stránce. Použijte prefix `schema:` následovaný klíčem schématu, který chcete porovnat. Volitelně můžete zadat očekávanou hodnotu. Například:

- `schema:@Recipe` odpovídá stránkám, kde je typ schématu "Recipe".
- `schema:@Recipe.name` odpovídá stránkám, kde je přítomno `@Recipe.name`.
- `schema:@Recipe.name=Cookie` odpovídá stránkám, kde `@Recipe.name` je "Cookie".

Hodnoty schema.org lze také použít k [[Proměnné#Proměnné Schema.org|předvyplnění dat v šablonách]].

### Kontext překladače

Když je [[Interpretovat webové stránky|Překladač]] zapnutý, můžete pomocí [[Proměnné#Promptové proměnné|proměnných výzev]] extrahovat obsah stránky přirozeným jazykem. Pro každou šablonu můžete definovat [[Interpretovat webové stránky#Kontext|kontext]], ke kterému má Překladač přístup.
