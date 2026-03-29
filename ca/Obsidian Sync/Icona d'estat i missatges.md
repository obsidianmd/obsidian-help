---
permalink: sync/messages
publish: true
mobile: true
description: Aquesta pàgina explica les icones d'estat d'Obsidian Sync i proporciona detalls sobre el registre d'activitat de sincronització.
---
Obsidian Sync proporciona diversos elements per indicar l'estat de sincronització, principalment la [[#Icona d'estat de Sync]] i el [[#Registre d'activitat de Sync]]. Els detalls sobre el control de versions a Obsidian Sync es troben a la pàgina [[Historial de versions]].

## Icona d'estat de Sync

La icona d'estat de Sync es troba a la [[Barra d'estat]] a la versió d'escriptori i a la [[Barra lateral#Obrir barres laterals ocultes|barra lateral dreta]] al mòbil i tauleta. La icona reflecteix diversos estats de sincronització:

- ![[obsidian-icon-sync-synced.svg#icon]] **Sincronitzat**: Obsidian Sync ha sincronitzat completament els teus fitxers. Aquesta icona és normalment verda.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Sincronitzant**: Obsidian està actualitzant la cambra remota. Aquesta icona és normalment lila.
- ![[obsidian-icon-sync-paused.svg#icon]] **En pausa**: La sincronització s'ha posat en pausa, però Obsidian encara està connectat a la cambra remota. La icona és normalment lila.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Desconnectat**: El connector principal de Sync és actiu, però la [[Cambres cuirassades locals i remotes|cambra forta local]] no està connectada a una cambra remota. Aquesta icona és normalment vermella.

En fer clic o tocar la icona s'obre un menú contextual amb les opcions següents:
- ![[obsidian-icon-sync-paused.svg#icon]] Pausa (o ![[lucide-circle-play.svg#icon]] Reprendre si està en pausa)
- ![[lucide-history.svg#icon]] [[Historial de versions]] (En gris si no s'està visualitzant una nota)
- ![[lucide-align-left.svg#icon]] Obrir [[#Registre d'activitat de Sync|Registre de Sync]]
- ![[lucide-trash-2.svg#icon]] [[Historial de versions#Restaurar un fitxer eliminat|Fitxers eliminats]]
- ![[lucide-cog.svg#icon]] [[Configuració de Sync i sincronització selectiva|Configuració de Sync]]

## Registre d'activitat de Sync

Obsidian Sync inclou un registre de sincronització detallat que fa seguiment de totes les interaccions entre els teus fitxers locals i la cambra remota. El registre mostra pujades, baixades, supressions i qualsevol problema com conflictes de fusió o problemes de connectivitat.

**Accedir al registre d'activitat:**
- Fes clic a la icona d'estat de sincronització a la barra d'estat
- Ves a **[[Configuració]] → Sync → Registre d'activitat**
- Utilitza **Paleta d'ordres → Sync: Obre el registre d'activitat**

El registre proporciona marques de temps i detalls per a cada operació de sincronització, cosa que el fa útil per resoldre problemes de sincronització.

> [!warning] El registre de Sync no es conserva després de tancar Obsidian. Si trobes un problema, assegura't de copiar el registre _abans_ de tancar l'aplicació.

El registre categoritza els missatges en els tipus següents:

- [[#Missatges generals]]
- [[#Missatges d'error]]
- [[#Missatges d'omissió]]
- [[#Missatges del compte]]

Pots filtrar el registre de Sync per **Tots**, **Errors**, **Omesos** i **Conflictes de fusió**. A més, pots cercar al registre de Sync utilitzant la caixa de cerca a la finestra de Sync.

> [!summary] Hem inclòs a continuació alguns dels missatges més probables que hagueu trobat. La llista no és exhaustiva. Si teniu un problema i teniu un missatge del registre de sincronització del qual no n'esteu segurs, [[Ajuda i suport#Contactar amb el suport d'Obsidian|contacteu amb el suport d'Obsidian]].

### Missatges generals

Aquests són missatges habituals del dia a dia que podeu trobar.

**Connecting to server**
Obsidian està intentant connectar-se al [[Obsidian Sync/Seguretat i privacitat#On puc trobar el meu servidor de Sync actual i on està allotjat?|servidor de Sync]] de la teva cambra remota.

**Connected to server. Detecting changes...**
Obsidian ha establert una connexió i està comparant la cambra forta local amb la cambra remota per determinar si calen canvis.

> [!info] Aquest missatge també pot indicar altres problemes potencials de Sync. Si el veus repetidament i creus que encara hi ha elements per sincronitzar, [[Ajuda i suport#Contactar amb el suport d'Obsidian|contacta amb el suport d'Obsidian]].

**Fully synced**
- Les cambres fortes local i remota estan completament sincronitzades.

**Merging conflicted file**
S'ha detectat un conflicte durant la sincronització i el fitxer s'ha fusionat en lloc de sobreescriure's. Consulta [[Resolució de problemes d'Obsidian Sync#Resolució de conflictes|resolució de conflictes]] per a més informació. Si la fusió no és desitjada, pots restaurar versions anteriors mitjançant l'[[Historial de versions]] o la [[Recuperació de fitxers]].

**Rejected server change**
Els canvis a la cambra remota són més antics que la versió al teu dispositiu local, de manera que es conserva la versió local i s'ignora el canvi remot.

### Missatges d'error

Aquests són missatges que detallen un error en la sincronització d'un fitxer.

**Out of memory**
Aquest problema es produeix normalment en dispositius mòbils quan no hi ha prou espai d'emmagatzematge o memòria disponible per baixar un fitxer. És més habitual amb fitxers grans, com ara vídeos.

### Missatges d'omissió

Aquests són missatges que detallen què s'ha omès, i potencialment per què.

**Unable to download file with illegal name**

El fitxer conté un [caràcter especial o convenció de noms](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) que no és permès al sistema operatiu receptor. Per facilitar-ho, pots canviar el nom del fitxer al dispositiu d'origen per eliminar tots els caràcters especials excepte `-` i `_`.

Tingues en compte que això també inclou fitxers amb múltiples punts `.` al seu nom en dispositius Android.

### Missatges del compte

Aquests són missatges relacionats amb un canvi en la teva subscripció o compte.

**Vault limit exceeded**
El teu compte ha excedit la [[Preguntes freqüents#Quina mida pot tenir cada cambra remota|mida màxima d'emmagatzematge]]. Els fitxers adjunts i l'historial de versions contribueixen a aquesta mida. Fins i tot si la teva cambra forta sembla més petita que el límit, les versions i fitxers antics poden fer que el superi.

Per reduir la mida de la cambra forta:
1. Obre **[[Configuració]] → Sync**.
2. Utilitza les opcions sota **Mida de l'arca per sobre del límit** per eliminar fitxers grans.

**Vault not found**
`{"res":"err","msg":"Vault not found."}`

Aquest error pot produir-se en aquests casos:

1. La cambra forta s'ha eliminat des d'un altre dispositiu.
2. La subscripció de Sync ha estat inactiva durant més de 30 dies, provocant l'eliminació de la cambra remota.
3. La subscripció s'ha cancel·lat o reemborsat, resultant en l'eliminació de la cambra remota.

En aquests casos, hauràs de [[Configurar Obsidian Sync#Desconnectar-se d'una cambra remota|desconnectar-te de la cambra remota]] i [[Configurar Obsidian Sync#Crear una nova cambra remota|crear una nova cambra remota]], assegurant que les teves dades locals es conserven.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**
El teu compte ara es troba en un estat completament expirat perquè no hem pogut processar el pagament registrat.

Per continuar utilitzant Obsidian Sync, hauràs de tornar a subscriure't des del [teu compte](https://obsidian.md/account/sync).

**Failed to authenticate: Not logged in**

Obsidian Sync ha detectat que no has iniciat la sessió. Hauràs de tornar a iniciar la sessió a l'aplicació a la secció [[Configuració#General#Compte|Compte]] de la **[[Configuració]]**.

En alguns casos, un connector de la comunitat també pot impedir que Obsidian Sync pugui confirmar l'estat d'inici de sessió del teu compte. Si us plau, entra al **[[Seguretat dels connectors#Mode restringit|mode restringit]]** i torna-ho a provar.

### Missatges de xarxa

**Disconnected from server**
`Unable to connect to server`

Obsidian Sync s'ha desconnectat del servidor de Sync per un motiu desconegut. Sync intentarà reconnectar-se al servidor periòdicament.

A iOS, aquest missatge es mostra com el següent error:
`Null is not an object (evaluating 'this.socket.send')`

Significa exactament el mateix que el missatge `Unable to connect to server`, i no és de cap manera indicació que hi hagi alguna altra cosa malament.
