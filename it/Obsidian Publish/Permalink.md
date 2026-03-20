---
permalink: publish/permalinks
aliases:
  - Permalinks
---
Puoi rinominare l'URL delle tue note, utilizzando i _permalink_.

Ad esempio, puoi trasformare questo:

```
https://publish.obsidian.md/username/Company/About+us
```

In questo:

```
https://publish.obsidian.md/username/about
```

Per creare un permalink per una nota, aggiungi la proprietà `permalink` alle tue [[Proprietà]].

```yaml
---
permalink: about
---
```

Se qualcuno visita una nota utilizzando l'URL originale, verrà automaticamente reindirizzato al permalink.

## Reindirizzare vecchie note

Rinominare e rimuovere note è una parte naturale della manutenzione di una cassaforte in continua evoluzione. Sebbene Obsidian aggiorni automaticamente i collegamenti quando sposti una nota all'interno della cassaforte locale, altri siti web potrebbero ancora collegare alle vecchie note sul tuo sito [[Introduzione a Obsidian Publish|Obsidian Publish]] pubblicato. Puoi reindirizzare i lettori da una nota a un'altra.

Immagina di voler spostare una nota da una cartella a un'altra:

- **Guide**
  - ~~Fare amicizia.md~~ (rimosso)
- **Tutorial**
  - *Come fare amicizia.md* (aggiunto)

Dopo aver spostato la nota, Obsidian aggiorna automaticamente tutti i collegamenti all'interno della cassaforte. Tuttavia, se pubblichi la modifica sul tuo sito Publish, qualsiasi collegamento a `/Guides/Making+friends` risulterà in un errore 404.

Per reindirizzare i lettori da `/Guides/Making+friends` a `/Tutorials/How+to+make+friends`, devi aggiungere un [[Alias|alias]] in `How to make friends.md`, la nota verso cui vuoi reindirizzare.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Importante
> Assicurati di includere il percorso completo della vecchia nota nell'alias. Sebbene utilizzare solo il nome della nota come alias funzioni nella cassaforte locale, Publish necessita del percorso completo della nota per poter effettuare il reindirizzamento.

Puoi reindirizzare più note aggiungendo un alias per ciascuna.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```
