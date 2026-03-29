---
permalink: publish/permalinks
---
Pots canviar el nom de l'URL de les teves notes, fent servir _enllaços permanents_.

Per exemple, pots convertir això:

```
https://publish.obsidian.md/username/Company/About+us
```

En això:

```
https://publish.obsidian.md/username/about
```

Per crear un enllaç permanent per a una nota, afegeix la propietat `permalink` a les teves [[Propietats]].

```yaml
---
permalink: about
---
```

Si algú visita una nota fent servir l'URL original, serà redirigit automàticament a l'enllaç permanent.

## Redirigir notes antigues

Canviar el nom i eliminar notes és una part natural del manteniment d'una cambra forta viva. Tot i que Obsidian actualitza automàticament els enllaços quan mous una nota dins de la teva cambra forta local, altres llocs web poden seguir enllaçant a les teves notes antigues al teu lloc [[Introducció a Obsidian Publish|Obsidian Publish]] publicat. Pots redirigir els lectors d'una nota a una altra.

Imagina que vols moure una nota d'una carpeta a una altra:

- **Guides**
  - ~~Making friends.md~~ (eliminada)
- **Tutorials**
  - *How to make friends.md* (afegida)

Després de moure la nota, Obsidian actualitza automàticament tots els enllaços dins de la cambra forta. No obstant això, si publiques el canvi al teu lloc Publish, qualsevol enllaç a `/Guides/Making+friends` resultarà en un error 404.

Per redirigir els lectors de `/Guides/Making+friends` a `/Tutorials/How+to+make+friends`, cal que afegeixis un [[Àlies|àlies]] a `How to make friends.md`, la nota a la qual vols redirigir.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Important
> Assegura't d'incloure la ruta completa a la nota antiga a l'àlies. Tot i que fer servir només el nom de la nota com a àlies funciona a la teva cambra forta local, Publish necessita la ruta completa a la nota per poder redirigir-hi.

Pots redirigir múltiples notes afegint un àlies per a cadascuna.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```
