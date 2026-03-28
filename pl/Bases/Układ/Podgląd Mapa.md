---
permalink: bases/views/map
---
Mapa to typ [[Podglądy|podglądu]], którego możesz używać w [[Wprowadzenie do Baz danych|Bazach danych]]. Wymaga zainstalowania [wtyczki Maps](obsidian://show-plugin?id=maps).

Wybierz ![[lucide-map.svg#icon]]  **Mapa** z menu podglądu, aby wyświetlić pliki jako interaktywną mapę ze znacznikami dla każdego pliku oraz podglądem wyświetlającym właściwości danego pliku.

![[bases-map-places.png#interface]]

## Instalacja wtyczki Maps

Podglądy mapy wymagają Obsidian 1.10. [Wtyczka Maps](obsidian://show-plugin?id=maps) to oficjalna [[Wtyczki społeczności|wtyczka społeczności]], którą możesz pobrać osobno.

1. Postępuj zgodnie z instrukcjami w [[Wtyczki społeczności#Instalacja wtyczki społeczności]]
2. Pobierz i włącz [Maps](obsidian://show-plugin?id=maps) z listy

## Przykład

Na początek spróbuj utworzyć notatkę o nazwie **Wieża Eiffla** i skopiuj do niej następujące właściwości:

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

Oto co oznacza powyższy kod:

| Właściwość    | Wartość                  |                                                                                                                                                                        |
| ------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates` | `48.85837`<br>`2.294481` | Współrzędne są przechowywane jako `szerokość, długość geograficzna`. Możesz uzyskać współrzędne klikając prawym przyciskiem myszy lokalizację na mapie i wybierając **Kopiuj współrzędne**. |
| `icon`        | `landmark`               | Nazwa ikony z [biblioteki Lucide](https://lucide.dev/).                                                                                                                |
| `color`       | `red`                    | Prawidłowa wartość CSS: hex, RGB, nazwa koloru itp.                                                                                                                    |
| `tags`        | `places`                 | Tag, którego użyjemy do znajdowania znaczników mapy w naszej bazie.                                                                                                    |
Teraz utwórz podgląd mapy z filtrem dla tagu `places` i ustaw współrzędne znaczników, ikonę oraz kolor, korzystając z właściwości wymienionych powyżej.

Możesz również otworzyć te [przykładowe pliki](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) w Obsidian, aby zobaczyć działające podglądy mapy ze znacznikami, ikonami i kolorami już skonfigurowanymi.

## Ustawienia

Ustawienia podglądu mapy można skonfigurować w [[Podglądy#Ustawienia podglądu|Ustawieniach podglądu]].

- Wysokość osadzenia
- Współrzędne środka
- Ograniczenia powiększenia
- Współrzędne, kolor i ikona znaczników
- Tło

### Znaczniki

#### Współrzędne

Aby wyświetlić pinezki na mapie, przejdź do [[Podglądy#Ustawienia podglądu|ustawień podglądu]] i wybierz właściwość **współrzędne znacznika**. Właściwość musi zawierać współrzędne szerokości i długości geograficznej. Akceptowane są następujące formaty:

```yaml
# Właściwość tekstowa
coordinates: "lat, lng"

# Właściwość listowa
coordinates:
  - "lat"
  - "lng"
```

Jeśli przechowujesz współrzędne jako oddzielne właściwości `latitude` i `longitude`, możesz je połączyć za pomocą właściwości [[Składnia Baz danych#Wzory|wzoru]], definiując ją jako tablicę współrzędnych przy użyciu następującego wzoru: `[latitude, longitude]`.

#### Ikony

Dodaj ikony do znaczników, definiując właściwość **ikony znaczników**. Na przykład możesz dodać do swoich notatek właściwość o nazwie `icon` i nadać jej wartości takie jak `landmark` lub `utensils` z wbudowanej [biblioteki Lucide](https://lucide.dev/icons/) Obsidian.

##### Użyj wzoru do definiowania ikon

Załóżmy, że chcesz, aby wszystkie restauracje miały tę samą ikonę na mapie:

1. Utwórz notatkę o nazwie **Restauracje** i dodaj właściwość o nazwie `icon` z wartością `utensils`.
2. Nadaj notatkom restauracji właściwość o nazwie `type`, która linkuje do notatki `[[Restauracje]]`.
3. Dodaj właściwość wzoru o nazwie `Type icon` do swojej bazy z następującym kodem:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Wybierz `Type icon` jako ikonę znacznika w ustawieniach podglądu.

Voilà! Teraz Twoja mapa będzie wyświetlać ikony z *typu* miejsca, a nie z samego miejsca.

#### Kolory

Ustaw kolor znaczników. Akceptuje wartości jako RGB `rgb(0,0,0)`, HEX `#000` lub zmienne CSS takie jak `var(--color-blue)`. Podobnie jak w powyższym przykładzie z ikonami, możesz użyć właściwości wzoru do dynamicznego definiowania kolorów.

### Tło

#### Kafelki mapy

Kafelki mapy to standardowy sposób wyświetlania map cyfrowych. Istnieje kilka usług, których możesz użyć do dostosowania map z unikalnymi stylami, kolorami i czcionkami. Maps obsługuje zarówno kafelki rastrowe, jak i wektorowe, i akceptuje większość adresów URL kafelków, w tym adresy URL TileJSON.

[OpenFreeMap](https://openfreemap.org/) oferuje kilka stylów, których możesz używać za darmo. Spróbuj użyć jednego z poniższych adresów URL w ustawieniu **Kafelki mapy**:

| Nazwa    | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Przydatne linki

- [Maputnik](https://maputnik.github.io/) do dostosowywania kafelków mapy.
- [Protomaps](https://protomaps.com/) do samodzielnego hostowania kafelków mapy.
- Inne usługi hostowane z darmowymi planami to [MapTiler](https://www.maptiler.com/) i [Mapbox](https://www.mapbox.com/).


## Wskazówki

Możesz linkować do popularnych usług mapowych za pomocą [[Wzory|Wzorów]]. Na przykład Twoja pinezka może wyświetlać link do Google Maps przy użyciu następującego wzoru:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Rozwiązywanie problemów

Jeśli mapa jest pusta po pierwszym załadowaniu wtyczki Maps, spróbuj [[Aktualizuj Obsidian|zaktualizować wersję instalatora Obsidian]].

[Wtyczka Maps](https://github.com/obsidianmd/obsidian-maps) jest otwartym oprogramowaniem (open-source). Możesz pomóc, zgłaszając błędy, propozycje funkcji i pull requesty.
