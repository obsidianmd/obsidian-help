---
permalink: data-storage
publish: true
mobile: true
description: Aquesta pàgina explica com l'Obsidian emmagatzema les seves dades al vostre dispositiu.
---
Obsidian emmagatzema les teves notes com a fitxers de text sense format amb [[Sintaxi de format bàsic|format Markdown]] en una _cambra forta_. Una cambra forta és una carpeta al teu sistema de fitxers local, incloent-hi qualsevol subcarpeta.

Com que les notes són fitxers de text sense format, pots utilitzar altres editors de text i gestors de fitxers per editar i gestionar les notes. Obsidian actualitza automàticament la teva cambra forta per mantenir-se al dia amb qualsevol canvi extern.

Pots crear una cambra forta a qualsevol lloc on el teu sistema operatiu ho permeti. Obsidian sincronitza amb [[Introducció a Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git i molts altres serveis de tercers.

Pots obrir múltiples carpetes com a cambres fortes individuals, per exemple per separar notes de la feina i de l'escola.

> [!warning] Cambres fortes dins de cambres fortes
> Com que els [[Enllaços interns]] són locals a una cambra forta, recomanem que no creïs cambres fortes dins de cambres fortes. Els enllaços podrien no actualitzar-se correctament.

## Configuració de la cambra forta

Obsidian crea una [[Carpeta de configuració|carpeta de configuració]] `.obsidian` a la carpeta arrel de la cambra forta, que conté les preferències específiques d'aquesta cambra forta, com les [[Tecles d'accés ràpid|dreceres de teclat]], els [[Temes|temes]] i els [[Connectors de la comunitat|connectors de la comunitat]].

Per defecte, la majoria de sistemes operatius amaguen les carpetes que comencen amb un punt (`.`), de manera que potser hauràs d'actualitzar la configuració del teu gestor de fitxers per veure-la.

- **macOS**: Al Finder, prem `Cmd+Maj+.` (punt) per mostrar els fitxers ocults.
- **Windows**: [Mostrar fitxers ocults](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** A la majoria d'exploradors de fitxers, prem `Ctrl + h` per mostrar els fitxers ocults.

> [!tip] Afegir `.obsidian` a Git
> Els fitxers `.obsidian/workspace.json` i `.obsidian/workspaces.json` emmagatzemen la disposició actual de l'espai de treball i s'actualitzen cada vegada que obres un fitxer nou. Si utilitzes [Git](https://git-scm.com) per gestionar la teva cambra forta, potser voldràs afegir aquests fitxers al `.gitignore`.

## Configuració global

Obsidian emmagatzema la configuració global en una carpeta del sistema. La ubicació de la carpeta del sistema depèn del sistema operatiu que utilitzis.

- **macOS**: `/Users/elnomdusuari/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` o `~/.config/obsidian/`

> [!warning] No creïs una cambra forta a la carpeta del sistema. Això podria provocar dades corruptes o pèrdua de dades.

## IndexedDB

IndexedDB és una base de dades de baix nivell del costat del client que Obsidian utilitza per a l'emmagatzematge del backend. Ajuda a mantenir l'estat de les connexions d'[[Introducció a Obsidian Sync|Obsidian Sync]] i conserva la [[#Memòria cau de metadades]] quan es tanca l'aplicació.

> [!warning] Si el [Mode de bloqueig](<https://support.apple.com/en-us/105120>) d'Apple està activat i Obsidian no està exclòs, aquests fitxers de base de dades no es desaran, requerint una reindexació cada vegada que s'iniciï l'aplicació.

### Memòria cau de metadades

Per tal de proporcionar una experiència ràpida en utilitzar l'aplicació, Obsidian manté un registre local de metadades sobre els fitxers de la teva cambra forta anomenat **memòria cau de metadades**. Aquestes metadades fan funcionar moltes coses a l'aplicació, des de la vista de gràfic fins a la vista d'esquema.

Obsidian manté aquesta memòria cau sincronitzada amb els fitxers de la teva cambra forta, però és possible que les dades es desincronitzin dels fitxers subjacents. En cas que això passi a la teva cambra forta, pots reconstruir la memòria cau de metadades des de la configuració de l'aplicació a la secció *Fitxers i Enllaços*.
