Nous pensons que [[Traduction d'Obsidian/Traduits/3 Proposées/Obsidian#En quoi sommes-nous différents ?|vos données sont toujours vôtres, et toujours sous votre contrôle]]. Vos notes sont sauvegardées en format markdown, un format de fichiers basé sur du texte brut, et devraient alors être lisible dans le futur par n'importe quel ordinateur pouvant traiter du fichier texte. Vous pouvez éditer vos notes librement sur d'autres applications, qu'elles soient ouvertes conjointement avec Obsidian ou pas.

Toutefois, il y a certaines données utiles pour l'application qui ne sont pas sauvegardées en markdown. Obsidian crée un dossier appelé `.obsidian` à la racine de chaque coffre que vous créez. Il contient toute votre configuration, allant de vos [[raccourcis clavier]] à vos [[modules complémentaires]]. Dans la plupart des systèmes, un dossier commençant par un point est invisible, donc vous n'allez probablement jamais le voir, à moins de le chercher activement. Si vous supprimez le dossier `.obsidian`, aucune de vos notes ne sera supprimée, mais vous perdrez la configuration de tous vos paramètres et tous les modules installés disparaîtrons. Il sera automatiquement recréé lorsque vous ouvrirez votre coffre sur Obsidian une nouvelle fois. 

Si vous utilisez `.git`, il est probablement mieux d'ignorer le répertoire `.obsidian`. En effet, le cache se met à jour si fréquemment que vos commits peuvent vite devenir lourds. Nous n'avons toutefois constaté aucun problème en le laissant inclus sur git.

Si vous utilisez un css personnalisé, Obsidian crée un dossier appelé `obsidian.css` à la racine de votre coffre. Pour plus de détails, vous pouvez consulter la page [[CSS personnalisés]]. 

Obsidian sauvegarde aussi quelques informations dans le dossier système. Le fichier en question est propre à chaque système d'expoloitation. 
Sur Mac, c'est  `/Users/yourusername/Library/Application Support/obsidian`. 
Sur Windows, c'est `%APPDATA%\Obsidian\`.
Et sur Linux, c'est `$XDG_CONFIG_HOME/obsidian/` ou `~/.config/obsidian/`. 
Par conséquent, nous recommandons de ne pas créer un coffre dans ces dossiers.

Mis à part cela, vous pouvez créer un coffre n'importe où dans votre système d'exploitation, aux endroits où ce dernier le permet. Les fichiers d'Obsidian peuvent se synchroniser avec Dropbox, iCloud, OneDrive, git, et tous les autres services de synchronisation que nous avons essayé jusqu'à présent.
