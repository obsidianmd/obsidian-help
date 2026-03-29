---
permalink: plugins/daily-notes
---
Každodenní poznámky je [[Základní pluginy|základní plugin]], který otevře poznámku na základě dnešního data, nebo ji vytvoří, pokud ještě neexistuje. Každodenní poznámky můžete využít pro tvorbu deníků, seznamů úkolů nebo denních záznamů o věcech, které jste během dne objevili.

Pro otevření dnešní denní poznámky můžete:

- Kliknout na **Otevřít dnešní poznámku** ![[lucide-calendar.svg#icon]] na [[Postranní panel nástrojů|postranním panelu nástrojů]].
- Spustit příkaz **Otevřít dnešní poznámku** z [[Paleta příkazů|palety příkazů]].
- [[Klávesové zkratky#Nastavení klávesové zkratky|Použít klávesovou zkratku]] pro příkaz **Otevřít dnešní poznámku**.

Ve výchozím nastavení Obsidian vytvoří novou prázdnou poznámku pojmenovanou podle dnešního data ve formátu RRRR-MM-DD.

> [!tip] Pokud chcete mít denní poznámky v samostatné složce, můžete v nastavení pluginu změnit <u>Umístění nového souboru</u> a určit tak, kam bude Obsidian nové denní poznámky ukládat.

> [!example]- Automatické podsložky
> Denní poznámky můžete automaticky organizovat do složek pomocí funkce **Formát data**.
> 
> Pokud například nastavíte formát data jako `YYYY/MMMM/YYYY-MMM-DD`, vaše poznámky budou vytvořeny jako `2023/January/2023-Jan-01`. 
> 
> Další možnosti formátování najdete na stránce dokumentace [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Vytvoření denní poznámky ze šablony

Pokud mají vaše denní poznámky stejnou strukturu, můžete použít [[Šablony|šablonu]] k přidání předdefinovaného obsahu do denních poznámek při jejich vytváření.

1. Vytvořte novou poznámku s názvem „Denní šablona" s následujícím textem (nebo čímkoli, co vám dává smysl!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Úkoly

   - [ ]
   ```

2. Otevřete **[[Nastavení]]**.
3. Na postranním panelu klikněte na **Každodenní poznámky** v sekci **Nastavení pluginů**.
4. Do textového pole vedle **Umístění souboru šablony** vyberte poznámku „Denní šablona".

Obsidian použije šablonu při příštím vytvoření nové denní poznámky.

## Každodenní poznámky a vlastnosti

Když je plugin Každodenní poznámky aktivován a v jakékoli poznámce je přítomna vlastnost s datem, Obsidian se automaticky pokusí vygenerovat odkaz na denní poznámku pro daný konkrétní den. Pokud například poznámka s názvem `example.md` obsahuje vlastnost s datem jako `2023-01-01`, toto datum se v sekci [[Zobrazení a režim úprav#Živý náhled|živý náhled]] změní na klikatelný odkaz.

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
