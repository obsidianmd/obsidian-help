---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Aquesta pàgina enumera problemes poc freqüents que podeu trobar amb Obsidian Sync i com resoldre'ls.
---
Aquesta pàgina llista problemes poc comuns que podeu trobar amb [[Introducció a Obsidian Sync|Obsidian Sync]] i com resoldre'ls. Abans de continuar, recomanem revisar les pàgines [[Icona d'estat i missatges]] i [[Preguntes freqüents]].

## General

### Resolució de conflictes

Un conflicte passa quan modifiqueu el mateix fitxer en dos o més dispositius abans que se sincronitzin. Per exemple, editeu una nota al vostre ordinador. Abans que aquell canvi es carregui, també modifiqueu la mateixa nota al vostre telèfon.

Els conflictes passen més sovint quan treballeu sense connexió. Hi ha més canvis i més temps entre sincronitzacions, cosa que augmenta la probabilitat de conflictes.

#### Com Obsidian Sync gestiona els conflictes

Quan Obsidian Sync troba un conflicte, el resultat depèn del tipus de fitxer:

- **Fitxers Markdown**: Obsidian Sync fusiona els canvis utilitzant l'algorisme [diff-match-patch](https://github.com/google/diff-match-patch) de Google.
- **Altres tipus de fitxers**: Per a tots els altres fitxers, incloent Canvas, Obsidian utilitza l'enfocament "l'última modificació guanya". La versió modificada més recentment reemplaça les versions anteriors.

Per als conflictes en la configuració d'Obsidian, com la configuració de connectors, Obsidian Sync fusiona els fitxers JSON. Aplica les claus del JSON local sobre el JSON remot.

#### Opcions de resolució de conflictes

A partir d'Obsidian 1.9.7, podeu escollir com gestionar els conflictes. Per configurar aquesta opció:

1. Obriu **[[Configuració]]**.
2. A la barra lateral, seleccioneu **Sync**.
3. Sota **[[Configuració de Sync i sincronització selectiva#Resolució de conflictes|Resolució de conflictes]]**, escolliu la vostra opció preferida:
   - **Fusiona automàticament** (per defecte): Obsidian Sync combina tots els canvis de diferents dispositius en un sol fitxer. Això desa totes les edicions, però de vegades pot crear text duplicat o problemes de format. Haureu de corregir-los manualment.
   - **Crea un fitxer de conflicte**: Quan Obsidian troba canvis conflictius, crea un fitxer de conflicte separat en lloc de fusionar automàticament. Podeu llavors revisar ambdues versions i fusionar-les vosaltres mateixos. Això us dona control total sobre el resultat final.

> [!warning]+ Configureu-ho a tots els dispositius
> La configuració de resolució de conflictes és específica de cada dispositiu. Heu de configurar la vostra opció preferida a cadascun dels vostres dispositius. Això assegura el mateix comportament a tots els vostres dispositius sincronitzats.

**Patró de nomenclatura de fitxers de conflicte**

Quan utilitzeu l'opció "Crea un fitxer de conflicte", Obsidian crea un fitxer nou amb aquest patró de nomenclatura:

```
nom-original-de-la-nota (Conflicted copy nom-del-dispositiu AAAAMMDDHHM).md
```

Per exemple, si un conflicte passa en una nota anomenada `Notes de reunió.md`, el fitxer de conflicte podria anomenar-se:

```
Notes de reunió (Conflicted copy ElMeuMacBook2 202411281430).md
```

El fitxer de conflicte conté els canvis del dispositiu on es va detectar el conflicte. El fitxer original conserva la versió remota. Podeu comparar ambdós fitxers i fusionar el contingut manualment.

> [!info]+ Consulteu el registre de sincronització
> Per comprovar quan han passat conflictes, obriu el [[Icona d'estat i missatges#Activitat de sincronització|registre de sincronització]]. Filtreu per "Merge Conflicts" o cerqueu "Conflict".

### Sync ha suprimit una nota que acabava de crear en dos dispositius

Obsidian Sync normalment intenta [[#Resolució de conflictes|resoldre conflictes]] fusionant notes conflictives entre dispositius. No obstant això, poden sorgir problemes per als usuaris que creen o modifiquen notes automàticament en iniciar. Això inclou les [[Notes diàries]] o quan s'utilitza el connector de la comunitat [Templater](https://github.com/SilentVoid13/Templater).

Si creeu una nota localment en un dispositiu i, en un parell de minuts, Sync baixa una versió remota d'aquella mateixa nota, Sync conservarà la versió remota sense fusionar les dues. En aquest cas, podeu recuperar la versió local utilitzant [[Recuperació de fitxers]].

### Sync no sincronitza les actualitzacions dels meus connectors i la configuració

Obsidian [[Preguntes freqüents#Obsidian Sync recarrega la configuració en temps real?|no recarrega en viu tota la configuració]]. Després d'actualitzar la configuració o els connectors, heu de reiniciar Obsidian en els altres dispositius per veure els canvis. En dispositius mòbils, potser haureu de forçar el tancament de l'aplicació.

> [!example]- Canviar un tema
> - Al vostre dispositiu principal (normalment un ordinador), canvieu el tema al per defecte des d'un tema personalitzat.
> - El registre de sincronització confirma que els fitxers actualitzats s'han enviat a la cambra remota, però el vostre dispositiu mòbil encara mostra el tema personalitzat.
> - Al dispositiu mòbil, comproveu el registre de sincronització per confirmar la recepció del fitxer `appearance.json` actualitzat.
> - Recarregueu o reinicieu Obsidian al dispositiu mòbil.
> - Després de recarregar o reiniciar, el dispositiu mòbil hauria de mostrar el mateix tema que el vostre ordinador.

### Els meus fitxers continuen desapareixent de Sync tan bon punt els restauro

Aquest problema és més comú a Windows. Windows Defender pot posar en quarantena fitxers amb blocs de codi, cosa que provoca que certes notes desapareguin.

Una altra causa comuna és la doble sincronització. Això passa quan Obsidian Sync s'executa juntament amb un altre servei de sincronització.

![[Canviar a Obsidian Sync#Mou la teva cambra forta fora del servei de sincronització de tercers o emmagatzematge al núvol]]

---

Finalment, això pot passar quan restaureu un fitxer en un dispositiu, però llavors s'elimina d'un dispositiu secundari. Això passa quan el nom del fitxer té [[Icona d'estat i missatges#Missatges d'elements omesos|caràcters il·legals]].

## Android

**El meu dispositiu està suprimint els adjunts que rebo a través de Sync**

Aquest problema probablement es deu al fet que Google o Android Photos gestionen els vostres adjunts. Per evitar que el sistema modifiqui fitxers rebuts via Sync, afegiu un fitxer `.nomedia` [a la vostra cambra forta](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) al vostre dispositiu Android.

> [!tip]- Utilitzeu un connector
> El connector de la comunitat [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) facilita això. Instal·leu-lo al vostre telèfon Android. Tingueu en compte que els fitxers `.nomedia` no se sincronitzen entre dispositius a través d'Obsidian Sync.
