---
permalink: callouts
publish: true
mobile: true
description: Aquesta pàgina detalla com utilitzar les llegendes per incloure contingut addicional sense interrompre el flux de les vostres notes.
---
Utilitza els blocs destacats per incloure contingut addicional sense interrompre el flux de les teves notes.

Per crear un bloc destacat, afegeix `[!info]` a la primera línia d'una cita en bloc, on `info` és l'_identificador de tipus_. L'identificador de tipus determina l'aparença del bloc destacat. Per veure tots els tipus disponibles, consulta [[#Tipus compatibles]]. Els blocs destacats també són compatibles de manera nativa a [[Introducció a Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Aquí tens un títol de bloc destacat
> Aquí tens un bloc destacat.
> Admet **Markdown**, [[Enllaços interns|enllaços wiki]] i [[Incrustar fitxers|incrustacions]]!
> ![[Engelbart.jpg]]
```

> [!info] Aquí tens un títol de bloc destacat
> Aquí tens un bloc destacat.
> Admet **Markdown**, [[Enllaços interns|enllaços wiki]] i [[Incrustar fitxers|incrustacions]]!
> ![[Engelbart.jpg]]

Pots inserir un bloc destacat `[!note]` per defecte utilitzant l'[[Paleta d'ordres|ordre]] `Insereix una nota`. El cursor es col·loca automàticament al camp del nom del bloc destacat, permetent-te eliminar el nom per defecte i escriure'n un de nou abans d'editar el contingut.

Per embolicar contingut existent en un bloc destacat, selecciona el text (incloent llistes, blocs de codi, etc.) i executa l'ordre `Insereix una nota`. El contingut seleccionat s'inclourà automàticament dins el bloc destacat.

A la [[Vistes i mode d'edició#Previsualització en viu|previsualització en viu]], també pots fer clic dret sobre el nom del bloc destacat per canviar el tipus de bloc destacat.


### Canvia el títol

Per defecte, el títol del bloc destacat és el seu identificador de tipus en majúscules de títol. Pots canviar-lo afegint text després de l'identificador de tipus:

```markdown
> [!tip] Els blocs destacats poden tenir títols personalitzats
> Com aquest.
```

> [!tip] Els blocs destacats poden tenir títols personalitzats
> Com aquest.

Fins i tot pots ometre el cos per crear blocs destacats només amb títol:

```markdown
> [!tip] Bloc destacat només amb títol
```

> [!tip] Bloc destacat només amb títol

### Blocs destacats plegables

Pots fer un bloc destacat plegable afegint un signe de suma (`+`) o un signe de resta (`-`) directament després de l'identificador de tipus.

Un signe de suma desplega el bloc destacat per defecte, i un signe de resta el plega.

```markdown
> [!faq]- Els blocs destacats són plegables?
> Sí! En un bloc destacat plegable, els continguts queden amagats quan el bloc està plegat.
```

> [!faq]- Els blocs destacats són plegables?
> Sí! En un bloc destacat plegable, els continguts queden amagats quan està plegat.

### Blocs destacats imbricats

Pots imbricar blocs destacats en múltiples nivells.

```markdown
> [!question] Es poden imbricar els blocs destacats?
> > [!todo] Sí!, es pot.
> > > [!example]  Fins i tot pots utilitzar múltiples capes d'imbricació.
```

> [!question] Es poden imbricar els blocs destacats?
> > [!todo] Sí!, es pot.
> > > [!example]  Fins i tot pots utilitzar múltiples capes d'imbricació.

### Personalitza els blocs destacats

Els [[Pedaços de CSS]] i els [[Connectors de la comunitat]] poden definir blocs destacats personalitzats, o fins i tot sobreescriure la configuració per defecte.

Per definir un bloc destacat personalitzat, crea el següent bloc CSS:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

El valor de l'atribut `data-callout` és l'identificador de tipus que vols utilitzar, per exemple `[!custom-question-type]`.

- `--callout-color` defineix el color de fons utilitzant números (0–255) per al vermell, verd i blau.
- `--callout-icon` pot ser un ID d'icona de [lucide.dev](https://lucide.dev), o un element SVG.

> [!warning] Nota sobre les versions d'icones lucide
> Obsidian actualitza les icones Lucide periòdicament. La versió actual inclosa es mostra a continuació; utilitza aquestes o icones anteriors en blocs destacats personalitzats.
> ![[Crèdits#^lucide]]

> [!tip] Icones SVG
> En lloc d'utilitzar una icona Lucide, també pots utilitzar un element SVG com a icona del bloc destacat.
>
> ```css
> --callout-icon: '<svg>...svg personalitzat...</svg>';
> ```

### Tipus compatibles

Pots utilitzar diversos tipus de blocs destacats i àlies. Cada tipus ve amb un color de fons i una icona diferents.

Per utilitzar aquests estils per defecte, substitueix `info` als exemples per qualsevol d'aquests tipus, com ara `[!tip]` o `[!warning]`. Els tipus de blocs destacats també es poden canviar fent clic dret sobre un bloc destacat en mode de previsualització en viu.

Tret que [[#Personalitza els blocs destacats|personalitzis els blocs destacats]], qualsevol tipus no compatible s'establirà per defecte al tipus `note`. L'identificador de tipus no distingeix entre majúscules i minúscules.

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]-
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

Àlies: `summary`, `tldr`

---

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

---

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

Àlies: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Àlies: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Àlies: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Àlies: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Àlies: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Àlies: `error`

---

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

---

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

Àlies: `cite`
