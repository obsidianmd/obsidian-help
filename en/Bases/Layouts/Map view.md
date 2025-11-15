---
permalink: bases/views/map
---
Map is a type of [[Views|view]] you can use in [[Introduction to Bases|Bases]].

Select ![[lucide-map.svg#icon]]  **Map** from the view menu to display files as an interactive map with markers for each file, and a preview that displays properties of that file.

![[bases-map-places.png#interface]]

> [!info] Requires the Maps plugin
> Map views require Obsidian 1.10. The [Maps plugin](https://github.com/obsidianmd/obsidian-maps) is an official [[Community plugins|community plugin]] that you can download separately.

## Example

To start, try creating a note called **Eiffel Tower** and copy the following properties into it:

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

Here's what the code above means:

| Property      | Value                    |                                                                                                                                                      |
| ------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates` | `48.85837`<br>`2.294481` | Coordinates are stored as `latitude, longitude`. You can get coordinates by right-clicking a location on the map and selecting **Copy coordinates**. |
| `icon`        | `landmark`               | The name of an icon from the [Lucide library](https://lucide.dev/).                                                                                  |
| `color`       | `red`                    | A valid CSS value: hex, RGB, named color, etc.                                                                                                       |
| `tags`        | `places`                 | The tag we'll use to find map markers in our base.                                                                                                   |
Now create a map view with a filter for the tag `places` and set marker coordinates, icon, and color using the properties listed above. 

You can also open these [example files](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) in Obsidian to see working map views with markers, icons, and colors already configured.

## Settings

Map view settings can be configured in [[Views#View settings|View settings]].

- Embedded height
- Center coordinates
- Zoom constraints
- Marker coordinates, color, and icon
- Background

### Markers

#### Coordinates

To display pins on the map go to the [[Views#View settings|view settings]] and select a **marker coordinates** property. The property must contain latitude and longitude coordinates. The following formats are accepted:

```yaml
# Text property
coordinates: "lat, lng"

# List property
coordinates:
  - "lat"
  - "lng"
```

If you store coordinates as separate `latitude` and `longitude` properties you can combine them with a [[Bases syntax#Formulas|formula]] property by defining it as an array of coordinates using the following formula: `[latitude, longitude]`.

#### Icons

Add icons to markers by defining a **marker icons** property. For example, you can add a property called `icon` to your notes and give it values like `landmark` or `utensils` from Obsidian's built-in [Lucide library](https://lucide.dev/icons/).

##### Use a formula to define icons

Let's say you want all restaurants to have the same icon on the map:

1. Create a note called **Restaurants** and add a property called `icon` with the value `utensils`. 
2. Give restaurant notes a property called `type` that links to the `[[Restaurants]]` note.
3. Add a formula property called `Type icon` to your base with the following code:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Choose the `Type icon` as your marker icon in the view settings.

Voilà! Now your map will display icons from the the *type* of the place, not the place itself.

#### Colors

Set the color of markers. Accepts values as RGB `rgb(0,0,0)`, HEX `#000`, or CSS variables like `var(--color-blue)`. Like in the icon example above you can use a formula property to define colors dynamically.

### Background

#### Map tiles

Map tiles are a standard way to display digital maps. There are several services you can use to customize maps with unique styles, colors, and fonts. Maps support both raster and vector tiles, and accepts most tile URLs, including TileJSON URLs.

[OpenFreeMap](https://openfreemap.org/) offers a few styles you can use for free. Try using one of the following URLs in the **Map tiles** setting:

| Name     | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Useful links

- [Maputnik](https://maputnik.github.io/) for customizing map tiles.
- [Protomaps](https://protomaps.com/) for self-hosting map tiles.
- Other hosted services with free tiers include [MapTiler](https://www.maptiler.com/) and [Mapbox](https://www.mapbox.com/).

## Troubleshooting

If the map appears blank when you first load the Maps plugin, try [[Update Obsidian|updating the Obsidian installer version]].