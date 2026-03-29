---
permalink: publish/collaborate
publish: true
mobile: true
description: Apreneu a col·laborar amb altres usuaris d'Obsidian al vostre lloc d'Obsidian Publish.
---
Aprèn com col·laborar al teu lloc d'[[Introducció a Obsidian Publish|Obsidian Publish]] amb altres usuaris d'Obsidian. Afegint els teus amics i col·legues com a col·laboradors, podran publicar canvis al teu lloc.

Només el propietari del lloc necessita una subscripció activa d'Obsidian Publish. Els col·laboradors només necessiten un [compte d'Obsidian](https://obsidian.md/account).

> [!warning] Abans de publicar canvis a un lloc compartit, assegura't de [[#Sincronitzar canvis entre col·laboradors|sincronitzar els canvis entre col·laboradors]]. En cas contrari, podries sobreescriure canvis d'altres col·laboradors.

## Afegir un col·laborador a un lloc

1. A la [[Cinta]], selecciona **Publica els canvis** ![[lucide-send.svg#icon]] o obre la [[Paleta d'ordres]] i escriu **Publish: Publica els canvis...**
2. Al diàleg de **Publica els canvis**, fes clic a **Canvia les opcions del lloc** ![[lucide-cog.svg#icon]].
3. Al costat de **Col·laboració al lloc**, selecciona **Gestionar**.
4. A **Convida un usuari**, introdueix el correu electrònic del col·laborador.
5. Selecciona **Afegir**.

## Eliminar un col·laborador d'un lloc

1. A la [[Cinta]], selecciona **Publica els canvis** ![[lucide-send.svg#icon]] o obre la [[Paleta d'ordres]] i escriu **Publish: Publica els canvis...**
2. Al diàleg de **Publica els canvis**, fes clic a **Canvia les opcions del lloc** ![[lucide-cog.svg#icon]].
3. Al costat de **Col·laboració al lloc**, selecciona **Gestionar**.
4. Al costat del col·laborador que vols eliminar, selecciona **Elimina l'usuari** ![[lucide-x.svg#icon]].

## Sincronitzar canvis entre col·laboradors

Obsidian Publish no sincronitza automàticament els canvis publicats entre les cambres fortes locals. En canvi, els col·laboradors han de sincronitzar manualment els canvis d'altres col·laboradors.

Per actualitzar una nota local amb els canvis del lloc en directe:

1. A la [[Cinta]], selecciona **Publica els canvis** ![[lucide-send.svg#icon]] o obre la [[Paleta d'ordres]] i escriu **Publish: Publica els canvis...**
2. Fes clic dret o mantén premut el canvi que vols sincronitzar i selecciona **Utilitza la versió en directe**. **Això sobreescriurà la nota a la teva cambra forta local.**

> [!tip] Recomanem que utilitzis una altra eina per sincronitzar els canvis entre cambres fortes, com ara [[Introducció a Obsidian Sync|Obsidian Sync]] o [git](https://git-scm.com/).

## Permisos

La taula següent llista els permisos de lloc disponibles per a propietaris i col·laboradors:

| Acció                                        | Col·laborador | Propietari |
|----------------------------------------------|:-------------:|:----------:|
| Publicar pàgines noves                       | ✓             | ✓          |
| Publicar canvis a pàgines publicades         | ✓             | ✓          |
| Despublicar pàgines                          | ✓             | ✓          |
| Configurar les opcions del lloc              |               | ✓          |
| Gestionar permisos                           |               | ✓          |
