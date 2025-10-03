---
permalink: bases/views/map
---
Display files in a [[Introduction to Bases|Base]] as an interactive map with markers for each file, and a preview that displays properties of that file.

![[bases-map-places.png#interface]]

> [!info] Requires Obsidian 1.10 and the Maps plugin
> Map views require Obsidian 1.10 which is currently in [[Early access versions|early access]].  The [Maps plugin](https://github.com/obsidianmd/obsidian-maps) is an official [[Community plugins|community plugin]] that you can download separately.

## Example uses

Open the [example files](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) in Obsidian to see working map views with markers, icons, and colors already configured.

## Settings

Map view settings can be configured in [[Views#View settings|View settings]].

- Embedded height
- Center coordinates
- Zoom constraints
- Marker coordinates, color, and icon
- Background

### Markers

To display markers on the map go to the [[Views#View settings|view settings]] and select a marker property. The property must contain latitude and longitude coordinates. The following formats are accepted:

```yaml
# Text property
coordinates: "lat, lng"

# List property
coordinates:
  - "lat"
  - "lng"
```

If you store coordinates as separate `latitude` and `longitude` properties you can combine them with a [[Bases syntax#Formulas|formula]] property by defining it as an array of coordinates: `[latitude, longitude]`.

#### Icons

You can add icons from Obsidian's built-in [Lucide library](https://lucide.dev/icons/) to markers.

#### Colors

You can define colors. Accepts values as RGB `rgb(0,0,0)`, HEX `#000`, or CSS variables like `var(--color-blue)`.

