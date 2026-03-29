---
permalink: bases/views/map
---
Mapa je typ [[Zobrazenia|zobrazenia]], ktorý môžete použiť v [[Úvod do Databáz|Databázach]]. Vyžaduje inštaláciu [pluginu Maps](obsidian://show-plugin?id=maps).

Vyberte ![[lucide-map.svg#icon]]  **Mapa** z ponuky zobrazení na zobrazenie súborov ako interaktívnej mapy so značkami pre každý súbor a náhľadom, ktorý zobrazuje vlastnosti daného súboru.

![[bases-map-places.png#interface]]

## Inštalácia pluginu Maps

Zobrazenia mapy vyžadujú Obsidian 1.10. [Plugin Maps](obsidian://show-plugin?id=maps) je oficiálny [[Komunitné pluginy|komunitný plugin]], ktorý si môžete stiahnuť samostatne.

1. Postupujte podľa pokynov v [[Komunitné pluginy#Inštalácia komunitného pluginu]]
2. Stiahnite a zapnite [Maps](obsidian://show-plugin?id=maps) zo zoznamu

## Príklad

Na začiatok skúste vytvoriť poznámku s názvom **Eiffelova veža** a skopírujte do nej nasledujúce vlastnosti:

```yaml
---
coordinates:
  - "48.85837"
  - "2.294481"
icon: "landmark"
color: "red"
tags:
  - places
---
```

Tu je vysvetlenie kódu vyššie:

| Vlastnosť     | Hodnota                  |                                                                                                                                                                    |
| -------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `coordinates`  | `48.85837`<br>`2.294481` | Súradnice sa ukladajú ako `zemepisná šírka, zemepisná dĺžka`. Súradnice získate kliknutím pravým tlačidlom na miesto na mape a výberom **Copy coordinates**. |
| `icon`         | `landmark`               | Názov ikony z [knižnice Lucide](https://lucide.dev/).                                                                                                              |
| `color`        | `red`                    | Platná CSS hodnota: hex, RGB, pomenovaná farba atď.                                                                                                               |
| `tags`         | `places`                 | Značka, ktorú použijeme na vyhľadanie značiek mapy v našej databáze.                                                                                              |
Teraz vytvorte zobrazenie mapy s filtrom pre značku `places` a nastavte súradnice značiek, ikonu a farbu pomocou vlastností uvedených vyššie.

Tieto [ukážkové súbory](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) môžete tiež otvoriť v Obsidian a pozrieť si funkčné zobrazenia máp so značkami, ikonami a farbami, ktoré sú už nakonfigurované.

## Nastavenia

Nastavenia zobrazenia mapy je možné konfigurovať v [[Zobrazenia#Nastavenia zobrazenia|Nastaveniach zobrazenia]].

- Výška vloženia
- Stredové súradnice
- Obmedzenia priblíženia
- Súradnice značiek, farba a ikona
- Pozadie

### Značky

#### Súradnice

Na zobrazenie špendlíkov na mape prejdite do [[Zobrazenia#Nastavenia zobrazenia|nastavení zobrazenia]] a vyberte vlastnosť **súradnice značky**. Vlastnosť musí obsahovať súradnice zemepisnej šírky a dĺžky. Akceptované sú nasledujúce formáty:

```yaml
# Textová vlastnosť
coordinates: "lat, lng"

# Zoznamová vlastnosť
coordinates:
  - "lat"
  - "lng"
```

Ak ukladáte súradnice ako samostatné vlastnosti `latitude` a `longitude`, môžete ich skombinovať pomocou vlastnosti [[Syntax Databáz#Vzorce|vzorca]] tak, že ho definujete ako pole súradníc s nasledujúcim vzorcom: `[latitude, longitude]`.

#### Ikony

Pridajte ikony k značkám definovaním vlastnosti **ikony značiek**. Napríklad môžete k poznámkam pridať vlastnosť s názvom `icon` a dať jej hodnoty ako `landmark` alebo `utensils` zo vstavanej [knižnice Lucide](https://lucide.dev/icons/) v Obsidian.

##### Použitie vzorca na definovanie ikon

Povedzme, že chcete, aby všetky reštaurácie mali rovnakú ikonu na mape:

1. Vytvorte poznámku s názvom **Reštaurácie** a pridajte vlastnosť s názvom `icon` s hodnotou `utensils`.
2. Poznámkam reštaurácií pridajte vlastnosť s názvom `type`, ktorá odkazuje na poznámku `[[Reštaurácie]]`.
3. Pridajte vlastnosť vzorca s názvom `Type icon` do vašej databázy s nasledujúcim kódom:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Vyberte `Type icon` ako ikonu značky v nastaveniach zobrazenia.

Voilà! Teraz vaša mapa zobrazí ikony podľa *typu* miesta, nie podľa samotného miesta.

#### Farby

Nastavte farbu značiek. Akceptuje hodnoty ako RGB `rgb(0,0,0)`, HEX `#000` alebo CSS premenné ako `var(--color-blue)`. Rovnako ako v príklade s ikonami vyššie môžete použiť vlastnosť vzorca na dynamické definovanie farieb.

### Pozadie

#### Mapové dlaždice

Mapové dlaždice sú štandardný spôsob zobrazovania digitálnych máp. Existuje niekoľko služieb, ktoré môžete použiť na prispôsobenie máp s unikátnymi štýlmi, farbami a písmami. Maps podporujú rastrové aj vektorové dlaždice a akceptujú väčšinu URL dlaždíc vrátane TileJSON URL.

[OpenFreeMap](https://openfreemap.org/) ponúka niekoľko štýlov, ktoré môžete používať zadarmo. Skúste použiť jednu z nasledujúcich URL v nastavení **Mapové dlaždice**:

| Názov    | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Užitočné odkazy

- [Maputnik](https://maputnik.github.io/) na prispôsobenie mapových dlaždíc.
- [Protomaps](https://protomaps.com/) na self-hosting mapových dlaždíc.
- Ďalšie hostované služby s bezplatnými úrovňami zahŕňajú [MapTiler](https://www.maptiler.com/) a [Mapbox](https://www.mapbox.com/).


## Tipy

Na populárne mapové služby môžete odkazovať pomocou [[Vzorce|Vzorcov]]. Napríklad váš špendlík môže zobraziť odkaz na Google Maps pomocou nasledujúceho vzorca:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Riešenie problémov

Ak sa mapa zobrazí prázdna pri prvom načítaní pluginu Maps, skúste [[Aktualizovať Obsidian|aktualizovať verziu inštalátora Obsidian]].

[Plugin Maps](https://github.com/obsidianmd/obsidian-maps) má otvorený zdrojový kód. Môžete pomôcť prispievaním hlásení chýb, požiadaviek na funkcie a pull requestov.
