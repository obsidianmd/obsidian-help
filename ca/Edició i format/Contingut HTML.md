---
permalink: html
publish: true
mobile: true
description: 'Apreneu a utilitzar HTML a Obsidian, incloent-hi les limitacions amb la representació de Markdown i els requisits dels blocs HTML.'
---
Obsidian admet HTML per permetre't mostrar les teves notes com vulguis, o fins i tot [[Incrustar pàgines web|incrustar pàgines web]]. Permetre HTML dins de les teves notes comporta riscos. Per evitar que el codi maliciós causi danys, Obsidian _saneja_ qualsevol HTML a les teves notes.

> [!example] 
> L'element `<script>` normalment permet executar JavaScript quan es carrega. Si Obsidian no sanejés l'HTML, un atacant podria convèncer-te de enganxar un text que contingui JavaScript que extregui informació sensible del teu ordinador i l'enviï de tornada a ell.

Dit això, com que la sintaxi Markdown no admet totes les formes d'estil, utilitzar HTML sanejat pot ser una altra manera de millorar la qualitat de les teves notes. Hem inclòs alguns dels usos més comuns de l'HTML.

## Limitacions de l'HTML

Obsidian té limitacions específiques quan s'utilitza HTML a les teves notes:

### Sense Markdown dins de l'HTML

Obsidian no renderitza la sintaxi Markdown dins dels elements HTML. Aquesta és una decisió de disseny intencionada per optimitzar el rendiment i mantenir baixa la complexitat de l'analitzador quan es gestionen documents grans.

Per exemple, això no funcionarà com s'espera:

```md
<div>
Això **no serà** negreta i això `no serà` codi.
</div>
```

### Els blocs HTML han de ser autosuficients

Els blocs HTML han de ser complets i no poden contenir línies en blanc dins seu. Les línies en blanc trencaran el bloc HTML.

Això funcionarà:

```md
<table>
<tr>
<td>Contingut aquí</td>
</tr>
</table>
```

Això no funcionarà correctament:

```md
<table>

<tr>

<td>Contingut aquí</td>

</tr>

</table>
```

### Quan el Markdown sembla funcionar dins de l'HTML

Algunes etiquetes HTML en línia com `<span>` o `<a>` tenen funcionalitat limitada i poden semblar que renderitzen Markdown, però en realitat no és el que està passant. El Markdown s'està processant fora del context HTML.

Per a més detalls sobre com Obsidian gestiona el Markdown, consulta [[Obsidian Flavored Markdown]].

## Ús comú de l'HTML

> [!info] Es poden trobar més detalls sobre l'ús de `<iframe>` a [[Incrustar pàgines web]].

### Comentaris

Els [[Sintaxi de format bàsic#Comentaris|comentaris Markdown]] són la manera preferida d'afegir comentaris ocults dins de les teves notes. No obstant això, alguns mètodes de conversió de notes Markdown, com [Pandoc](https://pandoc.org), tenen un suport limitat dels comentaris Markdown. En aquests casos, pots utilitzar `<!-- Comentari HTML -->` en el seu lloc!

### Subratllat

Si necessites subratllar ràpidament un element a les teves notes, pots utilitzar `<u>Exemple</u>` per crear <u>el teu text subratllat</u>.

### Span/Div

Les etiquetes span i div es poden utilitzar per aplicar classes personalitzades d'un [[Pedaços de CSS|pedaç de CSS]], o estils definits personalitzats, sobre una àrea seleccionada de text. Per exemple, utilitzar `<span style="font-family: cursive">el teu text</span>` et permet <span style="font-family: cursive">canviar ràpidament el tipus de lletra</span>.

## Ratllat

Necessites ratllar <s>algun text</s>? Utilitza `<s>això</s>` per ratllar-lo.
