---
permalink: sync/security
publish: true
mobile: false
description: Coneixeu les consideracions de seguretat i privadesa d'Obsidian Sync.
---
## Xifratge

Per a la vostra seguretat, [[Introducció a Obsidian Sync|Obsidian Sync]] xifra la vostra [[Cambres cuirassades locals i remotes|cambra remota]] i tota la comunicació amb els servidors d'Obsidian.

Quan creeu una nova cambra remota, teniu dues opcions:

- **Xifratge d'extrem a extrem (per defecte)** ofereix la seguretat més alta, però requereix que emmagatzemeu de manera segura la vostra contrasenya de xifratge. Això garanteix que ningú — ni tan sols l'equip d'Obsidian — pugui accedir a les vostres notes.
- **Xifratge estàndard** utilitza una clau de xifratge gestionada per Obsidian per protegir les vostres dades en trànsit i al nostre servidor.

Recomanem el xifratge d'extrem a extrem per a tots els usuaris, ja que és l'opció més privada i segura. No obstant això, tingueu en compte que si oblideu o perdeu la vostra contrasenya de xifratge, les vostres dades romandran xifrades i inutilitzables per sempre. No podem recuperar la vostra contrasenya ni cap dada xifrada per vosaltres.

La vostra elecció només afecta la vostra cambra remota. Obsidian no xifra la vostra cambra forta local.

### Què significa xifratge d'extrem a extrem?

El xifratge d'extrem a extrem significa que les dades es xifren des del moment en què surten del vostre dispositiu i només es poden desxifrar amb la vostra clau de xifratge quan tornen a un dels vostres dispositius.

No podem llegir les vostres dades. Tampoc ho pot fer cap possible interceptor, com ara el vostre proveïdor de serveis d'internet.

En el cas poc probable d'una violació completa del servidor, les vostres dades romanen xifrades — ningú pot desxifrar els vostres fitxers sense conèixer la vostra contrasenya.

### Quins són els riscos d'utilitzar el xifratge estàndard?

El xifratge estàndard és fonamentalment menys segur que el xifratge d'extrem a extrem, però pot ser una opció convenient si no espereu que les dades que sincronitzeu siguin completament privades. Per exemple, si la vostra cambra forta sincronitzada es [[Introducció a Obsidian Publish|publica]] en un lloc web públic com aquest lloc d'Ajuda, aleshores el xifratge d'extrem a extrem no és necessari.

El xifratge estàndard és el mateix mètode de xifratge utilitzat per empreses d'emmagatzematge al núvol i plataformes de programari com a servei, com Google Docs, Dropbox i iCloud (sense Protecció de Dades Avançada). La vostra clau de xifratge és generada per l'aplicació i s'utilitza per protegir les vostres dades en trànsit i al servidor. Com que la clau de xifratge s'emmagatzema als servidors de l'empresa, es pot utilitzar per desxifrar les vostres dades, per exemple, en un cas on l'empresa estigui subjecta a una ordre de registre, o en un cas on vulgueu accedir a les vostres dades mitjançant un navegador web.

El xifratge d'extrem a extrem garanteix que Obsidian no pugui accedir mai a les vostres dades i s'hauria d'utilitzar sempre per sincronitzar dades que desitgeu que romanguin completament privades i segures.

### Quin xifratge utilitzeu?

Per a la seguretat de les dades, implementem protocols de xifratge estàndard de la indústria. Concretament, utilitzem [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), l'estàndard de xifratge més fort, àmpliament emprat en contextos com la banca en línia. El procés de xifratge implica els següents detalls tècnics:

- **Funció de derivació de clau:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) amb sal
- **Algorisme de xifratge:** AES-256 utilitzant [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Puc verificar que les meves dades estan xifrades d'extrem a extrem?

Sí. Consulteu la nostra guia, [com verificar el xifratge d'extrem a extrem d'Obsidian Sync](https://obsidian.md/blog/verify-obsidian-sync-encryption/). Aquesta guia proporciona instruccions pas a pas perquè pugueu verificar sense necessitat de confiar el xifratge d'extrem a extrem de les vostres dades quan s'envien i es reben a través dels servidors de Sync.

### Ha completat Obsidian una auditoria de seguretat independent?

Sí. Obsidian ha estat auditat de manera independent. Visiteu la nostra [pàgina de Seguretat](https://obsidian.md/security) per veure els informes d'auditoria. Les auditories regulars per part d'empreses de seguretat independents garanteixen que el codi i els procediments d'Obsidian compleixen els estàndards de seguretat més alts.

### Què passa si oblido la meva contrasenya de xifratge?

Si alguna vegada perdeu o oblideu la contrasenya de xifratge, no podreu connectar cambres fortes addicionals a la vostra cambra remota. Com que la contrasenya de xifratge no es desa enlloc, es perd per sempre.

Les vostres dades, però, normalment estan emmagatzemades de manera segura localment a cadascun dels vostres dispositius.

Per continuar utilitzant Obsidian Sync, us suggerim fer una reconfiguració completa per poder afegir nous dispositius al vostre sistema de Sync:

1. Feu una còpia de seguretat completa de la cambra forta al vostre dispositiu principal, per si de cas alguna cosa va malament. Això pot ser tan senzill com fer una còpia de la carpeta de la cambra forta o crear un fitxer zip a partir de la cambra forta.
2. Desconnecteu la cambra remota a cadascun dels vostres dispositius. Això es pot fer anant a **[[Configuració]] → Sync → Tria una cambra remota → Desconnecta**.
3. [[Configurar Obsidian Sync#Crear una nova cambra remota|Creeu una nova cambra remota]] al vostre dispositiu principal des de la mateixa pàgina de Configuració. Opcionalment, podeu suprimir la cambra remota anterior, ja que de totes maneres no teniu la contrasenya. (És possible que hàgiu de suprimir la cambra remota anterior si esteu al [[Preguntes freqüents#Quantes cambres remotes puc tenir?|límit de cambres]])
4. Espereu que el vostre dispositiu principal se sincronitzi. Observeu l'indicador de sincronització a la part inferior dreta de la pantalla fins que mostri una marca de verificació verda.
5. Connecteu cadascun dels vostres dispositius a la mateixa cambra remota recentment creada. En connectar-vos, se us mostrarà un avís sobre la fusió de cambres fortes; això és esperat i podeu continuar. Espereu que cada dispositiu se sincronitzi completament abans de passar al següent. Això redueix les possibilitats de problemes.
6. Ara tots els vostres dispositius haurien d'estar connectats a la nova cambra remota.

## Allotjament

### On allotgeu els servidors d'Obsidian Sync?

Els nostres centres de dades, alimentats per [DigitalOcean](https://www.digitalocean.com), ofereixen opcions d'allotjament de cambres remotes georegionals a les següents ubicacions:

> [!abstract] Regions de Sync
> **Automàtic**: El vostre centre de dades es tria basant-se en la ubicació de la vostra IP, en el moment en què el configureu per primera vegada.
> 
> **Àsia**: Singapur
> **Europa**: Frankfurt, Alemanya
> **Amèrica del Nord**: San Francisco, EUA
> **Oceania**: Sydney, Austràlia
^sync-geo-regions

### On puc trobar el meu servidor de Sync actual i on està allotjat?

Per localitzar el vostre servidor d'Obsidian Sync, seguiu aquests passos:
1. Aneu a **[[Configuració]]** → **Sync** → **Copia la informació de depuració**.
2. Enganxeu la informació copiada en una nota o fitxer.
3. Busqueu una línia similar a aquesta: `Host server: wss://sync-xx.obsidian.md`

Aquesta línia indica el servidor on s'allotja la vostra cambra remota. Per a més detalls sobre les ubicacions del servidor i el temps de funcionament, visiteu la nostra [pàgina d'estat](https://status.obsidian.md/).

## Xarxa i accés

### Gestionar l'accés a Obsidian Sync a la vostra xarxa

Per regular l'accés a Obsidian Sync a la vostra xarxa, heu de gestionar els següents dominis:

`sync-xx.obsidian.md`

En aquest cas, `xx` representa un número que va de `1 - 100`.

> [!tip] Si el vostre sistema de tallafocs ho admet, recomanem afegir a la llista blanca `sync-*.obsidian.md` per tenir en compte el creixement continu en el nombre de subdominis.

## Limitacions

Obsidian Sync està dissenyat per mantenir les vostres notes privades i segures. Per oferir una sincronització ràpida i fiable i un emmagatzematge eficient entre dispositius, fem alguns compromisos deliberats en com s'aplica el xifratge.

### Xifratge determinista del hash de fitxers

Xifrem els hash de fitxers de manera determinista: el mateix contingut de fitxer, utilitzant la mateixa clau de xifratge i sal, sempre produeix el mateix hash xifrat al servidor. Això ajuda Sync a detectar duplicats i evitar tornar a pujar o emmagatzemar dades idèntiques, cosa que estalvia amplada de banda i emmagatzematge remot, especialment en l'historial de versions o quan es repeteixen fitxers grans.

No obstant això, si un atacant compromet un servidor de Sync i té una manera independent de forçar un usuari a pujar fitxers de la seva elecció, aleshores l'atacant podria forçar l'usuari a pujar fitxers específics i determinar si el fitxer coincideix amb un fitxer que l'usuari hagi pujat anteriorment.

### Sense vinculació criptogràfica entre ruta i contingut

Algunes metadades no estan xifrades d'extrem a extrem: quin dispositiu va pujar o suprimir un fitxer, quan es va pujar i el *mapatge* entre rutes de fitxers xifrades i contingut xifrat. Aquestes dades són llegibles pel servidor perquè pugui encaminar els canvis, determinar l'historial de versions d'un fitxer i mantenir els dispositius sincronitzats.

Si un servidor de Sync es veiés compromès, un atacant podria manipular aquest mapatge, fent que el contingut d'un fitxer xifrat es lliurés sota una ruta de fitxer diferent. Això no revela les vostres dades en text sense format; romanen xifrades.
