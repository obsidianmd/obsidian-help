---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Moveu la vostra caixa forta de Sync a una regió diferent.
---
Quan crees una [[Cambres cuirassades locals i remotes|cambra remota]] a través d'[[Introducció a Obsidian Sync|Obsidian Sync]], les teves dades es xifren i s'emmagatzemen en un dels servidors regionals de Sync d'Obsidian. Aquesta guia explica com moure la teva cambra de Sync a un servidor regional diferent.

## Regions disponibles

Les regions següents estan disponibles amb Obsidian Sync. Recomanem utilitzar **Automàtic** o triar una ubicació propera a tu per reduir la latència i fer el procés de sincronització més ràpid.

![[Obsidian Sync/Seguretat i privacitat#^sync-geo-regions]]

## Registra la teva configuració

Quan connectes un dispositiu a la nova cambra remota, Sync pot utilitzar la configuració que tinguis activada en aquell moment. Si tens configuracions diferents en dispositius diferents, registra-les abans de començar. Per exemple, pot ser que no sincronitzis fitxers multimèdia grans al teu telèfon.

A cada dispositiu que utilitza la cambra remota, obre **[[Configuració]] → Sync** i registra aquesta configuració. Una captura de pantalla funciona bé.

- **Sincronització selectiva**
- **Configuració de sincronització de l'arca**
- **Carpetes excloses**
- Configuracions específiques del dispositiu, com ara **Nom del dispositiu** i **Resolució de conflictes**

Consulta [[Configuració de Sync i sincronització selectiva]] per saber què fa cada opció i quines estan activades per defecte.

## Canviar la regió de Sync

Per canviar la regió de la teva cambra remota, hauràs de recrear la teva cambra en un servidor de Sync diferent. Tingues en compte que també pots canviar de regió utilitzant l'assistent de migració de [[Millorar el xifratge de Sync]], si la teva cambra remota és en una versió més antiga.

> [!danger] Les migracions són destructives
> 
> **Sempre fes una [[Fes còpia de seguretat dels fitxers d'Obsidian|còpia de seguretat]] de la teva cambra forta abans de continuar amb una migració.**
> 
> Quan migres una cambra remota, les teves dades seran substituïdes. Això significa:
> 
> 1. Les dades remotes s'eliminaran dels servidors d'Obsidian, i les dades de la cambra forta es tornaran a pujar al seu lloc.
> 2. Tot l'[[Historial de versions|historial de versions]] de la cambra forta es perdrà.

![[Configurar Obsidian Sync#Desconnectar d'una cambra remota]]

Si tens el [[Plans i límits d'emmagatzematge|Pla Estàndard]], també hauràs de [[Configurar Obsidian Sync#Suprimir una cambra remota|suprimir la teva cambra remota]] abans de continuar.

![[Configurar Obsidian Sync#Crear una nova cambra remota]]

## Reconnecta els teus altres dispositius

Després que la nova cambra remota acabi de sincronitzar-se al teu primer dispositiu, canvia cada altre dispositiu que utilitzava la cambra remota antiga. Treballa amb un dispositiu a la vegada.

1. Al dispositiu, [[Configurar Obsidian Sync#Desconnectar d'una cambra remota|desconnecta't de la cambra remota antiga]].
2. [[Configurar Obsidian Sync#Sincronitzar una cambra remota en un altre dispositiu|Connecta't a la nova cambra remota]]. No seleccionis **Inicia la sincronització** encara.
3. Configura la **Sincronització selectiva**, la **Configuració de sincronització de l'arca** i les **Carpetes excloses** perquè coincideixin amb la configuració que has registrat per a aquest dispositiu.
4. Reinicia Obsidian. Al mòbil o tauleta, pot ser que hagis de forçar el tancament de l'aplicació.
5. Selecciona **Inicia la sincronització** o **Reprendre**, i espera fins que Sync acabi abans de passar al següent dispositiu.

A més, pots [[Configurar Obsidian Sync#Suprimir una cambra remota|suprimir la teva cambra remota antiga]] un cop hagis confirmat la transició a la teva nova cambra remota i la seva regió.
