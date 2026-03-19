---
permalink: android
localized: '2026-03-18'

---
L'application mobile Obsidian pour Android apporte de puissantes capacités de prise de notes à votre appareil Android. Vous pouvez la télécharger depuis [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) ou sous forme de [fichier APK](https://obsidian.md/fr/download).
Elle prend en charge les versions Android 5.1 et supérieures.

Cette page couvre les fonctionnalités spécifiques à Android, notamment les widgets, l'intégration aux Réglages rapides et les raccourcis.

## Synchronisation

Pour synchroniser vos notes avec Obsidian sur Android, consultez [[Synchroniser vos notes entre appareils]].

## Emplacement du coffre

Lorsque vous lancez Obsidian sur Android, il vous sera demandé de choisir où vos données de coffre doivent être stockées. Vous pouvez choisir le **stockage de l'appareil** (recommandé) ou le **stockage de l'application**.

### Stockage de l'appareil

Avec l'option **stockage de l'appareil**, vos données sont stockées dans un emplacement partagé sur votre appareil. Cela permet à votre coffre Obsidian d'être accessible par d'autres applications et services, comme des outils de [[Synchroniser vos notes entre appareils|synchronisation]] tiers.

C'est l'option recommandée car elle offre une meilleure compatibilité avec les outils de synchronisation et garantit la persistance de vos données même si vous désinstallez l'application. Cependant, cette option nécessite des permissions supplémentaires pour accéder aux fichiers de votre appareil.

En raison des limitations d'Android, Obsidian demandera l'accès « Tous les fichiers » pour fonctionner de manière fiable. Google recommande cela pour les applications comme Obsidian qui sont considérées comme des « applications de gestion de documents ». [En savoir plus](https://developer.android.com/training/data-storage/manage-all-files).

L'application n'utilise cette permission que pour vous aider à accéder à vos données sur votre appareil. Vos données ne nous sont jamais accessibles. Pour en savoir plus sur la façon dont nous protégeons vos données et assurons votre confidentialité, visitez notre [page Sécurité](https://obsidian.md/fr/security).

### Stockage de l'application

Avec l'option **stockage de l'application**, vos données sont stockées dans le stockage privé de l'application Obsidian. Cela isole vos données des autres applications pour une confidentialité accrue.

C'est une bonne option si vous n'utilisez aucun outil de synchronisation externe et préférez un cloisonnement plus strict au niveau de l'application pour vos notes.

Avec cette option, vous pouvez utiliser [[Introduction à Obsidian Sync|Obsidian Sync]] et des modules de synchronisation tiers disponibles via les [[Modules complémentaires]], mais vous ne pouvez pas utiliser des outils comme Syncthing qui reposent sur un stockage partagé.

> [!warning] La désinstallation d'Obsidian supprimera vos notes locales si vous utilisez le stockage de l'application
> Si vous utilisez l'option **Stockage de l'application**, les données locales de votre coffre seront supprimées si vous désinstallez l'application. Les données de votre coffre Obsidian sur d'autres appareils ne seront pas supprimées.

## Widgets

Obsidian pour Android propose plusieurs options de widgets pour accéder rapidement à vos coffres et notes depuis votre écran d'accueil. Les widgets disponibles incluent :

- **Ouvrir une note** — Ouvrir une note spécifique
- **Nouvelle note** — Créer une nouvelle note
- **Rechercher** — Lancer une recherche
- **Note quotidienne** — Ouvrir votre note quotidienne
- **Ouvrir Obsidian** — Lancer l'application

> [!note] Note
> Ces widgets sont statiques et n'affichent aucun aperçu de la note ou du coffre sélectionné.

Pour ajouter des widgets à votre écran d'accueil :
1. Appuyez longuement n'importe où sur votre écran d'accueil
2. Sélectionnez « Widgets »
3. Trouvez Obsidian, puis sélectionnez le widget que vous souhaitez utiliser.

> [!note] Note
> Les widgets Obsidian peuvent être redimensionnés. Pour redimensionner un widget, appuyez longuement dessus, puis faites glisser les poignées de redimensionnement.

Vous pouvez ajouter plusieurs widgets du même type pour ouvrir différents fichiers ou lancer différentes recherches.

Pour configurer un widget, appuyez longuement dessus sur votre écran d'accueil, puis trouvez l'option « Modifier » ou « Configurer ». Cela vous permettra de spécifier les paramètres requis pour que l'action au toucher du widget fonctionne, comme le fichier ou le chemin, la requête de recherche et le nom du coffre.

Consultez cet [article d'assistance Google](https://support.google.com/android/answer/9450271?hl=en) pour plus d'informations sur les widgets Android.

## Tuiles de Réglages rapides

Nécessite Android 7.0 ou supérieur.

Ajoutez une tuile de Réglages rapides Obsidian pour un accès rapide à l'application depuis votre panneau de notifications. Fonctionne sur votre écran d'accueil et votre écran de verrouillage.

> [!note] Note
> Contrairement aux widgets d'application, vous ne pouvez ajouter qu'une seule tuile de Réglages rapides du même type.

Pour ajouter une tuile de réglages rapides à votre panneau de notifications :

1. Accédez à votre panneau de notifications, généralement en faisant glisser vers le bas depuis votre barre d'état. Note : vous devrez peut-être faire glisser une fois de plus pour voir plus d'options.
2. Dans les tuiles de Réglages rapides, sélectionnez « Modifier » — c'est généralement la même section où se trouvent les bascules comme Wi-Fi, Bluetooth et verrouillage de l'orientation.
3. Trouvez et sélectionnez une tuile de Réglages rapides Obsidian, puis réorganisez-la à votre convenance.
4. Pour configurer une tuile de Réglages rapides, appuyez longuement dessus pour afficher l'écran de configuration.

Consultez cet [article d'assistance Google](https://support.google.com/android/answer/9083864?hl=en) pour plus d'informations sur les Réglages rapides Android.

## Raccourcis

Nécessite Android 7.1 ou supérieur.

Obsidian fournit des raccourcis d'application accessibles de plusieurs manières :

- Appui long sur l'icône de l'application Obsidian
- Glisser l'icône du raccourci vers votre écran d'accueil
- Accès via la barre de recherche de votre lanceur (disponible chez la plupart des fabricants d'appareils)

Raccourcis disponibles :

- **Ouvrir une note** — Ouvrir une note spécifique dans votre coffre
- **Note quotidienne** — Accéder directement à la note quotidienne du jour

> [!note] Note
> Les raccourcis dans Obsidian 1.11 ne sont pas configurables et seront remaniés dans les versions ultérieures pour offrir des options plus dynamiques adaptées à vos notes spécifiques.
