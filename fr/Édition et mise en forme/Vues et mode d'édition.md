---
permalink: edit-and-read
aliases:
  - How to/Modes édition et aperçu
localized: '2026-03-18'
---
Obsidian vous permet de contrôler la manière dont vous lisez et modifiez vos notes écrites en Markdown en utilisant des _vues_ et des _modes_.

- Les **Vues** basculent entre la lecture et l'édition de vos notes.
- Les **Modes** contrôlent l'apparence du Markdown pendant l'édition.

> [!note] Note
> Par défaut, Obsidian ouvre les nouveaux onglets en mode d'édition. Vous pouvez modifier ce comportement sous **[[Paramètres]] → Éditeur → Vue par défaut pour les nouveaux onglets**.

## Mode lecture

Le *mode lecture* affiche votre note sans la syntaxe Markdown, offrant un format propre et lisible pour une relecture concentrée.

Pour basculer en *mode lecture* :

- Cliquez sur le sélecteur de vue ( ![[lucide-book-icon.svg#icon]] ) dans le coin supérieur droit de l'éditeur.
- Ou cliquez sur l'icône interactive de statut ( ![[lucide-edit-3.svg#icon]] ou ![[lucide-code-xml.svg#icon]] ) dans la barre d'état et sélectionnez **Mode lecture**.
- Ou appuyez sur `Ctrl+E` (`Cmd+E` sur macOS).

> [!note] Note
> Activez **[[Paramètres]] → Apparence → Afficher la barre de titre des onglets** pour voir l'icône du sélecteur de vue.
> 
> Si cette option est désactivée, activez **[[Paramètres]] → Éditeur → Afficher le mode d'édition dans la barre d'état** pour basculer entre les vues depuis la barre d'état.

> [!tip] Affichage côte à côte
> Pour ouvrir une note simultanément en *mode d'édition* et en *mode lecture*, maintenez `Ctrl` (ou `Cmd` sur macOS) et cliquez sur le sélecteur de vue.

## Mode d'édition

Le *mode d'édition* vous permet d'apporter des modifications à votre note.

En *mode d'édition*, le *mode d'édition* définit la manière dont le Markdown est affiché. Vous pouvez choisir l'un des deux *modes d'édition* : *Aperçu en direct* ou *Mode source*.

### Aperçu en direct

L'*aperçu en direct* affiche le texte formaté en ligne tout en masquant la plupart de la syntaxe Markdown. Lorsque votre curseur entre dans du contenu formaté, la syntaxe sous-jacente devient visible pour l'édition.

Pour basculer en *aperçu en direct* :

- Cliquez sur le sélecteur de vue ( ![[lucide-edit-3.svg#icon]] ) dans le coin supérieur droit de l'éditeur.
- Ou cliquez sur l'icône interactive de statut ( ![[lucide-book-icon.svg#icon]] ou ![[lucide-code-xml.svg#icon]] ) dans la barre d'état et sélectionnez **Aperçu en direct**.
- Ou appuyez sur `Ctrl+E` (`Cmd+E` sur macOS).
- Ou utilisez la [[Palette de commandes|commande]] **Basculer le mode lecture**.

> [!note] Note
> Par défaut, le mode d'édition est réglé sur *Aperçu en direct*. Vous pouvez modifier ce comportement sous **[[Paramètres]] → Éditeur → Mode d'édition par défaut**.

> [!tip] Dans de nombreux cas, l'aperçu en direct peut éliminer le besoin de basculer en [[#Mode lecture]].

### Mode source

Le *mode source* affiche toute la syntaxe Markdown exactement telle qu'elle est écrite. Utilisez-le si vous préférez le texte brut ou si vous avez besoin d'un contrôle précis de la mise en forme.

Pour basculer en *mode source* :
- Cliquez sur l'icône interactive de statut ( ![[lucide-book-icon.svg#icon]] ou ![[lucide-edit-3.svg#icon]] ) dans la barre d'état et sélectionnez **Mode source**.

> [!note] Note
> Par défaut, le mode d'édition est réglé sur *Aperçu en direct*. Modifiez-le en *Mode source* sous **[[Paramètres]] → Éditeur → Mode d'édition par défaut**.
> 
> Pour basculer en *mode source*, vous pouvez désormais également :
> 
> - Cliquer sur le sélecteur de vue ( ![[lucide-edit-3.svg#icon]] ) dans le coin supérieur droit de votre note.
> - Ou appuyer sur `Ctrl+E` (`Cmd+E` sur macOS).
> - Ou utiliser la [[Palette de commandes|commande]] **Basculer le mode lecture**.

> [!tip] Basculer le *mode d'édition*
> Pour basculer rapidement entre l'*aperçu en direct* et le *mode source*, vous pouvez définir un [[Raccourcis clavier|raccourci clavier]] pour la [[Palette de commandes|commande]] **Basculer entre aperçu en direct et mode source**.
