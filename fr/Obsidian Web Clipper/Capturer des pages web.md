---
permalink: web-clipper/capture
aliases:
  - Modules/Web Clipper/Enregistrer des pages internet
  - Plugins/Web Clipper/Enregistrer des pages internet
localized: '2026-03-18'
---
Une fois l'extension de navigateur [[Introduction à Obsidian Web Clipper|Web Clipper]] installée, vous pouvez y accéder de plusieurs façons, selon votre navigateur :

1. L'icône Obsidian dans la barre d'outils de votre navigateur.
2. Les raccourcis clavier, pour activer l'extension depuis votre clavier.
3. Le menu contextuel, en faisant un clic droit sur la page web que vous consultez.

Pour enregistrer une page dans Obsidian, cliquez sur le bouton **Add to Obsidian**.

## Capturer une page

Lorsque vous ouvrez l'extension, Web Clipper extrait les données de la page web actuelle en suivant les paramètres de votre [[Obsidian Web Clipper/Modèles|modèle]]. Vous pouvez créer vos propres modèles et personnaliser le résultat en utilisant des [[variables]] et des [[Filtres|filtres]].

Par défaut, Web Clipper tente d'extraire intelligemment uniquement le contenu principal de l'article, en excluant les autres éléments de la page. Cependant, vous pouvez modifier ce comportement de la manière suivante :

- Si un modèle personnalisé est présent, il utilise votre modèle.
- Si une sélection est présente, il utilise la sélection. Vous pouvez utiliser `Ctrl/Cmd+A` pour sélectionner la page entière.
- Si des [[Surligneur|surlignages]] sont présents, il utilise les surlignages.

## Télécharger les images

Les images ne sont pas automatiquement téléchargées lorsque vous utilisez Web Clipper. À la place, les images pointent vers leur URL web. Cela économise de l'espace dans votre coffre mais signifie que les images ne seront pas accessibles hors ligne, ou si l'URL cesse de fonctionner.

Vous pouvez télécharger les images de n'importe quel fichier dans Obsidian en utilisant la [[Palette de commandes|commande]] nommée **Download attachments for current file**. Cette commande peut également être associée à un raccourci clavier dans Obsidian.

## Raccourcis clavier

Web Clipper inclut des raccourcis clavier que vous pouvez utiliser pour accélérer votre flux de travail. Pour modifier les raccourcis, allez dans **Paramètres de Web Clipper** → **Général** et suivez les instructions pour votre navigateur. Les raccourcis peuvent être modifiés pour tous les navigateurs sauf Safari qui ne prend pas en charge la modification des raccourcis clavier.

| Action                          | macOS          | Windows/Linux   |
| ------------------------------- | -------------- | --------------- |
| Ouvrir le clipper               | `Cmd+Shift+O`  | `Ctrl+Shift+O`  |
| Capture rapide                  | `Opt+Shift+O`  | `Alt+Shift+O`   |
| Activer/désactiver le surlignage | `Opt+Shift+H`  | `Alt+Shift+H`   |
| Activer/désactiver le lecteur   | `Opt+Shift+R`  | `Alt+Shift+R`   |

## Fonctionnalités de l'interface

L'interface de Web Clipper est divisée en quatre sections :

1. **En-tête** où vous pouvez changer de modèle, activer le [[Surligneur|surlignage]], le [[Lecteur|mode lecture]], et accéder aux paramètres.
2. **Propriétés** affiche les [[Propriétés|métadonnées]] extraites de la page qui seront enregistrées comme [[Propriétés]] dans Obsidian.
3. **Contenu de la note** qui sera enregistré dans Obsidian.
4. **Pied de page** permet de sélectionner le coffre et le dossier, et d'ajouter à Obsidian.

Les fonctionnalités de l'en-tête incluent :

- ![[lucide-chevrons-up-down.svg#icon]] Le sélecteur **Modèle** pour utiliser les [[Obsidian Web Clipper/Modèles|modèles]] enregistrés ajoutés dans les paramètres de l'extension.
- ![[lucide-more-horizontal.svg#icon]] Le bouton **Plus** pour afficher les variables de page utilisables dans les modèles.
- ![[lucide-highlighter.svg#icon]] Le bouton **Surligneur** pour activer le [[Surligneur|surlignage]].
- ![[lucide-book-icon.svg#icon]] Le bouton **Lecteur** pour activer le [[Lecteur|mode lecture]].
- ![[lucide-picture-in-picture-2.svg#icon]] Le bouton **Intégrer** pour déplacer Web Clipper de la fenêtre popup vers la page.
- ![[lucide-settings.svg#icon]] Le bouton **Paramètres** pour ouvrir les paramètres de l'extension.

Les fonctionnalités du pied de page incluent :

- Le bouton **Add to Obsidian** pour enregistrer les données dans Obsidian.
- Le menu déroulant **Coffre** pour basculer entre les coffres enregistrés ajoutés dans les paramètres de Web Clipper.
- Le champ **Dossier** pour définir dans quel dossier enregistrer.
- L'**Interpréteur** pour exécuter des [[Interpréteur|requêtes en langage naturel]] sur la page.
