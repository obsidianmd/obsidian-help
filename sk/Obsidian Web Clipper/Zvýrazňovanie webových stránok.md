---
permalink: web-clipper/highlight
---
[[Úvod do Obsidian Web Clipper|Web Clipper]] vám umožňuje zvýrazňovať text na webových stránkach a vyberať prvky, ktoré chcete uložiť do Obsidian. Vaše zvýraznenia sa ukladajú, takže sa k nim môžete vrátiť, keď znova navštívite stránku.

Zvýraznenia je možné [[Zachytávanie webových stránok|zachytiť]] a uložiť do Obsidian, keď otvoríte rozšírenie.

## Zapnutie zvýrazňovača

Zvýrazňovanie môžete zapnúť niekoľkými spôsobmi, v závislosti od vášho prehliadača:

- Ikona zvýrazňovača v paneli rozšírenia.
- Klávesové skratky na aktiváciu rozšírenia z klávesnice.
- Kontextové menu kliknutím pravým tlačidlom myši na webovú stránku, ktorú navštevujete.

Po zapnutí zvýrazňovania môžete vyberať text, obrázky a prvky, ktoré chcete zvýrazniť.

## Nastavenia zvýrazňovača

Správanie zvýrazňovača môžete zmeniť v nastaveniach Web Clipper. Tu môžete tiež exportovať vaše zvýraznenia do súboru `.json`.

Existujú tri možnosti, ako sa zvýraznenia vložia do vašej zachytenej poznámky prostredníctvom [[Premenné|premennej]] `{{content}}`:

- **Zvýrazniť obsah stránky** — pridá zvýraznenia priamo do textu so [[Obsidian Flavored Markdown|syntaxou]] `==zvýraznenie==`.
- **Nahradiť obsah stránky** — vráti zoznam zvýraznení bez obsahu stránky.
- **Nerobiť nič** — vráti pôvodný obsah bez zvýraznení.

Zvýraznenia môžete pridať priamo do vašej šablóny pomocou premennej `{{highlights}}`, napríklad:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
