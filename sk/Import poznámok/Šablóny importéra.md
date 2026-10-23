---
permalink: import/templates
description: 'Prispôsobte názov poznámky, vlastnosti a obsah vytvorený pomocou Importera.'
---
[[Importér]] umožňuje definovať šablóny, ktoré kontrolujú spôsob importu poznámok z iných aplikácií. To znamená, že môžete upraviť názov, vlastnosti a obsah poznámok, ktoré importujete.

## Úprava šablóny importu

Vyberte **Upraviť** nad náhľadom, aby ste upravili predvolenú šablónu. Môžete upraviť:

- Názov poznámky zobrazený ako vložený názov.
- Vlastnosti na začiatku poznámky.
- Markdown obsah poznámky.

Vyberte **Uložiť** pre návrat do náhľadu. Importér si pamätá upravenú vloženú šablónu pre budúce importy, ktoré používajú rovnaký formát.

Alternatívne môžete načítať šablónu z Markdown súboru v aktuálnom trezore.

## Náhľad výsledkov

Náhľad zobrazuje až desať ukážok z dát, ktoré ste vybrali. Použite tlačidlá so šípkami na presun medzi ukážkami. Zmeny nastavení importu a šablóny aktualizujú náhľad predtým, ako sa čokoľvek pridá do vášho trezora.

Niektoré prílohy, vzdialené položky a krížové referencie medzi poznámkami nie je možné úplne vyriešiť, kým sa import nespustí. V takých prípadoch môže náhľad zachovať zdrojový odkaz alebo zobraziť zástupný text.

## Syntax šablón

Šablóny Importéra používajú syntax, ktorá sa skladá z premenných, [[Filtre|filtrov]] a [[Logika|logiky]]. Používa rovnakú syntax [Knap](https://github.com/obsidianmd/knap) ako [[Úvod do Obsidian Web Clipper|Web Clipper]].

Vložte premenné pomocou dvojitých zložených zátvoriek, napríklad `{{title}}`, `{{content}}` alebo `{{date}}`. Premenné je možné použiť v názve poznámky, vlastnostiach a obsahu.

Premenné môžete modifikovať pomocou [[Filtre|filtrov]]. Napríklad na zmenu formátu dátumu použite `{{date|date:"YYYY-MM-DD"}}`. Použite [[Logika|logiku]] pre pokročilejšie podmienky, cykly a priradenie premenných.

## Premenné

Nasledujúce premenné sú k dispozícii na použitie v akejkoľvek šablóne Importéra:

| Premenná         | Popis                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Markdown telo bez vlastností (bez úvodných metadát).                                                |
| `{{content}}`    | Kompletný Markdown pred aplikovaním vybranej šablóny.                                               |
| `{{ctime}}`      | Čas vytvorenia zdroja ako ISO 8601 časová značka; prázdne, keď nie je dostupné.                    |
| `{{date}}`       | Aktuálny dátum a čas pri vykreslení šablóny ako ISO 8601 časová značka.                            |
| `{{importer}}`   | ID Importéra, napríklad `keep`, `html` alebo `notion-api`.                                          |
| `{{folder}}`     | Konečný nadradený priečinok relatívny k trezoru. Prázdne, keď je poznámka v koreňovom priečinku.   |
| `{{mtime}}`      | Čas poslednej úpravy zdroja ako ISO 8601 časová značka; prázdne, keď nie je dostupné.              |
| `{{noteName}}`   | Konečný vyriešený názov poznámky po odstránení neplatných znakov a pridaní prípon pre duplikáty.    |
| `{{path}}`       | Konečná cesta relatívna k trezoru vrátane prípony `.md`.                                           |
| `{{properties}}` | Objekt obsahujúci vlastnosti úvodných metadát.                                                      |
| `{{source}}`     | Objekt obsahujúci vygenerované vlastnosti a hodnoty špecifické pre zdroj.                           |
| `{{sourceId}}`   | Stabilný identifikátor zdroja, ak ho importér poskytuje; inak prázdne.                             |
| `{{time}}`       | Alias pre `{{date}}`.                                                                                |
| `{{title}}`      | Pôvodný názov poznámky pred sanitizáciou a deduplikáciou.                                           |

## Zdrojové hodnoty pre vlastnosti

Pre formáty importu, ktoré podporujú [[Vlastnosti]], sú zdrojové hodnoty tiež dostupné ako premenné najvyššej úrovne pre pohodlie.

Ak má zdrojová hodnota rovnaký názov ako zdieľaná premenná, pristupujte k nej cez `{{source}}`. Napríklad, ak váš zdroj importu má vlastnosť s názvom `content`, je dostupná ako `{{source.content}}`, zatiaľ čo `{{content}}` zostáva predvolenou premennou Importéra.

Použite zátvorkovú notáciu, keď názov poľa obsahuje medzery, interpunkciu alebo iné špeciálne znaky:

```twig
{{source["Project: status"]}}
```

## Príklad šablóny

Tu je príklad šablóny používajúcej premenné a [[Filtre|filtre]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Dáta môžete do poznámky pridať podmienečne pomocou [[Logika|logiky]]:

```twig
{% if tags %}
## Značky
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
