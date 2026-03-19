---
permalink: bases/views/map
---
Mapa es un tipo de [[Vistas|vista]] que puedes usar en [[Introducción a Bases|Bases]]. Requiere instalar el [complemento Maps](obsidian://show-plugin?id=maps).

Selecciona ![[lucide-map.svg#icon]]  **Mapa** desde el menú de vista para mostrar archivos como un mapa interactivo con marcadores para cada archivo, y una vista previa que muestra las propiedades de ese archivo.

![[bases-map-places.png#interface]]

## Instalar el complemento Maps

Las vistas de mapa requieren Obsidian 1.10. El [complemento Maps](obsidian://show-plugin?id=maps) es un [[Complementos de la comunidad|complemento de la comunidad]] oficial que puedes descargar por separado.

1. Sigue las instrucciones en [[Complementos de la comunidad#Instalar un complemento de la comunidad]]
2. Descarga y activa [Maps](obsidian://show-plugin?id=maps) desde la lista

## Ejemplo

Para comenzar, intenta crear una nota llamada **Torre Eiffel** y copia las siguientes propiedades en ella:

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

Esto es lo que significa el código anterior:

| Propiedad     | Valor                    |                                                                                                                                                                          |
| ------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `coordinates` | `48.85837`<br>`2.294481` | Las coordenadas se almacenan como `latitud, longitud`. Puedes obtener coordenadas haciendo clic derecho en una ubicación del mapa y seleccionando **Copiar coordenadas**. |
| `icon`        | `landmark`               | El nombre de un icono de la [biblioteca Lucide](https://lucide.dev/).                                                                                                    |
| `color`       | `red`                    | Un valor CSS válido: hex, RGB, color con nombre, etc.                                                                                                                    |
| `tags`        | `places`                 | La etiqueta que usaremos para encontrar marcadores del mapa en nuestra base.                                                                                             |
Ahora crea una vista de mapa con un filtro para la etiqueta `places` y configura las coordenadas del marcador, icono y color usando las propiedades listadas arriba.

También puedes abrir estos [archivos de ejemplo](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) en Obsidian para ver vistas de mapa funcionales con marcadores, iconos y colores ya configurados.

## Ajustes

Los ajustes de la vista de mapa se pueden configurar en [[Vistas#Ajustes de vista|Ajustes de vista]].

- Altura incrustada
- Coordenadas del centro
- Restricciones de zoom
- Coordenadas, color e icono del marcador
- Fondo

### Marcadores

#### Coordenadas

Para mostrar pines en el mapa ve a los [[Vistas#Ajustes de vista|ajustes de vista]] y selecciona una propiedad de **coordenadas del marcador**. La propiedad debe contener coordenadas de latitud y longitud. Se aceptan los siguientes formatos:

```yaml
# Propiedad de texto
coordinates: "lat, lng"

# Propiedad de lista
coordinates:
  - "lat"
  - "lng"
```

Si almacenas las coordenadas como propiedades separadas de `latitude` y `longitude` puedes combinarlas con una propiedad de [[Sintaxis de Bases#Fórmulas|fórmula]] definiéndola como un arreglo de coordenadas usando la siguiente fórmula: `[latitude, longitude]`.

#### Iconos

Añade iconos a los marcadores definiendo una propiedad de **iconos del marcador**. Por ejemplo, puedes añadir una propiedad llamada `icon` a tus notas y darle valores como `landmark` o `utensils` de la [biblioteca Lucide](https://lucide.dev/icons/) integrada en Obsidian.

##### Usar una fórmula para definir iconos

Supongamos que quieres que todos los restaurantes tengan el mismo icono en el mapa:

1. Crea una nota llamada **Restaurantes** y añade una propiedad llamada `icon` con el valor `utensils`.
2. Dale a las notas de restaurantes una propiedad llamada `type` que enlace a la nota `[[Restaurantes]]`.
3. Añade una propiedad de fórmula llamada `Type icon` a tu base con el siguiente código:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Elige `Type icon` como tu icono de marcador en los ajustes de vista.

¡Voilà! Ahora tu mapa mostrará iconos del *tipo* del lugar, no del lugar en sí.

#### Colores

Establece el color de los marcadores. Acepta valores como RGB `rgb(0,0,0)`, HEX `#000`, o variables CSS como `var(--color-blue)`. Como en el ejemplo de iconos anterior, puedes usar una propiedad de fórmula para definir colores dinámicamente.

### Fondo

#### Mosaicos de mapa

Los mosaicos de mapa son una forma estándar de mostrar mapas digitales. Hay varios servicios que puedes usar para personalizar mapas con estilos, colores y fuentes únicos. Maps soporta tanto mosaicos rasterizados como vectoriales, y acepta la mayoría de URLs de mosaicos, incluyendo URLs de TileJSON.

[OpenFreeMap](https://openfreemap.org/) ofrece algunos estilos que puedes usar de forma gratuita. Prueba usando una de las siguientes URLs en el ajuste de **Mosaicos de mapa**:

| Nombre   | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Enlaces útiles

- [Maputnik](https://maputnik.github.io/) para personalizar mosaicos de mapa.
- [Protomaps](https://protomaps.com/) para alojar mosaicos de mapa de forma propia.
- Otros servicios alojados con niveles gratuitos incluyen [MapTiler](https://www.maptiler.com/) y [Mapbox](https://www.mapbox.com/).


## Consejos

Puedes enlazar a servicios de mapas populares usando [[Fórmulas]]. Por ejemplo, tu pin puede mostrar un enlace a Google Maps usando la siguiente fórmula:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Solución de problemas

Si el mapa aparece en blanco cuando cargas por primera vez el complemento Maps, intenta [[Actualizar Obsidian|actualizar la versión del instalador de Obsidian]].

El [complemento Maps](https://github.com/obsidianmd/obsidian-maps) es de código abierto. Puedes ayudar contribuyendo reportes de errores, solicitudes de funciones y pull requests.
