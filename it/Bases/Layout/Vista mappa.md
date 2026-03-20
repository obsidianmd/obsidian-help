---
permalink: bases/views/map
aliases:
  - Map view
---
Mappa è un tipo di [[Views|vista]] che puoi utilizzare in [[Introduction to Bases|Base]]. Richiede l'installazione del [plugin Maps](obsidian://show-plugin?id=maps).

Seleziona ![[lucide-map.svg#icon]]  **Mappa** dal menu delle viste per visualizzare i file come una mappa interattiva con marcatori per ogni file e un'anteprima che mostra le proprietà di quel file.

![[bases-map-places.png#interface]]

## Installare il plugin Maps

Le viste mappa richiedono Obsidian 1.10. Il [plugin Maps](obsidian://show-plugin?id=maps) è un [[Community plugins|plugin della community]] ufficiale che puoi scaricare separatamente.

1. Segui le istruzioni in [[Community plugins#Installa un plugin della community]]
2. Scarica e abilita [Maps](obsidian://show-plugin?id=maps) dall'elenco

## Esempio

Per iniziare, prova a creare una nota chiamata **Torre Eiffel** e copia le seguenti proprietà al suo interno:

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

Ecco cosa significa il codice sopra:

| Proprietà     | Valore                   |                                                                                                                                                                          |
| ------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `coordinates` | `48.85837`<br>`2.294481` | Le coordinate sono memorizzate come `latitudine, longitudine`. Puoi ottenere le coordinate facendo clic destro su una posizione sulla mappa e selezionando **Copia coordinate**. |
| `icon`        | `landmark`               | Il nome di un'icona dalla [libreria Lucide](https://lucide.dev/).                                                                                                        |
| `color`       | `red`                    | Un valore CSS valido: hex, RGB, colore nominato, ecc.                                                                                                                    |
| `tags`        | `places`                 | L'etichetta che useremo per trovare i marcatori della mappa nella nostra base.                                                                                           |
Ora crea una vista mappa con un filtro per l'etichetta `places` e imposta le coordinate dei marcatori, l'icona e il colore utilizzando le proprietà elencate sopra.

Puoi anche aprire questi [file di esempio](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) in Obsidian per vedere viste mappa funzionanti con marcatori, icone e colori già configurati.

## Impostazioni

Le impostazioni della vista mappa possono essere configurate nelle [[Views#Impostazioni della vista|Impostazioni della vista]].

- Altezza incorporata
- Coordinate centrali
- Vincoli di zoom
- Coordinate, colore e icona dei marcatori
- Sfondo

### Marcatori

#### Coordinate

Per visualizzare i segnaposto sulla mappa vai nelle [[Views#Impostazioni della vista|impostazioni della vista]] e seleziona una proprietà **coordinate marcatore**. La proprietà deve contenere coordinate di latitudine e longitudine. Sono accettati i seguenti formati:

```yaml
# Proprietà testo
coordinates: "lat, lng"

# Proprietà elenco
coordinates:
  - "lat"
  - "lng"
```

Se memorizzi le coordinate come proprietà separate `latitude` e `longitude` puoi combinarle con una proprietà [[Bases syntax#Formule|formula]] definendola come un array di coordinate utilizzando la seguente formula: `[latitude, longitude]`.

#### Icone

Aggiungi icone ai marcatori definendo una proprietà **icone marcatore**. Ad esempio, puoi aggiungere una proprietà chiamata `icon` alle tue note e assegnarle valori come `landmark` o `utensils` dalla [libreria Lucide](https://lucide.dev/icons/) integrata in Obsidian.

##### Usare una formula per definire le icone

Supponiamo che tu voglia che tutti i ristoranti abbiano la stessa icona sulla mappa:

1. Crea una nota chiamata **Ristoranti** e aggiungi una proprietà chiamata `icon` con il valore `utensils`.
2. Assegna alle note dei ristoranti una proprietà chiamata `type` che colleghi alla nota `[[Ristoranti]]`.
3. Aggiungi una proprietà formula chiamata `Type icon` alla tua base con il seguente codice:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Scegli `Type icon` come icona del marcatore nelle impostazioni della vista.

Voilà! Ora la tua mappa mostrerà le icone in base al *tipo* del luogo, non al luogo stesso.

#### Colori

Imposta il colore dei marcatori. Accetta valori come RGB `rgb(0,0,0)`, HEX `#000`, o variabili CSS come `var(--color-blue)`. Come nell'esempio delle icone sopra, puoi usare una proprietà formula per definire i colori dinamicamente.

### Sfondo

#### Tile della mappa

I tile della mappa sono un modo standard per visualizzare mappe digitali. Esistono diversi servizi che puoi utilizzare per personalizzare le mappe con stili, colori e tipi di carattere unici. Maps supporta sia tile raster che vettoriali e accetta la maggior parte degli URL di tile, inclusi gli URL TileJSON.

[OpenFreeMap](https://openfreemap.org/) offre alcuni stili che puoi usare gratuitamente. Prova a utilizzare uno dei seguenti URL nell'impostazione **Tile della mappa**:

| Nome     | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Link utili

- [Maputnik](https://maputnik.github.io/) per personalizzare i tile della mappa.
- [Protomaps](https://protomaps.com/) per ospitare autonomamente i tile della mappa.
- Altri servizi ospitati con piani gratuiti includono [MapTiler](https://www.maptiler.com/) e [Mapbox](https://www.mapbox.com/).


## Suggerimenti

Puoi creare collegamenti ai servizi di mappe più diffusi utilizzando le [[Formulas|Formule]]. Ad esempio il tuo segnaposto può mostrare un collegamento a Google Maps utilizzando la seguente formula:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Risoluzione dei problemi

Se la mappa appare vuota quando carichi per la prima volta il plugin Maps, prova ad [[Update Obsidian|aggiornare la versione del programma di installazione di Obsidian]].

Il [plugin Maps](https://github.com/obsidianmd/obsidian-maps) è open source. Puoi contribuire segnalando bug, richiedendo funzionalità e inviando pull request.
