---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: 'Vlastnosti vám umožňují organizovat informace o poznámce. Vlastnosti obsahují strukturovaná data, jako je text, odkazy, data, zaškrtávací políčka a čísla.'
---
Vlastnosti umožňují organizovat informace o poznámce. Vlastnosti obsahují strukturovaná data, jako je text, odkazy, data, zaškrtávací políčka a čísla. Vlastnosti lze také používat v kombinaci s [[Komunitní pluginy|komunitními pluginy]], které mohou s vašimi strukturovanými daty dělat užitečné věci.

## Přidání vlastností do poznámky

Existuje několik způsobů, jak přidat vlastnost do poznámky:

- Použijte [[Paleta příkazů|příkaz]] **Přidat vlastnost souboru**.
- Použijte **`Cmd/Ctrl+;`** [[Klávesové zkratky|klávesovou zkratku]].
- Zvolte **Přidat vlastnost souboru** z nabídky **Více akcí** (vyvolané ikonou tří teček nebo kliknutím pravým tlačítkem na kartu).
- Na úplný začátek souboru napište `---`.

Po přidání vlastnosti se v horní části souboru zobrazí řádek se dvěma vstupy: _název_ vlastnosti a _hodnota_ vlastnosti.

Pro název si můžete zvolit cokoliv. Obsidian nabízí několik výchozích vlastností: `tags`, `cssclasses` a `aliases`.

Jakmile zvolíte název vlastnosti, můžete jí přiřadit hodnotu.

### Typy vlastností

Kromě názvu a hodnoty mají vlastnosti také _typ_. Typ vlastnosti určuje, jaký druh hodnot může ukládat a jak s nimi Obsidian nakládá. Chcete-li změnit typ vlastnosti, klikněte na ikonu typu vedle názvu vlastnosti a vyberte jinou možnost. Typy vlastností můžete také spravovat pomocí základního pluginu [[Zobrazení vlastností]].

Obsidian podporuje následující typy vlastností:

- **[[#Text]]**
- **[[#Seznam]]**
- **[[#Číslo]]**
- **[[#Zaškrtávací políčko]]**
- **[[#Datum]]**
- **[[#Datum & čas]]**
- **[[#Tagy]]**

Jakmile je typ vlastnosti přiřazen k názvu vlastnosti, všechny vlastnosti s tímto názvem v celém trezoru budou používat stejný typ.

## Pokročilé použití

### Hledání vlastností

Vlastnosti mají vlastní [[Hledat|syntaxi vyhledávání]], kterou můžete použít společně s dalšími vyhledávacími výrazy a operátory. [[Hledat#Hledání vlastností|Viz syntaxe vyhledávání pro vlastnosti]].

### Šablony

Do [[Šablony|šablon]] můžete přidávat vlastnosti.

Když vložíte šablonu do aktivní poznámky, všechny vlastnosti ze šablony budou přidány do poznámky. Obsidian také sloučí všechny vlastnosti, které existují ve vaší poznámce, s vlastnostmi v šabloně. ^templates-properties

### Přejmenování vlastností

Vlastnost můžete přejmenovat kliknutím pravým tlačítkem na ni v [[Zobrazení vlastností|zobrazení Všechny vlastnosti]].

### Režimy zobrazení

Způsob zobrazení vlastností v poznámce můžete změnit v **[[Nastavení]] → Editor → Vlastnosti v dokumentu**. Možnosti jsou:

- **Viditelné** (výchozí) – zobrazuje vlastnosti v horní části poznámky, pokud existují.
- **Skryté** – skryje vlastnosti, stále je lze zobrazit v postranním panelu pomocí [[Zobrazení vlastností]].
- **Zdroj** – zobrazuje vlastnosti ve formátu prostého textu YAML.

### CSS úryvky

Pomocí [[CSS úryvky|CSS úryvků]] můžete změnit vzhled konkrétních poznámek.

### Nepodporované funkce

Několik funkcí v současnosti není v Obsidian podporováno:

- **Vnořené vlastnosti**: Pro zobrazení vnořených vlastností doporučujeme použít [[Zobrazení a režim úprav#Režim zdroje|režim zdroje]].
- **Hromadná úprava vlastností**: Pro hloubkovou hromadnou úpravu mimo [[Zobrazení vlastností]] doporučujeme použít nástroje pro hromadnou úpravu jako VSCode, skripty a komunitní pluginy.
- **Markdown ve vlastnostech**: Toto je záměrné omezení, protože vlastnosti jsou určeny pro malé, atomické kousky informací, které jsou čitelné jak pro člověka, tak pro stroj.

## Klávesové zkratky

### Přidání vlastnosti

| Akce | Klávesová zkratka |
|---|---|
|Přidat novou vlastnost|`Cmd + ;`|

### Navigace mezi vlastnostmi

Když je vlastnost zaměřená

| Akce | Klávesová zkratka |
|---|---|
|Zaměřit další vlastnost|`Šipka dolů` nebo `Tab`|
|Zaměřit předchozí vlastnost|`Šipka nahoru` nebo `Shift+Tab`|
|Přejít na editor|`Alt+Šipka dolů`|

### Výběr vlastností

| Akce | Klávesová zkratka |
|---|---|
|Rozšířit výběr nahoru|`Shift+Šipka nahoru`|
|Rozšířit výběr dolů|`Shift+Šipka dolů`|
|Vybrat vše|`Cmd+A`|

### Úprava vlastností

| Akce | Klávesová zkratka |
|---|---|
|Upravit název vlastnosti|`Šipka vlevo`|
|Upravit hodnotu vlastnosti|`Šipka vpravo`|
|Zaměřit vlastnost|`Escape`|
|Smazat vlastnost|`Cmd+Backspace`<br><br>pokud jsou vybrány nějaké vlastnosti, smaže se místo toho výběr.|
|Zpět|`Cmd+Z`|
|Znovu|`Cmd+Shift+Z`|

### Vim (pokročilé)

| Akce | Klávesová zkratka |
|---|---|
|Přesun dolů|`j`|
|Přesun nahoru|`k`|
|Zaměřit klíč|`h`|
|Zaměřit hodnotu|`l`|
|Zaměřit hodnotu (kurzor na konci)|`A`|
|Zaměřit hodnotu (kurzor na začátku)|`i`|
|Vytvořit novou vlastnost|`o`|

## Formát vlastností

Vlastnosti jsou uloženy ve formátu [YAML](https://yaml.org/) v horní části souboru. YAML je populární formát, který je snadno čitelný jak pro lidi, tak pro počítače.

Názvy vlastností jsou od hodnot odděleny dvojtečkou následovanou mezerou:

```yaml
---
name: value
---
```

Zatímco na pořadí jednotlivých párů název-hodnota nezáleží, každý název musí být v rámci poznámky jedinečný. Například nemůžete mít více než jednu vlastnost `tags`.

Hodnoty mohou být [[#Text|text]], [[#Číslo|čísla]], [[#Zaškrtávací políčko|zaškrtávací políčka]], [[#Datum|data]], [[#Datum & čas|data a časy]] nebo [[#Seznam|seznamy]].

### Text

Textové vlastnosti obsahují jeden řádek textu. Formátování Markdown se v textových vlastnostech nevykresluje. Hashtagy nevytvářejí štítky, když se použijí v textových vlastnostech.

Textové vlastnosti mohou obsahovat URL adresy a [[Interní odkazy]] pomocí syntaxe `[[Odkaz]]`. [[Interní odkazy]] v textových vlastnostech musí být uzavřeny v uvozovkách. Obsidian je přidá automaticky, pokud ručně zadáte interní odkazy do vlastností, ale buďte opatrní a přidejte je při použití pluginů pro šablony.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Seznam

Vlastnosti typu seznam obsahují více hodnot. Každá hodnota v seznamu se zobrazuje na vlastním řádku, předcházeném pomlčkou (-) a mezerou.

Hodnoty seznamu mohou obsahovat text, čísla a [[Interní odkazy]]. Při použití [[Interní odkazy|interních odkazů]] ve vlastnostech seznamu je uzavřete do uvozovek.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Číslo

Vlastnosti typu číslo musí být vždy doslovné číslo, nikoli výraz s operátory. Povolena jsou celá čísla i desetinná čísla.

```yaml
---
year: 1977
pie: 3.14
---
```

### Zaškrtávací políčko

Vlastnosti typu zaškrtávací políčko jsou buď `true`, nebo `false`. V živém náhledu se zobrazují jako zaškrtávací políčko.

```yaml
---
favorite: true
reply: false
last: # Neurčitá hodnota; často se zachází jako s false
```

### Datum

Vlastnosti typu datum jsou uloženy v následujícím formátu:

```yaml
---
date: 2020-08-21
---
```

Výběr data se řídí výchozím formátem data a času vašeho operačního systému. Můžete jej změnit v nastavení systému:

> [!info]- Windows
> **[[Nastavení]] → Čas a jazyk → Jazyk a oblast → Regionální formát → Změnit formáty**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Předvolby systému → Jazyk a oblast → Formát data**
> 
> ![[Mac-OS-DateTime.png|450]]

Pokud je zapnutý plugin [[Každodenní poznámky]], vlastnost datum bude navíc fungovat jako interní odkaz na odpovídající denní poznámku pro dané datum.

![[Každodenní poznámky#^daily-notes-date]]

### Datum & čas

Vlastnosti typu datum & čas zahrnují datum i konkrétní čas, uložené v následujícím formátu:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Stejně jako u [[#Datum|vlastností typu datum]] se výběr data a času řídí výchozím formátem vašeho operačního systému. Můžete jej změnit v nastavení systému.

### Tagy

Vlastnosti typu tagy jsou speciální typ vlastnosti používaný výhradně vlastností `tags`. Tento typ vlastnosti nelze přiřadit jiným vlastnostem.

Vlastnosti typu tagy jsou formátovány jako seznam, kde každý štítek je na vlastním řádku předcházeném pomlčkou (-) a mezerou.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

Vlastnost `tags` je jednou z [[#Výchozí vlastnosti|výchozích vlastností]] Obsidian. Další informace o použití štítků v Obsidian najdete v [[Tagy]].

### Vlastnosti ve formátu JSON

I když doporučujeme k definování vlastností používat YAML, můžete je také definovat pomocí [JSON](https://www.json.org/):

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Upozorňujeme, že blok JSON bude přečten, interpretován a uložen jako YAML.

## Výchozí vlastnosti

Obsidian obsahuje sadu výchozích vlastností:

| Vlastnost    | Typ    | Popis                                                        |
| ------------ | ------ | ------------------------------------------------------------ |
| `tags`       | Seznam | Viz [[Úpravy a formátování/Tagy\|Tagy]].                   |
| `aliases`    | Seznam | Viz [[Aliasy]].                                              |
| `cssclasses` | Seznam | Umožňuje stylovat jednotlivé poznámky pomocí [[CSS úryvky|CSS úryvků]]. |

### Vlastnosti pro Obsidian Publish

Následující výchozí vlastnosti lze použít s [[Úvod do Obsidian Publish|Obsidian Publish]]:

| Vlastnost     | Popis                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Viz [[Publikování obsahu#Automatický výběr dat k publikování\|Automatický výběr dat k publikování]].       |
| `permalink`   | Viz [[Trvalé odkazy\|Trvalé odkazy]].                                                                      |
| `description` | Viz [[Náhledy odkazů na sociálních sítích#Popis\|Popis]].                                                  |
| `image`       | Viz [[Náhledy odkazů na sociálních sítích#Obrázek\|Obrázek]].                                              |
| `cover`       | Viz [[Náhledy odkazů na sociálních sítích#Obrázek\|Obrázek]].                                              |

### Zastaralé vlastnosti

Tyto vlastnosti byly zastaralé v Obsidian 1.4 a měly by být nahrazeny jejich moderními ekvivalenty. Podpora pro ně jako [[#Výchozí vlastnosti]] je odstraněna v Obsidian 1.9.

| Vlastnost  | Popis                                    |
|------------|------------------------------------------|
| `tag`      | Zastaralý alias pro `tags`.              |
| `alias`    | Zastaralý alias pro `aliases`.           |
| `cssclass` | Zastaralý alias pro `cssclasses`.        |

> [!tip] Pokud potřebujete převést soubory ve vašem trezoru do formátu [[#Výchozí vlastnosti]], můžete použít [[Importér Markdown formátu]] k hromadné změně celého trezoru.
