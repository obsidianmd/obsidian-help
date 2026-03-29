---
permalink: import/csv
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
7. Klikněte na **Importovat** pro nastavení, jak budou data ve vašem CSV souboru převedena na poznámky s [[Vlastnosti|vlastnostmi]].
8. Klikněte na **Pokračovat** a počkejte, dokud import neskončí.
9. Hotovo!

## Nastavení způsobu importu polí CSV

Ve druhém kroku importu CSV můžete zvolit, jak budou data importována pomocí šablony.

Každému sloupci ve vašem CSV souboru je přiřazena proměnná nazvaná `{{column_name}}`, která představuje název záhlaví ve vašem souboru. Tuto proměnnou můžete použít k definování názvu poznámky, umístění, obsahu a [[Vlastnosti|vlastností]].
