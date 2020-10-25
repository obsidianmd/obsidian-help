# Importer des notes

Il y a quelques différences de fonctionnement entre les divers systèmes de gestion personnelle des connaissances (PKM) et les outils de prise de notes, ce qui entraîne quelques difficultés dans la migration entre eux. Pour la plupart d'entre eux, si quoique ce soit que vous utilisez peut être converti au format Markdown, cela fonctionnera assez bien dans Obsidian. Mais certains éléments, comme les balises et les liens, peuvent être plus délicats.

Sur notre forum, vous pouvez trouver les [méthodes de collecte de messages que d'autres personnes ont développé] (https://forum.obsidian.md/t/meta-post-migration-workflows/768). À l'heure actuelle, en font partie :

  * [Migrer d'Apple Notes vers Obsidian] (https://forum.obsidian.md/t/migrate-from-apple-notes-to-obsidian/732)
  * [Migrer de TiddlyWiki 5 vers Obsidian] (https://forum.obsidian.md/t/migrate-from-tiddlywiki-5-to-obsidian/731)
  * [Importer depuis Notion] (https://forum.obsidian.md/t/import-from-notion/636)
  * [Importer depuis Evernote] (https://forum.obsidian.md/t/import-from-evernote/108)

Mais si vous ne voyez pas votre système dans cette liste, consultez les messages du forum, quelqu'un a peut-être résolu votre problème depuis la rédaction du présent document.

Retenez également que les créateurs de nvUltra, un autre programme de prise de notes basé sur le format Markdown, tiennent une liste sur leur site Web des [façons d'exporter vers nvUltra] (https://nvultra.com/help/importing). Dans de nombreux cas, cela sera identique, ou du moins un point de départ utile.

## Outils intégrés

### A partir de Roam Research

Si vous avez des données à migrer, il est facile de les exporter pour les utiliser dans Obsidian.

> 1. Choisissez "Tout exporter" dans le menu :
>! [[Fireworks Complaints NYC June 1-14.png]]

> 2. Cliquez sur le bouton bleu "Tout exporter" :
>! [[Pasted image 1.png]]

> 3. Décompressez "Roam-Export-xxxxxxxxxxxxx.zip" dans un dossier

> 4. Allez dans "Paramètres" - "Dossier" puis cliquez sur "Choisir".
> Choisissez le dossier dans lequel vous venez de décompresser l'archive

> 5. Utilisez notre [[convertisseur de format markdown]] pour convertir le format Markdown de Roam Research au format Obsidian.
> Il peut être utilisé pour transformer `#tag` en ` [[links]] ` pour Obsidian.
> Il peut également convertir `^^highlight^^` en `==highlight==`

### Utilisation de Zettelkasten

Si vous avez utilisé la méthode Zettelkasten pour structurer vos notes, ce qui suit pourrait vous intéresser :

Les liens dans Obsidian requièrent une correspondance complète avec le nom de la note. Cela signifie que `[[202001010000]]` ne sera pas correctement relié à `[[202001010000 Ma note]]`.

Pour résoudre ce problème, vous pouvez utiliser notre [[convertisseur de format Markdown]] afin de convertir vos liens Zettelkasten en `[[202001010000 Ma Note]]` ou `[[202001010000 Ma Note | Ma Note]]` au choix.

Vous pourriez également être intéressé par le plugin [[Zettelkasten prefixer]].