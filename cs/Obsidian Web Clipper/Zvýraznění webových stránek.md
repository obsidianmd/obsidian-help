---
permalink: web-clipper/highlight
---
[[Úvod do Obsidian Web Clipper|Web Clipper]] vám umožňuje zvýrazňovat text na webových stránkách a vybírat prvky, které chcete uložit do Obsidian. Vaše zvýraznění se ukládají, takže se k nim můžete vrátit, když znovu navštívíte stránku.

Zvýraznění lze [[Oříznutí webových stránek|zachytit]] a uložit do Obsidian při otevření rozšíření.

## Zapnutí zvýrazňovače

Zvýrazňování můžete zapnout několika způsoby v závislosti na vašem prohlížeči:

- Ikona zvýrazňovače v panelu rozšíření.
- Klávesové zkratky pro aktivaci rozšíření z klávesnice.
- Kontextové menu kliknutím pravým tlačítkem na webovou stránku, kterou navštěvujete.

Jakmile je zvýrazňování zapnuto, můžete vybírat text, obrázky a prvky, které chcete zvýraznit.

## Nastavení zvýrazňovače

Chování zvýrazňovače můžete změnit v nastavení Web Clipper. Zde můžete také exportovat svá zvýraznění do souboru `.json`.

Existují tři možnosti, jak lze zvýraznění vložit do vaší oříznuté poznámky prostřednictvím [[Proměnné|proměnné]] `{{content}}`:

- **Zvýraznit obsah stránky** — přidá zvýraznění přímo do textu pomocí [[Obsidian Flavored Markdown|syntaxe]] `==highlight==`.
- **Nahradit obsah poznámky** — vrátí seznam zvýraznění bez jakéhokoli obsahu stránky.
- **Nedělat nic** — vrátí původní obsah bez zvýraznění.

Zvýraznění můžete přidat přímo do šablony pomocí proměnné `{{highlights}}`, například:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
