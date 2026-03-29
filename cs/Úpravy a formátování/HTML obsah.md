---
permalink: html
publish: true
mobile: true
description: 'Naučte se používat HTML v Obsidianu, včetně omezení při vykreslování Markdownu a požadavků na HTML bloky.'
---
Obsidian podporuje HTML, aby vám umožnil zobrazovat poznámky přesně tak, jak chcete, nebo dokonce [[Vkládání webových stránek|vkládat webové stránky]]. Povolení HTML uvnitř poznámek s sebou nese rizika. Aby se zabránilo škodlivému kódu v páchání škod, Obsidian HTML ve vašich poznámkách _sanitizuje_.

> [!example]
> Element `<script>` normálně umožňuje spouštět JavaScript při každém načtení. Kdyby Obsidian nesanitizoval HTML, útočník by vás mohl přesvědčit, abyste vložili text obsahující JavaScript, který extrahuje citlivé informace z vašeho počítače a odešle je zpět útočníkovi.

Nicméně, protože syntaxe Markdown nepodporuje všechny formy stylování, může být použití sanitizovaného HTML dalším způsobem, jak zvýšit kvalitu vašich poznámek. Níže uvádíme některá běžnější použití HTML.

## Omezení HTML

Obsidian má specifická omezení při použití HTML ve vašich poznámkách:

### Žádný Markdown uvnitř HTML

Obsidian nevykresluje syntaxi Markdown uvnitř HTML elementů. Jedná se o záměrné designové rozhodnutí pro optimalizaci výkonu a zachování nízké složitosti parseru při správě velkých dokumentů.

Například toto nebude fungovat podle očekávání:

```md
<div>
Toto **nebude** tučné a toto `nebude` kód.
</div>
```

### HTML bloky musí být samostatné

HTML bloky musí být kompletní a nesmí obsahovat prázdné řádky uvnitř. Prázdné řádky přeruší HTML blok.

Toto bude fungovat:

```md
<table>
<tr>
<td>Obsah zde</td>
</tr>
</table>
```

Toto nebude fungovat správně:

```md
<table>

<tr>

<td>Obsah zde</td>

</tr>

</table>
```

### Když Markdown zdánlivě funguje v HTML

Některé řádkové HTML tagy jako `<span>` nebo `<a>` mají omezenou funkčnost a může se zdát, že vykreslují Markdown, ale ve skutečnosti se tak neděje. Markdown je zpracováván mimo kontext HTML.

Další podrobnosti o tom, jak Obsidian zpracovává Markdown, najdete v [[Obsidian Flavored Markdown]].

## Běžné použití HTML

> [!info] Více podrobností o použití `<iframe>` najdete v [[Vkládání webových stránek]].

### Komentáře

[[Základní syntaxe formátování#Komentáře|Markdown komentáře]] jsou preferovaným způsobem přidávání skrytých komentářů do poznámek. Některé metody konverze Markdown poznámek, jako například [Pandoc](https://pandoc.org), však mají omezenou podporu Markdown komentářů. V takových případech můžete místo toho použít `<!-- HTML komentář -->`!

### Podtržení

Pokud potřebujete rychle podtrhnout položku ve svých poznámkách, můžete použít `<u>Příklad</u>` k vytvoření <u>podtrženého textu</u>.

### Span/Div

Tagy span a div lze použít k aplikování vlastních tříd z [[CSS úryvky|CSS úryvku]] nebo vlastního definovaného stylování na vybranou oblast textu. Například použití `<span style="font-family: cursive">váš text</span>` vám umožní rychle <span style="font-family: cursive">změnit písmo</span>.

## Přeškrtnutí

Potřebujete přeškrtnout <s>nějaký text</s>? Použijte `<s>toto</s>` k jeho přeškrtnutí.
