---
permalink: bases/views/map
localized: '2026-03-18'

---
La carte est un type de [[Vues|vue]] que vous pouvez utiliser dans les [[Introduction aux Bases|Bases]]. Elle nécessite l'installation du [module Maps](obsidian://show-plugin?id=maps).

Sélectionnez ![[lucide-map.svg#icon]]  **Carte** depuis le menu de vue pour afficher les fichiers sous forme de carte interactive avec des marqueurs pour chaque fichier, et un aperçu qui affiche les propriétés de ce fichier.

![[bases-map-places.png#interface]]

## Installer le module Maps

Les vues carte nécessitent Obsidian 1.10. Le [module Maps](obsidian://show-plugin?id=maps) est un [[Modules complémentaires|module complémentaire]] officiel que vous pouvez télécharger séparément.

1. Suivez les instructions dans [[Modules complémentaires#Installer un module complémentaire]]
2. Téléchargez et activez [Maps](obsidian://show-plugin?id=maps) depuis la liste

## Exemple

Pour commencer, essayez de créer une note appelée **Tour Eiffel** et copiez les propriétés suivantes :

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

Voici ce que signifie le code ci-dessus :

| Propriété     | Valeur                   |                                                                                                                                                                            |
| ------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates` | `48.85837`<br>`2.294481` | Les coordonnées sont stockées sous forme `latitude, longitude`. Vous pouvez obtenir les coordonnées en faisant un clic droit sur un emplacement de la carte et en sélectionnant **Copier les coordonnées**. |
| `icon`        | `landmark`               | Le nom d'une icône de la [bibliothèque Lucide](https://lucide.dev/).                                                                                                       |
| `color`       | `red`                    | Une valeur CSS valide : hex, RGB, couleur nommée, etc.                                                                                                                      |
| `tags`        | `places`                 | Le mot-clé que nous utiliserons pour trouver les marqueurs de carte dans notre base.                                                                                         |
Créez maintenant une vue carte avec un filtre pour le mot-clé `places` et définissez les coordonnées, l'icône et la couleur des marqueurs en utilisant les propriétés listées ci-dessus.

Vous pouvez également ouvrir ces [fichiers d'exemple](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) dans Obsidian pour voir des vues carte fonctionnelles avec des marqueurs, icônes et couleurs déjà configurés.

## Paramètres

Les paramètres de la vue carte peuvent être configurés dans les [[Vues#Paramètres de vue|paramètres de vue]].

- Hauteur intégrée
- Coordonnées du centre
- Contraintes de zoom
- Coordonnées, couleur et icône des marqueurs
- Arrière-plan

### Marqueurs

#### Coordonnées

Pour afficher des épingles sur la carte, allez dans les [[Vues#Paramètres de vue|paramètres de vue]] et sélectionnez une propriété de **coordonnées de marqueur**. La propriété doit contenir des coordonnées de latitude et de longitude. Les formats suivants sont acceptés :

```yaml
# Propriété texte
coordinates: "lat, lng"

# Propriété liste
coordinates:
  - "lat"
  - "lng"
```

Si vous stockez les coordonnées dans des propriétés séparées `latitude` et `longitude`, vous pouvez les combiner avec une propriété de [[Syntaxe des Bases#Formules|formule]] en la définissant comme un tableau de coordonnées avec la formule suivante : `[latitude, longitude]`.

#### Icônes

Ajoutez des icônes aux marqueurs en définissant une propriété d'**icônes de marqueur**. Par exemple, vous pouvez ajouter une propriété appelée `icon` à vos notes et lui donner des valeurs comme `landmark` ou `utensils` depuis la [bibliothèque Lucide](https://lucide.dev/icons/) intégrée à Obsidian.

##### Utiliser une formule pour définir les icônes

Supposons que vous souhaitiez que tous les restaurants aient la même icône sur la carte :

1. Créez une note appelée **Restaurants** et ajoutez une propriété appelée `icon` avec la valeur `utensils`.
2. Donnez aux notes de restaurants une propriété appelée `type` qui pointe vers la note `[[Restaurants]]`.
3. Ajoutez une propriété de formule appelée `Type icon` à votre base avec le code suivant :
	```js
	list(type)[0].asFile().properties.icon
	```
4. Choisissez `Type icon` comme icône de marqueur dans les paramètres de vue.

Voilà ! Désormais, votre carte affichera les icônes du *type* de lieu, et non du lieu lui-même.

#### Couleurs

Définissez la couleur des marqueurs. Accepte les valeurs en RGB `rgb(0,0,0)`, HEX `#000`, ou en variables CSS comme `var(--color-blue)`. Comme dans l'exemple des icônes ci-dessus, vous pouvez utiliser une propriété de formule pour définir les couleurs dynamiquement.

### Arrière-plan

#### Tuiles de carte

Les tuiles de carte sont un moyen standard d'afficher des cartes numériques. Il existe plusieurs services que vous pouvez utiliser pour personnaliser les cartes avec des styles, couleurs et polices uniques. Maps prend en charge les tuiles raster et vectorielles, et accepte la plupart des URL de tuiles, y compris les URL TileJSON.

[OpenFreeMap](https://openfreemap.org/) propose quelques styles que vous pouvez utiliser gratuitement. Essayez l'une des URL suivantes dans le paramètre **Tuiles de carte** :

| Nom      | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Liens utiles

- [Maputnik](https://maputnik.github.io/) pour personnaliser les tuiles de carte.
- [Protomaps](https://protomaps.com/) pour héberger vous-même les tuiles de carte.
- D'autres services hébergés avec des offres gratuites incluent [MapTiler](https://www.maptiler.com/) et [Mapbox](https://www.mapbox.com/).


## Astuces

Vous pouvez créer des liens vers des services de cartographie populaires en utilisant les [[Formules]]. Par exemple, votre épingle peut afficher un lien vers Google Maps avec la formule suivante :

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Dépannage

Si la carte apparaît vide lorsque vous chargez le module Maps pour la première fois, essayez de [[Mettre à jour Obsidian|mettre à jour la version du programme d'installation d'Obsidian]].

Le [module Maps](https://github.com/obsidianmd/obsidian-maps) est open source. Vous pouvez contribuer en soumettant des rapports de bogues, des demandes de fonctionnalités et des pull requests.
