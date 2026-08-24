---
permalink: import/templates
description: 'Přizpůsobte název poznámky, vlastnosti a obsah vytvořený pluginem Importer.'
---
[[Importér]] umožňuje definovat šablony, které řídí způsob importu vašich poznámek z jiných aplikací. To znamená, že můžete upravit název, vlastnosti a obsah poznámek, které importujete.

## Úprava šablony importu

Vyberte **Upravit** nad náhledem pro úpravu výchozí šablony. Můžete upravit:

- Název poznámky zobrazený jako vložený název.
- Vlastnosti na začátku poznámky.
- Obsah poznámky v Markdown.

Vyberte **Uložit** pro návrat k náhledu. Importér si pamatuje upravenou inline šablonu pro budoucí importy, které používají stejný formát.

Alternativně můžete načíst šablonu ze souboru Markdown v aktuálním trezoru.

## Náhled výsledků

Náhled zobrazuje až deset vzorků z dat, která jste vybrali. Pomocí tlačítek se šipkami se můžete přesouvat mezi vzorky. Změny nastavení importu a šablony aktualizují náhled předtím, než je cokoliv přidáno do vašeho trezoru.

Některé přílohy, vzdálené položky a křížové odkazy mezi poznámkami nelze plně vyřešit, dokud import neproběhne. V takových případech může náhled zachovat zdrojový odkaz nebo zobrazit zástupný symbol.

## Syntaxe šablon

Šablony importéru používají syntaxi, která se skládá z proměnných, [[Filtry|filtrů]] a [[Logika|logiky]]. Používá stejnou syntaxi [Knap](https://github.com/obsidianmd/knap) jako [[Úvod do Obsidian Web Clipper|Web Clipper]].

Proměnné vkládejte pomocí dvojitých složených závorek, například `{{title}}`, `{{content}}` nebo `{{date}}`. Proměnné lze použít v názvu poznámky, vlastnostech a obsahu.

Proměnné můžete upravovat pomocí [[Filtry|filtrů]]. Například pro změnu formátu data pomocí `{{date|date:"YYYY-MM-DD"}}`. Pro pokročilejší podmínky, smyčky a přiřazení proměnných použijte [[Logika|logiku]].

## Proměnné

Následující proměnné jsou k dispozici pro použití v jakékoliv šabloně importéru:

| Proměnná         | Popis                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Tělo v Markdown bez vlastností (bez úvodních metadat).                                               |
| `{{content}}`    | Kompletní Markdown před aplikací vybrané šablony.                                                    |
| `{{ctime}}`      | Čas vytvoření zdroje jako časové razítko ISO 8601; prázdné, pokud není k dispozici.                  |
| `{{date}}`       | Aktuální datum a čas při vykreslení šablony jako časové razítko ISO 8601.                            |
| `{{importer}}`   | ID importéru, například `keep`, `html` nebo `notion-api`.                                            |
| `{{folder}}`     | Konečná nadřazená složka relativní k trezoru. Prázdné, pokud je poznámka v kořeni trezoru.           |
| `{{mtime}}`      | Čas poslední úpravy zdroje jako časové razítko ISO 8601; prázdné, pokud není k dispozici.            |
| `{{noteName}}`   | Konečný vyřešený název poznámky po odstranění neplatných znaků a přidání přípon pro duplikáty.       |
| `{{path}}`       | Konečná cesta relativní k trezoru, včetně přípony `.md`.                                             |
| `{{properties}}` | Objekt obsahující vlastnosti úvodních metadat.                                                       |
| `{{source}}`     | Objekt obsahující generované vlastnosti a hodnoty specifické pro zdroj.                              |
| `{{sourceId}}`   | Stabilní identifikátor zdroje, pokud jej importér poskytuje; jinak prázdné.                          |
| `{{time}}`       | Alias pro `{{date}}`.                                                                                |
| `{{title}}`      | Původní název poznámky před sanitizací a deduplikací.                                                |

## Zdrojové hodnoty pro vlastnosti

U formátů importu, které podporují [[Vlastnosti]], jsou zdrojové hodnoty pro pohodlí dostupné také jako proměnné nejvyšší úrovně.

Pokud má zdrojová hodnota stejný název jako sdílená proměnná, přistupujte k ní přes `{{source}}`. Například pokud váš zdroj importu má vlastnost s názvem `content`, je dostupná jako `{{source.content}}`, zatímco `{{content}}` zůstává výchozí proměnnou importéru.

Pokud název pole obsahuje mezery, interpunkci nebo jiné speciální znaky, použijte závorky:

```twig
{{source["Project: status"]}}
```

## Příklad šablony

Zde je příklad šablony používající proměnné a [[Filtry|filtry]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Data můžete do poznámky přidávat podmíněně pomocí [[Logika|logiky]]:

```twig
{% if tags %}
## Tagy
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
