---
permalink: backup
---
Si encara no heu fet còpia de seguretat del vostre ordinador, comenceu ara! El connector [[Recuperació de fitxers]] d'Obsidian és útil però limitat. Només pot recuperar una certa quantitat de dades i emmagatzema la informació de recuperació per dispositiu. Per a una protecció més robusta, us recomanem que implementeu un sistema de còpia de seguretat adequat.

**Per què fer còpia de seguretat de les vostres dades?**

Per defecte, Obsidian emmagatzema les vostres notes **localment** al vostre dispositiu, no al núvol. Això vol dir que les [dades són completament vostres](https://obsidian.md/about), cosa que us dona control sobre elles. No obstant això, l'emmagatzematge local pot veure's afectat per problemes com la corrupció o la pèrdua de dades. No és mai una qüestió de si passarà, sinó de quan. Fer còpia de seguretat de les vostres dades protegeix contra aquestes inevitabilitats i assegura que mantingueu el control de les vostres notes.

## La sincronització no és una còpia de seguretat

Serveis com [[Introducció a Obsidian Sync|Obsidian Sync]], iCloud, OneDrive i Dropbox us ajuden a sincronitzar les vostres notes entre diferents dispositius. Tot i que poden oferir funcionalitats com la [[Historial de versions|restauració de notes]], **no estan dissenyats per a còpies de seguretat**. La sincronització manté les vostres notes actualitzades, però no protegeix contra la pèrdua de dades.

- **Sincronització:** La sincronització assegura que els vostres fitxers siguin els mateixos a tots els dispositius. Quan canvieu un fitxer en un dispositiu, s'actualitza a tots els dispositius sincronitzats. Els serveis de sincronització no tenen un dispositiu "principal".
- **Còpia de seguretat:** Una còpia de seguretat desa una còpia de les vostres dades en una ubicació diferent per ajudar a recuperar-les en cas de pèrdua de dades o corrupció. Les còpies de seguretat no estan pensades per a actualitzacions en temps real ni per a col·laboració.

Per fer correctament una còpia de seguretat de la vostra cambra forta, utilitzeu una eina dedicada de còpia de seguretat que creï una còpia unidireccional de les vostres dades. Aquesta eina enviarà les vostres dades a una ubicació segura de còpia de seguretat sense canviar les dades al vostre dispositiu.

Si utilitzeu múltiples dispositius amb sincronització, trieu **un dispositiu** com el vostre dispositiu de còpia de seguretat. Normalment és el vostre dispositiu principal, el que més utilitzeu. Tingueu en compte que la majoria de serveis de sincronització no reconeixen cap dispositiu com a "principal"; aquest és només un concepte per ajudar-vos a gestionar les còpies de seguretat.

> [!Example] Utilitzeu Obsidian Sync al vostre portàtil, tauleta, telèfon i ordinador de sobretaula de la feina. Utilitzeu principalment la vostra cambra forta a l'ordinador de sobretaula de la feina, de vegades al portàtil, i rarament a la tauleta o el telèfon. En aquest cas, l'ordinador de sobretaula de la feina seria el vostre "dispositiu principal" per a la còpia de seguretat.

## Utilitzar connectors de la comunitat

Tot i que l'equip d'Obsidian no pot recomanar oficialment cap connector específic, reconeixem dos connectors de la comunitat que s'han fet populars entre els usuaris per fer còpia de seguretat dels seus fitxers:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Utilitzeu aquest connector per fer còpia de seguretat de la vostra cambra forta fent commits del seu contingut a un [repositori Git](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). És una manera efectiva de controlar les versions de les vostres notes i assegurar-ne la seguretat en un servidor remot. No obstant això, tingueu en compte que les vostres dades es poden emmagatzemar en una [[#Utilitzar serveis al núvol|plataforma d'allotjament externa]] amb aquest mètode.
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Aquest connector us permet crear còpies locals de la vostra cambra forta en una carpeta que trieu, amb opcions d'arxivament. Fins i tot podeu utilitzar una carpeta de sincronització, com una carpeta de Dropbox, per combinar còpies de seguretat locals i al núvol. Aquest mètode **combina bé** amb les opcions de còpia de seguretat descrites a continuació.

## Utilitzar serveis al núvol

> [!info] No es recomana que mantingueu la ubicació de la vostra cambra forta al servei de còpia de seguretat escollit.

Mantenir la vostra còpia de seguretat al núvol és una alternativa i un complement a l'emmagatzematge físic de dades, en lloc d'un disc dur extern o un llapis USB. Un disc dur extern o un llapis USB es poden perdre o fer malbé. El principal avantatge d'emmagatzemar fitxers al núvol és que estan disponibles en qualsevol moment i des de qualsevol lloc. L'inconvenient és que la majoria de serveis de còpia de seguretat són propietat d'una empresa privada.

En termes de seguretat, sempre heu de prestar molta atenció a l'accés i la seguretat amb les còpies de seguretat al núvol. [Worldbackupday](https://www.worldbackupday.com/en) manté una llista actualitzada de serveis de còpia de seguretat en línia que podeu considerar.

## Utilitzar unitats externes

**Discs durs i unitats SSD**
Les còpies de seguretat en discs durs externs segueixen sent valuoses en un món cada vegada més basat en el núvol, i s'utilitzen principalment per a l'emmagatzematge de dades i les còpies de seguretat d'ordinadors. El principal desavantatge d'una unitat externa és que es pot espatllar o perdre. El principal avantatge és que l'espai d'emmagatzematge només cal comprar-lo una vegada. L'ús d'un disc dur extern sovint es combina amb una [[#Utilitzar còpies de seguretat de l'ordinador|còpia de seguretat de l'ordinador]].

**Llapis de memòria USB**
Els llapis de memòria (també anomenats memòries USB o pen drives) són un mètode senzill i efectiu per a còpies de seguretat ràpides.

1. Inseriu el llapis de memòria al vostre ordinador o portàtil.
2. Assegureu-vos que el dispositiu és reconegut i muntat al vostre sistema de fitxers. Si cal, formateu el llapis de memòria per a ser compatible amb el vostre sistema de fitxers.
3. Copieu la carpeta de la vostra cambra forta des de la seva ubicació actual al llapis de memòria.
4. Desmunteu el llapis de memòria de manera segura.
5. Retireu el llapis de memòria del vostre dispositiu.

**Còpia de seguretat NAS**
Per a usuaris experimentats, fer còpia de seguretat de dades en un servidor NAS (Network Attached Storage) és un mètode bo i segur, ja que disposa de múltiples discs durs i mecanismes addicionals de recuperació.

> [!tip] Si la vostra unitat externa conté informació sensible, es recomana mantenir la unitat externa en un lloc segur, com ara una habitació protegida.

## Utilitzar còpies de seguretat de l'ordinador

El vostre sistema operatiu ofereix la capacitat d'ajudar a crear còpies de seguretat, ja sigui en línia al núvol o en una unitat externa.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Còpia de seguretat amb OneDrive o una unitat externa.
- **[Mac](https://support.apple.com/en-us/104984)**: Còpia de seguretat a un dispositiu extern amb Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` a un directori o unitat que trieu.

## Passos següents

Aquesta pàgina d'ajuda proporciona una breu visió general de les opcions de còpia de seguretat, però no és exhaustiva. Per a informació més detallada, visiteu [Worldbackupday.com](https://www.worldbackupday.com/en) o pregunteu a altres usuaris d'Obsidian a [la nostra comunitat](https://obsidian.md/community) sobre les seves estratègies de còpia de seguretat!
