---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Naučte se, jak ve svých poznámkách odkazovat na jiné poznámky, přílohy a další soubory pomocí interních odkazů.'
---
Naučte se, jak odkazovat na poznámky, přílohy a další soubory z vašich poznámek pomocí _interních odkazů_. Propojením poznámek můžete vytvořit síť znalostí. ^b15695

Obsidian může automaticky aktualizovat interní odkazy ve vašem trezoru při přejmenování souboru. Pokud chcete být místo toho vyzváni, můžete tuto funkci vypnout v:

**[[Nastavení]]** → **[[Nastavení#Soubory a odkazy|Soubory a odkazy]]** → **[[Nastavení#Vždy aktualizovat interní odkazy|Vždy aktualizovat interní odkazy]]**.

## Podporované formáty interních odkazů

Obsidian podporuje následující formáty odkazů:

- Wiki odkaz: `[[Three laws of motion]]` nebo `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` nebo `[Three laws of motion](Three%20laws%20of%20motion.md)`

Výše uvedené příklady jsou ekvivalentní, zobrazují se v editoru stejným způsobem a odkazují na stejnou poznámku.

> [!note] Poznámka
> Při použití formátu Markdown se ujistěte, že cíl odkazu je [URL kódovaný](https://en.wikipedia.org/wiki/Percent-encoding). Například mezery se změní na `%20`.

Ve výchozím nastavení Obsidian generuje odkazy ve formátu wiki odkazů díky jeho kompaktnějšímu formátu. Pokud je pro vás důležitá interoperabilita, můžete wiki odkazy vypnout a místo nich používat Markdown odkazy.

Pro použití formátu Markdown:

1. Otevřete **[[Nastavení]]**.
2. V části **Soubory a odkazy** vypněte **Použít \[\[Wiki odkazy\]\]**.

I když vypnete formát wiki odkazů, stále můžete automaticky doplňovat odkazy zadáním dvou hranatých závorek `[[`. Když vyberete jeden z navrhovaných souborů, Obsidian místo toho vygeneruje Markdown odkaz.

> [!note] Neplatné znaky
> Řetězec obsahující následující znaky nemusí fungovat jako odkaz: `# | ^ : %% [[ ]]`.
> 
> Doporučujeme se těmto znakům vyhnout a dodržovat [bezpečné postupy pro pojmenování souborů](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names).

## Odkaz na soubor

Pro vytvoření odkazu v režimu úprav použijte jeden z následujících způsobů:

- Zadejte `[[` v editoru a poté vyberte soubor, na který chcete vytvořit odkaz.
- Vyberte text v editoru a poté zadejte `[[`.
- Otevřete [[Paleta příkazů|paletu příkazů]] a vyberte Přidat interní odkaz.

![[Rychlé přepínání#^search-autocomplete-large]]

I když můžete odkazovat na jakýkoli z [[Podporované formáty souborů|podporovaných formátů souborů]], odkazy na jiné formáty než Markdown musí obsahovat příponu souboru, například `[[Figure 1.png]]`.

> [!tip] Přidáním vykřičníku (!) před interní odkaz můžete vložit odkazovaný obsah. Více informací najdete v [[Vkládání souborů]].

> [!info] Vyloučené soubory
> Soubory odpovídající vzorům ve vašich [[Nastavení#Vyloučené soubory|Vyloučených souborech]] mají při vytváření interních odkazů nižší prioritu v návrzích odkazů.

## Odkaz na nadpis v poznámce

Můžete odkazovat na konkrétní nadpisy v poznámkách, známé také jako _kotvící odkazy_.

**Odkaz na nadpis ve stejné poznámce**

Pro odkaz na nadpis ve stejné poznámce zadejte `[[#` a zobrazí se seznam nadpisů v poznámce, na které můžete odkazovat.

Například `[[#Náhled odkazovaného souboru]]` vytvoří odkaz na [[#Náhled odkazovaného souboru]].

**Odkaz na nadpis v jiné poznámce**

Pro odkaz na nadpis v jiné poznámce přidejte na konec cíle odkazu mřížku (`#`) následovanou textem nadpisu.

Například `[[O aplikaci Obsidian#Odkazy jsou prvotřídní občané]]` vytvoří odkaz na [[O aplikaci Obsidian#Odkazy jsou prvotřídní občané]].

**Odkaz na podnadpisy**

Pro každý podnadpis můžete přidat více symbolů mřížky.

Například `[[Nápověda a podpora#Otázky a rady#Hlášení chyb a žádosti o funkce]]` vytvoří odkaz na [[Nápověda a podpora#Otázky a rady#Hlášení chyb a žádosti o funkce]].

**Hledání nadpisů v celém trezoru**

Pro hledání nadpisů v celém trezoru použijte syntaxi `[[## nadpis]]`.

Například `[[##` bude hledat obecně v celém trezoru, zatímco `[[## tým]]` bude hledat všechny nadpisy obsahující slovo _tým_.

> [!info]- Snímek obrazovky hledání odkazu na nadpis
>
> ![[internal-links-header.png#interface]]

## Odkaz na blok v poznámce

Blok je jednotka textu ve vaší poznámce, jako je odstavec, bloková citace nebo položka seznamu.

Na blok můžete odkazovat přidáním `#^` na konec cíle odkazu, následovaného jedinečným identifikátorem bloku. Například: `[[2023-01-01#^37066d]]`. Naštěstí nemusíte identifikátor hledat ručně — když zadáte stříšku (`^`), zobrazí se seznam návrhů, ze kterých můžete vybrat správný blok.

Pro *jednoduché odstavce* umístěte mezeru následovanou stříškou `^` a identifikátorem bloku na konec řádku:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

Pro *strukturované bloky* (seznamy, citace, zvýrazněné bloky, tabulky) by měl být identifikátor bloku na samostatném řádku s prázdným řádkem před a za ním:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

Pro *konkrétní řádky v seznamu* může být identifikátor bloku umístěn přímo na odrážku:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Nepodporujeme odkazy na konkrétní části citací, zvýrazněných bloků a tabulek.

**Hledání bloků v celém trezoru**

Můžete také hledat bloky k propojení z celého trezoru pomocí syntaxe `[[^^blok]]`. Nicméně jako bloky se kvalifikuje více položek ve srovnání s [[#Odkaz na nadpis v poznámce|odkazy na nadpisy]], takže tento seznam bude mnohem delší.

> [!info]- Snímek obrazovky hledání odkazu na blok
> ![[link-block-heading.png#interface]]

Můžete také vytvářet čitelné identifikátory bloků přidáním mezery následované stříškou (`^`) a identifikátorem. Identifikátory bloků mohou obsahovat pouze latinská písmena, čísla a pomlčky.

Například přidejte `^quote-of-the-day` na konec bloku:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Nyní můžete na blok odkazovat zadáním `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Interoperabilita
> Odkazy na bloky jsou specifické pro Obsidian a nejsou součástí standardního formátu Markdown. Odkazy obsahující reference na bloky nebudou fungovat mimo Obsidian.

## Změna zobrazovaného textu odkazu

Ve výchozím nastavení Obsidian zobrazuje text odkazu tak, jak je. Například:
- `[[Example]]` se zobrazí jako [[Example]]
- `[[Example#Details]]` se zobrazí jako [[Example#Details]]

Můžete změnit způsob zobrazení odkazu přizpůsobením jeho zobrazeného textu:

**Formát wiki odkazů**:
Použijte svislou čáru (`|`) pro změnu zobrazeného textu.

- `[[Example|Vlastní název]]` se zobrazí jako [[Example|Vlastní název]]
- `[[Example#Details|Název sekce]]` se zobrazí jako [[Example#Details|Název sekce]]

**Formát Markdown**:
Použijte `[Zobrazený text](URL odkazu)` pro přizpůsobení zobrazení odkazu.

- `[Vlastní název](Example.md)` se zobrazí jako [Vlastní název](Example.md)
- `[Název sekce](Example.md#Details)` se zobrazí jako [Název sekce](Example.md#Details)

Tato metoda je užitečná pro jednorázové situace, kdy chcete změnit vzhled odkazu v konkrétním kontextu. Pokud chcete nastavit alternativní název odkazu, který můžete opakovaně používat v celém trezoru, zvažte použití [[Aliasy|aliasu]].

Například pokud pravidelně odkazujete na `[[Three laws of motion]]` jako `[[The 3 laws]]`, přidání „3 laws" jako aliasu vám umožní zadat pouze toto — nemusíte pokaždé přidávat vlastní zobrazený text.

> [!tip] Tip
> Použijte [[#Změna zobrazovaného textu odkazu|zobrazený text odkazu]], když chcete přizpůsobit vzhled odkazu *na konkrétním místě*.
> 
> Použijte [[Aliasy|aliasy]], když chcete odkazovat na stejnou poznámku pomocí *různých názvů* v celém trezoru.
^callout-internal-links-link-text

## Náhled odkazovaného souboru

> [!note] Poznámka
> Pro náhled odkazovaných souborů musíte nejprve zapnout [[Náhled poznámky]].

Pro náhled odkazovaného souboru najeďte na interní odkaz. V režimu úprav stiskněte `Ctrl` (nebo `Cmd` na macOS) při najetí kurzorem na odkaz. Vedle kurzoru se zobrazí náhled obsahu souboru.
