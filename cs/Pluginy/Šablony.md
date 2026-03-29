---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Šablony je základní plugin, který vám umožňuje vkládat předdefinované úryvky textu do vaší aktivní poznámky.'
---
Šablony je [[Základní pluginy|základní plugin]], který umožňuje vkládat předem definované úryvky textu do aktivní poznámky.

## Nastavení složky šablon

1. V levém dolním rohu klikněte na **[[Nastavení]]** ![[lucide-cog.svg#icon]].
2. V části **Základní pluginy → Šablony → Umístění složky šablon** zadejte složku obsahující vaše šablony.

## Proměnné šablon

Do šablon můžete přidat dynamické informace pomocí _proměnných šablon_. Když vložíte šablonu obsahující proměnnou šablony, Šablony ji nahradí odpovídající hodnotou.

| Proměnná    | Popis                                                    |
|-------------|----------------------------------------------------------|
| `{{title}}` | Název aktivní poznámky.                                  |
| `{{date}}`  | Dnešní datum. **Výchozí formát:** `YYYY-MM-DD`.          |
| `{{time}}`  | Aktuální čas. **Výchozí formát:** `HH:mm`.               |

Jak `{{date}}`, tak `{{time}}` umožňují změnit výchozí formát pomocí _formátovacího řetězce_.

Pro nastavení formátovacího řetězce přidejte dvojtečku (`:`) následovanou řetězcem [tokenů formátu Moment.js](https://momentjs.com/docs/#/displaying/format/), například `{{date:YYYY-MM-DD}}`.

`{{date}}` a `{{time}}` můžete s formátovacími řetězci používat zaměnitelně, například `{{time:YYYY-MM-DD}}`.

Výchozí formáty data a času můžete změnit v **[[Nastavení]] → Šablony → Formát data** a **[[Nastavení]] → Šablony → Formát času**. ^template-settings-date-time-formatting

> [!tip] Tip
> Proměnné šablon `{{date}}` a `{{time}}` můžete také používat v pluginech [[Každodenní poznámky]] a [[Tvůrce jedinečných poznámek]].

## Vytvoření šablony

Ve [[#Nastavení složky šablon|složce šablon]] [[Správa poznámek#Vytvoření nové poznámky|vytvořte poznámku]] obsahující text, který se má zobrazit při použití šablony. Pro dynamický text, jako je aktuální datum, můžete použít [[#Proměnné šablon|proměnné šablon]].

Například zde je šablona pro studijní poznámky:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Klíčové koncepty


## Důležité detaily


## Příklady


## Otázky
- 

## Shrnutí


## Související témata
- [[]]
```

## Vložení šablony do aktivní poznámky

**Důležité:** Pro vložení šablony musíte nejprve [[#Nastavení složky šablon|nastavit složku šablon]].

1. Na postranním panelu nástrojů klikněte na **Vložit šablonu**.
2. Vyberte šablonu, která se vloží na pozici kurzoru v aktivní poznámce.

Pro vložení šablony pomocí [[Paleta příkazů|palety příkazů]] nebo [[Klávesové zkratky#Nastavení klávesové zkratky|vlastní klávesové zkratky]] použijte příkaz `Šablony: Vložit šablonu`.

Obsah šablony se vloží na aktuální pozici kurzoru. Pokud kurzor není v těle poznámky, obsah se vloží na poslední pozici kurzoru.

### Vlastnosti šablon

![[Vlastnosti#^templates-properties]]

## Vložení aktuálního data a času do aktivní poznámky

Pomocí příkazů `Šablony: Vložit aktuální datum` a `Šablony: Vložit aktuální čas` vložíte aktuální datum a čas na aktuální pozici kurzoru. Stejně jako příkaz `Vložit šablonu` to lze provést pomocí [[Paleta příkazů|palety příkazů]] nebo [[Klávesové zkratky#Nastavení klávesové zkratky|vlastní klávesové zkratky]].

Vložené datum a čas používají [[#^template-settings-date-time-formatting|formátování nastavené v nastavení pluginu]].
