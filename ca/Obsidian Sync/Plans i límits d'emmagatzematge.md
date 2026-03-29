---
permalink: sync/plans
publish: true
mobile: true
description: Coneixeu les diferents opcions de pla disponibles per a Obsidian Sync.
---
## Plans

Per sincronitzar les teves notes amb [[Introducció a Obsidian Sync|Obsidian Sync]] necessites un pla de subscripció. Pots comprar un pla de Sync iniciant sessió al [teu compte](https://obsidian.md/account/sync). Consulta la [pàgina de Sync](https://obsidian.md/sync) per als preus.

A continuació es mostra una comparació entre el pla Standard i el pla Plus:

|                                                                          | Sync Standard | Sync Plus       |
| ------------------------------------------------------------------------ | ------------- | --------------- |
| Cambres fortes sincronitzades                                            | 1             | 10              |
| Mida màxima del fitxer                                                   | 5 MB          | 200 MB          |
| Emmagatzematge total                                                     | 1 GB          | 10 GB a 100 GB  |
| [[Historial de versions]]                                                | 1 mes         | 12 mesos        |
| Dispositius                                                              | Il·limitats   | Il·limitats     |
| [[Col·laborar en una cambra cuirassada compartida\|Cambres compartides]] | Sí            | Sí              |

## Límits d'emmagatzematge

La quantitat de dades que pots emmagatzemar amb [[Introducció a Obsidian Sync|Obsidian Sync]] depèn del teu pla de subscripció. Amb el pla Sync Plus pots comprar emmagatzematge addicional fins a 100 GB des del [tauler del teu compte](https://obsidian.md/account/sync). Consulta les [[Preguntes freqüents]] per a més detalls.

Hi ha un únic límit d'emmagatzematge per compte per a totes les notes de les teves cambres fortes. L'[[Historial de versions|historial de versions]] i els [[Fitxers adjunts|fitxers adjunts]] també compten per al límit d'emmagatzematge del teu compte.

Quan assoleixis el límit d'emmagatzematge del teu compte, el connector de Sync deixarà de sincronitzar fitxers i se't demanarà que purgis les teves cambres remotes.

### Identificar i suprimir fitxers grans

Per identificar i suprimir fitxers grans de la cambra forta:

1. Obre **[[Configuració]] → Sync**.
2. Selecciona **Veure els fitxers més grans** al costat de **Mida de l'arca per sobre del límit**.
	1. Si no veus **Mida de l'arca per sobre del límit**, significa que ==encara no has assolit el límit de mida==.
3. Tanca el modal de **Veure els fitxers més grans**.
4. Suprimeix alguns dels fitxers grans que ja no necessitis.
5. Espera que Obsidian Sync acabi la tasca. Això pot trigar una estona.
6. Obre **[[Configuració]] → Sync**.
7. Selecciona **Purga** al costat de **Mida de l'arca per sobre del límit**. Això eliminarà els fitxers suprimits de la cambra remota per alliberar espai.

Després que la purga es sincronitzi amb el servidor, Obsidian Sync hauria de reprendre el funcionament.

### Crear una nova cambra remota

Pots **crear una nova cambra remota** per excloure fitxers grans abans de sincronitzar. L'historial de versions dels teus fitxers es restablirà si crees una nova cambra remota. Assegura't que no necessites l'historial de versions de fitxers antics abans de continuar.

Per sincronitzar amb una nova cambra remota, segueix aquests passos:

1. Obre **[[Configuració]] → Sync**.
2. Selecciona **Gestionar** al costat de **Cambra remota**.
3. Escull **Crea una arca nova** i segueix els passos per crear-la. Si t'has quedat sense cambres fortes, potser hauràs de [[Configurar Obsidian Sync#Desconnectar d'una cambra remota|desconnectar]] de la cambra remota actual i [[Configurar Obsidian Sync#Suprimir una cambra remota|suprimir-la]] primer.
4. Configura els fitxers exclosos abans de començar a sincronitzar amb la nova cambra remota.
5. Reinicia Obsidian per aplicar els canvis.
6. Obre **[[Configuració]] → Sync**.
7. Selecciona reprendre per començar a sincronitzar amb la nova cambra remota.

La nova cambra remota hauria de ser més petita que l'anterior, gràcies a l'absència d'historial de versions i fitxers exclosos.

## Actualitza el teu pla

Pots actualitzar el teu pla iniciant sessió al [tauler del teu compte](https://obsidian.md/account/sync). Des d'allà podràs actualitzar el teu pla de Sync Standard a Sync Plus, i augmentar l'emmagatzematge fins a 100 GB.

## Reduir el teu pla

Si vols reduir el teu pla de Sync però l'ús d'emmagatzematge supera el límit del nou pla, hauràs d'alliberar espai a la teva cambra remota. Actualment, no hi ha cap mètode directe per eliminar ràpidament fitxers específics d'una cambra remota existent. Això és perquè els fitxers adjunts es conserven a l'historial de versions durant un màxim de dues setmanes, i l'historial de versions compta per al límit d'emmagatzematge.

La manera més ràpida de reduir l'ús d'emmagatzematge de Sync és crear una nova cambra remota amb els fitxers adjunts desactivats i després suprimir la cambra remota antiga que supera els límits d'emmagatzematge. Tingues en compte que perdràs l'historial de versions en fer-ho.

Si estàs reduint de Sync Plus a Sync Standard, també hauràs de reduir el nombre de cambres fortes presents a una abans que es permeti la reducció.

### Preservar l'historial de versions

Els fitxers adjunts es conserven al teu [[Historial de versions|historial de versions]] durant un màxim de dues setmanes. Si tens previst reduir el pla en un futur proper, pots començar eliminant els fitxers adjunts de la teva cambra forta local.

Després de dues setmanes, aquests es purgaran de la cambra remota i ja no comptaran per al límit d'emmagatzematge. En aquest moment podràs reduir el teu pla mantenint l'historial de versions per a altres tipus de fitxers, com ara fitxers Markdown.
