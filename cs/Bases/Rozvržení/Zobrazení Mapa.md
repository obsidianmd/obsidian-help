---
permalink: bases/views/map
---
Mapa je typ [[Zobrazení|zobrazení]], který můžete použít v [[Úvod do Základen|Základnách]]. Vyžaduje instalaci [pluginu Maps](obsidian://show-plugin?id=maps).

Vyberte ![[lucide-map.svg#icon]]  **Mapa** z nabídky zobrazení pro zobrazení souborů jako interaktivní mapy se značkami pro každý soubor a náhledem, který zobrazuje vlastnosti daného souboru.

![[bases-map-places.png#interface]]

## Instalace pluginu Maps

Zobrazení mapy vyžaduje Obsidian 1.10. [Plugin Maps](obsidian://show-plugin?id=maps) je oficiální [[Komunitní pluginy|komunitní plugin]], který si můžete stáhnout samostatně.

1. Postupujte podle pokynů v [[Komunitní pluginy#Instalace komunitního pluginu]]
2. Stáhněte a zapněte [Maps](obsidian://show-plugin?id=maps) ze seznamu

## Příklad

Pro začátek zkuste vytvořit poznámku nazvanou **Eiffelova věž** a zkopírujte do ní následující vlastnosti:

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

Zde je vysvětlení výše uvedeného kódu:

| Vlastnost     | Hodnota                  |                                                                                                                                                         |
| ------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates` | `48.85837`<br>`2.294481` | Souřadnice se ukládají jako `zeměpisná šířka, zeměpisná délka`. Souřadnice můžete získat kliknutím pravým tlačítkem na místo na mapě a výběrem **Kopírovat souřadnice**. |
| `icon`        | `landmark`               | Název ikony z [knihovny Lucide](https://lucide.dev/).                                                                                                   |
| `color`       | `red`                    | Platná CSS hodnota: hex, RGB, pojmenovaná barva atd.                                                                                                    |
| `tags`        | `places`                 | Štítek, který použijeme k nalezení značek na mapě v naší základně.                                                                                     |
Nyní vytvořte zobrazení mapy s filtrem pro štítek `places` a nastavte souřadnice značek, ikonu a barvu pomocí výše uvedených vlastností.

Můžete také otevřít tyto [ukázkové soubory](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) v Obsidian a prohlédnout si funkční zobrazení map se značkami, ikonami a barvami, které jsou již nakonfigurované.

## Nastavení

Nastavení zobrazení mapy lze konfigurovat v [[Zobrazení#Nastavení zobrazení|Nastavení zobrazení]].

- Výška vloženého zobrazení
- Střed souřadnic
- Omezení přiblížení
- Souřadnice, barva a ikona značek
- Pozadí

### Značky

#### Souřadnice

Pro zobrazení špendlíků na mapě přejděte do [[Zobrazení#Nastavení zobrazení|nastavení zobrazení]] a vyberte vlastnost **souřadnice značek**. Vlastnost musí obsahovat souřadnice zeměpisné šířky a délky. Jsou akceptovány následující formáty:

```yaml
# Textová vlastnost
coordinates: "lat, lng"

# Seznamová vlastnost
coordinates:
  - "lat"
  - "lng"
```

Pokud ukládáte souřadnice jako samostatné vlastnosti `latitude` a `longitude`, můžete je zkombinovat pomocí vlastnosti [[Syntaxe Základen#Vzorce|vzorce]] tak, že ji definujete jako pole souřadnic s následujícím vzorcem: `[latitude, longitude]`.

#### Ikony

Přidejte ikony ke značkám definováním vlastnosti **ikony značek**. Například můžete do svých poznámek přidat vlastnost nazvanou `icon` a přiřadit jí hodnoty jako `landmark` nebo `utensils` z vestavěné [knihovny Lucide](https://lucide.dev/icons/) v Obsidian.

##### Použití vzorce k definování ikon

Řekněme, že chcete, aby všechny restaurace měly na mapě stejnou ikonu:

1. Vytvořte poznámku nazvanou **Restaurace** a přidejte vlastnost nazvanou `icon` s hodnotou `utensils`.
2. Poznámkám restaurací přidejte vlastnost nazvanou `type`, která odkazuje na poznámku `[[Restaurace]]`.
3. Přidejte do své základny vlastnost vzorce nazvanou `Type icon` s následujícím kódem:
	```js
	list(type)[0].asFile().properties.icon
	```
4. V nastavení zobrazení vyberte `Type icon` jako ikonu značek.

Voilà! Nyní bude vaše mapa zobrazovat ikony podle *typu* místa, nikoli podle samotného místa.

#### Barvy

Nastavte barvu značek. Přijímá hodnoty jako RGB `rgb(0,0,0)`, HEX `#000` nebo CSS proměnné jako `var(--color-blue)`. Stejně jako ve výše uvedeném příkladu s ikonami můžete k dynamickému definování barev použít vlastnost vzorce.

### Pozadí

#### Mapové dlaždice

Mapové dlaždice jsou standardní způsob zobrazení digitálních map. Existuje několik služeb, které můžete použít k přizpůsobení map jedinečnými styly, barvami a písmy. Mapy podporují jak rastrové, tak vektorové dlaždice a přijímají většinu URL dlaždic, včetně URL TileJSON.

[OpenFreeMap](https://openfreemap.org/) nabízí několik stylů, které můžete používat zdarma. Zkuste v nastavení **Mapové dlaždice** použít jednu z následujících URL:

| Název    | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Užitečné odkazy

- [Maputnik](https://maputnik.github.io/) pro přizpůsobení mapových dlaždic.
- [Protomaps](https://protomaps.com/) pro vlastní hosting mapových dlaždic.
- Další hostované služby s bezplatnými tarify zahrnují [MapTiler](https://www.maptiler.com/) a [Mapbox](https://www.mapbox.com/).


## Tipy

Můžete odkazovat na populární mapové služby pomocí [[Vzorce|Vzorců]]. Například váš špendlík může zobrazovat odkaz na Google Mapy pomocí následujícího vzorce:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Řešení problémů

Pokud se mapa při prvním načtení pluginu Maps zobrazí prázdná, zkuste [[Aktualizace Obsidian|aktualizovat verzi instalátoru Obsidian]].

[Plugin Maps](https://github.com/obsidianmd/obsidian-maps) je open source. Můžete pomoci přispíváním hlášení chyb, požadavků na funkce a pull requestů.
