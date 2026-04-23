---
permalink: web-clipper/highlight
---
[[Úvod do Obsidian Web Clipper|Web Clipper]] vám umožňuje zvýrazňovat text na webových stránkách a vybírat prvky, které chcete uložit do Obsidian. Zvýraznění se ukládají, takže je uvidíte, když se na stránku vrátíte.

Zvýraznění lze uložit do Obsidian pomocí rozšíření. Možnosti zvýrazňovače můžete definovat v nastavení rozšíření.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Použití zvýrazňovače

Zvýrazňovač lze použít na živých webových stránkách nebo ve [[Čtečka|čtečce]]. V zobrazení čtečky vám výběr textu nabídne možnost jej zvýraznit.

Výběry můžete také automaticky přidávat ke svým zvýrazněním aktivací zvýrazňovače:

- ![[lucide-highlighter.svg#icon]] **Ikona zvýrazňovače** v panelu rozšíření nebo na liště čtečky.
- **Klávesová zkratka** nastavitelná v nastavení rozšíření.
- **Kontextové menu** kliknutím pravým tlačítkem na webovou stránku, kterou navštěvujete.

Jakmile je zvýrazňovač zapnutý, jakýkoli vybraný text, obrázky a prvky budou přidány k vašim zvýrazněním. Všechny výše uvedené způsoby také umožňují zvýrazňovač vypnout.

## Přidání zvýraznění do poznámek

Existují tři možnosti, jak lze zvýraznění vložit do vašich oříznutých poznámek:

- **Zvýraznit obsah stránky** — přidá zvýraznění přímo do textu pomocí [[Obsidian Flavored Markdown|syntaxe]] `==highlight==`.
- **Nahradit obsah poznámky** — vrátí seznam zvýraznění bez jakéhokoli obsahu stránky.
- **Nedělat nic** — vrátí původní obsah bez zvýraznění.
 
Tyto možnosti mění [[Proměnné|proměnnou]] `{{content}}` ve vaší šabloně. Zvýraznění můžete také přidat přímo do šablony pomocí proměnné `{{highlights}}`, například:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Zobrazení a vyhledávání zvýraznění

Všechna vytvořená zvýraznění si můžete prohlédnout na stránce Zvýraznění. Tuto stránku otevřete přechodem na **Nastavení** → **Zvýrazňovač**.

## Export zvýraznění

Zvýraznění lze exportovat do souboru `.json`, a to buď na stránce Nastavení, nebo na stránce Zvýraznění.
