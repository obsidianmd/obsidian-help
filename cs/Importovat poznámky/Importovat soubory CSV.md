---
permalink: import/csv
cssclasses:
  - soft-embed
---
Obsidian umožňuje importovat data ze souborů CSV pomocí oficiálního [[Importér|pluginu Importér]]. To je užitečné, pokud máte tabulková data uložená v aplikacích jako Excel, Google Sheets, Numbers, Notion nebo Airtable.

Import CSV generuje soubory Markdown pro každý řádek a soubor [[Úvod do Základen|Základna]], který zobrazí všechny importované soubory jako tabulku.

Pokud importujete poznámky z konkrétní aplikace, možná budete chtít nejprve zkontrolovat seznam aplikací podporovaných [[Importér|pluginem Importér]], abyste zjistili, zda existuje specifický konvertor, který lépe zachová data, která migrujete.

## Vytvoření poznámek z CSV dat v Obsidian

Budete potřebovat oficiální plugin Obsidian [[Importér]], který můžete [nainstalovat zde](obsidian://show-plugin?id=obsidian-importer).

1. Otevřete **[[Nastavení]]**.
2. Přejděte na **Komunitní pluginy** a [nainstalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapněte plugin Importér.
4. Otevřete plugin **Importér** pomocí palety příkazů nebo ikony postranního panelu nástrojů.
5. V části **Formát** vyberte **CSV (.csv).**
6. Vyberte umístění vašeho CSV souboru.
7. Vyberte **Importovat** pro nastavení, jak budou data ve vašem CSV souboru převedena na poznámky s [[Vlastnosti|vlastnostmi]].
8. Vyberte **Pokračovat** pro kontrolu vygenerované šablony a náhled příkladů z vašich řádků.
9. Vyberte **Importovat** a počkejte, dokud import neskončí.

## Nastavení způsobu importu polí CSV

V kroku konfigurace polí můžete zvolit, jak budou data importována. Importér vygeneruje šablonu ze záhlaví CSV, použije první sloupec pro počáteční název poznámky a vytvoří vlastnost pro každý sloupec.

## Šablony

Použijte [[Šablony importéru|šablony importéru]] pro úplné nastavení způsobu importu vašich dat.

Každý sloupec CSV je dostupný pomocí svého záhlaví. Pokud sloupec nemá záhlaví, Importér použije vygenerovaný název sloupce.

Použijte závorky, aby byly mezery a interpunkce správně zpracovány:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Šablony importéru#Proměnné]]
