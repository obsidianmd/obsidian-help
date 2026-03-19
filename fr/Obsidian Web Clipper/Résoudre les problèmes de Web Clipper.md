---
permalink: web-clipper/troubleshoot
localized: '2026-03-18'

---
Si vous rencontrez des problèmes avec [[Introduction à Obsidian Web Clipper|Web Clipper]], vous pouvez obtenir de l'aide via le [canal Discord officiel](https://discord.com/channels/686053708261228577/1285652864089198672). Vous pouvez également signaler des bugs sur le [dépôt GitHub](https://github.com/obsidianmd/obsidian-clipper).

## Général

### Du contenu est manquant

Par défaut, Web Clipper essaie de capturer intelligemment le contenu de la page. Cependant, il peut ne pas y parvenir sur tous les sites web.

Web Clipper utilise [Defuddle](https://github.com/kepano/defuddle) pour capturer uniquement le contenu principal de la page. Cela exclut l'en-tête, le pied de page et d'autres éléments, mais il peut parfois être trop conservateur et supprimer du contenu que vous souhaitez conserver. Vous pouvez [signaler des bugs](https://github.com/kepano/defuddle) à Defuddle.

Pour contourner Defuddle dans Web Clipper, utilisez les méthodes suivantes :

- Sélectionnez du texte, ou utilisez `Cmd/Ctrl+A` pour sélectionner tout le texte.
- [[Surligner des pages web|Surlignez du contenu]] pour choisir exactement ce que vous souhaitez capturer.
- Utilisez un [[Obsidian Web Clipper/Modèles|modèle personnalisé]] pour le site.

### Aucun contenu n'apparaît dans Obsidian

Si vous ne voyez aucun contenu dans Obsidian lorsque vous cliquez sur **Ajouter à Obsidian** :

- Vérifiez les erreurs dans la [[Aide et support#Capturer les journaux de la console|console développeur]] d'Obsidian.
- Vérifiez que le nom de votre coffre dans les paramètres de Web Clipper correspond exactement au *nom du coffre* dans Obsidian, *et non au chemin du coffre*.
- Vérifiez que le nom du dossier est correctement formaté.

## Linux

#### Obsidian ne s'ouvre pas

- Assurez-vous que le protocole [[Obsidian URI]] [[Obsidian URI#Enregistrer le protocole URI Obsidian|est enregistré]].
- Si vous utilisez Firefox, vous devrez peut-être [l'enregistrer dans les paramètres du navigateur](https://kb.mozillazine.org/Register_protocol).

#### Obsidian s'ouvre mais seul le nom du fichier est enregistré

Il est probable qu'Obsidian ne puisse pas accéder à votre presse-papiers. L'accès au presse-papiers est nécessaire pour transmettre les données de votre navigateur à Obsidian. Votre configuration peut affecter la façon dont les applications sont isolées, ainsi que les permissions du presse-papiers.

Si vous utilisez Wayland, assurez-vous qu'Obsidian a les permissions de lire le presse-papiers lorsque l'application n'est pas au premier plan. Cette préférence peut se trouver dans votre gestionnaire de fenêtres en mosaïque, par exemple Hyprland ou Sway.

Si vous utilisez Hyprland :

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Si vous utilisez Sway :

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Si vous utilisez Flatpak, essayez une [version d'Obsidian officiellement supportée](https://obsidian.md/fr/download).
- Si vous utilisez KDE, allez dans **Paramètres système** → **Gestion des fenêtres** → **Règles de fenêtres** et autorisez Obsidian à prendre le focus, [[web-clipper-kde.png|voir la capture d'écran]].
- En dernier recours, essayez de passer en **Mode legacy** dans **Paramètres de Web Clipper** → **Général**. Cela contournera le presse-papiers et enregistrera le contenu directement via URI. Notez que cela limitera le nombre de caractères pouvant être capturés selon votre navigateur et votre distribution Linux.

## iOS et iPadOS

Pour activer l'extension Web Clipper pour Safari :

1. Allez dans Safari, appuyez sur le bouton le plus à gauche dans la barre d'URL du navigateur, qui ressemble à un rectangle avec des lignes en dessous.
2. Appuyez sur **Gérer les extensions**.
3. Activez **Obsidian Web Clipper** dans la liste des extensions.
4. Quittez le menu.
5. Pour utiliser l'extension, **appuyez sur l'icône de pièce de puzzle** dans la barre d'URL.

Pour autoriser Web Clipper à fonctionner sur tous les sites web :

1. Allez dans **[[Paramètres]]** iOS → **Apps** → **Safari** → **Extensions**.
2. Sous **Permissions**, autorisez-le à fonctionner sur tous les sites web.

Pour autoriser Obsidian à toujours recevoir le contenu de Web Clipper :

1. Allez dans **[[Paramètres]]** iOS → **Apps** → **Obsidian**.
2. Définissez **Coller depuis d'autres apps** sur **Autoriser**.
