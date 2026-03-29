---
permalink: sync/settings
publish: true
mobile: true
description: Aquesta pàgina explica la configuració de Sync i us guia en la selecció dels fitxers que voleu sincronitzar.
---
Quan [[Plans i límits d'emmagatzematge#Crear una nova cambra remota|crees una cambra remota]] i [[Configurar Obsidian Sync#Connectar-se a una cambra remota|t'hi connectes]], el connector principal de Sync es converteix en el lloc per gestionar la teva cambra remota.

## Configuració de Sync

**Cambra remota**  
Aquesta secció mostra la cambra remota connectada actualment. Inclou un botó **Desconnecta** per desconnectar-se de la cambra remota i un botó **Gestionar** per veure totes les cambres remotes a les quals té accés el teu compte (incloent les cambres compartides mitjançant [[Col·laborar en una cambra cuirassada compartida|col·laboració]]).

> [!warning]+ Cambra remota en un servei de sincronització de tercers
> Si la teva cambra remota es troba en un servei de sincronització de tercers, veuràs un missatge d'error vermell. Segueix els passos a [[Canviar a Obsidian Sync]] per resoldre-ho.

**Estat de sincronització**  
Mostra l'estat de sincronització actual de la cambra remota. Aquesta secció inclou un botó **Pausa** o **Reprendre**, segons l'estat.

**Nom del dispositiu**  
Assigna un nom únic al dispositiu que s'està sincronitzant. Això ajuda a fer seguiment de l'activitat al [[Icona d'estat i missatges#Registre d'activitat de sincronització|registre de sincronització]]. Aquesta configuració és específica del dispositiu, igual que la [[#Sincronització selectiva]].

**[[#Resolució de conflictes]]**
Escull com resoldre els conflictes quan modifiques un fitxer en diversos dispositius. Aquesta configuració és específica del dispositiu, igual que la [[#Sincronització selectiva]].

**Fitxers eliminats**  
Conté un botó per **Veure** o **Restaurar** fitxers eliminats. Per a més detalls, consulta [[Historial de versions]].

**Mida de l'arca**  
Mostra una barra de progrés que indica quant d'emmagatzematge de sincronització s'està utilitzant.

> [!tip]- Temps de processament del servidor
> Pot trigar fins a 30 minuts perquè l'ús actual s'actualitzi a causa del processament del servidor.

**Contacta amb el suport**  
Proporciona instruccions sobre com [[Ajuda i suport#Contactar amb el suport d'Obsidian|contactar amb el suport d'Obsidian]], incloent opcions per **Copiar la informació de depuració** i **Enviar un correu al suport**.

### Resolució de conflictes

Escull com resoldre els conflictes quan modifiques un fitxer en diversos dispositius abans de sincronitzar. Pots fusionar automàticament els canvis o crear fitxers de conflicte separats per a una revisió manual. Consulta [[Resolució de problemes d'Obsidian Sync#Resolució de conflictes|Resolució de conflictes]] per a detalls sobre com funcionen els conflictes i com configurar aquesta opció.

> [!warning]+ Configura en cada dispositiu
> Aquesta configuració s'ha de configurar per separat en cada dispositiu.

---

També pots escollir què sincronitzar a la configuració del connector principal de Sync. Aquesta secció cobreix la **sincronització selectiva** i la **sincronització de configuració de l'arca**, juntament amb les seves advertències associades.

## Sincronització selectiva

Els fitxers sincronitzats a la teva [[Cambres cuirassades locals i remotes|cambra remota]] contribueixen al teu [[Preguntes freqüents#Quina mida pot tenir cada cambra remota|límit d'emmagatzematge]]. Per defecte, Obsidian Sync activa la **sincronització selectiva** per als següents tipus de fitxer:
- Imatges
- Àudio
- Vídeos
- PDF

Per sincronitzar tipus de fitxer addicionals, activa l'opció `Sincronitzar tots els altres tipus`.

La configuració per defecte de la **sincronització de configuració de l'arca** inclou:
- Altres tipus de fitxer
- Configuració principal
- Aparença
- Temes i funcionalitats
- Tecles d'accés ràpid
- Llista de connectors bàsics actius
- Configuració dels connectors bàsics

Per sincronitzar connectors de la comunitat, habilita manualment **Llista de connectors de la comunitat actius** i **Llista de connectors de la comunitat instal·lats**.

### Canviar els tipus de fitxer que vols sincronitzar

1. Obre **[[Configuració]] → Sync**.
2. Sota **Sincronització selectiva**, habilita els tipus de fitxer que vols sincronitzar.
3. Reinicia l'aplicació per aplicar la nova configuració. En mòbil o tauleta, pot ser necessari forçar el tancament.

Tingues en compte que el teu [[Plans i límits d'emmagatzematge|pla de Sync]] defineix la mida màxima de fitxer que pots sincronitzar. El pla Estàndard permet sincronitzar fitxers de fins a 5 MB, mentre que el pla Plus admet fitxers de fins a 200 MB.

> [!info]+ Els fitxers exclosos romanen a la cambra remota
> Afegir un fitxer a la llista de **Fitxers exclosos** no l'elimina de la cambra remota si ja s'ha sincronitzat. Configura la teva configuració de Sync abans de sincronitzar per evitar usar emmagatzematge innecessari.

### Excloure una carpeta de la sincronització

Per defecte, Obsidian sincronitza tots els fitxers i carpetes de la teva cambra forta. Per excloure una carpeta específica de la sincronització:
1. Obre **[[Configuració]] → Sync**.
2. Al costat de **Carpetes excloses**, selecciona **Gestionar**.
3. Selecciona la carpeta que vols excloure de la llista.
4. Selecciona **Fet**.

Per eliminar una carpeta de la llista d'exclusions, selecciona el botó ![[lucide-x.svg#icon]] al costat del nom de la carpeta.

#### Sempre exclosos de la sincronització

##### Instantànies de recuperació de fitxers

Les instantànies del connector [[Recuperació de fitxers]] no es sincronitzen mitjançant Obsidian Sync, ja que les instantànies es guarden a la [[Com Obsidian emmagatzema les dades#Configuració global|Configuració global]].

##### Fitxers i carpetes ocultes

Els fitxers i carpetes que comencen amb un `.` es tracten com a ocults i s'exclouen de la sincronització. L'única excepció és la [[Carpeta de configuració|carpeta de configuració]] de la cambra forta (`.obsidian`), que sí que es sincronitza.

Exemples comuns de fitxers i carpetes ocultes que no es sincronitzen:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Configuració de Sync

La configuració de Sync no es sincronitza entre dispositius. Has de configurar-la per separat en cada dispositiu segons sigui necessari.

## Actualitzar la configuració de la cambra sincronitzada

Per modificar la configuració de sincronització en diversos dispositius, segueix aquests passos:

> [!tip]- Dispositius primaris i secundaris
> Els termes "primari" i "secundari" són només per claredat. Sync no diferencia entre ells.

### Dispositiu primari

El dispositiu primari actua com a font de veritat. Els canvis fets aquí es sincronitzen a tots els altres dispositius.

1. Ves a **[[Configuració]] → Sync**.
2. Activa la configuració desitjada sota **Configuració de sincronització de l'arca**.
3. Recarrega o reinicia Obsidian. En mòbil o tauleta, pot ser necessari forçar el tancament.
4. Dona temps perquè la configuració es sincronitzi amb la teva cambra remota.

### Dispositiu(s) secundari(s)

Els dispositius secundaris (com el teu telèfon) reben actualitzacions del dispositiu primari.

1. Ves a **[[Configuració]] → Sync**.
2. Habilita la configuració necessària sota **Configuració de sincronització de l'arca**.
3. Espera que els canvis es baixin de la cambra remota.
4. Recarrega o reinicia l'aplicació per aplicar la configuració sincronitzada. En mòbil o tauleta, pot ser necessari forçar el tancament.

### Recàrrega de la configuració

Algunes configuracions es poden recarregar en calent, mentre que d'altres requereixen reiniciar:

- **Recàrrega en calent**: La majoria de configuracions d'Obsidian, incloent dreceres de teclat i propietats, configuració d'aparença, i configuracions de connectors principals ja habilitats.
- **Requereix recàrrega**: Canvis de CSS (p. ex., [[Pedaços de CSS]], [[Temes]]), configuracions de la vista de gràfic, i estats de connectors principals (p. ex., habilitar/deshabilitar Notes diàries).

Els connectors de la comunitat normalment no admeten la recàrrega en calent i requereixen reiniciar quan s'apliquen noves configuracions.

> [!info]+ Per a desenvolupadors de connectors
> Aprèn com [integrar la funcionalitat de recàrrega en calent amb Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Perfils de configuració

Obsidian Sync pot sincronitzar múltiples [[Carpeta de configuració|carpetes de configuració]] a la mateixa cambra remota, permetent-te crear perfils separats (p. ex., un per a mòbil, un altre per al teu portàtil).

### Crear un perfil de configuració

Per crear un nou perfil de configuració:

1. Obre **[[Configuració]] → Fitxers i Enllaços**.
2. Sota **Ubicació de configuració personalitzada**, introdueix un nom per al teu perfil, començant amb un punt (`.`), p. ex., `.obsidian-mobile`.
3. Torna a iniciar Obsidian per aplicar els canvis.

> [!info]+ Evitar tornar a baixar connectors i temes
> Canviar el perfil de configuració requerirà reconfigurar la teva configuració de sincronització. Per evitar tornar a baixar connectors i temes, copia la teva carpeta `.obsidian` existent i canvia-li el nom per coincidir amb el teu nou perfil (p. ex., `.obsidian-mobile`) abans de fer canvis.
