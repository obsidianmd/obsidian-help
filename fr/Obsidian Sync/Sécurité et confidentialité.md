---
permalink: sync/security
description: Découvrez les considérations de sécurité et de confidentialité pour Obsidian Sync.
publish: true
mobile: false
localized: '2026-03-18'

---
## Chiffrement

Pour votre sécurité, [[Introduction à Obsidian Sync|Obsidian Sync]] chiffre votre [[Coffres locaux et distants|coffre distant]] et toutes les communications avec les serveurs d'Obsidian.

Lorsque vous créez un nouveau coffre distant, vous avez deux options :

- **Chiffrement de bout en bout (par défaut)** offre la sécurité la plus forte mais nécessite que vous conserviez votre mot de passe de chiffrement en lieu sûr. Cela garantit que personne — pas même l'équipe Obsidian — ne peut accéder à vos notes.
- **Chiffrement standard** utilise une clé de chiffrement gérée par Obsidian pour protéger vos données en transit et sur notre serveur.

Nous recommandons le chiffrement de bout en bout pour tous les utilisateurs car c'est l'option la plus privée et la plus sécurisée. Cependant, sachez que si vous oubliez ou perdez votre mot de passe de chiffrement, vos données restent chiffrées et inutilisables pour toujours. Nous ne sommes pas en mesure de récupérer votre mot de passe, ni vos données chiffrées.

Votre choix ne concerne que votre coffre distant. Obsidian ne chiffre pas votre coffre local.

### Que signifie le chiffrement de bout en bout ?

Le chiffrement de bout en bout signifie que les données sont chiffrées dès qu'elles quittent votre appareil, et ne peuvent être déchiffrées qu'à l'aide de votre clé de chiffrement une fois de retour sur l'un de vos appareils.

Nous ne pouvons pas lire vos données. Pas plus que d'éventuels espions, tels que votre fournisseur d'accès à Internet.

Dans le cas rare d'une compromission complète du serveur, vos données restent chiffrées — personne ne peut déchiffrer vos fichiers sans connaître votre mot de passe.

### Quels sont les risques liés à l'utilisation du chiffrement standard ?

Le chiffrement standard est fondamentalement moins sécurisé que le chiffrement de bout en bout, mais il peut être une option pratique si vous ne vous attendez pas à ce que les données que vous synchronisez soient totalement privées. Par exemple, si votre coffre synchronisé est [[Introduction à Obsidian Publish|publié]] sur un site web public comme ce site d'aide, alors le chiffrement de bout en bout n'est pas nécessaire.

Le chiffrement standard est la même méthode de chiffrement utilisée par les entreprises de stockage cloud et les plateformes de logiciel en tant que service, telles que Google Docs, Dropbox et iCloud (sans Protection avancée des données). Votre clé de chiffrement est générée par l'application et utilisée pour protéger vos données en transit et sur le serveur. Parce que la clé de chiffrement est stockée sur les serveurs de l'entreprise, elle peut être utilisée pour déchiffrer vos données, par exemple dans le cas où l'entreprise est soumise à un mandat de perquisition, ou dans le cas où vous souhaitez accéder à vos données via un navigateur web.

Le chiffrement de bout en bout garantit qu'Obsidian ne peut jamais accéder à vos données et devrait toujours être utilisé pour synchroniser des données que vous souhaitez garder totalement privées et sécurisées.

### Quel chiffrement utilisez-vous ?

Pour la sécurité des données, nous mettons en œuvre des protocoles de chiffrement conformes aux normes de l'industrie. Plus précisément, nous utilisons [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), la norme de chiffrement la plus robuste, largement employée dans des contextes tels que la banque en ligne. Le processus de chiffrement implique les détails techniques suivants :

- **Fonction de dérivation de clé :** [scrypt](https://en.wikipedia.org/wiki/Scrypt) avec sel
- **Algorithme de chiffrement :** AES-256 utilisant [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Puis-je vérifier que mes données sont chiffrées de bout en bout ?

Oui. Consultez notre guide, [comment vérifier le chiffrement de bout en bout d'Obsidian Sync](https://obsidian.md/fr/blog/verify-obsidian-sync-encryption/). Ce guide fournit des instructions étape par étape pour que vous puissiez vérifier sans avoir à faire confiance le chiffrement de bout en bout de vos données lorsqu'elles sont envoyées et reçues via les serveurs de Sync.

### Obsidian a-t-il fait l'objet d'un audit de sécurité par un tiers ?

Oui. Obsidian a été audité de manière indépendante. Visitez notre [page Sécurité](https://obsidian.md/fr/security) pour consulter les rapports d'audit. Des audits réguliers par des sociétés de sécurité tierces garantissent que le code et les procédures d'Obsidian respectent les normes de sécurité les plus élevées.

### Que se passe-t-il si j'oublie mon mot de passe de chiffrement ?

Si vous perdez ou oubliez votre mot de passe de chiffrement, vous ne pourrez plus connecter de coffres supplémentaires à votre coffre distant. Comme le mot de passe de chiffrement n'est sauvegardé nulle part, il est perdu à jamais.

Vos données, cependant, sont généralement stockées en toute sécurité localement sur chacun de vos appareils.

Pour continuer à utiliser Obsidian Sync, nous vous suggérons d'effectuer une reconfiguration complète afin de pouvoir ajouter de nouveaux appareils à votre système Sync :

1. Faites une sauvegarde complète du coffre sur votre appareil principal, au cas où quelque chose tournerait mal. Cela peut être aussi simple que de copier le dossier du coffre, ou de créer un fichier zip à partir du coffre.
2. Déconnectez le coffre distant sur chacun de vos appareils. Pour cela, allez dans **[[Paramètres]] → Sync → Choisir un coffre distant → Déconnecter**.
3. [[Configurer Obsidian Sync#Créer un nouveau coffre distant|Créez un nouveau coffre distant]] sur votre appareil principal depuis la même page des Paramètres. Optionnellement, vous pouvez supprimer le coffre distant précédent puisque vous n'avez de toute façon plus le mot de passe. (Vous devrez peut-être supprimer le coffre distant précédent si vous avez atteint la [[Questions fréquentes#Combien de coffres distants puis-je avoir ?|limite de coffres]])
4. Attendez que votre appareil principal se synchronise. Observez l'indicateur de synchronisation en bas à droite de l'écran jusqu'à ce qu'il affiche une coche verte.
5. Connectez chacun de vos appareils au même coffre distant nouvellement créé. Lors de la connexion, un avertissement concernant la fusion des coffres s'affichera, c'est normal et vous pouvez continuer. Attendez que chaque appareil soit entièrement synchronisé avant de passer au suivant. Cela réduit les risques de problèmes.
6. Maintenant, tous vos appareils devraient être connectés au nouveau coffre distant.

## Hébergement

### Où hébergez-vous les serveurs pour Obsidian Sync ?

Nos centres de données, alimentés par [DigitalOcean](https://www.digitalocean.com), offrent des options d'hébergement de coffres distants géo-régionaux dans les emplacements suivants :

> [!abstract] Régions de Sync
> **Automatique** : Votre centre de données est choisi en fonction de la localisation de votre IP, au moment de la première configuration.
> 
> **Asie** : Singapour
> **Europe** : Francfort, Allemagne
> **Amérique du Nord** : San Francisco, États-Unis
> **Océanie** : Sydney, Australie
^sync-geo-regions

### Où puis-je trouver mon serveur Sync actuel et où est-il hébergé ?

Pour localiser votre serveur Obsidian Sync, suivez ces étapes :
1. Allez dans **[[Paramètres]]** → **Sync** → **Copier les informations de débogage**.
2. Collez les informations copiées dans une note ou un fichier.
3. Recherchez une ligne similaire à celle-ci : `Host server: wss://sync-xx.obsidian.md`

Cette ligne indique le serveur où votre coffre distant est hébergé. Pour plus de détails sur l'emplacement du serveur et sa disponibilité, visitez notre [page de statut](https://status.obsidian.md/).

## Réseau et accès

### Gérer l'accès à Obsidian Sync sur votre réseau

Pour réguler l'accès à Obsidian Sync sur votre réseau, vous devez gérer les domaines suivants :

`sync-xx.obsidian.md`

Le `xx` dans ce cas représente un nombre allant de `1 à 100`.

> [!tip] Si votre système de pare-feu le permet, nous recommandons d'ajouter `sync-*.obsidian.md` à la liste blanche pour tenir compte de la croissance continue du nombre de sous-domaines.

## Limitations

Obsidian Sync est conçu pour garder vos notes privées et sécurisées. Pour offrir une synchronisation rapide, fiable et un stockage efficace entre les appareils, nous faisons des compromis délibérés dans la façon dont le chiffrement est appliqué.

### Chiffrement déterministe des empreintes de fichiers

Nous chiffrons les empreintes de fichiers de manière déterministe : le même contenu de fichier, avec la même clé de chiffrement et le même sel, produit toujours la même empreinte chiffrée sur le serveur. Cela aide Sync à détecter les doublons et à éviter de re-télécharger ou re-stocker des données identiques, ce qui économise la bande passante et le stockage distant, en particulier dans l'historique des versions ou lorsque de gros fichiers sont répétés.

Cependant, si un attaquant compromet un serveur Sync, et qu'il dispose d'un moyen séparé pour forcer un utilisateur à télécharger des fichiers de son choix, alors l'attaquant pourrait forcer l'utilisateur à télécharger des fichiers spécifiques et déterminer si le fichier correspond à un fichier que l'utilisateur a précédemment téléchargé.

### Pas de liaison cryptographique entre le chemin et le contenu

Certaines métadonnées ne sont pas chiffrées de bout en bout : quel appareil a téléchargé ou supprimé un fichier, quand il a été téléchargé, et la *correspondance* entre les chemins de fichiers chiffrés et le contenu chiffré. Ces données sont lisibles par le serveur pour qu'il puisse acheminer les modifications, déterminer l'historique des versions d'un fichier et maintenir les appareils synchronisés.

Si un serveur Sync était compromis, un attaquant pourrait altérer cette correspondance, faisant en sorte que le contenu d'un fichier chiffré soit livré sous un chemin de fichier différent. Cela ne révèle pas vos données en clair, elles restent chiffrées.
