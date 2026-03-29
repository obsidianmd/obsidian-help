---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Com sincronitzar les teves notes d'Obsidian entre dispositius i plataformes.
---
Obsidian emmagatzema les notes localment al teu dispositiu perquè sempre hi tinguis accés, fins i tot sense connexió. Per accedir a les teves notes en múltiples dispositius, cal configurar un mètode de sincronització.

Aquesta guia cobreix els mètodes de sincronització més comuns, incloent consells per evitar la pèrdua de dades i garantir una experiència fluida.

També recomanem llegir la nostra [[Fes còpia de seguretat dels fitxers d'Obsidian|guia de còpies de seguretat]] per protegir les teves dades.

## Mètodes de sincronització

Amb Obsidian les teves dades simplement s'emmagatzemen com a fitxers en una carpeta anomenada [[Cambres cuirassades locals i remotes|cambra forta]]. Això significa que hi ha moltes maneres de sincronitzar les teves dades.

Aquests són alguns mètodes de sincronització comuns reportats per membres de la [comunitat d'Obsidian](https://obsidian.md/community):

1. **Sincronització pròpia**: [[#Obsidian Sync]]
2. **Sincronització al núvol de tercers**: [[#iCloud]], [[#OneDrive]] i [[#Google Drive]]
3. **Sincronització local**: [[#Syncthing]]
4. **Control de versions**: [[#Git]] i [[#Working Copy]]

## Obsidian Sync

**Sistemes recomanats**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

El mètode de sincronització més senzill i oficialment suportat és la nostra solució pròpia: [[Introducció a Obsidian Sync|Obsidian Sync]].

Obsidian Sync manté les teves cambres fortes sincronitzades entre tots els dispositius utilitzant una cambra remota fora del dispositiu per fer còpies de les teves dades. Una còpia local roman als teus dispositius en tot moment.

Segueix la [[Configurar Obsidian Sync|guia de configuració]] per configurar Obsidian Sync.

## iCloud

**Sistemes recomanats**: `macOS`, `iOS`, `iPadOS`

iCloud es pot utilitzar per sincronitzar cambres fortes entre iOS i macOS. No obstant, **iCloud Drive a Windows** pot provocar duplicació o corrupció de fitxers.

**Com crear i emmagatzemar la teva cambra forta a iCloud Drive**:

- **Activa iCloud Drive**:
    - A macOS: Ves a **Preferències del Sistema → ID d'Apple → iCloud → iCloud Drive**.
    - A iOS: Ves a **Configuració → [El teu nom] → iCloud → iCloud Drive**.
- **Crea una nova cambra forta a iCloud**:
    - A macOS:
        1. Obre **Obsidian** i selecciona **Crea una arca nova**.
        2. Al selector de fitxers, navega fins a **iCloud Drive → Obsidian**.
        3. Crea una carpeta per a la teva cambra forta i posa-li un nom.
        4. Selecciona **Crear** per acabar.
    - A iOS:
        1. Obre **Obsidian** i toca **Crea una arca nova**.
        2. Introdueix un nom per a la teva cambra forta.
        3. Activa **Emmagatzema a iCloud**.
        4. Toca **Crear**.
- **Obre la cambra forta en un altre dispositiu Apple**:
    - En un altre dispositiu macOS o iOS, obre **Obsidian**, ves al [[Gestiona les cambres fortes|Selector de cambres fortes]] i selecciona **Obrir carpeta com a arca**. Navega fins a **iCloud Drive → Obsidian**.

> [!warning]+ Ubicació de carpeta a iOS i iPadOS
> Quan utilitzis iCloud en dispositius mòbils, assegura't que la teva cambra forta estigui emmagatzemada a la ubicació correcta: `iCloud Drive/Obsidian/[Nom de la teva cambra forta]`.
> 
> Les cambres fortes han d'estar dins la carpeta **Obsidian** a iCloud Drive. La carpeta de la dreta amb la icona d'Obsidian és la correcta. No utilitzis la carpeta sense la icona de l'aplicació.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Per verificar la ubicació de la teva cambra forta, obre l'aplicació **Fitxers**, toca **Navegar**, selecciona **iCloud Drive** a **Ubicacions** i confirma que la teva cambra forta està dins la carpeta **Obsidian**. Si la teva cambra forta es troba en una ubicació diferent, podries experimentar problemes de sincronització.

> [!tip] Bones pràctiques
> - Per a **macOS 14 (Sonoma) i anteriors**: Desactiva **Optimitza l'emmagatzematge del Mac** a la configuració d'iCloud per evitar que els fitxers siguin descarregats. Aquesta configuració afecta tot l'emmagatzematge d'iCloud al dispositiu, no només Obsidian.
> - Per a **macOS 15 (Sequoia)**: Fes clic dret a la carpeta **Obsidian** a iCloud Drive i selecciona **Mantén baixat**.

## OneDrive

**Sistemes recomanats**: `Windows`, `macOS` (funcionalitat limitada a Android)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) és una opció popular d'emmagatzematge al núvol per a usuaris de Windows i macOS. No obstant, té limitacions a Android i no està oficialment suportat per sincronitzar cambres fortes d'Obsidian a iOS.

> [!info] Mantén els fitxers disponibles fora de línia
> Abans d'utilitzar OneDrive per a la sincronització, assegura't que la carpeta de la teva cambra forta estigui marcada com a **Mantén sempre en aquest dispositiu**. Això evita que OneDrive descarregui els fitxers i que Obsidian pensi que falten.

**Com crear i emmagatzemar la teva cambra forta a OneDrive**:

1. **Configura OneDrive**:
   - A Windows: Inicia la sessió a través de l'aplicació OneDrive o el teu compte de Microsoft.
   - A macOS: Baixa l'aplicació OneDrive i inicia la sessió.
2. **Crea una nova cambra forta a OneDrive**:
   - A Windows/macOS:
     1. Obre l'**Explorador de fitxers** (Windows) o el **Finder** (macOS) i navega fins a **OneDrive → Documents**.
     2. Crea una carpeta nova (p. ex., \"Cambra forta d'Obsidian\").
     3. Obre **Obsidian**, selecciona **Crea una arca nova** i selecciona la carpeta de OneDrive.
3. **Obre la cambra forta en un altre dispositiu**:
   - En un altre dispositiu, obre **Obsidian**, ves al [[Gestiona les cambres fortes|Selector de cambres fortes]] i selecciona **Obrir carpeta com a arca**. Navega fins a **OneDrive → Documents**.

> [!info] Sincronització a Android
> OneDrive podria no funcionar bé per a la sincronització a Android. Considera utilitzar aplicacions com [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) o [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Bones pràctiques
> - Mantén sempre els fitxers de la teva cambra forta **Disponibles fora de línia** fent clic dret a la carpeta i seleccionant **Mantén sempre en aquest dispositiu**.
> - Evita utilitzar la funció **Fitxers sota demanda** de OneDrive per a les cambres fortes per prevenir problemes de sincronització.

## Google Drive

**Sistemes recomanats**: `Windows`, `macOS`, `Android` (funcionalitat limitada a iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) és una altra solució popular d'emmagatzematge al núvol. Tot i que no està oficialment suportat per sincronitzar cambres fortes d'Obsidian, pots utilitzar aplicacions i connectors de tercers per sincronitzar entre dispositius.

> [!info] Suport per a iOS
> Google Drive no està oficialment suportat per sincronitzar cambres fortes d'Obsidian a iOS. Considera utilitzar una solució o connector de tercers per sincronitzar a iOS.

**Com crear i emmagatzemar la teva cambra forta a Google Drive**:

1. **Configura Google Drive**:
    - A Windows o macOS: Baixa l'aplicació Google Drive i inicia la sessió.
    - A Android: Assegura't que Google Drive estigui activat i amb la sessió iniciada.
2. **Crea una nova cambra forta a Google Drive**:
    - A Windows/macOS:
        1. Obre l'**Explorador de fitxers** (Windows) o el **Finder** (macOS) i navega fins a **Google Drive**.
        2. Crea una carpeta nova (p. ex., \"Cambra forta d'Obsidian\").
        3. Obre **Obsidian**, selecciona **Crea una arca nova** i selecciona la carpeta de Google Drive.
3. **Obre la cambra forta en un altre dispositiu**:
    - En un altre dispositiu, obre **Obsidian**, ves al [[Gestiona les cambres fortes|Selector de cambres fortes]] i selecciona **Obrir carpeta com a arca**. Navega fins a la teva carpeta de Google Drive.

> [!tip] Bones pràctiques
> - Configura els fitxers de la cambra forta com a **Disponibles fora de línia** a Google Drive per evitar problemes de sincronització deguts a la descàrrega de fitxers.
> - Per a iOS, considera mètodes alternatius com [[Introducció a Obsidian Sync|Obsidian Sync]], [[#iCloud]], o utilitza el connector **Remotely Save**.

## Syncthing

**Sistemes recomanats**: `Windows`, `macOS`, `Linux`

Syncthing és una eina de sincronització de fitxers descentralitzada que no depèn de l'emmagatzematge al núvol. Sincronitza la teva cambra forta directament entre dispositius a través de la xarxa o internet.

> [!info]+ Suport per a Android
> L'aplicació oficial de Syncthing per a Android ja no es manté. No obstant, una bifurcació de la comunitat anomenada [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) continua en desenvolupament actiu i es pot utilitzar en dispositius Android.

**Com crear i emmagatzemar la teva cambra forta amb Syncthing**:

1. **Configura Syncthing**:
   - Instal·la Syncthing a cada dispositiu. Consulta el [lloc web de Syncthing](https://syncthing.net/) per a guies d'instal·lació.
   - A Android, instal·la [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) des de les publicacions de GitHub o F-Droid.
2. **Crea i configura una carpeta compartida**:
   - A tots els dispositius:
     1. Obre Syncthing i crea una carpeta compartida. Estableix la ruta de la carpeta a la teva cambra forta d'Obsidian.
     2. Assegura't que la mateixa carpeta estigui seleccionada a tots els dispositius.
     3. Configura les preferències de sincronització de la carpeta (p. ex., **Enviar i rebre** per a sincronització bidireccional).
3. **Obre la cambra forta a Obsidian**:
   - Un cop la carpeta estigui sincronitzada entre dispositius, obre **Obsidian**, ves al [[Gestiona les cambres fortes|Selector de cambres fortes]] i selecciona **Obrir carpeta com a arca**.

> [!info] Disponibilitat del dispositiu
> Syncthing funciona millor quan almenys un dispositiu està sempre encès per garantir la sincronització contínua.

> [!tip] Bones pràctiques
> - Per a la sincronització local, assegura't que tots els dispositius estiguin connectats a la mateixa xarxa.
> - Exclou `.obsidian` de la sincronització si vols configuracions separades a cada dispositiu.
> - Utilitza patrons d'exclusió per evitar sincronitzar fitxers temporals o de còpia de seguretat.

## Git

**Sistemes recomanats**: `Windows`, `macOS`, `Linux`

**Git** és un sistema de control de versions que et permet fer seguiment dels canvis, col·laborar amb altres i sincronitzar les teves cambres fortes a través de repositoris com GitHub, GitLab o un servidor propi.

**Com sincronitzar la teva cambra forta amb Git**:

1. **Configura un repositori remot**:
    - Crea un repositori en una plataforma d'allotjament Git (p. ex., GitHub, GitLab o un servidor propi).
2. **Sincronitza la teva cambra forta**:
    1. Obre un terminal o una interfície gràfica de Git (p. ex., GitKraken, Sourcetree).
    2. Inicialitza un repositori Git a la carpeta de la teva cambra forta amb `git init`.
    3. Afegeix el repositori remot: `git remote add origin [URL]`.
    4. Fes commit dels teus canvis: `git add .` i `git commit -m "El teu missatge"`.
    5. Puja els canvis: `git push origin main`.
3. **Baixa els canvis en altres dispositius**:
    - Clona el repositori en un altre dispositiu i baixa els canvis amb `git pull origin main`.

> [!info] Sincronització manual requerida
> Git proporciona un fort control de versions, però la sincronització no és automàtica. Has de pujar i baixar els canvis manualment.

## Sincronització a iPhone i iPad

**Opcions recomanades**:
- [[Introducció a Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Evita barrejar serveis de sincronització
> Evita sincronitzar la mateixa cambra forta entre múltiples serveis (p. ex., utilitzar tant Obsidian Sync com iCloud simultàniament) per prevenir conflictes de dades o corrupció.

**Opcions no suportades**:
Els següents serveis no estan oficialment suportats a iOS, però els usuaris han trobat solucions alternatives utilitzant eines o connectors de tercers:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Alguns usuaris han utilitzat amb èxit connectors com **Remotely Save** o **LiveSync** per sincronitzar cambres fortes a iOS. No obstant, aquests mètodes no estan oficialment suportats i els resultats poden variar.

### Working Copy

**Sistemes recomanats**: `iOS`
**Requereix**: [[#Git]]

**Working Copy** és un client Git per a iOS que et permet clonar, fer commit i pujar canvis a un repositori Git. Funciona bé per sincronitzar cambres fortes d'Obsidian via Git, tot i que algunes funcions requereixen una compra dins l'aplicació.

**Com sincronitzar la teva cambra forta amb Working Copy**:

1. **Instal·la Working Copy**:
    - Baixa l'aplicació **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** al teu iPhone o iPad.
2. **Clona el teu repositori Git**:
    - Obre Working Copy, toca **Afegir repositori** i introdueix l'URL del teu repositori (p. ex., GitHub, GitLab).
3. **Vincula el repositori a Obsidian**:
    - Vincula la carpeta del repositori clonat a una cambra forta buida a **Obsidian**.
4. **Fes commit i puja els canvis**:
    - Després d'editar notes a Obsidian, utilitza Working Copy per fer **Commit** i **Push** dels canvis al repositori remot.
    - En altres dispositius, baixa els canvis amb Git per sincronitzar la cambra forta.

> [!info] Ús per la comunitat
> Tot i que Working Copy no està oficialment suportat, molts usuaris l'han utilitzat amb èxit per sincronitzar cambres fortes amb Git.

## Preguntes freqüents

**Per què el meu servei de sincronització preferit no està oficialment suportat?**

A diferència d'algunes aplicacions de presa de notes que accedeixen a un fitxer a la vegada, Obsidian requereix accés a tota la cambra forta per a les seves funcions (p. ex., actualitzar enllaços en canviar el nom d'un fitxer). Això fa que sigui difícil per a alguns serveis funcionar de manera fiable amb Obsidian.

**Per què necessito mantenir els fitxers "Disponibles fora de línia"?**

Si serveis com OneDrive o iCloud descarreguen fitxers (p. ex., utilitzant **Fitxers sota demanda** o **Optimitza l'emmagatzematge del Mac**), Obsidian no pot accedir-hi, provocant problemes de sincronització. Marca la carpeta de la teva cambra forta com a **Mantén sempre en aquest dispositiu** (OneDrive) o assegura't que **Mantén baixat** estigui activat (iCloud).

**Com gestiono configuracions diferents per a les meves cambres fortes?**

Obsidian et permet personalitzar la carpeta de configuració per dispositiu utilitzant la funció de [[Carpeta de configuració|Carpetes de configuració]].
