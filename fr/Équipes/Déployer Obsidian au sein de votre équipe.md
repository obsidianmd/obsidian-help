---
permalink: teams/deploy
cssclasses:
  - soft-embed
localized: '2026-03-18'

---
Obsidian fonctionne comme une application locale sur chacun des appareils de vos membres d'équipe. Il est conçu pour fonctionner en ligne comme hors ligne, de manière sécurisée et confidentielle, et vous donner un contrôle total sur les données de votre équipe. Obsidian n'est pas disponible en tant qu'application web, vous devrez donc déployer l'application auprès de vos membres d'équipe.

## Installer et mettre à jour Obsidian

Votre équipe peut télécharger Obsidian depuis notre [page de téléchargement](https://obsidian.md/download). Les versions sont également disponibles sur notre [page de versions GitHub](https://github.com/obsidianmd/obsidian-releases/releases) qui inclut des liens vers [le journal des modifications](https://obsidian.md/changelog/).

> [!tip] Pour les utilisateurs Windows qui ont besoin d'un programme d'installation système, le `.exe` universel inclut l'option d'installer Obsidian pour tous les utilisateurs.

Si les mises à jour automatiques sont activées dans l'application, les futures versions seront installées automatiquement lorsque les utilisateurs redémarrent Obsidian. De plus, nous recommandons d'effectuer périodiquement des [[Mettre à jour Obsidian#Mises à jour du programme d'installation|mises à jour du programme d'installation]] pour recevoir les dernières mises à jour du framework Electron, y compris les correctifs de sécurité.

Si vous cherchez comment limiter l'accès réseau à Obsidian pendant ce processus, consultez [[Considérations de sécurité pour les équipes#Réseau et accès|réseau et accès]].

## Personnaliser Obsidian

Obsidian est facile à modifier pour répondre aux besoins de votre équipe. Avec une API étendue et un large écosystème d'utilisateurs, Obsidian offre l'accès à de nombreux modules, thèmes et outils complémentaires.

Pour les questions liées à la sécurité concernant ces sujets, veuillez consulter [[Considérations de sécurité pour les équipes]].

### Dossiers de configuration

Le [[Dossier de configuration]] est l'endroit où un [[Glossaire#Coffre|coffre]] Obsidian stocke ses paramètres d'application. Par défaut, ce dossier est nommé `.obsidian`, mais vous avez la possibilité de [[Dossier de configuration#Modifier votre dossier de configuration|modifier le nom du dossier de configuration]] selon vos préférences.

Nous recommandons de créer un modèle standardisé du dossier de configuration à déployer sur les appareils de votre équipe.

### Modules

Les [[Modules principaux]] sont des fonctionnalités optionnelles créées par l'équipe Obsidian. Ces fonctionnalités sont intégrées dans le code de l'application principale et peuvent être activées ou désactivées.

Les [[Modules complémentaires]] sont des fonctionnalités tierces ajoutées à l'application Obsidian, et peuvent être installés via le répertoire communautaire. Les modules tiers exploitent l'[API Obsidian](https://github.com/obsidianmd/obsidian-api). Les modules sont situés dans le dossier `.obsidian/plugins` au sein d'un coffre, et peuvent être installés manuellement à cet emplacement.

### Thèmes et extraits

Les [[Thèmes]] modifient visuellement l'interface d'Obsidian. Comme les modules, les thèmes peuvent être téléchargés depuis notre répertoire communautaire. Les thèmes sont situés dans le dossier `.obsidian/themes` au sein d'un coffre.

Les [[Extraits CSS|Extraits]] sont de petits fichiers `.css` qui modifient visuellement des aspects de l'interface d'Obsidian. Dans certains cas, ils peuvent également ajouter des améliorations fonctionnelles. Les extraits sont situés dans le dossier `.obsidian/snippets` au sein d'un coffre.

## Questions fréquentes

Pour les questions sur la gestion des comptes et la sécurité, veuillez consulter [[Considérations de sécurité pour les équipes#Sécurité des comptes|sécurité des comptes]].

### Déploiement

**Puis-je déployer des licences sur plusieurs installations ?**
Actuellement, nous ne prenons pas en charge le déploiement de licences via un script de déploiement, comme dans un fichier `.json`. Si cette fonctionnalité vous intéresse pour votre équipe, veuillez soumettre une [demande de fonctionnalité](https://forum.obsidian.md/c/feature-requests/8).

**Obsidian peut-il verrouiller certaines fonctionnalités ou configurations via un paramètre ou un indicateur d'application ?**
Actuellement, vous pouvez le faire en bloquant l'accès en écriture au dossier `.obsidian`, ou à des fichiers et dossiers spécifiques en son sein, décrits ci-dessus. Si vous souhaitez davantage de contrôles d'accès pour votre équipe, veuillez soumettre une [demande de fonctionnalité](https://forum.obsidian.md/c/feature-requests/8).
