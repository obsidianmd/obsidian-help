---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Obsidian Sync manté un registre de tots els canvis fets a les vostres notes i comprova regularment si hi ha actualitzacions i crea noves versions de les vostres notes.
---
[[Introducció a Obsidian Sync|Obsidian Sync]] comprova regularment si hi ha actualitzacions als vostres [[Configuració de Sync i sincronització selectiva|fitxers sincronitzats]], mantenint un registre de qualsevol canvi. Aquests s'emmagatzemen com a noves entrades a l'[[#Historial de versions]]. Aquesta informació es pot consultar de diverses maneres:

- [[#Historial de Sync]]
- [[#Historial de versions]]

Tot i que no forma part d'Obsidian Sync, també hi ha disponible un historial de versions local a cada dispositiu si el connector [[Recuperació de fitxers]] està activat.

## Historial de Sync

La funció d'historial de Sync (o barra lateral de Sync), introduïda a la versió 1.7 d'Obsidian, us permet veure ràpidament les notes i els adjunts creats o modificats recentment que s'han sincronitzat. També podeu pensar-hi com un historial d'_edició_.

A la barra lateral, podeu seleccionar un element per obrir el seu fitxer a la finestra activa. Els elements també tenen menús contextuals que us permeten realitzar accions com moure el fitxer o veure el seu [[#Notes i adjunts|Historial de versions]].

> [!compatibility] Funció exclusiva d'escriptori
> Quan passeu el cursor per sobre d'un fitxer sincronitzat a la barra lateral, podeu veure qui va editar el fitxer per última vegada. Això és especialment útil si esteu [[Col·laborar en una cambra cuirassada compartida|col·laborant]] en una cambra forta compartida.

> [!tip] 
> La configuració i els elements eliminats no apareixeran a la barra lateral de l'historial de Sync. Aquests es poden trobar a l'[[#Notes i adjunts|Historial de versions]] en el seu lloc.

### Mostra l'historial de Sync

Quan activeu el connector principal [[Introducció a Obsidian Sync|Sync]], l'historial de Sync s'activa automàticament però no apareix a la barra lateral per defecte. Haureu d'afegir-lo manualment mitjançant una ordre o una drecera de teclat.

#### Activar mitjançant la paleta d'ordres

> [!info] Aquesta opció requereix que el connector principal [[Paleta d'ordres]] estigui activat.

**Escriptori/Tauleta** ![[lucide-monitor-check.svg#icon]]

1. Obriu la **Paleta d'ordres**. ![[lucide-terminal.svg#icon]]
2. Escriviu "Sync".
3. Seleccioneu l'opció "Sync: Mostra l'historial de Sync".

L'historial de Sync apareixerà a la [[Barra lateral|barra lateral dreta]].

**Mòbil** ![[obsidian-icon-smartphone.svg#icon]]

1. Obriu la [[Cinta]] ![[lucide-menu.svg#icon]].
2. Obriu la **Paleta d'ordres**. ![[lucide-terminal.svg#icon]]
3. Escriviu "Sync".
4. Seleccioneu l'opció "Sync: Mostra l'historial de Sync".

L'historial de Sync apareixerà com una opció desplegable a la [[Barra lateral|barra lateral dreta]].

#### Activar mitjançant drecera de teclat

1. Obriu la **[[Configuració]]**.
2. A la categoria **Opcions**, seleccioneu **Tecles d'accés ràpid**.
3. A la barra de cerca de dreceres de teclat, escriviu "Sync".
4. Al costat de "Sync: Mostra l'historial de Sync", assigneu la drecera de teclat que preferiu.

## Historial de versions

A més de l'[[#Historial de Sync]], Obsidian també manté un historial de versions per restaurar notes i adjunts. Si elimineu accidentalment una nota o voleu tornar a una versió anterior, podeu restaurar-la des de l'historial de versions.

El període de retenció del vostre historial de versions depèn del vostre [[Plans i límits d'emmagatzematge|pla d'Obsidian Sync]]. Amb el pla Standard, les notes es conserven durant 1 mes, mentre que amb el pla Plus es conserven durant 12 mesos. Després d'aquest període, les versions més antigues de les vostres notes s'eliminen.

Per als [[Fitxers adjunts|adjunts]], les versions antigues s'emmagatzemen durant <u>dues setmanes</u>.

![[Col·laborar en una cambra cuirassada compartida#^version-history-image]]

### Notes i adjunts

El procés per restaurar tant notes com adjunts és el mateix.

#### Veure l'historial de versions d'un fitxer

**Escriptori/Tauleta** ![[lucide-monitor-check.svg#icon]]
1. A l'**Explorador de fitxers**, seleccioneu la nota que voleu restaurar.
2. Seleccioneu **Obre l'historial de versions**.
3. Seleccioneu la versió de la nota que voleu veure a l'esquerra. El contingut es mostrarà a la dreta.

**Mòbil** ![[obsidian-icon-smartphone.svg#icon]]
1. A l'**Explorador de fitxers**, seleccioneu la nota que voleu restaurar.
2. Premeu llargament per obrir el menú contextual.
3. Seleccioneu **Obre l'historial de versions**.
4. Al menú emergent, seleccioneu la versió de la nota que voleu veure.
5. Un cop seleccionat, el contingut de la nota estarà disponible per revisar.

#### Veure l'historial de versions d'un fitxer eliminat o reanomenat

1. Obriu la **[[Configuració]]**.
2. A la barra lateral, sota **Connectors principals***, seleccioneu **Sync**.
3. Al costat de **Fitxers eliminats**, seleccioneu **Vista**.
4. Seleccioneu la nota de la qual voleu veure l'historial de versions.
5. A la finestra emergent de l'historial de versions, seleccioneu la versió de la nota que voleu veure a l'esquerra.

#### Restaurar una versió anterior d'un fitxer

**Escriptori/Tauleta** ![[lucide-monitor-check.svg#icon]]
1. A l'**Explorador de fitxers**, seleccioneu la nota que voleu restaurar.
2. Seleccioneu **Obre l'historial de versions**.
3. Seleccioneu la versió de la nota que voleu restaurar a l'esquerra. El contingut es mostrarà a la dreta.
4. Seleccioneu el botó **Restaura**.
5. El contingut de la nota se substituirà amb la versió restaurada.

**Mòbil** ![[obsidian-icon-smartphone.svg#icon]]
1. A l'**Explorador de fitxers**, seleccioneu la nota que voleu restaurar.
2. Premeu llargament per obrir el menú contextual.
3. Seleccioneu **Obre l'historial de versions**.
4. Al menú emergent, seleccioneu la versió de la nota que voleu restaurar.
5. Un cop seleccionat, el contingut de la nota estarà disponible per revisar.
6. Seleccioneu el botó **Restaura**.
7. El contingut de la nota se substituirà amb la versió restaurada.

#### Restaurar un fitxer eliminat

1. Obriu la **[[Configuració]]**.
2. A la barra lateral, sota **Connectors principals***, seleccioneu **Sync**.
3. Al costat de **Fitxers eliminats**, seleccioneu **Vista**.
4. Trieu la nota que voleu restaurar.
5. A la llista de versions a l'esquerra, seleccioneu la versió que voleu restaurar.
6. Seleccioneu el botó **Restaura** a la dreta.
7. La nota es restaurarà a la seva ubicació original al sistema de fitxers.

> [!tip] Podeu seleccionar múltiples notes amb la **restauració massiva** seleccionant les caselles de selecció o usant `shift+clic`. Aquests fitxers no es podran revisar en aquest menú.

### Historial de la configuració

Obsidian Sync també fa un seguiment dels canvis fets a la configuració de la vostra cambra forta.

#### Veure l'historial de versions d'una configuració

1. Obriu la **[[Configuració]]**.
2. A la barra lateral, sota **Connectors principals***, seleccioneu **Sync**.
3. Navegueu fins a **Configuració de sincronització de l'arca**.
4. Seleccioneu el botó **Vista** al costat de **Historial de versions de la [[Configuració]]**.
5. A la finestra emergent de **Fitxer de [[Configuració]]**, trieu un fitxer de configuració que vulgueu veure.

#### Restaurar una versió anterior d'una configuració

1. Obriu la **[[Configuració]]**.
2. A la barra lateral, sota **Connectors principals**, seleccioneu **Sync**.
3. Navegueu fins a **Configuració de sincronització de l'arca**.
4. Seleccioneu el botó **Vista** al costat de **Historial de versions de la [[Configuració]]**.
5. A la finestra emergent de **Fitxer de [[Configuració]]**, trieu un fitxer de configuració que vulgueu veure.
6. A la finestra de canvis, seleccioneu el botó **Restaura**.
7. Recarregueu o reinicieu Obsidian perquè la configuració tingui efecte. Per a més detalls, consulteu les instruccions a [[Configurar Obsidian Sync#Ajusta la configuració d'Obsidian Sync|Ajustar la configuració d'Obsidian Sync]].
