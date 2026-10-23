---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian vous permet de migrer des notes depuis Tomboy et Gnote en utilisant le [[Importer|plugin Importer]] officiel. Importer lit directement les fichiers `.note` des applications et convertit leur contenu XML en Markdown.

## Localiser vos fichiers de notes

Tomboy et Gnote stockent normalement les notes dans ces dossiers :

- **macOS :** `~/Library/Application Support/Tomboy`
- **Windows :** `%APPDATA%\Tomboy`
- **Linux :** `~/.local/share/tomboy` ou `~/.local/share/gnote`

L'emplacement exact peut différer si vous avez déplacé le dossier de données ou si vous utilisez une version différente de l'application.

## Importer vos notes Tomboy ou Gnote

1. Ouvrez **[[Paramètres]] → Modules complémentaires** et [installez Importer](obsidian://show-plugin?id=obsidian-importer).
2. Activez le module Importer.
3. Ouvrez **Importer** en utilisant la [[Palette de commandes]] ou l'icône du ruban.
4. Sous **Format de fichier**, sélectionnez **Tomboy/Gnote (.note)**.
5. Choisissez des fichiers `.note` individuels ou le dossier qui les contient.
6. Vérifiez les options d'importation, le modèle généré et les exemples d'aperçu.
7. Sélectionnez **Importer** et attendez la fin de l'importation.

## Modèles

Utilisez les [[Importer des modèles|modèles d'Importer]] pour configurer entièrement la façon dont vos données sont importées.

![[Importer des modèles#Variables]]
