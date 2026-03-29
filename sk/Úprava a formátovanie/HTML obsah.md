---
permalink: html
publish: true
mobile: true
description: 'Naučte sa, ako používať HTML v Obsidiane, vrátane obmedzení pri vykresľovaní Markdownu a požiadaviek na HTML bloky.'
---
Obsidian podporuje HTML, aby ste mohli zobrazovať svoje poznámky podľa vlastných predstáv, alebo dokonca [[Vloženie webových stránok|vkladať webové stránky]]. Povolenie HTML vo vašich poznámkach prináša určité riziká. Na zabránenie škodlivému kódu spôsobiť škody Obsidian _sanitizuje_ akékoľvek HTML vo vašich poznámkach.

> [!example]
> Element `<script>` normálne umožňuje spustenie JavaScriptu pri každom načítaní. Ak by Obsidian nesanitizoval HTML, útočník by vás mohol presvedčiť, aby ste prilepili text obsahujúci JavaScript, ktorý získa citlivé informácie z vášho počítača a odošle ich späť útočníkovi.

Keďže syntax Markdown nepodporuje všetky formy štýlovania, použitie sanitizovaného HTML môže byť ďalším spôsobom, ako zvýšiť kvalitu vašich poznámok. Zahrnuli sme niektoré z bežnejších použití HTML.

## Obmedzenia HTML

Obsidian má špecifické obmedzenia pri používaní HTML vo vašich poznámkach:

### Žiadny Markdown vnútri HTML

Obsidian nevykresľuje syntax Markdown vnútri HTML elementov. Toto je zámerné dizajnové rozhodnutie pre optimalizáciu výkonu a udržanie nízkej zložitosti parsera pri správe veľkých dokumentov.

Napríklad toto nebude fungovať podľa očakávania:

```md
<div>
Toto **nebude** tučné a toto `nebude` kód.
</div>
```

### HTML bloky musia byť samostatné

HTML bloky musia byť kompletné a nemôžu obsahovať prázdne riadky. Prázdne riadky prerušia HTML blok.

Toto bude fungovať:

```md
<table>
<tr>
<td>Obsah tu</td>
</tr>
</table>
```

Toto nebude fungovať správne:

```md
<table>

<tr>

<td>Obsah tu</td>

</tr>

</table>
```

### Keď sa zdá, že Markdown funguje v HTML

Niektoré inline HTML značky ako `<span>` alebo `<a>` majú obmedzenú funkčnosť a môže sa zdať, že vykresľujú Markdown, ale v skutočnosti to tak nie je. Markdown je spracovávaný mimo kontextu HTML.

Viac podrobností o tom, ako Obsidian pracuje s Markdown, nájdete v [[Obsidian Flavored Markdown]].

## Bežné použitie HTML

> [!info] Viac podrobností o používaní `<iframe>` nájdete v [[Vloženie webových stránok]].

### Komentáre

[[Základná syntax formátovania#Komentáre|Komentáre v Markdown]] sú preferovaný spôsob pridávania skrytých komentárov do vašich poznámok. Avšak niektoré metódy konverzie Markdown poznámok, ako napríklad [Pandoc](https://pandoc.org), majú obmedzenú podporu komentárov v Markdown. V týchto prípadoch môžete namiesto toho použiť `<!-- HTML komentár -->`!

### Podčiarknutie

Ak potrebujete rýchlo podčiarknuť položku vo svojich poznámkach, môžete použiť `<u>Príklad</u>` na vytvorenie <u>vášho podčiarknutého textu</u>.

### Span/Div

Značky span a div môžu byť použité na aplikovanie vlastných tried z [[CSS snippety|CSS snippetu]], alebo vlastného definovaného štýlovania na vybranú oblasť textu. Napríklad použitím `<span style="font-family: cursive">váš text</span>` môžete rýchlo <span style="font-family: cursive">zmeniť písmo</span>.

## Prečiarknutie

Potrebujete prečiarknuť <s>nejaký text</s>? Použite `<s>toto</s>` na jeho prečiarknutie.
