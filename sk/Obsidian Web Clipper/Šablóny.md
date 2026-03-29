---
permalink: web-clipper/templates
description: 'Naučte sa vytvárať šablóny, ktoré automaticky zachytávajú a organizujú metadáta webových stránok pomocou Web Clipperu.'
---
[[Úvod do Obsidian Web Clipper|Web Clipper]] vám umožňuje vytvárať šablóny, ktoré automaticky zachytávajú a organizujú metadáta z webových stránok. Príklady šablón sú dostupné v [repozitári clipper-templates](https://github.com/kepano/clipper-templates).

## Vytvorenie alebo úprava šablóny

Na **vytvorenie** šablóny prejdite do nastavení Web Clipper a kliknite na tlačidlo **Nová šablóna** v bočnom paneli. Šablónu môžete tiež **duplikovať** v ponuke **Viac** v pravom hornom rohu.

Na **úpravu** šablóny vyberte šablónu z bočného panela. Vaše zmeny sa automaticky uložia.

Šablóny využívajú [[Premenné]] a [[Filtre]], ktoré vám umožňujú prispôsobiť spôsob ukladania obsahu.

## Import a export šablón Web Clipper

Import šablóny:

1. Otvorte rozšírenie a kliknite na ikonu ozubeného kolieska **[[Nastavenia]]**.
2. Prejdite na ľubovoľnú šablónu v zozname.
3. Kliknite na **Importovať** v pravom hornom rohu alebo presuňte a pustite súbor(y) šablóny `.json` kamkoľvek v oblasti šablón.

Na export šablóny kliknite na **Exportovať** v pravom hornom rohu. Tým sa stiahne súbor šablóny `.json`. Dáta šablóny môžete tiež skopírovať do schránky cez ponuku **Viac**.

## Nastavenia šablóny

### Správanie

Definujte, ako sa obsah z Web Clipper pridá do Obsidian:

- **Vytvoriť novú poznámku**
- **Pridať do existujúcej poznámky**, na začiatok alebo koniec
- **Pridať do dennej poznámky**, na začiatok alebo koniec (vyžaduje, aby bol aktívny plugin [[Každodenné poznámky|každodenné poznámky]])

### Automatické spustenie šablóny

Spúšťače šablón vám umožňujú automaticky vybrať šablónu na základe aktuálnej URL stránky alebo dát [schema.org](https://schema.org/). Pre každú šablónu môžete definovať viacero pravidiel, oddelených novým riadkom.

Prvá zhoda v zozname šablón určuje, ktorá šablóna sa použije. Šablóny môžete v nastaveniach Web Clipper presúvať nahor a nadol a meniť tak poradie, v ktorom sa šablóny porovnávajú.

#### Jednoduché porovnávanie URL

Jednoduché porovnávanie spustí šablónu, ak aktuálna URL stránky *začína* zadaným vzorom. Napríklad:

- `https://obsidian.md` sa zhoduje s akoukoľvek URL, ktorá začína týmto textom.

#### Porovnávanie regulárnymi výrazmi

Šablóny môžete spúšťať na základe zložitejších vzorov URL pomocou regulárnych výrazov. Uzavrite vzor regulárneho výrazu do lomiek (`/`). Nezabudnite špeciálne znaky v regulárnych výrazoch (ako `.` a `/`) escapovať spätnou lomkou (`\`). Napríklad:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` sa zhoduje s akoukoľvek referenčnou stránkou IMDB.

#### Porovnávanie Schema.org

Šablóny môžete spúšťať na základe dát [schema.org](https://schema.org/) prítomných na stránke. Použite prefix `schema:` nasledovaný kľúčom schémy, ktorý chcete porovnať. Voliteľne môžete špecifikovať očakávanú hodnotu. Napríklad:

- `schema:@Recipe` sa zhoduje so stránkami, kde je typ schémy "Recipe".
- `schema:@Recipe.name` sa zhoduje so stránkami, kde je prítomný `@Recipe.name`.
- `schema:@Recipe.name=Cookie` sa zhoduje so stránkami, kde `@Recipe.name` je "Cookie".

Hodnoty schema.org sa dajú tiež použiť na [[Premenné#Schema.org variables|predvyplnenie dát v šablónach]].

### Kontext interpretera

Keď je povolená [[Interpretácia webových stránok|Interpretácia]], môžete použiť [[Premenné#Prompt variables|premenné výziev]] na extrahovanie obsahu stránky pomocou prirodzeného jazyka. Pre každú šablónu môžete definovať [[Interpretácia webových stránok#Kontext|kontext]], ku ktorému má interpreter prístup.
