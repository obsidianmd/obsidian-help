---
permalink: bases/views/kanban
---
Kanban je typ [[Zobrazení|zobrazení]], který můžete použít v [[Úvod do Základen|Základnách]].

Vyberte ![[lucide-kanban-square.svg#icon]] **Kanban** z nabídky zobrazení pro zobrazení souborů jako karet uspořádaných do sloupců. Každý sloupec představuje hodnotu vlastnosti použité k seskupení výsledků.


> [!warning] Vyžaduje Obsidian 1.14+
> Kanban zobrazení vyžaduje Obsidian 1.14, který je aktuálně ve [[Verze s předběžným přístupem|verzi s předběžným přístupem]].


## Seskupení karet do sloupců

Kanban zobrazení vyžaduje vlastnost pro seskupení výsledků.

1. Vyberte ![[lucide-arrow-up-down.svg#icon]] **Seřadit** v nástrojovém panelu.
2. V části **Seskupit podle** vyberte **Vlastnost** a zvolte vlastnost.

Soubory bez hodnoty pro vybranou vlastnost se zobrazí ve sloupci **Žádný**.

> [!info] 
> Pokud seskupujete podle vzorce nebo vlastnosti souboru, nemůžete přesouvat karty ani sloupce, ani vytvářet poznámky ze sloupců. Tyto vlastnosti nelze upravit přesunutím karty.

## Práce s kartami a sloupci

- Přetáhněte kartu do jiného sloupce pro aktualizaci seskupené vlastnosti v dané poznámce. Mezi sloupci lze přesouvat pouze poznámky ve formátu Markdown.
- Vyberte ikonu plus v záhlaví sloupce nebo ![[lucide-plus.svg#icon]] **Nové** ve spodní části sloupce pro vytvoření poznámky s hodnotou daného sloupce.
- Přetáhněte záhlaví sloupce pro změnu pořadí sloupců. Pro obnovení původního pořadí klikněte pravým tlačítkem na sloupec a vyberte **Obnovit pořadí**.
- Použijte nabídku ![[lucide-list.svg#icon]] **Vlastnosti** pro výběr vlastností zobrazených na každé kartě. První vlastnost se zobrazí jako název karty.

## Nastavení

Nastavení Kanban zobrazení lze konfigurovat v [[Zobrazení#Nastavení zobrazení|Nastavení zobrazení]].

- Skrýt prázdné sloupce
- Šířka sloupce
- Vlastnost obrázku
- Přizpůsobení obrázku
- Poměr stran obrázku

### Skrýt prázdné sloupce

Skryje sloupce, které neobsahují žádné karty.

### Šířka sloupce

Definuje šířku každého sloupce a jeho karet.

### Vlastnost obrázku

Kanban karty podporují volitelný obrázek na obálce, který se zobrazuje v horní části karty. Podporované hodnoty vlastností jsou stejné jako u [[Zobrazení Karty#Vlastnost obrázku|vlastnosti obrázku v zobrazení Karty]].

### Přizpůsobení obrázku

Pokud máte nastavenou vlastnost obrázku, tato možnost určuje, jak se obrázek zobrazí na kartě.

- **Vyplnit:** Obrázek vyplní oblast obsahu karty. Pokud se nevejde, obrázek je oříznut.
- **Přizpůsobit:** Obrázek je zmenšen tak, aby se vešel do oblasti obsahu karty. Obrázek není oříznut.

### Poměr stran obrázku

Výška obrázku na obálce je určena jeho poměrem stran. Upravte tuto možnost pro zmenšení nebo zvětšení výšky obrázku.
