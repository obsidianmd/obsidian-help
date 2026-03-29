---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Heu adquirit Obsidian Sync i esteu a punt per començar. Aquesta guia us ajudarà a configurar i ajustar els paràmetres d'Obsidian Sync per a l'ús diari.
---
Has comprat Obsidian Sync i estàs a punt per començar. Aquesta guia t'ajudarà a configurar i ajustar els paràmetres d'Obsidian Sync per a l'ús diari.

- **Nou a Obsidian Sync?** Consulta: [[#Configura Obsidian Sync per primera vegada]]
- **Connectant un segon dispositiu?** Consulta: [[#Sincronitza una cambra remota en un altre dispositiu]]
- **Necessites fer canvis?** Consulta: [[#Gestiona les teves cambres remotes]]

## Configura Obsidian Sync per primera vegada

En aquesta secció, crearàs una nova [[Cambres cuirassades locals i remotes|cambra remota]] i la connectaràs a una cambra forta local existent. No necessites crear una nova cambra forta local buida per utilitzar Obsidian Sync per a aquest propòsit.

> [!info] La teva cambra forta actual es troba en una carpeta d'iCloud, OneDrive, Dropbox o un altre servei de sincronització? Si **sí**, o **no n'estàs segur**, si us plau llegeix [[Preguntes freqüents#Puc utilitzar una sincronització de tercers amb Obsidian Sync?|això]] i [[Canviar a Obsidian Sync]] abans de continuar.

**Requisits previs**

- Un compte d'Obsidian. Si no en tens un, [registra't ara](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- Una [[Plans i límits d'emmagatzematge|subscripció]] activa d'Obsidian Sync. Si no en tens una, subscriu-te des del [tauler del teu compte](https://obsidian.md/account/sync).
- **Recomanat**: Un [[Fes còpia de seguretat dels fitxers d'Obsidian|sistema de còpies de seguretat]] configurat per als teus fitxers d'Obsidian. Un servei de sincronització no és una còpia de seguretat.

### Inicia sessió amb el teu compte d'Obsidian

1. Obre la **[[Configuració]]**.
2. A la barra lateral, selecciona **General**.
3. Sota **Compte → El teu compte**, selecciona **Inicia sessió**.
4. A **Correu electrònic**, introdueix el teu correu electrònic.
5. A **Contrasenya**, introdueix la teva contrasenya.
6. Selecciona **Inicia sessió**.

### Activa Obsidian Sync

1. Obre la **[[Configuració]]**.
2. A la barra lateral sota **Opcions**, selecciona **Connectors principals**.
3. Activa **Sync**.

### Crea una nova cambra remota

1. Obre la **[[Configuració]]**.
2. A la barra lateral, selecciona **Sync**.
3. Al costat de **Cambra remota**, selecciona **Escull**.
4. Selecciona **Crea una arca nova**.
5. A **Nom de l'arca**, introdueix el nom de la cambra remota.
6. A **Regió**, tria la [[Configurar Obsidian Sync#Servidors de sincronització regionals|regió]] del servidor per a la teva cambra remota.
7. A **Contrasenya d'encriptació**, tria una contrasenya per a la teva cambra forta. Això crea una cambra forta amb xifratge d'extrem a extrem. La contrasenya de la cambra forta és independent del teu compte d'Obsidian i pot ser diferent per a cadascuna de les teves cambres fortes. Per a més informació, consulta [[Seguretat i privacitat]].
8. Selecciona **Crear**.

### Connecta a una cambra remota

1. Selecciona **Connecta** al costat de la teva cambra forta acabada de crear.
2. Introdueix la contrasenya que has configurat per a la cambra forta al camp **Contrasenya d'encriptació** si has optat pel [[Obsidian Sync/Seguretat i privacitat#Què significa xifratge d'extrem a extrem?|xifratge d'extrem a extrem]].
3. Selecciona **Desbloca l'arca**.
4. **No comencis a sincronitzar encara.** Comprova la configuració de sincronització a [[#Ajusta la configuració d'Obsidian Sync|ajusta la configuració d'Obsidian Sync]].
    - Si vols començar a sincronitzar immediatament, passa a [[#Comença a sincronitzar amb Obsidian Sync|comença a sincronitzar amb Obsidian Sync]].
5. Si encara no ho has fet, tanca o descarta la finestra emergent que et demana **Excloure carpetes** i **Inicia la sincronització**. Continua al pas següent.

#### Ajusta la configuració d'Obsidian Sync

1. Navega a **[[Configuració]]** → **Sync** si cal.
2. Si no s'ha afegit un nom de dispositiu, afegeix-ne un per facilitar la lectura dels registres de Sync!
3. Activa o desactiva les opcions sota **Sincronització selectiva** i **Configuració de sincronització de l'arca** per indicar quins elements s'han de sincronitzar cap a i des de la cambra remota.
    - **Nota**: Si recentment t'has desconnectat d'una cambra remota i et tornes a connectar sense reiniciar l'aplicació, algunes opcions poden estar ja activades.
4. Si fas canvis a qualsevol configuració, reinicia Obsidian completament.
5. Un cop Obsidian s'hagi reiniciat, torna a **[[Configuració]]** → **Sync**.

#### Comença a sincronitzar amb Obsidian Sync

Si comences a sincronitzar després de connectar-te a una cambra remota, veuràs un botó **Inicia la sincronització**. Selecciona aquest botó per començar a sincronitzar.

Si comences a sincronitzar després d'ajustar la configuració d'Obsidian Sync i reiniciar l'aplicació, veuràs un botó **Reprendre** dins la configuració de Sync. Selecciona aquest botó per començar a sincronitzar.

> [!done] Estat de sincronització
> Quan Obsidian Sync acabi, apareixerà un cercle verd amb una marca de verificació ![[obsidian-icon-sync-synced.svg#icon]] a la cantonada inferior dreta (escriptori) o a la barra lateral dreta (mòbil). El registre de Sync també mostrarà "Completament sincronitzat" com un dels seus missatges més recents.
>
> Per a més detalls sobre els estats de sincronització, consulta [[Icona d'estat i missatges]].
^obsidian-sync-status

Per connectar altres dispositius a la teva cambra remota acabada de crear i sincronitzar, passa a [[Configurar Obsidian Sync#Sincronitza una cambra remota en un altre dispositiu|Sincronitza una cambra remota en un altre dispositiu]].

Per aprendre més sobre configuració i fitxers, passa a [[Configuració de Sync i sincronització selectiva]].

## Sincronitza una cambra remota en un altre dispositiu

En aquesta secció, ja has creat una cambra remota i hi has pujat dades. Ara, vols connectar-hi els teus altres dispositius.

**Requisits previs**
- Un compte d'Obsidian. Si no en tens un, [registra't ara](https://obsidian.md/account#mode=signup).
- Una subscripció activa d'Obsidian Sync. Si no en tens una, subscriu-te des del [tauler del teu compte](https://obsidian.md/account).
- Sync activat dins la configuració dels [[Connectors principals]].
- Una cambra remota activa. Si encara no n'has creat una, si us plau crea primer una [[Configurar Obsidian Sync#Crea una nova cambra remota|cambra remota]].
- **Recomanat**: Un [[Fes còpia de seguretat dels fitxers d'Obsidian|sistema de còpies de seguretat]] configurat per als teus fitxers d'Obsidian al dispositiu que més utilitzes. Un servei de sincronització no és una còpia de seguretat.

### Sincronitza la teva cambra forta des del selector de cambres

Si has instal·lat Obsidian recentment, quan obris el programa se't presentarà el [[Gestiona les cambres fortes|Selector de cambres fortes]]. Per crear una nova cambra forta local a partir del contingut d'una cambra remota, hauràs de seguir els passos següents.

1. Obre Obsidian (suposant que és el primer cop que l'obres)
2. Selecciona una de les opcions segons la teva instal·lació:
	1. **Escriptori**: A la secció que diu Connectar a Obsidian Sync, selecciona **Configuració**
	2. **Mòbil/Tauleta**: **Configura Obsidian Sync**
3. Inicia sessió amb el teu compte d'usuari d'Obsidian
	1. Si tens configurat la [[Autenticació de 2 factors|2FA]], introdueix el teu codi 2FA.
4. Se't demanarà que triïs quina cambra remota vols sincronitzar a aquest dispositiu. Selecciona **Connecta**.
5. Se't demanarà que triïs un nom per a la cambra forta local que es crearà al dispositiu per emmagatzemar aquestes dades. Introdueix el nom que prefereixis.
	1. Si utilitzes [[Obsidian URI]], voldràs utilitzar el mateix nom que la cambra forta local del teu altre dispositiu.
6. Selecciona **Crear**.
7. La finestra de cambres remotes apareixerà momentàniament mentre Obsidian Sync es connecta al servidor i valida la subscripció. Després et presentarà una finestra de *Configura la connexió*.
	1. Es recomana molt que tanquis o feu lliscar cap avall aquesta finestra, i [[#Ajusta la configuració d'Obsidian Sync|ajustis la configuració d'Obsidian Sync]] primer.
	2. Si canvies qualsevol configuració de Sync, si us plau recarrega o reinicia Obsidian.

### Sincronitza la teva cambra forta des de la Configuració d'Obsidian

Si ja has creat una cambra forta local en aquest dispositiu, i vols connectar aquesta cambra forta local a una cambra remota, les instruccions són molt semblants a [[#Configura Obsidian Sync per primera vegada]].

![[Configurar Obsidian Sync#Inicia sessió amb el teu compte d'Obsidian]]

![[Configurar Obsidian Sync#Activa Obsidian Sync]]

#### Connecta a una cambra remota

1. Obre la **[[Configuració]]**.
2. A la barra lateral, selecciona **Sync**.
3. Al costat de **Tria una cambra remota**, clica **Escull**.
4. Clica **Connecta** al costat de la cambra remota a la qual vols connectar-te.
5. A **Contrasenya d'encriptació**, introdueix la contrasenya de la teva cambra forta, si en tens una.
6. Se't demanarà que comencis a sincronitzar. Es recomana esperar i ajustar la configuració de sincronització primer. Si vols sincronitzar tota la cambra forta al dispositiu tal com està, pots **Iniciar la sincronització**.

> [!warning] Si la cambra forta del teu dispositiu ja conté algunes notes (no recomanat), se t'advertirà que aquestes notes es fusionaran abans de continuar. Els conflictes es resoldran mitjançant la [[Resolució de problemes d'Obsidian Sync#Resolució de conflictes|resolució de conflictes de Sync]].

![[Configurar Obsidian Sync#Ajusta la configuració d'Obsidian Sync]]

![[Configurar Obsidian Sync#Comença a sincronitzar amb Obsidian Sync]]

## Gestiona les teves cambres remotes

Has creat i connectat a una cambra remota. Pot ser que també hagis sincronitzat aquesta cambra remota a múltiples dispositius. Aquesta secció cobreix algunes de les altres instruccions habituals que pots necessitar per gestionar aquesta cambra remota.

### Desconnecta d'una cambra remota

1. Obre la **[[Configuració]]** d'Obsidian.
2. Selecciona **Sync** a la barra lateral.
3. Clica el botó **Desconnecta** al costat de Cambres remotes.

Ara estàs desconnectat de la cambra remota i ja no estàs sincronitzant en aquest dispositiu.

### Suprimeix una cambra remota

> [!tip] Suprimir una cambra remota no eliminarà les teves dades locals al dispositiu.

1. Obre la **[[Configuració]]**.
2. A la barra lateral, selecciona **Sync**.
3. Selecciona **Gestionar** al costat de Cambres remotes. S'obrirà una finestra amb la llista de les teves cambres remotes.
4. Selecciona la icona de la paperera ![[lucide-trash-2.svg#icon]] al costat de la cambra remota que vols suprimir.
5. Confirma la supressió seleccionant el botó vermell **Suprimeix**.
6. La teva cambra remota ha estat suprimida.

> [!info] Si no és visible la icona de la paperera, pot ser que primer hagis de desconnectar-te de la cambra remota. Un cop desconnectat, selecciona el botó **Escull** per obrir la llista de cambres remotes.

### Servidors de sincronització regionals

Obsidian Sync et permet triar la ubicació d'allotjament per a la teva cambra remota. Si estàs utilitzant la versió `1.4.16` o anterior d'Obsidian, la ubicació es triarà automàticament per tu.

Si no saps on és la regió de la teva cambra forta actual, consulta [[Obsidian Sync/Seguretat i privacitat#On puc trobar el meu servidor de Sync actual i on està allotjat?|On puc trobar el meu servidor de Sync actual i on està allotjat?]] per obtenir orientació.

![[sync-regional-sync-servers.png#interface|300]]

Després de seleccionar una ubicació, el teu centre de dades **no pot** ser mogut a un servidor diferent sense tornar a pujar les teves dades. Per canviar de regió, segueix la [[Regions de Sync|guia de regions de Sync per a cambres fortes]].

![[Obsidian Sync/Seguretat i privacitat#^sync-geo-regions]]

## Passos següents

Aquí tens alguns documents suggerits per llegir a continuació.

- Explora més sobre [[Configuració de Sync i sincronització selectiva|seleccionar fitxers i configuració per sincronitzar]].
- Aprèn què passa si la teva cambra remota [[Historial de versions|s'omple]].
- [[Col·laborar en una cambra cuirassada compartida]] amb un altre usuari d'Obsidian Sync.
- Consulta les [[Preguntes freqüents|PMF de Sync]] per trobar respostes a preguntes habituals.
