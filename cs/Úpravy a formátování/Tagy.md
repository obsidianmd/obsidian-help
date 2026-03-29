---
permalink: tags
---
Štítky jsou klíčová slova nebo témata, která vám pomohou rychle najít poznámky, které hledáte.

## Přidání štítku k poznámce

Pro vytvoření štítku zadejte v editoru symbol křížku (`#`) následovaný klíčovým slovem. Například `#meeting`.

Štítky můžete přidávat také pomocí [[Vlastnosti|vlastnosti]] `tags`. Štítky v YAML by měly být vždy formátovány jako seznam:

```yaml
---
tags:
  - recipe
  - cooking
---
```

## Vyhledávání poznámek pomocí štítků

Pro vyhledávání poznámek pomocí pluginu [[Hledat]] použijte ve vyhledávacím výrazu [[Hledat#Vyhledávací operátory|vyhledávací operátor]] `tag`, například `tag:#meeting`.

Štítky můžete také vyhledávat kliknutím na ně přímo v poznámkách.

Pro vyhledávání poznámek pomocí pluginu [[Panel tagů|Panel tagů]] vyberte **Tags: Show tags** v [[Paleta příkazů|paletě příkazů]] a poté vyberte štítek, který chcete vyhledat.

## Vnořené štítky

Vnořené štítky definují hierarchie štítků, které usnadňují vyhledávání a filtrování souvisejících štítků.

Vnořené štítky vytvoříte použitím lomítek (`/`) v názvu štítku, například `#inbox/to-read` a `#inbox/processing`.

- Při [[Hledat|hledání]] bude `tag:inbox` odpovídat jak `#inbox`, tak všem vnořeným štítkům, jako je `#inbox/to-read`.
- V [[Panel tagů|Panelu tagů]] jsou vnořené štítky zobrazeny jako podřízené svému nadřazenému štítku.
- V [[Úvod do Základen|Základnách]] jsou vnořené štítky rozpoznávány funkcí [[Funkce#hasTag|`hasTag`]], takže `file.hasTag("a")` bude odpovídat jak `#a`, tak `#a/b`.

## Formát štítků

Ve svých štítcích můžete používat následující znaky:

- Písmena abecedy
- Čísla
- Podtržítko (`_`)
- Pomlčka (`-`)
- Lomítko (`/`) pro [[#Vnořené štítky]]
- Běžně přijímané znaky Unicode, včetně emoji a dalších symbolů

Štítky musí obsahovat alespoň jeden nečíselný znak. Například #1984 není platný štítek, ale #y1984 ano.

Štítky nerozlišují velká a malá písmena. Například #tag a #TAG budou považovány za totožné.

> [!note]
> Štítky se zobrazují ve tvaru, v jakém byly poprvé vytvořeny, v [[Panel tagů|Panelu tagů]].
> Například pokud vytvoříte #Tag a poté #TAG, zobrazí se pro oba #Tag.

Štítky nemohou obsahovat mezery. Pro oddělení dvou nebo více slov můžete použít následující formáty:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
