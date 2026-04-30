---
permalink: web-clipper/highlight
aliases:
  - Zvýrazňovanie webových stránok
---
[[Úvod do Obsidian Web Clipper|Web Clipper]] vám umožňuje zvýrazňovať text na webových stránkach a vyberať prvky, ktoré chcete uložiť do Obsidian. Zvýraznenia sa ukladajú, takže ich môžete vidieť, keď znova navštívite stránku.

Zvýraznenia je možné uložiť do Obsidian pomocou rozšírenia. Možnosti zvýrazňovača môžete definovať v nastaveniach rozšírenia.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Používanie zvýrazňovača

Zvýrazňovač je možné používať na živých webových stránkach alebo v [[Čítačka|Čítačke]]. V zobrazení Čítačky vám vytvorenie výberu textu ponúkne možnosť ho zvýrazniť.

Môžete tiež automaticky pridávať výbery do svojich zvýraznení aktivovaním zvýrazňovača:

- ![[lucide-highlighter.svg#icon]] **Ikona zvýrazňovača** v paneli rozšírenia alebo na paneli nástrojov Čítačky.
- **Klávesová skratka** prispôsobiteľná v nastaveniach rozšírenia.
- **Kontextové menu** kliknutím pravým tlačidlom myši na webovú stránku, ktorú navštevujete.

Po zapnutí zvýrazňovača sa každý vybraný text, obrázky a prvky pridajú do vašich zvýraznení. Všetky vyššie uvedené metódy vám tiež umožňujú zvýrazňovač vypnúť.

## Pridávanie zvýraznení do poznámok

Existujú tri možnosti, ako sa zvýraznenia vložia do vašich zachytených poznámok:

- **Zvýrazniť obsah stránky** — pridá zvýraznenia priamo do textu so [[Obsidian Flavored Markdown|syntaxou]] `==zvýraznenie==`.
- **Nahradiť obsah stránky** — vráti zoznam zvýraznení bez obsahu stránky.
- **Nerobiť nič** — vráti pôvodný obsah bez zvýraznení.
 
Tieto možnosti menia [[Premenné|premennú]] `{{content}}` vo vašej šablóne. Zvýraznenia môžete pridať priamo do vašej šablóny aj pomocou premennej `{{highlights}}`, napríklad:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Zobrazenie a vyhľadávanie zvýraznení

Všetky zvýraznenia, ktoré vytvoríte, si môžete zobraziť na stránke Zvýraznenia. Túto stránku otvoríte cez **Nastavenia** → **Zvýrazňovač**.

## Export zvýraznení

Zvýraznenia je možné exportovať do súboru `.json`, a to buď na stránke Nastavenia, alebo na stránke Zvýraznenia.
