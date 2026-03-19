---
permalink: symlinks
localized: '2026-03-18'

---
Vous pouvez utiliser des [liens symboliques](https://en.wikipedia.org/wiki/Symbolic_link) (symlinks) et des [jonctions](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) dans votre coffre pour stocker des fichiers en dehors du coffre et du [[Comment Obsidian stocke les données#Paramètres globaux|dossier système]].

> [!danger] Utilisez à vos risques et périls
> Nous déconseillons fortement l'utilisation de liens symboliques. En utilisant des liens symboliques et des jonctions dans votre coffre, vous risquez de perdre ou de corrompre vos données, ou de faire planter Obsidian. Assurez-vous d'effectuer des sauvegardes régulières de votre coffre et de vos paramètres.

Voici certaines limitations ou problèmes dont nous avons connaissance et que vous pourriez vouloir garder à l'esprit :

- Les boucles de liens symboliques sont interdites afin d'éviter de faire planter Obsidian en raison d'une boucle infinie.
- Les cibles des liens symboliques doivent être entièrement disjointes de la racine du coffre ou de toute autre cible de lien symbolique. Disjoint signifie qu'un dossier ne contient pas l'autre, et vice versa. Obsidian ignore tout lien symbolique vers un dossier parent du coffre, ou d'un dossier dans le coffre vers un autre dossier dans le même coffre. C'est une mesure de sécurité pour s'assurer que vous ne vous retrouvez pas avec des fichiers dupliqués dans votre coffre, ce qui pourrait rendre les liens ambigus.
- Les liens symboliques peuvent ne pas bien fonctionner avec Obsidian Sync, ou _tout autre type de synchronisation_. Si la cible d'un lien symbolique est elle-même un dossier synchronisé par un autre coffre Obsidian, vous pourriez (potentiellement) vous retrouver avec des conflits de synchronisation ou une perte de données. Certains outils de synchronisation, comme Git, ne suivent pas les liens symboliques, mais synchronisent plutôt le _chemin_ vers lequel le lien symbolique pointe, ce qui peut produire des résultats indésirables si vous partagez votre coffre avec d'autres personnes de cette manière.
- Le gestionnaire de fichiers d'Obsidian ne peut pas déplacer des fichiers au-delà des limites de périphériques. Donc si vous créez un lien symbolique vers un dossier sur un lecteur différent de celui de votre coffre, vous ne pourrez pas glisser des fichiers entre ce dossier et d'autres dossiers en utilisant l'explorateur de fichiers d'Obsidian. (Vous devrez utiliser l'explorateur de votre système d'exploitation pour de tels déplacements, et Obsidian verra le déplacement comme une suppression et la création d'un nouveau fichier. Il ne mettra également _pas_ à jour les liens qui dépendaient du chemin de ce fichier.)
- Les liens symboliques de fichiers (par opposition aux liens symboliques de dossiers) _peuvent_ fonctionner, mais ne sont pas officiellement pris en charge pour le moment. Les modifications effectuées en dehors d'Obsidian ne sont pas surveillées, donc si vous modifiez le fichier directement, Obsidian ne détectera pas le changement, ne mettra pas à jour les index de recherche, etc.
- Créer des liens symboliques pour des éléments dans le dossier `.obsidian/` afin de les partager entre les coffres **a de fortes chances de corrompre vos paramètres**, à moins que vous ne sachiez _vraiment_ ce que vous faites. Si vous décidez de procéder ainsi, ayez au moins des sauvegardes.
