---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Šablóny sú základný doplnok, ktorý vám umožňuje vkladať preddefinované úryvky textu do vašej aktívnej poznámky.'
---
Šablóny je [[Vstavané pluginy|vstavaný plugin]], ktorý vám umožňuje vkladať vopred definované úryvky textu do aktívnej poznámky.

## Nastavenie priečinka šablón

1. V ľavom dolnom rohu vyberte **[[Nastavenia]]** ![[lucide-cog.svg#icon]].
2. V časti **Vstavané pluginy → Šablóny → Umiestnenie priečinku šablón** zadajte priečinok obsahujúci vaše šablóny.

## Premenné šablón

Do šablón môžete pridať dynamické informácie pomocou _premenných šablón_. Keď vložíte šablónu obsahujúcu premennú šablóny, Šablóny ju nahradia zodpovedajúcou hodnotou.

| Premenná    | Popis                                                       |
|-------------|-------------------------------------------------------------|
| `{{title}}` | Nadpis aktívnej poznámky.                                   |
| `{{date}}`  | Dnešný dátum. **Predvolený formát:** `YYYY-MM-DD`.          |
| `{{time}}`  | Aktuálny čas. **Predvolený formát:** `HH:mm`.               |

Obe premenné `{{date}}` a `{{time}}` umožňujú zmeniť predvolený formát pomocou _formátovacieho reťazca_.

Na nastavenie formátovacieho reťazca pridajte dvojbodku (`:`) nasledovanú reťazcom [formátovacích tokenov Moment.js](https://momentjs.com/docs/#/displaying/format/), napríklad `{{date:YYYY-MM-DD}}`.

Premenné `{{date}}` a `{{time}}` môžete používať s formátovacími reťazcami rovnakým spôsobom, napríklad `{{time:YYYY-MM-DD}}`.

Predvolené formáty dátumu a času môžete zmeniť v časti **[[Nastavenia]] → Vstavané pluginy → Šablóny → Formát dátumu** a **[[Nastavenia]] → Vstavané pluginy → Šablóny → Formát času**. ^template-settings-date-time-formatting

> [!tip]- Použitie premenných dátumu a času v iných pluginoch
> Premenné šablón `{{date}}` a `{{time}}` môžete používať aj v pluginoch [[Každodenné poznámky]] a [[Unikátny tvorca poznámok]].

## Vytvorenie šablóny

V [[#Nastavenie priečinka šablón|priečinku šablón]] [[Správa poznámok#Vytvorenie novej poznámky|vytvorte poznámku]] obsahujúcu text, ktorý sa má zobraziť pri použití šablóny. Pre dynamický text ako aktuálny dátum môžete použiť [[#Premenné šablón|premenné šablón]].

Napríklad tu je šablóna pre študijné poznámky:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Kľúčové koncepty


## Dôležité detaily


## Príklady


## Otázky
- 

## Súhrn


## Súvisiace témy
- [[]]
```

> [!warning]+ Upravujte šablóny v režime zdroja
> V [[Zobrazenia a režim úprav#Živý náhľad|živom náhľade]] môže panel **Vlastnosti v dokumente** prepísať premenné šablón, ktoré nemajú úvodzovky.
>
> Aby ste tomu predišli, upravujte šablóny v [[Zobrazenia a režim úprav#Režim zdroja|režime zdroja]], alebo nastavte **[[Nastavenia]] → Editor → [[Nastavenia#Vlastnosti v dokumente|Vlastnosti v dokumente]]** na **Zdroj**.

## Vloženie šablóny do aktívnej poznámky

> [!todo] Pred vložením šablóny najprv [[#Nastavenie priečinka šablón|nastavte priečinok šablón]].

1. Na paneli nástrojov vyberte **Vložiť šablónu**.
2. Vyberte šablónu, ktorá sa vloží na pozíciu kurzora v aktívnej poznámke.

Na vloženie šablóny pomocou [[Paleta príkazov|palety príkazov]] alebo [[Klávesové skratky#Nastavenie klávesovej skratky|vlastnej klávesovej skratky]] použite príkaz `Šablóny: Vložiť šablónu`.

Obsah šablóny sa vloží na aktuálnu pozíciu kurzora. Ak kurzor nie je v tele poznámky, obsah sa vloží na poslednú pozíciu kurzora.

### Vlastnosti šablóny

![[Vlastnosti#^templates-properties]]

## Vloženie aktuálneho dátumu a času do aktívnej poznámky

Pomocou príkazov `Šablóny: Vložiť aktuálny dátum` a `Šablóny: Vložiť aktuálny čas` vložíte aktuálny dátum a čas na aktuálnu pozíciu kurzora. Rovnako ako príkaz `Vložiť šablónu`, aj tieto môžete vykonať pomocou palety príkazov alebo vlastnej klávesovej skratky.

Vložený dátum a čas používa [[#^template-settings-date-time-formatting|formátovanie nastavené v nastaveniach pluginu]].
