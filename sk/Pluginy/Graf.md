---
permalink: plugins/graph
publish: true
mobile: true
description: 'Zobrazenie grafu je základný doplnok, ktorý vám umožňuje vizualizovať vzťahy medzi poznámkami vo vašom trezore.'
---
Zobrazenie grafu je [[Vstavané pluginy|vstavaný plugin]], ktorý vám umožňuje vizualizovať vzťahy medzi poznámkami vo vašom trezore.

Na otvorenie zobrazenia grafu kliknite na **Otvoriť graf** v [[Panel nástrojov|paneli nástrojov]].

- Kruhy predstavujú poznámky, alebo _uzly_.
- Čiary predstavujú [[Interné odkazy]] medzi dvoma uzlami.

Čím viac uzlov odkazuje na daný uzol, tým väčší sa stáva.

Interakcia s poznámkami v grafe:

- Nastavte kurzor na kruh a zvýrazníte prepojenia danej poznámky.
- Kliknite na poznámku v grafe, aby ste ju otvorili.
- Kliknite pravým tlačidlom myši na poznámku, aby ste otvorili kontextové menu s dostupnými akciami pre danú poznámku.

Navigácia v grafe:

- Priblížte a oddiaľte pomocou kolieska myši alebo pomocou klávesov `+` a `-`.
- Posúvajte graf presúvaním kurzorom myši alebo pomocou šípok.

Podržte kláves Shift pri používaní klávesnice na zrýchlenie pohybov.

## Nastavenia

Na otvorenie nastavení grafu kliknite na ikonu ozubeného kolieska v pravom hornom rohu zobrazenia grafu.

Kliknite na **Obnoviť predvolené nastavenia** v pravom hornom rohu okna nastavení na obnovenie všetkých vykonaných zmien.

### Filtre

Táto sekcia ovláda, ktoré uzly sa zobrazia v grafe.

- **Hľadať súbory** umožňuje filtrovať poznámky podľa hľadaného výrazu. Ak sa chcete dozvedieť, ako písať pokročilejšie hľadané výrazy, pozrite si [[Hľadať]].
- **Značky** prepína zobrazenie značiek v grafe.
- **Prílohy** prepína zobrazenie príloh v grafe.
- **Iba existujúce súbory** prepína zobrazenie len poznámok, ktoré existujú vo vašom trezore. Keďže poznámka nemusí existovať, aby na ňu bolo možné odkazovať, toto vám môže pomôcť obmedziť graf na poznámky, ktoré skutočne máte vo svojom trezore.
- **Siroty** prepína zobrazenie poznámok bez akýchkoľvek odkazov.

> [!info] Vylúčené súbory
> Súbory zodpovedajúce vašim vzorom [[Nastavenia#Vylúčené súbory|Vylúčené súbory]] sa nezobrazia v zobrazení grafu.

### Skupiny

Vytvorte skupiny poznámok na ich vzájomné rozlíšenie pomocou farieb.

Na vytvorenie novej skupiny:

1. Kliknite na **Nová skupina záložiek**.
2. Do vyhľadávacieho poľa zadajte hľadaný výraz pre poznámky, ktoré chcete pridať do skupiny.
3. Kliknite na farebný kruh, aby ste skupine priradili farbu.

Ak sa chcete dozvedieť, ako písať pokročilejšie hľadané výrazy, pozrite si [[Hľadať]].

### Zobrazenie

Táto sekcia ovláda spôsob vizualizácie uzlov a odkazov v grafe.

- **Šípky** prepína zobrazenie smeru každého odkazu.
- **Prahová hodnota zmiznutia textu** ovláda priehľadnosť textu názvu každej poznámky.
- **Veľkosť uzlu** ovláda veľkosť kruhu reprezentujúceho každú poznámku.
- **Hrúbka čiar** ovláda šírku čiary pre každý odkaz.
- **Animovať** spustí [[#Spustenie animácie časozberného záznamu|animáciu časozberného záznamu]].

### Sily

Táto sekcia ovláda sily pôsobiace na každý uzol v grafe.

- **Gravitácia stredu** ovláda kompaktnosť grafu. Vyššia hodnota vytvára kruhovejší graf.
- **Odpudivá sila** ovláda, ako veľmi uzol odtláča ostatné uzly od seba.
- **Sila prepojenia** ovláda ťah na každý odkaz. Ak by bol odkaz gumičkou, sila prepojenia ovláda, ako napnutá alebo voľná je.
- **Dĺžka prepojenia** ovláda dĺžku čiar medzi jednotlivými poznámkami.

## Spustenie animácie časozberného záznamu

Poznámky a prílohy sa zobrazujú v chronologickom poradí podľa času ich vytvorenia.

![[obsidian-graph-view.png#interface]]

## Lokálny graf

Na otvorenie lokálneho zobrazenia grafu použite príkaz **Otvoriť lokálny graf**. Zatiaľ čo zobrazenie grafu ukazuje všetky poznámky vo vašom trezore, lokálne zobrazenie grafu zobrazuje poznámky prepojené s aktívnou poznámkou.

Lokálne zobrazenie grafu môže využívať všetky [[#Nastavenia]] dostupné pre globálne zobrazenie grafu. Navyše môžete meniť hĺbku lokálneho grafu. Každá úroveň hĺbky zobrazí poznámky prepojené s poznámkami odkrytými na predchádzajúcej úrovni hĺbky. Na ovládanie hĺbky lokálneho grafu použite posuvník v hornej časti panela nastavení filtrov lokálneho grafu.
